import { motion } from "framer-motion";
import { LogoStrip } from "../components/LogoStrip";

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
  "/clientlogos/way2sms.png",
  "/clientlogos/WesternConstructions.jpg",
  "/clientlogos/delta-technologies.jpeg",
  "/clientlogos/central-books-logo.png",
  "/clientlogos/pravaltech-logo.png",
  "/clientlogos/prestige-logo.png",
  "/clientlogos/sanali-group-logo.jpeg",
];

const firstRow = clientLogos.slice(0, 18);
const secondRow = clientLogos.slice(18);

const Clients = () => {
  return (
    <div
      className="relative text-white min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/clientlogos/clientbg.png')" }}
    >
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[320px] md:min-h-[400px] flex items-center justify-center bg-cover bg-center "
        style={{
          backgroundImage: "url('/clientlogos/chsbg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: "-64px",
        }}
      >
        <div className="absolute inset-0  z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20 w-full">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mt-10 text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Trusted Clients
          </motion.h1>
          <motion.p
            className="text-md md:text-lg max-w-3xl mt-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We proudly collaborate with leading real estate developers and
            brands across India.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20">
        {/* Marquee logo strip */}
        <div className="overflow-hidden mt-10 w-full space-y-8">
          {/* Row 1 (18 logos) */}
          <LogoStrip logos={firstRow} />

          {/* Row 2 (17 logos, reverse direction) */}
          <LogoStrip logos={secondRow} reverse />
        </div>

        {/* Featured Clients Section */}
        <section className="w-full max-w-6xl mx-auto mt-20 mb-10">
          <div className="bg-white/80 rounded-3xl shadow-2xl p-10 border border-primary-100 backdrop-blur-md">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-700 mb-4 text-center">
              Featured Client Success Stories
            </h2>
            <p className="text-neutral-700 text-lg mb-8 text-center max-w-2xl mx-auto">
              Discover how we’ve helped leading brands and organizations achieve
              their real estate goals with tailored solutions and dedicated
              support.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-primary-50 rounded-xl shadow p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500">
                <img
                  src="/clientlogos/Blue-star-logo.jpeg"
                  alt="Blue Star"
                  className="h-16 w-16 object-contain rounded-full mb-4 border-2 border-primary-200"
                />
                <h3 className="font-serif text-xl font-bold text-primary-700 mb-2">
                  Blue Star
                </h3>
                <p className="text-neutral-600">
                  Enabled seamless expansion into new markets with our
                  commercial leasing expertise.
                </p>
              </div>
              <div className="bg-primary-50 rounded-xl shadow p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500">
                <img
                  src="/clientlogos/HR-Block-Logo.jpeg"
                  alt="H&R Block"
                  className="h-16 w-16 object-contain rounded-full mb-4 border-2 border-primary-200"
                />
                <h3 className="font-serif text-xl font-bold text-primary-700 mb-2">
                  H&R Block
                </h3>
                <p className="text-neutral-600">
                  Delivered customized office solutions for a fast-growing tech
                  team in Hyderabad.
                </p>
              </div>
              <div className="bg-primary-50 rounded-xl shadow p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500">
                <img
                  src="/clientlogos/myhome-group-logo.jpeg"
                  alt="My Home Group"
                  className="h-16 w-16 object-contain rounded-full mb-4 border-2 border-primary-200"
                />
                <h3 className="font-serif text-xl font-bold text-primary-700 mb-2">
                  My Home Group
                </h3>
                <p className="text-neutral-600">
                  Supported large-scale residential and commercial projects with
                  end-to-end real estate services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Brands Choose Us Section */}
        <section className="w-full max-w-6xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-primary-50 via-white to-primary-100 rounded-3xl shadow-xl p-10 border border-primary-100">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-700 mb-4 text-center">
              Why Leading Brands Choose SpaceWave
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="flex flex-col items-center text-center">
                <span className="bg-primary-600 text-white rounded-full p-4 mb-4">
                  <i className="lucide-handshake" />
                </span>
                <h3 className="font-serif text-xl font-bold mb-2 text-primary-700">
                  Trusted Partnerships
                </h3>
                <p className="text-neutral-700">
                  Long-term relationships built on transparency, reliability,
                  and results.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="bg-primary-600 text-white rounded-full p-4 mb-4">
                  <i className="lucide-rocket" />
                </span>
                <h3 className="font-serif text-xl font-bold mb-2 text-primary-700">
                  Tailored Solutions
                </h3>
                <p className="text-neutral-700">
                  Custom strategies for every client, from startups to industry
                  leaders.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="bg-primary-600 text-white rounded-full p-4 mb-4">
                  <i className="lucide-award" />
                </span>
                <h3 className="font-serif text-xl font-bold mb-2 text-primary-700">
                  Proven Track Record
                </h3>
                <p className="text-neutral-700">
                  200+ successful projects and millions of square feet
                  delivered.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Clients;
