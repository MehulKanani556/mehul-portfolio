// src/Component/RecentWorks.js
import React from 'react';
// import './RecentWorks.css';
import restaurent from '../assets/Picture.png'
const Work = () => {
    const works = [
        { title: "Restaurant Dashboard", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: restaurent },
        { title: "Restaurant Dashboard", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: restaurent },
        { title: "Restaurant Dashboard", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: restaurent },
        { title: "Restaurant Dashboard", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: restaurent },
    ];

    return (
        <div className="recent-works container" id="Work">
            <h1 className='title text-center'>Recent Works</h1>
            <div className="works-grid row">
                {works.map((work, index) => (
                    <div className='col-md-6 p-0'>

                        <div className="work-card borders" key={index}>
                            <div className='me-2'>

                                <img className='work-img' src={work.image} alt={work.title} />
                            </div>
                            <div>

                                <h3 className='work-text'>{work.title}</h3>
                                <p>{work.description}</p>
                                <a href="#" className="view-more">View More</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;

