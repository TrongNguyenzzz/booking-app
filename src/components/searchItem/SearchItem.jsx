import "./searchItem.css";
import { Link } from "react-router-dom";
import StarRating from "../starRating/StarRating";

const SearchItem = ({item}) => {
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
                    <div className="siRatingDisplay">
                        <button className="siCheckButton1">{item.rating ? item.rating : "N/A"}</button>
                        <StarRating rating={Math.round(item.rating || 0)} maxStars={10} size={14} />
                    </div>
                </div>

                <div className="siDetailTexts">
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
