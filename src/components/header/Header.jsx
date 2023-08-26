import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./header.css";
import { FaBed, FaCalendarAlt, FaHistory } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { BsFillAirplaneFill, BsFillPersonFill } from 'react-icons/bs';
import { MdTour  } from 'react-icons/md';
import { DateRange } from "react-date-range";
import {useContext, useState} from 'react';
import {format} from "date-fns";
import { useNavigate, Link } from 'react-router-dom';
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from '../../context/AuthContext';
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';


const Header = ({type}) => {
    const navigate = useNavigate();
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [dates, setDates] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    
    const { user } = useContext(AuthContext);

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

    const { dispatch } = useContext(SearchContext);

    const handleSearch = () => {
        dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
        navigate("/hotels", { state: {destination, dates, options}})
    }

    const handleClickDate = () => {
        if(openOption) {
            setOpenOption(!openOption);
        }
        setOpenDate(!openDate);
    }

    const handleClickGuest = () => {
        if(openDate) {
            setOpenDate(!openDate);
        }
        setOpenOption(!openOption);
    }

    return(
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem">
                        <li><Link to = "/" > <AiFillHome/> Home </Link></li>
                    </div>
                    <div className="headerListItem">
                        <li><a  href="https://www.google.com/travel/flights" > <BsFillAirplaneFill/> Flight </a></li>
                    </div>
                    {user && (
                        <div className="headerListItem">
                            <li><Link to = "/reservation" > <FaHistory/> Reservation </Link></li>
                        </div>
                    )}
                </div>
                { type !== "list" &&
                <div>
                <h1> Travel everywhere with us!</h1>
                <div className="headerSearch">
                    <div className="headerSearchItem"> 
                            <FaBed style={{color: "lightgray"}}/>
                        {/* <input type="text" placeholder="Where are you going?" className="headerSearchInput" 
                        onChange={(e) => setDestination(e.target.value)}/> */}
                        <DatalistInput
                            placeholder="Where are you going?"
                            style={{color: "black", fontSize: "15px"}}
                            onSelect={(item) => setDestination(item.value)}
                            items={[
                            { id: 'Hanoi', value: 'Hanoi' },
                            { id: 'Dongha', value: 'Dongha' },
                            { id: 'Tucson', value: 'Tucson' },
                            { id: 'Berlin', value: 'Berlin' },
                            { id: 'Budapest', value: 'Budapest' },
                            { id: 'New York', value: 'New York' },
                            { id: 'Seattle', value: 'Seattle' },
                            { id: 'Los Angeles', value: 'Los Angeles' },
                            { id: 'London', value: 'London' },
                            ]}
                        />
                    </div>

                    <div className="headerSearchItem"> 
                            <FaCalendarAlt style={{color: "lightgray"}}/>
                        <span onClick={handleClickDate} className="headerSearchText">{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                        {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDates([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={dates}
                        className='date'
                        minDate={new Date()}
                        />}
                    </div>

                    <div className="headerSearchItem"> 
                            <BsFillPersonFill style={{color: "lightgray"}}/>
                        <span onClick={handleClickGuest} className="headerSearchText"> {`${options.adult} adult · ${options.children} children · ${options.room} room`} </span>
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
                        <button className="headerBtn" style={{color: "gray"}} onClick={handleSearch}> Search </button>
                    </div>
                </div>
                </div>}
            </div>
        </div>
    );
}

export default Header;