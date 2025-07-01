// src/components/Testimonials.jsx
import React from 'react';
import Slider from 'react-slick';
import TestimonialCard from './TestimonialCard';

// Impor CSS wajib untuk react-slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
    { name: 'Ali Tufan', quote: 'Sales process was simple and easy to understand. Maxmillian was friendly and I didn\'t feel...' },
    { name: 'John Doe', quote: 'Good job for project coordination. Sales process was simple and easy. Maxmillian was friendly and I...' },
    { name: 'Brooklynn Simmons', quote: 'Sales process was simple and easy. Maxmillian was friendly and made my car search and buying...' },
    { name: 'Augusta Silva', quote: 'Sales process was simple and easy. Maxmillian was friendly and I didn\'t feel...' },
    { name: 'Jane Smith', quote: 'A fantastic experience from start to finish. Highly recommended for anyone looking for a new car.' },
];

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <div className="bg-gray-50 pt-8 sm:pt-12 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What our customers say
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Rated 4.7 / 5 based on 28,370 reviews Showing our 4 & 5 star reviews
          </p>
        </div>
        <Slider {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;