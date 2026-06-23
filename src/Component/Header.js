import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Set up intersection observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveLink(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        // Observe all sections
        document.querySelectorAll('section').forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const handleNavClick = (sectionId) => {
        console.log("handleNavClick called with:", sectionId);
        const element = document.getElementById(sectionId);
        console.log("Found element:", element);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            setIsMenuOpen(false);
        } else {
            console.warn("No element found with id:", sectionId);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top">
            <div className="container d-flex justify-content-between">
                <a className="navbar-brand" onClick={() => handleNavClick('Home')}>
                    <img src={logo} width={50} alt="Logo" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav">
                        {['Home', 'About', 'Skills', 'Work', 'Contact'].map((section) => (
                            <li className="nav-item" key={section}>
                                <button
                                    onClick={() => handleNavClick(section)}
                                    className={`nav-link ${activeLink === section ? 'active' : ''}`}
                                >
                                    {section}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
// done