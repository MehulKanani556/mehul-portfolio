// src/Component/Skill.js
import React from 'react';
// import './Skill.css';
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import git from '../assets/git.png'

const Skill = () => {
    const skills = [
        { name: 'HTML', icon: 'html5', image: html },
        { name: 'CSS', icon: 'css3', image: css },
        { name: 'JavaScript', icon: 'javascript', image: js },
        { name: 'React.js', icon: 'react', image:react  },
        { name: 'Node.js', icon: 'node', image:  node},
        { name: 'Git', icon: 'git', image: git },
    ];

    return (
        <div className="skills-container container" id="Skills">
            <h1 className='title'>Technical Skills</h1>
            <p>Empowering people in a digital journey with my super services</p>
            <div className="skills-grid ">
                {skills.map((skill, index) => (
                    <div className="skill-card borders" key={index}>
                        <img src={skill.image} alt={skill.name} className="skill-image" />
                        <span className='skill-text'>{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;
