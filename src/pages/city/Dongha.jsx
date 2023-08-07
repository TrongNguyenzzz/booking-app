import "./city.css";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import dongha1 from "../../assets/pageCity/dongha/dongha1.png";
import dongha2 from "../../assets/pageCity/dongha/dongha2.png";
import dongha3 from "../../assets/pageCity/dongha/dongha3.png";
import dongha4 from "../../assets/pageCity/dongha/dongha4.png";
import dongha5 from "../../assets/pageCity/dongha/dongha5.png";
import dongha6 from "../../assets/pageCity/dongha/dongha6.png";

import banhxeo from "../../assets/pageCity/dongha/food/banhxeo.png";
import banhnam from "../../assets/pageCity/dongha/food/banhnam.png";
import banhbotloc from "../../assets/pageCity/dongha/food/banhbotloc.png";
import chaobot from "../../assets/pageCity/dongha/food/chaobot.png";
import xoiga from "../../assets/pageCity/dongha/food/xoiga.png";


import { AiOutlineArrowRight, AiOutlineArrowLeft, AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

const Dongha = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const DonghaSlider = [
        { title: "FIDEL Park", img: dongha1 },
        { title: "Dong Ha Market", img: dongha2 },
        { title: "Quang Tri Museum", img: dongha3 },
        { title: "Dong Ha Train Station", img: dongha4 },
        { title: "Dong Ha Square", img: dongha5 },
        { title: "Hieu River", img: dongha6 },
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
                    <h2 className="hoteldesc"> About </h2>
                    <div className="hotelDescription">
                    Dong Ha is a city located in Quang Tri Province, 
                    which is situated in the central part of Vietnam. 
                    It serves as the capital of Quang Tri Province and 
                    is an important urban center in the region.

                    Dong Ha is located near the coast of the South China Sea,
                    making it an area of strategic importance historically due 
                    to its proximity to the former Demilitarized Zone (DMZ) that 
                    separated North and South Vietnam during the Vietnam War.
                    </div>
                    <div className="hotelImages">
                        {DonghaSlider.map((photo, i) =>(
                            <div className="hotelImgWrapper">
                                <img onClick={() => handleOpen(i)} className={photo.title !== "hotelview7" ? "hotelImg" : "hotelImg1"} src = { photo.img } alt = ""/>
                                <p className="placeDesc">{photo.title}</p>
                            </div>
                        ))}
                    </div>

                    <div className="hotelsDetails">
                        <h2 className="hoteldesc"> Best Dishes in Đông Hà - Quảng Trị </h2>
                        <p className="dishDesc">
                            1. Bánh Bột Lọc
                        </p>
                        <img src={banhbotloc} alt="" className="dishImg" />
                        <p className="dishDetail"> Banh Bot Loc is a popular Vietnamese dish that 
                        belongs to the category of rice-based dumplings or cakes. It originates from 
                        the central region of Vietnam, particularly in areas like Quang Tri or Hue. This dish is 
                        well-loved for its delicate texture and flavorful filling.  </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients:</span> 
                        The dumpling skin is made from tapioca starch, which gives it the unique translucent quality. The filling
                        typically consists of a mixture of minced shrimp and pork, sometimes mixed with other ingredients like mushrooms
                        or mung bean paste. The filling is usually seasoned with ingredients like fish sauce, shallots, and various spices 
                        to enhance the flavor.</p>
                    
                        <p className="dishDesc">
                            2. Bánh Xèo - Bánh Khọt
                        </p>
                        <img src={banhxeo} alt="" className="dishImg" />
                        <p className="dishDetail"> 
                        Banh Xeo, often referred to as "Vietnamese sizzling crepes" or "Vietnamese pancakes" is a beloved
                        and iconic Vietnamese dish known for its crispy texture and savory fillings. </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients:</span> 
                        The main components of Banh Xeo are the crepe itself and the filling. 
                        The crepe batter is made using rice flour and turmeric, which gives it 
                        the distinctive yellow color. The batter is cooked on a hot griddle until 
                        it forms a thin, crispy layer. The filling usually consists of cooked pork, 
                        shrimp, and bean sprouts. Sometimes, mung beans are also added to provide a 
                        slightly nutty flavor and extra texture.</p>

                        <p className="dishDesc">
                            3. Bánh Nậm
                        </p>
                        <img src={banhnam} alt="" className="dishImg" />
                        <p className="dishDetail">
                        Banh Nam is a traditional Vietnamese dish that originates from the central region of the country, 
                        particularly in Quang Nam and Quang Ngai provinces. It's a type of rice cake that's typically 
                        wrapped in banana leaves and steamed.  </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients:</span> The main ingredient 
                        in Banh Nam is rice flour, which is mixed with water to form a smooth batter. This batter is 
                        then combined with minced shrimp and pork, wood ear mushrooms, shallots, and various seasonings. 
                        The mixture is spread onto banana leaves and folded over to encase the filling.</p>

                        <p className="dishDesc">
                            4. Cháo Bánh Canh - Cháo Bột
                        </p>
                        <img src={chaobot} alt="" className="dishImg" />
                        <p className="dishDetail"> Chao Banh Canh is a Vietnamese dish that combines 
                        the characteristics of both chao (rice porridge) and banh canh (a type of thick noodle). 
                        It's a comforting and hearty dish that's often enjoyed as a main meal, especially on cooler days.  </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients: </span> 
                        The key components of Chao Banh Canh include the rice noodles, broth, and various toppings. The broth 
                        is usually made from a combination of pork bones, seafood (such as shrimp or crab), and sometimes chicken, 
                        simmered to develop a flavorful base. The rice noodles are added to the broth to cook, absorbing the flavors 
                        of the broth as they soften. Toppings can include a variety of ingredients such as sliced pork, seafood, quail 
                        eggs, herbs, green onions, fried shallots, and sometimes fried pork skin for crunch.</p>

                        <p className="dishDesc">
                            5. Xôi Gà
                        </p>
                        <img src={xoiga} alt="" className="dishImg" />
                        <p className="dishDetail"> Xoi Ga Kho Nem is a Vietnamese dish that features tender and flavorful 
                        pieces of chicken, often caramelized with a savory and slightly sweet sauce. It's a popular 
                        home-cooked dish known for its rich flavors and comforting qualities  </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients: </span> 
                        The main ingredients for Ga Kho Nem include bone-in chicken pieces, fish sauce, sugar, garlic, shallots, 
                        and black pepper. Some variations might also include other seasonings like soy sauce or oyster sauce to 
                        enhance the flavor profile.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dongha;