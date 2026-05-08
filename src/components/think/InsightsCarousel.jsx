// import React, { useState, useMemo, memo, useCallback } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Navigation,
//   Pagination,
//   Autoplay,
//   EffectCreative,
// } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaArrowRight,
//   FaArrowLeft,
//   FaBookOpen,
//   FaChartLine,
//   FaMicroscope,
//   FaUniversity,
//   FaClock,
//   FaExternalLinkAlt,
//   FaQuoteLeft,
// } from "react-icons/fa";

// // ==================== BRAND COLORS ====================
// const BRAND = {
//   navy: {
//     dark: "#0B1D33",
//     mid: "#0D2847",
//     light: "#143A63",
//     lighter: "#1A4570",
//   },
//   gold: {
//     primary: "#FDB913",
//     light: "#FFD54F",
//     gradient: "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
//   },
// };

// // ==================== ANIMATION VARIANTS ====================
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.25, 0.46, 0.45, 0.94],
//     },
//   },
// };

// // ==================== DATA WITH ICONS ====================
// const insightsData = [
//   {
//     id: 1,
//     category: "Research Report",
//     categoryIcon: FaChartLine,
//     title: "Reinvent for Growth: The Signals Shaping Media's Next Chapter",
//     desc: "Five critical signals reveal how audience behavior and emerging technologies are fundamentally reshaping growth strategies in the media landscape.",
//     image:
//       "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
//     readTime: "8 min read",
//     date: "Dec 2025",
//     featured: true,
//   },
//   {
//     id: 2,
//     category: "Life Sciences",
//     categoryIcon: FaMicroscope,
//     title: "Reinventing Biopharma: From Lab to Line Excellence",
//     desc: "Discover how pharmaceutical manufacturing is evolving into a strategic differentiator that drives innovation and operational excellence.",
//     image:
//       "https://images.unsplash.com/photo-1581093588401-22c5d9c8f1b4?w=800&h=600&fit=crop",
//     readTime: "12 min read",
//     date: "Nov 2025",
//     featured: false,
//   },
//   {
//     id: 3,
//     category: "Financial Services",
//     categoryIcon: FaUniversity,
//     title: "Top Banking Trends for 2026: AI-Powered Transformation",
//     desc: "Artificial intelligence, smart money solutions, and shifting competitive dynamics are redefining the future of banking services.",
//     image:
//       "https://images.unsplash.com/photo-1563986768494-8dee887dda63?w=800&h=600&fit=crop",
//     readTime: "10 min read",
//     date: "Jan 2026",
//     featured: true,
//   },
//   {
//     id: 4,
//     category: "Public Sector",
//     categoryIcon: FaBookOpen,
//     title: "Reimagining Public Services for the Digital Age",
//     desc: "How technology aligned with human needs is driving unprecedented public value and citizen engagement in government services.",
//     image:
//       "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
//     readTime: "7 min read",
//     date: "Oct 2025",
//     featured: false,
//   },
//   {
//     id: 5,
//     category: "Technology",
//     categoryIcon: FaChartLine,
//     title: "The Future of Cloud-Native Enterprise Architecture",
//     desc: "Exploring next-generation cloud strategies that enable scalability, resilience, and rapid innovation for global enterprises.",
//     image:
//       "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
//     readTime: "15 min read",
//     date: "Feb 2026",
//     featured: false,
//   },
// ];

// // ==================== CUSTOM HOOKS ====================
// const useActiveSlide = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleSlideChange = useCallback((swiper) => {
//     setActiveIndex(swiper.activeIndex);
//   }, []);

//   return { activeIndex, handleSlideChange };
// };

// // ==================== MEMOIZED COMPONENTS ====================

// // Category Badge Component
// const CategoryBadge = memo(({ category, icon: Icon, variant = "default" }) => {
//   const styles = {
//     default: {
//       background: `${BRAND.gold.primary}15`,
//       color: BRAND.gold.primary,
//       border: `1px solid ${BRAND.gold.primary}30`,
//     },
//     dark: {
//       background: "rgba(255,255,255,0.15)",
//       color: "white",
//       border: "1px solid rgba(255,255,255,0.3)",
//       backdropFilter: "blur(10px)",
//     },
//   };

//   return (
//     <motion.span
//       initial={{ opacity: 0, x: -20 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ delay: 0.2 }}
//       className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
//       style={styles[variant]}
//     >
//       <Icon className="text-[10px]" aria-hidden="true" />
//       {category}
//     </motion.span>
//   );
// });

// CategoryBadge.displayName = "CategoryBadge";

// // Insight Card Component
// const InsightCard = memo(({ item, isActive }) => (
//   <motion.div
//     className={`group relative h-[520px] lg:h-[560px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${
//       isActive ? "scale-[1.02]" : "scale-95 opacity-80"
//     }`}
//     whileHover={{ y: -10, scale: 1.03 }}
//     layout
//   >
//     {/* Background Image */}
//     <div className="absolute inset-0">
//       <img
//         src={item.image}
//         alt={item.title}
//         className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
//         loading="lazy"
//       />

//       {/* Multi-layer Gradient Overlay */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background: `
//             linear-gradient(
//               to top,
//               rgba(11, 29, 51, 0.98) 0%,
//               rgba(11, 29, 51, 0.85) 30%,
//               rgba(11, 29, 51, 0.4) 60%,
//               transparent 100%
//             )
//           `,
//         }}
//       />

//       {/* Subtle Pattern Overlay */}
//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//           backgroundSize: "24px 24px",
//         }}
//         aria-hidden="true"
//       />
//     </div>

//     {/* Featured Badge */}
//     {item.featured && (
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3 }}
//         className="absolute top-5 right-5 z-20"
//       >
//         <span
//           className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
//           style={{
//             background: BRAND.gold.gradient,
//             color: BRAND.navy.dark,
//             boxShadow: `0 4px 15px ${BRAND.gold.primary}40`,
//           }}
//         >
//           ⭐ Featured
//         </span>
//       </motion.div>
//     )}

//     {/* Content Container */}
//     <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 z-10">
//       {/* Top Meta Info */}
//       <div className="mb-4 space-y-3">
//         <CategoryBadge
//           category={item.category}
//           icon={item.categoryIcon}
//           variant="dark"
//         />

//         <div
//           className="flex items-center gap-4 text-xs font-medium"
//           style={{ color: "rgba(255,255,255,0.6)" }}
//         >
//           <span className="flex items-center gap-1.5">
//             <FaClock className="text-[10px]" aria-hidden="true" />
//             {item.readTime}
//           </span>
//           <span>•</span>
//           <span>{item.date}</span>
//         </div>
//       </div>

//       {/* Title & Description */}
//       <div className="space-y-3">
//         <h3
//           className="text-xl lg:text-2xl font-bold leading-tight text-white group-hover:text-transparent group-hover:bg-clip-text transition-all duration-500"
//           style={{
//             backgroundImage: isActive ? BRAND.gold.gradient : "transparent",
//             WebkitBackgroundClip: isActive ? "text" : "unset",
//             backgroundClip: isActive ? "text" : "unset",
//           }}
//         >
//           {item.title}
//         </h3>

//         <AnimatePresence mode="wait">
//           {(isActive || true) && (
//             <motion.p
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="text-sm leading-relaxed line-clamp-3 overflow-hidden"
//               style={{ color: "rgba(255,255,255,0.7)" }}
//             >
//               {item.desc}
//             </motion.p>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Action Button */}
//       <motion.div
//         className="mt-5 pt-4"
//         style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
//       >
//         <button
//           className="group/btn inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:gap-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent"
//           style={{
//             color: isActive ? BRAND.gold.primary : "white",
//             "--tw-ring-color": BRAND.gold.primary,
//           }}
//           aria-label={`Read more about ${item.title}`}
//         >
//           <span>Read Article</span>

//           <span
//             className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover/btn:scale-110"
//             style={{
//               background: isActive
//                 ? `${BRAND.gold.primary}20`
//                 : "rgba(255,255,255,0.1)",
//               border: `1px solid ${isActive ? BRAND.gold.primary : "rgba(255,255,255,0.2)"}`,
//             }}
//           >
//             <FaArrowRight
//               className="text-xs transition-transform duration-300 group-hover/btn:translate-x-1"
//               aria-hidden="true"
//             />
//           </span>
//         </button>
//       </motion.div>
//     </div>

//     {/* Hover Glow Effect */}
//     <div
//       className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
//       aria-hidden="true"
//     />

//     {/* Corner Decoration */}
//     <div
//       className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
//       style={{
//         background: `linear-gradient(135deg, transparent 50%, ${BRAND.gold.primary}15 100%)`,
//         borderRadius: "0 16px 0 0",
//       }}
//       aria-hidden="true"
//     />
//   </motion.div>
// ));

// InsightCard.displayName = "InsightCard";

// // Custom Navigation Button Component
// const NavButton = memo(({ direction, onClick, disabled }) => {
//   const isPrev = direction === "prev";

//   return (
//     <motion.button
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.95 }}
//       onClick={onClick}
//       disabled={disabled}
//       className="absolute top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 group"
//       style={{
//         [isPrev ? "left" : "right"]: "-28px",
//         background: BRAND.navy.dark,
//         border: `2px solid ${BRAND.gold.primary}`,
//         color: BRAND.gold.primary,
//         boxShadow: `0 4px 20px ${BRAND.navy.dark}40`,
//         "--tw-ring-color": BRAND.gold.primary,
//         "--tw-ring-offset-color": "white",
//       }}
//       aria-label={`${isPrev ? "Previous" : "Next"} slide`}
//     >
//       {isPrev ? (
//         <FaArrowLeft
//           className="text-lg group-hover:-translate-x-1 transition-transform"
//           aria-hidden="true"
//         />
//       ) : (
//         <FaArrowRight
//           className="text-lg group-hover:translate-x-1 transition-transform"
//           aria-hidden="true"
//         />
//       )}
//     </motion.button>
//   );
// });

// NavButton.displayName = "NavButton";

// // Progress Indicator Component
// const ProgressIndicator = memo(({ total, active, onDotClick }) => (
//   <div
//     className="flex items-center gap-2 mt-8 justify-center"
//     role="tablist"
//     aria-label="Slide navigation"
//   >
//     {[...Array(total)].map((_, idx) => (
//       <button
//         key={idx}
//         onClick={() => onDotClick(idx)}
//         className="relative h-2 rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
//         style={{
//           width: idx === active ? "48px" : "12px",
//           background: idx === active ? BRAND.gold.primary : "rgba(0,0,0,0.15)",
//           boxShadow:
//             idx === active ? `0 0 12px ${BRAND.gold.primary}50` : "none",
//           "--tw-ring-color": BRAND.gold.primary,
//           "--tw-ring-offset-color": "white",
//         }}
//         role="tab"
//         aria-selected={idx === active}
//         aria-label={`Go to slide ${idx + 1}`}
//       >
//         {idx === active && (
//           <motion.div
//             layoutId="activeDot"
//             className="absolute inset-0 rounded-full"
//             style={{ background: BRAND.gold.gradient }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//           />
//         )}
//       </button>
//     ))}
//   </div>
// ));

// ProgressIndicator.displayName = "ProgressIndicator";

// // Main Insights Carousel Component
// const InsightsCarousel = () => {
//   const swiperRef = React.useRef(null);
//   const { activeIndex, handleSlideChange } = useActiveSlide();

//   // Memoized handlers
//   const handlePrev = useCallback(() => {
//     swiperRef.current?.slidePrev();
//   }, []);

//   const handleNext = useCallback(() => {
//     swiperRef.current?.slideNext();
//   }, []);

//   const handleDotClick = useCallback((index) => {
//     swiperRef.current?.slideTo(index);
//   }, []);

//   return (
//     <section
//       className="relative py-20 lg:py-32 overflow-hidden"
//       style={{
//         background: `linear-gradient(180deg, #FFFFFF 0%, ${BRAND.navy.dark}05 100%)`,
//       }}
//       aria-label="Latest insights and research"
//     >
//       {/* Background Decorations */}
//       <div
//         className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-3xl opacity-[0.04] -translate-x-1/2 -translate-y-1/2"
//         style={{ background: BRAND.navy.lighter }}
//         aria-hidden="true"
//       />
//       <div
//         className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.06] translate-x-1/3 translate-y-1/3"
//         style={{ background: BRAND.gold.primary }}
//         aria-hidden="true"
//       />

//       <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
//         {/* Header Section */}

//         {/* Carousel Container */}
//         <div className="relative px-4 lg:px-12">
//           {/* Custom Navigation Buttons */}
//           <div className="hidden lg:block">
//             <NavButton direction="prev" onClick={handlePrev} />
//             <NavButton direction="next" onClick={handleNext} />
//           </div>

//           {/* Swiper Instance */}
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             ref={swiperRef}
//             spaceBetween={28}
//             slidesPerView={1.15}
//             centeredSlides={false}
//             grabCursor={true}
//             onSlideChange={handleSlideChange}
//             autoplay={{
//               delay: 5000,
//               disableOnInteraction: true,
//               pauseOnMouseEnter: true,
//             }}
//             breakpoints={{
//               640: {
//                 slidesPerView: 1.35,
//                 spaceBetween: 24,
//               },
//               1024: {
//                 slidesPerView: 2.3,
//                 spaceBetween: 28,
//               },
//               1280: {
//                 slidesPerView: 2.8,
//                 spaceBetween: 32,
//               },
//               1536: {
//                 slidesPerView: 3.2,
//                 spaceBetween: 36,
//               },
//             }}
//             className="!pb-4"
//             style={{
//               "--swiper-navigation-size": "0px", // Hide default nav
//               "--swiper-pagination-bullet-size": "0px", // Hide default pagination
//             }}
//             aria-roledescription="carousel"
//             aria-label="Insights carousel"
//           >
//             {insightsData.map((item, index) => (
//               <SwiperSlide
//                 key={item.id}
//                 role="group"
//                 aria-roledescription="slide"
//                 aria-label={`${index + 1} of ${insightsData.length}`}
//               >
//                 <InsightCard item={item} isActive={activeIndex === index} />
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Mobile Navigation Arrows */}
//           <div className="flex lg:hidden items-center justify-center gap-4 mt-8">
//             <button
//               onClick={handlePrev}
//               className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 active:scale-95"
//               style={{
//                 background: BRAND.navy.dark,
//                 border: `2px solid ${BRAND.gold.primary}`,
//                 color: BRAND.gold.primary,
//               }}
//               aria-label="Previous slide"
//             >
//               <FaArrowLeft className="text-sm" aria-hidden="true" />
//             </button>

//             <button
//               onClick={handleNext}
//               className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 active:scale-95"
//               style={{
//                 background: BRAND.navy.dark,
//                 border: `2px solid ${BRAND.gold.primary}`,
//                 color: BRAND.gold.primary,
//               }}
//               aria-label="Next slide"
//             >
//               <FaArrowRight className="text-sm" aria-hidden="true" />
//             </button>
//           </div>

//           {/* Progress Indicator Dots */}
//           {/* <ProgressIndicator
//             total={insightsData.length}
//             active={activeIndex}
//             onDotClick={handleDotClick}
//           /> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default memo(InsightsCarousel);

import React, { useState, useMemo, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaArrowLeft,
  FaClock,
  FaStar,
  FaBriefcase,
} from "react-icons/fa";

import { servicesData } from "../../data/servicesData";

// ==================== BRAND COLORS ====================
const BRAND = {
  navy: {
    dark: "#0B1D33",
    mid: "#0D2847",
    light: "#143A63",
    lighter: "#1A4570",
  },
  gold: {
    primary: "#FDB913",
    light: "#FFD54F",
    gradient: "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
  },
};

// ==================== CUSTOM HOOK ====================
const useActiveSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = useCallback((swiper) => {
    setActiveIndex(swiper.activeIndex);
  }, []);

  return { activeIndex, handleSlideChange };
};

// ==================== CATEGORY BADGE ====================
const CategoryBadge = memo(({ category }) => (
  <span
    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
    style={{
      background: "rgba(255,255,255,0.12)",
      color: "white",
      border: "1px solid rgba(255,255,255,0.2)",
      backdropFilter: "blur(10px)",
    }}
  >
    <FaBriefcase className="text-[10px]" />
    {category}
  </span>
));

CategoryBadge.displayName = "CategoryBadge";

// ==================== SERVICE CARD ====================
const InsightCard = memo(({ item, isActive }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate(item.link)}
      className={`group relative h-[520px] lg:h-[560px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ${
        isActive ? "scale-[1.02]" : "scale-95 opacity-80"
      }`}
      whileHover={{ y: -10 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                to top,
                rgba(11,29,51,0.98) 0%,
                rgba(11,29,51,0.88) 35%,
                rgba(11,29,51,0.45) 65%,
                transparent 100%
              )
            `,
          }}
        />

        {/* Gold Glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background:
              "linear-gradient(to top, rgba(253,185,19,0.15), transparent)",
          }}
        />
      </div>

      {/* Featured Badge */}
      {item.featured && (
        <div className="absolute top-5 right-5 z-20">
          <span
            className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1"
            style={{
              background: BRAND.gold.gradient,
              color: BRAND.navy.dark,
              boxShadow: `0 4px 15px ${BRAND.gold.primary}50`,
            }}
          >
            <FaStar className="text-[10px]" />
            Featured
          </span>
        </div>
      )}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 z-10">
        <div className="mb-4 space-y-3">
          <CategoryBadge category={item.category} />

          <div
            className="flex items-center gap-4 text-xs font-medium"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            <span className="flex items-center gap-1.5">
              <FaClock className="text-[10px]" />
              {item.readTime}
            </span>

            <span>•</span>

            <span>{item.date}</span>
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-2xl lg:text-3xl font-bold leading-tight mb-4 transition-all duration-500"
          style={{
            color: isActive ? BRAND.gold.primary : "white",
          }}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm lg:text-base leading-relaxed mb-6"
          style={{
            color: "rgba(255,255,255,0.75)",
          }}
        >
          {item.description}
        </p>

        {/* CTA */}
        <div
          className="pt-5 flex items-center justify-between"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <span
            className="text-sm font-bold uppercase tracking-wider"
            style={{ color: BRAND.gold.primary }}
          >
            Explore Service
          </span>

          <div
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
            style={{
              background: `${BRAND.gold.primary}15`,
              border: `1px solid ${BRAND.gold.primary}40`,
              color: BRAND.gold.primary,
            }}
          >
            <FaArrowRight className="text-sm" />
          </div>
        </div>
      </div>
    </motion.div>
  );
});

InsightCard.displayName = "InsightCard";

// ==================== NAV BUTTON ====================
const NavButton = memo(({ direction, onClick }) => {
  const isPrev = direction === "prev";

  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full hidden lg:flex items-center justify-center transition-all duration-300 hover:scale-110"
      style={{
        [isPrev ? "left" : "right"]: "-28px",
        background: BRAND.navy.dark,
        border: `2px solid ${BRAND.gold.primary}`,
        color: BRAND.gold.primary,
        boxShadow: `0 4px 20px rgba(0,0,0,0.25)`,
      }}
    >
      {isPrev ? (
        <FaArrowLeft className="text-lg" />
      ) : (
        <FaArrowRight className="text-lg" />
      )}
    </button>
  );
});

NavButton.displayName = "NavButton";

// ==================== MAIN COMPONENT ====================
const InsightsCarousel = () => {
  const swiperRef = React.useRef(null);

  const { activeIndex, handleSlideChange } = useActiveSlide();

  const handlePrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  return (
    <section
      className="relative py-6 lg:py-10 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, rgba(11,29,51,0.03) 100%)",
      }}
    >
      {/* Background Blur */}
      <div
        className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full blur-3xl opacity-[0.05]"
        style={{ background: BRAND.gold.primary }}
      />

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* <span
            className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
            style={{
              background: `${BRAND.gold.primary}15`,
              color: BRAND.navy.dark,
              border: `1px solid ${BRAND.gold.primary}30`,
            }}
          >
            🚀 What We Do
          </span> */}

          <h2
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: BRAND.navy.dark }}
          >
            Explore Our{" "}
            <span style={{ color: BRAND.gold.primary }}>
              Enterprise Services
            </span>
          </h2>

          <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
            Discover innovative SAP, AI, testing, migration, and workforce
            solutions tailored for enterprise transformation.
          </p>
        </div>

        {/* Slider */}
        <div className="relative px-4 lg:px-12">
          <NavButton direction="prev" onClick={handlePrev} />
          <NavButton direction="next" onClick={handleNext} />

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            ref={swiperRef}
            spaceBetween={28}
            slidesPerView={1.1}
            onSlideChange={handleSlideChange}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.4,
              },
              1024: {
                slidesPerView: 2.2,
              },
              1280: {
                slidesPerView: 2.8,
              },
            }}
            className="!pb-4"
          >
            {servicesData.map((item, index) => (
              <SwiperSlide key={item.id}>
                <InsightCard item={item} isActive={activeIndex === index} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile Buttons */}
          <div className="flex lg:hidden items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background: BRAND.navy.dark,
                border: `2px solid ${BRAND.gold.primary}`,
                color: BRAND.gold.primary,
              }}
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background: BRAND.navy.dark,
                border: `2px solid ${BRAND.gold.primary}`,
                color: BRAND.gold.primary,
              }}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(InsightsCarousel);
