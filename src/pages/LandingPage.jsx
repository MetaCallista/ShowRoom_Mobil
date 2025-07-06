// src/pages/LandingPage.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from '../components/HeroSection';
import ExploreVehicles from '../components/ExploreVehicles';
import DualCtaCard from '../components/DualCtaCard';
import WhyChooseUs from '../components/WhyChooseUs'; 
import LatestBlogPosts from '../components/LatestBlogPosts'; 
import CtaBanner from '../components/CtaBanner';


const LandingPage = () => {

  
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="overflow-hidden">
        <HeroSection />
      </div>
      <div data-aos="fade-up">
        <ExploreVehicles />
      </div>
      <div data-aos="fade-right">
      <DualCtaCard />
      </div>
      <div data-aos="fade-down">
      <WhyChooseUs />
      </div>
      <div data-aos="fade-left">
      <LatestBlogPosts />
      </div>
      <div data-aos="fade">
      <CtaBanner />
      </div>
    </>
  );
};

export default LandingPage;