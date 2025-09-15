import React, { useState } from "react";

// Komponen input reusable
const InputField = ({ field, value, onChange }) => (
    <div className="form-group">
        <label>{field.label}</label>
        <input
            {...field}
            name={field.name}
            value={value}
            onChange={onChange}
            autoComplete="off"
            required
        />
    </div>
);


const FormReservasi = ({ nomorWA }) => {
    const [formData, setFormData] = useState({
        nama: "",
        telepon: "",
        tanggal: "",
        waktu: "",
        jumlah: "",
    });

    const fields = [
        { name: "nama", label: "Nama", type: "text", placeholder: "Masukkan nama lengkap" },
        { name: "telepon", label: "Telepon", type: "tel", placeholder: "08xxxxxxxxxx", pattern: "[0-9]{10,13}" },
        { name: "tanggal", label: "Tanggal Reservasi", type: "date" },
        { name: "waktu", label: "Waktu Reservasi", type: "time" },
        { name: "jumlah", label: "Jumlah Orang", type: "number", min: 1, max: 20, placeholder: "Misal: 2", inputMode: "numeric" },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const generatePesanWA = (data) =>
        `Halo, saya ingin melakukan reservasi meja:
Nama: ${data.nama}
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
