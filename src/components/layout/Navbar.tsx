import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  Home,
  Info,
  Briefcase,
  Building2,
  Users,
  Mail,
  Menu,
  X,
  PhoneIcon,
} from "lucide-react";

// Nav links with icons
const navLinks = [
  { path: "/", label: "HOME", icon: <Home className="w-5 h-5" /> },
  { path: "/about", label: "ABOUT", icon: <Info className="w-5 h-5" /> },
  {
    path: "/services",
    label: "SERVICES",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    path: "/properties",
    label: "PROPERTIES",
    icon: <Building2 className="w-5 h-5" />,
  },
  { path: "/clients", label: "CLIENTS", icon: <Users className="w-5 h-5" /> },
  { path: "/contact", label: "CONTACT", icon: <Mail className="w-5 h-5" /> },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <img
              src="/SW_Logo-main.png"
              alt="SpaceWave Logo"
              className="h-10 md:h-12 object-contain"
            />
          </NavLink>

          {/* Contact Info (right side, above nav icons) */}
          <div className="hidden md:flex flex-col items-end space-y-1">
            <div className="flex items-center gap-3 text-sm text-neutral-700 font-medium">
              <span className="flex items-center gap-1">
                <Mail className="w-4 h-4 text-primary-600" />
                info@spacewave.in
              </span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="flex items-center gap-1">
                <PhoneIcon className="w-4 h-4 text-primary-600" />
                +91 94411 85884
              </span>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-neutral-900" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-900" />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex flex-col items-center text-xs font-medium ${
                    isActive
                      ? "text-primary-600"
                      : "text-neutral-800 hover:text-primary-600"
                  }`
                }
              >
                {link.icon}
                <span>{link.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 shadow-md py-4 px-6 flex flex-col space-y-4 absolute top-full left-0 right-0">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center space-x-2 text-base font-medium ${
                    isActive
                      ? "text-primary-600"
                      : "text-neutral-800 hover:text-primary-600"
                  }`
                }
              >
                {link.icon}
                <span>{link.label}</span>
              </NavLink>
            ))}
          </nav>
        )}
      </header>
      {/* Spacer to prevent content being hidden behind fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
}
