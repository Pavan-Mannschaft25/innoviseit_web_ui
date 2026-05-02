// // // import React from "react";

// // // const IndustryHoverCard = ({ industry }) => {
// // //   const Icon = industry.icon;

// // //   return (
// // //     <div className="group relative h-[340px] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
// // //       {/* IMAGE */}
// // //       <img
// // //         src={industry.image}
// // //         alt={industry.name}
// // //         className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
// // //       />

// // //       {/* DARK OVERLAY */}
// // //       <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A] via-[#0B2A4A]/70 to-transparent opacity-80"></div>

// // //       {/* FRONT CONTENT */}
// // //       <div className="absolute bottom-0 p-6 text-white z-10 transition-all duration-500 group-hover:-translate-y-10">
// // //         <div className="flex items-center gap-3 mb-2">
// // //           <Icon className="text-xl" />
// // //           <h3 className="text-lg font-semibold">{industry.name}</h3>
// // //         </div>
// // //         <p className="text-sm opacity-90">{industry.description}</p>
// // //       </div>

// // //       {/* HOVER CONTENT */}
// // //       <div className="absolute inset-0 p-6 text-white opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end bg-[#0B2A4A]/90">
// // //         <h3 className="text-lg font-semibold mb-3">{industry.name}</h3>

// // //         <div className="text-sm mb-3 space-y-1">
// // //           <p>👥 {industry.stats.clients}</p>
// // //           <p>🚀 {industry.stats.projects}</p>
// // //           <p>⏳ {industry.stats.experience}</p>
// // //         </div>

// // //         <ul className="text-sm text-gray-300 mb-4">
// // //           {industry.capabilities.map((cap, i) => (
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
// //   if (!industry) return null; // ✅ prevents crash

// //   const Icon = industry.icon || FaBuilding;

// //   return (
// //     <div className="group relative h-[340px] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
// //       {/* IMAGE */}
// //       <img
// //         src={industry.image || "/images/default.jpg"}
// //         alt={industry.name}
// //         className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
// //       />

// //       {/* OVERLAY */}
// //       <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A] via-[#0B2A4A]/70 to-transparent opacity-80"></div>

// //       {/* FRONT */}
// //       <div className="absolute bottom-0 p-6 text-white z-10 transition-all duration-500 group-hover:-translate-y-10">
// //         <div className="flex items-center gap-3 mb-2">
// //           <Icon className="text-xl" />
// //           <h3 className="text-lg font-semibold">{industry.name}</h3>
// //         </div>
// //         <p className="text-sm opacity-90">{industry.description}</p>
// //       </div>

// //       {/* HOVER */}
// //       <div className="absolute inset-0 p-6 text-white opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end bg-[#0B2A4A]/90">
// //         <h3 className="text-lg font-semibold mb-3">{industry.name}</h3>

// //         <div className="text-sm mb-3 space-y-1">
// //           <p>👥 {industry.stats?.clients}</p>
// //           <p>🚀 {industry.stats?.projects}</p>
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

// import React from "react";
// import { FaBuilding } from "react-icons/fa";

// const IndustryHoverCard = ({ industry }) => {
//   if (!industry) return null;

//   const Icon = industry.icon || FaBuilding;

//   return (
//     <div className="group relative h-[340px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 cursor-pointer">
//       {/* IMAGE */}
//       <img
//         src={industry.image || "/images/default.jpg"}
//         alt={industry.name}
//         className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
//       />

//       {/* GRADIENT OVERLAY */}
//       <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A] via-[#0B2A4A]/70 to-transparent"></div>

//       {/* FRONT CONTENT */}
//       <div className="absolute bottom-0 p-6 text-white z-10 transition-all duration-500 group-hover:-translate-y-10">
//         <div className="flex items-center gap-3 mb-2">
//           <Icon className="text-xl" />
//           <h3 className="text-lg font-semibold">{industry.name}</h3>
//         </div>
//         <p className="text-sm opacity-90">{industry.description}</p>
//       </div>

//       {/* HOVER CONTENT */}
//       <div className="absolute inset-0 p-6 text-white opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end bg-[#0B2A4A]/90">
//         <h3 className="text-lg font-semibold mb-3">{industry.name}</h3>

//         <div className="text-sm mb-3 space-y-1">
//           <p>👥 {industry.stats?.clients}</p>
//           <p>🚀 {industry.stats?.projects}</p>
//           <p>⏳ {industry.stats?.experience}</p>
//         </div>

//         <ul className="text-sm text-gray-300 mb-4">
//           {industry.capabilities?.map((cap, i) => (
//             <li key={i}>• {cap}</li>
//           ))}
//         </ul>

//         <button className="border border-white px-4 py-2 rounded-md text-sm hover:bg-white hover:text-[#0B2A4A] transition">
//           Explore →
//         </button>
//       </div>
//     </div>
//   );
// };

// export default IndustryHoverCard;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaTimes, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const IndustryTileCard = ({
  industry,
  variant = "perspective",
  imageType = "half",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!industry) return null;

  // Variant-based styling
  const variantClasses = {
    perspective: "bg-white border border-gray-200",
    "research-dark": "bg-[#0B2A4A] text-white",
    "research-light": "bg-gray-50 border border-gray-200",
  };

  const labelColors = {
    perspective: "bg-primary-100 text-primary-700",
    "research-dark": "bg-white/20 text-white",
    "research-light": "bg-gray-200 text-gray-800",
  };

  return (
    <motion.div
      className={`group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${variantClasses[variant]} h-[420px] lg:h-[480px]`}
      whileHover={{ y: -4 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Front Toggle Button (Accessibility) */}
      <button
        className="absolute inset-0 z-30 w-full h-full opacity-0"
        aria-expanded={isExpanded}
        aria-label={`${industry.name}: ${isExpanded ? "Close details" : "View details"}`}
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
      />

      {/* CTA Cover Link */}
      <Link
        to={industry.link || `/industries/${industry.id}`}
        className="absolute inset-0 z-20"
        aria-label={`Explore ${industry.name}`}
        tabIndex={-1}
      />

      {/* Close Button (when expanded) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute top-4 right-4 z-40 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(false);
            }}
            aria-label="Close"
          >
            <FaTimes className="text-gray-700 text-sm" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Label Badge */}
      <div className="absolute top-5 left-5 z-10">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${labelColors[variant]}`}
        >
          {industry.category || "Industry"}
        </span>
      </div>

      {/* Sliding Content Container */}
      <div className="relative w-full h-full overflow-hidden">
        {/* FRONT CONTENT */}
        <motion.div
          className="absolute inset-0 flex flex-col"
          animate={{
            y: isExpanded ? "-100%" : "0%",
            opacity: isExpanded ? 0 : 1,
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Image Section */}
          <div
            className={`${imageType === "full" ? "h-full" : "h-full"} overflow-hidden`}
          >
            <img
              src={industry.image || "/images/default-industry.jpg"}
              alt={industry.name}
              loading="lazy"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />

            {/* Gradient Overlay for Full Image Variant */}
            {imageType === "full" && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            )}
          </div>

          {/* Title Section (for half-image) or overlay (for full-image) */}
          <div
            className={`flex-1 p-6 ${imageType === "full" ? "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" : ""}`}
          >
            <h3
              className={`text-xl lg:text-2xl font-bold leading-tight ${imageType === "full" ? "text-white" : variant === "research-dark" ? "text-white" : "text-gray-900"}`}
            >
              {industry.name}
            </h3>

            {imageType === "half" && (
              <p
                className={`mt-2 text-sm line-clamp-2 ${variant === "research-dark" ? "text-gray-300" : "text-gray-600"}`}
              >
                {industry.description}
              </p>
            )}

            {/* Expand Indicator */}
            <div className="mt-4 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span
                className={
                  variant === "research-dark"
                    ? "text-white"
                    : "text-primary-600"
                }
              >
                Explore
              </span>
              <FaArrowRight
                className={`text-xs ${variant === "research-dark" ? "text-white" : "text-primary-600"}`}
              />
            </div>
          </div>
        </motion.div>

        {/* BACK CONTENT (Slides up when expanded) */}
        <motion.div
          className="absolute inset-0 z-10 flex flex-col"
          initial={{ y: "100%", opacity: 0 }}
          animate={{
            y: isExpanded ? "0%" : "100%",
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Background Color/Overlay */}
          <div
            className={`absolute inset-0 ${variant === "research-dark" ? "bg-[#0B2A4A]/98" : "bg-white/98"} backdrop-blur-sm`}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full p-6 lg:p-8 overflow-y-auto">
            {/* Title */}
            <h3
              className={`text-xl lg:text-2xl font-bold mb-4 ${variant === "research-dark" ? "text-white" : "text-gray-900"}`}
            >
              {industry.name}
            </h3>

            {/* Description */}
            <p
              className={`text-sm leading-relaxed mb-6 flex-grow ${variant === "research-dark" ? "text-gray-300" : "text-gray-600"}`}
            >
              {industry.detailedDescription || industry.description}
            </p>

            {/* Stats Grid */}
            {industry.stats && (
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div
                  className={`p-3 rounded-lg ${variant === "research-dark" ? "bg-white/10" : "bg-gray-100"}`}
                >
                  <p
                    className={`text-lg font-bold ${variant === "research-dark" ? "text-white" : "text-primary-600"}`}
                  >
                    {industry.stats.clients || "100+"}
                  </p>
                  <p
                    className={`text-xs uppercase tracking-wide ${variant === "research-dark" ? "text-gray-400" : "text-gray-500"}`}
                  >
                    Clients
                  </p>
                </div>
                <div
                  className={`p-3 rounded-lg ${variant === "research-dark" ? "bg-white/10" : "bg-gray-100"}`}
                >
                  <p
                    className={`text-lg font-bold ${variant === "research-dark" ? "text-white" : "text-primary-600"}`}
                  >
                    {industry.stats.projects || "200+"}
                  </p>
                  <p
                    className={`text-xs uppercase tracking-wide ${variant === "research-dark" ? "text-gray-400" : "text-gray-500"}`}
                  >
                    Projects
                  </p>
                </div>
                <div
                  className={`p-3 rounded-lg ${variant === "research-dark" ? "bg-white/10" : "bg-gray-100"}`}
                >
                  <p
                    className={`text-lg font-bold ${variant === "research-dark" ? "text-white" : "text-primary-600"}`}
                  >
                    {industry.stats.experience || "10+ yrs"}
                  </p>
                  <p
                    className={`text-xs uppercase tracking-wide ${variant === "research-dark" ? "text-gray-400" : "text-gray-500"}`}
                  >
                    Experience
                  </p>
                </div>
              </div>
            )}

            {/* Capabilities List */}
            {industry.capabilities && industry.capabilities.length > 0 && (
              <ul
                className={`space-y-2 mb-6 ${variant === "research-dark" ? "text-gray-300" : "text-gray-600"}`}
              >
                {industry.capabilities.slice(0, 4).map((cap, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span
                      className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${variant === "research-dark" ? "bg-primary-400" : "bg-primary-600"}`}
                    />
                    {cap}
                  </li>
                ))}
              </ul>
            )}

            {/* CTA Button */}
            <div className="mt-auto pt-4 border-t border-current/10">
              <Link
                to={industry.link || `/industries/${industry.id}`}
                onClick={(e) => e.stopPropagation()}
                className={`inline-flex items-center gap-3 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300
                  ${
                    variant === "research-dark"
                      ? "bg-white text-[#0B2A4A] hover:bg-gray-100"
                      : "bg-[#0B2A4A] text-white hover:bg-[#0d355c]"
                  }
                  hover:gap-4 group/btn`}
              >
                <span>Expand</span>
                <FaChevronRight className="text-xs transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Line Animation */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-blue-500 to-cyan-500 origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default IndustryTileCard;
