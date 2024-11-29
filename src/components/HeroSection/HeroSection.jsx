import React from "react";
import Slider from "react-slick";
import "./HeroSection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HeroSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const sliderData = [
    {
      image: "/image/image1.jpg",
      title: "Discover A Brand New Luxurious Hotel",
      subtitle: "Luxury Living",
    },
    {
      image: "/image/image2.jpg",
      title: "Experience Comfort Like Never Before",
      subtitle: "Unmatched Elegance",
    },
    {
      image: "/image/image3.jpg",
      title: "Welcome To Your Perfect Getaway",
      subtitle: "Breathtaking Views",
    },
  ];

  return (
    <section className="hero-section">
      <Slider {...sliderSettings}>
        {sliderData.map((slide, index) => (
          <div className="hero-slide" key={index}>
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="hero-content">
              <h3>{slide.subtitle}</h3>
              <h1>{slide.title}</h1>
              <div className="hero-buttons">
                <button className="btn btn-primary">Explore</button>
                <button className="btn btn-secondary">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
