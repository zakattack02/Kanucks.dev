import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-purple-900 to-blue-900 text-white shadow-lg z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">YourBrand</div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-pink-400 transition-colors">About</a>
          <a href="#mission" className="hover:text-pink-400 transition-colors">Mission</a>
          <a href="#explore" className="hover:text-pink-400 transition-colors">Explore</a>
          <a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a>
        </div>

        <div className="md:hidden">
          <button className="text-white hover:text-pink-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;