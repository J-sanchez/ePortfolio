import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video container */}
      <div className="relative w-screen mx-auto">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-screen h-screen object-cover"
          style={{
            transform: `translateY(${scrollPosition * 0.3}px)`, // Parallax effect
          }}
        >
          <source src="/mountains.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
      
        <h1 className="text-5xl font-bold">Welcome to my portfolio!</h1>
        <p className="mt-4 text-lg">I hope you enjoy!</p>
      </div>
    </div>
  );
};

export default Hero;




