import logo from "../images/logo-little-lemon.png";
import menuIcon from "../images/menu-icon.svg";
import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
        const toggleMenu = () => {
            setMenuOpen(!menuOpen);
        }


    return (
        <nav className= {`navbar ${menuOpen ? 'open' : ''}`}>
            <div className="logo">
                <img src={logo} alt="little lemon logo" />
            </div>

            <div className="menu-icon" onClick={toggleMenu}>
                <img src={menuIcon} alt="menu-icon" />
            </div>

            <ul className={`nav-links ${menuOpen ? 'visible' : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#reservation">Reservation</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;