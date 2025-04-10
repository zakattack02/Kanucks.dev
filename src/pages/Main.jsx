import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Main() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="bg-[#1a1c1d] text-[#eeeeee] min-h-screen flex flex-col justify-center items-center font-[Arvo] text-center px-[12.5vw] w-[75vw] mx-auto">
      <motion.h1
        className="text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      Zak Konik
      </motion.h1>

      <nav className="flex justify-center items-center gap-6 mt-2">
        <a href="https://github.com/zakattack02/" aria-label="GitHub">
          <img
            src={isDarkMode ? "/github-mark-white.svg" : "/public/github-mark-dark.svg"}
            alt="GitHub"
            className="w-8 h-8"
          />
        </a>
        <a href="https://www.linkedin.com/in/zachary-konik/" aria-label="LinkedIn">
          <img
            src={isDarkMode ? "/linkedin-white.svg" : "/linkedin-dark.svg"}
            alt="LinkedIn"
            className="w-8 h-8"
          />
        </a>
        <a href="mailto:zak@zmbg.us" aria-label="Email">
          <img
            src={isDarkMode ? "/email-white.png" : "/email-dark.png"}
            alt="Email"
            className="w-8 h-8"
          />
        </a>
      </nav>
    </div>
  );
}
