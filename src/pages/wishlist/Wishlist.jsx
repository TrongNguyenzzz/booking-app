import React, { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import WishlistCard from "./WishlistCard";
import { AuthContext } from "../../context/AuthContext";
import { WishlistContext } from "../../context/WishlistContext";
import { useNavigate } from "react-router-dom";
import "./wishlist.css";

const Wishlist = () => {
    const { user } = useContext(AuthContext);
    const { wishlist, loading } = useContext(WishlistContext);
    const navigate = useNavigate();

    if (!user) {
        return (
            <div>
                <Navbar />
                <Header type="list" />
                <div className="wishlistContainer">
                    <div className="wishlistEmpty">
                        <h2>Please log in to view your wishlist</h2>
                        <button
                            className="wishlistLoginBtn"
                            onClick={() => navigate("/login")}
                        >
                            Log in
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="wishlistContainer">
                <div className="wishlistContent">
                    <h1>{user.details.username}'s Wishlist</h1>
                    <p className="wishlistSubtitle">
                        {wishlist.length} saved {wishlist.length === 1 ? "property" : "properties"}
                    </p>
                    {loading && <p>Loading your wishlist...</p>}
                    {!loading && wishlist.length === 0 && (
                        <div className="wishlistEmpty">
                            <h2>Your wishlist is empty</h2>
                            <p>Start saving hotels you love by clicking the heart icon!</p>
                            <button
                                className="wishlistBrowseBtn"
                                onClick={() => navigate("/")}
                            >
                                Browse hotels
                            </button>
                        </div>
                    )}
                    {!loading && wishlist.length > 0 && (
                        <div className="wishlistGrid">
                            {wishlist.map((item) => (
                                <WishlistCard key={item._id} item={item} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Wishlist;
