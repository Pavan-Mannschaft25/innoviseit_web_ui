// // import React, { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   FaCogs,
// //   FaCloud,
// //   FaChartLine,
// //   FaRocket,
// //   FaCheckCircle,
// //   FaArrowRight,
// //   FaSearch,
// //   FaPencilRuler,
// //   FaShippingFast,
// //   FaTachometerAlt,
// //   FaLayerGroup,
// //   FaProjectDiagram,
// //   FaHeadset,
// //   FaDatabase,
// //   FaShieldAlt,
// //   FaClock,
// //   FaMoneyBillWave,
// //   FaExpandArrowsAlt,
// //   FaLightbulb,
// //   FaQuoteLeft,
// //   FaStar,
// //   FaUsers,
// //   FaAward,
// //   FaHandshake,
// // } from "react-icons/fa";
// // import banner from "../../assets/services/sr11.png";

// // // ==================== BRAND COLORS (NAVY + GOLD) ====================
// // const BRAND = {
// //   navy: {
// //     dark: "#12324f",
// //     mid: "#12324f",
// //     light: "#143A63",
// //     lighter: "#1A4570",
// //   },
// //   gold: {
// //     primary: "#FDB913",
// //     light: "#FFD54F",
// //     gradient: "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
// //   },
// // };

// // // ==================== ANIMATION CONFIG ====================
// // const ANIMATION = {
// //   stagger: 0.12,
// //   duration: 0.6,
// //   spring: { type: "spring", stiffness: 300, damping: 25 },
// // };

// // // ==================== SERVICES DATA ====================
// // const sapServicesData = [
// //   {
// //     id: 1,
// //     icon: FaRocket,
// //     title: "SAP S/4HANA Implementation & Migration",
// //     description:
// //       "Seamless transition from legacy systems to SAP S/4HANA with minimal disruption and maximum efficiency.",
// //     features: [
// //       "Greenfield Implementation",
// //       "Brownfield Conversion",
// //       "System Conversion",
// //     ],
// //     color: "#FDB913",
// //   },
// //   {
// //     id: 2,
// //     icon: FaCogs,
// //     title: "Business Process Transformation",
// //     description:
// //       "Re-engineer core business processes to improve agility, performance, and scalability across operations.",
// //     features: ["Process Mapping", "Workflow Optimization", "Best Practices"],
// //     color: "#FDB913",
// //   },
// //   {
// //     id: 3,
// //     icon: FaLayerGroup,
// //     title: "System Integration",
// //     description:
// //       "Integrate SAP with third-party platforms, cloud services, and enterprise applications seamlessly.",
// //     features: ["API Integration", "Middleware Setup", "Data Synchronization"],
// //     color: "#FDB913",
// //   },
// //   {
// //     id: 4,
// //     icon: FaTachometerAlt,
// //     title: "SAP Optimization & Support",
// //     description:
// //       "Enhance system performance, ensure stability, and continuously improve operations for maximum ROI.",
// //     features: ["Performance Tuning", "24/7 Support", "Continuous Improvement"],
// //     color: "#FDB913",
// //   },
// // ];

// // // ==================== BENEFITS DATA ====================
// // const benefitsData = [
// //   {
// //     icon: FaClock,
// //     title: "Faster Decision-Making",
// //     description: "Real-time insights and analytics",
// //   },
// //   {
// //     icon: FaChartLine,
// //     title: "Improved Efficiency",
// //     description: "Streamlined processes and automation",
// //   },
// //   {
// //     icon: FaExpandArrowsAlt,
// //     title: "Scalable Architecture",
// //     description: "Future-ready infrastructure",
// //   },
// //   {
// //     icon: FaMoneyBillWave,
// //     title: "Reduced IT Costs",
// //     description: "Optimized resource utilization",
// //   },
// // ];

// // // ==================== APPROACH STEPS ====================
// // const approachSteps = [
// //   {
// //     step: 1,
// //     icon: FaSearch,
// //     title: "Discover",
// //     subtitle: "Assessment Phase",
// //     description:
// //       "Understand business goals, current systems, and transformation requirements through comprehensive analysis.",
// //     color: "#3B82F6",
// //   },
// //   {
// //     step: 2,
// //     icon: FaPencilRuler,
// //     title: "Design",
// //     subtitle: "Planning Phase",
// //     description:
// //       "Create tailored SAP transformation roadmap with detailed architecture and implementation strategy.",
// //     color: "#F59E0B",
// //   },
// //   {
// //     step: 3,
// //     icon: FaShippingFast,
// //     title: "Deploy",
// //     subtitle: "Execution Phase",
// //     description:
// //       "Execute implementation using proven methodologies, best practices, and rigorous quality assurance.",
// //     color: "#10B981",
// //   },
// //   {
// //     step: 4,
// //     icon: FaHeadset,
// //     title: "Optimize",
// //     subtitle: "Support Phase",
// //     description:
// //       "Continuous monitoring, performance optimization, and ongoing support to ensure long-term success.",
// //     color: "#8B5CF6",
// //   },
// // ];

// // // ==================== WHY CHOOSE US DATA ====================
// // const whyChooseUsData = [
// //   { icon: FaAward, text: "SAP Certified Consultants" },
// //   { icon: FaUsers, text: "200+ Successful Implementations" },
// //   { icon: FaShieldAlt, text: "Proven Methodologies" },
// //   { icon: FaHandshake, text: "End-to-End Partnership" },
// // ];

// // // ==================== COMPONENTS ====================

// // // Service Card Component
// // const ServiceCard = ({ service, index }) => {
// //   const [isHovered, setIsHovered] = useState(false);

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 40 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true, margin: "-50px" }}
// //       transition={{
// //         delay: index * ANIMATION.stagger,
// //         duration: ANIMATION.duration,
// //         ...ANIMATION.spring,
// //       }}
// //       onMouseEnter={() => setIsHovered(true)}
// //       onMouseLeave={() => setIsHovered(false)}
// //       className="group h-full"
// //       style={{
// //         transform: isHovered ? "translateY(-8px)" : "translateY(0)",
// //       }}
// //     >
// //       <div
// //         className="relative h-full rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-700"
// //         style={{
// //           background: isHovered
// //             ? `linear-gradient(135deg,
// //                 #081C34 0%,
// //                 #0D2747 50%,
// //                 #163B66 100%)`
// //             : `linear-gradient(135deg,
// //                 #0A1A2F 0%,
// //                 #102B4C 50%,
// //                 #163B66 100%)`,

// //           border: isHovered
// //             ? "1px solid rgba(253,185,19,0.25)"
// //             : "1px solid rgba(255,255,255,0.06)",

// //           boxShadow: isHovered
// //             ? "0 30px 80px rgba(8,28,52,0.45)"
// //             : "0 10px 35px rgba(8,28,52,0.20)",
// //         }}
// //       >
// //         {/* Top Accent */}
// //         <motion.div
// //           className="absolute top-0 left-0 right-0 h-1 origin-left"
// //           style={{
// //             background: "linear-gradient(90deg, #FDB913, transparent)",
// //           }}
// //           initial={{ scaleX: 0 }}
// //           animate={{ scaleX: isHovered ? 1 : 0 }}
// //           transition={{ duration: 0.4 }}
// //         />

// //         {/* Status Badge */}
// //         <div className="absolute top-5 right-5 z-20">
// //           <span
// //             className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
// //             style={{
// //               background: "rgba(253,185,19,0.12)",
// //               color: "#FDB913",
// //               border: "1px solid rgba(253,185,19,0.25)",
// //             }}
// //           >
// //             <motion.span
// //               animate={{
// //                 scale: [1, 1.3, 1],
// //                 opacity: [1, 0.5, 1],
// //               }}
// //               transition={{
// //                 duration: 2,
// //                 repeat: Infinity,
// //               }}
// //               className="w-1.5 h-1.5 rounded-full inline-block bg-[#FDB913]"
// //             />

// //             {service.status}
// //           </span>
// //         </div>

// //         {/* Glow Effect */}
// //         <div className="absolute top-0 right-0 w-40 h-40 bg-[#FDB913]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

// //         <div className="relative z-10 p-8 lg:p-10">
// //           {/* Icon */}
// //           <motion.div
// //             className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
// //             style={{
// //               background: "rgba(253,185,19,0.12)",
// //               border: "1px solid rgba(253,185,19,0.25)",
// //             }}
// //             whileHover={{ rotate: [0, -5, 5, 0] }}
// //           >
// //             <service.icon className="text-2xl" style={{ color: "#FDB913" }} />
// //           </motion.div>

// //           {/* Title */}
// //           <h3 className="text-xl font-bold mb-3 pr-16 text-white">
// //             {service.title}
// //           </h3>

// //           {/* Description */}
// //           <p className="text-sm leading-relaxed mb-6 text-white/70">
// //             {service.description}
// //           </p>

// //           {/* Features */}
// //           <ul className="space-y-3 mb-6">
// //             {service.features.map((feature, idx) => (
// //               <li
// //                 key={idx}
// //                 className="flex items-center gap-2 text-sm text-white/80"
// //               >
// //                 <FaCheckCircle className="flex-shrink-0 text-xs text-[#FDB913]" />

// //                 {feature}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // // Benefit Card Component
// // const BenefitCard = ({ benefit, index }) => (
// //   <motion.div
// //     initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
// //     whileInView={{ opacity: 1, x: 0 }}
// //     viewport={{ once: true }}
// //     transition={{
// //       delay: index * 0.1,
// //       duration: ANIMATION.duration,
// //       ...ANIMATION.spring,
// //     }}
// //     whileHover={{ y: -6, scale: 1.02 }}
// //     className="group"
// //   >
// //     <div
// //       className="relative p-6 rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-500"
// //       style={{
// //         background:
// //           "linear-gradient(135deg, #081C34 0%, #102B4C 50%, #163B66 100%)",

// //         border: "1px solid rgba(255,255,255,0.08)",

// //         boxShadow: "0 10px 35px rgba(8,28,52,0.20)",
// //       }}
// //     >
// //       {/* Gold Glow */}
// //       <div className="absolute top-0 right-0 w-28 h-28 bg-[#FDB913]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

// //       <div className="relative z-10 flex items-start gap-4">
// //         {/* Icon */}
// //         <motion.div
// //           className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
// //           style={{
// //             background: "rgba(253,185,19,0.12)",
// //             border: "1px solid rgba(253,185,19,0.25)",
// //           }}
// //           whileHover={{ rotate: [0, -10, 10, 0] }}
// //         >
// //           <benefit.icon className="text-xl" style={{ color: "#FDB913" }} />
// //         </motion.div>

// //         {/* Content */}
// //         <div>
// //           <h4 className="font-bold text-base mb-2 text-white">
// //             {benefit.title}
// //           </h4>

// //           <p className="text-sm leading-relaxed text-white/70">
// //             {benefit.description}
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   </motion.div>
// // );

// // // Step Component (Horizontal Stepper)
// // const StepComponent = ({ step, index, totalSteps }) => {
// //   const [isHovered, setIsHovered] = useState(false);
// //   const isLast = index === totalSteps - 1;

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 30 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true }}
// //       transition={{
// //         delay: index * 0.15,
// //         duration: ANIMATION.duration,
// //         ...ANIMATION.spring,
// //       }}
// //       onMouseEnter={() => setIsHovered(true)}
// //       onMouseLeave={() => setIsHovered(false)}
// //       className="relative flex flex-col items-center text-center"
// //     >
// //       {/* Connector Line (Desktop) */}
// //       {!isLast && (
// //         <div
// //           className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 z-0"
// //           style={{
// //             background: `linear-gradient(to right, ${step.color}, rgba(148,163,184,0.2))`,
// //           }}
// //         />
// //       )}

// //       {/* Step Circle */}
// //       <motion.div
// //         className="w-20 h-20 rounded-full flex items-center justify-center relative z-10 mb-6 cursor-pointer"
// //         style={{
// //           background: isHovered ? step.color : `${step.color}15`,
// //           border: `3px solid ${isHovered ? step.color : `${step.color}40`}`,
// //           boxShadow: isHovered ? `0 10px 30px ${step.color}30` : "none",
// //         }}
// //         whileHover={{ scale: 1.1 }}
// //         animate={isHovered ? { rotate: [0, -5, 5, 0] } : {}}
// //         transition={{ duration: 0.5 }}
// //       >
// //         <span
// //           className="text-2xl font-black"
// //           style={{ color: isHovered ? "white" : step.color }}
// //         >
// //           {step.step}
// //         </span>

// //         {/* Pulse Effect on Hover */}
// //         {isHovered && (
// //           <motion.div
// //             initial={{ scale: 1, opacity: 0.5 }}
// //             animate={{ scale: 1.4, opacity: 0 }}
// //             transition={{ duration: 1, repeat: Infinity }}
// //             className="absolute inset-0 rounded-full"
// //             style={{ border: `2px solid ${step.color}` }}
// //           />
// //         )}
// //       </motion.div>

// //       {/* Icon Badge */}
// //       <motion.div
// //         className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 -mt-2 relative z-10"
// //         style={{
// //           background: isHovered ? BRAND.navy.dark : "white",
// //           border: `2px solid ${isHovered ? "transparent" : "rgba(0,0,0,0.08)"}`,
// //           boxShadow: isHovered
// //             ? `0 8px 25px ${BRAND.navy.dark}30`
// //             : "0 2px 10px rgba(0,0,0,0.05)",
// //         }}
// //       >
// //         <step.icon
// //           className="text-lg"
// //           style={{ color: isHovered ? BRAND.gold.primary : step.color }}
// //         />
// //       </motion.div>

// //       {/* Content */}
// //       <h4
// //         className="text-lg font-bold mb-1 transition-colors duration-300"
// //         style={{ color: isHovered ? BRAND.navy.dark : BRAND.navy.dark }}
// //       >
// //         {step.title}
// //       </h4>

// //       <p
// //         className="text-xs font-semibold uppercase tracking-wider mb-3"
// //         style={{ color: step.color }}
// //       >
// //         {step.subtitle}
// //       </p>

// //       <p
// //         className="text-sm leading-relaxed max-w-xs mx-auto transition-colors duration-300"
// //         style={{ color: isHovered ? BRAND.navy.dark : "#64748B" }}
// //       >
// //         {step.description}
// //       </p>
// //     </motion.div>
// //   );
// // };

// // // ==================== SECTIONS ====================

// // // Hero Section (Left Text + Right Visual)
// // const HeroSection = () => (
// //   <section
// //     className="relative py-6 lg:py-10 overflow-hidden"
// //     style={{
// //       background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 60%, ${BRAND.navy.lighter} 100%)`,
// //     }}
// //   >
// //     {/* Background Elements */}
// //     <div className="absolute inset-0" aria-hidden="true">
// //       {/* Dot Pattern */}
// //       <div
// //         className="absolute inset-0 opacity-[0.03]"
// //         style={{
// //           backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
// //           backgroundSize: "32px 32px",
// //         }}
// //       />

// //       {/* Floating Orbs */}
// //       <motion.div
// //         animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
// //         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
// //         className="absolute top-16 right-20 w-[450px] h-[450px] rounded-full blur-3xl opacity-[0.07]"
// //         style={{ background: "#00A4FD" }} // SAP Blue accent
// //       />

// //       <motion.div
// //         animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
// //         transition={{
// //           duration: 10,
// //           repeat: Infinity,
// //           ease: "easeInOut",
// //           delay: 3,
// //         }}
// //         className="absolute bottom-16 left-16 w-[350px] h-[350px] rounded-full blur-3xl opacity-[0.05]"
// //         style={{ background: BRAND.gold.primary }}
// //       />

// //       {/* Grid Pattern */}
// //       <div
// //         className="absolute inset-0 opacity-[0.02]"
// //         style={{
// //           backgroundImage: `
// //             linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
// //             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
// //           `,
// //           backgroundSize: "80px 80px",
// //         }}
// //       />
// //     </div>

// //     <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
// //       <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
// //         {/* LEFT - Content */}
// //         <motion.div
// //           initial={{ opacity: 0, x: -40 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           {/* Badge */}
// //           <div className="inline-flex items-center gap-3 mb-6">
// //             <div
// //               className="w-10 h-10 rounded-lg flex items-center justify-center"
// //               style={{
// //                 background: `${BRAND.gold.primary}15`,
// //                 border: `1px solid ${BRAND.gold.primary}30`,
// //               }}
// //             >
// //               <FaCogs
// //                 className="text-lg"
// //                 style={{ color: BRAND.gold.primary }}
// //               />
// //             </div>
// //             <span
// //               className="text-sm font-bold uppercase tracking-[0.2em]"
// //               style={{ color: BRAND.gold.primary }}
// //             >
// //               SAP Consulting & Implementation
// //             </span>
// //           </div>

// //           {/* Title */}
// //           <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
// //             Transforming Enterprises with{" "}
// //             <span style={{ color: BRAND.gold.primary }}>
// //               Intelligent SAP Solutions
// //             </span>
// //           </h1>

// //           {/* Description */}
// //           <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
// //             At Innovise IT, we help organizations unlock the full potential of
// //             SAP by delivering end-to-end consulting, implementation, and
// //             optimization services powered by SAP S/4HANA.
// //           </p>

// //           <p className="text-base text-gray-400 leading-relaxed mb-10 max-w-xl">
// //             We combine deep domain expertise with proven methodologies to
// //             modernize legacy systems, streamline operations, and drive real-time
// //             business insights.
// //           </p>

// //           {/* CTA Buttons */}
// //           {/* <div className="flex flex-col sm:flex-row gap-4">
// //             <a
// //               href="/contact"
// //               className="group relative px-8 py-4 rounded-xl font-bold text-base overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
// //               style={{
// //                 background: BRAND.gold.gradient,
// //                 color: BRAND.navy.dark,
// //                 boxShadow: `0 8px 30px ${BRAND.gold.primary}35`,
// //               }}
// //             >
// //               <span className="relative z-10 flex items-center gap-3">
// //                 Talk to Our Experts
// //                 <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
// //               </span>

// //               <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
// //                 <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
// //               </div>
// //             </a>

// //             <a
// //               href="#services"
// //               className="px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:bg-white/5 flex items-center gap-3"
// //               style={{
// //                 border: "1px solid rgba(255,255,255,0.2)",
// //                 color: "white",
// //               }}
// //             >
// //               Explore Services ↓
// //             </a>
// //           </div> */}

// //           {/* Trust Indicators */}
// //           <div
// //             className="flex flex-wrap items-center gap-6 mt-10 pt-8"
// //             style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
// //           >
// //             {[
// //               { icon: FaAward, text: "SAP Partner" },
// //               { icon: FaUsers, text: "200+ Projects" },
// //               { icon: FaStar, text: "98% Success Rate" },
// //             ].map((item, idx) => (
// //               <div key={idx} className="flex items-center gap-2">
// //                 <item.icon
// //                   className="text-sm"
// //                   style={{ color: BRAND.gold.primary }}
// //                 />
// //                 <span className="text-xs text-white/60 font-medium">
// //                   {item.text}
// //                 </span>
// //               </div>
// //             ))}
// //           </div>
// //         </motion.div>

// //         {/* RIGHT - Visual / Image Placeholder */}
// //         <motion.div
// //           initial={{ opacity: 0, x: 40 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.8, delay: 0.2 }}
// //           className="relative"
// //         >
// //           {/* Main Visual Container */}
// //           <div
// //             className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
// //             style={{
// //               background: `linear-gradient(145deg, ${BRAND.navy.light}, ${BRAND.navy.mid})`,
// //               border: `1px solid rgba(253,185,19,0.15)`,
// //             }}
// //           >
// //             {/* Replace this div with actual image: */}
// //             {/* <img src="/images/sap-dashboard.jpg" alt="SAP Dashboard" className="w-full h-full object-cover" /> */}

// //             {/* Placeholder Content */}
// //             <div className="absolute inset-0 p-8 flex flex-col">
// //               {/* Header Bar */}
// //               <div className="flex items-center gap-2 mb-6">
// //                 <div className="w-3 h-3 rounded-full bg-red-400" />
// //                 <div className="w-3 h-3 rounded-full bg-yellow-400" />
// //                 <div className="w-3 h-3 rounded-full bg-green-400" />
// //                 <span className="ml-4 text-xs text-white/40 font-mono">
// //                   SAP S/4HANA Dashboard
// //                 </span>
// //               </div>

// //               {/* Mock Dashboard Content */}
// //               <div className="flex-1 grid grid-cols-3 gap-4">
// //                 {/* Left Panel */}
// //                 <div className="col-span-1 space-y-3">
// //                   <div
// //                     className="p-4 rounded-xl"
// //                     style={{
// //                       background: "rgba(255,255,255,0.05)",
// //                       border: "1px solid rgba(255,255,255,0.08)",
// //                     }}
// //                   >
// //                     <div className="text-xs text-white/40 mb-2">REVENUE</div>
// //                     <div
// //                       className="text-2xl font-black"
// //                       style={{ color: BRAND.gold.primary }}
// //                     >
// //                       $2.4M
// //                     </div>
// //                     <div className="text-xs text-green-400 mt-1">↑ 12.5%</div>
// //                   </div>
// //                   <div
// //                     className="p-4 rounded-xl"
// //                     style={{
// //                       background: "rgba(255,255,255,0.05)",
// //                       border: "1px solid rgba(255,255,255,0.08)",
// //                     }}
// //                   >
// //                     <div className="text-xs text-white/40 mb-2">ORDERS</div>
// //                     <div className="text-2xl font-black text-white">1,847</div>
// //                     <div className="text-xs text-green-400 mt-1">↑ 8.3%</div>
// //                   </div>
// //                   <div
// //                     className="p-4 rounded-xl"
// //                     style={{
// //                       background: "rgba(255,255,255,0.05)",
// //                       border: "1px solid rgba(255,255,255,0.08)",
// //                     }}
// //                   >
// //                     <div className="text-xs text-white/40 mb-2">EFFICIENCY</div>
// //                     <div className="text-2xl font-black text-white">94.2%</div>
// //                     <div className="text-xs text-green-400 mt-1">↑ 5.1%</div>
// //                   </div>
// //                 </div>

// //                 {/* Center Chart Area */}
// //                 <div
// //                   className="col-span-2 rounded-xl p-4"
// //                   style={{
// //                     background: "rgba(255,255,255,0.03)",
// //                     border: "1px solid rgba(255,255,255,0.08)",
// //                   }}
// //                 >
// //                   <div className="text-xs text-white/40 mb-4">
// //                     PERFORMANCE ANALYTICS
// //                   </div>

// //                   {/* Mock Chart Bars */}
// //                   <div className="flex items-end gap-2 h-32">
// //                     {[40, 65, 45, 80, 55, 90, 70].map((height, idx) => (
// //                       <motion.div
// //                         key={idx}
// //                         initial={{ height: 0 }}
// //                         animate={{ height: `${height}%` }}
// //                         transition={{ delay: idx * 0.1, duration: 0.5 }}
// //                         className="flex-1 rounded-t-md"
// //                         style={{
// //                           background:
// //                             idx === 5
// //                               ? BRAND.gold.gradient
// //                               : `rgba(0,164,253,${0.3 + idx * 0.1})`,
// //                         }}
// //                       />
// //                     ))}
// //                   </div>

// //                   <div className="flex justify-between mt-2 text-[10px] text-white/30">
// //                     <span>Mon</span>
// //                     <span>Tue</span>
// //                     <span>Wed</span>
// //                     <span>Thu</span>
// //                     <span>Fri</span>
// //                     <span>Sat</span>
// //                     <span>Sun</span>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Bottom Status Bar */}
// //               <div className="mt-4 flex items-center justify-between px-2">
// //                 <div className="flex items-center gap-2">
// //                   <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
// //                   <span className="text-xs text-white/40">
// //                     System Online • Real-time Sync
// //                   </span>
// //                 </div>
// //                 <div className="text-xs text-white/30">
// //                   Last updated: Just now
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Floating Badge */}
// //             <motion.div
// //               animate={{ y: [0, -8, 0] }}
// //               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
// //               className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-5 shadow-xl"
// //               style={{ border: `2px solid ${BRAND.gold.primary}` }}
// //             >
// //               <div className="flex items-center gap-3">
// //                 <div
// //                   className="w-12 h-12 rounded-xl flex items-center justify-center"
// //                   style={{ background: `${BRAND.gold.primary}15` }}
// //                 >
// //                   <FaChartLine
// //                     className="text-xl"
// //                     style={{ color: BRAND.gold.primary }}
// //                   />
// //                 </div>
// //                 <div>
// //                   <div
// //                     className="text-xl font-black"
// //                     style={{ color: BRAND.navy.dark }}
// //                   >
// //                     40%
// //                   </div>
// //                   <div className="text-xs text-gray-500">Cost Reduction</div>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </div>

// //           {/* Decorative Elements */}
// //           <div
// //             className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl -z-10 opacity-60"
// //             style={{
// //               background: "linear-gradient(135deg, #00A4FD, transparent)",
// //             }}
// //           />
// //           <div
// //             className="absolute -bottom-4 -left-8 w-32 h-32 rounded-full -z-10 opacity-40"
// //             style={{ background: BRAND.gold.primary }}
// //           />
// //         </motion.div>
// //       </div>
// //     </div>
// //   </section>
// // );

// // // Services Grid Section
// // const ServicesSection = () => (
// //   <section
// //     id="services"
// //     className="py-6 lg:py-10 bg-white relative overflow-hidden"
// //   >
// //     {/* Background Decoration */}
// //     <div
// //       className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.03] translate-x-1/3 -translate-y-1/3"
// //       style={{ background: BRAND.navy.lighter }}
// //     />

// //     <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
// //       {/* Section Header */}
// //       <motion.header
// //         initial={{ opacity: 0, y: 20 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         className="text-center max-w-3xl mx-auto mb-16"
// //       >
// //         <span
// //           className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
// //           style={{
// //             background: `${BRAND.navy.mid}08`,
// //             color: BRAND.navy.dark,
// //             border: `1px solid ${BRAND.navy.mid}15`,
// //           }}
// //         >
// //           💡 What We Deliver
// //         </span>

// //         <h2
// //           className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
// //           style={{ color: BRAND.navy.dark }}
// //         >
// //           Comprehensive SAP Services
// //         </h2>

// //         <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
// //           End-to-end solutions designed to maximize your SAP investment and
// //           accelerate digital transformation.
// //         </p>
// //       </motion.header>

// //       {/* Services Grid - 2x2 or responsive */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
// //         {sapServicesData.map((service, index) => (
// //           <ServiceCard key={service.id} service={service} index={index} />
// //         ))}
// //       </div>
// //     </div>
// //   </section>
// // );

// // // Benefits Section (Image Left + Benefits Right)
// // const BenefitsSection = () => (
// //   <section className="py-6 lg:py-10 bg-gray-50 relative overflow-hidden">
// //     <div className="max-w-7xl mx-auto px-4 lg:px-8">
// //       <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
// //         {/* LEFT - Image / Visual */}
// //         <motion.div
// //           initial={{ opacity: 0, x: -40 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8 }}
// //           className="relative order-2 lg:order-1"
// //         >
// //           <div
// //             className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
// //             style={{
// //               background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.light})`,
// //               border: `1px solid rgba(253,185,19,0.1)`,
// //             }}
// //           >
// //             {/* Replace with actual image: */}
// //             {/* <img src="/images/sap-team.jpg" alt="SAP Team Collaboration" className="w-full h-full object-cover" /> */}

// //             {/* Placeholder Visual */}
// //             <div className="absolute inset-0 flex items-center justify-center p-8">
// //               <div className="w-full max-w-sm">
// //                 {/* Mock Enterprise Graphic */}
// //                 <div className="space-y-4">
// //                   {/* Central Hub */}
// //                   <motion.div
// //                     animate={{ scale: [1, 1.05, 1] }}
// //                     transition={{ duration: 3, repeat: Infinity }}
// //                     className="mx-auto w-32 h-32 rounded-2xl flex items-center justify-center"
// //                     style={{
// //                       background: BRAND.gold.gradient,
// //                       boxShadow: `0 20px 50px ${BRAND.gold.primary}30`,
// //                     }}
// //                   >
// //                     <FaCogs className="text-5xl text-white" />
// //                   </motion.div>

// //                   {/* Orbiting Elements */}
// //                   {[
// //                     { icon: FaDatabase, label: "Data", angle: 0 },
// //                     { icon: FaCloud, label: "Cloud", angle: 90 },
// //                     { icon: FaCogs, label: "Process", angle: 180 },
// //                     { icon: FaChartLine, label: "Analytics", angle: 270 },
// //                   ].map((item, idx) => (
// //                     <motion.div
// //                       key={idx}
// //                       className="absolute flex items-center gap-3 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg"
// //                       style={{
// //                         top: "50%",
// //                         left: "50%",
// //                         transform: `rotate(${item.angle}deg) translateX(140px) rotate(-${item.angle}deg) translateY(-50%) translateX(-50%)`,
// //                       }}
// //                       initial={{ opacity: 0, scale: 0 }}
// //                       whileInView={{ opacity: 1, scale: 1 }}
// //                       viewport={{ once: true }}
// //                       transition={{ delay: 0.5 + idx * 0.15 }}
// //                     >
// //                       <item.icon
// //                         className="text-lg"
// //                         style={{ color: "#00A4FD" }}
// //                       />
// //                       <span
// //                         className="text-sm font-semibold"
// //                         style={{ color: BRAND.navy.dark }}
// //                       >
// //                         {item.label}
// //                       </span>
// //                     </motion.div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Stats Overlay */}
// //             <div className="absolute bottom-6 left-6 right-6 flex gap-4">
// //               <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-xl p-4 text-center">
// //                 <div
// //                   className="text-2xl font-black"
// //                   style={{ color: "#00A4FD" }}
// //                 >
// //                   35%
// //                 </div>
// //                 <div className="text-xs text-gray-500">Faster Processing</div>
// //               </div>
// //               <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-xl p-4 text-center">
// //                 <div
// //                   className="text-2xl font-black"
// //                   style={{ color: BRAND.gold.primary }}
// //                 >
// //                   99.9%
// //                 </div>
// //                 <div className="text-xs text-gray-500">Uptime SLA</div>
// //               </div>
// //             </div>
// //           </div>
// //         </motion.div>

// //         {/* RIGHT - Benefits Content */}
// //         <motion.div
// //           initial={{ opacity: 0, x: 40 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8, delay: 0.2 }}
// //           className="order-1 lg:order-2"
// //         >
// //           <span
// //             className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
// //             style={{
// //               background: `${BRAND.navy.mid}08`,
// //               color: BRAND.navy.dark,
// //               border: `1px solid ${BRAND.navy.mid}15`,
// //             }}
// //           >
// //             🎯 Key Benefits
// //           </span>

// //           <h2
// //             className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
// //             style={{ color: BRAND.navy.dark }}
// //           >
// //             Why Choose{" "}
// //             <span style={{ color: BRAND.gold.primary }}>Innovise IT</span> for
// //             Your SAP Journey?
// //           </h2>

// //           <p
// //             className="text-lg leading-relaxed mb-10"
// //             style={{ color: "#64748B" }}
// //           >
// //             Our SAP solutions deliver measurable business outcomes that
// //             transform how you operate, decide, and grow.
// //           </p>

// //           {/* Benefits Grid */}
// //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
// //             {benefitsData.map((benefit, index) => (
// //               <BenefitCard key={index} benefit={benefit} index={index} />
// //             ))}
// //           </div>

// //           {/* Why Choose Us Badges */}
// //           <div
// //             className="p-6 rounded-2xl"
// //             style={{
// //               background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
// //             }}
// //           >
// //             <h4 className="text-white font-bold mb-4 flex items-center gap-2">
// //               <FaStar
// //                 className="text-sm"
// //                 style={{ color: BRAND.gold.primary }}
// //               />
// //               The Innovise Advantage
// //             </h4>

// //             <div className="grid grid-cols-2 gap-3">
// //               {whyChooseUsData.map((item, idx) => (
// //                 <div key={idx} className="flex items-center gap-2">
// //                   <item.icon
// //                     className="text-sm flex-shrink-0"
// //                     style={{ color: BRAND.gold.primary }}
// //                   />
// //                   <span className="text-sm text-white/80">{item.text}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </div>
// //   </section>
// // );

// // // Process/Approach Section (Stepper UI)
// // const ApproachSection = () => (
// //   <section className="py-6 lg:py-10 bg-[#081C34] relative overflow-hidden">
// //     {/* Background Glow */}
// //     <div className="absolute top-0 left-0 w-96 h-96 bg-[#FDB913]/10 blur-3xl rounded-full"></div>
// //     <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-[#0F2B4D] blur-3xl rounded-full"></div>

// //     <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
// //       {/* Section Header */}
// //       <motion.header
// //         initial={{ opacity: 0, y: 20 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         className="text-center max-w-3xl mx-auto mb-16"
// //       >
// //         <span
// //           className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border"
// //           style={{
// //             background: "rgba(253,185,19,0.12)",
// //             color: "#FDB913",
// //             borderColor: "rgba(253,185,19,0.25)",
// //           }}
// //         >
// //           🧠 Our Approach
// //         </span>

// //         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
// //           Proven{" "}
// //           <span style={{ color: "#FDB913" }}>Implementation Methodology</span>
// //         </h2>

// //         <p className="text-lg leading-relaxed text-white/70">
// //           A structured approach ensuring successful SAP transformations every
// //           time.
// //         </p>
// //       </motion.header>

// //       {/* Desktop */}
// //       <div className="hidden lg:block">
// //         <div className="grid grid-cols-4 gap-8">
// //           {approachSteps.map((step, index) => (
// //             <motion.div
// //               key={step.step}
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: index * 0.1 }}
// //               className="relative group"
// //             >
// //               <div className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#FDB913]/30 hover:bg-white/[0.07]">
// //                 {/* Step Number */}
// //                 <div className="flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-[#FDB913] shadow-lg shadow-[#FDB913]/20">
// //                   <span className="text-2xl font-black text-[#081C34]">
// //                     {step.step}
// //                   </span>
// //                 </div>

// //                 {/* Icon */}
// //                 <div className="mb-5">
// //                   <step.icon className="text-3xl text-[#FDB913]" />
// //                 </div>

// //                 {/* Title */}
// //                 <h4 className="text-xl font-bold text-white mb-2">
// //                   {step.title}
// //                 </h4>

// //                 {/* Subtitle */}
// //                 <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FDB913] mb-3">
// //                   {step.subtitle}
// //                 </p>

// //                 {/* Description */}
// //                 <p className="text-sm leading-relaxed text-white/70">
// //                   {step.description}
// //                 </p>

// //                 {/* Top Glow */}
// //                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#FDB913]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Mobile */}
// //       <div className="lg:hidden space-y-8">
// //         {approachSteps.map((step, index) => (
// //           <motion.div
// //             key={step.step}
// //             initial={{ opacity: 0, x: -30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: index * 0.1 }}
// //             className="flex gap-5"
// //           >
// //             {/* Left Step */}
// //             <div className="flex flex-col items-center">
// //               <div className="w-14 h-14 rounded-full bg-[#FDB913] flex items-center justify-center shadow-lg shadow-[#FDB913]/20">
// //                 <span className="text-lg font-black text-[#081C34]">
// //                   {step.step}
// //                 </span>
// //               </div>

// //               {index < approachSteps.length - 1 && (
// //                 <div className="w-0.5 flex-1 mt-3 bg-gradient-to-b from-[#FDB913] to-white/10"></div>
// //               )}
// //             </div>

// //             {/* Content */}
// //             <div className="pb-8">
// //               <div className="flex items-center gap-3 mb-2">
// //                 <step.icon className="text-lg text-[#FDB913]" />

// //                 <h4 className="font-bold text-lg text-white">{step.title}</h4>
// //               </div>

// //               <p className="text-xs font-semibold uppercase tracking-wider mb-2 text-[#FDB913]">
// //                 {step.subtitle}
// //               </p>

// //               <p className="text-sm leading-relaxed text-white/70">
// //                 {step.description}
// //               </p>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </div>
// //   </section>
// // );

// // // CTA Banner Section
// // const CTABannerSection = () => (
// //   <section
// //     className="py-6 lg:py-10 relative overflow-hidden"
// //     style={{
// //       background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, #0A1628 50%, ${BRAND.navy.mid} 100%)`,
// //     }}
// //   >
// //     {/* Background Pattern */}
// //     <div
// //       className="absolute inset-0 opacity-[0.04]"
// //       style={{
// //         backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
// //         backgroundSize: "32px 32px",
// //       }}
// //     />

// //     {/* Decorative Orbs */}
// //     <motion.div
// //       animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
// //       transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
// //       className="absolute top-10 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.08]"
// //       style={{ background: "#00A4FD" }}
// //     />

// //     <motion.div
// //       animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
// //       transition={{
// //         duration: 8,
// //         repeat: Infinity,
// //         ease: "easeInOut",
// //         delay: 2,
// //       }}
// //       className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.06]"
// //       style={{ background: BRAND.gold.primary }}
// //     />

// //     <div className="max-w-5xl mx-auto px-4 lg:px-8 relative z-10 text-center">
// //       <motion.div
// //         initial={{ opacity: 0, y: 30 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.8 }}
// //       >
// //         {/* Icon */}
// //         <motion.div
// //           initial={{ scale: 0 }}
// //           whileInView={{ scale: 1 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
// //           className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8"
// //           style={{
// //             background: `${BRAND.gold.primary}15`,
// //             border: `2px solid ${BRAND.gold.primary}30`,
// //           }}
// //         >
// //           <FaRocket
// //             className="text-3xl"
// //             style={{ color: BRAND.gold.primary }}
// //           />
// //         </motion.div>

// //         {/* Main Heading */}
// //         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
// //           Ready to Transform Your <span>Enterprise with SAP</span>?
// //         </h2>

// //         <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
// //           Let our certified SAP experts guide you through a seamless
// //           transformation journey. From strategy to support, we're with you every
// //           step of the way.
// //         </p>

// //         {/* CTA Buttons */}
// //         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
// //           <a
// //             href="/contact"
// //             className="group relative px-10 py-5 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
// //             style={{
// //               background: BRAND.gold.gradient,
// //               color: BRAND.navy.dark,
// //               boxShadow: `0 10px 40px ${BRAND.gold.primary}40`,
// //             }}
// //           >
// //             <span className="relative z-10 flex items-center gap-3">
// //               Get Started Today
// //               <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
// //             </span>

// //             <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
// //               <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
// //             </div>
// //           </a>
// //         </div>

// //         {/* Quick Contact Info */}
// //         <div
// //           className="flex flex-wrap items-center justify-center gap-8 pt-8"
// //           style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
// //         >
// //           {[
// //             { value: "Free Assessment", icon: FaLightbulb },
// //             { value: "Expert Consultation", icon: FaUsers },
// //             { value: "Custom Roadmap", icon: FaProjectDiagram },
// //           ].map((item, idx) => (
// //             <div key={idx} className="flex items-center gap-2 text-white/60">
// //               <item.icon
// //                 className="text-sm"
// //                 style={{ color: BRAND.gold.primary }}
// //               />
// //               <span className="text-sm font-medium">{item.value}</span>
// //             </div>
// //           ))}
// //         </div>
// //       </motion.div>
// //     </div>
// //   </section>
// // );

// // // Main SAP Page Component
// // const SAPConsultingPage = () => {
// //   return (
// //     <main role="main">
// //       {/* <div
// //         className="relative w-full min-h-[70vh] flex items-center justify-center bg-cover bg-center"
// //         style={{
// //           backgroundImage: `url(${banner})`,
// //         }}
// //       >

// //         <div className="absolute inset-0 bg-black/20" />
// //       </div> */}
// //       <HeroSection />
// //       <ServicesSection />
// //       <ApproachSection />
// //       <BenefitsSection />
// //       <CTABannerSection />
// //     </main>
// //   );
// // };

// // export default SAPConsultingPage;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaCogs,
//   FaCloud,
//   FaChartLine,
//   FaRocket,
//   FaCheckCircle,
//   FaArrowRight,
//   FaSearch,
//   FaPencilRuler,
//   FaShippingFast,
//   FaTachometerAlt,
//   FaLayerGroup,
//   FaProjectDiagram,
//   FaHeadset,
//   FaDatabase,
//   FaShieldAlt,
//   FaClock,
//   FaMoneyBillWave,
//   FaExpandArrowsAlt,
//   FaLightbulb,
//   FaQuoteLeft,
//   FaStar,
//   FaUsers,
//   FaAward,
//   FaHandshake,
// } from "react-icons/fa";
// import banner from "../../assets/services/sr11.png";

// // ==================== BRAND COLORS (NAVY + GOLD STRICTLY) ====================
// const BRAND = {
//   navy: {
//     dark: "#0B1D33", // Innovise Blue
//     mid: "#143A63",
//     light: "#1A4570",
//   },
//   gold: {
//     primary: "#FDB913", // Innovise Yellow
//     light: "#FFD54F",
//     dark: "#E5A700",
//     gradient: "linear-gradient(135deg, #E5A700 0%, #FDB913 50%, #FFD54F 100%)",
//   },
// };

// // ==================== ANIMATION CONFIG ====================
// const ANIMATION = {
//   stagger: 0.12,
//   duration: 0.6,
//   spring: { type: "spring", stiffness: 300, damping: 25 },
// };

// // ==================== SERVICES DATA ====================
// const sapServicesData = [
//   {
//     id: 1,
//     icon: FaRocket,
//     title: "SAP S/4HANA Implementation & Migration",
//     description:
//       "Seamless transition from legacy systems to SAP S/4HANA with minimal disruption and maximum efficiency.",
//     features: [
//       "Greenfield Implementation",
//       "Brownfield Conversion",
//       "System Conversion",
//     ],
//     color: BRAND.navy.dark,
//   },
//   {
//     id: 2,
//     icon: FaCogs,
//     title: "Business Process Transformation",
//     description:
//       "Re-engineer core business processes to improve agility, performance, and scalability across operations.",
//     features: ["Process Mapping", "Workflow Optimization", "Best Practices"],
//     color: BRAND.gold.primary,
//   },
//   {
//     id: 3,
//     icon: FaLayerGroup,
//     title: "System Integration",
//     description:
//       "Integrate SAP with third-party platforms, cloud services, and enterprise applications seamlessly.",
//     features: ["API Integration", "Middleware Setup", "Data Synchronization"],
//     color: BRAND.navy.dark,
//   },
//   {
//     id: 4,
//     icon: FaTachometerAlt,
//     title: "SAP Optimization & Support",
//     description:
//       "Enhance system performance, ensure stability, and continuously improve operations for maximum ROI.",
//     features: ["Performance Tuning", "24/7 Support", "Continuous Improvement"],
//     color: BRAND.gold.primary,
//   },
// ];

// // ==================== BENEFITS DATA ====================
// const benefitsData = [
//   {
//     icon: FaClock,
//     title: "Faster Decision-Making",
//     description: "Real-time insights and analytics",
//   },
//   {
//     icon: FaChartLine,
//     title: "Improved Efficiency",
//     description: "Streamlined processes and automation",
//   },
//   {
//     icon: FaExpandArrowsAlt,
//     title: "Scalable Architecture",
//     description: "Future-ready infrastructure",
//   },
//   {
//     icon: FaMoneyBillWave,
//     title: "Reduced IT Costs",
//     description: "Optimized resource utilization",
//   },
// ];

// // ==================== APPROACH STEPS ====================
// const approachSteps = [
//   {
//     step: 1,
//     icon: FaSearch,
//     title: "Discover",
//     subtitle: "Assessment Phase",
//     description:
//       "Understand business goals, current systems, and transformation requirements through comprehensive analysis.",
//     color: BRAND.navy.dark,
//   },
//   {
//     step: 2,
//     icon: FaPencilRuler,
//     title: "Design",
//     subtitle: "Planning Phase",
//     description:
//       "Create tailored SAP transformation roadmap with detailed architecture and implementation strategy.",
//     color: BRAND.gold.dark,
//   },
//   {
//     step: 3,
//     icon: FaShippingFast,
//     title: "Deploy",
//     subtitle: "Execution Phase",
//     description:
//       "Execute implementation using proven methodologies, best practices, and rigorous quality assurance.",
//     color: BRAND.navy.dark,
//   },
//   {
//     step: 4,
//     icon: FaHeadset,
//     title: "Optimize",
//     subtitle: "Support Phase",
//     description:
//       "Continuous monitoring, performance optimization, and ongoing support to ensure long-term success.",
//     color: BRAND.gold.dark,
//   },
// ];

// // ==================== WHY CHOOSE US DATA ====================
// const whyChooseUsData = [
//   { icon: FaAward, text: "SAP Certified Consultants" },
//   { icon: FaUsers, text: "200+ Successful Implementations" },
//   { icon: FaShieldAlt, text: "Proven Methodologies" },
//   { icon: FaHandshake, text: "End-to-End Partnership" },
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
//       <div className="relative h-full rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-700 bg-white border border-slate-100 shadow-sm hover:shadow-xl">
//         {/* Top Accent */}
//         <motion.div
//           className="absolute top-0 left-0 right-0 h-1 origin-left"
//           style={{
//             background: `linear-gradient(90deg, ${service.color}, transparent)`,
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
//               background: `${BRAND.gold.primary}15`,
//               color: BRAND.gold.dark,
//               border: `1px solid ${BRAND.gold.primary}30`,
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
//               className="w-1.5 h-1.5 rounded-full inline-block"
//               style={{ background: BRAND.gold.primary }}
//             />

//             {service.status}
//           </span>
//         </div>

//         <div className="relative z-10 p-8 lg:p-10">
//           {/* Icon */}
//           <motion.div
//             className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
//             style={{
//               background:
//                 service.color === BRAND.navy.dark
//                   ? "rgba(11, 29, 51, 0.05)"
//                   : "rgba(253, 185, 19, 0.1)",
//             }}
//             whileHover={{ rotate: [0, -5, 5, 0] }}
//           >
//             <service.icon
//               className="text-2xl"
//               style={{ color: service.color }}
//             />
//           </motion.div>

//           {/* Title */}
//           <h3 className="text-xl font-bold mb-3 pr-16 text-[#0B1D33]">
//             {service.title}
//           </h3>

//           {/* Description */}
//           <p className="text-sm leading-relaxed mb-6 text-black/70">
//             {service.description}
//           </p>

//           {/* Features */}
//           <ul className="space-y-3 mb-6">
//             {service.features.map((feature, idx) => (
//               <li
//                 key={idx}
//                 className="flex items-center gap-2 text-sm text-black"
//               >
//                 <FaCheckCircle
//                   className="flex-shrink-0 text-xs"
//                   style={{ color: BRAND.gold.primary }}
//                 />

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
//     <div className="relative p-6 rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-500 bg-white border border-slate-100 shadow-sm hover:shadow-md">
//       <div className="relative z-10 flex items-start gap-4">
//         {/* Icon */}
//         <motion.div
//           className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-[#0B1D33]"
//           whileHover={{ rotate: [0, -10, 10, 0] }}
//         >
//           <benefit.icon
//             className="text-xl"
//             style={{ color: BRAND.gold.primary }}
//           />
//         </motion.div>

//         {/* Content */}
//         <div>
//           <h4 className="font-bold text-base mb-2 text-[#0B1D33]">
//             {benefit.title}
//           </h4>

//           <p className="text-sm leading-relaxed text-black/70">
//             {benefit.description}
//           </p>
//         </div>
//       </div>
//     </div>
//   </motion.div>
// );

// // Step Component (Horizontal Stepper)
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
//         animate={isHovered ? { rotate: [0, -5, 5, 0] } : {}}
//         transition={{ duration: 0.5 }}
//       >
//         <span
//           className="text-2xl font-black"
//           style={{ color: isHovered ? "white" : step.color }}
//         >
//           {step.step}
//         </span>

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

//       {/* Icon Badge */}
//       <motion.div
//         className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 -mt-2 relative z-10"
//         style={{
//           background: isHovered ? BRAND.navy.dark : "white",
//           border: `2px solid ${isHovered ? "transparent" : "rgba(0,0,0,0.08)"}`,
//           boxShadow: isHovered
//             ? `0 8px 25px ${BRAND.navy.dark}30`
//             : "0 2px 10px rgba(0,0,0,0.05)",
//         }}
//       >
//         <step.icon
//           className="text-lg"
//           style={{ color: isHovered ? BRAND.gold.primary : step.color }}
//         />
//       </motion.div>

//       {/* Content */}
//       <h4 className="text-lg font-bold mb-1 transition-colors duration-300 text-[#0B1D33]">
//         {step.title}
//       </h4>

//       <p
//         className="text-xs font-semibold uppercase tracking-wider mb-3"
//         style={{ color: step.color }}
//       >
//         {step.subtitle}
//       </p>

//       <p className="text-sm leading-relaxed max-w-xs mx-auto transition-colors duration-300 text-black/70">
//         {step.description}
//       </p>
//     </motion.div>
//   );
// };

// // ==================== SECTIONS ====================

// // Hero Section (Left Text + Right Visual)
// const HeroSection = () => (
//   <section className="relative py-6 lg:py-10 overflow-hidden bg-white">
//     {/* Background Elements */}
//     <div className="absolute inset-0" aria-hidden="true">
//       {/* Dot Pattern */}
//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
//           backgroundSize: "32px 32px",
//         }}
//       />

//       {/* Floating Orbs */}
//       <motion.div
//         animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-16 right-20 w-[450px] h-[450px] rounded-full blur-3xl opacity-[0.07]"
//         style={{ background: BRAND.navy.light }} // Navy accent
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

//       {/* Grid Pattern */}
//       <div
//         className="absolute inset-0 opacity-[0.02]"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
//           `,
//           backgroundSize: "80px 80px",
//         }}
//       />
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
//               <FaCogs
//                 className="text-lg"
//                 style={{ color: BRAND.gold.primary }}
//               />
//             </div>
//             <span
//               className="text-sm font-bold uppercase tracking-[0.2em]"
//               style={{ color: BRAND.navy.dark }}
//             >
//               SAP Consulting & Implementation
//             </span>
//           </div>

//           {/* Title */}
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0B1D33] leading-[1.1] mb-6">
//             Transforming Enterprises with{" "}
//             <span
//               style={{
//                 backgroundImage: BRAND.gold.gradient,
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Intelligent SAP Solutions
//             </span>
//           </h1>

//           {/* Description */}
//           <p className="text-lg text-black/80 leading-relaxed mb-8 max-w-xl">
//             At Innovise IT, we help organizations unlock the full potential of
//             SAP by delivering end-to-end consulting, implementation, and
//             optimization services powered by SAP S/4HANA.
//           </p>

//           <p className="text-base text-black/70 leading-relaxed mb-10 max-w-xl">
//             We combine deep domain expertise with proven methodologies to
//             modernize legacy systems, streamline operations, and drive real-time
//             business insights.
//           </p>

//           {/* CTA Buttons */}
//           {/* <div className="flex flex-col sm:flex-row gap-4">
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
//                 Talk to Our Experts
//                 <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
//               </span>

//               <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
//                 <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
//               </div>
//             </a>

//             <a
//               href="#services"
//               className="px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:bg-white/5 flex items-center gap-3"
//               style={{
//                 border: "1px solid rgba(255,255,255,0.2)",
//                 color: "white",
//               }}
//             >
//               Explore Services ↓
//             </a>
//           </div> */}

//           {/* Trust Indicators */}
//           {/* <div
//             className="flex flex-wrap items-center gap-6 mt-10 pt-8"
//             style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
//           >
//             {[
//               { icon: FaAward, text: "SAP Partner" },
//               { icon: FaUsers, text: "200+ Projects" },
//               { icon: FaStar, text: "98% Success Rate" },
//             ].map((item, idx) => (
//               <div key={idx} className="flex items-center gap-2">
//                 <item.icon
//                   className="text-sm"
//                   style={{ color: BRAND.gold.primary }}
//                 />
//                 <span className="text-xs text-black/60 font-medium">
//                   {item.text}
//                 </span>
//               </div>
//             ))}
//           </div> */}
//         </motion.div>

//         {/* RIGHT - Visual / Image Placeholder */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="relative"
//         >
//           {/* Main Visual Container */}
//           <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-50 border border-slate-200">
//             {/* Replace this div with actual image: */}
//             {/* <img src="/images/sap-dashboard.jpg" alt="SAP Dashboard" className="w-full h-full object-cover" /> */}

//             {/* Placeholder Content */}
//             <div className="absolute inset-0 p-8 flex flex-col">
//               {/* Header Bar */}
//               <div className="flex items-center gap-2 mb-6">
//                 <div className="w-3 h-3 rounded-full bg-red-400" />
//                 <div className="w-3 h-3 rounded-full bg-yellow-400" />
//                 <div className="w-3 h-3 rounded-full bg-green-400" />
//                 <span className="ml-4 text-xs text-black/40 font-mono">
//                   SAP S/4HANA Dashboard
//                 </span>
//               </div>

//               {/* Mock Dashboard Content */}
//               <div className="flex-1 grid grid-cols-3 gap-4">
//                 {/* Left Panel */}
//                 <div className="col-span-1 space-y-3">
//                   <div className="p-4 rounded-xl bg-white border border-slate-100">
//                     <div className="text-xs text-black/40 mb-2">REVENUE</div>
//                     <div
//                       className="text-2xl font-black"
//                       style={{ color: BRAND.navy.dark }}
//                     >
//                       $2.4M
//                     </div>
//                     <div className="text-xs text-[#0B1D33] mt-1">↑ 12.5%</div>
//                   </div>
//                   <div className="p-4 rounded-xl bg-white border border-slate-100">
//                     <div className="text-xs text-black/40 mb-2">ORDERS</div>
//                     <div className="text-2xl font-black text-[#0B1D33]">
//                       1,847
//                     </div>
//                     <div className="text-xs text-[#0B1D33] mt-1">↑ 8.3%</div>
//                   </div>
//                   <div className="p-4 rounded-xl bg-white border border-slate-100">
//                     <div className="text-xs text-black/40 mb-2">EFFICIENCY</div>
//                     <div className="text-2xl font-black text-[#0B1D33]">
//                       94.2%
//                     </div>
//                     <div className="text-xs text-[#0B1D33] mt-1">↑ 5.1%</div>
//                   </div>
//                 </div>

//                 {/* Center Chart Area */}
//                 <div className="col-span-2 rounded-xl p-4 bg-white border border-slate-100">
//                   <div className="text-xs text-black/40 mb-4">
//                     PERFORMANCE ANALYTICS
//                   </div>

//                   {/* Mock Chart Bars */}
//                   <div className="flex items-end gap-2 h-32">
//                     {[40, 65, 45, 80, 55, 90, 70].map((height, idx) => (
//                       <motion.div
//                         key={idx}
//                         initial={{ height: 0 }}
//                         animate={{ height: `${height}%` }}
//                         transition={{ delay: idx * 0.1, duration: 0.5 }}
//                         className="flex-1 rounded-t-md"
//                         style={{
//                           background:
//                             idx === 5
//                               ? BRAND.gold.gradient
//                               : `rgba(11,29,51,${0.2 + idx * 0.1})`,
//                         }}
//                       />
//                     ))}
//                   </div>

//                   <div className="flex justify-between mt-2 text-[10px] text-black/30">
//                     <span>Mon</span>
//                     <span>Tue</span>
//                     <span>Wed</span>
//                     <span>Thu</span>
//                     <span>Fri</span>
//                     <span>Sat</span>
//                     <span>Sun</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Bottom Status Bar */}
//               <div className="mt-4 flex items-center justify-between px-2">
//                 <div className="flex items-center gap-2">
//                   <div className="w-2 h-2 rounded-full bg-[#0B1D33] animate-pulse" />
//                   <span className="text-xs text-black/40">
//                     System Online • Real-time Sync
//                   </span>
//                 </div>
//                 <div className="text-xs text-black/30">
//                   Last updated: Just now
//                 </div>
//               </div>
//             </div>

//             {/* Floating Badge */}
//             <motion.div
//               animate={{ y: [0, -8, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-5 shadow-xl border border-slate-100"
//             >
//               <div className="flex items-center gap-3">
//                 <div
//                   className="w-12 h-12 rounded-xl flex items-center justify-center"
//                   style={{ background: `${BRAND.gold.primary}15` }}
//                 >
//                   <FaChartLine
//                     className="text-xl"
//                     style={{ color: BRAND.gold.primary }}
//                   />
//                 </div>
//                 <div>
//                   <div
//                     className="text-xl font-black"
//                     style={{ color: BRAND.navy.dark }}
//                   >
//                     40%
//                   </div>
//                   <div className="text-xs text-black/50">Cost Reduction</div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Decorative Elements */}
//           <div
//             className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl -z-10 opacity-60"
//             style={{
//               background: "linear-gradient(135deg, #143A63, transparent)",
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
//     className="py-6 lg:py-10 bg-slate-50 relative overflow-hidden"
//   >
//     {/* Background Decoration */}
//     <div
//       className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.03] translate-x-1/3 -translate-y-1/3"
//       style={{ background: BRAND.navy.light }}
//     />

//     <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
//       {/* Section Header */}
//       <motion.header
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center max-w-3xl mx-auto mb-16"
//       >
//         <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-white text-[#0B1D33] border border-slate-200 shadow-sm">
//           💡 What We Deliver
//         </span>

//         <h2
//           className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
//           style={{ color: BRAND.navy.dark }}
//         >
//           Comprehensive SAP Services
//         </h2>

//         <p className="text-lg leading-relaxed text-black/70">
//           End-to-end solutions designed to maximize your SAP investment and
//           accelerate digital transformation.
//         </p>
//       </motion.header>

//       {/* Services Grid - 2x2 or responsive */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
//         {sapServicesData.map((service, index) => (
//           <ServiceCard key={service.id} service={service} index={index} />
//         ))}
//       </div>
//     </div>
//   </section>
// );

// // Benefits Section (Image Left + Benefits Right)
// const BenefitsSection = () => (
//   <section className="py-6 lg:py-10 bg-white relative overflow-hidden">
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
//           <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-[#FFFBEB] border border-[#FDB913]/20">
//             {/* Replace with actual image: */}
//             {/* <img src="/images/sap-team.jpg" alt="SAP Team Collaboration" className="w-full h-full object-cover" /> */}

//             {/* Placeholder Visual */}
//             <div className="absolute inset-0 flex items-center justify-center p-8">
//               <div className="w-full max-w-sm">
//                 {/* Mock Enterprise Graphic */}
//                 <div className="space-y-4">
//                   {/* Central Hub */}
//                   <motion.div
//                     animate={{ scale: [1, 1.05, 1] }}
//                     transition={{ duration: 3, repeat: Infinity }}
//                     className="mx-auto w-32 h-32 rounded-2xl flex items-center justify-center"
//                     style={{
//                       background: BRAND.gold.gradient,
//                       boxShadow: `0 20px 50px ${BRAND.gold.primary}30`,
//                     }}
//                   >
//                     <FaCogs className="text-5xl text-[#0B1D33]" />
//                   </motion.div>

//                   {/* Orbiting Elements */}
//                   {[
//                     { icon: FaDatabase, label: "Data", angle: 0 },
//                     { icon: FaCloud, label: "Cloud", angle: 90 },
//                     { icon: FaCogs, label: "Process", angle: 180 },
//                     { icon: FaChartLine, label: "Analytics", angle: 270 },
//                   ].map((item, idx) => (
//                     <motion.div
//                       key={idx}
//                       className="absolute flex items-center gap-3 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg"
//                       style={{
//                         top: "50%",
//                         left: "50%",
//                         transform: `rotate(${item.angle}deg) translateX(140px) rotate(-${item.angle}deg) translateY(-50%) translateX(-50%)`,
//                       }}
//                       initial={{ opacity: 0, scale: 0 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: 0.5 + idx * 0.15 }}
//                     >
//                       <item.icon
//                         className="text-lg"
//                         style={{ color: BRAND.navy.dark }}
//                       />
//                       <span
//                         className="text-sm font-semibold"
//                         style={{ color: BRAND.navy.dark }}
//                       >
//                         {item.label}
//                       </span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Stats Overlay */}
//             <div className="absolute bottom-6 left-6 right-6 flex gap-4">
//               <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-xl p-4 text-center border border-slate-100">
//                 <div
//                   className="text-2xl font-black"
//                   style={{ color: BRAND.navy.dark }}
//                 >
//                   35%
//                 </div>
//                 <div className="text-xs text-black/50">Faster Processing</div>
//               </div>
//               <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-xl p-4 text-center border border-slate-100">
//                 <div
//                   className="text-2xl font-black"
//                   style={{ color: BRAND.gold.primary }}
//                 >
//                   99.9%
//                 </div>
//                 <div className="text-xs text-black/50">Uptime SLA</div>
//               </div>
//             </div>
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
//           <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-slate-50 text-[#0B1D33] border border-slate-100">
//             🎯 Key Benefits
//           </span>

//           <h2
//             className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
//             style={{ color: BRAND.navy.dark }}
//           >
//             Why Choose{" "}
//             <span style={{ color: BRAND.gold.primary }}>Innovise IT</span> for
//             Your SAP Journey?
//           </h2>

//           <p className="text-lg leading-relaxed mb-10 text-black/70">
//             Our SAP solutions deliver measurable business outcomes that
//             transform how you operate, decide, and grow.
//           </p>

//           {/* Benefits Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
//             {benefitsData.map((benefit, index) => (
//               <BenefitCard key={index} benefit={benefit} index={index} />
//             ))}
//           </div>

//           {/* Why Choose Us Badges */}
//           <div className="p-6 rounded-2xl bg-[#0B1D33]">
//             <h4 className="text-white font-bold mb-4 flex items-center gap-2">
//               <FaStar
//                 className="text-sm"
//                 style={{ color: BRAND.gold.primary }}
//               />
//               The Innovise Advantage
//             </h4>

//             <div className="grid grid-cols-2 gap-3">
//               {whyChooseUsData.map((item, idx) => (
//                 <div key={idx} className="flex items-center gap-2">
//                   <item.icon
//                     className="text-sm flex-shrink-0"
//                     style={{ color: BRAND.gold.primary }}
//                   />
//                   <span className="text-sm text-white/80">{item.text}</span>
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
// const ApproachSection = () => (
//   <section className="py-6 lg:py-10 bg-slate-50 relative overflow-hidden">
//     <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
//       {/* Section Header */}
//       <motion.header
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center max-w-3xl mx-auto mb-16"
//       >
//         <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-white text-[#0B1D33] border border-slate-200 shadow-sm">
//           🧠 Our Approach
//         </span>

//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0B1D33]">
//           Proven{" "}
//           <span style={{ color: BRAND.navy.mid }}>
//             Implementation Methodology
//           </span>
//         </h2>

//         <p className="text-lg leading-relaxed text-black/70">
//           A structured approach ensuring successful SAP transformations every
//           time.
//         </p>
//       </motion.header>

//       {/* Desktop */}
//       <div className="hidden lg:block">
//         <div className="grid grid-cols-4 gap-8">
//           {approachSteps.map((step, index) => (
//             <motion.div
//               key={step.step}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="relative group"
//             >
//               <div className="relative p-8 rounded-3xl border border-slate-100 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
//                 {/* Step Number */}
//                 <div
//                   className="flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-md"
//                   style={{
//                     background: BRAND.gold.gradient,
//                     boxShadow: "0 8px 24px rgba(253,185,19,0.25)",
//                   }}
//                 >
//                   <span className="text-2xl font-black text-[#0B1D33]">
//                     {step.step}
//                   </span>
//                 </div>

//                 {/* Icon */}
//                 <div className="mb-5">
//                   <step.icon
//                     className="text-3xl"
//                     style={{ color: step.color }}
//                   />
//                 </div>

//                 {/* Title */}
//                 <h4 className="text-xl font-bold text-[#0B1D33] mb-2">
//                   {step.title}
//                 </h4>

//                 {/* Subtitle */}
//                 <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FDB913] mb-3">
//                   {step.subtitle}
//                 </p>

//                 {/* Description */}
//                 <p className="text-sm leading-relaxed text-black/70">
//                   {step.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Mobile */}
//       <div className="lg:hidden space-y-8">
//         {approachSteps.map((step, index) => (
//           <motion.div
//             key={step.step}
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.1 }}
//             className="flex gap-5"
//           >
//             {/* Left Step */}
//             <div className="flex flex-col items-center">
//               <div
//                 className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
//                 style={{
//                   background: BRAND.gold.gradient,
//                   boxShadow: "0 8px 24px rgba(253,185,19,0.25)",
//                 }}
//               >
//                 <span className="text-lg font-black text-[#0B1D33]">
//                   {step.step}
//                 </span>
//               </div>

//               {index < approachSteps.length - 1 && (
//                 <div className="w-0.5 flex-1 mt-3 bg-gradient-to-b from-[#FDB913] to-slate-100"></div>
//               )}
//             </div>

//             {/* Content */}
//             <div className="pb-8">
//               <div className="flex items-center gap-3 mb-2">
//                 <step.icon className="text-lg" style={{ color: step.color }} />

//                 <h4 className="font-bold text-lg text-[#0B1D33]">
//                   {step.title}
//                 </h4>
//               </div>

//               <p className="text-xs font-semibold uppercase tracking-wider mb-2 text-[#FDB913]">
//                 {step.subtitle}
//               </p>

//               <p className="text-sm leading-relaxed text-black/70">
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
//   <section className="py-6 lg:py-10 relative overflow-hidden bg-[#FFFBEB]">
//     {/* Background Pattern */}
//     <div
//       className="absolute inset-0 opacity-[0.04]"
//       style={{
//         backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
//         backgroundSize: "32px 32px",
//       }}
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
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B1D33] leading-tight mb-6">
//           Ready to Transform Your{" "}
//           <span style={{ color: BRAND.navy.mid }}>Enterprise with SAP</span>?
//         </h2>

//         <p className="text-lg text-black/80 leading-relaxed mb-10 max-w-2xl mx-auto">
//           Let our certified SAP experts guide you through a seamless
//           transformation journey. From strategy to support, we're with you every
//           step of the way.
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
//               Get Started Today
//               <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
//             </span>

//             <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
//               <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
//             </div>
//           </a>
//         </div>

//         {/* Quick Contact Info */}
//         <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-[#0B1D33]/10">
//           {[
//             { value: "Free Assessment", icon: FaLightbulb },
//             { value: "Expert Consultation", icon: FaUsers },
//             { value: "Custom Roadmap", icon: FaProjectDiagram },
//           ].map((item, idx) => (
//             <div key={idx} className="flex items-center gap-2 text-black/60">
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

// // Main SAP Page Component
// const SAPConsultingPage = () => {
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
//       <ApproachSection />
//       <BenefitsSection />
//       <CTABannerSection />
//     </main>
//   );
// };

// export default SAPConsultingPage;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCogs,
  FaCloud,
  FaChartLine,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaSearch,
  FaPencilRuler,
  FaShippingFast,
  FaTachometerAlt,
  FaLayerGroup,
  FaProjectDiagram,
  FaHeadset,
  FaDatabase,
  FaShieldAlt,
  FaClock,
  FaMoneyBillWave,
  FaExpandArrowsAlt,
  FaLightbulb,
  FaQuoteLeft,
  FaStar,
  FaUsers,
  FaAward,
  FaHandshake,
} from "react-icons/fa";
import banner from "../../assets/services/sr11.png";

// ==================== BRAND COLORS (NAVY + GOLD) ====================
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
  stagger: 0.12,
  duration: 0.6,
  spring: { type: "spring", stiffness: 300, damping: 25 },
};

// ==================== SERVICES DATA ====================
const sapServicesData = [
  {
    id: 1,
    icon: FaRocket,
    title: "SAP S/4HANA Implementation & Migration",
    description:
      "Seamless transition from legacy systems to SAP S/4HANA with minimal disruption and maximum efficiency.",
    features: [
      "Greenfield Implementation",
      "Brownfield Conversion",
      "System Conversion",
    ],
    color: "#FDB913",
  },
  {
    id: 2,
    icon: FaCogs,
    title: "Business Process Transformation",
    description:
      "Re-engineer core business processes to improve agility, performance, and scalability across operations.",
    features: ["Process Mapping", "Workflow Optimization", "Best Practices"],
    color: "#FDB913",
  },
  {
    id: 3,
    icon: FaLayerGroup,
    title: "System Integration",
    description:
      "Integrate SAP with third-party platforms, cloud services, and enterprise applications seamlessly.",
    features: ["API Integration", "Middleware Setup", "Data Synchronization"],
    color: "#FDB913",
  },
  {
    id: 4,
    icon: FaTachometerAlt,
    title: "SAP Optimization & Support",
    description:
      "Enhance system performance, ensure stability, and continuously improve operations for maximum ROI.",
    features: ["Performance Tuning", "24/7 Support", "Continuous Improvement"],
    color: "#FDB913",
  },
];

// ==================== BENEFITS DATA ====================
const benefitsData = [
  {
    icon: FaClock,
    title: "Faster Decision-Making",
    description: "Real-time insights and analytics",
  },
  {
    icon: FaChartLine,
    title: "Improved Efficiency",
    description: "Streamlined processes and automation",
  },
  {
    icon: FaExpandArrowsAlt,
    title: "Scalable Architecture",
    description: "Future-ready infrastructure",
  },
  {
    icon: FaMoneyBillWave,
    title: "Reduced IT Costs",
    description: "Optimized resource utilization",
  },
];

// ==================== APPROACH STEPS ====================
const approachSteps = [
  {
    step: 1,
    icon: FaSearch,
    title: "Discover",
    subtitle: "Assessment Phase",
    description:
      "Understand business goals, current systems, and transformation requirements through comprehensive analysis.",
    color: "#3B82F6",
  },
  {
    step: 2,
    icon: FaPencilRuler,
    title: "Design",
    subtitle: "Planning Phase",
    description:
      "Create tailored SAP transformation roadmap with detailed architecture and implementation strategy.",
    color: "#F59E0B",
  },
  {
    step: 3,
    icon: FaShippingFast,
    title: "Deploy",
    subtitle: "Execution Phase",
    description:
      "Execute implementation using proven methodologies, best practices, and rigorous quality assurance.",
    color: "#10B981",
  },
  {
    step: 4,
    icon: FaHeadset,
    title: "Optimize",
    subtitle: "Support Phase",
    description:
      "Continuous monitoring, performance optimization, and ongoing support to ensure long-term success.",
    color: "#8B5CF6",
  },
];

// ==================== WHY CHOOSE US DATA ====================
const whyChooseUsData = [
  { icon: FaAward, text: "SAP Certified Consultants" },
  { icon: FaUsers, text: "200+ Successful Implementations" },
  { icon: FaShieldAlt, text: "Proven Methodologies" },
  { icon: FaHandshake, text: "End-to-End Partnership" },
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
      <div
        className="relative h-full rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-700"
        style={{
          background: isHovered
            ? `linear-gradient(135deg,
                #081C34 0%,
                #0D2747 50%,
                #163B66 100%)`
            : `linear-gradient(135deg,
                #0A1A2F 0%,
                #102B4C 50%,
                #163B66 100%)`,

          border: isHovered
            ? "1px solid rgba(253,185,19,0.25)"
            : "1px solid rgba(255,255,255,0.06)",

          boxShadow: isHovered
            ? "0 30px 80px rgba(8,28,52,0.45)"
            : "0 10px 35px rgba(8,28,52,0.20)",
        }}
      >
        {/* Top Accent */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 origin-left"
          style={{
            background: "linear-gradient(90deg, #FDB913, transparent)",
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
              background: "rgba(253,185,19,0.12)",
              color: "#FDB913",
              border: "1px solid rgba(253,185,19,0.25)",
            }}
          >
            <motion.span
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="w-1.5 h-1.5 rounded-full inline-block bg-[#FDB913]"
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
              background: "rgba(253,185,19,0.12)",
              border: "1px solid rgba(253,185,19,0.25)",
            }}
            whileHover={{ rotate: [0, -5, 5, 0] }}
          >
            <service.icon className="text-2xl" style={{ color: "#FDB913" }} />
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
                <FaCheckCircle className="flex-shrink-0 text-xs text-[#FDB913]" />

                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

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
    <div
      className="relative p-6 rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-500"
      style={{
        background:
          "linear-gradient(135deg, #081C34 0%, #102B4C 50%, #163B66 100%)",

        border: "1px solid rgba(255,255,255,0.08)",

        boxShadow: "0 10px 35px rgba(8,28,52,0.20)",
      }}
    >
      {/* Gold Glow */}
      <div className="absolute top-0 right-0 w-28 h-28 bg-[#FDB913]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10 flex items-start gap-4">
        {/* Icon */}
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

        {/* Content */}
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

// Step Component (Horizontal Stepper)
const StepComponent = ({ step, index, totalSteps }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isLast = index === totalSteps - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.15,
        duration: ANIMATION.duration,
        ...ANIMATION.spring,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col items-center text-center"
    >
      {/* Connector Line (Desktop) */}
      {!isLast && (
        <div
          className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 z-0"
          style={{
            background: `linear-gradient(to right, ${step.color}, rgba(148,163,184,0.2))`,
          }}
        />
      )}

      {/* Step Circle */}
      <motion.div
        className="w-20 h-20 rounded-full flex items-center justify-center relative z-10 mb-6 cursor-pointer"
        style={{
          background: isHovered ? step.color : `${step.color}15`,
          border: `3px solid ${isHovered ? step.color : `${step.color}40`}`,
          boxShadow: isHovered ? `0 10px 30px ${step.color}30` : "none",
        }}
        whileHover={{ scale: 1.1 }}
        animate={isHovered ? { rotate: [0, -5, 5, 0] } : {}}
        transition={{ duration: 0.5 }}
      >
        <span
          className="text-2xl font-black"
          style={{ color: isHovered ? "white" : step.color }}
        >
          {step.step}
        </span>

        {/* Pulse Effect on Hover */}
        {isHovered && (
          <motion.div
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.4, opacity: 0 }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute inset-0 rounded-full"
            style={{ border: `2px solid ${step.color}` }}
          />
        )}
      </motion.div>

      {/* Icon Badge */}
      <motion.div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 -mt-2 relative z-10"
        style={{
          background: isHovered ? BRAND.navy.dark : "white",
          border: `2px solid ${isHovered ? "transparent" : "rgba(0,0,0,0.08)"}`,
          boxShadow: isHovered
            ? `0 8px 25px ${BRAND.navy.dark}30`
            : "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <step.icon
          className="text-lg"
          style={{ color: isHovered ? BRAND.gold.primary : step.color }}
        />
      </motion.div>

      {/* Content */}
      <h4
        className="text-lg font-bold mb-1 transition-colors duration-300"
        style={{ color: isHovered ? BRAND.navy.dark : BRAND.navy.dark }}
      >
        {step.title}
      </h4>

      <p
        className="text-xs font-semibold uppercase tracking-wider mb-3"
        style={{ color: step.color }}
      >
        {step.subtitle}
      </p>

      <p
        className="text-sm leading-relaxed max-w-xs mx-auto transition-colors duration-300"
        style={{ color: isHovered ? BRAND.navy.dark : "#64748B" }}
      >
        {step.description}
      </p>
    </motion.div>
  );
};

// ==================== SECTIONS ====================

// Hero Section (Left Text + Right Visual)
const HeroSection = () => (
  <section
    className="relative py-6 lg:py-10 overflow-hidden"
    style={{
      background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 60%, ${BRAND.navy.lighter} 100%)`,
    }}
  >
    {/* Background Elements */}
    <div className="absolute inset-0" aria-hidden="true">
      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-20 w-[450px] h-[450px] rounded-full blur-3xl opacity-[0.07]"
        style={{ background: "#00A4FD" }} // SAP Blue accent
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

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>

    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT - Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{
                background: `${BRAND.gold.primary}15`,
                border: `1px solid ${BRAND.gold.primary}30`,
              }}
            >
              <FaCogs
                className="text-lg"
                style={{ color: BRAND.gold.primary }}
              />
            </div>
            <span
              className="text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: BRAND.gold.primary }}
            >
              SAP Consulting & Implementation
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
            Transforming Enterprises with{" "}
            <span style={{ color: BRAND.gold.primary }}>
              Intelligent SAP Solutions
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
            At Innovise IT, we help organizations unlock the full potential of
            SAP by delivering end-to-end consulting, implementation, and
            optimization services powered by SAP S/4HANA.
          </p>

          <p className="text-base text-gray-400 leading-relaxed mb-10 max-w-xl">
            We combine deep domain expertise with proven methodologies to
            modernize legacy systems, streamline operations, and drive real-time
            business insights.
          </p>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="group relative px-8 py-4 rounded-xl font-bold text-base overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: BRAND.gold.gradient,
                color: BRAND.navy.dark,
                boxShadow: `0 8px 30px ${BRAND.gold.primary}35`,
              }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Talk to Our Experts
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </span>

              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
                <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
              </div>
            </a>

            <a
              href="#services"
              className="px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:bg-white/5 flex items-center gap-3"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
              }}
            >
              Explore Services ↓
            </a>
          </div> */}

          {/* Trust Indicators */}
          {/* <div
            className="flex flex-wrap items-center gap-6 mt-10 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            {[
              { icon: FaAward, text: "SAP Partner" },
              { icon: FaUsers, text: "200+ Projects" },
              { icon: FaStar, text: "98% Success Rate" },
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

        {/* RIGHT - Visual / Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Main Visual Container */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
            style={{
              background: `linear-gradient(145deg, ${BRAND.navy.light}, ${BRAND.navy.mid})`,
              border: `1px solid rgba(253,185,19,0.15)`,
            }}
          >
            {/* Replace this div with actual image: */}
            {/* <img src="/images/sap-dashboard.jpg" alt="SAP Dashboard" className="w-full h-full object-cover" /> */}

            {/* Placeholder Content */}
            <div className="absolute inset-0 p-8 flex flex-col">
              {/* Header Bar */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-4 text-xs text-white/40 font-mono">
                  SAP S/4HANA Dashboard
                </span>
              </div>

              {/* Mock Dashboard Content */}
              <div className="flex-1 grid grid-cols-3 gap-4">
                {/* Left Panel */}
                <div className="col-span-1 space-y-3">
                  <div
                    className="p-4 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="text-xs text-white/40 mb-2">REVENUE</div>
                    <div
                      className="text-2xl font-black"
                      style={{ color: BRAND.gold.primary }}
                    >
                      $2.4M
                    </div>
                    <div className="text-xs text-green-400 mt-1">↑ 12.5%</div>
                  </div>
                  <div
                    className="p-4 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="text-xs text-white/40 mb-2">ORDERS</div>
                    <div className="text-2xl font-black text-white">1,847</div>
                    <div className="text-xs text-green-400 mt-1">↑ 8.3%</div>
                  </div>
                  <div
                    className="p-4 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="text-xs text-white/40 mb-2">EFFICIENCY</div>
                    <div className="text-2xl font-black text-white">94.2%</div>
                    <div className="text-xs text-green-400 mt-1">↑ 5.1%</div>
                  </div>
                </div>

                {/* Center Chart Area */}
                <div
                  className="col-span-2 rounded-xl p-4"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="text-xs text-white/40 mb-4">
                    PERFORMANCE ANALYTICS
                  </div>

                  {/* Mock Chart Bars */}
                  <div className="flex items-end gap-2 h-32">
                    {[40, 65, 45, 80, 55, 90, 70].map((height, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="flex-1 rounded-t-md"
                        style={{
                          background:
                            idx === 5
                              ? BRAND.gold.gradient
                              : `rgba(0,164,253,${0.3 + idx * 0.1})`,
                        }}
                      />
                    ))}
                  </div>

                  <div className="flex justify-between mt-2 text-[10px] text-white/30">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>
              </div>

              {/* Bottom Status Bar */}
              <div className="mt-4 flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-white/40">
                    System Online • Real-time Sync
                  </span>
                </div>
                <div className="text-xs text-white/30">
                  Last updated: Just now
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-5 shadow-xl"
              style={{ border: `2px solid ${BRAND.gold.primary}` }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${BRAND.gold.primary}15` }}
                >
                  <FaChartLine
                    className="text-xl"
                    style={{ color: BRAND.gold.primary }}
                  />
                </div>
                <div>
                  <div
                    className="text-xl font-black"
                    style={{ color: BRAND.navy.dark }}
                  >
                    40%
                  </div>
                  <div className="text-xs text-gray-500">Cost Reduction</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div
            className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl -z-10 opacity-60"
            style={{
              background: "linear-gradient(135deg, #00A4FD, transparent)",
            }}
          />
          <div
            className="absolute -bottom-4 -left-8 w-32 h-32 rounded-full -z-10 opacity-40"
            style={{ background: BRAND.gold.primary }}
          />
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
    {/* Background Decoration */}
    <div
      className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.03] translate-x-1/3 -translate-y-1/3"
      style={{ background: BRAND.navy.lighter }}
    />

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
          What We Deliver
        </span>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          style={{ color: BRAND.navy.dark }}
        >
          Comprehensive SAP Services
        </h2>

        <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
          End-to-end solutions designed to maximize your SAP investment and
          accelerate digital transformation.
        </p>
      </motion.header>

      {/* Services Grid - 2x2 or responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {sapServicesData.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  </section>
);

// Benefits Section (Image Left + Benefits Right)
const BenefitsSection = () => (
  <section className="py-6 lg:py-10 bg-gray-50 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT - Image / Visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 lg:order-1"
        >
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
            style={{
              background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.light})`,
              border: `1px solid rgba(253,185,19,0.1)`,
            }}
          >
            {/* Replace with actual image: */}
            {/* <img src="/images/sap-team.jpg" alt="SAP Team Collaboration" className="w-full h-full object-cover" /> */}

            {/* Placeholder Visual */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="w-full max-w-sm">
                {/* Mock Enterprise Graphic */}
                <div className="space-y-4">
                  {/* Central Hub */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="mx-auto w-32 h-32 rounded-2xl flex items-center justify-center"
                    style={{
                      background: BRAND.gold.gradient,
                      boxShadow: `0 20px 50px ${BRAND.gold.primary}30`,
                    }}
                  >
                    <FaCogs className="text-5xl text-white" />
                  </motion.div>

                  {/* Orbiting Elements */}
                  {[
                    { icon: FaDatabase, label: "Data", angle: 0 },
                    { icon: FaCloud, label: "Cloud", angle: 90 },
                    { icon: FaCogs, label: "Process", angle: 180 },
                    { icon: FaChartLine, label: "Analytics", angle: 270 },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="absolute flex items-center gap-3 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `rotate(${item.angle}deg) translateX(140px) rotate(-${item.angle}deg) translateY(-50%) translateX(-50%)`,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + idx * 0.15 }}
                    >
                      <item.icon
                        className="text-lg"
                        style={{ color: "#00A4FD" }}
                      />
                      <span
                        className="text-sm font-semibold"
                        style={{ color: BRAND.navy.dark }}
                      >
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex gap-4">
              <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-xl p-4 text-center">
                <div
                  className="text-2xl font-black"
                  style={{ color: "#00A4FD" }}
                >
                  35%
                </div>
                <div className="text-xs text-gray-500">Faster Processing</div>
              </div>
              <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-xl p-4 text-center">
                <div
                  className="text-2xl font-black"
                  style={{ color: BRAND.gold.primary }}
                >
                  99.9%
                </div>
                <div className="text-xs text-gray-500">Uptime SLA</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT - Benefits Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2"
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
            Why Choose{" "}
            <span style={{ color: BRAND.gold.primary }}>Innovise IT</span> for
            Your SAP Journey?
          </h2>

          <p
            className="text-lg leading-relaxed mb-10"
            style={{ color: "#64748B" }}
          >
            Our SAP solutions deliver measurable business outcomes that
            transform how you operate, decide, and grow.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {benefitsData.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>

          {/* Why Choose Us Badges */}
          <div
            className="p-6 rounded-2xl"
            style={{
              background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
            }}
          >
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <FaStar
                className="text-sm"
                style={{ color: BRAND.gold.primary }}
              />
              The Innovise Advantage
            </h4>

            <div className="grid grid-cols-2 gap-3">
              {whyChooseUsData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <item.icon
                    className="text-sm flex-shrink-0"
                    style={{ color: BRAND.gold.primary }}
                  />
                  <span className="text-sm text-white/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Process/Approach Section (Stepper UI)
const ApproachSection = () => (
  <section className="py-6 lg:py-10 bg-[#081C34] relative overflow-hidden">
    {/* Background Glow */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-[#FDB913]/10 blur-3xl rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-[#0F2B4D] blur-3xl rounded-full"></div>

    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      {/* Section Header */}
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
          Proven{" "}
          <span style={{ color: "#FDB913" }}>Implementation Methodology</span>
        </h2>

        <p className="text-lg leading-relaxed text-white/70">
          A structured approach ensuring successful SAP transformations every
          time.
        </p>
      </motion.header>

      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-4 gap-8">
          {approachSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#FDB913]/30 hover:bg-white/[0.07]">
                {/* Step Number */}
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-[#FDB913] shadow-lg shadow-[#FDB913]/20">
                  <span className="text-2xl font-black text-[#081C34]">
                    {step.step}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-5">
                  <step.icon className="text-3xl text-[#FDB913]" />
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h4>

                {/* Subtitle */}
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FDB913] mb-3">
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm leading-relaxed text-white/70">
                  {step.description}
                </p>

                {/* Top Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FDB913]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden space-y-8">
        {approachSteps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex gap-5"
          >
            {/* Left Step */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#FDB913] flex items-center justify-center shadow-lg shadow-[#FDB913]/20">
                <span className="text-lg font-black text-[#081C34]">
                  {step.step}
                </span>
              </div>

              {index < approachSteps.length - 1 && (
                <div className="w-0.5 flex-1 mt-3 bg-gradient-to-b from-[#FDB913] to-white/10"></div>
              )}
            </div>

            {/* Content */}
            <div className="pb-8">
              <div className="flex items-center gap-3 mb-2">
                <step.icon className="text-lg text-[#FDB913]" />

                <h4 className="font-bold text-lg text-white">{step.title}</h4>
              </div>

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

// CTA Banner Section
const CTABannerSection = () => (
  <section
    className="py-6 lg:py-10 relative overflow-hidden"
    style={{
      background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, #0A1628 50%, ${BRAND.navy.mid} 100%)`,
    }}
  >
    {/* Background Pattern */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: "32px 32px",
      }}
    />

    {/* Decorative Orbs */}
    <motion.div
      animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-10 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.08]"
      style={{ background: "#00A4FD" }}
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
        {/* Icon */}
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

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Ready to Transform Your <span>Enterprise with SAP</span>?
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          Let our certified SAP experts guide you through a seamless
          transformation journey. From strategy to support, we're with you every
          step of the way.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="/contact"
            className="group relative px-10 py-5 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{
              background: BRAND.gold.gradient,
              color: BRAND.navy.dark,
              boxShadow: `0 10px 40px ${BRAND.gold.primary}40`,
            }}
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

        {/* Quick Contact Info */}
        <div
          className="flex flex-wrap items-center justify-center gap-8 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          {[
            { value: "Free Assessment", icon: FaLightbulb },
            { value: "Expert Consultation", icon: FaUsers },
            { value: "Custom Roadmap", icon: FaProjectDiagram },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-white/60">
              <item.icon
                className="text-sm"
                style={{ color: BRAND.gold.primary }}
              />
              <span className="text-sm font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// Main SAP Page Component
const SAPConsultingPage = () => {
  return (
    <main role="main">
      {/* <div
        className="relative w-full min-h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        
        <div className="absolute inset-0 bg-black/20" />
      </div> */}
      <HeroSection />
      <ServicesSection />
      <ApproachSection />
      <BenefitsSection />
      <CTABannerSection />
    </main>
  );
};

export default SAPConsultingPage;
