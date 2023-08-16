import React, { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";

import "./reservation.css"

const Reservation = () => {

    const { user } = useContext(AuthContext);

    const userId = user.details._id

    const { data } =  useFetch(`http://54.67.36.133:5050/api/reservation/find/${userId}`);

    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="reservation">
                <div className="myReservation">
                    <h1> {user.details.username}'s reservation</h1>
                    {data.map((item) => (
                        <div>
                            <img src={item.hotelPhoto} alt="" className="reserveImg"/>
                            <h2>Hotel: {item.hotelName}</h2>
                            <h2>Room: {item.roomNumber}</h2>
                            <h2>Start date: {new Date(item.dates[0]).toLocaleDateString()}</h2>
                            <h2>End date: {new Date(item.dates[item.dates.length - 1]).toLocaleDateString()}</h2>
                            <h2>Total Price: ${item.total}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Reservation;