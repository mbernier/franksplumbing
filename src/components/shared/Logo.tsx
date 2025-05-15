import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-10' }) => {
  return (
    <div className={`${className} flex items-center`}>
      {/* Use the provided F image */}
      <img
        src="/franks_plumbing_f.png"
        alt="F logo for Frank's Plumbing"
        className="h-full w-auto align-middle"
        style={{ maxHeight: '2.2em', display: 'inline-block' }}
      />
      <span className="text-brand-red font-heading font-bold text-2xl md:text-3xl align-middle" style={{lineHeight: 1, marginLeft: '-0.2em'}}>rank's</span>
      <span className="text-brand-blue font-heading font-bold text-2xl md:text-3xl ml-2 align-middle" style={{lineHeight: 1}}>Plumbing</span>
    </div>
  );
};

export default Logo;