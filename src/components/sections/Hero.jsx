// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import { FaChevronDown } from "react-icons/fa";
// import { HERO_SLIDES } from "../../data/heroSliderData";
// import bgImage from "../../assets/heroImages/inno_bg.png";

// // 🎨 BRAND COLORS
// const BRAND = {
//   navy: {
//     dark: "#0B1D33",
//     mid: "#0D2847",
//   },
//   gold: {
//     primary: "#FDB913",
//     light: "#FFD54F",
//     gradient: "linear-gradient(135deg, #FDB913, #FFD54F)",
//   },
// };

// const HeroSliderWithContent = ({ slides = HERO_SLIDES, interval = 5000 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [imageLoaded, setImageLoaded] = useState(false);

//   useEffect(() => {
//     setImageLoaded(false);
//   }, [currentIndex]);

//   // Auto slide
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % slides.length);
//     }, interval);

//     return () => clearInterval(timer);
//   }, [slides.length, interval]);

//   const currentSlide = slides[currentIndex];

//   return (
//     // <section className="relative w-full h-[90vh] overflow-hidden bg-black pt-10">
//     //   {/* BACKGROUND IMAGE */}
//     //   <AnimatePresence mode="wait">
//     //     <motion.div
//     //       key={currentIndex}
//     //       initial={{ opacity: 0, scale: 1.05 }}
//     //       animate={{ opacity: 1, scale: 1 }}
//     //       exit={{ opacity: 0 }}
//     //       transition={{ duration: 1.5 }}
//     //       className="absolute inset-0 bg-contain bg-center bg-no-repeat"
//     //       style={{ backgroundImage: `url(${currentSlide.image})` }}
//     //     />
//     //   </AnimatePresence>
//     //   {/* OVERLAY */}
//     //   {/* <div
//     //     className="absolute inset-0"
//     //     style={{
//     //       background: `linear-gradient(to right, ${BRAND.navy.dark}ee 0%, ${BRAND.navy.mid}aa 10%, transparent 100%)`,
//     //     }}
//     //   /> */}

//     //   {/* CONTENT */}
//     //   {/* <div className="relative z-10 h-full flex items-end px-6 lg:px-8 pb-4">
//     //     <div className="max-w-2xl">

//     //       <motion.div
//     //         initial={{ opacity: 0, y: 20 }}
//     //         animate={{ opacity: 1, y: 0 }}
//     //         className="mb-4 text-yellow-400 font-semibold"
//     //       >
//     //         {currentSlide.badge}
//     //       </motion.div>

//     //       <h1 className="text-4xl lg:text-6xl font-bold text-white mb-3">
//     //         {currentSlide.title}{" "}
//     //         <span
//     //           style={{
//     //             background: BRAND.gold.gradient,
//     //             WebkitBackgroundClip: "text",
//     //             WebkitTextFillColor: "transparent",
//     //           }}
//     //         >
//     //           {currentSlide.highlight}
//     //         </span>
//     //       </h1>

//     //       <h2 className="text-xl text-yellow-300 mb-4">
//     //         {currentSlide.subtitle}
//     //       </h2>

//     //       <p className="text-gray-300 mb-6">{currentSlide.description}</p>

//     //       <div className="flex gap-4 flex-wrap">
//     //         {currentSlide.buttons?.map((btn, i) => {
//     //           const Icon = btn.icon;
//     //           return (
//     //             <Link
//     //               key={i}
//     //               to={btn.link}
//     //               className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
//     //                 btn.type === "primary"
//     //                   ? "bg-yellow-500 text-black"
//     //                   : "border border-yellow-500 text-white"
//     //               }`}
//     //             >
//     //               {btn.label}
//     //               {Icon && <Icon />}
//     //             </Link>
//     //           );
//     //         })}
//     //       </div>

//     //       <div className="flex gap-8 mt-8">
//     //         {currentSlide.stats?.map((stat, i) => (
//     //           <div key={i}>
//     //             <div className="text-yellow-400 text-2xl font-bold">
//     //               {stat.value}
//     //             </div>
//     //             <div className="text-gray-400 text-sm">{stat.label}</div>
//     //           </div>
//     //         ))}
//     //       </div>
//     //     </div>
//     //   </div> */}

//     //   {/* SCROLL ICON */}
//     //   <div className="absolute bottom-6 right-6 text-yellow-400">
//     //     <FaChevronDown className="animate-bounce" />
//     //   </div>
//     // </section>
//     // <section className="relative w-full h-[72vh] overflow-hidden bg-black pt-10">
//     //   <AnimatePresence mode="wait">
//     //     <motion.img
//     //       key={currentIndex}
//     //       src={currentSlide.image}
//     //       alt=""
//     //       initial={{ opacity: 0, scale: 1.05 }}
//     //       animate={{ opacity: 1, scale: 1 }}
//     //       exit={{ opacity: 0 }}
//     //       transition={{ duration: 1.5 }}
//     //       className="absolute inset-0 w-full h-full object-fill"
//     //     />
//     //   </AnimatePresence>
//     // </section>

//     <section className="relative w-full h-[60vh] lg:h-[90vh] overflow-hidden bg-black pt-10">
//       {/* LOGO LOADER */}
//       {!imageLoaded && (
//         <div className="absolute inset-0 z-20 w-full h-full overflow-hidden">
//           {/* Background Image */}
//           {/* <img
//             src={bgImage}
//             alt="background"
//             className="absolute inset-0 w-full h-full object-cover"
//           /> */}

//           {/* Dark Overlay */}
//           <div className="absolute inset-0 bg-black/50"></div>

//           {/* Logo */}
//           <div className="relative z-10 flex items-center justify-center w-full h-full">
//             {/* White Glow */}
//             <div className="absolute w-60 h-60 md:w-80 md:h-80 bg-white/40 rounded-full blur-3xl animate-pulse"></div>

//             {/* Logo */}
//             <img
//               src="/innovise_it_logo.png"
//               alt="logo"
//               className="relative z-10 w-72 md:w-96 object-contain animate-pulse"
//             />
//           </div>
//         </div>
//       )}

//       <AnimatePresence mode="wait">
//         <motion.img
//           key={currentIndex}
//           src={currentSlide.image}
//           alt=""
//           initial={{ opacity: 0, scale: 1.05 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.5 }}
//           onLoad={() => setImageLoaded(true)}
//           className="absolute inset-0 w-full h-full object-fill"
//         />
//       </AnimatePresence>
//     </section>
//   );
// };

// export default HeroSliderWithContent;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { HERO_SLIDES } from "../../data/heroSliderData";

// const HeroSliderWithContent = ({ slides = HERO_SLIDES, interval = 5000 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto Slide
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % slides.length);
//     }, interval);

//     return () => clearInterval(timer);
//   }, [slides.length, interval]);

//   const currentSlide = slides[currentIndex];

//   return (
//     <section className="relative w-full h-[60vh] lg:h-[90vh] overflow-hidden">
//       <motion.img
//         key={currentIndex}
//         src={currentSlide.image}
//         alt="hero"
//         initial={{ opacity: 0.5 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="w-full h-full object-fill"
//       />
//     </section>
//   );
// };

// export default HeroSliderWithContent;

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_SLIDES } from "../../data/heroSliderData";

// Animation variants for consistent animations
const slideVariants = {
  enter: { opacity: 0, scale: 1.08 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const HeroSliderWithContent = ({
  slides = HERO_SLIDES,
  interval = 5000,
  showThumbnails = true,
  showDots = true,
  showProgress = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-slide with progress tracking
  useEffect(() => {
    const startTime = Date.now();

    const progressTimer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / interval) * 100, 100);
      setProgress(pct);
    }, 30);

    const slideTimer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, interval);

    return () => {
      clearInterval(progressTimer);
      clearInterval(slideTimer);
    };
  }, [currentIndex, slides.length, interval]);

  // Manual navigation
  const goToSlide = useCallback(
    (index) => {
      if (index !== currentIndex) {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
        setProgress(0);
      }
    },
    [currentIndex],
  );

  const currentSlide = slides[currentIndex];

  // Pagination variants
  const paginateVariants = {
    active: { width: 28, background: "#ffffff" },
    inactive: { width: 6, background: "rgba(255,255,255,0.25)" },
  };

  return (
    <section className="relative w-full h-[60vh] lg:h-[90vh] overflow-hidden bg-black">
      {/* Google Fonts */}
      {/* <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap');
        .font-bebas { font-family: 'Bebas Neue', cursive; }
        .font-outfit { font-family: 'Outfit', sans-serif; }
        
        .overlay-diagonal {
          background: linear-gradient(110deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.25) 75%, rgba(0,0,0,0.1) 100%);
        }
      `}</style> */}

      {/* Background Images with AnimatePresence */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="absolute inset-0"
          >
            <img
              src={currentSlide.image}
              alt={currentSlide.tag || "Hero slide"}
              className="w-full h-full object-fill"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Diagonal overlay */}
      <div className="absolute inset-0 overlay-diagonal z-10" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/90 to-transparent z-10" />

      {/* Slide Thumbnails (bottom right) */}
      {/* {showThumbnails && slides.length > 1 && (
        <div className="absolute bottom-8 right-6 z-30 flex flex-col gap-2 items-end">
          {slides.map((slide, index) => (
            <motion.button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className="group relative overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: index === currentIndex ? "108px" : "72px",
                height: "60px",
                outline:
                  index === currentIndex
                    ? "2px solid rgba(255,255,255,0.6)"
                    : "2px solid rgba(255,255,255,0.1)",
                outlineOffset: "2px",
              }}
            >
              <img
                src={slide.image}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                alt={slide.tag || `Slide ${index + 1}`}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

              {showProgress && index === currentIndex && (
                <div
                  className="absolute bottom-0 left-0 h-[3px] bg-white rounded-full"
                  style={{ width: `${progress}%` }}
                />
              )}
            </motion.button>
          ))}
        </div>
      )} */}

      {/* Dot Navigation (bottom center) */}
      {showDots && slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
              variants={paginateVariants}
              animate={index === currentIndex ? "active" : "inactive"}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{
                height: "6px",
                borderRadius: "3px",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroSliderWithContent;
