import "../login/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../../assets/hotellogo.png"

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
        email: undefined
    })

    const {error} = useContext(AuthContext);

    const handleChange = (e) => {
        setCredentials(prev=>({...prev, [e.target.id]: e.target.value}))
    }

    const notification = () => toast.success("Register successfully!",  {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    const fail = () => toast.error("Cannot register!",  {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });    

    const navigate = useNavigate();

    const handleClick = async e => {
        try{
            await axios.post("http://54.67.36.133:5050/api/auth/register", credentials);
            notification();
        } catch(err) {
            fail();
        }
    }

    return(
        <div className="outerLogin">
            <button className="back" onClick={() => navigate("/")}> Home </button>
            <div className="login">
            <img src={logo} alt="" className="hotelLogo"/>
                <div className="lContainer">
                    <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput"/>
                    <input type="text" placeholder="password" id="password" onChange={handleChange} className="lInput"/>
                    <input type="text" placeholder="email" id="email" onChange={handleChange} className="lInput"/>
                    <button className="lButton" onClick={handleClick} > Register </button>
                    <ToastContainer />
                    {error && <span>{error.message}</span>}
                </div> 
            </div>
        </div>
    )
}

export default Register;