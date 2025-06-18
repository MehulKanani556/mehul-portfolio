import React, { useState, useRef } from 'react';
import restaurent from '../assets/res.jpg';
import jewelry from '../assets/jewelry-web.jpg';
import photoediting from '../assets/photoediting.jpg';
import chat from '../assets/chat.png';
import { HiMiniArrowTopRightOnSquare } from 'react-icons/hi2';
const Work = () => {
    const works = [
        { title: "Restaurant Dashboard", description: "An intuitive management tool for restaurants, streamlining operations by allowing users to manage menus, track orders, and analyze sales performance from a single platform.", image: restaurent,link:"https://commada.netlify.app/" },
        { title: "Jewellery Website", description: "An elegant e-commerce platform showcasing exquisite jewelry collections, featuring detailed product views, secure payment processing, and a seamless shopping experience for customers.", image: jewelry, link:"https://jwellery-admin.onrender.com" },
        { title: "Chat Messenger", description: "Real time chat application with authentication and private chat.Also have a feature of group chat , video call , voice call and screen share.", image: chat,link:"https://chat-message-2.onrender.com/" },
        { title: "Photo Editing", description: "A photo editing application that allows users to edit photos with a variety of tools and effects.", image: photoediting,link:"https://photo-editing.netlify.app/" },
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
        className='col-md-6 p-3 d-flex'
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
    <section className="recent-works work container scroll-animate flip-y" id="Work">
      <h1 className='title text-center'>Recent Works</h1>
      <div className="works-grid row">
        {works.map((work, index) => (
          <CardWithTilt key={index} work={work} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Work;