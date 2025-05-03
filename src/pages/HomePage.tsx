import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ServiceAreasSection from '../components/home/ServiceAreasSection';
import CallToAction from '../components/shared/CallToAction';

const HomePage: React.FC = () => {
  // Update page title for SEO
  React.useEffect(() => {
    document.title = "Frank's Plumbing | South Denver Plumber | Highlands Ranch, Littleton, Lakewood";
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CallToAction />
      <TestimonialsSection />
      <ServiceAreasSection />
    </>
  );
};

export default HomePage;