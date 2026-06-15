// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FaRobot,
//   FaCheckDouble,
//   FaTachometerAlt,
//   FaShieldAlt,
//   FaCodeBranch,
//   FaEye,
//   FaCogs,
//   FaFlask,
//   FaRocket,
//   FaCheckCircle,
//   FaArrowRight,
//   FaChartBar,
//   FaBug,
//   FaClock,
//   FaExpandArrowsAlt,
//   FaTimesCircle,
//   FaBolt,
//   FaLock,
//   FaDatabase,
//   FaCloud,
//   FaQuoteLeft,
//   FaStar,
//   FaUsers,
//   FaAward,
//   FaHandshake,
//   FaVial,
//   FaMicroscope,
//   FaClipboardCheck,
//   FaCog,
// } from "react-icons/fa";
// import banner from "../../assets/services/sr33.png";

// // ==================== BRAND COLORS ====================
// const BRAND = {
//   navy: {
//     dark: "#12324f",
//     mid: "#12324f",
//     light: "#143A63",
//     lighter: "#1A4570",
//   },
//   gold: {
//     primary: "#FDB913",
//     light: "#FFD54F",
//     gradient: "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
//   },
//   ai: {
//     primary: "#FDB913", // Purple for AI
//     secondary: "#FDB913",
//     gradient: "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
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
//     icon: FaRobot,
//     title: "AI-Powered Test Automation",
//     description:
//       "Leverage intelligent automation to speed up testing cycles and improve accuracy across all applications.",
//     features: [
//       "Machine Learning Models",
//       "Self-healing Tests",
//       "Intelligent Test Generation",
//     ],
//     color: "#8B5CF6",
//     status: "AI ENABLED",
//     badgeColor: "#8B5CF6",
//   },
//   {
//     id: 2,
//     icon: FaCheckDouble,
//     title: "Functional & Regression Testing",
//     description:
//       "Ensure every feature works as expected and remains stable after updates or changes to the codebase.",
//     features: [
//       "End-to-End Scenarios",
//       "Smoke & Sanity Suites",
//       "Cross-browser Testing",
//     ],
//     color: "#3B82F6",
//     status: "ACTIVE",
//     badgeColor: "#3B82F6",
//   },
//   {
//     id: 3,
//     icon: FaTachometerAlt,
//     title: "Performance & Load Testing",
//     description:
//       "Validate system performance under real-world conditions to ensure scalability and responsiveness.",
//     features: ["Stress Testing", "Spike Testing", "Endurance Testing"],
//     color: "#10B981",
//     status: "OPTIMIZED",
//     badgeColor: "#10B981",
//   },
//   {
//     id: 4,
//     icon: FaShieldAlt,
//     title: "Security Testing",
//     description:
//       "Identify vulnerabilities and protect applications against potential threats and security breaches.",
//     features: [
//       "Penetration Testing",
//       "Vulnerability Scanning",
//       "Compliance Audits",
//     ],
//     color: "#EF4444",
//     status: "SECURED",
//     badgeColor: "#EF4444",
//   },
//   {
//     id: 5,
//     icon: FaCodeBranch,
//     title: "Continuous Testing (CI/CD)",
//     description:
//       "Integrate testing into DevOps pipelines for faster, more reliable releases with zero-touch deployment.",
//     features: [
//       "Pipeline Integration",
//       "Shift-left Testing",
//       "Automated Reporting",
//     ],
//     color: "#F59E0B",
//     status: "INTEGRATED",
//     badgeColor: "#F59E0B",
//   },
// ];

// // ==================== BENEFITS DATA ====================
// const benefitsData = [
//   {
//     icon: FaRocket,
//     title: "Faster Time-to-Market",
//     description: "Accelerated releases through intelligent automation",
//   },
//   {
//     icon: FaCheckCircle,
//     title: "Improved Reliability",
//     description: "Enhanced application stability and fewer defects",
//   },
//   {
//     icon: FaShieldAlt,
//     title: "Reduced Risk",
//     description: "Minimize production failures and business impact",
//   },
//   {
//     icon: FaChartBar,
//     title: "Better UX",
//     description: "Superior user experience and performance",
//   },
// ];

// // ==================== PROCESS STEPS ====================
// const processSteps = [
//   {
//     step: 1,
//     icon: FaMicroscope,
//     title: "Assess",
//     subtitle: "Discovery Phase",
//     description:
//       "Understand application architecture, identify risks, and define comprehensive testing strategy.",
//     color: "#8B5CF6",
//   },
//   {
//     step: 2,
//     icon: FaRobot,
//     title: "Automate",
//     subtitle: "Framework Setup",
//     description:
//       "Implement AI-driven test frameworks with intelligent test case generation and self-healing capabilities.",
//     color: "#6366F1",
//   },
//   {
//     step: 3,
//     icon: FaFlask,
//     title: "Validate",
//     subtitle: "Execution Phase",
//     description:
//       "Execute comprehensive testing cycles across functional, performance, and security dimensions.",
//     color: "#3B82F6",
//   },
//   {
//     step: 4,
//     icon: FaCog /* Using FaCog as fallback - will import properly */,
//     title: "Optimize",
//     subtitle: "Improvement Phase",
//     description:
//       "Continuously improve quality metrics, optimize test coverage, and enhance overall performance.",
//     color: "#10B981",
//   },
// ];

// // ==================== METRICS DATA ====================
// const metricsData = [
//   { value: "95%", label: "Defect Reduction", icon: FaBug, color: "#8B5CF6" },
//   { value: "60%", label: "Faster Releases", icon: FaClock, color: "#3B82F6" },
//   {
//     value: "99.9%",
//     label: "Test Coverage",
//     icon: FaCheckCircle,
//     color: "#10B981",
//   },
//   { value: "40%", label: "Cost Savings", icon: FaChartBar, color: "#F59E0B" },
// ];

// // ==================== COMPONENTS ====================

// // Service Card Component with AI Badge
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
//       <div
//         className="relative h-full rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-700"
//         style={{
//           background: isHovered
//             ? `linear-gradient(135deg,
//                 #081C34 0%,
//                 #0D2747 50%,
//                 #163B66 100%)`
//             : `linear-gradient(135deg,
//                 #0A1A2F 0%,
//                 #102B4C 50%,
//                 #163B66 100%)`,

//           border: isHovered
//             ? "1px solid rgba(253,185,19,0.25)"
//             : "1px solid rgba(255,255,255,0.06)",

//           boxShadow: isHovered
//             ? "0 30px 80px rgba(8,28,52,0.45)"
//             : "0 10px 35px rgba(8,28,52,0.20)",
//         }}
//       >
//         {/* Top Accent */}
//         <motion.div
//           className="absolute top-0 left-0 right-0 h-1 origin-left"
//           style={{
//             background: "linear-gradient(90deg, #FDB913, transparent)",
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
//               background: "rgba(253,185,19,0.12)",
//               color: "#FDB913",
//               border: "1px solid rgba(253,185,19,0.25)",
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
//               className="w-1.5 h-1.5 rounded-full inline-block bg-[#FDB913]"
//             />

//             {service.status}
//           </span>
//         </div>

//         {/* Glow Effect */}
//         <div className="absolute top-0 right-0 w-40 h-40 bg-[#FDB913]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

//         <div className="relative z-10 p-8 lg:p-10">
//           {/* Icon */}
//           <motion.div
//             className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
//             style={{
//               background: "rgba(253,185,19,0.12)",
//               border: "1px solid rgba(253,185,19,0.25)",
//             }}
//             whileHover={{ rotate: [0, -5, 5, 0] }}
//           >
//             <service.icon className="text-2xl" style={{ color: "#FDB913" }} />
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
//                 <FaCheckCircle className="flex-shrink-0 text-xs text-[#FDB913]" />

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
//     <div
//       className="relative p-6 rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-500"
//       style={{
//         background:
//           "linear-gradient(135deg, #081C34 0%, #102B4C 50%, #163B66 100%)",

//         border: "1px solid rgba(255,255,255,0.08)",

//         boxShadow: "0 10px 35px rgba(8,28,52,0.20)",
//       }}
//     >
//       {/* Gold Glow */}
//       <div className="absolute top-0 right-0 w-28 h-28 bg-[#FDB913]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//       <div className="relative z-10 flex items-start gap-4">
//         {/* Icon */}
//         <motion.div
//           className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
//           style={{
//             background: "rgba(253,185,19,0.12)",
//             border: "1px solid rgba(253,185,19,0.25)",
//           }}
//           whileHover={{ rotate: [0, -10, 10, 0] }}
//         >
//           <benefit.icon className="text-xl" style={{ color: "#FDB913" }} />
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
//         <div
//           className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 z-0"
//           style={{
//             background: `linear-gradient(to right, ${step.color}, rgba(148,163,184,0.2))`,
//           }}
//         />
//       )}

//       {/* Step Circle */}
//       <motion.div
//         className="w-20 h-20 rounded-full flex items-center justify-center relative z-10 mb-6 cursor-pointer"
//         style={{
//           background: isHovered ? step.color : `${step.color}15`,
//           border: `3px solid ${isHovered ? step.color : `${step.color}40`}`,
//           boxShadow: isHovered ? `0 10px 30px ${step.color}30` : "none",
//         }}
//         whileHover={{ scale: 1.1 }}
//       >
//         <step.icon
//           className="text-2xl"
//           style={{ color: isHovered ? "white" : step.color }}
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
//       <h4
//         className="text-lg font-bold mb-1 transition-colors duration-300"
//         style={{ color: BRAND.navy.dark }}
//       >
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

// // Animated Progress Bar Component
// const AnimatedProgressBar = ({ value, label, color, delay = 0 }) => (
//   <div className="space-y-1.5">
//     <div className="flex justify-between text-xs">
//       <span className="text-white/50">{label}</span>
//       <span className="font-medium" style={{ color }}>
//         {value}%
//       </span>
//     </div>
//     <div
//       className="h-2 rounded-full overflow-hidden"
//       style={{ background: "rgba(255,255,255,0.1)" }}
//     >
//       <motion.div
//         initial={{ width: 0 }}
//         animate={{ width: `${value}%` }}
//         transition={{ delay, duration: 1, ease: "easeOut" }}
//         className="h-full rounded-full relative"
//         style={{ background: `linear-gradient(90deg, ${color}, ${color}AA)` }}
//       >
//         {/* Shimmer Effect */}
//         <motion.div
//           animate={{ x: ["-100%", "200%"] }}
//           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//           className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
//         />
//       </motion.div>
//     </div>
//   </div>
// );

// // ==================== SECTIONS ====================

// // Hero Section (Left Text + Right QA Dashboard Visual)
// const HeroSection = () => (
//   <section
//     className="relative py-6 lg:py-10 overflow-hidden"
//     style={{
//       background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 60%, ${BRAND.navy.lighter} 100%)`,
//     }}
//   >
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

//       {/* Grid Pattern */}
//       <div
//         className="absolute inset-0 opacity-[0.02]"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)
//           `,
//           backgroundSize: "80px 80px",
//         }}
//       />

//       {/* Floating Orbs - Purple for AI theme */}
//       <motion.div
//         animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-16 right-20 w-[450px] h-[450px] rounded-full blur-3xl opacity-[0.08]"
//         style={{ background: "#8B5CF6" }}
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
//         style={{ background: BRAND.gold.primary }}
//       />

//       {/* Floating Particles */}
//       {[...Array(6)].map((_, i) => (
//         <motion.div
//           key={i}
//           animate={{
//             y: [0, Math.random() * -40, 0],
//             x: [0, (Math.random() - 0.5) * 40, 0],
//             opacity: [0.3, 0.7, 0.3],
//           }}
//           transition={{
//             duration: 4 + Math.random() * 4,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: i * 0.5,
//           }}
//           className="absolute w-2 h-2 rounded-full"
//           style={{
//             background: i % 2 === 0 ? "#8B5CF6" : BRAND.gold.primary,
//             top: `${20 + Math.random() * 60}%`,
//             left: `${10 + Math.random() * 80}%`,
//           }}
//         />
//       ))}
//     </div>

//     <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
//       <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//         {/* LEFT - Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Badge */}
//           <div className="inline-flex items-center gap-3 mb-6">
//             <div
//               className="w-10 h-10 rounded-lg flex items-center justify-center"
//               style={{
//                 background: `${BRAND.ai.primary}15`,
//                 border: `1px solid ${BRAND.ai.primary}30`,
//               }}
//             >
//               <FaVial className="text-lg" style={{ color: BRAND.ai.primary }} />
//             </div>
//             <span
//               className="text-sm font-bold uppercase tracking-[0.2em]"
//               style={{ color: BRAND.ai.primary }}
//             >
//               Testing & Quality Assurance
//             </span>
//           </div>

//           {/* Title */}
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
//             Delivering{" "}
//             <span
//               style={{
//                 backgroundImage: BRAND.ai.gradient,
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Reliable
//             </span>
//             ,{" "}
//             <span
//               style={{
//                 backgroundImage: BRAND.ai.gradient,
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               High-Performance
//             </span>{" "}
//             Digital Experiences
//           </h1>

//           {/* Description */}
//           <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-xl">
//             Advanced AI-powered testing and quality assurance solutions to
//             ensure your applications are secure, scalable, and high-performing.
//           </p>

//           <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
//             Our intelligent testing approach accelerates release cycles while
//             maintaining the highest standards of quality.
//           </p>

//           {/* AI Feature Tags */}
//           <div className="flex flex-wrap gap-3 mb-8">
//             {[
//               " AI-Powered",
//               " Fast Execution",
//               " Secure",
//               " Real-time Analytics",
//             ].map((tag, idx) => (
//               <motion.span
//                 key={idx}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.5 + idx * 0.1 }}
//                 className="px-4 py-2 rounded-lg text-xs font-semibold"
//                 style={{
//                   background: "rgba(139,92,246,0.1)",
//                   color: "white",
//                   border: "1px solid rgba(139,92,246,0.2)",
//                 }}
//               >
//                 {tag}
//               </motion.span>
//             ))}
//           </div>

//           {/* Trust Indicators */}
//           <div
//             className="flex flex-wrap items-center gap-6 mt-10 pt-8"
//             style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
//           >
//             {[
//               { icon: FaAward, text: "ISTQB Certified" },
//               { icon: FaUsers, text: "100+ QA Engineers" },
//               { icon: FaStar, text: "500+ Projects Tested" },
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
//           </div>
//         </motion.div>

//         {/* RIGHT - QA Dashboard Visual */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="relative"
//         >
//           {/* Main Dashboard Container */}
//           <div
//             className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
//             style={{
//               background: `linear-gradient(145deg, ${BRAND.navy.light}, ${BRAND.navy.mid})`,
//               border: `1px solid rgba(139,92,246,0.2)`,
//             }}
//           >
//             {/* Mock Dashboard Content */}
//             <div className="absolute inset-0 p-6 flex flex-col">
//               {/* Header */}
//               <div className="flex items-center justify-between mb-4">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 rounded-full bg-red-400" />
//                   <div className="w-3 h-3 rounded-full bg-yellow-400" />
//                   <div className="w-3 h-3 rounded-full bg-green-400" />
//                   <span className="ml-3 text-xs text-white/40 font-mono">
//                     QA Dashboard • AI Engine v3.2
//                   </span>
//                 </div>

//                 {/* AI Status */}
//                 <div
//                   className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
//                   style={{
//                     background: "rgba(139,92,246,0.15)",
//                     border: "1px solid rgba(139,92,246,0.3)",
//                   }}
//                 >
//                   <motion.span
//                     animate={{ rotate: [0, 360] }}
//                     transition={{
//                       duration: 3,
//                       repeat: Infinity,
//                       ease: "linear",
//                     }}
//                     className="w-2 h-2 rounded-full inline-block"
//                     style={{ background: "#8B5CF6" }}
//                   />
//                   <span
//                     className="text-[10px] font-bold uppercase tracking-wider"
//                     style={{ color: "#A78BFA" }}
//                   >
//                     AI Active
//                   </span>
//                 </div>
//               </div>

//               {/* Top Metrics Row */}
//               <div className="grid grid-cols-4 gap-3 mb-4">
//                 {[
//                   {
//                     label: "TEST CASES",
//                     value: "2,847",
//                     icon: "✓",
//                     color: "#10B981",
//                   },
//                   {
//                     label: "PASS RATE",
//                     value: "97.3%",
//                     icon: "↑",
//                     color: "#10B981",
//                   },
//                   {
//                     label: "DEFECTS FOUND",
//                     value: "23",
//                     icon: "!",
//                     color: "#F59E0B",
//                   },
//                   {
//                     label: "COVERAGE",
//                     value: "94.2%",
//                     icon: "◉",
//                     color: "#8B5CF6",
//                   },
//                 ].map((metric, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3 + idx * 0.1 }}
//                     className="p-3 rounded-xl"
//                     style={{
//                       background: "rgba(255,255,255,0.04)",
//                       border: `1px solid rgba(255,255,255,0.06)`,
//                     }}
//                   >
//                     <div className="text-[9px] text-white/35 uppercase tracking-wider mb-1">
//                       {metric.label}
//                     </div>
//                     <div className="flex items-baseline gap-1">
//                       <span className="text-lg font-black text-white">
//                         {metric.value}
//                       </span>
//                       <span className="text-xs" style={{ color: metric.color }}>
//                         {metric.icon}
//                       </span>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Main Chart Area */}
//               <div className="flex-1 grid grid-cols-3 gap-3 mb-4">
//                 {/* Test Results Chart */}
//                 <div
//                   className="col-span-2 rounded-xl p-4"
//                   style={{
//                     background: "rgba(255,255,255,0.03)",
//                     border: "1px solid rgba(255,255,255,0.06)",
//                   }}
//                 >
//                   <div className="flex items-center justify-between mb-3">
//                     <span className="text-[10px] text-white/40">
//                       TEST EXECUTION TREND
//                     </span>
//                     <div className="flex gap-2">
//                       <span className="text-[9px] text-green-400">● Pass</span>
//                       <span className="text-[9px] text-red-400">● Fail</span>
//                     </div>
//                   </div>

//                   {/* Mock Bar Chart */}
//                   <div className="h-28 flex items-end gap-1.5">
//                     {[85, 92, 78, 95, 88, 97, 94, 99, 96, 98].map(
//                       (height, idx) => (
//                         <motion.div
//                           key={idx}
//                           initial={{ height: 0 }}
//                           animate={{ height: `${height}%` }}
//                           transition={{
//                             delay: 0.5 + idx * 0.05,
//                             duration: 0.5,
//                           }}
//                           className="flex-1 rounded-t-md relative group"
//                           style={{
//                             background:
//                               height > 90
//                                 ? "linear-gradient(180deg, #10B981, #059669)"
//                                 : height > 80
//                                   ? "linear-gradient(180deg, #3B82F6, #2563EB)"
//                                   : "linear-gradient(180deg, #F59E0B, #D97706)",
//                           }}
//                         >
//                           {/* Tooltip on Hover would go here */}
//                         </motion.div>
//                       ),
//                     )}
//                   </div>

//                   <div className="flex justify-between mt-2 text-[9px] text-white/30">
//                     <span>Week 1</span>
//                     <span>W2</span>
//                     <span>W3</span>
//                     <span>W4</span>
//                     <span>W5</span>
//                     <span>W6</span>
//                     <span>W7</span>
//                     <span>W8</span>
//                     <span>W9</span>
//                     <span>W10</span>
//                   </div>
//                 </div>

//                 {/* Coverage Donut */}
//                 <div
//                   className="rounded-xl p-4 flex flex-col items-center justify-center"
//                   style={{
//                     background: "rgba(255,255,255,0.03)",
//                     border: "1px solid rgba(255,255,255,0.06)",
//                   }}
//                 >
//                   <span className="text-[10px] text-white/40 mb-3">
//                     CODE COVERAGE
//                   </span>

//                   {/* Animated Circle Progress */}
//                   <div className="relative w-24 h-24">
//                     <svg
//                       viewBox="0 0 100 100"
//                       className="w-full h-full -rotate-90"
//                     >
//                       <circle
//                         cx="50"
//                         cy="50"
//                         r="42"
//                         fill="none"
//                         stroke="rgba(255,255,255,0.08)"
//                         strokeWidth="8"
//                       />
//                       <motion.circle
//                         cx="50"
//                         cy="50"
//                         r="42"
//                         fill="none"
//                         stroke="#8B5CF6"
//                         strokeWidth="8"
//                         strokeLinecap="round"
//                         strokeDasharray={`${94.2 * 2.64} 264`}
//                         initial={{ strokeDashoffset: 264 }}
//                         animate={{ strokeDashoffset: 264 - 94.2 * 2.64 }}
//                         transition={{
//                           delay: 0.8,
//                           duration: 1.5,
//                           ease: "easeOut",
//                         }}
//                       />
//                     </svg>
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <span className="text-2xl font-black text-white">
//                         94%
//                       </span>
//                     </div>
//                   </div>

//                   <div className="mt-2 space-y-1 text-[9px]">
//                     <div className="flex justify-between">
//                       <span className="text-white/40">Lines</span>
//                       <span className="text-white/70">96%</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-white/40">Branches</span>
//                       <span className="text-white/70">91%</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Bottom Progress Bars */}
//               <div className="grid grid-cols-2 gap-3">
//                 <div
//                   className="p-3 rounded-xl space-y-2"
//                   style={{
//                     background: "rgba(255,255,255,0.03)",
//                     border: "1px solid rgba(255,255,255,0.06)",
//                   }}
//                 >
//                   <span className="text-[10px] text-white/40 uppercase">
//                     Module Progress
//                   </span>
//                   <AnimatedProgressBar
//                     value={87}
//                     label="Authentication"
//                     color="#10B981"
//                     delay={0.2}
//                   />
//                   <AnimatedProgressBar
//                     value={94}
//                     label="Payments"
//                     color="#3B82F6"
//                     delay={0.4}
//                   />
//                   <AnimatedProgressBar
//                     value={72}
//                     label="Reports"
//                     color="#F59E0B"
//                     delay={0.6}
//                   />
//                 </div>

//                 <div
//                   className="p-3 rounded-xl"
//                   style={{
//                     background: "rgba(255,255,255,0.03)",
//                     border: "1px solid rgba(255,255,255,0.06)",
//                   }}
//                 >
//                   <span className="text-[10px] text-white/40 uppercase mb-2 block">
//                     Recent Activity
//                   </span>
//                   <div className="space-y-2">
//                     {[
//                       {
//                         action: "AI detected 3 edge cases",
//                         time: "2m ago",
//                         type: "ai",
//                       },
//                       {
//                         action: "Regression suite passed",
//                         time: "5m ago",
//                         type: "success",
//                       },
//                       {
//                         action: "New vulnerability found",
//                         time: "12m ago",
//                         type: "warning",
//                       },
//                     ].map((activity, idx) => (
//                       <div key={idx} className="flex items-start gap-2">
//                         <div
//                           className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
//                             activity.type === "ai"
//                               ? "bg-purple-400"
//                               : activity.type === "success"
//                                 ? "bg-green-400"
//                                 : "bg-yellow-400"
//                           }`}
//                         />
//                         <div>
//                           <div className="text-[11px] text-white/70">
//                             {activity.action}
//                           </div>
//                           <div className="text-[9px] text-white/30">
//                             {activity.time}
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Floating AI Badge */}
//             <motion.div
//               animate={{ y: [0, -8, 0], rotate: [0, 2, -2, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-5 shadow-xl"
//               style={{ border: `2px solid ${BRAND.ai.primary}` }}
//             >
//               <div className="flex items-center gap-3">
//                 <div
//                   className="w-12 h-12 rounded-xl flex items-center justify-center"
//                   style={{ background: BRAND.ai.gradient }}
//                 >
//                   <FaRobot className="text-xl text-white" />
//                 </div>
//                 <div>
//                   <div
//                     className="text-base font-black"
//                     style={{ color: BRAND.navy.dark }}
//                   >
//                     AI-Powered
//                   </div>
//                   <div className="text-xs text-gray-500">
//                     Smart Testing Engine
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Decorative Elements */}
//           <div
//             className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl -z-10 opacity-60"
//             style={{
//               background: "linear-gradient(135deg, #8B5CF6, transparent)",
//             }}
//           />
//           <div
//             className="absolute -bottom-4 -left-8 w-32 h-32 rounded-full -z-10 opacity-40"
//             style={{ background: BRAND.gold.primary }}
//           />
//         </motion.div>
//       </div>
//     </div>
//   </section>
// );

// // Services Grid Section
// const ServicesSection = () => (
//   <section
//     id="services"
//     className="py-6 lg:py-10 bg-white relative overflow-hidden"
//   >
//     {/* Background Decoration */}
//     <div
//       className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.03] translate-x-1/3 -translate-y-1/3"
//       style={{ background: BRAND.ai.primary }}
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
//             background: `${BRAND.ai.primary}10`,
//             color: BRAND.ai.primary,
//             border: `1px solid ${BRAND.ai.primary}25`,
//           }}
//         >
//            What We Deliver
//         </span>

//         <h2
//           className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
//           style={{ color: BRAND.navy.dark }}
//         >
//           Comprehensive{" "}
//           <span style={{ color: BRAND.ai.primary }}>Testing Capabilities</span>
//         </h2>

//         <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
//           End-to-End quality assurance services powered by artificial
//           intelligence for faster, smarter testing.
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
//   <section className="py-6 lg:py-10 bg-gray-50 relative overflow-hidden">
//     <div className="max-w-7xl mx-auto px-4 lg:px-8">
//       <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//         {/* LEFT - Image / Visual */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="relative order-2 lg:order-1"
//         >
//           <div
//             className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
//             style={{
//               background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.light})`,
//               border: `1px solid rgba(139,92,246,0.15)`,
//             }}
//           >
//             {/* Placeholder Visual - QA Engineers / Testing Environment */}
//             <div className="absolute inset-0 p-8 flex flex-col justify-center">
//               {/* Testing Environment Visual */}
//               <div className="grid grid-cols-2 gap-4 h-full">
//                 {/* Left Panel - Code Review */}
//                 <div
//                   className="rounded-xl p-4 flex flex-col"
//                   style={{
//                     background: "rgba(255,255,255,0.05)",
//                     border: "1px solid rgba(255,255,255,0.08)",
//                   }}
//                 >
//                   <div className="flex items-center gap-2 mb-3">
//                     <FaCodeBranch
//                       className="text-sm"
//                       style={{ color: "#8B5CF6" }}
//                     />
//                     <span className="text-xs text-white/50 font-medium">
//                       CODE ANALYSIS
//                     </span>
//                   </div>

//                   {/* Mock Code Lines */}
//                   <div className="flex-1 space-y-2 font-mono text-[10px]">
//                     {[
//                       {
//                         line: "describe('UserAuth', () => {",
//                         indent: 0,
//                         color: "text-purple-400",
//                       },
//                       {
//                         line: "  it('should validate', async () => {",
//                         indent: 1,
//                         color: "text-blue-400",
//                       },
//                       {
//                         line: "    const result = await ai.test();",
//                         indent: 2,
//                         color: "text-white/70",
//                       },
//                       {
//                         line: "    expect(result).toBe(true);",
//                         indent: 2,
//                         color: "text-green-400",
//                       },
//                       { line: "  });", indent: 1, color: "text-blue-400" },
//                       {
//                         line: "}); // ✓ Passed by AI",
//                         indent: 0,
//                         color: "text-green-400",
//                       },
//                     ].map((code, i) => (
//                       <motion.div
//                         key={i}
//                         initial={{ opacity: 0, x: -10 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.3 + i * 0.1 }}
//                         className={`${code.color}`}
//                         style={{ paddingLeft: `${code.indent * 12}px` }}
//                       >
//                         {code.line}
//                       </motion.div>
//                     ))}
//                   </div>

//                   <div
//                     className="mt-auto pt-3 flex items-center gap-2"
//                     style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
//                   >
//                     <motion.span
//                       animate={{ opacity: [1, 0.5, 1] }}
//                       transition={{ duration: 2, repeat: Infinity }}
//                       className="w-2 h-2 rounded-full bg-green-400"
//                     />
//                     <span className="text-[10px] text-green-400">
//                       All tests passing
//                     </span>
//                   </div>
//                 </div>

//                 {/* Right Panel - Performance Graph */}
//                 <div
//                   className="rounded-xl p-4 flex flex-col"
//                   style={{
//                     background: "rgba(255,255,255,0.05)",
//                     border: "1px solid rgba(255,255,255,0.08)",
//                   }}
//                 >
//                   <div className="flex items-center gap-2 mb-3">
//                     <FaChartBar
//                       className="text-sm"
//                       style={{ color: "#10B981" }}
//                     />
//                     <span className="text-xs text-white/50 font-medium">
//                       PERFORMANCE METRICS
//                     </span>
//                   </div>

//                   {/* Animated Line Graph */}
//                   <div className="flex-1 relative">
//                     <svg
//                       viewBox="0 0 200 100"
//                       className="w-full h-full"
//                       preserveAspectRatio="none"
//                     >
//                       <defs>
//                         <linearGradient
//                           id="perfGradient"
//                           x1="0%"
//                           y1="0%"
//                           x2="0%"
//                           y2="100%"
//                         >
//                           <stop
//                             offset="0%"
//                             stopColor="#10B981"
//                             stopOpacity="0.3"
//                           />
//                           <stop
//                             offset="100%"
//                             stopColor="#10B981"
//                             stopOpacity="0"
//                           />
//                         </linearGradient>
//                       </defs>

//                       {/* Grid Lines */}
//                       {[0, 25, 50, 75, 100].map((y) => (
//                         <line
//                           key={y}
//                           x1="0"
//                           y1={y}
//                           x2="200"
//                           y2={y}
//                           stroke="rgba(255,255,255,0.05)"
//                           strokeWidth="0.5"
//                         />
//                       ))}

//                       {/* Area Fill */}
//                       <motion.path
//                         d="M0,80 Q25,70 50,55 T100,45 T150,35 T200,20 L200,100 L0,100 Z"
//                         fill="url(#perfGradient)"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.5, duration: 0.8 }}
//                       />

//                       {/* Line */}
//                       <motion.path
//                         d="M0,80 Q25,70 50,55 T100,45 T150,35 T200,20"
//                         fill="none"
//                         stroke="#10B981"
//                         strokeWidth="2"
//                         initial={{ pathLength: 0 }}
//                         animate={{ pathLength: 1 }}
//                         transition={{
//                           delay: 0.3,
//                           duration: 1.5,
//                           ease: "easeOut",
//                         }}
//                       />

//                       {/* Moving Point */}
//                       <motion.circle
//                         cx="200"
//                         cy="20"
//                         r="4"
//                         fill="#10B981"
//                         animate={{ cy: [20, 15, 25, 20] }}
//                         transition={{
//                           duration: 3,
//                           repeat: Infinity,
//                           ease: "easeInOut",
//                         }}
//                       />
//                     </svg>

//                     {/* Y-axis labels */}
//                     <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[8px] text-white/30 -ml-6">
//                       <span>100ms</span>
//                       <span>75ms</span>
//                       <span>50ms</span>
//                       <span>25ms</span>
//                       <span>0</span>
//                     </div>
//                   </div>

//                   <div className="mt-auto pt-3 grid grid-cols-3 gap-2 text-center">
//                     {[
//                       { val: "23ms", label: "Avg Response" },
//                       { val: "99.9%", label: "Uptime" },
//                       { val: "<1s", label: "P99 Latency" },
//                     ].map((stat, i) => (
//                       <div key={i}>
//                         <div className="text-sm font-bold text-white">
//                           {stat.val}
//                         </div>
//                         <div className="text-[8px] text-white/40">
//                           {stat.label}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Bottom Status */}
//               <div
//                 className="mt-4 flex items-center justify-between px-2 py-3 rounded-xl"
//                 style={{
//                   background: "rgba(16,185,129,0.1)",
//                   border: "1px solid rgba(16,185,129,0.2)",
//                 }}
//               >
//                 <div className="flex items-center gap-2">
//                   <FaClipboardCheck
//                     className="text-sm"
//                     style={{ color: "#10B981" }}
//                   />
//                   <span
//                     className="text-xs font-medium"
//                     style={{ color: "#10B981" }}
//                   >
//                     Quality Gates Passed
//                   </span>
//                 </div>
//                 <span className="text-[10px] text-white/30">Build #1247</span>
//               </div>
//             </div>

//             {/* Floating Badge */}
//             <motion.div
//               animate={{ y: [0, -6, 0] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute -bottom-3 -left-3 bg-white rounded-xl p-4 shadow-lg"
//               style={{ border: `2px solid #8B5CF6` }}
//             >
//               <div className="flex items-center gap-3">
//                 <div
//                   className="w-10 h-10 rounded-lg flex items-center justify-center"
//                   style={{ background: "rgba(139,92,246,0.1)" }}
//                 >
//                   <FaBug className="text-lg" style={{ color: "#8B5CF6" }} />
//                 </div>
//                 <div>
//                   <div
//                     className="text-base font-black"
//                     style={{ color: BRAND.navy.dark }}
//                   >
//                     95%
//                   </div>
//                   <div className="text-[10px] text-gray-500">
//                     Defect Reduction
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* RIGHT - Benefits Content */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="order-1 lg:order-2"
//         >
//           <span
//             className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
//             style={{
//               background: `${BRAND.navy.mid}08`,
//               color: BRAND.navy.dark,
//               border: `1px solid ${BRAND.navy.mid}15`,
//             }}
//           >
//              Key Benefits
//           </span>

//           <h2
//             className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
//             style={{ color: BRAND.navy.dark }}
//           >
//             Why Choose{" "}
//             <span style={{ color: "#FDB913" }}>AI-Powered Testing</span>?
//           </h2>

//           <p
//             className="text-lg leading-relaxed mb-10"
//             style={{ color: "#64748B" }}
//           >
//             Our intelligent testing approach delivers superior results with less
//             manual effort, ensuring your applications meet the highest quality
//             standards.
//           </p>

//           {/* Benefits Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
//             {benefitsData.map((benefit, index) => (
//               <BenefitCard key={index} benefit={benefit} index={index} />
//             ))}
//           </div>

//           {/* Quick Stats */}
//           <div
//             className="p-6 rounded-2xl"
//             style={{
//               background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
//             }}
//           >
//             <h4 className="text-white font-bold mb-4 flex items-center gap-2">
//               <FaStar
//                 className="text-sm"
//                 style={{ color: BRAND.gold.primary }}
//               />
//               Quality Metrics
//             </h4>

//             <div className="grid grid-cols-2 gap-4">
//               {metricsData.map((metric, idx) => (
//                 <div
//                   key={idx}
//                   className="text-center p-3 rounded-xl"
//                   style={{ background: "rgba(255,255,255,0.05)" }}
//                 >
//                   <metric.icon
//                     className="mx-auto mb-1"
//                     style={{ color: metric.color, fontSize: "14px" }}
//                   />
//                   <div
//                     className="text-xl font-black"
//                     style={{ color: "white" }}
//                   >
//                     {metric.value}
//                   </div>
//                   <div className="text-[10px] text-white/50">
//                     {metric.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   </section>
// );

// // Process/Approach Section (Stepper UI)
// const ProcessSection = () => (
//   <section className="py-6 lg:py-10 bg-primary-800  relative overflow-hidden">
//     {/* Background Effects */}
//     <div className="absolute top-0 left-0 w-96 h-96 bg-[#FDB913]/10 blur-3xl rounded-full"></div>
//     <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#102B4C] blur-3xl rounded-full"></div>

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
//             background: "rgba(253,185,19,0.12)",
//             color: "#FDB913",
//             borderColor: "rgba(253,185,19,0.25)",
//           }}
//         >
//            Our Approach
//         </span>

//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
//           Intelligent{" "}
//           <span style={{ color: "#FDB913" }}>Testing Methodology</span>
//         </h2>

//         <p className="text-lg leading-relaxed text-white/70">
//           A systematic AI-driven approach ensuring comprehensive coverage and
//           optimal quality outcomes.
//         </p>
//       </motion.header>

//       {/* Desktop */}
//       <div className="hidden lg:block">
//         <div className="grid grid-cols-4 gap-8">
//           {processSteps.map((step, index) => (
//             <motion.div
//               key={step.step}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="group relative"
//             >
//               <div className="relative h-full p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#FDB913]/30 hover:bg-white/[0.07]">
//                 {/* Step Icon */}
//                 <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-[#FDB913] shadow-lg shadow-[#FDB913]/20">
//                   <step.icon className="text-2xl text-[#081C34]" />
//                 </div>

//                 {/* Step Number */}
//                 <div className="absolute top-6 right-6 text-5xl font-black text-white/5">
//                   {step.step}
//                 </div>

//                 {/* Title */}
//                 <h4 className="text-xl font-bold text-white mb-2">
//                   {step.title}
//                 </h4>

//                 {/* Subtitle */}
//                 <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FDB913] mb-3">
//                   {step.subtitle}
//                 </p>

//                 {/* Description */}
//                 <p className="text-sm leading-relaxed text-white/70">
//                   {step.description}
//                 </p>

//                 {/* Glow Effect */}
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#FDB913]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
//               <div className="w-14 h-14 rounded-full bg-[#FDB913] flex items-center justify-center shadow-lg shadow-[#FDB913]/20">
//                 <step.icon className="text-lg text-[#081C34]" />
//               </div>

//               {index < processSteps.length - 1 && (
//                 <div className="w-0.5 flex-1 mt-3 bg-gradient-to-b from-[#FDB913] to-white/10"></div>
//               )}
//             </div>

//             {/* Content */}
//             <div className="pb-8">
//               <h4 className="font-bold text-lg mb-1 text-white">
//                 {step.title}
//               </h4>

//               <p className="text-xs font-semibold uppercase tracking-wider mb-2 text-[#FDB913]">
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
//     className="py-6 lg:py-10 relative overflow-hidden"
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
//       className="absolute top-10 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.1]"
//       style={{ background: "#8B5CF6" }}
//     />

//     <motion.div
//       animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
//       transition={{
//         duration: 8,
//         repeat: Infinity,
//         ease: "easeInOut",
//         delay: 2,
//       }}
//       className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.06]"
//       style={{ background: BRAND.gold.primary }}
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
//             background: `${BRAND.ai.primary}15`,
//             border: `#FDB913`,
//           }}
//         >
//           <FaRocket className="text-3xl" style={{ color: "#FDB913" }} />
//         </motion.div>

//         {/* Main Heading */}
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
//           Deliver{" "}
//           <span style={{ color: "#FDB913" }}>Flawless Digital Experiences</span>{" "}
//           with <span style={{ color: "#FDB913" }}>AI-Powered Testing</span>
//         </h2>

//         <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
//           Don't let bugs slow you down. Our intelligent testing platform ensures
//           your applications are production-ready, secure, and performing at
//           their best.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
//           <a
//             href="/contact"
//             className="group relative px-10 py-5 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
//             style={{
//               background: "#FDB913",
//               color: "white",
//             }}
//           >
//             <span className="relative z-10 flex items-center gap-3">
//               Start Free Trial
//               <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
//             </span>

//             <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
//               <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
//             </div>
//           </a>
//         </div>

//         {/* Quick Contact Info */}
//         <div
//           className="flex flex-wrap items-center justify-center gap-8 pt-8"
//           style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
//         >
//           {[
//             { value: "Free Audit", icon: FaMicroscope },
//             { value: "Custom Frameworks", icon: FaCogs },
//             { value: "24/7 Support", icon: FaClock },
//           ].map((item, idx) => (
//             <div key={idx} className="flex items-center gap-2 text-white/60">
//               <item.icon className="text-sm" style={{ color: "#FDB913" }} />
//               <span className="text-sm font-medium">{item.value}</span>
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   </section>
// );

// // Main TQA Page Component
// const TestingQAPage = () => {
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

//       <CTABannerSection />
//     </main>
//   );
// };

// export default TestingQAPage;

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaCheckDouble,
  FaTachometerAlt,
  FaShieldAlt,
  FaCodeBranch,
  FaEye,
  FaCogs,
  FaFlask,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaChartBar,
  FaBug,
  FaClock,
  FaExpandArrowsAlt,
  FaTimesCircle,
  FaBolt,
  FaLock,
  FaDatabase,
  FaCloud,
  FaQuoteLeft,
  FaStar,
  FaUsers,
  FaAward,
  FaHandshake,
  FaVial,
  FaMicroscope,
  FaClipboardCheck,
  FaCog,
  FaUniversalAccess, // Added for Accessibility
  FaPlug, // Added for API Testing
} from "react-icons/fa";
import banner from "../../assets/services/sr33.png";

// ==================== BRAND COLORS ====================
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
  ai: {
    primary: "#FDB913",
    secondary: "#FDB913",
    gradient: "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
  },
};

// ==================== ANIMATION CONFIG ====================
const ANIMATION = {
  stagger: 0.12,
  duration: 0.6,
  spring: { type: "spring", stiffness: 300, damping: 25 },
};

// ==================== SERVICES DATA (UPDATED) ====================
const servicesData = [
  {
    id: 1,
    icon: FaCogs,
    title: "Automated Testing Frameworks",
    description:
      "Custom-built, scalable test automation frameworks designed for maintainability and seamless integration into your development pipeline.",
    features: [
      "Framework Architecture Design",
      "Modular Test Components",
      "CI/CD Pipeline Integration",
    ],
    color: "#8B5CF6",
    status: "AUTOMATED",
  },
  {
    id: 2,
    icon: FaCheckDouble,
    title: "Functional Testing",
    description:
      "Validating that every feature of your application works exactly as intended, ensuring flawless user journeys across all modules.",
    features: [
      "End-to-End Testing",
      "User Acceptance Testing (UAT)",
      "Cross-browser Validation",
    ],
    color: "#3B82F6",
    status: "ACTIVE",
  },
  {
    id: 3,
    icon: FaTachometerAlt,
    title: "Performance Testing",
    description:
      "Ensuring your applications remain fast, stable, and responsive under heavy load, stress, and peak traffic conditions.",
    features: [
      "Load & Stress Testing",
      "Scalability Assessment",
      "Bottleneck Identification",
    ],
    color: "#10B981",
    status: "OPTIMIZED",
  },
  {
    id: 4,
    icon: FaShieldAlt,
    title: "Security Testing",
    description:
      "Identifying vulnerabilities and protecting applications against threats, data breaches, and compliance violations.",
    features: [
      "Vulnerability Scanning",
      "Penetration Testing",
      "Compliance Audits",
    ],
    color: "#EF4444",
    status: "SECURED",
  },
  {
    id: 5,
    icon: FaUniversalAccess,
    title: "Accessibility Testing",
    description:
      "Making your applications inclusive and fully compliant with WCAG standards, ensuring usability for all users.",
    features: [
      "WCAG Compliance Checks",
      "Screen Reader Compatibility",
      "Usability Audits",
    ],
    color: "#F59E0B",
    status: "INCLUSIVE",
  },
  {
    id: 6,
    icon: FaCodeBranch,
    title: "Regression & API Testing",
    description:
      "Ensuring new code changes don't break existing functionality, while validating seamless backend API integrations.",
    features: [
      "Automated Regression Suites",
      "REST & GraphQL API Testing",
      "Contract Testing",
    ],
    color: "#6366F1",
    status: "VERIFIED",
  },
];

// ==================== TOOLS DATA (NEW) ====================
const toolsData = [
  {
    name: "Selenium",
    category: "UI Automation",
    icon: FaRobot,
    color: "#43B02A",
  },
  {
    name: "Cypress",
    category: "Modern Web Testing",
    icon: FaBolt,
    color: "#69D3A7",
  },
  {
    name: "JMeter",
    category: "Load Testing",
    icon: FaTachometerAlt,
    color: "#D22128",
  },
  {
    name: "K6",
    category: "Performance Testing",
    icon: FaChartBar,
    color: "#7D64FF",
  },
  {
    name: "OWASP",
    category: "Security Scanning",
    icon: FaShieldAlt,
    color: "#FDB913",
  },
  {
    name: "API Testing",
    category: "REST / GraphQL",
    icon: FaPlug,
    color: "#3B82F6",
  },
];

// ==================== BENEFITS DATA ====================
const benefitsData = [
  {
    icon: FaRocket,
    title: "Faster Time-to-Market",
    description: "Accelerated releases through intelligent automation",
  },
  {
    icon: FaCheckCircle,
    title: "Improved Reliability",
    description: "Enhanced application stability and fewer defects",
  },
  {
    icon: FaShieldAlt,
    title: "Reduced Risk",
    description: "Minimize production failures and business impact",
  },
  {
    icon: FaChartBar,
    title: "Better UX",
    description: "Superior user experience and performance",
  },
];

// ==================== PROCESS STEPS ====================
const processSteps = [
  {
    step: 1,
    icon: FaMicroscope,
    title: "Assess",
    subtitle: "Discovery Phase",
    description:
      "Understand application architecture, identify risks, and define comprehensive testing strategy.",
    color: "#8B5CF6",
  },
  {
    step: 2,
    icon: FaRobot,
    title: "Automate",
    subtitle: "Framework Setup",
    description:
      "Implement AI-driven test frameworks with intelligent test case generation and self-healing capabilities.",
    color: "#6366F1",
  },
  {
    step: 3,
    icon: FaFlask,
    title: "Validate",
    subtitle: "Execution Phase",
    description:
      "Execute comprehensive testing cycles across functional, performance, and security dimensions.",
    color: "#3B82F6",
  },
  {
    step: 4,
    icon: FaCog,
    title: "Optimize",
    subtitle: "Improvement Phase",
    description:
      "Continuously improve quality metrics, optimize test coverage, and enhance overall performance.",
    color: "#10B981",
  },
];

// ==================== METRICS DATA ====================
const metricsData = [
  { value: "95%", label: "Defect Reduction", icon: FaBug, color: "#8B5CF6" },
  {
    value: "60%",
    label: "Faster Releases",
    icon: FaClock,
    color: "#3B82F6",
  },
  {
    value: "99.9%",
    label: "Test Coverage",
    icon: FaCheckCircle,
    color: "#10B981",
  },
  {
    value: "40%",
    label: "Cost Savings",
    icon: FaChartBar,
    color: "#F59E0B",
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
      className="group h-full"
      style={{
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
      }}
    >
      <div className="relative h-full rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-700 bg-primary-800">
        {/* Top Accent */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 origin-left"
          style={{
            background: `linear-gradient(90deg, ${service.color}, transparent)`,
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Status Badge */}
        <div className="absolute top-5 right-5 z-20">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
            style={{
              background: `${service.color}15`,
              color: service.color,
              border: `1px solid ${service.color}30`,
            }}
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ background: service.color }}
            />
            {service.status}
          </span>
        </div>

        {/* Glow Effect */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#FDB913]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

        <div className="relative z-10 p-8 lg:p-10">
          {/* Icon */}
          <motion.div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
            style={{
              background: `${service.color}12`,
              border: `1px solid ${service.color}25`,
            }}
            whileHover={{ rotate: [0, -5, 5, 0] }}
          >
            <service.icon
              className="text-2xl"
              style={{ color: service.color }}
            />
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3 pr-16 text-white">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed mb-6 text-white/70">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-3 mb-6">
            {service.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-sm text-white/80"
              >
                <FaCheckCircle
                  className="flex-shrink-0 text-xs"
                  style={{ color: service.color }}
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

// Tool Card Component
const ToolCard = ({ tool, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.4 }}
    whileHover={{ y: -5, scale: 1.05 }}
    className="group relative"
  >
    <div
      className="relative rounded-2xl p-6 text-center overflow-hidden transition-all duration-300"
      style={{
        background: "white",
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{
          background: `linear-gradient(90deg, ${tool.color}, transparent)`,
        }}
      />
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300"
        style={{
          background: `${tool.color}10`,
          border: `1px solid ${tool.color}20`,
        }}
      >
        <tool.icon className="text-2xl" style={{ color: tool.color }} />
      </div>
      <h4
        className="font-bold text-base mb-1"
        style={{ color: BRAND.navy.dark }}
      >
        {tool.name}
      </h4>
      <p className="text-xs text-gray-500 font-medium">{tool.category}</p>
    </div>
  </motion.div>
);

// Benefit Card Component
const BenefitCard = ({ benefit, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{
      delay: index * 0.1,
      duration: ANIMATION.duration,
      ...ANIMATION.spring,
    }}
    whileHover={{ y: -6, scale: 1.02 }}
    className="group"
  >
    <div className="relative p-6 rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-500 bg-primary-800">
      <div className="absolute top-0 right-0 w-28 h-28 bg-[#FDB913]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10 flex items-start gap-4">
        <motion.div
          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{
            background: "rgba(253,185,19,0.12)",
            border: "1px solid rgba(253,185,19,0.25)",
          }}
          whileHover={{ rotate: [0, -10, 10, 0] }}
        >
          <benefit.icon className="text-xl" style={{ color: "#FDB913" }} />
        </motion.div>
        <div>
          <h4 className="font-bold text-base mb-2 text-white">
            {benefit.title}
          </h4>
          <p className="text-sm leading-relaxed text-white/70">
            {benefit.description}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

// Animated Progress Bar Component
const AnimatedProgressBar = ({ value, label, color, delay = 0 }) => (
  <div className="space-y-1.5">
    <div className="flex justify-between text-xs">
      <span className="text-white/50">{label}</span>
      <span className="font-medium" style={{ color }}>
        {value}%
      </span>
    </div>
    <div
      className="h-2 rounded-full overflow-hidden"
      style={{ background: "rgba(255,255,255,0.1)" }}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ delay, duration: 1, ease: "easeOut" }}
        className="h-full rounded-full relative"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}AA)` }}
      >
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
        />
      </motion.div>
    </div>
  </div>
);

// ==================== SECTIONS ====================

// Hero Section
const HeroSection = () => (
  <section className="relative py-6 lg:py-10 overflow-hidden bg-primary-800">
    <div className="absolute inset-0" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-20 w-[450px] h-[450px] rounded-full blur-3xl opacity-[0.08]"
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
        className="absolute bottom-16 left-16 w-[350px] h-[350px] rounded-full blur-3xl opacity-[0.05]"
        style={{ background: BRAND.gold.primary }}
      />
    </div>

    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-1 gap-12 lg:gap-20 items-center">
        {/* LEFT - Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{
                background: `${BRAND.ai.primary}15`,
                border: `1px solid ${BRAND.ai.primary}30`,
              }}
            >
              <FaVial className="text-lg" style={{ color: BRAND.ai.primary }} />
            </div>
            <span
              className="text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: BRAND.ai.primary }}
            >
              Testing & Quality Assurance
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
            End-to-End{" "}
            <span
              style={{
                backgroundImage: BRAND.ai.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Test Automation
            </span>{" "}
            & Quality Assurance
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-xl">
            From automated frameworks to functional, performance, and security
            testing—we ensure your applications are reliable, scalable, and
            flawless.
          </p>

          {/* <div className="flex flex-wrap gap-3 mb-8">
            {[
              " Automated Frameworks",
              " OWASP Security",
              " Cypress & Selenium",
              " K6 Performance",
            ].map((tag, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="px-4 py-2 rounded-lg text-xs font-semibold"
                style={{
                  background: "rgba(139,92,246,0.1)",
                  color: "white",
                  border: "1px solid rgba(139,92,246,0.2)",
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div> */}

          {/* <div
            className="flex flex-wrap items-center gap-6 mt-10 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            {[
              { icon: FaAward, text: "ISTQB Certified" },
              { icon: FaUsers, text: "100+ QA Engineers" },
              { icon: FaStar, text: "500+ Projects Tested" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <item.icon
                  className="text-sm"
                  style={{ color: BRAND.gold.primary }}
                />
                <span className="text-xs text-white/60 font-medium">
                  {item.text}
                </span>
              </div>
            ))}
          </div> */}
        </motion.div>
      </div>
    </div>
  </section>
);

// Services Grid Section
const ServicesSection = () => (
  <section
    id="services"
    className="py-6 lg:py-10 bg-white relative overflow-hidden"
  >
    <div
      className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.03] translate-x-1/3 -translate-y-1/3"
      style={{ background: BRAND.ai.primary }}
    />

    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span
          className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
          style={{
            background: `${BRAND.ai.primary}10`,
            color: BRAND.ai.primary,
            border: `1px solid ${BRAND.ai.primary}25`,
          }}
        >
          What We Deliver
        </span>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          style={{ color: BRAND.navy.dark }}
        >
          Comprehensive{" "}
          <span style={{ color: BRAND.ai.primary }}>Testing Capabilities</span>
        </h2>

        <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
          End-to-End quality assurance services covering every aspect of your
          application lifecycle.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  </section>
);

// Tools Section (NEW)
const ToolsSection = () => (
  <section className="py-6 lg:py-10 bg-gray-50 relative overflow-hidden">
    <div
      className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.03] -translate-x-1/3 translate-y-1/3"
      style={{ background: "#3B82F6" }}
    />

    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <span
          className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
          style={{
            background: `${BRAND.navy.mid}08`,
            color: BRAND.navy.dark,
            border: `1px solid ${BRAND.navy.mid}15`,
          }}
        >
          Our Tool Stack
        </span>

        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: BRAND.navy.dark }}
        >
          Industry-Leading{" "}
          <span style={{ color: BRAND.gold.primary }}>Testing Tools</span>
        </h2>

        <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>
          We leverage the best-in-class automation and testing frameworks to
          deliver unmatched quality.
        </p>
      </motion.header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {toolsData.map((tool, index) => (
          <ToolCard key={index} tool={tool} index={index} />
        ))}
      </div>
    </div>
  </section>
);

// Process/Approach Section
const ProcessSection = () => (
  <section className="py-6 lg:py-10 bg-primary-800 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-96 h-96 bg-[#FDB913]/10 blur-3xl rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#102B4C] blur-3xl rounded-full"></div>

    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span
          className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border"
          style={{
            background: "rgba(253,185,19,0.12)",
            color: "#FDB913",
            borderColor: "rgba(253,185,19,0.25)",
          }}
        >
          Our Approach
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
          Intelligent{" "}
          <span style={{ color: "#FDB913" }}>Testing Methodology</span>
        </h2>

        <p className="text-lg leading-relaxed text-white/70">
          A systematic AI-driven approach ensuring comprehensive coverage and
          optimal quality outcomes.
        </p>
      </motion.header>

      <div className="hidden lg:block">
        <div className="grid grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#FDB913]/30 hover:bg-white/[0.07]">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-[#FDB913] shadow-lg shadow-[#FDB913]/20">
                  <step.icon className="text-2xl text-[#081C34]" />
                </div>
                <div className="absolute top-6 right-6 text-5xl font-black text-white/5">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FDB913] mb-3">
                  {step.subtitle}
                </p>
                <p className="text-sm leading-relaxed text-white/70">
                  {step.description}
                </p>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FDB913]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="lg:hidden space-y-8">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex gap-5"
          >
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#FDB913] flex items-center justify-center shadow-lg shadow-[#FDB913]/20">
                <step.icon className="text-lg text-[#081C34]" />
              </div>
              {index < processSteps.length - 1 && (
                <div className="w-0.5 flex-1 mt-3 bg-gradient-to-b from-[#FDB913] to-white/10"></div>
              )}
            </div>
            <div className="pb-8">
              <h4 className="font-bold text-lg mb-1 text-white">
                {step.title}
              </h4>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2 text-[#FDB913]">
                {step.subtitle}
              </p>
              <p className="text-sm leading-relaxed text-white/70">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Benefits Section
const BenefitsSection = () => (
  <section className="py-6 lg:py-10 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT - Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2"
        >
          <span
            className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
            style={{
              background: `${BRAND.navy.mid}08`,
              color: BRAND.navy.dark,
              border: `1px solid ${BRAND.navy.mid}15`,
            }}
          >
            Key Benefits
          </span>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{ color: BRAND.navy.dark }}
          >
            Why Choose Our{" "}
            <span style={{ color: "#FDB913" }}>QA Solutions</span>?
          </h2>

          <p
            className="text-lg leading-relaxed mb-10"
            style={{ color: "#64748B" }}
          >
            Our intelligent testing approach delivers superior results with less
            manual effort, ensuring your applications meet the highest quality
            standards.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mb-10">
            {benefitsData.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
        </motion.div>

        {/* RIGHT - Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-1"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-primary-800">
            <div className="absolute inset-0 p-8 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div
                  className="rounded-xl p-4 flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <FaCodeBranch
                      className="text-sm"
                      style={{ color: "#8B5CF6" }}
                    />
                    <span className="text-xs text-white/50 font-medium">
                      SELENIUM SCRIPT
                    </span>
                  </div>
                  <div className="flex-1 space-y-2 font-mono text-[10px]">
                    {[
                      {
                        line: "describe('UserAuth', () => {",
                        indent: 0,
                        color: "text-purple-400",
                      },
                      {
                        line: "  it('should login', async () => {",
                        indent: 1,
                        color: "text-blue-400",
                      },
                      {
                        line: "    await driver.get('url');",
                        indent: 2,
                        color: "text-white/70",
                      },
                      {
                        line: "    expect(title).toBeTruthy();",
                        indent: 2,
                        color: "text-green-400",
                      },
                      { line: "  });", indent: 1, color: "text-blue-400" },
                      {
                        line: "}); // ✓ Passed",
                        indent: 0,
                        color: "text-green-400",
                      },
                    ].map((code, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className={`${code.color}`}
                        style={{ paddingLeft: `${code.indent * 12}px` }}
                      >
                        {code.line}
                      </motion.div>
                    ))}
                  </div>
                  <div
                    className="mt-auto pt-3 flex items-center gap-2"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <motion.span
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-green-400"
                    />
                    <span className="text-[10px] text-green-400">
                      All tests passing
                    </span>
                  </div>
                </div>

                <div
                  className="rounded-xl p-4 flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <FaChartBar
                      className="text-sm"
                      style={{ color: "#10B981" }}
                    />
                    <span className="text-xs text-white/50 font-medium">
                      K6 PERFORMANCE
                    </span>
                  </div>
                  <div className="flex-1 relative">
                    <svg
                      viewBox="0 0 200 100"
                      className="w-full h-full"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="perfGradient2"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#10B981"
                            stopOpacity="0.3"
                          />
                          <stop
                            offset="100%"
                            stopColor="#10B981"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                      <motion.path
                        d="M0,80 Q25,70 50,55 T100,45 T150,35 T200,20 L200,100 L0,100 Z"
                        fill="url(#perfGradient2)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      />
                      <motion.path
                        d="M0,80 Q25,70 50,55 T100,45 T150,35 T200,20"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          delay: 0.3,
                          duration: 1.5,
                          ease: "easeOut",
                        }}
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div
                className="mt-4 flex items-center justify-between px-2 py-3 rounded-xl"
                style={{
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.2)",
                }}
              >
                <div className="flex items-center gap-2">
                  <FaClipboardCheck
                    className="text-sm"
                    style={{ color: "#10B981" }}
                  />
                  <span
                    className="text-xs font-medium"
                    style={{ color: "#10B981" }}
                  >
                    Quality Gates Passed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// CTA Banner Section
const CTABannerSection = () => (
  <section
    className="py-6 lg:py-10 relative overflow-hidden"
    style={{
      background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, #0f0d29 50%, ${BRAND.navy.mid} 100%)`,
    }}
  >
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: "32px 32px",
      }}
    />
    <motion.div
      animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-10 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.1]"
      style={{ background: "#8B5CF6" }}
    />
    <motion.div
      animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
      className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.06]"
      style={{ background: BRAND.gold.primary }}
    />

    <div className="max-w-5xl mx-auto px-4 lg:px-8 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8"
          style={{
            background: `${BRAND.ai.primary}15`,
            border: `2px solid ${BRAND.ai.primary}`,
          }}
        >
          <FaRocket className="text-3xl" style={{ color: "#FDB913" }} />
        </motion.div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Deliver{" "}
          <span style={{ color: "#FDB913" }}>Flawless Digital Experiences</span>{" "}
          with <span style={{ color: "#FDB913" }}>Robust QA</span>
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          Don't let bugs slow you down. Our comprehensive test automation and QA
          frameworks ensure your applications are production-ready.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="/contact"
            className="group relative px-10 py-5 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{ background: "#FDB913", color: "white" }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Get Started Today
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            </div>
          </a>
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-8 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          {[
            { value: "Free QA Audit", icon: FaMicroscope },
            { value: "Custom Frameworks", icon: FaCogs },
            { value: "24/7 Support", icon: FaClock },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-white/60">
              <item.icon className="text-sm" style={{ color: "#FDB913" }} />
              <span className="text-sm font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// Main TQA Page Component
const TestingQAPage = () => {
  return (
    <main role="main">
      <HeroSection />
      <ServicesSection />
      <ToolsSection /> {/* Added Tools Section */}
      <ProcessSection />
      <BenefitsSection />
      {/* <CTABannerSection /> */}
    </main>
  );
};

export default TestingQAPage;
