import React, { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
import ReserveCard from "./ReserveCard.jsx";

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
                    <section>
                        <h1> {user.details.username}'s reservation</h1>
                        {data.map((item) => (
                            <ReserveCard
                                reserveId={item._id}
                                userId={item.user}
                                photo={item.hotelPhoto}
                                hotel={item.hotelName}
                                roomNumber={item.roomNumber}
                                start={new Date(item.dates[0]).toLocaleDateString()}
                                end={new Date(item.dates[item.dates.length - 1]).toLocaleDateString()}
                                price={item.total}
                            >
                            </ReserveCard>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    )
};

export default Reservation;