import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card hover:border-l-4 hover:border-brand-red group"
    >
      <div className="flex items-start mb-4">
        <div className="p-3 bg-brand-blue rounded-lg text-white mr-4">
          {React.createElement(service.icon, { size: 24 })}
        </div>
        <h3 className="text-xl font-bold">{service.title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{service.shortDescription}</p>
      <Link 
        to={`/services/${service.id}`} 
        className="flex items-center text-brand-blue font-semibold hover:text-brand-red transition-colors"
      >
        Learn More 
        <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;