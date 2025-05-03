import React from 'react';

interface SEOHelmetProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: string;
}

const SEOHelmet: React.FC<SEOHelmetProps> = ({
  title,
  description,
  canonicalUrl = 'https://southdenverplumber.com',
  ogType = 'website',
}) => {
  // This is a placeholder component for when the site is upgraded to Next.js
  // For now, it just updates the document title
  React.useEffect(() => {
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }
  }, [title, description]);

  return null;
};

export default SEOHelmet;