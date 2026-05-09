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

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HERO_SLIDES } from "../../data/heroSliderData";

const HeroSliderWithContent = ({ slides = HERO_SLIDES, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative w-full h-[60vh] lg:h-[90vh] overflow-hidden">
      <motion.img
        key={currentIndex}
        src={currentSlide.image}
        alt="hero"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full object-fill"
      />
    </section>
  );
};

export default HeroSliderWithContent;
