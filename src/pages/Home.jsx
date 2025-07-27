import { motion } from "framer-motion";
import "../index.css";

export default function Main() {
  return (
    <div className="bg-[#1a1c1d] text-[#eeeeee] min-h-screen flex flex-col justify-center items-center font-[Arvo] text-center px-[12.5vw] w-[75vw] mx-auto">
      <motion.h1
        className="home-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Zak Konik
      </motion.h1>
      
      <motion.div
        className="flex justify-center items-center gap-6 mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <a 
          href="https://github.com/zakattack02/" 
          aria-label="GitHub"
          className="hover:scale-110 transition-transform duration-200"
        >
          <img 
            height="32" 
            width="32" 
            alt="GitHub" 
            className="w-8 h-8" 
            src="/github-mark-white.svg"
          />
        </a>
        <a 
          href="https://www.linkedin.com/in/zachary-konik/" 
          aria-label="LinkedIn"
          className="hover:scale-110 transition-transform duration-200"
        >
          <img 
            height="32" 
            width="32" 
            alt="LinkedIn" 
            className="w-8 h-8" 
            src="/linkedin-white.svg"
          />
        </a>
        <a 
          href="mailto:zak@zmbg.us" 
          aria-label="Email"
          className="hover:scale-110 transition-transform duration-200"
        >
          <img 
            height="32" 
            width="32" 
            alt="Email" 
            className="w-8 h-8" 
            src="/email-white.png"
          />
        </a>
      </motion.div>
    </div>
  );
}
