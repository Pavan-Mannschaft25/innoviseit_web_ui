// // import React, { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   FaShieldAlt,
// //   FaFileContract,
// //   FaMoneyCheckAlt,
// //   FaCogs,
// //   FaDatabase,
// //   FaFlask,
// //   FaRocket,
// //   FaCheckCircle,
// //   FaArrowRight,
// //   FaClock,
// //   FaUsers,
// //   FaAward,
// //   FaStar,
// //   FaHandshake,
// //   FaChartLine,
// //   FaCloud,
// //   FaLock,
// //   FaHeadset,
// //   FaBolt,
// //   FaExchangeAlt,
// //   FaCode,
// //   FaSearchPlus,
// //   FaBuilding,
// //   FaIndustry,
// //   FaCircle,
// //   FaQuoteLeft,
// //   FaPlayCircle,
// //   FaCarSide,
// //   FaHome,
// //   FaUserInjured,
// //   FaUserShield,
// //   FaHardHat,
// // } from "react-icons/fa";

// // // ==================== BANNER IMAGE ====================
// // import guidewireBanner from "../../assets/services/app.png"; // Update path

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

// // // ==================== GUIDEWIRE SERVICES DATA ====================
// // const guidewireServices = [
// //   {
// //     id: 1,
// //     icon: FaFileContract,
// //     title: "PolicyCenter Implementation",
// //     description:
// //       "End-to-End implementation of Guidewire PolicyCenter for streamlined policy administration, underwriting, and product configuration across P&C insurance lines.",
// //     features: [
// //       "Product Model Design",
// //       "Underwriting Workflows",
// //       "Rating Engine Configuration",
// //       "Integration Setup",
// //     ],
// //     color: "#3B82F6",
// //     status: "CORE",
// //     category: "Policy Admin",
// //   },
// //   {
// //     id: 2,
// //     icon: FaShieldAlt,
// //     title: "ClaimCenter Solutions",
// //     description:
// //       "Comprehensive claims management implementation enabling faster claim processing, fraud detection, and superior customer experience.",
// //     features: [
// //       "Claims Lifecycle Management",
// //       "Fraud Detection Rules",
// //       "Reserve Management",
// //       "Vendor Integration",
// //     ],
// //     color: "#10B981",
// //     status: "ACTIVE",
// //     category: "Claims Mgmt",
// //   },
// //   {
// //     id: 3,
// //     icon: FaMoneyCheckAlt,
// //     title: "BillingCenter Expertise",
// //     description:
// //       "Complete billing center deployment for automated invoicing, payment processing, accounts receivable management, and financial reporting.",
// //     features: [
// //       "Invoice Generation",
// //       "Payment Processing",
// //       "Direct Bill / Agency Bill",
// //       "Financial Reporting",
// //     ],
// //     color: "#8B5CF6",
// //     status: "FINANCE",
// //     category: "Billing",
// //   },
// //   {
// //     id: 4,
// //     icon: FaExchangeAlt,
// //     title: "Integration & APIs",
// //     description:
// //       "Seamless integration of Guidewire platform with legacy systems, third-party applications, data providers, and external services via REST/SOAP APIs.",
// //     features: [
// //       "REST API Development",
// //       "Cloud Integration",
// //       "Legacy System Connectors",
// //       "Data Synchronization",
// //     ],
// //     color: "#F59E0B",
// //     status: "CONNECTED",
// //     category: "Integration",
// //   },
// //   {
// //     id: 5,
// //     icon: FaDatabase,
// //     title: "Data Migration Services",
// //     description:
// //       "Secure and accurate migration of policy, claims, and billing data from legacy systems to Guidewire with zero data loss and minimal downtime.",
// //     features: [
// //       "Data Mapping & ETL",
// //       "Historical Data Conversion",
// //       "Validation & Reconciliation",
// //       "Cutover Planning",
// //     ],
// //     color: "#EF4444",
// //     status: "MIGRATION",
// //     category: "Data",
// //   },
// //   {
// //     id: 6,
// //     icon: FaFlask,
// //     title: "Testing & Quality Assurance",
// //     description:
// //       "Comprehensive testing framework covering unit, integration, performance, and UAT to ensure Guidewire implementations meet business requirements.",
// //     features: [
// //       "Automated Test Suites",
// //       "Performance Testing",
// //       "Regression Testing",
// //       "UAT Coordination",
// //     ],
// //     color: "#06B6D4",
// //     status: "QA_READY",
// //     category: "Quality",
// //   },
// // ];

// // // ==================== BENEFITS DATA ====================
// // const benefitsData = [
// //   {
// //     icon: FaRocket,
// //     title: "Faster Time-to-Market",
// //     description:
// //       "Accelerate product launches with pre-configured Guidewire templates and best practices.",
// //   },
// //   {
// //     icon: FaChartLine,
// //     title: "Operational Efficiency",
// //     description:
// //       "Reduce manual processes by 60% through automation and workflow optimization.",
// //   },
// //   {
// //     icon: FaShieldAlt,
// //     title: "Regulatory Compliance",
// //     description:
// //       "Stay compliant with evolving insurance regulations through built-in compliance frameworks.",
// //   },
// //   {
// //     icon: FaUsers,
// //     title: "Enhanced Customer Experience",
// //     description:
// //       "Deliver seamless digital experiences that modern insurance customers expect.",
// //   },
// // ];

// // // ==================== PROCESS STEPS ====================
// // const processSteps = [
// //   {
// //     step: 1,
// //     icon: FaSearchPlus,
// //     title: "Discovery",
// //     subtitle: "Business Analysis",
// //     description:
// //       "Deep-dive into your current processes, requirements, and goals to create a comprehensive implementation roadmap tailored to your needs.",
// //     color: "#3B82F6",
// //   },
// //   {
// //     step: 2,
// //     icon: FaCogs,
// //     title: "Configure",
// //     subtitle: "Platform Setup",
// //     description:
// //       "Configure Guidewire suite components including data model, product definitions, workflows, and integration points based on discovery findings.",
// //     color: "#F59E0B",
// //   },
// //   {
// //     step: 3,
// //     icon: FaCode,
// //     title: "Customize",
// //     subtitle: "Development",
// //     description:
// //       "Develop custom enhancements, integrations, reports, and extensions using Gosu, Java, and Guidewire best practices.",
// //     color: "#10B981",
// //   },
// //   {
// //     step: 4,
// //     icon: FaRocket,
// //     title: "Deploy",
// //     subtitle: "Go-Live & Support",
// //     description:
// //       "Execute production deployment, data migration cutover, user training, and provide post-go-live hypercare support.",
// //     color: "#8B5CF6",
// //   },
// // ];

// // // ==================== METRICS DATA ====================
// // const metricsData = [
// //   {
// //     value: "50+",
// //     label: "Guidewire Projects",
// //     icon: FaBuilding,
// //     color: "#FDB913",
// //   },
// //   {
// //     value: "100+",
// //     label: "Certified Consultants",
// //     icon: FaAward,
// //     color: "#10B981",
// //   },
// //   { value: "95%", label: "On-Time Delivery", icon: FaBolt, color: "#3B82F6" },
// //   { value: "30%", label: "Cost Savings", icon: FaChartLine, color: "#8B5CF6" },
// // ];

// // // ==================== INDUSTRIES SERVED ====================
// // const industries = [
// //   { name: "Personal Lines", icon: FaUserShield },
// //   { name: "Commercial Lines", icon: FaIndustry },
// //   { name: "Workers' Compensation", icon: FaHardHat },
// //   { name: "Specialty Lines", icon: FaStar },
// // ];

// // // ==================== TESTIMONIALS ====================
// // const testimonials = [
// //   {
// //     quote:
// //       "Innovise IT transformed our claims processing time by 40%. Their Guidewire expertise is unmatched in the industry.",
// //     author: "VP of Operations",
// //     company: "Fortune 500 Insurer",
// //   },
// //   {
// //     quote:
// //       "The team delivered our PolicyCenter implementation ahead of schedule with exceptional quality. Truly a strategic partner.",
// //     author: "CTO",
// //     company: "Regional Insurance Group",
// //   },
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
// //       style={{ transform: isHovered ? "translateY(-8px)" : "translateY(0)" }}
// //     >
// //       <div
// //         className="relative h-full rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-700"
// //         style={{
// //           background: isHovered
// //             ? `linear-gradient(135deg, #081C34 0%, #0D2747 50%, #163B66 100%)`
// //             : `linear-gradient(135deg, #0A1A2F 0%, #102B4C 50%, #163B66 100%)`,
// //           border: isHovered
// //             ? `1px solid rgba(253,185,19,0.25)`
// //             : "1px solid rgba(255,255,255,0.06)",
// //           boxShadow: isHovered
// //             ? "0 30px 80px rgba(8,28,52,0.45)"
// //             : "0 10px 35px rgba(8,28,52,0.20)",
// //         }}
// //       >
// //         {/* Top Accent */}
// //         <motion.div
// //           className="absolute top-0 left-0 right-0 h-1 origin-left"
// //           style={{ background: "linear-gradient(90deg, #FDB913, transparent)" }}
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
// //               animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
// //               transition={{ duration: 2, repeat: Infinity }}
// //               className="w-1.5 h-1.5 rounded-full inline-block bg-[#FDB913]"
// //             />
// //             {service.status}
// //           </span>
// //         </div>

// //         {/* Category Badge */}
// //         <div className="absolute top-5 left-5 z-20">
// //           <span
// //             className="inline-flex items-center px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider"
// //             style={{
// //               background: `${service.color}15`,
// //               color: service.color,
// //               border: `1px solid ${service.color}30`,
// //             }}
// //           >
// //             {service.category}
// //           </span>
// //         </div>

// //         {/* Glow Effect */}
// //         <div className="absolute top-0 right-0 w-40 h-40 bg-[#FDB913]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

// //         <div className="relative z-10 p-8 lg:p-10 pt-16">
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
// //           <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>

// //           {/* Description */}
// //           <p className="text-sm leading-relaxed mb-6 text-white/70">
// //             {service.description}
// //           </p>

// //           {/* Features */}
// //           <ul className="space-y-3">
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
// //       <div className="absolute top-0 right-0 w-28 h-28 bg-[#FDB913]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

// //       <div className="relative z-10 flex items-start gap-4">
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

// // // Live Status Indicator
// // const LiveIndicator = () => (
// //   <div
// //     className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
// //     style={{
// //       background: "rgba(16,185,129,0.1)",
// //       border: "1px solid rgba(16,185,129,0.2)",
// //     }}
// //   >
// //     <motion.span
// //       animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
// //       transition={{ duration: 1.5, repeat: Infinity }}
// //       className="w-2.5 h-2.5 rounded-full inline-block"
// //       style={{ background: "#10B981" }}
// //     />
// //     <span
// //       className="text-xs font-bold uppercase tracking-wider"
// //       style={{ color: "#10B981" }}
// //     >
// //       Guidewire Certified Partner • Active Projects
// //     </span>
// //   </div>
// // );

// // // ==================== SECTIONS ====================

// // // Hero Section
// // const HeroSection = () => (
// //   <section
// //     className="relative py-6 lg:py-20 overflow-hidden max-h-screen"
// //     style={{
// //       background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 60%, ${BRAND.navy.lighter} 100%)`,
// //     }}
// //   >
// //     {/* Background Elements */}
// //     <div className="absolute inset-0" aria-hidden="true">
// //       <div
// //         className="absolute inset-0 opacity-[0.03]"
// //         style={{
// //           backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
// //           backgroundSize: "32px 32px",
// //         }}
// //       />
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

// //       {/* Floating Orbs - Insurance themed colors */}
// //       <motion.div
// //         animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
// //         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
// //         className="absolute top-16 right-20 w-[450px] h-[450px] rounded-full blur-3xl opacity-[0.07]"
// //         style={{ background: "#3B82F6" }} // Blue for trust/security
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
// //               <FaShieldAlt
// //                 className="text-lg"
// //                 style={{ color: BRAND.gold.primary }}
// //               />
// //             </div>
// //             <span
// //               className="text-sm font-bold uppercase tracking-[0.2em]"
// //               style={{ color: BRAND.gold.primary }}
// //             >
// //               Guidewire Implementation Partner
// //             </span>
// //           </div>

// //           {/* Title */}
// //           <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
// //             Enterprise{" "}
// //             <span
// //               style={{
// //                 backgroundImage: BRAND.gold.gradient,
// //                 WebkitBackgroundClip: "text",
// //                 WebkitTextFillColor: "transparent",
// //                 backgroundClip: "text",
// //               }}
// //             >
// //               Guidewire
// //             </span>{" "}
// //             Solutions for{" "}
// //             <span
// //               style={{
// //                 backgroundImage: BRAND.gold.gradient,
// //                 WebkitBackgroundClip: "text",
// //                 WebkitTextFillColor: "transparent",
// //                 backgroundClip: "text",
// //               }}
// //             >
// //               Modern Insurers
// //             </span>
// //           </h1>

// //           {/* Description */}
// //           <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-xl">
// //             Transform your insurance operations with expert Guidewire
// //             implementation, customization, and support services. From
// //             PolicyCenter to ClaimCenter, we deliver End-to-End excellence.
// //           </p>

// //           <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
// //             Our certified consultants bring deep domain expertise across P&C
// //             insurance lines, ensuring your Guidewire investment delivers maximum
// //             ROI.
// //           </p>

// //           {/* Live Indicator */}
// //           {/* <div className="mb-8">
// //             <LiveIndicator />
// //           </div> */}

// //           {/* Trust Indicators */}
// //           {/* <div
// //             className="flex flex-wrap items-center gap-6 mt-10 pt-8"
// //             style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
// //           >
// //             {[
// //               { icon: FaAward, text: "Guidewire Certified" },
// //               { icon: FaUsers, text: "100+ Consultants" },
// //               { icon: FaStar, text: "50+ Implementations" },
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
// //           </div> */}
// //         </motion.div>

// //         {/* RIGHT - Guidewire Dashboard Visual */}
// //         <motion.div
// //           initial={{ opacity: 0, x: 40 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.8, delay: 0.2 }}
// //           className="relative"
// //         >
// //           <div
// //             className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
// //             style={{
// //               background: `linear-gradient(145deg, ${BRAND.navy.light}, ${BRAND.navy.mid})`,
// //               border: `1px solid rgba(59,130,246,0.2)`,
// //             }}
// //           >
// //             {/* Mock Guidewire Interface */}
// //             <div className="absolute inset-0 p-6 flex flex-col">
// //               {/* Header Bar */}
// //               <div className="flex items-center justify-between mb-4">
// //                 <div className="flex items-center gap-2">
// //                   <div className="w-3 h-3 rounded-full bg-red-400" />
// //                   <div className="w-3 h-3 rounded-full bg-yellow-400" />
// //                   <div className="w-3 h-3 rounded-full bg-green-400" />
// //                   <span className="ml-3 text-xs text-white/40 font-mono">
// //                     Guidewire Suite v10.x
// //                   </span>
// //                 </div>
// //                 <LiveIndicator />
// //               </div>

// //               {/* Suite Navigation Tabs */}
// //               {/* <div className="flex gap-2 mb-4 overflow-x-auto">
// //                 {[
// //                   "PolicyCenter",
// //                   "ClaimCenter",
// //                   "BillingCenter",
// //                   "ContactManager",
// //                 ].map((tab, idx) => (
// //                   <div
// //                     key={tab}
// //                     className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
// //                       idx === 0
// //                         ? "bg-[#FDB913]/20 text-[#FDB913] border border-[#FDB913]/30"
// //                         : "bg-white/5 text-white/50 border border-white/10"
// //                     }`}
// //                   >
// //                     {tab}
// //                   </div>
// //                 ))}
// //               </div> */}

// //               {/* Main Metrics Row */}
// //               <div className="grid grid-cols-4 gap-3 mb-4">
// //                 {[
// //                   {
// //                     label: "POLICIES",
// //                     value: "12,458",
// //                     status: "active",
// //                     change: "+234",
// //                   },
// //                   {
// //                     label: "CLAIMS",
// //                     value: "1,847",
// //                     status: "processing",
// //                     change: "-89",
// //                   },
// //                   {
// //                     label: "PAYMENTS",
// //                     value: "$2.4M",
// //                     status: "collected",
// //                     change: "+$180K",
// //                   },
// //                   {
// //                     label: "UPTIME",
// //                     value: "99.99%",
// //                     status: "excellent",
// //                     change: "+0.01%",
// //                   },
// //                 ].map((metric, idx) => (
// //                   <motion.div
// //                     key={idx}
// //                     initial={{ opacity: 0, y: 10 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ delay: 0.3 + idx * 0.1 }}
// //                     className="p-3 rounded-xl"
// //                     style={{
// //                       background: "rgba(255,255,255,0.04)",
// //                       border: "1px solid rgba(255,255,255,0.06)",
// //                     }}
// //                   >
// //                     <div className="text-[10px] text-white/35 uppercase tracking-wider mb-1">
// //                       {metric.label}
// //                     </div>
// //                     <div className="text-lg font-black text-white">
// //                       {metric.value}
// //                     </div>
// //                     <div
// //                       className={`text-[10px] font-medium ${metric.change.startsWith("+") ? "text-green-400" : "text-blue-400"}`}
// //                     >
// //                       {metric.change} today
// //                     </div>
// //                   </motion.div>
// //                 ))}
// //               </div>

// //               {/* Chart Area - Policy Performance */}
// //               <div
// //                 className="flex-1 rounded-xl p-4 mb-4"
// //                 style={{
// //                   background: "rgba(255,255,255,0.03)",
// //                   border: "1px solid rgba(255,255,255,0.06)",
// //                 }}
// //               >
// //                 <div className="flex items-center justify-between mb-3">
// //                   <span className="text-xs text-white/40">
// //                     POLICY ISSUANCE TREND
// //                   </span>
// //                   <div className="flex gap-3">
// //                     <span className="text-[10px] text-white/30">Auto</span>
// //                     <span className="text-[10px] text-white/30">Home</span>
// //                     <span className="text-[10px] text-white/30">
// //                       Commercial
// //                     </span>
// //                   </div>
// //                 </div>

// //                 <div className="relative h-24">
// //                   <svg
// //                     viewBox="0 0 400 80"
// //                     className="w-full h-full"
// //                     preserveAspectRatio="none"
// //                   >
// //                     <defs>
// //                       <linearGradient
// //                         id="gwGradient"
// //                         x1="0%"
// //                         y1="0%"
// //                         x2="0%"
// //                         y2="100%"
// //                       >
// //                         <stop
// //                           offset="0%"
// //                           stopColor="#FDB913"
// //                           stopOpacity="0.3"
// //                         />
// //                         <stop
// //                           offset="100%"
// //                           stopColor="#FDB913"
// //                           stopOpacity="0"
// //                         />
// //                       </linearGradient>
// //                     </defs>
// //                     <path
// //                       d="M0,55 Q50,40 100,45 T200,30 T300,35 T400,20"
// //                       fill="url(#gwGradient)"
// //                       stroke="#FDB913"
// //                       strokeWidth="2"
// //                       vectorEffect="non-scaling-stroke"
// //                     />
// //                     <path
// //                       d="M0,50 Q50,35 100,42 T200,25 T300,32 T400,15"
// //                       fill="none"
// //                       stroke="#3B82F6"
// //                       strokeWidth="1.5"
// //                       strokeDasharray="4,4"
// //                       vectorEffect="non-scaling-stroke"
// //                       opacity="0.6"
// //                     />
// //                   </svg>

// //                   <motion.div
// //                     animate={{ cx: [0, 380] }}
// //                     transition={{
// //                       duration: 4,
// //                       repeat: Infinity,
// //                       ease: "linear",
// //                     }}
// //                     className="absolute top-0 w-2 h-2 rounded-full"
// //                     style={{
// //                       background: "#FDB913",
// //                       boxShadow: "0 0 10px #FDB913",
// //                     }}
// //                   />
// //                 </div>
// //               </div>

// //               {/* Bottom Activity Feed */}
// //               {/* <div className="grid grid-cols-2 gap-3">
// //                 <div
// //                   className="p-3 rounded-xl"
// //                   style={{
// //                     background: "rgba(255,255,255,0.04)",
// //                     border: "1px solid rgba(255,255,255,0.06)",
// //                   }}
// //                 >
// //                   <div className="text-[10px] text-white/35 uppercase tracking-wider mb-2">
// //                     Recent Transactions
// //                   </div>
// //                   <div className="space-y-1.5">
// //                     {[
// //                       {
// //                         time: "1m ago",
// //                         action: "Policy #PL-2024-8847 Issued",
// //                         type: "success",
// //                       },
// //                       {
// //                         time: "3m ago",
// //                         action: "Claim #CL-2024-3321 Opened",
// //                         type: "warning",
// //                       },
// //                       {
// //                         time: "8m ago",
// //                         action: "Payment $4,500 Received",
// //                         type: "success",
// //                       },
// //                     ].map((activity, idx) => (
// //                       <div key={idx} className="flex items-start gap-2">
// //                         <div
// //                           className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${activity.type === "success" ? "bg-green-400" : "bg-yellow-400"}`}
// //                         />
// //                         <div>
// //                           <div className="text-[11px] text-white/70">
// //                             {activity.action}
// //                           </div>
// //                           <div className="text-[9px] text-white/30">
// //                             {activity.time}
// //                           </div>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 <div
// //                   className="p-3 rounded-xl"
// //                   style={{
// //                     background: "rgba(255,255,255,0.04)",
// //                     border: "1px solid rgba(255,255,255,0.06)",
// //                   }}
// //                 >
// //                   <div className="text-[10px] text-white/35 uppercase tracking-wider mb-2">
// //                     System Health
// //                   </div>
// //                   <div className="space-y-2">
// //                     {[
// //                       { name: "PolicyCenter", pct: 99 },
// //                       { name: "ClaimCenter", pct: 97 },
// //                       { name: "BillingCenter", pct: 98 },
// //                       { name: "Integration Hub", pct: 95 },
// //                     ].map((sys, idx) => (
// //                       <div key={idx}>
// //                         <div className="flex justify-between text-[10px] mb-1">
// //                           <span className="text-white/50">{sys.name}</span>
// //                           <span className="text-white/70 font-medium">
// //                             {sys.pct}%
// //                           </span>
// //                         </div>
// //                         <div
// //                           className="h-1 rounded-full overflow-hidden"
// //                           style={{ background: "rgba(255,255,255,0.1)" }}
// //                         >
// //                           <motion.div
// //                             initial={{ width: 0 }}
// //                             animate={{ width: `${sys.pct}%` }}
// //                             transition={{
// //                               delay: 0.5 + idx * 0.1,
// //                               duration: 0.8,
// //                             }}
// //                             className="h-full rounded-full"
// //                             style={{
// //                               background:
// //                                 sys.pct > 97
// //                                   ? "#10B981"
// //                                   : sys.pct > 94
// //                                     ? "#F59E0B"
// //                                     : "#EF4444",
// //                             }}
// //                           />
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div> */}
// //             </div>

// //             {/* Floating Stats Card */}
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
// //                   <FaShieldAlt
// //                     className="text-xl"
// //                     style={{ color: BRAND.gold.primary }}
// //                   />
// //                 </div>
// //                 <div>
// //                   <div
// //                     className="text-xl font-black"
// //                     style={{ color: BRAND.navy.dark }}
// //                   >
// //                     Suite
// //                   </div>
// //                   <div className="text-xs text-gray-500">
// //                     Full Implementation
// //                   </div>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </div>

// //           {/* Decorative Elements */}
// //           <div
// //             className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl -z-10 opacity-60"
// //             style={{
// //               background: "linear-gradient(135deg, #3B82F6, transparent)",
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

// // // Services Section
// // const ServicesSection = () => (
// //   <section
// //     id="services"
// //     className="py-6 lg:py-10 bg-white relative overflow-hidden"
// //   >
// //     <div
// //       className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.03] translate-x-1/3 -translate-y-1/3"
// //       style={{ background: BRAND.navy.lighter }}
// //     />

// //     <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
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
// //            Comprehensive Services
// //         </span>

// //         <h2
// //           className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
// //           style={{ color: BRAND.navy.dark }}
// //         >
// //           End-to-End{" "}
// //           <span
// //             style={{
// //               backgroundImage: BRAND.gold.gradient,
// //               WebkitBackgroundClip: "text",
// //               WebkitTextFillColor: "transparent",
// //               backgroundClip: "text",
// //             }}
// //           >
// //             Guidewire Expertise
// //           </span>
// //         </h2>

// //         <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
// //           Full lifecycle services spanning implementation, customization,
// //           integration, and ongoing support for the complete Guidewire
// //           InsuranceSuite.
// //         </p>
// //       </motion.header>

// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
// //         {guidewireServices.map((service, index) => (
// //           <ServiceCard key={service.id} service={service} index={index} />
// //         ))}
// //       </div>
// //     </div>
// //   </section>
// // );

// // // Industries Section
// // const IndustriesSection = () => (
// //   <section className="py-6 lg:py-10 bg-gray-50 relative overflow-hidden">
// //     <div className="max-w-7xl mx-auto px-4 lg:px-8">
// //       <motion.header
// //         initial={{ opacity: 0, y: 20 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         className="text-center max-w-3xl mx-auto mb-12"
// //       >
// //         <span
// //           className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
// //           style={{
// //             background: `${BRAND.navy.mid}08`,
// //             color: BRAND.navy.dark,
// //             border: `1px solid ${BRAND.navy.mid}15`,
// //           }}
// //         >
// //           🏢 Industry Coverage
// //         </span>
// //         <h2
// //           className="text-3xl md:text-4xl font-bold mb-4"
// //           style={{ color: BRAND.navy.dark }}
// //         >
// //           Serving All{" "}
// //           <span style={{ color: BRAND.gold.primary }}>P&C Insurance Lines</span>
// //         </h2>
// //         <p style={{ color: "#64748B" }}>
// //           Deep expertise across personal and commercial insurance domains.
// //         </p>
// //       </motion.header>

// //       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
// //         {industries.map((industry, idx) => (
// //           <motion.div
// //             key={idx}
// //             initial={{ opacity: 0, scale: 0.9 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: idx * 0.1 }}
// //             whileHover={{ y: -8, scale: 1.05 }}
// //             className="group relative p-6 rounded-2xl text-center cursor-pointer transition-all duration-500"
// //             style={{
// //               background: "white",
// //               border: "1px solid rgba(255,255,255,0.8)",
// //               boxShadow: "0 4px 20px rgba(11,29,51,0.08)",
// //             }}
// //           >
// //             <div
// //               className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
// //               style={{
// //                 background: `${BRAND.gold.primary}15`,
// //                 border: `1px solid ${BRAND.gold.primary}30`,
// //               }}
// //             >
// //               <industry.icon
// //                 className="text-2xl"
// //                 style={{ color: BRAND.gold.primary }}
// //               />
// //             </div>
// //             <h4
// //               className="font-bold text-sm"
// //               style={{ color: BRAND.navy.dark }}
// //             >
// //               {industry.name}
// //             </h4>

// //             <div
// //               className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
// //               style={{
// //                 background: `linear-gradient(135deg, ${BRAND.navy.dark}08, transparent)`,
// //               }}
// //             />
// //           </motion.div>
// //         ))}
// //       </div>
// //     </div>
// //   </section>
// // );

// // // Benefits Section
// // const BenefitsSection = () => (
// //   <section className="py-6 lg:py-10 bg-white relative overflow-hidden">
// //     <div className="max-w-7xl mx-auto px-4 lg:px-8">
// //       <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
// //         {/* LEFT - Visual */}
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
// //               border: `1px solid rgba(253,185,19,0.15)`,
// //             }}
// //           >
// //             {/* Guidewire Suite Visual */}
// //             <div className="absolute inset-0 p-8 flex flex-col justify-center">
// //               <div className="grid grid-cols-3 gap-4 h-full">
// //                 {/* Policy Center Visual */}
// //                 <div
// //                   className="rounded-xl p-4 flex flex-col"
// //                   style={{
// //                     background: "rgba(255,255,255,0.05)",
// //                     border: "1px solid rgba(255,255,255,0.08)",
// //                   }}
// //                 >
// //                   <div className="flex items-center gap-2 mb-3">
// //                     <FaFileContract
// //                       className="text-sm"
// //                       style={{ color: "#3B82F6" }}
// //                     />
// //                     <span className="text-xs text-white/50 font-medium">
// //                       POLICYCENTER
// //                     </span>
// //                   </div>
// //                   <div className="flex-1 space-y-2">
// //                     {["Auto Policy", "Home Policy", "Umbrella"].map(
// //                       (item, i) => (
// //                         <div
// //                           key={i}
// //                           className="p-2 rounded-lg"
// //                           style={{ background: "rgba(255,255,255,0.03)" }}
// //                         >
// //                           <div className="flex items-center justify-between">
// //                             <span className="text-[10px] text-white/60">
// //                               {item}
// //                             </span>
// //                             <motion.span
// //                               animate={{ opacity: [1, 0.5, 1] }}
// //                               transition={{
// //                                 duration: 2,
// //                                 repeat: Infinity,
// //                                 delay: i * 0.3,
// //                               }}
// //                               className="w-1.5 h-1.5 rounded-full"
// //                               style={{ background: "#3B82F6" }}
// //                             />
// //                           </div>
// //                         </div>
// //                       ),
// //                     )}
// //                   </div>
// //                 </div>

// //                 {/* Claim Center Visual */}
// //                 <div
// //                   className="rounded-xl p-4 flex flex-col"
// //                   style={{
// //                     background: "rgba(255,255,255,0.05)",
// //                     border: "1px solid rgba(255,255,255,0.08)",
// //                   }}
// //                 >
// //                   <div className="flex items-center gap-2 mb-3">
// //                     <FaShieldAlt
// //                       className="text-sm"
// //                       style={{ color: "#10B981" }}
// //                     />
// //                     <span className="text-xs text-white/50 font-medium">
// //                       CLAIMCENTER
// //                     </span>
// //                   </div>
// //                   <div className="flex-1 flex items-center justify-center">
// //                     <div className="relative w-full aspect-square max-w-[120px]">
// //                       <motion.div
// //                         animate={{ rotate: 360 }}
// //                         transition={{
// //                           duration: 20,
// //                           repeat: Infinity,
// //                           ease: "linear",
// //                         }}
// //                         className="absolute inset-0"
// //                       >
// //                         <svg viewBox="0 0 100 100" className="w-full h-full">
// //                           <circle
// //                             cx="50"
// //                             cy="50"
// //                             r="35"
// //                             fill="none"
// //                             stroke="rgba(16,185,129,0.3)"
// //                             strokeWidth="1"
// //                             strokeDasharray="4,4"
// //                           />
// //                           <circle cx="50" cy="15" r="4" fill="#10B981" />
// //                           <circle cx="85" cy="50" r="4" fill="#10B981" />
// //                           <circle cx="50" cy="85" r="4" fill="#10B981" />
// //                           <circle cx="15" cy="50" r="4" fill="#10B981" />
// //                           <circle
// //                             cx="50"
// //                             cy="50"
// //                             r="6"
// //                             fill={BRAND.gold.primary}
// //                           />
// //                         </svg>
// //                       </motion.div>
// //                     </div>
// //                   </div>
// //                   <div className="mt-auto text-center">
// //                     <div className="text-lg font-black text-white">Active</div>
// //                     <div className="text-[10px] text-white/40">Claims Flow</div>
// //                   </div>
// //                 </div>

// //                 {/* Billing Center Visual */}
// //                 <div
// //                   className="rounded-xl p-4 flex flex-col"
// //                   style={{
// //                     background: "rgba(255,255,255,0.05)",
// //                     border: "1px solid rgba(255,255,255,0.08)",
// //                   }}
// //                 >
// //                   <div className="flex items-center gap-2 mb-3">
// //                     <FaMoneyCheckAlt
// //                       className="text-sm"
// //                       style={{ color: "#8B5CF6" }}
// //                     />
// //                     <span className="text-xs text-white/50 font-medium">
// //                       BILLINGCENTER
// //                     </span>
// //                   </div>
// //                   <div className="flex-1 space-y-3">
// //                     {[
// //                       { label: "Direct Bill", val: "$1.2M", good: true },
// //                       { label: "Agency Bill", val: "$890K", good: true },
// //                       { label: "Past Due", val: "$45K", good: false },
// //                     ].map((item, i) => (
// //                       <div
// //                         key={i}
// //                         className="p-2 rounded-lg"
// //                         style={{ background: "rgba(255,255,255,0.03)" }}
// //                       >
// //                         <div className="flex justify-between text-[10px] mb-1">
// //                           <span className="text-white/40">{item.label}</span>
// //                           <span
// //                             className={`font-medium ${item.good ? "text-green-400" : "text-yellow-400"}`}
// //                           >
// //                             {item.val}
// //                           </span>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Bottom Status */}
// //               <div
// //                 className="mt-4 flex items-center justify-between px-2 py-3 rounded-xl"
// //                 style={{
// //                   background: "rgba(253,185,19,0.1)",
// //                   border: "1px solid rgba(253,185,19,0.2)",
// //                 }}
// //               >
// //                 <div className="flex items-center gap-2">
// //                   <motion.span
// //                     animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
// //                     transition={{ duration: 1.5, repeat: Infinity }}
// //                     className="w-2 h-2 rounded-full"
// //                     style={{ background: "#FDB913" }}
// //                   />
// //                   <span
// //                     className="text-xs font-medium"
// //                     style={{ color: "#FDB913" }}
// //                   >
// //                     All Systems Integrated
// //                   </span>
// //                 </div>
// //                 <span className="text-[10px] text-white/30">
// //                   Real-time Sync
// //                 </span>
// //               </div>
// //             </div>

// //             {/* Floating Badge */}
// //             <motion.div
// //               animate={{ y: [0, -6, 0] }}
// //               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
// //               className="absolute -bottom-3 -left-3 bg-white rounded-xl p-4 shadow-lg"
// //               style={{ border: `2px solid #3B82F6` }}
// //             >
// //               <div className="flex items-center gap-3">
// //                 <div
// //                   className="w-10 h-10 rounded-lg flex items-center justify-center"
// //                   style={{ background: "rgba(59,130,246,0.1)" }}
// //                 >
// //                   <FaAward className="text-lg" style={{ color: "#3B82F6" }} />
// //                 </div>
// //                 <div>
// //                   <div
// //                     className="text-base font-black"
// //                     style={{ color: BRAND.navy.dark }}
// //                   >
// //                     Certified
// //                   </div>
// //                   <div className="text-[10px] text-gray-500">Partner Level</div>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </motion.div>

// //         {/* RIGHT - Content */}
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
// //              Why Choose Us
// //           </span>

// //           <h2
// //             className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
// //             style={{ color: BRAND.navy.dark }}
// //           >
// //             The{" "}
// //             <span
// //               style={{
// //                 backgroundImage: BRAND.gold.gradient,
// //                 WebkitBackgroundClip: "text",
// //                 WebkitTextFillColor: "transparent",
// //                 backgroundClip: "text",
// //               }}
// //             >
// //               Strategic Advantage
// //             </span>{" "}
// //             of Working with Innovise IT
// //           </h2>

// //           <p
// //             className="text-lg leading-relaxed mb-10"
// //             style={{ color: "#64748B" }}
// //           >
// //             We combine deep Guidewire technical expertise with insurance domain
// //             knowledge to deliver solutions that drive real business outcomes.
// //           </p>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
// //             {benefitsData.map((benefit, index) => (
// //               <BenefitCard key={index} benefit={benefit} index={index} />
// //             ))}
// //           </div>

// //           {/* Quick Stats */}
// //           {/* <div
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
// //               Our Track Record
// //             </h4>
// //             <div className="grid grid-cols-2 gap-4">
// //               {metricsData.slice(0, 4).map((metric, idx) => (
// //                 <div
// //                   key={idx}
// //                   className="text-center p-3 rounded-xl"
// //                   style={{ background: "rgba(255,255,255,0.05)" }}
// //                 >
// //                   <metric.icon
// //                     className="mx-auto mb-1"
// //                     style={{ color: metric.color, fontSize: "14px" }}
// //                   />
// //                   <div
// //                     className="text-xl font-black"
// //                     style={{ color: "white" }}
// //                   >
// //                     {metric.value}
// //                   </div>
// //                   <div className="text-[10px] text-white/50">
// //                     {metric.label}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div> */}
// //         </motion.div>
// //       </div>
// //     </div>
// //   </section>
// // );

// // // Process Section
// // const ProcessSection = () => (
// //   <section className="py-6 lg:py-10 bg-primary-800  relative overflow-hidden">
// //     <div className="absolute top-0 left-0 w-96 h-96 bg-[#FDB913]/10 blur-3xl rounded-full"></div>
// //     <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#102B4C] blur-3xl rounded-full"></div>

// //     <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
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
// //            Implementation Methodology
// //         </span>

// //         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
// //           Proven <span style={{ color: "#FDB913" }}>Delivery Framework</span>
// //         </h2>

// //         <p className="text-lg leading-relaxed text-white/70">
// //           A structured approach ensuring successful Guidewire deployments on
// //           time and within budget.
// //         </p>
// //       </motion.header>

// //       {/* Desktop View */}
// //       <div className="hidden lg:block">
// //         <div className="grid grid-cols-4 gap-8">
// //           {processSteps.map((step, index) => (
// //             <motion.div
// //               key={step.step}
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: index * 0.1 }}
// //               className="group relative"
// //             >
// //               <div className="relative h-full p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#FDB913]/30 hover:bg-white/[0.07]">
// //                 <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-[#FDB913] shadow-lg shadow-[#FDB913]/20">
// //                   <step.icon className="text-2xl text-[#081C34]" />
// //                 </div>

// //                 <div className="absolute top-6 right-6 text-5xl font-black text-white/5">
// //                   {step.step}
// //                 </div>

// //                 <h4 className="text-xl font-bold text-white mb-2">
// //                   {step.title}
// //                 </h4>
// //                 <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FDB913] mb-3">
// //                   {step.subtitle}
// //                 </p>
// //                 <p className="text-sm leading-relaxed text-white/70">
// //                   {step.description}
// //                 </p>

// //                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#FDB913]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Mobile View */}
// //       <div className="lg:hidden space-y-8">
// //         {processSteps.map((step, index) => (
// //           <motion.div
// //             key={step.step}
// //             initial={{ opacity: 0, x: -30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: index * 0.1 }}
// //             className="flex gap-5"
// //           >
// //             <div className="flex flex-col items-center">
// //               <div className="w-14 h-14 rounded-full bg-[#FDB913] flex items-center justify-center shadow-lg shadow-[#FDB913]/20">
// //                 <step.icon className="text-lg text-[#081C34]" />
// //               </div>
// //               {index < processSteps.length - 1 && (
// //                 <div className="w-0.5 flex-1 mt-3 bg-gradient-to-b from-[#FDB913] to-white/10"></div>
// //               )}
// //             </div>
// //             <div className="pb-8">
// //               <h4 className="font-bold text-lg mb-1 text-white">
// //                 {step.title}
// //               </h4>
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

// // // Testimonials Section
// // const TestimonialsSection = () => (
// //   <section className="py-6 lg:py-10 bg-white relative overflow-hidden">
// //     <div className="max-w-7xl mx-auto px-4 lg:px-8">
// //       <motion.header
// //         initial={{ opacity: 0, y: 20 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         className="text-center max-w-3xl mx-auto mb-12"
// //       >
// //         <span
// //           className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
// //           style={{
// //             background: `${BRAND.navy.mid}08`,
// //             color: BRAND.navy.dark,
// //             border: `1px solid ${BRAND.navy.mid}15`,
// //           }}
// //         >
// //           💬 Client Success Stories
// //         </span>
// //         <h2
// //           className="text-3xl md:text-4xl font-bold mb-4"
// //           style={{ color: BRAND.navy.dark }}
// //         >
// //           Trusted by{" "}
// //           <span style={{ color: BRAND.gold.primary }}>Leading Insurers</span>
// //         </h2>
// //       </motion.header>

// //       <div className="grid md:grid-cols-2 gap-6">
// //         {testimonials.map((testimonial, idx) => (
// //           <motion.div
// //             key={idx}
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: idx * 0.15 }}
// //             className="p-8 rounded-3xl relative"
// //             style={{
// //               background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
// //               border: "1px solid rgba(255,255,255,0.08)",
// //             }}
// //           >
// //             <FaQuoteLeft
// //               className="text-3xl mb-4"
// //               style={{ color: `${BRAND.gold.primary}40` }}
// //             />
// //             <p className="text-white/90 leading-relaxed mb-6 italic">
// //               "{testimonial.quote}"
// //             </p>
// //             <div
// //               className="flex items-center gap-3 pt-4"
// //               style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
// //             >
// //               <div
// //                 className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
// //                 style={{ background: BRAND.gold.gradient }}
// //               >
// //                 {testimonial.author.charAt(0)}
// //               </div>
// //               <div>
// //                 <div className="text-white font-semibold text-sm">
// //                   {testimonial.author}
// //                 </div>
// //                 <div className="text-white/50 text-xs">
// //                   {testimonial.company}
// //                 </div>
// //               </div>
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
// //     <div
// //       className="absolute inset-0 opacity-[0.04]"
// //       style={{
// //         backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
// //         backgroundSize: "32px 32px",
// //       }}
// //     />

// //     <motion.div
// //       animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
// //       transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
// //       className="absolute top-10 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.08]"
// //       style={{ background: "#3B82F6" }}
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

// //         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
// //           Ready to Transform Your{" "}
// //           <span
// //             style={{
// //               backgroundImage: BRAND.gold.gradient,
// //               WebkitBackgroundClip: "text",
// //               WebkitTextFillColor: "transparent",
// //               backgroundClip: "text",
// //             }}
// //           >
// //             Insurance Operations
// //           </span>
// //           ?
// //         </h2>

// //         <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
// //           Let our certified Guidewire experts help you implement, optimize, or
// //           extend your Guidewire platform. Schedule a free consultation today.
// //         </p>

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
// //               Start Your Project
// //               <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
// //             </span>
// //             <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
// //               <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
// //             </div>
// //           </a>

// //           <a
// //             href="/contact"
// //             className="group px-8 py-5 rounded-xl font-bold text-lg border-2 border-white/20 text-white hover:border-[#FDB913]/50 hover:bg-white/5 transition-all duration-300 flex items-center gap-3"
// //           >
// //             <FaPlayCircle style={{ color: BRAND.gold.primary }} />
// //             Watch Demo
// //           </a>
// //         </div>

// //         <div
// //           className="flex flex-wrap items-center justify-center gap-8 pt-8"
// //           style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
// //         >
// //           {[
// //             { value: "Free Assessment", icon: FaSearchPlus },
// //             { value: "Proof of Concept", icon: FaFlask },
// //             { value: "Flexible Engagement", icon: FaHandshake },
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

// // // ==================== MAIN PAGE COMPONENT ====================
// // const GuidewirePage = () => {
// //   return (
// //     <main role="main">
// //       {/* Optional Banner Image Background */}
// //       {/* <div
// //         className="relative w-full min-h-[60vh] lg:min-h-[70vh] flex items-end bg-cover bg-center"
// //         style={{ backgroundImage: `url(${guidewireBanner})` }}
// //       >
// //         <div className="absolute inset-0 bg-gradient-to-t from-[#12324f] via-[#12324f]/70 to-transparent" />
// //       </div> */}

// //       <HeroSection />
// //       <ServicesSection />
// //       <IndustriesSection />
// //       <ProcessSection />
// //       <BenefitsSection />
// //       {/* <TestimonialsSection /> */}
// //       <CTABannerSection />
// //     </main>
// //   );
// // };

// // export default GuidewirePage;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaShieldAlt,
//   FaFileContract,
//   FaMoneyCheckAlt,
//   FaCogs,
//   FaDatabase,
//   FaFlask,
//   FaRocket,
//   FaCheckCircle,
//   FaArrowRight,
//   FaClock,
//   FaUsers,
//   FaAward,
//   FaStar,
//   FaHandshake,
//   FaChartLine,
//   FaCloud,
//   FaLock,
//   FaHeadset,
//   FaBolt,
//   FaExchangeAlt,
//   FaCode,
//   FaSearchPlus,
//   FaBuilding,
//   FaIndustry,
//   FaCircle,
//   FaQuoteLeft,
//   FaPlayCircle,
//   FaCarSide,
//   FaHome,
//   FaUserInjured,
//   FaUserShield,
//   FaHardHat,
// } from "react-icons/fa";

// // ==================== BANNER IMAGE ====================
// import guidewireBanner from "../../assets/services/app.png"; // Update path

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

// // ==================== GUIDEWIRE SERVICES DATA ====================
// const guidewireServices = [
//   {
//     id: 1,
//     icon: FaFileContract,
//     title: "PolicyCenter Implementation",
//     description:
//       "End-to-End implementation of Guidewire PolicyCenter for streamlined policy administration, underwriting, and product configuration across P&C insurance lines.",
//     features: [
//       "Product Model Design",
//       "Underwriting Workflows",
//       "Rating Engine Configuration",
//       "Integration Setup",
//     ],
//     color: BRAND.navy.dark,
//     status: "CORE",
//     category: "Policy Admin",
//   },
//   {
//     id: 2,
//     icon: FaShieldAlt,
//     title: "ClaimCenter Solutions",
//     description:
//       "Comprehensive claims management implementation enabling faster claim processing, fraud detection, and superior customer experience.",
//     features: [
//       "Claims Lifecycle Management",
//       "Fraud Detection Rules",
//       "Reserve Management",
//       "Vendor Integration",
//     ],
//     color: BRAND.gold.primary,
//     status: "ACTIVE",
//     category: "Claims Mgmt",
//   },
//   {
//     id: 3,
//     icon: FaMoneyCheckAlt,
//     title: "BillingCenter Expertise",
//     description:
//       "Complete billing center deployment for automated invoicing, payment processing, accounts receivable management, and financial reporting.",
//     features: [
//       "Invoice Generation",
//       "Payment Processing",
//       "Direct Bill / Agency Bill",
//       "Financial Reporting",
//     ],
//     color: BRAND.navy.dark,
//     status: "FINANCE",
//     category: "Billing",
//   },
//   {
//     id: 4,
//     icon: FaExchangeAlt,
//     title: "Integration & APIs",
//     description:
//       "Seamless integration of Guidewire platform with legacy systems, third-party applications, data providers, and external services via REST/SOAP APIs.",
//     features: [
//       "REST API Development",
//       "Cloud Integration",
//       "Legacy System Connectors",
//       "Data Synchronization",
//     ],
//     color: BRAND.gold.primary,
//     status: "CONNECTED",
//     category: "Integration",
//   },
//   {
//     id: 5,
//     icon: FaDatabase,
//     title: "Data Migration Services",
//     description:
//       "Secure and accurate migration of policy, claims, and billing data from legacy systems to Guidewire with zero data loss and minimal downtime.",
//     features: [
//       "Data Mapping & ETL",
//       "Historical Data Conversion",
//       "Validation & Reconciliation",
//       "Cutover Planning",
//     ],
//     color: BRAND.navy.dark,
//     status: "MIGRATION",
//     category: "Data",
//   },
//   {
//     id: 6,
//     icon: FaFlask,
//     title: "Testing & Quality Assurance",
//     description:
//       "Comprehensive testing framework covering unit, integration, performance, and UAT to ensure Guidewire implementations meet business requirements.",
//     features: [
//       "Automated Test Suites",
//       "Performance Testing",
//       "Regression Testing",
//       "UAT Coordination",
//     ],
//     color: BRAND.gold.primary,
//     status: "QA_READY",
//     category: "Quality",
//   },
// ];

// // ==================== BENEFITS DATA ====================
// const benefitsData = [
//   {
//     icon: FaRocket,
//     title: "Faster Time-to-Market",
//     description:
//       "Accelerate product launches with pre-configured Guidewire templates and best practices.",
//   },
//   {
//     icon: FaChartLine,
//     title: "Operational Efficiency",
//     description:
//       "Reduce manual processes by 60% through automation and workflow optimization.",
//   },
//   {
//     icon: FaShieldAlt,
//     title: "Regulatory Compliance",
//     description:
//       "Stay compliant with evolving insurance regulations through built-in compliance frameworks.",
//   },
//   {
//     icon: FaUsers,
//     title: "Enhanced Customer Experience",
//     description:
//       "Deliver seamless digital experiences that modern insurance customers expect.",
//   },
// ];

// // ==================== PROCESS STEPS ====================
// const processSteps = [
//   {
//     step: 1,
//     icon: FaSearchPlus,
//     title: "Discovery",
//     subtitle: "Business Analysis",
//     description:
//       "Deep-dive into your current processes, requirements, and goals to create a comprehensive implementation roadmap tailored to your needs.",
//     color: BRAND.navy.dark,
//   },
//   {
//     step: 2,
//     icon: FaCogs,
//     title: "Configure",
//     subtitle: "Platform Setup",
//     description:
//       "Configure Guidewire suite components including data model, product definitions, workflows, and integration points based on discovery findings.",
//     color: BRAND.gold.dark,
//   },
//   {
//     step: 3,
//     icon: FaCode,
//     title: "Customize",
//     subtitle: "Development",
//     description:
//       "Develop custom enhancements, integrations, reports, and extensions using Gosu, Java, and Guidewire best practices.",
//     color: BRAND.navy.dark,
//   },
//   {
//     step: 4,
//     icon: FaRocket,
//     title: "Deploy",
//     subtitle: "Go-Live & Support",
//     description:
//       "Execute production deployment, data migration cutover, user training, and provide post-go-live hypercare support.",
//     color: BRAND.gold.dark,
//   },
// ];

// // ==================== METRICS DATA ====================
// const metricsData = [
//   {
//     value: "50+",
//     label: "Guidewire Projects",
//     icon: FaBuilding,
//     color: BRAND.gold.primary,
//   },
//   {
//     value: "100+",
//     label: "Certified Consultants",
//     icon: FaAward,
//     color: BRAND.navy.dark,
//   },
//   {
//     value: "95%",
//     label: "On-Time Delivery",
//     icon: FaBolt,
//     color: BRAND.gold.primary,
//   },
//   {
//     value: "30%",
//     label: "Cost Savings",
//     icon: FaChartLine,
//     color: BRAND.navy.dark,
//   },
// ];

// // ==================== INDUSTRIES SERVED ====================
// const industries = [
//   { name: "Personal Lines", icon: FaUserShield, color: BRAND.navy.dark },
//   { name: "Commercial Lines", icon: FaIndustry, color: BRAND.gold.primary },
//   { name: "Workers' Compensation", icon: FaHardHat, color: BRAND.navy.dark },
//   { name: "Specialty Lines", icon: FaStar, color: BRAND.gold.primary },
// ];

// // ==================== TESTIMONIALS ====================
// const testimonials = [
//   {
//     quote:
//       "Innovise IT transformed our claims processing time by 40%. Their Guidewire expertise is unmatched in the industry.",
//     author: "VP of Operations",
//     company: "Fortune 500 Insurer",
//   },
//   {
//     quote:
//       "The team delivered our PolicyCenter implementation ahead of schedule with exceptional quality. Truly a strategic partner.",
//     author: "CTO",
//     company: "Regional Insurance Group",
//   },
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
//       style={{ transform: isHovered ? "translateY(-8px)" : "translateY(0)" }}
//     >
//       <div className="relative h-full rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-700 bg-white border border-slate-100 shadow-sm hover:shadow-xl">
//         {/* Top Accent */}
//         <div
//           className="absolute top-0 left-0 right-0 h-1 origin-left group-hover:scale-x-100 scale-x-0 transition-transform duration-400"
//           style={{
//             background: `linear-gradient(90deg, ${service.color}, transparent)`,
//           }}
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
//               animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="w-1.5 h-1.5 rounded-full inline-block"
//               style={{ background: BRAND.gold.primary }}
//             />
//             {service.status}
//           </span>
//         </div>

//         {/* Category Badge */}
//         <div className="absolute top-5 left-5 z-20">
//           <span
//             className="inline-flex items-center px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider"
//             style={{
//               background: `${service.color}10`,
//               color: service.color,
//               border: `1px solid ${service.color}20`,
//             }}
//           >
//             {service.category}
//           </span>
//         </div>

//         <div className="relative z-10 p-8 lg:p-10 pt-16">
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
//           <h3 className="text-xl font-bold mb-3 text-[#0B1D33]">
//             {service.title}
//           </h3>

//           {/* Description */}
//           <p className="text-sm leading-relaxed mb-6 text-black/70">
//             {service.description}
//           </p>

//           {/* Features */}
//           <ul className="space-y-3">
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
//         <motion.div
//           className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-[#0B1D33]"
//           whileHover={{ rotate: [0, -10, 10, 0] }}
//         >
//           <benefit.icon
//             className="text-xl"
//             style={{ color: BRAND.gold.primary }}
//           />
//         </motion.div>

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

// // Live Status Indicator
// const LiveIndicator = () => (
//   <div
//     className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
//     style={{
//       background: `${BRAND.navy.dark}10`,
//       border: `1px solid ${BRAND.navy.dark}20`,
//     }}
//   >
//     <motion.span
//       animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
//       transition={{ duration: 1.5, repeat: Infinity }}
//       className="w-2.5 h-2.5 rounded-full inline-block"
//       style={{ background: BRAND.navy.dark }}
//     />
//     <span
//       className="text-xs font-bold uppercase tracking-wider"
//       style={{ color: BRAND.navy.dark }}
//     >
//       Guidewire Certified Partner • Active Projects
//     </span>
//   </div>
// );

// // ==================== SECTIONS ====================

// // Hero Section
// const HeroSection = () => (
//   <section className="relative py-6 lg:py-20 overflow-hidden max-h-screen bg-white">
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
//               <FaShieldAlt
//                 className="text-lg"
//                 style={{ color: BRAND.gold.primary }}
//               />
//             </div>
//             <span
//               className="text-sm font-bold uppercase tracking-[0.2em]"
//               style={{ color: BRAND.navy.dark }}
//             >
//               Guidewire Implementation Partner
//             </span>
//           </div>

//           {/* Title */}
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0B1D33] leading-[1.1] mb-6">
//             Enterprise{" "}
//             <span
//               style={{
//                 backgroundImage: BRAND.gold.gradient,
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Guidewire
//             </span>{" "}
//             Solutions for{" "}
//             <span
//               style={{
//                 backgroundImage: BRAND.gold.gradient,
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Modern Insurers
//             </span>
//           </h1>

//           {/* Description */}
//           <p className="text-lg text-black/80 leading-relaxed mb-6 max-w-xl">
//             Transform your insurance operations with expert Guidewire
//             implementation, customization, and support services. From
//             PolicyCenter to ClaimCenter, we deliver End-to-End excellence.
//           </p>

//           <p className="text-base text-black/70 leading-relaxed mb-8 max-w-xl">
//             Our certified consultants bring deep domain expertise across P&C
//             insurance lines, ensuring your Guidewire investment delivers maximum
//             ROI.
//           </p>
//         </motion.div>

//         {/* RIGHT - Guidewire Dashboard Visual */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="relative"
//         >
//           <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-50 border border-slate-200">
//             {/* Mock Guidewire Interface */}
//             <div className="absolute inset-0 p-6 flex flex-col">
//               {/* Header Bar */}
//               <div className="flex items-center justify-between mb-4">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 rounded-full bg-red-400" />
//                   <div className="w-3 h-3 rounded-full bg-yellow-400" />
//                   <div className="w-3 h-3 rounded-full bg-green-400" />
//                   <span className="ml-3 text-xs text-black/40 font-mono">
//                     Guidewire Suite v10.x
//                   </span>
//                 </div>
//                 <LiveIndicator />
//               </div>

//               {/* Main Metrics Row */}
//               <div className="grid grid-cols-4 gap-3 mb-4">
//                 {[
//                   {
//                     label: "POLICIES",
//                     value: "12,458",
//                     status: "active",
//                     change: "+234",
//                   },
//                   {
//                     label: "CLAIMS",
//                     value: "1,847",
//                     status: "processing",
//                     change: "-89",
//                   },
//                   {
//                     label: "PAYMENTS",
//                     value: "$2.4M",
//                     status: "collected",
//                     change: "+$180K",
//                   },
//                   {
//                     label: "UPTIME",
//                     value: "99.99%",
//                     status: "excellent",
//                     change: "+0.01%",
//                   },
//                 ].map((metric, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3 + idx * 0.1 }}
//                     className="p-3 rounded-xl bg-white border border-slate-100"
//                   >
//                     <div className="text-[10px] text-black/35 uppercase tracking-wider mb-1">
//                       {metric.label}
//                     </div>
//                     <div className="text-lg font-black text-[#0B1D33]">
//                       {metric.value}
//                     </div>
//                     <div
//                       className={`text-[10px] font-medium ${metric.change.startsWith("+") ? "text-[#0B1D33]" : "text-[#143A63]"}`}
//                     >
//                       {metric.change} today
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Chart Area */}
//               <div className="flex-1 rounded-xl p-4 mb-4 bg-white border border-slate-100">
//                 <div className="flex items-center justify-between mb-3">
//                   <span className="text-xs text-black/40">
//                     POLICY ISSUANCE TREND
//                   </span>
//                   <div className="flex gap-3">
//                     <span className="text-[10px] text-black/30">Auto</span>
//                     <span className="text-[10px] text-black/30">Home</span>
//                     <span className="text-[10px] text-black/30">
//                       Commercial
//                     </span>
//                   </div>
//                 </div>

//                 <div className="relative h-24">
//                   <svg
//                     viewBox="0 0 400 80"
//                     className="w-full h-full"
//                     preserveAspectRatio="none"
//                   >
//                     <defs>
//                       <linearGradient
//                         id="gwGradient"
//                         x1="0%"
//                         y1="0%"
//                         x2="0%"
//                         y2="100%"
//                       >
//                         <stop
//                           offset="0%"
//                           stopColor="#FDB913"
//                           stopOpacity="0.3"
//                         />
//                         <stop
//                           offset="100%"
//                           stopColor="#FDB913"
//                           stopOpacity="0"
//                         />
//                       </linearGradient>
//                     </defs>
//                     <path
//                       d="M0,55 Q50,40 100,45 T200,30 T300,35 T400,20"
//                       fill="url(#gwGradient)"
//                       stroke="#FDB913"
//                       strokeWidth="2"
//                       vectorEffect="non-scaling-stroke"
//                     />
//                     <path
//                       d="M0,50 Q50,35 100,42 T200,25 T300,32 T400,15"
//                       fill="none"
//                       stroke="#143A63"
//                       strokeWidth="1.5"
//                       strokeDasharray="4,4"
//                       vectorEffect="non-scaling-stroke"
//                       opacity="0.6"
//                     />
//                   </svg>

//                   <motion.div
//                     animate={{ cx: [0, 380] }}
//                     transition={{
//                       duration: 4,
//                       repeat: Infinity,
//                       ease: "linear",
//                     }}
//                     className="absolute top-0 w-2 h-2 rounded-full"
//                     style={{
//                       background: "#FDB913",
//                       boxShadow: "0 0 10px #FDB913",
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Floating Stats Card */}
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
//                   <FaShieldAlt
//                     className="text-xl"
//                     style={{ color: BRAND.gold.primary }}
//                   />
//                 </div>
//                 <div>
//                   <div
//                     className="text-xl font-black"
//                     style={{ color: BRAND.navy.dark }}
//                   >
//                     Suite
//                   </div>
//                   <div className="text-xs text-black/50">
//                     Full Implementation
//                   </div>
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

// // Services Section
// const ServicesSection = () => (
//   <section
//     id="services"
//     className="py-6 lg:py-10 bg-slate-50 relative overflow-hidden"
//   >
//     <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
//       <motion.header
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center max-w-3xl mx-auto mb-16"
//       >
//         <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-white text-[#0B1D33] border border-slate-200 shadow-sm">
//            Comprehensive Services
//         </span>

//         <h2
//           className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
//           style={{ color: BRAND.navy.dark }}
//         >
//           End-to-End{" "}
//           <span
//             style={{
//               backgroundImage: BRAND.gold.gradient,
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             Guidewire Expertise
//           </span>
//         </h2>

//         <p className="text-lg leading-relaxed text-black/70">
//           Full lifecycle services spanning implementation, customization,
//           integration, and ongoing support for the complete Guidewire
//           InsuranceSuite.
//         </p>
//       </motion.header>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//         {guidewireServices.map((service, index) => (
//           <ServiceCard key={service.id} service={service} index={index} />
//         ))}
//       </div>
//     </div>
//   </section>
// );

// // Industries Section
// const IndustriesSection = () => (
//   <section className="py-6 lg:py-10 bg-white relative overflow-hidden">
//     <div className="max-w-7xl mx-auto px-4 lg:px-8">
//       <motion.header
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center max-w-3xl mx-auto mb-12"
//       >
//         <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-slate-50 text-[#0B1D33] border border-slate-100">
//           🏢 Industry Coverage
//         </span>
//         <h2
//           className="text-3xl md:text-4xl font-bold mb-4"
//           style={{ color: BRAND.navy.dark }}
//         >
//           Serving All{" "}
//           <span style={{ color: BRAND.gold.primary }}>P&C Insurance Lines</span>
//         </h2>
//         <p className="text-black/70">
//           Deep expertise across personal and commercial insurance domains.
//         </p>
//       </motion.header>

//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
//         {industries.map((industry, idx) => (
//           <motion.div
//             key={idx}
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: idx * 0.1 }}
//             whileHover={{ y: -8, scale: 1.05 }}
//             className="group relative p-6 rounded-2xl text-center cursor-pointer transition-all duration-500 bg-white border border-slate-100 shadow-sm hover:shadow-xl"
//           >
//             <div
//               className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
//               style={{
//                 background: `${industry.color}15`,
//                 border: `1px solid ${industry.color}30`,
//               }}
//             >
//               <industry.icon
//                 className="text-2xl"
//                 style={{ color: industry.color }}
//               />
//             </div>
//             <h4
//               className="font-bold text-sm"
//               style={{ color: BRAND.navy.dark }}
//             >
//               {industry.name}
//             </h4>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// // Process Section
// const ProcessSection = () => (
//   <section className="py-6 lg:py-10 bg-slate-50 relative overflow-hidden">
//     <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
//       <motion.header
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center max-w-3xl mx-auto mb-16"
//       >
//         <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-white text-[#0B1D33] border border-slate-200 shadow-sm">
//            Implementation Methodology
//         </span>

//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0B1D33]">
//           Proven{" "}
//           <span style={{ color: BRAND.navy.mid }}>Delivery Framework</span>
//         </h2>

//         <p className="text-lg leading-relaxed text-black/70">
//           A structured approach ensuring successful Guidewire deployments on
//           time and within budget.
//         </p>
//       </motion.header>

//       {/* Desktop View */}
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
//               <div className="relative h-full p-8 rounded-3xl border border-slate-100 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
//                 <div
//                   className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md"
//                   style={{
//                     background: BRAND.gold.gradient,
//                     boxShadow: "0 8px 24px rgba(253,185,19,0.25)",
//                   }}
//                 >
//                   <step.icon className="text-2xl text-[#0B1D33]" />
//                 </div>

//                 <div className="absolute top-6 right-6 text-5xl font-black text-[#0B1D33] opacity-5">
//                   {step.step}
//                 </div>

//                 <h4 className="text-xl font-bold text-[#0B1D33] mb-2">
//                   {step.title}
//                 </h4>
//                 <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FDB913] mb-3">
//                   {step.subtitle}
//                 </p>
//                 <p className="text-sm leading-relaxed text-black/70">
//                   {step.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Mobile View */}
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
//             <div className="flex flex-col items-center">
//               <div
//                 className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
//                 style={{
//                   background: BRAND.gold.gradient,
//                   boxShadow: "0 8px 24px rgba(253,185,19,0.25)",
//                 }}
//               >
//                 <step.icon className="text-lg text-[#0B1D33]" />
//               </div>
//               {index < processSteps.length - 1 && (
//                 <div className="w-0.5 flex-1 mt-3 bg-gradient-to-b from-[#FDB913] to-slate-100"></div>
//               )}
//             </div>
//             <div className="pb-8">
//               <h4 className="font-bold text-lg mb-1 text-[#0B1D33]">
//                 {step.title}
//               </h4>
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

// // Benefits Section
// const BenefitsSection = () => (
//   <section className="py-6 lg:py-10 bg-white relative overflow-hidden">
//     <div className="max-w-7xl mx-auto px-4 lg:px-8">
//       <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//         {/* LEFT - Visual */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="relative order-2 lg:order-1"
//         >
//           <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-[#FFFBEB] border border-[#FDB913]/20">
//             {/* Guidewire Suite Visual */}
//             <div className="absolute inset-0 p-8 flex flex-col justify-center">
//               <div className="grid grid-cols-3 gap-4 h-full">
//                 {/* Policy Center Visual */}
//                 <div className="rounded-xl p-4 flex flex-col bg-white border border-slate-100">
//                   <div className="flex items-center gap-2 mb-3">
//                     <FaFileContract
//                       className="text-sm"
//                       style={{ color: BRAND.navy.dark }}
//                     />
//                     <span className="text-xs text-black/50 font-medium">
//                       POLICYCENTER
//                     </span>
//                   </div>
//                   <div className="flex-1 space-y-2">
//                     {["Auto Policy", "Home Policy", "Umbrella"].map(
//                       (item, i) => (
//                         <div key={i} className="p-2 rounded-lg bg-slate-50">
//                           <div className="flex items-center justify-between">
//                             <span className="text-[10px] text-black/60">
//                               {item}
//                             </span>
//                             <motion.span
//                               animate={{ opacity: [1, 0.5, 1] }}
//                               transition={{
//                                 duration: 2,
//                                 repeat: Infinity,
//                                 delay: i * 0.3,
//                               }}
//                               className="w-1.5 h-1.5 rounded-full"
//                               style={{ background: BRAND.navy.dark }}
//                             />
//                           </div>
//                         </div>
//                       ),
//                     )}
//                   </div>
//                 </div>

//                 {/* Claim Center Visual */}
//                 <div className="rounded-xl p-4 flex flex-col bg-white border border-slate-100">
//                   <div className="flex items-center gap-2 mb-3">
//                     <FaShieldAlt
//                       className="text-sm"
//                       style={{ color: BRAND.gold.primary }}
//                     />
//                     <span className="text-xs text-black/50 font-medium">
//                       CLAIMCENTER
//                     </span>
//                   </div>
//                   <div className="flex-1 flex items-center justify-center">
//                     <div className="relative w-full aspect-square max-w-[120px]">
//                       <motion.div
//                         animate={{ rotate: 360 }}
//                         transition={{
//                           duration: 20,
//                           repeat: Infinity,
//                           ease: "linear",
//                         }}
//                         className="absolute inset-0"
//                       >
//                         <svg viewBox="0 0 100 100" className="w-full h-full">
//                           <circle
//                             cx="50"
//                             cy="50"
//                             r="35"
//                             fill="none"
//                             stroke="rgba(11,29,51,0.2)"
//                             strokeWidth="1"
//                             strokeDasharray="4,4"
//                           />
//                           <circle
//                             cx="50"
//                             cy="15"
//                             r="4"
//                             fill={BRAND.navy.dark}
//                           />
//                           <circle
//                             cx="85"
//                             cy="50"
//                             r="4"
//                             fill={BRAND.navy.dark}
//                           />
//                           <circle
//                             cx="50"
//                             cy="85"
//                             r="4"
//                             fill={BRAND.navy.dark}
//                           />
//                           <circle
//                             cx="15"
//                             cy="50"
//                             r="4"
//                             fill={BRAND.navy.dark}
//                           />
//                           <circle
//                             cx="50"
//                             cy="50"
//                             r="6"
//                             fill={BRAND.gold.primary}
//                           />
//                         </svg>
//                       </motion.div>
//                     </div>
//                   </div>
//                   <div className="mt-auto text-center">
//                     <div className="text-lg font-black text-[#0B1D33]">
//                       Active
//                     </div>
//                     <div className="text-[10px] text-black/40">Claims Flow</div>
//                   </div>
//                 </div>

//                 {/* Billing Center Visual */}
//                 <div className="rounded-xl p-4 flex flex-col bg-white border border-slate-100">
//                   <div className="flex items-center gap-2 mb-3">
//                     <FaMoneyCheckAlt
//                       className="text-sm"
//                       style={{ color: BRAND.navy.dark }}
//                     />
//                     <span className="text-xs text-black/50 font-medium">
//                       BILLINGCENTER
//                     </span>
//                   </div>
//                   <div className="flex-1 space-y-3">
//                     {[
//                       { label: "Direct Bill", val: "$1.2M", good: true },
//                       { label: "Agency Bill", val: "$890K", good: true },
//                       { label: "Past Due", val: "$45K", good: false },
//                     ].map((item, i) => (
//                       <div key={i} className="p-2 rounded-lg bg-slate-50">
//                         <div className="flex justify-between text-[10px] mb-1">
//                           <span className="text-black/40">{item.label}</span>
//                           <span
//                             className={`font-medium ${item.good ? "text-[#0B1D33]" : "text-[#E5A700]"}`}
//                           >
//                             {item.val}
//                           </span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Bottom Status */}
//               <div className="mt-4 flex items-center justify-between px-2 py-3 rounded-xl bg-white border border-[#FDB913]/30">
//                 <div className="flex items-center gap-2">
//                   <motion.span
//                     animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                     className="w-2 h-2 rounded-full"
//                     style={{ background: BRAND.gold.primary }}
//                   />
//                   <span
//                     className="text-xs font-medium"
//                     style={{ color: BRAND.navy.dark }}
//                   >
//                     All Systems Integrated
//                   </span>
//                 </div>
//                 <span className="text-[10px] text-black/30">
//                   Real-time Sync
//                 </span>
//               </div>
//             </div>

//             {/* Floating Badge */}
//             <motion.div
//               animate={{ y: [0, -6, 0] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute -bottom-3 -left-3 bg-white rounded-xl p-4 shadow-lg border border-slate-100"
//             >
//               <div className="flex items-center gap-3">
//                 <div
//                   className="w-10 h-10 rounded-lg flex items-center justify-center"
//                   style={{ background: `${BRAND.navy.dark}15` }}
//                 >
//                   <FaAward
//                     className="text-lg"
//                     style={{ color: BRAND.navy.dark }}
//                   />
//                 </div>
//                 <div>
//                   <div
//                     className="text-base font-black"
//                     style={{ color: BRAND.navy.dark }}
//                   >
//                     Certified
//                   </div>
//                   <div className="text-[10px] text-black/50">Partner Level</div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* RIGHT - Content */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="order-1 lg:order-2"
//         >
//           <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-slate-50 text-[#0B1D33] border border-slate-100">
//              Why Choose Us
//           </span>

//           <h2
//             className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
//             style={{ color: BRAND.navy.dark }}
//           >
//             The{" "}
//             <span
//               style={{
//                 backgroundImage: BRAND.gold.gradient,
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Strategic Advantage
//             </span>{" "}
//             of Working with Innovise IT
//           </h2>

//           <p className="text-lg leading-relaxed mb-10 text-black/70">
//             We combine deep Guidewire technical expertise with insurance domain
//             knowledge to deliver solutions that drive real business outcomes.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
//             {benefitsData.map((benefit, index) => (
//               <BenefitCard key={index} benefit={benefit} index={index} />
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   </section>
// );

// // Testimonials Section
// const TestimonialsSection = () => (
//   <section className="py-6 lg:py-10 bg-slate-50 relative overflow-hidden">
//     <div className="max-w-7xl mx-auto px-4 lg:px-8">
//       <motion.header
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center max-w-3xl mx-auto mb-12"
//       >
//         <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-white text-[#0B1D33] border border-slate-200 shadow-sm">
//           💬 Client Success Stories
//         </span>
//         <h2
//           className="text-3xl md:text-4xl font-bold mb-4"
//           style={{ color: BRAND.navy.dark }}
//         >
//           Trusted by{" "}
//           <span style={{ color: BRAND.gold.primary }}>Leading Insurers</span>
//         </h2>
//       </motion.header>

//       <div className="grid md:grid-cols-2 gap-6">
//         {testimonials.map((testimonial, idx) => (
//           <motion.div
//             key={idx}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: idx * 0.15 }}
//             className="p-8 rounded-3xl relative bg-white border border-slate-100 shadow-sm"
//           >
//             <FaQuoteLeft
//               className="text-3xl mb-4"
//               style={{ color: `${BRAND.gold.primary}40` }}
//             />
//             <p className="text-[#0B1D33] leading-relaxed mb-6 italic">
//               "{testimonial.quote}"
//             </p>
//             <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
//               <div
//                 className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
//                 style={{
//                   background: BRAND.gold.gradient,
//                   color: BRAND.navy.dark,
//                 }}
//               >
//                 {testimonial.author.charAt(0)}
//               </div>
//               <div>
//                 <div className="text-[#0B1D33] font-semibold text-sm">
//                   {testimonial.author}
//                 </div>
//                 <div className="text-black/50 text-xs">
//                   {testimonial.company}
//                 </div>
//               </div>
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
//     <div className="max-w-5xl mx-auto px-4 lg:px-8 relative z-10 text-center">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
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

//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B1D33] leading-tight mb-6">
//           Ready to Transform Your{" "}
//           <span
//             style={{
//               backgroundImage: BRAND.gold.gradient,
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             Insurance Operations
//           </span>
//           ?
//         </h2>

//         <p className="text-lg text-black/80 leading-relaxed mb-10 max-w-2xl mx-auto">
//           Let our certified Guidewire experts help you implement, optimize, or
//           extend your Guidewire platform. Schedule a free consultation today.
//         </p>

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
//               Start Your Project
//               <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
//             </span>
//             <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
//               <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
//             </div>
//           </a>

//           <a
//             href="/contact"
//             className="group px-8 py-5 rounded-xl font-bold text-lg border-2 border-[#0B1D33]/20 text-[#0B1D33] hover:border-[#FDB913]/50 hover:bg-white/50 transition-all duration-300 flex items-center gap-3"
//           >
//             <FaPlayCircle style={{ color: BRAND.gold.primary }} />
//             Watch Demo
//           </a>
//         </div>

//         {/* <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-[#0B1D33]/10">
//           {[
//             { value: "Free Assessment", icon: FaSearchPlus },
//             { value: "Proof of Concept", icon: FaFlask },
//             { value: "Flexible Engagement", icon: FaHandshake },
//           ].map((item, idx) => (
//             <div key={idx} className="flex items-center gap-2 text-black/60">
//               <item.icon
//                 className="text-sm"
//                 style={{ color: BRAND.gold.primary }}
//               />
//               <span className="text-sm font-medium">{item.value}</span>
//             </div>
//           ))}
//         </div> */}
//       </motion.div>
//     </div>
//   </section>
// );

// // ==================== MAIN PAGE COMPONENT ====================
// const GuidewirePage = () => {
//   return (
//     <main role="main">
//       <HeroSection />
//       <ServicesSection />
//       <IndustriesSection />
//       <ProcessSection />
//       <BenefitsSection />
//       {/* <TestimonialsSection /> */}
//       <CTABannerSection />
//     </main>
//   );
// };

// export default GuidewirePage;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShieldAlt,
  FaFileContract,
  FaMoneyCheckAlt,
  FaCogs,
  FaDatabase,
  FaFlask,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaClock,
  FaUsers,
  FaAward,
  FaStar,
  FaHandshake,
  FaChartLine,
  FaCloud,
  FaLock,
  FaHeadset,
  FaBolt,
  FaExchangeAlt,
  FaCode,
  FaSearchPlus,
  FaBuilding,
  FaIndustry,
  FaCircle,
  FaQuoteLeft,
  FaPlayCircle,
  FaCarSide,
  FaHome,
  FaUserInjured,
  FaUserShield,
  FaHardHat,
} from "react-icons/fa";

// ==================== BANNER IMAGE ====================
import guidewireBanner from "../../assets/services/app.png"; // Update path

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

// ==================== GUIDEWIRE SERVICES DATA ====================
const guidewireServices = [
  {
    id: 1,
    icon: FaFileContract,
    title: "PolicyCenter Implementation",
    description:
      "End-to-End implementation of Guidewire PolicyCenter for streamlined policy administration, underwriting, and product configuration across P&C insurance lines.",
    features: [
      "Product Model Design",
      "Underwriting Workflows",
      "Rating Engine Configuration",
      "Integration Setup",
    ],
    color: "#3B82F6",
    status: "CORE",
    category: "Policy Admin",
  },
  {
    id: 2,
    icon: FaShieldAlt,
    title: "ClaimCenter Solutions",
    description:
      "Comprehensive claims management implementation enabling faster claim processing, fraud detection, and superior customer experience.",
    features: [
      "Claims Lifecycle Management",
      "Fraud Detection Rules",
      "Reserve Management",
      "Vendor Integration",
    ],
    color: "#10B981",
    status: "ACTIVE",
    category: "Claims Mgmt",
  },
  {
    id: 3,
    icon: FaMoneyCheckAlt,
    title: "BillingCenter Expertise",
    description:
      "Complete billing center deployment for automated invoicing, payment processing, accounts receivable management, and financial reporting.",
    features: [
      "Invoice Generation",
      "Payment Processing",
      "Direct Bill / Agency Bill",
      "Financial Reporting",
    ],
    color: "#8B5CF6",
    status: "FINANCE",
    category: "Billing",
  },
  {
    id: 4,
    icon: FaExchangeAlt,
    title: "Integration & APIs",
    description:
      "Seamless integration of Guidewire platform with legacy systems, third-party applications, data providers, and external services via REST/SOAP APIs.",
    features: [
      "REST API Development",
      "Cloud Integration",
      "Legacy System Connectors",
      "Data Synchronization",
    ],
    color: "#F59E0B",
    status: "CONNECTED",
    category: "Integration",
  },
  {
    id: 5,
    icon: FaDatabase,
    title: "Data Migration Services",
    description:
      "Secure and accurate migration of policy, claims, and billing data from legacy systems to Guidewire with zero data loss and minimal downtime.",
    features: [
      "Data Mapping & ETL",
      "Historical Data Conversion",
      "Validation & Reconciliation",
      "Cutover Planning",
    ],
    color: "#EF4444",
    status: "MIGRATION",
    category: "Data",
  },
  {
    id: 6,
    icon: FaFlask,
    title: "Testing & Quality Assurance",
    description:
      "Comprehensive testing framework covering unit, integration, performance, and UAT to ensure Guidewire implementations meet business requirements.",
    features: [
      "Automated Test Suites",
      "Performance Testing",
      "Regression Testing",
      "UAT Coordination",
    ],
    color: "#06B6D4",
    status: "QA_READY",
    category: "Quality",
  },
];

// ==================== BENEFITS DATA ====================
const benefitsData = [
  {
    icon: FaRocket,
    title: "Faster Time-to-Market",
    description:
      "Accelerate product launches with pre-configured Guidewire templates and best practices.",
  },
  {
    icon: FaChartLine,
    title: "Operational Efficiency",
    description:
      "Reduce manual processes by 60% through automation and workflow optimization.",
  },
  {
    icon: FaShieldAlt,
    title: "Regulatory Compliance",
    description:
      "Stay compliant with evolving insurance regulations through built-in compliance frameworks.",
  },
  {
    icon: FaUsers,
    title: "Enhanced Customer Experience",
    description:
      "Deliver seamless digital experiences that modern insurance customers expect.",
  },
];

// ==================== PROCESS STEPS ====================
const processSteps = [
  {
    step: 1,
    icon: FaSearchPlus,
    title: "Discovery",
    subtitle: "Business Analysis",
    description:
      "Deep-dive into your current processes, requirements, and goals to create a comprehensive implementation roadmap tailored to your needs.",
    color: "#3B82F6",
  },
  {
    step: 2,
    icon: FaCogs,
    title: "Configure",
    subtitle: "Platform Setup",
    description:
      "Configure Guidewire suite components including data model, product definitions, workflows, and integration points based on discovery findings.",
    color: "#F59E0B",
  },
  {
    step: 3,
    icon: FaCode,
    title: "Customize",
    subtitle: "Development",
    description:
      "Develop custom enhancements, integrations, reports, and extensions using Gosu, Java, and Guidewire best practices.",
    color: "#10B981",
  },
  {
    step: 4,
    icon: FaRocket,
    title: "Deploy",
    subtitle: "Go-Live & Support",
    description:
      "Execute production deployment, data migration cutover, user training, and provide post-go-live hypercare support.",
    color: "#8B5CF6",
  },
];

// ==================== METRICS DATA ====================
const metricsData = [
  {
    value: "50+",
    label: "Guidewire Projects",
    icon: FaBuilding,
    color: "#FDB913",
  },
  {
    value: "100+",
    label: "Certified Consultants",
    icon: FaAward,
    color: "#10B981",
  },
  { value: "95%", label: "On-Time Delivery", icon: FaBolt, color: "#3B82F6" },
  { value: "30%", label: "Cost Savings", icon: FaChartLine, color: "#8B5CF6" },
];

// ==================== INDUSTRIES SERVED ====================
const industries = [
  { name: "Personal Lines", icon: FaUserShield },
  { name: "Commercial Lines", icon: FaIndustry },
  { name: "Workers' Compensation", icon: FaHardHat },
  { name: "Specialty Lines", icon: FaStar },
];

// ==================== TESTIMONIALS ====================
const testimonials = [
  {
    quote:
      "Innovise IT transformed our claims processing time by 40%. Their Guidewire expertise is unmatched in the industry.",
    author: "VP of Operations",
    company: "Fortune 500 Insurer",
  },
  {
    quote:
      "The team delivered our PolicyCenter implementation ahead of schedule with exceptional quality. Truly a strategic partner.",
    author: "CTO",
    company: "Regional Insurance Group",
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
      style={{ transform: isHovered ? "translateY(-8px)" : "translateY(0)" }}
    >
      <div className="relative h-full rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-700 bg-primary-800">
        {/* Top Accent */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 origin-left"
          style={{ background: "linear-gradient(90deg, #FDB913, transparent)" }}
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
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full inline-block bg-[#FDB913]"
            />
            {service.status}
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-5 left-5 z-20">
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider"
            style={{
              background: `${service.color}15`,
              color: service.color,
              border: `1px solid ${service.color}30`,
            }}
          >
            {service.category}
          </span>
        </div>

        {/* Glow Effect */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#FDB913]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

        <div className="relative z-10 p-8 lg:p-10 pt-16">
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
          <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>

          {/* Description */}
          <p className="text-sm leading-relaxed mb-6 text-white/70">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-3">
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
      className="relative p-6 rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-500 bg-primary-800"
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 10px 35px rgba(8,28,52,0.20)",
      }}
    >
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

// Live Status Indicator
const LiveIndicator = () => (
  <div
    className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
    style={{
      background: "rgba(16,185,129,0.1)",
      border: "1px solid rgba(16,185,129,0.2)",
    }}
  >
    <motion.span
      animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="w-2.5 h-2.5 rounded-full inline-block"
      style={{ background: "#10B981" }}
    />
    <span
      className="text-xs font-bold uppercase tracking-wider"
      style={{ color: "#10B981" }}
    >
      Guidewire Certified Partner • Active Projects
    </span>
  </div>
);

// ==================== SECTIONS ====================

// Hero Section
const HeroSection = () => (
  <section className="relative py-6 lg:py-20 overflow-hidden max-h-screen bg-primary-800">
    {/* Background Elements */}
    <div className="absolute inset-0" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
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

      {/* Floating Orbs - Insurance themed colors */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-20 w-[450px] h-[450px] rounded-full blur-3xl opacity-[0.07]"
        style={{ background: "#3B82F6" }} // Blue for trust/security
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
      <div className="grid grid-cols-1 gap-12 lg:gap-20 items-center">
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
              <FaCloud
                className="text-lg"
                style={{ color: BRAND.gold.primary }}
              />
            </div>
            <span
              className="text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: BRAND.gold.primary }}
            >
              Guidewire Services
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
            Enterprise{" "}
            <span
              style={{
                backgroundImage: BRAND.gold.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Guidewire
            </span>{" "}
            Solutions for{" "}
            <span
              style={{
                backgroundImage: BRAND.gold.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Modern Insurers
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-100 leading-relaxed mb-6 max-w-xl">
            Transform your insurance operations with expert Guidewire
            implementation, customization, and support services. From
            PolicyCenter to ClaimCenter, we deliver End-to-End excellence.
          </p>

          <p className="text-base text-gray-100 leading-relaxed mb-8 max-w-xl">
            Our certified consultants bring deep domain expertise across P&C
            insurance lines, ensuring your Guidewire investment delivers maximum
            ROI.
          </p>

          {/* Live Indicator */}
          {/* <div className="mb-8">
            <LiveIndicator />
          </div> */}

          {/* Trust Indicators */}
          {/* <div
            className="flex flex-wrap items-center gap-6 mt-10 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            {[
              { icon: FaAward, text: "Guidewire Certified" },
              { icon: FaUsers, text: "100+ Consultants" },
              { icon: FaStar, text: "50+ Implementations" },
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

// Services Section
const ServicesSection = () => (
  <section
    id="services"
    className="py-6 lg:py-10 bg-white relative overflow-hidden"
  >
    <div
      className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.03] translate-x-1/3 -translate-y-1/3"
      style={{ background: BRAND.navy.lighter }}
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
            background: `${BRAND.navy.mid}08`,
            color: BRAND.navy.dark,
            border: `1px solid ${BRAND.navy.mid}15`,
          }}
        >
          Comprehensive Services
        </span>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          style={{ color: BRAND.navy.dark }}
        >
          End-to-End{" "}
          <span
            style={{
              backgroundImage: BRAND.gold.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Guidewire Expertise
          </span>
        </h2>

        <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
          Full lifecycle services spanning implementation, customization,
          integration, and ongoing support for the complete Guidewire
          InsuranceSuite.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {guidewireServices.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  </section>
);

// Industries Section
const IndustriesSection = () => (
  <section className="py-6 lg:py-10 bg-gray-50 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
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
          Industry Coverage
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: BRAND.navy.dark }}
        >
          Serving All{" "}
          <span style={{ color: BRAND.gold.primary }}>P&C Insurance Lines</span>
        </h2>
        <p style={{ color: "#64748B" }}>
          Deep expertise across personal and commercial insurance domains.
        </p>
      </motion.header>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {industries.map((industry, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="group relative p-6 rounded-2xl text-center cursor-pointer transition-all duration-500"
            style={{
              background: "white",
              border: "1px solid rgba(255,255,255,0.8)",
              boxShadow: "0 4px 20px rgba(11,29,51,0.08)",
            }}
          >
            <div
              className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
              style={{
                background: `${BRAND.gold.primary}15`,
                border: `1px solid ${BRAND.gold.primary}30`,
              }}
            >
              <industry.icon
                className="text-2xl"
                style={{ color: BRAND.gold.primary }}
              />
            </div>
            <h4
              className="font-bold text-sm"
              style={{ color: BRAND.navy.dark }}
            >
              {industry.name}
            </h4>

            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, ${BRAND.navy.dark}08, transparent)`,
              }}
            />
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
        {/* LEFT - Visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-primary-800">
            {/* Guidewire Suite Visual */}
            <div className="absolute inset-0 p-8 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-4 h-full">
                {/* Policy Center Visual */}
                <div
                  className="rounded-xl p-4 flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <FaFileContract
                      className="text-sm"
                      style={{ color: "#3B82F6" }}
                    />
                    <span className="text-xs text-white/50 font-medium">
                      POLICYCENTER
                    </span>
                  </div>
                  <div className="flex-1 space-y-2">
                    {["Auto Policy", "Home Policy", "Umbrella"].map(
                      (item, i) => (
                        <div
                          key={i}
                          className="p-2 rounded-lg"
                          style={{ background: "rgba(255,255,255,0.03)" }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] text-white/60">
                              {item}
                            </span>
                            <motion.span
                              animate={{ opacity: [1, 0.5, 1] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3,
                              }}
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: "#3B82F6" }}
                            />
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Claim Center Visual */}
                <div
                  className="rounded-xl p-4 flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <FaShieldAlt
                      className="text-sm"
                      style={{ color: "#10B981" }}
                    />
                    <span className="text-xs text-white/50 font-medium">
                      CLAIMCENTER
                    </span>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="relative w-full aspect-square max-w-[120px]">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0"
                      >
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <circle
                            cx="50"
                            cy="50"
                            r="35"
                            fill="none"
                            stroke="rgba(16,185,129,0.3)"
                            strokeWidth="1"
                            strokeDasharray="4,4"
                          />
                          <circle cx="50" cy="15" r="4" fill="#10B981" />
                          <circle cx="85" cy="50" r="4" fill="#10B981" />
                          <circle cx="50" cy="85" r="4" fill="#10B981" />
                          <circle cx="15" cy="50" r="4" fill="#10B981" />
                          <circle
                            cx="50"
                            cy="50"
                            r="6"
                            fill={BRAND.gold.primary}
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                  <div className="mt-auto text-center">
                    <div className="text-lg font-black text-white">Active</div>
                    <div className="text-[10px] text-white/40">Claims Flow</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 -left-3 bg-white rounded-xl p-4 shadow-lg"
              style={{ border: `2px solid #3B82F6` }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(59,130,246,0.1)" }}
                >
                  <FaAward className="text-lg" style={{ color: "#3B82F6" }} />
                </div>
                <div>
                  <div
                    className="text-base font-black"
                    style={{ color: BRAND.navy.dark }}
                  >
                    Certified
                  </div>
                  <div className="text-[10px] text-gray-500">Partner Level</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT - Content */}
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
            Why Choose Us
          </span>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{ color: BRAND.navy.dark }}
          >
            The{" "}
            <span
              style={{
                backgroundImage: BRAND.gold.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Strategic Advantage
            </span>{" "}
            of Working with Innovise IT
          </h2>

          <p
            className="text-lg leading-relaxed mb-10"
            style={{ color: "#64748B" }}
          >
            We combine deep Guidewire technical expertise with insurance domain
            knowledge to deliver solutions that drive real business outcomes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mb-10">
            {benefitsData.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>

          {/* Quick Stats */}
          {/* <div
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
              Our Track Record
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {metricsData.slice(0, 4).map((metric, idx) => (
                <div
                  key={idx}
                  className="text-center p-3 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <metric.icon
                    className="mx-auto mb-1"
                    style={{ color: metric.color, fontSize: "14px" }}
                  />
                  <div
                    className="text-xl font-black"
                    style={{ color: "white" }}
                  >
                    {metric.value}
                  </div>
                  <div className="text-[10px] text-white/50">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </motion.div>
      </div>
    </div>
  </section>
);

// Process Section
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
          Implementation Methodology
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
          Proven <span style={{ color: "#FDB913" }}>Delivery Framework</span>
        </h2>

        <p className="text-lg leading-relaxed text-white/70">
          A structured approach ensuring successful Guidewire deployments on
          time and within budget.
        </p>
      </motion.header>

      {/* Desktop View */}
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

      {/* Mobile View */}
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

// Testimonials Section
const TestimonialsSection = () => (
  <section className="py-6 lg:py-10 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
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
          Client Success Stories
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: BRAND.navy.dark }}
        >
          Trusted by{" "}
          <span style={{ color: BRAND.gold.primary }}>Leading Insurers</span>
        </h2>
      </motion.header>

      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className="p-8 rounded-3xl relative"
            style={{
              background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <FaQuoteLeft
              className="text-3xl mb-4"
              style={{ color: `${BRAND.gold.primary}40` }}
            />
            <p className="text-white/90 leading-relaxed mb-6 italic">
              "{testimonial.quote}"
            </p>
            <div
              className="flex items-center gap-3 pt-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                style={{ background: BRAND.gold.gradient }}
              >
                {testimonial.author.charAt(0)}
              </div>
              <div>
                <div className="text-white font-semibold text-sm">
                  {testimonial.author}
                </div>
                <div className="text-white/50 text-xs">
                  {testimonial.company}
                </div>
              </div>
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
      className="absolute top-10 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.08]"
      style={{ background: "#3B82F6" }}
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
            background: `${BRAND.gold.primary}15`,
            border: `2px solid ${BRAND.gold.primary}30`,
          }}
        >
          <FaRocket
            className="text-3xl"
            style={{ color: BRAND.gold.primary }}
          />
        </motion.div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Ready to Transform Your{" "}
          <span
            style={{
              backgroundImage: BRAND.gold.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Insurance Operations
          </span>
          ?
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          Let our certified Guidewire experts help you implement, optimize, or
          extend your Guidewire platform. Schedule a free consultation today.
        </p>

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
              Start Your Project
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            </div>
          </a>

          <a
            href="/contact"
            className="group px-8 py-5 rounded-xl font-bold text-lg border-2 border-white/20 text-white hover:border-[#FDB913]/50 hover:bg-white/5 transition-all duration-300 flex items-center gap-3"
          >
            <FaPlayCircle style={{ color: BRAND.gold.primary }} />
            Watch Demo
          </a>
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-8 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          {[
            { value: "Free Assessment", icon: FaSearchPlus },
            { value: "Proof of Concept", icon: FaFlask },
            { value: "Flexible Engagement", icon: FaHandshake },
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

// ==================== MAIN PAGE COMPONENT ====================
const GuidewirePage = () => {
  return (
    <main role="main">
      {/* Optional Banner Image Background */}
      {/* <div
        className="relative w-full min-h-[60vh] lg:min-h-[70vh] flex items-end bg-cover bg-center"
        style={{ backgroundImage: `url(${guidewireBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D33] via-[#0B1D33]/70 to-transparent" />
      </div> */}

      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <BenefitsSection />
      {/* <TestimonialsSection /> */}
      {/* <CTABannerSection /> */}
    </main>
  );
};

export default GuidewirePage;
