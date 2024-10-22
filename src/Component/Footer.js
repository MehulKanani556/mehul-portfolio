// src/Component/Footer.js
import React from 'react';
// import './Footer.css'; // Import the CSS file
import logo from '../assets/logo.png'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="logo">
                    <img width={50} src={logo} alt="" />
                    </div>
                <nav className="footer-nav">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#work">Work</a>
                    <a href="#testimonial">Testimonial</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;

