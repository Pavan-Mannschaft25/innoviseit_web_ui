// // // // import React from "react";
// // // // import { Link } from "react-router-dom";
// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import * as FaIcons from "react-icons/fa";
// // // // import { navData } from "../../data/navData";

// // // // const MobileMenu = ({ isOpen, onClose, currentPage }) => {
// // // //   const IconComponent = ({ iconName }) => {
// // // //     const Icon = FaIcons[iconName] || FaIcons.FaCircle;
// // // //     return <Icon className="text-lg" />;
// // // //   };

// // // //   return (
// // // //     <AnimatePresence>
// // // //       {isOpen && (
// // // //         <>
// // // //           {/* Backdrop */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             exit={{ opacity: 0 }}
// // // //             className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
// // // //             onClick={onClose}
// // // //           />

// // // //           {/* Panel */}
// // // //           <motion.div
// // // //             initial={{ x: "100%" }}
// // // //             animate={{ x: 0 }}
// // // //             exit={{ x: "100%" }}
// // // //             transition={{
// // // //               type: "tween",
// // // //               duration: 0.3,
// // // //               ease: [0.22, 1, 0.36, 1],
// // // //             }}
// // // //             className="fixed top-0 right-0 w-[85%] max-w-md h-full bg-white z-50 overflow-y-auto shadow-2xl lg:hidden"
// // // //           >
// // // //             {/* Header */}
// // // //             <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-5 flex items-center justify-between z-10">
// // // //               <div className="font-bold text-xl">
// // // //                 <span className="text-primary-900">Innovise</span>
// // // //                 <span className="text-accent-500">IT</span>
// // // //               </div>

// // // //               <button
// // // //                 onClick={onClose}
// // // //                 className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
// // // //               >
// // // //                 <FaIcons.FaTimes className="text-lg" />
// // // //               </button>
// // // //             </div>

// // // //             {/* Navigation Links */}
// // // //             <nav className="p-6 space-y-6">
// // // //               {/* Main Pages */}
// // // //               <div className="space-y-2">
// // // //                 <Link
// // // //                   to="/"
// // // //                   onClick={onClose}
// // // //                   className={`block px-4 py-3 rounded-xl font-semibold transition-colors ${
// // // //                     currentPage === "/"
// // // //                       ? "bg-primary-50 text-primary-700"
// // // //                       : "text-gray-700 hover:bg-gray-50"
// // // //                   }`}
// // // //                 >
// // // //                   Home
// // // //                 </Link>

// // // //                 {/* <Link
// // // //                   to="/think"
// // // //                   onClick={onClose}
// // // //                   className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-colors ${
// // // //                     currentPage === "/think"
// // // //                       ? "bg-primary-50 text-primary-700"
// // // //                       : "text-gray-700 hover:bg-gray-50"
// // // //                   }`}
// // // //                 >
// // // //                   What We Think
// // // //                   <FaIcons.FaStar className="text-xs text-accent-500" />
// // // //                 </Link> */}

// // // //                 <Link
// // // //                   to="/careers"
// // // //                   onClick={onClose}
// // // //                   className={`block px-4 py-3 rounded-xl font-semibold transition-colors ${
// // // //                     currentPage === "/careers"
// // // //                       ? "bg-primary-50 text-primary-700"
// // // //                       : "text-gray-700 hover:bg-gray-50"
// // // //                   }`}
// // // //                 >
// // // //                   Careers
// // // //                 </Link>

// // // //                 <Link
// // // //                   to="/contact"
// // // //                   onClick={onClose}
// // // //                   className={`block px-4 py-3 rounded-xl font-semibold transition-colors ${
// // // //                     currentPage === "/contact"
// // // //                       ? "bg-primary-50 text-primary-700"
// // // //                       : "text-gray-700 hover:bg-gray-50"
// // // //                   }`}
// // // //                 >
// // // //                   Contact Us
// // // //                 </Link>
// // // //               </div>

// // // //               {/* Mega Menu Sections */}
// // // //               <div className="pt-6 border-t border-gray-100 space-y-6">
// // // //                 {/* What We Do */}
// // // //                 <div>
// // // //                   <h3 className="text-xs font-bold text-primary-900 uppercase tracking-wider mb-3 px-4">
// // // //                     What We Do
// // // //                   </h3>
// // // //                   <div className="space-y-1">
// // // //                     {navData.whatWeDo.map((section, idx) => (
// // // //                       <div key={idx} className="px-4 py-2">
// // // //                         <p className="text-xs font-semibold text-gray-500 mb-2">
// // // //                           {section.title}
// // // //                         </p>
// // // //                         <ul className="space-y-1 pl-2">
// // // //                           {section.items.slice(0, 3).map((item, itemIdx) => (
// // // //                             <li key={itemIdx}>
// // // //                               <Link
// // // //                                 to={item.path}
// // // //                                 onClick={onClose}
// // // //                                 className="flex items-center gap-2 py-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
// // // //                               >
// // // //                                 <IconComponent iconName={item.icon} />
// // // //                                 <span>{item.name}</span>
// // // //                               </Link>
// // // //                             </li>
// // // //                           ))}
// // // //                         </ul>
// // // //                       </div>
// // // //                     ))}
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Who We Are */}
// // // //                 <div>
// // // //                   <h3 className="text-xs font-bold text-primary-900 uppercase tracking-wider mb-3 px-4">
// // // //                     Who We Are
// // // //                   </h3>
// // // //                   <ul className="space-y-1 px-4">
// // // //                     {navData.whoWeAre[0].items.map((item, idx) => (
// // // //                       <li key={idx}>
// // // //                         <Link
// // // //                           to={item.path}
// // // //                           onClick={onClose}
// // // //                           className="flex items-center gap-2 py-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
// // // //                         >
// // // //                           <IconComponent iconName={item.icon} />
// // // //                           <span>{item.name}</span>
// // // //                         </Link>
// // // //                       </li>
// // // //                     ))}
// // // //                   </ul>
// // // //                 </div>
// // // //               </div>

// // // //               {/* CTA */}
// // // //               <div className="pt-6">
// // // //                 <Link
// // // //                   to="/contact"
// // // //                   onClick={onClose}
// // // //                   className="block w-full text-center px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg"
// // // //                 >
// // // //                   Get Started Today
// // // //                 </Link>
// // // //               </div>
// // // //             </nav>

// // // //             {/* Footer Info */}
// // // //             <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-50 border-t border-gray-100">
// // // //               <p className="text-sm text-gray-600 text-center">
// // // //                 Questions?{" "}
// // // //                 <a
// // // //                   href="tel:+14255185442"
// // // //                   className="font-semibold text-primary-600"
// // // //                 >
// // // //                   +1 (425) 518-5442
// // // //                 </a>
// // // //               </p>
// // // //             </div>
// // // //           </motion.div>
// // // //         </>
// // // //       )}
// // // //     </AnimatePresence>
// // // //   );
// // // // };

// // // // export default MobileMenu;

// // // import React, { useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import * as FaIcons from "react-icons/fa";
// // // import { navData } from "../../data/navData";

// // // const MobileMenu = ({ isOpen, onClose, currentPage }) => {
// // //   const [expandedSection, setExpandedSection] = useState(null);

// // //   const IconComponent = ({ iconName }) => {
// // //     const Icon = FaIcons[iconName] || FaIcons.FaCircle;
// // //     return <Icon className="text-base" />;
// // //   };

// // //   const toggleSection = (key) => {
// // //     setExpandedSection(expandedSection === key ? null : key);
// // //   };

// // //   return (
// // //     <AnimatePresence>
// // //       {isOpen && (
// // //         <>
// // //           {/* Backdrop */}
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             transition={{ duration: 0.2 }}
// // //             className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
// // //             onClick={onClose}
// // //           />

// // //           {/* Panel */}
// // //           <motion.div
// // //             initial={{ x: "100%" }}
// // //             animate={{ x: 0 }}
// // //             exit={{ x: "100%" }}
// // //             transition={{
// // //               type: "tween",
// // //               duration: 0.3,
// // //               ease: [0.22, 1, 0.36, 1],
// // //             }}
// // //             className="fixed top-0 right-0 w-[85%] max-w-md h-full bg-white z-50 lg:hidden flex flex-col shadow-2xl"
// // //           >
// // //             {/* ─── Header ─── */}
// // //             <div className="flex-shrink-0 bg-gradient-to-r from-[#0a1628] to-[#152d52] px-6 py-5 flex items-center justify-between">
// // //               <div className="font-bold text-xl">
// // //                 <span className="text-white">Innovise</span>
// // //               </div>

// // //               <button
// // //                 onClick={onClose}
// // //                 className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
// // //               >
// // //                 <FaIcons.FaTimes className="text-lg text-white" />
// // //               </button>
// // //             </div>

// // //             {/* ─── Scrollable Content ─── */}
// // //             <div className="flex-1 overflow-y-auto overscroll-contain">
// // //               <nav className="p-6 space-y-2">
// // //                 {/* Home */}
// // //                 <Link
// // //                   to="/"
// // //                   onClick={onClose}
// // //                   className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
// // //                     currentPage === "/"
// // //                       ? "bg-[#0a1628]/5 text-[#0a1628]"
// // //                       : "text-[#12324f] hover:bg-[#0a1628]/5"
// // //                   }`}
// // //                 >
// // //                   <FaIcons.FaHome className="text-lg" />
// // //                   <span>Home</span>
// // //                   {currentPage === "/" && (
// // //                     <span className="ml-auto w-2 h-2 rounded-full bg-[#0B2A4A]"></span>
// // //                   )}
// // //                 </Link>

// // //                 {/* ─── About Innovise (Accordion) ─── */}
// // //                 <div className="rounded-xl overflow-hidden">
// // //                   <button
// // //                     onClick={() => toggleSection("about")}
// // //                     className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
// // //                       expandedSection === "about"
// // //                         ? "bg-[#0a1628]/5 text-[#0a1628]"
// // //                         : "text-[#12324f] hover:bg-[#0a1628]/5"
// // //                     }`}
// // //                   >
// // //                     <div className="flex items-center gap-3">
// // //                       <FaIcons.FaBuilding className="text-lg" />
// // //                       <span>About Innovise</span>
// // //                     </div>
// // //                     <FaIcons.FaChevronDown
// // //                       className={`text-xs transition-transform duration-300 ${
// // //                         expandedSection === "about" ? "rotate-180" : ""
// // //                       }`}
// // //                     />
// // //                   </button>

// // //                   <AnimatePresence>
// // //                     {expandedSection === "about" && (
// // //                       <motion.div
// // //                         initial={{ height: 0, opacity: 0 }}
// // //                         animate={{ height: "auto", opacity: 1 }}
// // //                         exit={{ height: 0, opacity: 0 }}
// // //                         transition={{ duration: 0.3, ease: "easeInOut" }}
// // //                         className="overflow-hidden"
// // //                       >
// // //                         <div className="pt-2 pb-1 space-y-0.5 pl-2">
// // //                           {navData.whoWeAre.map((section, idx) => (
// // //                             <React.Fragment key={idx}>
// // //                               {/* Section Title (if multiple sections) */}
// // //                               {navData.whoWeAre.length > 1 && (
// // //                                 <p className="text-[11px] font-bold text-[#0a1628] uppercase tracking-wider px-3 mb-1.5 flex items-center gap-2">
// // //                                   <span className="w-4 h-px bg-[#0B2A4A]"></span>
// // //                                   {section.title}
// // //                                 </p>
// // //                               )}

// // //                               {section.items.map((item, itemIdx) => (
// // //                                 <Link
// // //                                   key={itemIdx}
// // //                                   to={item.path}
// // //                                   onClick={onClose}
// // //                                   className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
// // //                                     currentPage === item.path
// // //                                       ? "bg-[#0B2A4A]/10 text-[#0a1628] font-semibold"
// // //                                       : "text-gray-600 hover:bg-[#0a1628]/5 hover:text-[#0a1628]"
// // //                                   }`}
// // //                                 >
// // //                                   <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#0a1628]/5 flex items-center justify-center text-[#12324f]">
// // //                                     <IconComponent iconName={item.icon} />
// // //                                   </span>
// // //                                   <span>{item.name}</span>
// // //                                   {currentPage === item.path && (
// // //                                     <FaIcons.FaCheck className="ml-auto text-[#0B2A4A] text-xs" />
// // //                                   )}
// // //                                 </Link>
// // //                               ))}
// // //                             </React.Fragment>
// // //                           ))}
// // //                         </div>
// // //                       </motion.div>
// // //                     )}
// // //                   </AnimatePresence>
// // //                 </div>

// // //                 {/* ─── What We Do (Accordion) ─── */}
// // //                 <div className="rounded-xl overflow-hidden">
// // //                   <button
// // //                     onClick={() => toggleSection("whatWeDo")}
// // //                     className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
// // //                       expandedSection === "whatWeDo"
// // //                         ? "bg-[#0a1628]/5 text-[#0a1628]"
// // //                         : "text-[#12324f] hover:bg-[#0a1628]/5"
// // //                     }`}
// // //                   >
// // //                     <div className="flex items-center gap-3">
// // //                       <FaIcons.FaCogs className="text-lg" />
// // //                       <span>What We Do</span>
// // //                     </div>
// // //                     <FaIcons.FaChevronDown
// // //                       className={`text-xs transition-transform duration-300 ${
// // //                         expandedSection === "whatWeDo" ? "rotate-180" : ""
// // //                       }`}
// // //                     />
// // //                   </button>

// // //                   <AnimatePresence>
// // //                     {expandedSection === "whatWeDo" && (
// // //                       <motion.div
// // //                         initial={{ height: 0, opacity: 0 }}
// // //                         animate={{ height: "auto", opacity: 1 }}
// // //                         exit={{ height: 0, opacity: 0 }}
// // //                         transition={{ duration: 0.3, ease: "easeInOut" }}
// // //                         className="overflow-hidden"
// // //                       >
// // //                         <div className="pt-2 pb-1 space-y-3">
// // //                           {navData.whatWeDo.map((section, idx) => (
// // //                             <div key={idx} className="pl-2">
// // //                               {/* Section Title */}
// // //                               <p className="text-[11px] font-bold text-[#0a1628] uppercase tracking-wider px-3 mb-1.5 flex items-center gap-2">
// // //                                 <span className="w-4 h-px bg-[#0B2A4A]"></span>
// // //                                 {section.title}
// // //                               </p>

// // //                               {/* Section Items — ALL items shown */}
// // //                               <ul className="space-y-0.5">
// // //                                 {section.items.map((item, itemIdx) => (
// // //                                   <li key={itemIdx}>
// // //                                     <Link
// // //                                       to={item.path}
// // //                                       onClick={onClose}
// // //                                       className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
// // //                                         currentPage === item.path
// // //                                           ? "bg-[#0B2A4A]/10 text-[#0a1628] font-semibold"
// // //                                           : "text-gray-600 hover:bg-[#0a1628]/5 hover:text-[#0a1628]"
// // //                                       }`}
// // //                                     >
// // //                                       <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#0a1628]/5 flex items-center justify-center text-[#12324f]">
// // //                                         <IconComponent iconName={item.icon} />
// // //                                       </span>
// // //                                       <span>{item.name}</span>
// // //                                       {currentPage === item.path && (
// // //                                         <FaIcons.FaCheck className="ml-auto text-[#0B2A4A] text-xs" />
// // //                                       )}
// // //                                     </Link>
// // //                                   </li>
// // //                                 ))}
// // //                               </ul>
// // //                             </div>
// // //                           ))}
// // //                         </div>
// // //                       </motion.div>
// // //                     )}
// // //                   </AnimatePresence>
// // //                 </div>

// // //                 {/* Careers */}
// // //                 {/* <Link
// // //                   to="/careers"
// // //                   onClick={onClose}
// // //                   className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
// // //                     currentPage === "/careers"
// // //                       ? "bg-[#0a1628]/5 text-[#0a1628]"
// // //                       : "text-[#12324f] hover:bg-[#0a1628]/5"
// // //                   }`}
// // //                 >
// // //                   <FaIcons.FaBriefcase className="text-lg" />
// // //                   <span>Careers</span>
// // //                   {currentPage === "/careers" && (
// // //                     <span className="ml-auto w-2 h-2 rounded-full bg-[#0B2A4A]"></span>
// // //                   )}
// // //                 </Link> */}

// // //                 {/* Contact */}
// // //                 <Link
// // //                   to="/contact"
// // //                   onClick={onClose}
// // //                   className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
// // //                     currentPage === "/contact"
// // //                       ? "bg-[#0a1628]/5 text-[#0a1628]"
// // //                       : "text-[#12324f] hover:bg-[#0a1628]/5"
// // //                   }`}
// // //                 >
// // //                   <FaIcons.FaEnvelope className="text-lg" />
// // //                   <span>Contact Us</span>
// // //                   {currentPage === "/contact" && (
// // //                     <span className="ml-auto w-2 h-2 rounded-full bg-[#0B2A4A]"></span>
// // //                   )}
// // //                 </Link>
// // //               </nav>

// // //               {/* ─── CTA ─── */}
// // //               <div className="px-6 pb-4">
// // //                 <Link
// // //                   to="/contact"
// // //                   onClick={onClose}
// // //                   className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-[#0a1628] to-[#152d52] text-white font-semibold rounded-xl hover:from-[#0e1d3a] hover:to-[#1a3668] transition-all duration-300 shadow-lg shadow-[#0a1628]/30"
// // //                 >
// // //                   <span>Get Started Today</span>
// // //                   <FaIcons.FaArrowRight className="text-sm" />
// // //                 </Link>
// // //               </div>
// // //             </div>

// // //             {/* ─── Footer (always visible, no absolute) ─── */}
// // //             <div className="flex-shrink-0 p-5 bg-gradient-to-r from-[#0a1628]/[0.03] to-[#152d52]/[0.03] border-t border-gray-100">
// // //               <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
// // //                 <FaIcons.FaPhone className="text-[#0B2A4A] text-xs" />
// // //                 <span>Questions? Call</span>
// // //                 <a
// // //                   href="tel:+14255185442"
// // //                   className="font-semibold text-[#0a1628] hover:text-[#152d52] transition-colors"
// // //                 >
// // //                   +1 (425) 518-5442
// // //                 </a>
// // //               </div>
// // //             </div>
// // //           </motion.div>
// // //         </>
// // //       )}
// // //     </AnimatePresence>
// // //   );
// // // };

// // // export default MobileMenu;

// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { motion, AnimatePresence } from "framer-motion";
// // import * as FaIcons from "react-icons/fa";
// // import { navData } from "../../data/navData";

// // const MobileMenu = ({ isOpen, onClose, currentPage }) => {
// //   const [expandedSection, setExpandedSection] = useState(null);

// //   const IconComponent = ({ iconName }) => {
// //     const Icon = FaIcons[iconName] || FaIcons.FaCircle;
// //     return <Icon className="text-base" />;
// //   };

// //   const toggleSection = (key) => {
// //     setExpandedSection(expandedSection === key ? null : key);
// //   };

// //   // Split navData: separate Industries and Services
// //   const isIndustries = (title = "") => title.toLowerCase().includes("industr");
// //   const industriesData = (navData.whatWeDo || []).filter((section) =>
// //     isIndustries(section.title),
// //   );
// //   const servicesData = (navData.whatWeDo || []).filter(
// //     (section) => !isIndustries(section.title),
// //   );

// //   return (
// //     <AnimatePresence>
// //       {isOpen && (
// //         <>
// //           {/* Backdrop */}
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             transition={{ duration: 0.2 }}
// //             className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
// //             onClick={onClose}
// //           />

// //           {/* Panel */}
// //           <motion.div
// //             initial={{ x: "100%" }}
// //             animate={{ x: 0 }}
// //             exit={{ x: "100%" }}
// //             transition={{
// //               type: "tween",
// //               duration: 0.3,
// //               ease: [0.22, 1, 0.36, 1],
// //             }}
// //             className="fixed top-0 right-0 w-[85%] max-w-md h-full bg-white z-50 lg:hidden flex flex-col shadow-2xl"
// //           >
// //             {/* ─── Header ─── */}
// //             <div className="flex-shrink-0 bg-gradient-to-r from-[#0a1628] to-[#152d52] px-6 py-5 flex items-center justify-between">
// //               <div className="font-bold text-xl">
// //                 <span className="text-white">Innovise</span>
// //               </div>

// //               <button
// //                 onClick={onClose}
// //                 className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
// //               >
// //                 <FaIcons.FaTimes className="text-lg text-white" />
// //               </button>
// //             </div>

// //             {/* ─── Scrollable Content ─── */}
// //             <div className="flex-1 overflow-y-auto overscroll-contain">
// //               <nav className="p-6 space-y-2">
// //                 {/* Home */}
// //                 <Link
// //                   to="/"
// //                   onClick={onClose}
// //                   className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
// //                     currentPage === "/"
// //                       ? "bg-[#0a1628]/5 text-[#0a1628]"
// //                       : "text-[#12324f] hover:bg-[#0a1628]/5"
// //                   }`}
// //                 >
// //                   <FaIcons.FaHome className="text-lg" />
// //                   <span>Home</span>
// //                   {currentPage === "/" && (
// //                     <span className="ml-auto w-2 h-2 rounded-full bg-[#0B2A4A]"></span>
// //                   )}
// //                 </Link>
// //                 {/* ─── About Innovise (Accordion) ─── */}
// //                 <div className="rounded-xl overflow-hidden">
// //                   <button
// //                     onClick={() => toggleSection("about")}
// //                     className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
// //                       expandedSection === "about"
// //                         ? "bg-[#0a1628]/5 text-[#0a1628]"
// //                         : "text-[#12324f] hover:bg-[#0a1628]/5"
// //                     }`}
// //                   >
// //                     <div className="flex items-center gap-3">
// //                       <FaIcons.FaBuilding className="text-lg" />
// //                       <span>About Innovise</span>
// //                     </div>
// //                     <FaIcons.FaChevronDown
// //                       className={`text-xs transition-transform duration-300 ${
// //                         expandedSection === "about" ? "rotate-180" : ""
// //                       }`}
// //                     />
// //                   </button>

// //                   <AnimatePresence>
// //                     {expandedSection === "about" && (
// //                       <motion.div
// //                         initial={{ height: 0, opacity: 0 }}
// //                         animate={{ height: "auto", opacity: 1 }}
// //                         exit={{ height: 0, opacity: 0 }}
// //                         transition={{ duration: 0.3, ease: "easeInOut" }}
// //                         className="overflow-hidden"
// //                       >
// //                         <div className="pt-2 pb-1 space-y-0.5 pl-2">
// //                           {navData.whoWeAre.map((section, idx) => (
// //                             <React.Fragment key={idx}>
// //                               {/* Section Title (if multiple sections) */}
// //                               {navData.whoWeAre.length > 1 && (
// //                                 <p className="text-[11px] font-bold text-[#0a1628] uppercase tracking-wider px-3 mb-1.5 flex items-center gap-2">
// //                                   <span className="w-4 h-px bg-[#0B2A4A]"></span>
// //                                   {section.title}
// //                                 </p>
// //                               )}

// //                               {section.items.map((item, itemIdx) => (
// //                                 <Link
// //                                   key={itemIdx}
// //                                   to={item.path}
// //                                   onClick={onClose}
// //                                   className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
// //                                     currentPage === item.path
// //                                       ? "bg-[#0B2A4A]/10 text-[#0a1628] font-semibold"
// //                                       : "text-gray-600 hover:bg-[#0a1628]/5 hover:text-[#0a1628]"
// //                                   }`}
// //                                 >
// //                                   <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#0a1628]/5 flex items-center justify-center text-[#12324f]">
// //                                     <IconComponent iconName={item.icon} />
// //                                   </span>
// //                                   <span>{item.name}</span>
// //                                   {currentPage === item.path && (
// //                                     <FaIcons.FaCheck className="ml-auto text-[#0B2A4A] text-xs" />
// //                                   )}
// //                                 </Link>
// //                               ))}
// //                             </React.Fragment>
// //                           ))}
// //                         </div>
// //                       </motion.div>
// //                     )}
// //                   </AnimatePresence>
// //                 </div>
// //                 {/* ─── What We Do (Services Only - Accordion) ─── */}
// //                 <div className="rounded-xl overflow-hidden">
// //                   <button
// //                     onClick={() => toggleSection("whatWeDo")}
// //                     className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
// //                       expandedSection === "whatWeDo"
// //                         ? "bg-[#0a1628]/5 text-[#0a1628]"
// //                         : "text-[#12324f] hover:bg-[#0a1628]/5"
// //                     }`}
// //                   >
// //                     <div className="flex items-center gap-3">
// //                       <FaIcons.FaCogs className="text-lg" />
// //                       <span>Services We Deliver</span>
// //                     </div>
// //                     <FaIcons.FaChevronDown
// //                       className={`text-xs transition-transform duration-300 ${
// //                         expandedSection === "whatWeDo" ? "rotate-180" : ""
// //                       }`}
// //                     />
// //                   </button>

// //                   <AnimatePresence>
// //                     {expandedSection === "whatWeDo" && (
// //                       <motion.div
// //                         initial={{ height: 0, opacity: 0 }}
// //                         animate={{ height: "auto", opacity: 1 }}
// //                         exit={{ height: 0, opacity: 0 }}
// //                         transition={{ duration: 0.3, ease: "easeInOut" }}
// //                         className="overflow-hidden"
// //                       >
// //                         <div className="pt-2 pb-1 space-y-3">
// //                           {servicesData.map((section, idx) => (
// //                             <div key={idx} className="pl-2">
// //                               {/* Section Title */}
// //                               <p className="text-[11px] font-bold text-[#0a1628] uppercase tracking-wider px-3 mb-1.5 flex items-center gap-2">
// //                                 <span className="w-4 h-px bg-[#0B2A4A]"></span>
// //                                 {section.title}
// //                               </p>

// //                               {/* Section Items — ALL items shown */}
// //                               <ul className="space-y-0.5">
// //                                 {section.items.map((item, itemIdx) => (
// //                                   <li key={itemIdx}>
// //                                     <Link
// //                                       to={item.path}
// //                                       onClick={onClose}
// //                                       className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
// //                                         currentPage === item.path
// //                                           ? "bg-[#0B2A4A]/10 text-[#0a1628] font-semibold"
// //                                           : "text-gray-600 hover:bg-[#0a1628]/5 hover:text-[#0a1628]"
// //                                       }`}
// //                                     >
// //                                       <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#0a1628]/5 flex items-center justify-center text-[#12324f]">
// //                                         <IconComponent iconName={item.icon} />
// //                                       </span>
// //                                       <span>{item.name}</span>
// //                                       {currentPage === item.path && (
// //                                         <FaIcons.FaCheck className="ml-auto text-[#0B2A4A] text-xs" />
// //                                       )}
// //                                     </Link>
// //                                   </li>
// //                                 ))}
// //                               </ul>
// //                             </div>
// //                           ))}
// //                         </div>
// //                       </motion.div>
// //                     )}
// //                   </AnimatePresence>
// //                 </div>
// //                 {/* ─── Industries (Accordion) ─── */}
// //                 {industriesData.length > 0 && (
// //                   <div className="rounded-xl overflow-hidden">
// //                     <button
// //                       onClick={() => toggleSection("industries")}
// //                       className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
// //                         expandedSection === "industries"
// //                           ? "bg-[#0a1628]/5 text-[#0a1628]"
// //                           : "text-[#12324f] hover:bg-[#0a1628]/5"
// //                       }`}
// //                     >
// //                       <div className="flex items-center gap-3">
// //                         <FaIcons.FaIndustry className="text-lg" />
// //                         <span>Industries We Serve</span>
// //                       </div>
// //                       <FaIcons.FaChevronDown
// //                         className={`text-xs transition-transform duration-300 ${
// //                           expandedSection === "industries" ? "rotate-180" : ""
// //                         }`}
// //                       />
// //                     </button>

// //                     <AnimatePresence>
// //                       {expandedSection === "industries" && (
// //                         <motion.div
// //                           initial={{ height: 0, opacity: 0 }}
// //                           animate={{ height: "auto", opacity: 1 }}
// //                           exit={{ height: 0, opacity: 0 }}
// //                           transition={{ duration: 0.3, ease: "easeInOut" }}
// //                           className="overflow-hidden"
// //                         >
// //                           <div className="pt-2 pb-1 space-y-3">
// //                             {industriesData.map((section, idx) => (
// //                               <div key={idx} className="pl-2">
// //                                 {/* Section Title */}
// //                                 <p className="text-[11px] font-bold text-[#0a1628] uppercase tracking-wider px-3 mb-1.5 flex items-center gap-2">
// //                                   <span className="w-4 h-px bg-[#0B2A4A]"></span>
// //                                   {section.title}
// //                                 </p>

// //                                 {/* Section Items */}
// //                                 <ul className="space-y-0.5">
// //                                   {section.items.map((item, itemIdx) => (
// //                                     <li key={itemIdx}>
// //                                       <Link
// //                                         to={item.path}
// //                                         onClick={onClose}
// //                                         className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
// //                                           currentPage === item.path
// //                                             ? "bg-[#0B2A4A]/10 text-[#0a1628] font-semibold"
// //                                             : "text-gray-600 hover:bg-[#0a1628]/5 hover:text-[#0a1628]"
// //                                         }`}
// //                                       >
// //                                         <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#0a1628]/5 flex items-center justify-center text-[#12324f]">
// //                                           <IconComponent iconName={item.icon} />
// //                                         </span>
// //                                         <span>{item.name}</span>
// //                                         {currentPage === item.path && (
// //                                           <FaIcons.FaCheck className="ml-auto text-[#0B2A4A] text-xs" />
// //                                         )}
// //                                       </Link>
// //                                     </li>
// //                                   ))}
// //                                 </ul>
// //                               </div>
// //                             ))}
// //                           </div>
// //                         </motion.div>
// //                       )}
// //                     </AnimatePresence>
// //                   </div>
// //                 )}

// //                 {/* Careers */}

// //                 {/* <Link
// //                   to="/careers"
// //                   onClick={onClose}
// //                   className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
// //                     currentPage === "/careers"
// //                       ? "bg-[#0a1628]/5 text-[#0a1628]"
// //                       : "text-[#12324f] hover:bg-[#0a1628]/5"
// //                   }`}
// //                 >
// //                   <FaIcons.FaBriefcase className="text-lg" />
// //                   <span>Careers</span>
// //                   {currentPage === "/careers" && (
// //                     <span className="ml-auto w-2 h-2 rounded-full bg-[#0B2A4A]"></span>
// //                   )}
// //                 </Link> */}

// //                 {/* Contact */}
// //                 <Link
// //                   to="/contact"
// //                   onClick={onClose}
// //                   className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
// //                     currentPage === "/contact"
// //                       ? "bg-[#0a1628]/5 text-[#0a1628]"
// //                       : "text-[#12324f] hover:bg-[#0a1628]/5"
// //                   }`}
// //                 >
// //                   <FaIcons.FaEnvelope className="text-lg" />
// //                   <span>Contact Us</span>
// //                   {currentPage === "/contact" && (
// //                     <span className="ml-auto w-2 h-2 rounded-full bg-[#0B2A4A]"></span>
// //                   )}
// //                 </Link>
// //               </nav>

// //               {/* ─── CTA ─── */}
// //               <div className="px-6 pb-4">
// //                 <Link
// //                   to="/contact"
// //                   onClick={onClose}
// //                   className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-[#0a1628] to-[#152d52] text-white font-semibold rounded-xl hover:from-[#0e1d3a] hover:to-[#1a3668] transition-all duration-300 shadow-lg shadow-[#0a1628]/30"
// //                 >
// //                   <span>Get Started Today</span>
// //                   <FaIcons.FaArrowRight className="text-sm" />
// //                 </Link>
// //               </div>
// //             </div>

// //             {/* ─── Footer (always visible, no absolute) ─── */}
// //             <div className="flex-shrink-0 p-5 bg-gradient-to-r from-[#0a1628]/[0.03] to-[#152d52]/[0.03] border-t border-gray-100">
// //               <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
// //                 <FaIcons.FaPhone className="text-[#0B2A4A] text-xs" />
// //                 <span>Questions? Call</span>
// //                 <a
// //                   href="tel:+14255185442"
// //                   className="font-semibold text-[#0a1628] hover:text-[#152d52] transition-colors"
// //                 >
// //                   +1 (425) 518-5442
// //                 </a>
// //               </div>
// //             </div>
// //           </motion.div>
// //         </>
// //       )}
// //     </AnimatePresence>
// //   );
// // };

// // export default MobileMenu;

// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import * as FaIcons from "react-icons/fa";
// import { navData } from "../../data/navData";
// import { companyData } from "../../data/companyData";

// /*
//   Slide-in menu for phones and tablets.
//   Brand colors only: navy header, blue active states, white panel.
// */

// const ItemIcon = ({ name }) => {
//   const Icon = FaIcons[name] || FaIcons.FaCircle;
//   return <Icon className="text-base" aria-hidden="true" />;
// };

// // Split navData into Services and Industries
// const isIndustries = (title = "") => title.toLowerCase().includes("industr");
// const industriesData = (navData.whatWeDo || []).filter((s) =>
//   isIndustries(s.title),
// );
// const servicesData = (navData.whatWeDo || []).filter(
//   (s) => !isIndustries(s.title),
// );

// const phone = companyData?.contact?.phone || "+1 (425) 518-5442";
// const phoneHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

// /* Top-level row style */
// const rowClass = (active) =>
//   `flex w-full items-center gap-3 rounded-xl px-4 py-3 text-base font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
//     active
//       ? "bg-primary-50 text-primary-500"
//       : "text-primary-900 hover:bg-primary-50"
//   }`;

// /* A plain link at the top level (Home, Contact) */
// const TopLink = ({ to, icon: Icon, label, currentPage, onClose }) => {
//   const active = currentPage === to;
//   return (
//     <Link
//       to={to}
//       onClick={onClose}
//       aria-current={active ? "page" : undefined}
//       className={rowClass(active)}
//     >
//       <Icon className="text-lg" aria-hidden="true" />
//       <span>{label}</span>
//       {active && (
//         <span
//           className="ml-auto h-2 w-2 rounded-full bg-primary-500"
//           aria-hidden="true"
//         />
//       )}
//     </Link>
//   );
// };

// /* An expandable group (About, Services, Industries) */
// const Accordion = ({
//   id,
//   icon: Icon,
//   label,
//   sections,
//   expanded,
//   onToggle,
//   currentPage,
//   onClose,
// }) => {
//   const open = expanded === id;
//   const containsCurrent = sections.some((s) =>
//     s.items.some((i) => i.path === currentPage),
//   );
//   const showTitles = sections.length > 1 || id !== "about";

//   return (
//     <div>
//       <button
//         type="button"
//         onClick={() => onToggle(id)}
//         aria-expanded={open}
//         aria-controls={`mobile-${id}`}
//         className={`${rowClass(open || containsCurrent)} justify-between`}
//       >
//         <span className="flex items-center gap-3">
//           <Icon className="text-lg" aria-hidden="true" />
//           {label}
//         </span>
//         <FaIcons.FaChevronDown
//           className={`text-xs transition-transform duration-300 ${open ? "rotate-180" : ""}`}
//           aria-hidden="true"
//         />
//       </button>

//       <AnimatePresence initial={false}>
//         {open && (
//           <motion.div
//             id={`mobile-${id}`}
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.25, ease: "easeInOut" }}
//             className="overflow-hidden"
//           >
//             <div className="space-y-4 pb-2 pl-2 pt-3">
//               {sections.map((section) => (
//                 <div key={section.title}>
//                   {showTitles && (
//                     <p className="mb-1.5 px-3 text-xs font-semibold uppercase tracking-widest text-primary-500">
//                       {section.title}
//                     </p>
//                   )}
//                   <ul className="space-y-0.5">
//                     {section.items.map((item) => {
//                       const active = currentPage === item.path;
//                       return (
//                         <li key={item.path}>
//                           <Link
//                             to={item.path}
//                             onClick={onClose}
//                             aria-current={active ? "page" : undefined}
//                             className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-base transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
//                               active
//                                 ? "bg-primary-50 font-semibold text-primary-500"
//                                 : "text-primary-900/80 hover:bg-primary-50 hover:text-primary-900"
//                             }`}
//                           >
//                             <span
//                               className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
//                                 active
//                                   ? "bg-primary-500 text-white"
//                                   : "bg-primary-50 text-primary-500"
//                               }`}
//                             >
//                               <ItemIcon name={item.icon} />
//                             </span>
//                             <span>{item.name}</span>
//                             {active && (
//                               <FaIcons.FaCheck
//                                 className="ml-auto text-xs text-primary-500"
//                                 aria-hidden="true"
//                               />
//                             )}
//                           </Link>
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const MobileMenu = ({ isOpen, onClose, currentPage }) => {
//   const [expanded, setExpanded] = useState(null);
//   const closeRef = useRef(null);
//   // keep the latest onClose without re-running the effect on every render
//   const onCloseRef = useRef(onClose);
//   onCloseRef.current = onClose;

//   const toggle = (id) => setExpanded((cur) => (cur === id ? null : id));

//   // While open: lock page scroll, close on Escape, focus the close button
//   useEffect(() => {
//     if (!isOpen) return undefined;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     const onKey = (e) => e.key === "Escape" && onCloseRef.current();
//     document.addEventListener("keydown", onKey);
//     closeRef.current?.focus();
//     return () => {
//       document.body.style.overflow = prev;
//       document.removeEventListener("keydown", onKey);
//     };
//   }, [isOpen]);

//   const shared = { expanded, onToggle: toggle, currentPage, onClose };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Backdrop */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="fixed inset-0 z-50 bg-primary-900/60 lg:hidden"
//             onClick={onClose}
//             aria-hidden="true"
//           />

//           {/* Panel */}
//           <motion.div
//             role="dialog"
//             aria-modal="true"
//             aria-label="Site menu"
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{
//               type: "tween",
//               duration: 0.3,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="fixed right-0 top-0 z-50 flex h-full w-[85%] max-w-md flex-col bg-white shadow-2xl shadow-primary-900/30 lg:hidden"
//           >
//             {/* Header */}
//             <div className="flex shrink-0 items-center justify-between bg-primary-900 px-6 py-5">
//               <span className="text-xl font-bold text-white">Innovise</span>
//               <button
//                 ref={closeRef}
//                 type="button"
//                 onClick={onClose}
//                 aria-label="Close menu"
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
//               >
//                 <FaIcons.FaTimes className="text-lg" />
//               </button>
//             </div>

//             {/* Links */}
//             <div className="flex-1 overflow-y-auto overscroll-contain">
//               <nav aria-label="Mobile" className="space-y-1 p-5">
//                 <TopLink
//                   to="/"
//                   icon={FaIcons.FaHome}
//                   label="Home"
//                   currentPage={currentPage}
//                   onClose={onClose}
//                 />
//                 <Accordion
//                   id="about"
//                   icon={FaIcons.FaBuilding}
//                   label="About Innovise"
//                   sections={navData.whoWeAre || []}
//                   {...shared}
//                 />
//                 <Accordion
//                   id="services"
//                   icon={FaIcons.FaCogs}
//                   label="Services We Deliver"
//                   sections={servicesData}
//                   {...shared}
//                 />
//                 {industriesData.length > 0 && (
//                   <Accordion
//                     id="industries"
//                     icon={FaIcons.FaIndustry}
//                     label="Industries We Serve"
//                     sections={industriesData}
//                     {...shared}
//                   />
//                 )}
//                 <TopLink
//                   to="/careers"
//                   icon={FaIcons.FaEnvelope}
//                   label="Careers"
//                   currentPage={currentPage}
//                   onClose={onClose}
//                 />
//                 <TopLink
//                   to="/contact"
//                   icon={FaIcons.FaEnvelope}
//                   label="Contact Us"
//                   currentPage={currentPage}
//                   onClose={onClose}
//                 />
//               </nav>

//               <div className="px-5 pb-5">
//                 <Link
//                   to="/contact"
//                   onClick={onClose}
//                   className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-500 px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
//                 >
//                   Talk to Our Experts
//                   <FaIcons.FaArrowRight
//                     className="text-sm"
//                     aria-hidden="true"
//                   />
//                 </Link>
//               </div>
//             </div>

//             {/* Footer */}
//             <div className="shrink-0 border-t border-primary-100 bg-primary-50 p-5">
//               <p className="flex items-center justify-center gap-2 text-sm text-primary-900/70">
//                 <FaIcons.FaPhone
//                   className="text-xs text-primary-500"
//                   aria-hidden="true"
//                 />
//                 Questions? Call
//                 <a
//                   href={phoneHref}
//                   className="font-semibold text-primary-900 hover:text-primary-500"
//                 >
//                   {phone}
//                 </a>
//               </p>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

// export default MobileMenu;

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import { navData } from "../../data/navData";
import { companyData } from "../../data/companyData";

/*
  Slide-in menu for phones and tablets.
  Brand colors only: navy header, blue active states, white panel.
*/

const ItemIcon = ({ name }) => {
  const Icon = FaIcons[name] || FaIcons.FaCircle;
  return <Icon className="text-base" aria-hidden="true" />;
};

// Split navData into Services and Industries
const isIndustries = (title = "") => title.toLowerCase().includes("industr");
const industriesData = (navData.whatWeDo || []).filter((s) =>
  isIndustries(s.title),
);
const servicesData = (navData.whatWeDo || []).filter(
  (s) => !isIndustries(s.title),
);

const phone = companyData?.contact?.phone || "+1 (425) 518-5442";
const phoneHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

/* Top-level row style */
const rowClass = (active) =>
  `flex w-full items-center gap-3 rounded-xl px-4 py-3 text-base font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
    active
      ? "bg-primary-50 text-primary-500"
      : "text-primary-900 hover:bg-primary-50"
  }`;

/* A plain link at the top level (Home, Contact) */
const TopLink = ({
  to,
  icon: Icon,
  label,
  currentPage,
  onClose,
  matchPrefix,
}) => {
  // matchPrefix: also highlight on sub-pages (e.g. /careers/jobdetails/123)
  const active =
    currentPage === to || (matchPrefix && currentPage?.startsWith(`${to}/`));
  return (
    <Link
      to={to}
      onClick={onClose}
      aria-current={active ? "page" : undefined}
      className={rowClass(active)}
    >
      <Icon className="text-lg" aria-hidden="true" />
      <span>{label}</span>
      {active && (
        <span
          className="ml-auto h-2 w-2 rounded-full bg-primary-500"
          aria-hidden="true"
        />
      )}
    </Link>
  );
};

/* An expandable group (About, Services, Industries) */
const Accordion = ({
  id,
  icon: Icon,
  label,
  sections,
  expanded,
  onToggle,
  currentPage,
  onClose,
}) => {
  const open = expanded === id;
  const containsCurrent = sections.some((s) =>
    s.items.some((i) => i.path === currentPage),
  );
  const showTitles = sections.length > 1 || id !== "about";

  return (
    <div>
      <button
        type="button"
        onClick={() => onToggle(id)}
        aria-expanded={open}
        aria-controls={`mobile-${id}`}
        className={`${rowClass(open || containsCurrent)} justify-between`}
      >
        <span className="flex items-center gap-3">
          <Icon className="text-lg" aria-hidden="true" />
          {label}
        </span>
        <FaIcons.FaChevronDown
          className={`text-xs transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`mobile-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-4 pb-2 pl-2 pt-3">
              {sections.map((section) => (
                <div key={section.title}>
                  {showTitles && (
                    <p className="mb-1.5 px-3 text-xs font-semibold uppercase tracking-widest text-primary-500">
                      {section.title}
                    </p>
                  )}
                  <ul className="space-y-0.5">
                    {section.items.map((item) => {
                      const active = currentPage === item.path;
                      return (
                        <li key={item.path}>
                          <Link
                            to={item.path}
                            onClick={onClose}
                            aria-current={active ? "page" : undefined}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-base transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                              active
                                ? "bg-primary-50 font-semibold text-primary-500"
                                : "text-primary-900/80 hover:bg-primary-50 hover:text-primary-900"
                            }`}
                          >
                            <span
                              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                                active
                                  ? "bg-primary-500 text-white"
                                  : "bg-primary-50 text-primary-500"
                              }`}
                            >
                              <ItemIcon name={item.icon} />
                            </span>
                            <span>{item.name}</span>
                            {active && (
                              <FaIcons.FaCheck
                                className="ml-auto text-xs text-primary-500"
                                aria-hidden="true"
                              />
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileMenu = ({ isOpen, onClose, currentPage }) => {
  const [expanded, setExpanded] = useState(null);
  const closeRef = useRef(null);
  // keep the latest onClose without re-running the effect on every render
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const toggle = (id) => setExpanded((cur) => (cur === id ? null : id));

  // While open: lock page scroll, close on Escape, focus the close button
  useEffect(() => {
    if (!isOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onCloseRef.current();
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const shared = { expanded, onToggle: toggle, currentPage, onClose };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-primary-900/60 lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed right-0 top-0 z-50 flex h-full w-[85%] max-w-md flex-col bg-white shadow-2xl shadow-primary-900/30 lg:hidden"
          >
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between bg-primary-900 px-6 py-5">
              <span className="text-xl font-bold text-white">Innovise</span>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
              >
                <FaIcons.FaTimes className="text-lg" />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto overscroll-contain">
              <nav aria-label="Mobile" className="space-y-1 p-5">
                <TopLink
                  to="/"
                  icon={FaIcons.FaHome}
                  label="Home"
                  currentPage={currentPage}
                  onClose={onClose}
                />
                <Accordion
                  id="about"
                  icon={FaIcons.FaBuilding}
                  label="About Innovise"
                  sections={navData.whoWeAre || []}
                  {...shared}
                />
                <Accordion
                  id="services"
                  icon={FaIcons.FaCogs}
                  label="Services We Deliver"
                  sections={servicesData}
                  {...shared}
                />
                {industriesData.length > 0 && (
                  <Accordion
                    id="industries"
                    icon={FaIcons.FaIndustry}
                    label="Industries We Serve"
                    sections={industriesData}
                    {...shared}
                  />
                )}
                <TopLink
                  to="/careers"
                  icon={FaIcons.FaBriefcase}
                  label="Careers"
                  currentPage={currentPage}
                  onClose={onClose}
                  matchPrefix
                />
                <TopLink
                  to="/contact"
                  icon={FaIcons.FaEnvelope}
                  label="Contact Us"
                  currentPage={currentPage}
                  onClose={onClose}
                />
              </nav>

              <div className="px-5 pb-5">
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-500 px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                >
                  Talk to Our Experts
                  <FaIcons.FaArrowRight
                    className="text-sm"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>

            {/* Footer */}
            <div className="shrink-0 border-t border-primary-100 bg-primary-50 p-5">
              <p className="flex items-center justify-center gap-2 text-sm text-primary-900/70">
                <FaIcons.FaPhone
                  className="text-xs text-primary-500"
                  aria-hidden="true"
                />
                Questions? Call
                <a
                  href={phoneHref}
                  className="font-semibold text-primary-900 hover:text-primary-500"
                >
                  {phone}
                </a>
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
