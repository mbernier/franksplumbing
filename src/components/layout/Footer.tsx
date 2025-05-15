import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';
import Logo from '../shared/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const serviceAreas = [
    'Highlands Ranch',
    'Littleton',
    'Lakewood',
    'Centennial',
    'Lone Tree'
  ];

  return (
    <footer className="bg-brand-darkBlue text-white">
      <div className="container-custom pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            <Logo className="h-12 mb-4 invert" />
            <p className="text-sm opacity-80">
              Fast, affordable, guaranteed expert plumbing services for South Denver residents.
            </p>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-4 border-b border-brand-blue pb-2">Service Areas</h4>
            <div className="flex flex-col space-y-1">
              {serviceAreas.map((area) => (
                <div key={area} className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-brand-red" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-4 border-b border-brand-blue pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-red transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-red transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-red transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-4 border-b border-brand-blue pb-2">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:7206482782" className="flex items-center hover:text-brand-red transition-colors">
                <Phone className="h-4 w-4 mr-2 text-brand-red" />
                <span>(720) 648-2782</span>
              </a>
              <div className="flex items-start">
                <Clock className="h-4 w-4 mr-2 mt-1 text-brand-red flex-shrink-0" />
                <div>
                  <p className="mb-0">Mon-Fri: 8AM - 6PM</p>
                  <p className="mb-0">Sat: 9AM - 4PM</p>
                  <p className="text-brand-red font-semibold">24Hr Emergency Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm opacity-80">
          <div className="text-center md:text-left mb-2 md:mb-0">
            <span className="font-bold text-brand-darkBlue">Fast &bull; Affordable &bull; Guaranteed Expert Service</span>
            <span className="mx-2 text-brand-red font-bold">24 Hr Service</span>
          </div>
          <p>&copy; {currentYear} Frank's Plumbing. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy-policy" className="hover:text-brand-red mr-4">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-brand-red">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;