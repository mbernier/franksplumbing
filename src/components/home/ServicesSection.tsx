import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServiceCard from '../shared/ServiceCard';
import { services } from '../../data/services';

const ServicesSection: React.FC = () => {
  // Display only the first 3 services on home page
  const featuredServices = services.slice(0, 3);
  
  return (
    <section className="section bg-brand-grey">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          <h2 className="text-brand-darkBlue">Our Plumbing Services</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Frank's Plumbing offers a wide range of professional services to meet all your plumbing needs in South Denver.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="btn-secondary inline-flex items-center"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;