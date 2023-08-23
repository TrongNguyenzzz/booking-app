import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/propertyList";
import GuestLove from "../../components/guestLove/guestLove";
import Footer from "../../components/footer/Footer";

import "./home.css";

function Home() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
            <h1 className="homeTitle"> Cities </h1>
                <Featured/>
                <h1 className="homeTitle"> Different properties type </h1>
                <PropertyList/>
                <h1 className="homeTitle"> Best rate places from our guests </h1>
                <GuestLove/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home;