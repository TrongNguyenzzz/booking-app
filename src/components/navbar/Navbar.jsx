import "./navbar.css";
import logo from "../../assets/hotellogo.png";

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navContainer">
                <img src={logo} alt="" className="logoImg"/>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;