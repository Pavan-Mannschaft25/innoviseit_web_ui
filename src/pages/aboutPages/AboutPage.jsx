import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGlobeAmericas,
  FaLightbulb,
  FaRocket,
  FaUsers,
  FaHandshake,
  FaShieldAlt,
  FaChartLine,
  FaCogs,
  FaCheckCircle,
  FaQuoteLeft,
  FaArrowRight,
  FaStar,
  FaHeart,
  FaAward,
  FaBullseye,
  FaEye,
  FaSearch,
  FaPencilRuler,
  FaShippingFast,
  FaHeadset,
  FaDatabase,
  FaLaptopCode,
  FaTools,
  FaUserTie,
  FaIndustry,
  FaCloud,
} from "react-icons/fa";
import banner from "../../assets/banners/about.png";

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

// ==================== SERVICES DATA ====================
const servicesData = [
  {
    id: 1,
    icon: FaCloud,
    title: "SAP Consulting & Implementation",
    description:
      "Driving intelligent enterprise transformation with SAP S/4HANA and next-generation ERP solutions.",
    features: [
      "SAP S/4HANA Migration",
      "Business Process Optimization",
      "Custom Development",
    ],
    color: "#FDB913",
  },
  {
    id: 2,
    icon: FaCogs,
    title: "Application Maintenance Services",
    description:
      "24/7 monitoring, support, and continuous optimization of your enterprise applications.",
    features: [
      "Proactive Monitoring",
      "Performance Tuning",
      "Incident Management",
    ],
    color: "#FFC107",
  },
  {
    id: 3,
    icon: FaLaptopCode,
    title: "Testing & Quality Assurance",
    description:
      "Ensuring performance, reliability, and scalability through rigorous testing methodologies.",
    features: ["Automated Testing", "Performance Testing", "Security Audits"],
    color: "#F59E0B",
  },
  {
    id: 4,
    icon: FaDatabase,
    title: "Data Migration & Transformation",
    description:
      "Modernizing legacy systems and enabling data-driven decisions with advanced analytics.",
    features: ["Legacy Modernization", "ETL Processes", "Data Governance"],
    color: "#EAB308",
  },
  {
    id: 5,
    icon: FaTools,
    title: "Project Remediation",
    description:
      "Recovering and stabilizing underperforming initiatives to get projects back on track.",
    features: ["Risk Assessment", "Recovery Planning", "Stabilization"],
    color: "#CA8A04",
  },
  {
    id: 6,
    icon: FaUserTie,
    title: "Staff Augmentation",
    description:
      "Providing skilled experts on demand to supplement your team with specialized talent.",
    features: ["Expert Consultants", "Flexible Engagement", "Quick Onboarding"],
    color: "#A16207",
  },
];

// ==================== WHY CHOOSE US DATA ====================
const whyChooseUsData = [
  {
    icon: FaIndustry,
    title: "Domain Expertise",
    description:
      "Strong experience across multiple industries including manufacturing, retail, healthcare, and finance.",
  },
  {
    icon: FaCloud,
    title: "SAP-Centric Approach",
    description:
      "Deep specialization in SAP ecosystems with certified consultants and proven methodologies.",
  },
  {
    icon: FaHeart,
    title: "Client-First Mindset",
    description:
      "Focused on delivering measurable outcomes that align with your business objectives.",
  },
  {
    icon: FaChartLine,
    title: "Scalable Solutions",
    description:
      "Built for performance, flexibility, and growth—adapting to your evolving needs.",
  },
  {
    icon: FaRocket,
    title: "End-to-End Delivery",
    description:
      "From consulting to implementation and ongoing support—we're with you every step.",
  },
];

// ==================== APPROACH STEPS DATA ====================
const approachSteps = [
  {
    step: 1,
    icon: FaSearch,
    title: "Understand",
    subtitle: "Discovery Phase",
    description:
      "We analyze your business challenges, goals, and current landscape to identify opportunities for transformation.",
    activities: [
      "Business Analysis",
      "Requirement Gathering",
      "Gap Assessment",
    ],
  },
  {
    step: 2,
    icon: FaPencilRuler,
    title: "Design",
    subtitle: "Solution Architecture",
    description:
      "We create tailored, scalable solutions designed specifically for your unique business requirements.",
    activities: ["Solution Design", "Architecture Planning", "Prototyping"],
  },
  {
    step: 3,
    icon: FaShippingFast,
    title: "Deliver",
    subtitle: "Implementation",
    description:
      "We execute with precision and speed, ensuring seamless deployment and minimal disruption to operations.",
    activities: ["Development", "Testing", "Deployment"],
  },
  {
    step: 4,
    icon: FaHeadset,
    title: "Support",
    subtitle: "Continuous Improvement",
    description:
      "We ensure continuous improvement and success through ongoing monitoring, optimization, and support.",
    activities: ["Monitoring", "Optimization", "Training"],
  },
];

const companyStats = [
  {
    icon: FaUsers,
    value: "300+",
    label: "Expert Professionals",
    description: "Certified consultants and engineers",
  },
  {
    icon: FaAward,
    value: "15+",
    label: "Years of Excellence",
    description: "Delivering enterprise solutions",
  },
  {
    icon: FaGlobeAmericas,
    value: "20+",
    label: "Countries Served",
    description: "Global delivery capabilities",
  },
  {
    icon: FaHandshake,
    value: "98%",
    label: "Client Retention",
    description: "Long-term trusted partnerships",
  },
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
      className="group relative h-full"
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
            ? `0 25px 60px ${BRAND.navy.dark}30, 0 0 40px ${BRAND.gold.primary}15`
            : "0 4px 20px rgba(0,0,0,0.04)",
        }}
      >
        {/* Background Pattern for Hover */}
        {isHovered && (
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />
        )}

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
            background: `radial-gradient(circle at top right, ${BRAND.gold.primary}20, transparent 70%)`,
            borderRadius: "0 16px 0 0",
          }}
        />

        {/* Content */}
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
            transition={{ duration: 0.5 }}
          >
            <service.icon
              className="text-2xl transition-colors"
              style={{ color: BRAND.gold.primary }}
            />
          </motion.div>

          {/* Title */}
          <h3
            className="text-xl lg:text-2xl font-bold mb-3 transition-colors duration-300"
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

          {/* Features */}
          <ul className="space-y-2">
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
            className="flex items-center gap-2 mt-6 pt-4 transition-all duration-300 group-hover:gap-3"
            style={{
              borderTop: `1px solid ${isHovered ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.05)"}`,
            }}
          >
            <span
              className="text-xs font-bold uppercase tracking-wider transition-colors"
              style={{ color: BRAND.gold.primary }}
            >
              Learn More
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

// Approach Step Component
const ApproachStep = ({ step, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.15,
        duration: ANIMATION.duration,
        ...ANIMATION.spring,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center gap-8 lg:gap-16`}
    >
      {/* Content Card */}
      <div className="flex-1">
        <motion.div
          className="p-8 lg:p-10 rounded-2xl transition-all duration-500 text-white bg-primary-800"
          style={{
            border: `1px solid ${isHovered ? `${BRAND.gold.primary}30` : "rgba(0,0,0,0.06)"}`,
            boxShadow: isHovered
              ? `0 20px 50px ${BRAND.navy.dark}25`
              : "0 4px 20px rgba(0,0,0,0.04)",
            transform: isHovered ? "scale(1.02)" : "scale(1)",
          }}
        >
          {/* Step Number & Icon */}
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-xl font-black"
              style={{
                background: isHovered
                  ? BRAND.gold.gradient
                  : `${BRAND.gold.primary}10`,
                color: isHovered ? BRAND.navy.dark : BRAND.gold.primary,
                border: `2px solid ${isHovered ? "transparent" : `${BRAND.gold.primary}30`}`,
              }}
              whileHover={{ scale: 1.1 }}
            >
              {step.step}
            </motion.div>

            <div>
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="text-sm font-medium">{step.subtitle}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-base leading-relaxed mb-6">{step.description}</p>

          {/* Activities */}
          <div className="space-y-2">
            {step.activities.map((activity, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <FaCheckCircle
                  className="text-sm flex-shrink-0"
                  style={{ color: BRAND.gold.primary }}
                />
                <span className="text-sm font-medium">{activity}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Center Visual - Step Icon Circle */}
      <div className="hidden lg:flex flex-col items-center relative z-10">
        <motion.div
          className="w-20 h-20 rounded-full flex items-center justify-center relative"
          style={{
            background: BRAND.gold.gradient,
            boxShadow: `0 10px 40px ${BRAND.gold.primary}40`,
          }}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
        >
          <step.icon className="text-2xl text-white" />

          {/* Pulse Ring */}
          {isHovered && (
            <motion.div
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute inset-0 rounded-full"
              style={{ border: `2px solid ${BRAND.gold.primary}` }}
            />
          )}
        </motion.div>

        {/* Connector Line (except last) */}
        {index < approachSteps.length - 1 && (
          <div
            className="w-0.5 h-16 mt-4"
            style={{
              background: `linear-gradient(to bottom, ${BRAND.gold.primary}, transparent)`,
            }}
          />
        )}
      </div>

      {/* Spacer for alignment */}
      <div className="flex-1 hidden lg:block" />
    </motion.div>
  );
};

// ==================== SECTIONS ====================

// Hero Section Component
const HeroSection = () => (
  <section
    className="relative py-8 lg:py-12 h-[70vh] overflow-hidden"
    style={{
      background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 50%, ${BRAND.navy.lighter} 100%)`,
    }}
  >
    {/* Background Elements */}
    <div className="absolute inset-0" aria-hidden="true">
      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.08]"
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
        className="absolute bottom-20 left-20 w-[400px] h-[400px] rounded-full blur-3xl opacity-[0.06]"
        style={{ background: BRAND.navy.lighter }}
      />

      {/* Geometric Shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-10 w-64 h-64 border border-white/5 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-10 w-96 h-96 border border-white/5 rounded-full"
      />
    </div>

    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <span
            className="w-12 h-[2px]"
            style={{ background: BRAND.gold.gradient }}
          />
          <span
            className="text-sm font-bold uppercase tracking-[0.25em]"
            style={{ color: BRAND.gold.primary }}
          >
            About Innovise IT
          </span>
          <span
            className="w-12 h-[2px]"
            style={{ background: BRAND.gold.gradient }}
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-6"
        >
          Your Partner in{" "}
          <span
            style={{
              backgroundImage: BRAND.gold.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Enterprise Transformation
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12"
        >
          A forward-thinking enterprise technology partner helping organizations
          modernize, transform, and scale in a rapidly evolving digital world.
        </motion.p>
      </div>
    </div>
  </section>
);

// Who We Are Section (2-Column Layout)
const WhoWeAreSection = () => (
  <section className="py-8 lg:py-10 bg-white relative overflow-hidden">
    {/* Background Decoration */}
    <div
      className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl opacity-[0.03] translate-x-1/3 -translate-y-1/3"
      style={{ background: BRAND.navy.lighter }}
    />

    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column - Visual/Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span
            className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
            style={{
              background: `${BRAND.navy.mid}08`,
              color: BRAND.navy.dark,
              border: `1px solid ${BRAND.navy.mid}15`,
            }}
          >
            Who We Are
          </span>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{ color: BRAND.navy.dark }}
          >
            A Team of <span style={{ color: BRAND.gold.primary }}>Experts</span>{" "}
            Committed to{" "}
            <span style={{ color: BRAND.gold.primary }}>Excellence</span>
          </h2>

          <p
            className="text-lg leading-relaxed mb-6"
            style={{ color: "#64748B" }}
          >
            We are a team of experienced consultants, engineers, and
            problem-solvers committed to delivering reliable and scalable
            enterprise solutions.
          </p>

          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "#94A3B8" }}
          >
            Our global delivery approach ensures seamless execution, faster
            turnaround, and consistent quality across all projects. From
            strategy to implementation and ongoing support, we partner with
            clients at every stage of their transformation journey.
          </p>

          {/* Key Highlights */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: FaGlobeAmericas, text: "Global Delivery Model" },
              { icon: FaShieldAlt, text: "Enterprise Security" },
              { icon: FaChartLine, text: "Proven Methodologies" },
              { icon: FaUsers, text: "Expert Consultants" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-xl"
                style={{
                  background: `${BRAND.navy.dark}03`,
                  border: `1px solid ${BRAND.navy.dark}08`,
                }}
              >
                <item.icon
                  className="text-lg flex-shrink-0"
                  style={{ color: BRAND.gold.primary }}
                />
                <span
                  className="text-sm font-semibold"
                  style={{ color: BRAND.navy.dark }}
                >
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Image/Visual Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Main Visual Container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-primary-800">
            {/* Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: "24px 24px",
              }}
            />

            {/* Content Inside Visual */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaGlobeAmericas
                  className="text-7xl md:text-8xl mb-6 opacity-40"
                  style={{ color: BRAND.gold.primary }}
                />
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
                Global Team
              </h3>
              <p className="text-white/50 text-center text-sm">
                Experts Across Continents
              </p>

              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                  <div
                    className="text-xl font-black"
                    style={{ color: BRAND.gold.primary }}
                  >
                    300+
                  </div>
                  <div className="text-xs text-white/60">Consultants</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                  <div
                    className="text-xl font-black"
                    style={{ color: BRAND.gold.primary }}
                  >
                    15+
                  </div>
                  <div className="text-xs text-white/60">Countries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div
            className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl -z-10"
            style={{ background: `${BRAND.gold.primary}20` }}
          />
          <div
            className="absolute -top-4 -left-4 w-24 h-24 rounded-full -z-10"
            style={{ background: `${BRAND.navy.lighter}30` }}
          />
        </motion.div>
      </div>
    </div>
  </section>
);

// Services Grid Section
const ServicesSection = () => (
  <section className="py-6 lg:py-12 bg-gray-50 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      {/* Section Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
      >
        <span
          className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
          style={{
            background: `${BRAND.navy.mid}08`,
            color: BRAND.navy.dark,
            border: `1px solid ${BRAND.navy.mid}15`,
          }}
        >
          What We Do
        </span>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          style={{ color: BRAND.navy.dark }}
        >
          End-to-End{" "}
          <span style={{ color: BRAND.gold.primary }}>Enterprise Services</span>
        </h2>

        <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
          We specialize in delivering comprehensive enterprise solutions
          tailored to complex business needs.
        </p>
      </motion.header>

      {/* Services Grid - 3 columns on large screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  </section>
);

const CompanyStatsSection = () => (
  <section className="py-20 bg-gray-50 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <motion.div
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
            border: `1px solid ${BRAND.gold.primary}25`,
          }}
        >
          Company At A Glance
        </span>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          style={{ color: BRAND.navy.dark }}
        >
          Trusted By Businesses
          <span style={{ color: BRAND.gold.primary }}> Worldwide</span>
        </h2>

        <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
          Delivering enterprise solutions with expertise, innovation, and
          measurable results.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {companyStats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div
              className="bg-white rounded-3xl p-8 text-center h-full transition-all duration-500"
              style={{
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: `${BRAND.gold.primary}12`,
                  border: `2px solid ${BRAND.gold.primary}25`,
                }}
              >
                <item.icon
                  className="text-2xl"
                  style={{ color: BRAND.gold.primary }}
                />
              </div>

              <h3
                className="text-4xl font-black mb-2"
                style={{ color: BRAND.navy.dark }}
              >
                {item.value}
              </h3>

              <h4
                className="text-lg font-bold mb-2"
                style={{ color: BRAND.navy.dark }}
              >
                {item.label}
              </h4>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "#64748B" }}
              >
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Mission & Vision Cards Section
const MissionVisionSection = () => (
  <section
    className="py-6 lg:py-12 relative overflow-hidden bg-primary-800"
    // style={{
    //   background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
    // }}
  >
    {/* Background Pattern */}
    {/* <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }}
    /> */}

    {/* Decorative Orbs */}
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.06]"
      style={{ background: BRAND.gold.primary }}
    />

    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative"
        >
          <div
            className="p-10 lg:p-12 rounded-3xl h-full transition-all duration-500 hover:shadow-2xl"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: `1px solid rgba(255,255,255,0.08)`,
            }}
          >
            {/* Icon */}
            <motion.div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8"
              style={{
                background: `${BRAND.gold.primary}15`,
                border: `2px solid ${BRAND.gold.primary}30`,
              }}
              whileHover={{ rotate: [0, -10, 10, 0] }}
            >
              <FaBullseye
                className="text-3xl"
                style={{ color: BRAND.gold.primary }}
              />
            </motion.div>

            {/* Label */}
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
              style={{
                background: `${BRAND.gold.primary}15`,
                color: BRAND.gold.primary,
                border: `1px solid ${BRAND.gold.primary}25`,
              }}
            >
              Our Mission
            </span>

            {/* Title */}
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-snug">
              Empowering Businesses Through{" "}
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
            </h3>

            {/* Description */}
            <p className="text-lg text-white/70 leading-relaxed">
              To empower businesses with innovative technology solutions that
              simplify complexity, accelerate growth, and create long-term
              value.
            </p>

            {/* Decorative Element */}
            <div
              className="absolute bottom-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background: `radial-gradient(circle at bottom right, ${BRAND.gold.primary}10, transparent 70%)`,
              }}
            />
          </div>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group relative"
        >
          <div
            className="p-10 lg:p-12 rounded-3xl h-full transition-all duration-500 hover:shadow-2xl"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: `1px solid rgba(255,255,255,0.08)`,
            }}
          >
            {/* Icon */}
            <motion.div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8"
              style={{
                background: `${BRAND.gold.primary}15`,
                border: `2px solid ${BRAND.gold.primary}30`,
              }}
              whileHover={{ rotate: [0, 10, -10, 0] }}
            >
              <FaEye
                className="text-3xl"
                style={{ color: BRAND.gold.primary }}
              />
            </motion.div>

            {/* Label */}
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
              style={{
                background: `${BRAND.gold.primary}15`,
                color: BRAND.gold.primary,
                border: `1px solid ${BRAND.gold.primary}25`,
              }}
            >
              Our Vision
            </span>

            {/* Title */}
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-snug">
              A Trusted{" "}
              <span
                style={{
                  backgroundImage: BRAND.gold.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Global Technology Partner
              </span>
            </h3>

            {/* Description */}
            <p className="text-lg text-white/70 leading-relaxed">
              To be a trusted global technology partner recognized for
              excellence in enterprise transformation and digital innovation.
            </p>

            {/* Decorative Element */}
            <div
              className="absolute bottom-0 left-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background: `radial-gradient(circle at bottom left, ${BRAND.gold.primary}10, transparent 70%)`,
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Why Choose Us Section
const WhyChooseUsSection = () => (
  <section className="py-6 lg:py-12 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      {/* Section Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
      >
        <span
          className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
          style={{
            background: `${BRAND.gold.primary}15`,
            color: BRAND.navy.dark,
            border: `1px solid ${BRAND.gold.primary}30`,
          }}
        >
          Why Innovise IT
        </span>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          style={{ color: BRAND.navy.dark }}
        >
          The{" "}
          <span style={{ color: BRAND.gold.primary }}>Innovise Advantage</span>
        </h2>

        <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
          Discover what sets us apart and makes us the preferred choice for
          enterprise transformation.
        </p>
      </motion.header>

      {/* Advantages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {whyChooseUsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
              duration: ANIMATION.duration,
              ...ANIMATION.spring,
            }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div
              className="p-8 rounded-2xl h-full transition-all duration-500 hover:shadow-xl"
              style={{
                background: index % 2 === 0 ? "white" : `${BRAND.navy.dark}`,
                border: `1px solid ${index % 2 === 0 ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.08)"}`,
                boxShadow:
                  index % 2 === 0 ? "0 4px 20px rgba(0,0,0,0.04)" : "none",
              }}
            >
              {/* Icon */}
              <motion.div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background:
                    index % 2 === 0
                      ? `${BRAND.gold.primary}10`
                      : `${BRAND.gold.primary}15`,
                  border: `2px solid ${index % 2 === 0 ? `${BRAND.gold.primary}25` : `${BRAND.gold.primary}30`}`,
                }}
                whileHover={{ rotate: [0, -5, 5, 0] }}
              >
                <item.icon
                  className="text-xl"
                  style={{ color: BRAND.gold.primary }}
                />
              </motion.div>

              {/* Title */}
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: index % 2 === 0 ? BRAND.navy.dark : "white" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: index % 2 === 0 ? "#64748B" : "rgba(255,255,255,0.7)",
                }}
              >
                {item.description}
              </p>

              {/* Hover Indicator */}
              <div
                className="mt-6 pt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  borderTop: `1px solid ${index % 2 === 0 ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.1)"}`,
                }}
              >
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: BRAND.gold.primary }}
                >
                  Learn More
                </span>
                <FaArrowRight
                  className="text-xs transition-transform group-hover:translate-x-1"
                  style={{ color: BRAND.gold.primary }}
                />
              </div>
            </div>
          </motion.div>
        ))}

        {/* CTA Card - Spans full width or centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="md:col-span-2 lg:col-span-1"
        >
          <div
            className="p-8 rounded-2xl h-full flex flex-col items-center justify-center text-center transition-all duration-500 hover:shadow-xl"
            style={{
              background: BRAND.gold.gradient,
            }}
          >
            <FaStar className="text-4xl text-white/90 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Ready to Transform?
            </h3>
            <p className="text-sm text-white/80 mb-6">
              Let's discuss how we can help your business grow.
            </p>
            <button
              className="px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all hover:-translate-y-1"
              style={{
                background: BRAND.navy.dark,
                color: "white",
                boxShadow: `0 4px 15px rgba(11,29,51,0.3)`,
              }}
            >
              Get Started →
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Our Approach Section (Stepper/Timeline)
const ApproachSection = () => (
  <section className="py-6 lg:py-12 bg-gray-50 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      {/* Section Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <span
          className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
          style={{
            background: `${BRAND.navy.mid}08`,
            color: BRAND.navy.dark,
            border: `1px solid ${BRAND.navy.mid}15`,
          }}
        >
          Our Approach
        </span>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          style={{ color: BRAND.navy.dark }}
        >
          A Collaborative &{" "}
          <span style={{ color: BRAND.gold.primary }}>Agile Process</span>
        </h2>

        <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
          At Innovise IT, we follow a proven methodology that ensures success at
          every stage.
        </p>
      </motion.header>

      {/* Steps Container */}
      <div className="relative max-w-5xl mx-auto space-y-16 lg:space-y-24">
        {approachSteps.map((step, index) => (
          <ApproachStep key={step.step} step={step} index={index} />
        ))}
      </div>
    </div>
  </section>
);

// Closing Section
const ClosingSection = () => (
  <section
    className="relative py-24 lg:py-32 overflow-hidden"
    style={{
      background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
    }}
  >
    {/* Background Pattern */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }}
    />

    {/* Decorative Elements */}
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.06]"
      style={{ background: BRAND.gold.primary }}
    />

    <div className="max-w-4xl mx-auto px-4 lg:px-8 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Quote Icon */}
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
          <FaQuoteLeft
            className="text-3xl"
            style={{ color: BRAND.gold.primary }}
          />
        </motion.div>

        {/* Main Quote */}
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-8">
          We don't just implement{" "}
          <span
            style={{
              backgroundImage: BRAND.gold.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            technology
          </span>
          —we enable{" "}
          <span
            style={{
              backgroundImage: BRAND.gold.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            transformation
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
            innovation
          </span>
          , and{" "}
          <span
            style={{
              backgroundImage: BRAND.gold.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            long-term success
          </span>
          .
        </blockquote>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <a
            href="/contact"
            className="group relative px-10 py-5 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2"
            style={{
              background: BRAND.gold.gradient,
              color: BRAND.navy.dark,
              boxShadow: `0 8px 30px ${BRAND.gold.primary}35`,
            }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Start Your Transformation
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </span>

            {/* Shine Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            </div>
          </a>

          <a
            href="/services"
            className="px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/5 focus:outline-none focus:ring-2"
            style={{
              border: `1px solid rgba(255,255,255,0.2)`,
              color: "white",
            }}
          >
            Explore Our Services →
          </a>
        </div>

        {/* Trust Indicators */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-12"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          {[
            { icon: FaAward, text: "SAP Certified Partner" },
            { icon: FaShieldAlt, text: "ISO Certified" },
            { icon: FaUsers, text: "300+ Expert Consultants" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-white/60">
              <item.icon
                className="text-sm"
                style={{ color: BRAND.gold.primary }}
              />
              <span className="text-xs font-medium">{item.text}</span>
            </div>
          ))}
        </motion.div> */}
      </motion.div>
    </div>
  </section>
);

// Main About Page Component
const AboutPage = () => {
  return (
    <main role="main">
      <div className="relative w-full h-[90vh] bg-[#020B2D] overflow-hidden">
        <img
          src={banner}
          alt="Innovise IT Banner"
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/10" />
      </div>
      {/* <HeroSection /> */}
      <WhoWeAreSection />
      {/* <ServicesSection /> */}
      <CompanyStatsSection />
      <MissionVisionSection />
      {/* <WhyChooseUsSection /> */}
      <ApproachSection />
      {/* <ClosingSection /> */}
    </main>
  );
};

export default AboutPage;
