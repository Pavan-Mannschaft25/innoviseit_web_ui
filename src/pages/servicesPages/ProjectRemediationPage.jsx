import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaExclamationTriangle,
  FaSearch,
  FaStethoscope,
  FaRoad,
  FaBalanceScale,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaChartLine,
  FaClock,
  FaShieldAlt,
  FaHandshake,
  FaQuoteLeft,
  FaStar,
  FaAward,
  FaTimesCircle,
  FaCheckDouble,
  FaRocket,
  FaClipboardCheck,
  FaTools,
  FaProjectDiagram,
  FaLightbulb,
  FaFire,
  FaBolt,
} from "react-icons/fa";
import banner from "../../assets/services/sr55.png";

// ==================== BRAND COLORS (NAVY + GOLD ONLY) ====================
const BRAND = {
  navy: {
    dark: "#0B1D33",
    mid: "#0D2847",
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
    icon: FaStethoscope,
    title: "Project Health Assessment",
    description:
      "Comprehensive evaluation of project status, risks, timelines, and delivery gaps to understand current state.",
    features: [
      "360° project audit",
      "Risk identification",
      "Timeline analysis",
    ],
    color: "#FDB913",
  },
  {
    id: 2,
    icon: FaSearch,
    title: "Root Cause Analysis",
    description:
      "Identify underlying issues across technology, processes, team dynamics, and external dependencies.",
    features: ["Deep-dive analysis", "Pattern recognition", "Impact mapping"],
    color: "#FFC107",
  },
  {
    id: 3,
    icon: FaRoad,
    title: "Recovery Strategy & Roadmap",
    description:
      "Define a clear, actionable plan with milestones to bring projects back on track successfully.",
    features: [
      "Phased recovery plan",
      "Resource reallocation",
      "Milestone reset",
    ],
    color: "#EAB308",
  },
  {
    id: 4,
    icon: FaTools,
    title: "Execution Stabilization",
    description:
      "Improve governance, workflows, and delivery processes for consistent, predictable progress.",
    features: ["Process optimization", "Governance framework", "Quality gates"],
    color: "#CA8A04",
  },
  {
    id: 5,
    icon: FaUsers,
    title: "Stakeholder Alignment",
    description:
      "Rebuild communication channels, transparency, and trust across teams and leadership.",
    features: [
      "Communication plan",
      "Status reporting",
      "Expectation management",
    ],
    color: "#A16207",
  },
];

// ==================== CHALLENGES vs SOLUTIONS DATA ====================
const challengesSolutionsData = [
  {
    challenge: "Missed Deadlines",
    challengeIcon: FaClock,
    solution: "Realistic Timeline Reset & Accelerated Delivery",
    solutionIcon: FaBolt,
  },
  {
    challenge: "Budget Overruns",
    challengeIcon: FaTimesCircle,
    solution: "Cost Optimization & Resource Efficiency",
    solutionIcon: FaChartLine,
  },
  {
    challenge: "Poor Quality Delivery",
    challengeIcon: FaExclamationTriangle,
    solution: "Quality Gates & Testing Protocols",
    solutionIcon: FaShieldAlt,
  },
  {
    challenge: "Team Misalignment",
    challengeIcon: FaUsers,
    solution: "Clear Roles & Communication Framework",
    solutionIcon: FaHandshake,
  },
  {
    challenge: "Scope Creep",
    challengeIcon: FaProjectDiagram,
    solution: "Scope Control & Change Management",
    solutionIcon: FaClipboardCheck,
  },
];

// ==================== BENEFITS DATA ====================
const benefitsData = [
  {
    icon: FaRocket,
    title: "Faster Recovery",
    description: "Quick turnaround for delayed or failing projects",
  },
  {
    icon: FaShieldAlt,
    title: "Reduced Risks",
    description: "Minimize cost overruns and business impact",
  },
  {
    icon: FaChartLine,
    title: "Improved Confidence",
    description: "Predictable delivery and stakeholder trust",
  },
  {
    icon: FaAward,
    title: "Stronger Governance",
    description: "Better control and execution oversight",
  },
];

// ==================== PROCESS STEPS ====================
const processSteps = [
  {
    step: 1,
    icon: FaStethoscope,
    title: "Assess",
    subtitle: "Evaluation Phase",
    description:
      "Evaluate current project health, identify critical issues, and document baseline metrics.",
    color: "#FDB913",
  },
  {
    step: 2,
    icon: FaSearch,
    title: "Diagnose",
    subtitle: "Analysis Phase",
    description:
      "Identify root causes across technology, people, processes, and external factors.",
    color: "#FFC107",
  },
  {
    step: 3,
    icon: FaTools,
    title: "Recover",
    subtitle: "Execution Phase",
    description:
      "Implement structured recovery plan with clear milestones and accountability measures.",
    color: "#EAB308",
  },
  {
    step: 4,
    icon: FaCheckDouble,
    title: "Stabilize",
    subtitle: "Optimization Phase",
    description:
      "Ensure consistent execution, establish governance, and enable sustainable delivery.",
    color: "#10B981",
  },
];

// ==================== BEFORE/AFTER STATS ====================
const beforeAfterStats = [
  { before: "-45 days", after: "+5 days ahead", label: "Schedule Variance" },
  { before: "+80% over", after: "On budget", label: "Budget Status" },
  { before: "32%", after: "95%", label: "Stakeholder Confidence" },
  { before: "Critical", after: "Healthy", label: "Project Health" },
];

// ==================== COMPONENTS ====================

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
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
      }}
    >
      <div
        className="relative h-full rounded-2xl overflow-hidden transition-all duration-700"
        style={{
          background: isHovered
            ? `linear-gradient(180deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`
            : "white",
          border: isHovered
            ? `2px solid ${BRAND.gold.primary}40`
            : "1px solid rgba(0,0,0,0.06)",
          boxShadow: isHovered
            ? `0 25px 60px ${BRAND.navy.dark}30`
            : "0 4px 20px rgba(0,0,0,0.04)",
        }}
      >
        {/* Top Accent */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 origin-left"
          style={{ background: BRAND.gold.gradient }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Corner Glow */}
        <div
          className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(circle at top right, ${BRAND.gold.primary}15, transparent 70%)`,
          }}
        />

        <div className="relative z-10 p-8 lg:p-10">
          {/* Icon */}
          <motion.div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
            style={{
              background: isHovered
                ? `${BRAND.gold.primary}20`
                : `${BRAND.gold.primary}10`,
              border: `2px solid ${isHovered ? BRAND.gold.primary : `${BRAND.gold.primary}30`}`,
            }}
            whileHover={{ rotate: [0, -5, 5, 0] }}
          >
            <service.icon
              className="text-2xl"
              style={{ color: BRAND.gold.primary }}
            />
          </motion.div>

          {/* Title */}
          <h3
            className="text-xl font-bold mb-3 transition-colors duration-300"
            style={{ color: isHovered ? "white" : BRAND.navy.dark }}
          >
            {service.title}
          </h3>

          {/* Description */}
          <p
            className="text-sm leading-relaxed mb-6 transition-colors duration-300"
            style={{ color: isHovered ? "rgba(255,255,255,0.75)" : "#64748B" }}
          >
            {service.description}
          </p>

          {/* Features List */}
          <ul className="space-y-2 mb-6">
            {service.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-sm"
                style={{
                  color: isHovered ? "rgba(255,255,255,0.85)" : "#64748B",
                }}
              >
                <FaCheckCircle
                  className="flex-shrink-0 text-xs"
                  style={{ color: BRAND.gold.primary }}
                />
                {feature}
              </li>
            ))}
          </ul>

          {/* Learn More Link */}
          <div
            className="flex items-center gap-2 pt-4 transition-all duration-300 group-hover:gap-3"
            style={{
              borderTop: `1px solid ${isHovered ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.05)"}`,
            }}
          >
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: BRAND.gold.primary }}
            >
              Explore
            </span>
            <FaArrowRight
              className="text-xs transition-transform group-hover:translate-x-1"
              style={{ color: BRAND.gold.primary }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Challenge-Solution Item Component
const ChallengeSolutionItem = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      delay: index * 0.1,
      duration: ANIMATION.duration,
      ...ANIMATION.spring,
    }}
    className="group"
  >
    <div
      className="flex flex-col sm:flex-row items-stretch gap-4 p-5 rounded-xl transition-all duration-500 hover:shadow-lg"
      style={{
        background: "white",
        border: "1px solid rgba(0,0,0,0.05)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
      }}
    >
      {/* Challenge Side */}
      <div
        className="flex-1 flex items-start gap-3 p-4 rounded-lg"
        style={{
          background: "rgba(239,68,68,0.05)",
          border: "1px solid rgba(239,68,68,0.15)",
        }}
      >
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: "rgba(239,68,68,0.15)" }}
        >
          <item.challengeIcon className="text-red-500" />
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-wider text-red-400 font-semibold mb-1">
            Challenge
          </div>
          <div
            className="font-bold text-base"
            style={{ color: BRAND.navy.dark }}
          >
            {item.challenge}
          </div>
        </div>

        {/* Arrow */}
        <motion.div
          className="hidden sm:flex items-center justify-center self-center mx-2"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaArrowRight
            className="text-lg"
            style={{ color: BRAND.gold.primary }}
          />
        </motion.div>
      </div>

      {/* Solution Side */}
      <div
        className="flex-1 flex items-start gap-3 p-4 rounded-lg"
        style={{
          background: "rgba(16,185,129,0.05)",
          border: "1px solid rgba(16,185,129,0.15)",
        }}
      >
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: "rgba(16,185,129,0.15)" }}
        >
          <item.solutionIcon className="text-green-500" />
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-wider text-green-500 font-semibold mb-1">
            Our Solution
          </div>
          <div
            className="font-bold text-base"
            style={{ color: BRAND.navy.dark }}
          >
            {item.solution}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

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
    <div
      className="p-6 rounded-xl transition-all duration-500 hover:shadow-lg"
      style={{
        background: "white",
        border: "1px solid rgba(0,0,0,0.05)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
      }}
    >
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

// Before/After Comparison Component
const BeforeAfterCard = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group"
  >
    <div
      className="p-5 rounded-xl transition-all duration-500 hover:shadow-lg"
      style={{
        background: "white",
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
      }}
    >
      <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
        {stat.label}
      </div>

      <div className="flex items-center justify-between gap-4">
        {/* Before */}
        <div className="flex-1 text-center">
          <div className="text-lg font-black text-red-500">{stat.before}</div>
          <div className="text-[10px] text-gray-400 mt-1">Before</div>
        </div>

        {/* Arrow */}
        <motion.div
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaArrowRight
            className="text-lg"
            style={{ color: BRAND.gold.primary }}
          />
        </motion.div>

        {/* After */}
        <div className="flex-1 text-center">
          <div className="text-lg font-black text-green-500">{stat.after}</div>
          <div className="text-[10px] text-gray-400 mt-1">After</div>
        </div>
      </div>
    </div>
  </motion.div>
);

// ==================== SECTIONS ====================

// Hero Section
const HeroSection = () => (
  <section
    className="relative py-6 lg:py-10 overflow-hidden"
    style={{
      background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 60%, ${BRAND.navy.lighter} 100%)`,
    }}
  >
    {/* Background Elements */}
    <div className="absolute inset-0" aria-hidden="true">
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
    </div>

    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
              <FaTools
                className="text-lg"
                style={{ color: BRAND.gold.primary }}
              />
            </div>
            <span
              className="text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: BRAND.gold.primary }}
            >
              🚧 Project Remediation
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
            Turning Around{" "}
            <span
              style={{
                backgroundImage: BRAND.gold.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Critical Projects
            </span>{" "}
            with{" "}
            <span
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Confidence
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-xl">
            We specialize in rescuing and stabilizing underperforming or at-risk
            projects. Our structured remediation approach identifies root
            causes, mitigates risks, and realigns execution to ensure successful
            delivery.
          </p>

          <p className="text-base text-gray-400 leading-relaxed mb-8 max-w-xl">
            We help organizations regain control, restore stakeholder
            confidence, and achieve their intended business outcomes.
          </p>

          {/* Trust Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "⚡ Fast Turnaround",
              "🎯 Proven Methodology",
              "✅ Zero-Risk Approach",
              "🤝 Dedicated Team",
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
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="group relative px-8 py-4 rounded-xl font-bold text-base overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: BRAND.gold.gradient,
                color: BRAND.navy.dark,
                boxShadow: `0 8px 30px ${BRAND.gold.primary}35`,
              }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Get Free Assessment
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </span>

              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
                <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
              </div>
            </a>

            <a
              href="#solution"
              className="px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:bg-white/5 flex items-center gap-3"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
              }}
            >
              See How We Help ↓
            </a>
          </div>

          {/* Stats Row */}
          <div
            className="flex flex-wrap items-center gap-6 mt-10 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            {[
              { icon: FaAward, text: "95% Success Rate" },
              { icon: FaUsers, text: "100+ Projects Saved" },
              { icon: FaClock, text: "Avg. 30 Day Recovery" },
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
          </div>
        </motion.div>

        {/* RIGHT - Visual / Image Placeholder */}
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
            {/* Strategy Meeting Visual */}
            <div className="absolute inset-0 p-8 flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-white/40 font-mono">
                    Remediation Dashboard
                  </span>
                </div>

                <div
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(16,185,129,0.15)",
                    border: "1px solid rgba(16,185,129,0.3)",
                  }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-green-400"
                  />
                  <span className="text-[10px] font-bold text-green-400">
                    RECOVERY IN PROGRESS
                  </span>
                </div>
              </div>

              {/* Main Content - Project Health Visual */}
              <div className="flex-1 grid grid-cols-2 gap-4">
                {/* Left Panel - Risk Assessment */}
                <div
                  className="rounded-xl p-4 flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <FaExclamationTriangle className="text-sm text-yellow-400" />
                    <span className="text-xs text-white/50 font-medium">
                      RISK ASSESSMENT
                    </span>
                  </div>

                  <div className="space-y-3 flex-1">
                    {[
                      {
                        name: "Schedule",
                        risk: "High",
                        pct: 85,
                        color: "#EF4444",
                      },
                      {
                        name: "Budget",
                        risk: "Medium",
                        pct: 65,
                        color: "#F59E0B",
                      },
                      {
                        name: "Scope",
                        risk: "Medium",
                        pct: 55,
                        color: "#F59E0B",
                      },
                      {
                        name: "Quality",
                        risk: "Low",
                        pct: 35,
                        color: "#10B981",
                      },
                      {
                        name: "Resources",
                        risk: "Low",
                        pct: 25,
                        color: "#10B981",
                      },
                    ].map((risk, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                      >
                        <div className="flex justify-between text-[10px] mb-1">
                          <span className="text-white/50">{risk.name}</span>
                          <span style={{ color: risk.color }}>{risk.risk}</span>
                        </div>
                        <div
                          className="h-1.5 rounded-full overflow-hidden"
                          style={{ background: "rgba(255,255,255,0.1)" }}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${risk.pct}%` }}
                            transition={{
                              delay: 0.5 + i * 0.15,
                              duration: 0.8,
                            }}
                            className="h-full rounded-full"
                            style={{ background: risk.color }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right Panel - Recovery Progress */}
                <div
                  className="rounded-xl p-4 flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <FaLightbulb
                      className="text-sm"
                      style={{ color: BRAND.gold.primary }}
                    />
                    <span className="text-xs text-white/50 font-medium">
                      RECOVERY PLAN
                    </span>
                  </div>

                  {/* Timeline */}
                  <div className="flex-1 space-y-3">
                    {[
                      { phase: "Assessment", status: "Complete", done: true },
                      { phase: "Diagnosis", status: "Complete", done: true },
                      {
                        phase: "Recovery",
                        status: "In Progress",
                        done: false,
                        pct: 70,
                      },
                      {
                        phase: "Stabilization",
                        status: "Pending",
                        done: false,
                        pct: 0,
                      },
                    ].map((phase, i) => (
                      <div key={i}>
                        <div className="flex items-center gap-2 mb-1">
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center`}
                            style={{
                              background: phase.done
                                ? "#10B981"
                                : i === 2
                                  ? BRAND.gold.primary
                                  : "rgba(255,255,255,0.1)",
                              border: `1px solid ${phase.done ? "#10B981" : i === 2 ? BRAND.gold.primary : "rgba(255,255,255,0.2)"}`,
                            }}
                          >
                            {phase.done && (
                              <FaCheckCircle className="text-[8px] text-white" />
                            )}
                          </div>
                          <span
                            className={`text-[11px] font-medium ${phase.done ? "text-green-400" : i === 2 ? "text-white" : "text-white/40"}`}
                          >
                            {phase.phase}
                          </span>
                          {!phase.done && i === 2 && (
                            <span
                              className="text-[9px]"
                              style={{ color: BRAND.gold.primary }}
                            >
                              70%
                            </span>
                          )}
                        </div>
                        {(i < 3 || !phase.done) && (
                          <div
                            className="ml-2 h-4 w-px"
                            style={{
                              background: phase.done
                                ? "#10B981"
                                : "rgba(255,255,255,0.1)",
                            }}
                          />
                        )}

                        {/* Progress bar for active item */}
                        {i === 2 && (
                          <div
                            className="ml-6 h-1 rounded-full mt-1"
                            style={{ background: "rgba(255,255,255,0.1)" }}
                          >
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "70%" }}
                              transition={{ delay: 0.8, duration: 1 }}
                              className="h-full rounded-full"
                              style={{ background: BRAND.gold.gradient }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Stats Bar */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  {
                    label: "Days Saved",
                    value: "45+",
                    icon: FaClock,
                    color: "#10B981",
                  },
                  {
                    label: "Budget Recovered",
                    value: "$2M",
                    icon: FaChartLine,
                    color: BRAND.gold.primary,
                  },
                  {
                    label: "Confidence Gain",
                    value: "+67%",
                    icon: FaUsers,
                    color: "#3B82F6",
                  },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="p-3 rounded-lg text-center"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <stat.icon
                      className="mx-auto mb-1"
                      style={{ color: stat.color, fontSize: "12px" }}
                    />
                    <div className="text-base font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-[9px] text-white/40">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 3, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-5 shadow-xl"
              style={{ border: `2px solid ${BRAND.gold.primary}` }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${BRAND.gold.primary}15` }}
                >
                  <FaFire
                    className="text-xl"
                    style={{ color: BRAND.gold.primary }}
                  />
                </div>
                <div>
                  <div
                    className="text-xl font-black"
                    style={{ color: BRAND.navy.dark }}
                  >
                    95%
                  </div>
                  <div className="text-xs text-gray-500">Success Rate</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div
            className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl -z-10 opacity-60"
            style={{
              background: "linear-gradient(135deg, #EF44444D, transparent)",
            }}
          />
          <div
            className="absolute -bottom-4 -left-8 w-32 h-32 rounded-full -z-10 opacity-40"
            style={{ background: BRAND.gold.primary }}
          />
        </motion.div>
      </div>
    </div>
  </section>
);

// Problem → Solution Section (KEY SECTION)
const ProblemSolutionSection = () => (
  <section
    id="solution"
    className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden"
  >
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
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
          ❌ Challenges → ✅ Solutions
        </span>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          style={{ color: BRAND.navy.dark }}
        >
          From <span className="text-red-500">Crisis</span> to{" "}
          <span style={{ color: "#10B981" }}>Success</span>
        </h2>

        <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
          We transform struggling projects into success stories through proven
          methodologies and expert intervention.
        </p>
      </motion.header>

      {/* Challenge-Solution Items */}
      <div className="space-y-6 mb-16">
        {challengesSolutionsData.map((item, index) => (
          <ChallengeSolutionItem key={index} item={item} index={index} />
        ))}
      </div>

      {/* Before/After Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {beforeAfterStats.map((stat, index) => (
          <BeforeAfterCard key={index} stat={stat} index={index} />
        ))}
      </motion.div>
    </div>
  </section>
);

// Services Grid Section
const ServicesSection = () => (
  <section
    id="services"
    className="py-20 lg:py-28 bg-white relative overflow-hidden"
  >
    <div
      className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.03] translate-x-1/3 -translate-y-1/3"
      style={{ background: BRAND.navy.lighter }}
    />

    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
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
          💡 What We Deliver
        </span>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          style={{ color: BRAND.navy.dark }}
        >
          Comprehensive{" "}
          <span style={{ color: BRAND.gold.primary }}>
            Remediation Services
          </span>
        </h2>

        <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
          End-to-end project recovery solutions designed to stabilize execution
          and deliver results.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  </section>
);

// Benefits Section
const BenefitsSection = () => (
  <section className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left - Visual */}
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
              border: `1px solid rgba(253,185,19,0.15)`,
            }}
          >
            {/* Transformation Visual */}
            <div className="absolute inset-0 p-8 flex items-center justify-center">
              <div className="w-full max-w-md">
                {/* Before State */}
                <motion.div
                  initial={{ opacity: 1, x: 0 }}
                  whileInView={{ opacity: 0, x: -100 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div
                    className="text-center p-8 rounded-2xl"
                    style={{
                      background: "rgba(239,68,68,0.1)",
                      border: "1px solid rgba(239,68,68,0.2)",
                    }}
                  >
                    <FaTimesCircle className="text-5xl text-red-400 mx-auto mb-4" />
                    <div className="text-xl font-bold text-white mb-2">
                      Before Remediation
                    </div>
                    <div className="text-sm text-red-300">
                      Missed deadlines • Budget overruns • Low morale
                    </div>
                  </div>
                </motion.div>

                {/* After State */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="text-center p-8 rounded-2xl"
                  style={{
                    background: "rgba(16,185,129,0.1)",
                    border: "1px solid rgba(16,185,129,0.2)",
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaCheckDouble className="text-5xl text-green-400 mx-auto mb-4" />
                  </motion.div>
                  <div className="text-xl font-bold text-white mb-2">
                    After Remediation
                  </div>
                  <div className="text-sm text-green-300">
                    On track • On budget • High confidence
                  </div>
                </motion.div>

                {/* Center Arrow */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      background: BRAND.gold.gradient,
                      boxShadow: `0 0 30px ${BRAND.gold.primary}50`,
                    }}
                  >
                    <FaArrowRight className="text-xl text-white" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right - Benefits Content */}
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
            🎯 Key Benefits
          </span>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{ color: BRAND.navy.dark }}
          >
            Why Choose Our{" "}
            <span style={{ color: BRAND.gold.primary }}>
              Remediation Expertise
            </span>
            ?
          </h2>

          <p
            className="text-lg leading-relaxed mb-10"
            style={{ color: "#64748B" }}
          >
            Our battle-tested approach has saved hundreds of projects from
            failure, delivering measurable results and restoring stakeholder
            confidence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {benefitsData.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>

          {/* CTA Mini */}
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{
              background: BRAND.gold.gradient,
              color: BRAND.navy.dark,
              boxShadow: `0 8px 25px ${BRAND.gold.primary}30`,
            }}
          >
            Start Recovery Today
            <FaArrowRight className="text-sm" />
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

// Process Section (Stepper UI)
const ProcessSection = () => (
  <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span
          className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
          style={{
            background: `${BRAND.gold.primary}15`,
            color: BRAND.navy.dark,
            border: `1px solid ${BRAND.gold.primary}30`,
          }}
        >
          🧠 Our Approach
        </span>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          style={{ color: BRAND.navy.dark }}
        >
          Proven{" "}
          <span style={{ color: BRAND.gold.primary }}>
            4-Step Recovery Process
          </span>
        </h2>

        <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
          A systematic methodology that ensures complete project turnaround with
          minimal disruption.
        </p>
      </motion.header>

      {/* Horizontal Stepper - Desktop */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <StepComponent
              key={step.step}
              step={step}
              index={index}
              totalSteps={processSteps.length}
            />
          ))}
        </div>
      </div>

      {/* Vertical Stepper - Mobile */}
      <div className="lg:hidden space-y-8">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex gap-6"
          >
            <div className="flex flex-col items-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: BRAND.gold.gradient,
                  boxShadow: `0 4px 15px ${BRAND.gold.primary}30`,
                }}
              >
                <step.icon className="text-lg text-white" />
              </div>

              {index < processSteps.length - 1 && (
                <div
                  className="w-0.5 flex-1 mt-3"
                  style={{
                    background: `linear-gradient(to bottom, ${BRAND.gold.primary}, rgba(148,163,184,0.2))`,
                  }}
                />
              )}
            </div>

            <div className="pb-8">
              <h4
                className="font-bold text-lg mb-1"
                style={{ color: BRAND.navy.dark }}
              >
                {step.title}
              </h4>
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: step.color }}
              >
                {step.subtitle}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#64748B" }}
              >
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
    className="py-20 lg:py-28 relative overflow-hidden"
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
      className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.05]"
      style={{ background: "#10B981" }}
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
          <FaRocket
            className="text-3xl"
            style={{ color: BRAND.gold.primary }}
          />
        </motion.div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Get Your Project{" "}
          <span
            style={{
              backgroundImage:
                "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Back on Track
          </span>{" "}
          —{" "}
          <span
            style={{
              backgroundImage: BRAND.gold.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Fast and Effectively
          </span>
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          Don't let a struggling project derail your business goals. Our experts
          can assess your situation in 48 hours and provide a clear path to
          recovery.
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
              Request Emergency Assessment
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </span>

            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            </div>
          </a>

          <a
            href="/case-studies"
            className="px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/5 flex items-center gap-3"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white",
            }}
          >
            View Success Stories →
          </a>
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-8 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          {[
            { value: "48hr Response", icon: FaBolt },
            { value: "Dedicated PM", icon: FaAward },
            { value: "Weekly Updates", icon: FaClipboardCheck },
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
const ProjectRemediationPage = () => {
  return (
    <main role="main">
      <div
        className="relative w-full min-h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <HeroSection />
      <ProblemSolutionSection />
      <ServicesSection />
      <BenefitsSection />
      <ProcessSection />
      <CTABannerSection />
    </main>
  );
};

export default ProjectRemediationPage;
