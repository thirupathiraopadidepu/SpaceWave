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
      <section className="py-20">
        <div className="container relative z-20 mt-10">
          <div className="max-w-3xl mx-auto text-center bg-white/80 backdrop-blur-md rounded-xl shadow-2xl p-10 border border-primary-100 animate-fade-in-up transition-all duration-700">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 animate-slide-in-down">
              Who We Are
            </h1>
            <p className="text-xl mb-10 animate-fade-in">
              Since 2009, SpaceWave has been transforming the real estate
              landscape with innovative solutions and exceptional service.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="SpaceWave Team"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <SectionHeader
                title="Our Journey"
                subtitle="From a small startup to a leader in the real estate industry"
              />
              <p className="text-neutral-600 mb-6">
                Founded in 2009 in Hyderabad, SpaceWave began with a vision to
                transform how people experience real estate. What started as a
                small team of passionate professionals has grown into a
                full-service real estate company with a reputation for
                excellence and innovation.
              </p>
              <p className="text-neutral-600 mb-6">
                Our headquarters remain in Hyderabad, but our impact extends
                throughout the region. With over 200 successful transactions and
                more than 20 million square feet of space transformed, we've
                built a legacy of trust and results.
              </p>
              <p className="text-neutral-600">
                Today, we continue to evolve and expand our services while
                staying true to our founding principles of integrity,
                excellence, and client-focused solutions.
              </p>
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

      {/* Team */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            title="Our Leadership Team"
            subtitle="Meet the experts behind SpaceWave's success"
            centered
          />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 relative">
                <img
                  src="https://images.pexels.com/photos/5717549/pexels-photo-5717549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team Member"
                  className="w-64 h-64 object-cover rounded-full mx-auto"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold">Priya Sharma</h3>
              <p className="text-primary-600 mb-2">Founder & CEO</p>
              <p className="text-neutral-600 max-w-xs mx-auto">
                With 20+ years in real estate, Priya brings vision and strategic
                leadership to SpaceWave.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <img
                  src="https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team Member"
                  className="w-64 h-64 object-cover rounded-full mx-auto"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold">Raj Patel</h3>
              <p className="text-primary-600 mb-2">Chief Operations Officer</p>
              <p className="text-neutral-600 max-w-xs mx-auto">
                Raj oversees all operations, ensuring exceptional service
                delivery and client satisfaction.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <img
                  src="https://images.pexels.com/photos/8189598/pexels-photo-8189598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team Member"
                  className="w-64 h-64 object-cover rounded-full mx-auto"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold">Ananya Reddy</h3>
              <p className="text-primary-600 mb-2">Head of Design</p>
              <p className="text-neutral-600 max-w-xs mx-auto">
                Ananya leads our interior design team, transforming spaces with
                creativity and functionality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
