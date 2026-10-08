// import React from "react";
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
//   FaUserFriends,
//   FaMobileAlt,
//   FaTags,
//   FaWarehouse,
//   FaGift,
//   FaClock,
//   FaPercent,
//   FaLayerGroup,
// } from "react-icons/fa";
// import cpImg1 from "../../assets/industry/cam1.png";
// import cpImg2 from "../../assets/industry/cp2.png";
// import reImg1 from "../../assets/industry/re2.png";
// import reImg2 from "../../assets/industry/re2.png";

// // ============================================
// // SHARED UI COMPONENTS
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
//   <div className={`mb-12 ${centered ? "text-center" : ""}`}>
//     <h2
//       className={`text-3xl lg:text-4xl font-bold mb-4 ${light ? "text-white" : "text-[#0a1628]"}`}
//     >
//       {children}
//     </h2>
//     {subtitle && (
//       <p
//         className={`text-lg max-w-3xl mx-auto ${light ? "text-gray-300" : "text-gray-600"}`}
//       >
//         {subtitle}
//       </p>
//     )}
//   </div>
// );

// const Card = ({ children, delay = 0 }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.5, delay }}
//     whileHover={{ scale: 1.03, y: -8 }}
//     className="bg-white p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full"
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
//     className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl text-center group cursor-pointer border border-gray-100 relative overflow-hidden h-full"
//   >
//     <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFF] via-[#FFF] to-[#FFF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
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
//   const base =
//     "inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
//   const vars = {
//     primary:
//       "bg-gradient-to-r from-[#FFF] to-[#FFF] hover:from-[#FFF] hover:to-[#B8962E] text-[#0a1628] shadow-lg hover:shadow-xl focus:ring-[#FFF]",
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
//       className={`${base} ${vars[variant]} ${sizes[size]} ${className}`}
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

// // Industry group divider label used between card groups
// const IndustryLabel = ({ icon: Icon, children }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 15 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     className="flex items-center gap-4 mb-10"
//   >
//     <div className="h-px flex-1 bg-gradient-to-r from-[#FFF]/40 to-transparent" />
//     <div className="flex items-center gap-2.5 px-6 py-2.5 bg-primary-800 rounded-full shadow-lg">
//       <Icon className="text-[#FFF] text-sm" />
//       <span className="text-white font-semibold text-sm tracking-wide uppercase">
//         {children}
//       </span>
//     </div>
//     <div className="h-px flex-1 bg-gradient-to-l from-[#FFF]/40 to-transparent" />
//   </motion.div>
// );

// // ============================================
// // DATA
// // ============================================

// const CP_CHALLENGES = [
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

// const RETAIL_CHALLENGES = [
//   {
//     icon: FaUserFriends,
//     title: "Changing Customer Behavior",
//     description:
//       "Evolving shopping preferences demanding seamless online and in-store experiences",
//   },
//   {
//     icon: FaMobileAlt,
//     title: "Disconnected Sales Channels",
//     description:
//       "Siloed systems preventing unified customer journey across touchpoints",
//   },
//   {
//     icon: FaWarehouse,
//     title: "Inventory Visibility Issues",
//     description:
//       "Lack of real-time stock visibility leading to lost sales and overstock situations",
//   },
//   {
//     icon: FaGift,
//     title: "Weak Personalization Capabilities",
//     description:
//       "Inability to deliver relevant, individualized shopping experiences at scale",
//   },
//   {
//     icon: FaPercent,
//     title: "Margin Pressure & Competition",
//     description:
//       "Intense competition from digital natives and marketplaces squeezing profitability",
//   },
//   {
//     icon: FaClock,
//     title: "Slow Response to Trends",
//     description:
//       "Legacy systems unable to quickly adapt to fast-changing market dynamics",
//   },
// ];

// const CP_SOLUTIONS = [
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

// const RETAIL_SOLUTIONS = [
//   {
//     icon: FaBoxes,
//     title: "Merchandise Management",
//     description:
//       "AI-powered assortment planning, pricing optimization, and inventory intelligence",
//   },
//   {
//     icon: FaShoppingCart,
//     title: "Omnichannel Commerce",
//     description:
//       "Unified platform connecting stores, online, mobile, and social commerce",
//   },
//   {
//     icon: FaUserFriends,
//     title: "Customer Loyalty & CRM",
//     description:
//       "360-degree customer view enabling personalized engagement and retention",
//   },
//   {
//     icon: FaChartLine,
//     title: "Retail Analytics & AI",
//     description:
//       "Advanced analytics for demand sensing, customer insights, and predictive modeling",
//   },
//   {
//     icon: FaStore,
//     title: "Store Operations Excellence",
//     description:
//       "Workforce management, task execution, and in-store technology enablement",
//   },
//   {
//     icon: FaTags,
//     title: "Promotion & Pricing Engine",
//     description:
//       "Dynamic pricing, promotional planning, and markdown optimization",
//   },
// ];

// const CP_BENEFITS = [
//   "Improved demand forecasting and inventory planning",
//   "Optimized supply chain operations and efficiency",
//   "Enhanced trade promotion management and performance",
//   "Seamless omnichannel customer experiences",
//   "Real-time insights for faster decision-making",
//   "Scalable platforms that support business growth",
// ];

// const RETAIL_BENEFITS = [
//   "End-to-end inventory visibility and control",
//   "Connected experiences across digital and physical channels",
//   "Stronger customer retention and lifetime value",
//   "Data-driven demand planning and forecasting",
//   "Optimized operations with intelligent automation",
//   "Agile platforms that accelerate business growth and innovation",
// ];

// const CP_PROCESS = [
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

// const RETAIL_PROCESS = [
//   {
//     step: "01",
//     title: "Retail Discovery",
//     description:
//       "Deep analysis of customer journeys, operations, and technology landscape",
//     icon: FaLightbulb,
//   },
//   {
//     step: "02",
//     title: "Experience Design",
//     description:
//       "Design seamless omnichannel experiences aligned with brand strategy",
//     icon: FaLayerGroup,
//   },
//   {
//     step: "03",
//     title: "Agile Implementation",
//     description:
//       "Deploy solutions iteratively with minimal disruption to operations",
//     icon: FaRocket,
//   },
//   {
//     step: "04",
//     title: "Continuous Innovation",
//     description: "Optimize performance and continuously enhance capabilities",
//     icon: FaChartBar,
//   },
// ];

// // ============================================
// // HERO SECTION
// // ============================================

// const HeroSection = () => (
//   <section className="lg:min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-primary-800 text-white relative overflow-hidden">
//     {/* Animated Background */}
//     <div className="absolute inset-0 overflow-hidden">
//       <motion.div
//         animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-[#FFF]/30 to-[#FFF]/10 rounded-full filter blur-3xl"
//       />
//       <motion.div
//         animate={{ scale: [1.3, 1, 1.3], opacity: [0.08, 0.12, 0.08] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-[#FFF]/20 to-[#FFF]/10 rounded-full filter blur-3xl"
//       />
//       <div
//         className="absolute inset-0 opacity-[0.04]"
//         style={{
//           backgroundImage: `linear-gradient(rgba(255,215,0,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,.4) 1px, transparent 1px)`,
//           backgroundSize: "40px 40px",
//         }}
//       />
//     </div>

//     {/* Left Content */}
//     <motion.div
//       className="max-w-2xl z-10 relative"
//       initial={{ opacity: 0, x: -60 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
//       <GoldBadge className="mb-8">
//         Powering Consumer Brands & Retailers
//       </GoldBadge>

//       <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
//         Consumer Products &{" "}
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF] via-[#FFF] to-[#FFF]">
//           Retail
//         </span>
//       </h1>

//       <p className="text-md md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
//         Driving demand-driven supply chains, smarter promotions, seamless
//         omnichannel experiences, and data-driven strategies that delight
//         consumers and grow brands.
//       </p>
//     </motion.div>

//     {/* Right - Dual Image Composition */}
//     <motion.div
//       className="w-full lg:w-1/2 mt-12 lg:mt-0 z-10 relative"
//       initial={{ opacity: 0, x: 60 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8, delay: 0.3 }}
//     >
//       <div className="relative h-[350px] md:h-[450px]">
//         {/* Back Card - Retail */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//           className="absolute top-0 left-0 w-[82%] rounded-2xl overflow-hidden shadow-xl border-2 border-[#FFF]/20 z-10"
//         >
//           <img
//             src={reImg1}
//             alt="Modern retail store showcasing omnichannel shopping"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
//           <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-primary-800/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
//             <FaStore className="text-[#FFF] text-xs" />
//             <span className="text-white text-xs font-medium">Retail</span>
//           </div>
//         </motion.div>

//         {/* Front Card - Consumer Products */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//           className="absolute bottom-0 right-0 w-[82%] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FFF]/30 z-20"
//         >
//           <img
//             src={cpImg1}
//             alt="Consumer products in modern retail environment"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
//           <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-primary-800/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
//             <FaBoxes className="text-[#FFF] text-xs" />
//             <span className="text-white text-xs font-medium">
//               Consumer Products
//             </span>
//           </div>
//         </motion.div>

//         {/* Decorative corners */}
//         <div className="absolute -top-3 -left-3 w-16 h-16 border-t-4 border-l-4 border-[#FFF]/50 rounded-tl-3xl z-30" />
//         <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-4 border-r-4 border-[#FFF]/50 rounded-br-3xl z-30" />
//       </div>
//     </motion.div>
//   </section>
// );

// // ============================================
// // CHALLENGES SECTION
// // ============================================

// const ChallengesSection = () => (
//   <SectionWrapper
//     className="bg-gradient-to-b from-gray-50 to-white"
//     id="challenges"
//   >
//     <SectionTitle subtitle="Both consumer products companies and retailers face unique challenges in today's dynamic, digitally-driven marketplace">
//       Industry Challenges We Solve
//     </SectionTitle>

//     {/* Consumer Products */}
//     <IndustryLabel icon={FaBoxes}>Consumer Products</IndustryLabel>
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//       {CP_CHALLENGES.map((item, i) => (
//         <Card key={i} delay={i * 0.08}>
//           <div className="flex flex-col h-full">
//             <div className="w-14 h-14 bg-primary-800 rounded-xl flex items-center justify-center mb-5 shadow-lg">
//               <item.icon className="text-2xl text-[#FFF]" />
//             </div>
//             <h3 className="font-bold text-lg mb-3 text-[#0a1628]">
//               {item.title}
//             </h3>
//             <p className="text-gray-600 text-sm leading-relaxed flex-grow">
//               {item.description}
//             </p>
//           </div>
//         </Card>
//       ))}
//     </div>

//     {/* Retail */}
//     <IndustryLabel icon={FaStore}>Retail</IndustryLabel>
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {RETAIL_CHALLENGES.map((item, i) => (
//         <Card key={i} delay={i * 0.08}>
//           <div className="flex flex-col h-full">
//             <div className="w-14 h-14 bg-primary-800 rounded-xl flex items-center justify-center mb-5 shadow-lg">
//               <item.icon className="text-2xl text-[#FFF]" />
//             </div>
//             <h3 className="font-bold text-lg mb-3 text-[#0a1628]">
//               {item.title}
//             </h3>
//             <p className="text-gray-600 text-sm leading-relaxed flex-grow">
//               {item.description}
//             </p>
//           </div>
//         </Card>
//       ))}
//     </div>
//   </SectionWrapper>
// );

// // ============================================
// // SOLUTIONS SECTION
// // ============================================

// const SolutionsSection = () => (
//   <SectionWrapper className="bg-white relative" id="solutions">
//     <div
//       className="absolute inset-0 opacity-[0.02]"
//       style={{
//         backgroundImage: `radial-gradient(circle at 2px 2px, #0a1628 1px, transparent 0)`,
//         backgroundSize: "30px 30px",
//       }}
//     />
//     <div className="relative z-10">
//       <SectionTitle subtitle="End-to-end specialized solutions for both consumer products excellence and retail transformation">
//         Our Specialized Solutions
//       </SectionTitle>

//       {/* Consumer Products */}
//       <IndustryLabel icon={FaBoxes}>Consumer Products</IndustryLabel>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//         {CP_SOLUTIONS.map((item, i) => (
//           <IconCard
//             key={i}
//             icon={item.icon}
//             title={item.title}
//             description={item.description}
//             delay={i * 0.08}
//           />
//         ))}
//       </div>

//       {/* Retail */}
//       <IndustryLabel icon={FaStore}>Retail</IndustryLabel>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {RETAIL_SOLUTIONS.map((item, i) => (
//           <IconCard
//             key={i}
//             icon={item.icon}
//             title={item.title}
//             description={item.description}
//             delay={i * 0.08}
//           />
//         ))}
//       </div>
//     </div>
//   </SectionWrapper>
// );

// // ============================================
// // BENEFITS SECTION
// // ============================================

// const BenefitsSection = () => (
//   <SectionWrapper
//     className="bg-primary-800 text-white relative overflow-hidden"
//     id="benefits"
//   >
//     <div className="absolute inset-0">
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//         className="absolute -top-1/2 -right-1/4 w-full h-full bg-gradient-to-br from-[#FFF]/5 to-transparent rounded-full"
//       />
//     </div>

//     <div className="relative z-10">
//       <SectionTitle
//         light
//         subtitle="Measurable results that drive growth for both consumer products and retail businesses"
//       >
//         Key Benefits
//       </SectionTitle>

//       {/* Two Images Side by Side */}
//       <div className="grid md:grid-cols-2 gap-6 mb-14">
//         {[
//           {
//             src: cpImg2,
//             alt: "Consumer analytics dashboard",
//             label: "Consumer Products",
//           },
//           { src: reImg2, alt: "Retail analytics dashboard", label: "Retail" },
//         ].map((img, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: i * 0.15 }}
//             className="relative"
//           >
//             <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FFF]/30">
//               <img
//                 src={img.src}
//                 alt={img.alt}
//                 className="w-full h-[200px] md:h-[280px] object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
//             </div>
//             <div className="absolute top-3 left-3 flex items-center gap-2 bg-primary-800/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#FFF]/30">
//               <FaCheckCircle className="text-[#FFF] text-xs" />
//               <span className="text-white text-xs font-medium">
//                 {img.label}
//               </span>
//             </div>
//             {i === 0 && (
//               <div className="absolute -top-2 -left-2 w-12 h-12 border-t-3 border-l-3 border-[#FFF] rounded-tl-xl" />
//             )}
//             {i === 1 && (
//               <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-3 border-r-3 border-[#FFF] rounded-br-xl" />
//             )}
//           </motion.div>
//         ))}
//       </div>

//       {/* Two Columns of Benefits */}
//       <div className="grid md:grid-cols-2 gap-10 md:gap-16">
//         {/* CP Benefits */}
//         <div>
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-10 h-10 bg-gradient-to-br from-[#FFF] to-[#FFF] rounded-xl flex items-center justify-center shadow-lg">
//               <FaBoxes className="text-[#0a1628] text-lg" />
//             </div>
//             <h3 className="text-xl font-bold text-white">Consumer Products</h3>
//           </div>
//           <div className="space-y-4">
//             {CP_BENEFITS.map((benefit, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.08 + 0.2 }}
//                 className="flex items-start gap-3 group"
//               >
//                 <div className="w-6 h-6 bg-gradient-to-br from-[#FFF] to-[#FFF] rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 shadow group-hover:scale-110 transition-transform">
//                   <FaCheckCircle className="text-[#0a1628] text-xs" />
//                 </div>
//                 <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors leading-relaxed">
//                   {benefit}
//                 </span>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Retail Benefits */}
//         <div>
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-10 h-10 bg-gradient-to-br from-[#FFF] to-[#FFF] rounded-xl flex items-center justify-center shadow-lg">
//               <FaStore className="text-[#0a1628] text-lg" />
//             </div>
//             <h3 className="text-xl font-bold text-white">Retail</h3>
//           </div>
//           <div className="space-y-4">
//             {RETAIL_BENEFITS.map((benefit, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.08 + 0.2 }}
//                 className="flex items-start gap-3 group"
//               >
//                 <div className="w-6 h-6 bg-gradient-to-br from-[#FFF] to-[#FFF] rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 shadow group-hover:scale-110 transition-transform">
//                   <FaCheckCircle className="text-[#0a1628] text-xs" />
//                 </div>
//                 <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors leading-relaxed">
//                   {benefit}
//                 </span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   </SectionWrapper>
// );

// // ============================================
// // PROCESS SECTION
// // ============================================

// const ProcessRow = ({ steps, label, icon: LabelIcon, startDelay = 0 }) => (
//   <div className="mb-12 last:mb-0">
//     <IndustryLabel icon={LabelIcon}>{label}</IndustryLabel>
//     <div className="relative">
//       <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-[#0a1628] via-[#FFF] to-[#0a1628] rounded-full shadow-lg" />
//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
//         {steps.map((step, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: startDelay + i * 0.12 }}
//             className="relative text-center group"
//           >
//             <div className="relative inline-block mb-6">
//               <div className="w-24 h-24 bg-white border-4 border-[#0a1628] rounded-full flex items-center justify-center shadow-xl relative z-10 group-hover:border-[#FFF] group-hover:scale-110 transition-all duration-300 mx-auto">
//                 <step.icon className="text-3xl text-[#0a1628] group-hover:text-[#0a1628] transition-colors" />
//               </div>
//               <div className="absolute -top-2 -right-2 w-9 h-9 bg-[#0a1628] rounded-full flex items-center justify-center text-[#FFF] text-sm font-bold shadow-lg border-2 border-white">
//                 {step.step}
//               </div>
//             </div>
//             <h3 className="font-bold text-lg mb-2 text-[#0a1628]  transition-colors">
//               {step.title}
//             </h3>
//             <p className="text-gray-600 text-sm leading-relaxed max-w-[240px] mx-auto">
//               {step.description}
//             </p>
//             {i < steps.length - 1 && (
//               <div className="lg:hidden flex justify-center my-4">
//                 <div className="w-9 h-9 bg-[#FFF]/20 rounded-full flex items-center justify-center">
//                   <FaArrowDown className="text-[#FFF] text-sm" />
//                 </div>
//               </div>
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </div>
// );

// const ProcessSection = () => (
//   <SectionWrapper className="bg-gray-50 relative" id="process">
//     <div
//       className="absolute inset-0 opacity-[0.03]"
//       style={{
//         backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,215,0,.3) 2px, transparent 2px), radial-gradient(circle at 75% 75%, rgba(255,215,0,.3) 2px, transparent 2px)`,
//         backgroundSize: "50px 50px",
//       }}
//     />
//     <div className="relative z-10">
//       <SectionTitle subtitle="Our proven approach, tailored for each industry's unique needs">
//         Our Proven Approach
//       </SectionTitle>
//       <ProcessRow
//         steps={CP_PROCESS}
//         label="Consumer Products"
//         icon={FaBoxes}
//         startDelay={0}
//       />
//       <ProcessRow
//         steps={RETAIL_PROCESS}
//         label="Retail"
//         icon={FaStore}
//         startDelay={0.15}
//       />
//     </div>
//   </SectionWrapper>
// );

// // ============================================
// // CTA SECTION
// // ============================================

// const CTASection = () => (
//   <section className="relative px-6 lg:px-20 py-28 overflow-hidden">
//     <div className="absolute inset-0 bg-primary-800" />
//     <div
//       className="absolute inset-0 opacity-[0.05]"
//       style={{
//         backgroundImage: `radial-gradient(circle at 2px 2px, #FFF 1px, transparent 0)`,
//         backgroundSize: "35px 35px",
//       }}
//     />
//     <motion.div
//       animate={{ scale: [1, 1.2, 1], x: [-20, 20, -20], y: [-10, 10, -10] }}
//       transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       className="absolute top-10 left-10 w-72 h-72 bg-[#FFF]/15 rounded-full filter blur-3xl"
//     />
//     <motion.div
//       animate={{ scale: [1.2, 1, 1.2], x: [20, -20, 20], y: [10, -10, 10] }}
//       transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//       className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFF]/12 rounded-full filter blur-3xl"
//     />
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

//     <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//       >
//         <GoldBadge className="mx-auto mb-8 justify-center">
//           Ready to Transform Your Business?
//         </GoldBadge>

//         <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
//           Accelerate Growth with{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF] via-[#FFF] to-[#FFF]">
//             Proven Strategies
//           </span>
//         </h2>

//         <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
//           Join 500+ consumer brands and retailers who leverage our expertise to
//           create exceptional experiences, optimize operations, and accelerate
//           growth.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
//           <Button size="lg" className="!px-12 !py-5 !text-lg">
//             Start Your Transformation <FaArrowRight />
//           </Button>
//           <Button variant="ghost" size="lg" className="!px-12 !py-5 !text-lg">
//             Download Industry Playbook
//           </Button>
//         </div>

//         <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 pt-8 border-t border-[#FFF]/20">
//           {[
//             { icon: FaHandshake, text: "Trusted by 500+ Brands" },
//             { icon: FaChartLine, text: "Proven ROI Results" },
//             { icon: FaUsers, text: "Customer-Centric Approach" },
//             { icon: FaStar, text: "Expert Support Team" },
//           ].map((item, i) => (
//             <div key={i} className="flex items-center gap-2">
//               <item.icon className="text-[#FFF]" />
//               {item.text}
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   </section>
// );

// // ============================================
// // MAIN COMPONENT
// // ============================================

// export default function ConsumerProductsRetailPage() {
//   return (
//     <div className="w-full font-sans antialiased text-gray-800 overflow-x-hidden bg-gray-50">
//       <a
//         href="#main-content"
//         className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#FFF] text-[#0a1628] px-4 py-2 rounded-lg z-[100] focus:outline-none focus:ring-2 focus:ring-[#FFF]"
//       >
//         Skip to main content
//       </a>

//       <main id="main-content" role="main">
//         <HeroSection />
//         <ChallengesSection />
//         <SolutionsSection />
//         <BenefitsSection />
//         <ProcessSection />
//         {/* <CTASection /> */}
//       </main>
//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaChartLine,
  FaBullhorn,
  FaProjectDiagram,
  FaBoxes,
  FaCheckCircle,
  FaArrowRight,
  FaRocket,
  FaUsers,
  FaStore,
  FaTruck,
  FaBrain,
  FaLightbulb,
  FaChartBar,
  FaGlobe,
  FaUserFriends,
  FaMobileAlt,
  FaTags,
  FaWarehouse,
  FaGift,
  FaClock,
  FaPercent,
  FaLayerGroup,
} from "react-icons/fa";
import cpImg1 from "../../assets/industry/cam1.png";
import cpImg2 from "../../assets/industry/cp2.png";
import reImg1 from "../../assets/industry/re2.png";
import reImg2 from "../../assets/industry/re.png";

/* ============ DATA ============ */
const focusAreas = [
  { icon: FaTruck, label: "Demand-Driven Supply Chain" },
  { icon: FaShoppingCart, label: "Omnichannel Commerce" },
  { icon: FaBullhorn, label: "Trade Promotion" },
  { icon: FaUsers, label: "Customer 360" },
];

const valueChain = [
  {
    icon: FaTruck,
    title: "Plan & Source",
    desc: "Demand sensing and responsive supply networks that keep the right products in the right place.",
  },
  {
    icon: FaShoppingCart,
    title: "Sell & Promote",
    desc: "Unified commerce and data-driven promotions that connect every channel and protect margin.",
  },
  {
    icon: FaUsers,
    title: "Serve & Retain",
    desc: "A 360-degree view of the customer that powers personalization, loyalty and lasting relationships.",
  },
];

const segments = [
  {
    img: cpImg2,
    icon: FaBoxes,
    title: "Consumer Products",
    desc: "For brands managing demand volatility, complex supply networks and trade spend.",
    tags: ["Demand planning", "Trade promotion", "Supply chain"],
  },
  {
    img: reImg2,
    icon: FaStore,
    title: "Retail",
    desc: "For retailers building seamless, personalized experiences across stores and digital channels.",
    tags: ["Omnichannel", "Inventory visibility", "Loyalty & CRM"],
  },
];

const challenges = [
  {
    key: "cp",
    icon: FaBoxes,
    label: "Consumer Products",
    items: [
      {
        icon: FaChartLine,
        title: "Unpredictable Consumer Demand",
        desc: "Rapidly shifting preferences and market trends make forecasting extremely challenging.",
        help: "AI-powered demand sensing and forecasting that turn market signals into reliable plans.",
      },
      {
        icon: FaTruck,
        title: "Complex Supply Chain Networks",
        desc: "Managing multi-tier suppliers, global logistics and inventory across channels.",
        help: "Demand-driven planning and visibility across suppliers, logistics and channels.",
      },
      {
        icon: FaBullhorn,
        title: "Inefficient Trade Promotions",
        desc: "Low ROI on promotional spending due to poor targeting and measurement.",
        help: "Data-driven promotion planning with clear ROI measurement and optimization.",
      },
      {
        icon: FaStore,
        title: "Omnichannel Integration Gaps",
        desc: "Disconnected online, mobile and in-store experiences frustrate customers.",
        help: "A unified commerce layer that connects online, mobile and in-store experiences.",
      },
      {
        icon: FaBrain,
        title: "Limited Real-Time Insights",
        desc: "A lack of actionable data prevents quick, informed business decisions.",
        help: "Integrated data and analytics that put actionable insights in front of decision-makers.",
      },
      {
        icon: FaUsers,
        title: "Evolving Customer Expectations",
        desc: "Demand for personalization, speed and seamless experiences across touchpoints.",
        help: "A 360-degree customer view that enables personalization at scale.",
      },
    ],
  },
  {
    key: "retail",
    icon: FaStore,
    label: "Retail",
    items: [
      {
        icon: FaUserFriends,
        title: "Changing Customer Behavior",
        desc: "Evolving shopping preferences demand seamless online and in-store experiences.",
        help: "Seamless journeys across stores, web and mobile, designed around how customers shop.",
      },
      {
        icon: FaMobileAlt,
        title: "Disconnected Sales Channels",
        desc: "Siloed systems prevent a unified customer journey across touchpoints.",
        help: "One platform connecting stores, online, mobile and social commerce.",
      },
      {
        icon: FaWarehouse,
        title: "Inventory Visibility Issues",
        desc: "Limited real-time stock visibility leads to lost sales and overstock.",
        help: "Real-time stock visibility across locations and channels to reduce lost sales and overstock.",
      },
      {
        icon: FaGift,
        title: "Weak Personalization Capabilities",
        desc: "Difficulty delivering relevant, individual shopping experiences at scale.",
        help: "CRM and loyalty data used to deliver relevant, personal experiences.",
      },
      {
        icon: FaPercent,
        title: "Margin Pressure & Competition",
        desc: "Intense competition from digital natives and marketplaces squeezes profitability.",
        help: "Dynamic pricing and promotion optimization that protect margin.",
      },
      {
        icon: FaClock,
        title: "Slow Response to Trends",
        desc: "Legacy systems cannot adapt quickly to fast-changing market dynamics.",
        help: "Modern, agile platforms that adapt quickly to changing market dynamics.",
      },
    ],
  },
];

const solutions = [
  {
    key: "cp",
    icon: FaBoxes,
    label: "Consumer Products",
    items: [
      {
        icon: FaBoxes,
        title: "Demand-Driven Supply Chain",
        desc: "AI-powered demand sensing and responsive supply network orchestration.",
      },
      {
        icon: FaBullhorn,
        title: "Trade Promotion Optimization",
        desc: "Data-driven promotion planning, execution and ROI analytics.",
      },
      {
        icon: FaShoppingCart,
        title: "Omnichannel Commerce",
        desc: "Unified commerce platform connecting all sales channels seamlessly.",
      },
      {
        icon: FaChartLine,
        title: "Advanced Analytics & Forecasting",
        desc: "Machine learning models for accurate demand prediction and insights.",
      },
      {
        icon: FaProjectDiagram,
        title: "SAP Integration & Transformation",
        desc: "Enterprise systems modernization for consumer products and retail operations.",
      },
      {
        icon: FaGlobe,
        title: "Customer Experience Platform",
        desc: "A 360-degree customer view enabling personalization at scale.",
      },
    ],
  },
  {
    key: "retail",
    icon: FaStore,
    label: "Retail",
    items: [
      {
        icon: FaBoxes,
        title: "Merchandise Management",
        desc: "AI-powered assortment planning, pricing optimization and inventory intelligence.",
      },
      {
        icon: FaShoppingCart,
        title: "Omnichannel Commerce",
        desc: "Unified platform connecting stores, online, mobile and social commerce.",
      },
      {
        icon: FaUserFriends,
        title: "Customer Loyalty & CRM",
        desc: "A 360-degree customer view enabling personalized engagement and retention.",
      },
      {
        icon: FaChartLine,
        title: "Retail Analytics & AI",
        desc: "Advanced analytics for demand sensing, customer insights and predictive modeling.",
      },
      {
        icon: FaStore,
        title: "Store Operations Excellence",
        desc: "Workforce management, task execution and in-store technology enablement.",
      },
      {
        icon: FaTags,
        title: "Promotion & Pricing Engine",
        desc: "Dynamic pricing, promotional planning and markdown optimization.",
      },
    ],
  },
];

const benefits = [
  {
    icon: FaBoxes,
    label: "Consumer Products",
    items: [
      "Improved demand forecasting and inventory planning",
      "Optimized supply chain operations and efficiency",
      "Enhanced trade promotion management and performance",
      "Seamless omnichannel customer experiences",
      "Real-time insights for faster decision-making",
      "Scalable platforms that support business growth",
    ],
  },
  {
    icon: FaStore,
    label: "Retail",
    items: [
      "End-to-end inventory visibility and control",
      "Connected experiences across digital and physical channels",
      "Stronger customer retention and lifetime value",
      "Data-driven demand planning and forecasting",
      "Optimized operations with intelligent automation",
      "Agile platforms that accelerate growth and innovation",
    ],
  },
];

const process = [
  {
    icon: FaBoxes,
    label: "Consumer Products",
    steps: [
      {
        icon: FaUsers,
        title: "Consumer Intelligence",
        desc: "Analysis of customer behavior, market trends and the competitive landscape.",
      },
      {
        icon: FaLightbulb,
        title: "Strategy & Planning",
        desc: "Data-driven strategies aligned with business objectives.",
      },
      {
        icon: FaRocket,
        title: "Agile Execution",
        desc: "Iterative implementation with continuous feedback loops.",
      },
      {
        icon: FaChartBar,
        title: "Optimize & Scale",
        desc: "Refine performance and expand successful initiatives.",
      },
    ],
  },
  {
    icon: FaStore,
    label: "Retail",
    steps: [
      {
        icon: FaLightbulb,
        title: "Retail Discovery",
        desc: "Analysis of customer journeys, operations and the technology landscape.",
      },
      {
        icon: FaLayerGroup,
        title: "Experience Design",
        desc: "Seamless omnichannel experiences aligned with brand strategy.",
      },
      {
        icon: FaRocket,
        title: "Agile Implementation",
        desc: "Iterative deployment with minimal disruption to operations.",
      },
      {
        icon: FaChartBar,
        title: "Continuous Innovation",
        desc: "Optimize performance and keep enhancing capabilities.",
      },
    ],
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

/* Group heading used between Consumer Products and Retail blocks */
const GroupLabel = ({ icon: Icon, children, dark }) => (
  <div className="mb-6 flex items-center gap-4">
    <span
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg ${dark ? "bg-white text-primary-800" : "bg-primary-800 text-white"}`}
    >
      <Icon />
    </span>
    <h3
      className={`text-xl font-bold ${dark ? "text-white" : "text-primary-900"}`}
    >
      {children}
    </h3>
    <span
      className={`h-px flex-1 ${dark ? "bg-white/20" : "bg-primary-200"}`}
    />
  </div>
);

/* ============ HERO (image stays put, text scrolls) ============ */
const Hero = () => (
  <section className="relative flex min-h-[90svh] flex-col bg-primary-900 [clip-path:inset(0)]">
    <motion.img
      src={cpImg1}
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
            Consumer Products · Retail
          </p>
        </div>
        <h1 className="mb-6 text-4xl font-light leading-[1.1] text-white md:text-6xl lg:text-7xl">
          Delighting Consumers,{" "}
          <span className="font-semibold text-primary-200">Growing Brands</span>
        </h1>
        <p className="mb-4 max-w-4xl text-xl font-light leading-relaxed text-primary-100 md:text-2xl">
          Shoppers expect personal, seamless experiences everywhere, while
          brands and retailers face volatile demand, complex supply chains and
          margin pressure. We connect demand, supply and customer data across
          every channel, so you can respond faster, operate smarter and grow
          with confidence.
        </p>
        <p className="mb-8 max-w-xl text-base text-primary-200">
          Technology for consumer products companies and retailers, from the
          shelf to the customer.
        </p>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <Button href="/contact">
            Talk to Our Retail Experts <FaArrowRight size={12} />
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
          title="One Connected Approach for Brands and Retailers"
          text="Consumer products companies and retailers share the same goal: understand the consumer, get the right product to the right place, and create experiences people come back for."
        />
        <p className="-mt-6 mb-10 text-lg text-primary-600">
          We bring deep enterprise, analytics and commerce expertise to every
          stage of that journey.
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
          src={reImg1}
          alt="Modern retail store with omnichannel shopping"
          loading="lazy"
          className="h-[200px] w-full rounded-md object-cover shadow-2xl md:h-[300px] lg:h-[360px]"
        />
      </div>
    </Container>
  </section>
);

/* ============ SEGMENTS ============ */
const Segments = () => (
  <section className="bg-primary-50 py-16 lg:py-20">
    <Container>
      <SectionHead
        eyebrow="Two Industries, One Partner"
        title="Built for Consumer Products and Retail"
        text="Tailored solutions for the specific needs of brands and retailers."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {segments.map((s, i) => (
          <motion.article
            key={s.title}
            {...fade(i)}
            className="group overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm transition-shadow hover:shadow-xl"
          >
            <img
              src={s.img}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="h-68 w-full object-cover"
            />
            <div className="p-7">
              <div className="mb-3 flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-xl text-primary-600 transition-colors group-hover:bg-primary-800 group-hover:text-white">
                  <s.icon />
                </span>
                <h3 className="text-xl font-bold text-primary-900">
                  {s.title}
                </h3>
              </div>
              <p className="mb-4 text-base text-primary-600">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Container>
  </section>
);

/* ============ CHALLENGES ============ */
const Challenges = () => (
  <section id="challenges" className="bg-white py-16 lg:py-20">
    <Container>
      <SectionHead
        eyebrow="Industry Challenges"
        title="Challenges We Help You Solve"
        text="Brands and retailers face unique pressures in today's digitally driven marketplace. Here is where we make the difference."
      />
      <div className="space-y-14">
        {challenges.map((g) => (
          <div key={g.key}>
            <GroupLabel icon={g.icon}>{g.label}</GroupLabel>
            <div className="space-y-4">
              {g.items.map((c, i) => (
                <motion.article
                  key={c.title}
                  {...fade(i)}
                  className="group grid overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm transition-shadow hover:shadow-lg md:grid-cols-2"
                >
                  <div className="p-6">
                    <div className="mb-2 flex items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-lg text-primary-600 transition-colors group-hover:bg-primary-800 group-hover:text-white">
                        <c.icon />
                      </span>
                      <h4 className="text-lg font-bold text-primary-900">
                        {c.title}
                      </h4>
                    </div>
                    <p className="text-base text-primary-600">{c.desc}</p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-primary-100 bg-primary-800 p-6 md:border-l md:border-t-0">
                    <FaCheckCircle className="shrink-0 text-xl text-primary-300" />
                    <p className="text-base text-primary-100">{c.help}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

/* ============ SOLUTIONS ============ */
const Solutions = () => (
  <section id="solutions" className="bg-primary-50 py-16 lg:py-20">
    <Container>
      <SectionHead
        eyebrow="Our Solutions"
        title="Specialized Solutions for Every Channel"
        text="End-to-end solutions for consumer products excellence and retail transformation."
      />
      <div className="space-y-14">
        {solutions.map((g) => (
          <div key={g.key}>
            <GroupLabel icon={g.icon}>{g.label}</GroupLabel>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-primary-100 bg-primary-100 md:grid-cols-2 lg:grid-cols-3">
              {g.items.map((s, i) => (
                <motion.div
                  key={s.title}
                  {...fade(i)}
                  className="group bg-white p-7 transition-colors hover:bg-primary-50"
                >
                  <div className="mb-3 flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-xl text-primary-600 transition-colors group-hover:bg-primary-800 group-hover:text-white">
                      <s.icon />
                    </span>
                    <h4 className="text-lg font-bold leading-snug text-primary-900">
                      {s.title}
                    </h4>
                  </div>
                  <p className="text-base text-primary-600">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

/* ============ BENEFITS (dark) ============ */
const Benefits = () => (
  <section className="bg-primary-900 py-16 lg:py-20">
    <Container>
      <SectionHead
        dark
        eyebrow="Business Outcomes"
        title="Results That Drive Growth"
        text="Improvements that support growth for both consumer products and retail businesses."
      />
      <div className="grid gap-10 md:grid-cols-2">
        {benefits.map((g) => (
          <div
            key={g.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-7"
          >
            <GroupLabel icon={g.icon} dark>
              {g.label}
            </GroupLabel>
            <ul className="space-y-4">
              {g.items.map((b, i) => (
                <motion.li
                  key={b}
                  {...fade(i)}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-primary-800">
                    <FaCheckCircle />
                  </span>
                  <span className="text-base font-medium text-primary-100">
                    {b}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

/* ============ PROCESS ============ */
const Process = () => (
  <section id="process" className="bg-white py-16 lg:py-20">
    <Container>
      <SectionHead
        eyebrow="Our Approach"
        title="A Proven Approach, Tailored to Your Industry"
        text="A clear methodology adapted to the needs of brands and retailers."
      />
      <div className="space-y-14">
        {process.map((g) => (
          <div key={g.label}>
            <GroupLabel icon={g.icon}>{g.label}</GroupLabel>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {g.steps.map((s, i) => (
                <motion.div
                  key={s.title}
                  {...fade(i)}
                  className="relative text-center"
                >
                  {i < g.steps.length - 1 && (
                    <div className="absolute left-1/2 top-8 hidden h-px w-full bg-primary-200 lg:block" />
                  )}
                  <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary-800 text-xl text-white">
                    <s.icon />
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border border-primary-200 bg-white text-xs font-bold text-primary-800">
                      {i + 1}
                    </span>
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-primary-900">
                    {s.title}
                  </h4>
                  <p className="mx-auto max-w-[260px] text-base text-primary-600">
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

/* ============ CTA ============ */
const CTA = () => (
  <section className="bg-primary-50 py-12 lg:py-16">
    <Container>
      <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-primary-800 px-6 py-10 text-center lg:flex-row lg:px-12 lg:text-left">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-300">
            Ready to Transform Your Business?
          </p>
          <h2 className="text-2xl font-bold text-white lg:text-3xl">
            Accelerate Growth with Proven Strategies
          </h2>
          <p className="mt-2 text-lg text-primary-200">
            Talk to our team about creating exceptional experiences and
            optimizing your operations.
          </p>
        </div>
        <Button href="/contact" variant="light">
          Start Your Transformation <FaArrowRight size={12} />
        </Button>
      </div>
    </Container>
  </section>
);

/* ============ PAGE ============ */
export default function ConsumerProductsRetailPage() {
  return (
    // overflow-x-clip (not hidden) so the sticky overview image keeps working
    <main role="main" className="w-full overflow-x-clip">
      <Hero />
      <div className="relative bg-white">
        <Overview />
        <Segments />
        <Challenges />
        <Solutions />
        <Benefits />
        <Process />
        <CTA />
      </div>
    </main>
  );
}
