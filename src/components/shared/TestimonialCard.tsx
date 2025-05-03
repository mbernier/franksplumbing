import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card h-full flex flex-col"
    >
      {/* Stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
          />
        ))}
      </div>
      
      {/* Testimonial */}
      <blockquote className="flex-grow mb-4 italic text-gray-700">
        "{testimonial.text}"
      </blockquote>
      
      {/* Author */}
      <div className="font-semibold">
        - {testimonial.author}, {testimonial.location}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;