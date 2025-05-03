import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/shared/ServiceCard';
import CallToAction from '../components/shared/CallToAction';
import { services } from '../data/services';

const ServicesPage: React.FC = () => {
  // Update page title for SEO
  React.useEffect(() => {
    document.title = "Our Plumbing Services | Frank's Plumbing | South Denver";
  }, []);

  return (
    <>
      <section className="pt-32 pb-12 bg-brand-blue text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="mb-4">Our Plumbing Services</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Frank's Plumbing offers a complete range of plumbing services for residential and commercial properties in South Denver.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="section bg-brand-grey">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction 
        title="Ready to Solve Your Plumbing Problems?" 
        subtitle="Contact Frank today for fast, professional service" 
      />
    </>
  );
};

export default ServicesPage;