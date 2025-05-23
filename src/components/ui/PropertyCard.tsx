import { Property } from '../../types';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="card group h-full flex flex-col">
      <div className="relative overflow-hidden h-64">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-white px-3 py-1 text-sm font-medium rounded-full text-primary-600">
            {property.type === 'commercial' ? 'Commercial' : 'Residential'}
          </span>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-serif text-xl font-semibold mb-2">{property.title}</h3>
        <p className="text-neutral-600 mb-4">{property.description}</p>
        {property.features && (
          <div className="mt-auto">
            <h4 className="font-medium text-sm mb-2">Features:</h4>
            <ul className="flex flex-wrap gap-2">
              {property.features.map((feature, index) => (
                <li 
                  key={index}
                  className="bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded-full"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="p-4 border-t border-neutral-100">
        <button className="w-full btn btn-primary text-sm">View Details</button>
      </div>
    </div>
  );
}