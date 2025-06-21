import React, { useRef } from "react";
import "../HomePage/HomePage.css";
import LUMERA from "../assets/LUMERA.svg";
import savuage from '../assets/savuage.svg'; // Adjust the path if needed
import you from '../assets/you.svg';
import bleu from '../assets/bleu.svg';
import ultra from '../assets/ultra.svg';
const HomePage = () => {
  const featuredRef = useRef(null);

  const handleExploreClick = () => {
    if (featuredRef.current) {
      featuredRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="homepage-container">
      <nav className="navbar">
        <div className="navbar-logo">LUMERA</div>
        <ul className="navbar-links">
          <li className="active">Home</li>
          <li>Shop All</li>
          <li>Our Story</li>
          <li>Find Your Scent</li>
        </ul>
        <div className="navbar-search-cart">
          <div className="navbar-search">
            <input type="text" placeholder="Search perfumes..." />
          </div>
          <button data-quantity="0" className="btn-cart" aria-label="Cart">
            <svg
              className="icon-cart"
              viewBox="0 0 24.38 30.52"
              height="30.52"
              width="24.38"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>icon-cart</title>
              <path
                transform="translate(-3.62 -0.85)"
                d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
              ></path>
            </svg>
            <span className="quantity"></span>
          </button>
        </div>
      </nav>
      <div className="hero-section no-bg">
        <div className="hero-content">
          <img src={LUMERA} alt="LUMERA" className="lumera-svg" />
          <button className="explore-btn" onClick={handleExploreClick}>
            Explore Collection <span>&#8250;</span>
          </button>
        </div>
      </div>
      <div className="ode-section">
        <h2>Lumera</h2>
        <p>Each fragrance captures emotion, memory, and identity, crafted to complement the unique rhythm of your soul. We invite you to experience the unique character and enduring allure of our creations.</p>

      </div>
      <div className="featured-section" ref={featuredRef}>
        <h2>Featured Collection</h2>
        <p className="featured-desc">
          Discover our most loved fragrances, curated for their exceptional quality and timeless appeal.
        </p>
        <div className="featured-grid">
          <div className="featured-card">
            <div className="featured-img">
              <img src={savuage} alt="Aura Magnifique" className="product-img" />
            </div>
            <div className="featured-info">
              <h3>Sauvage</h3>
              <p>An enchanting blend of rare florals and warm amber.</p>
              <div className="tags">
                <span>Jasmine</span>
                <span>Amber</span>
                <span>Sandalwood</span>
              </div>
              <div className="featured-bottom">
                <span className="price">$180</span>
                <button className="view-btn">
                  <svg width="18" height="18" viewBox="0 0 24.38 30.52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
                    fill="#4d3a1a" />
                  </svg>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="featured-card">
            <div className="featured-img" >
            <img src={ultra} alt="Aura Magnifique" className="product-img" />
            </div>
            <div className="featured-info">
              <h3>Ultra Male Jean Paul Gaultier</h3>
              <p>A dreamy composition of vanilla, musk, and golden fruits.</p>
              <div className="tags">
                <span>Vanilla</span>
                <span>Musk</span>
                <span>Peach</span>
              </div>
              <div className="featured-bottom">
                <span className="price">$220</span>
                <button className="view-btn">
                  <svg width="18" height="18" viewBox="0 0 24.38 30.52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
                    fill="#4d3a1a" />
                  </svg>
                 Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="featured-card">
            <div className="featured-img" >
            <img src={bleu} alt="Aura Magnifique" className="product-img" />
            </div>
            <div className="featured-info">
              <h3>Bleu De Chanel</h3>
              <p>A captivating elixir of dark spices and exotic woods.</p>
              <div className="tags">
                <span>Oud</span>
                <span>Saffron</span>
                <span>Patchouli</span>
              </div>
              <div className="featured-bottom">
                <span className="price">$195</span>
                <button className="view-btn">
                  <svg width="18" height="18" viewBox="0 0 24.38 30.52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
                    fill="#4d3a1a" />
                  </svg>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="featured-card">
            <div className="featured-img" >
            <img src={you} alt="Aura Magnifique" className="product-img" />
            </div>
            <div className="featured-info">
              <h3>You</h3>
              <p>A refreshing burst of citrus and delicate morning dew.</p>
              <div className="tags">
                <span>Bergamot</span>
                <span>Neroli</span>
                <span>White Tea</span>
              </div>
              <div className="featured-bottom">
                <span className="price">$150</span>
                <button className="view-btn">
                  <svg width="18" height="18" viewBox="0 0 24.38 30.52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
                    fill="#4d3a1a" />
                  </svg>
                Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="main-footer">
        <div className="newsletter-section">
          <h2>Stay Connected</h2>
          <p>
            Subscribe to our newsletter for exclusive offers, new arrivals, and insights into the world of fine perfumery.
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h3>Lumera</h3>
            <p>
              Crafting memories, one scent at a time. Experience the art of fine perfumery.
            </p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>Our Story</li>
              <li>Shop</li>
              <li>Contact Us</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="footer-socials">
              <span> {/* Facebook Icon */} <i className="fa fa-facebook"></i> </span>
              <span> {/* Instagram Icon */} <i className="fa fa-instagram"></i> </span>
              <span> {/* Twitter Icon */} <i className="fa fa-twitter"></i> </span>
            </div>
            <p className="footer-social-desc">
              Subscribe to our newsletter for exclusive updates.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 MO. All rights reserved.</span>
          <span>
            Privacy Policy | Terms of Service
          </span>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;