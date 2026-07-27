import logo from "../images/Logo .svg";
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = ({setShowLogin}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
            <div className="logo">
                <img src={logo} alt="little lemon logo" />
            </div>

            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <ul className={`nav-links ${menuOpen ? 'visible' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/bookingPage">Reservation</Link></li>
                <li><Link to="/orderOnline">Order online</Link></li>
                <li onClick={()=>setShowLogin(true)}><Link to="/">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;