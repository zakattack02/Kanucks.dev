import { motion } from "framer-motion";
import "../index.css";

export default function Main() {
  return (
    <div className="text-[#eeeeee] min-h-screen w-full" style={{ backgroundColor: "#1a1c1d" }}>
      {/* Content - centered on page */}
      <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center text-white"
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
            className="hover:scale-110 transition-transform duration-200 block"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <img 
              alt="GitHub" 
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32" 
              src="/github-mark-white.svg"
            />
          </a>
          <a 
            href="https://www.linkedin.com/in/zachary-konik/" 
            aria-label="LinkedIn"
            className="hover:scale-110 transition-transform duration-200 block"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <img 
              alt="LinkedIn" 
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32" 
              src="/linkedin-white.svg"
            />
          </a>
          <a 
            href="mailto:zak@zmbg.us" 
            aria-label="Email"
            className="hover:scale-110 transition-transform duration-200 block"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <img 
              alt="Email" 
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32" 
              src="/email-white.png"
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
