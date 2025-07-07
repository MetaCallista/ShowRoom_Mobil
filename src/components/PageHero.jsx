import React from 'react';

const PageHero = ({ title, desc, img = "/assets/images/hero.jpg" }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="relative w-full h-48 md:h-50 rounded-2xl overflow-hidden shadow-xl group">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-start text-left text-white px-8 md:px-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">{title}</h1>
          <p className="text-base md:text-lg font-light max-w-4xl">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHero; 