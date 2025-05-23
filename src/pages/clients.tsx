import { motion } from "framer-motion";

const clientLogos = [
  "/clientlogos/8.-BACKOFFICE-I-T-SERVICES-INDIA-PRIVATE-LIMITED-logo.png",
  "/clientlogos/avantel-logo.jpeg",
  "/clientlogos/Blue-star-logo.jpeg",
  "/clientlogos/Gowra.jpeg",
  "/clientlogos/GSPANN-Logo.png",
  "/clientlogos/HR-Block-Logo.jpeg",
  "/clientlogos/Iffco-Tokio-Logo.png",
  "/clientlogos/Incor-logo.jpeg",
  "/clientlogos/infosun-logo.png",
  "/clientlogos/launchship-logo.png",
  "/clientlogos/LT-Logo.png",
  "/clientlogos/Mantri-devolepers-Logo.jpeg",
  "/clientlogos/Meslova.jpeg",
  "/clientlogos/MobileIron-logo.png",
  "/clientlogos/My-Smart-price-logo.png",
  "/clientlogos/myhome-group-logo.jpeg",
  "/clientlogos/Navayuga-logo.png",
  "/clientlogos/Phoenix-group-logo.jpeg",
  "/clientlogos/Posidex-logo.png",
  "/clientlogos/Punjlloyd.jpeg",
  "/clientlogos/S-Squrare-logo.jpeg",
  "/clientlogos/Sai-Surya-Developer-logo.jpeg",
  "/clientlogos/Techwave-logo.jpeg",
  "/clientlogos/V-soft-logo-1024x538.jpeg",
  "/clientlogos/Vamsiram-Builders-Logo.jpeg",
  "/clientlogos/Vasavi-Group-Logo.jpeg",
  "/clientlogos/vatika-group-logo.jpeg",
  "/clientlogos/Webfurther.jpeg",
];

const Clients = () => {
  return (
    <div
      className="relative text-white min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/clientlogos/clientbg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20">
        <motion.h1
          className="text-2xl md:text-3xl font-bold mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Trusted Clients
        </motion.h1>

        <motion.p
          className="text-md md:text-lg max-w-3xl mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We proudly collaborate with leading real estate developers and brands
          across India.
        </motion.p>

        {/* Marquee logo strip */}
        <div className="overflow-hidden mt-10 w-full py-4">
          <div className="flex animate-marquee space-x-8 whitespace-nowrap">
            {clientLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client Logo ${index + 1}`}
                className="h-12 md:h-14 object-contain  transition duration-300"
              />
            ))}
          </div>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12  p-6 ">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-3 bg-white/20 rounded-lg"
            >
              <img
                src={logo}
                alt={`Client Logo ${index + 1}`}
                className="h-12 md:h-16 object-contain transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
