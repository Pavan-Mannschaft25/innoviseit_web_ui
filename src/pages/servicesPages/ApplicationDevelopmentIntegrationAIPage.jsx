// import React, { useState, useEffect, useRef } from "react";
// import {
//   FaLaptopCode,
//   FaProjectDiagram,
//   FaBrain,
//   FaCloud,
//   FaShieldAlt,
//   FaCogs,
//   FaSearch,
//   FaPencilRuler,
//   FaCode,
//   FaPlug,
//   FaRocket,
//   FaChartLine,
//   FaFolderOpen,
//   FaBuilding,
//   FaServer,
//   FaHeadset,
//   FaCheckCircle,
//   FaArrowRight,
//   FaChevronDown,
//   FaComments,
//   FaCalendarAlt,
//   FaCube,
//   FaEnvelope,
//   FaPhone,
//   FaDatabase,
//   FaLock,
//   FaDollarSign,
//   FaUniversity,
//   FaHeartbeat,
//   FaShoppingCart,
//   FaIndustry,
//   FaTruck,
//   FaBolt,
//   FaLandmark,
//   FaRobot,
//   FaCloudUploadAlt,
//   FaMagic,
//   FaUsers,
//   FaBookOpen,
//   FaLinkedin,
//   FaTwitter,
//   FaGithub,
//   FaPlayCircle,
//   FaHandshake,
//   FaFlask,
//   FaStar,
//   FaAward,
//   FaGlobe,
//   FaClipboardList,
// } from "react-icons/fa";
// import {
//   FaAws,
//   FaMicrosoft,
//   FaBrain as FaBrainIcon,
//   FaShieldHalved as FaShieldIcon,
//   FaCircleCheck as FaCheckIcon,
// } from "react-icons/fa6";
// import { motion, AnimatePresence } from "framer-motion";
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
//     light: "#FFF",
//     dark: "#FFF",
//     gradient: "#FFF",
//   },
// };

// // ==================== ANIMATION CONFIG ====================
// const ANIMATION = {
//   stagger: 0.12,
//   duration: 0.6,
//   spring: { type: "spring", stiffness: 300, damping: 25 },
// };

// // ==================== SCROLL REVEAL HOOK ====================
// const useScrollReveal = (threshold = 0.1) => {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold },
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [threshold]);

//   return [ref, isVisible];
// };

// // ==================== HERO SECTION ====================
// const HeroSection = () => {
//   const floatingCards = [
//     {
//       title: "AI & Analytics",
//       icon: FaBrain,
//       desc: "ML & Automation",
//       position: "top-2 left-1/2 -translate-x-1/2",
//       color: "rgba(139,92,246,0.15)",
//       iconColor: "#A78BFA",
//       border: "rgba(139,92,246,0.3)",
//     },
//     {
//       title: "SAP",
//       icon: FaPhone,
//       desc: "ERP Solutions",
//       position: "top-1/2 -translate-y-1/2 left-2",
//       color: "rgba(59,130,246,0.15)",
//       iconColor: "#60A5FA",
//       border: "rgba(59,130,246,0.3)",
//     },
//     {
//       title: "Guidewire",
//       icon: FaShieldAlt,
//       desc: "Insurance Platform",
//       position: "top-1/2 -translate-y-1/2 right-2",
//       color: "rgba(253,185,19,0.15)",
//       iconColor: "#FFF",
//       border: "rgba(253,185,19,0.3)",
//     },
//     {
//       title: "Applications & APIs",
//       icon: FaCode,
//       desc: "Custom Development",
//       position: "bottom-2 left-1/2 -translate-x-1/2",
//       color: "rgba(16,185,129,0.15)",
//       iconColor: "#34D399",
//       border: "rgba(16,185,129,0.3)",
//     },
//     {
//       title: "Cloud Services",
//       icon: FaCloud,
//       position: "top-1/4 left-6",
//       iconColor: "#22D3EE",
//       color: "rgba(34,211,238,0.12)",
//       border: "rgba(34,211,238,0.25)",
//       small: true,
//     },
//     {
//       title: "Data Platform",
//       icon: FaDatabase,
//       position: "top-1/4 right-6",
//       iconColor: "#FBBF24",
//       color: "rgba(251,191,36,0.12)",
//       border: "rgba(251,191,36,0.25)",
//       small: true,
//     },
//     {
//       title: "Security",
//       icon: FaLock,
//       position: "bottom-1/4 left-6",
//       iconColor: "#F87171",
//       color: "rgba(248,113,113,0.12)",
//       border: "rgba(248,113,113,0.25)",
//       small: true,
//     },
//     {
//       title: "Analytics",
//       icon: FaChartLine,
//       position: "bottom-1/4 right-6",
//       iconColor: "#34D399",
//       color: "rgba(52,211,153,0.12)",
//       border: "rgba(52,211,153,0.25)",
//       small: true,
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden pt-10 pb-10 px-4 md:px-8 bg-primary-800">
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div
//           className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//             backgroundSize: "32px 32px",
//           }}
//         />
//         <div
//           className="absolute inset-0 opacity-[0.02]"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
//             `,
//             backgroundSize: "80px 80px",
//           }}
//         />
//         <motion.div
//           animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-20 right-20 w-[450px] h-[450px] rounded-full blur-3xl opacity-[0.07]"
//           style={{ background: "#3B82F6" }}
//         />
//         <motion.div
//           animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 3,
//           }}
//           className="absolute bottom-20 left-20 w-[350px] h-[350px] rounded-full blur-3xl opacity-[0.05]"
//           style={{ background: BRAND.gold.primary }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid lg:grid-cols-1 gap-16 items-center">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-8"
//           >
//             {/* <div
//               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full"
//               style={{
//                 background: `${BRAND.navy.mid}08`,
//                 border: "2px solid #FFF",
//               }}
//             >
//               <span
//                 className="w-2 h-2 rounded-full animate-pulse"
//                 style={{ background: BRAND.gold.primary }}
//               ></span>
//               <span
//                 className="text-sm font-semibold"
//                 style={{ color: BRAND.gold.primary }}
//               >
//                 Application Development • Integration Services • AI
//               </span>
//             </div> */}
//             {/* Badge */}
//             <div className="inline-flex items-center gap-3 mb-8">
//               <motion.div
//                 className="w-6 h-6 md:w-10 md:h-10 rounded-xl flex items-center justify-center"
//                 whileHover={{ rotate: 12 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 style={{
//                   background: ``,
//                   border: `1px solid ${BRAND.gold.primary}30`,
//                 }}
//               >
//                 <FaRobot
//                   className="text-xs md:text-lg"
//                   style={{ color: BRAND.gold.primary }}
//                 />
//               </motion.div>
//               <span
//                 className="text-[10px] md:text-sm font-bold uppercase tracking-[0.25em]"
//                 style={{ color: BRAND.gold.primary }}
//               >
//                 <AnimatedText text="AI & Engineering Services" />
//               </span>
//             </div>

//             <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight text-white">
//               Transforming Enterprises Through{" "}
//               <span>Intelligent Applications</span>, Seamless Integrations &{" "}
//               <span>AI-Powered Innovation</span>
//             </h1>

//             <p className="text-lg md:text-xl text-white max-w-xl leading-relaxed">
//               Innovise delivers enterprise-grade application development, system
//               integration, and AI solutions that help organizations modernize
//               operations, improve customer experiences, and accelerate digital
//               transformation.
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-15px); }
//         }
//         @keyframes pulseRing {
//           0% { transform: scale(1); opacity: 0.6; }
//           100% { transform: scale(1.5); opacity: 0; }
//         }
//         .btn-primary { position: relative; overflow: hidden; }
//         .btn-primary::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); transition: left 0.5s; }
//         .btn-primary:hover::before { left: 100%; }
//       `}</style>
//     </section>
//   );
// };

// // ==================== TRUSTED BY SECTION ====================
// const TrustedBySection = () => {
//   const partners = [
//     { name: "SAP", icon: FaPhone },
//     { name: "Guidewire", icon: FaShieldAlt },
//     { name: "AWS", icon: FaAws },
//     { name: "Azure", icon: FaMicrosoft },
//     { name: "OpenAI", icon: FaBrainIcon },
//     { name: "Tricentis", icon: FaCheckIcon },
//     { name: "Onapsis", icon: FaShieldIcon },
//   ];

//   return (
//     <section
//       className="py-14 relative overflow-hidden"
//       style={{
//         background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-4 md:px-8">
//         <p className="text-center text-sm uppercase tracking-wider mb-8 font-medium text-white/40">
//           Trusted by Leading Enterprises Worldwide
//         </p>
//         <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
//           {partners.map((partner, index) => (
//             <div
//               key={index}
//               className="group flex items-center gap-3 opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer"
//             >
//               <partner.icon className="text-2xl md:text-3xl text-white/50 group-hover:text-[#FFF] transition-colors" />
//               <span className="text-lg md:text-xl font-semibold text-white/50 group-hover:text-white transition-colors">
//                 {partner.name}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== WHY INNOVISE SECTION ====================
// const WhyInnoviseSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const cards = [
//     {
//       title: "Application Development",
//       icon: FaLaptopCode,
//       features: [
//         "Web Applications",
//         "Mobile Apps",
//         "Enterprise Platforms",
//         "Cloud Native Solutions",
//       ],
//       gradient: "",
//       color: "#FFF",
//     },
//     {
//       title: "Integration Services",
//       icon: FaProjectDiagram,
//       features: [
//         "SAP Integration",
//         "Guidewire Integration",
//         "API Development",
//         "Middleware Solutions",
//       ],
//       gradient: "",
//       color: "#FFF",
//     },
//     {
//       title: "Artificial Intelligence",
//       icon: FaBrain,
//       features: [
//         "Generative AI",
//         "Automation",
//         "Predictive Analytics",
//         "Machine Learning",
//       ],
//       gradient: "",
//       color: "#FFF",
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="py-12 px-4 md:px-8 bg-white relative overflow-hidden"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div
//         className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.03] translate-x-1/3 -translate-y-1/3"
//         style={{ background: BRAND.navy.lighter }}
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <span
//             className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
//             style={{
//               background: `${BRAND.navy.mid}08`,
//               color: BRAND.navy.dark,
//               border: `1px solid ${BRAND.navy.mid}15`,
//             }}
//           >
//             Why Choose Innovise
//           </span>
//           <h2
//             className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto leading-tight"
//             style={{ color: BRAND.navy.dark }}
//           >
//             Engineering Business Growth Through{" "}
//             <span>Technology Excellence</span>
//           </h2>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {cards.map((card, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * ANIMATION.stagger }}
//               whileHover={{ y: -8 }}
//               className="group cursor-pointer"
//             >
//               <div className="h-full rounded-3xl p-8 overflow-hidden transition-all duration-500 bg-primary-800">
//                 <div
//                   className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//                   style={{ background: BRAND.navy.dark }}
//                 />

//                 <div
//                   className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
//                   style={{
//                     background: "#FFF",

//                     border: `1px solid ${card.color}40`,
//                   }}
//                 >
//                   <card.icon
//                     className="text-2xl"
//                     style={{ color: BRAND.navy.dark }}
//                   />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-5 text-white group-hover:text-[#FFF] transition-colors">
//                   {card.title}
//                 </h3>
//                 <ul className="space-y-3">
//                   {card.features.map((feature, idx) => (
//                     <li
//                       key={idx}
//                       className="flex items-center gap-3 text-white/70"
//                     >
//                       <FaCheckCircle
//                         className="text-sm"
//                         style={{ color: BRAND.gold.primary }}
//                       />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== SERVICES SECTION ====================
// const ServicesSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const services = [
//     {
//       title: "Custom Application Development",
//       icon: FaLaptopCode,
//       desc: "Tailored solutions built for your unique business needs",
//       color: BRAND.navy.dark,
//       status: "DEV",
//     },
//     {
//       title: "Enterprise Integrations",
//       icon: FaProjectDiagram,
//       desc: "Seamless connectivity across your entire tech stack",
//       color: BRAND.navy.dark,
//       status: "CONNECT",
//     },
//     {
//       title: "AI & Automation",
//       icon: FaBrain,
//       desc: "Intelligent automation to drive efficiency and innovation",
//       color: BRAND.navy.dark,
//       status: "AI",
//     },
//     {
//       title: "Cloud Engineering",
//       icon: FaCloud,
//       desc: "Scalable cloud infrastructure and migration services",
//       color: BRAND.navy.dark,
//       status: "CLOUD",
//     },
//     {
//       title: "Quality Assurance",
//       icon: FaShieldAlt,
//       desc: "Comprehensive testing for flawless performance",
//       color: BRAND.navy.dark,
//       status: "QA",
//     },
//     {
//       title: "Managed Services",
//       icon: FaCogs,
//       desc: "24/7 monitoring and support for peace of mind",
//       color: BRAND.navy.dark,
//       status: "ACTIVE",
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="py-12 px-4 md:px-8 relative overflow-hidden bg-primary-800"
//       style={{
//         // background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 100%)`,
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFF]/10 blur-3xl rounded-full"></div>
//       <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#102B4C] blur-3xl rounded-full"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <span
//             className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border"
//             style={{
//               background: `${BRAND.navy.mid}08`,
//               color: "#FFF",
//               borderColor: "rgba(253,185,19,0.25)",
//             }}
//           >
//             Our Services
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
//             Comprehensive <span>Digital Solutions</span>
//           </h2>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * ANIMATION.stagger }}
//               whileHover={{ y: -8 }}
//               className="group cursor-pointer"
//             >
//               <div
//                 className="relative h-full rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-700"
//                 style={{
//                   background: "rgba(255,255,255,0.04)",
//                   border: "1px solid rgba(255,255,255,0.08)",
//                   boxShadow: "0 10px 35px rgba(0,0,0,0.2)",
//                 }}
//               >
//                 {/* Status Badge */}
//                 <div className="absolute top-5 right-5 z-20">
//                   <span
//                     className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
//                     style={{
//                       background: `${service.color}15`,
//                       color: "#FFF",
//                       border: `1px solid ${service.color}30`,
//                     }}
//                   >
//                     <motion.span
//                       animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
//                       transition={{ duration: 2, repeat: Infinity }}
//                       className="w-1.5 h-1.5 rounded-full inline-block"
//                       style={{ background: "#FFF" }}
//                     />
//                     {service.status}
//                   </span>
//                 </div>

//                 {/* Glow */}
//                 <div
//                   className="absolute top-0 right-0 w-40 h-40 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
//                   style={{ background: `${service.color}15` }}
//                 />

//                 <div className="relative z-10 p-8 pt-16">
//                   <div
//                     className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
//                     style={{
//                       background: `${service.color}15`,
//                       border: `1px solid ${service.color}30`,
//                     }}
//                   >
//                     <service.icon
//                       className="text-xl"
//                       style={{ color: "#FFF" }}
//                     />
//                   </div>
//                   <h3 className="text-lg font-bold mb-2 text-white group-hover:text-[#FFF] transition-colors">
//                     {service.title}
//                   </h3>
//                   <p className="text-sm text-white/50 leading-relaxed">
//                     {service.desc}
//                   </p>
//                   {/* <div
//                     className="mt-4 pt-4 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
//                     style={{
//                       color: service.color,
//                       borderTop: "1px solid rgba(255,255,255,0.06)",
//                     }}
//                   >
//                     Learn More <FaArrowRight className="text-xs" />
//                   </div> */}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== TRANSFORMATION JOURNEY SECTION ====================
// const TransformationJourneySection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const steps = [
//     {
//       title: "Discover",
//       icon: FaSearch,
//       desc: "Understand business requirements, identify challenges, and define the project scope and objectives.",
//       color: "#3B82F6",
//     },
//     {
//       title: "Prepare",
//       icon: FaClipboardList,
//       desc: "Establish the project team, create the implementation plan, and set up the development environment.",
//       color: "#06B6D4",
//     },
//     {
//       title: "Explore",
//       icon: FaPencilRuler,
//       desc: "Analyze business processes, design the solution architecture, and finalize integrations and requirements.",
//       color: "#F59E0B",
//     },
//     {
//       title: "Realize",
//       icon: FaCode,
//       desc: "Develop the application, configure features, perform testing, and validate the solution.",
//       color: "#10B981",
//     },
//     {
//       title: "Deploy",
//       icon: FaRocket,
//       desc: "Execute production deployment, data migration, and go-live activities with minimal disruption.",
//       color: BRAND.gold.primary,
//     },
//     {
//       title: "Run",
//       icon: FaChartLine,
//       desc: "Provide ongoing support, monitor performance, optimize the application, and deliver continuous enhancements.",
//       color: "#8B5CF6",
//     },
//   ];
//   return (
//     <section
//       ref={ref}
//       className="py-12 px-4 md:px-8 bg-white relative overflow-hidden"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <span
//             className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
//             style={{
//               background: "#FFF",
//               color: BRAND.navy.dark,
//               border: "1px solid rgba(253,185,19,0.2)",
//             }}
//           >
//             Our Process
//           </span>
//           <h2
//             className="text-3xl md:text-4xl lg:text-5xl font-bold"
//             style={{ color: BRAND.navy.dark }}
//           >
//             Digital Transformation <span>Journey</span>
//           </h2>
//         </div>

//         {/* Desktop View */}
//         <div className="hidden lg:block">
//           <div className="grid grid-cols-3 gap-4">
//             {steps.map((step, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="group relative"
//               >
//                 <div
//                   className="h-full p-6 rounded-3xl transition-all duration-500 hover:-translate-y-2"
//                   style={{
//                     background: "white",
//                     border: `1px solid rgba(0,0,0,0.08)`,
//                     boxShadow: "0 4px 20px rgba(11,29,51,0.06)",
//                   }}
//                 >
//                   <div
//                     className="absolute top-4 right-4 text-4xl font-black opacity-5"
//                     style={{ color: BRAND.navy.dark }}
//                   >
//                     {index + 1}
//                   </div>

//                   <div
//                     className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg"
//                     style={{
//                       background: BRAND.gold.gradient,
//                     }}
//                   >
//                     <step.icon
//                       className="text-xl"
//                       style={{ color: BRAND.navy.dark }}
//                     />
//                   </div>

//                   <h4
//                     className="text-lg font-bold mb-1"
//                     style={{ color: BRAND.navy.dark }}
//                   >
//                     {step.title}
//                   </h4>
//                   <p
//                     className="text-xs font-semibold uppercase tracking-wider mb-2"
//                     style={{ color: BRAND.gold.primary }}
//                   >
//                     Step {index + 1}
//                   </p>
//                   <p className="text-sm leading-relaxed text-slate-500">
//                     {step.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Mobile View */}
//         <div className="lg:hidden space-y-8">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="flex gap-5"
//             >
//               <div className="flex flex-col items-center">
//                 <div
//                   className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
//                   style={{
//                     background: BRAND.gold.gradient,
//                     boxShadow: `0 8px 24px rgba(253,185,19,0.25)`,
//                   }}
//                 >
//                   <step.icon
//                     className="text-lg"
//                     style={{ color: BRAND.navy.dark }}
//                   />
//                 </div>
//                 {index < steps.length - 1 && (
//                   <div
//                     className="w-0.5 flex-1 mt-3"
//                     style={{
//                       background: `linear-gradient(to bottom, ${BRAND.gold.primary}, rgba(253,185,19,0.1))`,
//                     }}
//                   />
//                 )}
//               </div>
//               <div className="pb-8">
//                 <h4
//                   className="font-bold text-lg mb-1"
//                   style={{ color: BRAND.navy.dark }}
//                 >
//                   {step.title}
//                 </h4>
//                 <p
//                   className="text-xs font-semibold uppercase tracking-wider mb-2"
//                   style={{ color: BRAND.gold.primary }}
//                 >
//                   Step {index + 1}
//                 </p>
//                 <p className="text-sm leading-relaxed text-slate-500">
//                   {step.desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== TECHNOLOGY ECOSYSTEM SECTION ====================
// const TechnologyEcosystemSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const ecosystems = {
//     Enterprise: ["SAP", "Guidewire", "Service Now"],
//     Development: ["React", "Angular", "Node.js", "Java", ".NET"],
//     Cloud: ["AWS", "Azure", "Google Cloud"],
//     AI: ["OpenAI", "Machine Learning", "Automation", "Analytics"],
//   };

//   const categoryIcons = {
//     Enterprise: FaBuilding,
//     Development: FaCode,
//     Cloud: FaCloud,
//     AI: FaBrain,
//   };

//   const categoryColors = {
//     Enterprise: "#FFF",
//     Development: "#FFF",
//     Cloud: "#FFF",
//     AI: "#FFF",
//   };

//   return (
//     <section
//       ref={ref}
//       className="py-12 px-4 md:px-8 relative overflow-hidden bg-primary-800"
//       style={{
//         // background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//           backgroundSize: "32px 32px",
//         }}
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <span
//             className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border"
//             style={{
//               background: `${BRAND.navy.mid}08`,
//               color: "#FFF",
//             }}
//           >
//             Technology Stack
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
//             Our Technology <span style={{ color: "#FFF" }}>Ecosystem</span>
//           </h2>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {Object.entries(ecosystems).map(
//             ([category, technologies], catIndex) => {
//               const Icon = categoryIcons[category];
//               const color = categoryColors[category];
//               return (
//                 <motion.div
//                   key={catIndex}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: catIndex * 0.1 }}
//                   whileHover={{ y: -6 }}
//                   className="rounded-2xl p-6 transition-all duration-300"
//                   style={{
//                     background: "rgba(255,255,255,0.04)",
//                     border: "1px solid rgba(255,255,255,0.08)",
//                     boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
//                   }}
//                 >
//                   <div className="flex items-center gap-3 mb-5">
//                     <div
//                       className="w-10 h-10 rounded-lg flex items-center justify-center"
//                       style={{
//                         background: BRAND.navy.mid,
//                       }}
//                     >
//                       <Icon className="text-base" style={{ color }} />
//                     </div>
//                     <h3 className="text-lg font-bold" style={{ color }}>
//                       {category}
//                     </h3>
//                   </div>
//                   <div className="flex flex-wrap gap-2">
//                     {technologies.map((tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className="px-4 py-2 rounded-full text-sm cursor-default font-medium transition-all hover:scale-105"
//                         style={{
//                           background: "rgba(255,255,255,0.05)",
//                           border: "1px solid rgba(255,255,255,0.1)",
//                           color: "rgba(255,255,255,0.7)",
//                         }}
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </motion.div>
//               );
//             },
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== BUSINESS IMPACT SECTION ====================
// const BusinessImpactSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const metrics = [
//     {
//       value: "40%",
//       label: "Faster Delivery",
//       icon: FaRocket,
//       color: BRAND.gold.primary,
//     },
//     {
//       value: "60%",
//       label: "Reduction in Manual Processes",
//       icon: FaCogs,
//       color: "#10B981",
//     },
//     {
//       value: "99.9%",
//       label: "System Availability",
//       icon: FaServer,
//       color: "#3B82F6",
//     },
//     {
//       value: "30%",
//       label: "Lower Operational Costs",
//       icon: FaDollarSign,
//       color: "#8B5CF6",
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="pb-10 px-4 md:px-8 relative overflow-hidden bg-primary-800"
//       style={{
//         // background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 50%, ${BRAND.navy.lighter} 100%)`,
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//           backgroundSize: "32px 32px",
//         }}
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <span
//             className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border"
//             style={{
//               background: `${BRAND.navy.mid}08`,
//               color: "#FFF",
//               borderColor: "rgba(253,185,19,0.25)",
//             }}
//           >
//             Results That Matter
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
//             Delivering Measurable{" "}
//             <span style={{ color: "#FFF" }}>Business Impact</span>
//           </h2>
//         </div>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {metrics.map((metric, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -8, scale: 1.02 }}
//               className="text-center rounded-3xl p-8 border border-white/10 backdrop-blur-xl"
//               style={{ background: "rgba(255,255,255,0.05)" }}
//             >
//               <div
//                 className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
//                 style={{
//                   background: `${metric.color}15`,
//                   border: `1px solid ${metric.color}30`,
//                 }}
//               >
//                 <metric.icon
//                   className="text-2xl"
//                   style={{ color: metric.color }}
//                 />
//               </div>
//               <div
//                 className="text-white mb-2"
//                 style={{
//                   fontSize: "clamp(48px, 8vw, 80px)",
//                   fontWeight: 800,
//                   lineHeight: 1,
//                 }}
//               >
//                 {metric.value}
//               </div>
//               <div className="text-white/50 font-medium">{metric.label}</div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== INDUSTRIES SECTION ====================
// const IndustriesSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const industries = [
//     { name: "Insurance", icon: FaShieldAlt, color: "#3B82F6" },
//     { name: "Banking", icon: FaUniversity, color: "#3B82F6" },
//     { name: "Healthcare", icon: FaHeartbeat, color: "#3B82F6" },
//     { name: "Retail", icon: FaShoppingCart, color: "#3B82F6" },
//     { name: "Manufacturing", icon: FaIndustry, color: "#3B82F6" },
//     { name: "Logistics", icon: FaTruck, color: "#3B82F6" },
//     { name: "Energy", icon: FaBolt, color: "#3B82F6" },
//     { name: "Public Sector", icon: FaLandmark, color: "#3B82F6" },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="py-12 px-4 md:px-8 bg-white relative overflow-hidden"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <span
//             className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
//             style={{
//               background: "#FFF",
//               color: BRAND.navy.dark,
//               border: "1px solid rgba(253,185,19,0.2)",
//             }}
//           >
//             Industries We Serve
//           </span>
//           <h2
//             className="text-3xl md:text-4xl lg:text-5xl font-bold"
//             style={{ color: BRAND.navy.dark }}
//           >
//             Expertise Across <span>Industries</span>
//           </h2>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
//           {industries.map((industry, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.08 }}
//               whileHover={{ y: -8, scale: 1.05 }}
//               className="group cursor-pointer"
//             >
//               <div
//                 className="rounded-2xl p-6 text-center transition-all duration-500"
//                 style={{
//                   background: "white",
//                   border: "1px solid rgba(0,0,0,0.06)",
//                   boxShadow: "0 4px 20px rgba(11,29,51,0.06)",
//                 }}
//               >
//                 <div
//                   className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
//                   style={{
//                     background: BRAND.navy.dark,
//                   }}
//                 >
//                   <industry.icon
//                     className="text-2xl"
//                     style={{ color: "#FFF" }}
//                   />
//                 </div>
//                 <h3
//                   className="font-semibold"
//                   style={{ color: BRAND.navy.dark }}
//                 >
//                   {industry.name}
//                 </h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== CASE STUDIES SECTION ====================
// const CaseStudiesSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const cases = [
//     {
//       title: "Enterprise Integration Program",
//       description:
//         "Connected SAP, CRM and third-party systems through a centralized integration layer.",
//       results: [
//         "45% Faster Processing",
//         "Reduced Data Errors",
//         "Improved User Experience",
//       ],
//       icon: FaProjectDiagram,
//       color: BRAND.gold.primary,
//     },
//     {
//       title: "AI Automation Initiative",
//       description:
//         "Implemented intelligent automation reducing manual workload by 70% while improving accuracy.",
//       results: [
//         "70% Less Manual Work",
//         "95% Accuracy Rate",
//         "$2M Annual Savings",
//       ],
//       icon: FaRobot,
//       color: BRAND.gold.primary,
//     },
//     {
//       title: "Cloud Modernization Project",
//       description:
//         "Migrated legacy on-premise infrastructure to AWS with zero downtime.",
//       results: [
//         "Zero Downtime Migration",
//         "60% Cost Reduction",
//         "Auto-scaling Enabled",
//       ],
//       icon: FaCloudUploadAlt,
//       color: BRAND.gold.primary,
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="py-16 px-4 md:px-8 relative overflow-hidden bg-primary-800"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//           backgroundSize: "32px 32px",
//         }}
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <span
//             className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border"
//             style={{
//               background: `${BRAND.navy.mid}08`,
//               color: "#FFF",
//               borderColor: "rgba(253,185,19,0.25)",
//             }}
//           >
//             Success Stories
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
//             Featured <span style={{ color: "#FFF" }}>Case Studies</span>
//           </h2>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {cases.map((caseStudy, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.15 }}
//               whileHover={{ y: -8 }}
//               className="group cursor-pointer"
//             >
//               <div
//                 className="rounded-3xl overflow-hidden backdrop-blur-xl"
//                 style={{
//                   background: "rgba(255,255,255,0.04)",
//                   border: "1px solid rgba(255,255,255,0.08)",
//                   boxShadow: "0 10px 35px rgba(0,0,0,0.2)",
//                 }}
//               >
//                 {/* Top Accent */}
//                 <div
//                   className="h-1"
//                   style={{
//                     background: `linear-gradient(90deg, ${caseStudy.color}, transparent)`,
//                   }}
//                 />

//                 <div className="p-8">
//                   <div
//                     className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
//                     style={{
//                       background: `${caseStudy.color}15`,
//                       border: `1px solid ${caseStudy.color}30`,
//                     }}
//                   >
//                     <caseStudy.icon
//                       className="text-xl"
//                       style={{ color: caseStudy.color }}
//                     />
//                   </div>
//                   <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#FFF] transition-colors">
//                     {caseStudy.title}
//                   </h3>
//                   <p className="text-white/50 mb-6 text-sm leading-relaxed">
//                     {caseStudy.description}
//                   </p>
//                   {/* <div
//                     style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
//                     className="pt-4"
//                   >
//                     <p
//                       className="text-xs uppercase tracking-wider mb-3 font-semibold"
//                       style={{ color: BRAND.gold.primary }}
//                     >
//                       Key Results:
//                     </p>
//                     <ul className="space-y-2">
//                       {caseStudy.results.map((result, idx) => (
//                         <li
//                           key={idx}
//                           className="flex items-center gap-2 text-sm text-white/70"
//                         >
//                           <FaCheckCircle
//                             className="text-xs"
//                             style={{ color: BRAND.gold.primary }}
//                           />
//                           <span>{result}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div> */}
//                   {/* <button
//                     className="mt-6 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
//                     style={{ color: caseStudy.color }}
//                   >
//                     Read Full Case Study <FaArrowRight />
//                   </button> */}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== AI INNOVATION SECTION ====================
// const AIInnovationSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const features = [
//     {
//       title: "Generative AI Solutions",
//       icon: FaMagic,
//       desc: "Create content, code, and insights automatically",
//     },
//     {
//       title: "Intelligent Automation",
//       icon: FaRobot,
//       desc: "Streamline workflows with smart automation",
//     },
//     {
//       title: "Predictive Analytics",
//       icon: FaChartLine,
//       desc: "Forecast trends and make data-driven decisions",
//     },
//     {
//       title: "AI-Powered Experiences",
//       icon: FaUsers,
//       desc: "Deliver personalized customer interactions",
//     },
//     {
//       title: "Knowledge Management",
//       icon: FaBookOpen,
//       desc: "Organize and retrieve information intelligently",
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="py-12 px-4 md:px-8 relative overflow-hidden"
//       style={{
//         background: BRAND.gold.light,
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div
//         className="absolute inset-0 opacity-[0.06]"
//         style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, ${BRAND.navy.dark} 1px, transparent 0)`,
//           backgroundSize: "24px 24px",
//         }}
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div>
//             <p
//               className="font-bold mb-4 uppercase tracking-wider text-sm"
//               style={{ color: BRAND.navy.dark }}
//             >
//               AI Innovation
//             </p>
//             <h2
//               className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
//               style={{ color: BRAND.navy.dark }}
//             >
//               Unlock the Power of
//               <br />
//               <span style={{ color: BRAND.navy.mid }}>
//                 Artificial Intelligence
//               </span>
//             </h2>
//             <p
//               className="text-lg mb-8 leading-relaxed"
//               style={{ color: BRAND.navy.light }}
//             >
//               Harness cutting-edge AI capabilities to transform your business
//               operations, enhance decision-making, and create unprecedented
//               competitive advantages.
//             </p>
//             {/* <button
//               className="px-8 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
//               style={{
//                 background: BRAND.navy.dark,
//                 color: BRAND.gold.primary,
//               }}
//             >
//               Explore AI Solutions <FaArrowRight />
//             </button> */}
//           </div>
//           <div className="grid gap-4">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ x: -4 }}
//                 className="rounded-xl p-5 flex items-start gap-4 cursor-pointer shadow-md transition-all hover:shadow-xl"
//                 style={{
//                   background: "rgba(255,255,255,0.95)",
//                   backdropFilter: "blur(8px)",
//                 }}
//               >
//                 <div
//                   className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
//                   style={{ background: BRAND.navy.dark }}
//                 >
//                   <feature.icon style={{ color: BRAND.gold.primary }} />
//                 </div>
//                 <div>
//                   <h3
//                     className="font-bold mb-1"
//                     style={{ color: BRAND.navy.dark }}
//                   >
//                     {feature.title}
//                   </h3>
//                   <p className="text-sm" style={{ color: BRAND.navy.light }}>
//                     {feature.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== STATS SECTION ====================
// const StatsSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const stats = [
//     {
//       value: "250+",
//       label: "Projects Delivered",
//       icon: FaFolderOpen,
//       color: BRAND.gold.primary,
//     },
//     {
//       value: "50+",
//       label: "Enterprise Clients",
//       icon: FaBuilding,
//       color: "#3B82F6",
//     },
//     {
//       value: "99.9%",
//       label: "Service Availability",
//       icon: FaServer,
//       color: "#10B981",
//     },
//     {
//       value: "24/7",
//       label: "Global Support",
//       icon: FaHeadset,
//       color: "#8B5CF6",
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="py-12 px-4 md:px-8 bg-white relative overflow-hidden"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="text-center"
//             >
//               <div
//                 className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4"
//                 style={{
//                   background: `${stat.color}12`,
//                   border: `1px solid ${stat.color}25`,
//                 }}
//               >
//                 <stat.icon className="text-3xl" style={{ color: stat.color }} />
//               </div>
//               <div
//                 className="mb-2"
//                 style={{
//                   fontSize: "clamp(48px, 8vw, 80px)",
//                   fontWeight: 800,
//                   lineHeight: 1,
//                   backgroundImage: BRAND.gold.gradient,
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}
//               >
//                 {stat.value}
//               </div>
//               <div className="text-slate-600 font-medium">{stat.label}</div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== CTA SECTION ====================
// const CTABannerSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   return (
//     <section
//       ref={ref}
//       className="py-12 px-4 md:px-8 relative overflow-hidden"
//       style={{
//         background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, #0A1628 50%, ${BRAND.navy.mid} 100%)`,
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div
//         className="absolute inset-0 opacity-[0.04]"
//         style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//           backgroundSize: "32px 32px",
//         }}
//       />

//       <motion.div
//         animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-10 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.08]"
//         style={{ background: "#3B82F6" }}
//       />
//       <motion.div
//         animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 2,
//         }}
//         className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.06]"
//         style={{ background: BRAND.gold.primary }}
//       />

//       <div className="max-w-5xl mx-auto px-4 lg:px-8 relative z-10 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//             className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8"
//             style={{
//               background: `${BRAND.navy.mid}08`,
//               border: "2px solid rgba(253,185,19,0.25)",
//             }}
//           >
//             <FaRocket
//               className="text-3xl"
//               style={{ color: BRAND.gold.primary }}
//             />
//           </motion.div>

//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
//             Ready to Modernize Your{" "}
//             <span
//               style={{
//                 backgroundImage: BRAND.gold.gradient,
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Enterprise?
//             </span>
//           </h2>

//           <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
//             From application development to enterprise integrations and AI
//             innovation, Innovise helps businesses build future-ready digital
//             ecosystems.
//           </p>

//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
//             <a
//               href="/contact"
//               className="group relative px-10 py-5 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
//               style={{
//                 background: BRAND.gold.gradient,
//                 color: BRAND.navy.dark,
//                 boxShadow: `0 10px 40px rgba(253,185,19,0.25)`,
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
//               href="/contact"
//               className="group px-8 py-5 rounded-xl font-bold text-lg text-white flex items-center gap-3 transition-all duration-300"
//               style={{
//                 border: "2px solid rgba(255,255,255,0.2)",
//                 background: "rgba(255,255,255,0.05)",
//               }}
//             >
//               <FaPlayCircle style={{ color: BRAND.gold.primary }} />
//               Request a Consultation
//             </a>
//           </div>

//           <div
//             className="flex flex-wrap items-center justify-center gap-8 pt-8"
//             style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
//           >
//             {[
//               { value: "Free Assessment", icon: FaSearch },
//               { value: "Proof of Concept", icon: FaFlask },
//               { value: "Flexible Engagement", icon: FaHandshake },
//             ].map((item, idx) => (
//               <div key={idx} className="flex items-center gap-2 text-white/60">
//                 <item.icon
//                   className="text-sm"
//                   style={{ color: BRAND.gold.primary }}
//                 />
//                 <span className="text-sm font-medium">{item.value}</span>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // ==================== FOOTER ====================
// const Footer = () => {
//   const footerLinks = [
//     {
//       title: "Services",
//       links: ["App Development", "Integration", "AI Solutions"],
//     },
//     { title: "Company", links: ["About Us", "Careers", "Contact"] },
//     { title: "Resources", links: ["Case Studies", "Blog", "Documentation"] },
//     {
//       title: "Contact",
//       links: ["info@innovise.com", "+1 (555) 123-4567"],
//       icons: true,
//     },
//   ];

//   return (
//     <footer
//       className="py-14 px-4 md:px-8"
//       style={{ background: BRAND.navy.dark }}
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//           <div className="flex items-center gap-3">
//             <div
//               className="w-11 h-11 rounded-xl flex items-center justify-center shadow-lg"
//               style={{ background: BRAND.gold.gradient }}
//             >
//               <FaCube className="text-white text-lg" />
//             </div>
//             <span className="text-xl font-bold text-white">Innovise</span>
//           </div>
//           <p className="text-white/30 text-sm">
//             © 2024 Innovise Solutions. All rights reserved.
//           </p>
//           <div className="flex gap-3">
//             {[FaLinkedin, FaTwitter, FaGithub].map((SocialIcon, i) => (
//               <a
//                 key={i}
//                 href="#"
//                 className="w-10 h-10 rounded-full flex items-center justify-center transition-colors group"
//                 style={{
//                   background: "rgba(255,255,255,0.05)",
//                   border: "1px solid rgba(255,255,255,0.08)",
//                 }}
//               >
//                 <SocialIcon className="text-white/40 group-hover:text-[#FFF] transition-colors" />
//               </a>
//             ))}
//           </div>
//         </div>

//         <div
//           className="mt-10 pt-8 grid md:grid-cols-4 gap-8 text-center md:text-left"
//           style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
//         >
//           {footerLinks.map((section, i) => (
//             <div key={i}>
//               <h4 className="font-semibold text-white mb-3">{section.title}</h4>
//               <ul className="space-y-2 text-sm text-white/40">
//                 {section.links.map((link, j) => (
//                   <li key={j}>
//                     <a
//                       href="#"
//                       className="hover:text-[#FFF] transition-colors flex items-center justify-center md:justify-start gap-2"
//                     >
//                       {section.icons && j === 0 && <FaEnvelope />}
//                       {section.icons && j === 1 && <FaPhone />}
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// // ==================== MAIN PAGE COMPONENT ====================
// const ApplicationDevelopmentIntegrationAIPage = () => {
//   return (
//     <div className="min-h-screen" style={{ background: "#ffffff" }}>
//       <HeroSection />
//       {/* <TrustedBySection /> */}
//       <WhyInnoviseSection />
//       <ServicesSection />
//       <TransformationJourneySection />
//       <TechnologyEcosystemSection />
//       {/* <BusinessImpactSection /> */}
//       <IndustriesSection />
//       <CaseStudiesSection />
//       <AIInnovationSection />
//       {/* <StatsSection /> */}
//       {/* <CTABannerSection /> */}
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default ApplicationDevelopmentIntegrationAIPage;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaLaptopCode,
  FaProjectDiagram,
  FaBrain,
  FaCloud,
  FaCogs,
  FaDatabase,
  FaBuilding,
  FaCode,
  FaSearch,
  FaCompass,
  FaPencilRuler,
  FaRocket,
  FaSyncAlt,
  FaShieldAlt,
  FaUniversity,
  FaHeartbeat,
  FaIndustry,
  FaShoppingCart,
  FaBolt,
  FaMagic,
  FaRobot,
  FaChartLine,
  FaUsers,
  FaBookOpen,
} from "react-icons/fa";

/* ============ DATA ============ */
const hubNodes = [
  { icon: FaLaptopCode, label: "Applications" },
  { icon: FaProjectDiagram, label: "Integrations" },
  { icon: FaBrain, label: "AI & Automation" },
  { icon: FaCloud, label: "Cloud" },
  { icon: FaBuilding, label: "Enterprise Platforms" },
  { icon: FaDatabase, label: "Data" },
];

const focus = [
  {
    icon: FaLaptopCode,
    title: "Application Development",
    desc: "Build modern, scalable, and secure applications that solve complex business challenges.",
    features: [
      "Custom Application Development",
      "Modernization & Re-platforming",
      "Low-Code Development",
    ],
  },
  {
    icon: FaProjectDiagram,
    title: "Enterprise Integration",
    desc: "Connect people, systems, and data across your enterprise for seamless operations.",
    features: [
      "API Development & Management",
      "Legacy System Integration",
      "Event-Driven Architecture",
    ],
  },
  {
    icon: FaBrain,
    title: "AI & Automation",
    desc: "Unlock the power of data and AI to enable smarter operations and better outcomes.",
    features: [
      "Generative AI Solutions",
      "Intelligent Process Automation",
      "Predictive Analytics",
    ],
  },
];

/* `path` = page opened by each card's "Learn More". Replace with your real routes. */
const services = [
  {
    icon: FaLaptopCode,
    title: "Application Engineering",
    desc: "Custom development, modernization, and platform engineering.",
    path: "/services/application-engineering",
  },
  {
    icon: FaProjectDiagram,
    title: "Integration & APIs",
    desc: "Seamless integration across applications, systems, and data.",
    path: "/services/integration-apis",
  },
  {
    icon: FaBrain,
    title: "AI & Intelligent Automation",
    desc: "AI-driven solutions to automate and optimize operations.",
    path: "/services/ai-automation",
  },
  {
    icon: FaCloud,
    title: "Cloud & DevOps",
    desc: "Build, deploy, and scale on modern cloud platforms.",
    path: "/services/cloud-devops",
  },
  {
    icon: FaDatabase,
    title: "Data Engineering",
    desc: "Data integration, analytics, and intelligent data platforms.",
    path: "/services/data-engineering",
  },
  {
    icon: FaCogs,
    title: "Managed Services",
    desc: "Ongoing support, optimization, and continuous improvement.",
    path: "/services/managed-services",
  },
];

const journey = [
  {
    icon: FaSearch,
    title: "Discover",
    desc: "Understand business goals and current landscape.",
  },
  {
    icon: FaCompass,
    title: "Strategy",
    desc: "Define solution strategy and roadmap.",
  },
  {
    icon: FaPencilRuler,
    title: "Design",
    desc: "Design the architecture and user experience.",
  },
  {
    icon: FaCode,
    title: "Build",
    desc: "Develop, integrate, and test the solution.",
  },
  {
    icon: FaRocket,
    title: "Deploy",
    desc: "Ensure smooth deployment and go-live.",
  },
  {
    icon: FaSyncAlt,
    title: "Run & Optimize",
    desc: "Support, monitor, and continuously improve.",
  },
];

const ecosystem = [
  {
    icon: FaBuilding,
    title: "Enterprise Platforms",
    tech: ["SAP", "Guidewire", "ServiceNow"],
  },
  {
    icon: FaCode,
    title: "Development Technologies",
    tech: ["React", "Angular", "Node.js", "Java", ".NET"],
  },
  {
    icon: FaCloud,
    title: "Cloud Platforms",
    tech: ["AWS", "Azure", "Google Cloud"],
  },
  {
    icon: FaBrain,
    title: "AI & Data Technologies",
    tech: ["OpenAI", "Machine Learning", "Automation", "Analytics"],
  },
];

const industries = [
  { icon: FaShieldAlt, name: "Insurance" },
  { icon: FaUniversity, name: "Financial Services" },
  { icon: FaHeartbeat, name: "Healthcare" },
  { icon: FaIndustry, name: "Manufacturing" },
  { icon: FaShoppingCart, name: "Retail & Consumer" },
  { icon: FaBolt, name: "Energy & Utilities" },
];

const aiCaps = [
  {
    icon: FaMagic,
    title: "Generative AI",
    desc: "Content, code, and insights",
  },
  {
    icon: FaRobot,
    title: "Intelligent Automation",
    desc: "Smarter, faster workflows",
  },
  {
    icon: FaChartLine,
    title: "Predictive Analytics",
    desc: "Forecast and decide with data",
  },
  {
    icon: FaUsers,
    title: "AI-Powered Experiences",
    desc: "Personalized interactions",
  },
  {
    icon: FaBookOpen,
    title: "Knowledge Management",
    desc: "Find answers instantly",
  },
];

const outcomes = [
  "Higher Operational Efficiency",
  "Improved Customer Experience",
  "Faster Time to Market",
  "Data-Driven Decision Making",
  "Scalable Innovation",
];

/* Illustrative content: replace with your real case studies. */
const cases = [
  {
    icon: FaRobot,
    title: "Claims Processing Automation",
    desc: "Automated claims intake and triage with AI to speed up processing and improve accuracy.",
    path: "/case-studies/claims-automation",
  },
  {
    icon: FaDatabase,
    title: "Unified Data Platform",
    desc: "Integrated multiple systems into one secure platform for real-time reporting and analytics.",
    path: "/case-studies/unified-data-platform",
  },
  {
    icon: FaLaptopCode,
    title: "Modern Application Platform",
    desc: "Replaced a legacy application with a cloud-native platform built to scale.",
    path: "/case-studies/modern-application-platform",
  },
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
      <p className={`mt-4 ${dark ? "text-primary-200" : "text-primary-600"}`}>
        {text}
      </p>
    )}
  </motion.header>
);

const TextLink = ({ to, children, dark }) => (
  <Link
    to={to}
    className={`mt-auto inline-flex items-center gap-2 text-base font-semibold ${dark ? "text-primary-200 hover:text-white" : "text-primary-600 hover:text-primary-800"}`}
  >
    {children}{" "}
    <FaArrowRight
      size={11}
      className="transition-transform group-hover:translate-x-1"
    />
  </Link>
);

/* Icon on the left, title on the right */
const IconTitle = ({ icon: Icon, title, dark }) => (
  <div className="mb-4 flex items-center gap-4">
    <span
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl transition-colors ${
        dark
          ? "bg-white text-primary-800"
          : "bg-primary-50 text-primary-600 group-hover:bg-primary-800 group-hover:text-white"
      }`}
    >
      <Icon />
    </span>
    <h3
      className={`text-lg font-bold leading-snug ${dark ? "text-white" : "text-primary-900"}`}
    >
      {title}
    </h3>
  </div>
);

/* ============ HERO ============ */
const HubDiagram = () => (
  <div className="relative mx-auto aspect-square w-full max-w-[460px]">
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      {hubNodes.map((_, i) => {
        const a = ((-90 + i * 60) * Math.PI) / 180;
        return (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={50 + 36 * Math.cos(a)}
            y2={50 + 36 * Math.sin(a)}
            stroke="#9db9d5"
            strokeOpacity="0.4"
            strokeDasharray="1.5 1.5"
            strokeWidth="0.4"
          />
        );
      })}
      <circle
        cx="50"
        cy="50"
        r="38"
        fill="none"
        stroke="#9db9d5"
        strokeOpacity="0.15"
        strokeWidth="0.3"
      />
    </svg>
    <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary-500 p-3 text-center shadow-2xl ring-8 ring-white/10">
      <span className="text-base font-bold leading-tight text-white">
        AI & Engineering
      </span>
    </div>
    {hubNodes.map((n, i) => {
      const a = ((-90 + i * 60) * Math.PI) / 180;
      return (
        <motion.div
          key={n.label}
          className="absolute flex w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-xl bg-white p-2.5 text-center shadow-lg"
          style={{
            left: `${50 + 40 * Math.cos(a)}%`,
            top: `${50 + 40 * Math.sin(a)}%`,
          }}
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <n.icon className="mb-1 text-primary-600" />
          <span className="text-xs font-semibold leading-tight text-primary-900">
            {n.label}
          </span>
        </motion.div>
      );
    })}
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
          AI & Engineering Services
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-[1.1] text-white md:text-5xl">
          Transforming Enterprises Through{" "}
          <span className="text-primary-300">Intelligent Applications</span>,
          Seamless Integrations &amp;{" "}
          <span className="text-primary-300">AI-Powered Innovation</span>
        </h1>
        <p className="mb-8 max-w-xl text-lg text-primary-100">
          We help organizations modernize, automate, and innovate with
          intelligent applications, connected systems, and AI-driven solutions
          that accelerate business growth.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button href="/contact">
            Talk to Our Experts <FaArrowRight size={12} />
          </Button>
          <Button href="#approach" variant="outline">
            Our Approach <FaArrowRight size={12} />
          </Button>
        </div>
      </motion.div>
      <HubDiagram />
    </Container>
  </section>
);

/* ============ FOCUS ============ */
const Focus = () => (
  <section className="bg-white py-10 lg:py-12">
    <Container>
      <SectionHead
        eyebrow="Our Focus"
        title="Engineering Business Growth Through Technology Excellence"
        text="We combine deep technical expertise with industry knowledge to deliver innovative, scalable, and future-ready solutions."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {focus.map((f, i) => (
          <motion.article
            key={f.title}
            {...fade(i)}
            className="group rounded-2xl border border-primary-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl"
          >
            <IconTitle icon={f.icon} title={f.title} />
            <p className="mb-5 text-base text-primary-600">{f.desc}</p>
            <ul className="space-y-2">
              {f.features.map((x) => (
                <li
                  key={x}
                  className="flex items-center gap-2.5 text-base text-primary-700"
                >
                  <FaCheckCircle className="shrink-0 text-sm text-primary-500" />{" "}
                  {x}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Container>
  </section>
);

/* ============ SERVICES (dark) ============ */
const Services = () => (
  <section id="services" className="bg-primary-900 py-10 lg:py-12">
    <Container>
      <SectionHead
        dark
        eyebrow="Our Services"
        title="Comprehensive Digital Solutions"
        text="End-to-end services to design, build, integrate, and manage your digital transformation journey."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.article
            key={s.path}
            {...fade(i)}
            className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
          >
            <IconTitle icon={s.icon} title={s.title} dark />
            <p className="mb-5 text-base text-primary-200">{s.desc}</p>
          </motion.article>
        ))}
      </div>
    </Container>
  </section>
);

/* ============ JOURNEY ============ */
const Journey = () => (
  <section id="approach" className="bg-white py-10 lg:py-12">
    <Container>
      <SectionHead
        eyebrow="Our Approach"
        title="Digital Transformation Journey"
        text="A proven, structured approach to turn your vision into measurable outcomes."
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
        {journey.map((s, i) => (
          <motion.div
            key={s.title}
            {...fade(i)}
            className="relative text-center"
          >
            {i < journey.length - 1 && (
              <div className="absolute left-1/2 top-7 hidden h-px w-full bg-primary-200 lg:block" />
            )}
            <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-800 text-lg text-white">
              <s.icon />
              <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border border-primary-200 bg-white text-xs font-bold text-primary-800">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mb-1 font-semibold text-primary-900">{s.title}</h3>
            <p className="mx-auto max-w-[200px] text-base text-primary-600">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);

/* ============ ECOSYSTEM (dark) ============ */
const Ecosystem = () => (
  <section className="bg-primary-800 py-10 lg:py-12">
    <Container>
      <SectionHead
        dark
        eyebrow="Our Technology Ecosystem"
        title="A Connected Technology Ecosystem"
        text="We leverage leading platforms and technologies to deliver robust, scalable, and future-ready solutions."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {ecosystem.map((e, i) => (
          <motion.div
            key={e.title}
            {...fade(i)}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-primary-800">
                <e.icon />
              </span>
              <h3 className="font-semibold text-white">{e.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {e.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-medium text-primary-100"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);

/* ============ INDUSTRIES ============ */
const Industries = () => (
  <section className="bg-primary-50 py-10 lg:py-12">
    <Container>
      <SectionHead
        eyebrow="Industries We Serve"
        title="Driving Innovation Across Industries"
        text="We deliver intelligent solutions tailored to the unique needs of each industry."
      />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {industries.map((d, i) => (
          <motion.div
            key={d.name}
            {...fade(i)}
            className="group rounded-xl border border-primary-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-primary-300 hover:shadow-md"
          >
            <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-xl text-primary-600 transition-colors group-hover:bg-primary-800 group-hover:text-white">
              <d.icon />
            </span>
            <h3 className="text-base font-semibold text-primary-900">
              {d.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);

/* ============ AI (dark) ============ */
const AISection = () => (
  <section className="bg-primary-900 py-10 lg:py-12">
    <Container className="grid items-start gap-10 lg:grid-cols-3">
      <motion.div {...fade()}>
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-300">
          AI Capabilities
        </p>
        <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
          Unlock the Power of Artificial Intelligence
        </h2>
        <p className="mb-6 text-primary-200">
          We embed AI into your applications and business processes to drive
          efficiency, create new opportunities, and deliver exceptional
          experiences.
        </p>
      </motion.div>

      <ul className="space-y-3">
        {aiCaps.map((c, i) => (
          <motion.li
            key={c.title}
            {...fade(i)}
            className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-primary-800">
              <c.icon />
            </span>
            <div>
              <h3 className="text-base font-semibold text-white">{c.title}</h3>
              <p className="text-sm text-primary-200">{c.desc}</p>
            </div>
          </motion.li>
        ))}
      </ul>

      <motion.div
        {...fade(2)}
        className="rounded-2xl border border-white/10 bg-primary-800 p-6"
      >
        <h3 className="mb-4 font-semibold text-white">Business Outcomes</h3>
        <ul className="space-y-3">
          {outcomes.map((o) => (
            <li
              key={o}
              className="flex items-center gap-3 text-base text-primary-100"
            >
              <FaCheckCircle className="shrink-0 text-primary-300" /> {o}
            </li>
          ))}
        </ul>
      </motion.div>
    </Container>
  </section>
);

/* ============ CASE STUDIES ============ */
const CaseStudies = () => (
  <section className="bg-white py-10 lg:py-12">
    <Container>
      <SectionHead
        eyebrow="Success Stories"
        title="Featured Case Studies"
        text="Real results from real transformations."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {cases.map((c, i) => (
          <motion.article
            key={c.path}
            {...fade(i)}
            className="group flex flex-col rounded-2xl border border-primary-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl"
          >
            <IconTitle icon={c.icon} title={c.title} />
            <p className="mb-6 text-base text-primary-600">{c.desc}</p>
          </motion.article>
        ))}
      </div>
    </Container>
  </section>
);

/* ============ PAGE ============ */
const ApplicationDevelopmentIntegrationAIPage = () => (
  <main role="main">
    <Hero />
    <Focus />
    <Services />
    <Journey />
    <Ecosystem />
    <Industries />
    <AISection />
    <CaseStudies />
  </main>
);

export default ApplicationDevelopmentIntegrationAIPage;
