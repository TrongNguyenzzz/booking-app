import "./city.css";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import la1 from "../../assets/pageCity/la/la1.png";
import la2 from "../../assets/pageCity/la/la2.png";
import la3 from "../../assets/pageCity/la/la3.png";
import la4 from "../../assets/pageCity/la/la4.png";
import la5 from "../../assets/pageCity/la/la5.png";
import la6 from "../../assets/pageCity/la/la6.png";

import tacos from "../../assets//pageCity/la/food/tacos.png";
import korean from "../../assets//pageCity/la/food/korean.png";
import sushi from "../../assets//pageCity/la/food/sushi.png";
import avocado from "../../assets//pageCity/la/food/avocado.png";
import mexico from "../../assets//pageCity/la/food/elote.png";

import { AiOutlineArrowRight, AiOutlineArrowLeft, AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

const LA = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const HanoiSlider = [
        { title: "Griffith Observatory", img: la1 },
        { title: "Getty Center", img: la2 },
        { title: "Grand Central Market", img: la3 },
        { title: "Santa Monica Pier", img: la4 },
        { title: "Walt Disney Concert Hall", img: la5 },
        { title: "Hollywood Walk of Fame", img: la6 },
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
                    <h1 className="hotelTitle"> Los Angeles </h1>
                    <h2 className="hoteldesc"> About </h2>
                    <div className="hotelDescription">
                    Los Angeles, often referred to as LA, is a sprawling and diverse metropolis located in 
                    Southern California, USA. It's known for its glamorous entertainment industry, sunny climate, 
                    diverse neighborhoods, and cultural vibrancy.
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
                        <h2 className="hoteldesc"> Best Dishes in Los Angeles </h2>
                        <p className="dishDesc">
                            1. Tacos
                        </p>
                        <img src={tacos} alt="" className="dishImg" />
                        <p className="dishDetail"> 
                        Tacos in Los Angeles are a culinary phenomenon that reflects the diverse and vibrant food culture of the city. 
                        Los Angeles is known for its vast array of taco offerings, ranging from traditional to fusion and innovative creations. 
                        Tacos are deeply ingrained in the city's street food scene, with taco trucks, stands, and restaurants serving up a wide 
                        variety of flavors and styles. </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients:</span> Asada, Al Pastor, Carnitas, Barbacoa, Lengua, Birria.</p>
                    
                        <p className="dishDesc">
                            2. Korean BBQ
                        </p>
                        <img src={korean} alt="" className="dishImg" />
                        <p className="dishDetail"> 
                        Korean BBQ in Los Angeles is a popular and flavorful dining experience that has become a beloved culinary tradition in the city. 
                        Known for its interactive nature and diverse array of meats and accompaniments, Korean BBQ offers a unique way to enjoy a meal with 
                        friends and family. </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients:</span> Meats, Grilling, 
                        Banchan, Lettuce Wraps, Ssamjang, Sesame Oil and Salt.</p>

                        <p className="dishDesc">
                            3. Sushi
                        </p>
                        <img src={sushi} alt="" className="dishImg" />
                        <p className="dishDetail">
                        Sushi in Los Angeles is a vibrant and diverse culinary experience that reflects the city's appreciation for high-quality ingredients, 
                        innovation, and multicultural influences. Los Angeles is home to a wide range of sushi restaurants, from traditional omakase-style 
                        establishments to creative fusion eateries. </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients:</span> In Los Angeles, you'll find a mix 
                        of traditional sushi and more contemporary interpretations. Traditional sushi focuses on highlighting the natural flavors of the fish 
                        with minimal seasoning, while modern sushi often incorporates innovative techniques, non-traditional ingredients, and creative presentations.</p>

                        <p className="dishDesc">
                            4. Avocado Toast
                        </p>
                        <img src={avocado} alt="" className="dishImg" />
                        <p className="dishDetail"> Avocado toast in Los Angeles is a beloved and iconic dish that perfectly captures the city's health-conscious and 
                        laid-back lifestyle. This simple yet satisfying creation has become a staple on brunch menus and café offerings throughout the city.</p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients: </span> 
                        Avocado, Eggs, Microgreens, Tomatoes, Red Onion, Feta Cheese, Everything Bagel Seasoning.</p>

                        <p className="dishDesc">
                            5. Mexican Street Corn (Elote)
                        </p>
                        <img src={mexico} alt="" className="dishImg" />
                        <p className="dishDetail"> Elote, also known as Mexican street corn, is a delicious and iconic street food that has become 
                        a popular snack in Los Angeles, reflecting the city's diverse culinary landscape and appreciation for bold flavors.  </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients: </span> 
                        Cheese, Chili and Spices, Lime, Toppings and Coating.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LA;