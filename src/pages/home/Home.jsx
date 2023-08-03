import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/propertyList";

import "./home.css";

function Home() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle"> Different properties type </h1>
                <PropertyList/>
            </div>
        </div>
    )
}

export default Home;