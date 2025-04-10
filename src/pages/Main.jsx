import { motion } from "framer-motion";

export default function Main() {
  return (
    <div className="bg-[#1a1c1d] text-[#eeeeee] min-h-screen flex flex-col justify-center items-center font-[Arvo] text-center px-[12.5vw] w-[75vw] mx-auto">
      <motion.h1
        className="text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Zak Konik
        </h2>
      </motion.h1>

      <nav className="flex justify-center items-center gap-6 mt-2">
        <a href="https://github.com/zakattack02/" aria-label="GitHub">
          <img
            src="/github-mark-white.svg"
            alt="GitHub"
            className="w-8 h-8"
          />
        </a>
        <a href="https://www.linkedin.com/in/zachary-konik/" aria-label="LinkedIn">
          <img
            src="/icons8-linkedin-100.png"
            alt="LinkedIn"
            className="w-8 h-8"
          />
        </a>
        <a href="mailto:zak@zmbg.us" aria-label="Email">
          <img
            src="/icons8-email-100.png"
            alt="Email"
            className="w-8 h-8"
          />
        </a>
      </nav>
    </div>
  );
}
