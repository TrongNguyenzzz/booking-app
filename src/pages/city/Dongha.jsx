import "./city.css";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import dongha1 from "../../assets/pageCity/dongha/dongha1.png";
import dongha2 from "../../assets/pageCity/dongha/dongha2.png";
import dongha3 from "../../assets/pageCity/dongha/dongha3.png";
import dongha4 from "../../assets/pageCity/dongha/dongha4.png";
import dongha5 from "../../assets/pageCity/dongha/dongha5.png";
import dongha6 from "../../assets/pageCity/dongha/dongha6.png";

import { AiOutlineArrowRight, AiOutlineArrowLeft, AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

const Dongha = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const DonghaSlider = [
        { title: "hotelview4", img: dongha1 },
        { title: "dongha2", img: dongha2 },
        { title: "hotelview3", img: dongha3 },
        { title: "dongha4", img: dongha4 },
        { title: "dongha5", img: dongha5 },
        { title: "dongha6", img: dongha6 },
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
                    <img src={DonghaSlider[slideNumber].img} alt="" className="sliderImg" />
                    </div>
                    <AiOutlineArrowRight
                    className="arrow"
                    onClick={() => handleMove("r")}
                    />
                </div>
                )}
            <div className="hotelContainer">
                

                <div className="hotelWrapper">
                    <h1 className="hotelTitle"> Đông Hà </h1>
                    <div className="hotelAdress">
                        The capital city of Vietnam
                    </div>
                    <div className="hotelImages">
                        {DonghaSlider.map((photo, i) =>(
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

export default Dongha;