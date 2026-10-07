// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FaExchangeAlt,
//   FaDatabase,
//   FaCloud,
//   FaBroom,
//   FaLayerGroup,
//   FaProjectDiagram,
//   FaSearch,
//   FaClipboardList,
//   FaTruck,
//   FaCheckDouble,
//   FaRocket,
//   FaCheckCircle,
//   FaArrowRight,
//   FaChartLine,
//   FaClock,
//   FaExpandArrowsAlt,
//   FaShieldAlt,
//   FaLightbulb,
//   FaQuoteLeft,
//   FaStar,
//   FaUsers,
//   FaAward,
//   FaHandshake,
//   FaServer,
//   FaHdd,
//   FaNetworkWired,
//   FaStream,
//   FaCompress,
// } from "react-icons/fa";
// import banner from "../../assets/services/sr44.png";
// import AnimatedText from "../../components/common/AnimatedText";

// // ==================== BRAND COLORS (NAVY + GOLD ONLY) ====================
// const BRAND = {
//   navy: {
//     dark: "#12324f",
//     mid: "#12324f",
//     light: "#143A63",
//     lighter: "#1A4570",
//   },
//   gold: {
//     primary: "#FFF",
//     light: "#FFD54F",
//     gradient: "linear-gradient(135deg, #FFF 0%, #FFC107 50%, #FFD54F 100%)",
//   },
// };

// // ==================== ANIMATION CONFIG ====================
// const ANIMATION = {
//   stagger: 0.12,
//   duration: 0.6,
//   spring: { type: "spring", stiffness: 300, damping: 25 },
// };

// // ==================== SERVICES DATA ====================
// const servicesData = [
//   {
//     id: 1,
//     icon: FaExchangeAlt,
//     title: "Legacy System Migration",
//     description:
//       "Seamless migration of data from outdated systems to modern platforms with minimal disruption to business operations.",
//     features: [
//       "Zero-downtime migration",
//       "Data mapping & transformation",
//       "Legacy decommissioning",
//     ],
//     color: "#FFF",
//   },
//   {
//     id: 2,
//     icon: FaDatabase,
//     title: "SAP HANA Migration",
//     description:
//       "Accelerate performance with high-speed, in-memory data processing using SAP HANA for real-time analytics.",
//     features: [
//       "S/4HANA readiness",
//       "Data model optimization",
//       "Performance tuning",
//     ],
//     color: "#FFC107",
//   },
//   {
//     id: 3,
//     icon: FaBroom,
//     title: "Data Cleansing & Validation",
//     description:
//       "Ensure accuracy, consistency, and quality of data before and after migration through rigorous validation.",
//     features: [
//       "Duplicate removal",
//       "Format standardization",
//       "Quality scoring",
//     ],
//     color: "#EAB308",
//   },
//   {
//     id: 4,
//     icon: FaLayerGroup,
//     title: "System Consolidation",
//     description:
//       "Unify multiple disparate systems into a single, streamlined data environment for better management.",
//     features: [
//       "Multi-source integration",
//       "Schema harmonization",
//       "Centralized repository",
//     ],
//     color: "#CA8A04",
//   },
//   {
//     id: 5,
//     icon: FaProjectDiagram,
//     title: "Data Transformation & Integration",
//     description:
//       "Structure and integrate data for better usability, advanced analytics, and informed decision-making.",
//     features: ["ETL pipeline design", "API integration", "Real-time sync"],
//     color: "#A16207",
//   },
// ];

// // ==================== BENEFITS DATA ====================
// const benefitsData = [
//   {
//     icon: FaCheckCircle,
//     title: "Improved Accuracy",
//     description: "Enhanced data reliability and consistency across systems",
//   },
//   {
//     icon: FaLightbulb,
//     title: "Real-time Insights",
//     description: "Faster access to actionable business intelligence",
//   },
//   {
//     icon: FaCompress /* Will use fallback */,
//     title: "Reduced Complexity",
//     description: "Simplified architecture and streamlined operations",
//   },
//   {
//     icon: FaChartLine,
//     title: "Better Decisions",
//     description: "Data-driven strategic planning and execution",
//   },
// ];

// // ==================== PROCESS STEPS (5 STEPS) ====================
// const processSteps = [
//   {
//     step: 1,
//     icon: FaSearch,
//     title: "Assess",
//     subtitle: "Discovery Phase",
//     description:
//       "Analyze existing data landscape, identify risks, and document current state architecture.",
//     color: "#FFF",
//   },
//   {
//     step: 2,
//     icon: FaClipboardList,
//     title: "Plan",
//     subtitle: "Strategy Phase",
//     description:
//       "Define comprehensive migration strategy, roadmap, and detailed execution plan.",
//     color: "#FFC107",
//   },
//   {
//     step: 3,
//     icon: FaTruck,
//     title: "Migrate",
//     subtitle: "Execution Phase",
//     description:
//       "Execute secure and efficient data transfer with rollback capabilities at every stage.",
//     color: "#EAB308",
//   },
//   {
//     step: 4,
//     icon: FaCheckDouble,
//     title: "Validate",
//     subtitle: "Verification Phase",
//     description:
//       "Ensure data accuracy, completeness, and integrity through automated validation.",
//     color: "#CA8A04",
//   },
//   {
//     step: 5,
//     icon: FaRocket,
//     title: "Optimize",
//     subtitle: "Enhancement Phase",
//     description:
//       "Enhance performance, implement monitoring, and enable self-service analytics.",
//     color: "#A16207",
//   },
// ];

// // ==================== METRICS DATA ====================
// const metricsData = [
//   {
//     value: "50+",
//     label: "Migrations Completed",
//     icon: FaDatabase,
//     color: "#FFF",
//   },
//   {
//     value: "99.99%",
//     label: "Data Accuracy",
//     icon: FaCheckCircle,
//     color: "#10B981",
//   },
//   { value: "2PB+", label: "Data Migrated", icon: FaHdd, color: "#3B82F6" },
//   { value: "0%", label: "Data Loss", icon: FaShieldAlt, color: "#EF4444" },
// ];

// // ==================== COMPONENTS ====================

// // Service Card Component
// const ServiceCard = ({ service, index }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-50px" }}
//       transition={{
//         delay: index * ANIMATION.stagger,
//         duration: ANIMATION.duration,
//         ...ANIMATION.spring,
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className="group h-full"
//       style={{
//         transform: isHovered ? "translateY(-8px)" : "translateY(0)",
//       }}
//     >
//       <div className="relative h-full rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-700 bg-primary-800">
//         {/* Top Accent */}
//         <motion.div
//           className="absolute top-0 left-0 right-0 h-1 origin-left"
//           style={{
//             background: "linear-gradient(90deg, #FFF, transparent)",
//           }}
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: isHovered ? 1 : 0 }}
//           transition={{ duration: 0.4 }}
//         />

//         {/* Status Badge */}
//         <div className="absolute top-5 right-5 z-20">
//           <span
//             className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
//             style={{
//               background: `${BRAND.navy.mid}08`,
//               color: "#FFF",
//               border: "2px solid #FFF",
//             }}
//           >
//             <motion.span
//               animate={{
//                 scale: [1, 1.3, 1],
//                 opacity: [1, 0.5, 1],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//               }}
//               className="w-1.5 h-1.5 rounded-full inline-block bg-[#FFF]"
//             />

//             {service.status}
//           </span>
//         </div>

//         {/* Glow Effect */}
//         <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFF]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

//         <div className="relative z-10 p-8 lg:p-10">
//           {/* Icon */}
//           <motion.div
//             className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
//             style={{
//               background: `${BRAND.navy.mid}08`,
//               border: "2px solid #FFF",
//             }}
//             whileHover={{ rotate: [0, -5, 5, 0] }}
//           >
//             <service.icon className="text-2xl" style={{ color: "#FFF" }} />
//           </motion.div>

//           {/* Title */}
//           <h3 className="text-xl font-bold mb-3 pr-16 text-white">
//             {service.title}
//           </h3>

//           {/* Description */}
//           <p className="text-sm leading-relaxed mb-6 text-white/70">
//             {service.description}
//           </p>

//           {/* Features */}
//           <ul className="space-y-3 mb-6">
//             {service.features.map((feature, idx) => (
//               <li
//                 key={idx}
//                 className="flex items-center gap-2 text-sm text-white/80"
//               >
//                 <FaCheckCircle className="flex-shrink-0 text-xs text-[#FFF]" />

//                 {feature}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </motion.div>
//   );
// };
// // Benefit Card Component
// const BenefitCard = ({ benefit, index }) => (
//   <motion.div
//     initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
//     whileInView={{ opacity: 1, x: 0 }}
//     viewport={{ once: true }}
//     transition={{
//       delay: index * 0.1,
//       duration: ANIMATION.duration,
//       ...ANIMATION.spring,
//     }}
//     whileHover={{ y: -6, scale: 1.02 }}
//     className="group"
//   >
//     <div className="relative p-6 rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-500 bg-primary-800">
//       {/* Gold Glow */}
//       <div className="absolute top-0 right-0 w-28 h-28 bg-[#FFF]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//       <div className="relative z-10 flex items-start gap-4">
//         {/* Icon */}
//         <motion.div
//           className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
//           style={{
//             background: `${BRAND.navy.mid}08`,
//             border: "2px solid #FFF",
//           }}
//           whileHover={{ rotate: [0, -10, 10, 0] }}
//         >
//           <benefit.icon className="text-xl" style={{ color: "#FFF" }} />
//         </motion.div>

//         {/* Content */}
//         <div>
//           <h4 className="font-bold text-base mb-2 text-white">
//             {benefit.title}
//           </h4>

//           <p className="text-sm leading-relaxed text-white/70">
//             {benefit.description}
//           </p>
//         </div>
//       </div>
//     </div>
//   </motion.div>
// );
// // Step Component for Horizontal Stepper
// const StepComponent = ({ step, index, totalSteps }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const isLast = index === totalSteps - 1;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{
//         delay: index * 0.15,
//         duration: ANIMATION.duration,
//         ...ANIMATION.spring,
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className="relative flex flex-col items-center text-center"
//     >
//       {/* Connector Line (Desktop) */}
//       {!isLast && (
//         <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 z-0 overflow-hidden">
//           {/* Animated flow line */}
//           <motion.div
//             className="absolute inset-0"
//             style={{
//               background: `linear-gradient(to right, ${step.color}, rgba(148,163,184,0.2))`,
//             }}
//           />
//           {/* Moving dots on line */}
//           {[...Array(3)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute top-1/2 w-1.5 h-1.5 rounded-full -translate-y-1/2"
//               style={{ background: BRAND.gold.primary }}
//               animate={{ left: ["0%", "100%"] }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: "linear",
//                 delay: i * 0.67,
//               }}
//             />
//           ))}
//         </div>
//       )}

//       {/* Step Circle */}
//       <motion.div
//         className="w-20 h-20 rounded-full flex items-center justify-center relative z-10 mb-6 cursor-pointer"
//         style={{
//           background: isHovered ? step.color : `${BRAND.gold.primary}15`,
//           border: `3px solid ${isHovered ? step.color : `${BRAND.gold.primary}40`}`,
//           boxShadow: isHovered ? `0 10px 30px ${step.color}30` : "none",
//         }}
//         whileHover={{ scale: 1.1 }}
//       >
//         <step.icon
//           className="text-2xl"
//           style={{ color: isHovered ? "white" : BRAND.gold.primary }}
//         />

//         {/* Pulse Effect on Hover */}
//         {isHovered && (
//           <motion.div
//             initial={{ scale: 1, opacity: 0.5 }}
//             animate={{ scale: 1.4, opacity: 0 }}
//             transition={{ duration: 1, repeat: Infinity }}
//             className="absolute inset-0 rounded-full"
//             style={{ border: `2px solid ${step.color}` }}
//           />
//         )}
//       </motion.div>

//       {/* Content */}
//       <h4 className="text-lg font-bold mb-1" style={{ color: BRAND.navy.dark }}>
//         {step.title}
//       </h4>

//       <p
//         className="text-xs font-semibold uppercase tracking-wider mb-3"
//         style={{ color: step.color }}
//       >
//         {step.subtitle}
//       </p>

//       <p
//         className="text-sm leading-relaxed max-w-xs mx-auto"
//         style={{ color: "#64748B" }}
//       >
//         {step.description}
//       </p>
//     </motion.div>
//   );
// };

// // Animated Data Flow Component
// const DataFlowVisual = () => {
//   return (
//     <div className="relative w-full h-full flex items-center justify-center p-6">
//       {/* Source System */}
//       <motion.div
//         className="relative z-10"
//         initial={{ opacity: 0, x: -30 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.2 }}
//       >
//         <div
//           className="w-28 h-36 rounded-xl flex flex-col items-center justify-center p-3"
//           style={{
//             background: "rgba(11,29,51,0.95)",
//             border: "1px solid rgba(253,185,19,0.3)",
//             boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
//           }}
//         >
//           <FaServer className="text-2xl mb-2" style={{ color: "#94A3B8" }} />
//           <span className="text-[10px] text-white/50 font-medium">LEGACY</span>
//           <span className="text-xs font-bold text-white">Source</span>

//           {/* Data blocks animation */}
//           <div className="mt-2 space-y-1 w-full">
//             {[...Array(4)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="h-1.5 rounded-full"
//                 style={{ background: "rgba(253,185,19,0.5)" }}
//                 animate={{ opacity: [0.3, 1, 0.3] }}
//                 transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
//               />
//             ))}
//           </div>
//         </div>
//       </motion.div>

//       {/* Flow Lines with Animated Particles */}
//       <div className="flex-1 relative h-32 mx-4">
//         {/* Main flow line */}
//         <svg
//           viewBox="0 0 200 80"
//           className="absolute inset-0 w-full h-full"
//           preserveAspectRatio="none"
//         >
//           {/* Background path */}
//           <path
//             d="M0,40 Q50,20 100,40 T200,40"
//             fill="none"
//             stroke="rgba(253,185,19,0.15)"
//             strokeWidth="2"
//             strokeDasharray="4,4"
//           />

//           {/* Animated path */}
//           <motion.path
//             d="M0,40 Q50,20 100,40 T200,40"
//             fill="none"
//             stroke={BRAND.gold.primary}
//             strokeWidth="2"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ duration: 2, ease: "easeOut" }}
//           />

//           {/* Moving particles along path */}
//           {[0, 0.33, 0.66].map((offset, i) => (
//             <motion.circle
//               key={i}
//               r="4"
//               fill={BRAND.gold.primary}
//               filter={`drop-shadow(0 0 4px ${BRAND.gold.primary})`}
//               animate={{
//                 offset: [0, 1],
//               }}
//               transition={{
//                 duration: 2.5,
//                 repeat: Infinity,
//                 ease: "linear",
//                 delay: i * 0.83,
//               }}
//               style={{ offsetDistance: `${offset * 100}%` }}
//             >
//               <animateMotion
//                 dur="2.5s"
//                 repeatCount="indefinite"
//                 path="M0,40 Q50,20 100,40 T200,40"
//               />
//             </motion.circle>
//           ))}
//         </svg>

//         {/* Center Processing Node */}
//         <motion.div
//           className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
//           animate={{ rotate: 360 }}
//           transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//         >
//           <div
//             className="w-14 h-14 rounded-xl flex items-center justify-center"
//             style={{
//               background: BRAND.gold.gradient,
//               boxShadow: `0 0 30px ${BRAND.gold.primary}50`,
//             }}
//           >
//             <FaExchangeAlt className="text-lg text-white" />
//           </div>
//         </motion.div>

//         {/* Labels */}
//         <div className="absolute top-0 left-1/4 -translate-x-1/2 text-[9px] text-white/40 whitespace-nowrap">
//           Extract
//         </div>
//         <div className="absolute bottom-0 left-3/4 -translate-x-1/2 text-[9px] text-white/40 whitespace-nowrap">
//           Load
//         </div>
//       </div>

//       {/* Target System */}
//       <motion.div
//         className="relative z-10"
//         initial={{ opacity: 0, x: 30 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.4 }}
//       >
//         <div
//           className="w-28 h-36 rounded-xl flex flex-col items-center justify-center p-3"
//           style={{
//             background: "rgba(11,29,51,0.95)",
//             border: "1px solid rgba(16,185,129,0.3)",
//             boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
//           }}
//         >
//           <FaCloud className="text-2xl mb-2" style={{ color: "#10B981" }} />
//           <span className="text-[10px] text-white/50 font-medium">MODERN</span>
//           <span className="text-xs font-bold text-white">Target</span>

//           {/* Data blocks animation */}
//           <div className="mt-2 space-y-1 w-full">
//             {[...Array(4)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="h-1.5 rounded-full bg-green-400/50"
//                 initial={{ width: "0%" }}
//                 animate={{ width: "100%" }}
//                 transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
//               />
//             ))}
//           </div>
//         </div>
//       </motion.div>

//       {/* Floating Stats */}
//       <motion.div
//         animate={{ y: [0, -5, 0] }}
//         transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full"
//         style={{
//           background: "rgba(11,29,51,0.9)",
//           border: "1px solid rgba(253,185,19,0.3)",
//         }}
//       >
//         <div className="flex items-center gap-2">
//           <motion.span
//             animate={{ rotate: [0, 360] }}
//             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//             className="w-2 h-2 rounded-full"
//             style={{ background: BRAND.gold.primary }}
//           />
//           <span
//             className="text-[10px] font-bold"
//             style={{ color: BRAND.gold.primary }}
//           >
//             DATA FLOW ACTIVE
//           </span>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// // Pipeline Visualization Component
// const PipelineVisual = () => {
//   const stages = [
//     { label: "Source", icon: FaHdd, color: "#94A3B8" },
//     { label: "Extract", icon: FaStream, color: "#FFF" },
//     { label: "Transform", icon: FaExchangeAlt, color: "#FFC107" },
//     { label: "Validate", icon: FaCheckDouble, color: "#EAB308" },
//     { label: "Load", icon: FaDatabase, color: "#10B981" },
//   ];

//   return (
//     <div className="flex items-center justify-between gap-2 px-4 py-6">
//       {stages.map((stage, idx) => (
//         <React.Fragment key={idx}>
//           {/* Stage Node */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: idx * 0.15 }}
//             className="flex flex-col items-center"
//           >
//             <div
//               className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
//               style={{
//                 background: `${stage.color}15`,
//                 border: `2px solid ${stage.color}40`,
//               }}
//             >
//               <stage.icon className="text-lg" style={{ color: stage.color }} />
//             </div>
//             <span className="text-[9px] font-medium text-white/60">
//               {stage.label}
//             </span>
//           </motion.div>

//           {/* Connector with flow animation */}
//           {idx < stages.length - 1 && (
//             <div
//               className="flex-1 h-0.5 relative mx-1 mt-[-20px]"
//               style={{ background: "rgba(253,185,19,0.2)" }}
//             >
//               <motion.div
//                 className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
//                 style={{ background: BRAND.gold.primary }}
//                 animate={{ left: ["0%", "100%"] }}
//                 transition={{
//                   duration: 1.5,
//                   repeat: Infinity,
//                   ease: "linear",
//                   delay: idx * 0.3,
//                 }}
//               />
//             </div>
//           )}
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };

// // ==================== SECTIONS ====================

// // Hero Section (Left Text + Right Data Flow Visual)
// const HeroSection = () => (
//   <section className="relative py-6 lg:py-10 overflow-hidden bg-primary-800">
//     {/* Background Elements */}
//     <div className="absolute inset-0" aria-hidden="true">
//       {/* Dot Pattern */}
//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//           backgroundSize: "32px 32px",
//         }}
//       />

//       {/* Grid Pattern for data feel */}
//       <div
//         className="absolute inset-0 opacity-[0.02]"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(253,185,19,0.3) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(253,185,19,0.3) 1px, transparent 1px)
//           `,
//           backgroundSize: "60px 60px",
//         }}
//       />

//       {/* Floating Orbs */}
//       <motion.div
//         animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-16 right-20 w-[450px] h-[450px] rounded-full blur-3xl opacity-[0.07]"
//         style={{ background: BRAND.gold.primary }}
//       />

//       <motion.div
//         animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 3,
//         }}
//         className="absolute bottom-16 left-16 w-[350px] h-[350px] rounded-full blur-3xl opacity-[0.05]"
//         style={{ background: BRAND.navy.lighter }}
//       />

//       {/* Floating Data Particles */}
//       {[...Array(8)].map((_, i) => (
//         <motion.div
//           key={i}
//           animate={{
//             y: [0, Math.random() * -50, 0],
//             x: [0, (Math.random() - 0.5) * 50, 0],
//             opacity: [0.2, 0.6, 0.2],
//           }}
//           transition={{
//             duration: 5 + Math.random() * 5,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: i * 0.6,
//           }}
//           className="absolute w-1.5 h-1.5 rounded-full"
//           style={{
//             background: BRAND.gold.primary,
//             top: `${15 + Math.random() * 70}%`,
//             left: `${5 + Math.random() * 90}%`,
//           }}
//         />
//       ))}
//     </div>

//     <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
//       <div className="grid lg:grid-cols-1 gap-12 lg:gap-20 items-center">
//         {/* LEFT - Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Badge */}
//           <div className="inline-flex items-center gap-3 mb-2 md:mb-6">
//             <div
//               className="w-6 h-6 md:w-10 md:h-10 rounded-lg flex items-center justify-center"
//               style={{
//                 background: `${BRAND.gold.primary}15`,
//                 border: `1px solid ${BRAND.gold.primary}30`,
//               }}
//             >
//               <FaDatabase
//                 className="text-xs md:text-lg"
//                 style={{ color: BRAND.gold.primary }}
//               />
//             </div>
//             <span
//               className="text-[9px] md:text-sm font-bold uppercase tracking-[0.2em]"
//               style={{ color: BRAND.gold.primary }}
//             >
//               <AnimatedText text="Data Migration & Transformation" />
//             </span>
//           </div>

//           {/* Title */}
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
//             Unlock the Power of <span>Data</span> with Seamless{" "}
//             <span>Modernization</span>
//           </h1>

//           {/* Description */}
//           <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-xl">
//             We help organizations securely migrate, transform, and modernize
//             their data to support next-generation enterprise systems.
//           </p>

//           <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
//             From legacy system consolidation to SAP HANA migration, we ensure
//             your data is accurate, accessible, and ready for real-time insights.
//           </p>

//           {/* Feature Tags */}
//           {/* <div className="flex flex-wrap gap-3 mb-8">
//             {[
//               " Zero Downtime",
//               " Real-time Sync",
//               " Secure Transfer",
//               " 99.99% Accuracy",
//             ].map((tag, idx) => (
//               <motion.span
//                 key={idx}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.5 + idx * 0.1 }}
//                 className="px-4 py-2 rounded-lg text-xs font-semibold"
//                 style={{
//                   background: "rgba(253,185,19,0.1)",
//                   color: BRAND.gold.light,
//                   border: "1px solid rgba(253,185,19,0.2)",
//                 }}
//               >
//                 {tag}
//               </motion.span>
//             ))}
//           </div> */}

//           {/* Trust Indicators */}
//           {/* <div
//             className="flex flex-wrap items-center gap-6 mt-10 pt-8"
//             style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
//           >
//             {[
//               { icon: FaAward, text: "SAP Certified" },
//               { icon: FaUsers, text: "50+ Migrations" },
//               { icon: FaShieldAlt, text: "Zero Data Loss" },
//             ].map((item, idx) => (
//               <div key={idx} className="flex items-center gap-2">
//                 <item.icon
//                   className="text-sm"
//                   style={{ color: BRAND.gold.primary }}
//                 />
//                 <span className="text-xs text-white/60 font-medium">
//                   {item.text}
//                 </span>
//               </div>
//             ))}
//           </div> */}
//         </motion.div>
//       </div>
//     </div>
//   </section>
// );

// // Services Grid Section
// const ServicesSection = () => (
//   <section
//     id="services"
//     className="py-6 lg:py-12 bg-white relative overflow-hidden"
//   >
//     {/* Background Decoration */}
//     <div
//       className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.03] translate-x-1/3 -translate-y-1/3"
//       style={{ background: BRAND.navy.lighter }}
//     />

//     <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
//       {/* Section Header */}
//       <motion.header
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center max-w-3xl mx-auto mb-16"
//       >
//         <span
//           className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
//           style={{
//             background: `${BRAND.navy.mid}08`,
//             color: BRAND.navy.dark,
//             border: `1px solid ${BRAND.navy.mid}15`,
//           }}
//         >
//           What We Deliver
//         </span>

//         <h2
//           className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
//           style={{ color: BRAND.navy.dark }}
//         >
//           Comprehensive <span>Migration Capabilities</span>
//         </h2>

//         <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
//           End-to-End data services designed to modernize your infrastructure
//           while ensuring complete integrity.
//         </p>
//       </motion.header>

//       {/* Services Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//         {servicesData.map((service, index) => (
//           <ServiceCard key={service.id} service={service} index={index} />
//         ))}
//       </div>
//     </div>
//   </section>
// );

// // Benefits Section (Image Left + Benefits Right)
// const BenefitsSection = () => (
//   <section className="py-6 lg:py-12 bg-gray-50 relative overflow-hidden">
//     <div className="max-w-7xl mx-auto px-4 lg:px-8">
//       <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
//         <span
//           className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
//           style={{
//             background: `${BRAND.navy.mid}08`,
//             color: BRAND.navy.dark,
//             border: `1px solid ${BRAND.navy.mid}15`,
//           }}
//         >
//           Key Benefits
//         </span>

//         <h2
//           className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
//           style={{ color: BRAND.navy.dark }}
//         >
//           Transform Your Data Into <span>Strategic Assets</span>
//         </h2>

//         <p
//           className="text-lg leading-relaxed mb-10"
//           style={{ color: "#64748B" }}
//         >
//           Our proven methodology ensures seamless data migration with zero
//           downtime, complete accuracy, and enhanced accessibility for business
//           intelligence.
//         </p>
//       </div>
//       <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//         {/* LEFT - Data Visualization Visual */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="relative order-2 lg:order-1"
//         >
//           <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-primary-800">
//             {/* Analytics Dashboard Mockup */}
//             <div className="absolute inset-0 p-6 flex flex-col">
//               {/* Header */}
//               <div className="flex items-center justify-between mb-4">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 rounded-full bg-red-400" />
//                   <div className="w-3 h-3 rounded-full bg-yellow-400" />
//                   <div className="w-3 h-3 rounded-full bg-green-400" />
//                   <span className="ml-3 text-xs text-white/40 font-mono">
//                     Analytics Dashboard
//                   </span>
//                 </div>

//                 <div
//                   className="flex items-center gap-2 px-3 py-1 rounded-full"
//                   style={{
//                     background: "rgba(16,185,129,0.15)",
//                     border: "1px solid rgba(16,185,129,0.3)",
//                   }}
//                 >
//                   <motion.span
//                     animate={{ scale: [1, 1.2, 1] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                     className="w-1.5 h-1.5 rounded-full bg-green-400"
//                   />
//                   <span className="text-[10px] font-bold text-green-400">
//                     LIVE
//                   </span>
//                 </div>
//               </div>

//               {/* Chart Area */}
//               <div
//                 className="flex-1 rounded-xl p-4 mb-4"
//                 style={{
//                   background: "rgba(255,255,255,0.03)",
//                   border: "1px solid rgba(255,255,255,0.06)",
//                 }}
//               >
//                 <div className="flex items-center justify-between mb-3">
//                   <span className="text-[10px] text-white/40">
//                     DATA THROUGHPUT
//                   </span>
//                   <span className="text-[10px] text-white/30">Real-time</span>
//                 </div>

//                 {/* Area Chart */}
//                 <div className="h-28 relative">
//                   <svg
//                     viewBox="0 0 300 80"
//                     className="w-full h-full"
//                     preserveAspectRatio="none"
//                   >
//                     <defs>
//                       <linearGradient
//                         id="areaGradient"
//                         x1="0%"
//                         y1="0%"
//                         x2="0%"
//                         y2="100%"
//                       >
//                         <stop
//                           offset="0%"
//                           stopColor={BRAND.gold.primary}
//                           stopOpacity="0.3"
//                         />
//                         <stop
//                           offset="100%"
//                           stopColor={BRAND.gold.primary}
//                           stopOpacity="0"
//                         />
//                       </linearGradient>
//                     </defs>

//                     <motion.path
//                       d="M0,60 Q30,50 60,45 T120,35 T180,25 T240,20 T300,15 L300,80 L0,80 Z"
//                       fill="url(#areaGradient)"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: 0.5 }}
//                     />

//                     <motion.path
//                       d="M0,60 Q30,50 60,45 T120,35 T180,25 T240,20 T300,15"
//                       fill="none"
//                       stroke={BRAND.gold.primary}
//                       strokeWidth="2"
//                       initial={{ pathLength: 0 }}
//                       animate={{ pathLength: 1 }}
//                       transition={{ delay: 0.3, duration: 1.5 }}
//                     />

//                     {/* Moving dot */}
//                     <motion.circle
//                       r="4"
//                       fill={BRAND.gold.primary}
//                       filter={`drop-shadow(0 0 6px ${BRAND.gold.primary})`}
//                       animate={{ cx: [0, 300] }}
//                       transition={{
//                         duration: 3,
//                         repeat: Infinity,
//                         ease: "linear",
//                       }}
//                       cy={15}
//                     />
//                   </svg>
//                 </div>
//               </div>

//               {/* Bottom Progress Bars */}
//               <div className="grid grid-cols-1 gap-3">
//                 {/* <div
//                   className="p-3 rounded-xl space-y-2"
//                   style={{
//                     background: "rgba(255,255,255,0.03)",
//                     border: "1px solid rgba(255,255,255,0.06)",
//                   }}
//                 >
//                   <span className="text-[10px] text-white/40 uppercase">
//                     Migration Progress
//                   </span>
//                   {[
//                     { name: "Customer Data", pct: 94 },
//                     { name: "Transactions", pct: 87 },
//                     { name: "History", pct: 72 },
//                   ].map((bar, i) => (
//                     <div key={i}>
//                       <div className="flex justify-between text-[9px] mb-1">
//                         <span className="text-white/50">{bar.name}</span>
//                         <span className="text-white/70">{bar.pct}%</span>
//                       </div>
//                       <div
//                         className="h-1.5 rounded-full overflow-hidden"
//                         style={{ background: "rgba(255,255,255,0.1)" }}
//                       >
//                         <motion.div
//                           initial={{ width: 0 }}
//                           animate={{ width: `${bar.pct}%` }}
//                           transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
//                           className="h-full rounded-full"
//                           style={{ background: BRAND.gold.gradient }}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div> */}

//                 <div
//                   className="p-3 rounded-xl"
//                   style={{
//                     background: "rgba(255,255,255,0.03)",
//                     border: "1px solid rgba(255,255,255,0.06)",
//                   }}
//                 >
//                   <span className="text-[10px] text-white/40 uppercase block mb-3">
//                     System Status
//                   </span>
//                   <div className="space-y-2">
//                     {[
//                       {
//                         name: "Source System",
//                         status: "Connected",
//                         good: true,
//                       },
//                       { name: "Target HANA", status: "Ready", good: true },
//                       { name: "Validation", status: "Running", good: true },
//                       { name: "Sync Status", status: "Active", good: true },
//                     ].map((sys, i) => (
//                       <div
//                         key={i}
//                         className="flex items-center justify-between"
//                       >
//                         <span className="text-[10px] text-white/60">
//                           {sys.name}
//                         </span>
//                         <span
//                           className={`text-[9px] font-medium ${sys.good ? "text-green-400" : "text-yellow-400"}`}
//                         >
//                           ● {sys.status}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Floating Badge */}
//           <motion.div
//             animate={{ y: [0, -6, 0] }}
//             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute -bottom-10 -left-3 bg-white rounded-xl p-4 shadow-lg"
//             style={{ border: `2px solid #10B981` }}
//           >
//             <div className="flex items-center gap-3">
//               <div
//                 className="w-10 h-10 rounded-lg flex items-center justify-center"
//                 style={{ background: "rgba(16,185,129,0.1)" }}
//               >
//                 <FaCheckCircle
//                   className="text-lg"
//                   style={{ color: "#10B981" }}
//                 />
//               </div>
//               <div>
//                 {/* <div
//                   className="text-base font-black"
//                   style={{ color: BRAND.navy.dark }}
//                 >
//                   99.99%
//                 </div> */}
//                 <div className="text-[14px] text-gray-600">Data Integrity</div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* RIGHT - Benefits Content */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="order-1 lg:order-2"
//         >
//           {/* Benefits Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mb-10">
//             {benefitsData.map((benefit, index) => (
//               <BenefitCard key={index} benefit={benefit} index={index} />
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   </section>
// );

// // Process Section (5-Step Stepper UI)
// const ProcessSection = () => (
//   <section className="py-6 lg:py-12 bg-primary-800  relative overflow-hidden">
//     {/* Background Effects */}
//     <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFF]/10 blur-3xl rounded-full"></div>
//     <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-[#102B4C] blur-3xl rounded-full"></div>

//     <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
//       {/* Section Header */}
//       <motion.header
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center max-w-3xl mx-auto mb-16"
//       >
//         <span
//           className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border"
//           style={{
//             background: `${BRAND.navy.mid}08`,
//             color: "#FFF",
//             borderColor: "rgba(253,185,19,0.25)",
//           }}
//         >
//           Our Approach
//         </span>

//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
//           Proven <span style={{ color: "#FFF" }}>5-Step Methodology</span>
//         </h2>

//         <p className="text-lg leading-relaxed text-white/70">
//           A systematic approach ensuring secure, efficient, and accurate data
//           migration every time.
//         </p>
//       </motion.header>

//       {/* Desktop */}
//       <div className="hidden lg:block">
//         <div className="grid grid-cols-5 gap-5">
//           {processSteps.map((step, index) => (
//             <motion.div
//               key={step.step}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="group relative"
//             >
//               <div className="relative h-full p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#FFF]/30 hover:bg-white/[0.07]">
//                 {/* Step Number */}
//                 <div className="absolute top-5 right-5 text-4xl font-black text-white/5">
//                   {step.step}
//                 </div>

//                 {/* Icon */}
//                 <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-[#FFF] shadow-lg shadow-[#FFF]/20">
//                   <step.icon className="text-xl text-[#081C34]" />
//                 </div>

//                 {/* Title */}
//                 <h4 className="text-lg font-bold text-white mb-2">
//                   {step.title}
//                 </h4>

//                 {/* Subtitle */}
//                 <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFF] mb-3">
//                   {step.subtitle}
//                 </p>

//                 {/* Description */}
//                 <p className="text-sm leading-relaxed text-white/70">
//                   {step.description}
//                 </p>

//                 {/* Glow Effect */}
//                 <div className="absolute top-0 right-0 w-28 h-28 bg-[#FFF]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Mobile */}
//       <div className="lg:hidden space-y-8">
//         {processSteps.map((step, index) => (
//           <motion.div
//             key={step.step}
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.1 }}
//             className="flex gap-5"
//           >
//             {/* Left Side */}
//             <div className="flex flex-col items-center">
//               <div className="w-14 h-14 rounded-full bg-[#FFF] flex items-center justify-center shadow-lg shadow-[#FFF]/20">
//                 <step.icon className="text-lg text-[#081C34]" />
//               </div>

//               {index < processSteps.length - 1 && (
//                 <div className="w-0.5 flex-1 mt-3 bg-gradient-to-b from-[#FFF] to-white/10"></div>
//               )}
//             </div>

//             {/* Content */}
//             <div className="pb-8">
//               <h4 className="font-bold text-lg mb-1 text-white">
//                 {step.title}
//               </h4>

//               <p className="text-xs font-semibold uppercase tracking-wider mb-2 text-[#FFF]">
//                 {step.subtitle}
//               </p>

//               <p className="text-sm leading-relaxed text-white/70">
//                 {step.description}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// // CTA Banner Section
// const CTABannerSection = () => (
//   <section
//     className="py-6 lg:py-12 relative overflow-hidden"
//     style={{
//       background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, #0f0d29 50%, ${BRAND.navy.mid} 100%)`,
//     }}
//   >
//     {/* Background Pattern */}
//     <div
//       className="absolute inset-0 opacity-[0.04]"
//       style={{
//         backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//         backgroundSize: "32px 32px",
//       }}
//     />

//     {/* Decorative Orbs */}
//     <motion.div
//       animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
//       transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       className="absolute top-10 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.08]"
//       style={{ background: BRAND.gold.primary }}
//     />

//     <motion.div
//       animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
//       transition={{
//         duration: 8,
//         repeat: Infinity,
//         ease: "easeInOut",
//         delay: 2,
//       }}
//       className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.05]"
//       style={{ background: "#10B981" }}
//     />

//     <div className="max-w-5xl mx-auto px-4 lg:px-8 relative z-10 text-center">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Icon */}
//         <motion.div
//           initial={{ scale: 0 }}
//           whileInView={{ scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//           className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8"
//           style={{
//             background: `${BRAND.gold.primary}15`,
//             border: `2px solid ${BRAND.gold.primary}30`,
//           }}
//         >
//           <FaRocket
//             className="text-3xl"
//             style={{ color: BRAND.gold.primary }}
//           />
//         </motion.div>

//         {/* Main Heading */}
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
//           Transform Your Data Into{" "}
//           <span
//             style={{
//               backgroundImage: BRAND.gold.gradient,
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             Strategic Asset
//           </span>
//         </h2>

//         <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
//           Don't let legacy systems hold you back. Modernize your data
//           infrastructure today and unlock powerful insights that drive growth.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
//           <a
//             href="/contact"
//             className="group relative px-10 py-5 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
//             style={{
//               background: BRAND.gold.gradient,
//               color: BRAND.navy.dark,
//               boxShadow: `0 10px 40px ${BRAND.gold.primary}40`,
//             }}
//           >
//             <span className="relative z-10 flex items-center gap-3">
//               Plan Your Migration
//               <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
//             </span>

//             <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
//               <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
//             </div>
//           </a>

//           <a
//             href="/services"
//             className="px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/5 flex items-center gap-3"
//             style={{
//               border: "1px solid rgba(255,255,255,0.2)",
//               color: "white",
//             }}
//           >
//             View All Services →
//           </a>
//         </div>

//         {/* Quick Contact Info */}
//         <div
//           className="flex flex-wrap items-center justify-center gap-8 pt-8"
//           style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
//         >
//           {[
//             { value: "Free Assessment", icon: FaSearch },
//             { value: "Custom Roadmap", icon: FaClipboardList },
//             { value: "Expert Support", icon: FaUsers },
//           ].map((item, idx) => (
//             <div key={idx} className="flex items-center gap-2 text-white/60">
//               <item.icon
//                 className="text-sm"
//                 style={{ color: BRAND.gold.primary }}
//               />
//               <span className="text-sm font-medium">{item.value}</span>
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   </section>
// );

// // Main Data Migration Page Component
// const DataMigrationPage = () => {
//   // Fix for missing icon
//   const FaCompress = FaExpandArrowsAlt;

//   return (
//     <main role="main">
//       {/* <div
//         className="relative w-full min-h-[70vh] flex items-center justify-center bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${banner})`,
//         }}
//       >

//         <div className="absolute inset-0 bg-black/20" />
//       </div> */}
//       <HeroSection />
//       <ServicesSection />
//       <ProcessSection />
//       <BenefitsSection />

//       {/* <CTABannerSection /> */}
//     </main>
//   );
// };

// export default DataMigrationPage;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaExchangeAlt,
  FaDatabase,
  FaBroom,
  FaLayerGroup,
  FaProjectDiagram,
  FaSearch,
  FaClipboardList,
  FaTruck,
  FaCheckDouble,
  FaRocket,
  FaChartLine,
  FaLightbulb,
  FaCompress,
  FaServer,
  FaCloud,
  FaStream,
} from "react-icons/fa";

/* ============ DATA ============ */
const services = [
  {
    icon: FaExchangeAlt,
    title: "Legacy System Migration",
    desc: "Seamless migration of data from outdated systems to modern platforms with minimal disruption to business operations.",
    features: [
      "Zero-downtime migration",
      "Data mapping & transformation",
      "Legacy decommissioning",
    ],
  },
  {
    icon: FaDatabase,
    title: "SAP HANA Migration",
    desc: "Accelerate performance with high-speed, in-memory data processing using SAP HANA for real-time analytics.",
    features: [
      "S/4HANA readiness",
      "Data model optimization",
      "Performance tuning",
    ],
  },
  {
    icon: FaBroom,
    title: "Data Cleansing & Validation",
    desc: "Ensure accuracy, consistency, and quality of data before and after migration through rigorous validation.",
    features: [
      "Duplicate removal",
      "Format standardization",
      "Quality scoring",
    ],
  },
  {
    icon: FaLayerGroup,
    title: "System Consolidation",
    desc: "Unify multiple disparate systems into a single, streamlined data environment for better management.",
    features: [
      "Multi-source integration",
      "Schema harmonization",
      "Centralized repository",
    ],
  },
  {
    icon: FaProjectDiagram,
    title: "Data Transformation & Integration",
    desc: "Structure and integrate data for better usability, advanced analytics, and informed decision-making.",
    features: ["ETL pipeline design", "API integration", "Real-time sync"],
  },
];

const steps = [
  {
    icon: FaSearch,
    title: "Assess",
    desc: "Analyze the existing data landscape, identify risks, and document the current-state architecture.",
  },
  {
    icon: FaClipboardList,
    title: "Plan",
    desc: "Define a comprehensive migration strategy, roadmap, and detailed execution plan.",
  },
  {
    icon: FaTruck,
    title: "Migrate",
    desc: "Execute secure and efficient data transfer with rollback capabilities at every stage.",
  },
  {
    icon: FaCheckDouble,
    title: "Validate",
    desc: "Ensure data accuracy, completeness, and integrity through automated validation.",
  },
  {
    icon: FaRocket,
    title: "Optimize",
    desc: "Enhance performance, implement monitoring, and enable self-service analytics.",
  },
];

const benefits = [
  {
    icon: FaCheckCircle,
    title: "Improved Accuracy",
    desc: "Enhanced data reliability and consistency across systems.",
  },
  {
    icon: FaLightbulb,
    title: "Real-time Insights",
    desc: "Faster access to actionable business intelligence.",
  },
  {
    icon: FaCompress,
    title: "Reduced Complexity",
    desc: "Simplified architecture and streamlined operations.",
  },
  {
    icon: FaChartLine,
    title: "Better Decisions",
    desc: "Data-driven strategic planning and execution.",
  },
];

const pipeline = [
  { icon: FaStream, label: "Extract" },
  { icon: FaExchangeAlt, label: "Transform" },
  { icon: FaCheckDouble, label: "Validate" },
  { icon: FaDatabase, label: "Load" },
];

const systemStatus = [
  ["Source System", "Connected"],
  ["Target HANA", "Ready"],
  ["Validation", "Running"],
  ["Sync", "Active"],
];

/* ============ SHARED UI ============ */
const fade = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay: i * 0.06, duration: 0.5 },
});

const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Button = ({ href = "#", variant = "solid", children }) => {
  const styles = {
    solid: "bg-primary-500 text-white hover:bg-primary-400",
    outline: "border border-white/40 text-white hover:bg-white/10",
  };
  const cls = `inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 ${styles[variant]}`;
  return href.startsWith("/") ? (
    <Link to={href} className={cls}>
      {children}
    </Link>
  ) : (
    <a href={href} className={cls}>
      {children}
    </a>
  );
};

const SectionHead = ({ eyebrow, title, text, dark }) => (
  <motion.header {...fade()} className="mx-auto mb-14 max-w-3xl text-center">
    <p
      className={`mb-3 text-sm font-semibold uppercase tracking-widest ${dark ? "text-primary-300" : "text-primary-500"}`}
    >
      {eyebrow}
    </p>
    <h2
      className={`text-3xl font-bold lg:text-4xl ${dark ? "text-white" : "text-primary-900"}`}
    >
      {title}
    </h2>
    {text && (
      <p
        className={`mt-4 text-lg ${dark ? "text-primary-200" : "text-primary-600"}`}
      >
        {text}
      </p>
    )}
  </motion.header>
);

/* Icon on the left, title on the right */
const IconTitle = ({ icon: Icon, title }) => (
  <div className="mb-4 flex items-center gap-4">
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-xl text-primary-600 transition-colors group-hover:bg-primary-800 group-hover:text-white">
      <Icon />
    </span>
    <h3 className="text-lg font-bold leading-snug text-primary-900">{title}</h3>
  </div>
);

/* ============ HERO ============ */
const FlowNode = ({ icon: Icon, label, sub }) => (
  <div className="w-24 shrink-0 rounded-xl bg-white p-3 text-center shadow-lg sm:w-28">
    <Icon className="mx-auto mb-1 text-2xl text-primary-600" />
    <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">
      {label}
    </p>
    <p className="text-base font-bold text-primary-900">{sub}</p>
  </div>
);

const FlowLine = () => (
  <div
    className="relative mx-2 h-px flex-1 bg-primary-300/40"
    aria-hidden="true"
  >
    <motion.span
      className="absolute -top-1 h-2 w-2 rounded-full bg-primary-300"
      animate={{ left: ["0%", "100%"] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

const HeroVisual = () => (
  <div className="mx-auto w-full max-w-[520px] rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
    <div className="flex items-center justify-between">
      <FlowNode icon={FaServer} label="Legacy" sub="Source" />
      <FlowLine />
      <motion.span
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary-500 text-xl text-white ring-8 ring-white/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      >
        <FaExchangeAlt />
      </motion.span>
      <FlowLine />
      <FlowNode icon={FaCloud} label="Modern" sub="Target" />
    </div>
    <div className="mt-8 grid grid-cols-4 gap-2 border-t border-white/10 pt-6">
      {pipeline.map((p) => (
        <div
          key={p.label}
          className="flex flex-col items-center gap-2 text-center"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-primary-200">
            <p.icon />
          </span>
          <span className="text-xs font-medium text-primary-200 sm:text-sm">
            {p.label}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const Hero = () => (
  <section className="overflow-hidden bg-gradient-to-br from-primary-900 to-primary-800 py-16 lg:py-24">
    <Container className="grid items-center gap-12 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-300">
          Data Migration &amp; Transformation
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl">
          Unlock the Power of <span className="text-primary-300">Data</span>{" "}
          with Seamless <span className="text-primary-300">Modernization</span>
        </h1>
        <p className="mb-4 max-w-xl text-lg text-primary-100 lg:text-xl">
          We help organizations securely migrate, transform, and modernize their
          data to support next-generation enterprise systems.
        </p>
        <p className="mb-8 max-w-xl text-lg text-primary-200">
          From legacy system consolidation to SAP HANA migration, we ensure your
          data is accurate, accessible, and ready for real-time insights.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button href="/contact">
            Plan Your Migration <FaArrowRight size={12} />
          </Button>
          <Button href="#approach" variant="outline">
            Our Approach <FaArrowRight size={12} />
          </Button>
        </div>
      </motion.div>
      <HeroVisual />
    </Container>
  </section>
);

/* ============ SERVICES ============ */
const Services = () => (
  <section id="services" className="bg-white py-10 lg:py-12">
    <Container>
      <SectionHead
        eyebrow="What We Deliver"
        title="Comprehensive Migration Capabilities"
        text="End-to-end data services designed to modernize your infrastructure while ensuring complete integrity."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            {...fade(i)}
            className={`group rounded-2xl border border-primary-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
          >
            <IconTitle icon={s.icon} title={s.title} />
            <p className="mb-5 text-base text-primary-600">{s.desc}</p>
            <ul className="space-y-2.5">
              {s.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2.5 text-base text-primary-700"
                >
                  <FaCheckCircle className="shrink-0 text-sm text-primary-500" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Container>
  </section>
);

/* ============ METHODOLOGY (dark) ============ */
const Methodology = () => (
  <section id="approach" className="bg-primary-900 py-10 lg:py-12">
    <Container>
      <SectionHead
        dark
        eyebrow="Our Approach"
        title="Proven 5-Step Methodology"
        text="A systematic approach ensuring secure, efficient, and accurate data migration every time."
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            {...fade(i)}
            className="relative text-center"
          >
            {i < steps.length - 1 && (
              <div className="absolute left-1/2 top-8 hidden h-px w-full bg-gradient-to-r from-primary-400/60 to-primary-400/10 lg:block" />
            )}
            <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-primary-400/50 bg-primary-800 text-xl text-white">
              <s.icon />
              <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-primary-800">
                {i + 1}
              </span>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">{s.title}</h3>
            <p className="mx-auto max-w-[230px] text-base text-primary-200">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);

/* ============ BENEFITS + MIGRATION DASHBOARD ============ */
const MigrationDashboard = () => (
  <div className="relative">
    <div className="rounded-2xl border border-primary-800 bg-primary-900 p-4 shadow-2xl">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-base font-semibold text-white">
          Migration Overview
        </span>
        <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-primary-200">
          Sample view
        </span>
      </div>
      <div className="mb-3 rounded-xl bg-white/5 p-4">
        <p className="mb-2 text-sm uppercase tracking-wide text-primary-300">
          Data Throughput
        </p>
        <svg
          viewBox="0 0 300 80"
          className="h-28 w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon
            points="0,80 0,60 60,45 120,35 180,25 240,20 300,15 300,80"
            fill="rgba(157,185,213,0.15)"
          />
          <polyline
            points="0,60 60,45 120,35 180,25 240,20 300,15"
            fill="none"
            stroke="#9db9d5"
            strokeWidth="2"
          />
        </svg>
      </div>
      <ul className="space-y-2 rounded-xl bg-white/5 p-4">
        {systemStatus.map(([name, status], i) => (
          <li
            key={name}
            className="flex items-center justify-between text-base text-primary-100"
          >
            {name}
            <span className="flex items-center gap-2 text-sm text-primary-300">
              <motion.span
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                className="h-1.5 w-1.5 rounded-full bg-primary-300"
              />
              {status}
            </span>
          </li>
        ))}
      </ul>
    </div>
    <div className="mt-4 flex items-center gap-3 rounded-xl border border-primary-100 bg-white px-4 py-3 shadow-lg sm:absolute sm:-bottom-6 sm:-left-3 sm:mt-0">
      <FaCheckCircle className="text-xl text-primary-600" />
      <span className="text-base font-semibold text-primary-900">
        Data Integrity Verified
      </span>
    </div>
  </div>
);

const Benefits = () => (
  <section className="bg-primary-50 py-10 lg:py-12">
    <Container>
      <SectionHead
        eyebrow="Key Benefits"
        title="Transform Your Data Into Strategic Assets"
        text="Our proven methodology ensures seamless data migration with minimal downtime, complete accuracy, and enhanced accessibility for business intelligence."
      />
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div {...fade()} className="pb-6">
          <MigrationDashboard />
        </motion.div>
        <div className="space-y-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              {...fade(i)}
              className="group flex items-start gap-4 rounded-xl border border-primary-100 bg-white p-5 transition-colors hover:border-primary-300"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-700 transition-colors group-hover:bg-primary-800 group-hover:text-white">
                <b.icon />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-primary-900">
                  {b.title}
                </h3>
                <p className="text-base text-primary-600">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

/* ============ PAGE ============ */
const DataMigrationPage = () => (
  <main role="main">
    <Hero />
    <Services />
    <Methodology />
    <Benefits />
  </main>
);

export default DataMigrationPage;
