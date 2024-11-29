
import React from 'react';
import './navbar.css'; 
import { ButtonGroup } from 'react-bootstrap';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">HOTELIER</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#rooms">Rooms</a></li>
        <li><a href="#contact">Contact</a></li>
        <button className='btn1'>sign up</button>
      </ul>
      
    </nav>
  );
};

export default Navbar;
