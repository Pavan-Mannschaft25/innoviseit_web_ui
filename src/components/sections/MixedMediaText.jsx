import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import career from "../../assets/industry/career.png";

// ============================================================
// 🎨 NAVY & GOLD BRAND COLORS (for accents on white BG)
// ============================================================
const BRAND = {
  navy: {
    dark: "#12324f",
    mid: "#12324f",
    light: "#132D4B",
    lighter: "#1A4570",
  },
  gold: {
    primary: "#FDB913",
    light: "#FFD54F",
    gradient: "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
  },
};

const MixedMediaCinematic = ({
  label = "Careers",
  title = "Build a career that's as exciting as the world we're shaping",
  description = "Grow personally and professionally in a global company that helps you unlock your full potential.",
  ctaText = "Join us",
  ctaLink = "/careers",
  imageSrc = career,
  reverse = false,
}) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  // Word animation helper
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: i * 0.3 },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden flex items-center bg-white"
    >
      {/*  Animated Background Effects for White Theme */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Noise Texture */}
        <svg
          className="absolute w-full h-full opacity-[0.015]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        {/* Gold Glow Top Left */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${BRAND.gold.primary}08, transparent 70%)`,
          }}
        />

        {/* Navy Glow Bottom Right */}
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute -bottom-48 -right-48 w-[800px] h-[800px] rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${BRAND.navy.dark}06, transparent 70%)`,
          }}
        />

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(${BRAND.navy.dark}04 1px, transparent 1px),
              linear-gradient(90deg, ${BRAND.navy.dark}04 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          }}
        />

        {/* Decorative Circles */}
        <div
          className="absolute top-1/4 right-10 w-64 h-64 rounded-full opacity-40"
          style={{
            background: `radial-gradient(circle, ${BRAND.gold.primary}05, transparent 70%)`,
          }}
        />
        <div
          className="absolute bottom-1/3 left-5 w-96 h-96 rounded-full opacity-30"
          style={{
            background: `radial-gradient(circle, ${BRAND.navy.light}04, transparent 70%)`,
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* ================================ */}
          {/* 🖼️ IMAGE SECTION - PARALLAX       */}
          {/* ================================ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative order-2 lg:order-none"
          >
            <div className="relative group perspective-1000">
              {/* Glow Behind Image */}
              <motion.div
                className="absolute -inset-6 rounded-3xl blur-3xl"
                style={{
                  background: BRAND.gold.gradient,
                  opacity: 0.12,
                }}
                animate={{ opacity: [0.08, 0.18, 0.08] }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              {/* Image Frame with Shadow */}
              <div
                className="relative overflow-hidden shadow-2xl transform-gpu rounded-2xl"
                style={{
                  border: `1px solid ${BRAND.gold.primary}20`,
                  boxShadow:
                    "0 25px 60px rgba(11, 29, 51, 0.15), 0 0 0 1px rgba(253, 185, 19, 0.05)",
                }}
              >
                {/* Parallax Image */}
                <motion.img
                  src={imageSrc}
                  alt=""
                  loading="lazy"
                  style={{ y: imageY }}
                  className="w-full h-auto object-cover max-h-[600px]"
                />

                {/* Subtle Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Decorative Corner Lines - Gold */}
              <svg
                className="absolute -top-5 -left-5 w-24 h-24 text-yellow-500/40"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M0 100 L0 20 Q0 0 20 0 L100 0"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>

              <svg
                className="absolute -bottom-5 -right-5 w-24 h-24 text-yellow-500/40"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M100 0 L100 80 Q100 100 80 100 L0 100"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                className="absolute -bottom-4 -right-4 lg:bottom-6 lg:-right-6 px-5 py-2.5 bg-white rounded-xl shadow-lg border border-yellow-500/20 backdrop-blur-sm"
              >
                <span className="text-sm font-bold text-[#12324f] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Open Positions
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* ================================ */}
          {/* 📝 TEXT SECTION - REVEAL ANIMATION */}
          {/* ================================ */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={reverse ? 0.3 : 0}
            className="order-1 lg:order-none"
          >
            {/* Label Badge */}
            <motion.div
              variants={child}
              className="mb-7 inline-flex items-center gap-3"
            >
              <span
                className="w-10 h-[2px]"
                style={{ background: BRAND.gold.gradient }}
              />
              <span
                className="text-xs md:text-sm font-bold uppercase tracking-[0.25em]"
                style={{ color: BRAND.gold.primary }}
              >
                {label}
              </span>
              <span
                className="w-10 h-[2px]"
                style={{ background: BRAND.gold.gradient }}
              />
            </motion.div>

            {/* Title - Word by Word Reveal */}
            <h2
              className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold leading-[1.15] mb-7"
              style={{ color: BRAND.navy.dark }}
            >
              {title.split(" ").map((word, idx) => (
                <motion.span
                  key={idx}
                  variants={child}
                  className="inline-block mr-[0.35em]"
                  style={{
                    color:
                      idx === Math.floor(title.split(" ").length / 2)
                        ? BRAND.gold.primary
                        : BRAND.navy.dark,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h2>

            {/* Description */}
            <motion.p
              variants={child}
              className="text-lg md:text-lg leading-relaxed mb-9 max-w-xl"
              style={{ color: `${BRAND.navy.mid}CC` }} // Slightly transparent navy
            >
              {description}
            </motion.p>

            {/* Feature Pills */}
            <motion.div variants={child} className="flex flex-wrap gap-3 mb-10">
              {[
                "Global Teams",
                "Growth Culture",
                "Learning Hub",
                "Inclusive",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold border transition-all cursor-default hover:shadow-md"
                  style={{
                    borderColor: `${BRAND.navy.dark}15`,
                    color: BRAND.navy.mid,
                    background: `${BRAND.navy.dark}04`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = BRAND.gold.primary;
                    e.currentTarget.style.color = BRAND.navy.dark;
                    e.currentTarget.style.background = `${BRAND.gold.primary}10`;
                    e.currentTarget.style.boxShadow = `0 4px 15px ${BRAND.gold.primary}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${BRAND.navy.dark}15`;
                    e.currentTarget.style.color = BRAND.navy.mid;
                    e.currentTarget.style.background = `${BRAND.navy.dark}04`;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={child}
              className="flex flex-wrap items-center gap-5"
            >
              {/* Primary Button - Gold Gradient */}
              <Link
                to={ctaLink}
                className="group relative inline-flex items-center gap-3 px-10 py-3 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-500"
                style={{
                  background: BRAND.gold.gradient,
                  color: BRAND.navy.dark,
                  boxShadow: `0 10px 40px rgba(253,185,19,0.35)`,
                }}
              >
                <span className="relative z-10">{ctaText}</span>
                <FaArrowRight className="relative z-10 transition-transform group-hover:translate-x-1.5 group-hover:-translate-y-0.5" />

                {/* Hover Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out">
                  <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
                </div>
              </Link>

              {/* Secondary Text Link */}
              <Link
                to="/about#culture"
                className="group relative inline-flex items-center gap-3 px-10 py-3 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-500"
                style={{
                  background: BRAND.gold.gradient,
                  color: BRAND.navy.dark,
                  boxShadow: `0 10px 40px rgba(253,185,19,0.35)`,
                }}
              >
                <span>Learn about our culture</span>
                <FaArrowRight className="relative z-10 transition-transform group-hover:translate-x-1.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${BRAND.gold.primary}30, transparent)`,
        }}
      />

      {/* Custom Styles */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        @keyframes float-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
};

export default MixedMediaCinematic;
