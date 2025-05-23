import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
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
      <section className="relative w-full h-48 md:h-64 bg-blue-700">
        <div className="absolute inset-0 bg-opacity-60 flex items-center justify-center text-white text-center px-4">
          <div>
            <motion.h1
              className="text-2xl md:text-3xl font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="text-sm md:text-lg mt-2 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Let's help you find the perfect space!
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="px-6 py-16 bg-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-blue-700 mt-1" />
                Jain Sadguru Image’s Capital Park, Office No. 503, 5th Floor,
                Madhapur, Hyderabad - 500081
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-blue-700" /> +91 94411 85884
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-blue-700" /> info@spacewave.in
              </li>
              <li className="flex items-center">
                <Clock className="mr-3 text-blue-700" /> Mon - Sat: 9:00 AM -
                6:00 PM
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="p-3 border rounded-md w-full"
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="p-3 border rounded-md w-full"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                className="p-3 border rounded-md w-full"
              />
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="p-3 border rounded-md w-full"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="w-full p-3 border rounded-md"
            ></textarea>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition"
            >
              <Send size={18} /> Send Message
            </button>

            {formSubmitted && (
              <p className="text-green-600 mt-4">
                Thank you! Your message has been sent.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="w-full h-[400px] md:h-[500px]">
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.318720201359!2d78.38277267494318!3d17.44008118336395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f74f8ae5e5%3A0x68c9c3f3437c9174!2sCapital%20Park%2C%20Madhapur%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1716452345678!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
