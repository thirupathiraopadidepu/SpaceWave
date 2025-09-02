import { motion } from "framer-motion";

export const LogoStrip = ({
  logos,
  reverse = false,
}: {
  logos: string[];
  reverse?: boolean;
}) => {
  return (
    <motion.div
      className="flex space-x-8"
      animate={{ x: reverse ? ["-100%", "0%"] : ["0%", "-100%"] }}
      transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
    >
      {[...logos, ...logos].map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Client Logo ${index + 1}`}
          className="h-20 md:h-24 object-contain"
        />
      ))}
    </motion.div>
  );
};
