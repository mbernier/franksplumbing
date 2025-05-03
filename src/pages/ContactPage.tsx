import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';
import ServiceAreaMap from '../components/shared/ServiceAreaMap';

const ContactPage: React.FC = () => {
  // Update page title for SEO
  React.useEffect(() => {
    document.title = "Contact Frank's Plumbing | South Denver Plumber";
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
            <h1 className="mb-4">Contact Us</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Have a plumbing problem or question? We're here to help! Contact Frank's Plumbing for fast, reliable service.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                <h2 className="text-2xl font-bold text-brand-darkBlue mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="text-brand-red mr-4 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <a 
                        href="tel:7206482782" 
                        className="text-brand-blue hover:text-brand-red transition-colors text-lg font-semibold"
                      >
                        (720) 648-2782
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-brand-red mr-4 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <a 
                        href="mailto:frank@southdenverplumber.com" 
                        className="text-brand-blue hover:text-brand-red transition-colors"
                      >
                        frank@southdenverplumber.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-brand-red mr-4 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                      <p className="mb-1">Monday - Friday: 8AM - 6PM</p>
                      <p className="mb-1">Saturday: 9AM - 4PM</p>
                      <p className="mb-1">Sunday: Closed</p>
                      <p className="text-brand-red font-semibold">24Hr Emergency Service Available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="text-brand-red mr-4 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Service Areas</h3>
                      <p>Highlands Ranch, Littleton, Lakewood, Centennial, and Lone Tree</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <ServiceAreaMap />
            </div>
            
            <div className="md:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-brand-grey">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-brand-darkBlue">What Happens Next?</h2>
            <p className="text-gray-600">After you contact us, here's our simple process:</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                step: '1',
                title: 'We Get in Touch',
                description: 'We\'ll contact you promptly to understand your plumbing needs in more detail.'
              },
              {
                step: '2',
                title: 'Schedule Your Service',
                description: 'We\'ll find a convenient time for your service, often with same-day options available.'
              },
              {
                step: '3',
                title: 'Problem Solved',
                description: 'Frank will arrive on time, diagnose the issue, provide a fair quote, and solve your plumbing problem.'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 text-center relative"
              >
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-brand-red text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-brand-darkBlue mt-6 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;