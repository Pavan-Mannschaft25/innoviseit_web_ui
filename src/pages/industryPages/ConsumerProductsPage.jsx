// import React, { useMemo } from "react";
// import { motion } from "framer-motion";
// import {
//   FaShoppingCart,
//   FaChartLine,
//   FaBullhorn,
//   FaProjectDiagram,
//   FaBoxes,
//   FaCheckCircle,
//   FaArrowRight,
//   FaRocket,
//   FaStar,
//   FaUsers,
//   FaStore,
//   FaTruck,
//   FaBrain,
//   FaHandshake,
//   FaLightbulb,
//   FaChartBar,
//   FaGlobe,
//   FaArrowDown,
// } from "react-icons/fa";
// import img1 from "../../assets/industry/cp1.png";
// import img2 from "../../assets/industry/cp2.png";

// // ============================================
// // NAVY & GOLD COLOR CONFIGURATION
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
// // DATA CONFIGURATION - CONSUMER PRODUCTS
// // ============================================

// const CHALLENGES_DATA = [
//   {
//     icon: FaChartLine,
//     title: "Unpredictable Consumer Demand",
//     description:
//       "Rapidly shifting preferences and market trends making forecasting extremely challenging",
//   },
//   {
//     icon: FaTruck,
//     title: "Complex Supply Chain Networks",
//     description:
//       "Managing multi-tier suppliers, global logistics, and inventory across channels",
//   },
//   {
//     icon: FaBullhorn,
//     title: "Inefficient Trade Promotions",
//     description:
//       "Low ROI on promotional spending due to poor targeting and measurement",
//   },
//   {
//     icon: FaStore,
//     title: "Omnichannel Integration Gaps",
//     description:
//       "Disconnected online, mobile, and in-store experiences frustrating customers",
//   },
//   {
//     icon: FaBrain,
//     title: "Limited Real-Time Insights",
//     description:
//       "Lack of actionable data preventing quick, informed business decisions",
//   },
//   {
//     icon: FaUsers,
//     title: "Evolving Customer Expectations",
//     description:
//       "Demand for personalization, speed, and seamless experiences across touchpoints",
//   },
// ];

// const SOLUTIONS_DATA = [
//   {
//     icon: FaBoxes,
//     title: "Demand-Driven Supply Chain",
//     description:
//       "AI-powered demand sensing and responsive supply network orchestration",
//   },
//   {
//     icon: FaBullhorn,
//     title: "Trade Promotion Optimization",
//     description: "Data-driven promotion planning, execution, and ROI analytics",
//   },
//   {
//     icon: FaShoppingCart,
//     title: "Omnichannel Commerce",
//     description:
//       "Unified commerce platform connecting all sales channels seamlessly",
//   },
//   {
//     icon: FaChartLine,
//     title: "Advanced Analytics & Forecasting",
//     description:
//       "Machine learning models for accurate demand prediction and insights",
//   },
//   {
//     icon: FaProjectDiagram,
//     title: "SAP Integration & Transformation",
//     description:
//       "Enterprise systems modernization for CPG and retail operations",
//   },
//   {
//     icon: FaGlobe,
//     title: "Customer Experience Platform",
//     description: "360-degree customer view enabling personalization at scale",
//   },
// ];

// const BENEFITS_DATA = [
//   "Improved demand forecasting and inventory planning",
//   "Optimized supply chain operations and efficiency",
//   "Enhanced trade promotion management and performance",
//   "Seamless omnichannel customer experiences",
//   "Real-time insights for faster decision-making",
//   "Scalable platforms that support business growth",
// ];

// const PROCESS_STEPS = [
//   {
//     step: "01",
//     title: "Consumer Intelligence",
//     description:
//       "Deep analysis of customer behavior, market trends, and competitive landscape",
//     icon: FaUsers,
//   },
//   {
//     step: "02",
//     title: "Strategy & Planning",
//     description:
//       "Design data-driven strategies aligned with business objectives",
//     icon: FaLightbulb,
//   },
//   {
//     step: "03",
//     title: "Agile Execution",
//     description:
//       "Implement solutions iteratively with continuous feedback loops",
//     icon: FaRocket,
//   },
//   {
//     step: "04",
//     title: "Optimize & Scale",
//     description: "Refine performance and expand successful initiatives",
//     icon: FaChartBar,
//   },
// ];

// // ============================================
// // SECTION COMPONENTS
// // ============================================

// const HeroSection = () => (
//   <section className="lg:h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-primary-800 text-white relative overflow-hidden">
//     {/* Animated Background Elements */}
//     <div className="absolute inset-0 overflow-hidden">
//       {/* Gold Gradient Orbs */}
//       <motion.div
//         animate={{
//           scale: [1, 1.3, 1],
//           opacity: [0.08, 0.15, 0.08],
//         }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-[#FFD700]/30 to-[#D4AF37]/10 rounded-full filter blur-3xl"
//       />
//       <motion.div
//         animate={{
//           scale: [1.3, 1, 1.3],
//           opacity: [0.08, 0.12, 0.08],
//         }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-[#D4AF37]/20 to-[#FFD700]/10 rounded-full filter blur-3xl"
//       />

//       {/* Dynamic Grid Pattern */}
//       <div
//         className="absolute inset-0 opacity-[0.04]"
//         style={{
//           backgroundImage: `linear-gradient(rgba(255,215,0,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,.4) 1px, transparent 1px)`,
//           backgroundSize: "40px 40px",
//         }}
//       ></div>

//       {/* Shopping/Consumer Pattern */}
//       <div
//         className="absolute inset-0 opacity-[0.02]"
//         style={{
//           backgroundImage: `radial-gradient(circle at 25% 25%, #FFD700 1px, transparent 1px), radial-gradient(circle at 75% 75%, #FFD700 1px, transparent 1px)`,
//           backgroundSize: "60px 60px",
//         }}
//       ></div>
//     </div>

//     <div className="max-w-2xl z-10 relative">
//       <motion.div
//         initial={{ opacity: 0, x: -60 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <GoldBadge className="mb-8">Powering Leading Consumer Brands</GoldBadge>

//         <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
//           Consumer{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFE55C] to-[#D4AF37]">
//             Products
//           </span>
//         </h1>

//         <p className="text-md md:text-xl text-gray-300 mb-2leading-relaxed max-w-xl">
//           Driving demand-driven supply chains, smarter promotions, and seamless
//           omnichannel experiences that delight consumers and grow brands.
//         </p>

//         {/* <div className="flex flex-col sm:flex-row gap-4 mb-12">
//           <Button size="lg">
//             Grow Your Brand <FaArrowRight />
//           </Button>
//           <Button variant="ghost" size="lg">
//             View Success Stories
//           </Button>
//         </div> */}

//         {/* Stats Grid */}
//         {/* <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//           className="grid grid-cols-3 gap-6 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-[#FFD700]/20"
//         >
//           {[
//             { value: "200+", label: "Brands Transformed" },
//             { value: "$5B+", label: "Revenue Impact" },
//             { value: "50M+", label: "Consumers Reached" },
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
//         {/* Main Image Container */}
//         <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#FFD700]/30">
//           <img
//             src={img1}
//             alt="Modern retail environment showcasing consumer products and shopping experience"
//             className="w-full h-[200px] md:h-[250px] lg:h-[400px] object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent"></div>

//           {/* Gold Overlay Effect */}
//           <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700]/5 to-transparent"></div>
//         </div>

//         {/* Floating Growth Badge */}
//         {/* <motion.div
//           animate={{ y: [-10, 10, -10] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-2xl border border-[#FFD700]/30 hidden lg:block"
//         >
//           <div className="flex items-center gap-3">
//             <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] rounded-xl flex items-center justify-center">
//               <FaChartLine className="text-2xl text-[#0a1628]" />
//             </div>
//             <div>
//               <div className="font-bold text-[#0a1628]">+40%</div>
//               <div className="text-sm text-gray-500">Avg. Growth</div>
//             </div>
//           </div>
//         </motion.div> */}

//         {/* Floating Customer Badge */}
//         {/* <motion.div
//           animate={{ y: [10, -10, 10] }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute -top-6 -right-6 bg-primary-800 rounded-2xl p-5 shadow-2xl text-white border border-[#FFD700]/50 hidden lg:block"
//         >
//           <div className="flex items-center gap-3">
//             <FaUsers className="text-3xl text-[#FFD700]" />
//             <div>
//               <div className="text-sm font-bold">Customer</div>
//               <div className="text-xs text-gray-300">Centric</div>
//             </div>
//           </div>
//         </motion.div> */}

//         {/* Decorative Corner Elements */}
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
//     <SectionTitle subtitle="Consumer products companies face unique challenges in today's dynamic marketplace">
//       Industry Challenges We Solve
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

//             {/* Gold bottom accent */}
//             {/* <div className="mt-6 pt-4 border-t border-gray-100">
//               <span className="text-[#D4AF37] text-sm font-semibold">
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
//       <SectionTitle subtitle="End-to-End solutions designed for consumer products excellence">
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
//     {/* Background Decoration */}
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
//               alt="Advanced consumer analytics dashboard showing data-driven insights and metrics"
//               className="w-full h-[200px] md:h-[450px] object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent"></div>
//           </div>
//           \{/* Corner Accents */}
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
//             Transform your consumer products business with measurable results
//             that drive growth.
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
//     {/* Dynamic Background Pattern */}
//     <div
//       className="absolute inset-0 opacity-[0.03]"
//       style={{
//         backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,215,0,.3) 2px, transparent 2px), radial-gradient(circle at 75% 75%, rgba(255,215,0,.3) 2px, transparent 2px)`,
//         backgroundSize: "50px 50px",
//       }}
//     ></div>

//     <div className="relative z-10">
//       <SectionTitle subtitle="A proven approach that puts consumers at the center of everything">
//         Our Proven Approach
//       </SectionTitle>

//       <div className="relative">
//         {/* Connection Line - Desktop */}
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
//               {/* Step Circle */}
//               <div className="relative inline-block mb-6">
//                 <div className="w-24 h-24 bg-white border-4 border-[#0a1628] rounded-full flex items-center justify-center shadow-xl relative z-10 group-hover:border-[#FFD700] group-hover:scale-110 transition-all duration-300 mx-auto">
//                   <step.icon className="text-3xl text-[#0a1628] group-hover:text-[#FFD700] transition-colors" />
//                 </div>

//                 {/* Step Number Badge */}
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

//               {/* Arrow Connector - Mobile/Tablet */}
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
//     {/* Rich Background */}
//     <div className="absolute inset-0 bg-primary-800"></div>

//     {/* Dynamic Pattern Overlay */}
//     <div
//       className="absolute inset-0 opacity-[0.05]"
//       style={{
//         backgroundImage: `radial-gradient(circle at 2px 2px, #FFD700 1px, transparent 0)`,
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
//       className="absolute top-10 left-10 w-72 h-72 bg-[#FFD700]/15 rounded-full filter blur-3xl"
//     />
//     <motion.div
//       animate={{
//         scale: [1.2, 1, 1.2],
//         x: [20, -20, 20],
//         y: [10, -10, 10],
//       }}
//       transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//       className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/12 rounded-full filter blur-3xl"
//     />

//     {/* Geometric Decorations */}
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
//           Ready to Transform Your Brand?
//         </GoldBadge>

//         <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
//           Transform Consumer Experiences with{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFE55C] to-[#D4AF37]">
//             Data-Driven Strategies
//           </span>
//         </h2>

//         <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
//           Join leading consumer brands who leverage our expertise to create
//           exceptional experiences, optimize operations, and accelerate growth.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
//           <Button size="lg" className="!px-12 !py-5 !text-lg">
//             Start Your Transformation <FaArrowRight />
//           </Button>
//           <Button variant="ghost" size="lg" className="!px-12 !py-5 !text-lg">
//             Download Consumer Insights Report
//           </Button>
//         </div>

//         {/* Trust Indicators */}
//         {/* <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 pt-8 border-t border-[#FFD700]/20">
//           <div className="flex items-center gap-2">
//             <FaHandshake className="text-[#FFD700]" />
//             Trusted by 200+ Brands
//           </div>
//           <div className="flex items-center gap-2">
//             <FaChartLine className="text-[#FFD700]" />
//             Proven ROI Results
//           </div>
//           <div className="flex items-center gap-2">
//             <FaUsers className="text-[#FFD700]" />
//             Consumer-Centric Approach
//           </div>
//           <div className="flex items-center gap-2">
//             <FaStar className="text-[#FFD700]" />
//             Expert Support Team
//           </div>
//         </div> */}
//       </motion.div>
//     </div>
//   </section>
// );

// // ============================================
// // MAIN COMPONENT
// // ============================================

// export default function ConsumerProductsPage() {
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
//         {/* {memoizedContent.cta} */}
//       </main>
//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaChartLine,
  FaBullhorn,
  FaProjectDiagram,
  FaBoxes,
  FaCheckCircle,
  FaArrowRight,
  FaRocket,
  FaStar,
  FaUsers,
  FaStore,
  FaTruck,
  FaBrain,
  FaHandshake,
  FaLightbulb,
  FaChartBar,
  FaGlobe,
  FaArrowDown,
  FaUserFriends,
  FaMobileAlt,
  FaTags,
  FaWarehouse,
  FaGift,
  FaClock,
  FaPercent,
  FaLayerGroup,
} from "react-icons/fa";
import cpImg1 from "../../assets/industry/cp1.png";
import cpImg2 from "../../assets/industry/cp2.png";
import reImg1 from "../../assets/industry/re1.png";
import reImg2 from "../../assets/industry/re2.png";

// ============================================
// SHARED UI COMPONENTS
// ============================================

const SectionWrapper = ({ children, className = "", id }) => (
  <section id={id} className={`px-6 lg:px-20 py-20 ${className}`}>
    {children}
  </section>
);

const SectionTitle = ({
  children,
  subtitle,
  centered = true,
  light = false,
}) => (
  <div className={`mb-12 ${centered ? "text-center" : ""}`}>
    <h2
      className={`text-3xl lg:text-4xl font-bold mb-4 ${light ? "text-white" : "text-[#0a1628]"}`}
    >
      {children}
    </h2>
    {subtitle && (
      <p
        className={`text-lg max-w-3xl mx-auto ${light ? "text-gray-300" : "text-gray-600"}`}
      >
        {subtitle}
      </p>
    )}
  </div>
);

const Card = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.03, y: -8 }}
    className="bg-white p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full"
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
    className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl text-center group cursor-pointer border border-gray-100 relative overflow-hidden h-full"
  >
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#FFD700] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
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
  const base =
    "inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const vars = {
    primary:
      "bg-gradient-to-r from-[#FFD700] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#B8962E] text-[#0a1628] shadow-lg hover:shadow-xl focus:ring-[#FFD700]",
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
      className={`${base} ${vars[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const GoldBadge = ({ children }) => (
  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-full text-[#FFD700] text-sm font-medium backdrop-blur-sm">
    <FaStar className="text-xs animate-pulse" />
    {children}
  </div>
);

// Industry group divider label used between card groups
const IndustryLabel = ({ icon: Icon, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-4 mb-10"
  >
    <div className="h-px flex-1 bg-gradient-to-r from-[#FFD700]/40 to-transparent" />
    <div className="flex items-center gap-2.5 px-6 py-2.5 bg-primary-800 rounded-full shadow-lg">
      <Icon className="text-[#FFD700] text-sm" />
      <span className="text-white font-semibold text-sm tracking-wide uppercase">
        {children}
      </span>
    </div>
    <div className="h-px flex-1 bg-gradient-to-l from-[#FFD700]/40 to-transparent" />
  </motion.div>
);

// ============================================
// DATA
// ============================================

const CP_CHALLENGES = [
  {
    icon: FaChartLine,
    title: "Unpredictable Consumer Demand",
    description:
      "Rapidly shifting preferences and market trends making forecasting extremely challenging",
  },
  {
    icon: FaTruck,
    title: "Complex Supply Chain Networks",
    description:
      "Managing multi-tier suppliers, global logistics, and inventory across channels",
  },
  {
    icon: FaBullhorn,
    title: "Inefficient Trade Promotions",
    description:
      "Low ROI on promotional spending due to poor targeting and measurement",
  },
  {
    icon: FaStore,
    title: "Omnichannel Integration Gaps",
    description:
      "Disconnected online, mobile, and in-store experiences frustrating customers",
  },
  {
    icon: FaBrain,
    title: "Limited Real-Time Insights",
    description:
      "Lack of actionable data preventing quick, informed business decisions",
  },
  {
    icon: FaUsers,
    title: "Evolving Customer Expectations",
    description:
      "Demand for personalization, speed, and seamless experiences across touchpoints",
  },
];

const RETAIL_CHALLENGES = [
  {
    icon: FaUserFriends,
    title: "Changing Customer Behavior",
    description:
      "Evolving shopping preferences demanding seamless online and in-store experiences",
  },
  {
    icon: FaMobileAlt,
    title: "Disconnected Sales Channels",
    description:
      "Siloed systems preventing unified customer journey across touchpoints",
  },
  {
    icon: FaWarehouse,
    title: "Inventory Visibility Issues",
    description:
      "Lack of real-time stock visibility leading to lost sales and overstock situations",
  },
  {
    icon: FaGift,
    title: "Weak Personalization Capabilities",
    description:
      "Inability to deliver relevant, individualized shopping experiences at scale",
  },
  {
    icon: FaPercent,
    title: "Margin Pressure & Competition",
    description:
      "Intense competition from digital natives and marketplaces squeezing profitability",
  },
  {
    icon: FaClock,
    title: "Slow Response to Trends",
    description:
      "Legacy systems unable to quickly adapt to fast-changing market dynamics",
  },
];

const CP_SOLUTIONS = [
  {
    icon: FaBoxes,
    title: "Demand-Driven Supply Chain",
    description:
      "AI-powered demand sensing and responsive supply network orchestration",
  },
  {
    icon: FaBullhorn,
    title: "Trade Promotion Optimization",
    description: "Data-driven promotion planning, execution, and ROI analytics",
  },
  {
    icon: FaShoppingCart,
    title: "Omnichannel Commerce",
    description:
      "Unified commerce platform connecting all sales channels seamlessly",
  },
  {
    icon: FaChartLine,
    title: "Advanced Analytics & Forecasting",
    description:
      "Machine learning models for accurate demand prediction and insights",
  },
  {
    icon: FaProjectDiagram,
    title: "SAP Integration & Transformation",
    description:
      "Enterprise systems modernization for CPG and retail operations",
  },
  {
    icon: FaGlobe,
    title: "Customer Experience Platform",
    description: "360-degree customer view enabling personalization at scale",
  },
];

const RETAIL_SOLUTIONS = [
  {
    icon: FaBoxes,
    title: "Merchandise Management",
    description:
      "AI-powered assortment planning, pricing optimization, and inventory intelligence",
  },
  {
    icon: FaShoppingCart,
    title: "Omnichannel Commerce",
    description:
      "Unified platform connecting stores, online, mobile, and social commerce",
  },
  {
    icon: FaUserFriends,
    title: "Customer Loyalty & CRM",
    description:
      "360-degree customer view enabling personalized engagement and retention",
  },
  {
    icon: FaChartLine,
    title: "Retail Analytics & AI",
    description:
      "Advanced analytics for demand sensing, customer insights, and predictive modeling",
  },
  {
    icon: FaStore,
    title: "Store Operations Excellence",
    description:
      "Workforce management, task execution, and in-store technology enablement",
  },
  {
    icon: FaTags,
    title: "Promotion & Pricing Engine",
    description:
      "Dynamic pricing, promotional planning, and markdown optimization",
  },
];

const CP_BENEFITS = [
  "Improved demand forecasting and inventory planning",
  "Optimized supply chain operations and efficiency",
  "Enhanced trade promotion management and performance",
  "Seamless omnichannel customer experiences",
  "Real-time insights for faster decision-making",
  "Scalable platforms that support business growth",
];

const RETAIL_BENEFITS = [
  "End-to-end inventory visibility and control",
  "Connected experiences across digital and physical channels",
  "Stronger customer retention and lifetime value",
  "Data-driven demand planning and forecasting",
  "Optimized operations with intelligent automation",
  "Agile platforms that accelerate business growth and innovation",
];

const CP_PROCESS = [
  {
    step: "01",
    title: "Consumer Intelligence",
    description:
      "Deep analysis of customer behavior, market trends, and competitive landscape",
    icon: FaUsers,
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description:
      "Design data-driven strategies aligned with business objectives",
    icon: FaLightbulb,
  },
  {
    step: "03",
    title: "Agile Execution",
    description:
      "Implement solutions iteratively with continuous feedback loops",
    icon: FaRocket,
  },
  {
    step: "04",
    title: "Optimize & Scale",
    description: "Refine performance and expand successful initiatives",
    icon: FaChartBar,
  },
];

const RETAIL_PROCESS = [
  {
    step: "01",
    title: "Retail Discovery",
    description:
      "Deep analysis of customer journeys, operations, and technology landscape",
    icon: FaLightbulb,
  },
  {
    step: "02",
    title: "Experience Design",
    description:
      "Design seamless omnichannel experiences aligned with brand strategy",
    icon: FaLayerGroup,
  },
  {
    step: "03",
    title: "Agile Implementation",
    description:
      "Deploy solutions iteratively with minimal disruption to operations",
    icon: FaRocket,
  },
  {
    step: "04",
    title: "Continuous Innovation",
    description: "Optimize performance and continuously enhance capabilities",
    icon: FaChartBar,
  },
];

// ============================================
// HERO SECTION
// ============================================

const HeroSection = () => (
  <section className="lg:min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-primary-800 text-white relative overflow-hidden">
    {/* Animated Background */}
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
      />
    </div>

    {/* Left Content */}
    <motion.div
      className="max-w-2xl z-10 relative"
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <GoldBadge className="mb-8">
        Powering Consumer Brands & Retailers
      </GoldBadge>

      <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
        Consumer Products &{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFE55C] to-[#D4AF37]">
          Retail
        </span>
      </h1>

      <p className="text-md md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
        Driving demand-driven supply chains, smarter promotions, seamless
        omnichannel experiences, and data-driven strategies that delight
        consumers and grow brands.
      </p>
    </motion.div>

    {/* Right - Dual Image Composition */}
    <motion.div
      className="w-full lg:w-1/2 mt-12 lg:mt-0 z-10 relative"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="relative h-[350px] md:h-[450px]">
        {/* Back Card - Retail */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute top-0 left-0 w-[82%] rounded-2xl overflow-hidden shadow-xl border-2 border-[#FFD700]/20 z-10"
        >
          <img
            src={reImg1}
            alt="Modern retail store showcasing omnichannel shopping"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-primary-800/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <FaStore className="text-[#FFD700] text-xs" />
            <span className="text-white text-xs font-medium">Retail</span>
          </div>
        </motion.div>

        {/* Front Card - Consumer Products */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-0 right-0 w-[82%] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FFD700]/30 z-20"
        >
          <img
            src={cpImg1}
            alt="Consumer products in modern retail environment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-primary-800/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <FaBoxes className="text-[#FFD700] text-xs" />
            <span className="text-white text-xs font-medium">
              Consumer Products
            </span>
          </div>
        </motion.div>

        {/* Decorative corners */}
        <div className="absolute -top-3 -left-3 w-16 h-16 border-t-4 border-l-4 border-[#FFD700]/50 rounded-tl-3xl z-30" />
        <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-4 border-r-4 border-[#FFD700]/50 rounded-br-3xl z-30" />
      </div>
    </motion.div>
  </section>
);

// ============================================
// CHALLENGES SECTION
// ============================================

const ChallengesSection = () => (
  <SectionWrapper
    className="bg-gradient-to-b from-gray-50 to-white"
    id="challenges"
  >
    <SectionTitle subtitle="Both consumer products companies and retailers face unique challenges in today's dynamic, digitally-driven marketplace">
      Industry Challenges We Solve
    </SectionTitle>

    {/* Consumer Products */}
    <IndustryLabel icon={FaBoxes}>Consumer Products</IndustryLabel>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {CP_CHALLENGES.map((item, i) => (
        <Card key={i} delay={i * 0.08}>
          <div className="flex flex-col h-full">
            <div className="w-14 h-14 bg-primary-800 rounded-xl flex items-center justify-center mb-5 shadow-lg">
              <item.icon className="text-2xl text-[#FFD700]" />
            </div>
            <h3 className="font-bold text-lg mb-3 text-[#0a1628]">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
              {item.description}
            </p>
          </div>
        </Card>
      ))}
    </div>

    {/* Retail */}
    <IndustryLabel icon={FaStore}>Retail</IndustryLabel>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {RETAIL_CHALLENGES.map((item, i) => (
        <Card key={i} delay={i * 0.08}>
          <div className="flex flex-col h-full">
            <div className="w-14 h-14 bg-primary-800 rounded-xl flex items-center justify-center mb-5 shadow-lg">
              <item.icon className="text-2xl text-[#FFD700]" />
            </div>
            <h3 className="font-bold text-lg mb-3 text-[#0a1628]">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
              {item.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  </SectionWrapper>
);

// ============================================
// SOLUTIONS SECTION
// ============================================

const SolutionsSection = () => (
  <SectionWrapper className="bg-white relative" id="solutions">
    <div
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #0a1628 1px, transparent 0)`,
        backgroundSize: "30px 30px",
      }}
    />
    <div className="relative z-10">
      <SectionTitle subtitle="End-to-end specialized solutions for both consumer products excellence and retail transformation">
        Our Specialized Solutions
      </SectionTitle>

      {/* Consumer Products */}
      <IndustryLabel icon={FaBoxes}>Consumer Products</IndustryLabel>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {CP_SOLUTIONS.map((item, i) => (
          <IconCard
            key={i}
            icon={item.icon}
            title={item.title}
            description={item.description}
            delay={i * 0.08}
          />
        ))}
      </div>

      {/* Retail */}
      <IndustryLabel icon={FaStore}>Retail</IndustryLabel>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {RETAIL_SOLUTIONS.map((item, i) => (
          <IconCard
            key={i}
            icon={item.icon}
            title={item.title}
            description={item.description}
            delay={i * 0.08}
          />
        ))}
      </div>
    </div>
  </SectionWrapper>
);

// ============================================
// BENEFITS SECTION
// ============================================

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

    <div className="relative z-10">
      <SectionTitle
        light
        subtitle="Measurable results that drive growth for both consumer products and retail businesses"
      >
        Key Benefits
      </SectionTitle>

      {/* Two Images Side by Side */}
      <div className="grid md:grid-cols-2 gap-6 mb-14">
        {[
          {
            src: cpImg2,
            alt: "Consumer analytics dashboard",
            label: "Consumer Products",
          },
          { src: reImg2, alt: "Retail analytics dashboard", label: "Retail" },
        ].map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FFD700]/30">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[200px] md:h-[280px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
            </div>
            <div className="absolute top-3 left-3 flex items-center gap-2 bg-primary-800/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#FFD700]/30">
              <FaCheckCircle className="text-[#FFD700] text-xs" />
              <span className="text-white text-xs font-medium">
                {img.label}
              </span>
            </div>
            {i === 0 && (
              <div className="absolute -top-2 -left-2 w-12 h-12 border-t-3 border-l-3 border-[#FFD700] rounded-tl-xl" />
            )}
            {i === 1 && (
              <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-3 border-r-3 border-[#FFD700] rounded-br-xl" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Two Columns of Benefits */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        {/* CP Benefits */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] rounded-xl flex items-center justify-center shadow-lg">
              <FaBoxes className="text-[#0a1628] text-lg" />
            </div>
            <h3 className="text-xl font-bold text-white">Consumer Products</h3>
          </div>
          <div className="space-y-4">
            {CP_BENEFITS.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.2 }}
                className="flex items-start gap-3 group"
              >
                <div className="w-6 h-6 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 shadow group-hover:scale-110 transition-transform">
                  <FaCheckCircle className="text-[#0a1628] text-xs" />
                </div>
                <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors leading-relaxed">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Retail Benefits */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] rounded-xl flex items-center justify-center shadow-lg">
              <FaStore className="text-[#0a1628] text-lg" />
            </div>
            <h3 className="text-xl font-bold text-white">Retail</h3>
          </div>
          <div className="space-y-4">
            {RETAIL_BENEFITS.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.2 }}
                className="flex items-start gap-3 group"
              >
                <div className="w-6 h-6 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 shadow group-hover:scale-110 transition-transform">
                  <FaCheckCircle className="text-[#0a1628] text-xs" />
                </div>
                <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors leading-relaxed">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

// ============================================
// PROCESS SECTION
// ============================================

const ProcessRow = ({ steps, label, icon: LabelIcon, startDelay = 0 }) => (
  <div className="mb-12 last:mb-0">
    <IndustryLabel icon={LabelIcon}>{label}</IndustryLabel>
    <div className="relative">
      <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-[#0a1628] via-[#FFD700] to-[#0a1628] rounded-full shadow-lg" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: startDelay + i * 0.12 }}
            className="relative text-center group"
          >
            <div className="relative inline-block mb-6">
              <div className="w-20 h-20 bg-white border-4 border-[#0a1628] rounded-full flex items-center justify-center shadow-xl relative z-10 group-hover:border-[#FFD700] group-hover:scale-110 transition-all duration-300 mx-auto">
                <step.icon className="text-2xl text-[#0a1628] group-hover:text-[#FFD700] transition-colors" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] rounded-full flex items-center justify-center text-[#0a1628] text-xs font-bold shadow-lg border-2 border-white">
                {step.step}
              </div>
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#0a1628] group-hover:text-[#D4AF37] transition-colors">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-[240px] mx-auto">
              {step.description}
            </p>
            {i < steps.length - 1 && (
              <div className="lg:hidden flex justify-center my-4">
                <div className="w-9 h-9 bg-[#FFD700]/20 rounded-full flex items-center justify-center">
                  <FaArrowDown className="text-[#D4AF37] text-sm" />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const ProcessSection = () => (
  <SectionWrapper className="bg-gray-50 relative" id="process">
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,215,0,.3) 2px, transparent 2px), radial-gradient(circle at 75% 75%, rgba(255,215,0,.3) 2px, transparent 2px)`,
        backgroundSize: "50px 50px",
      }}
    />
    <div className="relative z-10">
      <SectionTitle subtitle="Our proven approach, tailored for each industry's unique needs">
        Our Proven Approach
      </SectionTitle>
      <ProcessRow
        steps={CP_PROCESS}
        label="Consumer Products"
        icon={FaBoxes}
        startDelay={0}
      />
      <ProcessRow
        steps={RETAIL_PROCESS}
        label="Retail"
        icon={FaStore}
        startDelay={0.15}
      />
    </div>
  </SectionWrapper>
);

// ============================================
// CTA SECTION
// ============================================

const CTASection = () => (
  <section className="relative px-6 lg:px-20 py-28 overflow-hidden">
    <div className="absolute inset-0 bg-primary-800" />
    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #FFD700 1px, transparent 0)`,
        backgroundSize: "35px 35px",
      }}
    />
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
          Ready to Transform Your Business?
        </GoldBadge>

        <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Accelerate Growth with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFE55C] to-[#D4AF37]">
            Proven Strategies
          </span>
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join 500+ consumer brands and retailers who leverage our expertise to
          create exceptional experiences, optimize operations, and accelerate
          growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
          <Button size="lg" className="!px-12 !py-5 !text-lg">
            Start Your Transformation <FaArrowRight />
          </Button>
          <Button variant="ghost" size="lg" className="!px-12 !py-5 !text-lg">
            Download Industry Playbook
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 pt-8 border-t border-[#FFD700]/20">
          {[
            { icon: FaHandshake, text: "Trusted by 500+ Brands" },
            { icon: FaChartLine, text: "Proven ROI Results" },
            { icon: FaUsers, text: "Customer-Centric Approach" },
            { icon: FaStar, text: "Expert Support Team" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon className="text-[#FFD700]" />
              {item.text}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// ============================================
// MAIN COMPONENT
// ============================================

export default function ConsumerProductsRetailPage() {
  return (
    <div className="w-full font-sans antialiased text-gray-800 overflow-x-hidden bg-gray-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#FFD700] text-[#0a1628] px-4 py-2 rounded-lg z-[100] focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
      >
        Skip to main content
      </a>

      <main id="main-content" role="main">
        <HeroSection />
        <ChallengesSection />
        <SolutionsSection />
        <BenefitsSection />
        <ProcessSection />
        {/* <CTASection /> */}
      </main>
    </div>
  );
}
