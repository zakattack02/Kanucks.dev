import { motion } from "framer-motion";
import "../index.css";

export default function Main() {
  return (
    <div className="text-[#eeeeee] min-h-screen w-full">
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
        </motion.div>
      </div>
    </div>
  );
}
