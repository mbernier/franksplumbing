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
      <section className="py-8 bg-brand-grey text-center">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-2 text-brand-blue">Testimonials</h2>
          <p className="text-lg text-brand-darkGrey">Google Reviews coming soon!</p>
        </div>
      </section>
      <TestimonialsSection />
      <ServiceAreasSection />
    </>
  );
};

export default HomePage;