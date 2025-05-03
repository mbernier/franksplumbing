import { DivideIcon as LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  benefits: string[];
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  author: string;
  location: string;
  text: string;
  rating: number;
}