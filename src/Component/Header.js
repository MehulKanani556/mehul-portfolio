import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
    const [activeLink, setActiveLink] = useState('Home');
    console.log(window.scrollY); // Check initial scroll position

    useEffect(() => {
        const handleScroll = () => {
            console.log("Scroll event triggered");
            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.scrollY + 150; // Offset for header height
            console.log("Current scroll position:", scrollPosition);

            let newActiveLink = 'Home'; // Default to Home
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (
                    scrollPosition >= sectionTop &&
                    scrollPosition < sectionTop + sectionHeight
                ) {
                    newActiveLink = sectionId; // Update new active link
                }
            });

            if (newActiveLink !== activeLink) {
                console.log("Active section:", newActiveLink);
                setActiveLink(newActiveLink);
            }
        };

        const optimizedHandleScroll = () => requestAnimationFrame(handleScroll);
        window.addEventListener('scroll', optimizedHandleScroll);
        // handleScroll(); // Initial check on load

        return () => window.removeEventListener('scroll', optimizedHandleScroll);
    }, [activeLink]); // Add activeLink to dependencies

    // handleScroll();

    const scrollToTop = () => {
        scroll.scrollToTop();
        setActiveLink('Home');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top">
            <div className="container d-flex justify-content-between">
                <a className="navbar-brand" href="#Home" onClick={scrollToTop}>
                    <img src={logo} width={50} alt="Logo" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {['Home', 'About', 'Skills', 'Work', 'Contact'].map((section) => (
                            <li className="nav-item" key={section}>
                                <a
                                    href={`#${section}`}
                                    className={`nav-link ${activeLink === section ? 'active' : ''}`}
                                    onClick={() => setActiveLink(section)}
                                >
                                    {section}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
