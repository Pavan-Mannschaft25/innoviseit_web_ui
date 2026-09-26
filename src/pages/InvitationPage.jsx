import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Logo from "../assets/images/innovise_it_logo.png";
import EventPoster from "../assets/images/sap_event.jpeg";
import emailjs from "@emailjs/browser";

// ============ ICONS COMPONENTS ============
const Icons = {
  Calendar: () => (
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  ),
  Location: () => (
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  Glass: () => (
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  Check: () => (
    <svg
      className="w-4 h-4 sm:w-5 sm:h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  ),
  ArrowRight: () => (
    <svg
      className="w-4 h-4 sm:w-5 sm:h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  ),
  Sparkles: () => (
    <svg
      className="w-4 h-4 sm:w-5 sm:h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
  Users: () => (
    <svg
      className="w-4 h-4 sm:w-5 sm:h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  ),
  Menu: () => (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  ),
  Close: () => (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ),
};

// ============ MOBILE NAVIGATION ============
const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-[#0A1628] border-l border-white/10 z-50 lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <span className="font-bold text-lg">Menu</span>
              <button
                onClick={onClose}
                className="p-2 rounded-xl hover:bg-white/10 transition-colors"
              >
                <Icons.Close />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-6 space-y-2">
              {/* {["About Event", "Agenda", "Speakers"].map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={onClose}
                  className="block px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all text-base font-medium"
                >
                  {item}
                </a>
              ))} */}

              <div className="pt-4 mt-4 border-t border-white/10">
                <a
                  href="#register"
                  onClick={onClose}
                  className="block w-full bg-gradient-to-r from-[#F4B400] to-[#FFD95A] text-[#030B1A] px-6 py-3.5 rounded-xl font-bold text-center hover:shadow-lg hover:shadow-[#F4B400]/30 transition-all"
                >
                  Check-In Now
                </a>
              </div>
            </nav>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
              <p className="text-xs text-white/40 text-center">
                © 2026 Innovise IT Solutions
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// ============ FLOATING INPUT COMPONENT ============
const FloatingInput = ({
  label,
  type = "text",
  name,
  placeholder,
  required,
  value,
  onChange,
  error,
  icon: Icon,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    setIsFilled(value && value.length > 0);
  }, [value]);

  return (
    <motion.div
      className={`relative group ${error ? "shake" : ""}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Floating Label */}
      <label
        className={`absolute left-3 sm:left-4 transition-all duration-300 pointer-events-none z-10 flex items-center gap-1.5 sm:gap-2
          ${
            isFocused || isFilled
              ? "top-1.5 sm:top-2 text-[10px] sm:text-xs text-[#F4B400] font-medium"
              : "top-1/2 -translate-y-1/2 text-white/50 text-sm sm:text-base"
          }
        `}
      >
        {Icon && <Icon />}
        <span className="truncate">{label}</span>
        {required && <span className="text-[#FF6B6B]">*</span>}
      </label>

      {/* Input Field */}
      <input
        type={type}
        name={name}
        placeholder={!isFocused ? "" : placeholder}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full bg-white/[0.05] border-2 rounded-xl sm:rounded-2xl px-3 sm:px-4 pt-5 sm:pt-6 pb-2.5 sm:pb-3 text-white text-sm sm:text-base 
          placeholder:text-transparent focus:outline-none transition-all duration-300
          ${
            error
              ? "border-red-500/50 bg-red-500/5"
              : "border-white/10 focus:border-[#F4B400]/60 focus:bg-white/[0.08] focus:shadow-lg focus:shadow-[#F4B400]/10"
          }
          group-hover:border-white/20
        `}
      />

      {/* Focus Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#F4B400]/20 to-transparent opacity-0 pointer-events-none"
        animate={{ opacity: isFocused ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-red-400 text-xs mt-1.5 sm:mt-2 ml-2 sm:ml-3 flex items-center gap-1"
          >
            <span>⚠️</span> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ============ COUNTDOWN TIMER ============
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // SAP Sapphire Event
    // oct 11 2026 — 8:30 PM Orlando Time

    const targetDate = new Date("2026-10-11T20:30:00-04:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),

          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),

          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),

          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);

        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeBlock = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <motion.div
        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl px-2.5 sm:px-4 py-1.5 sm:py-2 min-w-[48px] sm:min-w-[60px]"
        whileHover={{ scale: 1.05, borderColor: "#F4B400" }}
      >
        <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </motion.div>

      <span className="text-[10px] sm:text-xs text-white/50 mt-1.5 sm:mt-2 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-1.5 sm:gap-2 lg:gap-3">
      <TimeBlock value={timeLeft.days} label="Days" />

      <span className="text-[#F4B400] font-bold text-base sm:text-xl">:</span>

      <TimeBlock value={timeLeft.hours} label="Hrs" />

      <span className="text-[#F4B400] font-bold text-base sm:text-xl">:</span>

      <TimeBlock value={timeLeft.minutes} label="Min" />

      <span className="text-[#F4B400] font-bold text-base sm:text-xl hidden sm:inline-block">
        :
      </span>

      <div className="hidden sm:flex">
        <TimeBlock value={timeLeft.seconds} label="Sec" />
      </div>
    </div>
  );
};

// ============ PARTICLE BACKGROUND ============
const ParticleBackground = () => {
  // Reduce particles on mobile for performance
  const particleCount =
    typeof window !== "undefined" && window.innerWidth < 768 ? 10 : 20;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#F4B400]/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Large gradient orbs - smaller on mobile */}
      <motion.div
        className="absolute -top-32 -left-32 sm:-top-40 sm:-left-40 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-gradient-to-br from-[#F4B400]/30 to-transparent rounded-full blur-3xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute -bottom-32 -right-32 sm:-bottom-40 sm:-right-40 w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl"
        animate={{
          rotate: [360, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Mesh gradient overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(at 20% 30%, rgba(244, 180, 0, 0.15) 0px, transparent 50%),
            radial-gradient(at 80% 70%, rgba(11, 46, 107, 0.2) 0px, transparent 50%),
            radial-gradient(at 50% 50%, rgba(244, 180, 0, 0.1) 0px, transparent 50%)
          `,
        }}
      />
    </div>
  );
};

// ============ FEATURE CARD ============
const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden
      hover:bg-white/[0.08] hover:border-[#F4B400]/30 transition-all duration-500"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ delay }}
  >
    {/* Hover glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#F4B400]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative z-10">
      <div
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#F4B400]/20 to-[#F4B400]/5 flex items-center justify-center mb-3 sm:mb-4 
        group-hover:from-[#F4B400]/30 group-hover:to-[#F4B400]/10 transition-all duration-300"
      >
        <Icon />
      </div>

      <h3 className="font-semibold text-base sm:text-lg text-white mb-1.5 sm:mb-2">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

// ============ STATS COUNTER ============
const StatCounter = ({ value, suffix, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    const duration = 2000;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <motion.div
      className="text-center px-2"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F4B400] to-[#FFD95A]">
        {count}
        {suffix}
      </div>
      <div className="text-[10px] sm:text-xs text-white/40 mt-1 uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
};

// ============ MAIN COMPONENT ============
export default function SAPSapphireRegistrationPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-+()]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!validateForm()) return;

  //   setIsSubmitting(true);

  //   // Simulate API call
  //   await new Promise((resolve) => setTimeout(resolve, 2500));

  //   console.log("✅ Form submitted:", formData);
  //   setSubmitStatus("success");

  //   // Reset after showing success
  //   setTimeout(() => {
  //     setSubmitStatus(null);
  //     setFormData({
  //       firstName: "",
  //       lastName: "",
  //       email: "",
  //       phone: "",
  //       company: "",
  //       designation: "",
  //     });
  //   }, 4000);

  //   setIsSubmitting(false);
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!validateForm()) return;

  //   setIsSubmitting(true);

  //   try {
  //     console.log("Sending Data:", formData);

  //     const response = await fetch(
  //       "https://innovise-backend-72jb.onrender.com/api/register",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       },
  //     );

  //     console.log("Response Status:", response.status);

  //     const data = await response.json();

  //     console.log("Response Data:", data);

  //     if (response.ok) {
  //       setSubmitStatus("success");

  //       setFormData({
  //         firstName: "",
  //         lastName: "",
  //         email: "",
  //         phone: "",
  //         company: "",
  //         designation: "",
  //       });
  //     } else {
  //       alert(data.message || "Something went wrong");
  //     }
  //   } catch (error) {
  //     console.error("Full API Error:", error);

  //     alert("Server error. Please try again.");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_REG_SERVICE_ID;
      const adminTemplateId = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;
      const userTemplateId = import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_REG_PUBLIC_KEY;

      // Combine First and Last name for the {{name}} variable
      const fullName = `${formData.firstName} ${formData.lastName}`;

      // 1. SEND ADMIN EMAIL
      await emailjs.send(
        serviceId,
        adminTemplateId,
        {
          name: fullName, // Added this to match your {{name}} variable
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          designation: formData.designation,
        },
        publicKey,
      );

      // 2. SEND USER CONFIRMATION EMAIL
      await emailjs.send(
        serviceId,
        userTemplateId,
        {
          firstName: formData.firstName,
          email: formData.email,
        },
        publicKey,
      );

      // 3. SUCCESS UI
      setSubmitStatus("success");

      // 4. RESET FORM
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        designation: "",
      });

      // 5. AUTO CLOSE SUCCESS
      setTimeout(() => {
        setSubmitStatus(null);
      }, 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#030B1A] text-white overflow-x-hidden relative selection:bg-[#F4B400]/30"
    >
      {/* ===== ANIMATED BACKGROUND ===== */}
      <ParticleBackground />

      {/* <motion.nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#030B1A]/80 border-b border-white/5"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-3 sm:py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.03 }}
          >
            <div className="bg-white/95 backdrop-blur-xl border border-white/20 px-4 py-3 rounded-2xl shadow-2xl">
              <img
                src={Logo}
                alt="Innovise IT"
                className="h-4 sm:h-4 lg:h-6 object-contain"
              />
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-md text-white/60">
            <a
              href="#register"
              className="bg-[#F4B400] text-[#030B1A] px-4 xl:px-5 py-3  rounded-2xl font-semibold hover:bg-[#FFD95A] transition-all hover:shadow-lg hover:shadow-[#F4B400]/30"
            >
              Check-In Now
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Open menu"
          >
            <Icons.Menu />
          </button>
        </div>
      </motion.nav> */}

      {/* ===== MOBILE MENU OVERLAY ===== */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen pt-0 pb-10 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[80vh]">
            {/* ================================================= */}
            {/* =============== LEFT SIDE POSTER ================= */}
            {/* ================================================= */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative flex justify-center items-center pt-10"
            >
              {/* BIG GLOW */}
              <div className="absolute w-[450px] h-[450px] bg-[#F4B400]/20 blur-[120px] rounded-full" />

              {/* ROTATING OUTER RING */}
              <motion.div
                className="absolute w-[430px] h-[430px]  border border-[#F4B400]/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* SECOND RING */}
              <motion.div
                className="absolute w-[500px] h-[500px] border border-white/5 rounded-full"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* FLOATING PARTICLES */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-[#F4B400] rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 1, 0.2],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                  }}
                />
              ))}

              {/* POSTER CARD */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                  rotateY: 5,
                  rotateX: -3,
                  y: -8,
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative group"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* GLASS BACKGROUND */}
                {/* <div className="absolute -inset-4 bg-white/10 backdrop-blur-2xl rounded-[40px] border border-white/10" /> */}

                {/* SHINE EFFECT */}
                <motion.div
                  className="absolute inset-0 overflow-hidden rounded-[32px] z-20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    className="absolute top-0 left-[-120%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                    animate={{
                      left: ["-120%", "220%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                </motion.div>

                {/* POSTER IMAGE */}
                <img
                  src={EventPoster}
                  alt="SAP Sapphire Cocktail Party 2026"
                  className="relative z-10 w-full max-w-[420px] md:max-w-[480px] rounded-[32px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
                />

                {/* VIP BADGE */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute -top-7 -right-4 md:-top-3 md:-right-10 bg-gradient-to-r from-[#F4B400] to-[#FFD95A] text-[#030B1A] px-5 py-2 rounded-full font-bold text-sm shadow-2xl z-80"
                >
                  SAP EVENT ✨
                </motion.div>

                {/* BOTTOM SHADOW */}
                <div className="absolute -bottom-10 left-10 right-10 h-10 bg-black/60 blur-3xl rounded-full" />
              </motion.div>
            </motion.div>

            {/* ================================================= */}
            {/* ================= RIGHT SIDE FORM =============== */}
            {/* ================================================= */}
            <motion.div
              id="register"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:pt-8 relative"
            >
              {/* GLOW */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#F4B400]/20 via-transparent to-blue-500/20 rounded-[40px] blur-2xl opacity-40" />

              {/* FORM CARD */}
              <motion.div
                className="relative bg-white/[0.05] backdrop-blur-2xl border border-white/10 rounded-[32px] p-5 sm:p-8 lg:p-6 shadow-2xl overflow-hidden"
                whileHover={{
                  borderColor: "rgba(255,255,255,0.2)",
                }}
              >
                {/* TOP ACCENT */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F4B400] via-[#FFD95A] to-[#F4B400]" />

                {/* HEADER */}
                <div className="mb-4">
                  <motion.div
                    className="inline-flex items-center gap-2 text-[#F4B400] text-sm font-semibold mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <Icons.Sparkles />
                    SAP Sapphire 2026
                  </motion.div>

                  <h2 className="text-3xl lg:text-4xl font-bold mb-3 leading-tight">
                    Event{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4B400] to-[#FFD95A]">
                      Check-In
                    </span>
                  </h2>

                  <p className="text-white/50 text-sm leading-relaxed">
                    Enter your details below to receive your digital entry pass
                    and access the exclusive networking evening.
                  </p>
                </div>

                {/* YOUR FORM HERE */}
                <AnimatePresence>
                  {submitStatus === "success" ? (
                    /* Success State */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="py-10 sm:py-16 text-center"
                    >
                      <motion.div
                        className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 border border-green-500/30"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          delay: 0.2,
                          stiffness: 200,
                        }}
                      >
                        <motion.svg
                          className="w-8 h-8 sm:w-12 sm:h-12 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </motion.svg>
                      </motion.div>

                      <motion.h3
                        className="text-xl sm:text-2xl font-bold text-green-400 mb-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        Event Check-In Confirmed ✅
                      </motion.h3>

                      <motion.p
                        className="text-white/60 mb-2 text-sm sm:text-base"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        Event entry checkout completed successfully.
                      </motion.p>

                      <motion.p
                        className="text-[#F4B400] mb-6 sm:mb-8 text-sm sm:text-base font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        Thank you for attending SAP Sapphire 2026 ✨
                      </motion.p>

                      <motion.button
                        onClick={() => setSubmitStatus(null)}
                        className="text-[#F4B400] hover:text-[#FFD95A] font-medium text-sm underline underline-offset-4 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        Done
                      </motion.button>
                    </motion.div>
                  ) : (
                    /* Form State */
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-4 sm:space-y-5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {/* Name Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        <FloatingInput
                          label="First Name"
                          name="firstName"
                          placeholder="Enter first name"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          error={errors.firstName}
                        />

                        <FloatingInput
                          label="Last Name"
                          name="lastName"
                          placeholder="Enter last name"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          error={errors.lastName}
                        />
                      </div>

                      {/* Email */}
                      <FloatingInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                      />

                      {/* Phone */}
                      <FloatingInput
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        error={errors.phone}
                      />

                      {/* Company & Designation */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        <FloatingInput
                          label="Company Name"
                          name="company"
                          placeholder="Your organization"
                          value={formData.company}
                          onChange={handleChange}
                        />

                        <FloatingInput
                          label="Designation"
                          name="designation"
                          placeholder="Your role"
                          value={formData.designation}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className={`relative w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg overflow-hidden group
                          ${
                            isSubmitting
                              ? "bg-white/10 text-white/50 cursor-not-allowed"
                              : "bg-gradient-to-r from-[#F4B400] to-[#FFD95A] text-[#030B1A] shadow-lg shadow-[#F4B400]/30"
                          }`}
                        whileHover={
                          !isSubmitting
                            ? {
                                scale: 1.02,
                                boxShadow: "0 20px 40px rgba(244, 180, 0, 0.3)",
                              }
                            : {}
                        }
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                          {isSubmitting ? (
                            <>
                              <motion.div
                                className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#030B1A]/30 border-t-[#030B1A] rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              />
                              <span className="text-sm sm:text-base">
                                Securing...
                              </span>
                            </>
                          ) : (
                            <>
                              Confirm Check-In
                              <motion.span
                                className="flex items-center"
                                whileHover={{ x: 5 }}
                              >
                                <Icons.ArrowRight />
                              </motion.span>
                            </>
                          )}
                        </span>

                        {!isSubmitting && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.6 }}
                          />
                        )}
                      </motion.button>

                      {/* Trust indicators */}
                      <div className="flex items-center justify-center gap-2 sm:gap-4 pt-3 sm:pt-4 text-[10px] sm:text-xs text-white/30 flex-wrap">
                        <span className="flex items-center gap-1">
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          SSL Secured
                        </span>
                        <span>•</span>
                        <span>GDPR Compliant</span>
                        <span>•</span>
                        <span>No Spam</span>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>

          {/* ================================================= */}
          {/* ======== CENTER BOTTOM TIMER & LOCATION ========= */}
          {/* ================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-14 lg:mt-20 flex justify-center"
          >
            <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-[30px] px-6 sm:px-10 py-6 shadow-2xl max-w-5xl w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* TIMER */}
                <div className="text-center md:border-r md:border-white/10 md:pr-8">
                  <p className="text-white/40 uppercase tracking-[4px] text-xs mb-4">
                    Event Starts In
                  </p>

                  <CountdownTimer />
                </div>

                {/* LOCATION + EVENT DETAILS */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    {
                      icon: Icons.Calendar,
                      title: "Oct 11th",
                      sub: "Monday 2026",
                      highlight: true,
                    },
                    {
                      icon: Icons.Location,
                      title: "Orlando, FL",
                      sub: "Howl at the Moon",
                    },
                    {
                      icon: Icons.Glass,
                      title: "08:30 PM",
                      sub: "Onwards",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{
                        y: -4,
                        scale: 1.03,
                      }}
                      className={`text-center p-4 rounded-2xl border transition-all duration-300
                ${
                  item.highlight
                    ? "bg-gradient-to-br from-[#F4B400]/20 to-[#F4B400]/5 border-[#F4B400]/30"
                    : "bg-white/5 border-white/10"
                }`}
                    >
                      <div
                        className={`mb-2 flex justify-center ${
                          item.highlight ? "text-[#F4B400]" : "text-white/60"
                        }`}
                      >
                        <item.icon />
                      </div>

                      <div
                        className={`font-bold text-sm ${
                          item.highlight ? "text-[#F4B400]" : "text-white"
                        }`}
                      >
                        {item.title}
                      </div>

                      <div className="text-xs text-white/40 mt-1">
                        {item.sub}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="relative py-12 lg:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            className="text-center mb-10 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-4">
              Why Attend This{" "}
              <span className="text-[#F4B400]">Exclusive Evening?</span>
            </h2>
            <p className="text-white/50 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base px-4">
              Connect with industry leaders, discover opportunities, and build
              meaningful relationships that last beyond the event.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            <FeatureCard
              icon={Icons.Users}
              title="Network with Leaders"
              description="Meet C-suite executives, SAP leaders, and decision-makers from Fortune 500 companies."
              delay={0.1}
            />

            <FeatureCard
              icon={Icons.Sparkles}
              title="Exclusive Insights"
              description="Get early access to SAP's latest innovations and roadmap discussions."
              delay={0.2}
            />

            <FeatureCard
              icon={Icons.Glass}
              title="Premium Experience"
              description="Enjoy curated cocktails, gourmet dining, and entertainment in a sophisticated setting."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* ===== PREMIUM FOOTER ===== */}
      {/* <footer className="relative border-t border-white/10 overflow-hidden">
       
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4B400]/5 via-transparent to-blue-500/5" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white">
                SAP Sapphire Cocktail Party 2026
              </h3>

              <p className="text-white/40 text-sm mt-2 max-w-md">
                Hosted by Innovise IT Solutions — connecting innovators,
                enterprise leaders, and SAP professionals for an unforgettable
                networking evening.
              </p>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center lg:text-right"
            >
              <p className="text-sm text-white/30">
                © 2026 Innovise IT Solutions
              </p>

              <p className="text-xs text-white/20 mt-1">All rights reserved.</p>
            </motion.div>
          </div>

          
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-xs text-white/20 tracking-wide">
              Crafted for SAP Sapphire 2026 • Premium Networking Experience ✨
            </p>
          </div>
        </div>
      </footer> */}

      {/* ===== CUSTOM STYLES ===== */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .shake {
          animation: shake 0.3s ease-in-out;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #030B1A;
        }
        ::-webkit-scrollbar-thumb {
          background: #F4B400;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #FFD95A;
        }

        /* Line clamp utility */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Extra small breakpoint for hiding seconds on tiny screens */
        @media (max-width: 380px) {
          .xs\\:hidden {
            display: none !important;
          }
          .xs\\:block {
            display: block !important;
          }
          .xs\\:flex {
            display: flex !important;
          }
          .xs\\:inline-block {
            display: inline-block !important;
          }
        }
        
        /* Safe area insets for notched phones */
        @supports (padding-top: env(safe-area-inset-top)) {
          nav {
            padding-top: env(safe-area-inset-top);
          }
          footer {
            padding-bottom: env(safe-area-inset-bottom);
          }
        }
      `}</style>
    </div>
  );
}
