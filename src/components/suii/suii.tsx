'use client'

import React, { useState } from 'react';
import './suii.css'; 

const portfolioWebsites = [
    {
        name: 'BoingFire',
        images: Array.from({ length: 6 }, (_, i) => `/images/suii/boingfire-${i + 1}.png`),
    },
    {
        name: 'Agent AI',
        images: Array.from({ length: 6 }, (_, i) => `/images/suii/agentai-${i + 1}.png`),
    },
    {
        name: 'Safe Routes',
        images: Array.from({ length: 5 }, (_, i) => `/images/suii/safe-routes-${i + 1}.png`),
    },
    // Add more websites as needed...
];

const Carousel = () => {
  const [selectedWebsite, setSelectedWebsite] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);


  const nextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === portfolioWebsites[selectedWebsite].images.length - 1 ? 0 : prevImage + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? portfolioWebsites[selectedWebsite].images.length - 1 : prevImage - 1
    );
  };

  const changeWebsite = (index) => {
    setSelectedWebsite(index);
    setCurrentImage(0); // Reset the current image to the first one when switching websites
  };

  return (
    <div className="carousel-container dark:bg-black dark:text-white:is(.dark *)">
      <h2>{portfolioWebsites[selectedWebsite].name}</h2>

      <div className="website-buttons">
        {portfolioWebsites.map((website, index) => (
          <button
            key={index}
            onClick={() => changeWebsite(index)}
            className={selectedWebsite === index ? 'active' : ''}
          >
            {website.name}
          </button>
        ))}
        
      </div>
      {/* Carousel Image */}
      <div className="carousel dark\:text-white:is(.dark *)">
        <button onClick={prevImage}>Previous</button>
        <img
          src={portfolioWebsites[selectedWebsite].images[currentImage]}
          alt={`Website ${selectedWebsite + 1} - Image ${currentImage + 1}`}
        />
        <button onClick={nextImage}>Next</button>
      </div>

      {/* Website Switch Buttons */}
      
    </div>
  );
};

export default Carousel;
