import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        backgroundColor: "rgba(26, 28, 29, 0.9)",
        backdropFilter: "blur(10px)",
        borderRadius: "50px",
        padding: "0.8rem 2rem",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(22, 136, 240, 0.1)",
        border: "1px solid rgba(22, 136, 240, 0.2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        fontSize: "1.1rem",
      }}
    >
      <Link 
        to="/" 
        style={{ 
          textDecoration: "none",
          color: "#eeeeee",
          padding: "0.5rem 1rem",
          borderRadius: "25px",
          transition: "all 0.3s ease",
          position: "relative"
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "rgba(22, 136, 240, 0.2)";
          e.target.style.color = "#1688f0";
          e.target.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "transparent";
          e.target.style.color = "#eeeeee";
          e.target.style.transform = "scale(1)";
        }}
      >
        Home
      </Link>
      <Link 
        to="/projects" 
        style={{ 
          textDecoration: "none",
          color: "#eeeeee",
          padding: "0.5rem 1rem",
          borderRadius: "25px",
          transition: "all 0.3s ease",
          position: "relative"
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "rgba(22, 136, 240, 0.2)";
          e.target.style.color = "#1688f0";
          e.target.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "transparent";
          e.target.style.color = "#eeeeee";
          e.target.style.transform = "scale(1)";
        }}
      >
        Projects
      </Link>
      <Link 
        to="/about" 
        style={{ 
          textDecoration: "none",
          color: "#eeeeee",
          padding: "0.5rem 1rem",
          borderRadius: "25px",
          transition: "all 0.3s ease",
          position: "relative"
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "rgba(22, 136, 240, 0.2)";
          e.target.style.color = "#1688f0";
          e.target.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "transparent";
          e.target.style.color = "#eeeeee";
          e.target.style.transform = "scale(1)";
        }}
      >
        About
      </Link>
    </nav>
  );
};

export default Navbar;
