import React from "react";
import "./Galeri.css";

import foto1 from "../../assets/foto1.jpg";
import foto2 from "../../assets/foto2.jpg";
import foto3 from "../../assets/foto3.jpg";
import foto4 from "../../assets/foto4.jpg";
import foto5 from "../../assets/foto5.jpg";
import foto6 from "../../assets/foto6.jpg";
import foto7 from "../../assets/foto7.jpg";
import foto8 from "../../assets/foto8.jpg";


const Galeri = () => {
    const photos = [
        {
            url: "https://www.instagram.com/p/DMXXMRkJRnK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            img: foto1,
            alt: "Foto 1"
        },
        {
            url: "https://www.instagram.com/p/C1EeSvqvqjZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            img: foto2,
            alt: "Foto 2"
        },
        {
            url: "https://www.instagram.com/p/CwXPjAYJAVK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            img: foto4,
            alt: "Foto 4"
        },
        {
            url: "https://www.instagram.com/p/C0EH6laIQRl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            img: foto3,
            alt: "Foto 3"
        },
        {
            url: "https://www.instagram.com/p/CqKv-Ubp0Eo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            img: foto5,
            alt: "Foto 5"
        },
        {
            url: "https://www.instagram.com/p/CsD0QVtpwld/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            img: foto6,
            alt: "Foto 6"
        },
        {
            url: "https://www.instagram.com/p/CpUqN0nJri3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            img: foto7,
            alt: "Foto 7"
        },
        {
            url: "https://www.instagram.com/p/ClDgbUIpmqq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            img: foto8,
            alt: "Foto 8"
        }
    ];

    return (
        <section className="galeri">
            <div className="galeri-grid">
                {photos.map((photo, index) => (
                    <a
                        key={index}
                        href={photo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="galeri-item"
                    >
                        <img src={photo.img} alt={photo.alt} />
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Galeri;
