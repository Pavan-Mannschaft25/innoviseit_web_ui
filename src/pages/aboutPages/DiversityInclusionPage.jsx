import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUsers,
  FaHandshake,
  FaHeart,
  FaGlobeAmericas,
  FaLightbulb,
  FaRocket,
  FaCheckCircle,
  FaQuoteLeft,
  FaArrowRight,
  FaBalanceScale,
  FaUserFriends,
  FaStar,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

// ==================== BRAND COLORS ====================
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

// ==================== COMMITMENT DATA ====================
const commitmentsData = [
  {
    id: 1,
    icon: FaHeart,
    title: "Inclusive Culture",
    description:
      "We foster a workplace where everyone feels welcome, heard, and empowered to bring their authentic selves to work every day.",
    color: "#EC4899",
    gradient: "linear-gradient(135deg, #EC4899 0%, #DB2777 100%)",
  },
  {
    id: 2,
    icon: FaBalanceScale,
    title: "Equal Opportunity",
    description:
      "We promote fairness in hiring, growth, and leadership opportunities—ensuring merit and potential drive success.",
    color: "#3B82F6",
    gradient: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
  },
  {
    id: 3,
    icon: FaStar,
    title: "Respect & Belonging",
    description:
      "We create an environment where individuality is celebrated, and every voice matters in shaping our collective future.",
    color: "#F59E0B",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
  },
  {
    id: 4,
    icon: FaUserFriends,
    title: "Collaboration Across Differences",
    description:
      "Diverse teams working together to solve complex challenges—because innovation thrives at the intersection of perspectives.",
    color: "#10B981",
    gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
  },
];

// ==================== PRACTICES DATA ====================
const practicesData = [
  "Encouraging diverse hiring and talent development",
  "Promoting inclusive leadership and team collaboration",
  "Supporting continuous learning and awareness programs",
  "Creating a safe and respectful work environment",
];

// ==================== COMPONENTS ====================

// Commitment Card Component
const CommitmentCard = ({ item, index }) => {
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
    >
      <div
        className="relative h-full rounded-2xl overflow-hidden transition-all duration-700"
        style={{
          background: "white",
          border: `1px solid ${isHovered ? `${item.color}30` : "rgba(0,0,0,0.06)"}`,
          boxShadow: isHovered
            ? `0 25px 50px ${item.color}20`
            : "0 4px 20px rgba(0,0,0,0.04)",
          transform: isHovered ? "scale(1.03) translateY(-5px)" : "scale(1)",
        }}
      >
        {/* Top Accent Line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 origin-left"
          style={{
            background: `linear-gradient(90deg, ${item.color}, ${item.color}80, transparent)`,
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Corner Glow */}
        <div
          className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(circle at top right, ${item.color}15, transparent 70%)`,
            borderRadius: "0 16px 0 0",
          }}
        />

        <div className="relative z-10 p-8 lg:p-10">
          {/* Icon */}
          <motion.div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
            style={{
              background: `${item.color}10`,
              border: `2px solid ${isHovered ? item.color : `${item.color}30`}`,
            }}
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <item.icon className="text-2xl" style={{ color: item.color }} />
          </motion.div>

          {/* Content */}
          <h3
            className="text-xl lg:text-2xl font-bold mb-3"
            style={{ color: BRAND.navy.dark }}
          >
            {item.title}
          </h3>

          <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
            {item.description}
          </p>

          {/* Learn More Link */}
          <div className="flex items-center gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:gap-3">
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: item.color }}
            >
              Learn More
            </span>
            <FaArrowRight
              className="text-xs transition-transform group-hover:translate-x-1"
              style={{ color: item.color }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Hero Section Component
const HeroSection = () => (
  <section
    className="relative py-8 lg:py-10  overflow-hidden"
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
    </div>

    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT SIDE - Image/Visual */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main Image Container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Placeholder for actual image - replace src with your image URL */}
            <div
              className="aspect-[4/3] bg-gradient-to-br from-blue-900/40 to-purple-900/40 flex items-center justify-center relative overflow-hidden"
              style={{
                border: `2px solid rgba(253, 185, 19, 0.2)`,
              }}
            >
              {/* Background Pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Team Illustration Icon */}
              <div className="text-center relative z-10">
                <FaGlobeAmericas
                  className="text-8xl md:text-9xl mx-auto mb-4 opacity-60"
                  style={{ color: BRAND.gold.primary }}
                />
                <p className="text-white/60 text-sm font-medium tracking-wider uppercase">
                  Diverse Team • United Vision
                </p>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl"
              style={{ border: `2px solid ${BRAND.gold.primary}` }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${BRAND.gold.primary}15` }}
                >
                  <FaUsers
                    className="text-xl"
                    style={{ color: BRAND.gold.primary }}
                  />
                </div>
                <div>
                  <div
                    className="text-2xl font-black"
                    style={{ color: BRAND.navy.dark }}
                  >
                    100%
                  </div>
                  <div className="text-xs text-gray-500 font-semibold">
                    Inclusive
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div
            className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl -z-10"
            style={{ background: `${BRAND.gold.primary}20` }}
          />
          <div
            className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full -z-10"
            style={{ background: `${BRAND.navy.lighter}30` }}
          />
        </motion.div>

        {/* RIGHT SIDE - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span
              className="w-10 h-[2px]"
              style={{ background: BRAND.gold.gradient }}
            />
            <span
              className="text-sm font-bold uppercase tracking-[0.25em]"
              style={{ color: BRAND.gold.primary }}
            >
              🌍 Diversity & Inclusion
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-black text-white leading-[1.15] mb-6">
            Empowering People.
            <br />
            Embracing Perspectives.
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            At Innovise IT, we believe that diverse perspectives drive
            innovation and better outcomes. We are committed to building an
            inclusive workplace where every individual feels respected, valued,
            and empowered to contribute.
          </p>

          {/* Key Points */}
          <div className="space-y-4 mb-8">
            {[
              {
                icon: FaLightbulb,
                text: "Unlocking creativity through diverse thinking",
              },
              {
                icon: FaChartLine,
                text: "Improving decision-making with varied viewpoints",
              },
              {
                icon: FaRocket,
                text: "Delivering better solutions for clients worldwide",
              },
            ].map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="flex items-center gap-4"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${BRAND.gold.primary}15`,
                    border: `1px solid ${BRAND.gold.primary}30`,
                  }}
                >
                  <point.icon
                    className="text-sm"
                    style={{ color: BRAND.gold.primary }}
                  />
                </div>
                <span className="text-white/80 font-medium">{point.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            className="group relative px-8 py-4 rounded-xl font-bold text-base overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{
              background: BRAND.gold.gradient,
              color: BRAND.navy.dark,
              boxShadow: `0 8px 30px ${BRAND.gold.primary}35`,
            }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Join Our Inclusive Team
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </span>

            {/* Shine Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            </div>
          </button>
        </motion.div>
      </div>
    </div>
  </section>
);

// Commitments Grid Section
const CommitmentsSection = () => (
  <section className="py-6 lg:py-12 bg-white relative overflow-hidden">
    {/* Background Decoration */}
    <div
      className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl opacity-[0.03] translate-x-1/2 -translate-y-1/2"
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
          🤝 Our Commitment
        </span>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          style={{ color: BRAND.navy.dark }}
        >
          Building an{" "}
          <span style={{ color: BRAND.gold.primary }}>Inclusive Future</span>
        </h2>

        <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
          Our commitment to diversity goes beyond words—it's woven into
          everything we do, from how we hire to how we collaborate and grow
          together.
        </p>
      </motion.header>

      {/* 4-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {commitmentsData.map((item, index) => (
          <CommitmentCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  </section>
);

// Why It Matters Section
const WhyMattersSection = () => (
  <section
    className="py-20 lg:py-28 relative overflow-hidden"
    style={{
      background: `linear-gradient(135deg, ${BRAND.navy.mid} 0%, ${BRAND.navy.dark} 100%)`,
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

    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left - Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span
            className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
            style={{
              background: `${BRAND.gold.primary}15`,
              color: BRAND.gold.primary,
              border: `1px solid ${BRAND.gold.primary}30`,
            }}
          >
            💡 Why It Matters
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Diversity Isn't Just About{" "}
            <span
              style={{
                backgroundImage: BRAND.gold.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Representation
            </span>
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            It's about unlocking creativity, improving decision-making, and
            delivering better solutions for our clients across industries. When
            diverse minds come together, extraordinary things happen.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: "3x", label: "More Innovative", icon: FaLightbulb },
              { value: "35%", label: "Better Decisions", icon: FaChartLine },
              { value: "∞", label: "Perspectives", icon: FaGlobeAmericas },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <stat.icon
                  className="text-2xl mx-auto mb-2"
                  style={{ color: BRAND.gold.primary }}
                />
                <div
                  className="text-2xl font-black"
                  style={{
                    backgroundImage: BRAND.gold.gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right - Visual Element */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div
            className="rounded-3xl p-8 lg:p-12 relative overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: `1px solid rgba(255,255,255,0.1)`,
            }}
          >
            {/* Decorative Circles */}
            <div
              className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10"
              style={{
                background: BRAND.gold.primary,
                transform: "translate(30%, -30%)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-10"
              style={{
                background: BRAND.navy.lighter,
                transform: "translate(-30%, 30%)",
              }}
            />

            <div className="relative z-10">
              <FaQuoteLeft
                className="text-4xl mb-6 opacity-30"
                style={{ color: BRAND.gold.primary }}
              />

              <blockquote className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-6">
                "Innovation happens when people with different backgrounds,
                experiences, and perspectives come together to solve problems."
              </blockquote>

              <div
                className="flex items-center gap-4 pt-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
                  style={{
                    background: BRAND.gold.gradient,
                    color: BRAND.navy.dark,
                  }}
                >
                  IT
                </div>
                <div>
                  <div className="text-white font-semibold">
                    Innovise IT Leadership
                  </div>
                  <div className="text-sm text-gray-400">
                    Core Value Statement
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Practices Section
const PracticesSection = () => (
  <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left - Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:sticky lg:top-28"
        >
          <span
            className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
            style={{
              background: `${BRAND.navy.mid}08`,
              color: BRAND.navy.dark,
              border: `1px solid ${BRAND.navy.mid}15`,
            }}
          >
            🚀 How We Put It Into Practice
          </span>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: BRAND.navy.dark }}
          >
            Turning Values Into{" "}
            <span style={{ color: BRAND.gold.primary }}>Action</span>
          </h2>

          <p
            className="text-lg leading-relaxed mb-8"
            style={{ color: "#64748B" }}
          >
            Our commitment to diversity and inclusion isn't just talk—we take
            concrete steps every day to ensure our workplace reflects the world
            we serve.
          </p>

          {/* CTA */}
          <a
            href="/careers"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{
              background: BRAND.navy.dark,
              color: "white",
              boxShadow: `0 8px 30px ${BRAND.navy.dark}30`,
            }}
          >
            View Career Opportunities
            <FaArrowRight className="text-sm" />
          </a>
        </motion.div>

        {/* Right - Practices List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {practicesData.map((practice, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex items-start gap-5 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg"
              style={{
                background: idx % 2 === 0 ? "white" : `${BRAND.navy.dark}02`,
                border: `1px solid ${idx % 2 === 0 ? "rgba(0,0,0,0.05)" : `${BRAND.navy.mid}10`}`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${BRAND.gold.primary}15`,
                  border: `2px solid ${BRAND.gold.primary}30`,
                }}
              >
                <FaCheckCircle
                  className="text-xl"
                  style={{ color: BRAND.gold.primary }}
                />
              </div>

              <div>
                <h3
                  className="text-lg font-bold mb-2 transition-colors"
                  style={{ color: BRAND.navy.dark }}
                >
                  {practice}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#64748B" }}
                >
                  We actively implement initiatives that support this practice
                  across all departments and levels of our organization.
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
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

        {/* Closing Text */}
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-8">
          At Innovise IT,{" "}
          <span
            style={{
              backgroundImage: BRAND.gold.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            inclusion is not an initiative
          </span>{" "}
          —it's a core part of{" "}
          <span
            style={{
              backgroundImage: BRAND.gold.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            who we are
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
            how we grow
          </span>
          .
        </blockquote>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <a
            href="/about"
            className="group relative px-10 py-5 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2"
            style={{
              background: BRAND.gold.gradient,
              color: BRAND.navy.dark,
              boxShadow: `0 8px 30px ${BRAND.gold.primary}35`,
            }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Learn About Us
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </span>

            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            </div>
          </a>

          <a
            href="/contact"
            className="px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/5 focus:outline-none focus:ring-2"
            style={{
              border: `1px solid rgba(255,255,255,0.2)`,
              color: "white",
            }}
          >
            Get in Touch →
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

// Main Component
const DiversityInclusionPage = () => {
  return (
    <main role="main">
      <HeroSection />
      <CommitmentsSection />
      <WhyMattersSection />
      <PracticesSection />
      <ClosingSection />
    </main>
  );
};

export default DiversityInclusionPage;
