import { NavLink } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Building } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/properties', label: 'Properties' },
  { path: '/contact', label: 'Contact' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building size={32} className="text-primary-400" />
              <span className="font-serif font-bold text-2xl">SpaceWave</span>
            </div>
            <p className="text-neutral-400 mb-6">
              Commercial. Residential. Customized to You.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-neutral-400 hover:text-white transition-colors duration-300"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className="text-neutral-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-neutral-400 hover:text-white transition-colors duration-300">
                  Interior Design
                </a>
              </li>
              <li>
                <a href="/services" className="text-neutral-400 hover:text-white transition-colors duration-300">
                  Commercial Sales & Leasing
                </a>
              </li>
              <li>
                <a href="/services" className="text-neutral-400 hover:text-white transition-colors duration-300">
                  Residential Sales
                </a>
              </li>
              <li>
                <a href="/services" className="text-neutral-400 hover:text-white transition-colors duration-300">
                  Property Management
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-neutral-400">
              <p className="mb-2">Hyderabad, India</p>
              <p className="mb-2">contact@spacewave.com</p>
              <p className="mb-2">+91 (XXX) XXX-XXXX</p>
            </address>
          </div>
        </div>
        
        <hr className="border-neutral-800 mb-8" />
        
        <div className="text-center text-neutral-500">
          <p>© {new Date().getFullYear()} SpaceWave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}