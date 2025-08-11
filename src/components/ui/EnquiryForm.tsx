import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";

function useCountdown(hours: number) {
  const [timeLeft, setTimeLeft] = useState(hours * 60 * 60); // in seconds
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const hoursLeft = Math.floor(timeLeft / 3600);
  const minutesLeft = Math.floor((timeLeft % 3600) / 60);
  const secondsLeft = timeLeft % 60;
  return [hoursLeft, minutesLeft, secondsLeft] as const;
}

interface EnquiryFormProps {
  forceVisible?: boolean;
  onClose?: () => void;
}

export default function EnquiryForm({
  forceVisible,
  onClose,
}: EnquiryFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(forceVisible ?? false);

  useEffect(() => {
    if (forceVisible) {
      setVisible(true);
      return;
    }
    const timer = setTimeout(() => setVisible(true), 5000); // Show after 5 seconds
    return () => clearTimeout(timer);
  }, [forceVisible]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Replace these with your EmailJS credentials
    const SERVICE_ID = "service_6umm6ld";
    const TEMPLATE_ID = "template_4ztxmvl";
    const USER_ID = "D5J6MnGCjMrbrzLKR";
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
        },
        USER_ID
      )
      .then(
        () => {
          setLoading(false);
          setSubmitted(true);
          setForm({ name: "", email: "", phone: "", message: "" });
        },
        () => {
          setLoading(false);
          alert("Failed to send enquiry. Please try again later.");
        }
      );
  };

  const [hours, minutes, seconds] = useCountdown(12); // 12 hours countdown

  if (!visible) return null;

  if (submitted) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 animate-fade-in">
        <div className="relative max-w-md w-full mx-auto">
          <button
            onClick={() => {
              setVisible(false);
              if (onClose) onClose();
            }}
            className="absolute top-2 right-2 z-10 bg-white rounded-full p-1.5 shadow hover:bg-gray-100 transition"
            aria-label="Close Enquiry Form"
          >
            <span style={{ fontSize: 22, fontWeight: "bold" }}>&times;</span>
          </button>
          <div className="bg-white/90 rounded-xl shadow-lg p-8 text-center animate-fade-in">
            <h3 className="text-2xl font-semibold text-primary-700 mb-2">
              Thank you!
            </h3>
            <p className="text-gray-700">
              We have received your enquiry and will get back to you soon.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 animate-fade-in">
      <div className="relative max-w-md w-full mx-auto">
        <button
          onClick={() => {
            setVisible(false);
            if (onClose) onClose();
          }}
          className="absolute top-2 right-2 z-10 bg-white rounded-full p-1.5 shadow hover:bg-gray-100 transition"
          aria-label="Close Enquiry Form"
        >
          <span style={{ fontSize: 22, fontWeight: "bold" }}>&times;</span>
        </button>
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 rounded-xl shadow-lg p-8 flex flex-col gap-4 animate-fade-in"
        >
          <div className="mb-2 text-center">
            <div className="text-lg font-semibold text-primary-700 mb-1">
              Get your first consultation{" "}
              <span className="text-green-600">FREE</span>!
            </div>
            <div className="text-sm text-gray-700 font-medium flex flex-col items-center">
              <span>Offer ends in:</span>
              <span className="font-mono text-xl text-red-600 mt-1">
                {hours.toString().padStart(2, "0")}:
                {minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}
              </span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-primary-700 mb-2">
            Enquiry Form
          </h3>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-300"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-300"
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-300"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={4}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-300"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg px-6 py-2 transition disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
