import React from "react";
import FormReservasi from "./FormReservasi";
import "./Reservasi.css";

export default function Reservasi() {
    return (
        <section className="reservasi">
            <div className="reservasi-text">
                <h2>Reservasi</h2>
                <p>Nikmati pengalaman ngopi yang lebih nyaman tanpa khawatir kehabisan meja.
                    Dengan reservasi, kamu bisa menentukan tanggal, jam, dan jumlah orang sesuai kebutuhanmu.</p>
            </div>
            <div className="reservasi-container">
                <FormReservasi nomorWA="6285704956920" />
            </div>
        </section>
    );
};


