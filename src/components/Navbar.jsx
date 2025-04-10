import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        padding: "0.8rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)", // scales based on viewport width
      }}
    >
      <Link to="/" style={{ margin: "1rem", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/projects" style={{ margin: "1rem", textDecoration: "none" }}>
        Projects
      </Link>
      <Link to="/about" style={{ margin: "1rem", textDecoration: "none" }}>
        About
      </Link>
    </nav>
  );
};

export default Navbar;
