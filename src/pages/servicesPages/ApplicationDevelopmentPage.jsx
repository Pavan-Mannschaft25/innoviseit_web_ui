// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FaCode,
//   FaMobileAlt,
//   FaCloud,
//   FaDatabase,
//   FaRocket,
//   FaShieldAlt,
//   FaCogs,
//   FaArrowRight,
//   FaCheckCircle,
//   FaUsers,
//   FaStar,
//   FaAward,
//   FaLayerGroup,
//   FaLaptopCode,
//   FaServer,
//   FaBrain,
//   FaChartLine,
//   FaBolt,
//   FaCube,
//   FaSyncAlt,
//   FaGlobe,
//   FaLock,
//   FaProjectDiagram,
// } from "react-icons/fa";

// import banner from "../../assets/services/sr22.png";
// import AnimatedText from "../../components/common/AnimatedText";

// // ==================== BRAND COLORS ====================
// const BRAND = {
//   navy: {
//     dark: "#12324f",
//     mid: "#12324f",
//     light: "#143A63",
//     lighter: "#1A4570",
//   },
//   gold: {
//     primary: "#FFF",
//     light: "#FFD54F",
//     gradient: "linear-gradient(135deg, #FFF 0%, #FFC107 50%, #FFD54F 100%)",
//   },
// };

// // ==================== SERVICES ====================
// const developmentServices = [
//   {
//     icon: FaLaptopCode,
//     title: "Custom Web Applications",
//     desc: "Scalable enterprise-grade web applications tailored to your business workflows.",
//   },
//   {
//     icon: FaMobileAlt,
//     title: "Mobile App Development",
//     desc: "High-performance iOS & Android applications with seamless user experience.",
//   },
//   {
//     icon: FaCloud,
//     title: "Cloud Native Development",
//     desc: "Modern cloud-ready applications optimized for scalability and security.",
//   },
//   {
//     icon: FaDatabase,
//     title: "Enterprise Systems",
//     desc: "Robust ERP, CRM, and business-critical enterprise application development.",
//   },
//   {
//     icon: FaProjectDiagram,
//     title: "API & Integrations",
//     desc: "Secure APIs and third-party integrations for connected digital ecosystems.",
//   },
//   {
//     icon: FaBrain,
//     title: "AI Powered Solutions",
//     desc: "Intelligent applications leveraging AI, automation, and analytics.",
//   },
// ];

// // ==================== PROCESS ====================
// const processData = [
//   {
//     step: "01",
//     title: "Discovery",
//     desc: "Understanding your business goals, workflows, and challenges.",
//   },
//   {
//     step: "02",
//     title: "Design",
//     desc: "Creating intuitive UI/UX and scalable architecture planning.",
//   },
//   {
//     step: "03",
//     title: "Development",
//     desc: "Building secure, modern, and high-performing digital solutions.",
//   },
//   {
//     step: "04",
//     title: "Deployment",
//     desc: "Launching applications with cloud scalability and monitoring.",
//   },
// ];

// // ==================== STATS ====================
// const stats = [
//   { value: "250+", label: "Projects Delivered" },
//   { value: "99.9%", label: "Application Uptime" },
//   { value: "15+", label: "Industries Served" },
//   { value: "24/7", label: "Support & Monitoring" },
// ];

// // ==================== HERO ====================
// const HeroSection = () => {
//   return (
//     <section
//       className="relative py-20 overflow-hidden"
//       style={{
//         background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 50%, ${BRAND.navy.light} 100%)`,
//       }}
//     >
//       {/* Background Glow */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFF]/10 blur-3xl rounded-full" />
//       <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#143A63]/40 blur-3xl rounded-full" />

//       <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* LEFT */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div
//               className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-6"
//               style={{
//                 background: "rgba(253,185,19,0.12)",
//                 border: "2px solid #FFF",
//               }}
//             >
//               <FaCode style={{ color: BRAND.gold.primary }} />
//               <span
//                 className="text-xs font-bold uppercase tracking-[0.2em]"
//                 style={{ color: BRAND.gold.primary }}
//               >
//                 <AnimatedText text="Application Development Services" />
//               </span>
//             </div>

//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
//               Building <span>Modern</span> Digital Products That Drive{" "}
//               <span
//                 style={{
//                   backgroundImage: BRAND.gold.gradient,
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 Business Growth
//               </span>
//             </h1>

//             <p className="text-lg text-gray-300 leading-relaxed mb-8">
//               We design and develop scalable web, mobile, and enterprise
//               applications with modern architecture, cloud-native technologies,
//               and exceptional user experiences.
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-wrap gap-4 mb-10">
//               <button
//                 className="px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:-translate-y-1"
//                 style={{
//                   background: BRAND.gold.gradient,
//                   color: BRAND.navy.dark,
//                 }}
//               >
//                 Start Your Project
//               </button>

//               <button className="px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all duration-300">
//                 Explore Solutions
//               </button>
//             </div>

//             {/* Trust */}
//             <div className="flex flex-wrap gap-6 pt-8 border-t border-white/10">
//               {[
//                 { icon: FaAward, text: "Enterprise Solutions" },
//                 { icon: FaUsers, text: "Expert Developers" },
//                 { icon: FaStar, text: "Client Satisfaction" },
//               ].map((item, idx) => (
//                 <div key={idx} className="flex items-center gap-2">
//                   <item.icon
//                     className="text-sm"
//                     style={{ color: BRAND.gold.primary }}
//                   />
//                   <span className="text-sm text-white/70">{item.text}</span>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* RIGHT */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <div
//               className="rounded-3xl p-8 backdrop-blur-xl border border-white/10 shadow-2xl"
//               style={{
//                 background:
//                   "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
//               }}
//             >
//               {/* Dashboard Header */}
//               <div className="flex items-center justify-between mb-8">
//                 <div className="flex gap-2">
//                   <div className="w-3 h-3 rounded-full bg-red-400" />
//                   <div className="w-3 h-3 rounded-full bg-yellow-400" />
//                   <div className="w-3 h-3 rounded-full bg-green-400" />
//                 </div>

//                 <span className="text-xs text-white/40">
//                   Development Pipeline
//                 </span>
//               </div>

//               {/* Cards */}
//               <div className="grid grid-cols-2 gap-4">
//                 {[
//                   {
//                     icon: FaCode,
//                     title: "Frontend",
//                     color: "#3B82F6",
//                   },
//                   {
//                     icon: FaServer,
//                     title: "Backend",
//                     color: "#10B981",
//                   },
//                   {
//                     icon: FaCloud,
//                     title: "Cloud",
//                     color: "#F59E0B",
//                   },
//                   {
//                     icon: FaShieldAlt,
//                     title: "Security",
//                     color: "#8B5CF6",
//                   },
//                 ].map((card, idx) => (
//                   <div
//                     key={idx}
//                     className="p-5 rounded-2xl border border-white/10"
//                     style={{
//                       background: "rgba(255,255,255,0.04)",
//                     }}
//                   >
//                     <card.icon
//                       className="text-3xl mb-4"
//                       style={{ color: card.color }}
//                     />

//                     <h4 className="text-white font-bold">{card.title}</h4>

//                     <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
//                       <motion.div
//                         initial={{ width: 0 }}
//                         animate={{ width: "85%" }}
//                         transition={{ duration: 1 }}
//                         className="h-full rounded-full"
//                         style={{
//                           background: card.color,
//                         }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Bottom */}
//               <div
//                 className="mt-6 p-5 rounded-2xl"
//                 style={{
//                   background: "rgba(253,185,19,0.08)",
//                   border: "1px solid rgba(253,185,19,0.15)",
//                 }}
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm text-white/60 mb-1">
//                       Active Development
//                     </p>
//                     <h3 className="text-3xl font-black text-white">
//                       18 Projects
//                     </h3>
//                   </div>

//                   <div className="w-16 h-16 rounded-2xl bg-[#FFF] flex items-center justify-center">
//                     <FaRocket className="text-2xl text-[#081C34]" />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Floating */}
//             <motion.div
//               animate={{ y: [0, -8, 0] }}
//               transition={{ duration: 3, repeat: Infinity }}
//               className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-5 shadow-xl"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="w-12 h-12 rounded-xl bg-[#FFF]/10 flex items-center justify-center">
//                   <FaBolt
//                     className="text-xl"
//                     style={{ color: BRAND.gold.primary }}
//                   />
//                 </div>

//                 <div>
//                   <h4
//                     className="font-black text-lg"
//                     style={{ color: BRAND.navy.dark }}
//                   >
//                     Agile Delivery
//                   </h4>
//                   <p className="text-xs text-gray-500">
//                     Fast & Scalable Solutions
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== SERVICES ====================
// const ServicesSection = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 lg:px-8">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span
//             className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
//             style={{
//               background: "#12324f08",
//               color: BRAND.navy.dark,
//             }}
//           >
//             What We Build
//           </span>

//           <h2
//             className="text-4xl lg:text-5xl font-black mb-6"
//             style={{ color: BRAND.navy.dark }}
//           >
//             End-to-End{" "}
//             <span
//               style={{
//                 backgroundImage: BRAND.gold.gradient,
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               Application Development
//             </span>
//           </h2>

//           <p className="text-lg text-slate-500 leading-relaxed">
//             Delivering enterprise-grade applications powered by innovation,
//             scalability, and modern digital engineering.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {developmentServices.map((service, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ y: -10 }}
//               className="group rounded-3xl p-8 transition-all duration-500 relative overflow-hidden"
//               style={{
//                 background:
//                   "linear-gradient(135deg, #081C34 0%, #102B4C 50%, #163B66 100%)",
//                 border: "1px solid rgba(255,255,255,0.06)",
//               }}
//             >
//               <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFF]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//               <div
//                 className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
//                 style={{
//                   background: "rgba(253,185,19,0.12)",
//                   border: "2px solid #FFF",
//                 }}
//               >
//                 <service.icon
//                   className="text-2xl"
//                   style={{ color: BRAND.gold.primary }}
//                 />
//               </div>

//               <h3 className="text-2xl font-bold text-white mb-4">
//                 {service.title}
//               </h3>

//               <p className="text-white/70 leading-relaxed mb-6">
//                 {service.desc}
//               </p>

//               {/* <button
//                 className="flex items-center gap-2 text-sm font-semibold"
//                 style={{ color: BRAND.gold.primary }}
//               >
//                 Learn More
//                 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </button> */}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== PROCESS ====================
// const ProcessSection = () => {
//   return (
//     <section
//       className="py-20"
//       style={{
//         background: BRAND.navy.dark,
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-4 lg:px-8">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <span
//             className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
//             style={{
//               background: "rgba(253,185,19,0.12)",
//               color: BRAND.gold.primary,
//             }}
//           >
//             Development Process
//           </span>

//           <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
//             Our Proven Development Workflow
//           </h2>

//           <p className="text-lg text-white/70">
//             A modern agile approach focused on innovation, speed, and business
//             impact.
//           </p>
//         </div>

//         {/* Steps */}
//         <div className="grid lg:grid-cols-4 gap-8">
//           {processData.map((item, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ y: -10 }}
//               className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
//             >
//               <div className="text-6xl font-black text-white/5 absolute top-4 right-5">
//                 {item.step}
//               </div>

//               <div className="w-16 h-16 rounded-2xl bg-[#FFF] flex items-center justify-center mb-6">
//                 <FaCube className="text-2xl text-[#081C34]" />
//               </div>

//               <h3 className="text-2xl font-bold text-white mb-4">
//                 {item.title}
//               </h3>

//               <p className="text-white/70 leading-relaxed">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== STATS ====================
// const StatsSection = () => {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 lg:px-8">
//         <div
//           className="rounded-[40px] p-10 lg:p-16"
//           style={{
//             background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 100%)`,
//           }}
//         >
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((item, idx) => (
//               <div key={idx} className="text-center">
//                 <h2
//                   className="text-5xl font-black mb-3"
//                   style={{ color: BRAND.gold.primary }}
//                 >
//                   {item.value}
//                 </h2>

//                 <p className="text-white/70">{item.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== CTA ====================
// const CTASection = () => {
//   return (
//     <section
//       className="py-24 relative overflow-hidden"
//       style={{
//         background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, #081C34 50%, ${BRAND.navy.mid} 100%)`,
//       }}
//     >
//       <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FFF]/10 blur-3xl rounded-full" />

//       <div className="max-w-5xl mx-auto px-4 lg:px-8 text-center relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div
//             className="w-24 h-24 rounded-3xl mx-auto flex items-center justify-center mb-8"
//             style={{
//               background: "rgba(253,185,19,0.12)",
//               border: "2px solid #FFF",
//             }}
//           >
//             <FaRocket
//               className="text-4xl"
//               style={{ color: BRAND.gold.primary }}
//             />
//           </div>

//           <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
//             Ready to Build Your Next{" "}
//             <span
//               style={{
//                 backgroundImage: BRAND.gold.gradient,
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               Digital Product
//             </span>
//             ?
//           </h2>

//           <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
//             Transform your ideas into scalable applications with our expert
//             development team, modern technologies, and agile delivery approach.
//           </p>

//           <div className="flex flex-wrap justify-center gap-4">
//             <button
//               className="px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:-translate-y-1"
//               style={{
//                 background: BRAND.gold.gradient,
//                 color: BRAND.navy.dark,
//               }}
//             >
//               Schedule Consultation
//             </button>

//             <button className="px-10 py-5 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all duration-300">
//               View Portfolio
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // ==================== MAIN PAGE ====================
// const ApplicationDevelopmentPage = () => {
//   return (
//     <main className="overflow-hidden">
//       {/* Banner */}
//       {/* <div
//         className="relative w-full min-h-[70vh] bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${banner})`,
//         }}
//       >
//         <div className="absolute inset-0 bg-black/30" />
//       </div> */}

//       <HeroSection />
//       <ServicesSection />
//       <ProcessSection />
//       <StatsSection />
//       <CTASection />
//     </main>
//   );
// };

// export default ApplicationDevelopmentPage;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaDatabase,
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaStar,
  FaAward,
  FaLaptopCode,
  FaServer,
  FaBrain,
  FaBolt,
  FaCube,
  FaProjectDiagram,
  FaArrowRight,
} from "react-icons/fa";
import AnimatedText from "../../components/common/AnimatedText";

/*
  Brand palette (from the Innovise logo) — see index.css
  navy    #0b1849  -> primary-900  (dark sections, headings)
  blue    #013dfb  -> primary-500  (buttons, links, icons on white)
  aqua    #0cf0d1  -> accent-400   (highlights on navy only)
  white   #ffffff
*/

/* ============ DATA ============ */
const developmentServices = [
  {
    icon: FaLaptopCode,
    title: "Custom Web Applications",
    desc: "Scalable enterprise-grade web applications tailored to your business workflows.",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    desc: "High-performance iOS & Android applications with seamless user experience.",
  },
  {
    icon: FaCloud,
    title: "Cloud Native Development",
    desc: "Modern cloud-ready applications optimized for scalability and security.",
  },
  {
    icon: FaDatabase,
    title: "Enterprise Systems",
    desc: "Robust ERP, CRM, and business-critical enterprise application development.",
  },
  {
    icon: FaProjectDiagram,
    title: "API & Integrations",
    desc: "Secure APIs and third-party integrations for connected digital ecosystems.",
  },
  {
    icon: FaBrain,
    title: "AI Powered Solutions",
    desc: "Intelligent applications leveraging AI, automation, and analytics.",
  },
];

const processData = [
  {
    step: "01",
    title: "Discovery",
    desc: "Understanding your business goals, workflows, and challenges.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Creating intuitive UI/UX and scalable architecture planning.",
  },
  {
    step: "03",
    title: "Development",
    desc: "Building secure, modern, and high-performing digital solutions.",
  },
  {
    step: "04",
    title: "Deployment",
    desc: "Launching applications with cloud scalability and monitoring.",
  },
];

const stats = [
  { value: "250+", label: "Projects Delivered" },
  { value: "99.9%", label: "Application Uptime" },
  { value: "15+", label: "Industries Served" },
  { value: "24/7", label: "Support & Monitoring" },
];

/* Pipeline cards alternate the two brand accents */
const pipelineCards = [
  { icon: FaCode, title: "Frontend", tone: "aqua" },
  { icon: FaServer, title: "Backend", tone: "blue" },
  { icon: FaCloud, title: "Cloud", tone: "blue" },
  { icon: FaShieldAlt, title: "Security", tone: "aqua" },
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
    solid:
      "bg-primary-500 text-white shadow-lg shadow-primary-500/25 hover:bg-primary-600",
    accent:
      "bg-accent-400 text-primary-900 shadow-lg shadow-accent-400/20 hover:bg-accent-300",
    outline:
      "border border-white/40 text-white hover:border-accent-400 hover:text-accent-400",
  };
  const cls = `inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900 ${styles[variant]}`;
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
    <div className="mb-3 flex items-center justify-center gap-3">
      <span className="brand-rule" aria-hidden="true" />
      <p
        className={`text-sm font-semibold uppercase tracking-widest ${dark ? "text-accent-400" : "text-primary-500"}`}
      >
        {eyebrow}
      </p>
      <span className="brand-rule rotate-180" aria-hidden="true" />
    </div>
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

/* ============ HERO ============ */
const DevPanel = () => (
  <div className="relative">
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl lg:p-8">
      {/* Window header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex gap-2" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-accent-400" />
          <span className="h-3 w-3 rounded-full bg-primary-500" />
          <span className="h-3 w-3 rounded-full bg-white/30" />
        </div>
        <span className="text-xs text-white/60">Development Pipeline</span>
      </div>

      {/* Pipeline cards */}
      <div className="grid grid-cols-2 gap-4">
        {pipelineCards.map((card, i) => (
          <div
            key={card.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <card.icon
              className={`mb-4 text-3xl ${card.tone === "aqua" ? "text-accent-400" : "text-primary-400"}`}
            />
            <h4 className="font-bold text-white">{card.title}</h4>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-400"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Active projects */}
      <div className="mt-6 flex items-center justify-between rounded-2xl border border-accent-400/20 bg-accent-400/10 p-5">
        <div>
          <p className="mb-1 text-sm text-white/70">Active Development</p>
          <p className="text-3xl font-black text-white">18 Projects</p>
        </div>
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-400 text-2xl text-primary-900">
          <FaRocket />
        </span>
      </div>
    </div>

    {/* Floating badge */}
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="absolute -bottom-5 -left-5 rounded-2xl border-t-2 border-accent-400 bg-white p-5 shadow-xl shadow-primary-900/30"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-xl text-primary-500">
          <FaBolt />
        </span>
        <div>
          <p className="text-lg font-black text-primary-900">Agile Delivery</p>
          <p className="text-xs text-primary-900/70">
            Fast &amp; Scalable Solutions
          </p>
        </div>
      </div>
    </motion.div>
  </div>
);

const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-900 to-primary-700 py-16 lg:py-24">
    <div
      className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent-400/10 blur-3xl"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl"
      aria-hidden="true"
    />
    <Container className="relative grid items-center gap-16 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-accent-400/30 bg-accent-400/10 px-5 py-2">
          <FaCode className="text-accent-400" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-400">
            <AnimatedText text="Application Development Services" />
          </span>
        </div>

        <h1 className="mb-6 text-4xl font-black leading-[1.1] text-white md:text-5xl lg:text-6xl">
          Building Modern Digital Products That Drive{" "}
          <span className="bg-gradient-to-r from-white to-accent-400 bg-clip-text text-transparent md:text-5xl">
            Business Growth
          </span>
        </h1>

        <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/80">
          We design and develop scalable web, mobile, and enterprise
          applications with modern architecture, cloud-native technologies, and
          exceptional user experiences.
        </p>

        <div className="mb-10 flex flex-wrap gap-4">
          <Button href="/contact" variant="accent">
            Start Your Project <FaArrowRight size={12} />
          </Button>
          <Button href="#services" variant="outline">
            Explore Solutions
          </Button>
        </div>

        <div className="flex flex-wrap gap-6 border-t border-white/10 pt-8">
          {[
            { icon: FaAward, text: "Enterprise Solutions" },
            { icon: FaUsers, text: "Expert Developers" },
            { icon: FaStar, text: "Client Satisfaction" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <item.icon className="text-sm text-accent-400" />
              <span className="text-sm text-white/75">{item.text}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <DevPanel />
      </motion.div>
    </Container>
  </section>
);

/* ============ SERVICES ============ */
const ServicesSection = () => (
  <section id="services" className="bg-white py-10 lg:py-12">
    <Container>
      <SectionHead
        eyebrow="What We Build"
        title="End-to-End Application Development"
        text="Delivering enterprise-grade applications powered by innovation, scalability, and modern digital engineering."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {developmentServices.map((service, i) => (
          <motion.article
            key={service.title}
            {...fade(i)}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-900 to-primary-800 p-8 shadow-lg shadow-primary-900/15 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <span
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-500 to-accent-400"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden="true"
            />
            <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent-400 to-primary-500 text-2xl text-white">
              <service.icon />
            </span>
            <h3 className="mb-3 text-xl font-bold text-white">
              {service.title}
            </h3>
            <p className="leading-relaxed text-white/75">{service.desc}</p>
          </motion.article>
        ))}
      </div>
    </Container>
  </section>
);

/* ============ PROCESS ============ */
const ProcessSection = () => (
  <section className="bg-primary-900 py-10 lg:py-12">
    <Container>
      <SectionHead
        dark
        eyebrow="Development Process"
        title="Our Proven Development Workflow"
        text="A modern agile approach focused on innovation, speed, and business impact."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {processData.map((item, i) => (
          <motion.div
            key={item.step}
            {...fade(i)}
            className="relative rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-accent-400/40 hover:bg-white/10"
          >
            <span
              className="absolute right-5 top-4 text-6xl font-black text-white/5"
              aria-hidden="true"
            >
              {item.step}
            </span>
            <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent-400 text-2xl text-primary-900">
              <FaCube />
            </span>
            <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
            <p className="leading-relaxed text-white/70">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);

/* ============ STATS ============ */
const StatsSection = () => (
  <section className="bg-primary-50 py-10 lg:py-12">
    <Container>
      <div className="rounded-3xl bg-primary-900 p-10 shadow-xl shadow-primary-900/20 lg:p-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, i) => (
            <motion.div key={item.label} {...fade(i)} className="text-center">
              <p className="mb-2 bg-gradient-to-r from-accent-400 to-white bg-clip-text text-5xl font-black text-transparent">
                {item.value}
              </p>
              <p className="text-white/75">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

/* ============ CTA ============ */
const CTASection = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-900 to-primary-700 py-16 lg:py-24">
    <div
      className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-accent-400/10 blur-3xl"
      aria-hidden="true"
    />
    <div className="relative mx-auto max-w-5xl px-4 text-center lg:px-8">
      <motion.div {...fade()}>
        <span className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-accent-400/30 bg-accent-400/10 text-3xl text-accent-400">
          <FaRocket />
        </span>
        <h2 className="mb-6 text-4xl font-black leading-tight text-white lg:text-5xl">
          Ready to Build Your Next{" "}
          <span className="bg-gradient-to-r from-white to-accent-400 bg-clip-text text-transparent">
            Digital Product
          </span>
          ?
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-white/80">
          Transform your ideas into scalable applications with our expert
          development team, modern technologies, and agile delivery approach.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="accent">
            Schedule Consultation <FaArrowRight size={12} />
          </Button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-white/40 px-6 py-3 text-base font-semibold text-white transition-colors hover:border-accent-400 hover:text-accent-400"
          >
            View Portfolio
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ============ PAGE ============ */
const ApplicationDevelopmentPage = () => (
  <main role="main" className="overflow-hidden">
    <HeroSection />
    <ServicesSection />
    <ProcessSection />
    <StatsSection />
    <CTASection />
  </main>
);

export default ApplicationDevelopmentPage;
