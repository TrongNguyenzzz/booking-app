import React from "react";
import "./guestLove.css";

import review1 from "../../assets/reviewImg/review1.png";
import review2 from "../../assets/reviewImg/review2.png";
import review3 from "../../assets/reviewImg/review3.png";
import review4 from "../../assets/reviewImg/review4.png";

const GuestLove = () => {
    return (
        <div className="fp">

            <div className="fpItem">
                <img className = "fpImg" src = { review3 } alt = ""/>
                <span className="fpName"> Lovely hometown </span>
                <span className="fpCity"> Hà Nội </span>
                <span className="fpPrice"> Starting from $50 </span>
                <div className="fpRating">
                    <button> 10.0 </button>
                    <span> Excellent </span>
                </div>
            </div>

            <div className="fpItem">
                <img className = "fpImg" src = { review1 } alt = ""/>
                <span className="fpName"> Tucson guest house </span>
                <span className="fpCity"> Tucson </span>
                <span className="fpPrice"> Starting from $150 </span>
                <div className="fpRating">
                    <button> 8.5 </button>
                    <span> Very Good </span>
                </div>
            </div>

            <div className="fpItem">
                <img className = "fpImg" src = { review2 } alt = ""/>
                <span className="fpName"> Duong guest house </span>
                <span className="fpCity"> Budapest </span>
                <span className="fpPrice"> Starting from $120 </span>
                <div className="fpRating">
                    <button> 9.5 </button>
                    <span> Excellent </span>
                </div>
            </div>
        
            <div className="fpItem">
                <img className = "fpImg" src = { review4 } alt = ""/>
                <span className="fpName"> Villager guest house </span>
                <span className="fpCity"> Đông Hà </span>
                <span className="fpPrice"> Starting from $30 </span>
                <div className="fpRating">
                    <button> 9.5 </button>
                    <span> Excellent </span>
                </div>
            </div>
        </div>
    )
}

export default GuestLove;