// src/Component/Footer.js
import React from 'react';
// import './Footer.css'; // Import the CSS file
import logo from '../assets/logo.png'
const Footer = () => {
    return (
        <footer className="footer scroll-animate">
            <div className="footer-content">
                <div className="logo">
                    <img width={50} src={logo} alt="" />
                    </div>
                <nav className="footer-nav">
                    {/* <a href="#Home">Home</a> */}
                    <a href="#About">About</a>
                    <a href="#Skills">Skills</a>
                    <a href="#Work">Work</a>
                    {/* <a href="#testimonial">Testimonial</a> */}
                    <a href="#Contact">Contact</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;

