import React from 'react';
// import { Navbar } from 'react-bootstrap';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Hero from './components/Hero/Hero';
import Welcome from './components/Welcome/Welcome';
import Services from './components/services/services';
import TestimonialSlider from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div>
      <Navbar/>
     <HeroSection/>
     <Hero/>
   <Welcome/>
   <Services/>
   <TestimonialSlider/>
   <Footer/>
    </div>
  );
}

export default App;
