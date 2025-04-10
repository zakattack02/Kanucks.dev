import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Main from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";
import Nav from "./components/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      {/* Navbar is displayed on all pages */}
      <Nav />
      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" element={<Main />} /> {/* Home page */}
        <Route path="/" element={<Contact />} /> {/* Contact page */}
        <Route path="/projects" element={<Projects />} /> {/* Projects page */}
      </Routes>
    </Router>
  </StrictMode>
);