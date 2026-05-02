// import React from "react";
// import { motion, useInView } from "framer-motion";
// import { Link } from "react-router-dom";
// import { FaArrowRight, FaChevronRight, FaPlay } from "react-icons/fa";

// // 🎨 BRAND COLORS (Innovise IT)
// const BRAND = {
//   navy: {
//     dark: "#0B1D33",
//     mid: "#0D2847",
//     light: "#143A63",
//     lighter: "#1A4570",
//   },
//   gold: {
//     primary: "#FDB913",
//     light: "#FFD54F",
//     gradient: "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
//   },
// };

// // 📦 MAIN COMPONENT
// const MixedMediaText = ({
//   // Props with defaults
//   label = "Careers",
//   title = "Build a career that's as exciting as the world we're shaping",
//   description = "Grow personally and professionally in a global company that helps you unlock your full potential.",
//   ctaText = "Join us",
//   ctaLink = "/careers",
//   imageSrc = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop",
//   imageAlt = "Team collaboration",
//   reverse = false, // Set true for image-right layout
//   variant = "default", // default | overlap | split | minimal
//   bgStyle = "light", // light | dark | brand | gradient
// }) => {
//   const ref = React.useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section
//       ref={ref}
//       className={`relative overflow-hidden ${
//         bgStyle === "dark"
//           ? "bg-gray-900"
//           : bgStyle === "brand"
//             ? ""
//             : bgStyle === "gradient"
//               ? "bg-gradient-to-br from-slate-50 via-white to-blue-50"
//               : "bg-white"
//       }`}
//       style={
//         bgStyle === "brand"
//           ? {
//               background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 50%, ${BRAND.navy.lighter} 100%)`,
//             }
//           : {}
//       }
//     >
//       {/* Background Decorations */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Subtle Grid */}
//         {(bgStyle === "brand" || bgStyle === "dark") && (
//           <div
//             className="absolute inset-0 opacity-[0.02]"
//             style={{
//               backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//               backgroundSize: "40px 40px",
//             }}
//           />
//         )}

//         {/* Floating Orbs */}
//         {bgStyle !== "minimal" && (
//           <>
//             <motion.div
//               animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
//               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20"
//               style={{
//                 background:
//                   bgStyle === "brand" ? BRAND.gold.primary : "#3B82F6",
//               }}
//             />
//             <motion.div
//               animate={{ y: [0, 15, 0] }}
//               transition={{
//                 duration: 6,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: 2,
//               }}
//               className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-10"
//               style={{
//                 background:
//                   bgStyle === "brand" ? BRAND.navy.lighter : "#8B5CF6",
//               }}
//             />
//           </>
//         )}
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
//         {/* ==================== MAIN CONTAINER ==================== */}
//         <div
//           className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
//             reverse ? "lg:flex-row-reverse" : ""
//           }`}
//         >
//           {/* ========== IMAGE SECTION ========== */}
//           <motion.div
//             initial={{ opacity: 0, x: reverse ? 60 : -60 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
//             className={`relative ${variant === "overlap" ? "lg:-mr-20" : ""}`}
//           >
//             {/* Image Container */}
//             <div className="relative group">
//               {/* Main Image */}
//               <div
//                 className={`relative overflow-hidden rounded-3xl shadow-2xl ${
//                   variant === "split" ? "rounded-l-3xl" : "rounded-3xl"
//                 }`}
//                 style={
//                   bgStyle === "brand" || bgStyle === "dark"
//                     ? { border: "1px solid rgba(253,185,19,0.2)" }
//                     : {}
//                 }
//               >
//                 {/* Image */}
//                 <img
//                   src={imageSrc}
//                   alt={imageAlt}
//                   loading="lazy"
//                   className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
//                   style={{ maxHeight: "600px" }}
//                 />

//                 {/* Overlay Gradient on Hover */}
//                 <div
//                   className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
//                   style={{
//                     background:
//                       bgStyle === "brand"
//                         ? `linear-gradient(135deg, ${BRAND.navy.dark}80, transparent)`
//                         : "linear-gradient(135deg, #0D284780, transparent)",
//                   }}
//                 />
//               </div>

//               {/* Floating Stats Card (Optional Decorative Element) */}
//               {variant !== "minimal" && (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                   transition={{ delay: 0.4, type: "spring" }}
//                   className="absolute -bottom-6 -right-6 lg:-right-12 p-6 rounded-2xl shadow-xl backdrop-blur-md max-w-[200px]"
//                   style={{
//                     background:
//                       bgStyle === "brand" || bgStyle === "dark"
//                         ? "rgba(13,40,71,0.9)"
//                         : "rgba(255,255,255,0.95)",
//                     border: `1px solid ${bgStyle === "brand" ? "rgba(253,185,19,0.3)" : "rgba(0,0,0,0.08)"}`,
//                   }}
//                 >
//                   <div
//                     className="text-3xl font-black mb-1"
//                     style={{ color: BRAND.gold.primary }}
//                   >
//                     500+
//                   </div>
//                   <div
//                     className="text-xs uppercase tracking-wider"
//                     style={{
//                       color:
//                         bgStyle === "brand"
//                           ? "rgba(255,255,255,0.7)"
//                           : "#64748b",
//                     }}
//                   >
//                     Open Positions
//                   </div>

//                   {/* Pulse Indicator */}
//                   <div className="mt-3 flex items-center gap-2">
//                     <span className="relative flex h-2 w-2">
//                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//                       <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
//                     </span>
//                     <span className="text-[10px]" style={{ color: "#22C55E" }}>
//                       Hiring Now
//                     </span>
//                   </div>
//                 </motion.div>
//               )}

//               {/* Corner Decoration */}
//               {bgStyle === "brand" && (
//                 <div
//                   className="absolute -top-3 -left-3 w-24 h-24 rounded-2xl -z-10"
//                   style={{ background: BRAND.gold.gradient, opacity: 0.3 }}
//                 />
//               )}
//             </div>

//             {/* Background Shape (for overlap variant) */}
//             {variant === "overlap" && (
//               <div
//                 className="hidden lg:block absolute -top-8 -left-8 w-full h-full rounded-3xl -z-10"
//                 style={{ background: BRAND.gold.gradient, opacity: 0.1 }}
//               />
//             )}
//           </motion.div>

//           {/* ========== TEXT CONTENT SECTION ========== */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{
//               duration: 0.8,
//               delay: 0.2,
//               ease: [0.25, 0.46, 0.45, 0.94],
//             }}
//             className={`${variant === "overlap" ? "lg:-ml-20 lg:pt-8" : ""}`}
//           >
//             {/* Label / Badge */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.3 }}
//               className="mb-6"
//             >
//               <span
//                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-[0.2em]"
//                 style={{
//                   background:
//                     bgStyle === "brand" || bgStyle === "dark"
//                       ? "rgba(253,185,19,0.15)"
//                       : "rgba(13,40,71,0.08)",
//                   color:
//                     bgStyle === "brand" || bgStyle === "dark"
//                       ? BRAND.gold.primary
//                       : BRAND.navy.mid,
//                   border: `1px solid ${
//                     bgStyle === "brand" || bgStyle === "dark"
//                       ? "rgba(253,185,19,0.3)"
//                       : "rgba(13,40,71,0.15)"
//                   }`,
//                 }}
//               >
//                 <span
//                   className="w-1.5 h-1.5 rounded-full animate-pulse"
//                   style={{ background: BRAND.gold.primary }}
//                 />
//                 {label}
//               </span>
//             </motion.div>

//             {/* Title */}
//             <h3
//               className={`font-bold leading-tight mb-6 ${
//                 variant === "minimal"
//                   ? "text-3xl md:text-4xl"
//                   : "text-3xl md:text-4xl lg:text-5xl"
//               }`}
//               style={{
//                 color:
//                   bgStyle === "brand" || bgStyle === "dark"
//                     ? "#FFFFFF"
//                     : BRAND.navy.dark,
//               }}
//             >
//               {title.split(" ").map((word, idx) => (
//                 <span key={idx}>
//                   {idx === Math.floor(title.split(" ").length / 2) ? (
//                     <span style={{ color: BRAND.gold.primary }}>{word} </span>
//                   ) : (
//                     `${word} `
//                   )}
//                 </span>
//               ))}
//             </h3>

//             {/* Description */}
//             <p
//               className={`leading-relaxed mb-8 ${
//                 variant === "minimal" ? "text-base" : "text-lg"
//               }`}
//               style={{
//                 color:
//                   bgStyle === "brand" || bgStyle === "dark"
//                     ? "rgba(255,255,255,0.7)"
//                     : "rgba(11,29,51,0.65)",
//               }}
//             >
//               {description}
//             </p>

//             {/* Features List (Optional Enhancement) */}
//             {variant !== "minimal" && (
//               <ul className="space-y-3 mb-8">
//                 {[
//                   "Global opportunities across 30+ countries",
//                   "Competitive compensation & benefits",
//                   "Learning & development programs",
//                   "Inclusive & diverse culture",
//                 ].map((item, idx) => (
//                   <li key={idx} className="flex items-center gap-3">
//                     <div
//                       className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
//                       style={{ background: `${BRAND.gold.primary}20` }}
//                     >
//                       <FaChevronRight
//                         className="text-[10px]"
//                         style={{ color: BRAND.gold.primary }}
//                       />
//                     </div>
//                     <span
//                       className="text-sm font-medium"
//                       style={{
//                         color:
//                           bgStyle === "brand" || bgStyle === "dark"
//                             ? "rgba(255,255,255,0.85)"
//                             : BRAND.navy.dark,
//                       }}
//                     >
//                       {item}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             )}

//             {/* CTA Button Group */}
//             <div className="flex flex-wrap items-center gap-4">
//               {/* Primary CTA */}
//               <Link
//                 to={ctaLink}
//                 className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
//                 style={{
//                   background: BRAND.gold.gradient,
//                   color: BRAND.navy.dark,
//                   boxShadow: `0 4px 20px rgba(253,185,19,0.35)`,
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.boxShadow = `0 8px 30px rgba(253,185,19,0.5)`;
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.boxShadow = `0 4px 20px rgba(253,185,19,0.35)`;
//                 }}
//               >
//                 <span className="relative z-10">{ctaText}</span>
//                 <FaArrowRight className="relative z-10 text-sm group-hover:translate-x-1 transition-transform" />

//                 {/* Shine Effect */}
//                 <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
//                   <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
//                 </div>
//               </Link>

//               {/* Secondary CTA (Optional) */}
//               {variant !== "minimal" && (
//                 <Link
//                   to="/culture"
//                   className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-white/5"
//                   style={{
//                     border: `1px solid ${
//                       bgStyle === "brand" || bgStyle === "dark"
//                         ? "rgba(253,185,19,0.4)"
//                         : "rgba(13,40,71,0.2)"
//                     }`,
//                     color:
//                       bgStyle === "brand" || bgStyle === "dark"
//                         ? BRAND.gold.primary
//                         : BRAND.navy.mid,
//                   }}
//                 >
//                   <FaPlay className="text-xs" />
//                   Our Culture
//                 </Link>
//               )}
//             </div>

//             {/* Trust Indicators */}
//             {variant !== "minimal" && (
//               <div
//                 className="mt-10 pt-8 flex flex-wrap items-center gap-6 md:gap-10"
//                 style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
//               >
//                 {[
//                   { value: "4.5★", label: "Glassdoor Rating" },
//                   { value: "92%", label: "Employee Satisfaction" },
//                   { value: "Top 10", label: "Best Workplaces" },
//                 ].map((stat, idx) => (
//                   <div key={idx}>
//                     <div
//                       className="text-lg font-bold"
//                       style={{ color: BRAND.gold.primary }}
//                     >
//                       {stat.value}
//                     </div>
//                     <div
//                       className="text-xs uppercase tracking-wider mt-0.5"
//                       style={{ color: "rgba(255,255,255,0.5)" }}
//                     >
//                       {stat.label}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </motion.div>
//         </div>
//       </div>

//       {/* Bottom Wave Divider (Optional) */}
//       {variant === "default" && (
//         <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
//           <svg
//             viewBox="0 0 1200 120"
//             preserveAspectRatio="none"
//             className="relative block w-full h-16 md:h-24"
//             style={{
//               fill:
//                 bgStyle === "brand" || bgStyle === "dark"
//                   ? BRAND.navy.dark
//                   : "#FFFFFF",
//             }}
//           >
//             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.53,118.92,141.57,68.27,321.39,56.44Z" />
//           </svg>
//         </div>
//       )}
//     </section>
//   );
// };

// export default MixedMediaText;

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaChevronRight,
  FaPlay,
  FaQuoteLeft,
} from "react-icons/fa";
import career from "../../assets/industry/career.png";

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

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const textX = useTransform(scrollYProgress, [0, 1], [reverse ? 60 : -60, 0]);

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
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{
        background: `linear-gradient(160deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 40%, ${BRAND.navy.lighter} 100%)`,
      }}
    >
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute w-full h-full opacity-[0.03]"
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

        {/* Gradient Orbs */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${BRAND.gold.primary}20, transparent 70%)`,
          }}
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute -bottom-48 -right-48 w-[700px] h-[700px] rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${BRAND.navy.lighter}15, transparent 70%)`,
          }}
        />

        {/* Grid Lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(${BRAND.gold.primary}08 1px, transparent 1px),
            linear-gradient(90deg, ${BRAND.gold.primary}08 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-4 lg:px-6 py-10 lg:py-12">
        <div
          className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}
        >
          {/* ========== IMAGE SECTION - PARALLAX ========== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative group perspective-1000">
              {/* Glow Behind Image */}
              <motion.div
                className="absolute -inset-4 rounded-3xl blur-2xl"
                style={{ background: BRAND.gold.gradient, opacity: 0.15 }}
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Image Frame */}
              <div
                className="relative overflow-hidden shadow-2xl transform-gpu"
                style={{ border: `1px solid ${BRAND.gold.primary}25` }}
              >
                {/* Parallax Image */}
                <motion.img
                  src={imageSrc}
                  alt=""
                  loading="lazy"
                  style={{ y: imageY }}
                  className="w-full h-auto object-cover max-h-[650px]"
                />

                {/* Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating Elements */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute -bottom-8 left-8 p-6 rounded-2xl backdrop-blur-xl shadow-2xl z-20"
                style={{
                  background: `linear-gradient(135deg, ${BRAND.navy.mid}ee, ${BRAND.navy.lighter}aa)`,
                  border: `1px solid ${BRAND.gold.primary}35`,
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ background: BRAND.gold.gradient }}
                  >
                    <span
                      className="text-2xl font-black"
                      style={{ color: BRAND.navy.dark }}
                    >
                      500+
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-bold">Open Roles</p>
                    <p
                      className="text-xs"
                      style={{ color: BRAND.gold.primary }}
                    >
                      Across 30+ locations
                    </p>
                  </div>
                </div>
              </motion.div> */}

              {/* Decorative Corner Lines */}
              <svg
                className="absolute -top-4 -left-4 w-20 h-20 text-yellow-500/30"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M0 100 L0 20 Q0 0 20 0 L100 0"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                className="absolute -bottom-4 -right-4 w-20 h-20 text-yellow-500/30"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M100 0 L100 80 Q100 100 80 100 L0 100"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </motion.div>

          {/* ========== TEXT SECTION - REVEAL ANIMATION ========== */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={reverse ? 0.3 : 0}
          >
            {/* Label Badge */}
            <motion.div
              variants={child}
              className="mb-8 inline-flex items-center gap-3"
            >
              <span
                className="w-8 h-[1px]"
                style={{ background: BRAND.gold.gradient }}
              />
              <span
                className="text-xs font-bold uppercase tracking-[0.3em]"
                style={{ color: BRAND.gold.primary }}
              >
                {label}
              </span>
              <span
                className="w-8 h-[1px]"
                style={{ background: BRAND.gold.gradient }}
              />
            </motion.div>

            {/* Title - Word by Word Reveal */}
            <h2
              className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] mb-8"
              style={{ color: "#FFFFFF" }}
            >
              {title.split(" ").map((word, idx) => (
                <motion.span
                  key={idx}
                  variants={child}
                  className="inline-block mr-3"
                  style={{
                    color:
                      idx === Math.floor(title.split(" ").length / 2)
                        ? BRAND.gold.primary
                        : undefined,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h2>

            {/* Description */}
            <motion.p
              variants={child}
              className="text-lg leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.65)" }}
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
                  className="px-4 py-2 rounded-full text-sm font-medium border transition-all cursor-default hover:border-opacity-60"
                  style={{
                    borderColor: `${BRAND.gold.primary}25`,
                    color: "rgba(255,255,255,0.75)",
                    background: `${BRAND.gold.primary}08`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = BRAND.gold.primary;
                    e.currentTarget.style.color = BRAND.gold.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${BRAND.gold.primary}25`;
                    e.currentTarget.style.color = "rgba(255,255,255,0.75)";
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
              {/* Primary Button */}
              <Link
                to={ctaLink}
                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-500"
                style={{
                  background: BRAND.gold.gradient,
                  color: BRAND.navy.dark,
                  boxShadow: `0 8px 32px rgba(253,185,19,0.4)`,
                }}
              >
                <span className="relative z-10">{ctaText}</span>
                <FaArrowRight className="relative z-10 transition-transform group-hover:translate-x-1" />

                {/* Hover Shine */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out">
                  <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
                </div>
              </Link>

              {/* Secondary Button - Video Style */}
              {/* <button
                className="group flex items-center gap-3 px-6 py-5 rounded-2xl font-semibold transition-all duration-300"
                style={{
                  border: `1px solid rgba(255,255,255,0.15)`,
                  color: "#FFFFFF",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${BRAND.gold.primary}60`;
                  e.currentTarget.style.background = `${BRAND.gold.primary}08`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center relative"
                  style={{
                    background: `${BRAND.gold.primary}15`,
                    border: `1px solid ${BRAND.gold.primary}40`,
                  }}
                >
                  <FaPlay
                    className="text-xs ml-0.5"
                    style={{ color: BRAND.gold.primary }}
                  />

                  
                  <span
                    className="absolute inset-0 rounded-full animate-ping opacity-20"
                    style={{ background: BRAND.gold.primary }}
                  />
                </div>
                Watch Video
              </button> */}
            </motion.div>

            {/* Trust Bar */}
            {/* <motion.div
              variants={child}
              className="mt-12 pt-8 flex items-center gap-8 md:gap-12"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              {[
                { num: "4.9★", label: "Glassdoor" },
                { num: "95%", label: "Retention" },
                { num: "Top 5", label: "Employer" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span
                    className="block text-2xl font-black"
                    style={{ color: BRAND.gold.primary }}
                  >
                    {stat.num}
                  </span>
                  <span
                    className="text-xs uppercase tracking-wider mt-1 block"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MixedMediaCinematic;
