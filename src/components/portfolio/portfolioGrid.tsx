'use client';
import React from 'react';
import './portfolioGrid.css';

interface PortfolioItem {
    title: string;
    description: string;
    href: string;
    image: string;
}

const portfolioItems: PortfolioItem[] = [
    { title: 'BoingFire', description: 'WooCommerce Webstore for Single Board Computers Developed a fully responsive, high-performance WooCommerce WordPress webstore tailored for the niche market of Single Board Computers (SBCs).', href: 'https://boingfire.com', image: '/images/portfolio/boingfire.png' },
    { title: 'Agent AI', description: 'Full-Stack Generative AI Bot for Real Estate marketing and prompt generation ', href: 'https://agentaiapp.com', image: '/images/portfolio/agentai.png' },
    { title: 'Safe Routes', description: 'A full-Stack web application for generating alternative navigation plans with integrated NLP model classifying crime and marking criminal hotspots.', href: 'https://example.com/project3', image: 'https://via.placeholder.com/150' },
    { title: 'Project 4', description: 'Description for project 4', href: 'https://example.com/project4', image: 'https://via.placeholder.com/150' },
];

const PortfolioGrid: React.FC = () => {
    return (
        <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
                <a key={index} href={item.href} className="portfolio-card">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <img src={item.image} alt={item.title} />
                </a>
            ))}
        </div>
    );
};

export default PortfolioGrid;
