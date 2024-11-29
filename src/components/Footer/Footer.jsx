import React from "react";
import "./Footer.css"; // Footer-specific CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-section">
          <h2 className="footer-title">HOTELIER</h2>
          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus.
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Contact</h3>
          <ul className="footer-list">
            <li>123 Street, New York, USA</li>
            <li>+123 456 7890</li>
            <li>info@example.com</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Services</h3>
          <ul className="footer-list">
            <li>Food & Restaurant</li>
            <li>Gym & Fitness</li>
            <li>Spa & Wellness</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
