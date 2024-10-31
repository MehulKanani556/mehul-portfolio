import React, { useState, useEffect, useCallback } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [particles, setParticles] = useState([]);

  // Generate random particles
  const generateParticles = useCallback(() => {
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        size: Math.random() * 10 + 5,
        duration: Math.random() * 3 + 2,
        tx: (Math.random() - 0.5) * 200,
        ty: -(Math.random() * 200 + 100),
      });
    }
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    generateParticles();
    
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLoading(false);
            if (onLoadingComplete) onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadingComplete, generateParticles]);

  if (!isLoading) return null;

  return (
    <div className="loading-container">
      {/* Floating particles */}
      <div id="load">
  <div>G</div>
  <div>N</div>
  <div>I</div>
  <div>D</div>
  <div>A</div>
  <div>O</div>
  <div>L</div>
</div>
    </div>
  );
};

export default LoadingScreen;