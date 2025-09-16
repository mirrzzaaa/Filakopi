import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <ul className={isOpen ? "nav-menu show" : "nav-menu"}>
                <li><a href="#tentang">Tentang Kami</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservasi">Reservasi</a></li>
                <li><a href="#galeri">Galeri</a></li>
                <li><a href="#faq">FAQ</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
