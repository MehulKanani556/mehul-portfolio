import React, { useState, useRef } from 'react';
import about from '../assets/about.png'
const About = () => {
    // Define an array of card data
    const cardData = [
        {
            title: "Experienced Developer",
            text: "Proven track record of successfully delivering full-stack web and mobile applications. Skilled in various programming languages, frameworks, and tools.",
            icon: "🏆",
            image: about
        },
        {
            title: "Problem Solver",
            text: "Strong analytical and problem-solving abilities. Can efficiently identify and address technical challenges.",
            icon: "🧩",
            image: about
        },
        {
            title: "Team Player",
            text: "Excellent communication and collaboration skills. Able to work effectively within teams to achieve project goals.",
            icon: "🤝",
            image: about
        }
    ];

    // Create an array of objects to hold about information
    const aboutInfo = [
        {
            id: 1,
            text: "I'm a passionate developer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel-perfect design, and writing clear, readable, highly performant code matters to me."
        },
        {
            id: 2,
            text: "I began my journey as a web developer in 2021, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, NestJS, TailwindCSS, Supabase, and much more."
        },
        {
            id: 3,
            text: "I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development."
        },
        {
            id: 4,
            text: "When I'm not in full-on developer mode, you can find me hovering around on Twitter or an indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on LinkedIn where I share tech-related bites and build in public, or you can follow me on GitHub."
        },
        {
            id: 5,
            text: "One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😊"
        }
    ];

    const [tilt, setTilt] = useState({ index: null, x: 0, y: 0, scale: 1 });
    const cardRefs = useRef([]);

    const handleMouseMove = (e, index) => {
        const card = cardRefs.current[index];
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const maxTilt = 15;
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
        <section className="container about my-5 scroll-animate fade-up" id="About">
            <h2 className="mb-4 title text-center">About me</h2>
            <ul>
                {aboutInfo.map(info => (
                    <li key={info.id} className="lead p-2">{info.text}</li>
                ))}
            </ul>

            <div className="row mt-5">
                {cardData.map((card, index) => (
                    <div className="col-12 col-md-4 mb-4" key={index}>
                        <div className='card d-flex flex-column ' accordion
                        
                        ref={el => cardRefs.current[index] = el}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            transform: tilt.index === index
                                ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.scale})`
                                : 'none',
                            transition: 'transform 0.1s ease-out',
                            transformStyle: 'preserve-3d',
                            width: '100%',
                            margin: '10px',
                            height: 'auto',
                            minHeight: '250px'
                        }}
                        >
                            <div
                                className="text-center flex-grow-1"
                               
                            >
                                <div className='card-icon'>
                                    <img src={card.image} alt={card.title} className='text-center' width={50} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text">{card.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
