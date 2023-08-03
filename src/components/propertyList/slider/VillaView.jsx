import React, { useState } from "react";
import "../propertyList.css";
import { Villaslider } from "./villaSlider";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

function Villaview() {
    const [villa, setVilla] = useState(0);

    return (
        <div className="hotelview-outer">
            <div className="hotelview-inner" style={{ backgroundImage: `url(${Villaslider[villa].img})`}}>
                <div className="left" onClick={() => { 
                    villa > 0 && setVilla(villa-1);}}>
                    <AiOutlineArrowLeft style={{fontSize: "120%"}}/>
                </div>
                    
                <div className="center"></div>

                <div className="right" onClick={() => { 
                    villa < Villaslider.length - 1 && setVilla(villa+1);}}>
                    <AiOutlineArrowRight style={{fontSize: "120%"}}/>
                </div>
            </div>
        </div>
    )
}

export default Villaview;