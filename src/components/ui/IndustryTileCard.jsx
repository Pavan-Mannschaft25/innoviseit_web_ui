// // // // import React from "react";

// // // // const IndustryHoverCard = ({ industry }) => {
// // // //   const Icon = industry.icon;

// // // //   return (
// // // //     <div className="group relative h-[340px] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
// // // //       {/* IMAGE */}
// // // //       <img
// // // //         src={industry.image}
// // // //         alt={industry.name}
// // // //         className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
// // // //       />

// // // //       {/* DARK OVERLAY */}
// // // //       <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A] via-[#0B2A4A]/70 to-transparent opacity-80"></div>

// // // //       {/* FRONT CONTENT */}
// // // //       <div className="absolute bottom-0 p-6 text-white z-10 transition-all duration-500 group-hover:-translate-y-10">
// // // //         <div className="flex items-center gap-3 mb-2">
// // // //           <Icon className="text-xl" />
// // // //           <h3 className="text-lg font-semibold">{industry.name}</h3>
// // // //         </div>
// // // //         <p className="text-sm opacity-90">{industry.description}</p>
// // // //       </div>

// // // //       {/* HOVER CONTENT */}
// // // //       <div className="absolute inset-0 p-6 text-white opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end bg-[#0B2A4A]/90">
// // // //         <h3 className="text-lg font-semibold mb-3">{industry.name}</h3>

// // // //         <div className="text-sm mb-3 space-y-1">
// // // //           <p>👥 {industry.stats.clients}</p>
// // // //           <p> {industry.stats.projects}</p>
// // // //           <p>⏳ {industry.stats.experience}</p>
// // // //         </div>

// // // //         <ul className="text-sm text-gray-300 mb-4">
// // // //           {industry.capabilities.map((cap, i) => (
// // // //             <li key={i}>• {cap}</li>
// // // //           ))}
// // // //         </ul>

// // // //         <button className="border border-white px-4 py-2 rounded-md text-sm hover:bg-white hover:text-[#0B2A4A] transition">
// // // //           Explore →
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default IndustryHoverCard;

// // // import React from "react";
// // // import { FaBuilding } from "react-icons/fa";

// // // const IndustryHoverCard = ({ industry }) => {
// // //   if (!industry) return null; //  prevents crash

// // //   const Icon = industry.icon || FaBuilding;

// // //   return (
// // //     <div className="group relative h-[340px] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
// // //       {/* IMAGE */}
// // //       <img
// // //         src={industry.image || "/images/default.jpg"}
// // //         alt={industry.name}
// // //         className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
// // //       />

// // //       {/* OVERLAY */}
// // //       <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A] via-[#0B2A4A]/70 to-transparent opacity-80"></div>

// // //       {/* FRONT */}
// // //       <div className="absolute bottom-0 p-6 text-white z-10 transition-all duration-500 group-hover:-translate-y-10">
// // //         <div className="flex items-center gap-3 mb-2">
// // //           <Icon className="text-xl" />
// // //           <h3 className="text-lg font-semibold">{industry.name}</h3>
// // //         </div>
// // //         <p className="text-sm opacity-90">{industry.description}</p>
// // //       </div>

// // //       {/* HOVER */}
// // //       <div className="absolute inset-0 p-6 text-white opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end bg-[#0B2A4A]/90">
// // //         <h3 className="text-lg font-semibold mb-3">{industry.name}</h3>

// // //         <div className="text-sm mb-3 space-y-1">
// // //           <p>👥 {industry.stats?.clients}</p>
// // //           <p> {industry.stats?.projects}</p>
// // //           <p>⏳ {industry.stats?.experience}</p>
// // //         </div>

// // //         <ul className="text-sm text-gray-300 mb-4">
// // //           {industry.capabilities?.map((cap, i) => (
// // //             <li key={i}>• {cap}</li>
// // //           ))}
// // //         </ul>

// // //         <button className="border border-white px-4 py-2 rounded-md text-sm hover:bg-white hover:text-[#0B2A4A] transition">
// // //           Explore →
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default IndustryHoverCard;

// // import React from "react";
// // import { FaBuilding } from "react-icons/fa";

// // const IndustryHoverCard = ({ industry }) => {
// //   if (!industry) return null;

// //   const Icon = industry.icon || FaBuilding;

// //   return (
// //     <div className="group relative h-[340px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 cursor-pointer">
// //       {/* IMAGE */}
// //       <img
// //         src={industry.image || "/images/default.jpg"}
// //         alt={industry.name}
// //         className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
// //       />

// //       {/* GRADIENT OVERLAY */}
// //       <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A] via-[#0B2A4A]/70 to-transparent"></div>

// //       {/* FRONT CONTENT */}
// //       <div className="absolute bottom-0 p-6 text-white z-10 transition-all duration-500 group-hover:-translate-y-10">
// //         <div className="flex items-center gap-3 mb-2">
// //           <Icon className="text-xl" />
// //           <h3 className="text-lg font-semibold">{industry.name}</h3>
// //         </div>
// //         <p className="text-sm opacity-90">{industry.description}</p>
// //       </div>

// //       {/* HOVER CONTENT */}
// //       <div className="absolute inset-0 p-6 text-white opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end bg-[#0B2A4A]/90">
// //         <h3 className="text-lg font-semibold mb-3">{industry.name}</h3>

// //         <div className="text-sm mb-3 space-y-1">
// //           <p>👥 {industry.stats?.clients}</p>
// //           <p> {industry.stats?.projects}</p>
// //           <p>⏳ {industry.stats?.experience}</p>
// //         </div>

// //         <ul className="text-sm text-gray-300 mb-4">
// //           {industry.capabilities?.map((cap, i) => (
// //             <li key={i}>• {cap}</li>
// //           ))}
// //         </ul>

// //         <button className="border border-white px-4 py-2 rounded-md text-sm hover:bg-white hover:text-[#0B2A4A] transition">
// //           Explore →
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default IndustryHoverCard;

// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { FaChevronRight, FaTimes, FaArrowRight } from "react-icons/fa";
// // import { motion, AnimatePresence } from "framer-motion";

// // const IndustryTileCard = ({
// //   industry,
// //   variant = "perspective",
// //   imageType = "half",
// // }) => {
// //   const [isExpanded, setIsExpanded] = useState(false);

// //   if (!industry) return null;

// //   // Variant-based styling
// //   const variantClasses = {
// //     perspective: "bg-white border border-gray-200",
// //     "research-dark": "bg-[#0B2A4A] text-white",
// //     "research-light": "bg-gray-50 border border-gray-200",
// //   };

// //   const labelColors = {
// //     perspective: "bg-primary-100 text-primary-700",
// //     "research-dark": "bg-white/20 text-white",
// //     "research-light": "bg-gray-200 text-gray-800",
// //   };

// //   return (
// //     <motion.div
// //       className={`group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${variantClasses[variant]} h-[420px] lg:h-[480px]`}
// //       whileHover={{ y: -4 }}
// //       onClick={() => setIsExpanded(!isExpanded)}
// //     >
// //       {/* Front Toggle Button (Accessibility) */}
// //       <button
// //         className="absolute inset-0 z-30 w-full h-full opacity-0"
// //         aria-expanded={isExpanded}
// //         aria-label={`${industry.name}: ${isExpanded ? "Close details" : "View details"}`}
// //         onClick={(e) => {
// //           e.stopPropagation();
// //           setIsExpanded(!isExpanded);
// //         }}
// //       />

// //       {/* CTA Cover Link */}
// //       <Link
// //         to={industry.link || `/industries/${industry.id}`}
// //         className="absolute inset-0 z-20"
// //         aria-label={`Explore ${industry.name}`}
// //         tabIndex={-1}
// //       />

// //       {/* Close Button (when expanded) */}
// //       <AnimatePresence>
// //         {isExpanded && (
// //           <motion.button
// //             initial={{ opacity: 0, scale: 0.8 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             exit={{ opacity: 0, scale: 0.8 }}
// //             className="absolute top-4 right-4 z-40 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-colors"
// //             onClick={(e) => {
// //               e.stopPropagation();
// //               setIsExpanded(false);
// //             }}
// //             aria-label="Close"
// //           >
// //             <FaTimes className="text-gray-700 text-sm" />
// //           </motion.button>
// //         )}
// //       </AnimatePresence>

// //       {/* Label Badge */}
// //       <div className="absolute top-5 left-5 z-10">
// //         <span
// //           className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${labelColors[variant]}`}
// //         >
// //           {industry.category || "Industry"}
// //         </span>
// //       </div>

// //       {/* Sliding Content Container */}
// //       <div className="relative w-full h-full overflow-hidden">
// //         {/* FRONT CONTENT */}
// //         <motion.div
// //           className="absolute inset-0 flex flex-col"
// //           animate={{
// //             y: isExpanded ? "-100%" : "0%",
// //             opacity: isExpanded ? 0 : 1,
// //           }}
// //           transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
// //         >
// //           {/* Image Section */}
// //           <div
// //             className={`${imageType === "full" ? "h-full" : "h-full"} overflow-hidden`}
// //           >
// //             <img
// //               src={industry.image || "/images/default-industry.jpg"}
// //               alt={industry.name}
// //               loading="lazy"
// //               className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
// //             />

// //             {/* Gradient Overlay for Full Image Variant */}
// //             {imageType === "full" && (
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
// //             )}
// //           </div>

// //           {/* Title Section (for half-image) or overlay (for full-image) */}
// //           <div
// //             className={`flex-1 p-6 ${imageType === "full" ? "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" : ""}`}
// //           >
// //             <h3
// //               className={`text-xl lg:text-2xl font-bold leading-tight ${imageType === "full" ? "text-white" : variant === "research-dark" ? "text-white" : "text-gray-900"}`}
// //             >
// //               {industry.name}
// //             </h3>

// //             {imageType === "half" && (
// //               <p
// //                 className={`mt-2 text-sm line-clamp-2 ${variant === "research-dark" ? "text-gray-300" : "text-gray-600"}`}
// //               >
// //                 {industry.description}
// //               </p>
// //             )}

// //             {/* Expand Indicator */}
// //             <div className="mt-4 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //               <span
// //                 className={
// //                   variant === "research-dark"
// //                     ? "text-white"
// //                     : "text-primary-600"
// //                 }
// //               >
// //                 Explore
// //               </span>
// //               <FaArrowRight
// //                 className={`text-xs ${variant === "research-dark" ? "text-white" : "text-primary-600"}`}
// //               />
// //             </div>
// //           </div>
// //         </motion.div>

// //         {/* BACK CONTENT (Slides up when expanded) */}
// //         <motion.div
// //           className="absolute inset-0 z-10 flex flex-col"
// //           initial={{ y: "100%", opacity: 0 }}
// //           animate={{
// //             y: isExpanded ? "0%" : "100%",
// //             opacity: isExpanded ? 1 : 0,
// //           }}
// //           transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
// //         >
// //           {/* Background Color/Overlay */}
// //           <div
// //             className={`absolute inset-0 ${variant === "research-dark" ? "bg-[#0B2A4A]/98" : "bg-white/98"} backdrop-blur-sm`}
// //           />

// //           {/* Content */}
// //           <div className="relative z-10 flex flex-col h-full p-6 lg:p-8 overflow-y-auto">
// //             {/* Title */}
// //             <h3
// //               className={`text-xl lg:text-2xl font-bold mb-4 ${variant === "research-dark" ? "text-white" : "text-gray-900"}`}
// //             >
// //               {industry.name}
// //             </h3>

// //             {/* Description */}
// //             <p
// //               className={`text-sm leading-relaxed mb-6 flex-grow ${variant === "research-dark" ? "text-gray-300" : "text-gray-600"}`}
// //             >
// //               {industry.detailedDescription || industry.description}
// //             </p>

// //             {/* Stats Grid */}
// //             {industry.stats && (
// //               <div className="grid grid-cols-3 gap-4 mb-6">
// //                 <div
// //                   className={`p-3 rounded-lg ${variant === "research-dark" ? "bg-white/10" : "bg-gray-100"}`}
// //                 >
// //                   <p
// //                     className={`text-lg font-bold ${variant === "research-dark" ? "text-white" : "text-primary-600"}`}
// //                   >
// //                     {industry.stats.clients || "100+"}
// //                   </p>
// //                   <p
// //                     className={`text-xs uppercase tracking-wide ${variant === "research-dark" ? "text-gray-400" : "text-gray-500"}`}
// //                   >
// //                     Clients
// //                   </p>
// //                 </div>
// //                 <div
// //                   className={`p-3 rounded-lg ${variant === "research-dark" ? "bg-white/10" : "bg-gray-100"}`}
// //                 >
// //                   <p
// //                     className={`text-lg font-bold ${variant === "research-dark" ? "text-white" : "text-primary-600"}`}
// //                   >
// //                     {industry.stats.projects || "200+"}
// //                   </p>
// //                   <p
// //                     className={`text-xs uppercase tracking-wide ${variant === "research-dark" ? "text-gray-400" : "text-gray-500"}`}
// //                   >
// //                     Projects
// //                   </p>
// //                 </div>
// //                 <div
// //                   className={`p-3 rounded-lg ${variant === "research-dark" ? "bg-white/10" : "bg-gray-100"}`}
// //                 >
// //                   <p
// //                     className={`text-lg font-bold ${variant === "research-dark" ? "text-white" : "text-primary-600"}`}
// //                   >
// //                     {industry.stats.experience || "10+ yrs"}
// //                   </p>
// //                   <p
// //                     className={`text-xs uppercase tracking-wide ${variant === "research-dark" ? "text-gray-400" : "text-gray-500"}`}
// //                   >
// //                     Experience
// //                   </p>
// //                 </div>
// //               </div>
// //             )}

// //             {/* Capabilities List */}
// //             {industry.capabilities && industry.capabilities.length > 0 && (
// //               <ul
// //                 className={`space-y-2 mb-6 ${variant === "research-dark" ? "text-gray-300" : "text-gray-600"}`}
// //               >
// //                 {industry.capabilities.slice(0, 4).map((cap, idx) => (
// //                   <li key={idx} className="flex items-start gap-2 text-sm">
// //                     <span
// //                       className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${variant === "research-dark" ? "bg-primary-400" : "bg-primary-600"}`}
// //                     />
// //                     {cap}
// //                   </li>
// //                 ))}
// //               </ul>
// //             )}

// //             {/* CTA Button */}
// //             <div className="mt-auto pt-4 border-t border-current/10">
// //               <Link
// //                 to={industry.link || `/industries/${industry.id}`}
// //                 onClick={(e) => e.stopPropagation()}
// //                 className={`inline-flex items-center gap-3 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300
// //                   ${
// //                     variant === "research-dark"
// //                       ? "bg-white text-[#0B2A4A] hover:bg-gray-100"
// //                       : "bg-[#0B2A4A] text-white hover:bg-[#0d355c]"
// //                   }
// //                   hover:gap-4 group/btn`}
// //               >
// //                 <span>Expand</span>
// //                 <FaChevronRight className="text-xs transition-transform group-hover/btn:translate-x-1" />
// //               </Link>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>

// //       {/* Bottom Gradient Line Animation */}
// //       <motion.div
// //         className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-blue-500 to-cyan-500 origin-left"
// //         initial={{ scaleX: 0 }}
// //         whileHover={{ scaleX: 1 }}
// //         transition={{ duration: 0.3 }}
// //       />
// //     </motion.div>
// //   );
// // };

// // export default IndustryTileCard;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

// /**
//  * IndustryTileCard - Navy & Gold Premium Theme
//  *
//  * Two Variants:
//  * - perspective: Light background with navy accents
//  * - research-dark: Dark navy background with gold accents
//  */

// const IndustryTileCard = ({
//   industry,
//   variant = "perspective",
//   imageType = "full",
// }) => {
//   // ======================================
//   //  STATE MANAGEMENT
//   // ======================================
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const [imageError, setImageError] = useState(false);

//   // ======================================
//   //  NULL SAFETY CHECK
//   // ======================================
//   if (!industry || typeof industry !== "object") {
//     return (
//       <div className="flex flex-col items-center justify-center h-[380px] bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border-2 border-dashed border-red-300 p-6">
//         <i className="fas fa-exclamation-circle text-5xl text-red-400 mb-3" />
//         <p className="text-red-600 font-bold">No Data</p>
//         <p className="text-red-400 text-sm mt-1 text-center">
//           Industry object is undefined
//         </p>
//       </div>
//     );
//   }

//   // ======================================
//   // 🔧 SAFE DATA EXTRACTION WITH DEFAULTS
//   // ======================================
//   const data = {
//     id: industry.id || `item-${Date.now()}`,
//     slug: String(
//       industry.slug ||
//         industry.title?.toLowerCase().replace(/\s+/g, "-") ||
//         "unknown",
//     ),
//     title: String(industry.title || industry.name || "Untitled"),
//     description: String(
//       industry.description || industry.shortDesc || "No description available.",
//     ),
//     image:
//       industry.image ||
//       industry.img ||
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
//     icon: industry.icon || industry.iconClass || "fas fa-building",
//     tags: Array.isArray(industry.tags) ? industry.tags : [],
//     ...industry,
//   };

//   // ======================================
//   // 🎨 VARIANT CONFIGURATION
//   // ======================================
//   const isDark = variant === "research-dark";
//   const isFullImage = imageType === "full";

//   // Dynamic styling based on variant
//   const styles = {
//     card: [
//       "group relative block overflow-hidden rounded-2xl cursor-pointer",
//       "transition-all duration-500 ease-out",
//       isFullImage ? "h-[420px]" : "h-[380px]",
//       isDark
//         ? "bg-gradient-to-br from-[#12324f] via-[#0d2240] to-[#0a1929]"
//         : "bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30",
//       "hover:-translate-y-3 hover:scale-[1.02]",
//     ].join(" "),

//     shadow: isDark
//       ? "0 8px 32px rgba(11, 29, 51, 0.5), 0 0 0 1px rgba(253, 185, 19, 0.08)"
//       : "0 8px 28px rgba(11, 29, 51, 0.12), 0 0 0 1px rgba(11, 29, 51, 0.04)",

//     iconBadge: [
//       "w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4",
//       "transition-all duration-500 shadow-lg relative z-10",
//       isDark
//         ? "bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 text-[#FFD54F] border-2 border-[#FDB913]/50 backdrop-blur-sm"
//         : "bg-gradient-to-br from-[#FDB913] to-[#FFD54F] text-[#12324f] shadow-yellow-400/30",
//     ].join(" "),

//     title: [
//       "text-xl font-bold mb-2 leading-tight transition-all duration-300 line-clamp-2",
//       isDark ? "text-white" : "text-[#12324f]",
//       "group-hover:bg-gradient-to-r group-hover:from-[#FDB913] group-hover:via-[#FFD54F] group-hover:to-[#FDB913]",
//       "group-hover:bg-clip-text group-hover:text-transparent",
//     ].join(" "),

//     description: [
//       "text-sm leading-relaxed mb-4 transition-opacity duration-300 line-clamp-3",
//       isDark
//         ? "text-white/65 group-hover:text-white/85"
//         : "text-[#12324f]/75 group-hover:text-[#12324f]",
//     ].join(" "),

//     tag: (idx) =>
//       [
//         "px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300",
//         isDark
//           ? "bg-yellow-500/15 text-[#FFD54F] border border-yellow-500/25 hover:bg-yellow-500/25"
//           : "bg-[#12324f]/8 text-[#12324f] hover:bg-[#12324f]/15",
//         "group-hover:bg-gradient-to-r group-hover:from-[#FDB913] group-hover:to-[#FFD54F]",
//         "group-hover:text-[#12324f] group-hover:border-transparent group-hover:-translate-y-0.5 group-hover:shadow-md",
//       ].join(" "),

//     arrowBtn: [
//       "absolute bottom-6 right-6 w-11 h-11 rounded-full flex items-center justify-center",
//       "opacity-0 -translate-x-3 transition-all duration-400 z-20",
//       isDark
//         ? "bg-gradient-to-br from-[#FDB913] to-[#FFD54F] text-[#12324f] shadow-lg shadow-yellow-500/30"
//         : "bg-gradient-to-br from-[#12324f] to-[#12324f] text-[#FDB913] shadow-lg shadow-blue-900/30",
//       "group-hover:opacity-100 group-hover:translate-x-0 hover:scale-115 hover:rotate-45",
//     ].join(" "),
//   };

//   return (
//     <Link
//       to={`/industries/${data.slug}`}
//       className={styles.card}
//       style={{ boxShadow: styles.shadow }}
//       aria-label={`Learn more about ${data.title}`}
//     >
//       {/*  Hover Glow Effect */}
//       <div
//         className="absolute inset-[-2px] bg-gradient-to-br from-[#FDB913] via-[#FFD54F] to-[#FDB913] rounded-[22px] opacity-0 group-hover:opacity-25 blur-xl transition-opacity duration-500 z-[-1]"
//         aria-hidden="true"
//       />

//       {/* 🔷 Corner Accent Decoration */}
//       <div
//         className={`absolute w-20 h-20 opacity-0 group-hover:opacity-40 transition-all duration-500 z-10 ${
//           isDark ? "bottom-0 left-0" : "top-0 right-0"
//         }`}
//         style={{
//           background: `linear-gradient(${isDark ? "-45deg" : "135deg"}, transparent 50%, #FDB913 50%)`,
//           borderRadius: isDark ? "0 20px 0 0" : "0 0 20px 0",
//         }}
//         aria-hidden="true"
//       />

//       {/* ================================ */}
//       {/* 🖼️ IMAGE SECTION                 */}
//       {/* ================================ */}
//       <div
//         className={`relative overflow-hidden ${isFullImage ? "h-[240px]" : "h-[160px]"}`}
//       >
//         {/* Loading Skeleton */}
//         {!imageLoaded && !imageError && (
//           <div
//             className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse"
//             aria-hidden="true"
//           />
//         )}

//         {/* Error State */}
//         {imageError && (
//           <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
//             <i className="fas fa-image text-4xl text-gray-400" />
//           </div>
//         )}

//         {/* Image Element */}
//         <img
//           src={data.image}
//           alt={`${data.title} visualization`}
//           className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
//             imageLoaded ? "opacity-100" : "opacity-0"
//           } ${imageError ? "hidden" : ""}`}
//           loading="lazy"
//           onLoad={() => setImageLoaded(true)}
//           onError={(e) => {
//             console.warn(`⚠️ Failed to load image: ${data.image}`);
//             setImageError(true);
//             e.target.style.display = "none";
//           }}
//         />

//         {/* Gradient Overlay */}
//         <div
//           className={`absolute inset-0 transition-all duration-500 ${
//             isDark
//               ? "bg-gradient-to-b from-transparent via-[#12324f]/30 to-[#12324f]/95"
//               : "bg-gradient-to-b from-transparent via-black/20 to-black/60"
//           } group-hover:from-transparent group-hover:via-black/40 group-hover:to-black/75`}
//           aria-hidden="true"
//         />

//         {/* Hover Icon Overlay */}
//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 pointer-events-none">
//           <div className="w-16 h-16 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-2xl transform scale-50 group-hover:scale-100 transition-transform duration-500">
//             <FaExternalLinkAlt className="text-xl text-[#12324f]" />
//           </div>
//         </div>
//       </div>

//       {/* ================================ */}
//       {/* 📝 CONTENT SECTION               */}
//       {/* ================================ */}
//       <div className={`relative p-6 ${isFullImage ? "-mt-14" : ""}`}>
//         {/* Icon Badge */}
//         <div
//           className={styles.iconBadge}
//           style={{ transformStyle: "preserve-3d" }}
//         >
//           <i className={data.icon} />
//         </div>

//         {/* Title */}
//         <h3 className={styles.title}>{data.title}</h3>

//         {/* Description */}
//         <p className={styles.description}>{data.description}</p>

//         {/* Tags */}
//         {data.tags.length > 0 && (
//           <div className="flex flex-wrap gap-2 mb-3">
//             {data.tags.slice(0, 3).map((tag, idx) => (
//               <span key={`${data.id}-tag-${idx}`} className={styles.tag(idx)}>
//                 {String(tag)}
//               </span>
//             ))}

//             {data.tags.length > 3 && (
//               <span
//                 className={`self-center px-2 py-1 text-xs font-medium ${
//                   isDark ? "text-white/40" : "text-[#12324f]/40"
//                 }`}
//               >
//                 +{data.tags.length - 3}
//               </span>
//             )}
//           </div>
//         )}

//         {/* ➡️ Arrow Button */}
//         <div className={styles.arrowBtn} aria-hidden="true">
//           <FaArrowRight className="text-base" />
//         </div>

//         {/* Bottom Border Accent on Hover */}
//         <div
//           className={`absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 origin-left transition-transform duration-500 ${
//             isDark
//               ? "bg-gradient-to-r from-[#FDB913] to-[#FFD54F]"
//               : "bg-gradient-to-r from-[#12324f] to-[#12324f]"
//           } group-hover:scale-x-100`}
//           aria-hidden="true"
//         />
//       </div>
//     </Link>
//   );
// };

// export default IndustryTileCard;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

/**
 * IndustryTileCard - Premium Navy & Gold Theme
 * Optimized for dark navy backgrounds
 */

const IndustryTileCard = ({
  industry,
  variant = "perspective",
  imageType = "full",
}) => {
  // ======================================
  //  STATE MANAGEMENT
  // ======================================
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // ======================================
  //  NULL SAFETY CHECK
  // ======================================
  if (!industry || typeof industry !== "object") {
    return (
      <div className="flex flex-col items-center justify-center h-[380px] bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl border-2 border-dashed border-red-500/30 p-8 backdrop-blur-sm">
        <i className="fas fa-exclamation-circle text-5xl text-red-400/60 mb-4" />
        <p className="text-red-300/80 font-bold text-lg">No Data Available</p>
        <p className="text-red-400/50 text-sm mt-2 text-center">
          Industry object is undefined
        </p>
      </div>
    );
  }

  // ======================================
  // 🔧 SAFE DATA EXTRACTION WITH DEFAULTS
  // ======================================
  const data = {
    id:
      industry.id ||
      `item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    slug: String(
      industry.slug ||
        industry.title?.toLowerCase().replace(/[^a-z0-9]+/g, "-") ||
        "unknown",
    ).replace(/^-|-$/g, ""),
    title: String(industry.title || industry.name || "Untitled Industry"),
    description: String(
      industry.description ||
        industry.shortDesc ||
        industry.desc ||
        "No description available.",
    ),
    image:
      industry.image ||
      industry.img ||
      industry.imageUrl ||
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    icon: industry.icon,
    tags: Array.isArray(industry.tags)
      ? industry.tags.filter((t) => t != null).map(String)
      : [],
    ...industry,
  };

  // ======================================
  // 🎨 VARIANT CONFIGURATION
  // ======================================
  const isDark = variant === "research-dark";
  const isFullImage = imageType === "full";

  return (
    <Link
      // to={data.link}
      className={`group relative block overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ${
        isFullImage ? "h-[430px]" : "h-[420px]"
      } ${
        isDark
          ? "bg-gradient-to-br from-[#0d2240]/80 to-[#081629]/90 border border-yellow-500/10"
          : "bg-gradient-to-br from-white/[0.07] to-white/[0.03] border border-white/10"
      } hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl backdrop-blur-md`}
      style={{
        boxShadow: isDark
          ? "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(253, 185, 19, 0.05)"
          : "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
      }}
      aria-label={`Learn more about ${data.title}`}
    >
      {/*  Hover Glow Effect */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 ${
          isDark
            ? "bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-500/5"
            : "bg-gradient-to-br from-white/10 via-transparent to-white/5"
        }`}
        aria-hidden="true"
      />

      {/* 🔷 Corner Accent */}
      <div
        className={`absolute w-24 h-24 opacity-0 group-hover:opacity-60 transition-all duration-500 z-10 pointer-events-none ${
          isDark ? "bottom-0 right-0" : "top-0 left-0"
        }`}
        style={{
          background: `linear-gradient(${isDark ? "45deg" : "-135deg"}, transparent 50%, ${isDark ? "#FDB913" : "rgba(255,255,255,0.3)"} 50%)`,
          borderRadius: isDark ? "0 0 20px 0" : "0 20px 0 0",
        }}
        aria-hidden="true"
      />

      {/* ================================ */}
      {/* 🖼️ IMAGE SECTION                 */}
      {/* ================================ */}
      <div
        className={`relative overflow-hidden ${isFullImage ? "h-[260px]" : "h-[200px]"}`}
      >
        {/* Loading Skeleton */}
        {!imageLoaded && !imageError && (
          <div
            className="absolute inset-0 bg-gradient-to-r from-gray-700/50 via-gray-600/30 to-gray-700/50 animate-pulse"
            aria-hidden="true"
          />
        )}

        {/* Error State */}
        {imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <div className="text-center p-4">
              <i className="fas fa-image text-4xl text-gray-600 mb-2" />
              <p className="text-xs text-gray-600">Image unavailable</p>
            </div>
          </div>
        )}

        {/* Image Element */}
        <img
          src={data.image}
          alt={`${data.title} visualization`}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          } ${imageError ? "hidden" : ""}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            setImageError(true);
            e.target.style.display = "none";
          }}
        />

        {/* Gradient Overlay */}
        {/* <div
          className={`absolute inset-0 transition-all duration-500 ${
            isDark
              ? "bg-gradient-to-b from-transparent via-black/40 to-[#12324f]"
              : "bg-gradient-to-b from-transparent via-black/30 to-black/70"
          }`}
          aria-hidden="true"
        /> */}

        {/* Hover Icon Overlay */}
        {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 pointer-events-none">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transform scale-50 group-hover:scale-100 transition-transform duration-500 ${
              isDark
                ? "bg-[#FDB913] text-[#12324f]"
                : "bg-white/95 text-[#12324f]"
            }`}
          >
            <FaExternalLinkAlt className="text-xl" />
          </div>
        </div> */}
      </div>

      {/* ================================ */}
      {/* 📝 CONTENT SECTION               */}
      {/* ================================ */}
      <div className={`relative p-6 ${isFullImage ? "-mt-14" : ""}`}>
        {/* Icon Badge */}
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-all duration-500 relative z-10 ${
            isDark
              ? "bg-linear-to-br from-yellow-500/25 to-yellow-600/10 text-[#FFD54F] border-2 border-[#FDB913]/40 shadow-lg shadow-yellow-500/10"
              : "bg-gradient-to-br from-[#FDB913] to-[#FFD54F] text-[#12324f] shadow-lg shadow-yellow-400/20"
          } group-hover:rotate-y-360 group-hover:scale-110 group-hover:shadow-xl`}
          style={{ transformStyle: "preserve-3d" }}
        >
          <i className={data.icon} />
        </div>

        {/* Title */}
        <h3
          className={`text-xl font-bold mb-2.5 leading-tight transition-all duration-300 line-clamp-2 ${
            isDark
              ? "text-white group-hover:bg-gradient-to-r group-hover:from-[#FDB913] group-hover:via-[#FFD54F] group-hover:to-[#FDB913] group-hover:bg-clip-text group-hover:text-transparent"
              : "text-[#12324f] group-hover:text-black"
          }`}
        >
          {data.title}
        </h3>

        {/* Description */}
        <p
          className={`text-sm leading-relaxed mb-4 transition-all duration-300 line-clamp-3 ${
            isDark
              ? "text-gray-400/80 group-hover:text-gray-300"
              : "text-[#12324f] group-hover:text-black"
          }`}
        >
          {data.description}
        </p>

        {/* Tags */}
        {data.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {data.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={`${data.id}-tag-${idx}-${String(tag).toLowerCase()}`}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-default ${
                  isDark
                    ? "bg-yellow-500/15 text-[#FFD54F] border border-yellow-500/25 hover:bg-yellow-500/25 hover:border-yellow-500/40"
                    : "bg-white/10 text-gray-200 border border-white/10 hover:bg-white/15"
                } group-hover:bg-gradient-to-r group-hover:from-[#FDB913] group-hover:to-[#FFD54F] group-hover:text-[#12324f] group-hover:border-transparent group-hover:shadow-md`}
              >
                {String(tag)}
              </span>
            ))}

            {data.tags.length > 3 && (
              <span className="self-center px-2 py-1.5 text-xs font-medium text-gray-500/60">
                +{data.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* ➡️ Arrow Button */}
        {/* <div
          className={`absolute bottom-6 right-6 w-11 h-11 rounded-full flex items-center justify-center opacity-0 -translate-x-3 transition-all duration-400 z-20 ${
            isDark
              ? "bg-gradient-to-br from-[#FDB913] to-[#FFD54F] text-[#12324f] shadow-lg shadow-yellow-500/25"
              : "bg-gradient-to-br from-[#FDB913] to-[#FFD54F] text-black border border-white/20"
          } group-hover:opacity-100 group-hover:translate-x-0 hover:scale-115 hover:rotate-45`}
          aria-hidden="true"
        >
          <FaArrowRight className="text-base" />
        </div> */}

        {/* Bottom Border Accent */}
        <div
          className={`absolute bottom-0 left-6 right-6 h-[2px] transform scale-x-0 origin-left transition-transform duration-500 ${
            isDark
              ? "bg-gradient-to-r from-[#FDB913] to-[#FFD54F]"
              : "bg-gradient-to-r from-white/40 to-white/10"
          } group-hover:scale-x-100`}
          aria-hidden="true"
        />
      </div>
    </Link>
  );
};

export default IndustryTileCard;
