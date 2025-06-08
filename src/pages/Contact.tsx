import { useState, useRef } from "react";
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
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

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
      {/* Hero Section */}s{" "}
      <section
        className="relative w-full h-48 md:h-64 flex items-center justify-center bg-gradient-to-br from-sky-400 to-blue-600 p-0 m-0 -mt-[64px]"
        style={{ marginTop: "-64px" }}
      >
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
      {/* Contact Video Section - Unique Design */}
      <section className="relative py-16 px-4 md:px-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary-50 via-blue-50 to-white overflow-hidden">
        <div className="max-w-5xl w-full mx-auto rounded-3xl shadow-2xl border border-primary-200 bg-white/80 backdrop-blur-xl p-0 md:p-10 flex flex-col md:flex-row items-center gap-10 animate-fade-in-up relative">
          <div className="w-full md:w-1/2 flex justify-center items-center relative min-h-[320px]">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
              <div className="bg-gradient-to-br from-primary-500 to-blue-400 p-3 rounded-full shadow-lg flex items-center justify-center animate-bounce">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553 2.276A2 2 0 0121 14.09V17a2 2 0 01-2 2H5a2 2 0 01-2-2v-2.91a2 2 0 01.447-1.314L8 10"
                  />
                </svg>
              </div>
            </div>
            <video
              ref={videoRef}
              src="/contact/contactv.mp4"
              autoPlay
              loop
              muted={isMuted}
              className="rounded-2xl shadow-xl object-cover w-full h-full max-w-none border-4 border-primary-100"
              style={{ maxHeight: 420, minHeight: 280 }}
            />
            <button
              type="button"
              onClick={() => {
                setIsMuted((prev) => {
                  const newMuted = !prev;
                  if (videoRef.current) videoRef.current.muted = newMuted;
                  return newMuted;
                });
              }}
              className="absolute top-4 right-4 bg-white/90 rounded-full p-2 shadow-lg focus:outline-none border border-primary-200 hover:bg-primary-50 transition"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 9v6h4l5 5V4l-5 5H9zm-4 4v-2a4 4 0 014-4h1"
                  />
                  <line
                    x1="1"
                    y1="1"
                    x2="23"
                    y2="23"
                    stroke="currentColor"
                    strokeWidth={2}
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 9v6h4l5 5V4l-5 5H9zm-4 4v-2a4 4 0 014-4h1"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-6 p-4 md:p-0">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-700 font-serif mb-2 drop-shadow">
              See SpaceWave in Action
            </h2>
            <p className="text-primary-800 text-lg mb-2">
              Experience our vibrant work culture and customer-first approach.
              Watch our team in action, helping clients find their dream spaces
              and making real estate simple and enjoyable.
            </p>
            <ul className="space-y-3 text-primary-700">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>{" "}
                Real team moments, not stock footage
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>{" "}
                See our office and client interactions
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>{" "}
                Discover our passion for service
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Contact Info + Form */}
      <section
        className="relative py-20 px-4 md:px-0 flex items-center justify-center min-h-[700px] bg-cover bg-center"
        style={{ backgroundImage: "url('public/contact/contactbg.jpg')" }}
      >
        <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-stretch gap-0 md:gap-0 relative z-10 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl bg-white/60 border border-primary-100 animate-fade-in-up">
          {/* Contact Info Side */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex-1 flex flex-col justify-between p-10 md:p-12 bg-gradient-to-br from-primary-50/80 to-white/60 relative"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/contact/support-icon.png.bmp"
                  alt="Support"
                  className="h-10 w-10 animate-bounce"
                />
                <h2 className="text-2xl font-bold text-primary-700 font-serif">
                  We're Here to Help!
                </h2>
              </div>
              <p className="text-lg text-primary-900 mb-6 font-medium">
                Reach out for personalized assistance, expert advice, or just to
                say hello. Our team is ready to guide you every step of the way.
              </p>
              <ul className="space-y-5 text-base">
                <li className="flex items-center gap-3">
                  <MapPin className="text-primary-600" />
                  <span>
                    Jain Sadguru Image’s Capital Park, Office No. 503, 5th
                    Floor, Madhapur, Hyderabad - 500081
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-primary-600" />
                  <span>+91 94411 85884</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-primary-600" />
                  <span>info@spacewave.in</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="text-primary-600" />
                  <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                </li>
              </ul>
              <div className="mt-8">
                <h3 className="font-serif text-lg font-semibold mb-2 text-primary-700">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-primary-600 hover:text-primary-800"
                  >
                    <Facebook size={22} />
                  </a>
                  <a
                    href="#"
                    className="text-primary-600 hover:text-primary-800"
                  >
                    <Instagram size={22} />
                  </a>
                  <a
                    href="#"
                    className="text-primary-600 hover:text-primary-800"
                  >
                    <Twitter size={22} />
                  </a>
                  <a
                    href="#"
                    className="text-primary-600 hover:text-primary-800"
                  >
                    <Linkedin size={22} />
                  </a>
                </div>
              </div>
            </div>
            {/* Testimonial */}
            <div className="mt-10 bg-white/70 rounded-xl p-4 shadow flex items-center gap-4 border border-primary-100">
              <img
                src="/wedeal/villa1.jpg"
                alt="Customer"
                className="h-12 w-12 rounded-full object-cover border-2 border-primary-200"
              />
              <div>
                <p className="text-primary-800 text-sm italic">
                  “SpaceWave made my property search effortless and enjoyable.
                  Highly recommended!”
                </p>
                <span className="text-primary-600 text-xs font-semibold">
                  — Happy Customer
                </span>
              </div>
            </div>
          </motion.div>

          {/* Divider with animated icon */}
          <div className="hidden md:flex flex-col items-center justify-center px-2 relative">
            <div className="w-[2px] h-32 bg-gradient-to-b from-primary-300 to-primary-100 rounded-full"></div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="bg-primary-100 p-2 rounded-full shadow-lg -mt-6 border border-primary-200"
            >
              <img
                src="/contact/support-icon.png.bmp"
                alt="Support"
                className="h-8 w-8"
              />
            </motion.div>
            <div className="w-[2px] h-32 bg-gradient-to-t from-primary-300 to-primary-100 rounded-full"></div>
          </div>

          {/* Contact Form Side */}
          <motion.form
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex-1 bg-white/90 rounded-none md:rounded-r-3xl p-10 md:p-12 flex flex-col justify-center shadow-none border-l border-primary-100 min-h-[500px]"
            style={{ minWidth: 0 }}
          >
            <h2 className="text-2xl font-bold mb-2 text-primary-700 font-serif">
              Send Us a Message
            </h2>
            <p className="mb-6 text-primary-800 text-base">
              We respond within 24 hours. Your privacy is our priority.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="p-3 border border-primary-100 rounded-md w-full focus:ring-2 focus:ring-primary-200 bg-white/80"
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="p-3 border border-primary-100 rounded-md w-full focus:ring-2 focus:ring-primary-200 bg-white/80"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                className="p-3 border border-primary-100 rounded-md w-full focus:ring-2 focus:ring-primary-200 bg-white/80"
              />
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="p-3 border border-primary-100 rounded-md w-full focus:ring-2 focus:ring-primary-200 bg-white/80"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="w-full p-3 border border-primary-100 rounded-md focus:ring-2 focus:ring-primary-200 bg-white/80 mt-4"
            ></textarea>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-md hover:bg-primary-700 transition font-semibold text-lg shadow-md mt-6"
            >
              <Send size={20} /> Send Message
            </button>
            {formSubmitted && (
              <p className="text-green-600 mt-4 text-center animate-fade-in">
                Thank you! Your message has been sent.
              </p>
            )}
          </motion.form>
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
      {/* Google Maps Section - Attractive Design */}
      <section className="relative py-16 px-4 md:px-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-primary-100 overflow-hidden">
        <div className="max-w-4xl w-full mx-auto rounded-3xl shadow-2xl border border-primary-200 bg-white/80 backdrop-blur-xl p-0 md:p-6 flex flex-col items-center animate-fade-in-up relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
            <div className="bg-gradient-to-br from-primary-500 to-blue-400 p-4 rounded-full shadow-lg flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 12.414a4 4 0 10-1.414 1.414l4.243 4.243a1 1 0 001.414-1.414z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary-700 font-serif text-center mt-8 mb-2 drop-shadow">
            Find Us on the Map
          </h2>
          <p className="text-primary-800 text-center mb-6 max-w-xl">
            Visit our office or get directions easily. We’re located in the
            heart of Hyderabad’s business district for your convenience.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-lg flex justify-center items-center bg-white p-2 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15225.064678087563!2d78.38618!3d17.44697!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91501ae8f159%3A0x930010df33a47638!2sJain%20sadguru%20image's%20capital%20park%2C%20303B%2C%20VIP%20Hills%2C%20Jaihind%20Enclave%2C%20Madhapur%2C%20Hyderabad%2C%20Telangana%20500081%2C%20India!5e0!3m2!1sen!2sus!4v1748439779415!5m2!1sen!2sus"
              width="100%"
              height="420"
              style={{
                border: 0,
                borderRadius: "16px",
                minWidth: "180px",
                maxWidth: "100%",
                boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SpaceWave Office Location"
            ></iframe>
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
      {/* Modern, Distinct Contact Highlight Section */}
      <section className="w-full py-16 px-4 md:px-0 flex justify-center items-center bg-gradient-to-br from-primary-900 via-blue-900 to-primary-700 relative z-10 mt-12 animate-fade-in-up">
        <div className="max-w-5xl w-full mx-auto rounded-3xl shadow-2xl overflow-hidden bg-white/5 border border-primary-800 backdrop-blur-xl p-8 md:p-14 flex flex-col items-center">
          <div className="flex flex-col items-center mb-10">
            <div className="bg-primary-700 p-4 rounded-full shadow-lg mb-4 animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif text-center mb-2 drop-shadow">
              Why Reach Out to SpaceWave?
            </h2>
            <p className="text-lg text-primary-100 text-center max-w-2xl mb-2">
              We’re not just about properties—we’re about people. Our team is
              dedicated to making your journey smooth, transparent, and
              rewarding. Here’s what you can expect when you contact us:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 w-full">
            {/* Card 1 */}
            <div className="bg-white/10 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border border-primary-700 hover:scale-105 transition-transform duration-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mb-3 text-primary-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 14h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"
                />
              </svg>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Personalized Guidance
              </h3>
              <p className="text-primary-100">
                We listen to your needs and tailor our advice to help you find
                the perfect space—no pressure, just support.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white/10 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border border-primary-700 hover:scale-105 transition-transform duration-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mb-3 text-primary-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Our Promise
              </h3>
              <p className="text-primary-100">
                Transparent communication, honest answers, and a commitment to
                your satisfaction—every step of the way.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white/10 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border border-primary-700 hover:scale-105 transition-transform duration-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mb-3 text-primary-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                What Happens Next?
              </h3>
              <p className="text-primary-100">
                A real person will reach out to you promptly—no bots, no
                waiting. Let’s start your journey together!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
