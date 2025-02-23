import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
    const [navbarHidden, setNavbarHidden] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const overlay = document.getElementById("overlay");
            const bg = document.getElementById("bg");

            if (overlay && bg) {
                setNavbarHidden(overlay.getBoundingClientRect().bottom > 0);
                let blurAmount = Math.max(0, 10 - window.scrollY / 150);
                bg.style.filter = `blur(${blurAmount}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Sample function to cycle through gallery items
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {/* Navbar */}
            <div className={`navbar ${navbarHidden ? "hidden" : ""}`}>
                <img
                    src="https://centralperk.com/cdn/shop/files/new_logo_main_white_250x@2x.png?v=1695018061"
                    className="nav-logo"
                    alt="Central Perk Logo"
                />
                <a href="menu">Menu</a>
                <a href="seating">BaristAI</a>
                <a href="barista">Seating</a>
                <a href="review">Customer Reviews</a>
            </div>

            {/* Background */}
            <div className="background" id="bg"></div>

            {/* Overlay Logo */}
            <div className="content">
                <a href="./index.html">
                    <img
                        src="https://centralperk.com/cdn/shop/files/new_logo_main_white_250x@2x.png?v=1695018061"
                        className="overlay-image"
                        id="overlay"
                        alt="Overlay Logo"
                    />
                </a>
            </div>

            <div className="spacer"></div>

            {/* Gallery Section */}
            <div className="gallery">
                {currentIndex === 0 && (
                    <div className="gallery-item Rachel">
                        <p className="Text" style={{ fontSize: "2rem" }}>
                            INCOMING!! <br />
                            How will I grow, if you won't let me blow?!
                        </p>
                        <p>Join us this Friday for an exclusive online interview with THE Jennifer Aniston</p>
                    </div>
                )}
                {currentIndex === 1 && (
                    <div className="gallery-item Quiz">
                      <a className="linkkk"href="../public/quiz.html">
                        <p className="Text" style={{ fontSize: "2rem" }}>
                            OH! MY! GOD! <br />
                            Attempt this quiz and get fancy discounts!
                        </p>
                        <p>Find out how much you actually know about the TV show</p>
                        </a>
                    </div>
                )}
                {currentIndex === 2 && (
                    <div className="gallery-item CoffeeAd">
                        <p className="Text" style={{ fontSize: "2rem", width: "50%" }}>
                            Limited Time Sale - Get 30% Off on Coffee!
                        </p>
                    </div>
                )}
            </div>

            {/* Best-Selling Items */}
            <div className="best-selling">
                <h2>Check Out Our Best Selling Items</h2>
                <div className="best-items">
                    <div className="item">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREN9U64HZaf_JkHhdclpUqmzNRN4m0PQRg0w&s"
                            alt="Iced Caramel Latte"
                        />
                        <p>Iced Caramel Latte</p>
                    </div>
                    <div className="item">
                        <img
                            src="https://sallysbakingaddiction.com/wp-content/uploads/2018/03/chocolate-croissants-2.jpg"
                            alt="Chocolate Croissant"
                        />
                        <p>Chocolate Croissant</p>
                    </div>
                    <div className="item">
                        <img
                            src="https://www.allrecipes.com/thmb/8NccFzsaq0_OZPDKmf7Yee-aG78=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AvocadoToastwithEggFranceC4x3-bb87e3bbf1944657b7db35f1383fabdb.jpg"
                            alt="Avocado Toast"
                        />
                        <p>Avocado Toast</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
