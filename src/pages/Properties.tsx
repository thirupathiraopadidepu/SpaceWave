import { useState } from 'react';
import { properties } from '../data/properties';
import PropertyCard from '../components/ui/PropertyCard';
import SectionHeader from '../components/ui/SectionHeader';
import { Search } from 'lucide-react';

export default function Properties() {
  const [filter, setFilter] = useState<'all' | 'commercial' | 'residential'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredProperties = properties.filter(property => {
    const matchesFilter = filter === 'all' || property.type === filter;
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         property.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  
  return (
    <div className="page-transition pt-24">
      {/* Hero Section */}
      <section className="py-16 animated-bg">
        <img 
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Luxury property"
          className="animated-bg-image"
        />
        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Our Properties</h1>
            <p className="text-xl">
              Explore our carefully curated collection of commercial and residential properties.
            </p>
          </div>
        </div>
      </section>

      {/* Rest of the component remains unchanged */}
      {/* ... */}
    </div>
  );
}