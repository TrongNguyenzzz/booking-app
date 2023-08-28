import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./reserve.css"
import { AiFillCloseCircle } from "react-icons/ai";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reserve = ({setOpen, hotelId, hotelName, hotelPic, duration}) => {
    const [selectedRoom, setSelectedRoom] = useState([])
    const { data } = useFetch(`http://localhost:5050/api/hotels/room/${hotelId}`)
    const { dates } = useContext(SearchContext);
    const { user } = useContext(AuthContext);

    const prices = {}

    const getPrices = (temp) => {
        data.map((item) => {
            item.roomNumbers.map((room) => {
                temp[room.number] = item.price
            })
        })
    }

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const date = new Date(start.getTime());

        const list = []

        while(date <= end) {
            list.push(new Date(date).getTime());
            date.setDate(date.getDate()+1)
        }

        return list
    }

    const notification = () => toast.success("Reserve successfully!",  {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate)
    getPrices(prices);

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((date) => 
            allDates.includes(new Date(date).getTime())
        );
        return !isFound
    }

    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRoom(
            checked ? [...selectedRoom, value]
            : selectedRoom.filter((item) => item !== value)
        )
    }
    
    const handleClick = async () => {
        try{
            await Promise.all(selectedRoom.map((roomId) => {
                const myArr = roomId.split(",");
                const roomNum = parseInt(myArr[1]);
                const totalPrice = prices[roomNum] * duration;
                const res = axios.put(`http://localhost:5050/api/room/availability/${myArr[0]}`, {dates: allDates,});
                axios.post(`http://localhost:5050/api/reservation/${user.details._id}`, {user: user.details._id, room: myArr[0], 
                dates: allDates, hotel: hotelId, hotelName: hotelName, roomNumber: roomNum, hotelPhoto: hotelPic, total: totalPrice})
                return res.data;
            }));
            notification();
            // setOpen(false);
            // navigate("/");
        } catch(err) {}
    }

    return(
        <div className="reserve">
            <div className="rContainer">
                <AiFillCloseCircle className="rClose" onClick={() => setOpen(false)}/>
                <span> Select your rooms: </span>
                {data.map((item) => (
                    <div className="rItem">
                        <div className="rItemInfo">
                            <div className="rTitle">{item.title}</div>
                            <div className="rDesc">{item.desc}</div>
                            <div className="rMax">
                                Max people: <b>{item.maxPeople}</b>
                            </div>
                            <div className="rPrice">{item.price}</div>
                        </div>

                        <div className="rSelectRoom">
                            {item.roomNumbers.map(roomNumber => ( 
                                <div className="room">
                                    <label>{roomNumber.number}</label>
                                    <input type="checkbox" value={[roomNumber._id, roomNumber.number]} onChange={handleSelect} disabled={!isAvailable(roomNumber)}/>
                                </div>
                                ))}
                            </div>
                    </div>
                ))}
                <button onClick={handleClick} className="rButton">Reserve now</button>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Reserve;