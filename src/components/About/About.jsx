import "./About.css";
import filoImage from "../../assets/cafe.jpg";

export default function About() {
    return (
        <section className="about">
            <div className="about-image">
                <img src={filoImage} alt="Filokofie Malang" />
            </div>
            <div className="about-text">
                <p>
                    Filokofie kedai kopi yang menghadirkan suasana vintage
                    dengan nuansa putih dan hijau tosca. Kami percaya setiap cangkir kopi
                    dan setiap hidangan sederhana membawa cerita dari obrolan santai,
                    kerja produktif, hingga momen kebersamaan.
                </p>
                <div className="about-hours">
                    <h3>Jam Operasional</h3>
                    <p>Minggu - Sabtu</p>
                    <p>08.00 WIB - 23.00 WIB</p>
                </div>
            </div>
        </section>
    );
}
