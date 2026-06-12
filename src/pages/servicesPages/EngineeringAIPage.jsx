import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  // Core & Brand Icons
  FaBrain,
  FaCode,
  FaVial,
  FaInfinity,
  FaDatabase,
  FaShieldAlt,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaSearchPlus,
  FaPencilRuler,
  FaCog,
  FaQuoteLeft,
  FaStar,
  FaUsers,
  FaChartLine,
  FaShieldAlt as FaShield,
  FaProjectDiagram,
  FaUserTie,
  FaClock,
  FaHeart,
  FaPlayCircle,
  FaHandshake,
  FaHeadset,
  FaFlask,
  FaTrophy,
  FaMicrochip,
  FaLayerGroup,
  FaRoute,

  // Technology / Brand Icons (All Font Awesome)
  FaPython,
  FaJsSquare,
  FaReact,
  FaDocker,
  FaAws,
  FaJava,
  FaGitAlt,
  FaFire,
  FaBug,
  FaSearch,
  FaCubes,
  FaStarOfDavid,
} from "react-icons/fa";

// Also import solid variants if needed
import {
  FaPython as FaPythonSolid,
  FaReact as FaReactSolid,
  FaDocker as FaDockerSolid,
  FaAws as FaAwsSolid,
  FaJava as FaJavaSolid,
} from "react-icons/fa6";

// ============================================================================
// BRAND CONSTANTS & CONFIGURATION
// ============================================================================

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

const ANIMATION = {
  stagger: 0.12,
  duration: 0.6,
  spring: { type: "spring", stiffness: 300, damping: 25 },
};

// ============================================================================
// DATA ARRAYS
// ============================================================================

const servicesData = [
  {
    id: 1,
    icon: FaBrain,
    title: "AI/ML Development",
    description:
      "Custom machine learning models, deep learning solutions, NLP systems, computer vision, and predictive analytics tailored for your business needs.",
    features: [
      "Custom Model Development",
      "NLP & Computer Vision",
      "Predictive Analytics",
      "MLOps Implementation",
    ],
    color: "#8B5CF6",
    status: "CORE",
    category: "AI/ML",
  },
  {
    id: 2,
    icon: FaCode,
    title: "Software Engineering",
    description:
      "Full-stack development, microservices architecture, API design, cloud-native applications, and scalable system design.",
    features: [
      "Full-Stack Development",
      "Microservices Architecture",
      "API Design & Integration",
      "Cloud-Native Applications",
    ],
    color: "#3B82F6",
    status: "ACTIVE",
    category: "ENGINEERING",
  },
  {
    id: 3,
    icon: FaVial,
    title: "Test Automation",
    description:
      "Comprehensive automated testing frameworks covering functional, performance, security, accessibility, and regression testing.",
    features: [
      "Selenium & Cypress Frameworks",
      "Performance Testing (JMeter/K6)",
      "Security Scanning (OWASP)",
      "API & Contract Testing",
    ],
    color: "#10B981",
    status: "QA_READY",
    category: "TESTING",
  },
  {
    id: 4,
    icon: FaInfinity,
    title: "DevOps & CI/CD",
    description:
      "Infrastructure as code, container orchestration, continuous integration/deployment pipelines, GitOps, and cloud operations.",
    features: [
      "Jenkins/GitLab CI Pipelines",
      "Docker & Kubernetes",
      "Terraform & Ansible IaC",
      "AWS/Azure/GCP Operations",
    ],
    color: "#F59E0B",
    status: "AUTOMATED",
    category: "DEVOPS",
  },
  {
    id: 5,
    icon: FaDatabase,
    title: "Data Engineering",
    description:
      "Data pipeline construction, ETL/ELT processes, data warehousing, real-time streaming, and analytics infrastructure.",
    features: [
      "Data Pipeline Architecture",
      "Apache Spark & Kafka",
      "Data Lake & Warehouse (Snowflake)",
      "Real-time Streaming Analytics",
    ],
    color: "#EF4444",
    status: "DATA",
    category: "DATA",
  },
  {
    id: 6,
    icon: FaShieldAlt,
    title: "Code Quality & Security",
    description:
      "Static/dynamic code analysis, vulnerability scanning, security audits, automated code reviews, and compliance verification.",
    features: [
      "SAST/DAST Security Scanning",
      "SonarQube Code Analysis",
      "Vulnerability Management",
      "SOC2/GDPR Compliance Auditing",
    ],
    color: "#06B6D4",
    status: "SECURED",
    category: "QUALITY",
  },
];

// TECHNOLOGIES - All using Font Awesome icons only
const technologies = [
  { name: "Python", icon: FaPython, color: "#3776AB", desc: "ML/AI Primary" },
  {
    name: "JavaScript",
    icon: FaJsSquare,
    color: "#F7DF1E",
    desc: "Full Stack",
  },
  { name: "React", icon: FaReact, color: "#61DAFB", desc: "Frontend" },
  { name: "Docker", icon: FaDocker, color: "#2496ED", desc: "Containers" },
  {
    name: "Kubernetes",
    icon: FaCubes,
    color: "#326CE5",
    desc: "Orchestration",
  }, // Using cubes as K8s representation
  { name: "AWS", icon: FaAws, color: "#FF9900", desc: "Cloud Platform" },
  { name: "Java", icon: FaJava, color: "#007396", desc: "Enterprise" },
  { name: "GitLab CI", icon: FaGitAlt, color: "#FC6D26", desc: "CI/CD" },
  {
    name: "TensorFlow",
    icon: FaBrain,
    color: "#FF6F00",
    desc: "Deep Learning",
  }, // Using brain icon for TF
  { name: "Apache Spark", icon: FaFire, color: "#E25A1C", desc: "Big Data" }, // Using fire for Spark
  { name: "Selenium", icon: FaBug, color: "#43B02A", desc: "Testing" }, // Using bug for Selenium
  { name: "SonarQube", icon: FaSearch, color: "#4E9BCD", desc: "Code Quality" }, // Using search for SonarQube
];

const benefitsData = [
  {
    icon: FaRocket,
    title: "Accelerated Delivery",
    description:
      "Reduce time-to-market by up to 40% using our proven agile methodologies and pre-built accelerator components.",
  },
  {
    icon: FaChartLine,
    title: "Superior Quality",
    description:
      "Achieve 95%+ test coverage with our comprehensive QA framework and automation-first development culture.",
  },
  {
    icon: FaShield,
    title: "Enterprise Security",
    description:
      "Built-in security practices, continuous vulnerability scanning, and SOC2/GDPR compliance from day one.",
  },
  {
    icon: FaUsers,
    title: "Expert Team Access",
    description:
      "Leverage 200+ certified engineers specializing in AI, cloud, modern architectures, and emerging technologies.",
  },
];

const processSteps = [
  {
    step: 1,
    icon: FaSearchPlus,
    title: "Discovery",
    subtitle: "Requirements Analysis",
    description:
      "Deep analysis of business requirements, technical constraints, success metrics, and stakeholder goals to create a comprehensive project blueprint.",
    color: "#3B82F6",
  },
  {
    step: 2,
    icon: FaPencilRuler,
    title: "Design",
    subtitle: "Architecture Planning",
    description:
      "System architecture design, database modeling, API specifications, UI/UX wireframing, and scalability planning with future growth in mind.",
    color: "#F59E0B",
  },
  {
    step: 3,
    icon: FaCode,
    title: "Develop",
    subtitle: "Agile Sprints",
    description:
      "Iterative development following agile methodologies with continuous integration, peer code reviews, automated testing, and daily standups.",
    color: "#10B981",
  },
  {
    step: 4,
    icon: FaRocket,
    title: "Deploy",
    subtitle: "Release & Support",
    description:
      "Production deployment via blue-green or canary releases, performance monitoring, user training, hypercare support, and ongoing maintenance.",
    color: "#8B5CF6",
  },
];

const metricsData = [
  {
    value: "500+",
    label: "Projects Delivered",
    icon: FaProjectDiagram,
    color: "#FDB913",
  },
  {
    value: "200+",
    label: "Expert Engineers",
    icon: FaUserTie,
    color: "#10B981",
  },
  { value: "98%", label: "On-Time Delivery", icon: FaClock, color: "#3B82F6" },
  {
    value: "4.9/5",
    label: "Client Satisfaction",
    icon: FaHeart,
    color: "#8B5CF6",
  },
];

const testimonials = [
  {
    quote:
      "Innovise IT's AI engineering team transformed our data analytics capabilities beyond our expectations. Their machine learning models reduced our processing time by 75% while improving prediction accuracy significantly. The team's expertise in MLOps was exceptional.",
    author: "Sarah Mitchell",
    role: "Chief Technology Officer",
    company: "FinTech Innovations Inc.",
    initials: "SM",
  },
  {
    quote:
      "The QA automation framework built by their engineering team caught critical bugs before they reached production, saving us an estimated $2 million annually. Their test automation-first approach and CI/CD discipline is truly world-class.",
    author: "Rajesh Kumar",
    role: "VP of Engineering",
    company: "GlobalTech Corporation",
    initials: "RK",
  },
];

// ============================================================================
// REUSABLE SUB-COMPONENTS (All using FA icons)
// ============================================================================

// --- Status Badge Component ---
const StatusBadge = ({ status }) => (
  <span
    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
    style={{
      background: `${BRAND.gold.primary}12`,
      color: BRAND.gold.primary,
      border: `1px solid ${BRAND.gold.primary}25`,
    }}
  >
    <motion.span
      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="w-1.5 h-1.5 rounded-full"
      style={{ background: BRAND.gold.primary }}
    />
    {status}
  </span>
);

// --- Category Badge Component ---
const CategoryBadge = ({ category, color }) => (
  <span
    className="inline-flex items-center px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider"
    style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
  >
    {category}
  </span>
);

// --- Live Indicator Component ---
const LiveIndicator = () => (
  <div
    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full"
    style={{
      background: `rgba(16,185,129,0.12)`,
      border: `1px solid rgba(16,185,129,0.25)`,
    }}
  >
    <motion.span
      animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="w-2.5 h-2.5 rounded-full bg-emerald-500"
    />
    <span
      className="text-xs font-bold uppercase tracking-[0.15em]"
      style={{ color: "#10B981" }}
    >
      AI-Powered Development • Active Projects
    </span>
  </div>
);

// --- Section Header Component ---
const SectionHeader = ({
  badge,
  badgeIcon,
  title,
  highlight,
  description,
  light = false,
}) => (
  <motion.header
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ ...ANIMATION, duration: 0.7 }}
    className="text-center max-w-3xl mx-auto mb-16"
  >
    <span
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-6 ${
        light
          ? "bg-white/10 text-white border-white/20"
          : "bg-navy-dark/5 text-navy-dark border-navy-dark/10"
      } border`}
    >
      {badgeIcon && (
        <i className={badgeIcon} style={{ color: BRAND.gold.primary }} />
      )}
      {badge}
    </span>

    <h2
      className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight ${
        light ? "text-white" : "text-navy-dark"
      }`}
      style={light ? {} : { color: BRAND.navy.dark }}
    >
      {title}{" "}
      {highlight && (
        <span
          className="text-gold-gradient"
          style={{
            backgroundImage: BRAND.gold.gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {highlight}
        </span>
      )}
    </h2>

    {description && (
      <p
        className={`text-lg leading-relaxed ${light ? "text-white/70" : "text-slate-500"}`}
      >
        {description}
      </p>
    )}
  </motion.header>
);

// --- Service Card Component ---
const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * ANIMATION.stagger, ...ANIMATION.spring }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group h-full"
    >
      <div
        className="relative h-full rounded-3xl overflow-hidden p-8 lg:p-10 pt-16 transition-all duration-700"
        style={{
          background: isHovered
            ? "linear-gradient(135deg, #081C34 0%, #0D2747 50%, #163B66 100%)"
            : "linear-gradient(135deg, #0A1A2F 0%, #102B4C 50%, #163B66 100%)",
          border: isHovered
            ? "1px solid rgba(253,185,19,0.25)"
            : "1px solid rgba(255,255,255,0.06)",
          boxShadow: isHovered
            ? "0 30px 80px rgba(8,28,52,0.45)"
            : "0 10px 35px rgba(8,28,52,0.15)",
        }}
      >
        {/* Top Accent Line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[3px] origin-left"
          style={{ background: "linear-gradient(90deg, #FDB913, transparent)" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Glow Orb */}
        <div
          className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
          style={{ background: service.color }}
        />

        {/* Badges */}
        <div className="absolute top-5 right-5 z-20">
          <StatusBadge status={service.status} />
        </div>
        <div className="absolute top-5 left-5 z-20">
          <CategoryBadge category={service.category} color={service.color} />
        </div>

        {/* Icon */}
        <motion.div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
          whileHover={{ rotate: [0, -8, 8, 0] }}
          transition={{ duration: 0.5 }}
          style={{
            background: `${service.color}15`,
            border: `1px solid ${service.color}25`,
          }}
        >
          <service.icon className="text-2xl" style={{ color: service.color }} />
        </motion.div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
        <p className="text-sm leading-relaxed mb-6 text-white/70">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-3">
          {service.features.map((feature, idx) => (
            <motion.li
              key={idx}
              className="flex items-center gap-2.5 text-sm text-white/80"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.2 }}
            >
              <FaCheckCircle
                className="text-xs flex-shrink-0"
                style={{ color: BRAND.gold.primary }}
              />
              {feature}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

// --- Technology Card Component ---
const TechCard = ({ tech, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08, ...ANIMATION.spring }}
    whileHover={{ y: -10, scale: 1.05 }}
    className="group relative p-6 rounded-2xl text-center cursor-default bg-white shadow-sm hover:shadow-xl overflow-hidden"
    style={{ border: "1px solid rgba(11,29,51,0.08)" }}
  >
    {/* Hover Glow */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        background: `linear-gradient(135deg, ${BRAND.gold.primary}08, transparent)`,
      }}
    />

    <motion.div
      className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center relative z-10"
      whileHover={{ scale: 1.15, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{
        background: `${BRAND.gold.primary}12`,
        border: `1px solid ${BRAND.gold.primary}25`,
      }}
    >
      <tech.icon className="text-2xl" style={{ color: tech.color }} />
    </motion.div>

    <h4
      className="font-bold text-sm relative z-10"
      style={{ color: BRAND.navy.dark }}
    >
      {tech.name}
    </h4>
    <p className="text-[10px] text-gray-400 mt-1 relative z-10">{tech.desc}</p>
  </motion.div>
);

// --- Process Step Component ---
const ProcessStep = ({ step, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15, ...ANIMATION.spring }}
    className="group relative rounded-3xl p-8 overflow-hidden"
    style={{
      background: "rgba(255,255,255,0.04)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255,255,255,0.08)",
    }}
  >
    {/* Top Accent on Hover */}
    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FDB913] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Step Number */}
    <div className="absolute top-6 right-6 text-6xl font-black text-white/[0.03] select-none">
      {String(step.step).padStart(2, "0")}
    </div>

    {/* Icon */}
    <motion.div
      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
      style={{
        background: BRAND.gold.primary,
        boxShadow: `0 10px 30px ${BRAND.gold.primary}40`,
      }}
      whileHover={{ scale: 1.1, rotate: 6 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <step.icon className="text-2xl" style={{ color: BRAND.navy.dark }} />
    </motion.div>

    {/* Content */}
    <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
    <p
      className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-4"
      style={{ color: BRAND.gold.primary }}
    >
      {step.subtitle}
    </p>
    <p className="text-sm leading-relaxed text-white/65">{step.description}</p>

    {/* Glow Effect */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FDB913]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
  </motion.div>
);

// --- Benefit Card Component ---
const BenefitCard = ({ benefit, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.12, ...ANIMATION.spring }}
    whileHover={{ y: -8 }}
    className="group relative p-6 rounded-2xl overflow-hidden"
    style={{
      background:
        "linear-gradient(135deg, #081C34 0%, #102B4C 50%, #163B66 100%)",
      border: "1px solid rgba(255,255,255,0.08)",
    }}
  >
    {/* Radial Glow */}
    <div
      className="absolute top-0 right-0 w-36 h-36 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        background: `radial-gradient(circle, ${BRAND.gold.primary}15, transparent 70%)`,
      }}
    />

    <div className="relative z-10 flex items-start gap-4">
      <motion.div
        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
        whileHover={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.5 }}
        style={{
          background: `${BRAND.gold.primary}12`,
          border: `1px solid ${BRAND.gold.primary}25`,
        }}
      >
        <benefit.icon
          className="text-xl"
          style={{ color: BRAND.gold.primary }}
        />
      </motion.div>
      <div>
        <h4 className="font-bold text-base mb-2 text-white">{benefit.title}</h4>
        <p className="text-sm leading-relaxed text-white/70">
          {benefit.description}
        </p>
      </div>
    </div>
  </motion.div>
);

// --- Metric Card Component ---
const MetricCard = ({ metric, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, ...ANIMATION.spring }}
    whileHover={{ y: -4, scale: 1.02 }}
    className="text-center p-4 rounded-xl cursor-default"
    style={{ background: "rgba(255,255,255,0.05)" }}
  >
    <metric.icon
      className="mx-auto mb-2"
      style={{ color: metric.color, fontSize: "18px" }}
    />
    <div className="text-2xl font-black text-white">{metric.value}</div>
    <div className="text-[10px] text-white/50 font-medium mt-1">
      {metric.label}
    </div>
  </motion.div>
);

// --- Testimonial Card Component ---
const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15, ...ANIMATION.spring }}
    whileHover={{ y: -8 }}
    className="p-8 lg:p-10 rounded-3xl relative overflow-hidden"
    style={{
      background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
      border: "1px solid rgba(255,255,255,0.08)",
    }}
  >
    <FaQuoteLeft
      className="text-4xl mb-5 block"
      style={{ color: `${BRAND.gold.primary}40` }}
    />
    <p className="text-white/90 leading-relaxed mb-8 text-base italic">
      "{testimonial.quote}"
    </p>

    <div
      className="flex items-center gap-4 pt-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
        style={{ background: BRAND.gold.gradient }}
      >
        {testimonial.initials}
      </div>
      <div>
        <div className="text-white font-semibold">{testimonial.author}</div>
        <div className="text-white/50 text-sm">
          {testimonial.role}, {testimonial.company}
        </div>
      </div>
    </div>
  </motion.div>
);

// ============================================================================
// SECTION COMPONENTS
// ============================================================================

// --- Hero Section Component ---
const HeroSection = () => (
  <section
    className="relative min-h-screen flex items-center overflow-hidden py-20 lg:py-10"
    style={{
      background: `linear-gradient(160deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 45%, ${BRAND.navy.light} 80%, ${BRAND.navy.lighter} 100%)`,
    }}
  >
    {/* Background Effects */}
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />

      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[10%] w-[450px] h-[450px] rounded-full blur-[100px] opacity-[0.07]"
        style={{ background: "#8B5CF6" }}
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-[15%] left-[5%] w-[350px] h-[350px] rounded-full blur-[80px] opacity-[0.05]"
        style={{ background: BRAND.gold.primary }}
      />
    </div>

    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-8">
            <motion.div
              className="w-14 h-14 rounded-xl flex items-center justify-center"
              whileHover={{ rotate: 12 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                background: `${BRAND.gold.primary}15`,
                border: `1px solid ${BRAND.gold.primary}30`,
              }}
            >
              <FaMicrochip
                className="text-2xl"
                style={{ color: BRAND.gold.primary }}
              />
            </motion.div>
            <span
              className="text-sm font-bold uppercase tracking-[0.25em]"
              style={{ color: BRAND.gold.primary }}
            >
              Core Engineering & AI Division
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.08] mb-8">
            Next-Gen{" "}
            <span
              className="text-gold-gradient"
              style={{
                backgroundImage: BRAND.gold.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Engineering
            </span>{" "}
            &{" "}
            <span
              className="text-gold-gradient"
              style={{
                backgroundImage: BRAND.gold.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI Solutions
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 max-w-xl">
            Harness the transformative power of artificial intelligence,
            advanced engineering practices, and intelligent automation.
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-10 max-w-xl">
            From AI-powered development to enterprise-grade quality assurance,
            we deliver cutting-edge solutions that drive innovation.
          </p>

          {/* Live Indicator */}
          <div className="mb-10">
            <LiveIndicator />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <motion.a
              href="/contact"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-5 rounded-xl font-bold text-lg inline-flex items-center gap-3 transition-all duration-300"
              style={{
                background: BRAND.gold.gradient,
                color: BRAND.navy.dark,
                boxShadow: `0 10px 40px ${BRAND.gold.primary}35`,
              }}
            >
              Start Your Project <FaArrowRight className="text-sm" />
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-5 rounded-xl font-semibold text-lg inline-flex items-center gap-3 border-2 transition-all duration-300"
              style={{ borderColor: "rgba(255,255,255,0.2)", color: "white" }}
            >
              Explore Services
            </motion.a>
          </div>

          {/* Trust Indicators */}
          {/* <div
            className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            {[
              { icon: FaBrain, text: "ML/AI Expertise", sub: "Deep Learning" },
              { icon: FaCode, text: "200+ Engineers", sub: "Global Team" },
              { icon: FaVial, text: "QA Excellence", sub: "95%+ Coverage" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: `${BRAND.gold.primary}12` }}
                >
                  <item.icon
                    className="text-base"
                    style={{ color: BRAND.gold.primary }}
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    {item.text}
                  </div>
                  <div className="text-xs text-white/50">{item.sub}</div>
                </div>
              </div>
            ))}
          </div> */}
        </motion.div>

        {/* Right Dashboard Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
            style={{
              background: `linear-gradient(145deg, ${BRAND.navy.light}, ${BRAND.navy.mid})`,
              border: "1px solid rgba(139,92,246,0.25)",
            }}
          >
            {/* Dashboard Mock Content */}
            <div className="absolute inset-0 p-6 flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-white/35 font-mono">
                    AI Engineering Suite v3.2
                  </span>
                </div>
                <div
                  className="flex items-center gap-2 px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(139,92,246,0.18)",
                    border: "1px solid rgba(139,92,246,0.3)",
                  }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-purple-400"
                  />
                  <span className="text-[9px] font-semibold text-purple-300 uppercase">
                    AI Active
                  </span>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 mb-4">
                {["Machine Learning", "DevOps Pipeline", "Test Automation"].map(
                  (tab, i) => (
                    <div
                      key={tab}
                      className={`px-4 py-2 rounded-lg text-[11px] font-semibold ${i === 0 ? "bg-purple-500/20 text-purple-300 border border-purple-500/30" : "bg-white/5 text-white/50 border border-white/10"}`}
                    >
                      {tab}
                    </div>
                  ),
                )}
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-4 gap-3 mb-4">
                {[
                  {
                    label: "AI Models",
                    value: "147",
                    change: "+12 wk",
                    color: "#10B981",
                  },
                  {
                    label: "Coverage",
                    value: "94.7%",
                    change: "+2.3%",
                    color: "#3B82F6",
                  },
                  {
                    label: "Deploys",
                    value: "2,847",
                    change: "99.9%",
                    color: "#10B981",
                  },
                  {
                    label: "Quality",
                    value: "A+",
                    change: "Excellent",
                    color: "#FDB913",
                  },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="p-3 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="text-[9px] text-white/35 uppercase tracking-wider mb-1">
                      {m.label}
                    </div>
                    <div className="text-lg font-black text-white">
                      {m.value}
                    </div>
                    <div
                      className="text-[10px] font-medium"
                      style={{ color: m.color }}
                    >
                      {m.change}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart Area */}
              <div
                className="flex-1 rounded-xl p-4 mb-4 relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <svg
                  viewBox="0 0 400 80"
                  className="w-full h-20"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="chartGrad"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor="#8B5CF6"
                        stopOpacity="0.35"
                      />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,65 Q30,55 60,58 T120,42 T180,48 T240,32 T300,38 T360,22 T400,15"
                    fill="url(#chartGrad)"
                    stroke="#8B5CF6"
                    strokeWidth="2.5"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
                <motion.div
                  animate={{ cx: [0, 380] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/3 right-1/4 w-2.5 h-2.5 rounded-full"
                  style={{
                    background: "#8B5CF6",
                    boxShadow: "0 0 15px #8B5CF6",
                  }}
                />
              </div>

              {/* Bottom Panels */}
              <div className="grid grid-cols-2 gap-3">
                <div
                  className="p-3 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="text-[9px] text-white/35 uppercase tracking-wider mb-2">
                    Activities
                  </div>
                  {["Model v3.2 deployed", "Training completed"].map((a, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 mb-2 last:mb-0"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full mt-1.5 ${i === 0 ? "bg-emerald-400" : "bg-blue-400"}`}
                      />
                      <span className="text-[10px] text-white/75">{a}</span>
                    </div>
                  ))}
                </div>
                <div
                  className="p-3 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="text-[9px] text-white/35 uppercase tracking-wider mb-2">
                    Health
                  </div>
                  {[
                    { n: "ML Pipeline", v: 98 },
                    { n: "CI/CD", v: 99 },
                  ].map((s) => (
                    <div key={s.n} className="mb-2 last:mb-0">
                      <div className="flex justify-between text-[9px] mb-1">
                        <span className="text-white/40">{s.n}</span>
                        <span className="font-semibold text-white/70">
                          {s.v}%
                        </span>
                      </div>
                      <div
                        className="h-1.5 rounded-full overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.1)" }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.v}%` }}
                          className="h-full rounded-full"
                          style={{
                            background: s.v > 98 ? "#10B981" : "#8B5CF6",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-5 shadow-xl z-20"
              style={{ border: "2px solid #8B5CF6" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(139,92,246,0.12)" }}
                >
                  <FaBrain className="text-xl" style={{ color: "#8B5CF6" }} />
                </div>
                <div>
                  <div
                    className="text-lg font-black"
                    style={{ color: BRAND.navy.dark }}
                  >
                    AI Ready
                  </div>
                  <div className="text-xs text-gray-500">Production Grade</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

// --- Services Section Component ---
const ServicesSection = () => (
  <section
    id="services"
    className="py-10 lg:py-12 bg-white relative overflow-hidden"
  >
    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      <SectionHeader
        badge="Comprehensive Service Portfolio"
        badgeIcon="fas fa-cogs"
        title="End-to-End"
        highlight="Engineering & AI Capabilities"
        description="Full lifecycle services spanning AI/ML development, software engineering, DevOps automation, and enterprise-grade quality assurance."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  </section>
);

// --- Technologies Section Component ---
const TechnologiesSection = () => (
  <section className="py-10 lg:py-12 bg-gray-50 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <SectionHeader
        badge="Technology Stack"
        badgeIcon="fas fa-layer-group"
        title="Technologies We"
        highlight="Master"
        description="Cutting-edge tools, frameworks, and platforms powering our engineering excellence."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-5">
        {technologies.map((tech, index) => (
          <TechCard key={tech.name} tech={tech} index={index} />
        ))}
      </div>
    </div>
  </section>
);

// --- Process Section Component ---
const ProcessSection = () => (
  <section className="py-10 lg:py-12 bg-primary-800  relative overflow-hidden">
    <div
      className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.08]"
      style={{ background: BRAND.gold.primary }}
    />

    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      <SectionHeader
        badge="Our Methodology"
        badgeIcon="fas fa-route"
        title="Proven"
        highlight="Delivery Framework"
        description="Agile-driven approach ensuring quality delivery on every project, from concept to production and beyond."
        light={true}
      />

      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-4 gap-6 lg:gap-8">
        {processSteps.map((step, index) => (
          <ProcessStep key={step.step} step={step} index={index} />
        ))}
      </div>

      {/* Mobile Timeline */}
      <div className="lg:hidden space-y-8">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, ...ANIMATION.spring }}
            className="flex gap-5"
          >
            <div className="flex flex-col items-center flex-shrink-0">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                style={{
                  background: BRAND.gold.primary,
                  boxShadow: `0 10px 30px ${BRAND.gold.primary}40`,
                }}
              >
                <step.icon
                  className="text-lg"
                  style={{ color: BRAND.navy.dark }}
                />
              </div>
              {index < processSteps.length - 1 && (
                <div className="w-0.5 flex-1 mt-3 rounded-full bg-gradient-to-b from-[#FDB913] to-transparent" />
              )}
            </div>
            <div className="pb-6">
              <h4 className="font-bold text-lg mb-1 text-white">
                {step.title}
              </h4>
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: BRAND.gold.primary }}
              >
                {step.subtitle}
              </p>
              <p className="text-sm leading-relaxed text-white/65">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- Benefits Section Component ---
const BenefitsSection = () => (
  <section className="py-10 lg:py-12 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 lg:order-1"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
            style={{
              background: `linear-gradient(145deg, ${BRAND.navy.dark}, ${BRAND.navy.light})`,
              border: `1px solid ${BRAND.gold.primary}20`,
            }}
          >
            <div className="absolute inset-0 p-8 flex flex-col justify-center">
              <div className="grid grid-cols-3 gap-4 h-full">
                {/* AI Panel */}
                <div
                  className="rounded-xl p-4 flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <FaBrain className="text-sm" style={{ color: "#8B5CF6" }} />
                    <span className="text-xs text-white/50 font-medium">
                      AI MODELS
                    </span>
                  </div>
                  <div className="flex-1 space-y-2">
                    {["NLP Engine", "Vision Model", "Predictive ML"].map(
                      (item, i) => (
                        <div
                          key={i}
                          className="p-2 rounded-lg"
                          style={{ background: "rgba(255,255,255,0.03)" }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] text-white/60">
                              {item}
                            </span>
                            <motion.span
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [1, 0.5, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.4,
                              }}
                              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                            />
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Center Rotating Element */}
                <div
                  className="rounded-xl p-4 flex flex-col items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
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
                          r="38"
                          fill="none"
                          stroke="rgba(139,92,246,0.3)"
                          strokeWidth="1"
                          strokeDasharray="4,4"
                        />
                        <circle cx="50" cy="12" r="4" fill="#8B5CF6" />
                        <circle cx="88" cy="50" r="4" fill="#3B82F6" />
                        <circle cx="50" cy="88" r="4" fill="#10B981" />
                        <circle cx="12" cy="50" r="4" fill="#FDB913" />
                        <circle
                          cx="50"
                          cy="50"
                          r="8"
                          fill={BRAND.gold.primary}
                        />
                      </svg>
                    </motion.div>
                  </div>
                  <div className="mt-auto text-center">
                    <div className="text-lg font-black text-white">
                      Integrated
                    </div>
                    <div className="text-[10px] text-white/40">Active</div>
                  </div>
                </div>

                {/* QA Panel */}
                <div
                  className="rounded-xl p-4 flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <FaVial className="text-sm" style={{ color: "#10B981" }} />
                    <span className="text-xs text-white/50 font-medium">
                      TEST SUITE
                    </span>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[
                      { l: "Unit Tests", v: "1,247", c: 98 },
                      { l: "Integration", v: "486", c: 95 },
                      { l: "E2E Tests", v: "124", c: 92 },
                    ].map((t) => (
                      <div
                        key={t.l}
                        className="p-2 rounded-lg"
                        style={{ background: "rgba(255,255,255,0.03)" }}
                      >
                        <div className="flex justify-between text-[10px] mb-1">
                          <span className="text-white/40">{t.l}</span>
                          <span className="font-bold text-emerald-400">
                            {t.v}
                          </span>
                        </div>
                        <div
                          className="h-1 rounded-full overflow-hidden"
                          style={{ background: "rgba(255,255,255,0.1)" }}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${t.c}%` }}
                            className="h-full rounded-full"
                            style={{ background: "#10B981" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status Bar */}
              <div
                className="mt-4 flex items-center justify-between px-4 py-3 rounded-xl"
                style={{
                  background: `${BRAND.gold.primary}10`,
                  border: `1px solid ${BRAND.gold.primary}20`,
                }}
              >
                <div className="flex items-center gap-2">
                  <motion.span
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full"
                    style={{ background: BRAND.gold.primary }}
                  />
                  <span
                    className="text-xs font-semibold"
                    style={{ color: BRAND.gold.primary }}
                  >
                    All Systems Optimized
                  </span>
                </div>
                <span className="text-[10px] text-white/30">Real-time</span>
              </div>
            </div>

            {/* Floating Award Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-5 shadow-xl z-20"
              style={{ border: "2px solid #8B5CF6" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(139,92,246,0.12)" }}
                >
                  <FaTrophy className="text-xl" style={{ color: "#8B5CF6" }} />
                </div>
                <div>
                  <div
                    className="text-lg font-black"
                    style={{ color: BRAND.navy.dark }}
                  >
                    Award Winning
                  </div>
                  <div className="text-[10px] text-gray-500">
                    Engineering Excellence
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <span
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-6"
            style={{
              background: `${BRAND.navy.dark}05`,
              color: BRAND.navy.dark,
              border: `1px solid ${BRAND.navy.dark}10`,
            }}
          >
            <FaStar className="text-gold-primary" /> Strategic Advantages
          </span>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{ color: BRAND.navy.dark }}
          >
            The{" "}
            <span
              className="text-gold-gradient"
              style={{
                backgroundImage: BRAND.gold.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Competitive Edge
            </span>{" "}
            of Our Engineering Excellence
          </h2>

          <p
            className="text-lg leading-relaxed mb-10"
            style={{ color: "#64748B" }}
          >
            We combine deep technical expertise with innovative approaches and
            industry best practices to deliver solutions that drive measurable
            business outcomes.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {benefitsData.map((benefit, index) => (
              <BenefitCard
                key={benefit.title}
                benefit={benefit}
                index={index}
              />
            ))}
          </div>

          {/* Metrics Box */}
          <div
            className="p-6 sm:p-8 rounded-2xl"
            style={{
              background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
            }}
          >
            <h4 className="text-white font-bold mb-5 flex items-center gap-2 text-lg">
              <FaStarOfDavid
                className="text-sm"
                style={{ color: BRAND.gold.primary }}
              />{" "}
              Our Proven Track Record
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {metricsData.map((metric, index) => (
                <MetricCard key={metric.label} metric={metric} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// --- Testimonials Section Component ---
const TestimonialsSection = () => (
  <section className="py-10 lg:py-12 bg-gray-50 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <SectionHeader
        badge="Client Success Stories"
        badgeIcon="fas fa-quote-left"
        title="Trusted by"
        highlight="Industry Leaders"
        description="Hear what our clients say about partnering with us."
      />

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.author}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </div>
    </div>
  </section>
);

// --- CTA Section Component ---
const CTASection = () => (
  <section
    className="py-20 lg:py-32 relative overflow-hidden"
    style={{
      background: `linear-gradient(160deg, ${BRAND.navy.dark} 0%, #0A1628 40%, ${BRAND.navy.mid} 100%)`,
    }}
  >
    {/* Background Effects */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }}
    />
    <motion.div
      animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[10%] left-[15%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-[0.07]"
      style={{ background: "#8B5CF6" }}
    />
    <motion.div
      animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 3,
      }}
      className="absolute bottom-[15%] right-[15%] w-[450px] h-[450px] rounded-full blur-[120px] opacity-[0.06]"
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
            background: `${BRAND.gold.primary}12`,
            border: `2px solid ${BRAND.gold.primary}30`,
          }}
        >
          <FaRocket
            className="text-4xl"
            style={{ color: BRAND.gold.primary }}
          />
        </motion.div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-8">
          Ready to{" "}
          <span
            className="text-gold-gradient"
            style={{
              backgroundImage: BRAND.gold.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Engineer the Future
          </span>{" "}
          Together?
        </h2>

        <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
          Let our expert engineers help you build AI-powered solutions, automate
          your entire testing infrastructure, and accelerate your digital
          transformation journey.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14">
          <motion.a
            href="/contact"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.97 }}
            className="px-12 py-6 rounded-xl font-bold text-lg inline-flex items-center gap-3 relative overflow-hidden group"
            style={{
              background: BRAND.gold.gradient,
              color: BRAND.navy.dark,
              boxShadow: `0 10px 40px ${BRAND.gold.primary}40`,
            }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Start Your Project{" "}
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </span>
            <div
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              }}
            />
          </motion.a>

          <motion.a
            href="/contact"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-6 rounded-xl font-bold text-lg inline-flex items-center gap-3 border-2"
            style={{ borderColor: "rgba(255,255,255,0.2)", color: "white" }}
          >
            <FaPlayCircle
              className="text-xl"
              style={{ color: BRAND.gold.primary }}
            />{" "}
            Watch Demo
          </motion.a>
        </div>

        {/* Trust Items */}
        <div
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 pt-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          {[
            { icon: FaSearchPlus, text: "Free Assessment" },
            { icon: FaFlask, text: "Proof of Concept" },
            { icon: FaHandshake, text: "Flexible Engagement" },
            { icon: FaHeadset, text: "24/7 Support" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-white/60">
              <item.icon
                className="text-sm"
                style={{ color: BRAND.gold.primary }}
              />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

const EngineeringAIPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("active"),
        ),
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <TechnologiesSection />
      <ProcessSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
};

export default EngineeringAIPage;
