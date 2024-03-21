import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/" className="navbar-link">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/projects" className="navbar-link">Projects</a>
        </li>
        <li className="navbar-item">
          <a href="/coursework" className="navbar-link">Coursework</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;