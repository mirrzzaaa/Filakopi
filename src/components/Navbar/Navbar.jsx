import React from "react";
import "./Navbar.css"
import logo from "../../assets/logo.png";


function Navbar() {
    return (
        <nav className='container'>
            <img src={logo} alt="logo" style={{ height: "40px", width: "auto" }} />
            <ul>
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
