"use client";

import { useState } from 'react';
import styles from './ServicesCarousel.module.css';

const ServicesCarousel = () => {

  const services = [
    {
      title: 'Marketing Virtual Professional',
      description: [
        'Holistic Campaign Management',
        'Content Creation and SEO',
        'Brand Development',
        'Social Media Strategy',
      ],
    },
    {
      title: 'General Virtual Professional',
      description: [
        'Data Management and Analysis',
        'CRM Implementation and Optimization',
        'Process Optimization',
        'Workflow Management',
      ],
    },
    {
      title: 'Sales Virtual Professional',
      description: [
        'Lead Generation & Nurturing',
        'Booking Appointments',
        'Sales Support',
        'Sales Strategy Development',
      ],
    },
    {
      title: 'Administrative Virtual Professional',
      description: [
        'Schedule Management',
        'Data Entry',
        'Email Handling',
        'Task Prioritization',
      ],
    },
    {
      title: 'Customer Support Virtual Professional',
      description: [
        '24/7 Customer Support',
        'Ticket Management',
        'Customer Feedback Analysis',
        'Helpdesk Services',
      ],
    },
    {
      title: 'Technical Virtual Professional',
      description: [
        'IT Support',
        'Technical Troubleshooting',
        'Software Installation',
        'System Monitoring',
      ],
    },
  ];

  const middleIndex = Math.floor(services.length / 2);
  const [currentIndex, setCurrentIndex] = useState(middleIndex);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1));
  };



  return (
    <div className={styles.carouselContainer}>
      <button onClick={goToPrevious} className={styles.prevButton}>
        &#8249;
      </button>
      <div className={styles.carouselWrapper} style={{ transform: `translateX(-${currentIndex * 30}%)` }}>
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className={`${styles.serviceCard} ${index === currentIndex ? styles.activeCard : ''}`}
            >
              <h2>{service.title}</h2>
              <ul>
                {service.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <button onClick={goToNext} className={styles.nextButton}>
        &#8250;
      </button>
    </div>
  );
};

export default ServicesCarousel;
