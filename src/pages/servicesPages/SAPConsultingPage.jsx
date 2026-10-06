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
// //   FaStar,
// //   FaUsers,
// //   FaAward,
// //   FaHandshake,
// //   FaUserTie,
// //   FaTools,
// //   FaClipboardList,
// //   FaCode,
// //   FaBolt,
// // } from "react-icons/fa";
// // import banner from "../../assets/services/sr11.png";
// // import AnimatedText from "../../components/common/AnimatedText";
// // import ServicesSection from "../../components/common/ServicesSection";
// // import sapBanner from "../../assets/banners/sap_bg.png";
// // import sapBenfit from "../../assets/banners/sap_benfits.png";
// // import ApproachSection from "../../components/common/ApproachSection";

// // // ==================== BRAND COLORS (NAVY + GOLD) ====================
// // const BRAND = {
// //   navy: {
// //     dark: "#0B1D33",
// //     mid: "#0D2847",
// //     light: "#143A63",
// //     lighter: "#1A4570",
// //   },
// //   gold: {
// //     primary: "#FFF",
// //     light: "#FFD54F",
// //     gradient: "linear-gradient(135deg, #FFF 0%, #FFC107 50%, #FFD54F 100%)",
// //   },
// // };

// // // ==================== ANIMATION CONFIG ====================
// // const ANIMATION = {
// //   stagger: 0.12,
// //   duration: 0.6,
// //   spring: { type: "spring", stiffness: 300, damping: 25 },
// // };

// // const projectServices = [
// //   {
// //     title: "Design",
// //     icon: FaPencilRuler,
// //     description:
// //       "Business process design, solution architecture, blueprinting, and transformation planning.",
// //     color: "#3B82F6",
// //   },
// //   {
// //     title: "Build",
// //     icon: FaCode,
// //     description:
// //       "Configuration, custom development, integrations, extensions, and quality assurance.",
// //     color: "#F59E0B",
// //   },
// //   {
// //     title: "Implementation",
// //     icon: FaCogs,
// //     description:
// //       "End-to-End SAP implementation using SAP Activate methodology and best practices.",
// //     color: "#10B981",
// //   },
// //   {
// //     title: "Rollout",
// //     icon: FaRocket,
// //     description:
// //       "Global deployments, data migration, localization, and go-live support.",
// //     color: "#8B5CF6",
// //   },
// //   {
// //     title: "Support",
// //     icon: FaHeadset,
// //     description:
// //       "Application management, continuous optimization, monitoring, and enhancement services.",
// //     color: BRAND.gold.primary,
// //   },
// // ];

// // const sapServicesData = [
// //   {
// //     id: 5,
// //     name: "Application Management Services",
// //     status: "24/7 Support",
// //     desc: "24/7 monitoring, support, and continuous improvement of enterprise SAP applications.",
// //     icon: FaTools,
// //     path: "/services/app-maintenance",
// //     features: [
// //       "Application Monitoring",
// //       "Incident Management",
// //       "Performance Optimization",
// //       "Release Management",
// //     ],
// //   },
// //   {
// //     id: 6,
// //     name: "Data Migration & Transformation",
// //     status: "SAP HANA",
// //     desc: "Seamless migration from legacy systems to SAP HANA and S/4HANA environments.",
// //     icon: FaDatabase,
// //     path: "/services/data-migration",
// //     features: [
// //       "SAP HANA Migration",
// //       "Legacy Data Conversion",
// //       "Data Validation",
// //       "System Consolidation",
// //     ],
// //   },
// //   {
// //     id: 7,
// //     name: "SAP Talent & Staff Augmentation",
// //     status: "On Demand",
// //     desc: "Access certified SAP consultants, architects, developers, and project managers.",
// //     icon: FaUserTie,
// //     path: "/services/staff-augmentation",
// //     features: [
// //       "SAP Functional Experts",
// //       "SAP Technical Consultants",
// //       "Project Managers",
// //       "Flexible Engagement",
// //     ],
// //   },
// //   {
// //     id: 8,
// //     name: "Code Quality & Security",
// //     status: "Enterprise Grade",
// //     desc: "Secure, compliant, and high-quality SAP solutions with continuous validation.",
// //     icon: FaShieldAlt,
// //     path: "/services/code-quality-security",
// //     features: [
// //       "Code Reviews",
// //       "Security Assessments",
// //       "Compliance Validation",
// //       "Risk Management",
// //     ],
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
// //     subtitle: "Business Assessment",
// //     description:
// //       "Understand business requirements, evaluate available SAP solutions, and define the project scope and transformation objectives.",
// //     color: "#3B82F6",
// //   },
// //   {
// //     step: 2,
// //     icon: FaClipboardList,
// //     title: "Prepare",
// //     subtitle: "Project Preparation",
// //     description:
// //       "Establish the project team, create the implementation plan, and set up the systems and project governance framework.",
// //     color: "#06B6D4",
// //   },
// //   {
// //     step: 3,
// //     icon: FaPencilRuler,
// //     title: "Explore",
// //     subtitle: "Solution Design",
// //     description:
// //       "Conduct fit-to-standard workshops, analyze business processes, identify integrations, and define custom requirements.",
// //     color: "#F59E0B",
// //   },
// //   {
// //     step: 4,
// //     icon: FaCode,
// //     title: "Realize",
// //     subtitle: "Build & Validation",
// //     description:
// //       "Configure and develop the solution, perform testing activities, and validate the system to ensure business readiness.",
// //     color: "#10B981",
// //   },
// //   {
// //     step: 5,
// //     icon: FaRocket,
// //     title: "Deploy",
// //     subtitle: "Go-Live Execution",
// //     description:
// //       "Execute data migration, deploy the solution to production, and successfully transition to the live environment.",
// //     color: "#EF4444",
// //   },
// //   {
// //     step: 6,
// //     icon: FaHeadset,
// //     title: "Run",
// //     subtitle: "Continuous Support",
// //     description:
// //       "Provide ongoing support, monitor system performance, optimize processes, and assist end users for long-term success.",
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

// // const ProjectServicesSection = () => {
// //   // Single flow color
// //   const FLOW = {
// //     main: "#0B1D33",
// //     mid: "#143A63",
// //     light: "#1E5090",
// //     soft: "rgba(11,29,51,0.08)",
// //     softer: "rgba(11,29,51,0.04)",
// //     line: "rgba(11,29,51,0.15)",
// //     dot: "#143A63",
// //     glow: "rgba(20,58,99,0.25)",
// //   };

// //   const [hoveredIdx, setHoveredIdx] = useState(null);

// //   return (
// //     <section className="py-10 lg:py-14 bg-white overflow-hidden relative">
// //       <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
// //         {/* ── Header ── */}
// //         <motion.header
// //           initial={{ opacity: 0, y: 25 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// //           className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
// //         >
// //           <span
// //             className="inline-block px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-6"
// //             style={{
// //               background: FLOW.softer,
// //               color: FLOW.mid,
// //               border: `1px solid ${FLOW.soft}`,
// //             }}
// //           >
// //             Project Services
// //           </span>

// //           <h2
// //             className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
// //             style={{ color: FLOW.main }}
// //           >
// //             End-to-End Delivery Capabilities
// //           </h2>

// //           <p className="text-base lg:text-lg text-slate-500 leading-relaxed">
// //             From strategy and design to rollout and long-term support, we
// //             deliver complete SAP transformation services.
// //           </p>
// //         </motion.header>

// //         {/* ═══════════════════════════════════════════════
// //             DESKTOP: Horizontal flow
// //         ═══════════════════════════════════════════════ */}
// //         <div className="hidden lg:flex items-start justify-center">
// //           {projectServices.map((item, index) => (
// //             <React.Fragment key={item.title}>
// //               {/* Circle */}
// //               <div
// //                 className="flex-shrink-0 flex flex-col items-center text-center"
// //                 style={{ width: "160px" }}
// //               >
// //                 <motion.div
// //                   initial={{ opacity: 0, y: 50 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{
// //                     delay: index * 0.12,
// //                     duration: 0.6,
// //                     ease: [0.22, 1, 0.36, 1],
// //                   }}
// //                   onMouseEnter={() => setHoveredIdx(index)}
// //                   onMouseLeave={() => setHoveredIdx(null)}
// //                   whileHover={{ scale: 1.08, y: -8 }}
// //                   className="relative mb-5 cursor-pointer"
// //                 >
// //                   {/* Pulse ring on hover */}
// //                   {hoveredIdx === index && (
// //                     <motion.div
// //                       initial={{ scale: 1, opacity: 0.4 }}
// //                       animate={{ scale: 1.5, opacity: 0 }}
// //                       transition={{ duration: 1.2, repeat: Infinity }}
// //                       className="absolute inset-0 rounded-full"
// //                       style={{ border: `2px solid ${FLOW.mid}` }}
// //                     />
// //                   )}

// //                   {/* Outer glow on hover */}
// //                   <div
// //                     className="absolute -inset-4 rounded-full blur-xl transition-opacity duration-500"
// //                     style={{
// //                       background: FLOW.mid,
// //                       opacity: hoveredIdx === index ? 0.12 : 0,
// //                     }}
// //                   />

// //                   {/* Main circle */}
// //                   <div
// //                     className="w-[7.5rem] h-[7.5rem] rounded-full flex items-center justify-center relative z-10 transition-all duration-400"
// //                     style={{
// //                       background:
// //                         hoveredIdx === index
// //                           ? `linear-gradient(145deg, ${FLOW.main}, ${FLOW.mid})`
// //                           : `linear-gradient(145deg, ${FLOW.soft}, ${FLOW.softer})`,
// //                       border: `2.5px solid ${
// //                         hoveredIdx === index ? FLOW.main : FLOW.line
// //                       }`,
// //                       boxShadow:
// //                         hoveredIdx === index
// //                           ? `0 12px 40px ${FLOW.glow}, inset 0 -4px 12px rgba(0,0,0,0.08)`
// //                           : `0 8px 30px ${FLOW.softer}`,
// //                     }}
// //                   >
// //                     <item.icon
// //                       className="text-4xl transition-colors duration-300"
// //                       style={{
// //                         color: hoveredIdx === index ? "#ffffff" : FLOW.mid,
// //                       }}
// //                     />
// //                   </div>

// //                   {/* Step number badge — gold accent */}
// //                   <div
// //                     className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold z-20 transition-all duration-300"
// //                     style={{
// //                       background:
// //                         hoveredIdx === index
// //                           ? "#FFF"
// //                           : "rgba(253,185,19,0.12)",
// //                       color: hoveredIdx === index ? "#ffffff" : "#D4960A",
// //                       border: `1.5px solid ${
// //                         hoveredIdx === index
// //                           ? "#FFF"
// //                           : "rgba(253,185,19,0.25)"
// //                       }`,
// //                       boxShadow:
// //                         hoveredIdx === index
// //                           ? "0 4px 12px rgba(253,185,19,0.4)"
// //                           : "none",
// //                     }}
// //                   >
// //                     {index + 1}
// //                   </div>
// //                 </motion.div>

// //                 {/* Title */}
// //                 <motion.h3
// //                   initial={{ opacity: 0, y: 10 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{
// //                     delay: index * 0.12 + 0.15,
// //                     duration: 0.5,
// //                   }}
// //                   className="text-xl font-bold mb-2"
// //                   style={{ color: FLOW.main }}
// //                 >
// //                   {item.title}
// //                 </motion.h3>

// //                 {/* Description */}
// //                 <motion.p
// //                   initial={{ opacity: 0, y: 10 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{
// //                     delay: index * 0.12 + 0.25,
// //                     duration: 0.5,
// //                   }}
// //                   className="text-sm text-slate-500 leading-relaxed max-w-[180px]"
// //                 >
// //                   {item.description}
// //                 </motion.p>
// //               </div>

// //               {/* Connector */}
// //               {index < projectServices.length - 1 && (
// //                 <div
// //                   className="flex-1 flex items-center relative"
// //                   style={{ paddingTop: "118px" }}
// //                 >
// //                   {/* Base line */}
// //                   <div
// //                     className="absolute left-0 right-4 top-1/2 -translate-y-1/2 h-[2px] rounded-full"
// //                     style={{
// //                       background: `linear-gradient(90deg, ${FLOW.line}, ${FLOW.soft}, ${FLOW.line})`,
// //                     }}
// //                   />

// //                   {/* Animated dot 1 */}
// //                   <motion.div
// //                     animate={{ left: ["-2%", "92%"] }}
// //                     transition={{
// //                       duration: 2.2,
// //                       repeat: Infinity,
// //                       ease: "linear",
// //                       delay: index * 0.4,
// //                     }}
// //                     className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full z-10"
// //                     style={{
// //                       background: FLOW.dot,
// //                       boxShadow: `0 0 8px ${FLOW.glow}, 0 0 20px ${FLOW.soft}`,
// //                     }}
// //                   />

// //                   {/* Animated dot 2 */}
// //                   <motion.div
// //                     animate={{ left: ["-2%", "92%"] }}
// //                     transition={{
// //                       duration: 2.8,
// //                       repeat: Infinity,
// //                       ease: "linear",
// //                       delay: index * 0.4 + 0.8,
// //                     }}
// //                     className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full z-10"
// //                     style={{
// //                       background: FLOW.dot,
// //                       opacity: 0.5,
// //                       boxShadow: `0 0 6px ${FLOW.glow}`,
// //                     }}
// //                   />

// //                   {/* Animated dot 3 */}
// //                   <motion.div
// //                     animate={{ left: ["-2%", "92%"] }}
// //                     transition={{
// //                       duration: 3.5,
// //                       repeat: Infinity,
// //                       ease: "linear",
// //                       delay: index * 0.4 + 1.8,
// //                     }}
// //                     className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full z-10"
// //                     style={{ background: FLOW.dot, opacity: 0.3 }}
// //                   />

// //                   {/* Trailing glow */}
// //                   <motion.div
// //                     animate={{ left: ["-6%", "88%"] }}
// //                     transition={{
// //                       duration: 2.2,
// //                       repeat: Infinity,
// //                       ease: "linear",
// //                       delay: index * 0.4,
// //                     }}
// //                     className="absolute top-1/2 -translate-y-1/2 w-10 h-3 rounded-full z-0 blur-md"
// //                     style={{ background: FLOW.mid, opacity: 0.1 }}
// //                   />

// //                   {/* Arrow */}
// //                   <div
// //                     className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0"
// //                     style={{
// //                       borderTop: "5px solid transparent",
// //                       borderBottom: "5px solid transparent",
// //                       borderLeft: `7px solid ${FLOW.line}`,
// //                     }}
// //                   />
// //                 </div>
// //               )}
// //             </React.Fragment>
// //           ))}
// //         </div>

// //         {/* ═══════════════════════════════════════════════
// //             MOBILE: Vertical flow
// //         ═══════════════════════════════════════════════ */}
// //         <div className="lg:hidden flex flex-col items-center">
// //           {projectServices.map((item, index) => (
// //             <React.Fragment key={item.title}>
// //               <div className="flex flex-col items-center text-center">
// //                 <motion.div
// //                   initial={{ opacity: 0, y: 40 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: index * 0.1, duration: 0.5 }}
// //                   onMouseEnter={() => setHoveredIdx(index)}
// //                   onMouseLeave={() => setHoveredIdx(null)}
// //                   whileHover={{ scale: 1.06 }}
// //                   className="relative mb-4 cursor-pointer"
// //                 >
// //                   {/* Outer glow */}
// //                   <div
// //                     className="absolute -inset-3 rounded-full blur-lg transition-opacity duration-500"
// //                     style={{
// //                       background: FLOW.mid,
// //                       opacity: hoveredIdx === index ? 0.12 : 0,
// //                     }}
// //                   />

// //                   {/* Main circle */}
// //                   <div
// //                     className="w-24 h-24 rounded-full flex items-center justify-center relative z-10 transition-all duration-300"
// //                     style={{
// //                       background:
// //                         hoveredIdx === index
// //                           ? `linear-gradient(145deg, ${FLOW.main}, ${FLOW.mid})`
// //                           : `linear-gradient(145deg, ${FLOW.soft}, ${FLOW.softer})`,
// //                       border: `2px solid ${
// //                         hoveredIdx === index ? FLOW.main : FLOW.line
// //                       }`,
// //                       boxShadow:
// //                         hoveredIdx === index
// //                           ? `0 10px 30px ${FLOW.glow}`
// //                           : `0 6px 20px ${FLOW.softer}`,
// //                     }}
// //                   >
// //                     <item.icon
// //                       className="text-3xl transition-colors duration-300"
// //                       style={{
// //                         color: hoveredIdx === index ? "#ffffff" : FLOW.mid,
// //                       }}
// //                     />
// //                   </div>

// //                   {/* Step badge */}
// //                   <div
// //                     className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold z-20"
// //                     style={{
// //                       background:
// //                         hoveredIdx === index
// //                           ? "#FFF"
// //                           : "rgba(253,185,19,0.12)",
// //                       color: hoveredIdx === index ? "#ffffff" : "#D4960A",
// //                       border: `1.5px solid ${
// //                         hoveredIdx === index
// //                           ? "#FFF"
// //                           : "rgba(253,185,19,0.25)"
// //                       }`,
// //                     }}
// //                   >
// //                     {index + 1}
// //                   </div>
// //                 </motion.div>

// //                 <h3
// //                   className="text-lg font-bold mb-2"
// //                   style={{ color: FLOW.main }}
// //                 >
// //                   {item.title}
// //                 </h3>
// //                 <p className="text-sm text-slate-500 leading-relaxed max-w-[240px] mb-1">
// //                   {item.description}
// //                 </p>
// //               </div>

// //               {/* Vertical connector */}
// //               {index < projectServices.length - 1 && (
// //                 <div
// //                   className="flex justify-center relative"
// //                   style={{ height: "44px" }}
// //                 >
// //                   <div
// //                     className="absolute inset-x-1/2 top-0 bottom-4 w-[2px] -translate-x-1/2 rounded-full"
// //                     style={{
// //                       background: `linear-gradient(180deg, ${FLOW.line}, ${FLOW.soft}, ${FLOW.line})`,
// //                     }}
// //                   />

// //                   <motion.div
// //                     animate={{ top: ["-4%", "88%"] }}
// //                     transition={{
// //                       duration: 2,
// //                       repeat: Infinity,
// //                       ease: "linear",
// //                       delay: index * 0.3,
// //                     }}
// //                     className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full z-10"
// //                     style={{
// //                       background: FLOW.dot,
// //                       boxShadow: `0 0 8px ${FLOW.glow}, 0 0 18px ${FLOW.soft}`,
// //                     }}
// //                   />

// //                   <motion.div
// //                     animate={{ top: ["-8%", "84%"] }}
// //                     transition={{
// //                       duration: 2,
// //                       repeat: Infinity,
// //                       ease: "linear",
// //                       delay: index * 0.3,
// //                     }}
// //                     className="absolute left-1/2 -translate-x-1/2 w-6 h-3 rounded-full z-0 blur-md"
// //                     style={{ background: FLOW.mid, opacity: 0.08 }}
// //                   />

// //                   <div
// //                     className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0"
// //                     style={{
// //                       borderLeft: "5px solid transparent",
// //                       borderRight: "5px solid transparent",
// //                       borderTop: `7px solid ${FLOW.line}`,
// //                     }}
// //                   />
// //                 </div>
// //               )}
// //             </React.Fragment>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // const ServiceCard = ({ service, index }) => {
// //   const [isHovered, setIsHovered] = useState(false);
// //   const Icon = service.icon;

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 40 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true }}
// //       transition={{
// //         delay: index * 0.1,
// //         duration: 0.6,
// //       }}
// //       whileHover={{ y: -10 }}
// //       onMouseEnter={() => setIsHovered(true)}
// //       onMouseLeave={() => setIsHovered(false)}
// //       className="group h-full"
// //     >
// //       <motion.a href={service.path} whileHover={{ x: 5 }}>
// //         {" "}
// //         <div
// //           className="relative h-full rounded-3xl overflow-hidden border border-white/10 bg-primary-800 backdrop-blur-xl transition-all duration-500"
// //           style={{
// //             boxShadow: isHovered
// //               ? "0 25px 60px rgba(8,28,52,0.35)"
// //               : "0 10px 25px rgba(8,28,52,0.15)",
// //           }}
// //         >
// //           {/* Status Badge */}
// //           <div className="absolute top-5 right-5">
// //             <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FFF]/10 border border-[#FFF]/20 text-[#FFF]">
// //               {service.status}
// //             </span>
// //           </div>

// //           {/* Glow */}
// //           <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FFF]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />

// //           <div className="relative z-10 p-8">
// //             {/* Icon */}
// //             <motion.div
// //               whileHover={{ rotate: [0, -8, 8, 0] }}
// //               className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
// //               style={{
// //                 background: `${BRAND.navy.mid}08`,
// //                 border: "2px solid #FFF",
// //               }}
// //             >
// //               <Icon size={28} className="text-[#FFF]" />
// //             </motion.div>

// //             {/* Title */}
// //             <h3 className="text-2xl font-bold text-white mb-3">
// //               {service.name}
// //             </h3>

// //             {/* Description */}
// //             <p className="text-white/70 text-sm leading-relaxed mb-6">
// //               {service.desc}
// //             </p>

// //             {/* Features */}
// //             <div className="space-y-3 mb-8">
// //               {service.features.map((feature, idx) => (
// //                 <div
// //                   key={idx}
// //                   className="flex items-center gap-3 text-sm text-white/80"
// //                 >
// //                   <FaCheckCircle className="text-[#FFF] flex-shrink-0" />
// //                   <span>{feature}</span>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* CTA */}
// //             <motion.a
// //               href={service.path}
// //               whileHover={{ x: 5 }}
// //               className="inline-flex items-center gap-2 text-[#FFF] font-semibold"
// //             >
// //               Learn More
// //               <FaArrowRight size={14} />
// //             </motion.a>
// //           </div>
// //         </div>
// //       </motion.a>
// //     </motion.div>
// //   );
// // };

// // // const ProjectServicesSection = () => {
// // //   // Premium dark theme flow colors
// // //   const FLOW = {
// // //     main: "#ffffff",
// // //     mid: "#1E5090",
// // //     light: "#00A4FD",
// // //     gold: "#FFF",
// // //     dark: "#01182f",
// // //     darkCard: "rgba(255,255,255,0.03)",
// // //     darkBorder: "rgba(255,255,255,0.06)",
// // //     soft: "rgba(255,255,255,0.05)",
// // //     softer: "rgba(255,255,255,0.02)",
// // //     line: "rgba(255,255,255,0.08)",
// // //     dot: "#00A4FD",
// // //     glow: "rgba(0,164,253,0.15)",
// // //     goldGlow: "rgba(253,185,19,0.12)",
// // //   };

// // //   const [hoveredIdx, setHoveredIdx] = useState(null);

// // //   return (
// // //     <section
// // //       className="py-16 lg:py-24 overflow-hidden relative bg-black"
// // //       // style={{ background: FLOW.dark }}
// // //     >
// // //       {/* ── Background decorative elements ── */}
// // //       <div className="absolute inset-0 pointer-events-none">
// // //         <div
// // //           className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-10"
// // //           style={{ background: FLOW.mid }}
// // //         />
// // //         <div
// // //           className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-10"
// // //           style={{ background: FLOW.gold }}
// // //         />
// // //         <div
// // //           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.05]"
// // //           style={{ background: FLOW.mid }}
// // //         />
// // //         {/* Grid pattern */}
// // //         <div
// // //           className="absolute inset-0 opacity-[0.03]"
// // //           style={{
// // //             backgroundImage:
// // //               "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
// // //             backgroundSize: "32px 32px",
// // //           }}
// // //         />
// // //       </div>

// // //       <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
// // //         {/* ── Header ── */}
// // //         <motion.header
// // //           initial={{ opacity: 0, y: 25 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// // //           className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
// // //         >
// // //           <span
// // //             className="inline-block px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-6"
// // //             style={{
// // //               background: "rgba(253,185,19,0.08)",
// // //               color: FLOW.gold,
// // //               border: `1px solid rgba(253,185,19,0.15)`,
// // //             }}
// // //           >
// // //             Project Services
// // //           </span>

// // //           <h2
// // //             className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
// // //             style={{ color: FLOW.main }}
// // //           >
// // //             End-to-End <span>Delivery Capabilities</span>
// // //           </h2>

// // //           <p
// // //             className="text-base lg:text-lg leading-relaxed text-white"
// // //             // style={{ color: "rgba(255,255,255,0.4)" }}
// // //           >
// // //             From strategy and design to rollout and long-term support, we
// // //             deliver complete SAP transformation services.
// // //           </p>
// // //         </motion.header>

// // //         {/* ═══════════════════════════════════════════════
// // //             DESKTOP: Horizontal flow with dark theme
// // //         ═══════════════════════════════════════════════ */}
// // //         <div className="hidden lg:flex items-start justify-center">
// // //           {projectServices.map((item, index) => (
// // //             <React.Fragment key={item.title}>
// // //               {/* Circle */}
// // //               <div
// // //                 className="flex-shrink-0 flex flex-col items-center text-center"
// // //                 style={{ width: "160px" }}
// // //               >
// // //                 <motion.div
// // //                   initial={{ opacity: 0, y: 50 }}
// // //                   whileInView={{ opacity: 1, y: 0 }}
// // //                   viewport={{ once: true }}
// // //                   transition={{
// // //                     delay: index * 0.12,
// // //                     duration: 0.6,
// // //                     ease: [0.22, 1, 0.36, 1],
// // //                   }}
// // //                   onMouseEnter={() => setHoveredIdx(index)}
// // //                   onMouseLeave={() => setHoveredIdx(null)}
// // //                   whileHover={{ scale: 1.08, y: -8 }}
// // //                   className="relative mb-5 cursor-pointer"
// // //                 >
// // //                   {/* Pulse ring on hover - gold */}
// // //                   {hoveredIdx === index && (
// // //                     <motion.div
// // //                       initial={{ scale: 1, opacity: 0.6 }}
// // //                       animate={{ scale: 1.6, opacity: 0 }}
// // //                       transition={{ duration: 1.5, repeat: Infinity }}
// // //                       className="absolute inset-0 rounded-full"
// // //                       style={{ border: `2px solid ${FLOW.gold}` }}
// // //                     />
// // //                   )}

// // //                   {/* Outer glow on hover */}
// // //                   <div
// // //                     className="absolute -inset-4 rounded-full blur-xl transition-opacity duration-500"
// // //                     style={{
// // //                       background: FLOW.gold,
// // //                       opacity: hoveredIdx === index ? 0.12 : 0,
// // //                     }}
// // //                   />

// // //                   {/* Main circle - dark glass */}
// // //                   <div
// // //                     className="w-[7.5rem] h-[7.5rem] rounded-full flex items-center justify-center relative z-10 transition-all duration-400"
// // //                     style={{
// // //                       background:
// // //                         hoveredIdx === index
// // //                           ? `linear-gradient(145deg, ${FLOW.mid}, ${FLOW.dark})`
// // //                           : FLOW.darkCard,
// // //                       border: `2.5px solid ${
// // //                         hoveredIdx === index ? FLOW.gold : FLOW.darkBorder
// // //                       }`,
// // //                       boxShadow:
// // //                         hoveredIdx === index
// // //                           ? `0 12px 40px ${FLOW.glow}, 0 0 40px ${FLOW.goldGlow}, inset 0 -4px 12px rgba(0,0,0,0.4)`
// // //                           : `0 8px 30px rgba(0,0,0,0.3), inset 0 -4px 12px rgba(0,0,0,0.2)`,
// // //                       backdropFilter: "blur(12px)",
// // //                       WebkitBackdropFilter: "blur(12px)",
// // //                     }}
// // //                   >
// // //                     <item.icon
// // //                       className="text-4xl transition-colors duration-300"
// // //                       style={{
// // //                         color: hoveredIdx === index ? FLOW.gold : "white",
// // //                       }}
// // //                     />
// // //                   </div>

// // //                   {/* Step number badge — gold accent */}
// // //                   <div
// // //                     className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold z-20 transition-all duration-300"
// // //                     style={{
// // //                       background:
// // //                         hoveredIdx === index
// // //                           ? FLOW.gold
// // //                           : "rgba(253,185,19,0.12)",
// // //                       color: hoveredIdx === index ? FLOW.dark : FLOW.gold,
// // //                       border: `1.5px solid ${
// // //                         hoveredIdx === index
// // //                           ? FLOW.gold
// // //                           : "rgba(253,185,19,0.25)"
// // //                       }`,
// // //                       boxShadow:
// // //                         hoveredIdx === index
// // //                           ? "0 4px 12px rgba(253,185,19,0.4)"
// // //                           : "none",
// // //                     }}
// // //                   >
// // //                     {index + 1}
// // //                   </div>
// // //                 </motion.div>

// // //                 {/* Title */}
// // //                 <motion.h3
// // //                   initial={{ opacity: 0, y: 10 }}
// // //                   whileInView={{ opacity: 1, y: 0 }}
// // //                   viewport={{ once: true }}
// // //                   transition={{
// // //                     delay: index * 0.12 + 0.15,
// // //                     duration: 0.5,
// // //                   }}
// // //                   className="text-xl font-bold mb-2"
// // //                   style={{ color: FLOW.gold }}
// // //                 >
// // //                   {item.title}
// // //                 </motion.h3>

// // //                 {/* Description */}
// // //                 <motion.p
// // //                   initial={{ opacity: 0, y: 10 }}
// // //                   whileInView={{ opacity: 1, y: 0 }}
// // //                   viewport={{ once: true }}
// // //                   transition={{
// // //                     delay: index * 0.12 + 0.25,
// // //                     duration: 0.5,
// // //                   }}
// // //                   className="text-sm leading-relaxed max-w-[180px]"
// // //                   style={{ color: "white" }}
// // //                 >
// // //                   {item.description}
// // //                 </motion.p>
// // //               </div>

// // //               {/* Connector with dark theme */}
// // //               {index < projectServices.length - 1 && (
// // //                 <div
// // //                   className="flex-1 flex items-center relative"
// // //                   style={{ paddingTop: "118px" }}
// // //                 >
// // //                   {/* Base line */}
// // //                   <div
// // //                     className="absolute left-0 right-4 top-1/2 -translate-y-1/2 h-[2px] rounded-full"
// // //                     style={{
// // //                       background: `linear-gradient(90deg, ${FLOW.line}, ${FLOW.soft}, ${FLOW.line})`,
// // //                     }}
// // //                   />

// // //                   {/* Gold accent line on hover */}
// // //                   {hoveredIdx === index && (
// // //                     <div
// // //                       className="absolute left-0 right-4 top-1/2 -translate-y-1/2 h-[2px] rounded-full"
// // //                       style={{
// // //                         background: `linear-gradient(90deg, ${FLOW.gold}40, ${FLOW.gold}80, ${FLOW.gold}40)`,
// // //                         boxShadow: `0 0 20px ${FLOW.gold}30`,
// // //                       }}
// // //                     />
// // //                   )}

// // //                   {/* Animated dot 1 - gold */}
// // //                   <motion.div
// // //                     animate={{ left: ["0%", "92%"] }}
// // //                     transition={{
// // //                       duration: 2.5,
// // //                       repeat: Infinity,
// // //                       ease: "linear",
// // //                       delay: index * 0.3,
// // //                     }}
// // //                     className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full z-10"
// // //                     style={{
// // //                       background: FLOW.gold,
// // //                       boxShadow: `0 0 12px ${FLOW.gold}60, 0 0 30px ${FLOW.gold}30`,
// // //                       left: "0%",
// // //                     }}
// // //                   />

// // //                   {/* Animated dot 2 - blue */}
// // //                   <motion.div
// // //                     animate={{ left: ["0%", "92%"] }}
// // //                     transition={{
// // //                       duration: 3.2,
// // //                       repeat: Infinity,
// // //                       ease: "linear",
// // //                       delay: index * 0.3 + 1.0,
// // //                     }}
// // //                     className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full z-10"
// // //                     style={{
// // //                       background: FLOW.light,
// // //                       opacity: 0.5,
// // //                       boxShadow: `0 0 8px ${FLOW.glow}`,
// // //                       left: "0%",
// // //                     }}
// // //                   />

// // //                   {/* Animated dot 3 - tiny */}
// // //                   <motion.div
// // //                     animate={{ left: ["0%", "92%"] }}
// // //                     transition={{
// // //                       duration: 4.0,
// // //                       repeat: Infinity,
// // //                       ease: "linear",
// // //                       delay: index * 0.3 + 2.0,
// // //                     }}
// // //                     className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full z-10"
// // //                     style={{
// // //                       background: "rgba(255,255,255,0.3)",
// // //                       opacity: 0.3,
// // //                       left: "0%",
// // //                     }}
// // //                   />

// // //                   {/* Trailing glow */}
// // //                   <motion.div
// // //                     animate={{ left: ["-2%", "88%"] }}
// // //                     transition={{
// // //                       duration: 2.5,
// // //                       repeat: Infinity,
// // //                       ease: "linear",
// // //                       delay: index * 0.3,
// // //                     }}
// // //                     className="absolute top-1/2 -translate-y-1/2 w-12 h-4 rounded-full z-0 blur-md"
// // //                     style={{
// // //                       background: hoveredIdx === index ? FLOW.gold : FLOW.mid,
// // //                       opacity: hoveredIdx === index ? 0.15 : 0.08,
// // //                       left: "-2%",
// // //                     }}
// // //                   />

// // //                   {/* Arrow */}
// // //                   <div
// // //                     className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 z-10"
// // //                     style={{
// // //                       borderTop: "5px solid transparent",
// // //                       borderBottom: "5px solid transparent",
// // //                       borderLeft: `7px solid ${hoveredIdx === index ? FLOW.gold : FLOW.line}`,
// // //                       transition: "border-left-color 0.3s ease",
// // //                     }}
// // //                   />

// // //                   {/* Dotted progress on hover */}
// // //                   {hoveredIdx === index && (
// // //                     <div
// // //                       className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px]"
// // //                       style={{
// // //                         background: `repeating-linear-gradient(90deg, ${FLOW.gold}40, ${FLOW.gold}40 4px, transparent 4px, transparent 8px)`,
// // //                       }}
// // //                     />
// // //                   )}
// // //                 </div>
// // //               )}
// // //             </React.Fragment>
// // //           ))}
// // //         </div>

// // //         {/* ═══════════════════════════════════════════════
// // //             MOBILE: Vertical flow with dark theme
// // //         ═══════════════════════════════════════════════ */}
// // //         <div className="lg:hidden flex flex-col items-center">
// // //           {projectServices.map((item, index) => (
// // //             <React.Fragment key={item.title}>
// // //               <div className="flex flex-col items-center text-center">
// // //                 <motion.div
// // //                   initial={{ opacity: 0, y: 40 }}
// // //                   whileInView={{ opacity: 1, y: 0 }}
// // //                   viewport={{ once: true }}
// // //                   transition={{ delay: index * 0.1, duration: 0.5 }}
// // //                   onMouseEnter={() => setHoveredIdx(index)}
// // //                   onMouseLeave={() => setHoveredIdx(null)}
// // //                   whileHover={{ scale: 1.06 }}
// // //                   className="relative mb-4 cursor-pointer"
// // //                 >
// // //                   {/* Pulse ring on hover */}
// // //                   {hoveredIdx === index && (
// // //                     <motion.div
// // //                       initial={{ scale: 1, opacity: 0.6 }}
// // //                       animate={{ scale: 1.6, opacity: 0 }}
// // //                       transition={{ duration: 1.5, repeat: Infinity }}
// // //                       className="absolute inset-0 rounded-full"
// // //                       style={{ border: `2px solid ${FLOW.gold}` }}
// // //                     />
// // //                   )}

// // //                   {/* Outer glow */}
// // //                   <div
// // //                     className="absolute -inset-3 rounded-full blur-lg transition-opacity duration-500"
// // //                     style={{
// // //                       background: FLOW.gold,
// // //                       opacity: hoveredIdx === index ? 0.12 : 0,
// // //                     }}
// // //                   />

// // //                   {/* Main circle - dark glass */}
// // //                   <div
// // //                     className="w-24 h-24 rounded-full flex items-center justify-center relative z-10 transition-all duration-300"
// // //                     style={{
// // //                       background:
// // //                         hoveredIdx === index
// // //                           ? `linear-gradient(145deg, ${FLOW.mid}, ${FLOW.dark})`
// // //                           : FLOW.darkCard,
// // //                       border: `2px solid ${
// // //                         hoveredIdx === index ? FLOW.gold : FLOW.darkBorder
// // //                       }`,
// // //                       boxShadow:
// // //                         hoveredIdx === index
// // //                           ? `0 10px 30px ${FLOW.glow}, 0 0 30px ${FLOW.goldGlow}`
// // //                           : `0 6px 20px rgba(0,0,0,0.3)`,
// // //                       backdropFilter: "blur(12px)",
// // //                       WebkitBackdropFilter: "blur(12px)",
// // //                     }}
// // //                   >
// // //                     <item.icon
// // //                       className="text-3xl transition-colors duration-300"
// // //                       style={{
// // //                         color:
// // //                           hoveredIdx === index
// // //                             ? FLOW.gold
// // //                             : "rgba(255,255,255,0.5)",
// // //                       }}
// // //                     />
// // //                   </div>

// // //                   {/* Step badge */}
// // //                   <div
// // //                     className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold z-20 transition-all duration-300"
// // //                     style={{
// // //                       background:
// // //                         hoveredIdx === index
// // //                           ? FLOW.gold
// // //                           : "rgba(253,185,19,0.12)",
// // //                       color: hoveredIdx === index ? FLOW.dark : FLOW.gold,
// // //                       border: `1.5px solid ${
// // //                         hoveredIdx === index
// // //                           ? FLOW.gold
// // //                           : "rgba(253,185,19,0.25)"
// // //                       }`,
// // //                       boxShadow:
// // //                         hoveredIdx === index
// // //                           ? "0 4px 12px rgba(253,185,19,0.4)"
// // //                           : "none",
// // //                     }}
// // //                   >
// // //                     {index + 1}
// // //                   </div>
// // //                 </motion.div>

// // //                 <h3
// // //                   className="text-lg font-bold mb-2"
// // //                   style={{ color: FLOW.main }}
// // //                 >
// // //                   {item.title}
// // //                 </h3>
// // //                 <p
// // //                   className="text-sm leading-relaxed max-w-[240px] mb-1"
// // //                   style={{ color: "rgba(255,255,255,0.4)" }}
// // //                 >
// // //                   {item.description}
// // //                 </p>
// // //               </div>

// // //               {/* Vertical connector with dark theme */}
// // //               {index < projectServices.length - 1 && (
// // //                 <div
// // //                   className="flex justify-center relative"
// // //                   style={{ height: "50px" }}
// // //                 >
// // //                   {/* Base line - centered */}
// // //                   <div
// // //                     className="absolute inset-x-1/2 top-0 bottom-4 w-[2px] -translate-x-1/2 rounded-full"
// // //                     style={{
// // //                       background: `linear-gradient(180deg, ${FLOW.line}, ${FLOW.soft}, ${FLOW.line})`,
// // //                     }}
// // //                   />

// // //                   {/* Gold accent on hover */}
// // //                   {hoveredIdx === index && (
// // //                     <div
// // //                       className="absolute inset-x-1/2 top-0 bottom-4 w-[2px] -translate-x-1/2 rounded-full"
// // //                       style={{
// // //                         background: `linear-gradient(180deg, ${FLOW.gold}40, ${FLOW.gold}80, ${FLOW.gold}40)`,
// // //                         boxShadow: `0 0 20px ${FLOW.gold}30`,
// // //                       }}
// // //                     />
// // //                   )}

// // //                   {/* Animated dot 1 - gold */}
// // //                   <motion.div
// // //                     animate={{ top: ["0%", "88%"] }}
// // //                     transition={{
// // //                       duration: 2.5,
// // //                       repeat: Infinity,
// // //                       ease: "linear",
// // //                       delay: index * 0.3,
// // //                     }}
// // //                     className="absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full z-10"
// // //                     style={{
// // //                       background: FLOW.gold,
// // //                       boxShadow: `0 0 12px ${FLOW.gold}60, 0 0 30px ${FLOW.gold}30`,
// // //                       top: "0%",
// // //                     }}
// // //                   />

// // //                   {/* Animated dot 2 - blue */}
// // //                   <motion.div
// // //                     animate={{ top: ["0%", "88%"] }}
// // //                     transition={{
// // //                       duration: 3.2,
// // //                       repeat: Infinity,
// // //                       ease: "linear",
// // //                       delay: index * 0.3 + 1.0,
// // //                     }}
// // //                     className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full z-10"
// // //                     style={{
// // //                       background: FLOW.light,
// // //                       opacity: 0.5,
// // //                       boxShadow: `0 0 8px ${FLOW.glow}`,
// // //                       top: "0%",
// // //                     }}
// // //                   />

// // //                   {/* Animated dot 3 - tiny */}
// // //                   <motion.div
// // //                     animate={{ top: ["0%", "88%"] }}
// // //                     transition={{
// // //                       duration: 4.0,
// // //                       repeat: Infinity,
// // //                       ease: "linear",
// // //                       delay: index * 0.3 + 2.0,
// // //                     }}
// // //                     className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full z-10"
// // //                     style={{
// // //                       background: "rgba(255,255,255,0.3)",
// // //                       opacity: 0.25,
// // //                       top: "0%",
// // //                     }}
// // //                   />

// // //                   {/* Glow trail */}
// // //                   <motion.div
// // //                     animate={{ top: ["-2%", "84%"] }}
// // //                     transition={{
// // //                       duration: 2.5,
// // //                       repeat: Infinity,
// // //                       ease: "linear",
// // //                       delay: index * 0.3,
// // //                     }}
// // //                     className="absolute left-1/2 -translate-x-1/2 w-4 h-12 rounded-full z-0 blur-md"
// // //                     style={{
// // //                       background: hoveredIdx === index ? FLOW.gold : FLOW.mid,
// // //                       opacity: hoveredIdx === index ? 0.15 : 0.08,
// // //                       top: "-2%",
// // //                     }}
// // //                   />

// // //                   {/* Arrow indicator */}
// // //                   <div
// // //                     className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 z-10"
// // //                     style={{
// // //                       borderLeft: "5px solid transparent",
// // //                       borderRight: "5px solid transparent",
// // //                       borderTop: `7px solid ${hoveredIdx === index ? FLOW.gold : FLOW.line}`,
// // //                       transition: "border-top-color 0.3s ease",
// // //                     }}
// // //                   />

// // //                   {/* Dotted progress on hover */}
// // //                   {hoveredIdx === index && (
// // //                     <div
// // //                       className="absolute inset-x-1/2 top-0 bottom-4 w-[2px] -translate-x-1/2"
// // //                       style={{
// // //                         background: `repeating-linear-gradient(180deg, ${FLOW.gold}40, ${FLOW.gold}40 4px, transparent 4px, transparent 8px)`,
// // //                       }}
// // //                     />
// // //                   )}
// // //                 </div>
// // //               )}
// // //             </React.Fragment>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // const BenefitCard = ({ benefit, index }) => (
// //   <motion.div
// //     initial={{ opacity: 0, y: 30 }}
// //     whileInView={{ opacity: 1, y: 0 }}
// //     viewport={{ once: true }}
// //     transition={{
// //       delay: 0.4 + index * 0.1,
// //       duration: 0.6,
// //       ease: [0.22, 1, 0.36, 1],
// //     }}
// //     whileHover={{ y: -4 }}
// //     className="group cursor-pointer"
// //   >
// //     <div
// //       className="relative p-5 rounded-xl overflow-hidden transition-all duration-500"
// //       style={{
// //         background: "rgba(255,255,255,0.75)",
// //         backdropFilter: "blur(12px)",
// //         border: "1px solid rgba(10,37,64,0.06)",
// //         boxShadow: "0 1px 3px rgba(10,37,64,0.04)",
// //       }}
// //       onMouseEnter={(e) => {
// //         e.currentTarget.style.background = "rgba(255,255,255,0.95)";
// //         e.currentTarget.style.borderColor = "rgba(253,185,19,0.22)";
// //         e.currentTarget.style.boxShadow =
// //           "0 20px 50px -12px rgba(10,37,64,0.1), 0 0 0 1px rgba(253,185,19,0.08), 0 8px 20px -8px rgba(253,185,19,0.05)";
// //       }}
// //       onMouseLeave={(e) => {
// //         e.currentTarget.style.background = "rgba(255,255,255,0.75)";
// //         e.currentTarget.style.borderColor = "rgba(10,37,64,0.06)";
// //         e.currentTarget.style.boxShadow = "0 1px 3px rgba(10,37,64,0.04)";
// //       }}
// //     >
// //       {/* Gold accent line top */}
// //       <div
// //         className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
// //         style={{
// //           background:
// //             "linear-gradient(to right, transparent, rgba(253,185,19,0.45), transparent)",
// //         }}
// //       />

// //       {/* Gold glow corner */}
// //       <div
// //         className="absolute top-0 right-0 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
// //         style={{
// //           background:
// //             "radial-gradient(circle, rgba(253,185,19,0.06), transparent 70%)",
// //         }}
// //       />

// //       <div className="relative z-10 flex items-start gap-3.5">
// //         {/* Icon */}
// //         <motion.div
// //           className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
// //           style={{
// //             background: "rgba(0,164,253,0.08)",
// //             border: "1px solid rgba(0,164,253,0.12)",
// //           }}
// //           whileHover={{ rotate: [0, -8, 8, 0] }}
// //           transition={{ duration: 0.5 }}
// //         >
// //           <benefit.icon className="text-[17px]" style={{ color: "#01182f" }} />
// //         </motion.div>

// //         {/* Content */}
// //         <div className="min-w-0">
// //           <h4
// //             className="font-bold text-[14px] mb-1.5 leading-snug"
// //             style={{ color: "#0A2540" }}
// //           >
// //             {benefit.title}
// //           </h4>
// //           <p
// //             className="text-[12.5px] leading-relaxed min-h-[42px]"
// //             style={{ color: "#475569" }}
// //           >
// //             {benefit.description}
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   </motion.div>
// // );

// // const BenefitsSection = () => (
// //   <section
// //     className="py-20 lg:py-16 relative overflow-hidden"
// //     style={{ background: "#F8FAFC" }}
// //   >
// //     {/* ── Background Effects ── */}
// //     <div className="absolute inset-0 pointer-events-none">
// //       <div
// //         className="absolute inset-0 opacity-[0.025]"
// //         style={{
// //           backgroundImage:
// //             "radial-gradient(circle at 1px 1px, #0A2540 1px, transparent 0)",
// //           backgroundSize: "24px 24px",
// //         }}
// //       />
// //       <div
// //         className="absolute top-[15%] right-[-8%] w-[500px] h-[500px] rounded-full"
// //         style={{
// //           background:
// //             "radial-gradient(circle, rgba(0,164,253,0.04) 0%, transparent 70%)",
// //           filter: "blur(80px)",
// //         }}
// //       />
// //       <div
// //         className="absolute bottom-[5%] left-[-5%] w-[400px] h-[400px] rounded-full"
// //         style={{
// //           background:
// //             "radial-gradient(circle, rgba(253,185,19,0.03) 0%, transparent 70%)",
// //           filter: "blur(60px)",
// //         }}
// //       />
// //     </div>

// //     <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
// //       <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
// //         {/* ══════════════════════════════════════
// //             LEFT — Premium Image
// //         ══════════════════════════════════════ */}
// //         <motion.div
// //           initial={{ opacity: 0, x: -50 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
// //           className="relative order-2 lg:order-1"
// //         >
// //           {/* Floating glow behind image */}
// //           <div
// //             className="absolute -inset-6 rounded-[36px] opacity-50 pointer-events-none"
// //             style={{
// //               background:
// //                 "radial-gradient(ellipse at 50% 50%, rgba(0,164,253,0.07) 0%, transparent 65%)",
// //               filter: "blur(40px)",
// //             }}
// //           />

// //           {/* Image Container */}
// //           <div
// //             className="group relative rounded-3xl overflow-hidden aspect-[4/3]"
// //             style={{
// //               border: "1px solid rgba(10,37,64,0.08)",
// //               boxShadow:
// //                 "0 25px 60px -12px rgba(10,37,64,0.15), 0 12px 28px -8px rgba(10,37,64,0.08)",
// //             }}
// //           >
// //             <img
// //               src={sapBenfit}
// //               alt="Premium SAP Enterprise Headquarters"
// //               loading="lazy"
// //               className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
// //             />

// //             {/* Blue-tinted color grade */}
// //             <div
// //               className="absolute inset-0 pointer-events-none"
// //               style={{
// //                 background:
// //                   "linear-gradient(160deg, rgba(10,37,64,0.18) 0%, rgba(0,100,200,0.06) 45%, rgba(253,185,19,0.04) 100%)",
// //               }}
// //             />

// //             {/* Glass reflection — diagonal light strip */}
// //             <div
// //               className="absolute inset-0 pointer-events-none"
// //               style={{
// //                 background:
// //                   "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 22%, transparent 42%, transparent 62%, rgba(255,255,255,0.015) 82%, rgba(255,255,255,0.06) 100%)",
// //               }}
// //             />

// //             {/* Bottom vignette for badge readability */}
// //             <div
// //               className="absolute bottom-0 left-0 right-0 h-2/5 pointer-events-none"
// //               style={{
// //                 background:
// //                   "linear-gradient(to top, rgba(10,37,64,0.35) 0%, transparent 100%)",
// //               }}
// //             />

// //             {/* Subtle inner border highlight */}
// //             <div
// //               className="absolute inset-0 rounded-3xl pointer-events-none"
// //               style={{
// //                 border: "1px solid rgba(255,255,255,0.08)",
// //               }}
// //             />
// //           </div>
// //         </motion.div>

// //         {/* ══════════════════════════════════════
// //             RIGHT — Content
// //         ══════════════════════════════════════ */}
// //         <motion.div
// //           initial={{ opacity: 0, x: 50 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           viewport={{ once: true }}
// //           transition={{
// //             duration: 0.8,
// //             delay: 0.15,
// //             ease: [0.22, 1, 0.36, 1],
// //           }}
// //           className="order-1 lg:order-2"
// //         >
// //           {/* Heading */}
// //           <h2
// //             className="text-3xl md:text-4xl lg:text-[42px] font-bold mb-6 leading-[1.12] tracking-tight"
// //             style={{ color: "#0A2540" }}
// //           >
// //             Why Choose <span style={{ color: "#FFF" }}>Innovise</span> for
// //             Your SAP Journey?
// //           </h2>

// //           {/* Description */}
// //           <p
// //             className="text-[15px] leading-[1.75] mb-10 max-w-lg"
// //             style={{ color: "#64748B" }}
// //           >
// //             Our SAP solutions deliver measurable business outcomes that
// //             transform how you operate, decide, and grow.
// //           </p>

// //           {/* Benefits 2×2 Grid */}
// //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
// //             {benefitsData.map((benefit, index) => (
// //               <BenefitCard key={index} benefit={benefit} index={index} />
// //             ))}
// //           </div>
// //         </motion.div>
// //       </div>
// //     </div>
// //   </section>
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
// //   <section className="relative min-h-[90vh] lg:min-h-screen overflow-hidden bg-[#070b23]">
// //     {/* ===== FIXED BACKGROUND IMAGE ===== */}
// //     <div
// //       className="absolute inset-0 bg-cover bg-center bg-no-repeat"
// //       style={{
// //         backgroundImage: `url(${sapBanner})`,
// //         // backgroundAttachment: "fixed",
// //       }}
// //       aria-hidden="true"
// //     />

// //     {/* ===== ANIMATED DECORATIVE ELEMENTS ===== */}
// //     <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
// //       {/* Dot Pattern — very subtle */}
// //       <div
// //         className="absolute inset-0 opacity-[0.025]"
// //         style={{
// //           backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
// //           backgroundSize: "32px 32px",
// //         }}
// //       />

// //       {/* Floating Orb — Gold, left side */}
// //       <motion.div
// //         animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
// //         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
// //         className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] rounded-full blur-3xl opacity-[0.07]"
// //         style={{ background: BRAND.gold.primary }}
// //       />

// //       {/* Floating Orb — Blue, right side over the image */}
// //       <motion.div
// //         animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
// //         transition={{
// //           duration: 12,
// //           repeat: Infinity,
// //           ease: "easeInOut",
// //           delay: 4,
// //         }}
// //         className="absolute top-[15%] right-[15%] w-[350px] h-[350px] rounded-full blur-3xl opacity-[0.06]"
// //         style={{ background: "#00A4FD" }}
// //       />
// //     </div>

// //     {/* ===== MAIN CONTENT ===== */}
// //     <div className="relative z-10 flex items-center min-h-[90vh] lg:min-h-screen">
// //       <div className="max-w-8xl mx-auto px-4 lg:px-8 w-full py-24 lg:py-0">
// //         <div className="max-w-4xl">
// //           {/* Badge */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //             className="inline-flex items-center gap-3 mb-8"
// //           >
// //             <div className="w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-sm bg-white/10 border border-white/20">
// //               <FaCogs className="text-lg text-accent-300" />
// //             </div>

// //             <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent-300">
// //               SAP Consulting & Implementation
// //             </span>
// //           </motion.div>
// //           {/* Heading */}
// //           <motion.h1
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.7, delay: 0.4 }}
// //             className="text-4xl md:text-5xl font-semibold text-white leading-[1.08] mb-7"
// //           >
// //             Transforming Enterprises with{" "}
// //             <span className="relative inline-block text-accent-300">
// //               Intelligent SAP Solutions
// //             </span>{" "}
// //           </motion.h1>

// //           {/* Subtitle */}
// //           <motion.p
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.7, delay: 0.6 }}
// //             className="text-lg md:text-xl text-white leading-relaxed mb-6 max-w-2xl"
// //           >
// //             At Innovise, we help organizations unlock the full potential of
// //             SAP by delivering End-to-End consulting, implementation, and
// //             optimization services powered by SAP S/4HANA.{" "}
// //           </motion.p>
// //           <motion.p
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.7, delay: 0.6 }}
// //             className="text-lg md:text-xl text-white leading-relaxed mb-6 max-w-2xl"
// //           >
// //             We combine deep domain expertise with proven methodologies to
// //             modernize legacy systems, streamline operations, and drive real-time
// //             business insights.
// //           </motion.p>
// //         </div>
// //       </div>
// //     </div>
// //   </section>
// // );

// // // Services Grid Section
// // // const ServicesSection = () => (
// // //   <section
// // //     id="services"
// // //     className="py-6 lg:py-10 bg-white relative overflow-hidden"
// // //   >
// // //     {/* Background Decoration */}
// // //     <div
// // //       className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.03] translate-x-1/3 -translate-y-1/3"
// // //       style={{ background: BRAND.navy.lighter }}
// // //     />

// // //     <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
// // //       {/* Section Header */}
// // //       <motion.header
// // //         initial={{ opacity: 0, y: 20 }}
// // //         whileInView={{ opacity: 1, y: 0 }}
// // //         viewport={{ once: true }}
// // //         className="text-center max-w-3xl mx-auto mb-16"
// // //       >
// // //         <span
// // //           className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
// // //           style={{
// // //             background: `${BRAND.navy.mid}08`,
// // //             color: BRAND.navy.dark,
// // //             border: `1px solid ${BRAND.navy.mid}15`,
// // //           }}
// // //         >
// // //           What We Deliver
// // //         </span>

// // //         <h2
// // //           className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
// // //           style={{ color: BRAND.navy.dark }}
// // //         >
// // //           Comprehensive SAP Services
// // //         </h2>

// // //         <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
// // //           End-to-End solutions designed to maximize your SAP investment and
// // //           accelerate digital transformation.
// // //         </p>
// // //       </motion.header>

// // //       {/* Services Grid - 2x2 or responsive */}
// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
// // //         {sapServicesData.map((service, index) => (
// // //           <ServiceCard key={service.id} service={service} index={index} />
// // //         ))}
// // //       </div>
// // //     </div>
// // //   </section>
// // // );

// // // Process/Approach Section (Stepper UI)
// // // const ApproachSection = () => {
// // //   const approachData = [
// // //     {
// // //       step: 1,
// // //       icon: FaSearch,
// // //       title: "Discover",
// // //       subtitle: "Business Assessment",
// // //       description:
// // //         "Understand business requirements, evaluate available SAP solutions, and define the project scope and transformation objectives.",
// // //       image:
// // //         "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
// // //     },
// // //     {
// // //       step: 2,
// // //       icon: FaClipboardList,
// // //       title: "Prepare",
// // //       subtitle: "Project Preparation",
// // //       description:
// // //         "Establish the project team, create the implementation plan, and set up the systems and project governance framework.",
// // //       image:
// // //         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
// // //     },
// // //     {
// // //       step: 3,
// // //       icon: FaPencilRuler,
// // //       title: "Explore",
// // //       subtitle: "Solution Design",
// // //       description:
// // //         "Conduct fit-to-standard workshops, analyze business processes, identify integrations, and define custom requirements.",
// // //       image:
// // //         "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
// // //     },
// // //     {
// // //       step: 4,
// // //       icon: FaCode,
// // //       title: "Realize",
// // //       subtitle: "Build & Validation",
// // //       description:
// // //         "Configure and develop the solution, perform testing activities, and validate the system to ensure business readiness.",
// // //       image:
// // //         "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
// // //     },
// // //     {
// // //       step: 5,
// // //       icon: FaRocket,
// // //       title: "Deploy",
// // //       subtitle: "Go-Live Execution",
// // //       description:
// // //         "Execute data migration, deploy the solution to production, and successfully transition to the live environment.",
// // //       image:
// // //         "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
// // //     },
// // //     {
// // //       step: 6,
// // //       icon: FaHeadset,
// // //       title: "Run",
// // //       subtitle: "Continuous Support",
// // //       description:
// // //         "Provide ongoing support, monitor system performance, optimize processes, and assist end users for long-term success.",
// // //       image:
// // //         "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
// // //     },
// // //   ];

// // //   return (
// // //     <section className="py-20 lg:py-28 bg-[#0a1628] relative overflow-hidden">
// // //       {/* ── Background Effects ── */}
// // //       <div
// // //         className="absolute inset-0 opacity-[0.015] pointer-events-none"
// // //         style={{
// // //           backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
// // //           backgroundSize: "36px 36px",
// // //         }}
// // //       />
// // //       <div
// // //         className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[150px] opacity-[0.04]"
// // //         style={{ background: "#FFF" }}
// // //       />
// // //       <div
// // //         className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[160px] opacity-[0.03]"
// // //         style={{ background: "#1E5090" }}
// // //       />

// // //       <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
// // //         {/* ── Header ── */}
// // //         <motion.header
// // //           initial={{ opacity: 0, y: 30 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// // //           className="text-center max-w-3xl mx-auto mb-14 lg:mb-20"
// // //         >
// // //           <span
// // //             className="inline-block px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-6 border"
// // //             style={{
// // //               background: "rgba(253,185,19,0.08)",
// // //               color: "#FFF",
// // //               borderColor: "rgba(253,185,19,0.18)",
// // //             }}
// // //           >
// // //             Our Approach
// // //           </span>

// // //           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-white leading-tight">
// // //             Proven{" "}
// // //             <span style={{ color: "#FFF" }}>Implementation Methodology</span>
// // //           </h2>

// // //           <p className="text-base lg:text-lg leading-relaxed text-white/45">
// // //             A structured approach ensuring successful SAP transformations every
// // //             time.
// // //           </p>
// // //         </motion.header>

// // //         {/* ═══════════════════════════════════════════════
// // //             DESKTOP: 3×2 Grid — image-heavy cards
// // //         ═══════════════════════════════════════════════ */}
// // //         <div className="hidden lg:grid grid-cols-3 gap-5 lg:gap-6">
// // //           {approachData.map((step, index) => (
// // //             <motion.div
// // //               key={step.step}
// // //               initial={{ opacity: 0, y: 50 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{
// // //                 delay: index * 0.1,
// // //                 duration: 0.7,
// // //                 ease: [0.22, 1, 0.36, 1],
// // //               }}
// // //               className="group"
// // //             >
// // //               <div
// // //                 className="relative h-full rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer"
// // //                 style={{
// // //                   background: "rgba(255,255,255,0.03)",
// // //                   border: "1px solid rgba(255,255,255,0.06)",
// // //                 }}
// // //                 onMouseEnter={(e) => {
// // //                   e.currentTarget.style.background = "rgba(255,255,255,0.05)";
// // //                   e.currentTarget.style.borderColor = "rgba(253,185,19,0.15)";
// // //                   e.currentTarget.style.boxShadow =
// // //                     "0 25px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(253,185,19,0.08)";
// // //                 }}
// // //                 onMouseLeave={(e) => {
// // //                   e.currentTarget.style.background = "rgba(255,255,255,0.03)";
// // //                   e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
// // //                   e.currentTarget.style.boxShadow = "none";
// // //                 }}
// // //               >
// // //                 {/* ── Image Area — ~65% height ── */}
// // //                 <div className="relative h-56 overflow-hidden">
// // //                   <img
// // //                     src={step.image}
// // //                     alt={step.title}
// // //                     loading="lazy"
// // //                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
// // //                   />

// // //                   {/* Bottom gradient fade into card */}
// // //                   <div
// // //                     className="absolute inset-0"
// // //                     style={{
// // //                       background:
// // //                         "linear-gradient(to bottom, rgba(10,22,40,0.1) 0%, rgba(10,22,40,0.5) 60%, rgba(10,22,40,0.95) 100%)",
// // //                     }}
// // //                   />

// // //                   {/* Step Number — bottom-left on image */}
// // //                   <div className="absolute bottom-4 left-5 flex items-end gap-3">
// // //                     <span
// // //                       className="text-5xl font-black leading-none"
// // //                       style={{ color: "rgba(253,185,19,0.2)" }}
// // //                     >
// // //                       0{step.step}
// // //                     </span>
// // //                     <div
// // //                       className="w-10 h-10 rounded-xl flex items-center justify-center mb-1 transition-all duration-400"
// // //                       style={{
// // //                         background: `${BRAND.navy.mid}08`,
// // //                         border: "2px solid #FFF",
// // //                         backdropFilter: "blur(8px)",
// // //                       }}
// // //                     >
// // //                       <step.icon
// // //                         className="text-base"
// // //                         style={{ color: "#FFF" }}
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* ── Text Area — clean, minimal ── */}
// // //                 <div className="px-5 pt-4 pb-6">
// // //                   <h4 className="text-lg font-bold text-white mb-1.5 leading-tight">
// // //                     {step.title}
// // //                   </h4>

// // //                   <p
// // //                     className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-3"
// // //                     style={{ color: "#FFF" }}
// // //                   >
// // //                     {step.subtitle}
// // //                   </p>

// // //                   <p className="text-[13px] leading-[1.75] text-white/45">
// // //                     {step.description}
// // //                   </p>
// // //                 </div>

// // //                 {/* Hover glow — top-right corner */}
// // //                 <div
// // //                   className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
// // //                   style={{ background: "rgba(253,185,19,0.05)" }}
// // //                 />
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>

// // //         {/* ═══════════════════════════════════════════════
// // //             MOBILE: Stacked cards
// // //         ═══════════════════════════════════════════════ */}
// // //         <div className="lg:hidden space-y-5">
// // //           {approachData.map((step, index) => (
// // //             <motion.div
// // //               key={step.step}
// // //               initial={{ opacity: 0, y: 40 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{ delay: index * 0.08, duration: 0.6 }}
// // //               className="group"
// // //             >
// // //               <div
// // //                 className="relative rounded-2xl overflow-hidden"
// // //                 style={{
// // //                   background: "rgba(255,255,255,0.03)",
// // //                   border: "1px solid rgba(255,255,255,0.06)",
// // //                 }}
// // //               >
// // //                 {/* Image */}
// // //                 <div className="relative h-48 overflow-hidden">
// // //                   <img
// // //                     src={step.image}
// // //                     alt={step.title}
// // //                     loading="lazy"
// // //                     className="w-full h-full object-cover"
// // //                   />
// // //                   <div
// // //                     className="absolute inset-0"
// // //                     style={{
// // //                       background:
// // //                         "linear-gradient(to bottom, rgba(10,22,40,0.1) 0%, rgba(10,22,40,0.55) 60%, rgba(10,22,40,0.95) 100%)",
// // //                     }}
// // //                   />

// // //                   {/* Step + Icon */}
// // //                   <div className="absolute bottom-4 left-5 flex items-end gap-3">
// // //                     <span
// // //                       className="text-4xl font-black leading-none"
// // //                       style={{ color: "rgba(253,185,19,0.2)" }}
// // //                     >
// // //                       0{step.step}
// // //                     </span>
// // //                     <div
// // //                       className="w-9 h-9 rounded-xl flex items-center justify-center mb-0.5"
// // //                       style={{
// // //                         background: `${BRAND.navy.mid}08`,
// // //                         border: "2px solid #FFF",
// // //                         backdropFilter: "blur(8px)",
// // //                       }}
// // //                     >
// // //                       <step.icon
// // //                         className="text-sm"
// // //                         style={{ color: "#FFF" }}
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* Text */}
// // //                 <div className="px-5 pt-4 pb-5">
// // //                   <h4 className="text-lg font-bold text-white mb-1">
// // //                     {step.title}
// // //                   </h4>
// // //                   <p
// // //                     className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-3"
// // //                     style={{ color: "#FFF" }}
// // //                   >
// // //                     {step.subtitle}
// // //                   </p>
// // //                   <p className="text-[13px] leading-[1.75] text-white/45">
// // //                     {step.description}
// // //                   </p>
// // //                 </div>
// // //               </div>

// // //               {/* Connector to next */}
// // //               {index < approachData.length - 1 && (
// // //                 <div className="flex justify-center py-1">
// // //                   <div
// // //                     className="w-px h-8"
// // //                     style={{
// // //                       background:
// // //                         "linear-gradient(to bottom, rgba(253,185,19,0.25), rgba(253,185,19,0.03))",
// // //                     }}
// // //                   />
// // //                 </div>
// // //               )}
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // Main SAP Page Component
// // const SAPConsultingPage = () => {
// //   return (
// //     <main role="main">
// //       <HeroSection />
// //       {/* <ServicesSection /> */}
// //       <ServicesSection />
// //       <ProjectServicesSection />
// //       <ApproachSection />
// //       <BenefitsSection />
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
//   FaStar,
//   FaUsers,
//   FaAward,
//   FaHandshake,
//   FaUserTie,
//   FaTools,
//   FaClipboardList,
//   FaCode,
// } from "react-icons/fa";
// import banner from "../../assets/services/sr11.png";
// import AnimatedText from "../../components/common/AnimatedText";

// // ==================== BRAND COLORS (NAVY + GOLD) ====================
// const BRAND = {
//   navy: {
//     dark: "#0B1D33",
//     mid: "#0D2847",
//     light: "#143A63",
//     lighter: "#1A4570",
//   },
//   gold: {
//     primary: "#FFF",
//     light: "#FFD54F",
//     gradient: "#0B1D33",
//   },
// };

// // ==================== ANIMATION CONFIG ====================
// const ANIMATION = {
//   stagger: 0.12,
//   duration: 0.6,
//   spring: { type: "spring", stiffness: 300, damping: 25 },
// };

// const projectServices = [
//   {
//     title: "Design",
//     icon: FaPencilRuler,
//     description:
//       "Business process design, solution architecture, blueprinting, and transformation planning.",
//     color: "#3B82F6",
//   },
//   {
//     title: "Build",
//     icon: FaCode,
//     description:
//       "Configuration, custom development, integrations, extensions, and quality assurance.",
//     color: "#F59E0B",
//   },
//   {
//     title: "Implementation",
//     icon: FaCogs,
//     description:
//       "End-to-End SAP implementation using SAP Activate methodology and best practices.",
//     color: "#10B981",
//   },
//   {
//     title: "Rollout",
//     icon: FaRocket,
//     description:
//       "Global deployments, data migration, localization, and go-live support.",
//     color: "#8B5CF6",
//   },
//   {
//     title: "Support",
//     icon: FaHeadset,
//     description:
//       "Application management, continuous optimization, monitoring, and enhancement services.",
//     color: BRAND.gold.primary,
//   },
// ];

// const sapServicesData = [
//   {
//     id: 5,
//     name: "Application Management Services",
//     status: "24/7 Support",
//     desc: "24/7 monitoring, support, and continuous improvement of enterprise SAP applications.",
//     icon: FaTools,
//     path: "/services/app-maintenance",
//     features: [
//       "Application Monitoring",
//       "Incident Management",
//       "Performance Optimization",
//       "Release Management",
//     ],
//   },
//   {
//     id: 6,
//     name: "Data Migration & Transformation",
//     status: "SAP HANA",
//     desc: "Seamless migration from legacy systems to SAP HANA and S/4HANA environments.",
//     icon: FaDatabase,
//     path: "/services/data-migration",
//     features: [
//       "SAP HANA Migration",
//       "Legacy Data Conversion",
//       "Data Validation",
//       "System Consolidation",
//     ],
//   },
//   {
//     id: 7,
//     name: "SAP Talent & Staff Augmentation",
//     status: "On Demand",
//     desc: "Access certified SAP consultants, architects, developers, and project managers.",
//     icon: FaUserTie,
//     path: "/services/staff-augmentation",
//     features: [
//       "SAP Functional Experts",
//       "SAP Technical Consultants",
//       "Project Managers",
//       "Flexible Engagement",
//     ],
//   },
//   {
//     id: 8,
//     name: "Code Quality & Security",
//     status: "Enterprise Grade",
//     desc: "Secure, compliant, and high-quality SAP solutions with continuous validation.",
//     icon: FaShieldAlt,
//     path: "/services/code-quality-security",
//     features: [
//       "Code Reviews",
//       "Security Assessments",
//       "Compliance Validation",
//       "Risk Management",
//     ],
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
//     subtitle: "Business Assessment",
//     description:
//       "Understand business requirements, evaluate available SAP solutions, and define the project scope and transformation objectives.",
//     color: "#3B82F6",
//   },
//   {
//     step: 2,
//     icon: FaClipboardList,
//     title: "Prepare",
//     subtitle: "Project Preparation",
//     description:
//       "Establish the project team, create the implementation plan, and set up the systems and project governance framework.",
//     color: "#06B6D4",
//   },
//   {
//     step: 3,
//     icon: FaPencilRuler,
//     title: "Explore",
//     subtitle: "Solution Design",
//     description:
//       "Conduct fit-to-standard workshops, analyze business processes, identify integrations, and define custom requirements.",
//     color: "#F59E0B",
//   },
//   {
//     step: 4,
//     icon: FaCode,
//     title: "Realize",
//     subtitle: "Build & Validation",
//     description:
//       "Configure and develop the solution, perform testing activities, and validate the system to ensure business readiness.",
//     color: "#10B981",
//   },
//   {
//     step: 5,
//     icon: FaRocket,
//     title: "Deploy",
//     subtitle: "Go-Live Execution",
//     description:
//       "Execute data migration, deploy the solution to production, and successfully transition to the live environment.",
//     color: "#EF4444",
//   },
//   {
//     step: 6,
//     icon: FaHeadset,
//     title: "Run",
//     subtitle: "Continuous Support",
//     description:
//       "Provide ongoing support, monitor system performance, optimize processes, and assist end users for long-term success.",
//     color: "#8B5CF6",
//   },
// ];

// // ==================== WHY CHOOSE US DATA ====================
// const whyChooseUsData = [
//   { icon: FaAward, text: "SAP Certified Consultants" },
//   { icon: FaUsers, text: "200+ Successful Implementations" },
//   { icon: FaShieldAlt, text: "Proven Methodologies" },
//   { icon: FaHandshake, text: "End-to-End Partnership" },
// ];

// const ProjectServicesSection = () => (
//   <section className="py-6 lg:py-10 bg-white overflow-hidden">
//     <div className="max-w-7xl mx-auto px-4 lg:px-8">
//       <motion.header
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center max-w-3xl mx-auto mb-20"
//       >
//         <span
//           className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
//           style={{
//             background: `${BRAND.navy.mid}08`,
//             color: BRAND.navy.dark,
//           }}
//         >
//           Project Services
//         </span>

//         <h2
//           className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
//           style={{ color: BRAND.navy.dark }}
//         >
//           End-to-End Delivery Capabilities
//         </h2>

//         <p className="text-lg text-slate-500">
//           From strategy and design to rollout and long-term support, we deliver
//           complete SAP transformation services.
//         </p>
//       </motion.header>

//       <div className="relative">
//         {/* Desktop Line */}
//         <div className="hidden lg:block absolute top-14 left-0 right-0 h-1 bg-slate-200 rounded-full" />

//         <div className="grid lg:grid-cols-5 gap-8">
//           {projectServices.map((item, index) => (
//             <motion.div
//               key={item.title}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="text-center relative"
//             >
//               {/* Icon */}
//               <div className="w-28 h-28 rounded-full mx-auto mb-6 flex items-center justify-center relative z-10 bg-primary-800">
//                 <item.icon className="text-4xl text-white" />
//               </div>

//               <h3
//                 className="text-xl font-bold mb-3"
//                 style={{ color: BRAND.navy.dark }}
//               >
//                 {item.title}
//               </h3>

//               <p className="text-sm text-slate-500 leading-relaxed">
//                 {item.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </section>
// );

// // ==================== COMPONENTS ====================

// const ServiceCard = ({ service, index }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const Icon = service.icon;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{
//         delay: index * 0.1,
//         duration: 0.6,
//       }}
//       whileHover={{ y: -10 }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className="group h-full"
//     >
//       <motion.a href={service.path} whileHover={{ x: 5 }}>
//         {" "}
//         <div
//           className="relative h-full rounded-3xl overflow-hidden border border-white/10 bg-primary-800 backdrop-blur-xl transition-all duration-500"
//           style={{
//             boxShadow: isHovered
//               ? "0 25px 60px rgba(8,28,52,0.35)"
//               : "0 10px 25px rgba(8,28,52,0.15)",
//           }}
//         >
//           {/* Status Badge */}
//           <div className="absolute top-5 right-5">
//             <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FFF]/10 border border-[#FFF]/20 text-[#FFF]">
//               {service.status}
//             </span>
//           </div>

//           {/* Glow */}
//           <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FFF]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />

//           <div className="relative z-10 p-8">
//             {/* Icon */}
//             <motion.div
//               className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
//               style={{
//                 background: `${BRAND.navy.mid}08`,
//                 border: "2px solid #FFF",
//               }}
//             >
//               <Icon size={28} className="text-[#FFF]" />
//             </motion.div>

//             {/* Title */}
//             <h3 className="text-2xl font-bold text-white mb-3">
//               {service.name}
//             </h3>

//             {/* Description */}
//             <p className="text-white/70 text-sm leading-relaxed mb-6">
//               {service.desc}
//             </p>

//             {/* Features */}
//             <div className="space-y-3 mb-8">
//               {service.features.map((feature, idx) => (
//                 <div
//                   key={idx}
//                   className="flex items-center gap-3 text-sm text-white/80"
//                 >
//                   <FaCheckCircle className="text-[#FFF] flex-shrink-0" />
//                   <span>{feature}</span>
//                 </div>
//               ))}
//             </div>

//             {/* CTA */}
//             <motion.a
//               href={service.path}
//               whileHover={{ x: 5 }}
//               className="inline-flex items-center gap-2 text-[#FFF] font-semibold"
//             >
//               Learn More
//               <FaArrowRight size={14} />
//             </motion.a>
//           </div>
//         </div>
//       </motion.a>
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
//       <h4
//         className="text-lg font-bold mb-1 transition-colors duration-300"
//         style={{ color: isHovered ? BRAND.navy.dark : BRAND.navy.dark }}
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
//         className="text-sm leading-relaxed max-w-xs mx-auto transition-colors duration-300"
//         style={{ color: isHovered ? BRAND.navy.dark : "#64748B" }}
//       >
//         {step.description}
//       </p>
//     </motion.div>
//   );
// };

// // ==================== SECTIONS ====================

// // Hero Section (Left Text + Right Visual)
// const HeroSection = () => (
//   <section
//     className="relative py-6 lg:py-10 overflow-hidden bg-primary-800"
//     // style={{
//     //   background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 60%, ${BRAND.navy.lighter} 100%)`,
//     // }}
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

//       {/* Floating Orbs */}
//       <motion.div
//         animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-16 right-20 w-[450px] h-[450px] rounded-full blur-3xl opacity-[0.07]"
//         style={{ background: "#00A4FD" }} // SAP Blue accent
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
//             linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
//           `,
//           backgroundSize: "80px 80px",
//         }}
//       />
//     </div>

//     <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
//       <div className="grid grid-cols-1 gap-12 lg:gap-20 items-center">
//         {/* LEFT - Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 mb-2 md:mb-6">
//             <div
//               className="w-6 h-6 md:w-10 md:h-10 rounded-lg flex items-center justify-center"
//               style={{
//                 background: `${BRAND.gold.primary}15`,
//                 border: `1px solid ${BRAND.gold.primary}30`,
//               }}
//             >
//               <FaCogs
//                 className="text-xs md:text-lg"
//                 style={{ color: BRAND.gold.primary }}
//               />
//             </div>
//             <span
//               className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em]"
//               style={{ color: BRAND.gold.primary }}
//             >
//               <AnimatedText text="SAP Consulting & Implementation" />
//             </span>
//           </div>

//           {/* Title */}
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
//             Transforming Enterprises with <span>Intelligent SAP Solutions</span>
//           </h1>

//           {/* Description */}
//           <p className="text-lg text-gray-100 leading-relaxed mb-8 max-w-xl">
//             At Innovise, we help organizations unlock the full potential of SAP
//             by delivering End-to-End consulting, implementation, and
//             optimization services powered by SAP S/4HANA.
//           </p>

//           <p className="text-lg text-gray-100 leading-relaxed mb-10 max-w-xl">
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
//             style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
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
//     className="py-6 lg:py-10 bg-white relative overflow-hidden"
//   >
//     {/* Background Decoration */}
//     {/* <div
//       className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.03] translate-x-1/3 -translate-y-1/3"
//       style={{ background: BRAND.navy.lighter }}
//     /> */}

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
//           Comprehensive SAP Services
//         </h2>

//         <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
//           End-to-End solutions designed to maximize your SAP investment and
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
//   <section className="py-6 lg:py-10 bg-gray-50 relative overflow-hidden">
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
//           Why Choose <span>Innovise</span> for Your SAP Journey?
//         </h2>

//         <p
//           className="text-lg leading-relaxed mb-10"
//           style={{ color: "#64748B" }}
//         >
//           Our SAP solutions deliver measurable business outcomes that transform
//           how you operate, decide, and grow.
//         </p>
//       </div>
//       <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//         {/* LEFT - Image / Visual */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="relative order-2 lg:order-1"
//         >
//           <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-primary-800">
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
//                     <FaCogs className="text-5xl text-white" />
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
//                         style={{ color: "#00A4FD" }}
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
//           {/* Benefits Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mb-10">
//             {benefitsData.map((benefit, index) => (
//               <BenefitCard key={index} benefit={benefit} index={index} />
//             ))}
//           </div>

//           {/* Why Choose Us Badges */}
//           {/* <div className="p-6 rounded-2xl bg-primary-800">
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
//           </div> */}
//         </motion.div>
//       </div>
//     </div>
//   </section>
// );

// // Process/Approach Section (Stepper UI)
// const ApproachSection = () => (
//   <section className="py-6 lg:py-10 bg-primary-800 relative overflow-hidden">
//     {/* Background Glow */}
//     <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFF]/10 blur-3xl rounded-full"></div>
//     <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-[#0F2B4D] blur-3xl rounded-full"></div>

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
//           Proven{" "}
//           <span style={{ color: "#FFF" }}>Implementation Methodology</span>
//         </h2>

//         <p className="text-lg leading-relaxed text-white/70">
//           A structured approach ensuring successful SAP transformations every
//           time.
//         </p>
//       </motion.header>

//       {/* Desktop */}
//       <div className="hidden lg:block">
//         <div className="grid grid-cols-3 gap-8">
//           {approachSteps.map((step, index) => (
//             <motion.div
//               key={step.step}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="group relative"
//             >
//               <div className="relative h-full p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#FFF]/30 hover:bg-white/[0.07]">
//                 {/* Icon Box */}
//                 <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-[#FFF] shadow-lg shadow-[#FFF]/20">
//                   <step.icon className="text-2xl text-[#081C34]" />
//                 </div>

//                 {/* Watermark Step Number */}
//                 <div className="absolute top-6 right-6 text-5xl font-black text-white/5">
//                   {step.step}
//                 </div>

//                 {/* Title */}
//                 <h4 className="text-xl font-bold text-white mb-2">
//                   {step.title}
//                 </h4>

//                 {/* Subtitle */}
//                 <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FFF] mb-3">
//                   {step.subtitle}
//                 </p>

//                 {/* Description */}
//                 <p className="text-sm leading-relaxed text-white/70">
//                   {step.description}
//                 </p>

//                 {/* Hover Glow */}
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFF]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
//             {/* Left Icon */}
//             <div className="flex flex-col items-center">
//               <div className="w-14 h-14 rounded-full bg-[#FFF] flex items-center justify-center shadow-lg shadow-[#FFF]/20">
//                 <step.icon className="text-lg text-[#081C34]" />
//               </div>

//               {index < approachSteps.length - 1 && (
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
//     className="py-6 lg:py-10 relative overflow-hidden"
//     style={{
//       background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, #0A1628 50%, ${BRAND.navy.mid} 100%)`,
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
//       style={{ background: "#00A4FD" }}
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
//           Ready to Transform Your <span>Enterprise with SAP</span>?
//         </h2>

//         <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
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
//         <div
//           className="flex flex-wrap items-center justify-center gap-8 pt-8"
//           style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
//         >
//           {[
//             { value: "Free Assessment", icon: FaLightbulb },
//             { value: "Expert Consultation", icon: FaUsers },
//             { value: "Custom Roadmap", icon: FaProjectDiagram },
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
//       <ProjectServicesSection />
//       <ApproachSection />
//       <BenefitsSection />
//       {/* <CTABannerSection /> */}
//     </main>
//   );
// };

// export default SAPConsultingPage;

import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaLightbulb,
  FaCogs,
  FaProjectDiagram,
  FaCheckCircle,
  FaDesktop,
  FaHeadset,
  FaCoins,
  FaTruck,
  FaShoppingCart,
  FaUsers,
  FaChartPie,
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaRocket,
  FaShieldAlt,
  FaSyncAlt,
  FaTools,
  FaDatabase,
  FaUserTie,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import sapLogo from "../../assets/logos/sap.png";

/* Example images (Unsplash). Swap for your own files in /assets. */
const IMG = {
  building:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
};

/* ============ DATA ============ */
const orbit = [
  { icon: FaLightbulb, label: "Consulting & Strategy" },
  { icon: FaCogs, label: "Implementation & Migration" },
  { icon: FaProjectDiagram, label: "Integration & Data Management" },
  { icon: FaShieldAlt, label: "Testing & Quality Assurance" },
  { icon: FaDesktop, label: "Application Management" },
  { icon: FaHeadset, label: "Support & Optimization" },
];

const services = [
  {
    icon: FaLightbulb,
    title: "Consulting & Advisory",
    desc: "Define the right SAP strategy and roadmap for your industry.",
  },
  {
    icon: FaCogs,
    title: "Implementation & Migration",
    desc: "Implement and migrate to SAP with minimal disruption.",
  },
  {
    icon: FaProjectDiagram,
    title: "Integration & Data Management",
    desc: "Improve visibility and operations with connected data.",
  },
  {
    icon: FaShieldAlt,
    title: "Testing & Quality Assurance",
    desc: "Secure, tested and compliant SAP solutions.",
  },
  {
    icon: FaDesktop,
    title: "Application Management",
    desc: "24/7 support and continuous improvement of your SAP landscape.",
  },
  {
    icon: FaHeadset,
    title: "Support & Optimization",
    desc: "Drive higher efficiency with ongoing tuning and support.",
  },
];

/* Each card's `path` is the page its "Learn More" opens */
const offerings = [
  {
    icon: FaTools,
    name: "Application Management Services",
    status: "24/7 Support",
    desc: "24/7 monitoring, support, and continuous improvement of enterprise SAP applications.",
    path: "/services/app-maintenance",
    features: [
      "Application Monitoring",
      "Incident Management",
      "Performance Optimization",
      "Release Management",
    ],
  },
  {
    icon: FaDatabase,
    name: "Data Migration & Transformation",
    status: "SAP HANA",
    desc: "Seamless migration from legacy systems to SAP HANA and S/4HANA environments.",
    path: "/services/data-migration",
    features: [
      "SAP HANA Migration",
      "Legacy Data Conversion",
      "Data Validation",
      "System Consolidation",
    ],
  },
  {
    icon: FaUserTie,
    name: "SAP Talent & Staff Augmentation",
    status: "On Demand",
    desc: "Access certified SAP consultants, architects, developers, and project managers.",
    path: "/services/staff-augmentation",
    features: [
      "SAP Functional Experts",
      "SAP Technical Consultants",
      "Project Managers",
      "Flexible Engagement",
    ],
  },
  {
    icon: FaShieldAlt,
    name: "Code Quality & Security",
    status: "Enterprise Grade",
    desc: "Secure, compliant, and high-quality SAP solutions with continuous validation.",
    path: "/services/code-quality-security",
    features: [
      "Code Reviews",
      "Security Assessments",
      "Compliance Validation",
      "Risk Management",
    ],
  },
];

const s4 = [
  {
    icon: FaCoins,
    title: "Finance Transformation",
    desc: "Simplify and accelerate financial processes.",
  },
  {
    icon: FaTruck,
    title: "Supply Chain Optimization",
    desc: "Drive visibility and agility across the supply chain.",
  },
  {
    icon: FaShoppingCart,
    title: "Procurement Excellence",
    desc: "Drive smarter purchasing and better supplier value.",
  },
  {
    icon: FaUsers,
    title: "Human Capital Management",
    desc: "Empower your workforce with a modern HR platform.",
  },
  {
    icon: FaChartPie,
    title: "Business Analytics",
    desc: "Real-time insights for faster, better decisions.",
  },
];

const delivery = [
  {
    title: "Consult & Strategize",
    desc: "Understand your business and define a clear transformation roadmap.",
  },
  {
    title: "Implement & Integrate",
    desc: "Seamless implementation and integration of SAP solutions.",
  },
  {
    title: "Test & Assure",
    desc: "Comprehensive testing for quality, security and performance.",
  },
  {
    title: "Manage Applications",
    desc: "Ongoing support and application management services.",
  },
  {
    title: "Optimize & Grow",
    desc: "Continuous improvement and innovation for long-term success.",
  },
];

const method = [
  {
    icon: FaSearch,
    title: "Discover",
    desc: "Assess your current landscape and business goals.",
  },
  {
    icon: FaPencilRuler,
    title: "Design",
    desc: "Create the solution architecture and detailed roadmap.",
  },
  {
    icon: FaCode,
    title: "Build",
    desc: "Implement, configure and integrate SAP solutions.",
  },
  {
    icon: FaCheckCircle,
    title: "Validate",
    desc: "Conduct rigorous testing for business readiness.",
  },
  {
    icon: FaRocket,
    title: "Deploy",
    desc: "Drive a smooth go-live with minimal risk.",
  },
  {
    icon: FaHeadset,
    title: "Support",
    desc: "Provide ongoing support and optimization.",
  },
];

const stats = [
  { value: "100+", label: "Successful SAP Projects" },
  { value: "15+", label: "Years of Experience" },
  { value: "50+", label: "Global Clients" },
  { value: "95%", label: "Client Satisfaction" },
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
    outlineDark:
      "border border-primary-300 text-primary-800 hover:bg-primary-50",
    light: "bg-white text-primary-800 hover:bg-primary-100",
  };
  const cls = `inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 ${styles[variant]}`;
  // "/path" -> client-side navigation, "#id" or full URL -> normal anchor
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

const SectionHead = ({ eyebrow, title, text, dark, action }) => (
  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
    <div className="max-w-2xl">
      <p
        className={`text-xs font-semibold uppercase tracking-widest mb-3 ${dark ? "text-primary-300" : "text-primary-500"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl lg:text-4xl font-bold ${dark ? "text-white" : "text-primary-900"}`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-3 ${dark ? "text-primary-200" : "text-primary-600"}`}>
          {text}
        </p>
      )}
    </div>
    {action}
  </div>
);

/* ============ HERO ============ */
const OrbitDiagram = () => (
  <div className="relative mx-auto w-full max-w-[460px] aspect-square">
    {/* Rings */}
    <div className="absolute inset-[14%] rounded-full border border-white/20" />

    <motion.div
      className="absolute inset-[4%] rounded-full border border-dashed border-primary-300/40"
      animate={{ rotate: 360 }}
      transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
    />

    {/* Center Logo */}
    <div className="absolute inset-[30%] rounded-full bg-white flex items-center justify-center shadow-2xl ring-8 ring-white/10 z-10 p-6">
      <img src={sapLogo} alt="SAP" className="w-full h-full object-contain" />
    </div>

    {/* Orbiting Services */}
    {orbit.map((n, i) => {
      const a = ((-90 + i * 60) * Math.PI) / 180;

      return (
        <div
          key={n.label}
          className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center w-28 md:w-32 z-20"
          style={{
            left: `${50 + 38 * Math.cos(a)}%`,
            top: `${50 + 38 * Math.sin(a)}%`,
          }}
        >
          <div className="bg-primary-800/95 backdrop-blur-sm border border-primary-600 rounded-xl p-2 shadow-xl flex flex-col items-center gap-1.5 w-full">
            <span className="w-10 h-10 rounded-full bg-white text-primary-700 flex items-center justify-center shadow-md">
              <n.icon />
            </span>

            <span className="text-[9px] md:text-[11px] leading-tight font-bold text-white uppercase tracking-wider">
              {n.label}
            </span>
          </div>
        </div>
      );
    })}
  </div>
);

const Hero = () => (
  <section className="bg-gradient-to-br from-primary-900 to-primary-800 py-16 lg:py-24">
    <Container className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-primary-300 mb-4">
          SAP Services
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
          Transforming Enterprises with{" "}
          <span className="text-primary-300">Intelligent SAP Solutions</span>
        </h1>
        <p className="text-lg text-primary-100 max-w-xl mb-8">
          End-to-end SAP consulting, implementation and managed services to help
          organizations simplify operations, increase efficiency and achieve
          sustainable growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="/contact">
            Talk to Our SAP Experts <FaArrowRight size={12} />
          </Button>
          <Button href="#approach" variant="outline">
            Explore Our Approach
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <OrbitDiagram />
      </motion.div>
    </Container>
  </section>
);

/* ============ COMPREHENSIVE SERVICES ============ */
const Services = () => (
  <section id="services" className="bg-white py-16 lg:py-20">
    <Container>
      <SectionHead
        eyebrow="Our SAP Services"
        title="Comprehensive SAP Services"
        text="From strategy to ongoing support, we deliver tailored SAP solutions that align with your business goals and drive measurable outcomes."
        action={
          <a
            href="#offerings"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-800"
          >
            View All SAP Services <FaArrowRight size={12} />
          </a>
        }
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {services.map((s, i) => (
          <motion.div key={s.title} {...fade(i)} className="text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-primary-200 bg-primary-50 text-primary-600 flex items-center justify-center text-xl">
              <s.icon />
            </div>
            <h3 className="font-semibold text-primary-900 text-sm mb-2">
              {s.title}
            </h3>
            <p className="text-xs text-primary-600 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);

/* ============ SERVICE OFFERINGS (Learn More -> page) ============ */
const OfferingCard = ({ item, index }) => (
  <motion.article
    {...fade(index)}
    className="group relative flex flex-col rounded-2xl bg-primary-800 p-8 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
  >
    <span className="absolute top-6 right-6 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
      {item.status}
    </span>
    <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white text-xl text-primary-800">
      <item.icon />
    </span>
    <h3 className="mb-3 pr-24 text-xl font-bold text-white">{item.name}</h3>
    <p className="mb-5 text-sm leading-relaxed text-primary-200">{item.desc}</p>
    <ul className="mb-8 space-y-2.5">
      {item.features.map((f) => (
        <li
          key={f}
          className="flex items-center gap-3 text-sm text-primary-100"
        >
          <FaCheckCircle className="shrink-0 text-primary-300" />
          {f}
        </li>
      ))}
    </ul>
    <Link
      to={item.path}
      aria-label={`Learn more about ${item.name}`}
      className="mt-auto w-40 bg-primary-400 p-4 rounded-lg inline-flex items-center gap-2 text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 "
    >
      Learn More
      <FaArrowRight
        size={12}
        className="transition-transform group-hover:translate-x-1"
      />
    </Link>
  </motion.article>
);

const Offerings = () => (
  <section id="offerings" className="bg-primary-50 py-16 lg:py-20">
    <Container>
      <SectionHead
        eyebrow="What We Deliver"
        title="Explore Our SAP Service Offerings"
        text="End-to-end solutions designed to maximize your SAP investment and accelerate digital transformation."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {offerings.map((o, i) => (
          <OfferingCard key={o.path} item={o} index={i} />
        ))}
      </div>
    </Container>
  </section>
);

/* ============ S/4HANA ============ */
const S4Section = () => (
  <section className="bg-white py-10 lg:py-12">
    <Container className="grid lg:grid-cols-12 gap-10 items-center">
      <div className="lg:col-span-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 mb-3">
          Our Core Solution
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-2">
          SAP S/4HANA
        </h2>
        <p className="text-lg font-medium text-primary-600 mb-4">
          A smarter ERP for a more agile enterprise
        </p>
        <p className="text-primary-600 mb-6">
          We help organizations implement and optimize S/4HANA to streamline
          operations, gain real-time insights and build a future-ready business.
        </p>
      </div>

      <ul className="lg:col-span-4 space-y-3">
        {s4.map((s, i) => (
          <motion.li
            key={s.title}
            {...fade(i)}
            className="flex gap-4 items-start bg-primary-50 rounded-xl border border-primary-100 p-4"
          >
            <span className="w-10 h-10 shrink-0 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center">
              <s.icon />
            </span>
            <div>
              <h3 className="font-semibold text-primary-900 text-sm">
                {s.title}
              </h3>
              <p className="text-xs text-primary-600">{s.desc}</p>
            </div>
          </motion.li>
        ))}
      </ul>
      <motion.div {...fade()} className="lg:col-span-4">
        <img
          src={IMG.building}
          alt="Modern enterprise office building"
          loading="lazy"
          className="w-full h-72 lg:h-100 object-cover rounded-lg shadow-xl"
        />
      </motion.div>
    </Container>
  </section>
);

/* ============ END-TO-END DELIVERY ============ */
const Delivery = () => (
  <section className="bg-primary-50 py-16 lg:py-20">
    <Container>
      <SectionHead
        eyebrow="Our Approach"
        title="End-to-End Delivery Capabilities"
        text="A seamless and connected journey from strategy to ongoing support."
        // action={
        //   <Button href="/approach" variant="outlineDark">
        //     Learn More
        //   </Button>
        // }
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {delivery.map((d, i) => (
          <motion.div key={d.title} {...fade(i)} className="relative">
            {i < delivery.length - 1 && (
              <div className="hidden lg:block absolute top-6 left-14 right-[-2rem] h-px bg-primary-200" />
            )}
            <div className="relative w-12 h-12 rounded-full bg-primary-800 text-white flex items-center justify-center text-sm font-bold mb-4">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="font-semibold text-primary-900 mb-2">{d.title}</h3>
            <p className="text-sm text-primary-600">{d.desc}</p>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);

/* ============ METHODOLOGY ============ */
const Methodology = () => (
  <section id="approach" className="bg-primary-900 py-16 lg:py-20">
    <Container>
      <SectionHead
        dark
        eyebrow="Our Methodology"
        title="Proven Implementation Methodology"
        text="A structured and agile approach to ensure successful SAP transformations."
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {method.map((m, i) => (
          <motion.div
            key={m.title}
            {...fade(i)}
            className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors"
          >
            <span className="w-10 h-10 rounded-lg bg-white text-primary-800 flex items-center justify-center mb-4">
              <m.icon />
            </span>
            <h3 className="text-white font-semibold mb-2">{m.title}</h3>
            <p className="text-xs text-primary-200 leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);

/* ============ WHY INNOVISE ============ */
const WhyUs = () => (
  <section className="bg-white py-16 lg:py-20">
    <Container className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 mb-3">
          Why Choose Innovise
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
          A Trusted Partner for Your SAP Journey
        </h2>
        <p className="text-primary-600 mb-6 max-w-lg">
          We combine deep SAP expertise, proven methodologies and a
          customer-centric approach to help you achieve lasting business
          outcomes.
        </p>

        <Button href="/contact">
          Get in Touch <FaArrowRight size={12} />
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <img
          src={IMG.team}
          alt="Innovise team collaborating"
          loading="lazy"
          className="hidden lg:block w-full max-w-lg h-60 object-cover rounded-xl mb-6"
        />
      </div>
    </Container>
  </section>
);

/* ============ CTA ============ */
const CTA = () => (
  <section className="bg-primary-50 py-12">
    <Container>
      <div className="rounded-2xl bg-primary-800 px-6 py-10 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-300 mb-2">
            Let's Build What's Next
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-white">
            Ready to Transform with SAP?
          </h2>
          <p className="text-primary-200 mt-2">
            Partner with Innovise for innovative, reliable and future-ready SAP
            solutions.
          </p>
        </div>
        <Button href="/contact" variant="light">
          Talk to Our Experts <FaArrowRight size={12} />
        </Button>
      </div>
    </Container>
  </section>
);

/* ============ PAGE ============ */
const SAPConsultingPage = () => (
  <main role="main">
    <Hero />
    <Services />
    <Offerings />
    <S4Section />
    <Delivery />
    <Methodology />
    <WhyUs />
    <CTA />
  </main>
);

export default SAPConsultingPage;
