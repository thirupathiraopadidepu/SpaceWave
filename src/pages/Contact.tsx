import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-48 md:h-64 flex items-center justify-center bg-gradient-to-br from-sky-400 to-blue-600">
        <div className="absolute inset-0 bg-primary-800/20 z-0"></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg font-serif text-black"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-xl mx-auto drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Let's help you find the perfect space!
          </motion.p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section
        className="px-6 py-20 bg-cover bg-center relative"
        style={{ backgroundImage: "url('public/contact/contactbg.jpg')" }}
      >
        <div className="absolute inset-0 z-0"></div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Contact Info */}
          <div className="bg-primary-50 rounded-2xl shadow-lg p-10 animate-fade-in-up">
            <h2 className="text-2xl font-bold mb-6 text-primary-700 font-serif">
              Get in Touch
            </h2>
            <ul className="space-y-6 text-lg">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-600 mt-1" />
                <span>
                  Jain Sadguru Image’s Capital Park, Office No. 503, 5th Floor,
                  <br />
                  Madhapur, Hyderabad - 500081
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary-600" />{" "}
                <span>+91 94411 85884</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary-600" />{" "}
                <span>info@spacewave.in</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-primary-600" />{" "}
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
            <div className="mt-8">
              <h3 className="font-serif text-lg font-semibold mb-2 text-primary-700">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a href="#" className="text-primary-600 hover:text-primary-800">
                  <Facebook size={22} />
                </a>
                <a href="#" className="text-primary-600 hover:text-primary-800">
                  <Instagram size={22} />
                </a>
                <a href="#" className="text-primary-600 hover:text-primary-800">
                  <Twitter size={22} />
                </a>
                <a href="#" className="text-primary-600 hover:text-primary-800">
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-10 space-y-6 animate-fade-in-up border border-primary-100"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary-700 font-serif">
              Send Us a Message
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="p-3 border border-primary-100 rounded-md w-full focus:ring-2 focus:ring-primary-200"
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="p-3 border border-primary-100 rounded-md w-full focus:ring-2 focus:ring-primary-200"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                className="p-3 border border-primary-100 rounded-md w-full focus:ring-2 focus:ring-primary-200"
              />
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="p-3 border border-primary-100 rounded-md w-full focus:ring-2 focus:ring-primary-200"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="w-full p-3 border border-primary-100 rounded-md focus:ring-2 focus:ring-primary-200"
            ></textarea>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-md hover:bg-primary-700 transition font-semibold text-lg shadow-md"
            >
              <Send size={20} /> Send Message
            </button>

            {formSubmitted && (
              <p className="text-green-600 mt-4 text-center animate-fade-in">
                Thank you! Your message has been sent.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="w-full h-[400px] md:h-[500px] relative">
        <div className="absolute inset-0">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.266787519406!2d78.386181!3d17.4469404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb910d8d1c4f8b%3A0x6ef1b184af90fa3f!2sCapital%20Park!5e0!3m2!1sen!2sin!4v1748009876095!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl shadow-lg"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
