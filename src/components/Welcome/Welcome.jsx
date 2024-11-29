import React from "react";
import HotelImage1 from "../../assests/image/hotel1.jpg";
import HotelImage2 from "../../assests/image/hotel2.jpg";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-section">
      <div className="about-us">
        <h4>ABOUT US</h4>
        <h1>Welcome to <span className="highlight">HOTELIER</span></h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorum
          aspernatur quia labore hic laudantium atque eveniet iure! Quaerat,
          nemo.
        </p>
      </div>
      <div className="images-section">
        <img src={HotelImage1} alt="Luxury Hotel" className="hotel-image" />
        <img src={HotelImage2} alt="Resort View" className="hotel-image" />
      </div>
      <div className="stats">
        <div className="stat-item">
          <h3>1200+</h3>
          <p>Rooms</p>
        </div>
        <div className="stat-item">
          <h3>150+</h3>
          <p>Staff</p>
        </div>
        <div className="stat-item">
          <h3>3000+</h3>
          <p>Guests</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
