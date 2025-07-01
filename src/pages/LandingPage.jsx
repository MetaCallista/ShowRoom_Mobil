import React from 'react';
import { Button } from 'antd';
import HeroSection from '../components/HeroSection';
import ExploreVehicles from '../components/ExploreVehicles';
import WhyChooseUs from '../components/WhyChooseUs'; 
import LatestBlogPosts from '../components/LatestBlogPosts'; 
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="bg-white">
      {/* Navbar & Judul Web */}
      <nav className="flex justify-between items-center px-8 py-4 bg-transparent absolute top-0 left-0 w-full z-20">
        <div className="text-white text-2xl font-bold">SHOWCAR</div>
        <div className="hidden md:flex gap-6 items-center text-white font-medium">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Car</a>
          <a href="#" className="hover:text-gray-300">Artikel</a>
          <a href="#" className="hover:text-gray-300">Pages</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
          <a href="#" className="hover:text-gray-300">Sign In</a>
          <Button type="primary" shape="round">
            Submit Listing
          </Button>
        </div>
      </nav>
      
      <main>
        <HeroSection />
        <ExploreVehicles />
        <WhyChooseUs />
        <LatestBlogPosts />
        <Testimonials />
        <CtaBanner />
      </main>
      
      <Footer />
    </div>
  );
};

export default LandingPage;