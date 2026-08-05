// import React, { useMemo } from "react";
// import { motion, useInView } from "framer-motion";
// import {
//   FaPlane,
//   FaCogs,
//   FaShieldAlt,
//   FaChartLine,
//   FaProjectDiagram,
//   FaCheckCircle,
//   FaArrowRight,
// } from "react-icons/fa";

// import img1 from "../../assets/industry/ae1.png";
// import img2 from "../../assets/industry/ae2.png";

// // ============================================
// // REUSABLE COMPONENTS FOR BETTER MAINTAINABILITY
// // ============================================

// const SectionWrapper = ({ children, className = "", id }) => (
//   <section id={id} className={`px-6 lg:px-20 py-20 ${className}`}>
//     {children}
//   </section>
// );

// const SectionTitle = ({ children, centered = true }) => (
//   <h2
//     className={`text-3xl lg:text-4xl font-bold mb-12 text-[#0a1f44] ${centered ? "text-center" : ""}`}
//   >
//     {children}
//   </h2>
// );

// const Card = ({ children, className = "", hover = true, ...props }) => (
//   <motion.div
//     whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
//     transition={{ type: "spring", stiffness: 300 }}
//     className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}
//     {...props}
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
//     whileHover={{ scale: 1.05, y: -8 }}
//     className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl text-center border-t-4 border-yellow-500 group cursor-pointer"
//   >
//     <div className="w-16 h-16 bg-[#0a1f44] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
//       <Icon className="text-3xl text-white group-hover:text-[#0a1f44]" />
//     </div>
//     <h3 className="font-bold text-lg mb-2 text-[#0a1f44]">{title}</h3>
//     {description && <p className="text-gray-600 text-sm">{description}</p>}
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
//     "inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";

//   const variants = {
//     primary:
//       "bg-yellow-500 hover:bg-yellow-600 text-black focus:ring-yellow-500",
//     secondary:
//       "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0a1f44] focus:ring-white",
//     ghost:
//       "bg-transparent text-[#0a1f44] hover:bg-gray-100 focus:ring-[#0a1f44]",
//   };

//   const sizes = {
//     sm: "px-4 py-2 text-sm",
//     md: "px-6 py-3 text-base",
//     lg: "px-8 py-4 text-lg",
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

// // ============================================
// // ANIMATION VARIANTS
// // ============================================

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// const fadeInUp = {
//   initial: { opacity: 0, y: 40 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
//   transition: { duration: 0.6 },
// };

// // ============================================
// // DATA CONFIGURATION (EASY TO MODIFY)
// // ============================================

// const CHALLENGES_DATA = [
//   {
//     title: "Complex Asset Lifecycle",
//     description:
//       "Managing aircraft and equipment throughout their entire lifecycle",
//   },
//   {
//     title: "Regulatory Compliance",
//     description: "Navigating strict aviation regulations and standards",
//   },
//   {
//     title: "High Operational Costs",
//     description: "Optimizing expenses while maintaining safety standards",
//   },
//   {
//     title: "Legacy System Integration",
//     description: "Modernizing outdated infrastructure seamlessly",
//   },
//   {
//     title: "Real-time Visibility",
//     description: "Gaining instant insights into operations",
//   },
//   {
//     title: "Cybersecurity Threats",
//     description: "Protecting critical systems from digital attacks",
//   },
// ];

// const SOLUTIONS_DATA = [
//   {
//     icon: FaCogs,
//     title: "MRO Optimization",
//     description: "Streamline maintenance, repair, and operations",
//   },
//   {
//     icon: FaProjectDiagram,
//     title: "Project Management",
//     description: "End-to-End program oversight and delivery",
//   },
//   {
//     icon: FaShieldAlt,
//     title: "Compliance & Risk",
//     description: "Ensure regulatory adherence and risk mitigation",
//   },
//   {
//     icon: FaPlane,
//     title: "SAP Transformation",
//     description: "Enterprise resource planning modernization",
//   },
//   {
//     icon: FaChartLine,
//     title: "Data & Analytics",
//     description: "Business intelligence and predictive analytics",
//   },
//   {
//     icon: FaShieldAlt,
//     title: "Cybersecurity",
//     description: "Protect mission-critical systems and data",
//   },
// ];

// const BENEFITS_DATA = [
//   "Improved asset performance by up to 40%",
//   "Reduced downtime through predictive maintenance",
//   "Strong compliance control and audit readiness",
//   "Real-time operational insights and dashboards",
//   "Secure, scalable cloud-native architecture",
//   "ROI typically within 12-18 months",
// ];

// const PROCESS_STEPS = [
//   {
//     step: "01",
//     title: "Assess",
//     description: "Evaluate current systems and identify opportunities",
//   },
//   {
//     step: "02",
//     title: "Design",
//     description: "Create tailored solution architecture",
//   },
//   {
//     step: "03",
//     title: "Implement",
//     description: "Deploy with minimal disruption",
//   },
//   {
//     step: "04",
//     title: "Optimize",
//     description: "Continuous improvement and support",
//   },
// ];

// // ============================================
// // SECTION COMPONENTS
// // ============================================

// const HeroSection = () => (
//   <section className="h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-gradient-to-br from-[#0a1f44] via-[#12324f] to-[#0a1f44] text-white relative overflow-hidden">
//     {/* Background Pattern */}
//     <div className="absolute inset-0 opacity-10">
//       <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full filter blur-3xl"></div>
//       <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
//     </div>

//     <div className="max-w-2xl z-10 relative">
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold mb-6">
//           Trusted by Leading Aerospace Companies
//         </span>
//         <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
//           Aerospace &{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
//             Defense
//           </span>
//         </h1>
//         <p className="text-xl text-gray-300 mb-8 leading-relaxed">
//           Engineering precision and mission-critical excellence with advanced
//           digital solutions. Transform your aerospace operations with
//           cutting-edge technology.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4">
//           <Button size="lg">
//             Talk to Experts <FaArrowRight />
//           </Button>
//           <Button variant="secondary" size="lg">
//             View Case Studies
//           </Button>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
//           {[
//             { value: "500+", label: "Projects Delivered" },
//             { value: "98%", label: "Client Satisfaction" },
//             { value: "24/7", label: "Support Available" },
//           ].map((stat, i) => (
//             <div key={i}>
//               <div className="text-3xl font-bold text-yellow-400">
//                 {stat.value}
//               </div>
//               <div className="text-sm text-gray-400">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     </div>

//     <motion.div
//       className="w-full lg:w-1/2 mt-10 lg:mt-0 z-10"
//       initial={{ opacity: 0, x: 50 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8, delay: 0.2 }}
//     >
//       <div className="relative">
//         <img
//           src={img1}
//           className="w-full rounded-2xl shadow-2xl"
//           alt="Aerospace engineering - Advanced aircraft technology and defense systems"
//         />
//         <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-black p-6 rounded-xl shadow-xl">
//           <div className="text-2xl font-bold">15+</div>
//           <div className="text-sm">Years Experience</div>
//         </div>
//       </div>
//     </motion.div>
//   </section>
// );

// const ChallengesSection = () => (
//   <SectionWrapper
//     className="bg-gradient-to-b from-gray-50 to-white"
//     id="challenges"
//   >
//     <div className="text-center mb-16">
//       <SectionTitle>Industry Challenges We Solve</SectionTitle>
//       <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//         The aerospace industry faces unique obstacles. Our expertise helps you
//         overcome them.
//       </p>
//     </div>

//     <motion.div
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//     >
//       {CHALLENGES_DATA.map((challenge, i) => (
//         <Card key={i} variants={itemVariants}>
//           <div className="flex items-start gap-4">
//             <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
//               <span className="text-red-600 font-bold">{i + 1}</span>
//             </div>
//             <div>
//               <h3 className="font-bold text-lg mb-2 text-[#0a1f44]">
//                 {challenge.title}
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {challenge.description}
//               </p>
//             </div>
//           </div>
//         </Card>
//       ))}
//     </motion.div>
//   </SectionWrapper>
// );

// const SolutionsSection = () => (
//   <SectionWrapper id="solutions">
//     <div className="text-center mb-16">
//       <SectionTitle>Our Comprehensive Solutions</SectionTitle>
//       <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//         End-to-End services designed specifically for aerospace and defense
//         requirements.
//       </p>
//     </div>

//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {SOLUTIONS_DATA.map((solution, i) => (
//         <IconCard
//           key={i}
//           icon={solution.icon}
//           title={solution.title}
//           description={solution.description}
//           delay={i * 0.1}
//         />
//       ))}
//     </div>
//   </SectionWrapper>
// );

// const BenefitsSection = () => (
//   <SectionWrapper className="bg-gray-50" id="benefits">
//     <div className="flex flex-col lg:flex-row items-center gap-16">
//       <motion.div className="w-full lg:w-1/2" {...fadeInUp}>
//         <div className="relative">
//           <img
//             src={img2}
//             className="w-full rounded-2xl shadow-2xl"
//             alt="Aircraft maintenance operations showing technical team working on aerospace equipment"
//           />
//           <div className="absolute top-6 -right-6 bg-[#0a1f44] text-white p-4 rounded-xl shadow-lg hidden lg:block">
//             <FaCheckCircle className="text-green-400 text-2xl mb-2" />
//             <div className="text-sm font-semibold">Certified Processes</div>
//           </div>
//         </div>
//       </motion.div>

//       <div className="w-full lg:w-1/2">
//         <motion.div {...fadeInUp}>
//           <SectionTitle centered={false}>Key Benefits</SectionTitle>
//           <p className="text-gray-600 mb-8 text-lg">
//             Partnering with us delivers measurable results across your
//             organization.
//           </p>

//           <div className="space-y-6">
//             {BENEFITS_DATA.map((benefit, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//                 className="flex items-start gap-4 group"
//               >
//                 <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-green-500 transition-colors">
//                   <FaCheckCircle className="text-green-600 group-hover:text-white text-sm" />
//                 </div>
//                 <span className="text-gray-700 font-medium group-hover:text-[#0a1f44] transition-colors">
//                   {benefit}
//                 </span>
//               </motion.div>
//             ))}
//           </div>

//           <div className="mt-10">
//             <Button variant="ghost">
//               Learn More About Our Process <FaArrowRight />
//             </Button>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   </SectionWrapper>
// );

// const ProcessSection = () => (
//   <SectionWrapper id="process">
//     <div className="text-center mb-16">
//       <SectionTitle>Our Proven Approach</SectionTitle>
//       <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//         A structured methodology that ensures success at every stage.
//       </p>
//     </div>

//     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
//       {/* Connection Line */}
//       <div className="hidden lg:block absolute top-24 left-1/4 right-1/4 h-1 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 rounded"></div>

//       {PROCESS_STEPS.map((step, i) => (
//         <motion.div
//           key={i}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: i * 0.15 }}
//           className="relative text-center"
//         >
//           <div className="w-20 h-20 bg-white border-4 border-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
//             <span className="text-2xl font-bold text-[#0a1f44]">
//               {step.step}
//             </span>
//           </div>
//           <h3 className="font-bold text-xl mb-3 text-[#0a1f44]">
//             {step.title}
//           </h3>
//           <p className="text-gray-600 text-sm leading-relaxed">
//             {step.description}
//           </p>
//         </motion.div>
//       ))}
//     </div>
//   </SectionWrapper>
// );

// const CTASection = () => (
//   <section className="px-6 lg:px-20 py-24 text-center bg-gradient-to-r from-[#0a1f44] to-[#12324f] text-white relative overflow-hidden">
//     {/* Background Elements */}
//     <div className="absolute inset-0">
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full filter blur-3xl"></div>
//       <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
//     </div>

//     <div className="relative z-10 max-w-3xl mx-auto">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
//           Ready to Transform Your{" "}
//           <span className="text-yellow-400">Aerospace Operations?</span>
//         </h2>
//         <p className="text-xl text-gray-300 mb-10">
//           Join industry leaders who trust us to deliver mission-critical
//           solutions.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Button size="lg">
//             Schedule Consultation <FaArrowRight />
//           </Button>
//           <Button variant="secondary" size="lg">
//             Download Brochure
//           </Button>
//         </div>

//         <p className="mt-8 text-sm text-gray-400">
//           No commitment required • Free initial assessment • Response within 24
//           hours
//         </p>
//       </motion.div>
//     </div>
//   </section>
// );

// export default function AerospacePage() {
//   // Memoize static content for performance
//   const memoizedContent = useMemo(
//     () => ({
//       hero: <HeroSection />,
//       challenges: <ChallengesSection />,
//       solutions: <SolutionsSection />,
//       benefits: <BenefitsSection />,
//       process: <ProcessSection />,
//       cta: <CTASection />,
//       // footer: <Footer />,
//     }),
//     [],
//   );

//   return (
//     <div className="w-full font-sans antialiased text-gray-800 overflow-x-hidden">
//       {/* Accessibility: Skip to main content */}
//       <a
//         href="#main-content"
//         className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-yellow-500 text-black px-4 py-2 rounded z-50"
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

//       {/* {memoizedContent.footer} */}
//     </div>
//   );
// }

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaFighterJet,
  FaProjectDiagram,
  FaBolt,
  FaShieldAlt,
  FaArrowRight,
  FaChartLine,
  FaCogs,
  FaRocket,
  FaArrowDown,
  FaStar,
  FaCheckCircle,
  FaIndustry,
} from "react-icons/fa";
import img1 from "../../assets/industry/re1.png";
import img2 from "../../assets/industry/ae2.png";

// ============================================
// REUSABLE COMPONENTS - NAVY & GOLD THEME
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
  <div className={`mb-10 ${centered ? "text-center" : ""}`}>
    <h2
      className={`text-3xl lg:text-4xl font-bold mb-4 ${light ? "text-white" : "text-[#0a1628]"}`}
    >
      {children}
    </h2>
    {subtitle && (
      <p
        className={`text-lg max-w-2xl mx-auto ${light ? "text-gray-300" : "text-gray-600"}`}
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
    {/* Gold Accent Top Border */}
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

const GoldBadge = ({ children }) => (
  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-full text-[#FFD700] text-sm font-medium backdrop-blur-sm">
    <FaStar className="text-xs animate-pulse" />
    {children}
  </div>
);

// ============================================
// DATA CONFIGURATION
// ============================================

const CHALLENGES_DATA = [
  {
    icon: FaProjectDiagram,
    title: "Complex Program Execution",
    description:
      "Managing large-scale aerospace programs with multiple stakeholders, timelines, and regulatory requirements.",
  },
  {
    icon: FaShieldAlt,
    title: "Regulatory Compliance",
    description:
      "Meeting stringent aerospace, defense, security, and export control regulations across operations.",
  },
  {
    icon: FaCogs,
    title: "MRO Efficiency",
    description:
      "Optimizing maintenance, repair, and overhaul processes while reducing downtime and operational costs.",
  },
  {
    icon: FaChartLine,
    title: "Legacy System Modernization",
    description:
      "Transforming fragmented systems into integrated SAP-driven digital ecosystems.",
  },
];

const SOLUTIONS_DATA = [
  {
    icon: FaProjectDiagram,
    title: "PEO & Program Governance",
    description:
      "Structured project execution frameworks ensuring predictable delivery, risk control, and stakeholder alignment.",
  },
  {
    icon: FaCogs,
    title: "SAP S/4HANA Transformation",
    description:
      "End-to-end SAP modernization supporting finance, supply chain, manufacturing, and maintenance operations.",
  },
  {
    icon: FaShieldAlt,
    title: "Compliance & Risk Management",
    description:
      "Automated governance, audit readiness, quality assurance, and regulatory compliance management.",
  },
  {
    icon: FaRocket,
    title: "Digital Engineering",
    description:
      "Connecting engineering, manufacturing, and operational processes through digital innovation.",
  },
  {
    icon: FaIndustry,
    title: "MRO Optimization",
    description:
      "Improving asset availability, maintenance planning, and operational readiness through SAP solutions.",
  },
  {
    icon: FaChartLine,
    title: "Supply Chain Visibility",
    description:
      "Real-time monitoring and control of suppliers, inventory, procurement, and logistics operations.",
  },
];

const BENEFITS_DATA = [
  "Improved program delivery through PEO-led governance and execution frameworks",
  "Enhanced operational readiness with optimized MRO processes",
  "Real-time visibility across aerospace and defense supply chains",
  "Streamlined compliance, audit readiness, and risk management",
  "Accelerated SAP transformation with reduced implementation risks",
  "Improved collaboration between engineering, manufacturing, and operations",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Program Assessment",
    description:
      "Evaluate operational maturity, project objectives, compliance requirements, and transformation priorities.",
    icon: FaChartLine,
  },
  {
    step: "02",
    title: "PEO Governance Setup",
    description:
      "Establish delivery frameworks, risk controls, stakeholder governance, and execution standards.",
    icon: FaProjectDiagram,
  },
  {
    step: "03",
    title: "SAP Transformation",
    description:
      "Deploy SAP solutions aligned with aerospace and defense business processes and compliance requirements.",
    icon: FaCogs,
  },
  {
    step: "04",
    title: "Continuous Optimization",
    description:
      "Drive operational excellence through performance monitoring, innovation, and continuous improvement.",
    icon: FaRocket,
  },
];

// ============================================
// SECTION COMPONENTS - NAVY & GOLD
// ============================================

const HeroSection = () => (
  <section className="lg:h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-6 lg:py-12 bg-primary-800 text-white relative overflow-hidden">
    {/* Animated Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      {/* Gold Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-[#FFD700]/30 to-[#D4AF37]/10 rounded-full filter blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-[#D4AF37]/20 to-[#FFD700]/10 rounded-full filter blur-3xl"
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,215,0,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,.4) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Dynamic Lines */}
      {/* <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent"
      />
      <motion.div
        animate={{ x: ["100%", "-100%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent"
      /> */}
    </div>

    <div className="max-w-2xl z-10 relative">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <GoldBadge className="mb-8">PEO-Led Delivery Excellence</GoldBadge>

        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Aerospace & Defense{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFE55C] to-[#D4AF37]">
            Transformation
          </span>
        </h1>

        <p className="text-md md:text-xl text-gray-300 mb-2 leading-relaxed max-w-xl">
          Program Execution Excellence Powered by SAP. Empowering aerospace and
          defense organizations with PEO-driven governance, MRO optimization,
          and mission-critical operational excellence.
        </p>
      </motion.div>
    </div>

    <motion.div
      className="w-full lg:w-1/2 mt-12 lg:mt-0 z-10 relative"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="relative">
        {/* Main Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#FFD700]/30">
          <img
            src={img1}
            alt="Advanced aerospace manufacturing facility with high precision engineering and defense technology"
            className="w-full h-[200px] md:h-[250px] lg:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent"></div>

          {/* Gold Overlay Effect */}
          {/* <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700]/5 to-transparent"></div> */}
        </div>

        {/* Decorative Corners */}
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
    <SectionTitle subtitle="The aerospace & defense industry faces unprecedented challenges in the digital era">
      Industry Challenges We Solve
    </SectionTitle>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
    {/* Subtle Background Pattern */}
    <div
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #0a1628 1px, transparent 0)`,
        backgroundSize: "30px 30px",
      }}
    ></div>

    <div className="relative z-10">
      <SectionTitle subtitle="Comprehensive technology solutions designed for aerospace excellence">
        Our Solutions
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
    {/* Background Decoration */}
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
              alt="Aerospace MRO operations team utilizing advanced digital tools for maintenance optimization"
              className="w-full h-[200px] md:h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent"></div>
          </div>

          {/* Corner Accents */}
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
            Transform your aerospace and defense operations with measurable
            results that impact mission success.
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
        </motion.div>
      </div>
    </div>
  </SectionWrapper>
);

const ProcessSection = () => (
  <SectionWrapper className="bg-gray-50 relative" id="process">
    {/* Background Pattern */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,215,0,.3) 2px, transparent 2px), radial-gradient(circle at 75% 75%, rgba(255,215,0,.3) 2px, transparent 2px)`,
        backgroundSize: "50px 50px",
      }}
    ></div>

    <div className="relative z-10">
      <SectionTitle subtitle="A proven PEO-driven methodology that delivers consistent results">
        Our Proven Process
      </SectionTitle>

      <div className="relative">
        {/* Connection Line - Desktop - Navy to Gold Gradient */}
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
              {/* Step Circle */}
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-white border-4 border-[#0a1628] rounded-full flex items-center justify-center shadow-xl relative z-10 group-hover:border-[#FFD700] group-hover:scale-110 transition-all duration-300 mx-auto">
                  <step.icon className="text-3xl text-[#0a1628] group-hover:text-[#FFD700] transition-colors" />
                </div>

                {/* Step Number Badge - Gold */}
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

              {/* Arrow Connector - Mobile/Tablet */}
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
    {/* Rich Navy Background */}
    <div className="absolute inset-0 bg-primary-800"></div>

    {/* Pattern Overlay */}
    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #FFD700 1px, transparent 0)`,
        backgroundSize: "35px 35px",
      }}
    ></div>

    {/* Animated Gold Orbs */}
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        x: [-20, 20, -20],
        y: [-10, 10, -10],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-10 left-10 w-72 h-72 bg-[#FFD700]/15 rounded-full filter blur-3xl"
    />
    <motion.div
      animate={{
        scale: [1.2, 1, 1.2],
        x: [20, -20, 20],
        y: [10, -10, 10],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/12 rounded-full filter blur-3xl"
    />

    {/* Geometric Decorations */}
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

    {/* Energy Lines Animation */}
    <motion.div
      animate={{ opacity: [0.05, 0.15, 0.05] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
    />
    <motion.div
      animate={{ opacity: [0.05, 0.15, 0.05] }}
      transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
      className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
    />

    <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <GoldBadge className="mx-auto mb-8 justify-center">
          Ready to Accelerate Your Transformation?
        </GoldBadge>

        <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Ready to Modernize{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFE55C] to-[#D4AF37]">
            Aerospace & Defense Operations?
          </span>
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Partner with our SAP and PEO experts to improve program execution,
          strengthen compliance, optimize MRO operations, and accelerate
          enterprise transformation.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
          <Button size="lg" className="!px-12 !py-5 !text-lg">
            Schedule an Aerospace Consultation <FaArrowRight />
          </Button>
          <Button variant="ghost" size="lg" className="!px-12 !py-5 !text-lg">
            Download Whitepaper
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 pt-8 border-t border-[#FFD700]/20">
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-[#FFD700]" />
            No commitment required
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-[#FFD700]" />
            Free assessment
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-[#FFD700]" />
            Response within 24 hours
          </div>
          <div className="flex items-center gap-2">
            <FaStar className="text-[#FFD700]" />
            Premium Support
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// ============================================
// MAIN COMPONENT
// ============================================

export default function AerospacePage() {
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
      {/* Skip Link for Accessibility */}
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
