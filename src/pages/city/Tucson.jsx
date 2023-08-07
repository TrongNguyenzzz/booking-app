import "./city.css";
import { useState } from "react";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import tucson1 from "../../assets/pageCity/tucson/tucson1.png";
import tucson2 from "../../assets/pageCity/tucson/tucson2.png";
import tucson3 from "../../assets/pageCity/tucson/tucson3.png";
import sunset from "../../assets/pageCity/tucson/sunset.png";
import sabino from "../../assets/pageCity/tucson/sabino.png";
import grandcanyon from "../../assets/pageCity/tucson/grandcanyon.png";

import mexican from "../../assets//pageCity/tucson/food/mexican.png";
import indian from "../../assets//pageCity/tucson/food/idian.png";
import ramen from "../../assets//pageCity/tucson/food/ramen.png";
import hotdog from "../../assets//pageCity/tucson/food/hotdog.png";
import tamales from "../../assets//pageCity/tucson/food/tamales.png";

import { AiOutlineArrowRight, AiOutlineArrowLeft, AiFillCloseCircle } from "react-icons/ai";

const Tucson = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const HanoiSlider = [
        { title: "University of Arizona", img: tucson1 },
        { title: "Tucson Cactus", img: tucson2 },
        { title: "University of Arizona library", img: tucson3 },
        { title: "Tucson Sunset", img: sunset },
        { title: "Sabino Canyon", img: sabino },
        { title: "Grand Canyon", img: grandcanyon },
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
                    <h1 className="hotelTitle"> Tucson </h1>
                    <h2 className="hoteldesc"> About </h2>
                    <div className="hotelDescription">
                    Tucson is a city located in the southern part of the state of Arizona, 
                    United States. It is the second-largest city in Arizona after Phoenix and 
                    is known for its unique blend of desert landscapes, vibrant culture, and rich history.
                    Tucson is situated in the Sonoran Desert, surrounded by picturesque mountain ranges such 
                    as the Santa Catalina Mountains to the north, the Rincon Mountains to the east, and the 
                    Tucson Mountains to the west. The city's elevation varies, creating a diverse climate 
                    with hot summers and mild winters. 
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
                        <h2 className="hoteldesc"> Best Dishes in Tucson </h2>
                        <p className="dishDesc">
                            1. Mexican Cuisine
                        </p>
                        <img src={mexican} alt="" className="dishImg" />
                        <p className="dishDetail"> 
                        Mexican cuisine is renowned worldwide for its rich flavors, 
                        diverse ingredients, and cultural significance. Rooted in a 
                        deep history that blends indigenous traditions with influences 
                        from Spanish colonization, Mexican cuisine is a vibrant tapestry 
                        of flavors, colors, and techniques.  </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients: </span> 
                        Corn and Tortillas, Chiles, Salsas and Sauces, Guacamole, Carnitas and Barbacoa, Tacos and Tostadas, Enchiladas, Quesadillas.</p>
                    
                        <p className="dishDesc">
                            2. Indian Cuisine
                        </p>
                        <img src={indian} alt="" className="dishImg" />
                        <p className="dishDetail"> 
                        Indian cuisine is renowned for its diverse flavors, 
                        aromatic spices, and rich cultural heritage. With a vast array of 
                        regional variations and cooking styles, Indian food offers a sensory 
                        journey that reflects the country's history, geography, and traditions. </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients: </span> 
                        Spices, Herbs, Vegetables, Legumes and Pulses, Grains, Dairy Products, Meats and Poultry, Sweeteners and Sweet Ingredients.</p>

                        <p className="dishDesc">
                            3. Sonoran Hot Dog
                        </p>
                        <img src={hotdog} alt="" className="dishImg" />
                        <p className="dishDetail">
                        The Sonora hot dog is a delicious and distinctive culinary creation that originated in the Mexican state of Sonora,
                        particularly in the city of Hermosillo. It has also become popular in various regions of the southwestern United States,
                        especially in places like Tucson, Arizona. The Sonora hot dog is a unique twist on the classic hot dog, combining elements 
                        of both Mexican and American flavors. </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients: </span> 
                        Bacon-Wrapped Delight, Beans, Onions, Tomatoes, Mayonnaise, Mustard, Jalapeño Sauce, Additional Variations. </p>

                        <p className="dishDesc">
                            4. Raijin Ramen
                        </p>
                        <img src={ramen} alt="" className="dishImg" />
                        <p className="dishDetail"> Raijin Ramen is a ramen restaurant in Tucson, you can generally expect a cozy 
                        and inviting atmosphere with a focus on Japanese ramen cuisine. The restaurant might have a modern yet comfortable 
                        interior, often decorated with elements of Japanese culture. You might encounter wooden furniture, warm lighting, and perhaps even some traditional Japanese art or imagery.  </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Menu: </span> 
                        Raijin Ramen's menu is likely to feature a variety of ramen dishes, each with its own unique combination of broth, noodles, protein (meat or tofu), 
                        and toppings. They might offer both traditional and creative ramen variations, catering to different tastes and dietary preferences.</p>

                        <p className="dishDesc">
                            5. Tamales
                        </p>
                        <img src={tamales} alt="" className="dishImg" />
                        <p className="dishDetail"> Tamales are a beloved traditional dish in Mexican cuisine 
                        and are also enjoyed in Tucson, Arizona, due to the city's close proximity to the Mexican 
                        border and its rich cultural diversity. Tamales are a type of comfort food that is often 
                        enjoyed during special occasions, holidays, and family gatherings.  </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Common types of tamales: </span> 
                        Red Chile Pork Tamales, Chicken Tamales, Chicken Tamales, Sweet Tamales.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tucson;