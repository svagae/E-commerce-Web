import React from 'react';
import Navbar from './Navbar';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <div className="hero-section">
        <div className="background-text">1920x1080</div>
        <h1 className="hero-title">Essenza Elegante</h1>
        <p className="hero-subtitle">
          Discover a world of exquisite fragrances, crafted with passion and artistry.
        </p>
        <button className="hero-button">
          Explore Collection &gt;
        </button>
      </div>
    </div>
  );
};

export default HomePage; 