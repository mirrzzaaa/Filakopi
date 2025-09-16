import React from "react";
import "./Footer.css";
import { FaInstagram, FaWhatsapp, FaTiktok, FaEnvelope } from "react-icons/fa";
import { SiGojek, SiGrab } from "react-icons/si";
import logoo from "../../assets/white-logo.png";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-brand">
                    <img src={logoo} alt="logo" className="footer-logo" />
                    <p className="slogan">Pouring Love in Every Cup.</p>

                    <div className="footer-info">
                        <div className="footer-hours">
                            <h4>Jam Operasional</h4>
                            <p>Senin - Minggu</p>
                            <p>08.00 - 23.00 WIB</p>
                        </div>
                        <div className="footer-address">
                            <h4>Alamat</h4>
                            <p>
                                Jl. S. Supriadi No.49B, Sukun, <br />
                                Kec. Sukun, Kota Malang, Jawa Timur 65147
                            </p>
                        </div>
                    </div>

                </div>

                <div className="footer-social">
                    <h4>Ikuti Kami</h4>
                    <div className="social-icons">
                        <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="wa">
                            <FaWhatsapp />
                        </a>
                        <a href="https://www.instagram.com/filokofie?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="ig">
                            <FaInstagram />
                        </a>
                        <a href="https://www.tiktok.com/@filokofie?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="tt">
                            <FaTiktok />
                        </a>
                        <a href="mailto:filakofie@gmail.com" className="mail">
                            <FaEnvelope />
                        </a>
                        <a href="https://gofood.co.id/malang/restaurant/filokofie-sukun-9e64260b-6f13-44ab-b203-cf49373e1c2a" target="_blank" rel="noopener noreferrer" className="gojek">
                            <SiGojek />
                        </a>
                        <a href="https://food.grab.com/" target="_blank" rel="noopener noreferrer" className="grab">
                            <SiGrab />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Filakofie. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
