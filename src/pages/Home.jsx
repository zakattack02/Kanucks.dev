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
    </div>
  );
}
