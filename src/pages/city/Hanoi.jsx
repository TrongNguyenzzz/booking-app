import "./city.css";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import hanoi1 from "../../assets/pageCity/hanoi/hanoi1.png";
import hanoi2 from "../../assets/pageCity/hanoi/hanoi2.png";
import hanoi3 from "../../assets/pageCity/hanoi/hanoi3.png";
import hanoi4 from "../../assets/pageCity/hanoi/hanoi4.png";
import hanoi5 from "../../assets/pageCity/hanoi/hanoi5.png";
import hanoi6 from "../../assets/pageCity/hanoi/hanoi6.png";
import pho from "../../assets//pageCity/hanoi/food/phobo.png";
import buncha from "../../assets//pageCity/hanoi/food/buncha.png";
import bundau from "../../assets//pageCity/hanoi/food/bundau.png";
import chaca from "../../assets//pageCity/hanoi/food/chaca.png";
import caphe from "../../assets//pageCity/hanoi/food/caphe.png";
import { AiOutlineArrowRight, AiOutlineArrowLeft, AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

const Hanoi = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const HanoiSlider = [
        { title: "Hoan Kiem Lake", img: hanoi3 },
        { title: "Tran Quoc Pagoda", img: hanoi1 },
        { title: "West Lake", img: hanoi2 },
        { title: "Phan Dinh Phung Street", img: hanoi4 },
        { title: "Van Mieu - Quoc Tu Giam", img: hanoi5 },
        { title: "Hoang Thanh Thang Long", img: hanoi6 },
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
                    <h1 className="hotelTitle"> Hà Nội </h1>
                    <h2 className="hoteldesc"> About </h2>
                    <div className="hotelDescription">
                    Hanoi is the capital city of Vietnam. It has a long and storied history dating back over a thousand years. 
                    It has served as the capital of various Vietnamese dynasties, each leaving 
                    its mark on the city's architecture, culture, and traditions.
                    The city has a unique charm that stems from its bustling streets, historical landmarks, serene lakes, 
                    and bustling markets.
                    </div>


                    <div className="hotelImages">
                        {HanoiSlider.map((photo, i) =>(
                            <div className="hotelImgWrapper">
                                <img onClick={() => handleOpen(i)} className={photo.title !== "hotelview7" ? "hotelImg" : "hotelImg1"} src = { photo.img } alt = ""/>
                                <p className="placeDesc">{photo.title}</p>
                            </div>
                        ))}
                    </div>
                    <div className="hotelsDetails">
                        <div className="hotelDetailText">
                            <h1 className="hotelTitle"> Best Dishes in Hà Nội </h1>
                        </div>
                        <p className="dishDesc">
                            1. Phở
                        </p>
                        <img src={pho} alt="" className="dishImg" />
                        <p className="dishDetail"> Pho is a traditional 
                        Vietnamese noodle soup that has become internationally renowned for 
                        its rich and comforting flavors. It is a staple of Vietnamese cuisine 
                        and is often considered a symbol of the country's culinary heritage. </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients:</span> Brooth, Noodles, Protein, Garnishes, Condiments</p>
                    
                        <p className="dishDesc">
                            2. Bún Chả
                        </p>
                        <img src={buncha} alt="" className="dishImg" />
                        <p className="dishDetail"> 
                        Bun Cha is another iconic Vietnamese dish, particularly popular in Hanoi, 
                        the capital city. It's a flavorful and satisfying meal that showcases the 
                        harmonious combination of grilled pork, fresh herbs, rice noodles, and a dipping sauce </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients:</span> Grilled Pork Patties, Pork Belly or Pork Slices, 
                        Rice Noodles (Bun), Fresh Herbs and Vegetables, Dipping Sauce</p>

                        <p className="dishDesc">
                            3. Chả Cá Lã Vọng
                        </p>
                        <img src={chaca} alt="" className="dishImg" />
                        <p className="dishDetail">
                        Cha Ca La Vong is a famous Vietnamese dish that originated
                        in Hanoi and is named after the street where it was first created.
                        It's a unique and flavorful preparation of grilled fish that's accompanied
                        by a variety of herbs, rice noodles, and condiments. </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients:</span> Fish, Turmeric Marinade, 
                        Rice Noodles (Bun), Herbs and Vegetables, Peanuts and Condiments</p>

                        <p className="dishDesc">
                            4. Bún Đậu Mắm Tôm
                        </p>
                        <img src={bundau} alt="" className="dishImg" />
                        <p className="dishDetail"> Bun Dau Mam Tom is a distinctive Vietnamese dish that combines
                        various elements to create a unique blend of flavors and textures. It's particularly popular
                        in Northern Vietnam, including Hanoi. This dish features tofu, rice vermicelli noodles, 
                        a fermented shrimp paste dipping sauce (mam tom), and an array of fresh herbs.  </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients: </span> 
                        Tofu, Rice Vermicelli Noodles (Bun), Fermented Shrimp Paste Dipping Sauce (Mam Tom), 
                        Fresh Herbs and Vegetables</p>

                        <p className="dishDesc">
                            5. Cà Phê Trứng
                        </p>
                        <img src={caphe} alt="" className="dishImg" />
                        <p className="dishDetail"> Ca Phe Trung, also known as Egg Coffee, is a specialty coffee drink
                        that originated in Vietnam, particularly in Hanoi. This unique coffee preparation involves a
                        creamy egg-based topping that adds a rich and indulgent flavor to the coffee.  </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients: </span> 
                        Vietnamese Coffee, Egg Yolks, Condensed Milk</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hanoi;