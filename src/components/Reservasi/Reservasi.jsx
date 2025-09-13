import React from "react";
import FormReservasi from "./FormReservasi";
import "./Reservasi.css";

export default function Reservasi() {
    return (
        <section className="reservasi">
            <div className="reservasi-container">
                <h2>Reservasi Meja</h2>
                <p>Pesan meja sekarang agar pengalaman ngopimu lebih nyaman 🎉</p>
                <FormReservasi nomorWA="6285704956920" />
            </div>
        </section>
    );
};


