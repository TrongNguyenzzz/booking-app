import "./city.css";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import hanoi1 from "../../assets/pageCity/hanoi/hanoi1.png";
import hanoi2 from "../../assets/pageCity/hanoi/hanoi2.png";
import hanoi3 from "../../assets/pageCity/hanoi/hanoi3.png";
import hanoi4 from "../../assets/pageCity/hanoi/hanoi4.png";
import hanoi5 from "../../assets/pageCity/hanoi/hanoi5.png";
import hanoi6 from "../../assets/pageCity/hanoi/hanoi6.png";
import { AiOutlineArrowRight, AiOutlineArrowLeft, AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

const Hanoi = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const HanoiSlider = [
        { title: "hotelview4", img: hanoi3 },
        { title: "hotelview6", img: hanoi1 },
        { title: "hotelview3", img: hanoi2 },
        { title: "hotelview7", img: hanoi4 },
        { title: "hotelview5", img: hanoi5 },
        { title: "hotelview6", img: hanoi6 },
    ];

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

    return (
        <div>
            <Navbar/>
            <Header type="list"/>
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
                    <img src={HanoiSlider[slideNumber].img} alt="" className="sliderImg" />
                    </div>
                    <AiOutlineArrowRight
                    className="arrow"
                    onClick={() => handleMove("r")}
                    />
                </div>
                )}
            <div className="hotelContainer">
                

                <div className="hotelWrapper">
                    <h1 className="hotelTitle"> Hanoi </h1>
                    <div className="hotelAdress">
                        The capital city of Vietnam
                    </div>
                    <div className="hotelImages">
                        {HanoiSlider.map((photo, i) =>(
                            <div className="hotelImgWrapper">
                                <img onClick={() => handleOpen(i)} className={photo.title !== "hotelview7" ? "hotelImg" : "hotelImg1"} src = { photo.img } alt = ""/>
                            </div>
                        ))}
                    </div>
                    <div className="hotelsDetails">
                        <div className="hotelDetailText">
                            <h1 className="hotelTitle"> Beautiful city of Vietnam </h1>
                        </div>
                        <p className="hotelDesc">
                            This is the description of Hanoi
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hanoi;