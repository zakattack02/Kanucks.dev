import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "0.5rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)" }}>
      <Link to="/" style={{ margin: "0 1rem", textDecoration: "none", color: "#007bff" }}>
        Home
      </Link>
      <Link to="/projects" style={{ margin: "0 1rem", textDecoration: "none", color: "#007bff" }}>
        Projects
      </Link>
      <Link to="/about" style={{ margin: "0 1rem", textDecoration: "none", color: "#007bff" }}>
        About
      </Link>
    </nav>
  );
};

export default Navbar;