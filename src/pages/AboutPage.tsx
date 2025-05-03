import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CallToAction from '../components/shared/CallToAction';

const AboutPage: React.FC = () => {
  // Update page title for SEO
  React.useEffect(() => {
    document.title = "About Frank's Plumbing | South Denver Plumber";
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
            <h1 className="mb-4">About Frank's Plumbing</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Your trusted plumbing expert in South Denver for over 15 years.
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
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl font-bold text-brand-darkBlue mb-6">Meet Frank Santilli</h2>
              <p className="mb-4">
                Frank Santilli has been providing exceptional plumbing services to South Denver residents for over 15 years. What started as a passion for helping neighbors with their plumbing needs has grown into a trusted local business serving Highlands Ranch, Littleton, Lakewood, Centennial, and Lone Tree.
              </p>
              <p className="mb-4">
                As a licensed master plumber, Frank personally handles or oversees every job, ensuring the highest quality workmanship and customer satisfaction. His commitment to honest pricing, clear communication, and lasting solutions has earned Frank's Plumbing a reputation for excellence throughout the South Denver area.
              </p>
              <p className="mb-6">
                When you choose Frank's Plumbing, you're not just getting a service provider – you're getting a dedicated professional who truly cares about solving your plumbing problems correctly the first time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a 
                  href="tel:7206482782" 
                  className="btn-primary flex items-center justify-center"
                >
                  <Phone className="mr-2" size={20} />
                  Call Frank: (720) 648-2782
                </a>
                <Link to="/services" className="btn-secondary">
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <div className="rounded-lg overflow-hidden shadow-lg">
                {/* This would be replaced with an actual image of Frank */}
                <img 
                  src="https://images.pexels.com/photos/8961257/pexels-photo-8961257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Professional plumber"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="section bg-brand-grey">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-brand-darkBlue mb-4">Our Commitment to You</h2>
            <p className="text-lg max-w-3xl mx-auto">
              At Frank's Plumbing, we stand by these core values in every job we take on.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Quality',
                description: 'We use only the highest quality parts and materials, ensuring your plumbing solutions last.',
                icon: '🔧'
              },
              {
                title: 'Honesty',
                description: 'Clear, upfront pricing with no hidden fees or surprise charges after the work is done.',
                icon: '📋'
              },
              {
                title: 'Reliability',
                description: 'We show up when promised and complete the work in the timeframe we commit to.',
                icon: '⏰'
              },
              {
                title: 'Expertise',
                description: 'Continuous training keeps our skills sharp on the latest plumbing technologies and techniques.',
                icon: '📚'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-brand-darkBlue mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction title="Experience the Frank's Plumbing Difference" subtitle="Quality service from a plumber who cares" />
    </>
  );
};

export default AboutPage;