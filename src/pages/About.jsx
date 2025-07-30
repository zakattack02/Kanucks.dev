// src/pages/About.jsx
import React, { useState } from 'react';
import InteractiveResume from '../components/InteractiveResume';

const About = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="pt-32 pb-24 px-8 text-white min-h-screen flex flex-col justify-center" style={{ backgroundColor: "#1a1c1d" }}>
      <div className="container mx-auto px-8 text-center max-w-4xl">
        <h2 className="text-4xl font-bold mb-12">About Me</h2>
        <div className="space-y-8">
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            I am a Computer Engineer passionate about technology and innovation.
            I specialize in software development, embedded systems, and hardware
            design. I believe in solving real-world problems through cutting-edge
            solutions.
          </p>
          
          <button 
            onClick={() => setShowResume(!showResume)}
            className="mt-8 px-8 py-3 backdrop-blur-md bg-white/20 border border-white/30 text-white font-semibold rounded-full hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            {showResume ? 'Hide Resume' : 'View Interactive Resume'}
          </button>
        </div>
        
        {showResume && <InteractiveResume />}
      </div>
    </div>
  );
};

export default About;
