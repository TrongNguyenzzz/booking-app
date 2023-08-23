import "./city.css";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import nyc1 from "../../assets/pageCity/nyc/nyc1.png";
import nyc2 from "../../assets/pageCity/nyc/nyc2.png";
import nyc3 from "../../assets/pageCity/nyc/nyc3.png";
import nyc4 from "../../assets/pageCity/nyc/nyc4.png";
import nyc5 from "../../assets/pageCity/nyc/nyc5.png";
import nyc6 from "../../assets/pageCity/nyc/nyc6.png";

import piazza from "../../assets//pageCity/nyc/food/piazza.png";
import bagel from "../../assets//pageCity/nyc/food/bagel.png";
import pastrami from "../../assets//pageCity/nyc/food/pastrami.png";
import hotdog from "../../assets//pageCity/nyc/food/hotdogs.png";
import cheesecake from "../../assets//pageCity/nyc/food/chessecake.png";

import { AiOutlineArrowRight, AiOutlineArrowLeft, AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

const Newyork = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const HanoiSlider = [
        { title: "Statue Of Liberty", img: nyc1 },
        { title: "Times Square", img: nyc2 },
        { title: "Central Park", img: nyc3 },
        { title: "Metropolitan Museum Of Art", img: nyc4 },
        { title: "Broadway And The Theater District", img: nyc5 },
        { title: "Empire State Building", img: nyc6 },
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
                    <h1 className="hotelTitle"> New York </h1>
                    <h2 className="hoteldesc"> About </h2>
                    <div className="hotelDescription">
                        New York City, often simply referred to as "New York," is one of the most iconic and vibrant cities 
                        in the world. It's located in the northeastern United States and is known for its diverse culture, 
                        towering skyscrapers, world-renowned landmarks, and dynamic neighborhoods. 
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
                        <h2 className="hoteldesc"> Best Dishes in New York </h2>
                        <p className="dishDesc">
                            1. New York-style Pizza
                        </p>
                        <img src={piazza} alt="" className="dishImg" />
                        <p className="dishDetail">
                        New York-style pizza is a type of pizza that originated in New York City and has become widely popular across
                        the United States and even internationally. It is characterized by its thin, large, and foldable slices that are 
                        typically served in a triangular shape. New York-style pizza is known for its simple yet delicious combination of 
                        ingredients, making it a staple in American pizza culture. </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients:</span> While New 
                        York-style pizza is renowned for its simplicity, a variety of toppings can be added to suit individual preferences. Classic 
                        toppings might include pepperoni, sausage, mushrooms, onions, and bell peppers. However, the emphasis is often on quality and 
                        balance, with the toppings complementing the sauce, cheese, and crust rather than overwhelming the flavors.</p>
                    
                        <p className="dishDesc">
                            2. Bagels with Lox and Cream Cheese
                        </p>
                        <img src={bagel} alt="" className="dishImg" />
                        <p className="dishDetail"> 
                        Bagels with lox and cream cheese is a classic and beloved dish that has its origins in Jewish-American cuisine. 
                        This combination of flavors and textures creates a satisfying and flavorful meal, often enjoyed as breakfast or brunch. </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients:</span> Bagel, Lox, 
                        Cream Cheese, Red Onion, Capers, Fresh Dill, Tomato.</p>

                        <p className="dishDesc">
                            3. Pastrami on Rye
                        </p>
                        <img src={pastrami} alt="" className="dishImg" />
                        <p className="dishDetail">
                        Pastrami on rye is a classic deli sandwich that has become a hallmark of Jewish-American cuisine and deli culture. This hearty and 
                        flavorful sandwich features thinly sliced pastrami, a type of seasoned and smoked beef, layered between slices of rye bread. The 
                        combination of tender, flavorful meat and the distinctive taste of rye bread creates a satisfying and iconic sandwich experience. </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients:</span> Pastrami is made from beef, often cut 
                        from the brisket or other flavorful cuts. The meat is typically seasoned with a mix of spices, including black pepper, coriander, garlic, 
                        and sometimes paprika, before undergoing a smoking and slow-cooking process. Rye bread is a type of bread made with a significant proportion 
                        of rye flour, which gives it a distinctive taste and texture. Rye bread can vary from light to dark in color, and it's known for its slightly tangy 
                        flavor and denser crumb compared to bread made from wheat flour.</p>

                        <p className="dishDesc">
                            4. Hot Dogs
                        </p>
                        <img src={hotdog} alt="" className="dishImg" />
                        <p className="dishDetail"> New York hot dogs, often referred to simply as "New York dogs," are a beloved street food that's closely associated 
                        with the fast-paced and vibrant city of New York. These hot dogs are known for their simplicity, portability, and the variety of toppings and 
                        condiments that can be added to create a satisfying and flavorful meal.  </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients: </span> 
                        Bun, Onions, Sauerkraut, Mustard, Ketchup, Relish, Sauces.</p>

                        <p className="dishDesc">
                            5. Cheesecake
                        </p>
                        <img src={cheesecake} alt="" className="dishImg" />
                        <p className="dishDetail"> New York cheesecake is a classic and indulgent dessert that's known for its rich, creamy texture and velvety smoothness. 
                        Originating in New York City, this type of cheesecake has become famous worldwide for its distinct qualities and luxurious flavor profile.  </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients: </span> 
                        New York cheesecake is typically made with a graham cracker or cookie crust. The crust serves as the base of the cake and provides a contrasting 
                        texture to the creamy filling. The crumbled graham crackers or cookies are mixed with melted butter and often a touch of sugar before being pressed 
                        into the bottom of the baking pan.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newyork;