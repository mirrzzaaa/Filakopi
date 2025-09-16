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
                <li>Beranda</li>
                <li>Tentang Kami</li>
                <li>Menu</li>
                <li>Reservasi</li>
                <li>Galeri</li>
                <li>FAQ</li>
            </ul>
        </nav>
    );
}

export default Navbar;
