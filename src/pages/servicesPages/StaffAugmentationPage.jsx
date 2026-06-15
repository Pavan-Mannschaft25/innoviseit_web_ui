import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserTie,
  FaCode,
  FaBug,
  FaCloud,
  FaUsers,
  FaSearch,
  FaHandshake,
  FaRocket,
  FaExpandArrowsAlt,
  FaClock,
  FaMoneyBillWave,
  FaStar,
  FaCheckCircle,
  FaArrowRight,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaQuoteLeft,
  FaAward,
  FaShieldAlt,
  FaLightbulb,
  FaChartLine,
  FaLaptopCode,
  FaDatabase,
  FaCogs,
  FaHeadset,
  FaNetworkWired,
  FaUserPlus,
  FaBriefcase,
  FaGlobeAmericas,
  FaLinkedinIn,
} from "react-icons/fa";
import banner from "../../assets/services/sr66.png";

// ==================== BRAND COLORS (NAVY + GOLD ONLY) ====================
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

// ==================== ANIMATION CONFIG ====================
const ANIMATION = {
  stagger: 0.12,
  duration: 0.6,
  spring: { type: "spring", stiffness: 300, damping: 25 },
};

// ==================== TALENT CATEGORIES DATA ====================
const talentCategoriesData = [
  {
    id: 1,
    icon: FaUserTie,
    title: "SAP Consultants",
    description:
      "Access experienced SAP consultants across modules like S/4HANA, FICO, MM, SD, and more.",
    skills: ["S/4HANA", "FICO", "MM/SD", "Basis", "BW/4HANA"],
    available: 45,
    color: "#FDB913",
    avatarColors: ["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B"],
  },
  {
    id: 2,
    icon: FaCode,
    title: "Developers",
    description:
      "Hire top-tier full-stack developers, frontend specialists, and backend engineers for your projects.",
    skills: ["React", "Node.js", "Java", ".NET", "Python"],
    available: 80,
    color: "#3B82F6",
    avatarColors: ["#10B981", "#EF4444", "#8B5CF6", "#F59E0B"],
  },
  {
    id: 3,
    icon: FaBug,
    title: "QA Engineers",
    description:
      "Skilled testing professionals for manual, automation, performance, and security testing needs.",
    skills: ["Selenium", "Cypress", "JMeter", "API Testing", "Mobile Testing"],
    available: 35,
    color: "#10B981",
    avatarColors: ["#F59E0B", "#3B82F6", "#EC4899", "#8B5CF6"],
  },
  {
    id: 4,
    icon: FaCloud,
    title: "Cloud & DevOps",
    description:
      "Certified cloud architects and DevOps engineers for AWS, Azure, GCP, and Kubernetes deployments.",
    skills: ["AWS", "Azure", "Kubernetes", "Terraform", "CI/CD"],
    available: 28,
    color: "#8B5CF6",
    avatarColors: ["#F59E0B", "#10B981", "#3B82F6", "#EC4899"],
  },
];

// ==================== BENEFITS DATA ====================
const benefitsData = [
  {
    icon: FaRocket,
    title: "Faster Execution",
    description: "Ready-to-deploy experts accelerate project timelines",
  },
  {
    icon: FaClock,
    title: "Reduced Hiring Time",
    description: "Skip lengthy recruitment processes",
  },
  {
    icon: FaStar,
    title: "Specialized Skills",
    description: "Access niche expertise on demand",
  },
  {
    icon: FaExpandArrowsAlt /* Using fallback */,
    title: "Flexibility & Scalability",
    description: "Scale resources up or down as needed",
  },
];

// ==================== PROCESS STEPS ====================
const processSteps = [
  {
    step: 1,
    icon: FaSearch,
    title: "Understand",
    subtitle: "Discovery Phase",
    description:
      "Identify your project requirements, skill gaps, and team dynamics to define the perfect profile.",
    color: "#FDB913",
  },
  {
    step: 2,
    icon: FaUserPlus,
    title: "Match",
    subtitle: "Selection Phase",
    description:
      "Select the right experts from our curated talent pool based on skills, experience, and culture fit.",
    color: "#FFC107",
  },
  {
    step: 3,
    icon: FaHandshake,
    title: "Onboard",
    subtitle: "Integration Phase",
    description:
      "Quick deployment and seamless integration with your existing teams and workflows.",
    color: "#EAB308",
  },
  {
    step: 4,
    icon: FaChartLine,
    title: "Scale",
    subtitle: "Growth Phase",
    description:
      "Adjust team size dynamically as your project evolves and business needs change.",
    color: "#CA8A04",
  },
];

// ==================== SAMPLE PROFILES DATA ====================
const sampleProfiles = [
  {
    name: "Rajesh K.",
    role: "SAP S/4HANA Consultant",
    exp: "12 yrs",
    rating: 4.9,
    available: true,
  },
  {
    name: "Emily S.",
    role: "Full Stack Developer",
    exp: "8 yrs",
    rating: 4.8,
    available: true,
  },
  {
    name: "Ahmed M.",
    role: "DevOps Engineer",
    exp: "10 yrs",
    rating: 4.9,
    available: false,
  },
  {
    name: "Priya R.",
    role: "QA Automation Lead",
    exp: "7 yrs",
    rating: 4.7,
    available: true,
  },
];

// ==================== METRICS DATA ====================
const metricsData = [
  {
    value: "500+",
    label: "Experts Available",
    icon: FaUsers,
    color: "#FDB913",
  },
  {
    value: "<48hrs",
    label: "Avg Deployment",
    icon: FaRocket,
    color: "#3B82F6",
  },
  { value: "95%", label: "Client Retention", icon: FaStar, color: "#10B981" },
  {
    value: "15+",
    label: "Countries Served",
    icon: FaGlobeAmericas,
    color: "#8B5CF6",
  },
];

// ==================== COMPONENTS ====================

// Talent Category Card Component (LinkedIn-style)
const TalentCard = ({ category, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * ANIMATION.stagger,
        duration: ANIMATION.duration,
        ...ANIMATION.spring,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group h-full"
      style={{
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
      }}
    >
      <div className="relative h-full rounded-3xl overflow-hidden transition-all duration-700 backdrop-blur-xl bg-primary-800">
        {/* Gold Accent */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 origin-left"
          style={{
            background: "linear-gradient(90deg, #FDB913, transparent)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#FDB913]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

        <div className="relative z-10 p-8 lg:p-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            {/* Icon */}
            <motion.div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{
                background: isHovered
                  ? "rgba(253,185,19,0.15)"
                  : "rgba(253,185,19,0.10)",

                border: "1px solid rgba(253,185,19,0.25)",
              }}
              whileHover={{ rotate: [0, -5, 5, 0] }}
            >
              <category.icon
                className="text-2xl"
                style={{ color: "#FDB913" }}
              />
            </motion.div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3 text-white">
            {category.title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed mb-6 text-white/70">
            {category.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {category.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-medium border"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  color: "#FDB913",
                  borderColor: "rgba(253,185,19,0.15)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Footer */}
          {/* <div
            className="flex items-center justify-between pt-4"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span className="text-xs font-bold uppercase tracking-wider text-[#FDB913]">
              View All Profiles
            </span>

            <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1 text-[#FDB913]" />
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

// Sample Profile Card Component (Mini LinkedIn Card)
const ProfileCard = ({ profile, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
      style={{ transform: isHovered ? "translateY(-5px)" : "translateY(0)" }}
    >
      <div
        className="p-5 rounded-xl transition-all duration-300"
        style={{
          background: "white",
          border: `1px solid ${isHovered ? `${BRAND.gold.primary}30` : "rgba(0,0,0,0.05)"}`,
          boxShadow: isHovered
            ? `0 15px 40px ${BRAND.navy.dark}15`
            : "0 4px 15px rgba(0,0,0,0.04)",
        }}
      >
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-14 h-14 rounded-xl overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
              }}
            >
              <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg">
                {profile.name.charAt(0)}
              </div>
            </motion.div>

            {/* Online Status */}
            {profile.available && (
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white"
                style={{ background: "#10B981" }}
              />
            )}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h4
              className="font-bold text-sm truncate"
              style={{ color: BRAND.navy.dark }}
            >
              {profile.name}
            </h4>
            <p className="text-xs truncate" style={{ color: "#64748B" }}>
              {profile.role}
            </p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-[10px]" style={{ color: "#94A3B8" }}>
                {profile.exp}
              </span>
              <span
                className="flex items-center gap-1 text-[10px]"
                style={{ color: BRAND.gold.primary }}
              >
                <FaStar /> {profile.rating}
              </span>
            </div>
          </div>

          {/* Action Buttons - Show on Hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="flex gap-2"
              >
                <button
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                  style={{ background: "#0077B5", color: "white" }}
                >
                  <FaLinkedinIn className="text-xs" />
                </button>
                <button
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                  style={{ background: BRAND.navy.dark, color: "white" }}
                >
                  <FaEnvelope className="text-xs" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

// Benefit Card Component
const BenefitCard = ({ benefit, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{
      delay: index * 0.1,
      duration: ANIMATION.duration,
      ...ANIMATION.spring,
    }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="group"
  >
    <div className="p-6 rounded-xl transition-all duration-500 hover:shadow-lg bg-primary-800">
      <div className="flex items-start gap-4">
        <motion.div
          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: `${BRAND.gold.primary}10`,
            border: `2px solid ${BRAND.gold.primary}25`,
          }}
          whileHover={{ rotate: [0, -10, 10, 0] }}
        >
          <benefit.icon
            className="text-xl"
            style={{ color: BRAND.gold.primary }}
          />
        </motion.div>

        <div>
          <h4
            className="font-bold text-base mb-1"
            style={{ color: BRAND.navy.dark }}
          >
            {benefit.title}
          </h4>
          <p className="text-sm" style={{ color: "#94A3B8" }}>
            {benefit.description}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

// Step Component for Stepper
const StepComponent = ({ step, index, totalSteps }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isLast = index === totalSteps - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.15,
        duration: ANIMATION.duration,
        ...ANIMATION.spring,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col items-center text-center"
    >
      {/* Connector Line */}
      {!isLast && (
        <div
          className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 z-0"
          style={{
            background: `linear-gradient(to right, ${step.color}, rgba(148,163,184,0.2))`,
          }}
        />
      )}

      {/* Step Circle */}
      <motion.div
        className="w-20 h-20 rounded-full flex items-center justify-center relative z-10 mb-6 cursor-pointer"
        style={{
          background: isHovered ? step.color : `${BRAND.gold.primary}15`,
          border: `3px solid ${isHovered ? step.color : `${BRAND.gold.primary}40`}`,
          boxShadow: isHovered ? `0 10px 30px ${step.color}30` : "none",
        }}
        whileHover={{ scale: 1.1 }}
      >
        <step.icon
          className="text-2xl"
          style={{ color: isHovered ? "white" : BRAND.gold.primary }}
        />

        {isHovered && (
          <motion.div
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.4, opacity: 0 }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute inset-0 rounded-full"
            style={{ border: `2px solid ${step.color}` }}
          />
        )}
      </motion.div>

      <h4 className="text-lg font-bold mb-1" style={{ color: BRAND.navy.dark }}>
        {step.title}
      </h4>

      <p
        className="text-xs font-semibold uppercase tracking-wider mb-3"
        style={{ color: step.color }}
      >
        {step.subtitle}
      </p>

      <p
        className="text-sm leading-relaxed max-w-xs mx-auto"
        style={{ color: "#64748B" }}
      >
        {step.description}
      </p>
    </motion.div>
  );
};

// Team Collaboration Visual Component
const TeamVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center p-6">
    {/* Main Collaboration Scene */}
    <div className="grid grid-cols-3 gap-4 w-full max-w-md">
      {/* Person 1 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="col-span-1 row-span-2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3"
          style={{
            background: BRAND.gold.gradient,
            boxShadow: `0 8px 25px ${BRAND.gold.primary}30`,
          }}
        >
          <FaUserTie className="text-xl text-white" />
        </motion.div>
        <div className="text-center">
          <div className="text-xs font-bold text-white">Lead</div>
          <div className="text-[10px] text-white/50">SAP Expert</div>
        </div>

        {/* Connection Lines */}
        <svg
          className="absolute w-full h-full -z-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.line
            x1="50"
            y1="30"
            x2="150"
            y2="60"
            stroke={BRAND.gold.primary}
            strokeWidth="1"
            strokeDasharray="4,4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            opacity="0.3"
          />
        </svg>
      </motion.div>

      {/* Center - Code/Work Area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="col-span-1 row-span-2 rounded-2xl p-4 flex flex-col items-center justify-center"
        style={{
          background: "rgba(11,29,51,0.95)",
          border: "1px solid rgba(253,185,19,0.2)",
        }}
      >
        <FaLaptopCode
          className="text-2xl mb-2"
          style={{ color: BRAND.gold.primary }}
        />
        <div className="text-[10px] text-white/50 text-center">
          Collaboration
        </div>
        <div className="text-xs font-bold text-white text-center">
          Workspace
        </div>

        {/* Animated code lines */}
        <div className="mt-3 space-y-1 w-full">
          {[40, 70, 55, 90].map((width, i) => (
            <motion.div
              key={i}
              className="h-1 rounded-full"
              style={{ background: `rgba(253,185,19,${0.3 + i * 0.15})` }}
              initial={{ width: "0%" }}
              animate={{ width: `${width}%` }}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Person 2 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="col-span-1 row-span-2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3"
          style={{
            background: "linear-gradient(135deg, #3B82F6, #2563EB)",
            boxShadow: "0 8px 25px rgba(59,130,246,0.3)",
          }}
        >
          <FaCode className="text-lg text-white" />
        </motion.div>
        <div className="text-center">
          <div className="text-xs font-bold text-white">Developer</div>
          <div className="text-[10px] text-white/50">Full Stack</div>
        </div>
      </motion.div>

      {/* Bottom Support Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="col-span-3 flex justify-center gap-6 mt-2"
      >
        {[FaHeadset, FaShieldAlt, FaCogs].map((Icon, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <Icon className="text-sm" style={{ color: BRAND.gold.primary }} />
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* Floating Status Badge */}
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full"
      style={{
        background: "rgba(11,29,51,0.9)",
        border: "1px solid rgba(253,185,19,0.3)",
      }}
    >
      <div className="flex items-center gap-2">
        <motion.span
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-2 h-2 rounded-full"
          style={{ background: "#10B981" }}
        />
        <span
          className="text-[10px] font-bold"
          style={{ color: BRAND.gold.primary }}
        >
          TEAM COLLABORATION ACTIVE
        </span>
      </div>
    </motion.div>
  </div>
);

// ==================== SECTIONS ====================

// Hero Section
const HeroSection = () => (
  <section className="relative py-6 lg:py-10 overflow-hidden bg-primary-800">
    {/* Background Elements */}
    <div className="absolute inset-0" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(253,185,19,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(253,185,19,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-20 w-[450px] h-[450px] rounded-full blur-3xl opacity-[0.07]"
        style={{ background: BRAND.gold.primary }}
      />

      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-16 left-16 w-[350px] h-[350px] rounded-full blur-3xl opacity-[0.05]"
        style={{ background: BRAND.navy.lighter }}
      />

      {/* Floating People Icons */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, Math.random() * -30, 0],
            x: [0, (Math.random() - 0.5) * 30, 0],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.7,
          }}
          className="absolute w-8 h-8 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(253,185,19,0.1)",
            border: "1px solid rgba(253,185,19,0.2)",
            top: `${15 + Math.random() * 70}%`,
            left: `${5 + Math.random() * 90}%`,
          }}
        >
          <FaUsers className="text-xs" style={{ color: BRAND.gold.primary }} />
        </motion.div>
      ))}
    </div>

    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-1 gap-12 lg:gap-20 items-center">
        {/* LEFT - Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{
                background: `${BRAND.gold.primary}15`,
                border: `1px solid ${BRAND.gold.primary}30`,
              }}
            >
              <FaUserTie
                className="text-lg"
                style={{ color: BRAND.gold.primary }}
              />
            </div>
            <span
              className="text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: BRAND.gold.primary }}
            >
              Staff Augmentation
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
            Scale Your Team with{" "}
            <span
              style={{
                backgroundImage: BRAND.gold.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              On-Demand Expert Talent
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-xl">
            Flexible staff augmentation services that give you instant access to
            certified SAP consultants and skilled engineering professionals.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
            Whether you need to scale quickly, fill critical skill gaps, or
            accelerate project delivery— we help you build the right team,
            exactly when you need it.
          </p>

          {/* Feature Tags */}
          {/* <div className="flex flex-wrap gap-3 mb-8">
            {[
              " Quick Deployment",
              " Skill Matched",
              "Seamless Integration",
              " Flexible Scaling",
            ].map((tag, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="px-4 py-2 rounded-lg text-xs font-semibold"
                style={{
                  background: "rgba(253,185,19,0.1)",
                  color: BRAND.gold.light,
                  border: "1px solid rgba(253,185,19,0.2)",
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div> */}

          {/* Trust Indicators */}
          {/* <div
            className="flex flex-wrap items-center gap-6 mt-10 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            {[
              { icon: FaAward, text: "Vetted Experts" },
              { icon: FaUsers, text: "500+ Professionals" },
              { icon: FaShieldAlt, text: "NDA Protected" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <item.icon
                  className="text-sm"
                  style={{ color: BRAND.gold.primary }}
                />
                <span className="text-xs text-white/60 font-medium">
                  {item.text}
                </span>
              </div>
            ))}
          </div> */}
        </motion.div>
      </div>
    </div>
  </section>
);

// Talent Categories Grid Section
const TalentSection = () => (
  <section
    id="talent"
    className="py-6 lg:py-10 bg-white relative overflow-hidden"
  >
    <div
      className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.03] translate-x-1/3 -translate-y-1/3"
      style={{ background: BRAND.navy.lighter }}
    />

    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      {/* Section Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span
          className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
          style={{
            background: `${BRAND.navy.mid}08`,
            color: BRAND.navy.dark,
            border: `1px solid ${BRAND.navy.mid}15`,
          }}
        >
          What We Deliver
        </span>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          style={{ color: BRAND.navy.dark }}
        >
          Expert{" "}
          <span style={{ color: BRAND.gold.primary }}>Talent Categories</span>
        </h2>

        <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
          Access pre-vetted professionals across multiple domains ready to join
          your team immediately.
        </p>
      </motion.header>

      {/* Talent Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
        {talentCategoriesData.map((category, index) => (
          <TalentCard key={category.id} category={category} index={index} />
        ))}
      </div>
    </div>
  </section>
);

// Benefits Section
const BenefitsSection = () => (
  <section className="py-6 lg:py-10 bg-gray-50 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT - Visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-primary-800 ">
            {/* Remote Team Setup Visual */}
            <div className="absolute inset-0 p-8 flex flex-col">
              {/* Video Call Grid Mockup */}
              <div className="flex-1 grid grid-cols-2 gap-3">
                {[
                  {
                    name: "Sarah M.",
                    role: "Project Lead",
                    active: true,
                    speaking: false,
                  },
                  {
                    name: "Mike R.",
                    role: "SAP Consultant",
                    active: true,
                    speaking: true,
                  },
                  {
                    name: "Lisa K.",
                    role: "Developer",
                    active: true,
                    speaking: false,
                  },
                  {
                    name: "You",
                    role: "Client",
                    active: true,
                    speaking: false,
                    isYou: true,
                  },
                ].map((person, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className={`rounded-xl p-4 flex flex-col items-center justify-center ${
                      person.isYou ? "row-span-2" : ""
                    }`}
                    style={{
                      background: person.speaking
                        ? "rgba(253,185,19,0.1)"
                        : "rgba(255,255,255,0.03)",
                      border: person.isYou
                        ? `2px solid ${BRAND.gold.primary}`
                        : "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-${person.isYou ? "16" : "12"} h-${person.isYou ? "16" : "12"} rounded-${
                        person.isYou ? "2xl" : "xl"
                      } flex items-center justify-center mb-2`}
                      style={{
                        background: person.isYou
                          ? BRAND.gold.gradient
                          : `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
                      }}
                    >
                      <span
                        className={`${person.isYou ? "text-2xl" : "text-lg"} font-bold text-white`}
                      >
                        {person.isYou ? "👔" : person.name.charAt(0)}
                      </span>
                    </div>

                    {/* Speaking Indicator */}
                    {person.speaking && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-2 h-2 rounded-full mb-1"
                        style={{ background: BRAND.gold.primary }}
                      />
                    )}

                    <span className="text-xs font-medium text-white text-center truncate w-full px-1">
                      {person.name}
                    </span>
                    <span className="text-[10px] text-white/50 text-center">
                      {person.role}
                    </span>

                    {/* Active indicator */}
                    <div className="flex items-center gap-1 mt-1">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "#10B981" }}
                      />
                      <span className="text-[8px] text-green-400">Online</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Meeting Controls Bar */}
              {/* <div
                className="mt-4 flex items-center justify-between px-4 py-3 rounded-xl"
                style={{
                  background: "rgba(11,29,51,0.95)",
                  borderTop: "1px solid rgba(253,185,19,0.2)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-white/40">
                    Meeting in progress
                  </span>
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full"
                    style={{ background: "#EF4444" }}
                  />
                  <span className="text-[10px] font-mono text-red-400">
                    02:34:17
                  </span>
                </div>

                <div className="flex gap-2">
                  {["Mic", "Video", "Share"].map((btn, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(255,255,255,0.1)" }}
                    >
                      <span className="text-[8px] text-white/60">{btn[0]}</span>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-3 -left-3 bg-white rounded-xl p-4 shadow-lg"
            style={{ border: `2px solid #3B82F6` }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(59,130,246,0.1)" }}
              >
                <FaUsers className="text-lg" style={{ color: "#3B82F6" }} />
              </div>
              <div>
                <div
                  className="text-base font-black"
                  style={{ color: BRAND.navy.dark }}
                >
                  Seamless
                </div>
                <div className="text-[10px] text-gray-500">Integration</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT - Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <span
            className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
            style={{
              background: `${BRAND.navy.mid}08`,
              color: BRAND.navy.dark,
              border: `1px solid ${BRAND.navy.mid}15`,
            }}
          >
            Key Benefits
          </span>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{ color: BRAND.navy.dark }}
          >
            Get the Right Talent—{" "}
            <span style={{ color: BRAND.gold.primary }}>
              Right When You Need It
            </span>
          </h2>

          <p
            className="text-lg leading-relaxed mb-10"
            style={{ color: "#64748B" }}
          >
            Our staff augmentation model gives you the flexibility to scale your
            workforce without the overhead of traditional hiring.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mb-10">
            {benefitsData.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Process Section
const ProcessSection = () => (
  <section className="py-6 lg:py-10 bg-primary-800  relative overflow-hidden">
    {/* Background Glow */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-[#FDB913]/10 blur-3xl rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-[#0F2B4D] blur-3xl rounded-full"></div>

    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span
          className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border"
          style={{
            background: "rgba(253,185,19,0.12)",
            color: "#FDB913",
            borderColor: "rgba(253,185,19,0.25)",
          }}
        >
          Our Approach
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
          How We <span style={{ color: "#FDB913" }}>Match You With Talent</span>
        </h2>

        <p className="text-lg leading-relaxed text-white/70">
          A streamlined 4-step process from understanding your needs to scaling
          your dream team.
        </p>
      </motion.header>

      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative h-full p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#FDB913]/30 hover:bg-white/[0.07]">
                {/* Step Icon */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-[#FDB913] shadow-lg shadow-[#FDB913]/20">
                  <step.icon className="text-2xl text-[#081C34]" />
                </div>

                {/* Step Number */}
                <div className="absolute top-6 right-6 text-5xl font-black text-white/5">
                  {step.step}
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h4>

                {/* Subtitle */}
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FDB913] mb-3">
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm leading-relaxed text-white/70">
                  {step.description}
                </p>

                {/* Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FDB913]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden space-y-8">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex gap-5"
          >
            {/* Left Side */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#FDB913] flex items-center justify-center shadow-lg shadow-[#FDB913]/20">
                <step.icon className="text-lg text-[#081C34]" />
              </div>

              {index < processSteps.length - 1 && (
                <div className="w-0.5 flex-1 mt-3 bg-gradient-to-b from-[#FDB913] to-white/10"></div>
              )}
            </div>

            {/* Content */}
            <div className="pb-8">
              <h4 className="font-bold text-lg mb-1 text-white">
                {step.title}
              </h4>

              <p className="text-xs font-semibold uppercase tracking-wider mb-2 text-[#FDB913]">
                {step.subtitle}
              </p>

              <p className="text-sm leading-relaxed text-white/70">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// CTA Banner Section
const CTABannerSection = () => (
  <section
    className="py-6 lg:py-10 relative overflow-hidden"
    style={{
      background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, #0f0d29 50%, ${BRAND.navy.mid} 100%)`,
    }}
  >
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: "32px 32px",
      }}
    />

    <motion.div
      animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-10 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.08]"
      style={{ background: BRAND.gold.primary }}
    />

    <motion.div
      animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
      className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.06]"
      style={{ background: "#3B82F6" }}
    />

    <div className="max-w-5xl mx-auto px-4 lg:px-8 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8"
          style={{
            background: `${BRAND.gold.primary}15`,
            border: `2px solid ${BRAND.gold.primary}30`,
          }}
        >
          <FaUserPlus
            className="text-3xl"
            style={{ color: BRAND.gold.primary }}
          />
        </motion.div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Get the Right Talent—{" "}
          <span
            style={{
              backgroundImage: BRAND.gold.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Right When You Need It
          </span>
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          Don't let resource constraints slow down your projects. Access our
          pool of 500+ certified professionals within 48 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="/contact"
            className="group relative px-10 py-5 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{
              background: BRAND.gold.gradient,
              color: BRAND.navy.dark,
              boxShadow: `0 10px 40px ${BRAND.gold.primary}40`,
            }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Hire Talent Today
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </span>

            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            </div>
          </a>

          {/* <a
            href="/talent"
            className="px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/5 flex items-center gap-3"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white",
            }}
          >
            Browse Talent Pool →
          </a> */}
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-8 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          {[
            { value: "Free Consultation", icon: FaSearch },
            { value: "48hr Turnaround", icon: FaRocket },
            { value: "Risk-Free Trial", icon: FaShieldAlt },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-white/60">
              <item.icon
                className="text-sm"
                style={{ color: BRAND.gold.primary }}
              />
              <span className="text-sm font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// Main Page Component
const StaffAugmentationPage = () => {
  // Fix for missing icons
  const FaCompressArrows = FaExpandArrowsAlt;
  const FaGlobeAmericas = FaNetworkWired;
  const FaLinkedinIn = FaLinkedin;
  const AnimatePresence = ({ children }) => children; // Simplified

  return (
    <main role="main">
      {/* <div
        className="relative w-full min-h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        
        <div className="absolute inset-0 bg-black/20" />
      </div> */}
      <HeroSection />
      <TalentSection />
      <ProcessSection />
      <BenefitsSection />

      {/* <CTABannerSection /> */}
    </main>
  );
};

export default StaffAugmentationPage;
