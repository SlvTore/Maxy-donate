import React, { useState } from "react";
import "../styles/tentangkami.css";
import { FaUsers, FaHandsHelping, FaAward } from "react-icons/fa";
import Navigation from '../components/User/Sidenav/Navigation';
import Footer from "../components/homepage/footer/Footer";

const AboutUs = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        "https://i0.wp.com/tambahpinter.com/wp-content/uploads/2020/08/Jenis-Pendidikan-1-1920x1280.jpg",
        "https://cdn-cms.pgimgs.com/static/2020/09/1.-Mengenal-Pendidikan-di-Indonesia.png",
        "https://edutechtalks.com/wp-content/uploads/2024/01/UNESCOs-International-Day-of-Education-2024-Highlights-Global-Imperative-Countering-Hate-Speech-Through-Education.jpeg"
    ];

    const goToNext = () => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const goToPrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className="about-us">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Tentang Kami</h1>
                    <p>Menciptakan peluang melalui pendidikan dan pemberdayaan.</p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission-section">
                <div className="who-we-are">
                    <div className="content">
                        <h2>Cerita Kami</h2>
                        <p>
                        Kami memulai perjalanan ini dengan sebuah visi: menciptakan dampak positif bagi komunitas dan lingkungan di sekitar kita. Dari langkah kecil yang penuh semangat, kami berkembang menjadi sebuah komunitas yang mengutamakan nilai-nilai kebersamaan, inovasi, dan keberlanjutan.

                        <br></br><br></br>Setiap ide yang kami bangun lahir dari keinginan untuk memberikan solusi terbaik bagi permasalahan yang ada. Kami percaya bahwa kolaborasi adalah kunci untuk menciptakan perubahan yang berarti. Dengan tim yang berdedikasi dan mitra yang inspiratif, kami terus melangkah maju untuk mewujudkan mimpi menjadi kenyataan.

                        <br></br><br></br>Di balik setiap pencapaian kami, ada cerita perjuangan, pembelajaran, dan harapan. Kami hadir untuk berbagi cerita ini dengan Anda, mengajak Anda menjadi bagian dari perjalanan kami, dan bersama-sama menciptakan masa depan yang lebih baik.
                        </p>
                    </div>
                    <div className="image-slider">
                        <div className="slider">
                            <img src={images[currentSlide]} alt="Activity" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="stats-section">
                <div className="stat">
                    <FaUsers className="icon" />
                    <h3>500+</h3>
                    <p>Students Funded</p>
                </div>
                <div className="stat">
                    <FaHandsHelping className="icon" />
                    <h3>100+</h3>
                    <p>Active Donors</p>
                </div>
                <div className="stat">
                    <FaAward className="icon" />
                    <h3>5-Star</h3>
                    <p>Community Ratings</p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="gallery-section">
                <h2>Our Activities</h2>
                <div className="gallery">
                    <img src={images[0]} alt="Activity 1" />
                    <img src={images[1]} alt="Activity 2" />
                    <img src={images[2]} alt="Activity 3" />
                </div>
                <div className="gallery-nav">
                    <button onClick={goToPrev}>Previous</button>
                    <button onClick={goToNext}>Next</button>
                </div>
               
            </section>
            <Footer/>
        </div>
    );
};




export default AboutUs;
