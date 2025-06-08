import SectionHeader from "../components/ui/SectionHeader";
import { Building, Users, CheckCircle, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section
        className="relative w-full h-64 md:h-96 flex items-center justify-center p-0 m-0 overflow-hidden "
        style={{ marginTop: "-64px" }}
      >
        <img
          src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Modern office building"
          className="w-full h-full object-cover border-0"
        />
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-primary-100 relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-200 rounded-full opacity-30 blur-3xl z-0 animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl z-0 animate-pulse" />
        <div className="container relative z-20 mt-10">
          <div className="max-w-3xl mx-auto text-center p-10 bg-white/80 rounded-3xl shadow-2xl backdrop-blur-md border border-primary-100 animate-fade-in-up">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary-700 drop-shadow-lg">
              Who We Are
            </h1>
            <p className="text-xl mb-10 animate-fade-in text-neutral-700">
              Since 2009,{" "}
              <span className="font-bold text-primary-600">SpaceWave</span> has
              been transforming the real estate landscape with innovative
              solutions and exceptional service.
            </p>
          </div>
        </div>
        <div className="container mt-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="SpaceWave Team"
                className="rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500 border-4 border-primary-100"
              />
              <div className="absolute bottom-4 left-4 bg-white/80 px-4 py-2 rounded-lg shadow-md text-primary-700 font-semibold text-sm backdrop-blur-md">
                Our Team at Work
              </div>
            </div>
            <div className="relative z-10 animate-fade-in-up">
              <SectionHeader
                title="Our Journey"
                subtitle="From a small startup to a leader in the real estate industry"
              />
              <div className="space-y-6 text-neutral-700 text-lg">
                <p>
                  <span className="font-bold text-primary-700">
                    Founded in 2009
                  </span>{" "}
                  in Hyderabad, SpaceWave began with a vision to transform how
                  people experience real estate. What started as a small team of
                  passionate professionals has grown into a full-service real
                  estate company with a reputation for excellence and
                  innovation.
                </p>
                <p>
                  Our headquarters remain in Hyderabad, but our impact extends
                  throughout the region. With{" "}
                  <span className="font-bold text-primary-600">
                    200+ successful transactions
                  </span>{" "}
                  and more than{" "}
                  <span className="font-bold text-primary-600">
                    20 million sq. ft.
                  </span>{" "}
                  of space transformed, we've built a legacy of trust and
                  results.
                </p>
                <p>
                  Today, we continue to evolve and expand our services while
                  staying true to our founding principles of{" "}
                  <span className="italic text-primary-700">
                    integrity, excellence, and client-focused solutions
                  </span>
                  .
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold text-sm shadow">
                  Innovation
                </span>
                <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold text-sm shadow">
                  Trust
                </span>
                <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold text-sm shadow">
                  Excellence
                </span>
                <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold text-sm shadow">
                  Client Focus
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-primary-200 text-black">
        <div className="container">
          <SectionHeader
            title="Our Mission & Vision"
            subtitle="Guiding principles that drive everything we do"
            centered
          />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl font-semibold mb-4">
                Our Mission
              </h3>
              <p className="text-neutral-600 mb-4">
                To provide exceptional real estate services that exceed client
                expectations, transform spaces into opportunities, and
                contribute positively to the communities we serve.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="text-primary-600 mt-1 mr-2 flex-shrink-0"
                  />
                  <span>Deliver personalized solutions for every client</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="text-primary-600 mt-1 mr-2 flex-shrink-0"
                  />
                  <span>
                    Maintain the highest standards of integrity and transparency
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="text-primary-600 mt-1 mr-2 flex-shrink-0"
                  />
                  <span>Continuously innovate our services and approaches</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl font-semibold mb-4">
                Our Vision
              </h3>
              <p className="text-neutral-600 mb-4">
                To be the most trusted and innovative real estate partner, known
                for creating exceptional value and experiences in every property
                transaction and relationship.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="text-primary-600 mt-1 mr-2 flex-shrink-0"
                  />
                  <span>
                    Lead the industry in client satisfaction and retention
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="text-primary-600 mt-1 mr-2 flex-shrink-0"
                  />
                  <span>
                    Expand our positive impact on communities and environments
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="text-primary-600 mt-1 mr-2 flex-shrink-0"
                  />
                  <span>
                    Set new standards for excellence in the real estate industry
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-sky-500 to-blue-500 text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Building size={48} className="mx-auto mb-4 text-primary-200" />
              <p className="text-4xl font-serif font-bold mb-2">200+</p>
              <p className="text-primary-100">Successful Transactions</p>
            </div>
            <div>
              <Users size={48} className="mx-auto mb-4 text-primary-200" />
              <p className="text-4xl font-serif font-bold mb-2">15+</p>
              <p className="text-primary-100">Industry Experts</p>
            </div>
            <div>
              <TrendingUp size={48} className="mx-auto mb-4 text-primary-200" />
              <p className="text-4xl font-serif font-bold mb-2">20M+</p>
              <p className="text-primary-100">Square Feet Transformed</p>
            </div>
            <div>
              <CheckCircle
                size={48}
                className="mx-auto mb-4 text-primary-200"
              />
              <p className="text-4xl font-serif font-bold mb-2">14</p>
              <p className="text-primary-100">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container">
          <SectionHeader
            title="Our Values"
            subtitle="What Drives SpaceWave Forward"
            centered
          />
          <div className="grid md:grid-cols-3 gap-10 mt-12">
            <div className="bg-primary-50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500">
              <img
                src="/services/Real Estate Consultation.jpg"
                alt="Innovation"
                className="h-20 w-20 mb-4 rounded-full object-cover shadow"
              />
              <h3 className="font-serif text-2xl font-bold text-primary-700 mb-2">
                Innovation
              </h3>
              <p className="text-neutral-600">
                We embrace new ideas and technology to deliver the best
                solutions for our clients and stay ahead in the real estate
                industry.
              </p>
            </div>
            <div className="bg-primary-50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500">
              <img
                src="/services/Property.jpg"
                alt="Integrity"
                className="h-20 w-20 mb-4 rounded-full object-cover shadow"
              />
              <h3 className="font-serif text-2xl font-bold text-primary-700 mb-2">
                Integrity
              </h3>
              <p className="text-neutral-600">
                We believe in transparency, honesty, and ethical practices in
                every transaction and relationship.
              </p>
            </div>
            <div className="bg-primary-50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500">
              <img
                src="/services/Commercial.jpg"
                alt="Client Focus"
                className="h-20 w-20 mb-4 rounded-full object-cover shadow"
              />
              <h3 className="font-serif text-2xl font-bold text-primary-700 mb-2">
                Client Focus
              </h3>
              <p className="text-neutral-600">
                Our clients are at the heart of everything we do. We tailor our
                services to meet their unique needs and exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gradient-to-br from-primary-100 via-white to-primary-50 relative overflow-hidden">
        <div className="container">
          <SectionHeader
            title="Meet Our Leadership"
            subtitle="Guiding SpaceWave to New Heights"
            centered
          />
          <div className="flex flex-col items-center justify-center mt-12">
            <div className="flex flex-col items-center text-center">
              <img
                src="/wedeal/villa1.jpg"
                alt="Founder"
                className="h-32 w-32 rounded-full object-cover shadow-lg mb-4 border-4 border-primary-200"
              />
              <h3 className="font-serif text-xl font-bold text-primary-700 mb-1">
                Vasu
              </h3>
              <p className="text-primary-600 font-semibold mb-2">
                Founder & CEO
              </p>
              <p className="text-neutral-600">
                With over 20 years of experience in real estate, Vasu leads
                SpaceWave with a vision for innovation and excellence.
              </p>
            </div>
          </div>
          {/* <div className="flex flex-col items-center text-center">
              <img
                src="/wedeal/retail.jpg"
                alt="Co-Founder"
                className="h-32 w-32 rounded-full object-cover shadow-lg mb-4 border-4 border-primary-200"
              />
              <h3 className="font-serif text-xl font-bold text-primary-700 mb-1">
                S. Rao
              </h3>
              <p className="text-primary-600 font-semibold mb-2">
                Co-Founder & Director
              </p>
              <p className="text-neutral-600">
                Rao brings a wealth of expertise in client relations and
                business development, ensuring every client receives
                personalized attention.
              </p>
            </div> */}
          {/* </div> */}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-sky-400 to-blue-400 text-white relative overflow-hidden">
        <div className="container">
          <SectionHeader
            title="Why Choose SpaceWave?"
            subtitle="Experience the Difference"
            centered
          />
          <div className="grid md:grid-cols-3 gap-10 mt-12">
            <div className="bg-primary-800/80 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500">
              <Building size={40} className="mb-4 text-primary-200" />
              <h3 className="font-serif text-xl font-bold mb-2">
                Comprehensive Services
              </h3>
              <p>
                From consultation to property management, we offer end-to-end
                real estate solutions under one roof.
              </p>
            </div>
            <div className="bg-primary-800/80 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500">
              <TrendingUp size={40} className="mb-4 text-primary-200" />
              <h3 className="font-serif text-xl font-bold mb-2">
                Proven Track Record
              </h3>
              <p>
                200+ successful transactions and 20M+ sq. ft. transformed—our
                results speak for themselves.
              </p>
            </div>
            <div className="bg-primary-800/80 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500">
              <Users size={40} className="mb-4 text-primary-200" />
              <h3 className="font-serif text-xl font-bold mb-2">Expert Team</h3>
              <p>
                Our passionate professionals bring deep market knowledge and a
                client-first approach to every project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
