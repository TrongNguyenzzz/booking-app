import "./searchItem.css";
import { Link } from "react-router-dom";

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
                    <button className="siCheckButton1">Rating: {item.rating}</button>
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