import { Droplet, Hammer, Home, Building2, ShowerHead, Wrench } from 'lucide-react';
import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'water-heaters',
    title: 'Water Heater Services',
    shortDescription: 'Installation, repair, and maintenance of all types of water heaters including tankless systems.',
    fullDescription: 'Frank\'s Plumbing provides comprehensive water heater services including installation, repair, and maintenance. We work with traditional tank-style heaters, tankless systems, and hybrid models to ensure your home has reliable hot water. Our expert technicians can diagnose issues quickly and provide cost-effective solutions that fit your needs and budget.',
    icon: ShowerHead,
    benefits: [
      'Expert installation of new water heaters',
      'Fast repair of leaks and heating issues',
      'Regular maintenance to extend water heater life',
      'Energy-efficient system recommendations',
      '24/7 emergency service for water heater failures'
    ],
    imageUrl: 'https://images.pexels.com/photos/4115294/pexels-photo-4115294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: 'drain-cleaning',
    title: 'Drain Cleaning',
    shortDescription: 'Professional solutions for clogged or slow drains in kitchens, bathrooms, and more.',
    fullDescription: 'Our professional drain cleaning services tackle even the most stubborn clogs in kitchen sinks, bathroom drains, showers, tubs, and main sewer lines. Using advanced techniques and equipment, we clear blockages without damaging your pipes. We also provide preventative maintenance advice to keep your drains flowing smoothly.',
    icon: Droplet,
    benefits: [
      'State-of-the-art equipment for efficient cleaning',
      'Safe solutions that won\'t damage your pipes',
      'Preventative maintenance to avoid future clogs',
      'Treatment for all types of drains',
      'Same-day service available for emergency situations'
    ],
    imageUrl: 'https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: 'residential-services',
    title: 'Residential Services',
    shortDescription: 'Complete plumbing solutions for homes including repairs, installations, and maintenance.',
    fullDescription: "Frank's Plumbing offers comprehensive residential plumbing services for homeowners throughout South Denver. From fixing leaky faucets, running toilets, garbage disposals, shower valves, hose spigots, to repiping entire homes, our skilled technicians handle all aspects of home plumbing. We prioritize clean work spaces, transparent pricing, and long-lasting results that give you peace of mind.",
    icon: Home,
    benefits: [
      'Comprehensive home plumbing solutions',
      'Fixture installation and repair (toilets, faucets, garbage disposals, shower valves, hose spigots)',
      'Pipe leak detection and repair',
      'Bathroom and kitchen renovations',
      'Sump pump installation and maintenance'
    ],
    imageUrl: 'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: 'commercial-services',
    title: 'Commercial Services',
    shortDescription: 'Specialized plumbing solutions for businesses, restaurants, and commercial properties.',
    fullDescription: 'Our commercial plumbing services are designed to minimize downtime and disruption to your business operations. We work with restaurants, retail establishments, office buildings, and other commercial properties to provide timely maintenance, repairs, and installations. Our team understands the unique plumbing needs of commercial facilities and works efficiently to solve problems.',
    icon: Building2,
    benefits: [
      'Minimal disruption to business operations',
      'Code-compliant commercial installations',
      'Backflow prevention and testing',
      'Grease trap installation and maintenance',
      'Emergency repair services'
    ],
    imageUrl: 'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: 'emergency-services',
    title: 'Emergency Services',
    shortDescription: '24/7 emergency plumbing assistance for urgent issues like burst pipes or major leaks.',
    fullDescription: 'Plumbing emergencies don\'t wait for convenient hours, and neither do we. Frank\'s Plumbing provides 24/7 emergency services for critical situations like burst pipes, severe leaks, sewer backups, or no hot water. Our rapid response team is equipped to handle emergencies quickly and effectively, minimizing damage to your property.',
    icon: Wrench,
    benefits: [
      'Available 24 hours a day, 7 days a week',
      'Rapid response times',
      'Fully equipped service vehicles',
      'Experienced emergency technicians',
      'Honest pricing even for emergency calls'
    ],
    imageUrl: 'https://images.pexels.com/photos/4246122/pexels-photo-4246122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: 'plumbing-maintenance',
    title: 'Preventative Maintenance',
    shortDescription: 'Regular maintenance plans to prevent costly plumbing emergencies and extend system life.',
    fullDescription: 'Preventative maintenance is the key to avoiding major plumbing emergencies and extending the life of your plumbing system. Frank\'s Plumbing offers customized maintenance plans for both residential and commercial customers. Our thorough inspections can identify potential issues before they become expensive problems, saving you time, money, and stress.',
    icon: Hammer,
    benefits: [
      'Customized maintenance schedules',
      'Comprehensive plumbing system inspections',
      'Early detection of potential problems',
      'Extended lifespan of plumbing fixtures',
      'Priority service for maintenance plan customers'
    ],
    imageUrl: 'https://images.pexels.com/photos/4239032/pexels-photo-4239032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  }
];