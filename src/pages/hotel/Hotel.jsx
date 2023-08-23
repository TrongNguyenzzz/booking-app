import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineArrowRight, AiOutlineArrowLeft, AiFillCloseCircle } from "react-icons/ai";
import { RiPinDistanceFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import "./hotel.css"
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";

const Hotel = () => {

    const location = useLocation();
    const temp = location.pathname.split('/');
    const id = temp[temp.length - 1];

    const { data, reFetch } =  useFetch(`http://54.67.36.133:5050/api/hotels/${id}`);
    
    const name = data.name;

    const { user } = useContext(AuthContext);
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const { dates, options } = useContext(SearchContext);
    const navigate = useNavigate();

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    }

    const handleClick = () => {
        if(user) {
            setOpenModal(true);
        } else {
            navigate("/login");
        }
    }

    let diffDays = 1;
    if(dates.length > 0) {
        diffDays = dayDifference(dates[0].endDate, dates[0].startDate);
    }

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    }

    const handleMove = (direction) => {
        let newSlideNumber;
    
        if (direction === "l") {
          newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
          newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }
    
        setSlideNumber(newSlideNumber)
    };

    console.log(options);

    return(
        <div> 
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                {open && (
                    <div className="slider">
                        <AiFillCloseCircle
                        className="close"
                        onClick={() => setOpen(false)}
                        />

                        <AiOutlineArrowLeft
                        className="arrow"
                        onClick={() => handleMove("l")}
                        />
                        <div className="sliderWrapper">
                        <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
                        </div>
                        <AiOutlineArrowRight
                        className="arrow"
                        onClick={() => handleMove("r")}
                        />
                    </div>
                    )}
            
                <div className="hotelWrapper">
                    <div className="temp">
                        <h1 className="hotelTitle">{data.name}</h1>
                        {dates.length > 0 && (<button onClick={handleClick} className="bookNow">Reserve or Book Now!</button>)}
                        <div className="hotelAddress">
                            <FaLocationDot/>
                            <span>{data.address}</span>
                        </div>
                        <br/>
                        <div className="hotelAddress">
                            <RiPinDistanceFill/>
                            <span>{data.distance}</span>
                        </div>
                        <br/>
                    </div>

                    <div className="hotelImages">
                        {data.photos?.map((photo, i) => (
                            <div className="hotelImgWrapper" key={i}>
                            <img
                                onClick={() => handleOpen(i)}
                                src={photo}
                                alt=""
                                className="hotelImg"
                            />
                            </div>
                        ))}
                    </div>

                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">{data.title}</h1>
                            <p className="hotelDesc">{data.desc}</p>
                            <p className="hotelDesc">{data.subDesc}</p>
                        </div>

                        <div className="hotelDetailsPrice">
                            {dates.length > 0 &&
                            <h2>
                                <b>${diffDays * data.cheapestPrice * options.room}</b> ({diffDays}{" "}
                                nights)
                            </h2>
                            }

                            {dates.length <= 0 &&
                            <h2>
                                <b>${data.cheapestPrice}</b> ({diffDays}{" "}
                                nights)
                            </h2>
                            }
                            <div className="tempRate">
                                <span> Rating </span>
                                <button className="rateBut">{data.rating ? data.rating : 8.5}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {openModal && <Reserve setOpen={setOpenModal} hotelId={id} hotelName={name} hotelPic={data.photos[0]} duration={diffDays} />}
        </div>
    )
}

export default Hotel;