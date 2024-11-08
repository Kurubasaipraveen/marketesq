import React from "react";
import '../styles/Services.css';

const Services = () => {
  const services = [
    { icon: "fas fa-wifi", title: "High Speed Internet", description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas." },
    { icon: "fas fa-utensils", title: "Healthy Meals", description: "A healthy breakfast and pleasant dinner will be serviced at your space every single day for your entire duration of stay with option of paid order within BriSphere." },
    { icon: "fas fa-home", title: "Homely Stay", description: "Designed for working professionals with spacious interiors, comfortable beds and sleekly attached kitchen are some of the comforts provided in your space." },
    { icon: "fas fa-bus", title: "Transportation", description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas." },
    { icon: "fas fa-bicycle", title: "Food Delivery", description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas." },
    { icon: "fas fa-map", title: "Tourism", description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas." },
    { icon: "fas fa-briefcase", title: "Job Assistance", description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas." },
    { icon: "fas fa-car", title: "Rental Service", description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas." },
    { icon: "fas fa-shopping-cart", title: "Online Shop", description: "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas." }
  ];

  return (
    <section className="services">
      <h2>Services</h2>
      <div className="service-grid">
        {services.map((service, idx) => (
          <div key={idx} className="service-card">
            <i className={`${service.icon} service-icon`}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
