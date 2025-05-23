import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  // Dynamically get the icon component
  const IconComponent = (LucideIcons as Record<string, React.ComponentType<{ size?: number }>>)[service.icon];
  
  return (
    <div className="card p-6 h-full flex flex-col">
      <div className="bg-primary-50 text-primary-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        {IconComponent && <IconComponent size={28} />}
      </div>
      <h3 className="font-serif text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-neutral-600 mb-4 flex-grow">{service.description}</p>
      <button className="text-primary-600 font-medium hover:text-primary-800 flex items-center mt-auto">
        Learn More
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
}