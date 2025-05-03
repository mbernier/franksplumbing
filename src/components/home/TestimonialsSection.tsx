import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '../shared/TestimonialCard';
import { testimonials } from '../../data/testimonials';

const TestimonialsSection: React.FC = () => {
  // Display only a few testimonials on the home page
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          <h2 className="text-brand-darkBlue">What Our Customers Say</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Don't just take our word for it - here's what our satisfied customers from around South Denver have to say.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTestimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;