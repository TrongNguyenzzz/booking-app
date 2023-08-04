import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./header.css";
import { FaHotel, FaBed, FaCalendarAlt } from 'react-icons/fa';
import { BsFillAirplaneFill, BsFillCarFrontFill, BsTaxiFrontFill, BsFillPersonFill } from 'react-icons/bs';
import { MdTour  } from 'react-icons/md';
import { DateRange } from "react-date-range";
import {useState} from 'react';
import {format} from "date-fns";
import { useNavigate } from 'react-router-dom';

const Header = ({type}) => {
    const navigate = useNavigate();
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

    const [openOption, setOpenOption] = useState(false);
    const [options, setOptions] = useState({
        adult:1,
        children:1,
        room:1,
    })

    const handleOption = (name, operation) => {
        setOptions((prev) => {return {
            ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        }})
    }

    const handleSearch = () => {
        navigate("/hotels", { state: {destination, date, options}})
    }

    return(
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FaHotel/>
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <BsFillAirplaneFill/>
                        <span>Flight</span>
                    </div>
                    <div className="headerListItem">
                        <BsFillCarFrontFill/>
                        <span>Car rental</span>
                    </div>
                    <div className="headerListItem">
                        <MdTour/>
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <BsTaxiFrontFill/>
                        <span>Taxis</span>
                    </div>
                </div>
                { type !== "list" &&
                <div>
                <h1> Travel everywhere with us!</h1>
                <div className="headerSearch">
                    <div className="headerSearchItem"> 
                            <FaBed style={{color: "lightgray"}}/>
                        <input type="text" placeholder="Where are you going?" className="headerSearchInput" 
                        onChange={(e) => setDestination(e.target.value)}/>
                    </div>

                    <div className="headerSearchItem"> 
                            <FaCalendarAlt style={{color: "lightgray"}}/>
                        <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className='date'
                        minDate={new Date()}
                        />}
                    </div>

                    <div className="headerSearchItem"> 
                            <BsFillPersonFill style={{color: "lightgray"}}/>
                        <span onClick={() => setOpenOption(!openOption)} className="headerSearchText"> {`${options.adult} adult · ${options.children} children · ${options.room} room`} </span>
                        {openOption && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" disabled={options.adult <= 1} onClick={() => handleOption("adult", "d")}>-</button>
                                    <span className="optionCounterNumber"> {options.adult} </span>
                                    <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" disabled={options.children <= 0} onClick={() => handleOption("children", "d")}>-</button>
                                    <span className="optionCounterNumber"> {options.children} </span>
                                    <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" disabled={options.room <= 1} onClick={() => handleOption("room", "d")}>-</button>
                                    <span className="optionCounterNumber"> {options.room} </span>
                                    <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                                </div>
                            </div>
                        </div> }
                    </div>

                    <div className="headerSearchItem"> 
                        <button className="headerBtn" style={{color: "#003580"}} onClick={handleSearch}> Search </button>
                    </div>
                </div>
                </div>}
            </div>
        </div>
    );
}

export default Header;