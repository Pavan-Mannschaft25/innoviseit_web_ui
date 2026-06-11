import React, { useState, useCallback, useMemo, memo } from "react";
import Container from "../components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaClock,
  FaBriefcase,
  FaArrowRight,
  FaCheck,
  FaPaperPlane,
  FaHeart,
  FaUsers,
  FaGraduationCap,
  FaLaptopCode,
  FaGlobeAmericas,
  FaChartLine,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTimes,
  FaChevronDown,
  FaStar,
  FaPlay,
  FaExclamationCircle,
} from "react-icons/fa";
import toast from "react-hot-toast";
import bannerImg from "../assets/banners/career.png";

import img1 from "../assets/services/sap.png";
import img2 from "../assets/services/app.png";
import img3 from "../assets/services/ai.png";
import img4 from "../assets/services/cloud.png";
import img5 from "../assets/services/global.png";
import img6 from "../assets/services/digital.png";

// ==================== CONSTANTS & CONFIG ====================
const BRAND = {
  navy: {
    dark: "#12324f",
    mid: "#12324f",
    light: "#143A63",
    lighter: "#1A4570",
  },
  gold: {
    primary: "#FDB913",
    light: "#FFD54F",
    gradient: "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
  },
};

const ANIMATION_CONFIG = {
  stagger: 0.1,
  duration: 0.5,
  spring: { type: "spring", stiffness: 300, damping: 30 },
};

// ==================== DATA ====================
const benefits = [
  {
    icon: FaLaptopCode,
    title: "Modern Tech Stack",
    desc: "Work with cutting-edge technologies and tools",
  },
  {
    icon: FaGraduationCap,
    title: "Learning & Growth",
    desc: "$5,000 annual learning budget + certifications",
  },
  {
    icon: FaUsers,
    title: "Great Culture",
    desc: "Collaborative, inclusive, fun work environment",
  },
  {
    icon: FaChartLine,
    title: "Career Growth",
    desc: "Clear promotion paths and leadership opportunities",
  },
  {
    icon: FaHeart,
    title: "Health & Wellness",
    desc: "Comprehensive medical, dental, vision coverage",
  },
  {
    icon: FaGlobeAmericas,
    title: "Global Opportunities",
    desc: "Work with clients across 30+ countries",
  },
];

const openPositions = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-Time",
    experience: "5+ Years",
    description:
      "We're looking for an experienced full-stack developer to lead complex projects using React, Node.js, and cloud technologies.",
    image: img1,
  },
  {
    id: 2,
    title: "Cloud Solutions Architect",
    department: "Cloud",
    location: "New York, NY",
    type: "Full-Time",
    experience: "8+ Years",
    description:
      "Design and implement scalable cloud infrastructure on AWS, Azure, and GCP for enterprise clients.",
    image: img2,
  },
  {
    id: 3,
    title: "Data Scientist",
    department: "Analytics",
    location: "Chicago, IL",
    type: "Full-Time",
    experience: "3+ Years",
    description:
      "Build ML models, analyze big data, and deliver actionable insights that drive business decisions.",
    image: img3,
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Austin, TX",
    type: "Full-Time",
    experience: "4+ Years",
    description:
      "Manage CI/CD pipelines, Kubernetes clusters, and infrastructure as code for high-availability systems.",
    image: img4,
  },
  {
    id: 5,
    title: "UI/UX Designer",
    department: "Design",
    location: "San Francisco, CA",
    type: "Full-Time",
    experience: "4+ Years",
    description:
      "Create beautiful, intuitive user experiences for enterprise applications and consumer products.",
    image: img5,
  },
  {
    id: 6,
    title: "Project Manager",
    department: "Management",
    location: "Remote",
    type: "Full-Time",
    experience: "6+ Years",
    description:
      "Lead cross-functional teams, manage stakeholder expectations, and deliver projects on time and budget.",
    image: img6,
  },
];

// ==================== CUSTOM HOOKS ====================
const useFormValidation = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = useCallback((name, value) => {
    let error = "";
    switch (name) {
      case "fullName":
        if (!value.trim()) error = "Full name is required";
        else if (value.length < 2) error = "Name must be at least 2 characters";
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Please enter a valid email";
        break;
      case "position":
        if (!value) error = "Please select a position";
        break;
      default:
        break;
    }
    return error;
  }, []);

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (touched[name]) {
        const error = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    },
    [touched, validateField],
  );

  const handleBlur = useCallback(
    (e) => {
      const { name, value } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    },
    [validateField],
  );

  const resetForm = useCallback(() => {
    setFormData(initialState);
    setErrors({});
    setTouched({});
  }, [initialState]);

  const isValid = useMemo(() => {
    return (
      Object.keys(errors).every((key) => !errors[key]) &&
      Object.keys(initialState).every(
        (key) =>
          initialState[key] === false || formData[key]?.toString().trim(),
      )
    );
  }, [errors, formData, initialState]);

  return {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    resetForm,
    isValid,
    setFormData,
  };
};

// ==================== MEMOIZED COMPONENTS ====================

// Hero Section - Memoized as it's static
const HeroSection = memo(() => {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={bannerImg} // your uploaded image
        alt="Innovise IT Think"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Optional Dark Overlay (for better text visibility) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F2C]/90 via-[#0A0F2C]/60 to-transparent" />

      {/* LEFT SIDE TEXT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-2xl px-6 md:px-12 lg:px-20">
          {/* Small Label */}
          <p className="text-sm uppercase tracking-widest text-yellow-400 mb-4">
            We're Hiring
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Build Your Career at Innovise IT
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            Join a global team of innovators shaping the future of technology.
            Grow your skills, make real impact, and advance your career with us.
          </p>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

// Benefits Section
const BenefitsSection = memo(() => {
  const BenefitCard = memo(({ benefit, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * ANIMATION_CONFIG.stagger,
        duration: ANIMATION_CONFIG.duration,
      }}
      whileHover={{ y: -8 }}
      className="group relative p-8 rounded-lg transition-all duration-500 cursor-default focus-within:ring-2 focus-within:ring-offset-2"
      style={{
        background: `linear-gradient(180deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 100%)`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${BRAND.gold.primary}40`;
        e.currentTarget.style.boxShadow = `0 20px 40px ${BRAND.gold.primary}15`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)";
      }}
      tabIndex={0}
      role="article"
      aria-labelledby={`benefit-title-${index}`}
    >
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
        style={{
          background: `${BRAND.gold.primary}10`,
          border: `1px solid ${BRAND.gold.primary}25`,
        }}
      >
        <benefit.icon
          className="text-2xl transition-colors duration-300"
          style={{ color: BRAND.gold.primary }}
          aria-hidden="true"
        />
      </div>

      <h3
        id={`benefit-title-${index}`}
        className="text-xl font-bold mb-3 transition-colors duration-300 text-white"
      >
        {benefit.title}
      </h3>

      <p className="text-sm leading-relaxed text-white">{benefit.desc}</p>

      <div
        className="mt-6 pt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 group-focus:translate-y-0"
        style={{ borderTop: `1px solid ${BRAND.gold.primary}15` }}
      >
        <span
          className="text-xs font-semibold uppercase tracking-wider"
          style={{ color: BRAND.gold.primary }}
        >
          Learn More
        </span>
        <FaArrowRight
          className="text-xs"
          style={{ color: BRAND.gold.primary }}
          aria-hidden="true"
        />
      </div>

      <div
        className="absolute bottom-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: BRAND.gold.primary }}
        aria-hidden="true"
      />
    </motion.div>
  ));

  BenefitCard.displayName = "BenefitCard";

  return (
    <section
      className="py-24 bg-white relative overflow-hidden"
      aria-labelledby="benefits-heading"
    >
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.04] -translate-y-1/2 translate-x-1/2"
        style={{ background: BRAND.navy.lighter }}
        aria-hidden="true"
      />

      <Container>
        <header className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
            style={{
              background: `${BRAND.navy.mid}08`,
              color: BRAND.navy.dark,
              border: `1px solid ${BRAND.navy.mid}15`,
            }}
          >
            Why Choose Us
          </motion.span>

          <motion.h2
            id="benefits-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: BRAND.navy.dark }}
          >
            Why Join{" "}
            <span style={{ color: BRAND.gold.primary }}>Our Team?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg"
            style={{ color: "#64748B" }}
          >
            Exceptional benefits, growth opportunities, and a culture that truly
            values your contributions.
          </motion.p>
        </header>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          role="list"
          aria-label="Company benefits"
        >
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
});

BenefitsSection.displayName = "BenefitsSection";

// Position Card Component
const PositionCard = memo(({ position, isSelected, onSelect }) => {
  const metaItems = useMemo(
    () => [
      { icon: FaBriefcase, text: position.department },
      { icon: FaMapMarkerAlt, text: position.location },
      { icon: FaClock, text: position.type },
      { icon: FaGraduationCap, text: position.experience },
    ],
    [position],
  );

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: ANIMATION_CONFIG.duration }}
      role="article"
      aria-expanded={isSelected}
    >
      <div
        onClick={() => onSelect(position)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect(position);
          }
        }}
        className={`group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 ${
          isSelected ? "ring-2 ring-offset-2 ring-offset-transparent" : ""
        }`}
        style={{
          background: isSelected
            ? `linear-gradient(135deg, ${BRAND.navy.lighter}, ${BRAND.navy.mid})`
            : "rgba(255,255,255,0.03)",
          border: isSelected
            ? `1px solid ${BRAND.gold.primary}`
            : "1px solid rgba(255,255,255,0.06)",
          boxShadow: isSelected
            ? `0 20px 60px ${BRAND.gold.primary}15`
            : "0 4px 20px rgba(0,0,0,0.1)",
          "--tw-ring-color": BRAND.gold.primary,
        }}
        tabIndex={0}
        aria-label={`${position.title} - ${position.department}`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-6 p-6 lg:p-8">
          {/* Job Image */}
          <div className="lg:w-42 h-18 lg:h-30 flex-shrink-0 rounded-xl overflow-hidden order-2 lg:order-1">
            <img
              src={position.image}
              alt={`${position.title} workplace`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="flex-grow order-1 lg:order-2">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3
                    className="text-xl lg:text-2xl font-bold transition-colors"
                    style={{
                      color: isSelected ? "white" : "#FFFFFF",
                    }}
                  >
                    {position.title}
                  </h3>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: `${BRAND.gold.primary}20`,
                      color: BRAND.gold.primary,
                      border: `1px solid ${BRAND.gold.primary}40`,
                    }}
                  >
                    New
                  </span>
                </div>

                <div
                  className="flex flex-wrap gap-4 text-sm"
                  role="list"
                  aria-label="Job details"
                >
                  {metaItems.map((item, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1.5"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                      role="listitem"
                    >
                      <item.icon
                        className="text-xs"
                        style={{ color: BRAND.gold.primary }}
                        aria-hidden="true"
                      />
                      {item.text}
                    </span>
                  ))}
                </div>
              </div>

              <button
                className={`flex-shrink-0 px-6 py-3 rounded-xl font-bold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  isSelected ? "" : ""
                }`}
                style={
                  isSelected
                    ? {
                        background: BRAND.gold.gradient,
                        color: BRAND.navy.dark,
                        boxShadow: `0 4px 15px ${BRAND.gold.primary}35`,
                        "--tw-ring-color": BRAND.gold.primary,
                      }
                    : {
                        background: "rgba(255,255,255,0.08)",
                        color: "white",
                        border: `1px solid rgba(255,255,255,0.15)`,
                        "--tw-ring-color": "rgba(255,255,255,0.5)",
                      }
                }
                aria-pressed={isSelected}
              >
                {isSelected ? (
                  <>
                    Selected{" "}
                    <FaCheck className="inline ml-1" aria-hidden="true" />
                  </>
                ) : (
                  "View Details"
                )}
              </button>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {isSelected && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 pt-6 overflow-hidden"
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                  }}
                  role="region"
                  aria-label="Job description"
                >
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {position.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        document
                          .getElementById("application-form")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="group/btn flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
                      style={{
                        background: BRAND.gold.gradient,
                        color: BRAND.navy.dark,
                        boxShadow: `0 8px 25px ${BRAND.gold.primary}35`,
                        "--tw-ring-color": BRAND.gold.primary,
                      }}
                    >
                      <FaPaperPlane aria-hidden="true" />
                      Apply Now
                      <FaArrowRight
                        className="text-xs group-hover/btn:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                    </button>

                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="px-8 py-4 rounded-xl font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"
                      style={{
                        border: "1px dashed rgba(255,255,255,0.3)",
                        color: "white",
                        "--tw-ring-color": "rgba(255,255,255,0.5)",
                      }}
                    >
                      Save Job
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.article>
  );
});

PositionCard.displayName = "PositionCard";

// Positions Section
const PositionsSection = memo(({ selectedJob, setSelectedJob }) => {
  const handleSelect = useCallback(
    (position) => {
      setSelectedJob((prev) => (prev?.id === position.id ? null : position));
    },
    [setSelectedJob],
  );

  return (
    <section
      id="positions"
      className="py-24 relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 100%)`,
      }}
      aria-labelledby="positions-heading"
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <Container>
        <header className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
            style={{
              background: `${BRAND.gold.primary}15`,
              color: BRAND.gold.primary,
              border: `1px solid ${BRAND.gold.primary}30`,
            }}
          >
            Current Openings
          </motion.span>

          <motion.h2
            id="positions-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Explore{" "}
            <span style={{ color: BRAND.gold.primary }}>Opportunities</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            Find your perfect role and join our growing team of technology
            professionals
          </motion.p>
        </header>

        <div className="max-w-5xl mx-auto space-y-5" role="list">
          {openPositions.map((position) => (
            <PositionCard
              key={position.id}
              position={position}
              isSelected={selectedJob?.id === position.id}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </Container>
    </section>
  );
});

PositionsSection.displayName = "PositionsSection";

// Application Form Section
const ApplicationFormSection = memo(() => {
  const initialFormData = useMemo(
    () => ({
      fullName: "",
      email: "",
      phone: "",
      position: "",
      message: "",
      agreedToTerms: false,
    }),
    [],
  );

  const {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    resetForm,
    isValid,
  } = useFormValidation(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const newErrors = {};
    Object.keys(initialFormData).forEach((key) => {
      if (key !== "agreedToTerms" && key !== "phone") {
        const error = /* validateField */ (() => {
          let err = "";
          const value = formData[key];
          switch (key) {
            case "fullName":
              if (!value?.trim()) err = "Full name is required";
              else if (value.length < 2)
                err = "Name must be at least 2 characters";
              break;
            case "email":
              if (!value?.trim()) err = "Email is required";
              else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
                err = "Please enter a valid email";
              break;
            case "position":
              if (!value) err = "Please select a position";
              break;
            default:
              break;
          }
          return err;
        })();
        if (error) newErrors[key] = error;
      }
    });

    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms =
        "You must agree to the privacy policy to submit";
    }

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix the errors in the form");
      return;
    }

    // Simulate API call
    toast.success(
      "Application submitted successfully! We'll be in touch soon.",
    );
    resetForm();
  };

  const inputClasses = (fieldName) =>
    `w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:ring-2 transition-all ${
      errors[fieldName] && touched[fieldName]
        ? "border-red-400 focus:ring-red-200"
        : "focus:ring-yellow-200"
    }`;

  return (
    <section
      id="application-form"
      className="py-24 bg-white relative overflow-hidden"
      aria-labelledby="application-heading"
    >
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.04]"
        style={{ background: BRAND.gold.primary }}
        aria-hidden="true"
      />

      <Container>
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
              style={{
                background: `${BRAND.navy.mid}08`,
                color: BRAND.navy.dark,
              }}
            >
              Apply Now
            </motion.span>

            <motion.h2
              id="application-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: BRAND.navy.dark }}
            >
              Ready to{" "}
              <span style={{ color: BRAND.gold.primary }}>Join Us?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg"
              style={{ color: "#64748B" }}
            >
              Submit your application and our talent acquisition team will reach
              out shortly
            </motion.p>
          </header>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{ border: "1px solid rgba(0,0,0,0.06)" }}
          >
            {/* Form Header */}
            <div
              className="relative h-48 md:h-56 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.lighter})`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
                    style={{ background: BRAND.gold.gradient }}
                  >
                    <FaPaperPlane
                      className="text-2xl"
                      style={{ color: BRAND.navy.dark }}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Start Your Journey
                  </h3>
                </div>
              </div>
            </div>

            {/* Form Body */}
            <div className="p-8 md:p-12 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: BRAND.navy.dark }}
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaUser
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-sm"
                      style={{ color: "#94A3B8" }}
                      aria-hidden="true"
                    />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="John Doe"
                      required
                      aria-invalid={errors.fullName && touched.fullName}
                      aria-describedby={
                        errors.fullName ? "fullName-error" : undefined
                      }
                      className={`${inputClasses("fullName")} pl-11`}
                      style={{
                        borderColor:
                          errors.fullName && touched.fullName
                            ? "#EF4444"
                            : "#E2E8F0",
                        background: "#F8FAFC",
                      }}
                    />
                  </div>
                  {errors.fullName && touched.fullName && (
                    <p
                      id="fullName-error"
                      className="mt-1 text-sm text-red-500 flex items-center gap-1"
                      role="alert"
                    >
                      <FaExclamationCircle aria-hidden="true" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: BRAND.navy.dark }}
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaEnvelope
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-sm"
                      style={{ color: "#94A3B8" }}
                      aria-hidden="true"
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="john@example.com"
                      required
                      aria-invalid={errors.email && touched.email}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      className={`${inputClasses("email")} pl-11`}
                      style={{
                        borderColor:
                          errors.email && touched.email ? "#EF4444" : "#E2E8F0",
                        background: "#F8FAFC",
                      }}
                    />
                  </div>
                  {errors.email && touched.email && (
                    <p
                      id="email-error"
                      className="mt-1 text-sm text-red-500 flex items-center gap-1"
                      role="alert"
                    >
                      <FaExclamationCircle aria-hidden="true" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: BRAND.navy.dark }}
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <FaPhone
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-sm"
                      style={{ color: "#94A3B8" }}
                      aria-hidden="true"
                    />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+1 (555) 000-0000"
                      className={`${inputClasses("phone")} pl-11`}
                      style={{ borderColor: "#E2E8F0", background: "#F8FAFC" }}
                    />
                  </div>
                </div>

                {/* Position Select */}
                <div>
                  <label
                    htmlFor="position"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: BRAND.navy.dark }}
                  >
                    Position <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-invalid={errors.position && touched.position}
                    aria-describedby={
                      errors.position ? "position-error" : undefined
                    }
                    className={`${inputClasses("position")} appearance-none cursor-pointer`}
                    style={{
                      borderColor:
                        errors.position && touched.position
                          ? "#EF4444"
                          : "#E2E8F0",
                      background: `#F8FAFC url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M6 8L2 4l4-4 4 4z' fill='%2394A3B8'/%3E%3C/svg%3E") no-repeat right 16px center`,
                    }}
                  >
                    <option value="">Select a position...</option>
                    {openPositions.map((pos) => (
                      <option key={pos.id} value={pos.title}>
                        {pos.title}
                      </option>
                    ))}
                  </select>
                  {errors.position && touched.position && (
                    <p
                      id="position-error"
                      className="mt-1 text-sm text-red-500 flex items-center gap-1"
                      role="alert"
                    >
                      <FaExclamationCircle aria-hidden="true" />
                      {errors.position}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: BRAND.navy.dark }}
                >
                  Cover Letter / Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows="5"
                  placeholder="Tell us about yourself and why you'd be a great fit..."
                  className={`${inputClasses("message")} resize-none`}
                  style={{ borderColor: "#E2E8F0", background: "#F8FAFC" }}
                ></textarea>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  name="agreedToTerms"
                  checked={formData.agreedToTerms}
                  onChange={handleChange}
                  required
                  className="mt-1 w-5 h-5 rounded accent-current cursor-pointer"
                  style={{ accentColor: BRAND.gold.primary }}
                  aria-describedby={
                    errors.agreedToTerms ? "terms-error" : undefined
                  }
                />
                <label
                  htmlFor="terms"
                  className="text-sm cursor-pointer"
                  style={{ color: "#64748B" }}
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="font-semibold underline"
                    style={{ color: BRAND.gold.primary }}
                  >
                    Privacy Policy
                  </a>{" "}
                  and consent to my data being processed for recruitment
                  purposes.
                </label>
              </div>
              {errors.agreedToTerms && (
                <p
                  id="terms-error"
                  className="text-sm text-red-500 flex items-center gap-1"
                  role="alert"
                >
                  <FaExclamationCircle aria-hidden="true" />
                  {errors.agreedToTerms}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isValid || !formData.agreedToTerms}
                className="group relative w-full py-5 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                  background: BRAND.gold.gradient,
                  color: BRAND.navy.dark,
                  boxShadow: `0 8px 30px ${BRAND.gold.primary}35`,
                  "--tw-ring-color": BRAND.gold.primary,
                }}
                aria-label="Submit application form"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <FaPaperPlane aria-hidden="true" />
                  Submit Application
                  <FaArrowRight
                    className="text-sm group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </span>

                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full group-disabled:hover:-translate-x-full transition-transform duration-700">
                  <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                </div>
              </button>
            </div>
          </motion.form>
        </div>
      </Container>
    </section>
  );
});

ApplicationFormSection.displayName = "ApplicationFormSection";

// CTA Section
const CTASection = memo(() => (
  <section
    className="py-24 relative overflow-hidden"
    style={{
      background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
    }}
    aria-labelledby="cta-heading"
  >
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }}
      aria-hidden="true"
    />

    <Container>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2
          id="cta-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          Don't See the{" "}
          <span style={{ color: BRAND.gold.primary }}>Right Role?</span>
        </h2>

        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          We're always looking for talented individuals. Send us your resume and
          we'll keep you in mind for future opportunities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            to="/contact"
            className="group relative px-10 py-5 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              background: BRAND.gold.gradient,
              color: BRAND.navy.dark,
              boxShadow: `0 8px 30px ${BRAND.gold.primary}35`,
              "--tw-ring-color": BRAND.gold.primary,
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Send General Application
              <FaArrowRight
                className="text-sm group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </span>
          </Link>

          <Link
            to="/contact"
            className="px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white",
              "--tw-ring-color": "rgba(255,255,255,0.5)",
            }}
          >
            Contact Recruiting Team →
          </Link>
        </div>
      </motion.div>
    </Container>
  </section>
));

CTASection.displayName = "CTASection";

// ==================== MAIN COMPONENT ====================
const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <main role="main">
      <HeroSection />
      <BenefitsSection />
      <PositionsSection
        selectedJob={selectedJob}
        setSelectedJob={setSelectedJob}
      />
      <ApplicationFormSection />
      <CTASection />
    </main>
  );
};

export default memo(CareersPage);
