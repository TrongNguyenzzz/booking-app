import React from "react";
import "./guestLove.css";

import review1 from "../../assets/reviewImg/review1.png";
import review2 from "../../assets/reviewImg/review2.png";
import review3 from "../../assets/reviewImg/review3.png";
import review4 from "../../assets/reviewImg/review4.png";

import { useNavigate } from "react-router-dom";

const GuestLove = () => {

    const navigate = useNavigate();

    return (
        <div className="fp">

            <div className="fpItem">
                <img className = "fpImg" src = { review3 } alt = "" onClick={() => navigate("/hotels/64d2b97f04c67158a02f18c8")}/>
                <span className="fpName"> Lovely Hometown </span>
                <span className="fpCity"> Hà Nội </span>
                <span className="fpPrice"> Starting from $180 </span>
                <div className="fpRating">
                    <button> 10.0 </button>
                    <span> Excellent </span>
                </div>
            </div>

            <div className="fpItem">
                <img className = "fpImg" src = { review1 } alt = "" onClick={() => navigate("/hotels/64e2a6df2ef62602b2204168")}/>
                <span className="fpName"> Tucson Guest House </span>
                <span className="fpCity"> Tucson </span>
                <span className="fpPrice"> Starting from $150 </span>
                <div className="fpRating">
                    <button> 8.5 </button>
                    <span> Very Good </span>
                </div>
            </div>

            <div className="fpItem">
                <img className = "fpImg" src = { review2 } alt = "" onClick={() => navigate("/hotels/64e2b1f92ef62602b2204173")}/>
                <span className="fpName"> Duong Guest House </span>
                <span className="fpCity"> Budapest </span>
                <span className="fpPrice"> Starting from $120 </span>
                <div className="fpRating">
                    <button> 9.5 </button>
                    <span> Excellent </span>
                </div>
            </div>
        
            <div className="fpItem">
                <img className = "fpImg" src = { review4 } alt = "" onClick={() => navigate("/hotels/64e2b52a2ef62602b2204177")}/>
                <span className="fpName"> Villager Guest House </span>
                <span className="fpCity"> Đông Hà </span>
                <span className="fpPrice"> Starting from $100 </span>
                <div className="fpRating">
                    <button> 9.5 </button>
                    <span> Excellent </span>
                </div>
            </div>
        </div>
    )
}

export default GuestLove;