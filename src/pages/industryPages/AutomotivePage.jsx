// import React, { useMemo } from "react";
// import { motion } from "framer-motion";
// import {
//   FaCar,
//   FaIndustry,
//   FaBolt,
//   FaProjectDiagram,
//   FaCheckCircle,
//   FaArrowRight,
//   FaChartLine,
//   FaCogs,
//   FaShieldAlt,
//   FaRocket,
//   FaArrowDown,
//   FaStar,
// } from "react-icons/fa";
// import img1 from "../../assets/industry/ae1.png";
// import img2 from "../../assets/industry/au1.png";

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
//     title: "Complex Supply Chains",
//     description:
//       "Managing multi-tier supplier networks and global logistics complexity",
//   },
//   {
//     icon: FaBolt,
//     title: "Connected Vehicle Demand",
//     description:
//       "Integrating IoT, 5G connectivity and real-time data ecosystems",
//   },
//   {
//     icon: FaChartLine,
//     title: "Cost Optimization Pressure",
//     description:
//       "Balancing innovation investments with margin preservation goals",
//   },
//   {
//     icon: FaRocket,
//     title: "EV & Digital Transformation",
//     description:
//       "Transitioning to electric mobility and software-defined vehicles",
//   },
// ];

// const SOLUTIONS_DATA = [
//   {
//     icon: FaCar,
//     title: "Vehicle Lifecycle Management",
//     description:
//       "End-to-End tracking from design through end-of-life recycling",
//   },
//   {
//     icon: FaProjectDiagram,
//     title: "Connected Vehicle Platforms",
//     description:
//       "IoT integration, OTA updates, and advanced telematics solutions",
//   },
//   {
//     icon: FaIndustry,
//     title: "Smart Manufacturing",
//     description: "Industry 4.0 automation and digital twin technologies",
//   },
//   {
//     icon: FaBolt,
//     title: "Data & Analytics",
//     description:
//       "Predictive maintenance, AI insights, and business intelligence",
//   },
//   {
//     icon: FaCogs,
//     title: "SAP & ERP Transformation",
//     description: "Enterprise systems modernization and process optimization",
//   },
//   {
//     icon: FaShieldAlt,
//     title: "Cybersecurity & Compliance",
//     description: "Vehicle security, data privacy, and regulatory adherence",
//   },
// ];

// const BENEFITS_DATA = [
//   "Optimized production efficiency across operations",
//   "End-to-end supply chain visibility and management",
//   "Personalized customer experiences and engagement",
//   "Flexible and scalable cloud-based infrastructure",
//   "Faster product innovation and deployment",
//   "Proactive maintenance to ensure operational continuity",
// ];

// const PROCESS_STEPS = [
//   {
//     step: "01",
//     title: "Discovery & Analysis",
//     description:
//       "Deep dive into current systems, pain points, and opportunities",
//     icon: FaChartLine,
//   },
//   {
//     step: "02",
//     title: "Solution Design",
//     description: "Architect tailored solutions with cutting-edge technology",
//     icon: FaProjectDiagram,
//   },
//   {
//     step: "03",
//     title: "Agile Implementation",
//     description: "Iterative deployment with minimal operational disruption",
//     icon: FaCogs,
//   },
//   {
//     step: "04",
//     title: "Continuous Optimization",
//     description: "Ongoing enhancement, monitoring, and support",
//     icon: FaRocket,
//   },
// ];

// // ============================================
// // SECTION COMPONENTS - NAVY & GOLD
// // ============================================

// const HeroSection = () => (
//   <section className="lg:h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-6 lg:py12 bg-primary-800 text-white relative overflow-hidden">
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
//       <motion.div
//         animate={{ x: ["-100%", "100%"] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//         className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFF]/30 to-transparent"
//       />
//       <motion.div
//         animate={{ x: ["100%", "-100%"] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//         className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFF]/30 to-transparent"
//       />
//     </div>

//     <div className="max-w-2xl z-10 relative">
//       <motion.div
//         initial={{ opacity: 0, x: -60 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <GoldBadge className="mb-8">Leading Automotive Innovation</GoldBadge>

//         <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
//           Automotive{" "}
//           <span className="text-transparent bg-clip-text bg-[#FFF]">
//             Transformation
//           </span>
//         </h1>

//         <p className="text-md md:text-xl text-gray-300 mb-2 leading-relaxed max-w-xl">
//           Driving innovation across vehicle lifecycle management, connected
//           ecosystems, and smart manufacturing for the future of mobility.
//         </p>

//         {/* <div className="flex flex-col sm:flex-row gap-4 mb-12">
//           <Button size="lg">
//             Explore Solutions <FaArrowRight />
//           </Button>
//           <Button variant="ghost" size="lg">
//             Watch Demo
//           </Button>
//         </div> */}

//         {/* Stats Grid */}
//         {/* <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//           className="grid grid-cols-3 gap-6 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-[#FFF]/20"
//         >
//           {[
//             { value: "200+", label: "Auto Projects" },
//             { value: "95%", label: "Client Retention" },
//             { value: "15+", label: "Countries Served" },
//           ].map((stat, i) => (
//             <div
//               key={i}
//               className="border-l-2 border-[#FFF]/40 pl-4 first:border-l-0 first:pl-0"
//             >
//               <div className="text-3xl font-bold text-[#FFF]">
//                 {stat.value}
//               </div>
//               <div className="text-sm text-gray-400">{stat.label}</div>
//             </div>
//           ))}
//         </motion.div> */}
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
//             alt="Advanced automotive manufacturing facility showcasing next-generation vehicle production"
//             className="w-full h-[200px] md:h-[250px] lg:h-[400px] object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent"></div>

//           {/* Gold Overlay Effect */}
//           <div className="absolute inset-0 bg-gradient-to-tr from-[#FFF]/5 to-transparent"></div>
//         </div>

//         {/* Floating Cards */}
//         {/* <motion.div
//           animate={{ y: [-10, 10, -10] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-2xl border border-[#FFF]/30 hidden lg:block"
//         >
//           <div className="flex items-center gap-3">
//             <div className="w-12 h-12 bg-gradient-to-br from-[#FFF] to-[#FFF] rounded-xl flex items-center justify-center">
//               <FaCheckCircle className="text-2xl text-[#0a1628]" />
//             </div>
//             <div>
//               <div className="font-bold text-[#0a1628]">ISO Certified</div>
//               <div className="text-sm text-gray-500">Quality Assured</div>
//             </div>
//           </div>
//         </motion.div> */}

//         {/* <motion.div
//           animate={{ y: [10, -10, 10] }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute -top-6 -right-6 bg-primary-800 rounded-2xl p-5 shadow-2xl text-white border border-[#FFF]/50 hidden lg:block"
//         >
//           <div className="text-3xl font-bold text-[#FFF]">24/7</div>
//           <div className="text-sm text-gray-300">Support</div>
//         </motion.div> */}

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
//     <SectionTitle subtitle="The automotive industry faces unprecedented challenges in the digital era">
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

//             {/* Gold bottom accent */}
//             {/* <div className="mt-6 pt-4 border-t border-gray-100">
//               <span className="text-[#FFF] text-sm font-semibold">
//                 Learn More →
//               </span>
//             </div> */}
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
//       <SectionTitle subtitle="Comprehensive technology solutions designed for automotive excellence">
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
//               alt="Smart automotive factory with robotic automation and digital manufacturing processes"
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
//             Transform your automotive operations with measurable results that
//             impact your bottom line.
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
//                 <div className="w-7 h-7 bg-[#FFF] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg group-hover:scale-110 transition-transform">
//                   <FaCheckCircle className="text-[#0a1628] text-sm" />
//                 </div>
//                 <span className="text-gray-200 font-medium group-hover:text-white transition-colors leading-relaxed">
//                   {benefit}
//                 </span>
//               </motion.div>
//             ))}
//           </div>

//           {/* <div className="mt-10">
//             <Button variant="ghost">
//               View Case Studies <FaArrowRight />
//             </Button>
//           </div> */}
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
//       <SectionTitle subtitle="A proven methodology that delivers consistent results">
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

//               <h3 className="font-bold text-xl mb-3 text-[#0a1628] transition-colors">
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
//           Ready to Accelerate Your{" "}
//           <span className="text-transparent bg-clip-text bg-[#FFF]">
//             Automotive Innovation?
//           </span>
//         </h2>

//         <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
//           Join leading automotive manufacturers who trust us to deliver
//           transformative solutions that drive growth and efficiency.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
//           <Button size="lg" className="!px-12 !py-5 !text-lg">
//             Schedule Free Consultation <FaArrowRight />
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

// export default function AutomotivePage() {
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
  FaCar,
  FaIndustry,
  FaBolt,
  FaProjectDiagram,
  FaCheckCircle,
  FaArrowRight,
  FaChartLine,
  FaCogs,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";
import img1 from "../../assets/industry/ae1.png";
import img2 from "../../assets/industry/au1.png";

/* ============ DATA ============ */
const focusAreas = [
  { icon: FaProjectDiagram, label: "Connected Vehicles" },
  { icon: FaIndustry, label: "Smart Manufacturing" },
  { icon: FaBolt, label: "EV Transformation" },
];

const valueChain = [
  {
    icon: FaCogs,
    title: "Design & Engineering",
    desc: "Product lifecycle management and digital engineering that shorten development cycles and keep global teams aligned.",
  },
  {
    icon: FaIndustry,
    title: "Manufacturing & Supply Chain",
    desc: "Smart factory and supply chain platforms that bring visibility and agility to production and logistics.",
  },
  {
    icon: FaProjectDiagram,
    title: "Connected Mobility & Aftermarket",
    desc: "Connected vehicle, data and service platforms that deepen customer relationships long after the sale.",
  },
];

const challenges = [
  {
    icon: FaProjectDiagram,
    title: "Complex Supply Chains",
    desc: "Managing multi-tier supplier networks and global logistics complexity.",
    help: "Unified planning and tracking across tiers, with real-time visibility from supplier to production line.",
  },
  {
    icon: FaBolt,
    title: "Connected Vehicle Demand",
    desc: "Integrating IoT, 5G connectivity and real-time data ecosystems.",
    help: "Scalable IoT, over-the-air update and telematics platforms built on secure, cloud-native foundations.",
  },
  {
    icon: FaChartLine,
    title: "Cost Optimization Pressure",
    desc: "Balancing innovation investments with margin preservation goals.",
    help: "Process automation and ERP modernization that free up budget and capacity for innovation.",
  },
  {
    icon: FaRocket,
    title: "EV & Digital Transformation",
    desc: "Transitioning to electric mobility and software-defined vehicles.",
    help: "Clear roadmaps and delivery support for electrification programs and software-defined vehicle platforms.",
  },
];

const solutions = [
  {
    icon: FaCar,
    title: "Vehicle Lifecycle Management",
    desc: "End-to-end tracking from design through end-of-life recycling.",
  },
  {
    icon: FaProjectDiagram,
    title: "Connected Vehicle Platforms",
    desc: "IoT integration, OTA updates, and advanced telematics solutions.",
  },
  {
    icon: FaIndustry,
    title: "Smart Manufacturing",
    desc: "Industry 4.0 automation and digital twin technologies.",
  },
  {
    icon: FaBolt,
    title: "Data & Analytics",
    desc: "Predictive maintenance, AI insights, and business intelligence.",
  },
  {
    icon: FaCogs,
    title: "SAP & ERP Transformation",
    desc: "Enterprise systems modernization and process optimization.",
  },
  {
    icon: FaShieldAlt,
    title: "Cybersecurity & Compliance",
    desc: "Vehicle security, data privacy, and regulatory adherence.",
  },
];

const benefits = [
  "Optimized production efficiency across operations",
  "End-to-end supply chain visibility and management",
  "Personalized customer experiences and engagement",
  "Flexible and scalable cloud-based infrastructure",
  "Faster product innovation and deployment",
  "Proactive maintenance to ensure operational continuity",
];

const steps = [
  {
    icon: FaChartLine,
    title: "Discovery & Analysis",
    desc: "Deep dive into current systems, pain points, and opportunities.",
  },
  {
    icon: FaProjectDiagram,
    title: "Solution Design",
    desc: "Architect tailored solutions with proven, modern technology.",
  },
  {
    icon: FaCogs,
    title: "Agile Implementation",
    desc: "Iterative deployment with minimal operational disruption.",
  },
  {
    icon: FaRocket,
    title: "Continuous Optimization",
    desc: "Ongoing enhancement, monitoring, and support.",
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
  <section className="relative flex min-h-svh flex-col bg-black [clip-path:inset(0)]">
    {/* Fixed background: stays in place while the page scrolls, slowly zooms */}
    <motion.img
      src={img1}
      alt=""
      aria-hidden="true"
      className="fixed inset-0 h-screen w-full object-cover"
      initial={{ scale: 1.15 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 10,
        ease: "easeOut",
      }}
    />

    {/* Even, light overlay so the image stays clear and the text stays readable */}
    <div className="absolute inset-0 bg-black/40" />
    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

    <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-start px-4 py-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white"
      >
        {/* Breadcrumb with thin line underneath */}
        <p className="border-b border-white/30 pb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">
          Industries / Automotive
        </p>

        {/* Headline */}
        <h1 className="mt-10 max-w-5xl text-4xl font-light leading-[1.1] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.3)] md:text-6xl lg:text-7xl">
          Engineering the future of mobility
        </h1>

        {/* Short subtext */}
        <p className="mt-8 max-w-xl text-xl font-light leading-snug text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.3)] md:text-2xl">
          We help OEMs, suppliers and mobility providers modernize systems and
          turn data into a lasting competitive advantage.
        </p>

        {/* CTA: text + white circle arrow */}
        <a
          href="/contact"
          className="group mt-10 inline-flex items-center gap-4 text-base font-medium text-white"
        >
          Let&apos;s talk
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-1">
            <FaArrowRight size={16} />
          </span>
        </a>
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
          title="Powering Every Stage of the Automotive Value Chain"
          text="Automotive leaders are balancing three priorities at once: launching new electric and connected products, running leaner and more resilient operations, and building lasting digital relationships with customers."
        />
        <p className="-mt-6 mb-10 text-lg text-primary-600">
          We bring deep enterprise and engineering expertise to each stage of
          that journey, so your technology becomes a driver of growth instead of
          a constraint.
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
        <div className="relative">
          <img
            src={img2}
            alt="Smart automotive factory with robotic automation"
            loading="lazy"
            className="h-[200px] w-full rounded-md object-cover shadow-2xl md:h-[300px] lg:h-[320px]"
          />
        </div>
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
        text="The automotive industry faces unprecedented pressure in the digital era. Here is where we make the difference."
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
        title="Technology Built for Automotive Excellence"
        text="A comprehensive portfolio designed for the realities of modern vehicle development, manufacturing and mobility services."
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
          Transformation That Moves the Business Forward
        </h2>
        <p className="text-lg text-primary-200">
          Modernize your automotive operations with technology that supports
          your priorities today and scales with your ambitions tomorrow.
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
        title="A Proven Process, Consistent Results"
        text="A clear methodology that keeps programs on track from first workshop to continuous improvement."
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
            Let's Build What's Next
          </p>
          <h2 className="text-2xl font-bold text-white lg:text-3xl">
            Ready to Accelerate Your Automotive Innovation?
          </h2>
          <p className="mt-2 text-lg text-primary-200">
            Talk to our team about your next program. Free assessment, no
            commitment.
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
export default function AutomotivePage() {
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
