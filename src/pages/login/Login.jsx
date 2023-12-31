import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/hotellogo.png"

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })

    const navigate = useNavigate();

    const {error, dispatch} = useContext(AuthContext);

    const handleChange = (e) => {
        setCredentials(prev=>({...prev, [e.target.id]: e.target.value}))
    }

    const handleClick = async e => {
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try{
            const res = await axios.post("http://localhost:5050/api/auth/login", credentials);
            dispatch({ type:"LOGIN_SUCCESS", payload:res.data});
            navigate("/");
        } catch(err) {
            console.log("failed!");
            dispatch({type: "LOGIN_FAILURE", payload:err.response.data})
        }
    }

    return(
        <div>
            <button className="back" onClick={() => navigate("/")}> Home </button>
            <div className="login">
                <img src={logo} alt="" className="hotelLogo"/>
                <div className="lContainer">
                    <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput"/>
                    <input type="text" placeholder="password" id="password" onChange={handleChange} className="lInput"/>
                    <button className="lButton" onClick={handleClick}> Login </button>
                    {error && <span>{error.message}</span>}
                </div> 
            </div>
        </div>
    )
}

export default Login;