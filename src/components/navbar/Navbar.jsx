import "./navbar.css";
import logo from "../../assets/hotellogo.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();
    
    const handleClick = async e => {
        e.preventDefault()
        dispatch({type:"LOGOUT"});
        navigate("/");
    }

    return(
        <div className="navbar">
            <div className="navContainer">
                <img src={logo} alt="" className="logoImg"/>
                {user ? (
                    <div className="navItems1">
                        <p> Welcome {user.details.username} </p>
                        <button className="navButton1" onClick={handleClick}>Logout</button>
                    </div>) : (
                    <div className="navItems">
                    <button className="navButton" onClick={() => navigate("/register")}>Register</button>
                    <button className="navButton" onClick={() => navigate("/login")}>Login</button>
                </div>)}
            </div>
        </div>
    )
}

export default Navbar;