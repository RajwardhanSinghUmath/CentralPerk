import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`navbar ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <Link to={"/"}>
        <img
          src="https://centralperk.com/cdn/shop/files/new_logo_main_white_250x@2x.png?v=1695018061"
          className="nav-logo"
          alt="Central Perk Logo"
        />
      </Link>
      <div className="nav-links">
        <Link to="/menu">Menu</Link>
        <Link to="/barista">BaristAI</Link>
        <Link to="/seating">Seating</Link>
        <Link to="/review">Customer Reviews</Link>
      </div>
      <button onClick={toggleTheme} className="theme-toggle">
        {isDarkTheme ? "🌞" : "🌙"}
      </button>
    </div>
  );
};

export default Navbar;