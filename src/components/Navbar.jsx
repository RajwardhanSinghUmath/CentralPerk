import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Central Perk Logo - Home Button */}
      <Link to="/" className="logo-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/2/23/Central_Perk_Logo.png"
          alt="Central Perk"
          className="logo"
        />
      </Link>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/menu">Eat</Link></li>
        <li><Link to="/seating">Sit</Link></li>
        <li><Link to="/barista">Barista</Link></li>
       
        
      </ul>
    </nav>
  );
};

export default Navbar;
