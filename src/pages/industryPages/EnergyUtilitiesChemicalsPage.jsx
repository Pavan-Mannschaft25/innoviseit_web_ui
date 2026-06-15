// import React, { useMemo } from "react";
// import { motion } from "framer-motion";
// import {
//   FaBolt,
//   FaOilCan,
//   FaChartLine,
//   FaCogs,
//   FaNetworkWired,
//   FaCheckCircle,
//   FaArrowRight,
//   FaRocket,
//   FaStar,
//   FaIndustry,
//   FaShieldAlt,
//   FaLeaf,
//   FaFlask,
//   FaDatabase,
//   FaClock,
//   FaRecycle,
//   FaGlobeAmericas,
//   FaHardHat,
//   FaTachometerAlt,
//   FaArrowDown,
//   FaAtom,
//   FaClipboardCheck,
//   FaWarehouse,
// } from "react-icons/fa";
// import img1 from "../../assets/industry/cam1.png";
// import img2 from "../../assets/industry/og2.png";

// // ============================================
// // NAVY & GOLD COLOR CONFIGURATION
// // ============================================
// const COLORS = {
//   navy: {
//     900: "#0a1628",
//     800: "#0f2140",
//     700: "#152d52",
//   },
//   gold: {
//     400: "#FFD700",
//     500: "#D4AF37",
//     600: "#B8962E",
//   },
// };

// // ============================================
// // REUSABLE COMPONENTS
// // ============================================
// const SectionWrapper = ({ children, className = "", id }) => (
//   <section id={id} className={`px-6 lg:px-20 py-24 ${className}`}>
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
//       className={`text-3xl lg:text-5xl font-bold mb-4 ${light ? "text-white" : "text-[#0a1628]"}`}
//     >
//       {children}
//     </h2>
//     {subtitle && (
//       <p
//         className={`text-lg max-w-2xl mx-auto leading-relaxed ${light ? "text-gray-300" : "text-gray-600"}`}
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
//     <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#FFD700] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
//     <div className="w-20 h-20 bg-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg group-hover:shadow-[#FFD700]/20">
//       <Icon className="text-4xl text-[#FFD700]" />
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
//       "bg-gradient-to-r from-[#FFD700] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#B8962E] text-[#0a1628] shadow-lg hover:shadow-xl focus:ring-[#FFD700]",
//     secondary:
//       "bg-white hover:bg-gray-50 text-[#0a1628] border-2 border-[#0a1628] focus:ring-[#0a1628]",
//     ghost:
//       "bg-transparent text-white hover:bg-[#FFD700]/10 focus:ring-[#FFD700] border border-[#FFD700]/50",
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

// const GoldBadge = ({ children, icon = true }) => (
//   <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-full text-[#FFD700] text-sm font-medium backdrop-blur-sm">
//     {icon && <FaStar className="text-xs animate-pulse" />}
//     {children}
//   </div>
// );

// // ============================================
// // DATA CONFIGURATION - ENERGY, UTILITIES & CHEMICALS
// // ============================================
// const CHALLENGES_DATA = [
//   {
//     icon: FaIndustry,
//     title: "Aging Infrastructure & Silos",
//     description:
//       "Modernizing legacy systems and breaking down data silos across power generation, grids, and chemical plants.",
//   },
//   {
//     icon: FaShieldAlt,
//     title: "Strict EHS & Regulatory Compliance",
//     description:
//       "Navigating complex environmental, health, and safety regulations with rigorous, auditable documentation.",
//   },
//   {
//     icon: FaLeaf,
//     title: "Energy Transition & Decarbonization",
//     description:
//       "Balancing traditional oil, gas, and chemical operations with renewable integration and sustainability goals.",
//   },
//   {
//     icon: FaFlask,
//     title: "Complex Batch Manufacturing",
//     description:
//       "Managing intricate chemical formulations, precise batch traceability, and quality control across production cycles.",
//   },
//   {
//     icon: FaWarehouse,
//     title: "Supply Chain Visibility Gaps",
//     description:
//       "Lack of real-time tracking for raw materials, hazardous logistics, and distribution networks.",
//   },
//   {
//     icon: FaTachometerAlt,
//     title: "Asset Reliability & Downtime",
//     description:
//       "Unplanned equipment outages and lack of predictive maintenance in mission-critical infrastructure.",
//   },
// ];

// const SOLUTIONS_DATA = [
//   {
//     icon: FaCogs,
//     title: "Asset Performance Management",
//     description:
//       "Predictive maintenance, IoT monitoring, and lifecycle optimization for energy and chemical infrastructure.",
//   },
//   {
//     icon: FaBolt,
//     title: "Smart Metering & Grid Solutions",
//     description:
//       "Advanced metering infrastructure (AMI), demand response, and smart grid modernization for utilities.",
//   },
//   {
//     icon: FaChartLine,
//     title: "Energy Trading & Risk Management",
//     description:
//       "Commodity trading platforms, risk analytics, and market intelligence systems for oil & gas.",
//   },
//   {
//     icon: FaFlask,
//     title: "Batch Manufacturing & Formulation",
//     description:
//       "Advanced recipe management, version control, and yield optimization for chemical production.",
//   },
//   {
//     icon: FaShieldAlt,
//     title: "EHS & Regulatory Compliance",
//     description:
//       "Comprehensive environmental, health, and safety systems ensuring zero incidents and 100% audit readiness.",
//   },
//   {
//     icon: FaNetworkWired,
//     title: "Supply Chain Optimization",
//     description:
//       "End-to-End supply chain tracking, procurement intelligence, and logistics automation.",
//   },
// ];

// const BENEFITS_DATA = [
//   "Asset reliability improved by up to 45% through predictive maintenance",
//   "Zero safety incidents with proactive EHS risk management",
//   "100% regulatory compliance with automated, real-time reporting",
//   "Batch manufacturing efficiency increased by up to 40%",
//   "Real-time visibility across global supply chains and grids",
//   "Operational costs reduced by 25% via process automation",
// ];

// const PROCESS_STEPS = [
//   {
//     step: "01",
//     title: "Operational Assessment",
//     description:
//       "Comprehensive evaluation of assets, safety protocols, and supply chain maturity.",
//     icon: FaHardHat,
//   },
//   {
//     step: "02",
//     title: "Digital Strategy Design",
//     description:
//       "Architecture roadmaps aligning IT/OT convergence with business and compliance goals.",
//     icon: FaNetworkWired,
//   },
//   {
//     step: "03",
//     title: "Phased Implementation",
//     description:
//       "Controlled deployment of grid, trading, or batch systems ensuring zero operational disruption.",
//     icon: FaCogs,
//   },
//   {
//     step: "04",
//     title: "Continuous Optimization",
//     description:
//       "Ongoing performance tuning, EHS updates, and AI-driven innovation enablement.",
//     icon: FaRocket,
//   },
// ];

// // ============================================
// // SECTION COMPONENTS
// // ============================================

// const HeroSection = () => (
//   <section className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-primary-800 text-white relative overflow-hidden">
//     <div className="absolute inset-0 overflow-hidden">
//       <motion.div
//         animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-[#FFD700]/30 to-[#D4AF37]/10 rounded-full filter blur-3xl"
//       />
//       <motion.div
//         animate={{ scale: [1.3, 1, 1.3], opacity: [0.08, 0.12, 0.08] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-[#D4AF37]/20 to-[#FFD700]/10 rounded-full filter blur-3xl"
//       />
//       {/* Power Grid + Molecular Hybrid Pattern */}
//       <div
//         className="absolute inset-0 opacity-[0.04]"
//         style={{
//           backgroundImage: `linear-gradient(rgba(255,215,0,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,.4) 1px, transparent 1px)`,
//           backgroundSize: "40px 40px",
//         }}
//       ></div>
//       <div
//         className="absolute inset-0 opacity-[0.02]"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23FFD700' stroke-width='0.5'/%3E%3C/svg%3E")`,
//           backgroundSize: "80px 80px",
//         }}
//       ></div>
//     </div>

//     <div className="max-w-2xl z-10 relative">
//       <motion.div
//         initial={{ opacity: 0, x: -60 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <GoldBadge className="mb-8">Driving Operational Excellence</GoldBadge>
//         <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
//           Energy, Oil & Gas, Utilities &{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFE55C] to-[#D4AF37]">
//             Chemicals
//           </span>
//         </h1>
//         <p className="text-md md:text-xl text-gray-300 mb-2leading-relaxed max-w-xl">
//           Driving operational excellence through asset management, smart
//           metering, energy trading, batch manufacturing, regulatory compliance,
//           and supply chain solutions.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 mb-12">
//           <Button size="lg">
//             Drive Operational Excellence <FaArrowRight />
//           </Button>
//           <Button variant="ghost" size="lg">
//             Explore Solutions
//           </Button>
//         </div>
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//           className="grid grid-cols-3 gap-6 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-[#FFD700]/20"
//         >
//           {[
//             { value: "150+", label: "Global Projects" },
//             { value: "100%", label: "Compliance Rate" },
//             { value: "30+", label: "Countries Served" },
//           ].map((stat, i) => (
//             <div
//               key={i}
//               className="border-l-2 border-[#FFD700]/40 pl-4 first:border-l-0 first:pl-0"
//             >
//               <div className="text-3xl font-bold text-[#FFD700]">
//                 {stat.value}
//               </div>
//               <div className="text-sm text-gray-400">{stat.label}</div>
//             </div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>

//     <motion.div
//       className="w-full lg:w-1/2 mt-12 lg:mt-0 z-10 relative"
//       initial={{ opacity: 0, x: 60 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8, delay: 0.3 }}
//     >
//       <div className="relative">
//         <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#FFD700]/30">
//           <img
//             src={img1}
//             alt="Modern energy infrastructure showcasing power generation and smart grid technology"
//             className="w-full h-[200px] md:h-[250px] lg:h-[400px] object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent"></div>

//           {/* Gold Overlay Effect */}
//           <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700]/5 to-transparent"></div>

//           {/* Energy Pulse Animation Overlay */}
//           <motion.div
//             animate={{ opacity: [0, 0.1, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 via-transparent to-[#FFD700]/20"
//           />
//         </div>

//         <motion.div
//           animate={{ y: [-10, 10, -10] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-2xl border border-[#FFD700]/30 hidden lg:block"
//         >
//           <div className="flex items-center gap-3">
//             <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] rounded-xl flex items-center justify-center">
//               <FaShieldAlt className="text-2xl text-[#0a1628]" />
//             </div>
//             <div>
//               <div className="font-bold text-[#0a1628]">ISO 45001</div>
//               <div className="text-sm text-gray-500">Safety Certified</div>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           animate={{ y: [10, -10, 10] }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute -top-6 -right-6 bg-primary-800 rounded-2xl p-5 shadow-2xl text-white border border-[#FFD700]/50 hidden lg:block"
//         >
//           <div className="flex items-center gap-3">
//             <FaBolt className="text-3xl text-[#FFD700]" />
//             <div>
//               <div className="text-sm font-bold">Smart Grid</div>
//               <div className="text-xs text-gray-300">Enabled</div>
//             </div>
//           </div>
//         </motion.div>

//         <div className="absolute -top-3 -left-3 w-20 h-20 border-t-4 border-l-4 border-[#FFD700]/50 rounded-tl-3xl"></div>
//         <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-4 border-r-4 border-[#FFD700]/50 rounded-br-3xl"></div>
//       </div>
//     </motion.div>
//   </section>
// );

// const ChallengesSection = () => (
//   <SectionWrapper
//     className="bg-gradient-to-b from-gray-50 to-white"
//     id="challenges"
//   >
//     <SectionTitle subtitle="Bridging the gap between legacy operations and digital-first excellence">
//       Industry Challenges We Address
//     </SectionTitle>
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {CHALLENGES_DATA.map((challenge, i) => (
//         <Card key={i} delay={i * 0.1}>
//           <div className="flex flex-col h-full">
//             <div className="w-14 h-14 bg-primary-800 rounded-xl flex items-center justify-center mb-5 shadow-lg">
//               <challenge.icon className="text-2xl text-[#FFD700]" />
//             </div>
//             <h3 className="font-bold text-lg mb-3 text-[#0a1628]">
//               {challenge.title}
//             </h3>
//             <p className="text-gray-600 text-sm leading-relaxed flex-grow">
//               {challenge.description}
//             </p>
//             <div className="mt-6 pt-4 border-t border-gray-100">
//               <span className="text-[#D4AF37] text-sm font-semibold">
//                 Learn More →
//               </span>
//             </div>
//           </div>
//         </Card>
//       ))}
//     </div>
//   </SectionWrapper>
// );

// const SolutionsSection = () => (
//   <SectionWrapper className="bg-white relative" id="solutions">
//     <div
//       className="absolute inset-0 opacity-[0.02]"
//       style={{
//         backgroundImage: `radial-gradient(circle at 2px 2px, #0a1628 1px, transparent 0)`,
//         backgroundSize: "30px 30px",
//       }}
//     ></div>
//     <div className="relative z-10">
//       <SectionTitle subtitle="Integrated solutions spanning the entire energy and chemical value chain">
//         Our Specialized Solutions
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
//     <div className="absolute inset-0">
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//         className="absolute -top-1/2 -right-1/4 w-full h-full bg-gradient-to-br from-[#FFD700]/5 to-transparent rounded-full"
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
//           <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#FFD700]/30">
//             <img
//               src={img2}
//               alt="Advanced smart grid infrastructure and power distribution systems"
//               className="w-full h-[200px] md:h-[450px] object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent"></div>
//           </div>

//           <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-[#FFD700]/30">
//             <div className="grid grid-cols-3 gap-4 text-center">
//               <div>
//                 <div className="text-3xl font-bold text-[#0a1628]">45%</div>
//                 <div className="text-xs text-gray-600 mt-1">Reliability ↑</div>
//               </div>
//               <div className="border-x border-[#FFD700]/30">
//                 <div className="text-3xl font-bold text-[#0a1628]">0</div>
//                 <div className="text-xs text-gray-600 mt-1">Incidents</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-[#0a1628]">25%</div>
//                 <div className="text-xs text-gray-600 mt-1">Cost Savings</div>
//               </div>
//             </div>
//           </div>

//           <div className="absolute -top-2 -left-2 w-16 h-16 border-t-4 border-l-4 border-[#FFD700] rounded-tl-2xl"></div>
//           <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-4 border-r-4 border-[#FFD700] rounded-br-2xl"></div>
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
//             Transform your operations with measurable improvements in safety,
//             efficiency, and compliance across the value chain.
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
//                 <div className="w-7 h-7 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg group-hover:scale-110 transition-transform">
//                   <FaCheckCircle className="text-[#0a1628] text-sm" />
//                 </div>
//                 <span className="text-gray-200 font-medium group-hover:text-white transition-colors leading-relaxed">
//                   {benefit}
//                 </span>
//               </motion.div>
//             ))}
//           </div>
//           <div className="mt-10">
//             <Button variant="ghost">
//               Download Industry Whitepaper <FaArrowRight />
//             </Button>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   </SectionWrapper>
// );

// const ProcessSection = () => (
//   <SectionWrapper className="bg-gray-50 relative" id="process">
//     <div
//       className="absolute inset-0 opacity-[0.03]"
//       style={{
//         backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%230a1628' stroke-width='0.5'%3E%3Cpath d='M40 0l34.64 20v40L40 80 5.36 60V20z'/%3E%3C/g%3E%3C/svg%3E")`,
//         backgroundSize: "100px 100px",
//       }}
//     ></div>
//     <div className="relative z-10">
//       <SectionTitle subtitle="A proven methodology designed for mission-critical infrastructure and safety">
//         Our Proven Approach
//       </SectionTitle>
//       <div className="relative">
//         <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-[#0a1628] via-[#FFD700] to-[#0a1628] rounded-full shadow-lg"></div>
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
//               <div className="relative inline-block mb-6">
//                 <div className="w-24 h-24 bg-white border-4 border-[#0a1628] rounded-full flex items-center justify-center shadow-xl relative z-10 group-hover:border-[#FFD700] group-hover:scale-110 transition-all duration-300 mx-auto">
//                   <step.icon className="text-3xl text-[#0a1628] group-hover:text-[#FFD700] transition-colors" />
//                 </div>
//                 <div className="absolute -top-2 -right-2 w-9 h-9 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] rounded-full flex items-center justify-center text-[#0a1628] text-sm font-bold shadow-lg border-2 border-white">
//                   {step.step}
//                 </div>
//               </div>
//               <h3 className="font-bold text-xl mb-3 text-[#0a1628] group-hover:text-[#D4AF37] transition-colors">
//                 {step.title}
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
//                 {step.description}
//               </p>
//               {i < PROCESS_STEPS.length - 1 && (
//                 <div className="lg:hidden flex justify-center my-4">
//                   <div className="w-10 h-10 bg-[#FFD700]/20 rounded-full flex items-center justify-center">
//                     <FaArrowDown className="text-[#D4AF37]" />
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
//     <div className="absolute inset-0 bg-primary-800"></div>
//     <div
//       className="absolute inset-0 opacity-[0.05]"
//       style={{
//         backgroundImage: `radial-gradient(circle at 2px 2px, #FFD700 1px, transparent 0)`,
//         backgroundSize: "35px 35px",
//       }}
//     ></div>

//     <motion.div
//       animate={{ scale: [1, 1.2, 1], x: [-20, 20, -20], y: [-10, 10, -10] }}
//       transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       className="absolute top-10 left-10 w-72 h-72 bg-[#FFD700]/15 rounded-full filter blur-3xl"
//     />
//     <motion.div
//       animate={{ scale: [1.2, 1, 1.2], x: [20, -20, 20], y: [10, -10, 10] }}
//       transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//       className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/12 rounded-full filter blur-3xl"
//     />

//     <motion.div
//       animate={{ rotate: 360 }}
//       transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//       className="absolute top-20 right-20 w-44 h-44 border-2 border-[#FFD700]/20 rounded-full"
//     />
//     <motion.div
//       animate={{ rotate: -360 }}
//       transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//       className="absolute bottom-20 left-20 w-36 h-36 border-2 border-[#FFD700]/15 rounded-full"
//     />

//     <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//       >
//         <GoldBadge className="mx-auto mb-8 justify-center">
//           Start Your Transformation
//         </GoldBadge>
//         <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
//           Power the Future with{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFE55C] to-[#D4AF37]">
//             Operational Excellence
//           </span>
//         </h2>
//         <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
//           Partner with industry leaders who deliver reliable, safe, and
//           sustainable solutions for energy, utilities, and chemical sectors
//           globally.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
//           <Button size="lg" className="!px-12 !py-5 !text-lg">
//             Schedule Consultation <FaArrowRight />
//           </Button>
//           <Button variant="ghost" size="lg" className="!px-12 !py-5 !text-lg">
//             Download Compliance Guide
//           </Button>
//         </div>
//         <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 pt-8 border-t border-[#FFD700]/20">
//           <div className="flex items-center gap-2">
//             <FaBolt className="text-[#FFD700]" /> Smart Infrastructure
//           </div>
//           <div className="flex items-center gap-2">
//             <FaShieldAlt className="text-[#FFD700]" /> EHS Compliant
//           </div>
//           <div className="flex items-center gap-2">
//             <FaFlask className="text-[#FFD700]" /> Batch Optimization
//           </div>
//           <div className="flex items-center gap-2">
//             <FaGlobeAmericas className="text-[#FFD700]" /> Global Scale
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   </section>
// );

// // ============================================
// // MAIN COMPONENT
// // ============================================
// export default function EnergyUtilitiesChemicalsPage() {
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
//       <a
//         href="#main-content"
//         className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#FFD700] text-[#0a1628] px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
//       >
//         Skip to main content
//       </a>
//       <main id="main-content" role="main">
//         {memoizedContent.hero}
//         {memoizedContent.challenges}
//         {memoizedContent.solutions}
//         {memoizedContent.benefits}
//         {memoizedContent.process}
//         {memoizedContent.cta}
//       </main>
//     </div>
//   );
// }

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaOilCan,
  FaChartLine,
  FaCogs,
  FaNetworkWired,
  FaCheckCircle,
  FaArrowRight,
  FaRocket,
  FaStar,
  FaIndustry,
  FaShieldAlt,
  FaLeaf,
  FaFlask,
  FaDatabase,
  FaClock,
  FaRecycle,
  FaGlobeAmericas,
  FaHardHat,
  FaTachometerAlt,
  FaArrowDown,
  FaAtom,
  FaClipboardCheck,
  FaWarehouse,
} from "react-icons/fa";
import img1 from "../../assets/industry/cam1.png";
import img2 from "../../assets/industry/og2.png";

// ============================================
// NAVY & GOLD COLOR CONFIGURATION
// ============================================
const COLORS = {
  navy: {
    900: "#0a1628",
    800: "#0f2140",
    700: "#152d52",
  },
  gold: {
    400: "#FFD700",
    500: "#D4AF37",
    600: "#B8962E",
  },
};

// ============================================
// REUSABLE COMPONENTS
// ============================================
const SectionWrapper = ({ children, className = "", id }) => (
  <section id={id} className={`px-6 lg:px-20 py-24 ${className}`}>
    {children}
  </section>
);

const SectionTitle = ({
  children,
  subtitle,
  centered = true,
  light = false,
}) => (
  <div className={`mb-10 ${centered ? "text-center" : ""}`}>
    <h2
      className={`text-3xl lg:text-5xl font-bold mb-4 ${light ? "text-white" : "text-[#0a1628]"}`}
    >
      {children}
    </h2>
    {subtitle && (
      <p
        className={`text-lg max-w-2xl mx-auto leading-relaxed ${light ? "text-gray-300" : "text-gray-600"}`}
      >
        {subtitle}
      </p>
    )}
  </div>
);

const Card = ({ children, className = "", hover = true, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={hover ? { scale: 1.03, y: -8 } : undefined}
    className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 ${className}`}
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
    whileHover={{ scale: 1.05, y: -10 }}
    className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl text-center group cursor-pointer border border-gray-100 relative overflow-hidden"
  >
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#FFD700] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    <div className="w-20 h-20 bg-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg group-hover:shadow-[#FFD700]/20">
      <Icon className="text-4xl text-[#FFD700]" />
    </div>
    <h3 className="font-bold text-xl mb-3 text-[#0a1628]">{title}</h3>
    {description && (
      <p className="text-gray-600 leading-relaxed">{description}</p>
    )}
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
    "inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary:
      "bg-gradient-to-r from-[#FFD700] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#B8962E] text-[#0a1628] shadow-lg hover:shadow-xl focus:ring-[#FFD700]",
    secondary:
      "bg-white hover:bg-gray-50 text-[#0a1628] border-2 border-[#0a1628] focus:ring-[#0a1628]",
    ghost:
      "bg-transparent text-white hover:bg-[#FFD700]/10 focus:ring-[#FFD700] border border-[#FFD700]/50",
  };
  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg",
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

const GoldBadge = ({ children, icon = true }) => (
  <div className="mb-4 inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-full text-[#FFD700] text-sm font-medium backdrop-blur-sm">
    {icon && <FaStar className="text-xs animate-pulse" />}
    {children}
  </div>
);

// ============================================
// DATA CONFIGURATION - ENERGY, UTILITIES & CHEMICALS
// ============================================
const CHALLENGES_DATA = [
  {
    icon: FaIndustry,
    title: "Aging Infrastructure & Data Silos",
    description:
      "Decarbonizing legacy infrastructure while dismantling operational data silos across power plants, grids, and chemical facilities.",
  },
  {
    icon: FaShieldAlt,
    title: "Strict EHS & Regulatory Compliance",
    description:
      "Navigating the complex web of environmental, health, and safety mandates with rigid, audit-ready documentation.",
  },
  {
    icon: FaLeaf,
    title: "Energy Transition & Decarbonization",
    description:
      "Balancing traditional hydrocarbon operations with the aggressive integration of renewable energy and sustainability goals.",
  },
  {
    icon: FaFlask,
    title: "Complex Batch Manufacturing",
    description:
      "Orchestrating intricate chemical formulations, precise batch traceability, and zero-defect quality control across production cycles.",
  },
  {
    icon: FaWarehouse,
    title: "Supply Chain Visibility Gaps",
    description:
      "Eliminating blind spots in the tracking of hazardous raw materials, logistics, and global distribution networks.",
  },
  {
    icon: FaTachometerAlt,
    title: "Asset Reliability & Unplanned Downtime",
    description:
      "Mitigating unplanned outages and expensive disruptions in mission-critical infrastructure with proactive intelligence.",
  },
];

const SOLUTIONS_DATA = [
  {
    icon: FaCogs,
    title: "Asset Performance Management",
    description:
      "IoT-driven predictive maintenance and lifecycle optimization to maximize asset uptime and operational throughput.",
  },
  {
    icon: FaBolt,
    title: "Smart Metering & Grid Solutions",
    description:
      "Advanced Metering Infrastructure (AMI) and demand response systems for next-generation utility networks.",
  },
  {
    icon: FaChartLine,
    title: "Energy Trading & Risk Management",
    description:
      "Robust commodity trading platforms and real-time risk analytics for volatile oil & gas markets.",
  },
  {
    icon: FaFlask,
    title: "Batch Manufacturing & Formulation",
    description:
      "AI-enhanced recipe management, version control, and dynamic yield optimization for chemical production.",
  },
  {
    icon: FaShieldAlt,
    title: "EHS & Regulatory Compliance",
    description:
      "Automated environmental, health, and safety frameworks guaranteeing zero incidents and continuous audit readiness.",
  },
  {
    icon: FaNetworkWired,
    title: "Supply Chain Optimization",
    description:
      "End-to-End digital thread for supply chain tracking, procurement intelligence, and logistics automation.",
  },
];

const BENEFITS_DATA = [
  "Asset reliability improved by up to 45% through IoT predictive maintenance",
  "Zero safety incidents with proactive EHS risk management frameworks",
  "100% regulatory compliance with automated, real-time reporting engines",
  "Batch manufacturing efficiency increased by up to 40% via AI optimization",
  "Real-time visibility across global supply chains and smart grid networks",
  "Operational costs reduced by 25% through intelligent process automation",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Operational Assessment",
    description:
      "Comprehensive evaluation of assets, safety protocols, and supply chain maturity.",
    icon: FaHardHat,
  },
  {
    step: "02",
    title: "Digital Strategy Design",
    description:
      "Architecture roadmaps aligning IT/OT convergence with business and compliance goals.",
    icon: FaNetworkWired,
  },
  {
    step: "03",
    title: "Phased Implementation",
    description:
      "Controlled deployment of grid, trading, or batch systems ensuring zero operational disruption.",
    icon: FaCogs,
  },
  {
    step: "04",
    title: "Continuous Optimization",
    description:
      "Ongoing performance tuning, EHS updates, and AI-driven innovation enablement.",
    icon: FaRocket,
  },
];

// ============================================
// SECTION COMPONENTS
// ============================================

const HeroSection = () => (
  <section className="lg:h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-primary-800 text-white relative overflow-hidden">
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-[#FFD700]/30 to-[#D4AF37]/10 rounded-full filter blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.3, 1, 1.3], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-[#D4AF37]/20 to-[#FFD700]/10 rounded-full filter blur-3xl"
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,215,0,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,.4) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23FFD700' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      ></div>
    </div>

    <div className="max-w-2xl z-10 relative">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <GoldBadge className="mb-10">Driving Operational Excellence</GoldBadge>
        <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
          Energy, Oil & Gas, Utilities &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFE55C] to-[#D4AF37]">
            Chemicals
          </span>
        </h1>
        <p className="text-md md:text-xl text-gray-300 mb-2leading-relaxed max-w-xl">
          Empowering the future of heavy industry through intelligent asset
          management, smart grid integration, predictive maintenance, and
          seamless regulatory compliance across the energy and chemical value
          chain.
        </p>
        {/* <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a href="/contact" style={{ textDecoration: "none" }}>
            <Button size="lg">
              Drive Operational Excellence <FaArrowRight />
            </Button>
          </a>
          <a href="/contact" style={{ textDecoration: "none" }}>
            <Button variant="ghost" size="lg">
              Explore Solutions
            </Button>
          </a>
        </div> */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-3 gap-6 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-[#FFD700]/20"
        >
          {[
            { value: "150+", label: "Global Projects" },
            { value: "100%", label: "Compliance Rate" },
            { value: "30+", label: "Countries Served" },
          ].map((stat, i) => (
            <div
              key={i}
              className="border-l-2 border-[#FFD700]/40 pl-4 first:border-l-0 first:pl-0"
            >
              <div className="text-3xl font-bold text-[#FFD700]">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div> */}
      </motion.div>
    </div>

    <motion.div
      className="w-full lg:w-1/2 mt-12 lg:mt-0 z-10 relative"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="relative">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#FFD700]/30">
          <img
            src={img1}
            alt="Modern energy infrastructure showcasing power generation and smart grid technology"
            className="w-full h-[200px] md:h-[250px] lg:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700]/5 to-transparent"></div>
          <motion.div
            animate={{ opacity: [0, 0.1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 via-transparent to-[#FFD700]/20"
          />
        </div>

        {/* <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-2xl border border-[#FFD700]/30 hidden lg:block"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] rounded-xl flex items-center justify-center">
              <FaShieldAlt className="text-2xl text-[#0a1628]" />
            </div>
            <div>
              <div className="font-bold text-[#0a1628]">ISO 45001</div>
              <div className="text-sm text-gray-500">Safety Certified</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 -right-6 bg-primary-800 rounded-2xl p-5 shadow-2xl text-white border border-[#FFD700]/50 hidden lg:block"
        >
          <div className="flex items-center gap-3">
            <FaBolt className="text-3xl text-[#FFD700]" />
            <div>
              <div className="text-sm font-bold">Smart Grid</div>
              <div className="text-xs text-gray-300">Enabled</div>
            </div>
          </div>
        </motion.div> */}

        <div className="absolute -top-3 -left-3 w-20 h-20 border-t-4 border-l-4 border-[#FFD700]/50 rounded-tl-3xl"></div>
        <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-4 border-r-4 border-[#FFD700]/50 rounded-br-3xl"></div>
      </div>
    </motion.div>
  </section>
);

const ChallengesSection = () => (
  <SectionWrapper
    className="bg-gradient-to-b from-gray-50 to-white"
    id="challenges"
  >
    <SectionTitle subtitle="Bridging the gap between legacy operations and digital-first excellence">
      Industry Challenges We Address
    </SectionTitle>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {CHALLENGES_DATA.map((challenge, i) => (
        <Card key={i} delay={i * 0.1}>
          <div className="flex flex-col h-full">
            <div className="w-14 h-14 bg-primary-800 rounded-xl flex items-center justify-center mb-5 shadow-lg">
              <challenge.icon className="text-2xl text-[#FFD700]" />
            </div>
            <h3 className="font-bold text-lg mb-3 text-[#0a1628]">
              {challenge.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
              {challenge.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  </SectionWrapper>
);

const SolutionsSection = () => (
  <SectionWrapper className="bg-white relative" id="solutions">
    <div
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #0a1628 1px, transparent 0)`,
        backgroundSize: "30px 30px",
      }}
    ></div>
    <div className="relative z-10">
      <SectionTitle subtitle="Integrated solutions spanning the entire energy and chemical value chain">
        Our Specialized Solutions
      </SectionTitle>
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
    </div>
  </SectionWrapper>
);

const BenefitsSection = () => (
  <SectionWrapper
    className="bg-primary-800 text-white relative overflow-hidden"
    id="benefits"
  >
    <div className="absolute inset-0">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/2 -right-1/4 w-full h-full bg-gradient-to-br from-[#FFD700]/5 to-transparent rounded-full"
      />
    </div>

    <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
      <motion.div
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#FFD700]/30">
            <img
              src={img2}
              alt="Advanced smart grid infrastructure and power distribution systems"
              className="w-full h-[200px] md:h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent"></div>
          </div>

          <div className="absolute -top-2 -left-2 w-16 h-16 border-t-4 border-l-4 border-[#FFD700] rounded-tl-2xl"></div>
          <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-4 border-r-4 border-[#FFD700] rounded-br-2xl"></div>
        </div>
      </motion.div>

      <div className="w-full lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SectionTitle centered={false} light>
            Key Benefits
          </SectionTitle>
          <p className="text-gray-300 mb-8 text-lg">
            Transform your operations with measurable improvements in safety,
            efficiency, and compliance across the value chain.
          </p>
          <div className="space-y-5">
            {BENEFITS_DATA.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-7 h-7 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg group-hover:scale-110 transition-transform">
                  <FaCheckCircle className="text-[#0a1628] text-sm" />
                </div>
                <span className="text-gray-200 font-medium group-hover:text-white transition-colors leading-relaxed">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>
          {/* <div className="mt-10">
            <a href="/contact" style={{ textDecoration: "none" }}>
              <Button variant="ghost">
                Download Industry Whitepaper <FaArrowRight />
              </Button>
            </a>
          </div> */}
        </motion.div>
      </div>
    </div>
  </SectionWrapper>
);

const ProcessSection = () => (
  <SectionWrapper className="bg-gray-50 relative" id="process">
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%230a1628' stroke-width='0.5'%3E%3Cpath d='M40 0l34.64 20v40L40 80 5.36 60V20z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "100px 100px",
      }}
    ></div>
    <div className="relative z-10">
      <SectionTitle subtitle="A proven methodology designed for mission-critical infrastructure and safety">
        Our Proven Approach
      </SectionTitle>
      <div className="relative">
        <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-[#0a1628] via-[#FFD700] to-[#0a1628] rounded-full shadow-lg"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center group"
            >
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-white border-4 border-[#0a1628] rounded-full flex items-center justify-center shadow-xl relative z-10 group-hover:border-[#FFD700] group-hover:scale-110 transition-all duration-300 mx-auto">
                  <step.icon className="text-3xl text-[#0a1628] group-hover:text-[#FFD700] transition-colors" />
                </div>
                <div className="absolute -top-2 -right-2 w-9 h-9 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] rounded-full flex items-center justify-center text-[#0a1628] text-sm font-bold shadow-lg border-2 border-white">
                  {step.step}
                </div>
              </div>
              <h3 className="font-bold text-xl mb-3 text-[#0a1628] group-hover:text-[#D4AF37] transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
              {i < PROCESS_STEPS.length - 1 && (
                <div className="lg:hidden flex justify-center my-4">
                  <div className="w-10 h-10 bg-[#FFD700]/20 rounded-full flex items-center justify-center">
                    <FaArrowDown className="text-[#D4AF37]" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

const CTASection = () => (
  <section className="relative px-6 lg:px-20 py-28 overflow-hidden">
    <div className="absolute inset-0 bg-primary-800"></div>
    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #FFD700 1px, transparent 0)`,
        backgroundSize: "35px 35px",
      }}
    ></div>

    <motion.div
      animate={{ scale: [1, 1.2, 1], x: [-20, 20, -20], y: [-10, 10, -10] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-10 left-10 w-72 h-72 bg-[#FFD700]/15 rounded-full filter blur-3xl"
    />
    <motion.div
      animate={{ scale: [1.2, 1, 1.2], x: [20, -20, 20], y: [10, -10, 10] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/12 rounded-full filter blur-3xl"
    />

    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="absolute top-20 right-20 w-44 h-44 border-2 border-[#FFD700]/20 rounded-full"
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-20 left-20 w-36 h-36 border-2 border-[#FFD700]/15 rounded-full"
    />

    <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <GoldBadge className="mx-auto mb-8 justify-center">
          Start Your Transformation
        </GoldBadge>
        <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Power the Future with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFE55C] to-[#D4AF37]">
            Operational Excellence
          </span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Partner with industry leaders who deliver reliable, safe, and
          sustainable solutions for energy, utilities, and chemical sectors
          globally.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
          <a href="/contact" style={{ textDecoration: "none" }}>
            <Button size="lg" className="!px-12 !py-5 !text-lg">
              Schedule Consultation <FaArrowRight />
            </Button>
          </a>
          <a href="/contact" style={{ textDecoration: "none" }}>
            <Button variant="ghost" size="lg" className="!px-12 !py-5 !text-lg">
              Download Compliance Guide
            </Button>
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 pt-8 border-t border-[#FFD700]/20">
          <div className="flex items-center gap-2">
            <FaBolt className="text-[#FFD700]" /> Smart Infrastructure
          </div>
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-[#FFD700]" /> EHS Compliant
          </div>
          <div className="flex items-center gap-2">
            <FaFlask className="text-[#FFD700]" /> Batch Optimization
          </div>
          <div className="flex items-center gap-2">
            <FaGlobeAmericas className="text-[#FFD700]" /> Global Scale
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// ============================================
// MAIN COMPONENT
// ============================================
export default function EnergyUtilitiesChemicalsPage() {
  const memoizedContent = useMemo(
    () => ({
      hero: <HeroSection />,
      challenges: <ChallengesSection />,
      solutions: <SolutionsSection />,
      benefits: <BenefitsSection />,
      process: <ProcessSection />,
      cta: <CTASection />,
    }),
    [],
  );

  return (
    <div className="w-full font-sans antialiased text-gray-800 overflow-x-hidden bg-gray-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#FFD700] text-[#0a1628] px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
      >
        Skip to main content
      </a>
      <main id="main-content" role="main">
        {memoizedContent.hero}
        {memoizedContent.challenges}
        {memoizedContent.solutions}
        {memoizedContent.benefits}
        {memoizedContent.process}
        {/* {memoizedContent.cta} */}
      </main>
    </div>
  );
}
