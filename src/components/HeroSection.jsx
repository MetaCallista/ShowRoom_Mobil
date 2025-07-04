import React, { useState, useEffect } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const slides = [
  {
    img: '/assets/images/hero.jpg',
    title: 'Find Your Perfect Vehicle Online',
    desc: "The World's Largest Used Car Dealership",
  },
  {
    img: '/assets/images/camry.png',
    title: 'Drive Your Dream Car Today',
    desc: 'Best deals, best cars, best service.',
  },
  {
    img: '/assets/images/ford-explorer.png',
    title: 'Sell Your Car With Ease',
    desc: 'Fast, safe, and transparent process.',
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const { img, title, desc } = slides[activeIndex];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 mt-12 pt-15">
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg ">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        {/* Arrow Buttons */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 rounded-full p-2 text-2xl z-20"
        >
          <LeftOutlined />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 rounded-full p-2 text-2xl z-20"
        >
          <RightOutlined />
        </button>
        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <p className="mb-2 text-base md:text-lg font-light">{desc}</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-2">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;