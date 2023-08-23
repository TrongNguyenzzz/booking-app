import "./city.css";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import budapest1 from "../../assets/pageCity/budapest/budapest1.png";
import budapest2 from "../../assets/pageCity/budapest/budapest2.png";
import budapest3 from "../../assets/pageCity/budapest/budapest3.png";
import budapest4 from "../../assets/pageCity/budapest/budapest4.png";
import budapest5 from "../../assets/pageCity/budapest/budapest5.png";
import budapest6 from "../../assets/pageCity/budapest/budapest6.png";

import goulash from "../../assets//pageCity/budapest/food/goulash.png";
import langos from "../../assets//pageCity/budapest/food/langos.png";
import chicken from "../../assets//pageCity/budapest/food/chicken.png";
import peppers from "../../assets//pageCity/budapest/food/peppers.png";
import dobos from "../../assets//pageCity/budapest/food/dobos.png";

import { AiOutlineArrowRight, AiOutlineArrowLeft, AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

const Budapest = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const HanoiSlider = [
        { title: "Hungarian Parliament Building", img: budapest1 },
        { title: "Castle Hill", img: budapest2 },
        { title: "St. Stephen’s Basilica", img: budapest3 },
        { title: "Szechenyi Chain Bridge", img: budapest4 },
        { title: "Central Market Hall", img: budapest5 },
        { title: "Liberty Bridge", img: budapest6 },
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
                    <h1 className="hotelTitle"> Budapest </h1>
                    <h2 className="hoteldesc"> About </h2>
                    <div className="hotelDescription">
                    Budapest, often referred to as the "Paris of the East," is the capital city of Hungary
                    and one of the most beautiful and historically significant cities in Europe. It is
                    located along the banks of the Danube River and is known for its stunning architecture, 
                    rich cultural heritage, and thermal baths.
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
                        <h2 className="hoteldesc"> Best Dishes in Budapest </h2>
                        <p className="dishDesc">
                            1. Goulash (Gulyás)
                        </p>
                        <img src={goulash} alt="" className="dishImg" />
                        <p className="dishDetail">
                        Goulash, known as "Gulyás" in Hungarian, is a traditional and 
                        hearty stew that originated in Hungary. It's one of the most 
                        famous and beloved dishes in Hungarian cuisine, known for its rich 
                        flavors and warming qualities. Goulash has become popular in various 
                        forms across many Central European countries. </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients:</span> The 
                        classic ingredients for goulash include chunks of beef (often stewing cuts like chuck), onions, paprika (both sweet and sometimes spicy), tomatoes, bell peppers, potatoes, and various spices and seasonings. Caraway seeds, garlic, and sometimes red wine can also be added for extra flavor..</p>
                    
                        <p className="dishDesc">
                            2. Lángos
                        </p>
                        <img src={langos} alt="" className="dishImg" />
                        <p className="dishDetail"> 
                        Lángos is a popular Hungarian street food that can also be found in other Central European
                        countries. It's a type of deep-fried flatbread that is crispy on the outside and soft on
                        the inside. Lángos is often enjoyed as a savory snack or appetizer, and it can be topped
                        with various ingredients to create a delicious and indulgent treat. </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients:</span> The basic ingredients for 
                        lángos include flour, water, yeast, and a pinch of salt. These ingredients are mixed together to create a dough that is 
                        then allowed to rise. After the dough has risen, it is shaped into flat rounds and deep-fried until golden brown and puffy.</p>

                        <p className="dishDesc">
                            3. Chicken Paprikash (Csirkepaprikás)
                        </p>
                        <img src={chicken} alt="" className="dishImg" />
                        <p className="dishDetail">
                        Chicken Paprikash, known as "Paprikás Csirke" in Hungarian, is a classic Hungarian dish that showcases the rich flavors of Hungarian
                        paprika. It's a comforting and hearty dish featuring tender pieces of chicken cooked in a creamy paprika-infused sauce. Chicken Paprikash
                        is often served with a side of egg noodles or dumplings, making it a staple in Hungarian cuisine. </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients:</span> The main ingredients for Chicken Paprikash include chicken
                        (usually bone-in pieces like thighs and legs), onions, sweet Hungarian paprika, sour cream, and sometimes tomatoes. Other ingredients might include chicken broth, 
                        butter, flour, garlic, and various spices.</p>

                        <p className="dishDesc">
                            4. Stuffed Peppers (Töltött Paprika)
                        </p>
                        <img src={peppers} alt="" className="dishImg" />
                        <p className="dishDetail"> Stuffed peppers are a dish enjoyed in various culinary traditions around the world, with each culture offering
                        its own unique take on this concept. The core idea involves hollowing out bell peppers and filling them with a flavorful mixture, often featuring 
                        a combination of protein, vegetables, grains, and seasonings. The peppers are then baked until tender, creating a delicious and satisfying dish.</p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients: </span> 
                        Bell peppers, Filling, Vegetables, Seasonings, Cheese, Sauce.</p>

                        <p className="dishDesc">
                            5. Dobos Torte
                        </p>
                        <img src={dobos} alt="" className="dishImg" />
                        <p className="dishDetail"> Dobos Torte, also known as Dobos Cake, is a classic Hungarian dessert that's both visually striking and 
                        incredibly delicious. It was created by Hungarian pastry chef József C. Dobos in the 19th century and quickly became a symbol of Hungarian pastry 
                        craftsmanship. The cake is known for its distinctive appearance with multiple layers of sponge cake and a caramelized sugar top layer.</p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients: </span> 
                        Sponge cake, Chocolate buttercream, Caramel top layer, Ground nuts or chocolate shavings.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Budapest;