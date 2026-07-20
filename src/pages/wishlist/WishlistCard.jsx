import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { WishlistContext } from "../../context/WishlistContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./wishlist.css";

const WishlistCard = ({ item }) => {
    const { removeFromWishlist } = useContext(WishlistContext);
    const navigate = useNavigate();

    const handleRemove = async (e) => {
        e.stopPropagation();
        await removeFromWishlist(item.hotelId);
        toast.success("Removed from wishlist!", {
            position: "top-right",
            autoClose: 3000,
            theme: "light",
        });
    };

    const handleViewHotel = () => {
        navigate(`/hotels/${item.hotelId}`);
    };

    return (
        <div className="wishlistCard" onClick={handleViewHotel}>
            <div className="wishlistCardImgContainer">
                {item.hotelPhoto ? (
                    <img
                        className="wishlistCardImg"
                        src={item.hotelPhoto}
                        alt={item.hotelName}
                    />
                ) : (
                    <div className="wishlistCardImgPlaceholder">No Image</div>
                )}
                <button
                    className="wishlistRemoveBtn"
                    onClick={handleRemove}
                    aria-label="Remove from wishlist"
                >
                    <AiFillHeart className="wishlistHeartIcon" />
                </button>
            </div>
            <div className="wishlistCardInfo">
                <h3 className="wishlistCardName">{item.hotelName}</h3>
                {item.hotelCity && (
                    <span className="wishlistCardCity">{item.hotelCity}</span>
                )}
                <div className="wishlistCardBottom">
                    {item.hotelRating != null && (
                        <span className="wishlistCardRating">
                            Rating: {item.hotelRating}/10
                        </span>
                    )}
                    {item.hotelPrice != null && (
                        <span className="wishlistCardPrice">
                            From ${item.hotelPrice}/night
                        </span>
                    )}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default WishlistCard;
