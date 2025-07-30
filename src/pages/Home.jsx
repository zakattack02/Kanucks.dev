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
              <div>
    <span className="flex justify-center items-center gap-6 mt-2">
    <a href="https://github.com/zakattack02/" aria-label="GitHub">
      <img height={100} width={100}
        src="/github-mark-white.png"
        alt="GitHub"
        className="w-8 h-8"
      />
    </a>
    <a href="https://www.linkedin.com/in/zachary-konik/" aria-label="LinkedIn">
      <img height={100} width={100}
        src="/icons8-linkedin-100.png"
        alt="LinkedIn"
        className="w-8 h-8"
      />
    </a>
    <a href="mailto:zak@zmbg.us" aria-label="Email">
      <img height={100} width={100}
        src="/icons8-email-100.png"
        alt="Email"
        className="w-8 h-8"
      />
    </a>
  </span>
  </div>
        </motion.div>
      </div>
    </div>
  );
}
