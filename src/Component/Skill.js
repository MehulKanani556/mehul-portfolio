// src/Component/Skill.js
import React, { useState, useRef } from 'react';
// import './Skill.css';
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import git from '../assets/git.png'

const Skill = () => {
    const skills = [
        { name: 'HTML', image: html },
        { name: 'CSS', image: css },
        { name: 'JavaScript', image: js },
        { name: 'React.js', image: react },
        { name: 'Node.js', image: node },
        { name: 'Git', image: git },
    ];

    const [tilt, setTilt] = useState({ index: null, x: 0, y: 0, scale: 1 });
    const cardRefs = useRef([]);

    const handleMouseMove = (e, index) => {
        const card = cardRefs.current[index];
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate tilt angles
        const maxTilt = 15; // Maximum tilt angle
        const deltaX = (e.clientX - centerX) / (rect.width / 2);
        const deltaY = (e.clientY - centerY) / (rect.height / 2);

        setTilt({
            index: index,
            x: -deltaY * maxTilt,
            y: deltaX * maxTilt,
            scale: 1.05
        });
    };

    const handleMouseLeave = () => {
        setTilt({ index: null, x: 0, y: 0, scale: 1 });
    };

    return (
        <section className="skills-container skill container scroll-animate stagger-children" id="Skills">
            <h1 className='title'>Technical Skills</h1>
            <p>Empowering people in a digital journey with my super services</p>
            <div className="skills-grid ">
                {skills.map((skill, index) => (
                    <div 
                        className="skill-card borders " 
                        key={index}
                        ref={el => cardRefs.current[index] = el}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            transform: tilt.index === index 
                                ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.scale})` 
                                : 'none',
                            transition: 'transform 0.1s ease-out, box-shadow 0.3s ease',
                            transformStyle: 'preserve-3d',
                            boxShadow: tilt.index === index ? '0 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
                        }}
                    >
                        <img src={skill.image} alt={skill.name} className="skill-image" />
                        <span className='skill-text'>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skill;
