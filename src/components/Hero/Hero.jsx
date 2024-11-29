import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="form-container">
        <input type="date" placeholder="Check-in" />
        <input type="date" placeholder="Check-out" />
        <select>
          <option value="">Adult</option>
          <option value="1">Adult 1</option>
          <option value="2">Adult 2</option>
          <option value="3">Adult 3</option>
        </select>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default Hero;
