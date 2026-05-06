// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FaPlane,
//   FaCogs,
//   FaShieldAlt,
//   FaChartLine,
//   FaDatabase,
//   FaSearch,
//   FaPencilRuler,
//   FaRocket,
//   FaCheckCircle,
//   FaArrowRight,
//   FaExclamationTriangle,
//   FaLock,
//   FaEye,
//   FaMoneyBillWave,
//   FaClock,
//   FaExpandArrowsAlt,
//   FaQuoteLeft,
//   FaStar,
//   FaUsers,
//   FaAward,
//   FaHandshake,
//   FaTools,
//   FaClipboardCheck,
//   FaProjectDiagram,
//   FaWrench,
//   FaIndustry,
//   FaSatellite,
//   FaBroadcastTower,
//   FaNetworkWired,
// } from "react-icons/fa";

// // ==================== BRAND COLORS (NAVY + GOLD ONLY) ====================
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

// // ==================== ANIMATION CONFIG ====================
// const ANIMATION = {
//   stagger: 0.12,
//   duration: 0.6,
//   spring: { type: "spring", stiffness: 300, damping: 25 },
// };

// // ==================== CHALLENGES DATA ====================
// const challengesData = [
//   {
//     icon: FaCogs,
//     title: "Complex Asset Lifecycle",
//     description:
//       "Managing intricate maintenance schedules and component tracking across diverse fleets.",
//   },
//   {
//     icon: FaLock,
//     title: "Strict Compliance Requirements",
//     description:
//       "Adhering to rigorous aviation regulations and defense standards globally.",
//   },
//   {
//     icon: FaMoneyBillWave,
//     title: "High Operational Costs",
//     description:
//       "Controlling MRO expenses while maintaining peak operational readiness.",
//   },
//   {
//     icon: FaEye,
//     title: "Limited Visibility",
//     description:
//       "Gaining real-time insights into asset health and operational status.",
//   },
// ];

// // ==================== SOLUTIONS DATA ====================
// const solutionsData = [
//   {
//     id: 1,
//     icon: FaWrench,
//     title: "MRO Optimization",
//     description:
//       "Streamline maintenance, repair, and overhaul operations with intelligent planning, tracking, and predictive maintenance capabilities.",
//     features: [
//       "Predictive Maintenance",
//       "Work Order Management",
//       "Component Tracking",
//     ],
//     color: "#FDB913",
//   },
//   {
//     id: 2,
//     icon: FaProjectDiagram,
//     title: "Project & Program Management",
//     description:
//       "Deliver large-scale defense and aerospace projects with better visibility, cost control, and execution efficiency.",
//     features: ["Resource Planning", "Milestone Tracking", "Budget Control"],
//     color: "#FFC107",
//   },
//   {
//     id: 3,
//     icon: FaShieldAlt,
//     title: "Compliance & Risk Management",
//     description:
//       "Ensure adherence to global regulations with built-in compliance tracking, audit readiness, and risk mitigation.",
//     features: ["Regulatory Tracking", "Audit Management", "Risk Assessment"],
//     color: "#EAB308",
//   },
//   {
//     id: 4,
//     icon: FaDatabase,
//     title: "SAP-Driven Transformation",
//     description:
//       "Leverage SAP S/4HANA for asset management, supply chain optimization, and real-time analytics.",
//     features: ["S/4HANA Implementation", "Asset Intelligence", "Supply Chain"],
//     color: "#CA8A04",
//   },
// ];

// // ==================== BENEFITS DATA ====================
// const benefitsData = [
//   {
//     icon: FaChartLine,
//     title: "Asset Performance",
//     description: "Improved lifecycle visibility and performance tracking",
//   },
//   {
//     icon: FaClock,
//     title: "Reduced Downtime",
//     description: "Minimized maintenance costs and faster turnaround",
//   },
//   {
//     icon: FaShieldAlt,
//     title: "Enhanced Compliance",
//     description: "Complete regulatory adherence and risk control",
//   },
//   {
//     icon: FaSatellite,
//     title: "Real-Time Insights",
//     description: "Operational visibility across all assets and systems",
//   },
// ];

// // ==================== PROCESS STEPS ====================
// const processSteps = [
//   {
//     step: 1,
//     icon: FaSearch,
//     title: "Assess",
//     subtitle: "Discovery Phase",
//     description:
//       "Understand systems, assets, compliance requirements, and operational challenges.",
//     color: "#FDB913",
//   },
//   {
//     step: 2,
//     icon: FaPencilRuler,
//     title: "Design",
//     subtitle: "Solution Architecture",
//     description:
//       "Build tailored aerospace solutions addressing MRO, compliance, and integration needs.",
//     color: "#FFC107",
//   },
//   {
//     step: 3,
//     icon: FaRocket,
//     title: "Implement",
//     subtitle: "Deployment Phase",
//     description:
//       "Deploy SAP platforms, integrated systems, and digital transformation initiatives.",
//     color: "#EAB308",
//   },
//   {
//     step: 4,
//     icon: FaChartLine,
//     title: "Optimize",
//     subtitle: "Continuous Improvement",
//     description:
//       "Monitor performance, refine processes, and ensure long-term operational excellence.",
//     color: "#CA8A04",
//   },
// ];

// // ==================== METRICS DATA ====================
// const metricsData = [
//   { value: "20+", label: "Aero Projects", icon: FaPlane, color: "#FDB913" },
//   {
//     value: "99.9%",
//     label: "Compliance Rate",
//     icon: FaShieldAlt,
//     color: "#10B981",
//   },
//   {
//     value: "35%",
//     label: "Cost Reduction",
//     icon: FaMoneyBillWave,
//     color: "#3B82F6",
//   },
//   {
//     value: "24/7",
//     label: "Mission Support",
//     icon: FaBroadcastTower,
//     color: "#EF4444",
//   },
// ];

// // ==================== COMPONENTS ====================

// // Challenge Card Component
// const ChallengeCard = ({ challenge, index }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{
//       delay: index * 0.1,
//       duration: ANIMATION.duration,
//       ...ANIMATION.spring,
//     }}
//     whileHover={{ y: -5, scale: 1.02 }}
//     className="group"
//   >
//     <div
//       className="p-6 rounded-xl h-full transition-all duration-500 hover:shadow-lg"
//       style={{
//         background: "white",
//         border: `1px solid ${index % 2 === 0 ? "rgba(11,29,51,0.08)" : "rgba(253,185,19,0.15)"}`,
//         boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
//       }}
//     >
//       <div className="flex items-start gap-4">
//         <motion.div
//           className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
//           style={{
//             background: `${BRAND.navy.dark}08`,
//             border: `2px solid ${BRAND.navy.dark}20`,
//           }}
//           whileHover={{ rotate: [0, -10, 10, 0] }}
//         >
//           <challenge.icon
//             className="text-xl"
//             style={{ color: BRAND.gold.primary }}
//           />
//         </motion.div>

//         <div>
//           <h4
//             className="font-bold text-base mb-2"
//             style={{ color: BRAND.navy.dark }}
//           >
//             {challenge.title}
//           </h4>
//           <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
//             {challenge.description}
//           </p>
//         </div>
//       </div>

//       {/* Warning indicator line */}
//       <motion.div
//         initial={{ scaleX: 0 }}
//         whileInView={{ scaleX: 1 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.3 + index * 0.1 }}
//         className="mt-4 h-1 rounded-full origin-left"
//         style={{
//           background: `linear-gradient(90deg, ${BRAND.gold.primary}, transparent)`,
//         }}
//       />
//     </div>
//   </motion.div>
// );

// // Solution Card Component
// const SolutionCard = ({ solution, index }) => {
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
//         className="relative h-full rounded-2xl overflow-hidden transition-all duration-700"
//         style={{
//           background: isHovered
//             ? `linear-gradient(180deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`
//             : "white",
//           border: isHovered
//             ? `2px solid ${solution.color}40`
//             : "1px solid rgba(0,0,0,0.06)",
//           boxShadow: isHovered
//             ? `0 25px 60px ${BRAND.navy.dark}30`
//             : "0 4px 20px rgba(0,0,0,0.04)",
//         }}
//       >
//         {/* Top Accent */}
//         <motion.div
//           className="absolute top-0 left-0 right-0 h-1 origin-left"
//           style={{ background: BRAND.gold.gradient }}
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: isHovered ? 1 : 0 }}
//           transition={{ duration: 0.4 }}
//         />

//         {/* Corner Glow */}
//         <div
//           className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
//           style={{
//             background: `radial-gradient(circle at top right, ${solution.color}15, transparent 70%)`,
//           }}
//         />

//         <div className="relative z-10 p-8 lg:p-10">
//           {/* Icon */}
//           <motion.div
//             className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
//             style={{
//               background: isHovered
//                 ? `${solution.color}20`
//                 : `${solution.color}10`,
//               border: `2px solid ${isHovered ? solution.color : `${solution.color}30`}`,
//             }}
//             whileHover={{ rotate: [0, -5, 5, 0] }}
//           >
//             <solution.icon
//               className="text-2xl"
//               style={{ color: solution.color }}
//             />
//           </motion.div>

//           {/* Title */}
//           <h3
//             className="text-xl font-bold mb-3 transition-colors duration-300"
//             style={{ color: isHovered ? "white" : BRAND.navy.dark }}
//           >
//             {solution.title}
//           </h3>

//           {/* Description */}
//           <p
//             className="text-sm leading-relaxed mb-6 transition-colors duration-300"
//             style={{ color: isHovered ? "rgba(255,255,255,0.75)" : "#64748B" }}
//           >
//             {solution.description}
//           </p>

//           {/* Features List */}
//           <ul className="space-y-2 mb-6">
//             {solution.features.map((feature, idx) => (
//               <li
//                 key={idx}
//                 className="flex items-center gap-2 text-sm"
//                 style={{
//                   color: isHovered ? "rgba(255,255,255,0.85)" : "#64748B",
//                 }}
//               >
//                 <FaCheckCircle
//                   className="flex-shrink-0 text-xs"
//                   style={{ color: solution.color }}
//                 />
//                 {feature}
//               </li>
//             ))}
//           </ul>

//           {/* Learn More Link */}
//           <div
//             className="flex items-center gap-2 pt-4 transition-all duration-300 group-hover:gap-3"
//             style={{
//               borderTop: `1px solid ${isHovered ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.05)"}`,
//             }}
//           >
//             <span
//               className="text-xs font-bold uppercase tracking-wider"
//               style={{ color: solution.color }}
//             >
//               Learn More
//             </span>
//             <FaArrowRight
//               className="text-xs transition-transform group-hover:translate-x-1"
//               style={{ color: solution.color }}
//             />
//           </div>
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
//     whileHover={{ y: -5, scale: 1.02 }}
//     className="group"
//   >
//     <div
//       className="p-6 rounded-xl transition-all duration-500 hover:shadow-lg"
//       style={{
//         background: "white",
//         border: "1px solid rgba(0,0,0,0.05)",
//         boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
//       }}
//     >
//       <div className="flex items-start gap-4">
//         <motion.div
//           className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
//           style={{
//             background: `${BRAND.gold.primary}10`,
//             border: `2px solid ${BRAND.gold.primary}25`,
//           }}
//           whileHover={{ rotate: [0, -10, 10, 0] }}
//         >
//           <benefit.icon
//             className="text-xl"
//             style={{ color: BRAND.gold.primary }}
//           />
//         </motion.div>

//         <div>
//           <h4
//             className="font-bold text-base mb-1"
//             style={{ color: BRAND.navy.dark }}
//           >
//             {benefit.title}
//           </h4>
//           <p className="text-sm" style={{ color: "#94A3B8" }}>
//             {benefit.description}
//           </p>
//         </div>
//       </div>
//     </div>
//   </motion.div>
// );

// // Step Component for Stepper
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
//       {/* Connector Line */}
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

// // MRO Dashboard Visual Component
// const MRODashboardVisual = () => (
//   <div className="absolute inset-0 p-6 flex flex-col">
//     {/* Header Bar */}
//     <div className="flex items-center justify-between mb-4">
//       <div className="flex items-center gap-2">
//         <FaPlane className="text-lg" style={{ color: BRAND.gold.primary }} />
//         <span className="text-xs text-white/50 font-mono">
//           MRO COMMAND CENTER
//         </span>
//       </div>

//       <div className="flex items-center gap-3">
//         <span
//           className="px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5"
//           style={{
//             background: "rgba(16,185,129,0.15)",
//             border: "1px solid rgba(16,185,129,0.3)",
//             color: "#10B981",
//           }}
//         >
//           <motion.span
//             animate={{ scale: [1, 1.2, 1] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="w-1.5 h-1.5 rounded-full bg-green-400"
//           />
//           SYSTEMS ONLINE
//         </span>
//         <span className="text-[10px] text-white/40 font-mono">
//           FLIGHT READY
//         </span>
//       </div>
//     </div>

//     {/* Main Grid */}
//     <div className="flex-1 grid grid-cols-3 gap-3">
//       {/* Fleet Status Panel */}
//       <div
//         className="rounded-xl p-3 space-y-2"
//         style={{
//           background: "rgba(255,255,255,0.03)",
//           border: "1px solid rgba(255,255,255,0.06)",
//         }}
//       >
//         <span className="text-[10px] text-white/40 uppercase">
//           Fleet Status
//         </span>
//         {[
//           {
//             aircraft: "A-320",
//             status: "Maintenance",
//             pct: 75,
//             color: "#F59E0B",
//           },
//           { aircraft: "B-737", status: "Ready", pct: 100, color: "#10B981" },
//           {
//             aircraft: "A-350",
//             status: "Inspection",
//             pct: 45,
//             color: "#3B82F6",
//           },
//           { aircraft: "B-787", status: "Service", pct: 90, color: "#8B5CF6" },
//         ].map((item, i) => (
//           <div key={i} className="space-y-1">
//             <div className="flex justify-between text-[10px]">
//               <span className="text-white/60">{item.aircraft}</span>
//               <span style={{ color: item.color }}>{item.status}</span>
//             </div>
//             <div
//               className="h-1.5 rounded-full overflow-hidden"
//               style={{ background: "rgba(255,255,255,0.1)" }}
//             >
//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={{ width: `${item.pct}%` }}
//                 transition={{ delay: 0.3 + i * 0.15, duration: 0.8 }}
//                 className="h-full rounded-full"
//                 style={{ background: item.color }}
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Central Radar/Gauge */}
//       <div
//         className="row-span-2 rounded-xl p-3 flex flex-col items-center justify-center relative"
//         style={{
//           background: "rgba(255,255,255,0.03)",
//           border: "1px solid rgba(255,255,255,0.06)",
//         }}
//       >
//         <span className="text-[10px] text-white/40 mb-2">
//           OPERATIONAL READINESS
//         </span>

//         {/* Animated Gauge */}
//         <div className="relative w-28 h-28">
//           <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
//             <circle
//               cx="50"
//               cy="50"
//               r="42"
//               fill="none"
//               stroke="rgba(255,255,255,0.08)"
//               strokeWidth="8"
//             />
//             <motion.circle
//               cx="50"
//               cy="50"
//               r="42"
//               fill="none"
//               stroke={BRAND.gold.primary}
//               strokeWidth="8"
//               strokeLinecap="round"
//               strokeDasharray={`${87 * 2.64} 264`}
//               initial={{ strokeDashoffset: 264 }}
//               animate={{ strokeDashoffset: 264 - 87 * 2.64 }}
//               transition={{ delay: 0.5, duration: 1.5 }}
//             />
//           </svg>
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="text-center">
//               <div className="text-2xl font-black text-white">87%</div>
//               <div className="text-[9px] text-white/40">READY</div>
//             </div>
//           </div>
//         </div>

//         {/* Status Indicators */}
//         <div className="mt-auto space-y-1.5 w-full">
//           {[
//             { label: "Components OK", val: "156/158", good: true },
//             { label: "Systems Check", val: "PASS", good: true },
//             { label: "Certification", val: "VALID", good: true },
//           ].map((s, i) => (
//             <div
//               key={i}
//               className="flex justify-between text-[9px] px-2 py-1 rounded"
//               style={{ background: "rgba(255,255,255,0.03)" }}
//             >
//               <span className="text-white/50">{s.label}</span>
//               <span className={s.good ? "text-green-400" : "text-yellow-400"}>
//                 {s.val}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Maintenance Schedule */}
//       <div
//         className="rounded-xl p-3"
//         style={{
//           background: "rgba(255,255,255,0.03)",
//           border: "1px solid rgba(255,255,255,0.06)",
//         }}
//       >
//         <span className="text-[10px] text-white/40 uppercase block mb-3">
//           Scheduled MRO
//         </span>
//         <div className="space-y-2">
//           {[
//             { task: "Engine Overhaul", date: "Dec 15", priority: "High" },
//             { task: "Avionics Check", date: "Dec 18", priority: "Med" },
//             { task: "Landing Gear Insp.", date: "Dec 20", priority: "Low" },
//             { task: "APU Service", date: "Dec 22", priority: "Med" },
//           ].map((task, i) => (
//             <div key={i} className="flex items-center gap-2 text-[10px]">
//               <span
//                 className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
//                   task.priority === "High"
//                     ? "bg-red-400"
//                     : task.priority === "Med"
//                       ? "bg-yellow-400"
//                       : "bg-blue-400"
//                 }`}
//               />
//               <span className="text-white/70 truncate">{task.task}</span>
//               <span className="text-white/30 ml-auto">{task.date}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Stats Row */}
//       <div className="col-span-2 grid grid-cols-4 gap-2">
//         {[
//           { label: "Aircraft", value: "24", sub: "Active" },
//           { label: "In Hangar", value: "6", sub: "MRO" },
//           { label: "Hours Flown", value: "12.4K", sub: "This Month" },
//           { label: "On Time", value: "98%", sub: "Rate" },
//         ].map((stat, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 + i * 0.1 }}
//             className="p-2 rounded-lg text-center"
//             style={{
//               background: "rgba(255,255,255,0.03)",
//               border: "1px solid rgba(255,255,255,0.06)",
//             }}
//           >
//             <div className="text-lg font-black text-white">{stat.value}</div>
//             <div className="text-[8px] text-white/40">{stat.label}</div>
//             <div className="text-[8px]" style={{ color: BRAND.gold.primary }}>
//               {stat.sub}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>

//     {/* Bottom Alert Bar */}
//     <div
//       className="mt-3 flex items-center justify-between px-3 py-2 rounded-lg"
//       style={{
//         background: "rgba(253,185,19,0.1)",
//         border: "1px solid rgba(253,185,19,0.2)",
//       }}
//     >
//       <div className="flex items-center gap-2">
//         <FaClipboardCheck
//           className="text-xs"
//           style={{ color: BRAND.gold.primary }}
//         />
//         <span
//           className="text-[10px] font-medium"
//           style={{ color: BRAND.gold.primary }}
//         >
//           ALL COMPLIANCE CHECKS PASSED
//         </span>
//       </div>
//       <span className="text-[10px] text-white/30">Last sync: Just now</span>
//     </div>
//   </div>
// );

// // Aircraft Visual Component
// const AircraftVisual = () => (
//   <div className="absolute inset-0 flex items-center justify-center p-8">
//     {/* Background Elements */}
//     <div className="absolute inset-0">
//       {/* Runway lines */}
//       <div
//         className="absolute bottom-10 left-0 right-0 h-0.5"
//         style={{
//           background:
//             "linear-gradient(90deg, transparent, rgba(253,185,19,0.3), transparent)",
//         }}
//       />

//       {/* Grid overlay */}
//       <div
//         className="absolute inset-0 opacity-[0.05]"
//         style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//           backgroundSize: "20px 20px",
//         }}
//       />
//     </div>

//     {/* Main Content */}
//     <div className="relative z-10 w-full max-w-md">
//       {/* Aircraft Silhouette Area */}
//       <motion.div
//         animate={{ y: [0, -10, 0], rotate: [0, 1, -1, 0] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//         className="mb-8"
//       >
//         <FaPlane
//           className="text-8xl mx-auto"
//           style={{
//             color: "rgba(253,185,19,0.3)",
//             filter: "drop-shadow(0 0 30px rgba(253,185,19,0.2))",
//           }}
//         />
//       </motion.div>

//       {/* Floating Data Cards around aircraft */}
//       <div className="grid grid-cols-2 gap-4">
//         {[
//           {
//             icon: FaWrench,
//             label: "MRO Active",
//             value: "6 Units",
//             pos: "top-0 left-0",
//           },
//           {
//             icon: FaShieldAlt,
//             label: "Compliance",
//             value: "100%",
//             pos: "top-0 right-0",
//           },
//           {
//             icon: FaClock,
//             label: "Next Flight",
//             value: "14:00",
//             pos: "bottom-0 left-0",
//           },
//           {
//             icon: FaChartLine,
//             label: "Efficiency",
//             value: "94%",
//             pos: "bottom-0 right-0",
//           },
//         ].map((card, idx) => (
//           <motion.div
//             key={idx}
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.3 + idx * 0.15 }}
//             className="p-4 rounded-xl backdrop-blur-sm"
//             style={{
//               background: "rgba(11,29,51,0.95)",
//               border: "1px solid rgba(253,185,19,0.25)",
//               boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
//             }}
//           >
//             <card.icon
//               className="text-lg mb-2"
//               style={{ color: BRAND.gold.primary }}
//             />
//             <div className="text-[10px] text-white/50 mb-1">{card.label}</div>
//             <div className="text-base font-black text-white">{card.value}</div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Center Badge */}
//       <motion.div
//         animate={{ y: [0, -5, 0] }}
//         transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full"
//         style={{
//           background: "rgba(11,29,51,0.95)",
//           border: "1px solid rgba(253,185,19,0.3)",
//           boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
//         }}
//       >
//         <div className="flex items-center gap-2">
//           <motion.span
//             animate={{ rotate: [0, 360] }}
//             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//             className="w-2 h-2 rounded-full"
//             style={{ background: BRAND.gold.primary }}
//           />
//           <span
//             className="text-[10px] font-bold"
//             style={{ color: BRAND.gold.primary }}
//           >
//             MISSION CONTROL ACTIVE
//           </span>
//         </div>
//       </motion.div>
//     </div>
//   </div>
// );

// // ==================== SECTIONS ====================

// // Hero Section
// const HeroSection = () => (
//   <section
//     className="relative py-20 lg:py-28 overflow-hidden"
//     style={{
//       background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 60%, ${BRAND.navy.lighter} 100%)`,
//     }}
//   >
//     {/* Background Elements */}
//     <div className="absolute inset-0" aria-hidden="true">
//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//           backgroundSize: "32px 32px",
//         }}
//       />

//       {/* Technical Grid Pattern */}
//       <div
//         className="absolute inset-0 opacity-[0.02]"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(253,185,19,0.2) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(253,185,19,0.2) 1px, transparent 1px)
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

//       {/* Floating Icons */}
//       {[FaPlane, FaSatellite, FaBroadcastTower, FaShieldAlt].map((Icon, i) => (
//         <motion.div
//           key={i}
//           animate={{
//             y: [0, Math.random() * -30, 0],
//             x: [0, (Math.random() - 0.5) * 40, 0],
//             opacity: [0.15, 0.35, 0.15],
//           }}
//           transition={{
//             duration: 5 + Math.random() * 5,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: i * 0.8,
//           }}
//           className="absolute w-10 h-10 rounded-lg flex items-center justify-center"
//           style={{
//             background: "rgba(253,185,19,0.08)",
//             border: "1px solid rgba(253,185,19,0.15)",
//             top: `${10 + Math.random() * 80}%`,
//             left: `${5 + Math.random() * 90}%`,
//           }}
//         >
//           <Icon className="text-base" style={{ color: BRAND.gold.primary }} />
//         </motion.div>
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
//                 background: `${BRAND.gold.primary}15`,
//                 border: `1px solid ${BRAND.gold.primary}30`,
//               }}
//             >
//               <FaPlane
//                 className="text-lg"
//                 style={{ color: BRAND.gold.primary }}
//               />
//             </div>
//             <span
//               className="text-sm font-bold uppercase tracking-[0.2em]"
//               style={{ color: BRAND.gold.primary }}
//             >
//               Aerospace & Defense
//             </span>
//           </div>

//           {/* Title */}
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
//             Engineering{" "}
//             <span
//               style={{
//                 backgroundImage: BRAND.gold.gradient,
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Precision
//             </span>
//             . Ensuring{" "}
//             <span
//               style={{
//                 backgroundImage:
//                   "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Mission-Critical Excellence
//             </span>
//             .
//           </h1>

//           {/* Description */}
//           <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-xl">
//             Advanced technology solutions for the Aerospace & Defense
//             industry—helping organizations manage complex operations, ensure
//             compliance, and optimize performance.
//           </p>

//           <p className="text-base text-gray-400 leading-relaxed mb-8 max-w-xl">
//             From MRO to project management and regulatory compliance, we enable
//             secure, efficient, and future-ready operations.
//           </p>

//           {/* Feature Tags */}
//           <div className="flex flex-wrap gap-3 mb-8">
//             {[
//               "✈️ MRO Solutions",
//               "🔒 Compliance Ready",
//               "📊 Real-Time Visibility",
//               "⚡ SAP S/4HANA",
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
//           </div>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4">
//             <a
//               href="/contact"
//               className="group relative px-8 py-4 rounded-xl font-bold text-base overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
//               style={{
//                 background: BRAND.gold.gradient,
//                 color: BRAND.navy.dark,
//                 boxShadow: `0 8px 30px ${BRAND.gold.primary}35`,
//               }}
//             >
//               <span className="relative z-10 flex items-center gap-3">
//                 Talk to Experts
//                 <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
//               </span>

//               <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
//                 <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
//               </div>
//             </a>

//             <a
//               href="#solutions"
//               className="px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:bg-white/5 flex items-center gap-3"
//               style={{
//                 border: "1px solid rgba(255,255,255,0.2)",
//                 color: "white",
//               }}
//             >
//               View Solutions ↓
//             </a>
//           </div>

//           {/* Trust Indicators */}
//           <div
//             className="flex flex-wrap items-center gap-6 mt-10 pt-8"
//             style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
//           >
//             {[
//               { icon: FaAward, text: "AS9100 Certified" },
//               { icon: FaUsers, text: "20+ Aero Clients" },
//               { icon: FaShieldAlt, text: "ITAR Compliant" },
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

//         {/* RIGHT - Visual */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="relative"
//         >
//           <div
//             className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
//             style={{
//               background: `linear-gradient(145deg, ${BRAND.navy.light}, ${BRAND.navy.mid})`,
//               border: `1px solid rgba(253,185,19,0.15)`,
//             }}
//           >
//             <AircraftVisual />
//           </div>

//           {/* Floating Stats Card */}
//           <motion.div
//             animate={{ y: [0, -8, 0] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-5 shadow-xl"
//             style={{ border: `2px solid ${BRAND.gold.primary}` }}
//           >
//             <div className="flex items-center gap-3">
//               <div
//                 className="w-12 h-12 rounded-xl flex items-center justify-center"
//                 style={{ background: `${BRAND.gold.primary}15` }}
//               >
//                 <FaIndustry
//                   className="text-xl"
//                   style={{ color: BRAND.gold.primary }}
//                 />
//               </div>
//               <div>
//                 <div
//                   className="text-xl font-black"
//                   style={{ color: BRAND.navy.dark }}
//                 >
//                   20+
//                 </div>
//                 <div className="text-xs text-gray-500">Years in Aero</div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Decorative Elements */}
//           <div
//             className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl -z-10 opacity-60"
//             style={{
//               background: "linear-gradient(135deg, #10B981, transparent)",
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

// // Challenges Section
// const ChallengesSection = () => (
//   <section className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
//     <div className="max-w-7xl mx-auto px-4 lg:px-8">
//       {/* Header */}
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
//           🚀 Industry Challenges We Solve
//         </span>

//         <h2
//           className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
//           style={{ color: BRAND.navy.dark }}
//         >
//           Navigating{" "}
//           <span style={{ color: BRAND.gold.primary }}>
//             Complex Aerospace Operations
//           </span>
//         </h2>

//         <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
//           The aerospace & defense sector faces unique challenges that require
//           specialized solutions.
//         </p>
//       </motion.header>

//       {/* Challenge Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {challengesData.map((challenge, index) => (
//           <ChallengeCard key={index} challenge={challenge} index={index} />
//         ))}
//       </div>
//     </div>
//   </section>
// );

// // Solutions Section
// const SolutionsSection = () => (
//   <section
//     id="solutions"
//     className="py-20 lg:py-28 bg-white relative overflow-hidden"
//   >
//     <div
//       className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.03] translate-x-1/3 -translate-y-1/3"
//       style={{ background: BRAND.navy.lighter }}
//     />

//     <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
//       {/* Header */}
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
//           💡 Our Solutions
//         </span>

//         <h2
//           className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
//           style={{ color: BRAND.navy.dark }}
//         >
//           Comprehensive{" "}
//           <span style={{ color: BRAND.gold.primary }}>Aerospace Solutions</span>
//         </h2>

//         <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
//           End-to-end technology services designed for mission-critical aerospace
//           and defense operations.
//         </p>
//       </motion.header>

//       {/* Solutions Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
//         {solutionsData.map((solution, index) => (
//           <SolutionCard key={solution.id} solution={solution} index={index} />
//         ))}
//       </div>
//     </div>
//   </section>
// );

// // Benefits Section (Image Left + Benefits Right)
// const BenefitsSection = () => (
//   <section className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
//     <div className="max-w-7xl mx-auto px-4 lg:px-8">
//       <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//         {/* LEFT - MRO Dashboard Visual */}
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
//               border: `1px solid rgba(253,185,19,0.15)`,
//             }}
//           >
//             <MRODashboardVisual />
//           </div>

//           {/* Floating Badge */}
//           <motion.div
//             animate={{ y: [0, -6, 0] }}
//             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute -bottom-3 -left-3 bg-white rounded-xl p-4 shadow-lg"
//             style={{ border: `2px solid #10B981` }}
//           >
//             <div className="flex items-center gap-3">
//               <div
//                 className="w-10 h-10 rounded-lg flex items-center justify-center"
//                 style={{ background: "rgba(16,185,129,0.1)" }}
//               >
//                 <FaWrench className="text-lg" style={{ color: "#10B981" }} />
//               </div>
//               <div>
//                 <div
//                   className="text-base font-black"
//                   style={{ color: BRAND.navy.dark }}
//                 >
//                   MRO
//                 </div>
//                 <div className="text-[10px] text-gray-500">Optimized</div>
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
//           <span
//             className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
//             style={{
//               background: `${BRAND.navy.mid}08`,
//               color: BRAND.navy.dark,
//               border: `1px solid ${BRAND.navy.mid}15`,
//             }}
//           >
//             🎯 Key Benefits
//           </span>

//           <h2
//             className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
//             style={{ color: BRAND.navy.dark }}
//           >
//             Transform{" "}
//             <span style={{ color: BRAND.gold.primary }}>
//               Aerospace Operations
//             </span>{" "}
//             with Intelligence
//           </h2>

//           <p
//             className="text-lg leading-relaxed mb-10"
//             style={{ color: "#64748B" }}
//           >
//             Our solutions deliver measurable improvements in asset performance,
//             compliance adherence, and operational efficiency.
//           </p>

//           {/* Benefits Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
//             {benefitsData.map((benefit, index) => (
//               <BenefitCard key={index} benefit={benefit} index={index} />
//             ))}
//           </div>

//           {/* Quick Metrics */}
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
//               Proven Results
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

// // Process Section
// const ProcessSection = () => (
//   <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
//     <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
//       {/* Header */}
//       <motion.header
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center max-w-3xl mx-auto mb-16"
//       >
//         <span
//           className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
//           style={{
//             background: `${BRAND.gold.primary}15`,
//             color: BRAND.navy.dark,
//             border: `1px solid ${BRAND.gold.primary}30`,
//           }}
//         >
//           🧠 Our Approach
//         </span>

//         <h2
//           className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
//           style={{ color: BRAND.navy.dark }}
//         >
//           Proven{" "}
//           <span style={{ color: BRAND.gold.primary }}>
//             Implementation Methodology
//           </span>
//         </h2>

//         <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
//           A structured approach ensuring successful aerospace transformation
//           programs.
//         </p>
//       </motion.header>

//       {/* Horizontal Stepper - Desktop */}
//       <div className="hidden lg:block">
//         <div className="grid grid-cols-4 gap-8">
//           {processSteps.map((step, index) => (
//             <StepComponent
//               key={step.step}
//               step={step}
//               index={index}
//               totalSteps={processSteps.length}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Vertical Stepper - Mobile */}
//       <div className="lg:hidden space-y-8">
//         {processSteps.map((step, index) => (
//           <motion.div
//             key={step.step}
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.1 }}
//             className="flex gap-6"
//           >
//             <div className="flex flex-col items-center">
//               <div
//                 className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
//                 style={{
//                   background: BRAND.gold.gradient,
//                   boxShadow: `0 4px 15px ${BRAND.gold.primary}30`,
//                 }}
//               >
//                 <step.icon className="text-lg text-white" />
//               </div>

//               {index < processSteps.length - 1 && (
//                 <div
//                   className="w-0.5 flex-1 mt-3"
//                   style={{
//                     background: `linear-gradient(to bottom, ${BRAND.gold.primary}, rgba(148,163,184,0.2))`,
//                   }}
//                 />
//               )}
//             </div>

//             <div className="pb-8">
//               <h4
//                 className="font-bold text-lg mb-1"
//                 style={{ color: BRAND.navy.dark }}
//               >
//                 {step.title}
//               </h4>
//               <p
//                 className="text-xs font-semibold uppercase tracking-wider mb-2"
//                 style={{ color: step.color }}
//               >
//                 {step.subtitle}
//               </p>
//               <p
//                 className="text-sm leading-relaxed"
//                 style={{ color: "#64748B" }}
//               >
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
//     className="py-20 lg:py-28 relative overflow-hidden"
//     style={{
//       background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, #0f0d29 50%, ${BRAND.navy.mid} 100%)`,
//     }}
//   >
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
//       className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.06]"
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

//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
//           Transform{" "}
//           <span
//             style={{
//               backgroundImage:
//                 "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             Aerospace Operations
//           </span>{" "}
//           with{" "}
//           <span
//             style={{
//               backgroundImage: BRAND.gold.gradient,
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             Intelligent Digital Solutions
//           </span>
//         </h2>

//         <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
//           Don't let complexity ground your operations. Our aerospace specialists
//           are ready to help you achieve mission-critical excellence.
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
//               Schedule Consultation
//               <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
//             </span>

//             <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
//               <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
//             </div>
//           </a>

//           <a
//             href="/industries"
//             className="px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/5 flex items-center gap-3"
//             style={{
//               border: "1px solid rgba(255,255,255,0.2)",
//               color: "white",
//             }}
//           >
//             Explore Industries →
//           </a>
//         </div>

//         {/* Trust Badges */}
//         <div
//           className="flex flex-wrap items-center justify-center gap-8 pt-8"
//           style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
//         >
//           {[
//             { value: "Free Assessment", icon: FaSearch },
//             { value: "Custom Solutions", icon: FaCogs },
//             { value: "24/7 Support", icon: FaBroadcastTower },
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

// // Main Page Component
// const AerospaceDefensePage = () => {
//   // Fix for missing icons
//   const FaCompressArrows = FaExpandArrowsAlt;
//   const FaGlobeAmericas = FaNetworkWired;

//   return (
//     <main role="main">
//       <HeroSection />
//       <ChallengesSection />
//       <SolutionsSection />
//       <BenefitsSection />
//       <ProcessSection />
//       <CTABannerSection />
//     </main>
//   );
// };

// export default AerospaceDefensePage;

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaPlane,
//   FaCogs,
//   FaShieldAlt,
//   FaChartLine,
//   FaProjectDiagram,
// } from "react-icons/fa";

// export default function AerospacePage() {
//   return (
//     <div className="w-full font-sans text-gray-800">
//       {/* HERO */}
//       <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-[#0a1f44] text-white">
//         <div className="max-w-xl">
//           <h1 className="text-4xl lg:text-6xl font-bold mb-6">
//             Aerospace & Defense
//           </h1>
//           <p className="text-lg text-gray-300 mb-8">
//             Engineering precision and mission-critical excellence with advanced
//             digital solutions.
//           </p>
//           <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold">
//             Talk to Experts
//           </button>
//         </div>
//         <img
//           src="https://images.unsplash.com/photo-1581092160607-ee22621dd758"
//           className="w-full lg:w-1/2 rounded-xl mt-10 lg:mt-0"
//           alt="aerospace"
//         />
//       </section>

//       {/* CHALLENGES */}
//       <section className="px-6 lg:px-20 py-20 bg-gray-50">
//         <h2 className="text-3xl font-bold text-center mb-12 text-[#0a1f44]">
//           Industry Challenges
//         </h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[
//             "Complex asset lifecycle management",
//             "Strict regulatory compliance",
//             "High operational costs",
//             "Legacy system integration",
//             "Need for real-time visibility",
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
//             >
//               <p className="font-medium">{item}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* SOLUTIONS */}
//       <section className="px-6 lg:px-20 py-20">
//         <h2 className="text-3xl font-bold text-center mb-12 text-[#0a1f44]">
//           Our Solutions
//         </h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[
//             { icon: <FaCogs />, title: "MRO Optimization" },
//             { icon: <FaProjectDiagram />, title: "Project Management" },
//             { icon: <FaShieldAlt />, title: "Compliance & Risk" },
//             { icon: <FaPlane />, title: "SAP Transformation" },
//             { icon: <FaChartLine />, title: "Data & Analytics" },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className="bg-white p-6 rounded-xl shadow text-center border-t-4 border-yellow-500"
//             >
//               <div className="text-3xl text-[#0a1f44] mb-4">{item.icon}</div>
//               <h3 className="font-semibold">{item.title}</h3>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* BENEFITS */}
//       <section className="px-6 lg:px-20 py-20 flex flex-col lg:flex-row items-center gap-12 bg-gray-50">
//         <img
//           src="https://images.unsplash.com/photo-1578496479914-7ef3b0193be3"
//           className="w-full lg:w-1/2 rounded-xl"
//           alt="aircraft maintenance"
//         />
//         <div>
//           <h2 className="text-3xl font-bold mb-6 text-[#0a1f44]">
//             Key Benefits
//           </h2>
//           <ul className="space-y-4 text-lg">
//             <li>✔ Improved asset performance</li>
//             <li>✔ Reduced downtime</li>
//             <li>✔ Strong compliance control</li>
//             <li>✔ Real-time insights</li>
//             <li>✔ Secure and scalable systems</li>
//           </ul>
//         </div>
//       </section>

//       {/* PROCESS */}
//       <section className="px-6 lg:px-20 py-20">
//         <h2 className="text-3xl font-bold text-center mb-12 text-[#0a1f44]">
//           Our Approach
//         </h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {["Assess", "Design", "Implement", "Optimize"].map((step, i) => (
//             <div
//               key={i}
//               className="bg-white p-6 rounded-xl shadow text-center border-b-4 border-yellow-500"
//             >
//               <p className="font-semibold text-lg">{step}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="px-6 lg:px-20 py-20 text-center bg-[#0a1f44] text-white">
//         <h2 className="text-4xl font-bold mb-6">
//           Transform Aerospace Operations with Confidence
//         </h2>
//         <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold">
//           Get Started
//         </button>
//       </section>

//       {/* FOOTER */}
//       <footer className="px-6 lg:px-20 py-10 bg-black text-gray-400 text-center">
//         <p>© 2026 Innovise IT. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

import React, { useMemo } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaPlane,
  FaCogs,
  FaShieldAlt,
  FaChartLine,
  FaProjectDiagram,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import img1 from "../../assets/industry/ae1.png";
import img2 from "../../assets/industry/ae2.png";

// ============================================
// REUSABLE COMPONENTS FOR BETTER MAINTAINABILITY
// ============================================

const SectionWrapper = ({ children, className = "", id }) => (
  <section id={id} className={`px-6 lg:px-20 py-20 ${className}`}>
    {children}
  </section>
);

const SectionTitle = ({ children, centered = true }) => (
  <h2
    className={`text-3xl lg:text-4xl font-bold mb-12 text-[#0a1f44] ${centered ? "text-center" : ""}`}
  >
    {children}
  </h2>
);

const Card = ({ children, className = "", hover = true, ...props }) => (
  <motion.div
    whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
    transition={{ type: "spring", stiffness: 300 }}
    className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}
    {...props}
  >
    {children}
  </motion.div>
);

const IconCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.05, y: -8 }}
    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl text-center border-t-4 border-yellow-500 group cursor-pointer"
  >
    <div className="w-16 h-16 bg-[#0a1f44] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
      <Icon className="text-3xl text-white group-hover:text-[#0a1f44]" />
    </div>
    <h3 className="font-bold text-lg mb-2 text-[#0a1f44]">{title}</h3>
    {description && <p className="text-gray-600 text-sm">{description}</p>}
  </motion.div>
);

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-yellow-500 hover:bg-yellow-600 text-black focus:ring-yellow-500",
    secondary:
      "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0a1f44] focus:ring-white",
    ghost:
      "bg-transparent text-[#0a1f44] hover:bg-gray-100 focus:ring-[#0a1f44]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// ============================================
// ANIMATION VARIANTS
// ============================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

// ============================================
// DATA CONFIGURATION (EASY TO MODIFY)
// ============================================

const CHALLENGES_DATA = [
  {
    title: "Complex Asset Lifecycle",
    description:
      "Managing aircraft and equipment throughout their entire lifecycle",
  },
  {
    title: "Regulatory Compliance",
    description: "Navigating strict aviation regulations and standards",
  },
  {
    title: "High Operational Costs",
    description: "Optimizing expenses while maintaining safety standards",
  },
  {
    title: "Legacy System Integration",
    description: "Modernizing outdated infrastructure seamlessly",
  },
  {
    title: "Real-time Visibility",
    description: "Gaining instant insights into operations",
  },
  {
    title: "Cybersecurity Threats",
    description: "Protecting critical systems from digital attacks",
  },
];

const SOLUTIONS_DATA = [
  {
    icon: FaCogs,
    title: "MRO Optimization",
    description: "Streamline maintenance, repair, and operations",
  },
  {
    icon: FaProjectDiagram,
    title: "Project Management",
    description: "End-to-end program oversight and delivery",
  },
  {
    icon: FaShieldAlt,
    title: "Compliance & Risk",
    description: "Ensure regulatory adherence and risk mitigation",
  },
  {
    icon: FaPlane,
    title: "SAP Transformation",
    description: "Enterprise resource planning modernization",
  },
  {
    icon: FaChartLine,
    title: "Data & Analytics",
    description: "Business intelligence and predictive analytics",
  },
  {
    icon: FaShieldAlt,
    title: "Cybersecurity",
    description: "Protect mission-critical systems and data",
  },
];

const BENEFITS_DATA = [
  "Improved asset performance by up to 40%",
  "Reduced downtime through predictive maintenance",
  "Strong compliance control and audit readiness",
  "Real-time operational insights and dashboards",
  "Secure, scalable cloud-native architecture",
  "ROI typically within 12-18 months",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Assess",
    description: "Evaluate current systems and identify opportunities",
  },
  {
    step: "02",
    title: "Design",
    description: "Create tailored solution architecture",
  },
  {
    step: "03",
    title: "Implement",
    description: "Deploy with minimal disruption",
  },
  {
    step: "04",
    title: "Optimize",
    description: "Continuous improvement and support",
  },
];

// ============================================
// SECTION COMPONENTS
// ============================================

const HeroSection = () => (
  <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-gradient-to-br from-[#0a1f44] via-[#0d2847] to-[#0a1f44] text-white relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
    </div>

    <div className="max-w-2xl z-10 relative">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold mb-6">
          Trusted by Leading Aerospace Companies
        </span>
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          Aerospace &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            Defense
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Engineering precision and mission-critical excellence with advanced
          digital solutions. Transform your aerospace operations with
          cutting-edge technology.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg">
            Talk to Experts <FaArrowRight />
          </Button>
          <Button variant="secondary" size="lg">
            View Case Studies
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
          {[
            { value: "500+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-yellow-400">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>

    <motion.div
      className="w-full lg:w-1/2 mt-10 lg:mt-0 z-10"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="relative">
        <img
          src={img1}
          className="w-full rounded-2xl shadow-2xl"
          alt="Aerospace engineering - Advanced aircraft technology and defense systems"
        />
        <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-black p-6 rounded-xl shadow-xl">
          <div className="text-2xl font-bold">15+</div>
          <div className="text-sm">Years Experience</div>
        </div>
      </div>
    </motion.div>
  </section>
);

const ChallengesSection = () => (
  <SectionWrapper
    className="bg-gradient-to-b from-gray-50 to-white"
    id="challenges"
  >
    <div className="text-center mb-16">
      <SectionTitle>Industry Challenges We Solve</SectionTitle>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        The aerospace industry faces unique obstacles. Our expertise helps you
        overcome them.
      </p>
    </div>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {CHALLENGES_DATA.map((challenge, i) => (
        <Card key={i} variants={itemVariants}>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-red-600 font-bold">{i + 1}</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-[#0a1f44]">
                {challenge.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {challenge.description}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </motion.div>
  </SectionWrapper>
);

const SolutionsSection = () => (
  <SectionWrapper id="solutions">
    <div className="text-center mb-16">
      <SectionTitle>Our Comprehensive Solutions</SectionTitle>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        End-to-end services designed specifically for aerospace and defense
        requirements.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {SOLUTIONS_DATA.map((solution, i) => (
        <IconCard
          key={i}
          icon={solution.icon}
          title={solution.title}
          description={solution.description}
          delay={i * 0.1}
        />
      ))}
    </div>
  </SectionWrapper>
);

const BenefitsSection = () => (
  <SectionWrapper className="bg-gray-50" id="benefits">
    <div className="flex flex-col lg:flex-row items-center gap-16">
      <motion.div className="w-full lg:w-1/2" {...fadeInUp}>
        <div className="relative">
          <img
            src={img2}
            className="w-full rounded-2xl shadow-2xl"
            alt="Aircraft maintenance operations showing technical team working on aerospace equipment"
          />
          <div className="absolute top-6 -right-6 bg-[#0a1f44] text-white p-4 rounded-xl shadow-lg hidden lg:block">
            <FaCheckCircle className="text-green-400 text-2xl mb-2" />
            <div className="text-sm font-semibold">Certified Processes</div>
          </div>
        </div>
      </motion.div>

      <div className="w-full lg:w-1/2">
        <motion.div {...fadeInUp}>
          <SectionTitle centered={false}>Key Benefits</SectionTitle>
          <p className="text-gray-600 mb-8 text-lg">
            Partnering with us delivers measurable results across your
            organization.
          </p>

          <div className="space-y-6">
            {BENEFITS_DATA.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-green-500 transition-colors">
                  <FaCheckCircle className="text-green-600 group-hover:text-white text-sm" />
                </div>
                <span className="text-gray-700 font-medium group-hover:text-[#0a1f44] transition-colors">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <Button variant="ghost">
              Learn More About Our Process <FaArrowRight />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </SectionWrapper>
);

const ProcessSection = () => (
  <SectionWrapper id="process">
    <div className="text-center mb-16">
      <SectionTitle>Our Proven Approach</SectionTitle>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        A structured methodology that ensures success at every stage.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
      {/* Connection Line */}
      <div className="hidden lg:block absolute top-24 left-1/4 right-1/4 h-1 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 rounded"></div>

      {PROCESS_STEPS.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="relative text-center"
        >
          <div className="w-20 h-20 bg-white border-4 border-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
            <span className="text-2xl font-bold text-[#0a1f44]">
              {step.step}
            </span>
          </div>
          <h3 className="font-bold text-xl mb-3 text-[#0a1f44]">
            {step.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {step.description}
          </p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

const CTASection = () => (
  <section className="px-6 lg:px-20 py-24 text-center bg-gradient-to-r from-[#0a1f44] to-[#0d2847] text-white relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
    </div>

    <div className="relative z-10 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Ready to Transform Your{" "}
          <span className="text-yellow-400">Aerospace Operations?</span>
        </h2>
        <p className="text-xl text-gray-300 mb-10">
          Join industry leaders who trust us to deliver mission-critical
          solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            Schedule Consultation <FaArrowRight />
          </Button>
          <Button variant="secondary" size="lg">
            Download Brochure
          </Button>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          No commitment required • Free initial assessment • Response within 24
          hours
        </p>
      </motion.div>
    </div>
  </section>
);

export default function AerospacePage() {
  // Memoize static content for performance
  const memoizedContent = useMemo(
    () => ({
      hero: <HeroSection />,
      challenges: <ChallengesSection />,
      solutions: <SolutionsSection />,
      benefits: <BenefitsSection />,
      process: <ProcessSection />,
      cta: <CTASection />,
      // footer: <Footer />,
    }),
    [],
  );

  return (
    <div className="w-full font-sans antialiased text-gray-800 overflow-x-hidden">
      {/* Accessibility: Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-yellow-500 text-black px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      <main id="main-content" role="main">
        {memoizedContent.hero}
        {memoizedContent.challenges}
        {memoizedContent.solutions}
        {memoizedContent.benefits}
        {memoizedContent.process}
        {memoizedContent.cta}
      </main>

      {/* {memoizedContent.footer} */}
    </div>
  );
}
