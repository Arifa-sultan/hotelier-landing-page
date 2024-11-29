import React from "react";
import Slider from "react-slick";
import "./Testimonial.css"; // Styling ka file import karein

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      quote: "This is a fantastic service! Highly recommended.",
      name: "Client Name 1",
      title: "Professor",
      image:  "public/image/gir.webp",  

    },
    {
      quote: "Loved the overall experience, will definitely use again!",
      name: "Client Name 2",
      title: "Professional",
      image:  "public/image/gir.webp",
    },
    {
      quote: "Amazing quality and support.",
      name: "Client Name 3",
      title: "Entrepreneur",
      image:  "public/image/gir.webp",
    },
  ];

  return (
    <div className="testimonial-slider-container">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-quote">“{testimonial.quote}”</p>
            <div className="testimonial-info">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="client-image"
              />
              <div>
                <h4 className="client-name">{testimonial.name}</h4>
                <p className="client-title">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
