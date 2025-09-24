import Contact from "./Contact.jsx";
import "../index.css";

export default function Main() {
  return (
    <div className="pt-64 pb-24 px-8 text-white min-h-screen flex items-center justify-center" style={{ backgroundColor: "#1a1c1d" }}>
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
         // initial="hidden"
         // animate="visible"
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Zak Konik
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Computer Engineer & Full Stack Developer
          </motion.p>
        </motion.div>
        {/* Contact Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Contact />
        </motion.div>
      </div>
    </div>
  );
}
