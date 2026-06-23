import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaClock,
  FaExclamationTriangle,
  FaTachometerAlt,
  FaMagic,
  FaShieldAlt,
  FaEye,
  FaSearchPlus,
  FaWrench,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaServer,
  FaNetworkWired,
  FaHeadset,
  FaChartLine,
  FaMoneyBillWave,
  FaExpandArrowsAlt,
  FaTimesCircle,
  FaBolt,
  FaLock,
  FaCog,
  FaDatabase,
  FaCloud,
  FaQuoteLeft,
  FaStar,
  FaUsers,
  FaAward,
  FaHandshake,
  FaCircle,
  FaClipboardList,
  FaPencilRuler,
  FaCode,
} from "react-icons/fa";
import banner from "../../assets/services/sr22.png";

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
    icon: FaEye,
    title: "24/7 Monitoring & Support",
    description:
      "Round-the-clock monitoring to detect, prevent, and resolve issues before they impact your business operations.",
    features: [
      "Real-time Alerting",
      "Automated Health Checks",
      "Proactive Issue Detection",
    ],
    color: "#3B82F6",
    status: "LIVE",
  },
  {
    id: 2,
    icon: FaExclamationTriangle,
    title: "Incident & Problem Management",
    description:
      "Fast resolution of application issues with structured root cause analysis to prevent recurrence.",
    features: ["SLA-driven Response", "Root Cause Analysis", "Knowledge Base"],
    color: "#F59E0B",
    status: "ACTIVE",
  },
  {
    id: 3,
    icon: FaTachometerAlt,
    title: "Performance Optimization",
    description:
      "Continuous tuning and enhancements to improve speed, scalability, and overall system efficiency.",
    features: ["Load Testing", "Database Tuning", "Code Optimization"],
    color: "#10B981",
    status: "OPTIMIZED",
  },
  {
    id: 4,
    icon: FaMagic,
    title: "Application Enhancements",
    description:
      "Regular updates, feature improvements, and system upgrades aligned with your evolving business goals.",
    features: ["Feature Development", "Version Upgrades", "UX Improvements"],
    color: "#8B5CF6",
    status: "EVOLVING",
  },
  {
    id: 5,
    icon: FaShieldAlt,
    title: "Security & Compliance",
    description:
      "Ensuring applications remain secure, compliant, and protected against emerging vulnerabilities.",
    features: [
      "Vulnerability Scanning",
      "Compliance Audits",
      "Security Patching",
    ],
    color: "#EF4444",
    status: "SECURED",
  },
];

// ==================== BENEFITS DATA ====================
const benefitsData = [
  {
    icon: FaTimesCircle,
    title: "Reduced Downtime",
    description: "Minimize business disruption with proactive monitoring",
  },
  {
    icon: FaChartLine,
    title: "Improved Performance",
    description: "Enhanced speed and reliability across all applications",
  },
  {
    icon: FaMoneyBillWave,
    title: "Lower Operational Costs",
    description: "Reduce expenses through efficient maintenance practices",
  },
  {
    icon: FaExpandArrowsAlt,
    title: "Scalable Systems",
    description: "Infrastructure that grows with your business needs",
  },
];

// ==================== PROCESS STEPS ====================
const processSteps = [
  {
    step: 1,
    icon: FaSearchPlus,
    title: "Discover",
    subtitle: "Requirements Assessment",
    description:
      "Understand business requirements, evaluate available solutions, and define the project scope and transformation objectives.",
    color: "#3B82F6",
  },
  {
    step: 2,
    icon: FaClipboardList,
    title: "Prepare",
    subtitle: "Project Preparation",
    description:
      "Establish the project team, create the implementation plan, and set up the system landscape and project governance.",
    color: "#06B6D4",
  },
  {
    step: 3,
    icon: FaPencilRuler,
    title: "Explore",
    subtitle: "Solution Design",
    description:
      "Analyze business processes, conduct fit-to-standard workshops, identify integrations, and finalize custom requirements.",
    color: "#F59E0B",
  },
  {
    step: 4,
    icon: FaCode,
    title: "Realize",
    subtitle: "Build & Validation",
    description:
      "Configure and develop the solution, execute testing activities, and validate the system to ensure business readiness.",
    color: "#10B981",
  },
  {
    step: 5,
    icon: FaRocket,
    title: "Deploy",
    subtitle: "Go-Live Execution",
    description:
      "Perform data migration, production deployment, and execute go-live activities for a smooth transition.",
    color: "#EF4444",
  },
  {
    step: 6,
    icon: FaHeadset,
    title: "Run",
    subtitle: "Continuous Support",
    description:
      "Provide ongoing support, monitor system performance, optimize processes, and deliver end-user assistance and enhancements.",
    color: "#8B5CF6",
  },
];

// ==================== METRICS DATA ====================
const metricsData = [
  { value: "99.9%", label: "Uptime SLA", icon: FaCircle, color: "#10B981" },
  {
    value: "<15min",
    label: "Avg Response Time",
    icon: FaBolt,
    color: "#FDB913",
  },
  {
    value: "40%",
    label: "Cost Reduction",
    icon: FaChartLine,
    color: "#3B82F6",
  },
  { value: "24/7", label: "Support Coverage", icon: FaClock, color: "#8B5CF6" },
];

// ==================== COMPONENTS ====================

// Service Card Component with Live Status
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
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
      }}
    >
      <div className="relative h-full rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-700 bg-primary-800">
        {/* Top Accent */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 origin-left"
          style={{
            background: "linear-gradient(90deg, #FDB913, transparent)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Status Badge */}
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
            whileHover={{ rotate: [0, -5, 5, 0] }}
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

          {/* Features */}
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
    <div className="relative p-6 rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-500 bg-primary-800">
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
          whileHover={{ rotate: [0, -10, 10, 0] }}
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

// Step Component for Horizontal Stepper
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
      {/* Connector Line (Desktop) */}
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
          background: isHovered ? step.color : `${step.color}15`,
          border: `3px solid ${isHovered ? step.color : `${step.color}40`}`,
          boxShadow: isHovered ? `0 10px 30px ${step.color}30` : "none",
        }}
        whileHover={{ scale: 1.1 }}
      >
        <step.icon
          className="text-2xl"
          style={{ color: isHovered ? "white" : step.color }}
        />

        {/* Pulse Effect on Hover */}
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

      {/* Content */}
      <h4
        className="text-lg font-bold mb-1 transition-colors duration-300"
        style={{ color: BRAND.navy.dark }}
      >
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

// Live Status Indicator Component
const LiveIndicator = () => (
  <div
    className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
    style={{
      background: "rgba(16,185,129,0.1)",
      border: "1px solid rgba(16,185,129,0.2)",
    }}
  >
    <motion.span
      animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="w-2.5 h-2.5 rounded-full inline-block"
      style={{ background: "#10B981" }}
    />
    <span
      className="text-xs font-bold uppercase tracking-wider"
      style={{ color: "#10B981" }}
    >
      Systems Online • 24/7 Monitoring Active
    </span>
  </div>
);

// ==================== SECTIONS ====================

// Hero Section (Left Text + Right Monitoring Dashboard Visual)
const HeroSection = () => (
  <section className="relative py-6 lg:py-10 overflow-hidden bg-primary-800">
    {/* Background Elements */}
    <div className="absolute inset-0" aria-hidden="true">
      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-20 w-[450px] h-[450px] rounded-full blur-3xl opacity-[0.07]"
        style={{ background: "#10B981" }} // Green for stability
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
        style={{ background: BRAND.gold.primary }}
      />
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
              <FaCog
                className="text-lg"
                style={{ color: BRAND.gold.primary }}
              />
            </div>
            <span
              className="text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: BRAND.gold.primary }}
            >
              Application Maintenance Services
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
            Ensuring{" "}
            <span
              style={{
                backgroundImage: BRAND.gold.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Stability
            </span>
            ,{" "}
            <span
              style={{
                backgroundImage: BRAND.gold.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Performance
            </span>{" "}
            &{" "}
            <span
              style={{
                backgroundImage: BRAND.gold.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Innovation
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-xl">
            Our Application Maintenance Services go beyond traditional support.
            We provide 24/7 monitoring, proactive maintenance, and continuous
            optimization.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
            We help organizations reduce downtime, improve performance, and
            adapt quickly to evolving business needs.
          </p>

          {/* Live Indicator */}
          <div className="mb-8">
            <LiveIndicator />
          </div>

          {/* Trust Indicators */}
          {/* <div
            className="flex flex-wrap items-center gap-6 mt-10 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            {[
              { icon: FaAward, text: "ISO Certified" },
              { icon: FaUsers, text: "500+ Apps Managed" },
              { icon: FaStar, text: "99.9% Uptime" },
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

// Services Grid Section
const ServicesSection = () => (
  <section
    id="services"
    className="py-6 lg:py-10 bg-white relative overflow-hidden"
  >
    {/* Background Decoration */}
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
          Application{" "}
          <span
            style={{
              backgroundImage: BRAND.gold.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Management Services
          </span>
        </h2>

        <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
          End-to-End application support designed to keep your systems running
          at peak performance around the clock.
        </p>
      </motion.header>

      {/* Services Grid - Responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  </section>
);

// Benefits Section (Image Left + Benefits Right)
const BenefitsSection = () => (
  <section className="py-6 lg:py-10 bg-gray-50 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT - Image / Visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-primary-800 ">
            {/* Replace with actual image: */}
            {/* <img src="/images/it-operations-team.jpg" alt="IT Operations Team Monitoring Systems" className="w-full h-full object-cover" /> */}

            {/* Placeholder Visual - Operations Center */}
            <div className="absolute inset-0 p-8 flex flex-col justify-center">
              {/* Multiple Screen Layout */}
              <div className="grid grid-cols-2 gap-3 h-full">
                {/* Screen 1 - Servers */}
                <div
                  className="rounded-xl p-4 flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <FaServer
                      className="text-sm"
                      style={{ color: "#10B981" }}
                    />
                    <span className="text-xs text-white/50 font-medium">
                      SERVERS
                    </span>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-2 rounded-lg"
                        style={{ background: "rgba(255,255,255,0.03)" }}
                      >
                        <span className="text-[10px] text-white/40">
                          Node-{i}
                        </span>
                        <div className="flex items-center gap-1">
                          <motion.span
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.3,
                            }}
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: "#10B981" }}
                          />
                          <span className="text-[10px] text-green-400">OK</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Screen 2 - Network */}
                <div
                  className="rounded-xl p-4 flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <FaNetworkWired
                      className="text-sm"
                      style={{ color: "#3B82F6" }}
                    />
                    <span className="text-xs text-white/50 font-medium">
                      NETWORK
                    </span>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    {/* Network Diagram */}
                    <div className="relative w-full aspect-square max-w-[120px]">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0"
                      >
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <circle
                            cx="50"
                            cy="50"
                            r="35"
                            fill="none"
                            stroke="rgba(59,130,246,0.3)"
                            strokeWidth="1"
                            strokeDasharray="4,4"
                          />
                          <circle cx="50" cy="15" r="4" fill="#3B82F6" />
                          <circle cx="85" cy="50" r="4" fill="#3B82F6" />
                          <circle cx="50" cy="85" r="4" fill="#3B82F6" />
                          <circle cx="15" cy="50" r="4" fill="#3B82F6" />
                          <circle
                            cx="50"
                            cy="50"
                            r="6"
                            fill={BRAND.gold.primary}
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                  {/* <div className="mt-auto text-center">
                    <div className="text-lg font-black text-white">
                      1.2 Gbps
                    </div>
                    <div className="text-[10px] text-white/40">Bandwidth</div>
                  </div> */}
                </div>
              </div>

              {/* Bottom Status Bar */}
              {/* <div
                className="mt-4 flex items-center justify-between px-2 py-3 rounded-xl "
                style={{
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.2)",
                }}
              >
                <div className="flex items-center gap-2">
                  <motion.span
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-2 h-2 rounded-full"
                    style={{ background: "#10B981" }}
                  />
                  <span
                    className="text-xs font-medium"
                    style={{ color: "#10B981" }}
                  >
                    All Systems Operational
                  </span>
                </div>
                <span className="text-[10px] text-white/30">
                  Updated just now
                </span>
              </div> */}
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 -left-3 bg-white rounded-xl p-4 shadow-lg"
              style={{ border: `2px solid #10B981` }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(16,185,129,0.1)" }}
                >
                  <FaHeadset className="text-lg" style={{ color: "#10B981" }} />
                </div>
                <div>
                  <div
                    className="text-base font-black"
                    style={{ color: BRAND.navy.dark }}
                  >
                    Expert Team
                  </div>
                  <div className="text-[10px] text-gray-500">Ready 24/7</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT - Benefits Content */}
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
            Why Choose Our{" "}
            <span
              style={{
                backgroundImage: BRAND.gold.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Maintenance Services
            </span>
            ?
          </h2>

          <p
            className="text-lg leading-relaxed mb-10"
            style={{ color: "#64748B" }}
          >
            Our proactive approach ensures maximum uptime, optimal performance,
            and peace of mind for your critical business applications.
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

// Process/Approach Section (Stepper UI)
const ProcessSection = () => (
  <section className="py-6 lg:py-10 bg-primary-800  relative overflow-hidden">
    {/* Background Effects */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-[#FDB913]/10 blur-3xl rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#102B4C] blur-3xl rounded-full"></div>

    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      {/* Section Header */}
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
          Proven{" "}
          <span style={{ color: "#FDB913" }}>Maintenance Methodology</span>
        </h2>

        <p className="text-lg leading-relaxed text-white/70">
          A systematic approach ensuring continuous improvement and optimal
          application performance.
        </p>
      </motion.header>

      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
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

                {/* Hover Glow */}
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
      background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, #0A1628 50%, ${BRAND.navy.mid} 100%)`,
    }}
  >
    {/* Background Pattern */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: "32px 32px",
      }}
    />

    {/* Decorative Orbs */}
    <motion.div
      animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-10 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.08]"
      style={{ background: "#10B981" }}
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
          className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8"
          style={{
            background: `${BRAND.gold.primary}15`,
            border: `2px solid ${BRAND.gold.primary}30`,
          }}
        >
          <FaRocket
            className="text-3xl"
            style={{ color: BRAND.gold.primary }}
          />
        </motion.div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Keep Your Applications Running at{" "}
          <span
            style={{
              backgroundImage: BRAND.gold.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Peak Performance
          </span>{" "}
          — 24/7
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          Don't let downtime cost your business. Our expert team ensures your
          applications are always available, secure, and performing at their
          best—around the clock.
        </p>

        {/* CTA Buttons */}
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
              Get Started Today
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </span>

            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            </div>
          </a>
        </div>

        {/* Quick Contact Info */}
        <div
          className="flex flex-wrap items-center justify-center gap-8 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          {[
            { value: "Free Assessment", icon: FaSearchPlus },
            { value: "Custom SLAs", icon: FaClock },
            { value: "Dedicated Team", icon: FaUsers },
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

// Main AMS Page Component
const ApplicationMaintenancePage = () => {
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
      <ServicesSection />
      <ProcessSection />
      <BenefitsSection />

      {/* <CTABannerSection /> */}
    </main>
  );
};

export default ApplicationMaintenancePage;
