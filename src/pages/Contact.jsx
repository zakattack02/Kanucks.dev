// src/pages/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="pt-8 pb-24 px-8 text-white min-h-screen" style={{ backgroundColor: "#1a1c1d" }}>
      <div className="container mx-auto max-w-4xl">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        
        </motion.div>

        {/* Contact Links - Simple and Clean */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="flex justify-center items-center gap-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
              <motion.a 
                href="https://github.com/zakattack02/" 
                aria-label="GitHub"
                className="p-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src="/github-mark-white.svg"
                  alt="GitHub"
                  className="w-12 h-12"
                />
              </motion.a>
              
              <motion.a 
                href="https://www.linkedin.com/in/zachary-konik/" 
                aria-label="LinkedIn"
                className="p-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src="/linkedin-white.svg"
                  alt="LinkedIn"
                  className="w-12 h-12"
                />
              </motion.a>
              
              <motion.a 
                href="mailto:zak@zmbg.us" 
                aria-label="Email"
                className="p-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src="/email-white.png"
                  alt="Email"
                  className="w-12 h-12 rounded-lg"
                />
              </motion.a>
            </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
