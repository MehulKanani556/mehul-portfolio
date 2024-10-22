import React from 'react';
import about from '../assets/about.png'
const About = () => {
    // Define an array of card data
    const cardData = [
        {
            title: "Experienced Developer",
            text: "Proven track record of successfully delivering full-stack web and mobile applications. Skilled in various programming languages, frameworks, and tools."
        },
        {
            title: "Problem Solver",
            text: "Strong analytical and problem-solving abilities. Can efficiently identify and address technical challenges."
        },
        {
            title: "Team Player",
            text: "Excellent communication and collaboration skills. Able to work effectively within teams to achieve project goals."
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

    return (
        <div className="container  my-5" id="About">
            <h2 className="mb-4 title text-center">About me</h2>
            <ul >
                {/* Map over the aboutInfo array to render paragraphs */}
                {aboutInfo.map(info => (
                    <li key={info.id} className="lead p-2">{info.text}</li>
                ))}
            </ul>
            {/* <p className="lead">
                I'm a passionate developer who specializes in full stack development (React.js & Node.js).
                I am very enthusiastic about bringing the technical and visual aspects of digital products to life.
                User experience, pixel-perfect design, and writing clear, readable, highly performant code matters to me.
            </p>
            <p className="lead">
                I began my journey as a web developer in 2021, and since then, I've continued to grow and evolve as a developer,
                taking on new challenges and learning the latest technologies along the way.
                I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, NestJS,
                TailwindCSS, Supabase, and much more.
            </p>
            <p className="lead">
                I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
            </p>
            <p className="lead">
                When I'm not in full-on developer mode, you can find me hovering around on Twitter or an indie hacker,
                witnessing the journey of early startups or enjoying some free time.
                You can follow me on LinkedIn where I share tech-related bites and build in public, or you can follow me on GitHub.
            </p>
            <p className="lead">
                One last thing, I'm available for freelance work, so feel free to reach out and say hello!
                I promise I don't bite 😊
            </p> */}

            <div className="row mt-5">
                {cardData.map((card, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card text-center">
                            <div className=''>
                                <div>
                                    <img src={about} width={50} alt="About me" />
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
        </div>
    );
};

export default About;
