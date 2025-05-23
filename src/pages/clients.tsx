import { motion } from "framer-motion";

const Clients = () => {
  const clientLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/5/50/DLF_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Godrej_Industries_Logo.svg/2560px-Godrej_Industries_Logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/f/f4/Sobha_Developers_logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/TATA_Group_logo.svg/2560px-TATA_Group_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Prestige_Group_logo.svg/1280px-Prestige_Group_logo.svg.png",
  ];

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-48 md:h-64">
        <img
          src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Modern office interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute mt-10 inset-0  bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
          <motion.h1
            className="text-2xl md:text-3xl font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Trusted Clients
          </motion.h1>
          <motion.p
            className="text-sm md:text-lg mt-2 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We proudly collaborate with leading real estate developers and
            brands across India.
          </motion.p>
        </div>
      </section>

      {/* Clients Marquee */}
      <section className="overflow-hidden bg-gray-100 py-6 border-y border-gray-300">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {clientLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className="mx-12 h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </section>

      {/* Client Highlights */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Why Top Clients Choose SpaceWave
        </h2>
        <p className="text-gray-700 mb-4">
          We've partnered with over 50+ reputed developers and real estate
          brands to deliver value across Hyderabad and beyond.
        </p>
        <p className="text-gray-700">
          Our transparent approach, customized property solutions, and focus on
          client satisfaction make us a preferred real estate partner.
        </p>
      </section>
    </div>
  );
};

export default Clients;
