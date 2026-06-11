// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Container from "../ui/Container";
// import SectionHeader from "../ui/SectionHeader";
// import AnimatedSection from "../ui/AnimatedSection";
// import Card from "../ui/Card";
// import {
//   FaExclamationTriangle,
//   FaLightbulb,
//   FaChartBar,
//   FaCheckCircle,
//   FaExternalLinkAlt,
// } from "react-icons/fa";
// import { caseStudiesData } from "../../data/caseStudiesData";

// const CaseStudies = () => {
//   const [activeCase, setActiveCase] = useState(0);

//   const currentStudy = caseStudiesData[activeCase];

//   return (
//     <section className="py-24 bg-gray-50">
//       <Container>
//         <SectionHeader
//           badge="Success Stories"
//           title="Proven Results, Real Impact"
//           subtitle="Discover how we've helped leading enterprises achieve their digital transformation goals"
//         />

//         <div className="grid lg:grid-cols-12 gap-8">
//           {/* Case Study Selector */}
//           <div className="lg:col-span-4 space-y-4">
//             {caseStudiesData.map((study, index) => (
//               <button
//                 key={study.id}
//                 onClick={() => setActiveCase(index)}
//                 className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
//                   activeCase === index
//                     ? "border-primary-500 bg-primary-50 shadow-lg"
//                     : "border-gray-200 bg-white hover:border-primary-200 hover:shadow-md"
//                 }`}
//               >
//                 <div className="flex items-start justify-between mb-3">
//                   <span
//                     className={`text-xs font-bold px-3 py-1 rounded-full ${
//                       activeCase === index
//                         ? "bg-primary-600 text-white"
//                         : "bg-gray-100 text-gray-600"
//                     }`}
//                   >
//                     {study.industry.split(" ")[0]}
//                   </span>
//                   <span className="text-xs text-gray-500">
//                     {study.duration}
//                   </span>
//                 </div>
//                 <h4
//                   className={`font-bold mb-1 ${
//                     activeCase === index ? "text-primary-900" : "text-gray-900"
//                   }`}
//                 >
//                   {study.client}
//                 </h4>
//                 <p className="text-sm text-gray-500 line-clamp-2">
//                   {study.challenge.substring(0, 80)}...
//                 </p>
//               </button>
//             ))}

//             <AnimatedSection delay={3}>
//               <button className="w-full py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-600 font-semibold hover:border-primary-400 hover:text-primary-600 transition-colors">
//                 View All Case Studies{" "}
//                 <FaExternalLinkAlt className="inline ml-2" />
//               </button>
//             </AnimatedSection>
//           </div>

//           {/* Case Study Detail */}
//           <div className="lg:col-span-8">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeCase}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -20 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <Card className="h-full p-8 lg:p-10">
//                   {/* Header */}
//                   <div className="mb-8 pb-8 border-b border-gray-100">
//                     <div className="flex flex-wrap items-center gap-3 mb-4">
//                       <span className="px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-bold rounded-full">
//                         {currentStudy.industry}
//                       </span>
//                       <span className="text-sm text-gray-500">
//                         Team: {currentStudy.teamSize}
//                       </span>
//                     </div>

//                     <h3 className="text-3xl font-bold text-gray-900 mb-3">
//                       {currentStudy.client}
//                     </h3>

//                     <div className="flex flex-wrap gap-2 mt-4">
//                       {currentStudy.technologies.map((tech, idx) => (
//                         <span
//                           key={idx}
//                           className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Challenge */}
//                   <div className="mb-8">
//                     <div className="flex items-center gap-3 mb-4">
//                       <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
//                         <FaExclamationTriangle className="text-red-600" />
//                       </div>
//                       <h4 className="text-xl font-bold text-gray-900">
//                         The Challenge
//                       </h4>
//                     </div>
//                     <p className="text-gray-700 leading-relaxed pl-13">
//                       {currentStudy.challenge}
//                     </p>
//                   </div>

//                   {/* Solution */}
//                   <div className="mb-8">
//                     <div className="flex items-center gap-3 mb-4">
//                       <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
//                         <FaLightbulb className="text-green-600" />
//                       </div>
//                       <h4 className="text-xl font-bold text-gray-900">
//                         Our Solution
//                       </h4>
//                     </div>
//                     <p className="text-gray-700 leading-relaxed pl-13">
//                       {currentStudy.solution}
//                     </p>
//                   </div>

//                   {/* Results */}
//                   <div>
//                     <div className="flex items-center gap-3 mb-5">
//                       <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
//                         <FaChartBar className="text-blue-600" />
//                       </div>
//                       <h4 className="text-xl font-bold text-gray-900">
//                         Results Achieved
//                       </h4>
//                     </div>

//                     <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                       {currentStudy.results.map((result, idx) => (
//                         <div
//                           key={idx}
//                           className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 text-center border border-green-100"
//                         >
//                           <FaCheckCircle className="text-green-600 text-2xl mx-auto mb-3" />
//                           <div className="text-3xl font-bold text-green-800 mb-1">
//                             {result.value}
//                           </div>
//                           <div className="text-sm text-green-700 font-medium">
//                             {result.metric}
//                           </div>
//                           <div className="text-xs text-green-600 mt-1">
//                             {result.change}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </Card>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default CaseStudies;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Container from "../ui/Container";
// import {
//   FaExclamationTriangle,
//   FaLightbulb,
//   FaChartLine,
//   FaCheckCircle,
//   FaArrowRight,
//   FaQuoteLeft,
//   FaExternalLinkAlt,
// } from "react-icons/fa";
// import { caseStudiesData } from "../../data/caseStudiesData";

// const CaseStudiesPremium = () => {
//   const [activeCase, setActiveCase] = useState(0);
//   const currentStudy = caseStudiesData[activeCase];

//   return (
//     <section className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-black overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0">
//         <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
//         <div
//           className="absolute inset-0 opacity-[0.02]"
//           style={{
//             backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//             backgroundSize: "40px 40px",
//           }}
//         />
//       </div>

//       <Container>
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16 lg:mb-20"
//         >
//           <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.15em] text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-6">
//             <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
//             Success Stories
//           </span>

//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
//             Proven{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
//               Results
//             </span>
//             , Real Impact
//           </h2>

//           <p className="text-gray-400 max-w-2xl mx-auto text-lg">
//             Discover how we've helped leading enterprises achieve their digital
//             transformation goals
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
//           {/* LEFT - Tab Navigation */}
//           <div className="lg:col-span-4 space-y-3">
//             {caseStudiesData.map((study, index) => (
//               <motion.button
//                 key={study.id}
//                 onClick={() => setActiveCase(index)}
//                 whileHover={{ x: 8 }}
//                 whileTap={{ scale: 0.98 }}
//                 className={`relative w-full text-left p-5 rounded-2xl transition-all duration-500 group overflow-hidden ${
//                   activeCase === index
//                     ? "bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 border border-cyan-500/30 shadow-lg shadow-cyan-500/5"
//                     : "bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/10"
//                 }`}
//               >
//                 {/* Active Indicator Bar */}
//                 {activeCase === index && (
//                   <motion.div
//                     layoutId="activeTab"
//                     className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-r"
//                   />
//                 )}

//                 <div className="flex items-start justify-between mb-3">
//                   <span
//                     className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
//                       activeCase === index
//                         ? "bg-cyan-500/30 text-cyan-300"
//                         : "bg-white/10 text-gray-400 group-hover:bg-white/15"
//                     }`}
//                   >
//                     {study.industry.split(" ")[0]}
//                   </span>
//                   <span className="text-xs text-gray-500">
//                     {study.duration}
//                   </span>
//                 </div>

//                 <h4
//                   className={`font-semibold mb-1.5 transition-colors ${
//                     activeCase === index
//                       ? "text-white"
//                       : "text-gray-300 group-hover:text-white"
//                   }`}
//                 >
//                   {study.client}
//                 </h4>

//                 <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
//                   {study.challenge.substring(0, 70)}...
//                 </p>

//                 {/* Hover Arrow */}
//                 <div
//                   className={`mt-3 flex items-center gap-1 text-xs font-medium transition-all duration-300 ${
//                     activeCase === index
//                       ? "text-cyan-400"
//                       : "text-transparent group-hover:text-cyan-400"
//                   }`}
//                 >
//                   View Details <FaArrowRight className="text-[10px]" />
//                 </div>
//               </motion.button>
//             ))}

//             {/* View All Button */}
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="w-full mt-4 py-4 rounded-2xl border border-dashed border-white/20 text-gray-400 font-medium hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300 flex items-center justify-center gap-2 group"
//             >
//               View All Case Studies
//               <FaExternalLinkAlt className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//             </motion.button>
//           </div>

//           {/* RIGHT - Content Panel */}
//           <div className="lg:col-span-8">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeCase}
//                 initial={{ opacity: 0, y: 20, scale: 0.98 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 exit={{ opacity: 0, y: -20, scale: 0.98 }}
//                 transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
//                 className="relative"
//               >
//                 <div className="relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
//                   {/* Gradient Header */}
//                   <div className="relative p-8 lg:p-10 pb-6 border-b border-white/10">
//                     <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />

//                     <div className="relative flex flex-wrap items-center gap-3 mb-4">
//                       <span className="px-4 py-1.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-sm font-bold rounded-full border border-cyan-500/30">
//                         {currentStudy.industry}
//                       </span>
//                       <span className="flex items-center gap-1.5 text-sm text-gray-400">
//                         <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//                         Team: {currentStudy.teamSize}
//                       </span>
//                     </div>

//                     <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
//                       {currentStudy.client}
//                     </h3>

//                     {/* Tech Tags */}
//                     <div className="flex flex-wrap gap-2">
//                       {currentStudy.technologies
//                         .slice(0, 5)
//                         .map((tech, idx) => (
//                           <motion.span
//                             key={idx}
//                             initial={{ opacity: 0, scale: 0.8 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             transition={{ delay: idx * 0.05 }}
//                             className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-medium rounded-lg border border-white/10 hover:bg-white/10 transition-colors cursor-default"
//                           >
//                             {tech}
//                           </motion.span>
//                         ))}
//                     </div>
//                   </div>

//                   {/* Content Body */}
//                   <div className="p-8 lg:p-10 space-y-8">
//                     {/* Challenge Section */}
//                     <div className="group">
//                       <div className="flex items-center gap-3 mb-4">
//                         <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center border border-red-500/20 group-hover:from-red-500/30 group-hover:to-orange-500/30 transition-colors">
//                           <FaExclamationTriangle className="text-red-400" />
//                         </div>
//                         <h4 className="text-xl font-bold text-white">
//                           The Challenge
//                         </h4>
//                       </div>
//                       <p className="text-gray-400 leading-relaxed pl-14">
//                         {currentStudy.challenge}
//                       </p>
//                     </div>

//                     {/* Solution Section */}
//                     <div className="group">
//                       <div className="flex items-center gap-3 mb-4">
//                         <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center border border-emerald-500/20 group-hover:from-emerald-500/30 group-hover:to-green-500/30 transition-colors">
//                           <FaLightbulb className="text-emerald-400" />
//                         </div>
//                         <h4 className="text-xl font-bold text-white">
//                           Our Solution
//                         </h4>
//                       </div>
//                       <p className="text-gray-400 leading-relaxed pl-14">
//                         {currentStudy.solution}
//                       </p>
//                     </div>

//                     {/* Results Grid */}
//                     <div>
//                       <div className="flex items-center gap-3 mb-6">
//                         <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/20">
//                           <FaChartLine className="text-blue-400" />
//                         </div>
//                         <h4 className="text-xl font-bold text-white">
//                           Results Achieved
//                         </h4>
//                       </div>

//                       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pl-14">
//                         {currentStudy.results.map((result, idx) => (
//                           <motion.div
//                             key={idx}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: idx * 0.1 + 0.3 }}
//                             className="group/result relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
//                           >
//                             <FaCheckCircle className="text-emerald-400 text-xl mb-3 group-hover/result:scale-110 transition-transform" />

//                             <motion.div
//                               initial={{ scale: 0 }}
//                               animate={{ scale: 1 }}
//                               transition={{
//                                 delay: idx * 0.1 + 0.5,
//                                 type: "spring",
//                               }}
//                               className="text-3xl font-bold text-white mb-1"
//                             >
//                               {result.value}
//                             </motion.div>

//                             <div className="text-sm text-gray-400 font-medium">
//                               {result.metric}
//                             </div>
//                             <div className="text-xs text-emerald-400 mt-1 font-semibold">
//                               {result.change}
//                             </div>

//                             {/* Hover Glow */}
//                             <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-cyan-500/0 group-hover/result:from-emerald-500/10 group-hover/result:to-cyan-500/5 transition-all duration-500" />
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Quote Footer */}
//                   <div className="mx-8 lg:mx-10 mb-8 lg:mb-10 p-6 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-purple-500/5 border-l-4 border-cyan-500/50">
//                     <FaQuoteLeft className="text-cyan-500/50 text-2xl mb-3" />
//                     <p className="text-gray-300 italic text-sm leading-relaxed">
//                       "
//                       {currentStudy.quote ||
//                         "This transformation has fundamentally changed how we operate and serve our customers."}
//                       "
//                     </p>
//                     <p className="text-cyan-400 text-xs mt-2 font-semibold">
//                       — Client Testimonial
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default CaseStudiesPremium;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../ui/Container";
import {
  FaExclamationTriangle,
  FaLightbulb,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
  FaQuoteLeft,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { caseStudiesData } from "../../data/caseStudiesData";

// 🎨 INNOVISE IT BRAND COLORS
const BRAND = {
  navy: {
    dark: "#12324f",
    mid: "#12324f",
    light: "#143A63",
    lighter: "#1A4570",
  },
  gold: {
    primary: "#FDB913",
    light: "#FFD54F",
    dark: "#F59E0B",
    gradient: "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
  },
};

const CaseStudiesBrand = () => {
  const [activeCase, setActiveCase] = useState(0);
  const currentStudy = caseStudiesData[activeCase];

  return (
    <section
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${BRAND.navy.dark}, ${BRAND.navy.mid}, ${BRAND.navy.lighter})`,
      }}
    >
      {/* ✨ Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${BRAND.gold.primary} 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating Orbs - Brand Colors */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.08]"
          style={{ background: BRAND.gold.primary }}
        />
        <motion.div
          animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.05]"
          style={{ background: BRAND.navy.lighter }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-[0.03]"
          style={{ background: BRAND.gold.light }}
        />
      </div>

      <Container>
        {/* ==================== HEADER ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.15em] border mb-6"
            style={{
              background: `${BRAND.gold.primary}15`,
              color: BRAND.gold.primary,
              borderColor: `${BRAND.gold.primary}30`,
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: BRAND.gold.primary }}
            />
            Success Stories
          </span>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Proven{" "}
            <span
              style={{
                backgroundImage: BRAND.gold.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Results
            </span>
            , Real Impact
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Discover how we've helped leading enterprises achieve their digital
            transformation goals
          </p>
        </motion.div>

        {/* ==================== MAIN CONTENT GRID ==================== */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* ========== LEFT - TAB NAVIGATION ========== */}
          <div className="lg:col-span-4 space-y-3">
            {caseStudiesData.map((study, index) => (
              <motion.button
                key={study.id}
                onClick={() => setActiveCase(index)}
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.98 }}
                className={`relative w-full text-left p-5 rounded-2xl transition-all duration-500 group overflow-hidden ${
                  activeCase === index ? "shadow-lg" : "hover:bg-white/[0.04]"
                }`}
                style={{
                  background:
                    activeCase === index
                      ? `linear-gradient(135deg, ${BRAND.gold.primary}15, ${BRAND.navy.lighter}10)`
                      : "rgba(255,255,255,0.02)",
                  border:
                    activeCase === index
                      ? `1px solid ${BRAND.gold.primary}40`
                      : "1px solid rgba(255,255,255,0.06)",
                  boxShadow:
                    activeCase === index
                      ? `0 8px 32px ${BRAND.gold.primary}15`
                      : "none",
                }}
              >
                {/* Active Indicator Bar */}
                {activeCase === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-r"
                    style={{ background: BRAND.gold.gradient }}
                  />
                )}

                <div className="flex items-start justify-between mb-3">
                  <span
                    className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                    style={{
                      background:
                        activeCase === index
                          ? `${BRAND.gold.primary}30`
                          : "rgba(255,255,255,0.08)",
                      color:
                        activeCase === index ? BRAND.gold.primary : "#64748b",
                    }}
                  >
                    {study.industry.split(" ")[0]}
                  </span>
                  <span className="text-xs text-gray-500">
                    {study.duration}
                  </span>
                </div>

                <h4
                  className={`font-semibold mb-1.5 transition-colors ${
                    activeCase === index
                      ? "text-white"
                      : "text-gray-300 group-hover:text-white"
                  }`}
                >
                  {study.client}
                </h4>

                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                  {study.challenge.substring(0, 70)}...
                </p>

                {/* Hover Arrow */}
                <div
                  className={`mt-3 flex items-center gap-1 text-xs font-medium transition-all duration-300 ${
                    activeCase === index
                      ? ""
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                  style={{
                    color:
                      activeCase === index
                        ? BRAND.gold.primary
                        : BRAND.gold.primary,
                  }}
                >
                  View Details <FaArrowRight className="text-[10px]" />
                </div>
              </motion.button>
            ))}

            {/* View All Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-4 py-4 rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
              style={{
                border: `1px dashed rgba(255,255,255,0.15)`,
                color: "#64748b",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${BRAND.gold.primary}50`;
                e.currentTarget.style.color = BRAND.gold.primary;
                e.currentTarget.style.background = `${BRAND.gold.primary}08`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                e.currentTarget.style.color = "#64748b";
                e.currentTarget.style.background = "transparent";
              }}
            >
              View All Case Studies
              <FaExternalLinkAlt className="text-xs transition-transform" />
            </motion.button>
          </div>

          {/* ========== RIGHT - CONTENT PANEL ========== */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="relative"
              >
                <div
                  className="relative backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                    border: `1px solid rgba(253,185,19,0.12)`,
                  }}
                >
                  {/* ======== GRADIENT HEADER ======== */}
                  <div
                    className="relative p-8 lg:p-10 pb-6"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    {/* Header Background Glow */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, ${BRAND.gold.primary}08, transparent 50%, ${BRAND.navy.lighter}08)`,
                      }}
                    />

                    <div className="relative flex flex-wrap items-center gap-3 mb-4">
                      {/* Industry Badge */}
                      <span
                        className="px-4 py-1.5 text-sm font-bold rounded-full border"
                        style={{
                          background: `${BRAND.gold.primary}18`,
                          color: BRAND.gold.primary,
                          borderColor: `${BRAND.gold.primary}35`,
                        }}
                      >
                        {currentStudy.industry}
                      </span>

                      {/* Team Size Indicator */}
                      <span className="flex items-center gap-1.5 text-sm text-gray-400">
                        <span
                          className="w-2 h-2 rounded-full animate-pulse"
                          style={{ background: "#22C55E" }}
                        />
                        Team: {currentStudy.teamSize}
                      </span>
                    </div>

                    {/* Client Name */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                      {currentStudy.client}
                    </h3>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {currentStudy.technologies
                        .slice(0, 5)
                        .map((tech, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="px-3 py-1 text-xs font-medium rounded-lg border transition-colors cursor-default"
                            style={{
                              background: "rgba(255,255,255,0.04)",
                              color: "rgba(255,255,255,0.65)",
                              borderColor: "rgba(255,255,255,0.08)",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = `${BRAND.gold.primary}12`;
                              e.currentTarget.style.borderColor = `${BRAND.gold.primary}30`;
                              e.currentTarget.style.color = BRAND.gold.primary;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background =
                                "rgba(255,255,255,0.04)";
                              e.currentTarget.style.borderColor =
                                "rgba(255,255,255,0.08)";
                              e.currentTarget.style.color =
                                "rgba(255,255,255,0.65)";
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                    </div>
                  </div>

                  {/* ======== CONTENT BODY ======== */}
                  <div className="p-8 lg:p-10 space-y-8">
                    {/* Challenge Section */}
                    <div className="group">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center border transition-colors"
                          style={{
                            background: "rgba(239,68,68,0.12)",
                            borderColor: "rgba(239,68,68,0.2)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                              "rgba(239,68,68,0.2)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background =
                              "rgba(239,68,68,0.12)";
                          }}
                        >
                          <FaExclamationTriangle className="text-red-400" />
                        </div>
                        <h4 className="text-xl font-bold text-white">
                          The Challenge
                        </h4>
                      </div>
                      <p className="text-gray-400 leading-relaxed pl-14">
                        {currentStudy.challenge}
                      </p>
                    </div>

                    {/* Solution Section */}
                    <div className="group">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center border transition-colors"
                          style={{
                            background: `${BRAND.gold.primary}12`,
                            borderColor: `${BRAND.gold.primary}25`,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = `${BRAND.gold.primary}22`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = `${BRAND.gold.primary}12`;
                          }}
                        >
                          <FaLightbulb style={{ color: BRAND.gold.primary }} />
                        </div>
                        <h4 className="text-xl font-bold text-white">
                          Our Solution
                        </h4>
                      </div>
                      <p className="text-gray-400 leading-relaxed pl-14">
                        {currentStudy.solution}
                      </p>
                    </div>

                    {/* Results Grid */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center border"
                          style={{
                            background: `${BRAND.navy.lighter}20`,
                            borderColor: `${BRAND.navy.lighter}35`,
                          }}
                        >
                          <FaChartLine style={{ color: BRAND.navy.lighter }} />
                        </div>
                        <h4 className="text-xl font-bold text-white">
                          Results Achieved
                        </h4>
                      </div>

                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pl-14">
                        {currentStudy.results.map((result, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 + 0.3 }}
                            className="group/result relative overflow-hidden rounded-2xl p-5 transition-all duration-300 cursor-default"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                              border: "1px solid rgba(255,255,255,0.08)",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = `${BRAND.gold.primary}40`;
                              e.currentTarget.style.boxShadow = `0 8px 24px ${BRAND.gold.primary}12`;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor =
                                "rgba(255,255,255,0.08)";
                              e.currentTarget.style.boxShadow = "none";
                            }}
                          >
                            {/* Check Icon */}
                            <FaCheckCircle
                              className="text-xl mb-3 transition-transform group-hover/result:scale-110"
                              style={{ color: BRAND.gold.primary }}
                            />

                            {/* Value */}
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                delay: idx * 0.1 + 0.5,
                                type: "spring",
                              }}
                              className="text-3xl font-bold text-white mb-1"
                              style={{
                                backgroundImage: BRAND.gold.gradient,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                              }}
                            >
                              {result.value}
                            </motion.div>

                            {/* Metric Label */}
                            <div className="text-sm text-gray-400 font-medium">
                              {result.metric}
                            </div>

                            {/* Change Indicator */}
                            <div
                              className="text-xs mt-1 font-semibold"
                              style={{ color: "#22C55E" }}
                            >
                              {result.change}
                            </div>

                            {/* Hover Glow Effect */}
                            <div
                              className="absolute inset-0 pointer-events-none opacity-0 group-hover/result:opacity-100 transition-opacity duration-500"
                              style={{
                                background: `radial-gradient(circle at center, ${BRAND.gold.primary}10, transparent 70%)`,
                              }}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ======== QUOTE FOOTER ======== */}
                  <div
                    className="mx-8 lg:mx-10 mb-8 lg:mb-10 p-6 rounded-2xl"
                    style={{
                      background: `linear-gradient(to right, ${BRAND.gold.primary}08, ${BRAND.navy.lighter}08)`,
                      borderLeft: `4px solid ${BRAND.gold.primary}`,
                    }}
                  >
                    <FaQuoteLeft
                      className="text-2xl mb-3"
                      style={{ color: `${BRAND.gold.primary}50` }}
                    />
                    <p className="text-gray-300 italic text-sm leading-relaxed">
                      "
                      {currentStudy.quote ||
                        "This transformation has fundamentally changed how we operate and serve our customers."}
                      "
                    </p>
                    <p
                      className="text-xs mt-2 font-semibold"
                      style={{ color: BRAND.gold.primary }}
                    >
                      — Client Testimonial
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>

      {/* Bottom Gradient Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${BRAND.navy.lighter}, transparent)`,
        }}
      />
    </section>
  );
};

export default CaseStudiesBrand;
