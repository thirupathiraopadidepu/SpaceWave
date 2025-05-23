import { Link } from "react-router-dom";
import {
  ChevronRight,
  Home as HomeIcon,
  Building2,
  Paintbrush,
} from "lucide-react";
import SectionHeader from "../components/ui/SectionHeader";
import PropertyCard from "../components/ui/PropertyCard";
import { properties } from "../data/properties";

export default function Home() {
  const featuredProperties = properties.slice(0, 3);

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center animated-bg">
        <img
          src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Luxury real estate"
          className="animated-bg-image"
        />
        <div className="container relative z-20">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Find Your Perfect Space with SpaceWave
            </h1>
            {/* <p className="text-xl md:text-2xl mb-8 font-light text-white">
              Your trusted partner in real estate solutions. Whether you're
              Commercial. Residential. Customized to You.
            </p> */}
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn btn-primary">
                Explore Our Listings
              </Link>
              <Link
                to="/contact"
                className="btn btn-primary text-white border-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Welcome to SpaceWave</h2>
              <p className="text-neutral-600 mb-6">
                At SpaceWave, we take pride in curating a diverse portfolio of
                commercial and residential properties that cater to a wide range
                of needs and preferences. Whether you're in the market for a
                prime commercial space or a cozy residential retreat, our
                selection is sure to impress.
              </p>
              <p className="text-neutral-600 mb-8">
                With over a decade of experience and 200+ successful
                transactions, we've established ourselves as a trusted name in
                real estate.
              </p>
              <Link
                to="/about"
                className="btn btn-primary inline-flex items-center"
              >
                Learn More About Us
                <ChevronRight className="ml-1" size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <HomeIcon size={40} className="text-primary-600 mb-3" />
                  <h3 className="font-serif text-xl font-semibold mb-2">
                    Residential
                  </h3>
                  <p className="text-neutral-600">
                    Find your perfect home with our expert guidance.
                  </p>
                </div>
                <div className="bg-accent-50 p-6 rounded-lg">
                  <Paintbrush size={40} className="text-accent-600 mb-3" />
                  <h3 className="font-serif text-xl font-semibold mb-2">
                    Interior Design
                  </h3>
                  <p className="text-neutral-600">
                    Transform your space with our design expertise.
                  </p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-neutral-100 p-6 rounded-lg">
                  <Building2 size={40} className="text-neutral-700 mb-3" />
                  <h3 className="font-serif text-xl font-semibold mb-2">
                    Commercial
                  </h3>
                  <p className="text-neutral-600">
                    Strategic locations for your business success.
                  </p>
                </div>
                <div className="bg-primary-600 p-6 rounded-lg text-white">
                  <h3 className="font-serif text-xl font-semibold mb-2">
                    20M+ sqft
                  </h3>
                  <p>Of space transformed since 2009</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <SectionHeader
            title="Featured Properties"
            subtitle="Explore our selection of premium commercial and residential properties"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-primary">
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Space?
          </h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-10 text-lg">
            Whether you're looking for a commercial property for your business
            or a residential space to call home, we're here to help you every
            step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/properties"
              className="btn bg-white text-primary-600 hover:bg-neutral-100"
            >
              Browse Properties
            </Link>
            <Link
              to="/contact"
              className="btn bg-transparent border-2 border-white hover:bg-primary-700"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
