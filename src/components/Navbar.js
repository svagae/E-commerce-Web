import React from 'react';
import './Navbar.css';
import ScentIcon from '../assets/scent-icon.svg';
import { Search, User, ShoppingBag } from 'react-feather';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">LUMERA</div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#shop">Shop All</a>
        <a href="#story">Our Story</a>
        <a href="#find-scent">
          <img src={ScentIcon} alt="scent icon" className="scent-icon" />
          Find Your Scent
        </a>
      </div>
      <div className="navbar-actions">
        <div className="search-bar">
          <Search className="search-icon" />
          <input type="text" placeholder="Search perfumes..." />
        </div>
        <User className="action-icon" />
        <ShoppingBag className="action-icon" />
      </div>
    </nav>
  );
};

export default Navbar; 