import React from 'react';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-8 py-3 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
      <div className="flex items-center justify-center gap-8 text-lg font-medium">
        <Link 
          to="/" 
          className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
            isActive('/') 
              ? 'bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-white border border-blue-500/50' 
              : 'text-gray-300 hover:text-white hover:bg-white/10'
          }`}
        >
          Home
        </Link>
        <Link 
          to="/projects" 
          className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
            isActive('/projects') 
              ? 'bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-white border border-blue-500/50' 
              : 'text-gray-300 hover:text-white hover:bg-white/10'
          }`}
        >
          Projects
        </Link>
        <Link 
          to="/about" 
          className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
            isActive('/about') 
              ? 'bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-white border border-blue-500/50' 
              : 'text-gray-300 hover:text-white hover:bg-white/10'
          }`}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
