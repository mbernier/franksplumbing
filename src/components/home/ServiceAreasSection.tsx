import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import ServiceAreaMap from '../shared/ServiceAreaMap';

const ServiceAreasSection: React.FC = () => {
  const areas = [
    'Highlands Ranch',
    'Littleton',
    'Lakewood',
    'Centennial',
    'Lone Tree'
  ];
  
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
          <h2 className="text-brand-darkBlue">Service Areas</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Frank's Plumbing proudly serves the South Denver metro area including these locations and surrounding neighborhoods.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-5 gap-6 mb-12">
          {areas.map((area, index) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow"
            >
              <MapPin className="mx-auto mb-2 text-brand-red" size={24} />
              <h3 className="font-semibold text-lg">{area}</h3>
            </motion.div>
          ))}
        </div>
        
        <ServiceAreaMap />
      </div>
    </section>
  );
};

export default ServiceAreasSection;