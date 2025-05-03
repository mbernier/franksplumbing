import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-10' }) => {
  return (
    <div className={`${className} flex items-center`}>
      {/* For now, just showing the text logo */}
      <div className="flex items-baseline">
        <span className="text-brand-red font-heading font-bold text-2xl">Frank's</span>
        <span className="text-brand-blue font-heading font-semibold text-xl ml-1">Plumbing</span>
      </div>
    </div>
  );
};

export default Logo;