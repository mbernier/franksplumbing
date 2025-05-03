import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import CallToAction from '../components/shared/CallToAction';
import { services } from '../data/services';
import { Service } from '../types';

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [service, setService] = useState<Service | null>(null);
  
  useEffect(() => {
    const foundService = services.find(s => s.id === serviceId) || null;
    setService(foundService);
    
    // Update page title for SEO
    if (foundService) {
      document.title = `${foundService.title} | Frank's Plumbing | South Denver`;
    }
  }, [serviceId]);
  
  if (!service) {
    return (
      <div className="container-custom py-32 text-center">
        <h2 className="text-2xl mb-4">Service not found</h2>
        <Link to="/services" className="btn-primary">
          Back to Services
        </Link>
      </div>
    );
  }
  
  return (
    <>
      <section className="pt-32 pb-12 bg-brand-blue text-white">
        <div className="container-custom">
          <Link 
            to="/services" 
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to All Services
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-4">{service.title}</h1>
            <p className="text-lg max-w-3xl">
              {service.shortDescription}
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">
                Professional {service.title}
              </h2>
              <p className="mb-6">{service.fullDescription}</p>
              
              <h3 className="text-xl font-bold text-brand-darkBlue mb-3">
                Benefits:
              </h3>
              <ul className="space-y-2 mb-6">
                {service.benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                    className="flex items-start"
                  >
                    <CheckCircle className="text-brand-red mr-2 flex-shrink-0 mt-1" size={20} />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a 
                  href="tel:7206482782" 
                  className="btn-primary"
                >
                  Call (720) 648-2782
                </a>
                <Link to="/contact" className="btn-outline">
                  Request Service
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={service.imageUrl} 
                  alt={service.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <CallToAction title={`Need ${service.title}?`} />
    </>
  );
};

export default ServiceDetailPage;