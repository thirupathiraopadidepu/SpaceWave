import SectionHeader from "../components/ui/SectionHeader";
import { Building, Users, CheckCircle, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <div className="page-transition pt-24">
      {/* Hero Section */}
      <section className="py-10">
        <img
          src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Modern office building"
          className="animated-bg-image h-48 md:h-64 object-cover"
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
      <section className="py-20 bg-primary-50">
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
      <section className="py-20 bg-primary-600 text-white">
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
    </div>
  );
}
