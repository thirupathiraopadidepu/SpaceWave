import { services } from "../data/services";
import ServiceCard from "../components/ui/ServiceCard";
import SectionHeader from "../components/ui/SectionHeader";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="page-transition pt-24">
      {/* Hero Section */}
      <section className="py-10 animated-bg">
        <img
          src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Modern office interior"
          className="animated-bg-image h-48 md:h-64 object-cover"
        />
        <div className="container relative z-20">
          <div className="max-w-2xl mx-auto text-center text-white">
            <motion.h1
              className="text-2xl md:text-3xl font-bold text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Services
            </motion.h1>
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
      <section className="py-20">
        <div className="container">
          <SectionHeader
            title="What We Offer"
            subtitle="From finding the perfect property to designing your ideal space, we've got you covered"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-primary-50">
        <div className="container">
          <SectionHeader
            title="Our Process"
            subtitle="How we work with you to deliver exceptional results"
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

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Hear from those who have experienced the SpaceWave difference"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-accent-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-neutral-600 italic mb-4">
                "SpaceWave helped us find the perfect office space for our
                growing team. Their attention to detail and understanding of our
                needs made the process seamless."
              </p>
              <div>
                <p className="font-medium">Vikram Mehta</p>
                <p className="text-sm text-neutral-500">CEO, TechInnovate</p>
              </div>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-accent-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-neutral-600 italic mb-4">
                "The interior design service from SpaceWave transformed our
                retail space completely. We've received countless compliments
                from customers on the new look."
              </p>
              <div>
                <p className="font-medium">Aisha Khan</p>
                <p className="text-sm text-neutral-500">
                  Owner, Bloom Boutique
                </p>
              </div>
            </div>

            <div className="bg-neutral-50 p-8 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-accent-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-neutral-600 italic mb-4">
                "Finding our family home was a breeze with SpaceWave. They truly
                listened to what we wanted and found us a property that exceeded
                our expectations."
              </p>
              <div>
                <p className="font-medium">Sanjay & Deepa Gupta</p>
                <p className="text-sm text-neutral-500">Homeowners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">
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
