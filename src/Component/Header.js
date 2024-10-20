// src/Component/Header.js

import React, { useState } from 'react';
import logo from '../assets/logo.png'

function Header() {
    const [activeLink, setActiveLink] = useState('Home');

    const handleLinkClick = (link) => {
        setActiveLink(link); // Set the active link
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
            <div className="container d-flex justify-content-between">
                <a className="navbar-brand" href="#"><img src={logo} width={50} alt="Logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a
                                href="#Home"
                                className={`nav-link ${activeLink === 'Home' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('Home')}
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#"
                                className={`nav-link ${activeLink === 'About' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('About')}
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a

                                className={`nav-link ${activeLink === 'Skills' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('Skills')}
                                href="#">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeLink === 'Work' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('Work')} href="#">Work</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeLink === 'Testimonial' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('Testimonial')} href="#">Testimonial</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeLink === 'Contact' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('Contact')} href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
