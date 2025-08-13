import logo from "../images/Logo .svg";
import { useState } from "react";



const Navbar = () => {
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
                <li><a href="/#">Home</a></li>
                <li><a href="/#">About</a></li>
                <li><a href="/#">Reservation</a></li>
                <li><a href="/#">Order online</a></li>
                <li><a href="/#">Login</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;