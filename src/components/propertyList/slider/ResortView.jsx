import React, { useState } from "react";
import { ResortSlider } from "./resortSlider";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "../propertyList.css";

function Resortview() {
    const [temp, setTemp] = useState(0);

    return (
        <div className="hotelview-outer">
            <div className="hotelview-inner" style={{ backgroundImage: `url(${ResortSlider[temp].img})`}}>
                <div className="left" onClick={() => { 
                    temp > 0 && setTemp(temp-1);}}>
                    <AiOutlineArrowLeft style={{fontSize: "120%"}}/>
                </div>
                    
                <div className="center"></div>

                <div className="right" onClick={() => { 
                    temp < ResortSlider.length - 1 && setTemp(temp+1);}}>
                    <AiOutlineArrowRight style={{fontSize: "120%"}}/>
                </div>
            </div>
        </div>
    )
}

export default Resortview;