import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Building } from "lucide-react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/properties", label: "Properties" },
  { path: "/contact", label: "Contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer
      className=" text-black pt-16 pb-8 relative"
      style={{
        // backgroundImage: "url('/footer.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0  pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/SpaceWave.png"
                alt="SpaceWave Logo"
                className="h-12 md:h-14 object-contain transition-all duration-300"
              />
            </div>
            <p className=" mb-6">Commercial. Residential. Customized to You.</p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className=" transition-colors duration-300"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-white">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className=" hover:text-blue transition-colors duration-300"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-white">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services"
                  className=" hover:text-blue transition-colors duration-300"
                >
                  Interior Design
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className=" hover:text-blue transition-colors duration-300"
                >
                  Commercial Sales & Leasing
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-blue transition-colors duration-300"
                >
                  Residential Sales
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className=" hover:text-blue transition-colors duration-300"
                >
                  Property Management
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <address className="not-italic ">
              <p className="mb-2">
                Jain Sadguru Image’s Capital Park, Office No. 503, 5th Floor,
                Madhapur, Hyderabad - 500081
              </p>
              <p className="mb-2">info@spacewave.in</p>
              <p className="mb-2">+91 94411 85884</p>
            </address>
          </div>
        </div>

        <hr className=" mb-8" />

        <div className="text-center ">
          <p>© {new Date().getFullYear()} SpaceWave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
