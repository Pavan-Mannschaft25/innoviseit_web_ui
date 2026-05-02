import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHome,
  FaArrowLeft,
  FaSearch,
  FaExclamationTriangle,
} from "react-icons/fa";

// 🎨 BRAND COLORS
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

const NotFound = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
      style={{
        background: `linear-gradient(160deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 50%, ${BRAND.navy.lighter} 100%)`,
      }}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(${BRAND.gold.primary}11 1px, transparent 1px),
              linear-gradient(90deg, ${BRAND.gold.primary}11 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating Orbs */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.08]"
          style={{ background: BRAND.gold.primary }}
        />

        <motion.div
          animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.05]"
          style={{ background: BRAND.navy.lighter }}
        />

        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl opacity-[0.04]"
          style={{ background: BRAND.gold.light }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Animated 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <h1
            className="text-[100px] md:text-[150px] lg:text-[200px] font-black leading-none select-none"
            style={{
              backgroundImage: BRAND.gold.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 20px 40px rgba(253,185,19,0.25))",
            }}
          >
            404
          </h1>

          {/* Underline decoration */}
          <div
            className="w-48 h-1 mx-auto mt-[-20px] rounded-full"
            style={{ background: BRAND.gold.gradient }}
          />
        </motion.div>

        {/* Error Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-6"
        >
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mx-auto"
            style={{
              background: `${BRAND.gold.primary}15`,
              border: `1px solid ${BRAND.gold.primary}30`,
            }}
          >
            <FaExclamationTriangle
              className="text-3xl"
              style={{ color: BRAND.gold.primary }}
            />
          </div>
        </motion.div>

        {/* Message */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Oops! The page you're looking for seems to have wandered off into the
          digital void. Let's get you back on track.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Primary Button - Go Home */}
          <Link
            to="/"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            style={{
              background: BRAND.gold.gradient,
              color: BRAND.navy.dark,
              boxShadow: `0 8px 30px rgba(253,185,19,0.35)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 12px 40px rgba(253,185,19,0.5)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 8px 30px rgba(253,185,19,0.35)`;
            }}
          >
            <FaHome className="relative z-10 text-lg group-hover:animate-bounce" />
            <span className="relative z-10">Back to Home</span>

            {/* Shine Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12" />
            </div>
          </Link>

          {/* Secondary Button - Go Back */}
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:bg-white/5"
            style={{
              border: `1px solid rgba(255,255,255,0.2)`,
              color: "#FFFFFF",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${BRAND.gold.primary}60`;
              e.currentTarget.style.background = `${BRAND.gold.primary}08`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            <FaArrowLeft className="text-sm group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </motion.div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
          fill={BRAND.navy.dark}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.53,118.92,141.57,68.27,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};

export default NotFound;
