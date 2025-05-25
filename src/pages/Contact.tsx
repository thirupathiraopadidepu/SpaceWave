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
import emailjs from "emailjs-com";

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
    // Replace these with your EmailJS credentials
    const SERVICE_ID = "your_service_id";
    const OWNER_TEMPLATE_ID = "your_owner_template_id";
    const CUSTOMER_TEMPLATE_ID = "your_customer_template_id";
    const USER_ID = "your_public_key";
    // Send email to website owner
    emailjs
      .send(
        SERVICE_ID,
        OWNER_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        USER_ID
      )
      .then(
        () => {
          // Send acknowledgment to customer
          emailjs.send(
            SERVICE_ID,
            CUSTOMER_TEMPLATE_ID,
            {
              to_name: formData.name,
              to_email: formData.email,
            },
            USER_ID
          );
          setFormSubmitted(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setTimeout(() => setFormSubmitted(false), 5000);
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
        }
      );
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

      {/* Our Offices Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-primary-100 relative overflow-hidden">
        <div className="container">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-700 mb-4 text-center">
            Our Offices
          </h2>
          <p className="text-neutral-700 text-lg mb-10 text-center max-w-2xl mx-auto">
            Visit us at our headquarters or connect with our regional offices
            for personalized assistance and expert guidance.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500">
              <img
                src="/wedeal/officespace.jpg"
                alt="Hyderabad Office"
                className="h-20 w-20 mb-4 rounded-full object-cover shadow"
              />
              <h3 className="font-serif text-xl font-bold text-primary-700 mb-2">
                Hyderabad HQ
              </h3>
              <p className="text-neutral-600">
                Jain Sadguru Image’s Capital Park, Office No. 503, 5th Floor,
                Madhapur, Hyderabad - 500081
              </p>
              <p className="text-primary-600 mt-2">+91 94411 85884</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500">
              <img
                src="/wedeal/retail.jpg"
                alt="Bangalore Office"
                className="h-20 w-20 mb-4 rounded-full object-cover shadow"
              />
              <h3 className="font-serif text-xl font-bold text-primary-700 mb-2">
                Bangalore
              </h3>
              <p className="text-neutral-600">Coming Soon</p>
              <p className="text-primary-600 mt-2">info@spacewave.in</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500">
              <img
                src="/wedeal/villa1.jpg"
                alt="Chennai Office"
                className="h-20 w-20 mb-4 rounded-full object-cover shadow"
              />
              <h3 className="font-serif text-xl font-bold text-primary-700 mb-2">
                Chennai
              </h3>
              <p className="text-neutral-600">Coming Soon</p>
              <p className="text-primary-600 mt-2">info@spacewave.in</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Highlights Section */}
      <section className="py-20 bg-gradient-to-br from-sky-400 to-blue-400 text-white relative overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="bg-primary-800/80 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-500">
              <MapPin size={36} className="mb-4 text-primary-200" />
              <h3 className="font-serif text-xl font-bold mb-2">
                Central Location
              </h3>
              <p>
                Our office is easily accessible in the heart of Hyderabad’s
                business district.
              </p>
            </div>
            <div className="bg-primary-800/80 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-500">
              <Phone size={36} className="mb-4 text-primary-200" />
              <h3 className="font-serif text-xl font-bold mb-2">
                Quick Response
              </h3>
              <p>
                We respond to all inquiries within 24 hours, ensuring you get
                the support you need.
              </p>
            </div>
            <div className="bg-primary-800/80 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-500">
              <Mail size={36} className="mb-4 text-primary-200" />
              <h3 className="font-serif text-xl font-bold mb-2">
                Expert Guidance
              </h3>
              <p>
                Our experienced team is ready to assist you with any real estate
                questions or needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
