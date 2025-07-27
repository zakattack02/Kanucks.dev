import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { startCanvasAnimation } from "../scripts/City.js";
import "../index.css";

export default function Main() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      startCanvasAnimation(canvas);
    }
  }, []);

  return (
    <div className="bg-[#1a1c1d] text-[#eeeeee] min-h-screen flex flex-col justify-center items-center font-[Arvo] text-center pt-20 relative overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1c1d 50%, #2a2c2d 100%)",
          opacity: 0.7
        }}
      />
      
      {/* Content */}
      <div className="flex flex-col items-center justify-center space-y-8 relative z-10">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center drop-shadow-2xl"
          style={{
            textShadow: "0 0 20px rgba(238, 238, 238, 0.5), 0 0 40px rgba(238, 238, 238, 0.3)"
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Zak Konik
        </motion.h1>
        
        <motion.div
          className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a 
            href="https://github.com/zakattack02/" 
            aria-label="GitHub"
            className="hover:scale-110 transition-transform duration-200 p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 hover:bg-white/10"
          >
            <img 
              alt="GitHub" 
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 drop-shadow-lg" 
              src="/github-mark-white.svg"
            />
          </a>
          <a 
            href="https://www.linkedin.com/in/zachary-konik/" 
            aria-label="LinkedIn"
            className="hover:scale-110 transition-transform duration-200 p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 hover:bg-white/10"
          >
            <img 
              alt="LinkedIn" 
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 drop-shadow-lg" 
              src="/linkedin-white.svg"
            />
          </a>
          <a 
            href="mailto:zak@zmbg.us" 
            aria-label="Email"
            className="hover:scale-110 transition-transform duration-200 p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 hover:bg-white/10"
          >
            <img 
              alt="Email" 
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 drop-shadow-lg" 
              src="/email-white.png"
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
