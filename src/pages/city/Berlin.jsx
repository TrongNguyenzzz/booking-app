import "./city.css";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import berlin1 from "../../assets/pageCity/berlin/berlin1.png";
import berlin2 from "../../assets/pageCity/berlin/berlin2.png";
import berlin3 from "../../assets/pageCity/berlin/berlin3.png";
import berlin4 from "../../assets/pageCity/berlin/berlin4.png";
import berlin5 from "../../assets/pageCity/berlin/berlin5.png";
import berlin6 from "../../assets/pageCity/berlin/berlin6.png";

import currywurst from "../../assets//pageCity/berlin/food/currywurst.png";
import doner from "../../assets//pageCity/berlin/food/doner.png";
import schnitzel from "../../assets//pageCity/berlin/food/schnitzel.png";
import boulette from "../../assets//pageCity/berlin/food/boulette.png";
import eisbein from "../../assets//pageCity/berlin/food/eisbein.png";

import { AiOutlineArrowRight, AiOutlineArrowLeft, AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

const Berlin = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const HanoiSlider = [
        { title: "Reichstag & glass dome", img: berlin1 },
        { title: "Brandenburg Gate", img: berlin2 },
        { title: "Berlin Television Tower", img: berlin3 },
        { title: "Kurfürstendamm - Shopping Street", img: berlin4 },
        { title: "Charlottenburg Palace", img: berlin5 },
        { title: "Berlin Wall Memorial and Documentation Centre", img: berlin6 },
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
                    <h1 className="hotelTitle"> Berlin </h1>
                    <h2 className="hoteldesc"> About </h2>
                    <div className="hotelDescription">
                    Berlin, the capital city of Germany, is a vibrant and dynamic metropolis that blends a rich history with a 
                    contemporary cultural scene. Known for its unique atmosphere, diverse neighborhoods, and iconic landmarks, Berlin 
                    is a city that has undergone significant transformation over the years. 
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
                        <h2 className="hoteldesc"> Best Dishes in Berlin </h2>
                        <p className="dishDesc">
                            1. Currywurst
                        </p>
                        <img src={currywurst} alt="" className="dishImg" />
                        <p className="dishDetail"> 
                        Currywurst is a popular German street food dish that combines the flavors of bratwurst sausages with a tangy and slightly spicy curry ketchup sauce. This 
                        unique and flavorful dish has become an iconic part of German cuisine, particularly in cities like Berlin. </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients:</span> At the heart of currywurst is the sausage. Traditionally, bratwurst 
                        sausages are used, which are made from pork, beef, or a combination of both. The sausages are usually grilled, fried, or steamed until they're cooked through and have a 
                        slight char on the outside. The choice of sausage can vary, and some places offer different types of wurst to cater to different tastes.</p>
                    
                        <p className="dishDesc">
                            2. Döner Kebab
                        </p>
                        <img src={doner} alt="" className="dishImg" />
                        <p className="dishDetail"> 
                        Döner Kebab in Berlin is a popular and iconic street food that has become deeply ingrained in the city's culinary landscape. This flavorful dish, originating 
                        from Turkish cuisine, reflects Berlin's multicultural identity and is a beloved choice for locals and visitors alike. </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients:</span> GDöner Kebab in Berlin is known for its generous assortment of toppings. A 
                        classic combination includes fresh lettuce, tomatoes, and onions, providing crunch and freshness that complement the savory meat. Sliced cucumbers, red cabbage, and pickles might 
                        also be added for extra flavor and texture.</p>

                        <p className="dishDesc">
                            3. Schnitzel
                        </p>
                        <img src={schnitzel} alt="" className="dishImg" />
                        <p className="dishDetail">
                        Schnitzel is a classic and beloved dish that originates from Austrian and German cuisine. It's a simple yet satisfying dish that consists of a thin, 
                        breaded and fried meat cutlet. The most common type of meat used for schnitzel is veal or pork, though chicken and turkey can also be used as alternatives. </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients:</span> While the traditional schnitzel is made from veal or pork, there are 
                        variations that use other meats like chicken, turkey, or even fish. The type of meat used can influence the flavor and texture of the dish.</p>

                        <p className="dishDesc">
                            4. Boulette
                        </p>
                        <img src={boulette} alt="" className="dishImg" />
                        <p className="dishDetail"> "Boulette" is a term used in Berlin to refer to a type of meatball, specifically a pan-fried or deep-fried meat patty. This dish is a beloved part 
                        of Berlin's culinary culture and often serves as a popular comfort food option. </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients: </span> 
                        A boulette is essentially a flavorful meat patty made from ground meat, often a mixture of beef and pork, though variations can include other meats or even vegetarian ingredients. The
                        meat is typically seasoned with a combination of spices, herbs, onions, and sometimes breadcrumbs to enhance its flavor and texture.</p>

                        <p className="dishDesc">
                            5. Eisbein
                        </p>
                        <img src={eisbein} alt="" className="dishImg" />
                        <p className="dishDetail"> Eisbein, also known as Schweinshaxe, is a traditional German dish that has deep roots in Berlin's culinary heritage. It is a hearty 
                        and flavorful dish that features a pork knuckle or hock, which is cooked until tender and crispy. Eisbein is often enjoyed in Berlin's traditional beer halls and 
                        restaurants, and it showcases the city's rich culinary traditions.</p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients: </span> 
                        Eisbein consists of a pork knuckle, which is the lower part of the pig's leg. The knuckle is often cured or brined before cooking, which 
                        imparts flavor and helps tenderize the meat. It is then slow-cooked, either through boiling or roasting, until the meat is tender and falls off the bone.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Berlin;