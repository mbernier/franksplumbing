import React from 'react';

const ServiceAreaMap: React.FC = () => {
  const areas = [
    { name: 'Highlands Ranch', position: 'top-[45%] left-[55%]', size: 'h-4 w-4' },
    { name: 'Littleton', position: 'top-[35%] left-[45%]', size: 'h-5 w-5' },
    { name: 'Lakewood', position: 'top-[25%] left-[30%]', size: 'h-4 w-4' },
    { name: 'Centennial', position: 'top-[50%] left-[70%]', size: 'h-5 w-5' },
    { name: 'Lone Tree', position: 'top-[60%] left-[60%]', size: 'h-4 w-4' },
  ];

  return (
    <div className="relative h-[400px] w-full bg-gray-100 rounded-lg overflow-hidden">
      {/* This would ideally be replaced with an actual map image of South Denver */}
      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
        <p className="text-center">South Denver Service Area Map</p>
      </div>
      
      {/* Service area indicators */}
      {areas.map((area) => (
        <div 
          key={area.name}
          className={`absolute ${area.position} ${area.size} flex flex-col items-center group z-10`}
        >
          <span className="h-4 w-4 bg-brand-red rounded-full animate-pulse"></span>
          <span className="absolute top-6 bg-white px-2 py-1 text-xs font-semibold rounded shadow opacity-0 group-hover:opacity-100 transition-opacity">
            {area.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ServiceAreaMap;