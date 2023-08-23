import "./city.css";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import seattle1 from "../../assets/pageCity/seattle/seattle1.png";
import seattle2 from "../../assets/pageCity/seattle/seattle2.png";
import seattle3 from "../../assets/pageCity/seattle/seattle3.png";
import seattle4 from "../../assets/pageCity/seattle/seattle4.png";
import seattle5 from "../../assets/pageCity/seattle/seattle5.png";
import seattle6 from "../../assets/pageCity/seattle/seattle6.png";

import seafood from "../../assets//pageCity/seattle/food/seafood.png";
import chowder from "../../assets//pageCity/seattle/food/chowder.png";
import fish from "../../assets//pageCity/seattle/food/fish.png";
import asian from "../../assets//pageCity/seattle/food/asian.png";
import coffee from "../../assets//pageCity/seattle/food/coffee.png";

import { AiOutlineArrowRight, AiOutlineArrowLeft, AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

const Seattle = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const HanoiSlider = [
        { title: "Space Needle", img: seattle1 },
        { title: "Pike Place Market", img: seattle2 },
        { title: "Washington State Ferries", img: seattle3 },
        { title: "Kerry Park", img: seattle4 },
        { title: "Pioneer Square", img: seattle5 },
        { title: "Chinatown-International District", img: seattle6 },
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
                    <h1 className="hotelTitle"> Seattle </h1>
                    <h2 className="hoteldesc"> About </h2>
                    <div className="hotelDescription">
                    Seattle, often referred to as the "Emerald City," is a vibrant and picturesque 
                    city located in the Pacific Northwest of the United States. Known for its natural 
                    beauty, thriving tech industry, and cultural scene, Seattle offers a unique blend 
                    of urban sophistication and outdoor adventure.
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
                        <h2 className="hoteldesc"> Best Dishes in Seattle </h2>
                        <p className="dishDesc">
                            1. Pacific Northwest Seafood
                        </p>
                        <img src={seafood} alt="" className="dishImg" />
                        <p className="dishDetail">  
                        Pacific Northwest seafood in Seattle is a culinary experience that highlights the region's abundant waters, pristine coastline, 
                        and rich maritime heritage. Renowned for its freshness and variety, the seafood in Seattle is celebrated for its role in shaping 
                        the city's culinary culture. </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients:</span> Wild-Caught Salmon, Oysters and Shellfish, Sustainable Practices, ...</p>
                    
                        <p className="dishDesc">
                            2. Clam Chowder
                        </p>
                        <img src={chowder} alt="" className="dishImg" />
                        <p className="dishDetail"> 
                        Clam chowder in Seattle is a beloved and iconic dish that showcases the city's maritime heritage and access to fresh seafood. Renowned 
                        for its creamy texture, rich flavors, and heartwarming qualities, clam chowder is a comfort food favorite that reflects Seattle's coastal culture. </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients:</span> Clam chowder typically features a creamy and indulgent base 
                        made from a combination of heavy cream, milk, and sometimes a roux (a mixture of butter and flour). In Seattle, where access to fresh seafood is abundant, the clams 
                        used are often local and harvested from the nearby waters of Puget Sound or the Pacific Ocean. Chopped clams provide a chewy and briny element to the chowder, 
                        contributing to its overall flavor profile.</p>

                        <p className="dishDesc">
                            3. Asian Cuisine
                        </p>
                        <img src={asian} alt="" className="dishImg" />
                        <p className="dishDetail">
                        Asian cuisine in Seattle is a diverse and vibrant culinary experience that reflects the city's multicultural population and its strong connections to Asia. From 
                        traditional flavors to modern fusion creations, Seattle's Asian food scene offers a rich array of dishes that cater to a wide range of tastes and preferences. </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Including:</span> Seattle is home to a dynamic Asian food scene that encompasses a 
                        variety of culinary traditions, including Chinese, Japanese, Korean, Vietnamese, Thai, Filipino, Indian, and more. This diversity means that you can find everything 
                        from dim sum and sushi to pho and kimchi, all within the city's culinary landscape.</p>

                        <p className="dishDesc">
                            4. Fish and Chips
                        </p>
                        <img src={fish} alt="" className="dishImg" />
                        <p className="dishDetail"> Fish and chips in Seattle is a classic and beloved dish that reflects the city's coastal location, 
                        maritime heritage, and appreciation for fresh seafood. Known for its crispy batter, tender fish, and hearty fries, fish and chips 
                        is a comforting and satisfying meal that captures the essence of Seattle's culinary culture.  </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients: </span> 
                        Fish, Batter, Fries .</p>

                        <p className="dishDesc">
                            5. Coffee and Espresso
                        </p>
                        <img src={coffee} alt="" className="dishImg" />
                        <p className="dishDetail"> Coffee and espresso culture in Seattle is deeply ingrained in the city's identity, making it a hub for coffee 
                        enthusiasts and connoisseurs from around the world. Known for its pioneering role in the specialty coffee movement and its many coffeehouses, 
                        Seattle's coffee scene is both a reflection of its history and a symbol of its vibrant urban lifestyle.  </p>
                        <p className="ingredient">  
                        Seattle is often credited as the birthplace of the modern specialty coffee movement. Iconic coffeehouses like Starbucks, 
                        Tully's Coffee, and Seattle's Best Coffee originated in the city and have since become global brands. The city's coffee 
                        culture has greatly influenced how people view and enjoy coffee globally.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seattle;