import "./About.css";
import filoImage from "../../assets/cafe.jpg"; // sesuaikan path gambarnya

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
                    <h3>Filokofie Hours</h3>
                    <p>Monday – Sunday</p>
                    <p>08.00 AM – 11.00 PM</p>
                </div>
            </div>
        </section>
    );
}
