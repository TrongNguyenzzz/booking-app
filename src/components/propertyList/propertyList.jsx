import React from "react";
import "./propertyList.css";
import Hotelview from "./slider/HotelView";
import VillaView from "./slider/VillaView";
import Apartmentview from "./slider/ApartmentView";
import Resortview from "./slider/ResortView";

const PropertyList = () => {
    return (
        <div className="pList">
            <div className="pListItem">
                <Hotelview/>
                <div className="plistTitle">
                    <h1> Hotels </h1>
                </div>
            </div>

            <div className="pListItem">
                <VillaView/>
                <div className="plistTitle">
                    <h1> Villas </h1>
                </div>
            </div>

            <div className="pListItem">
                <Apartmentview/>
                <div className="plistTitle">
                    <h1> Apartments </h1>
                </div>
            </div>

            <div className="pListItem">
                <Resortview/>
                <div className="plistTitle">
                    <h1> Resorts </h1>
                </div>
            </div>
        </div>
    )
}

export default PropertyList;