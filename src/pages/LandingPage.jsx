// src/pages/LandingPage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import ExploreVehicles from '../components/ExploreVehicles';
import DualCtaCard from '../components/DualCtaCard';
import WhyChooseUs from '../components/WhyChooseUs'; 
import LatestBlogPosts from '../components/LatestBlogPosts'; 
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <ExploreVehicles />
      <DualCtaCard />
      <WhyChooseUs />
      <LatestBlogPosts />
      <Testimonials />
      <CtaBanner />
    </>
  );
};

export default LandingPage;