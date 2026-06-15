import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaCode,
  FaBug,
  FaLock,
  FaGavel,
  FaChartBar,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaUsers,
  FaAward,
  FaSearch,
  FaCog,
  FaCheckDouble,
  FaFileContract,
  FaRegClipboard,
  FaTerminal,
  FaFingerprint,
  FaServer,
  FaShieldVirus,
} from "react-icons/fa";

// ==================== BRAND COLORS (MATCHING GUIDEWIRE PAGE) ====================
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
  security: {
    primary: "#EF4444",
    secondary: "#10B981",
    accent: "#3B82F6",
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
    icon: FaCode,
    title: "SAST (Static Analysis)",
    description:
      "Identify vulnerabilities early in the development lifecycle by analyzing source code at rest, before the application is running.",
    features: [
      "Early Bug Detection",
      "Code Pattern Analysis",
      "IDE Integration",
    ],
    color: "#3B82F6",
    status: "STATIC",
    category: "SAST",
  },
  {
    id: 2,
    icon: FaBug,
    title: "DAST (Dynamic Analysis)",
    description:
      "Simulate real-world attacks on running applications to discover runtime vulnerabilities that static tools cannot detect.",
    features: [
      "Runtime Scanning",
      "Penetration Testing",
      "API Endpoint Fuzzing",
    ],
    color: "#8B5CF6",
    status: "DYNAMIC",
    category: "DAST",
  },
  {
    id: 3,
    icon: FaChartBar,
    title: "SonarQube Integration",
    description:
      "Implement automated code quality gates and continuous inspection to track technical debt, code smells, and security hotspots.",
    features: [
      "Quality Gate Enforcement",
      "Technical Debt Tracking",
      "CI/CD Integration",
    ],
    color: "#10B981",
    status: "QUALITY",
    category: "Quality",
  },
  {
    id: 4,
    icon: FaShieldVirus,
    title: "Vulnerability Management",
    description:
      "End-to-end lifecycle management of security flaws—from identification and prioritization to remediation and verification.",
    features: ["Risk Prioritization", "Patch Management", "Zero-Day Tracking"],
    color: "#EF4444",
    status: "CRITICAL",
    category: "Vuln Mgmt",
  },
  {
    id: 5,
    icon: FaLock,
    title: "SOC2 Compliance",
    description:
      "Ensure your systems meet strict Trust Service Criteria for security, availability, processing integrity, and confidentiality.",
    features: [
      "Security Controls Audit",
      "Continuous Monitoring",
      "Evidence Collection",
    ],
    color: "#F59E0B",
    status: "COMPLIANT",
    category: "Compliance",
  },
  {
    id: 6,
    icon: FaGavel,
    title: "GDPR Compliance",
    description:
      "Protect user data and avoid massive fines with privacy-by-design architecture, data mapping, and consent management.",
    features: [
      "Data Mapping & PII Discovery",
      "Right to Erasure",
      "Consent Tracking",
    ],
    color: "#06B6D4",
    status: "REGULATED",
    category: "Privacy",
  },
];

// ==================== TOOLS DATA ====================
const toolsData = [
  {
    name: "SonarQube",
    category: "Code Quality",
    icon: FaChartBar,
    color: "#4BD1BE",
  },
  {
    name: "OWASP ZAP",
    category: "DAST Scanning",
    icon: FaShieldVirus,
    color: "#EF4444",
  },
  {
    name: "Checkmarx",
    category: "SAST Scanning",
    icon: FaCode,
    color: "#8B5CF6",
  },
  {
    name: "Veracode",
    category: "Security Platform",
    icon: FaFingerprint,
    color: "#3B82F6",
  },
  {
    name: "Burp Suite",
    category: "Penetration Testing",
    icon: FaBug,
    color: "#F59E0B",
  },
  {
    name: "Vanta",
    category: "SOC2 Automation",
    icon: FaCheckDouble,
    color: "#10B981",
  },
];

// ==================== BENEFITS DATA ====================
const benefitsData = [
  {
    icon: FaShieldAlt,
    title: "Unbreachable Security",
    description:
      "Multi-layered defense against data breaches and cyber threats",
  },
  {
    icon: FaCheckDouble,
    title: "Regulatory Trust",
    description: "Pass SOC2 and GDPR audits with confidence and ease",
  },
  {
    icon: FaRocket,
    title: "Faster DevSecOps",
    description: "Shift-left security without slowing down development",
  },
  {
    icon: FaChartBar,
    title: "Zero Technical Debt",
    description:
      "Maintain clean, maintainable code with automated quality gates",
  },
];

// ==================== PROCESS STEPS ====================
const processSteps = [
  {
    step: 1,
    icon: FaSearch,
    title: "Audit",
    subtitle: "Discovery",
    description:
      "Comprehensive code review and security architecture analysis.",
    color: "#3B82F6",
  },
  {
    step: 2,
    icon: FaShieldVirus,
    title: "Scan",
    subtitle: "SAST & DAST",
    description:
      "Deep static and dynamic vulnerability scanning across your stack.",
    color: "#8B5CF6",
  },
  {
    step: 3,
    icon: FaCog,
    title: "Remediate",
    subtitle: "Fix & Harden",
    description:
      "Patch vulnerabilities, refactor code smells, and enforce security controls.",
    color: "#EF4444",
  },
  {
    step: 4,
    icon: FaCheckDouble,
    title: "Comply",
    subtitle: "Validate",
    description:
      "Achieve and maintain SOC2/GDPR compliance with continuous monitoring.",
    color: "#10B981",
  },
];

// ==================== METRICS DATA ====================
const metricsData = [
  {
    value: "0",
    label: "Critical Vulnerabilities",
    icon: FaShieldAlt,
    color: "#10B981",
  },
  { value: "100%", label: "GDPR Compliance", icon: FaGavel, color: "#3B82F6" },
  { value: "A+", label: "Security Grade", icon: FaLock, color: "#FDB913" },
  { value: "50%", label: "Faster Audits", icon: FaChartBar, color: "#8B5CF6" },
];

// ==================== COMPONENTS ====================

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
      style={{ transform: isHovered ? "translateY(-8px)" : "translateY(0)" }}
    >
      <div className="relative h-full rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-700 bg-primary-800">
        {/* Top Accent — Gold like Guidewire */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 origin-left"
          style={{
            background: "linear-gradient(90deg, #FDB913, transparent)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Status Badge — Gold like Guidewire */}
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
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full inline-block bg-[#FDB913]"
            />
            {service.status}
          </span>
        </div>

        {/* Category Badge — per-service color like Guidewire */}
        <div className="absolute top-5 left-5 z-20">
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider"
            style={{
              background: `${service.color}15`,
              color: service.color,
              border: `1px solid ${service.color}30`,
            }}
          >
            {service.category}
          </span>
        </div>

        {/* Glow Effect */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#FDB913]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

        <div className="relative z-10 p-8 lg:p-10 pt-16">
          {/* Icon — Gold container like Guidewire */}
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

          <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
          <p className="text-sm leading-relaxed mb-6 text-white/70">
            {service.description}
          </p>

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

const ToolCard = ({ tool, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.4 }}
    whileHover={{ y: -5, scale: 1.05 }}
    className="group relative"
  >
    <div
      className="relative rounded-2xl p-6 text-center overflow-hidden transition-all duration-300"
      style={{
        background: "white",
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{
          background: `linear-gradient(90deg, ${tool.color}, transparent)`,
        }}
      />
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300"
        style={{
          background: `${tool.color}10`,
          border: `1px solid ${tool.color}20`,
        }}
      >
        <tool.icon className="text-2xl" style={{ color: tool.color }} />
      </div>
      <h4
        className="font-bold text-base mb-1"
        style={{ color: BRAND.navy.dark }}
      >
        {tool.name}
      </h4>
      <p className="text-xs text-gray-500 font-medium">{tool.category}</p>
    </div>
  </motion.div>
);

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
      <div className="absolute top-0 right-0 w-28 h-28 bg-[#FDB913]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10 flex items-start gap-4">
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

const AnimatedProgressBar = ({ value, label, color, delay = 0 }) => (
  <div className="space-y-1.5">
    <div className="flex justify-between text-xs">
      <span className="text-white/50">{label}</span>
      <span className="font-medium" style={{ color }}>
        {value}%
      </span>
    </div>
    <div
      className="h-2 rounded-full overflow-hidden"
      style={{ background: "rgba(255,255,255,0.1)" }}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ delay, duration: 1, ease: "easeOut" }}
        className="h-full rounded-full relative"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}AA)` }}
      >
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
        />
      </motion.div>
    </div>
  </div>
);

// ==================== SECTIONS ====================

const HeroSection = () => (
  <section className="relative py-6 lg:py-10 overflow-hidden bg-primary-800">
    <div className="absolute inset-0" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Floating Orbs — Blue + Gold like Guidewire */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-20 w-[450px] h-[450px] rounded-full blur-3xl opacity-[0.07]"
        style={{ background: "#3B82F6" }}
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
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT - Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge — Gold like Guidewire */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{
                background: `${BRAND.gold.primary}15`,
                border: `1px solid ${BRAND.gold.primary}30`,
              }}
            >
              <FaShieldAlt
                className="text-lg"
                style={{ color: BRAND.gold.primary }}
              />
            </div>
            <span
              className="text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: BRAND.gold.primary }}
            >
              Code Quality & Security
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
            Secure Code,{" "}
            <span
              style={{
                backgroundImage: BRAND.gold.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Flawless Quality
            </span>
            , Absolute Compliance
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-xl">
            Comprehensive code reviews, secure coding practices, vulnerability
            assessments, and quality assurance to ensure reliable and secure
            applications.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {[
              " SAST & DAST",
              " SonarQube",
              " SOC2 & GDPR",
              " Vulnerability Mgmt",
            ].map((tag, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="px-4 py-2 rounded-lg text-xs font-semibold"
                style={{
                  background: "rgba(253,185,19,0.1)",
                  color: "white",
                  border: "1px solid rgba(253,185,19,0.2)",
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT - Security Dashboard Visual */}
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
              border: `1px solid rgba(253,185,19,0.2)`,
            }}
          >
            <div className="absolute inset-0 p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-white/40 font-mono">
                    Security Dashboard • SonarQube Integrated
                  </span>
                </div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(16,185,129,0.15)",
                    border: "1px solid rgba(16,185,129,0.3)",
                  }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-2 h-2 rounded-full inline-block bg-emerald-400"
                  />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                    Secure
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3 mb-4">
                {[
                  { label: "VULNERABILITIES", value: "0", color: "#10B981" },
                  { label: "CODE SMELLS", value: "12", color: "#F59E0B" },
                  { label: "SECURITY HOTSPOTS", value: "0", color: "#3B82F6" },
                  { label: "QUALITY GATE", value: "Passed", color: "#10B981" },
                ].map((metric, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="p-3 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="text-[9px] text-white/35 uppercase tracking-wider mb-1">
                      {metric.label}
                    </div>
                    <div
                      className="text-lg font-black"
                      style={{ color: metric.color }}
                    >
                      {metric.value}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex-1 grid grid-cols-3 gap-3 mb-4">
                <div
                  className="col-span-2 rounded-xl p-4"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] text-white/40">
                      VULNERABILITY LIFECYCLE (SAST/DAST)
                    </span>
                    <div className="flex gap-2">
                      <span className="text-[9px] text-blue-400">
                        ● Scanned
                      </span>
                      <span className="text-[9px] text-green-400">
                        ● Patched
                      </span>
                    </div>
                  </div>
                  <div className="h-28 flex items-end gap-1.5">
                    {[45, 60, 35, 80, 55, 90, 70, 95, 85, 100].map(
                      (height, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{
                            delay: 0.5 + idx * 0.05,
                            duration: 0.5,
                          }}
                          className="flex-1 rounded-t-md"
                          style={{
                            background:
                              height > 90
                                ? "linear-gradient(180deg, #10B981, #059669)"
                                : "linear-gradient(180deg, #3B82F6, #2563EB)",
                          }}
                        />
                      ),
                    )}
                  </div>
                  <div className="flex justify-between mt-2 text-[9px] text-white/30">
                    <span>Q1</span>
                    <span>Q2</span>
                    <span>Q3</span>
                    <span>Q4</span>
                  </div>
                </div>

                <div
                  className="rounded-xl p-4 flex flex-col justify-center"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span className="text-[10px] text-white/40 mb-3 block text-center">
                    COMPLIANCE
                  </span>
                  {[
                    { label: "SOC2", status: "Active", color: "#10B981" },
                    { label: "GDPR", status: "Active", color: "#10B981" },
                    { label: "HIPAA", status: "N/A", color: "#64748B" },
                  ].map((comp, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between mb-2 text-[11px]"
                    >
                      <span className="text-white/60 font-semibold">
                        {comp.label}
                      </span>
                      <span
                        className="flex items-center gap-1 font-medium"
                        style={{ color: comp.color }}
                      >
                        <FaCheckCircle className="text-[8px]" /> {comp.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div className="grid grid-cols-2 gap-3">
                <div
                  className="p-3 rounded-xl space-y-2"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span className="text-[10px] text-white/40 uppercase">
                    Module Security
                  </span>
                  <AnimatedProgressBar
                    value={98}
                    label="Authentication"
                    color="#10B981"
                    delay={0.2}
                  />
                  <AnimatedProgressBar
                    value={94}
                    label="Payments API"
                    color="#3B82F6"
                    delay={0.4}
                  />
                  <AnimatedProgressBar
                    value={100}
                    label="User Data PII"
                    color="#FDB913"
                    delay={0.6}
                  />
                </div>
                <div
                  className="p-3 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span className="text-[10px] text-white/40 uppercase mb-2 block">
                    Recent Scans
                  </span>
                  <div className="space-y-2">
                    {[
                      {
                        action: "DAST Scan Passed",
                        time: "2m ago",
                        color: "bg-green-400",
                      },
                      {
                        action: "SAST: 0 New Vulns",
                        time: "5m ago",
                        color: "bg-blue-400",
                      },
                      {
                        action: "GDPR Audit Complete",
                        time: "12m ago",
                        color: "bg-yellow-400",
                      },
                    ].map((activity, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div
                          className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${activity.color}`}
                        />
                        <div>
                          <div className="text-[11px] text-white/70">
                            {activity.action}
                          </div>
                          <div className="text-[9px] text-white/30">
                            {activity.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}
            </div>

            {/* Floating Card — Gold border like Guidewire */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-5 shadow-xl"
              style={{ border: `2px solid ${BRAND.gold.primary}` }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${BRAND.gold.primary}15` }}
                >
                  <FaShieldAlt
                    className="text-xl"
                    style={{ color: BRAND.gold.primary }}
                  />
                </div>
                <div>
                  <div
                    className="text-xl font-black"
                    style={{ color: BRAND.navy.dark }}
                  >
                    Fortified
                  </div>
                  <div className="text-xs text-gray-500">Security Engine</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements — matching Guidewire style */}
          <div
            className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl -z-10 opacity-60"
            style={{
              background: "linear-gradient(135deg, #3B82F6, transparent)",
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

const ServicesSection = () => (
  <section
    id="services"
    className="py-6 lg:py-10 bg-white relative overflow-hidden"
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
          Security & Compliance
        </span>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          style={{ color: BRAND.navy.dark }}
        >
          End-to-End{" "}
          <span
            style={{
              backgroundImage: BRAND.gold.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AppSec Solutions
          </span>
        </h2>
        <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
          From static code analysis to global compliance frameworks, we secure
          every layer of your application.
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

const ToolsSection = () => (
  <section className="py-6 lg:py-10 bg-gray-50 relative overflow-hidden">
    <div
      className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.03] -translate-x-1/3 translate-y-1/3"
      style={{ background: "#3B82F6" }}
    />
    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <span
          className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
          style={{
            background: `${BRAND.navy.mid}08`,
            color: BRAND.navy.dark,
            border: `1px solid ${BRAND.navy.mid}15`,
          }}
        >
          Security Tool Stack
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: BRAND.navy.dark }}
        >
          Enterprise-Grade{" "}
          <span
            style={{
              backgroundImage: BRAND.gold.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Security Tools
          </span>
        </h2>
        <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>
          We leverage industry-leading SAST, DAST, and compliance automation
          platforms to secure your code.
        </p>
      </motion.header>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {toolsData.map((tool, index) => (
          <ToolCard key={index} tool={tool} index={index} />
        ))}
      </div>
    </div>
  </section>
);

const ProcessSection = () => (
  <section className="py-6 lg:py-10 bg-primary-800  relative overflow-hidden">
    <div className="absolute top-0 left-0 w-96 h-96 bg-[#FDB913]/10 blur-3xl rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#102B4C] blur-3xl rounded-full"></div>
    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
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
          DevSecOps Approach
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
          Security{" "}
          <span
            style={{
              backgroundImage: BRAND.gold.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Shift-Left Methodology
          </span>
        </h2>
        <p className="text-lg leading-relaxed text-white/70">
          Integrating security at every phase of the software development
          lifecycle, not just at the end.
        </p>
      </motion.header>

      <div className="hidden lg:block">
        <div className="grid grid-cols-4 gap-8">
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
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-[#FDB913] shadow-lg shadow-[#FDB913]/20">
                  <step.icon className="text-2xl text-[#081C34]" />
                </div>
                <div className="absolute top-6 right-6 text-5xl font-black text-white/5">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FDB913] mb-3">
                  {step.subtitle}
                </p>
                <p className="text-sm leading-relaxed text-white/70">
                  {step.description}
                </p>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FDB913]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

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
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#FDB913] flex items-center justify-center shadow-lg shadow-[#FDB913]/20">
                <step.icon className="text-lg text-[#081C34]" />
              </div>
              {index < processSteps.length - 1 && (
                <div className="w-0.5 flex-1 mt-3 bg-gradient-to-b from-[#FDB913] to-white/10"></div>
              )}
            </div>
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

const BenefitsSection = () => (
  <section className="py-6 lg:py-10 bg-white relative overflow-hidden">
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
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-primary-800">
            <div className="absolute inset-0 p-8 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div
                  className="rounded-xl p-4 flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <FaTerminal
                      className="text-sm"
                      style={{ color: "#3B82F6" }}
                    />
                    <span className="text-xs text-white/50 font-medium">
                      SECURE SNIPPET
                    </span>
                  </div>
                  <div className="flex-1 space-y-2 font-mono text-[10px]">
                    {[
                      {
                        line: "app.use(helmet());",
                        indent: 0,
                        color: "text-blue-400",
                      },
                      {
                        line: "app.use(cors({",
                        indent: 0,
                        color: "text-purple-400",
                      },
                      {
                        line: "  origin: 'trusted.com',",
                        indent: 1,
                        color: "text-green-400",
                      },
                      {
                        line: "  credentials: true",
                        indent: 1,
                        color: "text-white/70",
                      },
                      { line: "}));", indent: 0, color: "text-purple-400" },
                      {
                        line: "// ✓ SOC2 Compliant",
                        indent: 0,
                        color: "text-emerald-400",
                      },
                    ].map((code, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className={`${code.color}`}
                        style={{ paddingLeft: `${code.indent * 12}px` }}
                      >
                        {code.line}
                      </motion.div>
                    ))}
                  </div>
                  <div
                    className="mt-auto pt-3 flex items-center gap-2"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <motion.span
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-green-400"
                    />
                    <span className="text-[10px] text-green-400">
                      All security gates passed
                    </span>
                  </div>
                </div>

                <div
                  className="rounded-xl p-4 flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <FaShieldAlt
                      className="text-sm"
                      style={{ color: "#EF4444" }}
                    />
                    <span className="text-xs text-white/50 font-medium">
                      VULN MANAGEMENT
                    </span>
                  </div>
                  <div className="flex-1 space-y-3">
                    {[
                      { sev: "Critical", count: 0, color: "#EF4444" },
                      { sev: "High", count: 0, color: "#F59E0B" },
                      { sev: "Medium", count: 2, color: "#3B82F6" },
                      { sev: "Low", count: 5, color: "#64748B" },
                    ].map((v, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="text-white/60">{v.sev}</span>
                          <span
                            className="font-bold"
                            style={{
                              color: v.count === 0 ? "#10B981" : v.color,
                            }}
                          >
                            {v.count === 0 ? "✓ Clear" : v.count}
                          </span>
                        </div>
                        <div
                          className="h-1.5 rounded-full overflow-hidden"
                          style={{ background: "rgba(255,255,255,0.1)" }}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{
                              width: `${v.count === 0 ? 100 : v.count * 10}%`,
                            }}
                            transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
                            className="h-full rounded-full"
                            style={{
                              background: v.count === 0 ? "#10B981" : v.color,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto pt-3 grid grid-cols-2 gap-2 text-center">
                    <div>
                      <div className="text-sm font-bold text-white">A+</div>
                      <div className="text-[8px] text-white/40">Grade</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">100%</div>
                      <div className="text-[8px] text-white/40">Patch Rate</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Status — Gold accent like Guidewire */}
              <div
                className="mt-4 flex items-center justify-between px-2 py-3 rounded-xl"
                style={{
                  background: "rgba(253,185,19,0.1)",
                  border: "1px solid rgba(253,185,19,0.2)",
                }}
              >
                <div className="flex items-center gap-2">
                  <motion.span
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-2 h-2 rounded-full"
                    style={{ background: "#FDB913" }}
                  />
                  <span
                    className="text-xs font-medium"
                    style={{ color: "#FDB913" }}
                  >
                    GDPR & SOC2 Validated
                  </span>
                </div>
                <span className="text-[10px] text-white/30">Audit #847</span>
              </div>
            </div>

            {/* Floating Badge — Blue border like Guidewire Benefits section */}
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
                  <FaAward className="text-lg" style={{ color: "#3B82F6" }} />
                </div>
                <div>
                  <div
                    className="text-base font-black"
                    style={{ color: BRAND.navy.dark }}
                  >
                    Certified
                  </div>
                  <div className="text-[10px] text-gray-500">AppSec Level</div>
                </div>
              </div>
            </motion.div>
          </div>
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
            Why Choose Our{" "}
            <span
              style={{
                backgroundImage: BRAND.gold.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AppSec Solutions
            </span>
            ?
          </h2>
          <p
            className="text-lg leading-relaxed mb-10"
            style={{ color: "#64748B" }}
          >
            We embed security into your DNA, turning compliance from a checkbox
            exercise into a competitive advantage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {benefitsData.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
          <div className="p-6 rounded-2xl bg-primary-800">
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <FaStar
                className="text-sm"
                style={{ color: BRAND.gold.primary }}
              />
              Security Posture
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {metricsData.map((metric, idx) => (
                <div
                  key={idx}
                  className="text-center p-3 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <metric.icon
                    className="mx-auto mb-1"
                    style={{ color: metric.color, fontSize: "14px" }}
                  />
                  <div
                    className="text-xl font-black"
                    style={{ color: "white" }}
                  >
                    {metric.value}
                  </div>
                  <div className="text-[10px] text-white/50">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const CTABannerSection = () => (
  <section className="py-6 lg:py-10 relative overflow-hidden" bg-primary-800>
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
      style={{ background: "#3B82F6" }}
    />
    <motion.div
      animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
      className="absolute bottom-10 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-[0.05]"
      style={{ background: BRAND.gold.primary }}
    />
    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to{" "}
            <span
              style={{
                backgroundImage: BRAND.gold.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Fortify
            </span>{" "}
            Your Codebase?
          </h2>
          <p className="text-lg text-white/70 max-w-xl">
            Get a comprehensive security audit and code quality assessment.
            Let's build unbreakable software together.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            className="px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FDB913]/20"
            style={{
              background: BRAND.gold.gradient,
              color: BRAND.navy.dark,
            }}
          >
            Start Security Audit
            <FaArrowRight className="inline ml-2" />
          </button>
          <button
            className="px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            View Compliance Report
          </button>
        </motion.div>
      </div>
    </div>
  </section>
);

// ==================== MAIN EXPORT ====================
const CodeQualitySecurity = () => (
  <main>
    <HeroSection />
    <ServicesSection />
    <ToolsSection />
    <ProcessSection />
    <BenefitsSection />
    {/* <CTABannerSection /> */}
  </main>
);

export default CodeQualitySecurity;
