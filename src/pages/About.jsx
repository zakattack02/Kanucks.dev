// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="py-24 px-8 bg-gray-800 text-white min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-8 text-center max-w-4xl">
        <h2 className="text-4xl font-bold mb-12">About Me</h2>
        <div className="space-y-8">
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            I am a Computer Engineer passionate about technology and innovation.
            I specialize in software development, embedded systems, and hardware
            design. I believe in solving real-world problems through cutting-edge
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
