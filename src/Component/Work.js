import React, { useState, useRef } from 'react';
import restaurent from '../assets/res.png';
import jewelry from '../assets/jewelry-web.png';
import photoediting from '../assets/photoediting.png';
import chat from '../assets/chat.png';
import ott from '../assets/ott.png';
import bhadepey from '../assets/bhadepey.png';
import school from '../assets/sms.png';
import clothing from '../assets/clothing.png';
import { HiMiniArrowTopRightOnSquare } from 'react-icons/hi2';
const Work = () => {
  const works = [
    { title: "Restaurant Dashboard", description: "An intuitive management tool for restaurants, streamlining operations by allowing users to manage menus, track orders, and analyze sales performance from a single platform.", image: restaurent, link: "https://commada.netlify.app/" },
    { title: "Jewellery Website", description: "An elegant e-commerce platform showcasing exquisite jewelry collections, featuring detailed product views, secure payment processing, and a seamless shopping experience for customers.", image: jewelry, link: "https://jwellery-admin.onrender.com" },
    { title: "Chat Messenger", description: "Real time chat application with authentication and private chat.Also have a feature of group chat , video call , voice call and screen share.", image: chat, link: "https://chat-message-2.onrender.com/" },
    { title: "Photo Editing", description: "A photo editing application that allows users to edit photos with a variety of tools and effects.", image: photoediting, link: "https://photo-editing.netlify.app/" },
    {
      title: "OTT Platform",
      description: "A full-featured video streaming platform with seamless HLS video playback, watchlists, premium content access control, secure authentication, and optimized performance using Redis caching. Built to deliver a modern Netflix-like viewing experience.",
      image: ott,
      link: "https://ott-platform-1-wlrw.onrender.com"
    },
    {
      title: "Bhadepey",
      description: "A comprehensive rental property management system featuring Tenant, Owner, and Super Admin panels. Includes KYC verification, automated billing, payment processing, property management, and role-based access control for streamlined rental operations.",
      image: bhadepey,
      link: "https://bhadapay.onrender.com"
    },
    {
      title: "School Management System",
      description: "A complete ERP solution for educational institutions with dedicated panels for Super Admin, School Admin, Teachers, Students, Parents, Accountants, Librarians, and Drivers. Features student admissions, attendance tracking, timetable management, fee collection, payroll, library operations, GPS-enabled transport tracking, notifications, and advanced analytics.",
      image: school,
      link: "https://school-management-system-1-6510.onrender.com"
    },
    {
      title: "Clothing E-commerce",
      description: "A scalable fashion e-commerce platform with advanced product management, size and color variants, secure Stripe payments, discount and coupon systems, order tracking, wishlist functionality, OTP-based authentication, PDF invoice generation, real-time notifications, and a powerful admin dashboard.",
      image: clothing,
      link: "https://clothing-td68.onrender.com"
    }
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