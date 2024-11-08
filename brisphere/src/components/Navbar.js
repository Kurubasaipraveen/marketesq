import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Brisphere</h2>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav-links ${menuActive ? "active" : ""}`}>
        <li><a href="/discover">Discover</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/footer">About Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
