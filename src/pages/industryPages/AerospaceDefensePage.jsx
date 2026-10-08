// import React, { useMemo } from "react";
// import { motion } from "framer-motion";
// import {
//   FaFighterJet,
//   FaProjectDiagram,
//   FaBolt,
//   FaShieldAlt,
//   FaArrowRight,
//   FaChartLine,
//   FaCogs,
//   FaRocket,
//   FaArrowDown,
//   FaStar,
//   FaCheckCircle,
//   FaIndustry,
// } from "react-icons/fa";
// import img1 from "../../assets/industry/re1.png";
// import img2 from "../../assets/industry/ae2.png";

// // ============================================
// // REUSABLE COMPONENTS - NAVY & GOLD THEME
// // ============================================

// const SectionWrapper = ({ children, className = "", id }) => (
//   <section id={id} className={`px-6 lg:px-20 py-20 ${className}`}>
//     {children}
//   </section>
// );

// const SectionTitle = ({
//   children,
//   subtitle,
//   centered = true,
//   light = false,
// }) => (
//   <div className={`mb-10 ${centered ? "text-center" : ""}`}>
//     <h2
//       className={`text-3xl lg:text-4xl font-bold mb-4 ${light ? "text-white" : "text-[#0a1628]"}`}
//     >
//       {children}
//     </h2>
//     {subtitle && (
//       <p
//         className={`text-lg max-w-2xl mx-auto ${light ? "text-gray-300" : "text-gray-600"}`}
//       >
//         {subtitle}
//       </p>
//     )}
//   </div>
// );

// const Card = ({ children, className = "", hover = true, delay = 0 }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.5, delay }}
//     whileHover={hover ? { scale: 1.03, y: -8 } : undefined}
//     className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 ${className}`}
//   >
//     {children}
//   </motion.div>
// );

// const IconCard = ({ icon: Icon, title, description, delay = 0 }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.5, delay }}
//     whileHover={{ scale: 1.05, y: -10 }}
//     className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl text-center group cursor-pointer border border-gray-100 relative overflow-hidden"
//   >
//     {/* Gold Accent Top Border */}
//     <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFF] via-[#FFF] to-[#FFF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

//     <div className="w-20 h-20 bg-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg group-hover:shadow-[#FFF]/20">
//       <Icon className="text-4xl text-[#FFF]" />
//     </div>
//     <h3 className="font-bold text-xl mb-3 text-[#0a1628]">{title}</h3>
//     {description && (
//       <p className="text-gray-600 leading-relaxed">{description}</p>
//     )}
//   </motion.div>
// );

// const Button = ({
//   children,
//   variant = "primary",
//   size = "md",
//   className = "",
//   ...props
// }) => {
//   const baseStyles =
//     "inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";

//   const variants = {
//     primary:
//       "bg-gradient-to-r from-[#FFF] to-[#FFF] hover:from-[#FFF] hover:to-[#B8962E] text-[#0a1628] shadow-lg hover:shadow-xl focus:ring-[#FFF]",
//     secondary:
//       "bg-white hover:bg-gray-50 text-[#0a1628] border-2 border-[#0a1628] focus:ring-[#0a1628]",
//     ghost:
//       "bg-transparent text-white hover:bg-[#FFF]/10 focus:ring-[#FFF] border border-[#FFF]/50",
//   };

//   const sizes = {
//     sm: "px-5 py-2.5 text-sm",
//     md: "px-7 py-3.5 text-base",
//     lg: "px-9 py-4 text-lg",
//   };

//   return (
//     <button
//       className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// const GoldBadge = ({ children }) => (
//   <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFF]/10 border border-[#FFF]/30 rounded-full text-[#FFF] text-sm font-medium backdrop-blur-sm">
//     <FaStar className="text-xs animate-pulse" />
//     {children}
//   </div>
// );

// // ============================================
// // DATA CONFIGURATION
// // ============================================

// const CHALLENGES_DATA = [
//   {
//     icon: FaProjectDiagram,
//     title: "Complex Program Execution",
//     description:
//       "Managing large-scale aerospace programs with multiple stakeholders, timelines, and regulatory requirements.",
//   },
//   {
//     icon: FaShieldAlt,
//     title: "Regulatory Compliance",
//     description:
//       "Meeting stringent aerospace, defense, security, and export control regulations across operations.",
//   },
//   {
//     icon: FaCogs,
//     title: "MRO Efficiency",
//     description:
//       "Optimizing maintenance, repair, and overhaul processes while reducing downtime and operational costs.",
//   },
//   {
//     icon: FaChartLine,
//     title: "Legacy System Modernization",
//     description:
//       "Transforming fragmented systems into integrated SAP-driven digital ecosystems.",
//   },
// ];

// const SOLUTIONS_DATA = [
//   {
//     icon: FaProjectDiagram,
//     title: "PEO & Program Governance",
//     description:
//       "Structured project execution frameworks ensuring predictable delivery, risk control, and stakeholder alignment.",
//   },
//   {
//     icon: FaCogs,
//     title: "SAP S/4HANA Transformation",
//     description:
//       "End-to-end SAP modernization supporting finance, supply chain, manufacturing, and maintenance operations.",
//   },
//   {
//     icon: FaShieldAlt,
//     title: "Compliance & Risk Management",
//     description:
//       "Automated governance, audit readiness, quality assurance, and regulatory compliance management.",
//   },
//   {
//     icon: FaRocket,
//     title: "Digital Engineering",
//     description:
//       "Connecting engineering, manufacturing, and operational processes through digital innovation.",
//   },
//   {
//     icon: FaIndustry,
//     title: "MRO Optimization",
//     description:
//       "Improving asset availability, maintenance planning, and operational readiness through SAP solutions.",
//   },
//   {
//     icon: FaChartLine,
//     title: "Supply Chain Visibility",
//     description:
//       "Real-time monitoring and control of suppliers, inventory, procurement, and logistics operations.",
//   },
// ];

// const BENEFITS_DATA = [
//   "Improved program delivery through PEO-led governance and execution frameworks",
//   "Enhanced operational readiness with optimized MRO processes",
//   "Real-time visibility across aerospace and defense supply chains",
//   "Streamlined compliance, audit readiness, and risk management",
//   "Accelerated SAP transformation with reduced implementation risks",
//   "Improved collaboration between engineering, manufacturing, and operations",
// ];

// const PROCESS_STEPS = [
//   {
//     step: "01",
//     title: "Program Assessment",
//     description:
//       "Evaluate operational maturity, project objectives, compliance requirements, and transformation priorities.",
//     icon: FaChartLine,
//   },
//   {
//     step: "02",
//     title: "PEO Governance Setup",
//     description:
//       "Establish delivery frameworks, risk controls, stakeholder governance, and execution standards.",
//     icon: FaProjectDiagram,
//   },
//   {
//     step: "03",
//     title: "SAP Transformation",
//     description:
//       "Deploy SAP solutions aligned with aerospace and defense business processes and compliance requirements.",
//     icon: FaCogs,
//   },
//   {
//     step: "04",
//     title: "Continuous Optimization",
//     description:
//       "Drive operational excellence through performance monitoring, innovation, and continuous improvement.",
//     icon: FaRocket,
//   },
// ];

// // ============================================
// // SECTION COMPONENTS - NAVY & GOLD
// // ============================================

// const HeroSection = () => (
//   <section className="lg:h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-6 lg:py-12 bg-primary-800 text-white relative overflow-hidden">
//     {/* Animated Background Elements */}
//     <div className="absolute inset-0 overflow-hidden">
//       {/* Gold Gradient Orbs */}
//       <motion.div
//         animate={{
//           scale: [1, 1.3, 1],
//           opacity: [0.08, 0.15, 0.08],
//         }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-[#FFF]/30 to-[#FFF]/10 rounded-full filter blur-3xl"
//       />
//       <motion.div
//         animate={{
//           scale: [1.3, 1, 1.3],
//           opacity: [0.08, 0.12, 0.08],
//         }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-[#FFF]/20 to-[#FFF]/10 rounded-full filter blur-3xl"
//       />

//       {/* Grid Pattern */}
//       <div
//         className="absolute inset-0 opacity-[0.04]"
//         style={{
//           backgroundImage: `linear-gradient(rgba(255,215,0,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,.4) 1px, transparent 1px)`,
//           backgroundSize: "50px 50px",
//         }}
//       ></div>

//       {/* Dynamic Lines */}
//       {/* <motion.div
//         animate={{ x: ["-100%", "100%"] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//         className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFF]/30 to-transparent"
//       />
//       <motion.div
//         animate={{ x: ["100%", "-100%"] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//         className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFF]/30 to-transparent"
//       /> */}
//     </div>

//     <div className="max-w-2xl z-10 relative">
//       <motion.div
//         initial={{ opacity: 0, x: -60 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <GoldBadge className="mb-8">PEO-Led Delivery Excellence</GoldBadge>

//         <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
//           Aerospace & Defense{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF] via-[#FFF] to-[#FFF]">
//             Transformation
//           </span>
//         </h1>

//         <p className="text-md md:text-xl text-gray-300 mb-2 leading-relaxed max-w-xl">
//           Program Execution Excellence Powered by SAP. Empowering aerospace and
//           defense organizations with PEO-driven governance, MRO optimization,
//           and mission-critical operational excellence.
//         </p>
//       </motion.div>
//     </div>

//     <motion.div
//       className="w-full lg:w-1/2 mt-12 lg:mt-0 z-10 relative"
//       initial={{ opacity: 0, x: 60 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8, delay: 0.3 }}
//     >
//       <div className="relative">
//         {/* Main Image */}
//         <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#FFF]/30">
//           <img
//             src={img1}
//             alt="Advanced aerospace manufacturing facility with high precision engineering and defense technology"
//             className="w-full h-[200px] md:h-[250px] lg:h-[400px] object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent"></div>

//           {/* Gold Overlay Effect */}
//           {/* <div className="absolute inset-0 bg-gradient-to-tr from-[#FFF]/5 to-transparent"></div> */}
//         </div>

//         {/* Decorative Corners */}
//         <div className="absolute -top-3 -left-3 w-20 h-20 border-t-4 border-l-4 border-[#FFF]/50 rounded-tl-3xl"></div>
//         <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-4 border-r-4 border-[#FFF]/50 rounded-br-3xl"></div>
//       </div>
//     </motion.div>
//   </section>
// );

// const ChallengesSection = () => (
//   <SectionWrapper
//     className="bg-gradient-to-b from-gray-50 to-white"
//     id="challenges"
//   >
//     <SectionTitle subtitle="The aerospace & defense industry faces unprecedented challenges in the digital era">
//       Industry Challenges We Solve
//     </SectionTitle>

//     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//       {CHALLENGES_DATA.map((challenge, i) => (
//         <Card key={i} delay={i * 0.1}>
//           <div className="flex flex-col h-full">
//             <div className="w-14 h-14 bg-primary-800 rounded-xl flex items-center justify-center mb-5 shadow-lg">
//               <challenge.icon className="text-2xl text-[#FFF]" />
//             </div>
//             <h3 className="font-bold text-lg mb-3 text-[#0a1628]">
//               {challenge.title}
//             </h3>
//             <p className="text-gray-600 text-sm leading-relaxed flex-grow">
//               {challenge.description}
//             </p>
//           </div>
//         </Card>
//       ))}
//     </div>
//   </SectionWrapper>
// );

// const SolutionsSection = () => (
//   <SectionWrapper className="bg-white relative" id="solutions">
//     {/* Subtle Background Pattern */}
//     <div
//       className="absolute inset-0 opacity-[0.02]"
//       style={{
//         backgroundImage: `radial-gradient(circle at 2px 2px, #0a1628 1px, transparent 0)`,
//         backgroundSize: "30px 30px",
//       }}
//     ></div>

//     <div className="relative z-10">
//       <SectionTitle subtitle="Comprehensive technology solutions designed for aerospace excellence">
//         Our Solutions
//       </SectionTitle>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {SOLUTIONS_DATA.map((solution, i) => (
//           <IconCard
//             key={i}
//             icon={solution.icon}
//             title={solution.title}
//             description={solution.description}
//             delay={i * 0.1}
//           />
//         ))}
//       </div>
//     </div>
//   </SectionWrapper>
// );

// const BenefitsSection = () => (
//   <SectionWrapper
//     className="bg-primary-800 text-white relative overflow-hidden"
//     id="benefits"
//   >
//     {/* Background Decoration */}
//     <div className="absolute inset-0">
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//         className="absolute -top-1/2 -right-1/4 w-full h-full bg-gradient-to-br from-[#FFF]/5 to-transparent rounded-full"
//       />
//     </div>

//     <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
//       <motion.div
//         className="w-full lg:w-1/2"
//         initial={{ opacity: 0, x: -40 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="relative">
//           <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#FFF]/30">
//             <img
//               src={img2}
//               alt="Aerospace MRO operations team utilizing advanced digital tools for maintenance optimization"
//               className="w-full h-[200px] md:h-[450px] object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent"></div>
//           </div>

//           {/* Corner Accents */}
//           <div className="absolute -top-2 -left-2 w-16 h-16 border-t-4 border-l-4 border-[#FFF] rounded-tl-2xl"></div>
//           <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-4 border-r-4 border-[#FFF] rounded-br-2xl"></div>
//         </div>
//       </motion.div>

//       <div className="w-full lg:w-1/2">
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <SectionTitle centered={false} light>
//             Key Benefits
//           </SectionTitle>
//           <p className="text-gray-300 mb-8 text-lg">
//             Transform your aerospace and defense operations with measurable
//             results that impact mission success.
//           </p>

//           <div className="space-y-5">
//             {BENEFITS_DATA.map((benefit, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 + 0.3 }}
//                 className="flex items-start gap-4 group"
//               >
//                 <div className="w-7 h-7 bg-gradient-to-br from-[#FFF] to-[#FFF] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg group-hover:scale-110 transition-transform">
//                   <FaCheckCircle className="text-[#0a1628] text-sm" />
//                 </div>
//                 <span className="text-gray-200 font-medium group-hover:text-white transition-colors leading-relaxed">
//                   {benefit}
//                 </span>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   </SectionWrapper>
// );

// const ProcessSection = () => (
//   <SectionWrapper className="bg-gray-50 relative" id="process">
//     {/* Background Pattern */}
//     <div
//       className="absolute inset-0 opacity-[0.03]"
//       style={{
//         backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,215,0,.3) 2px, transparent 2px), radial-gradient(circle at 75% 75%, rgba(255,215,0,.3) 2px, transparent 2px)`,
//         backgroundSize: "50px 50px",
//       }}
//     ></div>

//     <div className="relative z-10">
//       <SectionTitle subtitle="A proven PEO-driven methodology that delivers consistent results">
//         Our Proven Process
//       </SectionTitle>

//       <div className="relative">
//         {/* Connection Line - Desktop - Navy to Gold Gradient */}
//         <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-[#0a1628] via-[#FFF] to-[#0a1628] rounded-full shadow-lg"></div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
//           {PROCESS_STEPS.map((step, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: i * 0.15 }}
//               className="relative text-center group"
//             >
//               {/* Step Circle */}
//               <div className="relative inline-block mb-6">
//                 <div className="w-24 h-24 bg-white border-4 border-[#0a1628] rounded-full flex items-center justify-center shadow-xl relative z-10 group-hover:border-[#FFF] group-hover:scale-110 transition-all duration-300 mx-auto">
//                   <step.icon className="text-3xl text-[#0a1628] group-hover:text-[#0a1628] transition-colors" />
//                 </div>

//                 {/* Step Number Badge - Gold */}
//                 <div className="absolute -top-2 -right-2 w-9 h-9 bg-[#0a1628] rounded-full flex items-center justify-center text-[#FFF] text-sm font-bold shadow-lg border-2 border-white">
//                   {step.step}
//                 </div>
//               </div>

//               <h3 className="font-bold text-xl mb-3 text-[#0a1628] group-hover:text-[#FFF] transition-colors">
//                 {step.title}
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
//                 {step.description}
//               </p>

//               {/* Arrow Connector - Mobile/Tablet */}
//               {i < PROCESS_STEPS.length - 1 && (
//                 <div className="lg:hidden flex justify-center my-4">
//                   <div className="w-10 h-10 bg-[#FFF]/20 rounded-full flex items-center justify-center">
//                     <FaArrowDown className="text-[#FFF]" />
//                   </div>
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </SectionWrapper>
// );

// const CTASection = () => (
//   <section className="relative px-6 lg:px-20 py-28 overflow-hidden">
//     {/* Rich Navy Background */}
//     <div className="absolute inset-0 bg-primary-800"></div>

//     {/* Pattern Overlay */}
//     <div
//       className="absolute inset-0 opacity-[0.05]"
//       style={{
//         backgroundImage: `radial-gradient(circle at 2px 2px, #FFF 1px, transparent 0)`,
//         backgroundSize: "35px 35px",
//       }}
//     ></div>

//     {/* Animated Gold Orbs */}
//     <motion.div
//       animate={{
//         scale: [1, 1.2, 1],
//         x: [-20, 20, -20],
//         y: [-10, 10, -10],
//       }}
//       transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       className="absolute top-10 left-10 w-72 h-72 bg-[#FFF]/15 rounded-full filter blur-3xl"
//     />
//     <motion.div
//       animate={{
//         scale: [1.2, 1, 1.2],
//         x: [20, -20, 20],
//         y: [10, -10, 10],
//       }}
//       transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//       className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFF]/12 rounded-full filter blur-3xl"
//     />

//     {/* Geometric Decorations */}
//     <motion.div
//       animate={{ rotate: 360 }}
//       transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//       className="absolute top-20 right-20 w-44 h-44 border-2 border-[#FFF]/20 rounded-full"
//     />
//     <motion.div
//       animate={{ rotate: -360 }}
//       transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//       className="absolute bottom-20 left-20 w-36 h-36 border-2 border-[#FFF]/15 rounded-full"
//     />

//     {/* Energy Lines Animation */}
//     <motion.div
//       animate={{ opacity: [0.05, 0.15, 0.05] }}
//       transition={{ duration: 3, repeat: Infinity }}
//       className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFF] to-transparent"
//     />
//     <motion.div
//       animate={{ opacity: [0.05, 0.15, 0.05] }}
//       transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
//       className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFF] to-transparent"
//     />

//     <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//       >
//         <GoldBadge className="mx-auto mb-8 justify-center">
//           Ready to Accelerate Your Transformation?
//         </GoldBadge>

//         <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
//           Ready to Modernize{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF] via-[#FFF] to-[#FFF]">
//             Aerospace & Defense Operations?
//           </span>
//         </h2>

//         <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
//           Partner with our SAP and PEO experts to improve program execution,
//           strengthen compliance, optimize MRO operations, and accelerate
//           enterprise transformation.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
//           <Button size="lg" className="!px-12 !py-5 !text-lg">
//             Schedule an Aerospace Consultation <FaArrowRight />
//           </Button>
//           <Button variant="ghost" size="lg" className="!px-12 !py-5 !text-lg">
//             Download Whitepaper
//           </Button>
//         </div>

//         <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 pt-8 border-t border-[#FFF]/20">
//           <div className="flex items-center gap-2">
//             <FaCheckCircle className="text-[#FFF]" />
//             No commitment required
//           </div>
//           <div className="flex items-center gap-2">
//             <FaCheckCircle className="text-[#FFF]" />
//             Free assessment
//           </div>
//           <div className="flex items-center gap-2">
//             <FaCheckCircle className="text-[#FFF]" />
//             Response within 24 hours
//           </div>
//           <div className="flex items-center gap-2">
//             <FaStar className="text-[#FFF]" />
//             Premium Support
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   </section>
// );

// // ============================================
// // MAIN COMPONENT
// // ============================================

// export default function AerospacePage() {
//   const memoizedContent = useMemo(
//     () => ({
//       hero: <HeroSection />,
//       challenges: <ChallengesSection />,
//       solutions: <SolutionsSection />,
//       benefits: <BenefitsSection />,
//       process: <ProcessSection />,
//       cta: <CTASection />,
//     }),
//     [],
//   );

//   return (
//     <div className="w-full font-sans antialiased text-gray-800 overflow-x-hidden bg-gray-50">
//       {/* Skip Link for Accessibility */}
//       <a
//         href="#main-content"
//         className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#FFF] text-[#0a1628] px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-[#FFF]"
//       >
//         Skip to main content
//       </a>

//       <main id="main-content" role="main">
//         {memoizedContent.hero}
//         {memoizedContent.challenges}
//         {memoizedContent.solutions}
//         {memoizedContent.benefits}
//         {memoizedContent.process}
//         {/* {memoizedContent.cta} */}
//       </main>
//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaProjectDiagram,
  FaShieldAlt,
  FaArrowRight,
  FaChartLine,
  FaCogs,
  FaRocket,
  FaCheckCircle,
  FaIndustry,
} from "react-icons/fa";
import img1 from "../../assets/industry/re1.png";
import img2 from "../../assets/industry/ae2.png";

/* ============ DATA ============ */
const focusAreas = [
  { icon: FaProjectDiagram, label: "PEO Governance" },
  { icon: FaCogs, label: "SAP S/4HANA" },
  { icon: FaIndustry, label: "MRO Optimization" },
  { icon: FaShieldAlt, label: "Compliance & Risk" },
];

const valueChain = [
  {
    icon: FaProjectDiagram,
    title: "Program Delivery & Governance",
    desc: "Structured execution frameworks that keep large programs predictable, controlled and aligned with stakeholders.",
  },
  {
    icon: FaIndustry,
    title: "Operational Readiness & MRO",
    desc: "Maintenance, repair and overhaul processes that improve asset availability and readiness.",
  },
  {
    icon: FaShieldAlt,
    title: "Supply Chain & Compliance",
    desc: "Visibility across suppliers and logistics, with compliance and audit readiness built in.",
  },
];

const challenges = [
  {
    icon: FaProjectDiagram,
    title: "Complex Program Execution",
    desc: "Managing large-scale aerospace programs with multiple stakeholders, timelines and regulatory requirements.",
    help: "PEO-led governance frameworks that align stakeholders, timelines and risk controls across large programs.",
  },
  {
    icon: FaShieldAlt,
    title: "Regulatory Compliance",
    desc: "Meeting stringent aerospace, defense, security and export control regulations across operations.",
    help: "Automated governance, audit readiness and quality assurance built into everyday operations.",
  },
  {
    icon: FaCogs,
    title: "MRO Efficiency",
    desc: "Optimizing maintenance, repair and overhaul processes while reducing downtime and operational costs.",
    help: "SAP-based maintenance planning and asset visibility that improve availability and reduce downtime.",
  },
  {
    icon: FaChartLine,
    title: "Legacy System Modernization",
    desc: "Transforming fragmented systems into integrated SAP-driven digital ecosystems.",
    help: "Phased SAP S/4HANA transformation that turns fragmented systems into one integrated platform.",
  },
];

const solutions = [
  {
    icon: FaProjectDiagram,
    title: "PEO & Program Governance",
    desc: "Structured project execution frameworks for predictable delivery, risk control and stakeholder alignment.",
  },
  {
    icon: FaCogs,
    title: "SAP S/4HANA Transformation",
    desc: "End-to-end SAP modernization supporting finance, supply chain, manufacturing and maintenance operations.",
  },
  {
    icon: FaShieldAlt,
    title: "Compliance & Risk Management",
    desc: "Automated governance, audit readiness, quality assurance and regulatory compliance management.",
  },
  {
    icon: FaRocket,
    title: "Digital Engineering",
    desc: "Connecting engineering, manufacturing and operational processes through digital innovation.",
  },
  {
    icon: FaIndustry,
    title: "MRO Optimization",
    desc: "Improving asset availability, maintenance planning and operational readiness through SAP solutions.",
  },
  {
    icon: FaChartLine,
    title: "Supply Chain Visibility",
    desc: "Real-time monitoring and control of suppliers, inventory, procurement and logistics operations.",
  },
];

const benefits = [
  "Improved program delivery through PEO-led governance and execution frameworks",
  "Enhanced operational readiness with optimized MRO processes",
  "Real-time visibility across aerospace and defense supply chains",
  "Streamlined compliance, audit readiness and risk management",
  "Accelerated SAP transformation with reduced implementation risk",
  "Improved collaboration between engineering, manufacturing and operations",
];

const steps = [
  {
    icon: FaChartLine,
    title: "Program Assessment",
    desc: "Evaluate operational maturity, project objectives, compliance requirements and transformation priorities.",
  },
  {
    icon: FaProjectDiagram,
    title: "PEO Governance Setup",
    desc: "Establish delivery frameworks, risk controls, stakeholder governance and execution standards.",
  },
  {
    icon: FaCogs,
    title: "SAP Transformation",
    desc: "Deploy SAP solutions aligned with aerospace and defense business processes and compliance requirements.",
  },
  {
    icon: FaRocket,
    title: "Continuous Optimization",
    desc: "Drive operational excellence through performance monitoring, innovation and continuous improvement.",
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
    light: "bg-white text-primary-800 hover:bg-primary-100",
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

const SectionHead = ({ eyebrow, title, text, dark, align = "center" }) => (
  <motion.header
    {...fade()}
    className={`mb-14 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
  >
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

/* ============ HERO (image stays put, text scrolls) ============ */
const Hero = () => (
  <section className="relative flex min-h-[90svh] flex-col bg-primary-900 [clip-path:inset(0)]">
    <motion.img
      src={img1}
      alt=""
      aria-hidden="true"
      className="fixed inset-0 h-screen w-full object-cover"
      initial={{ scale: 1 }}
      animate={{ scale: 1.06 }}
      transition={{
        duration: 24,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/70 to-primary-900/30" />
    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-transparent to-primary-900/40" />

    <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-10 pt-6 lg:px-8 lg:pb-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-12 shrink-0 bg-primary-300" />
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-200">
            Aerospace &amp; Defense
          </p>
        </div>
        <h1 className="mb-6 text-4xl font-light leading-[1.1] text-white md:text-6xl lg:text-7xl">
          Mission-Ready Operations,{" "}
          <span className="font-semibold text-primary-200">Powered by SAP</span>
        </h1>
        <p className="mb-4 max-w-4xl text-xl font-light leading-relaxed text-primary-100 md:text-2xl">
          Aerospace and defense organizations run some of the most complex
          programs in the world, under strict regulatory, security and readiness
          requirements. We combine PEO-led program governance with SAP-driven
          digital transformation to improve delivery, optimize MRO operations
          and strengthen compliance, so your teams can stay focused on the
          mission.
        </p>
        <p className="mb-8 max-w-xl text-base text-primary-200">
          Governance, readiness and visibility across the full program
          lifecycle.
        </p>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <Button href="/contact">
            Talk to Our Aerospace Experts <FaArrowRight size={12} />
          </Button>
          <Button href="#solutions" variant="outline">
            Explore Solutions
          </Button>
        </div>
        <ul className="flex flex-wrap gap-3">
          {focusAreas.map((f) => (
            <li
              key={f.label}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-primary-100 backdrop-blur-sm"
            >
              <f.icon className="text-primary-300" /> {f.label}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

/* ============ OVERVIEW (sticky image on the right) ============ */
const Overview = () => (
  <section id="overview" className="bg-white py-16 lg:py-24">
    <Container className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <SectionHead
          align="left"
          eyebrow="Industry Overview"
          title="Governance, Readiness and Visibility Across the Program Lifecycle"
          text="Aerospace and defense leaders are balancing three priorities at once: delivering complex programs on time, keeping assets ready and available, and meeting demanding compliance and security requirements."
        />
        <p className="-mt-6 mb-10 text-lg text-primary-600">
          We bring program execution and enterprise expertise to each stage, so
          your technology supports mission success instead of adding complexity.
        </p>
        <ul className="space-y-6">
          {valueChain.map((v, i) => (
            <motion.li
              key={v.title}
              {...fade(i)}
              className="flex gap-5 border-l-2 border-primary-200 pl-6 transition-colors hover:border-primary-600"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-800 text-xl text-white">
                <v.icon />
              </span>
              <div>
                <h3 className="mb-1 text-xl font-bold text-primary-900">
                  {v.title}
                </h3>
                <p className="text-base text-primary-600">{v.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
      {/* stays in view while the left column scrolls */}
      <div className="lg:sticky lg:top-28">
        <img
          src={img2}
          alt="Aerospace MRO team using digital tools for maintenance optimization"
          loading="lazy"
          className="h-[200px] w-full rounded-md object-cover shadow-2xl md:h-[300px] lg:h-[360px]"
        />
      </div>
    </Container>
  </section>
);

/* ============ CHALLENGES ============ */
const Challenges = () => (
  <section id="challenges" className="bg-primary-50 py-16 lg:py-20">
    <Container>
      <SectionHead
        eyebrow="Industry Challenges"
        title="Challenges We Help You Solve"
        text="The aerospace and defense industry faces significant pressure in the digital era."
      />
      <div className="mb-3 hidden grid-cols-2 gap-6 px-8 text-sm font-semibold uppercase tracking-widest text-primary-500 md:grid">
        <span>The Challenge</span>
        <span className="pl-8">How We Help</span>
      </div>
      <div className="space-y-4">
        {challenges.map((c, i) => (
          <motion.article
            key={c.title}
            {...fade(i)}
            className="group grid overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm transition-shadow hover:shadow-lg md:grid-cols-2"
          >
            <div className="p-7">
              <div className="mb-3 flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-xl text-primary-600 transition-colors group-hover:bg-primary-800 group-hover:text-white">
                  <c.icon />
                </span>
                <h3 className="text-lg font-bold text-primary-900">
                  {c.title}
                </h3>
              </div>
              <p className="text-base text-primary-600">{c.desc}</p>
            </div>
            <div className="flex items-center gap-4 border-t border-primary-100 bg-primary-800 p-7 md:border-l md:border-t-0">
              <FaCheckCircle className="shrink-0 text-xl text-primary-300" />
              <p className="text-base text-primary-100">{c.help}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Container>
  </section>
);

/* ============ SOLUTIONS ============ */
const Solutions = () => (
  <section id="solutions" className="bg-white py-16 lg:py-20">
    <Container>
      <SectionHead
        eyebrow="Our Solutions"
        title="Technology Built for Aerospace Excellence"
        text="Comprehensive solutions for program execution, operations and compliance."
      />
      <div className="grid gap-px overflow-hidden rounded-2xl border border-primary-100 bg-primary-100 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s, i) => (
          <motion.div
            key={s.title}
            {...fade(i)}
            className="group bg-white p-8 transition-colors hover:bg-primary-50"
          >
            <div className="mb-4 flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-xl text-primary-600 transition-colors group-hover:bg-primary-800 group-hover:text-white">
                <s.icon />
              </span>
              <h3 className="text-lg font-bold leading-snug text-primary-900">
                {s.title}
              </h3>
            </div>
            <p className="text-base text-primary-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);

/* ============ BENEFITS (dark) ============ */
const Benefits = () => (
  <section className="bg-primary-900 py-16 lg:py-20">
    <Container className="grid items-center gap-12 lg:grid-cols-5">
      <motion.div {...fade()} className="lg:col-span-2">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-300">
          Business Outcomes
        </p>
        <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
          Stronger Execution, Readiness and Compliance
        </h2>
        <p className="text-lg text-primary-200">
          Transform your aerospace and defense operations with improvements that
          support mission success.
        </p>
      </motion.div>
      <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
        {benefits.map((b, i) => (
          <motion.li
            key={b}
            {...fade(i)}
            className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5"
          >
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-primary-800">
              <FaCheckCircle />
            </span>
            <span className="text-base font-medium text-primary-100">{b}</span>
          </motion.li>
        ))}
      </ul>
    </Container>
  </section>
);

/* ============ PROCESS ============ */
const Process = () => (
  <section id="process" className="bg-primary-50 py-16 lg:py-20">
    <Container>
      <SectionHead
        eyebrow="Our Approach"
        title="A Proven, PEO-Driven Process"
        text="A methodology that delivers consistent results for complex programs."
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            {...fade(i)}
            className="relative text-center"
          >
            {i < steps.length - 1 && (
              <div className="absolute left-1/2 top-8 hidden h-px w-full bg-primary-200 lg:block" />
            )}
            <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary-800 text-xl text-white">
              <s.icon />
              <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border border-primary-200 bg-white text-xs font-bold text-primary-800">
                {i + 1}
              </span>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-primary-900">
              {s.title}
            </h3>
            <p className="mx-auto max-w-[260px] text-base text-primary-600">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);

/* ============ CTA ============ */
const CTA = () => (
  <section className="bg-white py-12 lg:py-16">
    <Container>
      <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-primary-800 px-6 py-10 text-center lg:flex-row lg:px-12 lg:text-left">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-300">
            Ready to Accelerate Your Transformation?
          </p>
          <h2 className="text-2xl font-bold text-white lg:text-3xl">
            Modernize Aerospace &amp; Defense Operations
          </h2>
          <p className="mt-2 text-lg text-primary-200">
            Talk to our SAP and PEO experts about program execution, compliance
            and MRO optimization.
          </p>
        </div>
        <Button href="/contact" variant="light">
          Schedule a Consultation <FaArrowRight size={12} />
        </Button>
      </div>
    </Container>
  </section>
);

/* ============ PAGE ============ */
export default function AerospacePage() {
  return (
    // overflow-x-clip (not hidden) so the sticky overview image keeps working
    <main role="main" className="w-full overflow-x-clip">
      <Hero />
      <div className="relative bg-white">
        <Overview />
        <Challenges />
        <Solutions />
        <Benefits />
        <Process />
        <CTA />
      </div>
    </main>
  );
}
