'use client';
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import CardTemplate from "../Common/CardTemplate";
import SectionTitle from "../Common/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ourServices.css";

function Services() {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(1400);

  // Function to handle screen resizing
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  // Add event listener for window resizing
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Initial check to set width
    handleResize();

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slider settings with responsiveness
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: width <= 768 ? 1 : width <= 1024 ? 2 : 3, // Show fewer slides on smaller screens
    slidesToScroll: 1,
    backgroundColor: "#F7F7F7",
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    
    <div>
      <br/>
      <br/>
      <SectionTitle
        title="Our Services"
        paragraph="We offer a wide range of services to help you grow your business."
        center
      />

      <div className="slider-container">
        <button className="button" onClick={() => setWidth(width + 100)}>
        </button>
        <button className="button" onClick={() => setWidth(width - 100)}>
        </button>
        <button className="button" onClick={() => setDisplay(!display)}>
        </button>
        
        <div
          style={{
            width: width + "px",
            display: display ? "block" : "none",
          }}
        >
          <Slider {...settings}>
            <div>
              <CardTemplate
                title="WordPress Development"
                services={[
                  "MYSQL Optimization",
                  "Web Design",
                  "WooCommerce",
                  "Landing Pages",
                  "Custom Themes",
                ]}
              />
            </div>
            <div>
              <CardTemplate
                title="Web App Development"
                services={[
                  "Custom Backend Development",
                  "User Authentication & Security",
                  "Cloud Deployment & Scalability",
                  "Seamless Front-End Designs",
                  "API Integrations & Microservices",
                ]}
              />
            </div>
            <div>
              <CardTemplate
                title="Shopify Development"
                services={[
                  "E-Commerce",
                  "Product Listings",
                  "Payment Gateway Integration",
                  "Shopify App Integration",
                  "Inventory and Order Management",
                ]}
              />
            </div>
            <div>
              <CardTemplate
                title="Bubble Development"
                services={[
                  "Custom Web Application Development",
                  "Responsive Design with Bubble",
                  "API Integration & Workflows",
                  "Database Design & Management",
                  "User Authentication & Permissions",
                ]}
              />
            </div>
            <div>
              <CardTemplate
                title="UI/UX Design"
                services={[
                  "Material 3.0",
                  "Mobile-First Design",
                  "Responsive Web Design",
                  "High-Fidelity Mockups",
                  "Visual Design & Branding",
                ]}
              />
            </div>
            <div>
              <CardTemplate
                title="Dev Ops & Cloud"
                services={[
                  "CI/CD pipelines",
                  "AWS cloud solutions",
                  "VPC deployment",
                  "Operations management",
                  "Infrastructure Migration Consultancy",
                ]}
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Services;
