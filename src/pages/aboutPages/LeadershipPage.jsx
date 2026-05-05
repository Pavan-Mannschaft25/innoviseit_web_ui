import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaQuoteLeft,
  FaArrowRight,
  FaCheckCircle,
  FaAward,
  FaLightbulb,
  FaEye,
  FaCogs,
  FaHandshake,
  FaUsers,
  FaGraduationCap,
  FaStar,
  FaShieldAlt,
  FaRocket,
  FaIndustry,
  FaCloud,
  FaChartLine,
  FaGlobeAmericas,
} from "react-icons/fa";

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
  stagger: 0.15,
  duration: 0.6,
  spring: { type: "spring", stiffness: 300, damping: 25 },
};

// ==================== LEADERSHIP DATA ====================
const leadershipData = [
  {
    id: 1,
    name: "Kalyan Reddy",
    role: "Founder & CEO",
    image: null, // Replace with actual image URL
    initials: "KR",
    color: "#FDB913",
    bio: "Visionary leader with expertise in SAP transformation and enterprise solutions, driving innovation and scalable business growth.",
    expertise: [
      "SAP Transformation",
      "Enterprise Strategy",
      "Business Development",
    ],
    experience: "20+ Years",
    achievements: [
      "Led 200+ enterprise transformations",
      "Built global delivery teams across 5 countries",
      "Recognized industry thought leader",
    ],
    linkedin: "#",
    twitter: "#",
    email: "kalyan@innoviseit.com",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    image: null,
    initials: "SC",
    color: "#3B82F6",
    bio: "Technology strategist with deep expertise in cloud architecture, digital engineering, and modern application development.",
    expertise: ["Cloud Architecture", "Digital Engineering", "AI/ML Solutions"],
    experience: "18+ Years",
    achievements: [
      "Architected 100+ cloud migrations",
      "Published tech research papers",
      "AWS & Azure certified architect",
    ],
    linkedin: "#",
    twitter: "#",
    email: "sarah@innoviseit.com",
  },
  {
    id: 3,
    name: "Michael Torres",
    role: "VP of SAP Solutions",
    image: null,
    initials: "MT",
    color: "#10B981",
    bio: "SAP expert with extensive experience in S/4HANA implementations, process optimization, and intelligent enterprise solutions.",
    expertise: ["SAP S/4HANA", "Process Optimization", "Solution Architecture"],
    experience: "15+ Years",
    achievements: [
      "50+ successful SAP implementations",
      "SAP Certified Application Associate",
      "Led Fortune 500 transformation projects",
    ],
    linkedin: "#",
    twitter: "#",
    email: "michael@innoviseit.com",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Director of Delivery",
    image: null,
    initials: "PS",
    color: "#EC4899",
    bio: "Delivery excellence expert focused on operational efficiency, quality assurance, and client satisfaction across global engagements.",
    expertise: [
      "Program Management",
      "Quality Assurance",
      "Agile Methodologies",
    ],
    experience: "16+ Years",
    achievements: [
      "Managed $50M+ portfolio of projects",
      "98% client retention rate",
      "ISO 9001 implementation lead",
    ],
    linkedin: "#",
    twitter: "#",
    email: "priya@innoviseit.com",
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Head of Cloud Engineering",
    image: null,
    initials: "JW",
    color: "#8B5CF6",
    bio: "Cloud infrastructure specialist with expertise in multi-cloud strategies, DevOps practices, and scalable architecture design.",
    expertise: ["Multi-Cloud Strategy", "DevOps", "Infrastructure as Code"],
    experience: "14+ Years",
    achievements: [
      "Designed enterprise-scale cloud platforms",
      "Certified Kubernetes Administrator",
      "Reduced client costs by 40%",
    ],
    linkedin: "#",
    twitter: "#",
    email: "james@innoviseit.com",
  },
  {
    id: 6,
    name: "Anita Patel",
    role: "VP of Human Resources",
    image: null,
    initials: "AP",
    color: "#F59E0B",
    bio: "People-focused leader dedicated to building high-performing teams, fostering inclusive culture, and talent development initiatives.",
    expertise: [
      "Talent Acquisition",
      "Organizational Development",
      "Employee Engagement",
    ],
    experience: "17+ Years",
    achievements: [
      "Scaled team from 50 to 200+ employees",
      "Best Workplace award recipient",
      "Launched leadership development program",
    ],
    linkedin: "#",
    twitter: "#",
    email: "anita@innoviseit.com",
  },
];

// ==================== WHAT SETS US APART DATA ====================
const differentiatorsData = [
  {
    icon: FaAward,
    title: "Proven Expertise",
    description:
      "Decades of combined experience across industries like banking, manufacturing, and healthcare",
  },
  {
    icon: FaEye,
    title: "Strategic Vision",
    description:
      "Focused on long-term value creation and digital transformation initiatives",
  },
  {
    icon: FaLightbulb,
    title: "Innovation-Driven",
    description:
      "Embracing emerging technologies to solve real-world business problems",
  },
  {
    icon: FaHandshake,
    title: "Client-Centric Approach",
    description:
      "Committed to delivering excellence and building lasting partnerships",
  },
];

// ==================== COMPONENTS ====================

// Leader Card Component (Clean, Minimal Design like TCS/Infosys)
const LeaderCard = ({ leader, index }) => {
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
      className="group relative"
      style={{
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
      }}
    >
      <div
        className="relative rounded-2xl overflow-hidden transition-all duration-500 h-full"
        style={{
          background: "white",
          border: isHovered
            ? `2px solid ${BRAND.gold.primary}40`
            : "1px solid rgba(0,0,0,0.06)",
          boxShadow: isHovered
            ? `0 25px 60px ${BRAND.navy.dark}15`
            : "0 4px 20px rgba(0,0,0,0.04)",
        }}
      >
        {/* Top Accent Line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 origin-left z-20"
          style={{ background: BRAND.gold.gradient }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Image / Avatar Section */}
        <div className="relative pt-8 px-8 pb-6">
          {/* Background Decoration */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              background: `linear-gradient(180deg, ${leader.color}10, transparent)`,
            }}
          />

          {/* Profile Image Container */}
          <div className="relative z-10 flex justify-center mb-6">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Outer Ring */}
              <div
                className="w-32 h-32 rounded-full p-1 transition-all duration-500"
                style={{
                  background: isHovered
                    ? BRAND.gold.gradient
                    : `${leader.color}20`,
                }}
              >
                {/* Inner Circle */}
                <div
                  className="w-full h-full rounded-full overflow-hidden flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
                    border: `3px solid white`,
                  }}
                >
                  {/* If no image, show initials */}
                  {!leader.image ? (
                    <span
                      className="text-3xl font-black"
                      style={{
                        backgroundImage: BRAND.gold.gradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {leader.initials}
                    </span>
                  ) : (
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              {/* Online Status Dot */}
              <div
                className="absolute bottom-2 right-2 w-5 h-5 rounded-full border-2 border-white"
                style={{ background: "#10B981" }}
              />
            </motion.div>
          </div>

          {/* Name & Role */}
          <div className="text-center mb-4">
            <h3
              className="text-xl font-bold mb-1 transition-colors duration-300"
              style={{ color: BRAND.navy.dark }}
            >
              {leader.name}
            </h3>

            <p
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: BRAND.gold.primary }}
            >
              {leader.role}
            </p>
          </div>

          {/* Experience Badge */}
          <div className="flex justify-center mb-4">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold"
              style={{
                background: `${BRAND.navy.dark}05`,
                color: BRAND.navy.dark,
                border: `1px solid ${BRAND.navy.dark}10`,
              }}
            >
              <FaGraduationCap className="text-xs" />
              {leader.experience} Experience
            </span>
          </div>
        </div>

        {/* Bio Section */}
        <div
          className="px-8 pb-6"
          style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
        >
          <p
            className="text-sm leading-relaxed text-center mb-5"
            style={{ color: "#64748B" }}
          >
            {leader.bio}
          </p>

          {/* Expertise Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-5">
            {leader.expertise.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: `${leader.color}10`,
                  color: leader.color,
                  border: `1px solid ${leader.color}20`,
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Social Links - Show on Hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div
                  className="flex justify-center gap-3 pt-4"
                  style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
                >
                  {/* LinkedIn */}
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "#0077B5",
                      color: "white",
                    }}
                    aria-label={`${leader.name}'s LinkedIn`}
                  >
                    <FaLinkedinIn className="text-sm" />
                  </a>

                  {/* Twitter */}
                  <a
                    href={leader.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "#1DA1F2",
                      color: "white",
                    }}
                    aria-label={`${leader.name}'s Twitter`}
                  >
                    <FaTwitter className="text-sm" />
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${leader.email}`}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: BRAND.navy.dark,
                      color: "white",
                    }}
                    aria-label={`Email ${leader.name}`}
                  >
                    <FaEnvelope className="text-sm" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

// Differentiator Card Component
const DifferentiatorCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      delay: index * 0.1,
      duration: ANIMATION.duration,
      ...ANIMATION.spring,
    }}
    whileHover={{ y: -5 }}
    className="group"
  >
    <div
      className="p-6 lg:p-8 rounded-2xl h-full transition-all duration-300 hover:shadow-lg"
      style={{
        background: index % 2 === 0 ? "white" : `${BRAND.navy.dark}`,
        border: `1px solid ${index % 2 === 0 ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.08)"}`,
      }}
    >
      {/* Icon */}
      <motion.div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
        style={{
          background:
            index % 2 === 0
              ? `${BRAND.gold.primary}10`
              : `${BRAND.gold.primary}15`,
          border: `2px solid ${index % 2 === 0 ? `${BRAND.gold.primary}25` : `${BRAND.gold.primary}30`}`,
        }}
        whileHover={{ rotate: [0, -10, 10, 0] }}
      >
        <item.icon className="text-xl" style={{ color: BRAND.gold.primary }} />
      </motion.div>

      {/* Title */}
      <h3
        className="text-lg font-bold mb-3"
        style={{ color: index % 2 === 0 ? BRAND.navy.dark : "white" }}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed"
        style={{ color: index % 2 === 0 ? "#64748B" : "rgba(255,255,255,0.7)" }}
      >
        {item.description}
      </p>
    </div>
  </motion.div>
);

// ==================== SECTIONS ====================

// Hero Section
const HeroSection = () => (
  <section
    className="relative py-8 lg:py-12 h-[70vh] overflow-hidden"
    style={{
      background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 50%, ${BRAND.navy.lighter} 100%)`,
    }}
  >
    {/* Background Elements */}
    <div className="absolute inset-0" aria-hidden="true">
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
            👥 Leadership Team
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
          Driving{" "}
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
          . Delivering{" "}
          <span
            style={{
              backgroundImage: BRAND.gold.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Excellence
          </span>
          .
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12"
        >
          Experienced leaders shaping the future of enterprise technology
          through strategic vision, deep expertise, and a passion for
          innovation.
        </motion.p>
      </div>
    </div>
  </section>
);

// What Sets Us Apart Section
const DifferentiatorsSection = () => (
  <section className="py-6 lg:py-12 bg-white relative overflow-hidden">
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
          🌟 What Sets Our Leaders Apart
        </span>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          style={{ color: BRAND.navy.dark }}
        >
          The{" "}
          <span style={{ color: BRAND.gold.primary }}>Innovise Difference</span>
        </h2>

        <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
          Our leadership team brings a unique combination of expertise, vision,
          and commitment that sets us apart.
        </p>
      </motion.header>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {differentiatorsData.map((item, index) => (
          <DifferentiatorCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  </section>
);

// Leadership Philosophy Section
const PhilosophySection = () => (
  <section
    className="py-20 lg:py-28 relative overflow-hidden"
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
      className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.06]"
      style={{ background: BRAND.gold.primary }}
    />

    <div className="max-w-5xl mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
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

        {/* Label */}
        <span
          className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
          style={{
            background: "rgba(255,255,255,0.08)",
            color: BRAND.gold.primary,
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          🧑‍💼 Leadership Philosophy
        </span>

        {/* Quote Text */}
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-8 max-w-4xl mx-auto">
          Our leaders believe in a{" "}
          <span
            style={{
              backgroundImage: BRAND.gold.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            collaborative
          </span>{" "}
          and{" "}
          <span
            style={{
              backgroundImage: BRAND.gold.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            forward-thinking approach
          </span>
          —empowering teams, fostering innovation, and ensuring every solution
          is aligned with client success.
        </blockquote>

        {/* Key Principles */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {[
            "Empowerment",
            "Innovation",
            "Collaboration",
            "Excellence",
            "Integrity",
          ].map((principle, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="px-6 py-3 rounded-xl font-semibold text-sm"
              style={{
                background: "rgba(255,255,255,0.05)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {principle}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// Team Grid Section
const TeamSection = () => (
  <section className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
    {/* Background Decoration */}
    <div
      className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-3xl opacity-[0.03] -translate-x-1/2 -translate-y-1/2"
      style={{ background: BRAND.navy.lighter }}
    />

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
          👤 Meet Our Leaders
        </span>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          style={{ color: BRAND.navy.dark }}
        >
          The Minds Behind{" "}
          <span style={{ color: BRAND.gold.primary }}>Innovise IT</span>
        </h2>

        <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
          Meet the experienced professionals who drive our vision and deliver
          exceptional results for clients worldwide.
        </p>
      </motion.header>

      {/* Leaders Grid - 3 columns on large screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leadershipData.map((leader, index) => (
          <LeaderCard key={leader.id} leader={leader} index={index} />
        ))}
      </div>
    </div>
  </section>
);

// Expanded Leader Detail Modal (Optional Enhancement)
const LeaderDetailModal = ({ leader, isOpen, onClose }) => {
  if (!isOpen || !leader) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      style={{ background: "rgba(11,29,51,0.9)", backdropFilter: "blur(8px)" }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="p-8 pb-0"
          style={{
            background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
          }}
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-6">
              {/* Avatar */}
              <div
                className="w-24 h-24 rounded-full p-1"
                style={{ background: BRAND.gold.gradient }}
              >
                <div
                  className="w-full h-full rounded-full flex items-center justify-center"
                  style={{
                    background: BRAND.navy.dark,
                    border: "3px solid white",
                  }}
                >
                  <span
                    className="text-2xl font-black"
                    style={{
                      backgroundImage: BRAND.gold.gradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {leader.initials}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">{leader.name}</h3>
                <p
                  className="text-sm font-semibold"
                  style={{ color: BRAND.gold.primary }}
                >
                  {leader.role}
                </p>
                <span className="inline-flex items-center gap-1 mt-2 text-xs text-white/60">
                  <FaGraduationCap /> {leader.experience}
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Bio */}
          <p
            className="text-base leading-relaxed mb-6"
            style={{ color: "#475569" }}
          >
            {leader.bio}
          </p>

          {/* Expertise */}
          <div className="mb-6">
            <h4
              className="text-sm font-bold uppercase tracking-wider mb-3"
              style={{ color: BRAND.navy.dark }}
            >
              Areas of Expertise
            </h4>
            <div className="flex flex-wrap gap-2">
              {leader.expertise.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-lg text-sm font-medium"
                  style={{
                    background: `${leader.color}10`,
                    color: leader.color,
                    border: `1px solid ${leader.color}20`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-8">
            <h4
              className="text-sm font-bold uppercase tracking-wider mb-3"
              style={{ color: BRAND.navy.dark }}
            >
              Key Achievements
            </h4>
            <ul className="space-y-3">
              {leader.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FaCheckCircle
                    className="mt-1 flex-shrink-0"
                    style={{ color: BRAND.gold.primary }}
                  />
                  <span className="text-sm" style={{ color: "#64748B" }}>
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Actions */}
          <div
            className="flex gap-4 pt-6"
            style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
          >
            <a
              href={leader.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-xl font-semibold text-sm text-center transition-all hover:-translate-y-1"
              style={{
                background: "#0077B5",
                color: "white",
              }}
            >
              <FaLinkedinIn className="mr-2" />
              Connect on LinkedIn
            </a>
            <a
              href={`mailto:${leader.email}`}
              className="flex-1 py-3 rounded-xl font-semibold text-sm text-center transition-all hover:-translate-y-1"
              style={{
                background: BRAND.navy.dark,
                color: "white",
              }}
            >
              <FaEnvelope className="mr-2" />
              Send Email
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

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
          <FaRocket
            className="text-3xl"
            style={{ color: BRAND.gold.primary }}
          />
        </motion.div>

        {/* Closing Message */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-8">
          Ready to Work With{" "}
          <span
            style={{
              backgroundImage: BRAND.gold.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Exceptional Leaders
          </span>
          ?
        </h2>

        <p className="text-lg text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto">
          Our leadership team is ready to help you navigate your digital
          transformation journey. Let's start a conversation about how we can
          drive success together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              Schedule a Meeting
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </span>

            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            </div>
          </a>

          <a
            href="/about"
            className="px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/5 focus:outline-none focus:ring-2"
            style={{
              border: `1px solid rgba(255,255,255,0.2)`,
              color: "white",
            }}
          >
            Learn More About Us →
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

// Main Leadership Page Component
const LeadershipPage = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLeaderClick = (leader) => {
    setSelectedLeader(leader);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedLeader(null), 300);
  };

  return (
    <main role="main">
      <HeroSection />
      <DifferentiatorsSection />
      <PhilosophySection />
      <TeamSection />
      <ClosingSection />

      {/* Optional Modal for detailed view */}
      <LeaderDetailModal
        leader={selectedLeader}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
};

export default LeadershipPage;
