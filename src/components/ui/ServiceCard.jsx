// import React from "react";
// import { Link } from "react-router-dom";
// import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

// const ServiceCard = ({ data, index = 0 }) => {
//   return (
//     <div className="group relative h-full w-full flex flex-col">
//       <Link
//         to={data.link}
//         className="block h-full w-full"
//         aria-label={`Learn more about ${data.title}`}
//       >
//         <div
//           className="relative bg-white overflow-hidden
//           shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]
//           hover:shadow-[0_12px_40px_-8px_rgba(59,130,246,0.25)]
//           transition-all duration-500 ease-out
//           h-full w-full flex flex-col
//           border border-transparent hover:border-blue-100/50"
//         >
//           {/* Image Container - Fixed Height */}
//           <div className="relative w-full h-56 lg:h-60 overflow-hidden flex-shrink-0">
//             <img
//               src={data.image}
//               alt={data.title}
//               loading="lazy"
//               className="w-full h-full object-cover transform
//                 group-hover:scale-110 transition-transform duration-700 ease-out"
//             />

//             {/* Gradient Overlay on Hover */}
//             <div
//               className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
//               opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//             />

//             {/* Category Badge */}
//             {data.category && (
//               <div className="absolute top-4 left-4 z-10">
//                 <span
//                   className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
//                   bg-white/95 backdrop-blur-sm text-gray-800 shadow-sm
//                   group-hover:bg-[#0B2A4A] group-hover:text-white transition-colors duration-300"
//                 >
//                   {data.category}
//                 </span>
//               </div>
//             )}

//             {/* External Link Icon on Hover */}
//             <div
//               className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full
//               bg-white/90 backdrop-blur-sm flex items-center justify-center
//               opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
//               transition-all duration-500 delay-100"
//             >
//               <FaExternalLinkAlt className="text-[#0B2A4A] text-sm" />
//             </div>
//           </div>

//           {/* Content Section - Flex Grow for Equal Height */}
//           <div className="flex-1 p-5 lg:p-6 flex flex-col min-h-0">
//             {/* Title */}
//             <h3
//               className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3 line-clamp-2
//               group-hover:text-[#0B2A4A] transition-colors duration-300"
//             >
//               {data.title}
//             </h3>

//             {/* Description - Flex Grow */}
//             <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
//               {data.description}
//             </p>

//             {/* Features Tags (Optional) */}
//             {data.features && data.features.length > 0 && (
//               <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
//                 {data.features.slice(0, 3).map((feature, idx) => (
//                   <span
//                     key={idx}
//                     className="px-2.5 py-1 text-xs font-medium rounded-md
//                     bg-gray-100 text-gray-600 group-hover:bg-primary-50
//                     group-hover:text-[#0B2A4A] transition-colors duration-300"
//                   >
//                     {feature}
//                   </span>
//                 ))}
//               </div>
//             )}

//             {/* CTA Button - Always at Bottom */}
//             <div className="mt-auto pt-4 border-t border-gray-100 group-hover:border-primary-100 transition-colors duration-300 flex-shrink-0">
//               <span
//                 className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2A4A]
//                 group-hover:gap-3 transition-all duration-300"
//               >
//                 Explore Service
//                 <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
//               </span>
//             </div>
//           </div>

//           {/* Animated Bottom Border */}
//           <div
//             className="absolute bottom-0 left-0 right-0 h-1 bg-[#0B2A4A]
//             scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
//           />
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default ServiceCard;

import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

// ============================================================
// 🎨 NAVY & GOLD BRAND COLORS
// ============================================================
const COLORS = {
  navy: {
    dark: "#0B1D33",
    mid: "#0D2847",
    light: "#132D4B",
  },
  gold: {
    primary: "#FDB913",
    light: "#FFD54F",
    gradient: "linear-gradient(135deg, #FDB913 0%, #FFD54F 100%)",
  },
};

const ServiceCard = ({ data, index = 0 }) => {
  return (
    <div className="group relative h-full w-full flex flex-col">
      <Link
        to={data.link}
        className="block h-full w-full"
        aria-label={`Learn more about ${data.title}`}
      >
        <div
          className={`relative bg-white overflow-hidden rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] h-full w-full flex flex-col border ${"border-gray-100 hover:border-[#FDB913]/40"}`}
          style={{
            boxShadow:
              "0 8px 30px rgba(11,29,51,0.08), 0 2px 10px rgba(11,29,51,0.04)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 25px 60px rgba(11,29,51,0.15), 0 0 40px rgba(253,185,19,0.1)";
            e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow =
              "0 8px 30px rgba(11,29,51,0.08), 0 2px 10px rgba(11,29,51,0.04)";
            e.currentTarget.style.transform = "translateY(0) scale(1)";
          }}
        >
          {/* ================================ */}
          {/* ✨ TOP ACCENT LINE (Hover)         */}
          {/* ================================ */}
          <div className="absolute top-0 left-0 right-0 h-[3px] origin-left z-20 bg-gradient-to-r from-[#FDB913] to-[#FFD54F] scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

          {/* ================================ */}
          {/* 🖼️ IMAGE CONTAINER               */}
          {/* ================================ */}
          <div className="relative w-full h-56 lg:h-64 overflow-hidden flex-shrink-0">
            {/* Main Image */}
            <img
              src={data.image}
              alt={data.title}
              loading="lazy"
              className="w-full h-full object-cover transform 
                group-hover:scale-110 transition-transform duration-700 ease-out"
            />

            {/* Multi-layer Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D33] via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

            {/* Vignette effect on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(circle at center, transparent 50%, rgba(11,29,51,0.2) 100%)",
              }}
            />

            {/* Category Badge - Top Left */}
            {data.category && (
              <div className="absolute top-4 left-4 z-10">
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold backdrop-blur-md shadow-lg border transition-all duration-300 group-hover:bg-[#FDB913] group-hover:text-[#0B1D33]"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    color: COLORS.navy.dark,
                    borderColor: "rgba(253,185,19,0.3)",
                  }}
                >
                  <i
                    className="fas fa-tag text-[10px]"
                    style={{ color: COLORS.gold.primary }}
                  />
                  {data.category}
                </span>
              </div>
            )}

            {/* External Link Icon - Bottom Right (Animated) */}
            <div
              className="absolute bottom-5 right-5 z-10 w-12 h-12 rounded-xl 
                bg-white/95 backdrop-blur-md flex items-center justify-center shadow-xl
                opacity-0 translate-y-4 scale-90 
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 
                transition-all duration-500 delay-100"
              style={{
                boxShadow: "0 6px 24px rgba(0,0,0,0.1)",
              }}
            >
              <FaExternalLinkAlt
                className="text-lg"
                style={{ color: COLORS.navy.dark }}
              />
            </div>

            {/* Star Rating Badge (Optional Enhancement) */}
            {data.rating && (
              <div className="absolute top-4 right-4 z-10">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold backdrop-blur-md shadow-md"
                  style={{
                    background: `${COLORS.gold.primary}ee`,
                    color: COLORS.navy.dark,
                    boxShadow: `0 4px 16px ${COLORS.gold.primary}40`,
                  }}
                >
                  <FaStar className="text-[10px]" />
                  {data.rating}
                </span>
              </div>
            )}
          </div>

          {/* ================================ */}
          {/* 📝 CONTENT SECTION                 */}
          {/* ================================ */}
          <div className="flex-1 p-6 lg:p-7 flex flex-col min-h-0 relative">
            {/* Icon/Number Badge (Optional Visual Enhancer) */}
            {data.icon && (
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 -mt-14 lg:-mt-16 relative z-10 shadow-lg"
                style={{
                  background: COLORS.gold.gradient,
                  boxShadow: `0 6px 24px ${COLORS.gold.primary}35`,
                }}
              >
                <i
                  className={`${data.icon} text-xl`}
                  style={{ color: COLORS.navy.dark }}
                />
              </div>
            )}

            {/* Title */}
            <h3
              className="text-xl lg:text-2xl font-bold mb-3 leading-tight tracking-tight line-clamp-2 
              transition-all duration-300 group-hover:text-transparent"
              style={{
                color: COLORS.navy.dark,
                backgroundImage: "linear-gradient(to right, #0B1D33, #0B1D33)",
                backgroundSize: "0% 100%",
                backgroundRepeat: "no-repeat",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundSize = "100% 100%")
              }
              onMouseLeave={(e) => (e.target.style.backgroundSize = "0% 100%")}
            >
              {data.title}
            </h3>

            {/* Subtitle (Optional) */}
            {data.subtitle && (
              <p
                className="text-sm font-semibold mb-3 uppercase tracking-wider"
                style={{ color: COLORS.gold.primary }}
              >
                {data.subtitle}
              </p>
            )}

            {/* Description - Flex Grow for Equal Height */}
            <p
              className="text-sm leading-relaxed mb-5 line-clamp-3 flex-grow"
              style={{ color: "#64748B" }}
            >
              {data.description}
            </p>

            {/* Features Tags - Enhanced Design */}
            {data.features && data.features.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-5 flex-shrink-0">
                {data.features.slice(0, 4).map((feature, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.3 }}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium cursor-default transition-all duration-300"
                    style={{
                      background: `${COLORS.navy.dark}06`,
                      color: COLORS.navy.mid,
                      border: `1px solid ${COLORS.navy.dark}12`,
                    }}
                  >
                    <i
                      className="fas fa-check mr-1.5 text-[8px]"
                      style={{ color: COLORS.gold.primary }}
                    />
                    {feature}
                  </motion.span>
                ))}
              </div>
            )}

            {/* Stats Row (Optional Enhancement) */}
            {data.stats && (
              <div
                className="grid grid-cols-3 gap-3 mb-5 py-4 px-4 rounded-xl"
                style={{
                  background: `${COLORS.navy.dark}04`,
                  border: `1px solid ${COLORS.navy.dark}08`,
                }}
              >
                {data.stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div
                      className="text-lg font-bold"
                      style={{ color: COLORS.navy.dark }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-[10px] uppercase tracking-wide"
                      style={{ color: "#94a3b8" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ============================ */}
            {/* CTA SECTION                     */}
            {/* ============================ */}
            <div
              className="mt-auto pt-5 flex items-center justify-between group/cta border-t-2 transition-all duration-300"
              style={{ borderColor: "rgba(11,29,51,0.06)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(253,185,19,0.3)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(11,29,51,0.06)")
              }
            >
              {/* Left Side - Text */}
              <span
                className="inline-flex items-center gap-2 text-sm font-bold tracking-wide uppercase transition-all duration-300 group-hover/cta:gap-3"
                style={{ color: COLORS.navy.dark }}
              >
                Explore Service
                <FaArrowRight
                  className="text-xs transition-transform duration-300 group-hover/cta:translate-x-1.5"
                  style={{ color: COLORS.gold.primary }}
                />
                {/* Animated underline */}
                <span
                  className="block h-[2px] w-0 group-hover/cta:w-full transition-all duration-300"
                  style={{ background: COLORS.gold.gradient }}
                />
              </span>

              {/* Right Side - Arrow Circle */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover/cta:scale-110 group-hover/cta:rotate-45"
                style={{
                  background: COLORS.navy.dark,
                  boxShadow: "0 4px 14px rgba(11,29,51,0.25)",
                }}
              >
                <FaArrowRight
                  className="text-sm"
                  style={{ color: COLORS.gold.light }}
                />
              </div>
            </div>
          </div>

          {/* ================================ */}
          {/* 🔻 BOTTOM ACCENT BAR             */}
          {/* ================================ */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-l from-[#FDB913] via-[#FFD54F] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
