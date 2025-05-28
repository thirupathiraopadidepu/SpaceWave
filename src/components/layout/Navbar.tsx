import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Building } from "lucide-react";

const navLinks = [
  { path: "/", label: "HOME" },
  { path: "/about", label: "ABOUT" },
  { path: "/services", label: "SERVICES" },
  { path: "/properties", label: "PROPERTIES" },
  { path: "/clients", label: "CLIENTS" },
  { path: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <img
            src="/SW_Logo-main.png"
            alt="SpaceWave Logo"
            className="h-18 md:h-20 object-contain transition-all duration-300"
          />
        </NavLink>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? (
            <X
              className={`w-6 h-6 ${
                isScrolled ? "text-neutral-900" : "text-neutral-900"
              }`}
            />
          ) : (
            <Menu
              className={`w-6 h-6 ${
                isScrolled ? "text-neutral-900" : "text-neutral-900"
              }`}
            />
          )}
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rainbow-button ${
                  isActive ? "text-primary-600" : "text-neutral-900"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          {/* <NavLink
            to="/contact"
            className="ml-4 btn btn-primary rainbow-button "
          >
            Get in Touch
          </NavLink> */}
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg py-4 px-6 absolute top-full left-0 right-0 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-primary-600"
                  : "text-neutral-800 hover:text-primary-600"
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="btn btn-primary text-center mt-2"
          >
            Get in Touch
          </NavLink>
        </nav>
      )}
    </header>
  );
}
