import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface CTAProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const CallToAction: React.FC<CTAProps> = ({ 
  title = "Need A Plumber Today?", 
  subtitle = "Fast, Affordable, Guaranteed Expert Service", 
  className = ""
}) => {
  return (
    <section className={`bg-brand-blue py-12 ${className}`}>
      <div className="container-custom">
        <div className="bg-water-pattern bg-opacity-10 rounded-lg shadow-lg p-8 md:p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h2>
            <p className="text-white/80 text-lg mb-8">{subtitle}</p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a 
                href="tel:7206482782"
                className="btn-primary w-full sm:w-auto flex justify-center items-center text-lg"
              >
                <Phone className="mr-2" size={20} />
                Call Frank Now: (720) 648-2782
              </a>
              
              <Link 
                to="/contact"
                className="btn-outline bg-white w-full sm:w-auto"
              >
                Request Service
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;