import { services } from "../data/services";
import ServiceCard from "../components/ui/ServiceCard";
import SectionHeader from "../components/ui/SectionHeader";
import { motion } from "framer-motion";
import { properties } from "../data/properties";
import Marquee from "react-fast-marquee";

// Map service images by service id or title (ensure filenames match or adjust as needed)
const serviceImages: Record<string, string> = {
  "1": "/services/Commercial.jpg",
  "2": "/services/Residential.jpg",
  "3": "/services/Property.jpg",
  "4": "/services/Real Estate Consultation.jpg",
  "5": "/services/interior.jpg",
  "6": "/services/Renovation Services.jpg",
};

export default function Services() {
  return (
    <div className="page-transition ">
      {/* Hero Section */}
      <section
        className="relative w-full h-96 md:h-[25rem] flex items-center justify-center p-0 m-0 overflow-hidden"
        style={{ marginTop: "-64px" }}
      >
        <img
          src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Modern office interior"
          className="  object-cover  border-0"
          style={{ marginTop: "-64px" }}
        />
        <div className="container absolute inset-0 flex flex-col justify-center items-center z-20">
          <div className="max-w-2xl mx-auto text-center text-white">
            <motion.h1
              className="text-2xl md:text-3xl font-bold text-black"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            ></motion.h1>
            <motion.p
              className="text-sm md:text-lg mt-2 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Comprehensive real estate solutions tailored to your unique needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/services/servicesbg.jpg')" }}
      >
        <div className="container relative z-10">
          <SectionHeader
            title="What We Offer"
            subtitle={
              <span className="text-black">
                From finding the perfect property to designing your ideal space,
                we've got you covered
              </span>
            }
            centered
          />

          {/* First row: left ServiceCard, right Marquee */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="col-span-1">
              <ServiceCard
                service={{
                  ...services[0],
                  imageUrl: serviceImages[services[0].id],
                }}
              />
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-2 flex items-center">
              <Marquee
                direction="right"
                speed={40}
                gradient={false}
                className="w-full"
              >
                <img
                  src={serviceImages[services[1].id]}
                  alt={services[1].title}
                  className="h-40 rounded-xl shadow-md mx-4"
                />
                <div className="text-xl font-bold text-white mx-4">
                  {services[1].title}
                </div>
              </Marquee>
            </div>
          </div>

          {/* Second row: left Marquee, right ServiceCard */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="col-span-1 md:col-span-1 lg:col-span-2 flex items-center">
              <Marquee
                direction="left"
                speed={40}
                gradient={false}
                className="w-full"
              >
                <img
                  src={serviceImages[services[2].id]}
                  alt={services[2].title}
                  className="h-40 rounded-xl shadow-md mx-4"
                />
                <div className="text-xl font-bold text-white mx-4">
                  {services[2].title}
                </div>
              </Marquee>
            </div>
            <div className="col-span-1">
              <ServiceCard
                service={{
                  ...services[3],
                  imageUrl: serviceImages[services[3].id],
                }}
              />
            </div>
          </div>

          {/* Remaining services as cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {services.slice(4).map((service) => (
              <ServiceCard
                key={service.id}
                service={{ ...service, imageUrl: serviceImages[service.id] }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/services/fproperties.jpg')" }}
      >
        <div className="absolute "></div>
        <div className="container relative z-10">
          <SectionHeader
            title="Discover Our Featured Properties"
            subtitle="Explore a curated selection of commercial and residential spaces, each thoughtfully chosen to suit a variety of lifestyles and business ambitions. Find your next opportunity or dream home among our standout listings below."
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow"
              >
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-xl font-bold mb-2 text-primary-700">
                    {property.title}
                  </h3>
                  <p className="text-neutral-700 mb-4 flex-1">
                    {property.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {property.features &&
                      property.features.map((feature: string, idx: number) => (
                        <span
                          key={idx}
                          className="inline-block bg-primary-50 text-primary-700 text-xs px-3 py-1 rounded-full border border-primary-100"
                        >
                          {feature}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/services/process.jpg')" }}
      >
        <div className="absolute inset-0 z-0"></div>
        <div className="container relative z-10 text-black">
          <SectionHeader
            title="Our Process"
            subtitle={
              <span className="text-black">
                How we work with you to deliver exceptional results
              </span>
            }
            centered
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform -translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="font-serif text-2xl font-semibold mb-3">
                    Initial Consultation
                  </h3>
                  <p className="text-neutral-600">
                    We begin by understanding your needs, preferences, and goals
                    to tailor our approach.
                  </p>
                </div>
                <div className="relative z-10 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-semibold text-lg mb-6 md:mb-0">
                  1
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 order-1 md:order-none"></div>
                <div className="relative z-10 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-semibold text-lg mb-6 md:mb-0 order-0 md:order-none">
                  2
                </div>
                <div className="md:w-1/2 md:pl-12 order-2 md:order-none">
                  <h3 className="font-serif text-2xl font-semibold mb-3">
                    Property Selection
                  </h3>
                  <p className="text-neutral-600">
                    We curate a selection of properties that match your criteria
                    and arrange viewings.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="font-serif text-2xl font-semibold mb-3">
                    Customization & Design
                  </h3>
                  <p className="text-neutral-600">
                    Our design team works with you to customize the space
                    according to your vision.
                  </p>
                </div>
                <div className="relative z-10 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-semibold text-lg mb-6 md:mb-0">
                  3
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 order-1 md:order-none"></div>
                <div className="relative z-10 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-semibold text-lg mb-6 md:mb-0 order-0 md:order-none">
                  4
                </div>
                <div className="md:w-1/2 md:pl-12 order-2 md:order-none">
                  <h3 className="font-serif text-2xl font-semibold mb-3">
                    Implementation
                  </h3>
                  <p className="text-neutral-600">
                    We handle all aspects of the transaction and implementation,
                    ensuring a smooth process.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="font-serif text-2xl font-semibold mb-3">
                    Ongoing Support
                  </h3>
                  <p className="text-neutral-600">
                    Our relationship continues with ongoing support and services
                    as needed.
                  </p>
                </div>
                <div className="relative z-10 w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-semibold text-lg mb-6 md:mb-0">
                  5
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-sky-400 to-blue-400 text-white">
        <div className="container text-center">
          <h2 className="font-serif text-3xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your real estate needs and discover how
            our services can benefit you.
          </p>
          <a
            href="/contact"
            className="btn bg-white text-primary-600 hover:bg-neutral-100"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  );
}
