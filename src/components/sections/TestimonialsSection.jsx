// // import React, { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   FaQuoteLeft,
// //   FaStar,
// //   FaArrowRight,
// //   FaBuilding,
// //   FaChevronLeft,
// //   FaChevronRight,
// // } from "react-icons/fa";

// // // ==================== BRAND COLORS ====================
// // const BRAND = {
// //   navy: {
// //     dark: "#081C34",
// //     mid: "#102B4C",
// //     light: "#163B66",
// //   },
// //   gold: {
// //     primary: "#FDB913",
// //     light: "#FFD54F",
// //   },
// // };

// // // ==================== TESTIMONIAL DATA ====================
// // const testimonials = [
// //   {
// //     id: 1,
// //     name: "Michael Anderson",
// //     role: "Chief Technology Officer",
// //     company: "Global Enterprise Solutions",
// //     feedback:
// //       "Their team transformed our digital infrastructure with exceptional execution. The performance improvements and long-term scalability exceeded our expectations.",
// //     rating: 5,
// //     image:
// //       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
// //   },
// //   {
// //     id: 2,
// //     name: "Sophia Williams",
// //     role: "VP of Operations",
// //     company: "NextGen Technologies",
// //     feedback:
// //       "From application modernization to cloud integration, every delivery was handled with professionalism and precision. Their support team is outstanding.",
// //     rating: 5,
// //     image:
// //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
// //   },
// //   {
// //     id: 3,
// //     name: "David Johnson",
// //     role: "Director of Digital Transformation",
// //     company: "InnovateX Systems",
// //     feedback:
// //       "Reliable, scalable, and future-ready solutions. Their expertise helped us accelerate deployment timelines while maintaining enterprise-grade quality.",
// //     rating: 5,
// //     image:
// //       "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
// //   },

// //   // ================= EXTRA DATA =================
// //   {
// //     id: 4,
// //     name: "Emma Richardson",
// //     role: "Enterprise Solutions Lead",
// //     company: "Vertex Dynamics",
// //     feedback:
// //       "The level of technical expertise and project transparency was exceptional. Their agile delivery model helped us launch faster than expected.",
// //     rating: 5,
// //     image:
// //       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
// //   },
// //   {
// //     id: 5,
// //     name: "Daniel Carter",
// //     role: "Head of IT Infrastructure",
// //     company: "NovaCore Systems",
// //     feedback:
// //       "Their support and integration services drastically improved our operational efficiency. The collaboration experience was smooth from start to finish.",
// //     rating: 5,
// //     image:
// //       "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=400&auto=format&fit=crop",
// //   },
// //   {
// //     id: 6,
// //     name: "Olivia Martinez",
// //     role: "Digital Transformation Manager",
// //     company: "Skyline Enterprises",
// //     feedback:
// //       "An outstanding technology partner with deep enterprise experience. Their solutions are modern, scalable, and perfectly aligned with business goals.",
// //     rating: 5,
// //     image:
// //       "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400&auto=format&fit=crop",
// //   },
// // ];

// // // ==================== CARD ====================
// // const TestimonialCard = ({ item }) => {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, scale: 0.96 }}
// //       animate={{ opacity: 1, scale: 1 }}
// //       exit={{ opacity: 0, scale: 0.96 }}
// //       transition={{ duration: 0.5 }}
// //       className="group"
// //     >
// //       <div
// //         className="relative h-full rounded-[32px] overflow-hidden p-8 lg:p-10 backdrop-blur-xl transition-all duration-500"
// //         style={{
// //           background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 60%, ${BRAND.navy.light} 100%)`,
// //           border: "1px solid rgba(255,255,255,0.08)",
// //           boxShadow: "0 25px 80px rgba(8,28,52,0.25)",
// //         }}
// //       >
// //         {/* Glow */}
// //         <div className="absolute top-0 right-0 w-40 h-40 bg-[#FDB913]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

// //         {/* Quote */}
// //         <div
// //           className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
// //           style={{
// //             background: "rgba(253,185,19,0.12)",
// //             border: "1px solid rgba(253,185,19,0.25)",
// //           }}
// //         >
// //           <FaQuoteLeft
// //             className="text-2xl"
// //             style={{ color: BRAND.gold.primary }}
// //           />
// //         </div>

// //         {/* Rating */}
// //         <div className="flex items-center gap-1 mb-6">
// //           {[...Array(item.rating)].map((_, i) => (
// //             <FaStar
// //               key={i}
// //               className="text-sm"
// //               style={{ color: BRAND.gold.primary }}
// //             />
// //           ))}
// //         </div>

// //         {/* Feedback */}
// //         <p className="text-white/75 leading-relaxed text-[15px] mb-8 min-h-[120px]">
// //           "{item.feedback}"
// //         </p>

// //         {/* User */}
// //         <div className="flex items-center gap-4">
// //           <img
// //             src={item.image}
// //             alt={item.name}
// //             className="w-16 h-16 rounded-2xl object-cover border-2 border-[#FDB913]/20"
// //           />

// //           <div>
// //             <h4 className="text-white font-bold text-lg">{item.name}</h4>

// //             <p className="text-[#FDB913] text-sm font-medium">{item.role}</p>

// //             <div className="flex items-center gap-2 mt-1">
// //               <FaBuilding className="text-[10px] text-white/40" />
// //               <span className="text-xs text-white/50">{item.company}</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Bottom Gradient */}
// //         <div
// //           className="absolute bottom-0 left-0 h-[3px] w-full"
// //           style={{
// //             background: `linear-gradient(to right, ${BRAND.gold.primary}, transparent)`,
// //           }}
// //         />
// //       </div>
// //     </motion.div>
// //   );
// // };

// // // ==================== MAIN COMPONENT ====================
// // const TestimonialsSection = () => {
// //   const [index, setIndex] = useState(0);

// //   // Auto Slide
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       nextSlide();
// //     }, 5000);

// //     return () => clearInterval(interval);
// //   }, [index]);

// //   const nextSlide = () => {
// //     setIndex((prev) => (prev + 3) % testimonials.length);
// //   };

// //   const prevSlide = () => {
// //     setIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 3));
// //   };

// //   const visibleCards = testimonials.slice(index, index + 3);

// //   // Loop Fix
// //   while (visibleCards.length < 3) {
// //     visibleCards.push(testimonials[visibleCards.length]);
// //   }

// //   return (
// //     <section
// //       className="relative py-6 lg:py-12 overflow-hidden"
// //       style={{
// //         background: "#F8FAFC",
// //       }}
// //     >
// //       {/* Background Glow */}
// //       <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FDB913]/5 blur-3xl rounded-full"></div>

// //       <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#102B4C]/5 blur-3xl rounded-full"></div>

// //       <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
// //         {/* Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.7 }}
// //           className="text-center max-w-3xl mx-auto mb-16"
// //         >
// //           <span
// //             className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
// //             style={{
// //               background: "rgba(253,185,19,0.12)",
// //               color: BRAND.gold.primary,
// //               border: "1px solid rgba(253,185,19,0.25)",
// //             }}
// //           >
// //             💬 Client Testimonials
// //           </span>

// //           <h2
// //             className="text-4xl lg:text-5xl font-black leading-tight mb-6"
// //             style={{ color: BRAND.navy.dark }}
// //           >
// //             Trusted by{" "}
// //             <span
// //               style={{
// //                 background: "linear-gradient(135deg, #FDB913 0%, #FFD54F 100%)",
// //                 WebkitBackgroundClip: "text",
// //                 WebkitTextFillColor: "transparent",
// //               }}
// //             >
// //               Businesses Worldwide
// //             </span>
// //           </h2>

// //           <p className="text-lg text-slate-500 leading-relaxed">
// //             We build long-term partnerships through innovation, reliability, and
// //             enterprise-grade digital solutions.
// //           </p>
// //         </motion.div>

// //         {/* Slider Buttons */}
// //         <div className="flex justify-end gap-4 mb-8">
// //           <button
// //             onClick={prevSlide}
// //             className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
// //             style={{
// //               background: BRAND.navy.dark,
// //               color: "white",
// //             }}
// //           >
// //             <FaChevronLeft />
// //           </button>

// //           <button
// //             onClick={nextSlide}
// //             className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
// //             style={{
// //               background: BRAND.gold.primary,
// //               color: BRAND.navy.dark,
// //             }}
// //           >
// //             <FaChevronRight />
// //           </button>
// //         </div>

// //         {/* Slider */}
// //         <AnimatePresence mode="wait">
// //           <motion.div
// //             key={index}
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             transition={{ duration: 0.5 }}
// //             className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
// //           >
// //             {visibleCards.map((item) => (
// //               <TestimonialCard key={item.id} item={item} />
// //             ))}
// //           </motion.div>
// //         </AnimatePresence>

// //         {/* Dots */}
// //         <div className="flex justify-center gap-3 mt-12">
// //           {Array.from({
// //             length: Math.ceil(testimonials.length / 3),
// //           }).map((_, i) => (
// //             <button
// //               key={i}
// //               onClick={() => setIndex(i * 3)}
// //               className="transition-all duration-300 rounded-full"
// //               style={{
// //                 width: i * 3 === index ? "40px" : "12px",
// //                 height: "12px",
// //                 background:
// //                   i * 3 === index ? BRAND.gold.primary : "rgba(8,28,52,0.15)",
// //               }}
// //             />
// //           ))}
// //         </div>

// //         {/* Bottom CTA */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 25 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.4 }}
// //           className="flex justify-center mt-16"
// //         >
// //           <button
// //             className="group px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 transition-all duration-300 hover:-translate-y-1"
// //             style={{
// //               background: BRAND.navy.dark,
// //               color: "white",
// //               boxShadow: "0 20px 50px rgba(8,28,52,0.18)",
// //             }}
// //           >
// //             View More Success Stories
// //             <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
// //           </button>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TestimonialsSection;

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaQuoteLeft,
//   FaChevronLeft,
//   FaChevronRight,
//   FaStar,
//   FaBuilding,
// } from "react-icons/fa";

// const BRAND = {
//   navy: {
//     dark: "#081C34",
//     mid: "#102B4C",
//     light: "#163B66",
//   },
//   gold: {
//     primary: "#FDB913",
//     light: "#FFD54F",
//   },
// };

// const testimonials = [
//   {
//     id: 1,
//     name: "Michael Anderson",
//     role: "Chief Technology Officer",
//     company: "Global Enterprise Solutions",
//     feedback:
//       "Their team transformed our digital infrastructure with exceptional execution. The performance improvements and scalability exceeded our expectations.",
//     rating: 5,
//     image:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
//   },
//   {
//     id: 2,
//     name: "Sophia Williams",
//     role: "VP of Operations",
//     company: "NextGen Technologies",
//     feedback:
//       "From modernization to cloud integration, every delivery was handled with professionalism and precision.",
//     rating: 5,
//     image:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
//   },
//   {
//     id: 3,
//     name: "David Johnson",
//     role: "Director of Digital Transformation",
//     company: "InnovateX Systems",
//     feedback:
//       "Reliable,scalable,and future-ready solutions that accelerated our deployment timelines significantly.",
//     rating: 5,
//     image:
//       "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
//   },
//   {
//     id: 4,
//     name: "Emma Richardson",
//     role: "Enterprise Solutions Lead",
//     company: "Vertex Dynamics",
//     feedback:
//       "Their agile delivery model helped us launch products faster with better reliability and enterprise security.",
//     rating: 5,
//     image:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
//   },
//   {
//     id: 5,
//     name: "Daniel Carter",
//     role: "Head of IT Infrastructure",
//     company: "NovaCore Systems",
//     feedback:
//       "A highly professional technology partner with exceptional support and integration capabilities.",
//     rating: 5,
//     image:
//       "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=400&auto=format&fit=crop",
//   },
// ];

// const TestimonialsSection = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [current]);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   return (
//     <section
//       className="relative py-8 lg:py-12 overflow-hidden bg-primary-100"
//       style={{
//         background:
//           "linear-gradient(135deg,#081C34 0%,#102B4C 60%,#163B66 100%)",
//       }}
//     >
//       {/* BACKGROUND */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FDB913]/10 blur-3xl rounded-full"></div>

//         <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#FDB913]/5 blur-3xl rounded-full"></div> */}

//         <div
//           className="absolute inset-0 opacity-[0.04]"
//           style={{
//             backgroundImage: `radial-gradient(circle at 1px 1px,white 1px,transparent 0)`,
//             backgroundSize: "30px 30px",
//           }}
//         ></div>
//       </div>

//       <div className="max-w-8xl mx-auto px-4 lg:px-8 relative z-10">
//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center max-w-3xl mx-auto mb-20"
//         >
//           <span
//             className="inline-block px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em] mb-6"
//             style={{
//               background: "rgba(253,185,19,0.12)",
//               color: BRAND.gold.primary,
//               border: "1px solid rgba(253,185,19,0.25)",
//             }}
//           >
//             Client Testimonials
//           </span>

//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
//             Trusted by{" "}
//             <span
//               style={{
//                 background: "linear-gradient(135deg,#FDB913,#FFD54F)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               Businesses Worldwide
//             </span>
//           </h2>

//           <p className="text-lg text-white/60 leading-relaxed">
//             We build long-term enterprise partnerships through scalable digital
//             solutions and world-class delivery.
//           </p>
//         </motion.div>

//         {/* SLIDER */}
//         <div className="relative flex items-center justify-center">
//           {/* LEFT BUTTON */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-0 z-20 hidden lg:flex w-14 h-14 rounded-2xl items-center justify-center transition-all duration-300 hover:-translate-y-1"
//             style={{
//               background: "rgba(255,255,255,0.08)",
//               border: "1px solid rgba(255,255,255,0.1)",
//               color: "white",
//             }}
//           >
//             <FaChevronLeft />
//           </button>

//           {/* CARDS */}
//           <div className="relative w-full flex justify-center items-center min-h-[540px]">
//             {testimonials.map((item, index) => {
//               const position =
//                 (index - current + testimonials.length) % testimonials.length;

//               let styles = {};

//               if (position === 0) {
//                 styles = {
//                   transform: "translateX(0px) scale(1)",
//                   opacity: 1,
//                   zIndex: 30,
//                 };
//               } else if (position === 1) {
//                 styles = {
//                   transform: "translateX(340px) scale(0.82)",
//                   opacity: 0.4,
//                   zIndex: 20,
//                 };
//               } else if (position === testimonials.length - 1) {
//                 styles = {
//                   transform: "translateX(-340px) scale(0.82)",
//                   opacity: 0.4,
//                   zIndex: 20,
//                 };
//               } else {
//                 styles = {
//                   transform: "translateX(0px) scale(0.6)",
//                   opacity: 0,
//                   zIndex: 0,
//                 };
//               }

//               return (
//                 <motion.div
//                   key={item.id}
//                   animate={styles}
//                   transition={{
//                     duration: 0.6,
//                     ease: "easeInOut",
//                   }}
//                   className="absolute w-full max-w-[620px]"
//                 >
//                   <div
//                     className="relative rounded-[40px] overflow-hidden p-10 lg:p-14 backdrop-blur-xl"
//                     style={{
//                       background:
//                         "linear-gradient(135deg,#081C34 0%,#102B4C 60%,#163B66 100%)",
//                       border: "1px solid rgba(255,255,255,0.08)",
//                       boxShadow: "0 30px 90px rgba(0,0,0,0.35)",
//                     }}
//                   >
//                     {/* GLOW */}
//                     <div className="absolute top-0 right-0 w-48 h-48 bg-[#FDB913]/10 blur-3xl rounded-full"></div>

//                     {/* QUOTE */}
//                     <div
//                       className="w-20 h-20 rounded-3xl flex items-center justify-center mb-8"
//                       style={{
//                         background: "rgba(253,185,19,0.12)",
//                         border: "1px solid rgba(253,185,19,0.25)",
//                       }}
//                     >
//                       <FaQuoteLeft
//                         className="text-3xl"
//                         style={{ color: BRAND.gold.primary }}
//                       />
//                     </div>

//                     {/* RATING */}
//                     <div className="flex items-center gap-1 mb-6">
//                       {[...Array(item.rating)].map((_, i) => (
//                         <FaStar
//                           key={i}
//                           className="text-sm"
//                           style={{ color: BRAND.gold.primary }}
//                         />
//                       ))}
//                     </div>

//                     {/* FEEDBACK */}
//                     <p className="text-white/75 text-lg leading-relaxed mb-10">
//                       "{item.feedback}"
//                     </p>

//                     {/* USER */}
//                     <div className="flex items-center gap-5">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-20 h-20 rounded-3xl object-cover border-2 border-[#FDB913]/20"
//                       />

//                       <div>
//                         <h4 className="text-white font-bold text-2xl">
//                           {item.name}
//                         </h4>

//                         <p className="text-[#FDB913] text-sm font-semibold mt-1">
//                           {item.role}
//                         </p>

//                         <div className="flex items-center gap-2 mt-2">
//                           <FaBuilding className="text-[10px] text-white/40" />
//                           <span className="text-sm text-white/50">
//                             {item.company}
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* BOTTOM LINE */}
//                     <div
//                       className="absolute bottom-0 left-0 h-[4px] w-full"
//                       style={{
//                         background:
//                           "linear-gradient(to right,#FDB913,transparent)",
//                       }}
//                     ></div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* RIGHT BUTTON */}
//           <button
//             onClick={nextSlide}
//             className="absolute right-0 z-20 hidden lg:flex w-14 h-14 rounded-2xl items-center justify-center transition-all duration-300 hover:-translate-y-1"
//             style={{
//               background: "#FDB913",
//               color: "#081C34",
//             }}
//           >
//             <FaChevronRight />
//           </button>
//         </div>

//         {/* MOBILE */}
//         <div className="lg:hidden mt-10 flex justify-center gap-3">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrent(index)}
//               className="transition-all duration-300 rounded-full"
//               style={{
//                 width: index === current ? "38px" : "12px",
//                 height: "12px",
//                 background:
//                   index === current ? "#FDB913" : "rgba(255,255,255,0.2)",
//               }}
//             ></button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaBuilding,
} from "react-icons/fa";

const COLORS = {
  bg: "#e6eef7",
  primary: "#0b2a4a",
  primaryLight: "#12324f",
  card: "#ffffff",
  accent: "#FFC107",
  accentLight: "#fbbf24",
  text: "#1d4568",
  muted: "#46739f",
  border: "rgba(11,42,74,0.08)",
};

const BRAND = {
  navy: {
    dark: "#12324f", // Darkest navy
    mid: "#12324f", // Main navy
    light: "#143A63", // Lighter navy
    lighter: "#1A4570", // Lightest navy
  },
  gold: {
    primary: "#FDB913", // Main gold/yellow (from "IT" in logo)
    light: "#FFD54F", // Light gold
    dark: "#F59E0B", // Dark gold/amber
    gradient: "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
  },
};

const testimonials = [
  {
    id: 1,
    name: "Michael Anderson",
    role: "Chief Technology Officer",
    company: "Global Enterprise Solutions",
    feedback:
      "Their team transformed our digital infrastructure with exceptional execution. The performance improvements and scalability exceeded our expectations.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Sophia Williams",
    role: "VP of Operations",
    company: "NextGen Technologies",
    feedback:
      "From modernization to cloud integration,every delivery was handled with professionalism and precision.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "David Johnson",
    role: "Director of Digital Transformation",
    company: "InnovateX Systems",
    feedback:
      "Reliable,scalable,and future-ready solutions that accelerated our deployment timelines significantly.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Emma Richardson",
    role: "Enterprise Solutions Lead",
    company: "Vertex Dynamics",
    feedback:
      "Their agile delivery model helped us launch products faster with better reliability and enterprise security.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section
      className="relative py-8 lg:py-12 overflow-hidden"
      style={{
        background: COLORS.bg,
      }}
    >
      {/* BACKGROUND SHAPES */}
      <div className="absolute inset-0 overflow-hidden">
        {/* <div
          className="absolute top-[-150px] left-[-120px] w-[420px] h-[420px] rounded-full blur-3xl"
          style={{
            background: "rgba(245,158,11,0.12)",
          }}
        ></div> */}

        <div
          className="absolute bottom-[-150px] right-[-120px] w-[420px] h-[420px] rounded-full blur-3xl"
          style={{
            background: "rgba(11,42,74,0.08)",
          }}
        ></div>

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px,#0b2a4a 1px,transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        ></div>
      </div>

      <div className="max-w-8xl mx-auto px-4 lg:px-8 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-5xl mx-auto mb-20"
        >
          {/* <span
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
            style={{
              background: "rgba(245,158,11,0.12)",
              color: COLORS.accent,
              border: "1px solid rgba(245,158,11,0.2)",
            }}
          >
            Client Testimonials
          </span> */}

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6"
            style={{
              color: COLORS.primary,
            }}
          >
            Trusted by{" "}
            <span
              style={{
                backgroundImage: BRAND.gold.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Businesses Worldwide
            </span>
          </h2>

          <p
            className="text-lg leading-relaxed"
            style={{
              color: COLORS.muted,
            }}
          >
            We build long-term enterprise partnerships through scalable digital
            transformation solutions and world-class execution.
          </p>
        </motion.div>

        {/* SLIDER */}
        <div className="relative flex items-center justify-center">
          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            className="hidden lg:flex absolute left-0 z-20 w-14 h-14 rounded-2xl items-center justify-center transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "#ffffff",
              border: `1px solid ${COLORS.border}`,
              color: COLORS.primary,
              boxShadow: "0 10px 30px rgba(11,42,74,0.08)",
            }}
          >
            <FaChevronLeft />
          </button>

          {/* CARDS */}
          <div className="relative w-full flex justify-center items-center min-h-[420px]">
            {testimonials.map((item, index) => {
              const position =
                (index - current + testimonials.length) % testimonials.length;

              let styles = {};

              if (position === 0) {
                styles = {
                  transform: "translateX(0px) scale(1)",
                  opacity: 1,
                  zIndex: 30,
                };
              } else if (position === 1) {
                styles = {
                  transform: "translateX(340px) scale(0.82)",
                  opacity: 0.45,
                  zIndex: 20,
                };
              } else if (position === testimonials.length - 1) {
                styles = {
                  transform: "translateX(-340px) scale(0.82)",
                  opacity: 0.45,
                  zIndex: 20,
                };
              } else {
                styles = {
                  transform: "translateX(0px) scale(0.6)",
                  opacity: 0,
                  zIndex: 0,
                };
              }

              return (
                <motion.div
                  key={item.id}
                  animate={styles}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                  }}
                  className="absolute w-full max-w-[620px]"
                >
                  <div
                    className="relative rounded-[38px] overflow-hidden p-10 lg:p-14"
                    style={{
                      background: COLORS.card,
                      border: `1px solid ${COLORS.border}`,
                      boxShadow: "0 30px 80px rgba(11,42,74,0.08)",
                    }}
                  >
                    {/* GLOW */}
                    <div
                      className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl"
                      style={{
                        background: "rgba(245,158,11,0.12)",
                      }}
                    ></div>

                    {/* QUOTE */}
                    <div
                      className="w-20 h-20 rounded-3xl flex items-center justify-center mb-8"
                      style={{
                        background: "rgba(245,158,11,0.12)",
                      }}
                    >
                      <FaQuoteLeft
                        className="text-3xl"
                        style={{
                          color: COLORS.accent,
                        }}
                      />
                    </div>

                    {/* STARS */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="text-sm"
                          style={{
                            color: COLORS.accent,
                          }}
                        />
                      ))}
                    </div>

                    {/* FEEDBACK */}
                    <p
                      className="text-lg leading-relaxed mb-10"
                      style={{
                        color: COLORS.text,
                      }}
                    >
                      "{item.feedback}"
                    </p>

                    {/* USER */}
                    <div className="flex items-center gap-5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-3xl object-cover"
                      />

                      <div>
                        <h4
                          className="font-black text-2xl"
                          style={{
                            color: COLORS.primary,
                          }}
                        >
                          {item.name}
                        </h4>

                        <p
                          className="text-sm font-semibold mt-1"
                          style={{
                            color: COLORS.accent,
                          }}
                        >
                          {item.role}
                        </p>

                        <div className="flex items-center gap-2 mt-2">
                          <FaBuilding
                            className="text-[10px]"
                            style={{
                              color: COLORS.muted,
                            }}
                          />

                          <span
                            className="text-sm"
                            style={{
                              color: COLORS.muted,
                            }}
                          >
                            {item.company}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* BOTTOM LINE */}
                    <div
                      className="absolute bottom-0 left-0 h-[4px] w-full"
                      style={{
                        background:
                          "linear-gradient(to right,#f59e0b,transparent)",
                      }}
                    ></div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            className="hidden lg:flex absolute right-0 z-20 w-14 h-14 rounded-2xl items-center justify-center transition-all duration-300 hover:-translate-y-1"
            style={{
              background: COLORS.accent,
              color: "#fff",
              boxShadow: "0 15px 40px rgba(245,158,11,0.25)",
            }}
          >
            <FaChevronRight />
          </button>
        </div>

        {/* MOBILE DOTS */}
        <div className="lg:hidden flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className="rounded-full transition-all duration-300"
              style={{
                width: index === current ? "38px" : "12px",
                height: "12px",
                background:
                  index === current ? COLORS.accent : "rgba(11,42,74,0.15)",
              }}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
