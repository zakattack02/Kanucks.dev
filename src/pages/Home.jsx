import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { startCanvasAnimation } from "../scripts/City.js";
import "../index.css";

export default function Main() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      // Set canvas dimensions immediately
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Clear canvas first
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Start the animation with a small delay to ensure canvas is ready
      setTimeout(() => {
        try {
          startCanvasAnimation(canvas);
          console.log('City animation started');
        } catch (error) {
          console.error('Error starting city animation:', error);
        }
      }, 100);
      
      // Handle window resize
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-[#eeeeee] min-h-screen relative overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full z-0"
        style={{
          backgroundColor: "#0a0a0a"
        }}
      />
      
      {/* Content - positioned at top */}
      <div className="relative z-50 pt-32 flex flex-col items-center space-y-8">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center"
          style={{
            color: "#ffffff"
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
            className="hover:scale-110 transition-transform duration-200 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/20 hover:bg-white/20 shadow-2xl"
          >
            <img 
              alt="GitHub" 
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 drop-shadow-2xl" 
              src="/github-mark-white.svg"
            />
          </a>
          <a 
            href="https://www.linkedin.com/in/zachary-konik/" 
            aria-label="LinkedIn"
            className="hover:scale-110 transition-transform duration-200 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/20 hover:bg-white/20 shadow-2xl"
          >
            <img 
              alt="LinkedIn" 
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 drop-shadow-2xl" 
              src="/linkedin-white.svg"
            />
          </a>
          <a 
            href="mailto:zak@zmbg.us" 
            aria-label="Email"
            className="hover:scale-110 transition-transform duration-200 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/20 hover:bg-white/20 shadow-2xl"
          >
            <img 
              alt="Email" 
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 drop-shadow-2xl" 
              src="/email-white.png"
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
