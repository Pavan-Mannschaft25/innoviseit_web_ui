// // import React, { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Link } from "react-router-dom";
// // import { FaChevronDown } from "react-icons/fa";
// // import { HERO_SLIDES } from "../../data/heroSliderData";
// // import bgImage from "../../assets/heroImages/inno_bg.png";

// // // 🎨 BRAND COLORS
// // const BRAND = {
// //   navy: {
// //     dark: "#0B1D33",
// //     mid: "#0D2847",
// //   },
// //   gold: {
// //     primary: "#FDB913",
// //     light: "#FFD54F",
// //     gradient: "linear-gradient(135deg, #FDB913, #FFD54F)",
// //   },
// // };

// // const HeroSliderWithContent = ({ slides = HERO_SLIDES, interval = 5000 }) => {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [imageLoaded, setImageLoaded] = useState(false);

// //   useEffect(() => {
// //     setImageLoaded(false);
// //   }, [currentIndex]);

// //   // Auto slide
// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setCurrentIndex((prev) => (prev + 1) % slides.length);
// //     }, interval);

// //     return () => clearInterval(timer);
// //   }, [slides.length, interval]);

// //   const currentSlide = slides[currentIndex];

// //   return (
// //     // <section className="relative w-full h-[90vh] overflow-hidden bg-black pt-10">
// //     //   {/* BACKGROUND IMAGE */}
// //     //   <AnimatePresence mode="wait">
// //     //     <motion.div
// //     //       key={currentIndex}
// //     //       initial={{ opacity: 0, scale: 1.05 }}
// //     //       animate={{ opacity: 1, scale: 1 }}
// //     //       exit={{ opacity: 0 }}
// //     //       transition={{ duration: 1.5 }}
// //     //       className="absolute inset-0 bg-contain bg-center bg-no-repeat"
// //     //       style={{ backgroundImage: `url(${currentSlide.image})` }}
// //     //     />
// //     //   </AnimatePresence>
// //     //   {/* OVERLAY */}
// //     //   {/* <div
// //     //     className="absolute inset-0"
// //     //     style={{
// //     //       background: `linear-gradient(to right, ${BRAND.navy.dark}ee 0%, ${BRAND.navy.mid}aa 10%, transparent 100%)`,
// //     //     }}
// //     //   /> */}

// //     //   {/* CONTENT */}
// //     //   {/* <div className="relative z-10 h-full flex items-end px-6 lg:px-8 pb-4">
// //     //     <div className="max-w-2xl">

// //     //       <motion.div
// //     //         initial={{ opacity: 0, y: 20 }}
// //     //         animate={{ opacity: 1, y: 0 }}
// //     //         className="mb-4 text-yellow-400 font-semibold"
// //     //       >
// //     //         {currentSlide.badge}
// //     //       </motion.div>

// //     //       <h1 className="text-4xl lg:text-6xl font-bold text-white mb-3">
// //     //         {currentSlide.title}{" "}
// //     //         <span
// //     //           style={{
// //     //             background: BRAND.gold.gradient,
// //     //             WebkitBackgroundClip: "text",
// //     //             WebkitTextFillColor: "transparent",
// //     //           }}
// //     //         >
// //     //           {currentSlide.highlight}
// //     //         </span>
// //     //       </h1>

// //     //       <h2 className="text-xl text-yellow-300 mb-4">
// //     //         {currentSlide.subtitle}
// //     //       </h2>

// //     //       <p className="text-gray-300 mb-6">{currentSlide.description}</p>

// //     //       <div className="flex gap-4 flex-wrap">
// //     //         {currentSlide.buttons?.map((btn, i) => {
// //     //           const Icon = btn.icon;
// //     //           return (
// //     //             <Link
// //     //               key={i}
// //     //               to={btn.link}
// //     //               className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
// //     //                 btn.type === "primary"
// //     //                   ? "bg-yellow-500 text-black"
// //     //                   : "border border-yellow-500 text-white"
// //     //               }`}
// //     //             >
// //     //               {btn.label}
// //     //               {Icon && <Icon />}
// //     //             </Link>
// //     //           );
// //     //         })}
// //     //       </div>

// //     //       <div className="flex gap-8 mt-8">
// //     //         {currentSlide.stats?.map((stat, i) => (
// //     //           <div key={i}>
// //     //             <div className="text-yellow-400 text-2xl font-bold">
// //     //               {stat.value}
// //     //             </div>
// //     //             <div className="text-gray-400 text-sm">{stat.label}</div>
// //     //           </div>
// //     //         ))}
// //     //       </div>
// //     //     </div>
// //     //   </div> */}

// //     //   {/* SCROLL ICON */}
// //     //   <div className="absolute bottom-6 right-6 text-yellow-400">
// //     //     <FaChevronDown className="animate-bounce" />
// //     //   </div>
// //     // </section>
// //     // <section className="relative w-full h-[72vh] overflow-hidden bg-black pt-10">
// //     //   <AnimatePresence mode="wait">
// //     //     <motion.img
// //     //       key={currentIndex}
// //     //       src={currentSlide.image}
// //     //       alt=""
// //     //       initial={{ opacity: 0, scale: 1.05 }}
// //     //       animate={{ opacity: 1, scale: 1 }}
// //     //       exit={{ opacity: 0 }}
// //     //       transition={{ duration: 1.5 }}
// //     //       className="absolute inset-0 w-full h-full object-fill"
// //     //     />
// //     //   </AnimatePresence>
// //     // </section>

// //     <section className="relative w-full h-[60vh] lg:h-[90vh] overflow-hidden bg-black pt-10">
// //       {/* LOGO LOADER */}
// //       {!imageLoaded && (
// //         <div className="absolute inset-0 z-20 w-full h-full overflow-hidden">
// //           {/* Background Image */}
// //           {/* <img
// //             src={bgImage}
// //             alt="background"
// //             className="absolute inset-0 w-full h-full object-cover"
// //           /> */}

// //           {/* Dark Overlay */}
// //           <div className="absolute inset-0 bg-black/50"></div>

// //           {/* Logo */}
// //           <div className="relative z-10 flex items-center justify-center w-full h-full">
// //             {/* White Glow */}
// //             <div className="absolute w-60 h-60 md:w-80 md:h-80 bg-white/40 rounded-full blur-3xl animate-pulse"></div>

// //             {/* Logo */}
// //             <img
// //               src="/innovise_it_logo.png"
// //               alt="logo"
// //               className="relative z-10 w-72 md:w-96 object-contain animate-pulse"
// //             />
// //           </div>
// //         </div>
// //       )}

// //       <AnimatePresence mode="wait">
// //         <motion.img
// //           key={currentIndex}
// //           src={currentSlide.image}
// //           alt=""
// //           initial={{ opacity: 0, scale: 1.05 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           exit={{ opacity: 0 }}
// //           transition={{ duration: 1.5 }}
// //           onLoad={() => setImageLoaded(true)}
// //           className="absolute inset-0 w-full h-full object-fill"
// //         />
// //       </AnimatePresence>
// //     </section>
// //   );
// // };

// // export default HeroSliderWithContent;

// // import React, { useState, useEffect } from "react";
// // import { motion } from "framer-motion";
// // import { HERO_SLIDES } from "../../data/heroSliderData";

// // const HeroSliderWithContent = ({ slides = HERO_SLIDES, interval = 5000 }) => {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   // Auto Slide
// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setCurrentIndex((prev) => (prev + 1) % slides.length);
// //     }, interval);

// //     return () => clearInterval(timer);
// //   }, [slides.length, interval]);

// //   const currentSlide = slides[currentIndex];

// //   return (
// //     <section className="relative w-full h-[60vh] lg:h-[90vh] overflow-hidden">
// //       <motion.img
// //         key={currentIndex}
// //         src={currentSlide.image}
// //         alt="hero"
// //         initial={{ opacity: 0.5 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ duration: 0.8 }}
// //         className="w-full h-full object-fill"
// //       />
// //     </section>
// //   );
// // };

// // export default HeroSliderWithContent;

// import React, { useState, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { HERO_SLIDES } from "../../data/heroSliderData";

// // Animation variants for consistent animations
// const slideVariants = {
//   enter: { opacity: 0, scale: 1.08 },
//   center: { opacity: 1, scale: 1 },
//   exit: { opacity: 0, scale: 0.95 },
// };

// const contentVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// const HeroSliderWithContent = ({
//   slides = HERO_SLIDES,
//   interval = 5000,
//   showThumbnails = true,
//   showDots = true,
//   showProgress = true,
// }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [progress, setProgress] = useState(0);

//   // Auto-slide with progress tracking
//   useEffect(() => {
//     const startTime = Date.now();

//     const progressTimer = setInterval(() => {
//       const elapsed = Date.now() - startTime;
//       const pct = Math.min((elapsed / interval) * 100, 100);
//       setProgress(pct);
//     }, 30);

//     const slideTimer = setInterval(() => {
//       setDirection(1);
//       setCurrentIndex((prev) => (prev + 1) % slides.length);
//       setProgress(0);
//     }, interval);

//     return () => {
//       clearInterval(progressTimer);
//       clearInterval(slideTimer);
//     };
//   }, [currentIndex, slides.length, interval]);

//   // Manual navigation
//   const goToSlide = useCallback(
//     (index) => {
//       if (index !== currentIndex) {
//         setDirection(index > currentIndex ? 1 : -1);
//         setCurrentIndex(index);
//         setProgress(0);
//       }
//     },
//     [currentIndex],
//   );

//   const currentSlide = slides[currentIndex];

//   // Pagination variants
//   // const paginateVariants = {
//   //   active: { width: 28, background: "#ffffff" },
//   //   inactive: { width: 6, background: "rgba(255,255,255,0.25)" },
//   // };

//   return (
//     <section className="relative w-full h-[60vh] lg:h-[90vh] overflow-hidden bg-black">
//       {/* Google Fonts */}
//       {/* <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap');
//         .font-bebas { font-family: 'Bebas Neue', cursive; }
//         .font-outfit { font-family: 'Outfit', sans-serif; }

//         .overlay-diagonal {
//           background: linear-gradient(110deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.25) 75%, rgba(0,0,0,0.1) 100%);
//         }
//       `}</style> */}

//       {/* Background Images with AnimatePresence */}
//       <div className="absolute inset-0">
//         <AnimatePresence mode="sync" custom={direction}>
//           <motion.div
//             key={currentIndex}
//             custom={direction}
//             variants={slideVariants}
//             initial="enter"
//             animate="center"
//             transition={{
//               duration: 0.8,
//               ease: [0.4, 0, 0.2, 1],
//             }}
//             className="absolute inset-0"
//           >
//             <img
//               src={currentSlide.image}
//               alt={currentSlide.tag || "Hero slide"}
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Diagonal overlay */}
//       <div className="absolute inset-0 overlay-diagonal z-10" />

//       {/* Bottom fade */}
//       {/* <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/90 to-transparent z-10" /> */}

//       {/* Slide Thumbnails (bottom right) */}
//       {/* {showThumbnails && slides.length > 1 && (
//         <div className="absolute bottom-8 right-6 z-30 flex flex-col gap-2 items-end">
//           {slides.map((slide, index) => (
//             <motion.button
//               key={index}
//               type="button"
//               onClick={() => goToSlide(index)}
//               className="group relative overflow-hidden rounded-lg"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               style={{
//                 width: index === currentIndex ? "108px" : "72px",
//                 height: "60px",
//                 outline:
//                   index === currentIndex
//                     ? "2px solid rgba(255,255,255,0.6)"
//                     : "2px solid rgba(255,255,255,0.1)",
//                 outlineOffset: "2px",
//               }}
//             >
//               <img
//                 src={slide.image}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 alt={slide.tag || `Slide ${index + 1}`}
//               />
//               <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

//               {showProgress && index === currentIndex && (
//                 <div
//                   className="absolute bottom-0 left-0 h-[3px] bg-white rounded-full"
//                   style={{ width: `${progress}%` }}
//                 />
//               )}
//             </motion.button>
//           ))}
//         </div>
//       )} */}

//       {/* Dot Navigation (bottom center) */}
//       {/* {showDots && slides.length > 1 && (
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
//           {slides.map((_, index) => (
//             <motion.button
//               key={index}
//               type="button"
//               aria-label={`Go to slide ${index + 1}`}
//               onClick={() => goToSlide(index)}
//               variants={paginateVariants}
//               animate={index === currentIndex ? "active" : "inactive"}
//               transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
//               style={{
//                 height: "6px",
//                 borderRadius: "3px",
//                 border: "none",
//                 padding: 0,
//                 cursor: "pointer",
//               }}
//             />
//           ))}
//         </div>
//       )} */}
//     </section>
//   );
// };

// export default HeroSliderWithContent;

// import React from "react";
// import { FaArrowRight, FaPlayCircle, FaCheckCircle } from "react-icons/fa";

// // ===== IMAGES =====
// import img1 from "../../assets/leaders/AlanWu.webp";
// import img2 from "../../assets/leaders/AlanWu.webp";
// import img3 from "../../assets/leaders/AlanWu.webp";
// import img4 from "../../assets/leaders/AlanWu.webp";

// // ===== LOGO =====
// import logo from "../../assets/images/innovise_it_logo.png";

// const HeroSection = () => {
//   return (
//     <section className="relative overflow-hidden bg-white">
//       {/* Background Blur */}
//       {/* <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary-100 blur-[100px] rounded-full"></div> */}

//       {/* <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent-100 blur-[100px] rounded-full"></div> */}

//       <div className="max-w-8xl mx-auto px-5 lg:px-8 py-10 lg:py-14 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-10 items-center">
//           {/* ================= LEFT CONTENT ================= */}
//           <div>
//             {/* Logo */}
//             {/* <img src={logo} alt="Innovise IT" className="w-[180px] mb-5" /> */}

//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 border border-primary-200 bg-primary-50 text-primary-800 px-4 py-2 rounded-full text-xs font-semibold mb-5">
//               <FaCheckCircle className="text-accent-500" />
//               SAP & Guidewire Technology Partner
//             </div>

//             {/* Heading */}
//             <h1 className="text-3xl md:text-5xl font-bold leading-[1.1] text-primary-900 mb-5">
//               Transform Business with
//               <span className="block text-accent-500">SAP & Guidewire</span>
//             </h1>

//             {/* Description */}
//             <p className="text-gray-600 text-base leading-relaxed max-w-xl mb-7">
//               Innovise IT delivers SAP consulting, Guidewire solutions, cloud
//               transformation, testing, and enterprise modernization services for
//               scalable growth.
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-wrap gap-3 mb-8">
//               <button className="group bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all duration-300">
//                 Get Started
//                 <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
//               </button>

//               <button className="border border-primary-200 hover:border-accent-400 hover:bg-primary-50 text-primary-800 px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all duration-300">
//                 <FaPlayCircle className="text-accent-500" />
//                 Success Stories
//               </button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-3">
//               <div className="bg-white border border-primary-100 rounded-2xl p-4 shadow-sm">
//                 <h3 className="text-2xl font-bold text-primary-800">19+</h3>
//                 <p className="text-xs text-gray-500 mt-1">Years Experience</p>
//               </div>

//               <div className="bg-white border border-primary-100 rounded-2xl p-4 shadow-sm">
//                 <h3 className="text-2xl font-bold text-primary-800">100+</h3>
//                 <p className="text-xs text-gray-500 mt-1">Global Clients</p>
//               </div>

//               <div className="bg-white border border-primary-100 rounded-2xl p-4 shadow-sm">
//                 <h3 className="text-2xl font-bold text-primary-800">25+</h3>
//                 <p className="text-xs text-gray-500 mt-1">
//                   Enterprise Solutions
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="relative w-[500px] h-[500px] flex items-center justify-center">
//             {/* Background glow */}
//             <div
//               className="absolute w-[300px] h-[300px] bg-gradient-to-br from-primary-200 to-blue-200
//                rounded-full blur-3xl opacity-50 animate-pulse"
//             ></div>

//             {/* Orbital ring */}
//             <div
//               className="absolute w-[420px] h-[420px] border-2 border-dashed border-primary-200
//                rounded-full animate-spin-slow"
//             ></div>

//             {/* Images positioned around center */}
//             <div
//               className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[140px]
//                rounded-[20px] overflow-hidden shadow-2xl transform -translate-y-4
//                hover:scale-110 hover:z-30 transition-all duration-500"
//             >
//               <img src={img1} alt="" className="w-full h-full object-cover" />
//             </div>

//             <div
//               className="absolute right-0 top-1/2 -translate-y-1/2 w-[140px] h-[140px]
//                rounded-[20px] overflow-hidden shadow-2xl transform translate-x-4
//                hover:scale-110 hover:z-30 transition-all duration-500"
//             >
//               <img src={img2} alt="" className="w-full h-full object-cover" />
//             </div>

//             <div
//               className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140px] h-[140px]
//                rounded-[20px] overflow-hidden shadow-2xl transform translate-y-4
//                hover:scale-110 hover:z-30 transition-all duration-500"
//             >
//               <img src={img3} alt="" className="w-full h-full object-cover" />
//             </div>

//             <div
//               className="absolute left-0 top-1/2 -translate-y-1/2 w-[140px] h-[140px]
//                rounded-[20px] overflow-hidden shadow-2xl transform -translate-x-4
//                hover:scale-110 hover:z-30 transition-all duration-500"
//             >
//               <img src={img4} alt="" className="w-full h-full object-cover" />
//             </div>

//             {/* Center floating card */}
//             <div
//               className="relative z-40 bg-white border border-primary-300 rounded-3xl px-4 py-4
//                shadow-2xl backdrop-blur-xl bg-white/95"
//             >
//               <div className="flex items-center gap-3 mb-3">
//                 <div
//                   className="w-12 h-12 bg-gradient-to-br from-primary-500 to-blue-600
//                    rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
//                 >
//                   S
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500 font-medium">
//                     Enterprise Suite
//                   </p>
//                   <h3 className="text-xl font-bold text-primary-900">
//                     SAP • Guidewire
//                   </h3>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2 bg-green-50 rounded-full px-4 py-2">
//                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
//                 <span className="text-sm text-green-700 font-medium">
//                   Live & Scalable
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ================= SERVICES ================= */}
//         <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
//           {[
//             "SAP Consulting",
//             "Guidewire",
//             "Testing & QA",
//             "Data Migration",
//             "Cloud Services",
//             "Staff Augmentation",
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="bg-white border border-primary-100 rounded-2xl px-4 py-4 text-center hover:border-accent-400 transition-all duration-300 shadow-sm"
//             >
//               <p className="text-xs font-semibold text-primary-800">{item}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import { FaArrowRight, FaPlayCircle, FaCheckCircle } from "react-icons/fa";

// ===== IMAGES =====
import img1 from "../../assets/leaders/NishantGautam.webp";
import img2 from "../../assets/leaders/BobMarchand.webp";
import img3 from "../../assets/leaders/AlanWu.webp";
import img4 from "../../assets/leaders/OliverBetz.webp";

const HeroSection = () => {
  // Orbital positions for images
  const orbitPositions = [
    { src: img1, pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-4" },
    { src: img2, pos: "right-0 top-1/2 -translate-y-1/2 translate-x-4" },
    {
      src: img3,
      pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-4",
    },
    { src: img4, pos: "left-0 top-1/2 -translate-y-1/2 -translate-x-4" },
  ];

  const stats = [
    { value: "19+", label: "Years Experience" },
    { value: "100+", label: "Global Clients" },
    { value: "25+", label: "Enterprise Solutions" },
  ];

  const services = [
    "SAP Consulting",
    "Guidewire",
    "Testing & QA",
    "Data Migration",
    "Cloud Services",
    "Staff Augmentation",
  ];

  return (
    <section className="relative overflow-hidden bg-white min-h-[90vh]">
      {/* Background Blurs */}
      {/* <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary-100 blur-[100px] rounded-full opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent-100 blur-[100px] rounded-full opacity-60"></div> */}

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-5 sm:space-y-6">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 border border-primary-200 bg-primary-50 text-primary-800 px-4 py-2 rounded-full text-xs font-semibold">
              <FaCheckCircle className="text-accent-500" />
              SAP & Guidewire Technology Partner
            </span>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-primary-900">
              Transform Business with
              <span className="block text-accent-500">SAP & Guidewire</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Innovise IT delivers SAP consulting, Guidewire solutions, cloud
              transformation, testing, and enterprise modernization services for
              scalable growth.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button className="group bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg">
                Get Started
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-primary-200 hover:border-accent-400 hover:bg-primary-50 text-primary-800 px-6 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300">
                <FaPlayCircle className="text-accent-500" />
                Success Stories
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0 pt-2">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white border border-primary-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-2xl font-bold text-primary-800">
                    {stat.value}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ORBITAL IMAGES */}
          <div className="order-1 lg:order-2 relative w-full max-w-[500px] mx-auto aspect-square flex items-center justify-center">
            {/* Glow Effect */}
            <div className="absolute w-[60%] h-[60%] bg-gradient-to-br from-primary-200 to-blue-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>

            {/* Orbital Ring (hidden on mobile) */}
            <div className="absolute hidden md:block w-[85%] h-[85%] border-2 border-dashed border-primary-800 rounded-full animate-spin-slow"></div>

            {/* Images positioned in orbit */}
            {orbitPositions.map((img, i) => (
              <div
                key={i}
                className={`absolute ${img.pos} w-[28%] max-w-[140px] aspect-square rounded-[20px] overflow-hidden shadow-2xl hover:scale-110 hover:z-30 transition-all duration-500 z-20`}
              >
                <img
                  src={img.src}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}

            {/* Center Floating Card */}
            <div className="relative z-40 w-[55%] sm:w-[75%] md:w-auto md:min-w-[240px] bg-white border border-primary-300 rounded-3xl p-2 md:p-4 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-700 to-primary-800 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shrink-0">
                  S
                </div>
                <div>
                  <p className="text-xs text-gray-500">Enterprise Suite</p>
                  <h3 className="text-md md:text-lg font-bold text-primary-900">
                    SAP • Guidewire
                  </h3>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs md:text-sm text-green-700 font-medium">
                  Live & Scalable
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white border border-primary-100 rounded-2xl px-4 py-4 text-center hover:border-accent-400 hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <p className="text-xs font-semibold text-primary-800 group-hover:text-accent-600">
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`@keyframes spin-slow{to{transform:rotate(360deg)}}.animate-spin-slow{animation:spin-slow 20s linear infinite}`}</style>
    </section>
  );
};

export default HeroSection;
