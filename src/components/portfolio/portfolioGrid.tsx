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
    { title: 'BoingFire', description: 'WooCommerce Webstore for Single Board Computers Developed a fully responsive, high-performance WooCommerce WordPress webstore tailored for the niche market of Single Board Computers (SBCs). Integrating seamless WordPress Designs', href: 'https://boingfire.com', image: '/images/portfolio/boingfire.png' },
    { title: 'Agent AI', description: 'Full-Stack Generative AI Bot for Real Estate marketing and prompt generation. Built mainly on Node JS backend with GPT-4 integrated as an AI model for content generation specifically catering to Real estate markets.', href: 'https://agentaiapp.com', image: '/images/portfolio/agentai logo-2.png' },
    { title: 'Safe Routes', description: 'A full-Stack web application for generating alternative navigation plans with integrated NLP model classifying crime and marking criminal hotspots.', href: 'https://example.com/project3', image: '/images/portfolio/safe-routes.png' },
];

const PortfolioGrid: React.FC = () => {
    return (
        // className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
        <div className="portfolio-grid bg-gray-light dark:bg-black">
            {portfolioItems.map((item, index) => (
                <a key={index} href={item.href} className="portfolio-card" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)'  }}>
                    <h3 style={{ fontSize: '3rem' }}>{item.title}</h3>
                    <p>{item.description}</p>
                    <img src={item.image} alt={item.title} />
                </a>
            ))}
        </div>
    );
};

export default PortfolioGrid;
