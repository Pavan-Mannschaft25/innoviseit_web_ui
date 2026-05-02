// import React, { useState, useEffect } from "react";
// import { motion, useInView, useAnimation } from "framer-motion";
// import { useInView as useInViewHook } from "react-intersection-observer";
// import {
//   FaClock,
//   FaCheckCircle,
//   FaUserCheck,
//   FaHandshake,
//   FaUsers,
//   FaChartLine,
//   FaArrowRight,
//   FaStar,
// } from "react-icons/fa";

// // 📊 METRICS DATA
// const metricsData = [
//   {
//     id: 1,
//     icon: FaClock,
//     title: "Time-To-Fill",
//     value: "<5",
//     unit: "Days",
//     description:
//       "Less than 5 days to fill resource requests. Provides efficient sourcing and reduced project delays.",
//     highlight: "Fastest in Industry",
//     color: "from-yellow-400 to-orange-500",
//     bgColor: "bg-yellow-500/10",
//     borderColor: "border-yellow-500/30",
//     textColor: "text-yellow-400",
//   },
//   {
//     id: 2,
//     icon: FaCheckCircle,
//     title: "Quality Of Hire",
//     value: "98%",
//     unit: "Satisfaction",
//     description:
//       "Positive feedback on candidate performance. Retention rates over 6 months, and client feedback reflecting strong fit and vetting.",
//     highlight: "Top-Tier Talent",
//     color: "from-emerald-400 to-green-500",
//     bgColor: "bg-emerald-500/10",
//     borderColor: "border-emerald-500/30",
//     textColor: "text-emerald-400",
//   },
//   {
//     id: 3,
//     icon: FaUserCheck,
//     title: "Submission-To-Interview Ratio",
//     value: "3:1",
//     unit: "Ratio",
//     description:
//       "Number of submissions per interview @ 3:1. Deep understanding of customer requirements and candidate relevance.",
//     highlight: "Precision Matching",
//     color: "from-cyan-400 to-blue-500",
//     bgColor: "bg-cyan-500/10",
//     borderColor: "border-cyan-500/30",
//     textColor: "text-cyan-400",
//   },
//   {
//     id: 4,
//     icon: FaHandshake,
//     title: "Hire-To-Interview Ratio",
//     value: "92%",
//     unit: "Conversion",
//     description:
//       "High Percentage of interviewed candidates hired. Partner provides high-caliber candidates aligned with resource requirements.",
//     highlight: "Exceptional Fit Rate",
//     color: "from-violet-400 to-purple-500",
//     bgColor: "bg-violet-500/10",
//     borderColor: "border-violet-500/30",
//     textColor: "text-violet-400",
//   },
//   {
//     id: 5,
//     icon: FaUsers,
//     title: "Candidate Pipeline Strength",
//     value: "500+",
//     unit: "Active",
//     description:
//       "High Number of pre-vetted, qualified candidates available for immediate placement. Robust pipeline ensures quick response times.",
//     highlight: "Robust Pipeline",
//     color: "from-pink-400 to-rose-500",
//     bgColor: "bg-pink-500/10",
//     borderColor: "border-pink-500/30",
//     textColor: "text-pink-400",
//   },
//   {
//     id: 6,
//     icon: FaChartLine,
//     title: "Candidate Retention Rate",
//     value: "94%",
//     unit: "Retention",
//     description:
//       "High Percentage of placed candidates remaining with clients for 6-12 months. Indicates successful placements.",
//     highlight: "Long-term Success",
//     color: "from-amber-400 to-yellow-500",
//     bgColor: "bg-amber-500/10",
//     borderColor: "border-amber-500/30",
//     textColor: "text-amber-400",
//   },
// ];

// // 🔢 ANIMATED COUNTER COMPONENT
// const AnimatedCounter = ({ target, suffix = "", duration = 2000 }) => {
//   const [count, setCount] = useState(0);
//   const { ref, inView } = useInViewHook({ triggerOnce: true, threshold: 0.5 });

//   useEffect(() => {
//     if (inView) {
//       let start = 0;
//       const end = parseInt(target.replace(/[^0-9]/g, "")) || 100;
//       const increment = end / (duration / 16);

//       const timer = setInterval(() => {
//         start += increment;
//         if (start >= end) {
//           setCount(end);
//           clearInterval(timer);
//         } else {
//           setCount(Math.floor(start));
//         }
//       }, 16);

//       return () => clearInterval(timer);
//     }
//   }, [inView, target, duration]);

//   return (
//     <span ref={ref}>
//       {target.includes("<") ? target : count}
//       {suffix}
//     </span>
//   );
// };

// // 📇 INDIVIDUAL METRIC CARD COMPONENT
// const MetricCard = ({ metric, index }) => {
//   const Icon = metric.icon;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
//       className="group relative"
//     >
//       <div className="relative h-full bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent backdrop-blur-sm rounded-3xl border border-white/[0.12] overflow-hidden hover:border-yellow-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-500/10">
//         {/* Top Gradient Accent Line */}
//         <div
//           className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${metric.color} opacity-60 group-hover:opacity-100 transition-opacity`}
//         />

//         {/* Corner Decorations */}
//         <div
//           className={`absolute top-4 right-4 w-20 h-20 rounded-full ${metric.bgColor} blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
//         />

//         {/* Content */}
//         <div className="relative p-8 lg:p-10">
//           {/* Icon Container - Premium Style */}
//           <div className="relative mb-6">
//             <div
//               className={`inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl ${metric.bgColor} border ${metric.borderColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
//             >
//               <Icon className={`text-2xl lg:text-3xl ${metric.textColor}`} />
//             </div>

//             {/* Floating Badge */}
//             <motion.div
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
//               className="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-[10px] font-bold uppercase tracking-wider text-gray-900 rounded-full shadow-lg shadow-yellow-500/30"
//             >
//               {metric.highlight.split(" ")[0]}
//             </motion.div>
//           </div>

//           {/* Title */}
//           <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
//             {metric.title}
//           </h3>

//           {/* Value Display */}
//           <div className="flex items-baseline gap-2 mb-4">
//             <span
//               className={`text-4xl lg:text-5xl font-black bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}
//             >
//               <AnimatedCounter target={metric.value} />
//             </span>
//             <span className="text-lg font-semibold text-gray-400">
//               {metric.unit}
//             </span>
//           </div>

//           {/* Description */}
//           <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
//             {metric.description}
//           </p>

//           {/* Bottom Action Indicator */}
//           <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
//             <span
//               className={`text-xs font-semibold uppercase tracking-wider ${metric.textColor}`}
//             >
//               {metric.highlight}
//             </span>
//             <FaArrowRight
//               className={`text-xs ${metric.textColor} opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300`}
//             />
//           </div>
//         </div>

//         {/* Hover Glow Effect */}
//         <div
//           className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-[0.03] pointer-events-none transition-opacity duration-500 rounded-3xl`}
//         />
//       </div>
//     </motion.div>
//   );
// };

// // 🎯 MAIN COMPONENT
// const PartnerSuccessMetrics = () => {
//   return (
//     <section
//       className="relative py-8 lg:py-12 overflow-hidden"
//       style={{
//         background: "linear-gradient(to bottom, #0d2847, #143a63, #1a4570)",
//       }}
//     >
//       {/* ✨ Background Effects */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Grid Pattern */}
//         <div
//           className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage: `
//             linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
//           `,
//             backgroundSize: "60px 60px",
//           }}
//         />

//         {/* Floating Orbs */}
//         <motion.div
//           animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{ y: [0, 25, 0], x: [0, -10, 0] }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 2,
//           }}
//           className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{ y: [0, 20, 0] }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 1,
//           }}
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-3xl"
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* ==================== HEADER SECTION ==================== */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16 lg:mb-20"
//         >
//           {/* Top Brand Label */}
//           <div className="inline-flex items-center gap-3 mb-6">
//             <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-yellow-500/50" />
//             <span className="text-sm md:text-base font-bold uppercase tracking-[0.35em] text-yellow-400/90">
//               Innovise
//             </span>
//             <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-yellow-500/50" />
//           </div>

//           {/* Main Title */}
//           <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
//             Partner{" "}
//             <span className="relative inline-block">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400">
//                 Success
//               </span>

//               {/* Underline Decoration */}
//               <svg
//                 className="absolute -bottom-2 left-0 w-full"
//                 viewBox="0 0 300 14"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M2 10C80 2 220 2 298 10"
//                   stroke="url(#yellowGradient)"
//                   strokeWidth="4"
//                   strokeLinecap="round"
//                 />
//                 <defs>
//                   <linearGradient
//                     id="yellowGradient"
//                     x1="0"
//                     y1="0"
//                     x2="300"
//                     y2="0"
//                   >
//                     <stop stopColor="#FDE047" stopOpacity="0" />
//                     <stop offset="0.5" stopColor="#FACC15" />
//                     <stop offset="1" stopColor="#FDE047" stopOpacity="0" />
//                   </linearGradient>
//                 </defs>
//               </svg>
//             </span>{" "}
//             Metrics
//           </h2>

//           {/* Subtitle */}
//           <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
//             Our commitment to excellence is reflected in our industry-leading
//             metrics that drive real business outcomes for our partners.
//           </p>

//           {/* Stats Summary Bar */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3 }}
//             className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10"
//           >
//             {[
//               { label: "Global Clients", value: "150+" },
//               { label: "Placements/Year", value: "2500+" },
//               { label: "Industries Served", value: "25+" },
//               { label: "Satisfaction Rate", value: "98%" },
//             ].map((stat, idx) => (
//               <div
//                 key={idx}
//                 className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
//               >
//                 <span className="text-xl md:text-2xl font-bold text-yellow-400">
//                   {stat.value}
//                 </span>
//                 <span className="text-xs md:text-sm text-gray-400">
//                   {stat.label}
//                 </span>
//               </div>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* ==================== METRICS GRID ==================== */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {metricsData.map((metric, index) => (
//             <MetricCard key={metric.id} metric={metric} index={index} />
//           ))}
//         </div>

//         {/* ==================== BOTTOM CTA SECTION ==================== */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//           className="mt-16 lg:mt-20 text-center"
//         >
//           {/* Divider */}
//           <div className="max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent mb-12" />

//           {/* CTA Content */}
//           <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-sm">
//             <div className="text-left">
//               <h3 className="text-2xl font-bold text-white mb-2">
//                 Ready to Partner with Us?
//               </h3>
//               <p className="text-gray-400 text-sm max-w-md">
//                 Experience the difference that industry-leading metrics can make
//                 for your organization's talent acquisition strategy.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
//               <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-gray-900 font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/30 hover:-translate-y-0.5">
//                 <span className="relative z-10 flex items-center gap-2">
//                   Get Started
//                   <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
//               </button>

//               <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 hover:border-yellow-500/50 transition-all duration-300">
//                 View Case Studies
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Bottom Gradient Fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a4570] to-transparent pointer-events-none" />
//     </section>
//   );
// };

// export default PartnerSuccessMetrics;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView as useInViewHook } from "react-intersection-observer";
import {
  FaClock,
  FaCheckCircle,
  FaUserCheck,
  FaHandshake,
  FaUsers,
  FaChartLine,
  FaArrowRight,
  FaChessKnight,
} from "react-icons/fa";

// 🎨 BRAND COLORS (From Innovise IT Logo)
const BRAND = {
  navy: {
    dark: "#0B1D33", // Darkest navy
    mid: "#0D2847", // Main navy
    light: "#143A63", // Lighter navy
    lighter: "#1A4570", // Lightest navy
  },
  gold: {
    primary: "#FDB913", // Main gold/yellow (from "IT" in logo)
    light: "#FFD54F", // Light gold
    dark: "#F59E0B", // Dark gold/amber
    gradient: "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
  },
};

// 📊 METRICS DATA
const metricsData = [
  {
    id: 1,
    icon: FaClock,
    title: "Time-To-Fill",
    value: "<5",
    unit: "Days",
    description:
      "Less than 5 days to fill resource requests. Provides efficient sourcing and reduced project delays.",
    highlight: "Fastest in Industry",
  },
  {
    id: 2,
    icon: FaCheckCircle,
    title: "Quality Of Hire",
    value: "98%",
    unit: "Satisfaction",
    description:
      "Positive feedback on candidate performance. Retention rates over 6 months, and client feedback reflecting strong fit and vetting.",
    highlight: "Top-Tier Talent",
  },
  {
    id: 3,
    icon: FaUserCheck,
    title: "Submission-To-Interview Ratio",
    value: "3:1",
    unit: "Ratio",
    description:
      "Number of submissions per interview @ 3:1. Deep understanding of customer requirements and candidate relevance.",
    highlight: "Precision Matching",
  },
  {
    id: 4,
    icon: FaHandshake,
    title: "Hire-To-Interview Ratio",
    value: "92%",
    unit: "Conversion",
    description:
      "High Percentage of interviewed candidates hired. Partner provides high-caliber candidates aligned with resource requirements.",
    highlight: "Exceptional Fit Rate",
  },
  {
    id: 5,
    icon: FaUsers,
    title: "Candidate Pipeline Strength",
    value: "500+",
    unit: "Active",
    description:
      "High Number of pre-vetted, qualified candidates available for immediate placement. Robust pipeline ensures quick response times.",
    highlight: "Robust Pipeline",
  },
  {
    id: 6,
    icon: FaChartLine,
    title: "Candidate Retention Rate",
    value: "94%",
    unit: "Retention",
    description:
      "High Percentage of placed candidates remaining with clients for 6-12 months. Indicates successful placements.",
    highlight: "Long-term Success",
  },
];

// 🔢 ANIMATED COUNTER
const AnimatedCounter = ({ target }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInViewHook({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      if (target.includes("<")) return; // Skip special characters

      let start = 0;
      const end = parseInt(target.replace(/[^0-9]/g, "")) || 100;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, target]);

  return <span ref={ref}>{target.includes("<") ? target : count}</span>;
};

// 📇 METRIC CARD COMPONENT
const MetricCard = ({ metric, index }) => {
  const Icon = metric.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className="group relative h-full"
    >
      <div
        className="relative h-full overflow-hidden transition-all duration-500 hover:-translate-y-2"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,217,61,0.08) 0%, rgba(253,185,19,0.03) 100%)",
          border: "1px solid rgba(253,185,19,0.15)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.border = `1px solid ${BRAND.gold.primary}`;
          e.currentTarget.style.boxShadow = `0 20px 40px rgba(253,185,19,0.15)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.border = "1px solid rgba(253,185,19,0.15)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* Top Gold Accent Bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] opacity-70 group-hover:opacity-100 transition-opacity"
          style={{ background: BRAND.gold.gradient }}
        />

        {/* Content */}
        <div className="relative p-8 lg:p-10">
          {/* Icon Container - Brand Styled */}
          <div className="relative mb-6 inline-block">
            <div
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3"
              style={{
                background: "rgba(253,185,19,0.1)",
                border: "1px solid rgba(253,185,19,0.25)",
              }}
            >
              <Icon
                className="text-2xl lg:text-3xl transition-colors duration-300"
                style={{ color: BRAND.gold.primary }}
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1 + 0.3,
                type: "spring",
                stiffness: 200,
              }}
              className="absolute -top-2 -right-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg"
              style={{
                background: BRAND.gold.gradient,
                color: BRAND.navy.dark,
              }}
            >
              {metric.highlight.split(" ")[0]}
            </motion.div>
          </div>

          {/* Title */}
          <h3
            className="text-xl lg:text-2xl font-bold mb-3 transition-colors duration-300"
            style={{ color: "#FFFFFF" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = BRAND.gold.primary)
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
          >
            {metric.title}
          </h3>

          {/* Value Display */}
          <div className="flex items-baseline gap-2 mb-5">
            <span
              className="text-5xl lg:text-6xl font-black"
              style={{
                backgroundImage: BRAND.gold.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              <AnimatedCounter target={metric.value} />
            </span>
            <span className="text-lg font-semibold text-gray-400">
              {metric.unit}
            </span>
          </div>

          {/* Description */}
          <p
            className="text-sm leading-relaxed line-clamp-3 mb-6 transition-colors duration-300"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            {metric.description}
          </p>

          {/* Bottom Divider & Action */}
          <div
            className="pt-4 flex items-center justify-between"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <span
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: BRAND.gold.primary }}
            >
              {metric.highlight}
            </span>
            <FaArrowRight
              className="text-xs opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300"
              style={{ color: BRAND.gold.primary }}
            />
          </div>
        </div>

        {/* Hover Corner Glow */}
        <div
          className="absolute bottom-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
          style={{ background: BRAND.gold.primary }}
        />
      </div>
    </motion.div>
  );
};

// 🎯 MAIN COMPONENT
const PartnerSuccessMetrics = () => {
  // Summary stats
  const summaryStats = [
    { label: "Global Clients", value: "150+" },
    { label: "Placements/Year", value: "2500+" },
    { label: "Industries Served", value: "25+" },
    { label: "Satisfaction Rate", value: "98%" },
  ];

  return (
    <section
      className="relative py-8 lg:py-12 overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${BRAND.navy.dark}, ${BRAND.navy.mid}, ${BRAND.navy.lighter})`,
      }}
    >
      {/* ✨ Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(${BRAND.gold.primary}11 1px, transparent 1px),
              linear-gradient(90deg, ${BRAND.gold.primary}11 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Floating Gold Orbs - Brand Colors */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.07]"
          style={{ background: BRAND.gold.primary }}
        />

        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.05]"
          style={{ background: BRAND.navy.lighter }}
        />

        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-[0.03]"
          style={{ background: BRAND.gold.light }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER SECTION ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 lg:mb-24"
        >
          {/* Brand Logo Mark + Label */}
          <div className="inline-flex items-center gap-4 mb-8">
            {/* Decorative Lines */}
            <div
              className="w-12 md:w-20 h-[1px]"
              style={{
                background: `linear-gradient(to right, transparent, ${BRAND.gold.primary})`,
              }}
            />

            {/* Logo Text Representation */}
            <div className="flex items-center gap-2">
              {/* Dots Icon (like logo) */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="6"
                  cy="6"
                  r="2"
                  fill={BRAND.gold.primary}
                  opacity="0.6"
                />
                <circle
                  cx="12"
                  cy="6"
                  r="2"
                  fill={BRAND.gold.primary}
                  opacity="0.8"
                />
                <circle cx="18" cy="6" r="2" fill={BRAND.gold.primary} />
                <circle
                  cx="6"
                  cy="12"
                  r="2"
                  fill={BRAND.gold.primary}
                  opacity="0.8"
                />
                <circle cx="12" cy="12" r="2" fill={BRAND.gold.primary} />
                <circle
                  cx="18"
                  cy="12"
                  r="2"
                  fill={BRAND.gold.primary}
                  opacity="0.6"
                />
                <circle cx="6" cy="18" r="2" fill={BRAND.gold.primary} />
                <circle
                  cx="12"
                  cy="18"
                  r="2"
                  fill={BRAND.gold.primary}
                  opacity="0.6"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="2"
                  fill={BRAND.gold.primary}
                  opacity="0.4"
                />
              </svg>

              <span
                className="text-base md:text-lg font-bold uppercase tracking-[0.35em]"
                style={{ color: "#FFFFFF" }}
              >
                Innovise
              </span>

              {/* Chess Knight Icon */}
              <FaChessKnight
                className="text-lg"
                style={{ color: BRAND.navy.mid }}
              />

              <span
                className="text-base md:text-lg font-bold uppercase tracking-[0.35em]"
                style={{ color: BRAND.gold.primary }}
              >
                IT
              </span>
            </div>

            {/* Decorative Lines */}
            <div
              className="w-12 md:w-20 h-[1px]"
              style={{
                background: `linear-gradient(to left, transparent, ${BRAND.gold.primary})`,
              }}
            />
          </div>

          {/* Main Title */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 leading-tight"
            style={{ color: "#FFFFFF" }}
          >
            Partner{" "}
            <span className="relative inline-block">
              <span
                style={{
                  backgroundImage: BRAND.gold.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Success
              </span>

              {/* Decorative Underline - Gold Curve */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C80 2 220 2 298 10"
                  stroke={BRAND.gold.primary}
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </span>{" "}
            Metrics
          </h2>

          {/* Subtitle */}
          {/* <p
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-6"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Our commitment to excellence is reflected in our industry-leading
            metrics that drive real business outcomes for our partners.
          </p> */}

          {/* Stats Summary Bar - Pill Style */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-6"
          >
            {summaryStats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(253,185,19,0.08)",
                  border: "1px solid rgba(253,185,19,0.2)",
                }}
              >
                <span
                  className="text-xl md:text-2xl font-black"
                  style={{ color: BRAND.gold.primary }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs md:text-sm font-medium"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div> */}
        </motion.div>

        {/* ==================== METRICS GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {metricsData.map((metric, index) => (
            <MetricCard key={metric.id} metric={metric} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${BRAND.navy.lighter}, transparent)`,
        }}
      />
    </section>
  );
};

export default PartnerSuccessMetrics;
