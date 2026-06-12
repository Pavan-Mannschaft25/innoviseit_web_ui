import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FaProjectDiagram,
  FaLifeRing,
  FaChartPie,
  FaUserTie,
  FaTools,
  FaSearch,
  FaClipboardList,
  FaBolt,
  FaShieldAlt,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaAward,
  FaUsers,
  FaHandshake,
  FaClock,
  FaBrain,
  FaFileContract,
  FaQuoteLeft,
  FaPhone,
  FaCertificate,
  FaGlobe,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaChartLine,
  FaMedal,
} from "react-icons/fa";

// ==================== BRAND COLORS (NAVY + GOLD) ====================
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

// ==================== SERVICES DATA ====================
const servicesData = [
  {
    id: 1,
    icon: FaLifeRing,
    title: "Project Recovery & Turnaround",
    description:
      "Rapid intervention for failing or at-risk projects. Our expert teams assess, stabilize, and execute recovery plans to get your initiative back on track within weeks.",
    features: [
      "Emergency Assessment & Triage",
      "Stakeholder Alignment & Communication",
      "Resource Restructuring & Optimization",
    ],
    status: "Most Popular",
    color: "#FDB913",
  },
  {
    id: 2,
    icon: FaChartPie,
    title: "Performance Optimization",
    description:
      "Systematic analysis and enhancement of underperforming projects. Identify bottlenecks, eliminate waste, and boost velocity by up to 60%.",
    features: [
      "Process Efficiency Analysis",
      "Technical Debt Reduction",
      "Delivery Acceleration Programs",
    ],
    status: null,
    color: "#FDB913",
  },
  {
    id: 3,
    icon: FaUserTie,
    title: "Expert Consulting & Advisory",
    description:
      "Access senior consultants with 15+ years of experience in complex enterprise transformations. Get strategic guidance when you need it most.",
    features: [
      "Executive-Level Strategy Sessions",
      "Independent Project Audits",
      "Governance Framework Design",
    ],
    status: null,
    color: "#FDB913",
  },
  {
    id: 4,
    icon: FaTools,
    title: "Technical Implementation Support",
    description:
      "Hands-on technical expertise to bridge skill gaps, resolve complex issues, and ensure flawless execution of critical workstreams.",
    features: [
      "Specialized Resource Augmentation",
      "Code Review & Quality Assurance",
      "Integration & Testing Support",
    ],
    status: null,
    color: "#FDB913",
  },
];

// ==================== APPROACH STEPS DATA ====================
const approachSteps = [
  {
    step: 1,
    icon: FaSearch,
    title: "Assess",
    subtitle: "Discovery Phase",
    description:
      "Comprehensive evaluation of project health, risks, resources, and stakeholder alignment through deep-dive analysis.",
    color: "#3B82F6",
  },
  {
    step: 2,
    icon: FaClipboardList,
    title: "Plan",
    subtitle: "Strategy Phase",
    description:
      "Develop customized remediation roadmap with clear milestones, resource allocation, and risk mitigation strategies.",
    color: "#F59E0B",
  },
  {
    step: 3,
    icon: FaBolt,
    title: "Execute",
    subtitle: "Action Phase",
    description:
      "Rapid deployment of corrective measures with daily monitoring, agile iterations, and continuous stakeholder communication.",
    color: "#10B981",
  },
  {
    step: 4,
    icon: FaShieldAlt,
    title: "Sustain",
    subtitle: "Optimization Phase",
    description:
      "Establish governance frameworks, knowledge transfer, and ongoing optimization to prevent future issues.",
    color: "#8B5CF6",
  },
];

// ==================== BENEFITS DATA ====================
const benefitsData = [
  {
    icon: FaRocket,
    title: "Rapid Response Time",
    description: "Deploy expert teams within 48 hours of engagement kickoff.",
  },
  {
    icon: FaBrain,
    title: "Deep Domain Expertise",
    description:
      "Specialists with 15+ years across industries and technologies.",
  },
  {
    icon: FaHandshake,
    title: "Results Guarantee",
    description: "Outcome-based pricing tied to measurable success metrics.",
  },
  {
    icon: FaFileContract,
    title: "Flexible Engagement",
    description: "Scale up or down based on evolving project needs.",
  },
];

// ==================== TESTIMONIALS DATA ====================
const testimonialsData = [
  {
    quote:
      "Innovise IT stepped in when our $12M ERP implementation was 18 months behind schedule. Within 8 weeks, they had us back on track. Absolutely phenomenal team.",
    author: "James Mitchell",
    role: "CTO, Fortune 500 Manufacturing",
    initials: "JM",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    quote:
      "Their remediation approach is methodical and data-driven. They identified root causes we'd missed for months and delivered a recovery plan that actually worked.",
    author: "Sarah Rodriguez",
    role: "VP Digital Transformation, Global Retail",
    initials: "SR",
    gradient: "from-green-500 to-teal-600",
  },
  {
    quote:
      "Best investment we made during our crisis. The Innovise team didn't just fix problems—they transformed how we manage enterprise projects permanently.",
    author: "David Kim",
    role: "CIO, Healthcare Systems Inc.",
    initials: "DK",
    gradient: "from-orange-500 to-red-600",
  },
];

// ==================== CREDENTIALS DATA ====================
const credentialsData = [
  { icon: FaCertificate, text: "ISO 27001 Certified" },
  { icon: FaAward, text: "SAP Gold Partner" },
  { icon: FaShieldAlt, text: "SOC 2 Compliant" },
  { icon: FaGlobe, text: "Global Delivery Model" },
];

// ==================== SUB-COMPONENTS ====================

// Service Card Component
const ServiceCard = ({ service, index }) => {
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
        transform: isHovered ? "translateY(-12px)" : "translateY(0)",
      }}
    >
      <div
        className="relative h-full rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-700"
        style={{
          background: isHovered
            ? `linear-gradient(135deg, #081C34 0%, #0D2747 50%, #163B66 100%)`
            : `linear-gradient(135deg, #0A1A2F 0%, #102B4C 50%, #163B66 100%)`,
          border: isHovered
            ? "1px solid rgba(253,185,19,0.25)"
            : "1px solid rgba(255,255,255,0.06)",
          boxShadow: isHovered
            ? "0 40px 100px rgba(8,28,52,0.5), 0 0 60px rgba(253,185,19,0.15)"
            : "0 10px 35px rgba(8,28,52,0.20)",
        }}
      >
        {/* Top Accent Line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 origin-left"
          style={{
            background: "linear-gradient(90deg, #FDB913, transparent)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Status Badge */}
        {service.status && (
          <div className="absolute top-5 right-5 z-20">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
              style={{
                background: "rgba(253,185,19,0.12)",
                color: "#FDB913",
                border: "1px solid rgba(253,185,19,0.25)",
              }}
            >
              <motion.span
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="w-1.5 h-1.5 rounded-full inline-block bg-[#FDB913]"
              />
              {service.status}
            </span>
          </div>
        )}

        {/* Glow Effect */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#FDB913]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

        <div className="relative z-10 p-8 lg:p-10">
          {/* Icon */}
          <motion.div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
            style={{
              background: "rgba(253,185,19,0.12)",
              border: "1px solid rgba(253,185,19,0.25)",
            }}
            whileHover={{ rotate: [0, -10, 10, 0] }}
          >
            <service.icon className="text-2xl" style={{ color: "#FDB913" }} />
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3 pr-16 text-white">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed mb-6 text-white/70">
            {service.description}
          </p>

          {/* Features List */}
          <ul className="space-y-3 mb-6">
            {service.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-sm text-white/80"
              >
                <FaCheckCircle className="flex-shrink-0 text-xs text-[#FDB913]" />
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA Link */}
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold group/link transition-colors"
            style={{ color: "#FDB913" }}
          >
            Learn More{" "}
            <FaArrowRight className="text-xs group-hover/link:translate-x-1 transition-transform" />
          </a>
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
    whileHover={{ y: -6, scale: 1.02 }}
    className="group"
  >
    <div
      className="relative p-6 rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-500"
      style={{
        background:
          "linear-gradient(135deg, #081C34 0%, #102B4C 50%, #163B66 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 10px 35px rgba(8,28,52,0.20)",
      }}
    >
      {/* Gold Glow */}
      <div className="absolute top-0 right-0 w-28 h-28 bg-[#FDB913]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10 flex items-start gap-4">
        {/* Icon */}
        <motion.div
          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{
            background: "rgba(253,185,19,0.12)",
            border: "1px solid rgba(253,185,19,0.25)",
          }}
          whileHover={{ rotate: [0, -360, 0] }}
          transition={{ duration: 0.8 }}
        >
          <benefit.icon className="text-xl" style={{ color: "#FDB913" }} />
        </motion.div>

        {/* Content */}
        <div>
          <h4 className="font-bold text-base mb-2 text-white">
            {benefit.title}
          </h4>
          <p className="text-sm leading-relaxed text-white/70">
            {benefit.description}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

// Testimonial Card Component
const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      delay: index * 0.15,
      duration: ANIMATION.duration,
    }}
    whileHover={{ y: -8 }}
    className="group"
  >
    <div
      className="p-8 rounded-3xl transition-all duration-500 hover:shadow-2xl h-full"
      style={{
        background: "linear-gradient(135deg, #f8fafc, #f1f5f9)",
        border: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-sm" style={{ color: "#FDB913" }} />
        ))}
      </div>

      {/* Quote */}
      <p className="text-slate-600 leading-relaxed mb-6 italic text-base">
        "{testimonial.quote}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold`}
        >
          {testimonial.initials}
        </div>
        <div>
          <div className="font-bold text-navy-dark">{testimonial.author}</div>
          <div className="text-sm text-slate-500">{testimonial.role}</div>
        </div>
      </div>
    </div>
  </motion.div>
);

// ==================== MAIN SECTIONS ====================

// Hero Section
const HeroSection = () => (
  <section
    className="relative min-h-screen flex items-center overflow-hidden py-16 lg:py-10"
    bg-primary-800
  >
    {/* Background Elements */}
    <div className="absolute inset-0" aria-hidden="true">
      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.07]"
        style={{ background: "#00A4FD" }}
      />

      <motion.div
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 left-20 w-[400px] h-[400px] rounded-full blur-3xl opacity-[0.05]"
        style={{ background: BRAND.gold.primary }}
      />

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full blur-3xl opacity-[0.04]"
        style={{ background: "#8B5CF6" }}
      />
    </div>

    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 w-full">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT - Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-3 px-5 py-3 rounded-xl backdrop-blur-xl"
            style={{
              background: "rgba(253,185,19,0.08)",
              border: "1px solid rgba(253,185,19,0.2)",
            }}
          >
            <div
              className="w-11 h-11 rounded-lg flex items-center justify-center"
              style={{
                background: `${BRAND.gold.primary}20`,
              }}
            >
              <FaProjectDiagram
                className="text-xl"
                style={{ color: BRAND.gold.primary }}
              />
            </div>
            <span
              className="text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: BRAND.gold.primary }}
            >
              Project Services
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-[1.1]">
            Expert{" "}
            <span style={{ color: BRAND.gold.primary }}>Project Support</span> &
            Strategic Remediation
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
            Rescue struggling projects, optimize underperforming
            implementations, and accelerate delivery timelines with our
            battle-tested remediation expertise.
          </p>

          <p className="text-base text-gray-400 leading-relaxed max-w-xl">
            We bring decades of enterprise experience to diagnose root causes,
            implement corrective actions, and ensure your critical initiatives
            achieve their intended business outcomes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contact"
              className="group relative px-8 py-4 rounded-xl font-bold text-base overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center gap-3"
              style={{
                background: BRAND.gold.gradient,
                color: BRAND.navy.dark,
                boxShadow: `0 8px 30px ${BRAND.gold.primary}35`,
              }}
            >
              <span className="relative z-10">Get Free Assessment</span>
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform relative z-10" />

              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
                <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
              </div>
            </a>

            <a
              href="#services"
              className="px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-3"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
              }}
            >
              Explore Solutions <i className="fas fa-chevron-down text-xs"></i>
            </a>
          </div>

          {/* Trust Indicators */}
          {/* <div
            className="flex flex-wrap items-center gap-8 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            {[
              {
                icon: FaAward,
                value: "150+",
                label: "Projects Rescued",
                color: "#FDB913",
              },
              {
                icon: FaCheckCircle,
                value: "95%",
                label: "Success Rate",
                color: "#10B981",
              },
              {
                icon: FaClock,
                value: "40%",
                label: "Faster Recovery",
                color: "#3B82F6",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: `${item.color}15` }}
                >
                  <item.icon
                    className="text-sm"
                    style={{ color: item.color }}
                  />
                </div>
                <div>
                  <div className="text-white font-bold">{item.value}</div>
                  <div className="text-xs text-gray-400">{item.label}</div>
                </div>
              </div>
            ))}
          </div> */}
        </motion.div>

        {/* RIGHT - Dashboard Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
            style={{
              background: `linear-gradient(145deg, ${BRAND.navy.light}, ${BRAND.navy.mid})`,
              border: `1px solid rgba(253,185,19,0.15)`,
            }}
          >
            {/* Dashboard Content */}
            <div className="absolute inset-0 p-6 pb-0">
              {/* Header Bar */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-4 text-xs text-white/40 font-mono">
                  Project Health Dashboard
                </span>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-3 gap-4 p-4">
                {/* Left Panel - Metrics */}
                <div className="col-span-1 space-y-3">
                  {/* Metric 1 */}
                  <div
                    className="p-4 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="text-[10px] text-white/40 mb-2 uppercase tracking-wider">
                      Recovery Progress
                    </div>
                    <div
                      className="text-2xl font-black"
                      style={{ color: BRAND.gold.primary }}
                    >
                      78%
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: "78%",
                          background: `linear-gradient(to right, ${BRAND.gold.primary}, ${BRAND.gold.light})`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div
                    className="p-4 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="text-[10px] text-white/40 mb-2 uppercase tracking-wider">
                      Issues Resolved
                    </div>
                    <div className="text-2xl font-black text-white">247</div>
                    <div className="text-xs text-green-400 mt-1">
                      <i className="fas fa-arrow-up mr-1"></i>+34 this week
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div
                    className="p-4 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="text-[10px] text-white/40 mb-2 uppercase tracking-wider">
                      Risk Level
                    </div>
                    <div className="text-2xl font-black text-green-400">
                      LOW
                    </div>
                    <div className="text-xs text-white/40 mt-1">
                      Down from Critical
                    </div>
                  </div>

                  {/* Metric 4 */}
                  <div
                    className="p-4 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="text-[10px] text-white/40 mb-2 uppercase tracking-wider">
                      Timeline Status
                    </div>
                    <div className="text-2xl font-black text-blue-400">
                      ON TRACK
                    </div>
                    <div className="text-xs text-white/40 mt-1">
                      +2 weeks saved
                    </div>
                  </div>
                </div>

                {/* Center/Right - Chart Area */}
                <div
                  className="col-span-2 rounded-xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs text-white/40 uppercase tracking-wider">
                      Project Velocity Trend
                    </div>
                    <span
                      className="px-2 py-1 rounded text-[9px] font-bold"
                      style={{
                        background: `${BRAND.gold.primary}20`,
                        color: BRAND.gold.primary,
                      }}
                    >
                      LAST 90 DAYS
                    </span>
                  </div>

                  {/* Chart Bars */}
                  <div className="flex items-end gap-2 h-36 mt-4">
                    {[35, 42, 38, 55, 62, 75, 88, 92].map((height, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{
                          delay: idx * 0.1 + 0.5,
                          duration: 0.5,
                        }}
                        className="flex-1 rounded-t-md"
                        style={{
                          background:
                            idx >= 6
                              ? BRAND.gold.gradient
                              : `rgba(0,164,253,${0.4 + idx * 0.05})`,
                          boxShadow:
                            idx >= 6
                              ? `0 0 20px ${BRAND.gold.primary}40`
                              : "none",
                        }}
                      />
                    ))}
                  </div>

                  <div className="flex justify-between mt-3 text-[9px] text-white/30">
                    <span>Wk 1</span>
                    <span>Wk 2</span>
                    <span>Wk 3</span>
                    <span>Wk 4</span>
                    <span>Wk 5</span>
                    <span>Wk 6</span>
                    <span>Wk 7</span>
                    <span>Wk 8</span>
                  </div>
                </div>
              </div>

              {/* Bottom Status Bar */}
              <div
                className="mt-4 mx-4 mb-4 flex items-center justify-between px-4 py-3 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50" />
                  <span className="text-xs text-white/60 font-medium">
                    All Systems Operational • Real-time Monitoring Active
                  </span>
                </div>
                <div className="text-[10px] text-white/30">
                  Updated just now
                </div>
              </div>
            </div>

            {/* Floating Stats Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-5 shadow-xl"
              style={{ border: `2px solid ${BRAND.gold.primary}` }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: `${BRAND.gold.primary}15` }}
                >
                  <FaChartLine
                    className="text-2xl"
                    style={{ color: BRAND.gold.primary }}
                  />
                </div>
                <div>
                  <div
                    className="text-2xl font-black"
                    style={{ color: BRAND.navy.dark }}
                  >
                    $2.8M
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    Cost Savings Achieved
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div
            className="absolute -top-6 -left-6 w-28 h-28 rounded-2xl -z-10 opacity-50"
            style={{
              background: "linear-gradient(135deg, #00A4FD, transparent)",
            }}
          />
          <div
            className="absolute -bottom-6 -left-10 w-36 h-36 rounded-full -z-10 opacity-40"
            style={{ background: BRAND.gold.primary }}
          />
        </motion.div>
      </div>
    </div>
  </section>
);

// Services Section
const ServicesSection = () => (
  <section
    id="services"
    className="py-10 lg:py-12 bg-white relative overflow-hidden"
  >
    {/* Background Decoration */}
    <div
      className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl opacity-[0.03] translate-x-1/3 -translate-y-1/3"
      style={{ background: BRAND.navy.lighter }}
    />

    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      {/* Section Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <span
          className="inline-block px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border"
          style={{
            background: `${BRAND.navy.dark}05`,
            color: BRAND.navy.dark,
            borderColor: `${BRAND.navy.dark}10`,
          }}
        >
          <i
            className="fas fa-cogs mr-2"
            style={{ color: BRAND.gold.primary }}
          ></i>
          Our Core Services
        </span>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight"
          style={{ color: BRAND.navy.dark }}
        >
          Comprehensive Project{" "}
          <span style={{ color: BRAND.gold.primary }}>
            Support & Remediation
          </span>{" "}
          Solutions
        </h2>

        <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
          End-to-end services designed to rescue struggling projects, optimize
          performance, and ensure successful delivery of your most critical
          initiatives.
        </p>
      </motion.header>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {servicesData.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  </section>
);

// Approach / Methodology Section
const ApproachSection = () => (
  <section
    className="py-10 lg:py-12 bg-navy-dark relative overflow-hidden"
    style={{ background: BRAND.navy.dark }}
  >
    {/* Background Glows */}
    <div
      className="absolute top-0 left-0 w-96 h-96 bg-gold-primary/10 blur-3xl rounded-full"
      style={{ background: "rgba(253,185,19,0.1)" }}
    ></div>
    <div
      className="absolute bottom-0 right-0 w-[30rem] h-[30rem] blur-3xl rounded-full"
      style={{ background: `${BRAND.navy.lighter}30` }}
    ></div>

    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      {/* Section Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <span
          className="inline-block px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border"
          style={{
            background: "rgba(253,185,19,0.12)",
            color: "#FDB913",
            borderColor: "rgba(253,185,19,0.25)",
          }}
        >
          <i className="fas fa-route mr-2"></i>Our Methodology
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white">
          Proven <span style={{ color: "#FDB913" }}>4-Phase Approach</span> to
          Success
        </h2>

        <p className="text-lg leading-relaxed text-white/70">
          A structured, battle-tested methodology that ensures rapid assessment,
          targeted intervention, and sustainable results.
        </p>
      </motion.header>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-4 gap-8">
          {approachSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#FDB913]/30 hover:bg-white/[0.07]">
                {/* Step Number */}
                <div
                  className="flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-lg"
                  style={{
                    background: "#FDB913",
                    boxShadow: "0 10px 30px rgba(253,185,19,0.3)",
                  }}
                >
                  <span
                    className="text-2xl font-black"
                    style={{ color: "#081C34" }}
                  >
                    0{step.step}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-5">
                  <step.icon className="text-3xl text-[#FDB913]" />
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h4>

                {/* Subtitle */}
                <p
                  className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
                  style={{ color: "#FDB913" }}
                >
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm leading-relaxed text-white/70">
                  {step.description}
                </p>

                {/* Top Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FDB913]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Connector Line (except last) */}
              {index < approachSteps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-[72px] left-[calc(50%+50px)] w-[calc(100%-100px)] h-0.5 z-0"
                  style={{
                    background: `linear-gradient(to right, ${step.color}, rgba(148,163,184,0.2))`,
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden space-y-8">
        {approachSteps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex gap-5"
          >
            {/* Left Step Circle */}
            <div className="flex flex-col items-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                style={{
                  background: "#FDB913",
                  boxShadow: "0 10px 30px rgba(253,185,19,0.3)",
                }}
              >
                <span
                  className="text-lg font-black"
                  style={{ color: "#081C34" }}
                >
                  0{step.step}
                </span>
              </div>

              {index < approachSteps.length - 1 && (
                <div
                  className="w-0.5 flex-1 mt-3"
                  style={{
                    background:
                      "linear-gradient(to bottom, #FDB913, rgba(255,255,255,0.1))",
                  }}
                />
              )}
            </div>

            {/* Right Content */}
            <div className="pb-8">
              <div className="flex items-center gap-3 mb-2">
                <step.icon className="text-lg text-[#FDB913]" />
                <h4 className="font-bold text-lg text-white">{step.title}</h4>
              </div>

              <p
                className="text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: "#FDB913" }}
              >
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

// Benefits Section
const BenefitsSection = () => (
  <section className="py-10 lg:py-12 bg-gray-50 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* LEFT - Visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 lg:order-1"
        >
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
            style={{
              background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.light})`,
              border: `1px solid rgba(253,185,19,0.1)`,
            }}
          >
            {/* Central Visual Content */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="w-full max-w-md">
                {/* Central Hub with Animation */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="mx-auto w-22 h-22 rounded-3xl flex items-center justify-center"
                  style={{
                    background: BRAND.gold.gradient,
                    boxShadow: `0 25px 60px ${BRAND.gold.primary}35`,
                  }}
                >
                  <FaProjectDiagram className="text-4xl text-white" />
                </motion.div>

                {/* Orbiting Stat Badges */}
                <div className="relative h-64 mt-8">
                  {/* Top Right */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-0 right-0 flex items-center gap-3 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg"
                    style={{ transform: "translateX(20px)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(59,130,246,0.1)" }}
                    >
                      <i
                        className="fas fa-clock text-blue-500"
                        style={{ color: "#3B82F6" }}
                      ></i>
                    </div>
                    <div>
                      <div
                        className="text-sm font-bold"
                        style={{ color: BRAND.navy.dark }}
                      >
                        40% Faster
                      </div>
                      <div className="text-xs text-gray-500">
                        Time to Recovery
                      </div>
                    </div>
                  </motion.div>

                  {/* Bottom Left */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-0 left-0 flex items-center gap-3 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg"
                    style={{ transform: "translateX(-20px)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(16,185,129,0.1)" }}
                    >
                      <i
                        className="fas fa-dollar-sign text-green-500"
                        style={{ color: "#10B981" }}
                      ></i>
                    </div>
                    <div>
                      <div
                        className="text-sm font-bold"
                        style={{ color: BRAND.navy.dark }}
                      >
                        $2M+ Saved
                      </div>
                      <div className="text-xs text-gray-500">
                        Avg. Cost Avoidance
                      </div>
                    </div>
                  </motion.div>

                  {/* Center Left */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center gap-3 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg"
                    style={{ transform: "translate(-20px, -50%)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(139,92,246,0.1)" }}
                    >
                      <i
                        className="fas fa-users text-purple-500"
                        style={{ color: "#8B5CF6" }}
                      ></i>
                    </div>
                    <div>
                      <div
                        className="text-sm font-bold"
                        style={{ color: BRAND.navy.dark }}
                      >
                        98% Success
                      </div>
                      <div className="text-xs text-gray-500">
                        Client Satisfaction
                      </div>
                    </div>
                  </motion.div>

                  {/* Center Right */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                    className="absolute top-1/2 right-0 -translate-y-1/2 flex items-center gap-3 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg"
                    style={{ transform: "translate(20px, -50%)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(245,158,11,0.1)" }}
                    >
                      <i
                        className="fas fa-shield-alt text-orange-500"
                        style={{ color: "#F59E0B" }}
                      ></i>
                    </div>
                    <div>
                      <div
                        className="text-sm font-bold"
                        style={{ color: BRAND.navy.dark }}
                      >
                        Zero Risk
                      </div>
                      <div className="text-xs text-gray-500">
                        Guaranteed Outcomes
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Bottom Stats Overlay */}
            {/* <div className="absolute bottom-6 left-6 right-6 flex gap-4">
              <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg">
                <div
                  className="text-2xl font-black"
                  style={{ color: "#3B82F6" }}
                >
                  150+
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  Projects Rescued
                </div>
              </div>
              <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg">
                <div
                  className="text-2xl font-black"
                  style={{ color: BRAND.gold.primary }}
                >
                  15+
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  Years Experience
                </div>
              </div>
              <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg">
                <div
                  className="text-2xl font-black"
                  style={{ color: "#10B981" }}
                >
                  24/7
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  Support Available
                </div>
              </div>
            </div> */}
          </div>

          {/* Decorative Blobs */}
          <div
            className="absolute -top-8 -left-8 w-32 h-32 rounded-2xl -z-10 opacity-50"
            style={{
              background: "linear-gradient(135deg, #00A4FD, transparent)",
            }}
          />
          <div
            className="absolute -bottom-8 -left-12 w-40 h-40 rounded-full -z-10 opacity-40"
            style={{ background: BRAND.gold.primary }}
          />
        </motion.div>

        {/* RIGHT - Benefits Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 space-y-8"
        >
          {/* Section Tag */}
          <span
            className="inline-block px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] border"
            style={{
              background: `${BRAND.navy.dark}05`,
              color: BRAND.navy.dark,
              borderColor: `${BRAND.navy.dark}10`,
            }}
          >
            <i
              className="fas fa-star mr-2"
              style={{ color: BRAND.gold.primary }}
            ></i>
            Why Choose Us
          </span>

          {/* Heading */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight"
            style={{ color: BRAND.navy.dark }}
          >
            The{" "}
            <span style={{ color: BRAND.gold.primary }}>
              Innovise Advantage
            </span>{" "}
            for Your Critical Projects
          </h2>

          {/* Subheading */}
          <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
            When stakes are high and timelines are tight, you need partners
            who've been there before. Our track record speaks for itself.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefitsData.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>

          {/* Credentials Box */}
          <div
            className="p-6 rounded-2xl"
            style={{
              background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
            }}
          >
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <FaMedal
                className="text-sm"
                style={{ color: BRAND.gold.primary }}
              />{" "}
              Our Credentials
            </h4>

            <div className="grid grid-cols-2 gap-4">
              {credentialsData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <item.icon
                    className="text-sm flex-shrink-0"
                    style={{ color: BRAND.gold.primary }}
                  />
                  <span className="text-sm text-white/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Testimonials Section
const TestimonialsSection = () => (
  <section className="py-10 lg:py-12 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      {/* Section Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span
          className="inline-block px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border"
          style={{
            background: `${BRAND.navy.dark}05`,
            color: BRAND.navy.dark,
            borderColor: `${BRAND.navy.dark}10`,
          }}
        >
          <i
            className="fas fa-quote-left mr-2"
            style={{ color: BRAND.gold.primary }}
          ></i>
          Client Success Stories
        </span>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight"
          style={{ color: BRAND.navy.dark }}
        >
          Trusted by{" "}
          <span style={{ color: BRAND.gold.primary }}>Industry Leaders</span>
        </h2>
      </motion.header>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </div>
    </div>
  </section>
);

// CTA Banner Section
const CTABannerSection = () => (
  <section
    id="contact"
    className="py-10 lg:py-12 relative overflow-hidden"
    style={{
      background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, #0A1628 50%, ${BRAND.navy.mid} 100%)`,
    }}
  >
    {/* Background Pattern */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: "24px 24px",
      }}
    />

    {/* Decorative Orbs */}
    <motion.div
      animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-10 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.08]"
      style={{ background: "#00A4FD" }}
    />

    <motion.div
      animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 3,
      }}
      className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.06]"
      style={{ background: BRAND.gold.primary }}
    />

    <div className="max-w-5xl mx-auto px-4 lg:px-8 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center justify-center w-24 h-24 rounded-2xl mb-10"
          style={{
            background: `${BRAND.gold.primary}15`,
            border: `2px solid ${BRAND.gold.primary}30`,
          }}
        >
          <FaRocket
            className="text-4xl"
            style={{ color: BRAND.gold.primary }}
          />
        </motion.div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
          Is Your Project{" "}
          <span style={{ color: BRAND.gold.primary }}>At Risk?</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto">
          Don't wait until it's too late. Get a free confidential assessment
          from our remediation experts within 24 hours. No obligations, just
          actionable insights.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12">
          <a
            href="#"
            className="group btn-shine relative px-12 py-5 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex items-center justify-center gap-3"
            style={{
              background: BRAND.gold.gradient,
              color: BRAND.navy.dark,
              boxShadow: `0 15px 50px ${BRAND.gold.primary}40`,
            }}
          >
            <span className="relative z-10">Request Free Assessment</span>
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform relative z-10" />

            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            </div>
          </a>

          <a
            href="tel:+1234567890"
            className="px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-3 border border-white/20 text-white hover:border-[#FDB913]/50"
          >
            <FaPhone style={{ color: BRAND.gold.primary }} />
            Talk to an Expert Now
          </a>
        </div>

        {/* Quick Info Points */}
        <div
          className="flex flex-wrap items-center justify-center gap-10 pt-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          {[
            {
              icon: FaClock,
              title: "24-Hour Response",
              desc: "Guaranteed initial contact",
            },
            {
              icon: FaUserTie,
              title: "100% Confidential",
              desc: "NDA-signed engagement",
            },
            {
              icon: FaFileContract,
              title: "Free Roadmap",
              desc: "Detailed action plan included",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-white/70">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: `${BRAND.gold.primary}15` }}
              >
                <item.icon
                  className="text-sm"
                  style={{ color: BRAND.gold.primary }}
                />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-white">{item.title}</div>
                <div className="text-xs text-white/50">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// Footer Component
const FooterSection = () => (
  <footer
    className="py-12 border-t"
    style={{
      background: BRAND.navy.dark,
      borderColor: "rgba(255,255,255,0.05)",
    }}
  >
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ background: BRAND.gold.primary }}
          >
            <FaProjectDiagram
              className="text-lg font-bold"
              style={{ color: BRAND.navy.dark }}
            />
          </div>
          <span className="text-white font-bold text-lg">Innovise IT</span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-white/50 text-center">
          © 2024 Innovise IT Solutions. All rights reserved. | Enterprise
          Project Excellence
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {[FaLinkedinIn, FaTwitter, FaFacebookF].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:text-[#FDB913] hover:bg-[#FDB913]/10 transition-all"
            >
              <Icon className="text-sm" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

// ==================== MAIN PAGE COMPONENT ====================

const ProjectSupportRemediationPage = () => {
  return (
    <main role="main" className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <ApproachSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTABannerSection />
      {/* <FooterSection /> */}
    </main>
  );
};

export default ProjectSupportRemediationPage;
