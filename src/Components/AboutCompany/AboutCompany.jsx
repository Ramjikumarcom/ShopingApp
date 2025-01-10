import React from "react";
import "./AboutComapny.css"; // External CSS for styling
import image from './MT2024123.jpg'
import { Link } from "react-router-dom";
const AboutCompany = () => {
    return (
        <div className="about-page">
            <header className="about-header">
                <h1>Welcome to FunShop</h1>
                <p>Your ultimate shopping destination for happiness, quality, and value!</p>
            </header>

            <section className="about-section about-intro">
                <h2>Who We Are</h2>
                <p>
                    FunShop is more than just a shopping platform; it's a community-driven experience designed
                    to make your shopping journey exciting and rewarding. From the latest trends in fashion to
                    unique gifts, gadgets, and home essentials, we have something for everyone. With a commitment
                    to quality and affordability, FunShop has become a trusted name for shoppers worldwide.
                </p>
            </section>

            <section className="about-section about-mission">
                <h2>Our Mission</h2>
                <p>
                    At FunShop, our mission is simple: to make shopping delightful. We believe that every product
                    tells a story, and every customer deserves the best. Our goal is to connect people with products
                    that bring joy, utility, and inspiration to their lives.
                </p>
            </section>

            <section className="about-section about-values">
                <h2>Our Values</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <h3>Customer-Centric</h3>
                        <p>
                            Everything we do revolves around creating the best shopping experience for you.
                            Your satisfaction is our top priority.
                        </p>
                    </div>
                    <div className="value-card">
                        <h3>Innovation</h3>
                        <p>
                            We constantly innovate to bring you cutting-edge products and a seamless shopping
                            platform tailored to your needs.
                        </p>
                    </div>
                    <div className="value-card">
                        <h3>Quality</h3>
                        <p>
                            Every product we offer goes through a rigorous quality check to ensure you get only
                            the best.
                        </p>
                    </div>
                    <div className="value-card">
                        <h3>Community</h3>
                        <p>
                            We're more than just a shop; we're a family that values building meaningful
                            connections with our customers.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about-section about-story">
                <h2>Our Story</h2>
                <p>
                    FunShop was born from a vision to create a place where shopping is not a chore but an adventure.
                    Starting as a small local store, we have grown into an international shopping platform, loved by
                    millions. Our journey is a testament to the trust and support of our loyal customers who inspire us
                    every day to do better.
                </p>
            </section>

            <section className="about-section about-team">
                <h2>Meet Our Team</h2>
                <p>
                    Behind FunShop is a team of passionate individuals committed to excellence. From our creative designers
                    and tech experts to our friendly customer service team, everyone at FunShop shares one goal: to make
                    shopping a joy for you.
                </p>
                <div className="team-grid">
                    <div className="team-member">
                        <img style={{ height: '320px', width: '320px', marginTop: '50px' }} src={image} alt="Ramji Kumar" />
                        <h3>Ramji Kumar</h3>
                        <p>Founder & CEO</p>
                    </div>

                </div>
            </section>

            <footer className="about-footer">
                <p>Join the FunShop family and make every shopping experience unforgettable!</p>
                <p>Contact us at: <Link to="mailto:ramjik708@gmail.com">ramjik708@gmail.com</Link></p>
            </footer>
        </div>
    );
};

export default AboutCompany;
