import "./searchItem.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { WishlistContext } from "../../context/WishlistContext";
import { AuthContext } from "../../context/AuthContext";

const SearchItem = ({item}) => {
    const { user } = useContext(AuthContext);
    const { isInWishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

    const inWishlist = user ? isInWishlist(item._id) : false;

    const handleWishlistToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!user) return;
        if (inWishlist) {
            removeFromWishlist(item._id);
        } else {
            addToWishlist(item);
        }
    };

    return (
        <div className="searchItem">
            <img className = "siImg" src = { item.photos[0] } alt = ""/>
            <div className="siDesc">
                <h1 className="siTitle"> {item.name} </h1>
                <span className="siDistance"> {item.distance} from center </span>
                <span className="siTaxiOp"> Free airport taxi </span>
                <span className="siSubtitle"> {item.type} </span>
                <span className="siFeatures"> {item.subSearch} </span>
                <span className="siCancelOp"> Free cancellation </span>
                <span className="siCancelOpSubtitle"> Save the great price today! </span>
            </div>
            <div className="siDetails">
                <div className="siDetailTexts">
                    <button className="siCheckButton1">Rating: {item.rating}</button>
                </div>

                <div className="siDetailTexts">
                    {user && (
                        <button
                            className="siWishlistBtn"
                            onClick={handleWishlistToggle}
                            aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
                        >
                            {inWishlist ? (
                                <AiFillHeart className="siHeartFilled" />
                            ) : (
                                <AiOutlineHeart className="siHeartOutline" />
                            )}
                        </button>
                    )}
                    <span className="siPrice">${item.cheapestPrice}</span>
                    <span className="siTaxOp">Include taxes and fees </span>
                    <Link to={`/hotels/${item._id}`}>
                        <button className="siCheckButton"> See availability </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchItem;
