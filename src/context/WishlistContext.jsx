import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

const INITIAL_STATE = {
    wishlist: [],
    loading: false,
    error: null,
};

export const WishlistContext = createContext(INITIAL_STATE);

const WishlistReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_START":
            return { ...state, loading: true, error: null };
        case "FETCH_SUCCESS":
            return { wishlist: action.payload, loading: false, error: null };
        case "FETCH_FAILURE":
            return { ...state, loading: false, error: action.payload };
        case "ADD_ITEM":
            return { ...state, wishlist: [action.payload, ...state.wishlist] };
        case "REMOVE_ITEM":
            return {
                ...state,
                wishlist: state.wishlist.filter(
                    (item) => item.hotelId !== action.payload
                ),
            };
        case "RESET":
            return INITIAL_STATE;
        default:
            return state;
    }
};

export const WishlistContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(WishlistReducer, INITIAL_STATE);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            fetchWishlist();
        } else {
            dispatch({ type: "RESET" });
        }
    }, [user]);

    const fetchWishlist = async () => {
        if (!user) return;
        dispatch({ type: "FETCH_START" });
        try {
            const res = await axios.get(
                `http://localhost:5050/api/wishlist/${user.details._id}`
            );
            dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "FETCH_FAILURE", payload: err.message });
        }
    };

    const addToWishlist = async (hotel) => {
        if (!user) return;
        try {
            const res = await axios.post(
                `http://localhost:5050/api/wishlist/${user.details._id}`,
                {
                    hotelId: hotel._id,
                    hotelName: hotel.name,
                    hotelPhoto: hotel.photos?.[0] || "",
                    hotelCity: hotel.city,
                    hotelPrice: hotel.cheapestPrice,
                    hotelRating: hotel.rating,
                }
            );
            dispatch({ type: "ADD_ITEM", payload: res.data });
        } catch (err) {
            // 409 means already in wishlist, silently ignore
            if (err.response?.status !== 409) {
                console.error("Error adding to wishlist:", err);
            }
        }
    };

    const removeFromWishlist = async (hotelId) => {
        if (!user) return;
        try {
            await axios.delete(
                `http://localhost:5050/api/wishlist/${user.details._id}/${hotelId}`
            );
            dispatch({ type: "REMOVE_ITEM", payload: hotelId });
        } catch (err) {
            console.error("Error removing from wishlist:", err);
        }
    };

    const isInWishlist = (hotelId) => {
        return state.wishlist.some((item) => item.hotelId === hotelId);
    };

    return (
        <WishlistContext.Provider
            value={{
                wishlist: state.wishlist,
                loading: state.loading,
                error: state.error,
                addToWishlist,
                removeFromWishlist,
                isInWishlist,
                fetchWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};
