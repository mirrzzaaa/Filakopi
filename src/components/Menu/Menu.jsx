import { useEffect, useRef } from "react";
import { PageFlip } from "page-flip";
import "./Menu.css";

import menu1 from "../../assets/menu1.jpg";
import menu2 from "../../assets/menu2.jpg";
import menu3 from "../../assets/menu3.jpg";
import menu4 from "../../assets/menu4.jpg";

export default function Menu() {
    const bookRef = useRef(null);

    useEffect(() => {
        if (bookRef.current) {
            const pageFlip = new PageFlip(bookRef.current, {
                width: 640,
                height: 1138,
                size: "stretch",
                minWidth: 320,
                maxWidth: 1280,
                minHeight: 569,
                maxHeight: 2276,
                maxShadowOpacity: 0.5,
                showCover: false,
                mobileScrollSupport: true,
            });

            // Masukkan halaman sebagai <img>, bukan div.page di DOM
            pageFlip.loadFromImages([menu1, menu2, menu3, menu4]);
        }
    }, []);

    return (
        <div className="menu-container">
            <div className="menu-intro">
                <p>
                    Di Filakofie, kamu bisa menemukan beragam pilihan – dari makanan ringan,
                    hidangan utama, sampai minuman segar yang bikin hari makin hidup.
                    Semua tersaji dengan rasa yang khas untuk menemani setiap momenmu
                </p>
            </div>
            <div className="menu-book" ref={bookRef}></div>
        </div>
    );
}
