import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaHandsHelping,
  FaLeaf,
  FaLaptopCode,
  FaHeart,
  FaUsers,
  FaGlobeAmericas,
  FaQuoteLeft,
  FaArrowRight,
  FaCheckCircle,
  FaSeedling,
  FaChartLine,
  FaAward,
  FaHandHoldingHeart,
  FaRecycle,
  FaWifi,
  FaShieldAlt,
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

// ==================== FOCUS AREAS DATA ====================
const focusAreasData = [
  {
    id: 1,
    icon: FaGraduationCap,
    emoji: "🎓",
    title: "Education & Skill Development",
    shortTitle: "Education",
    description:
      "We support learning initiatives and help individuals build skills for a better future—especially in technology and digital careers.",
    highlights: [
      "Scholarship programs for underprivileged students",
      "Free coding bootcamps and workshops",
      "Mentorship programs for young professionals",
      "Partnerships with educational institutions",
    ],
    color: "#3B82F6",
    gradient: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
    bgPattern:
      "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)",
    stat: { value: "500+", label: "Students Supported" },
  },
  {
    id: 2,
    icon: FaHandsHelping,
    emoji: "🌍",
    title: "Social Responsibility",
    shortTitle: "Social",
    description:
      "We actively participate in initiatives that uplift communities, promote equality, and support those in need.",
    highlights: [
      "Community outreach and volunteer programs",
      "Support for local charities and NGOs",
      "Disaster relief and emergency response",
      "Healthcare access initiatives",
    ],
    color: "#EC4899",
    gradient: "linear-gradient(135deg, #EC4899 0%, #DB2777 100%)",
    bgPattern:
      "radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)",
    stat: { value: "50+", label: "Community Events" },
  },
  {
    id: 3,
    icon: FaLeaf,
    emoji: "🌿",
    title: "Environmental Awareness",
    shortTitle: "Environment",
    description:
      "We encourage sustainable practices and strive to minimize our environmental footprint through responsible operations.",
    highlights: [
      "Carbon offset and reduction programs",
      "E-friendly office practices",
      "Tree planting and green initiatives",
      "Sustainable supply chain partnerships",
    ],
    color: "#10B981",
    gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    bgPattern:
      "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)",
    stat: { value: "10K+", label: "Trees Planted" },
  },
  {
    id: 4,
    icon: FaLaptopCode,
    emoji: "💻",
    title: "Digital Empowerment",
    shortTitle: "Digital",
    description:
      "We leverage technology to bridge gaps, enabling access to digital tools, knowledge, and opportunities.",
    highlights: [
      "Digital literacy programs for underserved communities",
      "Donation of tech equipment to schools",
      "Open-source contributions for social good",
      "Bridging the digital divide initiatives",
    ],
    color: "#8B5CF6",
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
    bgPattern:
      "radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)",
    stat: { value: "1000+", label: "People Digitally Empowered" },
  },
];

// ==================== STATS DATA ====================
const impactStats = [
  {
    value: "10,000+",
    label: "Lives Impacted",
    icon: FaHeart,
    color: "#EC4899",
  },
  {
    value: "25+",
    label: "Active Initiatives",
    icon: FaSeedling,
    color: "#10B981",
  },
  {
    value: "50+",
    label: "Partner Organizations",
    icon: FaHandHoldingHeart,
    color: "#3B82F6",
  },
  {
    value: "95%",
    label: "Employee Participation",
    icon: FaUsers,
    color: "#F59E0B",
  },
];

// ==================== CONTRIBUTION METHODS ====================
const contributionMethods = [
  {
    icon: FaUsers,
    title: "Community Outreach Programs",
    description:
      "Supporting local communities through direct engagement, volunteer work, and resource allocation.",
    color: "#3B82F6",
  },
  {
    icon: FaHeart,
    title: "Employee Volunteer Initiatives",
    description:
      "Encouraging employee participation in social initiatives with paid volunteer time off.",
    color: "#EC4899",
  },
  {
    icon: FaRecycle,
    title: "Sustainable Business Practices",
    description:
      "Promoting ethical and sustainable business practices across all operations.",
    color: "#10B981",
  },
  {
    icon: FaGlobeAmericas,
    title: "Strategic Partnerships",
    description:
      "Partnering with organizations to drive meaningful change at scale.",
    color: "#8B5CF6",
  },
];

// ==================== COMPONENTS ====================

// Focus Area Card Component (Expanded Interactive)
const FocusAreaCard = ({ area, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

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
      {/* Main Card */}
      <div
        className="relative h-full rounded-2xl overflow-hidden transition-all duration-700"
        style={{
          background: isExpanded
            ? `linear-gradient(180deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`
            : "white",
          border:
            isHovered || isExpanded
              ? `2px solid ${area.color}40`
              : "1px solid rgba(0,0,0,0.06)",
          boxShadow: isHovered
            ? `0 25px 60px ${area.color}25`
            : isExpanded
              ? `0 20px 40px ${BRAND.navy.dark}40`
              : "0 4px 20px rgba(0,0,0,0.04)",
        }}
      >
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ background: area.bgPattern }}
        />

        {/* Top Accent Bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1.5 origin-left"
          style={{ background: area.gradient }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Corner Glow */}
        <div
          className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(circle at top right, ${area.color}15, transparent 70%)`,
            borderRadius: "0 16px 0 0",
          }}
        />

        {/* Content */}
        <div className="relative z-10 p-8 lg:p-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            {/* Icon */}
            <motion.div
              className="w-16 h-16 rounded-2xl flex items-center justify-center relative"
              style={{
                background: isExpanded ? `${area.color}20` : `${area.color}10`,
                border: `2px solid ${isHovered || isExpanded ? area.color : `${area.color}30`}`,
              }}
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <area.icon
                className="text-2xl transition-colors"
                style={{ color: area.color }}
              />

              {/* Pulse Ring on Hover */}
              {isHovered && (
                <motion.div
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 1.4, opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 rounded-2xl"
                  style={{ border: `2px solid ${area.color}` }}
                />
              )}
            </motion.div>

            {/* Stat Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="text-right"
            >
              <div
                className="text-2xl font-black"
                style={{
                  color: isExpanded ? "white" : BRAND.navy.dark,
                }}
              >
                {area.stat.value}
              </div>
              <div
                className="text-xs font-medium"
                style={{
                  color: isExpanded ? "rgba(255,255,255,0.6)" : "#94A3B8",
                }}
              >
                {area.stat.label}
              </div>
            </motion.div>
          </div>

          {/* Title */}
          <h3
            className="text-xl lg:text-2xl font-bold mb-3 transition-colors duration-300"
            style={{
              color: isExpanded ? "white" : BRAND.navy.dark,
            }}
          >
            {area.title}
          </h3>

          {/* Description */}
          <p
            className="text-sm leading-relaxed mb-6 transition-colors duration-300"
            style={{
              color: isExpanded ? "rgba(255,255,255,0.75)" : "#64748B",
            }}
          >
            {area.description}
          </p>

          {/* Expandable Highlights */}
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <ul
              className="space-y-3 pt-4"
              style={{ borderTop: `1px solid ${area.color}30` }}
            >
              {area.highlights.map((highlight, idx) => (
                <motion.li
                  key={idx}
                  initial={{ x: -15, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  <FaCheckCircle
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: area.color }}
                  />
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 w-full py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 flex items-center justify-center gap-2"
            style={{
              background: isExpanded
                ? "rgba(255,255,255,0.1)"
                : `${area.color}10`,
              color: isExpanded ? "white" : area.color,
              border: `1px solid ${isExpanded ? "rgba(255,255,255,0.2)" : `${area.color}30`}`,
              "--tw-ring-color": area.color,
            }}
          >
            {isExpanded ? (
              <>
                Show Less
                <motion.span
                  animate={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  ▲
                </motion.span>
              </>
            ) : (
              <>
                Explore This Area
                <FaArrowRight className="text-xs" />
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

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
        style={{ background: "#10B981" }} // Green for environmental theme
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
        style={{ background: BRAND.gold.primary }}
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
            🌱 Community Impact
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
          Beyond Business.
          <br />
          Creating{" "}
          <span
            style={{
              backgroundImage:
                "linear-gradient(135deg, #10B981 0%, #34D399 50%, #6EE7B7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Meaningful Change
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
          At Innovise IT, we believe our responsibility goes beyond delivering
          technology solutions. We are committed to making a positive impact in
          the communities we serve by contributing to social, educational, and
          environmental initiatives.
        </motion.p>
      </div>
    </div>
  </section>
);

// Focus Areas Section Component
const FocusAreasSection = () => (
  <section className="py-6 lg:py-12 bg-white relative overflow-hidden">
    {/* Background Decoration */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-3xl opacity-[0.03]"
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
          🤝 Our Focus Areas
        </span>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          style={{ color: BRAND.navy.dark }}
        >
          Where We Make the{" "}
          <span style={{ color: "#10B981" }}>Biggest Difference</span>
        </h2>

        <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
          Our community impact spans four key areas where we believe we can
          create lasting, meaningful change. Click on any card to explore our
          initiatives in detail.
        </p>
      </motion.header>

      {/* 4-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {focusAreasData.map((area, index) => (
          <FocusAreaCard key={area.id} area={area} index={index} />
        ))}
      </div>
    </div>
  </section>
);

// Impact Stats Section Component
const ImpactStatsSection = () => (
  <section
    className="py-20 lg:py-28 relative overflow-hidden"
    style={{
      background: `linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%)`,
    }}
  >
    {/* Background Pattern */}
    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: "30px 30px",
      }}
    />

    {/* Decorative Elements */}
    <motion.div
      animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl opacity-20"
      style={{ background: "white" }}
    />

    <motion.div
      animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
      className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-3xl opacity-15"
      style={{ background: "white" }}
    />

    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span
          className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
          style={{
            background: "rgba(255,255,255,0.15)",
            color: "white",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          📊 Our Impact by Numbers
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Measuring What{" "}
          <span
            style={{
              backgroundImage:
                "linear-gradient(135deg, white 0%, rgba(255,255,255,0.8) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Truly Matters
          </span>
        </h2>

        <p className="text-lg text-white/80 leading-relaxed">
          We believe in transparency and accountability. Here's how our efforts
          are making a real difference.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {impactStats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, ...ANIMATION.spring }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative group"
          >
            <div
              className="text-center p-8 rounded-2xl backdrop-blur-sm transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: `2px solid rgba(255,255,255,0.3)`,
                }}
                whileHover={{ rotate: [0, -10, 10, 0] }}
              >
                <stat.icon className="text-2xl text-white" />
              </motion.div>

              {/* Value */}
              <div
                className="text-4xl md:text-5xl font-black text-white mb-2"
                style={{
                  textShadow: "0 4px 20px rgba(0,0,0,0.2)",
                }}
              >
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-sm font-medium text-white/70">
                {stat.label}
              </div>

              {/* Hover Glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${stat.color}20, transparent 70%)`,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Context */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-center mt-12 text-white/60 text-sm max-w-2xl mx-auto"
      >
        * These numbers represent cumulative impact since our community program
        inception. We update these metrics quarterly to ensure transparency.
      </motion.p>
    </div>
  </section>
);

// How We Contribute Section
const ContributionSection = () => (
  <section className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left - Sticky Header */}
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
            🚀 How We Contribute
          </span>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: BRAND.navy.dark }}
          >
            Turning Good Intentions Into{" "}
            <span style={{ color: "#10B981" }}>Real Action</span>
          </h2>

          <p
            className="text-lg leading-relaxed mb-8"
            style={{ color: "#64748B" }}
          >
            Our approach to community impact is systematic and sustainable.
            Here's how we translate our values into tangible outcomes that
            benefit society.
          </p>

          {/* Visual Element */}
          <div
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: "20px 20px",
              }}
            />

            <div className="relative z-10">
              <FaQuoteLeft
                className="text-3xl mb-4 opacity-30"
                style={{ color: BRAND.gold.primary }}
              />

              <blockquote className="text-white font-medium text-lg leading-relaxed mb-4">
                "We don't just donate—we engage, empower, and enable lasting
                change."
              </blockquote>

              <div
                className="flex items-center gap-3 pt-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
              >
                <FaAward
                  className="text-xl"
                  style={{ color: BRAND.gold.primary }}
                />
                <span className="text-white/70 text-sm">
                  Our Commitment Philosophy
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right - Methods List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {contributionMethods.map((method, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-6 lg:p-8 rounded-2xl bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{
                border: `1px solid rgba(0,0,0,0.05)`,
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
              }}
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${method.color}10`,
                    border: `2px solid ${method.color}25`,
                  }}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                >
                  <method.icon
                    className="text-xl"
                    style={{ color: method.color }}
                  />
                </motion.div>

                {/* Content */}
                <div className="flex-grow">
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: BRAND.navy.dark }}
                  >
                    {method.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#64748B" }}
                  >
                    {method.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: method.color }}
                    >
                      Learn More
                    </span>
                    <FaArrowRight
                      className="text-xs transition-transform group-hover:translate-x-1"
                      style={{ color: method.color }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

// Timeline/Milestones Section (Bonus)
const MilestonesSection = () => {
  const milestones = [
    {
      year: "2019",
      event: "Launched first scholarship program",
      icon: FaGraduationCap,
    },
    {
      year: "2020",
      event: "Reached 1,000+ lives impacted milestone",
      icon: FaHeart,
    },
    {
      year: "2021",
      event: "Started carbon neutrality initiative",
      icon: FaLeaf,
    },
    {
      year: "2022",
      event: "Launched digital literacy program",
      icon: FaLaptopCode,
    },
    { year: "2023", event: "10,000+ lives impacted globally", icon: FaAward },
    {
      year: "2024",
      event: "Expanding to 5 new communities",
      icon: FaGlobeAmericas,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
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
            🏆 Our Journey
          </span>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: BRAND.navy.dark }}
          >
            Key <span style={{ color: BRAND.gold.primary }}>Milestones</span>
          </h2>
        </motion.header>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 hidden lg:block"
            style={{
              background: `linear-gradient(to bottom, ${BRAND.gold.primary}, ${BRAND.navy.lighter})`,
            }}
          />

          <div className="space-y-8 lg:space-y-12">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-6 ${
                  idx % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div
                  className={`flex-1 ${idx % 2 === 0 ? "lg:text-left" : "lg:text-right"}`}
                >
                  <div
                    className="inline-block p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    style={{
                      background:
                        idx % 2 === 0 ? "white" : `${BRAND.navy.dark}`,
                      border: `1px solid ${idx % 2 === 0 ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.1)"}`,
                    }}
                  >
                    <div
                      className={`flex items-center gap-3 mb-2 ${idx % 2 === 0 ? "" : "lg:flex-row-reverse"}`}
                    >
                      <milestone.icon
                        className="text-xl"
                        style={{
                          color:
                            idx % 2 === 0
                              ? BRAND.gold.primary
                              : BRAND.gold.primary,
                        }}
                      />
                      <span
                        className="text-sm font-bold"
                        style={{
                          color:
                            idx % 2 === 0
                              ? BRAND.navy.dark
                              : BRAND.gold.primary,
                        }}
                      >
                        {milestone.year}
                      </span>
                    </div>
                    <p
                      className="font-medium"
                      style={{
                        color: idx % 2 === 0 ? BRAND.navy.dark : "white",
                      }}
                    >
                      {milestone.event}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center hidden lg:flex z-10"
                  style={{
                    background: BRAND.gold.gradient,
                    boxShadow: `0 0 20px ${BRAND.gold.primary}40`,
                  }}
                >
                  <FaCheckCircle className="text-white text-sm" />
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Closing Section Component
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
      style={{ background: "#10B981" }}
    />

    <motion.div
      animate={{ y: [0, 15, 0] }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 3,
      }}
      className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.04]"
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

        {/* Closing Quote */}
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-8">
          We believe true success is measured not just by{" "}
          <span
            style={{
              backgroundImage: BRAND.gold.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            business growth
          </span>
          , but by the{" "}
          <span
            style={{
              backgroundImage:
                "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            positive impact
          </span>{" "}
          we create in the world around us.
        </blockquote>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <a
            href="/contact"
            className="group relative px-10 py-5 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2"
            style={{
              background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
              color: "white",
              boxShadow: `0 8px 30px rgba(16, 185, 129, 0.35)`,
            }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Partner With Us
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </span>

            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            </div>
          </a>

          <a
            href="/careers"
            className="px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/5 focus:outline-none focus:ring-2"
            style={{
              border: `1px solid rgba(255,255,255,0.2)`,
              color: "white",
            }}
          >
            Join Our Mission →
          </a>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-12"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          {[
            { icon: FaShieldAlt, text: "Transparent Reporting" },
            { icon: FaChartLine, text: "Measurable Impact" },
            { icon: FaUsers, text: "Community Driven" },
          ].map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2 text-white/60">
              <badge.icon
                className="text-sm"
                style={{ color: BRAND.gold.primary }}
              />
              <span className="text-xs font-medium">{badge.text}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Main Component
const CommunityImpactPage = () => {
  return (
    <main role="main">
      <HeroSection />
      <FocusAreasSection />
      <ImpactStatsSection />
      <ContributionSection />
      <MilestonesSection />
      <ClosingSection />
    </main>
  );
};

export default CommunityImpactPage;
