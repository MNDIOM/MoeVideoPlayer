import React from 'react';
import './Navbar.css'; // Import your CSS file for styling


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/Home" className="navbar-logo">
          Moe's video player
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/Home" className="nav-links">
              Home
            </a>
          </li>
         
          <li className="nav-item dropdown">
            <a href="/" className="nav-links">
              Categories <i className="fas fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <a href="/Fitness" className="dropdown-link">
                  Fitness
                </a>
              </li>
              <li className="dropdown-item">
                <a href="/Nutrition" className="dropdown-link">
                  Nutrition
                </a>
              </li>
              <li className="dropdown-item">
                <a href="/Motivational" className="dropdown-link">
                  Motivational
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-links">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
