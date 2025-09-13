import React, { useState } from "react";

// Komponen input reusable
const InputField = ({ field, value, onChange }) => (
    <div className="form-group">
        <label>{field.label}</label>
        <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder || ""}
            value={value}
            onChange={onChange}
            min={field.min}
            max={field.max}
            required
        />
    </div>
);

const FormReservasi = ({ nomorWA }) => {
    const [formData, setFormData] = useState({
        nama: "",
        email: "",
        telepon: "",
        tanggal: "",
        waktu: "",
        jumlah: "",
    });

    const fields = [
        { name: "nama", label: "Nama", type: "text", placeholder: "Masukkan nama lengkap" },
        { name: "email", label: "Email", type: "email", placeholder: "Masukkan email" },
        { name: "telepon", label: "Telepon", type: "tel", placeholder: "08xxxxxxxxxx" },
        { name: "tanggal", label: "Tanggal Reservasi", type: "date" },
        { name: "waktu", label: "Waktu Reservasi", type: "time" },
        { name: "jumlah", label: "Jumlah Orang", type: "number", min: 1, max: 20, placeholder: "Misal: 2" },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const generatePesanWA = (data) =>
        `Halo, saya ingin melakukan reservasi meja:
Nama: ${data.nama}
Email: ${data.email}
Telepon: ${data.telepon}
Tanggal: ${data.tanggal}
Waktu: ${data.waktu}
Jumlah Orang: ${data.jumlah}`;

    const handleSubmit = (e) => {
        e.preventDefault();

        for (const key in formData) {
            if (!formData[key]) {
                alert("Harap isi semua field sebelum mengirim reservasi!");
                return;
            }
        }

        window.open(
            `https://wa.me/${nomorWA}?text=${encodeURIComponent(generatePesanWA(formData))}`,
            "_blank"
        );
    };

    return (
        <form className="reservasi-form" onSubmit={handleSubmit}>
            {fields.map((field) => (
                <InputField
                    key={field.name}
                    field={field}
                    value={formData[field.name]}
                    onChange={handleChange}
                />
            ))}

            <button type="submit" className="btn-reservasi">
                Pesan Sekarang
            </button>
        </form>
    );
};

export default FormReservasi;
