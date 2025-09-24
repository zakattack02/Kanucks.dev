import React from 'react';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-2 sm:top-5 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-3 sm:px-6 lg:px-8 py-2 sm:py-3 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 w-[90%] sm:w-auto max-w-md sm:max-w-none">
      <div className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-8 text-sm sm:text-base lg:text-lg font-medium">
        <Link 
          to="/" 
          className={`px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 hover:scale-105 touch-manipulation ${
            isActive('/') 
              ? 'bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-white border border-blue-500/50' 
              : 'text-gray-400 hover:text-cyan-400 hover:bg-white/10'
          }`}
        >
          Home
        </Link>
        <Link 
          to="/projects" 
          className={`px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 hover:scale-105 touch-manipulation ${
            isActive('/projects') 
              ? 'bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-white border border-blue-500/50' 
              : 'text-gray-400 hover:text-cyan-400 hover:bg-white/10'
          }`}
        >
          Projects
        </Link>
        <Link 
          to="/about" 
          className={`px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 hover:scale-105 touch-manipulation ${
            isActive('/about') 
              ? 'bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-white border border-blue-500/50' 
              : 'text-gray-400 hover:text-cyan-400 hover:bg-white/10'
          }`}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
