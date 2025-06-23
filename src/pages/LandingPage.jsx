// src/pages/LandingPage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import { Button } from 'antd';

const LandingPage = () => {
  return (
    <div className="bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-transparent absolute top-0 left-0 w-full z-20">
        <div className="text-white text-2xl font-bold">SHOWCAR</div>
        <div className="hidden md:flex gap-6 items-center text-white font-medium">
          <a href="#">Home</a>
          <a href="#">Car</a>
          <a href="#">Artikel</a>
          <a href="#">Pages</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Sign In</a>
          <Button type="primary" shape="round">
            Submit Listing
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />
    </div>
  );
};

export default LandingPage;
