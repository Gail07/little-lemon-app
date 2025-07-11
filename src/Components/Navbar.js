const Navbar = () => {
    return (
        <nav className="navbar">
            <img src="/src/images/logo little lemon.png" alt="Little Lemon Logo" className="logo" width="100" height="100" />
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#reservation">Reservation</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;