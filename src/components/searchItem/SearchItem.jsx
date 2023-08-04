import "./searchItem.css";
import hotel from "../../assets/propertyImg/hotel-view/hotel1.png";

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img className = "siImg" src = { hotel } alt = ""/>
            <div className="siDesc">
                <h1 className="siTitle"> Tower Hotel </h1>
                <span className="siDistance"> 500m from center </span>
                <span className="siTaxiOp"> Free airport taxi </span>
                <span className="siSubtitle"> Studio Apartment with Air Conditioning </span>
                <span className="siFeatures"> Entire studio * 1 bathroom * 1 full bed </span>
                <span className="siCancelOp"> Free cancellation </span>
                <span className="siCancelOpSubtitle"> Save the great price today! </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span> Rating </span>
                    <button> 9.0 </button>
                </div>

                <div className="siDetailTexts">
                    <span className="siPrice">$120</span>
                    <span className="siTaxOp">Include taxes and fees </span>
                    <button className="siCheckButton"> See availability </button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem;