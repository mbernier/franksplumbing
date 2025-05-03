import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-brand-blue to-brand-darkBlue text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-image opacity-20 bg-cover bg-center"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-brand-red text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Your Trustworthy South Denver Plumber
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Expert Plumbing <span className="text-brand-red">Solutions</span> When You Need Them
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Fast, affordable, and guaranteed expert service with 24-hour emergency response in Highlands Ranch, Littleton, Lakewood, Centennial, and Lone Tree.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:7206482782" 
                className="btn-primary group flex items-center justify-center"
              >
                <Phone className="mr-2 group-hover:animate-pulse" size={20} />
                Call Now: (720) 648-2782
              </a>
              <Link to="/contact" className="btn bg-white text-brand-blue hover:bg-gray-100">
                <Calendar className="mr-2" size={20} />
                Request Service
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-brand-blue font-bold text-xl mb-4">Why Choose Frank's Plumbing?</h3>
              <ul className="space-y-3 text-brand-darkGrey">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-brand-red text-white flex items-center justify-center text-xs mr-2 mt-1">✓</span>
                  <span>Fast response times, often same-day service</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-brand-red text-white flex items-center justify-center text-xs mr-2 mt-1">✓</span>
                  <span>Affordable, upfront pricing with no hidden fees</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-brand-red text-white flex items-center justify-center text-xs mr-2 mt-1">✓</span>
                  <span>Guaranteed expert service by professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-brand-red text-white flex items-center justify-center text-xs mr-2 mt-1">✓</span>
                  <span>24-hour emergency service available</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-brand-red text-white flex items-center justify-center text-xs mr-2 mt-1">✓</span>
                  <span>Locally owned, serving South Denver areas</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;