import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import Clients from "./pages/clients";
import ScrollToTop from "./components/ScrollToTop";
import { MessageCircle, Phone, Mail } from "lucide-react";
import EnquiryForm from "./components/ui/EnquiryForm";
import { X } from "lucide-react";

// Use a WhatsApp SVG icon since lucide-react does not export 'Whatsapp'
const WhatsappIcon = (props: any) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    height={props.size || 22}
    width={props.size || 22}
    {...props}
  >
    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.34 7.09L4 29l7.18-2.31A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.89-.52-5.54-1.5l-.39-.23-4.27 1.37 1.4-4.15-.25-.4A9.93 9.93 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.56-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.3s.99 2.67 1.13 2.85c.14.18 1.95 2.98 4.73 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
  </svg>
);

function FloatingContactWidget() {
  const [open, setOpen] = useState(false);
  const phoneNumber = "+919441185884";
  const whatsappNumber = "919441185884";
  const email = "info@spacewave.in";
  const whatsappMsg = encodeURIComponent(
    "Hi, I'm interested in your real estate services. Please provide more details."
  );
  const mailSubject = encodeURIComponent("SpaceWave Services Inquiry");
  const mailBody = encodeURIComponent(
    "Hello,\n\nI would like to know more about your real estate services.\n\nThank you."
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col items-end gap-3 mb-2 animate-fade-in">
          <a
            href={`tel:${phoneNumber}`}
            className="bg-primary-600 hover:bg-primary-700 text-white rounded-full p-4 shadow-lg flex items-center transition"
            title="Call Us"
          >
            <Phone size={22} />
          </a>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center transition"
            title="WhatsApp"
          >
            <WhatsappIcon size={22} />
          </a>
          <a
            href={`mailto:${email}?subject=${mailSubject}&body=${mailBody}`}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg flex items-center transition"
            title="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="bg-primary-600 hover:bg-primary-700 text-white rounded-full p-4 shadow-xl flex items-center transition focus:outline-none focus:ring-2 focus:ring-primary-300"
        title="Contact Options"
        aria-label="Contact Options"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
}

function App() {
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Enquiry Modal State
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContactWidget />
        {/* Always render EnquiryForm so it can auto-popup on page load */}
        <EnquiryForm />
      </div>
    </Router>
  );
}

export default App;
