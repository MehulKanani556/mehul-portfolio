import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

function Header() {
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const onScroll = () => {
            const sections = document.querySelectorAll('div.content > div'); // Select all sections within the content div
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100; // Adjust offset as needed
                const sectionBottom = sectionTop + section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    const currentId = section.getAttribute('id');
                    setActiveLink(currentId);
                }
            });
        };

        window.addEventListener('scroll', onScroll);
        onScroll(); // Call onScroll right away to set initial active state

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleLinkClick = (link) => {
        setActiveLink(link);
        document.querySelector(`#${link}`).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top">
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
                                href="#About"
                                className={`nav-link ${activeLink === 'About' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('About')}
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#Skills"
                                className={`nav-link ${activeLink === 'Skills' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('Skills')}
                            >
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#Work"
                                className={`nav-link ${activeLink === 'Work' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('Work')}
                            >
                                Work
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#Contact"
                                className={`nav-link ${activeLink === 'Contact' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('Contact')}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
