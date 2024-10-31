import React, { useState, useRef } from 'react';
import restaurent from '../assets/comada.png'
import food from '../assets/food.png'
import { HiMiniArrowTopRightOnSquare } from 'react-icons/hi2';
const Work = () => {
    const works = [
        { title: "Restaurant Dashboard", description: "The Restaurant Admin Panel is an intuitive management tool designed for restaurant owners and managers. It streamlines operations by allowing users to manage menus, track orders, optimize table arrangements, oversee staff, and analyze sales performance—all from a single platform.", image: restaurent,link:"https://commada.netlify.app/" },
        { title: "Food Odering", description: "A streamlined platform for ordering food from a single restaurant. Users can browse the menu, place orders, and make secure payments while managing their profiles and viewing order history. Administrators can add menu items,  and access user profiles, ensuring efficient restaurant management.", image: food,link:"https://food-mehul.netlify.app/" },
        // { title: "Restaurant Dashboard", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: restaurent },
        // { title: "Restaurant Dashboard", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: restaurent },
    ];

  const CardWithTilt = ({ work, index }) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0, scale: 1 });
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
      if (!cardRef.current) return;

      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate tilt angles
      const maxTilt = 15; // Maximum tilt angle
      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);

      setTilt({
        x: -deltaY * maxTilt,
        y: deltaX * maxTilt,
        scale: 1.05
      });
    };

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0, scale: 1 });
    };

    return (
      <div 
        className='col-md-6 p-1 d-flex'
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          ref={cardRef}
          className="work-card borders row m-0 p-2" 
          key={index}
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.scale})`,
            transition: 'transform 0.1s ease-out',
            transformStyle: 'preserve-3d',
            boxShadow: '0 10px 20px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.06)',
            flexDirection: 'row',
          }}
        >
          <div className='col-md-6 d-flex align-items-center'>
            <img 
              className='work-img' 
              src={work.image} 
              alt={work.title} 
              style={{
                transform: 'translateZ(50px)',
                transition: 'transform 0.1s ease-out',
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
          <div className='col-md-6 d-flex flex-column justify-content-center'>
            <h3 className='work-text'>{work.title}</h3>
            <p>{work.description}</p>
            <a href={work.link} className="view-more" target="_blank">
              <HiMiniArrowTopRightOnSquare />
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="recent-works work container scroll-animate flip-y" id="Work">
      <h1 className='title text-center'>Recent Works</h1>
      <div className="works-grid row">
        {works.map((work, index) => (
          <CardWithTilt key={index} work={work} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Work;