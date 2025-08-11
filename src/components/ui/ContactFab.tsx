// At top of ContactFab.tsx
import React, { useState } from "react";
import { MessageCircle, Phone, Mail, X } from "lucide-react";
import supportIcon from "../assets/support-icon.png"; // adjust path if needed

const ContactFab: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const whatsappNumber = "919441185884";
  const whatsappMessage = "Hi, I’d like to know more about your services.";
  const email = "info@spacewave.in";
  const emailSubject = "Inquiry from Website";
  const emailBody =
    "Hi, I am interested in your services. Please get back to me.";
  const phoneNumber = "+919441185884";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
      {open && (
        <>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-3 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition"
          >
            <MessageCircle className="mr-2 w-4 h-4" /> WhatsApp
          </a>
          <a
            href={`mailto:${email}?subject=${encodeURIComponent(
              emailSubject
            )}&body=${encodeURIComponent(emailBody)}`}
            className="flex items-center px-3 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition"
          >
            <Mail className="mr-2 w-4 h-4" /> Email
          </a>
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center px-3 py-2 bg-yellow-500 text-white rounded-full shadow hover:bg-yellow-600 transition"
          >
            <Phone className="mr-2 w-4 h-4" /> Call
          </a>
        </>
      )}

      <div className="relative group">
        <button
          onClick={() => setOpen(!open)}
          className="rounded-full p-0 shadow-lg hover:scale-105 transition"
          aria-label="Contact Support"
        >
          {open ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <img
              src="/contact/chat.png"
              alt="Contact"
              className="w-24 h-24 rounded-full object-cover"
            />
          )}
        </button>

        {!open && (
          <span className="absolute right-full mr-2 px-2 py-1 bg-blue-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition">
            Connect
          </span>
        )}
      </div>
    </div>
  );
};

export default ContactFab;
