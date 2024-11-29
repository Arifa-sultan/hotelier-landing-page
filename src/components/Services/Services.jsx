import React from "react";
import "./services.css";

const Services = () => {
  const serviceData = [
    {
      title: "Rooms & Apartments",
      description: "Explore a variety of comfortable living options.",
      icon: "🛏️", // You can replace with an image or SVG
    },
    {
      title: "Food & Restaurant",
      description: "Enjoy world-class cuisine in our restaurants.",
      icon: "🍴",
    },
    {
      title: "Fitness",
      description: "lordsk aslkhdsdka lksdlksfj ;lsajdklfsa fs.",
      icon: "🧖‍♀️",
    },
    {
      title: "Swimming Pool",
      description: "Dive into relaxation in our spacious pool.",
      icon: "🏊‍♂️",
    },
    {
      title: "Event Halls",
      description: "Host your events in our elegant halls.",
      icon: "🎉",
    },
    {
      title: "Travel Assistance",
      description: "Get travel assistance with our concierge service.",
      icon: "🌍",
    },
  ];

  return (
    <section className="services-section">
      <h2 className="section-title">Explore Our <span className="highlight">SERVICES</span></h2>
      <div className="services-grid">
        {serviceData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
