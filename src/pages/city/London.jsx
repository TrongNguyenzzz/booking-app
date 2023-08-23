import "./city.css";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import london1 from "../../assets/pageCity/london/london1.png";
import london2 from "../../assets/pageCity/london/london2.png";
import london3 from "../../assets/pageCity/london/london3.png";
import london4 from "../../assets/pageCity/london/london4.png";
import london5 from "../../assets/pageCity/london/london5.png";
import london6 from "../../assets/pageCity/london/london6.png";

import fish from "../../assets//pageCity/london/food/fish.png";
import breakfast from "../../assets//pageCity/london/food/breakfast.png";
import pie from "../../assets//pageCity/london/food/pie.png";
import tea from "../../assets//pageCity/london/food/tea.png";
import dinner from "../../assets//pageCity/london/food/dinner.png";

import { AiOutlineArrowRight, AiOutlineArrowLeft, AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

const London = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const HanoiSlider = [
        { title: "Buckingham Palace", img: london1 },
        { title: "The London Eye", img: london2 },
        { title: "Tower of London", img: london3 },
        { title: "Westminster Abbey", img: london4 },
        { title: "Warner Bros. Studio Tour London", img: london5 },
        { title: "IFS Cloud Cable Car", img: london6 },
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
                    <h1 className="hotelTitle"> London </h1>
                    <h2 className="hoteldesc"> About </h2>
                    <div className="hotelDescription">
                    London, the capital city of the United Kingdom, is a historic and diverse metropolis that seamlessly 
                    blends its rich heritage with modern innovation. As one of the world's most iconic cities, London offers 
                    a multitude of cultural, historical, and artistic experiences. 
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
                        <h2 className="hoteldesc"> Best Dishes in London </h2>
                        <p className="dishDesc">
                            1. Fish and Chips
                        </p>
                        <img src={fish} alt="" className="dishImg" />
                        <p className="dishDetail">
                        Fish and chips in London is a quintessential British dish that has become a beloved culinary icon, synonymous with traditional English 
                        fare. This classic combination of battered and fried fish served with crispy chips (fries) is a staple of London's food scene and a popular 
                        choice for both locals and visitors. </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients:</span> The centerpiece of the dish is the 
                        fish, typically cod or haddock, though other types of white fish may also be used. The fish fillet is coated in a light and crispy batter, made 
                        from a mixture of flour, water or beer, and seasonings. The batter provides a golden and crunchy exterior while protecting the delicate flesh of the 
                        fish during the frying process.</p>
                    
                        <p className="dishDesc">
                            2. Full English Breakfast
                        </p>
                        <img src={breakfast} alt="" className="dishImg" />
                        <p className="dishDetail"> 
                        The Full English Breakfast, often referred to simply as a "Full English" or "Fry-Up," is a hearty and iconic British breakfast that's a quintessential 
                        part of the country's culinary culture. This substantial meal is known for its variety of components, each contributing to a satisfying and indulgent breakfast experience. </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients:</span> Bacon, Sausages, Eggs, Black Pudding, White Pudding, Grilled Tomatoes, 
                        Mushrooms, Baked Beans, Toast or Fried Bread, Hash Browns.</p>

                        <p className="dishDesc">
                            3. Pie and Mash
                        </p>
                        <img src={pie} alt="" className="dishImg" />
                        <p className="dishDetail">
                        Pie and Mash is a traditional British dish that holds a special place in London's culinary history. This comforting and nostalgic meal consists of a savory meat pie, typically 
                        filled with minced meat like beef or pork, and served with mashed potatoes and a parsley sauce known as "liquor." It's a dish that reflects the working-class heritage of London 
                        and has become a symbol of the city's culinary culture. </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients:</span> Pie, Mashed Potatoes, Liquor.</p>

                        <p className="dishDesc">
                            4. Afternoon Tea
                        </p>
                        <img src={tea} alt="" className="dishImg" />
                        <p className="dishDetail"> Afternoon Tea, also known as "High Tea," is a cherished British tradition that has a strong cultural significance in London and throughout the 
                        United Kingdom. This elegant and leisurely meal is typically enjoyed in the afternoon hours and is a delightful way to indulge in a variety of treats, including tea, finger 
                        sandwiches, scones, and pastries. </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients: </span> 
                        Tea, Finger Sandwiches, Scones, Pastries and Cakes, Accoutrements.</p>

                        <p className="dishDesc">
                            5. Roast Dinner
                        </p>
                        <img src={dinner} alt="" className="dishImg" />
                        <p className="dishDetail"> A Roast Dinner in London is a cherished culinary tradition that reflects the city's rich history and diverse food culture. This classic 
                        British meal, often enjoyed on Sundays or special occasions, consists of a roasted joint of meat, accompanied by a medley of roasted vegetables, Yorkshire pudding, flavorful 
                        gravy, and assorted accompaniments. In London, a Roast Dinner offers a blend of tradition and innovation, showcasing the city's multicultural influences and contemporary twists on a beloved classic. </p>
                        <p className="ingredient"> <span style={{fontSize: "100%", fontWeight: "bold"}}>Ingredients: </span> 
                        The star of the show is the roasted meat, which can range from succulent roast beef to tender roast chicken, 
                        lamb, or pork. London's diverse culinary scene means you might also find variations like roast duck or even plant-based 
                        roast options. The meat is slow-cooked to perfection, resulting in juicy and flavorful slices.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default London;