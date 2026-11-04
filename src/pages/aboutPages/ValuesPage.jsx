// import React, { useState, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Container from "../../components/ui/Container";
// import AnimatedSection from "../../components/ui/AnimatedSection";
// import {
//   FaHandshake,
//   FaShieldAlt,
//   FaLightbulb,
//   FaRocket,
//   FaUsers,
//   FaChartLine,
//   FaHeart,
//   FaStar,
//   FaQuoteLeft,
//   FaArrowRight,
//   FaCheckCircle,
// } from "react-icons/fa";
// import * as FaIcons from "react-icons/fa";
// import banner from "../../assets/banners/values2.png";
// import ph1 from "../../assets/thinkImg/ph1.png";
// import ph2 from "../../assets/thinkImg/ph2.png";
// import ph3 from "../../assets/thinkImg/ph3.png";
// import ph4 from "../../assets/thinkImg/ph4.png";
// import ph5 from "../../assets/thinkImg/ph5.png";
// import ph6 from "../../assets/thinkImg/ph6.png";

// // ==================== BRAND COLORS ====================
// const BRAND = {
//   navy: {
//     dark: "#12324f",
//     mid: "#12324f",
//     light: "#143A63",
//     lighter: "#1A4570",
//   },
//   gold: {
//     primary: "#12324f",
//     light: "#FFD54F",
//     gradient: "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
//   },
// };

// const iconMap = {
//   FaLightbulb: FaIcons.FaLightbulb,
//   FaCogs: FaIcons.FaCogs,
//   FaRobot: FaIcons.FaRobot,
//   FaCloud: FaIcons.FaCloud,
//   FaChartLine: FaIcons.FaChartLine,
//   FaSyncAlt: FaIcons.FaSyncAlt,
//   FaShieldAlt: FaIcons.FaShieldAlt,
//   FaRocket: FaIcons.FaRocket,
// };

// // ==================== ANIMATION CONFIG ====================
// const ANIMATION = {
//   stagger: 0.12,
//   duration: 0.6,
//   spring: { type: "spring", stiffness: 300, damping: 25 },
// };

// // ==================== VALUES DATA ====================
// const valuesData = [
//   {
//     id: 1,
//     icon: FaHandshake,
//     iconBg: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
//     title: "Customer First",
//     shortTitle: "Customer",
//     description:
//       "We put our clients at the center of everything we do—understanding their goals, challenges, and vision to deliver solutions that create real business impact.",
//     details: [
//       "Deep understanding of client needs",
//       "Tailored solutions for maximum impact",
//       "Long-term partnership approach",
//     ],
//     color: "#12324f",
//   },
//   {
//     id: 2,
//     icon: FaShieldAlt,
//     iconBg: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
//     title: "Integrity & Transparency",
//     shortTitle: "Integrity",
//     description:
//       "We believe in doing the right thing, always. Our approach is honest, ethical, and transparent, ensuring trust in every interaction.",
//     details: [
//       "Ethical business practices",
//       "Open communication always",
//       "Accountability in all actions",
//     ],
//     color: "#12324f",
//   },
//   {
//     id: 3,
//     icon: FaLightbulb,
//     iconBg: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
//     title: "Innovation Mindset",
//     shortTitle: "Innovation",
//     description:
//       "We embrace change and continuously explore new technologies to deliver smarter, faster, and more efficient solutions.",
//     details: [
//       "Cutting-edge technology adoption",
//       "Creative problem-solving culture",
//       "Future-focused thinking",
//     ],
//     color: "#12324f",
//   },
//   {
//     id: 4,
//     icon: FaRocket,
//     iconBg: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
//     title: "Excellence in Delivery",
//     shortTitle: "Excellence",
//     description:
//       "We are committed to quality, precision, and performance—ensuring every project meets the highest standards.",
//     details: [
//       "Rigorous quality assurance",
//       "On-time delivery commitment",
//       "Exceeding expectations always",
//     ],
//     color: "#12324f",
//   },
//   {
//     id: 5,
//     icon: FaUsers,
//     iconBg: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
//     title: "Collaboration & Teamwork",
//     shortTitle: "Teamwork",
//     description:
//       "We work as one team—with our clients and within our organization—to achieve shared success.",
//     details: [
//       "Cross-functional collaboration",
//       "Inclusive decision-making",
//       "Collective success mindset",
//     ],
//     color: "#12324f",
//   },
//   {
//     id: 6,
//     icon: FaChartLine,
//     iconBg: "linear-gradient(135deg, #EC4899 0%, #DB2777 100%)",
//     title: "Continuous Improvement",
//     shortTitle: "Growth",
//     description:
//       "We constantly learn, adapt, and improve to stay ahead in a rapidly evolving digital landscape.",
//     details: [
//       "Ongoing learning culture",
//       "Agile adaptation methods",
//       "Measurable progress tracking",
//     ],
//     color: "#12324f",
//   },
// ];

// const thinkPhilosophy = [
//   {
//     id: 1,
//     icon: "FaLightbulb",
//     subtitle: "Innovation First",
//     title: "Innovation-Led Transformation",
//     description:
//       "We believe technology should serve business strategy, not the other way around. Every solution starts with understanding your unique challenges.",
//     principles: [
//       "Human-centered design",
//       "Agile methodology",
//       "Continuous improvement",
//     ],
//     image: ph1,
//   },
//   {
//     id: 2,
//     icon: "FaRobot",
//     subtitle: "AI & Automation",
//     title: "Intelligent Automation at Scale",
//     description:
//       "Leveraging AI and automation to eliminate repetitive tasks and unlock human potential for higher-value work.",
//     principles: [
//       "Machine Learning",
//       "Process Automation",
//       "Predictive Analytics",
//     ],
//     image: ph2,
//   },
//   {
//     id: 3,
//     icon: "FaCloud",
//     subtitle: "Cloud Native",
//     title: "Cloud-First Architecture",
//     description:
//       "Building resilient, scalable systems that leverage the full power of modern cloud infrastructure.",
//     principles: ["Microservices", "Containerization", "DevOps Culture"],
//     image: ph3,
//   },
//   {
//     id: 4,
//     icon: "FaShieldAlt",
//     subtitle: "Security by Design",
//     title: "Zero Trust Security Model",
//     description:
//       "Embedding security into every layer of architecture from code to cloud infrastructure.",
//     principles: ["Encryption", "Identity Management", "Threat Detection"],
//     image: ph4,
//   },
//   {
//     id: 5,
//     icon: "FaRocket",
//     subtitle: "Speed to Value",
//     title: "Rapid Delivery Framework",
//     description:
//       "Getting solutions to market faster without compromising quality through proven delivery methodologies.",
//     principles: ["Sprint-based", "MVP Approach", "CI/CD Pipelines"],
//     image: ph5,
//   },
//   {
//     id: 6,
//     icon: "FaChartLine",
//     subtitle: "Data-Driven Decisions",
//     title: "Analytics & Insights",
//     description:
//       "Transforming raw data into actionable intelligence that drives strategic business decisions.",
//     principles: ["Real-time Dashboards", "BI Integration", "KPI Tracking"],
//     image: ph6,
//   },
// ];

// // ==================== COMPONENTS ====================

// // Value Card Component
// const ValueCard = ({ value, index, isActive, onSelect }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       layout
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
//       onClick={() => onSelect(value.id === isActive ? null : value.id)}
//       className={`group relative cursor-pointer transition-all duration-500 ${
//         isActive ? "z-10" : "z-0"
//       }`}
//       style={{
//         transform: isActive
//           ? "scale(1.02)"
//           : isHovered
//             ? "scale(1.03)"
//             : "scale(1)",
//       }}
//     >
//       {/* Main Card */}
//       <div
//         className="relative h-full rounded-2xl overflow-hidden transition-all duration-700"
//         style={{
//           background: isActive
//             ? `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.lighter})`
//             : "white",
//           border: isActive
//             ? `2px solid ${BRAND.gold.primary}`
//             : "1px solid rgba(0,0,0,0.06)",
//           boxShadow: isActive
//             ? `0 25px 60px ${BRAND.navy.dark}30, 0 0 40px ${value.color}15`
//             : isHovered
//               ? `0 20px 40px ${value.color}20`
//               : "0 4px 20px rgba(0,0,0,0.04)",
//         }}
//       >
//         {/* Background Pattern (Active State) */}
//         {isActive && (
//           <div
//             className="absolute inset-0 opacity-[0.04]"
//             style={{
//               backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//               backgroundSize: "24px 24px",
//             }}
//             aria-hidden="true"
//           />
//         )}

//         {/* Corner Glow */}
//         <div
//           className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
//           style={{
//             background: `radial-gradient(circle at top right, ${value.color}20, transparent 70%)`,
//             borderRadius: "0 16px 0 0",
//           }}
//           aria-hidden="true"
//         />

//         {/* Card Content */}
//         <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col">
//           {/* Icon Container */}
//           <motion.div
//             className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative"
//             style={{
//               background: isActive ? `#FFF` : `${value.color}10`,
//               border: `2px solid ${isActive ? "#FFF" : `${value.color}30`}`,
//             }}
//             whileHover={{ rotate: [0, -5, 5, 0] }}
//             transition={{ duration: 0.5 }}
//           >
//             <value.icon
//               className="text-3xl transition-colors duration-300"
//               style={{ color: value.color }}
//               aria-hidden="true"
//             />

//             {/* Icon Pulse Ring */}
//             {isHovered && (
//               <motion.div
//                 initial={{ scale: 1, opacity: 0.5 }}
//                 animate={{ scale: 1.5, opacity: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="absolute inset-0 rounded-2xl"
//                 style={{ border: `2px solid ${value.color}` }}
//                 aria-hidden="true"
//               />
//             )}
//           </motion.div>

//           {/* Title & Description */}
//           <h3
//             className="text-xl lg:text-2xl font-bold mb-4 transition-colors duration-300"
//             style={{
//               color: isActive ? "white" : BRAND.navy.dark,
//             }}
//           >
//             {value.title}
//           </h3>

//           <p
//             className="text-sm leading-relaxed mb-6 transition-colors duration-300 flex-grow"
//             style={{
//               color: isActive ? "rgba(255,255,255,0.75)" : "#64748B",
//             }}
//           >
//             {value.description}
//           </p>

//           {/* Expanded Details */}
//           <AnimatePresence mode="wait">
//             {isActive && (
//               <motion.div
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: "auto", opacity: 1 }}
//                 exit={{ height: 0, opacity: 0 }}
//                 transition={{ duration: 0.4 }}
//                 className="overflow-hidden"
//               >
//                 <ul
//                   className="space-y-3 pt-4"
//                   style={{ borderTop: `1px solid ${value.color}30` }}
//                 >
//                   {value.details.map((detail, idx) => (
//                     <motion.li
//                       key={idx}
//                       initial={{ x: -20, opacity: 0 }}
//                       animate={{ x: 0, opacity: 1 }}
//                       transition={{ delay: idx * 0.1 }}
//                       className="flex items-center gap-3 text-sm"
//                       style={{ color: "rgba(255,255,255,0.85)" }}
//                     >
//                       <FaCheckCircle
//                         className="flex-shrink-0 text-base"
//                         style={{ color: "#FFF" }}
//                         aria-hidden="true"
//                       />
//                       {detail}
//                     </motion.li>
//                   ))}
//                 </ul>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Collapse/Expand Indicator */}
//           {!isActive && (
//             <div
//               className="flex items-center gap-2 mt-auto pt-4 transition-all duration-300 group-hover:gap-3"
//               style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
//             >
//               <span
//                 className="text-xs font-bold uppercase tracking-wider transition-colors"
//                 style={{ color: value.color }}
//               >
//                 Explore
//               </span>
//               <FaArrowRight
//                 className="text-xs transition-transform duration-300 group-hover:translate-x-1"
//                 style={{ color: value.color }}
//                 aria-hidden="true"
//               />
//             </div>
//           )}
//         </div>

//         {/* Bottom Accent Line */}
//         <motion.div
//           className="absolute bottom-0 left-0 right-0 h-1 origin-left"
//           style={{
//             background: `linear-gradient(90deg, ${value.color}, transparent)`,
//           }}
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: isHovered || isActive ? 1 : 0 }}
//           transition={{ duration: 0.4 }}
//           aria-hidden="true"
//         />
//       </div>
//     </motion.div>
//   );
// };

// // Hero Section Component
// const HeroSection = () => (
//   <section
//     className="relative py-6 lg:py-12 h-[70vh] overflow-hidden"
//     style={{
//       background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 50%, ${BRAND.navy.lighter} 100%)`,
//     }}
//     aria-label="Our values introduction"
//   >
//     {/* Background Elements */}
//     <div className="absolute inset-0" aria-hidden="true">
//       {/* Pattern Overlay */}
//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//           backgroundSize: "40px 40px",
//         }}
//       />

//       {/* Floating Orbs */}
//       <motion.div
//         animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.08]"
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
//         className="absolute bottom-20 left-20 w-[400px] h-[400px] rounded-full blur-3xl opacity-[0.06]"
//         style={{ background: BRAND.navy.lighter }}
//       />

//       {/* Geometric Shapes */}
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//         className="absolute top-1/4 left-10 w-64 h-64 border border-white/5 rounded-full"
//         aria-hidden="true"
//       />
//       <motion.div
//         animate={{ rotate: -360 }}
//         transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
//         className="absolute bottom-1/4 right-10 w-96 h-96 border border-white/5 rounded-full"
//         aria-hidden="true"
//       />
//     </div>

//     <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
//       <div className="max-w-4xl mx-auto text-center">
//         {/* Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="inline-flex items-center gap-3 mb-8"
//         >
//           <span
//             className="w-12 h-[2px]"
//             style={{ background: BRAND.gold.gradient }}
//           />
//           <span
//             className="text-sm font-bold uppercase tracking-[0.25em]"
//             style={{ color: BRAND.gold.primary }}
//           >
//             Our Core Principles
//           </span>
//           <span
//             className="w-12 h-[2px]"
//             style={{ background: BRAND.gold.gradient }}
//           />
//         </motion.div>

//         {/* Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-6"
//         >
//           Built on{" "}
//           <span
//             style={{
//               backgroundImage: BRAND.gold.gradient,
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             Trust
//           </span>
//           . Driven by{" "}
//           <span
//             style={{
//               backgroundImage: BRAND.gold.gradient,
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             Innovation
//           </span>
//           .
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12"
//         >
//           At Innovise, our values define how we think, act, and deliver. They
//           are the foundation of every solution we build and every partnership we
//           create.
//         </motion.p>
//       </div>
//     </div>
//   </section>
// );

// // Values Grid Section Component
// const ValuesGridSection = ({ activeId, setActiveId }) => (
//   <section
//     className="py-8 lg:py-12 bg-white relative overflow-hidden"
//     aria-label="Our core values grid"
//   >
//     {/* Background Decoration */}
//     <div
//       className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-3xl opacity-[0.03] -translate-x-1/2 -translate-y-1/2"
//       style={{ background: BRAND.navy.lighter }}
//       aria-hidden="true"
//     />

//     <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
//       {/* Section Header */}
//       <motion.header
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
//       >
//         <span
//           className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
//           style={{
//             background: `${BRAND.navy.mid}08`,
//             color: BRAND.navy.dark,
//             border: `1px solid ${BRAND.navy.mid}15`,
//           }}
//         >
//           What We Stand For
//         </span>

//         <h2
//           className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
//           style={{ color: BRAND.navy.dark }}
//         >
//           The Pillars of{" "}
//           <span style={{ color: BRAND.gold.primary }}>Our Culture</span>
//         </h2>

//         <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
//           Click on any value to discover how it shapes our work and drives
//           meaningful results for our clients worldwide.
//         </p>
//       </motion.header>

//       {/* Values Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//         {valuesData.map((value, index) => (
//           <ValueCard
//             key={value.id}
//             value={value}
//             index={index}
//             isActive={activeId === value.id}
//             onSelect={setActiveId}
//           />
//         ))}
//       </div>
//     </div>
//   </section>
// );

// // Quote/Closing Section Component
// const ClosingSection = () => (
//   <section
//     className="relative py-24 lg:py-32 overflow-hidden"
//     style={{
//       background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
//     }}
//     aria-label="Closing message about values"
//   >
//     {/* Background Pattern */}
//     <div
//       className="absolute inset-0 opacity-[0.03]"
//       style={{
//         backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//         backgroundSize: "40px 40px",
//       }}
//       aria-hidden="true"
//     />

//     {/* Decorative Elements */}
//     <motion.div
//       animate={{ y: [0, -20, 0] }}
//       transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.06]"
//       style={{ background: BRAND.gold.primary }}
//       aria-hidden="true"
//     />

//     <div className="max-w-4xl mx-auto px-4 lg:px-8 relative z-10 text-center">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Quote Icon */}
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
//           <FaQuoteLeft
//             className="text-3xl"
//             style={{ color: BRAND.gold.primary }}
//             aria-hidden="true"
//           />
//         </motion.div>

//         {/* Quote Text */}
//         <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-8">
//           Our values are not just principles—they are{" "}
//           <span
//             style={{
//               backgroundImage: BRAND.gold.gradient,
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             the way we build lasting partnerships
//           </span>{" "}
//           and deliver{" "}
//           <span
//             style={{
//               backgroundImage: BRAND.gold.gradient,
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             meaningful results
//           </span>
//           .
//         </blockquote>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
//           <a
//             href="/careers"
//             className="group relative px-10 py-5 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2"
//             style={{
//               background: BRAND.gold.gradient,
//               color: BRAND.navy.dark,
//               boxShadow: `0 8px 30px ${BRAND.gold.primary}35`,
//               "--tw-ring-color": BRAND.gold.primary,
//             }}
//           >
//             <span className="relative z-10 flex items-center gap-3">
//               Join Our Team
//               <FaArrowRight
//                 className="text-sm group-hover:translate-x-1 transition-transform"
//                 aria-hidden="true"
//               />
//             </span>

//             {/* Shine Effect */}
//             <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
//               <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
//             </div>
//           </a>

//           <a
//             href="/contact"
//             className="px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/5 focus:outline-none focus:ring-2"
//             style={{
//               border: `1px solid rgba(255,255,255,0.2)`,
//               color: "white",
//               "--tw-ring-color": "rgba(255,255,255,0.5)",
//             }}
//           >
//             Get in Touch →
//           </a>
//         </div>
//       </motion.div>
//     </div>
//   </section>
// );

// // Main Values Page Component
// const ValuesPage = () => {
//   const [activeId, setActiveId] = useState(null);
//   const philosophyWithIcons = thinkPhilosophy.map((item) => ({
//     ...item,
//     icon: iconMap[item.icon] || FaIcons.FaLightbulb,
//   }));

//   const handleSetActive = useCallback((id) => {
//     setActiveId(id);
//   }, []);

//   return (
//     <main role="main">
//       <div className="relative w-full h-[30vh] md:h-[70vh] lg:h-[90vh] bg-[#020B2D] overflow-hidden">
//         <img
//           src={banner}
//           alt="Innovise Banner"
//           className="w-full h-full object-cover object-center"
//         />

//         <div className="absolute inset-0 bg-black/10" />
//       </div>
//       {/* <HeroSection /> */}
//       <ValuesGridSection activeId={activeId} setActiveId={handleSetActive} />
//       <section className="py-10 bg-white relative overflow-hidden">
//         {/* Background Pattern */}
//         <div
//           className="absolute inset-0 opacity-[0.02]"
//           style={{
//             backgroundImage: `radial-gradient(circle at 1px 1px, ${BRAND.navy.mid} 1px, transparent 0)`,
//             backgroundSize: "30px 30px",
//           }}
//         />

//         <Container>
//           {/* Section Header */}
//           <div className="text-center mb-10">
//             <AnimatedSection delay={0.1}>
//               <h2
//                 className="text-3xl md:text-4xl lg:text-5xl font-semibold"
//                 style={{ color: BRAND.navy.dark }}
//               >
//                 Our Core{" "}
//                 <span style={{ color: BRAND.gold.primary }}>Philosophy</span>
//               </h2>
//             </AnimatedSection>
//           </div>

//           {/* Cards Grid - Bento Style */}
//           <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
//             {philosophyWithIcons.map((philosophy, index) => (
//               <AnimatedSection key={philosophy.id} delay={index * 0.1}>
//                 <motion.div className="group relative h-[60vh] overflow-hidden rounded-2xl cursor-pointer">
//                   {/* Background Image */}
//                   <img
//                     src={philosophy.image}
//                     alt={philosophy.title}
//                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />

//                   {/* Dark Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 z-[1]" />

//                   {/* Content */}
//                   <div className="absolute inset-0 z-[2] flex flex-col justify-end p-6 lg:p-8">
//                     <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 uppercase">
//                       {philosophy.title}
//                     </h3>

//                     <p className="text-white/90 text-sm lg:text-base mb-4 max-w-xl">
//                       {philosophy.description}
//                     </p>

//                     <ul className="space-y-2">
//                       {philosophy.principles.slice(0, 3).map((item, idx) => (
//                         <li
//                           key={idx}
//                           className="flex items-center gap-2 text-white text-sm"
//                         >
//                           <span className="w-2 h-2 rounded-full bg-[#12324f]" />
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </motion.div>
//               </AnimatedSection>
//             ))}
//           </div>
//         </Container>
//       </section>
//       {/* <ClosingSection /> */}
//     </main>
//   );
// };

// export default ValuesPage;

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChartLine,
  FaCheckCircle,
  FaChevronDown,
  FaHandshake,
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import banner from "../../assets/banners/values2.png";
import ph1 from "../../assets/thinkImg/ph1.png";
import ph2 from "../../assets/thinkImg/ph2.png";
import ph3 from "../../assets/thinkImg/ph3.png";
import ph4 from "../../assets/thinkImg/ph4.png";
import ph5 from "../../assets/thinkImg/ph5.png";
import ph6 from "../../assets/thinkImg/ph6.png";

/*
  Brand palette (from the Innovise logo) — see index.css
  navy    #0b1849  -> primary-900  (dark sections, headings)
  blue    #013dfb  -> primary-500  (buttons, links, icons on white)
  aqua    #0cf0d1  -> accent-400   (highlights on navy only)
  white   #ffffff
  Solid colors only: no gradients, no glows.
*/

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

const SectionHead = ({ eyebrow, title, text, dark, align = "center" }) => (
  <motion.header
    {...fade()}
    className={`mb-14 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
  >
    {eyebrow && (
      <p
        className={`mb-3 text-sm font-semibold uppercase tracking-widest ${dark ? "text-accent-400" : "text-primary-500"}`}
      >
        {eyebrow}
      </p>
    )}
    <h2
      className={`text-3xl font-bold lg:text-4xl ${dark ? "text-white" : "text-primary-900"}`}
    >
      {title}
    </h2>
    {text && (
      <p
        className={`mt-4 text-lg ${dark ? "text-white/75" : "text-primary-900/70"}`}
      >
        {text}
      </p>
    )}
  </motion.header>
);

/* Blue icon tile that turns solid blue on hover (parent needs `group`) */
const IconTile = ({ icon: Icon, size = "h-12 w-12 text-xl" }) => (
  <span
    className={`flex shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-500 transition-colors duration-300 group-hover:bg-primary-500 group-hover:text-white ${size}`}
  >
    <Icon />
  </span>
);

/* Full-width banner image at the top of the page */
const Banner = ({
  image,
  alt,
  height = "h-[30vh] md:h-[70vh] lg:h-[90vh]",
}) => (
  <div className={`relative w-full overflow-hidden bg-primary-900 ${height}`}>
    <img
      src={image}
      alt={alt}
      className="h-full w-full object-cover object-center"
    />
  </div>
);

/* ============ DATA ============ */
const valuesData = [
  {
    id: 1,
    icon: FaHandshake,
    title: "Customer First",
    description:
      "We put our clients at the center of everything we do, understanding their goals, challenges, and vision to deliver solutions that create real business impact.",
    details: [
      "Deep understanding of client needs",
      "Tailored solutions for maximum impact",
      "Long-term partnership approach",
    ],
  },
  {
    id: 2,
    icon: FaShieldAlt,
    title: "Integrity & Transparency",
    description:
      "We believe in doing the right thing, always. Our approach is honest, ethical, and transparent, ensuring trust in every interaction.",
    details: [
      "Ethical business practices",
      "Open communication always",
      "Accountability in all actions",
    ],
  },
  {
    id: 3,
    icon: FaLightbulb,
    title: "Innovation Mindset",
    description:
      "We embrace change and continuously explore new technologies to deliver smarter, faster, and more efficient solutions.",
    details: [
      "Cutting-edge technology adoption",
      "Creative problem-solving culture",
      "Future-focused thinking",
    ],
  },
  {
    id: 4,
    icon: FaRocket,
    title: "Excellence in Delivery",
    description:
      "We are committed to quality, precision, and performance, ensuring every project meets the highest standards.",
    details: [
      "Rigorous quality assurance",
      "On-time delivery commitment",
      "Exceeding expectations always",
    ],
  },
  {
    id: 5,
    icon: FaUsers,
    title: "Collaboration & Teamwork",
    description:
      "We work as one team, with our clients and within our organization, to achieve shared success.",
    details: [
      "Cross-functional collaboration",
      "Inclusive decision-making",
      "Collective success mindset",
    ],
  },
  {
    id: 6,
    icon: FaChartLine,
    title: "Continuous Improvement",
    description:
      "We constantly learn, adapt, and improve to stay ahead in a rapidly evolving digital landscape.",
    details: [
      "Ongoing learning culture",
      "Agile adaptation methods",
      "Measurable progress tracking",
    ],
  },
];

const philosophy = [
  {
    id: 1,
    title: "Innovation-Led Transformation",
    description:
      "We believe technology should serve business strategy, not the other way around. Every solution starts with understanding your unique challenges.",
    principles: [
      "Human-centered design",
      "Agile methodology",
      "Continuous improvement",
    ],
    image: ph1,
  },
  {
    id: 2,
    title: "Intelligent Automation at Scale",
    description:
      "Leveraging AI and automation to eliminate repetitive tasks and unlock human potential for higher-value work.",
    principles: [
      "Machine Learning",
      "Process Automation",
      "Predictive Analytics",
    ],
    image: ph2,
  },
  {
    id: 3,
    title: "Cloud-First Architecture",
    description:
      "Building resilient, scalable systems that leverage the full power of modern cloud infrastructure.",
    principles: ["Microservices", "Containerization", "DevOps Culture"],
    image: ph3,
  },
  {
    id: 4,
    title: "Zero Trust Security Model",
    description:
      "Embedding security into every layer of architecture, from code to cloud infrastructure.",
    principles: ["Encryption", "Identity Management", "Threat Detection"],
    image: ph4,
  },
  {
    id: 5,
    title: "Rapid Delivery Framework",
    description:
      "Getting solutions to market faster without compromising quality through proven delivery methodologies.",
    principles: ["Sprint-based", "MVP Approach", "CI/CD Pipelines"],
    image: ph5,
  },
  {
    id: 6,
    title: "Analytics & Insights",
    description:
      "Transforming raw data into actionable intelligence that drives strategic business decisions.",
    principles: ["Real-time Dashboards", "BI Integration", "KPI Tracking"],
    image: ph6,
  },
];

/* ============ VALUE CARD (click to expand) ============ */
const ValueCard = ({ value, index, isActive, onToggle }) => {
  const panelId = `value-panel-${value.id}`;
  return (
    <motion.article
      {...fade(index % 3)}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-300 ${
        isActive
          ? "border-primary-900 bg-primary-900 shadow-xl shadow-primary-900/20"
          : "border-primary-100 bg-white shadow-sm shadow-primary-900/5 hover:-translate-y-1 hover:shadow-lg"
      }`}
    >
      <span
        className={`mb-6 flex h-16 w-16 items-center justify-center rounded-xl text-2xl transition-colors duration-300 ${
          isActive
            ? "bg-accent-400 text-primary-900"
            : "bg-primary-50 text-primary-500 group-hover:bg-primary-500 group-hover:text-white"
        }`}
      >
        <value.icon />
      </span>
      <h3
        className={`mb-3 text-xl font-bold lg:text-2xl ${isActive ? "text-white" : "text-primary-900"}`}
      >
        {value.title}
      </h3>
      <p
        className={`text-base leading-relaxed ${isActive ? "text-white/75" : "text-primary-900/70"}`}
      >
        {value.description}
      </p>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.ul
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-5 space-y-3 overflow-hidden border-t border-white/15 pt-5"
          >
            {value.details.map((d) => (
              <li
                key={d}
                className="flex items-center gap-3 text-base text-white/90"
              >
                <FaCheckCircle className="shrink-0 text-accent-400" />
                {d}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => onToggle(isActive ? null : value.id)}
        aria-expanded={isActive}
        aria-controls={panelId}
        className={`mt-6 inline-flex items-center gap-2 self-start text-base font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 ${
          isActive
            ? "text-accent-400 hover:text-white"
            : "text-primary-500 hover:text-primary-900"
        }`}
      >
        {isActive ? "Show less" : "See what this means"}
        <FaChevronDown
          size={12}
          className={`transition-transform duration-300 ${isActive ? "rotate-180" : ""}`}
        />
      </button>
    </motion.article>
  );
};

/* ============ VALUES GRID ============ */
const ValuesGrid = ({ activeId, onToggle }) => (
  <section className="bg-white py-10 lg:py-12">
    <Container>
      <SectionHead
        eyebrow="What We Stand For"
        title="The Pillars of Our Culture"
        text="Our values shape how we work and the results we deliver for clients worldwide."
      />
      <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {valuesData.map((v, i) => (
          <ValueCard
            key={v.id}
            value={v}
            index={i}
            isActive={activeId === v.id}
            onToggle={onToggle}
          />
        ))}
      </div>
    </Container>
  </section>
);

/* ============ PHILOSOPHY (image cards) ============ */
const Philosophy = () => (
  <section className="bg-primary-50 py-10 lg:py-12">
    <Container>
      <SectionHead eyebrow="How We Think" title="Our Core Philosophy" />
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        {philosophy.map((p, i) => (
          <motion.article
            key={p.id}
            {...fade(i % 2)}
            className="group relative h-[60vh] min-h-[420px] overflow-hidden rounded-2xl"
          >
            <img
              src={p.image}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* One even navy overlay keeps the text readable */}
            <div className="absolute inset-0 bg-primary-900/70" />
            <div className="relative flex h-full flex-col justify-end p-6 lg:p-8">
              <span
                className="mb-4 h-1 w-12 bg-accent-400"
                aria-hidden="true"
              />
              <h3 className="mb-3 text-2xl font-bold text-white lg:text-3xl">
                {p.title}
              </h3>
              <p className="mb-5 max-w-xl text-base text-white/90 lg:text-lg">
                {p.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {p.principles.map((x) => (
                  <li
                    key={x}
                    className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-sm font-medium text-white"
                  >
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </Container>
  </section>
);

/* ============ PAGE ============ */
const ValuesPage = () => {
  const [activeId, setActiveId] = useState(null);
  const handleToggle = useCallback((id) => setActiveId(id), []);

  return (
    <main role="main">
      <Banner image={banner} alt="Innovise values" />
      <ValuesGrid activeId={activeId} onToggle={handleToggle} />
      <Philosophy />
    </main>
  );
};

export default ValuesPage;
