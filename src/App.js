import React, { useState, useEffect } from 'react';
import Background from './Component/Background'
import './App.css';
import Header from './Component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
// Add Bootstrap's JavaScript
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Component/Home';
import About from './Component/About';
import Skill from './Component/Skill';
import Work from './Component/Work';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import LoadingScreen from './Component/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAnimations = () => {
      animationController.initSplitText();
      animationController.initGlitchText();
      animationController.initParallax();
      animationController.initScrollObserver();
    };

    if (!isLoading) {
      initAnimations();
    }
  }, [isLoading]);

  return (
    <>
      <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      <div className={`app ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
        <Header />
        <Background />
        <div className="content">
          <Home />
          <About />
          <Skill />
          <Work />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

// Add this function to initialize scroll animations
// Animation utility functions
const animationController = {
  // Split text into spans for letter-by-letter animation
  initSplitText: () => {
    document.querySelectorAll('.letter-reveal').forEach(element => {
      const text = element.textContent;
      element.textContent = '';
      [...text].forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.transitionDelay = `${i * 0.05}s`;
        element.appendChild(span);
      });
    });
  },

  // Initialize glitch text
  initGlitchText: () => {
    document.querySelectorAll('.glitch-text').forEach(element => {
      element.setAttribute('data-text', element.textContent);
    });
  },

  // Handle parallax scrolling
  initParallax: () => {
    const parallaxElements = document.querySelectorAll('.parallax-scroll');
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.5;
            const rect = element.getBoundingClientRect();
            const scrolled = window.pageYOffset;
            
            const offset = (scrolled - rect.top) * speed;
            element.style.setProperty('--scroll-offset', `${offset}px`);
          });
          ticking = false;
        });
        ticking = true;
      }
    });
  },

  // Initialize intersection observer with advanced options
  initScrollObserver: () => {
    const observerOptions = {
      threshold: buildThresholdList(),
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Handle progress-based animations
          if (entry.intersectionRatio > 0) {
            const progress = entry.intersectionRatio;
            entry.target.style.setProperty('--scroll-progress', progress.toString());
          }
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll([
      '.scroll-animate',
      '.flip-card-3d',
      '.swirl-in',
      '.wave-sequence',
      '.split-text',
      '.morph-bg',
      '.glitch-text',
      '.letter-reveal',
      '.elastic-bounce',
      '.parallax-container'
    ].join(',')).forEach(element => observer.observe(element));
  }
};

// Helper function to create multiple thresholds for smooth animations
function buildThresholdList() {
  const thresholds = [];
  const numSteps = 20;

  for (let i = 0; i <= numSteps; i++) {
    thresholds.push(i / numSteps);
  }
  return thresholds;
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
  animationController.initSplitText();
  animationController.initGlitchText();
  animationController.initParallax();
  animationController.initScrollObserver();
});