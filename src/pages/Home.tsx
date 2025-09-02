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
import { useEffect, useState } from "react";

export default function Home() {
  const featuredProperties = properties.slice(0, 3);

  return (
    <div className="page-transition pt-0 ">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden object-cover margin-top-[-64px]"
        style={{ marginTop: "-64px" }}
      >
        {/* Overlay */}
        {/* Carousel Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="w-full h-full">
            <div className="absolute inset-0 w-full h-full  object-cover">
              <CarouselBgImages />
            </div>
          </div>
        </div>
        <div className="container relative z-20">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Gateway to Preminum Spaces
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
      <section
        className="py-20 bg-white relative overflow-hidden"
        style={{
          backgroundImage: "url('/wedeal/welcomebg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="absolute inset-0  pointer-events-none transition-all duration-700" />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Welcome to SpaceWave
              </h2>
              <p className="text-black mb-6 text-lg md:text-xl lg:text-xl font-medium">
                At SpaceWave, we take pride in curating a diverse portfolio of
                commercial and residential properties that cater to a wide range
                of needs and preferences. Whether you're in the market for a
                prime commercial space or a cozy residential retreat, our
                selection is sure to impress.
              </p>
              <p className="text-black mb-8 text-lg md:text-xl lg:text-1xl font-medium">
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
            <div className="grid grid-cols-2 gap-4 relative h-[340px] md:h-[340px] overflow-hidden">
              {/* Rotating Cards */}
              <RotatingCards />
            </div>
          </div>
        </div>
      </section>

      {/* We Deal Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-primary-100 relative overflow-hidden ">
        <div className="container">
          <SectionHeader
            title="We Deal In"
            subtitle={
              <span style={{ color: "#222" }}>
                Explore our diverse portfolio of property categories tailored to
                your needs
              </span>
            }
            centered={false}
          />
          <div className="relative mt-12">
            {/* Carousel */}
            <div className="w-full overflow-hidden">
              <div className="flex gap-8 animate-slide-x-slow">
                {/* Office Space */}
                <div className="min-w-[320px] bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-500 group">
                  <img
                    src="/wedeal/officespace.jpg"
                    alt="Office Space"
                    className="rounded-xl h-48 w-full object-cover mb-4 group-hover:shadow-2xl transition-shadow duration-500"
                  />
                  <h3 className="font-serif text-2xl font-bold text-primary-700 mb-2">
                    Office Spaces
                  </h3>
                  <p className="text-neutral-600 text-center">
                    Modern, flexible workspaces for startups, corporates, and IT
                    companies.
                  </p>
                </div>
                {/* Plots */}
                <div className="min-w-[320px] bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-500 group">
                  <img
                    src="/wedeal/plots.jpg"
                    alt="Plots"
                    className="rounded-xl h-48 w-full object-cover mb-4 group-hover:shadow-2xl transition-shadow duration-500"
                  />
                  <h3 className="font-serif text-2xl font-bold text-primary-700 mb-2">
                    Residential & Commercial Plots
                  </h3>
                  <p className="text-neutral-600 text-center">
                    Prime land parcels for your dream home or business
                    investment.
                  </p>
                </div>
                {/* Villas */}
                <div className="min-w-[320px] bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-500 group">
                  <img
                    src="/wedeal/villa1.jpg"
                    alt="Villas"
                    className="rounded-xl h-48 w-full object-cover mb-4 group-hover:shadow-2xl transition-shadow duration-500"
                  />
                  <h3 className="font-serif text-2xl font-bold text-primary-700 mb-2">
                    Luxury Villas
                  </h3>
                  <p className="text-neutral-600 text-center">
                    Elegant villas with premium amenities for a sophisticated
                    lifestyle.
                  </p>
                </div>
                {/* Retail */}
                <div className="min-w-[320px] bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-500 group">
                  <img
                    src="/wedeal/retail.jpg"
                    alt="Retail"
                    className="rounded-xl h-48 w-full object-cover mb-4 group-hover:shadow-2xl transition-shadow duration-500"
                  />
                  <h3 className="font-serif text-2xl font-bold text-primary-700 mb-2">
                    Retail Spaces
                  </h3>
                  <p className="text-neutral-600 text-center">
                    High-visibility retail outlets in bustling commercial hubs.
                  </p>
                </div>
                {/* Warehouse */}
                <div className="min-w-[320px] bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-500 group">
                  <img
                    src="/wedeal/warehous.jpg"
                    alt="Warehouse"
                    className="rounded-xl h-48 w-full object-cover mb-4 group-hover:shadow-2xl transition-shadow duration-500"
                  />
                  <h3 className="font-serif text-2xl font-bold text-primary-700 mb-2">
                    Warehouses
                  </h3>
                  <p className="text-neutral-600 text-center">
                    Secure, spacious warehouses for logistics and storage needs.
                  </p>
                </div>
              </div>
            </div>
            {/* Carousel animation keyframes (add to your CSS/tailwind config if needed) */}
            {/*
            @keyframes slide-x-slow {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-slide-x-slow {
              animation: slide-x-slow 30s linear infinite;
            }
            */}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section
        className="py-20 bg-neutral-50 relative overflow-hidden"
        style={{
          backgroundImage: "url('/wedeal/fpropbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="absolute inset-0  pointer-events-none transition-all duration-700" />
        <div className="container relative z-10">
          <SectionHeader
            title="Featured Properties"
            subtitle={
              <span style={{ color: "#222" }}>
                Explore our selection of premium commercial and residential
                properties
              </span>
            }
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

      {/* Video Section above Call to Action */}
      <section
        className="relative w-full overflow-hidden p-0 m-0"
        style={{ background: "black" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-screen h-[40vw] min-h-[400px] max-h-[700px] object-cover object-center block"
          style={{
            width: "100vw",
            height: "100vw",
            minHeight: "400px",
            maxHeight: "800px",
            objectFit: "cover",
            objectPosition: "center",
            background: "black",
            display: "block",
            margin: 0,
            padding: 0,
          }}
        >
          <source src="/wedeal/getintouch.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-sky-400 to-blue-400 text-white relative overflow-hidden">
        <div className="container text-center relative z-20">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-white">
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
            <Link to="/contact" className="btn  border-2 border-white ">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Add this at the bottom of the file (before export default):
function RotatingCards() {
  const cards = [
    {
      bg: "bg-primary-50",
      icon: <HomeIcon size={40} className="text-primary-600 mb-3" />,
      title: "Residential",
      desc: "Find your perfect home with our expert guidance.",
    },
    {
      bg: "bg-accent-50",
      icon: <Paintbrush size={40} className="text-accent-600 mb-3" />,
      title: "Interior Design",
      desc: "Transform your space with our design expertise.",
    },
    {
      bg: "bg-neutral-100",
      icon: <Building2 size={40} className="text-neutral-700 mb-3" />,
      title: "Commercial",
      desc: "Strategic locations for your business success.",
    },
    {
      bg: "bg-gray-300 text-white",
      icon: null,
      title: "20M+ sqft",
      desc: "Of space transformed since 2009",
    },
  ];

  // Indices for the 4 grid positions
  const [indices, setIndices] = useState([0, 1, 2, 3]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndices((prev) => {
        // Rotate the array: [0,1,2,3] -> [3,0,1,2]
        return [prev[3], prev[0], prev[1], prev[2]];
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="space-y-4">
        <div
          className={`p-6 rounded-lg transition-all duration-700 ${
            cards[indices[0]].bg
          } ${indices[0] === 3 ? "text-white" : ""}`.trim()}
        >
          {cards[indices[0]].icon}
          <h3 className="font-serif text-xl font-semibold mb-2">
            {cards[indices[0]].title}
          </h3>
          <p className={indices[0] === 3 ? "" : "text-neutral-600"}>
            {cards[indices[0]].desc}
          </p>
        </div>
        <div
          className={`p-6 rounded-lg transition-all duration-700 ${
            cards[indices[1]].bg
          } ${indices[1] === 3 ? "text-white" : ""}`.trim()}
        >
          {cards[indices[1]].icon}
          <h3 className="font-serif text-xl font-semibold mb-2">
            {cards[indices[1]].title}
          </h3>
          <p className={indices[1] === 3 ? "" : "text-neutral-600"}>
            {cards[indices[1]].desc}
          </p>
        </div>
      </div>
      <div className="space-y-4 mt-8">
        <div
          className={`p-6 rounded-lg transition-all duration-700 ${
            cards[indices[2]].bg
          } ${indices[2] === 3 ? "text-white" : ""}`.trim()}
        >
          {cards[indices[2]].icon}
          <h3 className="font-serif text-xl font-semibold mb-2">
            {cards[indices[2]].title}
          </h3>
          <p className={indices[2] === 3 ? "" : "text-neutral-600"}>
            {cards[indices[2]].desc}
          </p>
        </div>
        <div
          className={`p-6 rounded-lg transition-all duration-700 ${
            cards[indices[3]].bg
          } ${indices[3] === 3 ? "text-white" : ""}`.trim()}
        >
          {cards[indices[3]].icon}
          <h3 className="font-serif text-xl font-semibold mb-2">
            {cards[indices[3]].title}
          </h3>
          <p className={indices[3] === 3 ? "" : "text-neutral-600"}>
            {cards[indices[3]].desc}
          </p>
        </div>
      </div>
    </>
  );
}

// Add this at the bottom of the file (before export default):
function CarouselBgImages() {
  const images = [
    // "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "/HomeHeroSection/hc.jpg",
    "/HomeHeroSection/hc1.jpg",
    "/HomeHeroSection/hc2.jpg",
    "/HomeHeroSection/hc3.jpg",
    "/HomeHeroSection/hc4.jpg",
    "/HomeHeroSection/hc5.avif",
    "/HomeHeroSection/hc6.avif",
    "/HomeHeroSection/hc7.avif",
    "/HomeHeroSection/hc8.jpg",
    "/HomeHeroSection/hc9.jpg",
    "/HomeHeroSection/hc10.jpg",
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <img
      src={images[index]}
      alt="Hero Background"
      className="w-full h-full object-cover transition-opacity duration-1000 absolute inset-0"
      style={{ zIndex: 0, transition: "opacity 1s" }}
    />
  );
}
