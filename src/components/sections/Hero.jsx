// // // // import React from "react";

// // // // const Hero = () => {
// // // //   return (
// // // //     <section className="relative w-full h-screen overflow-hidden bg-black">
// // // //       {/* Background Video */}
// // // //       <div className="absolute inset-0 w-full h-full">
// // // //         <iframe
// // // //           className="w-full h-full absolute inset-0 scale-110"
// // // //           // 🔴 REPLACE WITH YOUR VIDEO URL
// // // //           src="https://www.youtube.com/embed/l5pSoNNuVHc?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0&modestbranding=1"
// // // //           title="Hero Video"
// // // //           allow="autoplay; fullscreen"
// // // //           allowFullScreen
// // // //         />
// // // //       </div>

// // // //       {/* Dark gradient overlay (bottom only) */}
// // // //       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

// // // //       {/* Logo watermark (top center) */}
// // // //       <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
// // // //         <div className="text-white font-bold text-2xl tracking-tight opacity-90">
// // // //           Innovise<span className="text-amber-500">IT</span>
// // // //         </div>
// // // //       </div>

// // // //       {/* Scroll indicator */}
// // // //       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
// // // //         <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2">
// // // //           <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Hero;

// // // // import React from "react";
// // // // import { Link } from "react-router-dom";

// // // // export default function Hero() {
// // // //   return (
// // // //     <section className="relative w-full h-[90vh] overflow-hidden">
// // // //       {/* 🎥 YouTube Background */}
// // // //       <div className="absolute inset-0 w-full h-full overflow-hidden">
// // // //         <iframe
// // // //           className="w-full h-full object-cover scale-125"
// // // //           src="https://www.youtube.com/embed/l5pSoNNuVHc?autoplay=1&mute=1&loop=1&playlist=l5pSoNNuVHc&controls=0&showinfo=0&modestbranding=1"
// // // //           title="Hero Video"
// // // //           frameBorder="0"
// // // //           allow="autoplay; fullscreen"
// // // //           allowFullScreen
// // // //         ></iframe>
// // // //       </div>

// // // //       {/* 🌑 Overlay */}
// // // //       <div className="absolute inset-0 bg-black/60"></div>

// // // //       {/* 📦 Content */}
// // // //       <div className="relative z-10 flex items-center h-full">
// // // //         <div className="max-w-6xl mx-auto px-6">
// // // //           <h1 className="text-white text-4xl md:text-6xl font-semibold mb-6">
// // // //             The Perpetually Adaptive Enterprise
// // // //           </h1>

// // // //           <p className="text-gray-300 max-w-xl mb-8">
// // // //             Adapt. Evolve. Lead the future with innovation and resilience.
// // // //           </p>

// // // //           <Link
// // // //             to="/who-we-are"
// // // //             className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-semibold"
// // // //           >
// // // //             Learn More →
// // // //           </Link>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // import React, { useState, useRef } from "react";
// // // import { Link } from "react-router-dom";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import {
// // //   FaPlay,
// // //   FaPause,
// // //   FaVolumeUp,
// // //   FaVolumeMute,
// // //   FaExpand,
// // //   FaCompress,
// // //   FaArrowRight,
// // //   FaChevronDown,
// // // } from "react-icons/fa";

// // // // 🎨 BRAND COLORS
// // // const BRAND = {
// // //   navy: {
// // //     dark: "#0B1D33",
// // //     mid: "#0D2847",
// // //     light: "#143A63",
// // //     lighter: "#1A4570",
// // //   },
// // //   gold: {
// // //     primary: "#FDB913",
// // //     light: "#FFD54F",
// // //     gradient: "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
// // //   },
// // // };

// // // const HeroVideo = ({
// // //   videoUrl = "https://www.youtube.com/embed/l5pSoNNuVHc",
// // //   ctaText = "Learn More",
// // //   ctaLink = "/who-we-are",
// // //   showScrollIndicator = true,
// // // }) => {
// // //   const [isPlaying, setIsPlaying] = useState(true);
// // //   const [isMuted, setIsMuted] = useState(true);
// // //   const [isFullscreen, setIsFullscreen] = useState(false);
// // //   const [showControls, setShowControls] = useState(false);
// // //   const containerRef = useRef(null);
// // //   const iframeRef = useRef(null);
// // //   let hideTimer;

// // //   // Handle mouse movement for showing/hiding controls
// // //   const handleMouseMove = () => {
// // //     setShowControls(true);
// // //     clearTimeout(hideTimer);
// // //     hideTimer = setTimeout(() => setShowControls(false), 3000);
// // //   };

// // //   // Toggle Play/Pause
// // //   const togglePlay = () => {
// // //     if (isPlaying) {
// // //       iframeRef.current?.contentWindow.postMessage(
// // //         '{"event":"command","func":"pauseVideo","args":""}',
// // //         "*",
// // //       );
// // //       setIsPlaying(false);
// // //     } else {
// // //       iframeRef.current?.contentWindow.postMessage(
// // //         '{"event":"command","func":"playVideo","args":""}',
// // //         "*",
// // //       );
// // //       setIsPlaying(true);
// // //     }
// // //   };

// // //   // Toggle Mute
// // //   const toggleMute = () => {
// // //     if (isMuted) {
// // //       iframeRef.current?.contentWindow.postMessage(
// // //         '{"event":"command","func":"unMute","args":""}',
// // //         "*",
// // //       );
// // //       iframeRef.current?.contentWindow.postMessage(
// // //         '{"event":"command","func":"setVolume","args":[50]}',
// // //         "*",
// // //       );
// // //       setIsMuted(false);
// // //     } else {
// // //       iframeRef.current?.contentWindow.postMessage(
// // //         '{"event":"command","func":"mute","args":""}',
// // //         "*",
// // //       );
// // //       setIsMuted(true);
// // //     }
// // //   };

// // //   // Toggle Fullscreen
// // //   const toggleFullscreen = () => {
// // //     if (!document.fullscreenElement) {
// // //       containerRef.current?.requestFullscreen();
// // //       setIsFullscreen(true);
// // //     } else {
// // //       document.exitFullscreen();
// // //       setIsFullscreen(false);
// // //     }
// // //   };

// // //   return (
// // //     <section
// // //       ref={containerRef}
// // //       className="relative w-full h-[90vh] overflow-hidden cursor-none"
// // //       onMouseMove={handleMouseMove}
// // //       onMouseLeave={() => setShowControls(false)}
// // //     >
// // //       {/* ==================== VIDEO BACKGROUND ==================== */}
// // //       <div className="absolute inset-0 w-full h-full">
// // //         <iframe
// // //           ref={iframeRef}
// // //           className="w-[178%] h-[315%] md:w-[177.78%] md:h-[177.78%] object-cover"
// // //           style={{
// // //             position: "absolute",
// // //             top: "-50%",
// // //             left: "-38.89%",
// // //             transform: "scale(1.3)", // Slight zoom for cinematic feel
// // //           }}
// // //           src={`${videoUrl}?autoplay=1&mute=1&loop=1&playlist=${videoUrl.split("/").pop()}&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&enablejsapi=1`}
// // //           title="Hero Background Video"
// // //           frameBorder="0"
// // //           allow="autoplay; fullscreen; encrypted-media"
// // //           allowFullScreen
// // //         />
// // //       </div>

// // //       {/* ==================== OVERLAY GRADIENTS ==================== */}

// // //       {/* Main Dark Overlay */}
// // //       <div
// // //         className="absolute inset-0 transition-opacity duration-700"
// // //         style={{
// // //           background: `linear-gradient(
// // //             to right,
// // //             ${BRAND.navy.dark}ee 0%,
// // //             ${BRAND.navy.mid}88 35%,
// // //             rgba(11,29,51,0.4) 60%,
// // //             transparent 100%
// // //           )`,
// // //         }}
// // //       />

// // //       {/* Bottom Gradient Fade */}
// // //       <div
// // //         className="absolute bottom-0 left-0 right-0 h-40"
// // //         style={{
// // //           background: `linear-gradient(to top, ${BRAND.navy.dark}, transparent)`,
// // //         }}
// // //       />

// // //       {/* Left Edge Accent Line */}
// // //       <motion.div
// // //         initial={{ scaleY: 0 }}
// // //         animate={{ scaleY: 1 }}
// // //         transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
// // //         className="absolute left-8 lg:left-16 top-0 bottom-0 w-[2px] origin-top"
// // //         style={{ background: BRAND.gold.gradient }}
// // //       />

// // //       {/* ==================== LEFT SIDE - VIDEO CONTROLS ==================== */}
// // //       <AnimatePresence>
// // //         {showControls && (
// // //           <motion.div
// // //             initial={{ opacity: 0, x: -20 }}
// // //             animate={{ opacity: 1, x: 0 }}
// // //             exit={{ opacity: 0, x: -20 }}
// // //             transition={{ duration: 0.3 }}
// // //             className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4"
// // //           >
// // //             {/* Play/Pause Button - Large */}
// // //             <button
// // //               onClick={togglePlay}
// // //               className="group relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
// // //               style={{
// // //                 background: isPlaying
// // //                   ? `${BRAND.navy.lighter}cc`
// // //                   : BRAND.gold.gradient,
// // //                 border: `2px solid ${BRAND.gold.primary}60`,
// // //                 boxShadow: `0 0 30px ${isPlaying ? "transparent" : `${BRAND.gold.primary}40`}`,
// // //                 backdropFilter: "blur(10px)",
// // //               }}
// // //               aria-label={isPlaying ? "Pause video" : "Play video"}
// // //             >
// // //               <AnimatePresence mode="wait">
// // //                 {isPlaying ? (
// // //                   <motion.div
// // //                     key="pause"
// // //                     initial={{ scale: 0, rotate: -90 }}
// // //                     animate={{ scale: 1, rotate: 0 }}
// // //                     exit={{ scale: 0, rotate: 90 }}
// // //                     transition={{ duration: 0.2 }}
// // //                   >
// // //                     <FaPause
// // //                       className="text-xl"
// // //                       style={{
// // //                         color: isPlaying ? BRAND.gold.primary : BRAND.navy.dark,
// // //                       }}
// // //                     />
// // //                   </motion.div>
// // //                 ) : (
// // //                   <motion.div
// // //                     key="play"
// // //                     initial={{ scale: 0, rotate: 90 }}
// // //                     animate={{ scale: 1, rotate: 0 }}
// // //                     exit={{ scale: 0, rotate: -90 }}
// // //                     transition={{ duration: 0.2 }}
// // //                   >
// // //                     <FaPlay
// // //                       className="text-xl ml-1"
// // //                       style={{ color: BRAND.navy.dark }}
// // //                     />
// // //                   </motion.div>
// // //                 )}
// // //               </AnimatePresence>

// // //               {/* Pulse Ring when Paused */}
// // //               {!isPlaying && (
// // //                 <span
// // //                   className="absolute inset-0 rounded-full animate-ping opacity-30"
// // //                   style={{ background: BRAND.gold.primary }}
// // //                 />
// // //               )}
// // //             </button>

// // //             {/* Mute Button */}
// // //             <button
// // //               onClick={toggleMute}
// // //               className="group relative w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
// // //               style={{
// // //                 background: `${BRAND.navy.lighter}99`,
// // //                 border: `1px solid rgba(255,255,255,0.15)`,
// // //                 backdropFilter: "blur(10px)",
// // //               }}
// // //               aria-label={isMuted ? "Unmute" : "Mute"}
// // //             >
// // //               {isMuted ? (
// // //                 <FaVolumeMute className="text-sm text-gray-400 group-hover:text-white transition-colors" />
// // //               ) : (
// // //                 <FaVolumeUp className="text-sm text-gray-400 group-hover:text-white transition-colors" />
// // //               )}
// // //             </button>

// // //             {/* Fullscreen Button */}
// // //             <button
// // //               onClick={toggleFullscreen}
// // //               className="group relative w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
// // //               style={{
// // //                 background: `${BRAND.navy.lighter}99`,
// // //                 border: `1px solid rgba(255,255,255,0.15)`,
// // //                 backdropFilter: "blur(10px)",
// // //               }}
// // //               aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
// // //             >
// // //               {isFullscreen ? (
// // //                 <FaCompress className="text-xs text-gray-400 group-hover:text-white transition-colors" />
// // //               ) : (
// // //                 <FaExpand className="text-xs text-gray-400 group-hover:text-white transition-colors" />
// // //               )}
// // //             </button>

// // //             {/* Status Indicator */}
// // //             <div className="mt-2 text-center">
// // //               <div
// // //                 className={`w-2 h-2 rounded-full mx-auto mb-2 ${isPlaying ? "animate-pulse" : ""}`}
// // //                 style={{
// // //                   background: isPlaying ? "#22C55E" : BRAND.gold.primary,
// // //                 }}
// // //               />
// // //               <span className="text-[9px] uppercase tracking-widest text-gray-500 font-medium">
// // //                 {isPlaying ? "Live" : "Paused"}
// // //               </span>
// // //             </div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>

// // //       {/* Always Visible Small Play Indicator (when controls hidden) */}
// // //       {!showControls && (
// // //         <motion.button
// // //           onClick={togglePlay}
// // //           initial={{ opacity: 0 }}
// // //           animate={{ opacity: 0.6 }}
// // //           whileHover={{ opacity: 1, scale: 1.1 }}
// // //           className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all"
// // //           style={{
// // //             background: `${BRAND.navy.lighter}80`,
// // //             border: `1px solid ${BRAND.gold.primary}30`,
// // //           }}
// // //           aria-label="Toggle playback"
// // //         >
// // //           {isPlaying ? (
// // //             <FaPause
// // //               className="text-sm"
// // //               style={{ color: BRAND.gold.primary }}
// // //             />
// // //           ) : (
// // //             <FaPlay
// // //               className="text-sm ml-0.5"
// // //               style={{ color: BRAND.gold.primary }}
// // //             />
// // //           )}
// // //         </motion.button>
// // //       )}

// // //       {/* ==================== BOTTOM LEFT - LEARN MORE BUTTON ==================== */}
// // //       <div className="absolute bottom-8 lg:bottom-12 left-6 lg:left-12 z-30">
// // //         {/* Button Container with Glass Effect */}
// // //         <Link
// // //           to={ctaLink}
// // //           className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
// // //           style={{
// // //             background: `rgba(26,69,112,0.6)`,
// // //             backdropFilter: "blur(20px)",
// // //             border: `1px solid ${BRAND.gold.primary}40`,
// // //             color: "#FFFFFF",
// // //             boxShadow: `0 8px 32px rgba(253,185,19,0.15)`,
// // //           }}
// // //           onMouseEnter={(e) => {
// // //             e.currentTarget.style.background = BRAND.gold.gradient;
// // //             e.currentTarget.style.color = BRAND.navy.dark;
// // //             e.currentTarget.style.borderColor = BRAND.gold.primary;
// // //             e.currentTarget.style.boxShadow = `0 12px 40px rgba(253,185,19,0.4)`;
// // //           }}
// // //           onMouseLeave={(e) => {
// // //             e.currentTarget.style.background = `rgba(26,69,112,0.6)`;
// // //             e.currentTarget.style.color = "#FFFFFF";
// // //             e.currentTarget.style.borderColor = `${BRAND.gold.primary}40`;
// // //             e.currentTarget.style.boxShadow = `0 8px 32px rgba(253,185,19,0.15)`;
// // //           }}
// // //         >
// // //           {/* Icon */}
// // //           <FaArrowRight className="relative z-10 text-sm transition-transform group-hover:translate-x-1" />

// // //           {/* Text */}
// // //           <span className="relative z-10 tracking-wide">{ctaText}</span>

// // //           {/* Shine Effect on Hover */}
// // //           <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out">
// // //             <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
// // //           </div>

// // //           {/* Border Glow Animation */}
// // //           <motion.div
// // //             className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
// // //             animate={{
// // //               boxShadow: [
// // //                 `0 0 0 0 ${BRAND.gold.primary}40`,
// // //                 `0 0 0 4px ${BRAND.gold.primary}00`,
// // //               ],
// // //             }}
// // //             transition={{ duration: 1.5, repeat: Infinity }}
// // //           />
// // //         </Link>

// // //         {/* Subtle Label Below Button */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 10 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 1, duration: 0.5 }}
// // //           className="mt-3 flex items-center gap-2"
// // //         >
// // //           <span
// // //             className="w-6 h-[1px]"
// // //             style={{ background: `${BRAND.gold.primary}60` }}
// // //           />
// // //           <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium">
// // //             Discover More
// // //           </span>
// // //         </motion.div>
// // //       </div>

// // //       {/* ==================== BOTTOM RIGHT - SCROLL INDICATOR (Optional) ==================== */}
// // //       {showScrollIndicator && (
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 1.5, duration: 0.6 }}
// // //           className="absolute bottom-8 right-8 lg:right-16 z-30 flex flex-col items-center gap-3"
// // //         >
// // //           <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-medium writing-vertical-rl rotate-180">
// // //             Scroll
// // //           </span>

// // //           <motion.div
// // //             animate={{ y: [0, 8, 0] }}
// // //             transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
// // //             className="flex flex-col items-center gap-1"
// // //           >
// // //             <FaChevronDown
// // //               className="text-xs"
// // //               style={{ color: BRAND.gold.primary }}
// // //             />
// // //             <div
// // //               className="w-[1px] h-8"
// // //               style={{
// // //                 background: `linear-gradient(to bottom, ${BRAND.gold.primary}, transparent)`,
// // //               }}
// // //             />
// // //           </motion.div>
// // //         </motion.div>
// // //       )}

// // //       {/* ==================== TOP RIGHT - LOGO / BRANDING (Optional) ==================== */}
// // //       <motion.div
// // //         initial={{ opacity: 0, y: -20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ delay: 0.3 }}
// // //         className="absolute top-6 right-6 lg:top-10 lg:right-16 z-30"
// // //       >
// // //         <div
// // //           className="px-5 py-2.5 rounded-full backdrop-blur-md text-sm font-bold tracking-wider"
// // //           style={{
// // //             background: `rgba(11,29,51,0.6)`,
// // //             border: `1px solid rgba(253,185,19,0.25)`,
// // //           }}
// // //         >
// // //           <span style={{ color: BRAND.gold.primary }}>Innovise</span>
// // //           <span className="ml-1 text-white">IT</span>
// // //         </div>
// // //       </motion.div>

// // //       {/* ==================== DECORATIVE ELEMENTS ==================== */}

// // //       {/* Top Left Corner Decoration */}
// // //       <svg
// // //         className="absolute top-0 left-0 w-32 h-32 opacity-20"
// // //         viewBox="0 0 100 100"
// // //         fill="none"
// // //       >
// // //         <path
// // //           d="M0 0 L40 0 L0 40"
// // //           stroke={BRAND.gold.primary}
// // //           strokeWidth="1"
// // //           strokeLinecap="round"
// // //         />
// // //         <circle cx="0" cy="0" r="3" fill={BRAND.gold.primary} />
// // //       </svg>

// // //       {/* Bottom Right Corner Decoration */}
// // //       <svg
// // //         className="absolute bottom-0 right-0 w-48 h-48 opacity-10"
// // //         viewBox="0 0 200 200"
// // //         fill="none"
// // //       >
// // //         <circle
// // //           cx="200"
// // //           cy="200"
// // //           r="150"
// // //           stroke={BRAND.gold.primary}
// // //           strokeWidth="0.5"
// // //         />
// // //         <circle
// // //           cx="200"
// // //           cy="200"
// // //           r="100"
// // //           stroke={BRAND.gold.primary}
// // //           strokeWidth="0.5"
// // //         />
// // //         <circle
// // //           cx="200"
// // //           cy="200"
// // //           r="50"
// // //           stroke={BRAND.gold.primary}
// // //           strokeWidth="0.5"
// // //         />
// // //       </svg>

// // //       {/* Grain Texture Overlay */}
// // //       <div
// // //         className="absolute inset-0 pointer-events-none opacity-[0.03]"
// // //         style={{
// // //           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
// // //           backgroundSize: "128px 128px",
// // //         }}
// // //       />

// // //       {/* Vignette Effect */}
// // //       <div
// // //         className="absolute inset-0 pointer-events-none"
// // //         style={{
// // //           background:
// // //             "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.4) 100%)",
// // //         }}
// // //       />
// // //     </section>
// // //   );
// // // };

// // // export default HeroVideo;

// // import React, { useState, useRef, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   FaPlay,
// //   FaPause,
// //   FaChevronLeft,
// //   FaChevronRight,
// //   FaArrowRight,
// //   FaChevronDown,
// // } from "react-icons/fa";

// // // 🎨 BRAND COLORS
// // const BRAND = {
// //   navy: {
// //     dark: "#0B1D33",
// //     mid: "#0D2847",
// //     light: "#143A63",
// //     lighter: "#1A4570",
// //   },
// //   gold: {
// //     primary: "#FDB913",
// //     light: "#FFD54F",
// //     gradient: "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
// //   },
// // };

// // const HeroImageSlider = ({
// //   // 🔧 CONFIGURATION - Replace these with your actual images
// //   images = [
// //     "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80", // Image 1
// //     "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80", // Image 2
// //     "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80", // Image 3
// //     "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80", // Image 4
// //     "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80", // Image 5
// //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80", // Image 6
// //   ],

// //   ctaText = "Learn More",
// //   ctaLink = "/who-we-are",
// //   showScrollIndicator = true,
// //   autoPlayInterval = 4000, // ⏱️ Change slide every 4 seconds (adjust as needed)
// // }) => {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [isPlaying, setIsPlaying] = useState(false);
// //   const [showControls, setShowControls] = useState(false);
// //   const containerRef = useRef(null);
// //   let hideTimer;
// //   let intervalRef = useRef(null);

// //   // ==================== SLIDER LOGIC ====================

// //   // Go to specific slide
// //   const goToSlide = (index) => {
// //     setCurrentIndex(index);
// //   };

// //   // Next slide
// //   const nextSlide = () => {
// //     setCurrentIndex((prev) => (prev + 1) % images.length);
// //   };

// //   // Previous slide
// //   const prevSlide = () => {
// //     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
// //   };

// //   // Toggle Play/Pause
// //   const togglePlay = () => {
// //     setIsPlaying(!isPlaying);
// //   };

// //   // Auto-play effect
// //   useEffect(() => {
// //     if (isPlaying) {
// //       intervalRef.current = setInterval(nextSlide, autoPlayInterval);
// //     } else {
// //       if (intervalRef.current) {
// //         clearInterval(intervalRef.current);
// //       }
// //     }

// //     return () => {
// //       if (intervalRef.current) {
// //         clearInterval(intervalRef.current);
// //       }
// //     };
// //   }, [isPlaying, autoPlayInterval]);

// //   // Handle mouse movement for showing/hiding controls
// //   const handleMouseMove = () => {
// //     setShowControls(true);
// //     clearTimeout(hideTimer);
// //     hideTimer = setTimeout(() => setShowControls(false), 3000);
// //   };

// //   return (
// //     <section
// //       ref={containerRef}
// //       className="relative w-full h-[90vh] overflow-hidden cursor-default"
// //       onMouseMove={handleMouseMove}
// //       onMouseLeave={() => setShowControls(false)}
// //     >
// //       {/* ==================== IMAGE SLIDER ==================== */}
// //       <div className="absolute inset-0 w-full h-full">
// //         <AnimatePresence mode="wait">
// //           <motion.div
// //             key={currentIndex}
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             transition={{ duration: 1, ease: "easeInOut" }}
// //             className="absolute inset-0 w-full h-full bg-cover bg-center"
// //             style={{
// //               backgroundImage: `url(${images[currentIndex]})`,
// //             }}
// //           />
// //         </AnimatePresence>
// //       </div>

// //       {/* ==================== OVERLAY GRADIENTS ==================== */}

// //       {/* Main Dark Overlay */}
// //       <div
// //         className="absolute inset-0 transition-opacity duration-700"
// //         style={{
// //           background: `linear-gradient(
// //             to right,
// //             ${BRAND.navy.dark}ee 0%,
// //             ${BRAND.navy.mid}88 35%,
// //             rgba(11,29,51,0.4) 60%,
// //             transparent 100%
// //           )`,
// //         }}
// //       />

// //       {/* Bottom Gradient Fade */}
// //       <div
// //         className="absolute bottom-0 left-0 right-0 h-40"
// //         style={{
// //           background: `linear-gradient(to top, ${BRAND.navy.dark}, transparent)`,
// //         }}
// //       />

// //       {/* Left Edge Accent Line */}
// //       <motion.div
// //         initial={{ scaleY: 0 }}
// //         animate={{ scaleY: 1 }}
// //         transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
// //         className="absolute left-8 lg:left-16 top-0 bottom-0 w-[2px] origin-top"
// //         style={{ background: BRAND.gold.gradient }}
// //       />

// //       {/* ==================== LEFT SIDE - SLIDER CONTROLS ==================== */}
// //       <AnimatePresence>
// //         {showControls && (
// //           <motion.div
// //             initial={{ opacity: 0, x: -20 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             exit={{ opacity: 0, x: -20 }}
// //             transition={{ duration: 0.3 }}
// //             className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4"
// //           >
// //             {/* Play/Pause Button - Large */}
// //             <button
// //               onClick={togglePlay}
// //               className="group relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
// //               style={{
// //                 background: isPlaying
// //                   ? `${BRAND.navy.lighter}cc`
// //                   : BRAND.gold.gradient,
// //                 border: `2px solid ${BRAND.gold.primary}60`,
// //                 boxShadow: `0 0 30px ${isPlaying ? "transparent" : `${BRAND.gold.primary}40`}`,
// //                 backdropFilter: "blur(10px)",
// //               }}
// //               aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
// //             >
// //               <AnimatePresence mode="wait">
// //                 {isPlaying ? (
// //                   <motion.div
// //                     key="pause"
// //                     initial={{ scale: 0, rotate: -90 }}
// //                     animate={{ scale: 1, rotate: 0 }}
// //                     exit={{ scale: 0, rotate: 90 }}
// //                     transition={{ duration: 0.2 }}
// //                   >
// //                     <FaPause
// //                       className="text-xl"
// //                       style={{ color: BRAND.gold.primary }}
// //                     />
// //                   </motion.div>
// //                 ) : (
// //                   <motion.div
// //                     key="play"
// //                     initial={{ scale: 0, rotate: 90 }}
// //                     animate={{ scale: 1, rotate: 0 }}
// //                     exit={{ scale: 0, rotate: -90 }}
// //                     transition={{ duration: 0.2 }}
// //                   >
// //                     <FaPlay
// //                       className="text-xl ml-1"
// //                       style={{ color: BRAND.navy.dark }}
// //                     />
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>

// //               {/* Pulse Ring when Paused */}
// //               {!isPlaying && (
// //                 <span
// //                   className="absolute inset-0 rounded-full animate-ping opacity-30"
// //                   style={{ background: BRAND.gold.primary }}
// //                 />
// //               )}
// //             </button>

// //             {/* Previous Button */}
// //             <button
// //               onClick={prevSlide}
// //               className="group relative w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
// //               style={{
// //                 background: `${BRAND.navy.lighter}99`,
// //                 border: `1px solid rgba(255,255,255,0.15)`,
// //                 backdropFilter: "blur(10px)",
// //               }}
// //               aria-label="Previous image"
// //             >
// //               <FaChevronLeft className="text-sm text-gray-400 group-hover:text-white transition-colors" />
// //             </button>

// //             {/* Next Button */}
// //             <button
// //               onClick={nextSlide}
// //               className="group relative w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
// //               style={{
// //                 background: `${BRAND.navy.lighter}99`,
// //                 border: `1px solid rgba(255,255,255,0.15)`,
// //                 backdropFilter: "blur(10px)",
// //               }}
// //               aria-label="Next image"
// //             >
// //               <FaChevronRight className="text-sm text-gray-400 group-hover:text-white transition-colors" />
// //             </button>

// //             {/* Status Indicator */}
// //             <div className="mt-2 text-center">
// //               <div
// //                 className={`w-2 h-2 rounded-full mx-auto mb-2 ${isPlaying ? "animate-pulse" : ""}`}
// //                 style={{
// //                   background: isPlaying ? "#22C55E" : BRAND.gold.primary,
// //                 }}
// //               />
// //               <span className="text-[9px] uppercase tracking-widest text-gray-500 font-medium">
// //                 {isPlaying ? "Live" : "Paused"}
// //               </span>
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //       {/* Always Visible Small Play Indicator (when controls hidden) */}
// //       {!showControls && (
// //         <motion.button
// //           onClick={togglePlay}
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 0.6 }}
// //           whileHover={{ opacity: 1, scale: 1.1 }}
// //           className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all"
// //           style={{
// //             background: `${BRAND.navy.lighter}80`,
// //             border: `1px solid ${BRAND.gold.primary}30`,
// //           }}
// //           aria-label="Toggle slideshow"
// //         >
// //           {isPlaying ? (
// //             <FaPause
// //               className="text-sm"
// //               style={{ color: BRAND.gold.primary }}
// //             />
// //           ) : (
// //             <FaPlay
// //               className="text-sm ml-0.5"
// //               style={{ color: BRAND.gold.primary }}
// //             />
// //           )}
// //         </motion.button>
// //       )}

// //       {/* ==================== IMAGE DOTS INDICATOR ==================== */}
// //       <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-30 flex gap-3">
// //         {images.map((_, index) => (
// //           <button
// //             key={index}
// //             onClick={() => goToSlide(index)}
// //             className="transition-all duration-300 hover:scale-125"
// //             style={{
// //               width: currentIndex === index ? "12px" : "10px",
// //               height: currentIndex === index ? "12px" : "10px",
// //               borderRadius: "50%",
// //               background:
// //                 currentIndex === index
// //                   ? BRAND.gold.primary
// //                   : "rgba(255,255,255,0.3)",
// //               border:
// //                 currentIndex === index
// //                   ? `2px solid ${BRAND.gold.primary}`
// //                   : "1px solid transparent",
// //               boxShadow:
// //                 currentIndex === index
// //                   ? `0 0 10px ${BRAND.gold.primary}60`
// //                   : "none",
// //               transform: currentIndex === index ? "scale(1.2)" : "scale(1)",
// //             }}
// //             aria-label={`Go to image ${index + 1}`}
// //           />
// //         ))}
// //       </div>

// //       {/* ==================== BOTTOM LEFT - LEARN MORE BUTTON ==================== */}
// //       <div className="absolute bottom-8 lg:bottom-12 left-6 lg:left-12 z-30">
// //         {/* Button Container with Glass Effect */}
// //         <Link
// //           to={ctaLink}
// //           className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
// //           style={{
// //             background: `rgba(26,69,112,0.6)`,
// //             backdropFilter: "blur(20px)",
// //             border: `1px solid ${BRAND.gold.primary}40`,
// //             color: "#FFFFFF",
// //             boxShadow: `0 8px 32px rgba(253,185,19,0.15)`,
// //           }}
// //           onMouseEnter={(e) => {
// //             e.currentTarget.style.background = BRAND.gold.gradient;
// //             e.currentTarget.style.color = BRAND.navy.dark;
// //             e.currentTarget.style.borderColor = BRAND.gold.primary;
// //             e.currentTarget.style.boxShadow = `0 12px 40px rgba(253,185,19,0.4)`;
// //           }}
// //           onMouseLeave={(e) => {
// //             e.currentTarget.style.background = `rgba(26,69,112,0.6)`;
// //             e.currentTarget.style.color = "#FFFFFF";
// //             e.currentTarget.style.borderColor = `${BRAND.gold.primary}40`;
// //             e.currentTarget.style.boxShadow = `0 8px 32px rgba(253,185,19,0.15)`;
// //           }}
// //         >
// //           {/* Icon */}
// //           <FaArrowRight className="relative z-10 text-sm transition-transform group-hover:translate-x-1" />

// //           {/* Text */}
// //           <span className="relative z-10 tracking-wide">{ctaText}</span>

// //           {/* Shine Effect on Hover */}
// //           <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out">
// //             <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
// //           </div>

// //           {/* Border Glow Animation */}
// //           <motion.div
// //             className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
// //             animate={{
// //               boxShadow: [
// //                 `0 0 0 0 ${BRAND.gold.primary}40`,
// //                 `0 0 0 4px ${BRAND.gold.primary}00`,
// //               ],
// //             }}
// //             transition={{ duration: 1.5, repeat: Infinity }}
// //           />
// //         </Link>

// //         {/* Subtle Label Below Button */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 10 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 1, duration: 0.5 }}
// //           className="mt-3 flex items-center gap-2"
// //         >
// //           <span
// //             className="w-6 h-[1px]"
// //             style={{ background: `${BRAND.gold.primary}60` }}
// //           />
// //           <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium">
// //             Discover More
// //           </span>
// //         </motion.div>
// //       </div>

// //       {/* ==================== BOTTOM RIGHT - SCROLL INDICATOR (Optional) ==================== */}
// //       {/* {showScrollIndicator && (
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 1.5, duration: 0.6 }}
// //           className="absolute bottom-8 right-8 lg:right-16 z-30 flex flex-col items-center gap-3"
// //         >
// //           <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-medium writing-vertical-rl rotate-180">
// //             Scroll
// //           </span>

// //           <motion.div
// //             animate={{ y: [0, 8, 0] }}
// //             transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
// //             className="flex flex-col items-center gap-1"
// //           >
// //             <FaChevronDown
// //               className="text-xs"
// //               style={{ color: BRAND.gold.primary }}
// //             />
// //             <div
// //               className="w-[1px] h-8"
// //               style={{
// //                 background: `linear-gradient(to bottom, ${BRAND.gold.primary}, transparent)`,
// //               }}
// //             />
// //           </motion.div>
// //         </motion.div>
// //       )} */}

// //       {/* ==================== TOP RIGHT - LOGO / BRANDING (Optional) ==================== */}
// //       <motion.div
// //         initial={{ opacity: 0, y: -20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ delay: 0.3 }}
// //         className="absolute top-6 right-6 lg:top-10 lg:right-16 z-30"
// //       >
// //         <div
// //           className="px-5 py-2.5 rounded-full backdrop-blur-md text-sm font-bold tracking-wider"
// //           style={{
// //             background: `rgba(11,29,51,0.6)`,
// //             border: `1px solid rgba(253,185,19,0.25)`,
// //           }}
// //         >
// //           <span style={{ color: BRAND.gold.primary }}>Innovise</span>
// //           <span className="ml-1 text-white">IT</span>
// //         </div>
// //       </motion.div>

// //       {/* ==================== DECORATIVE ELEMENTS ==================== */}

// //       {/* Top Left Corner Decoration */}
// //       <svg
// //         className="absolute top-0 left-0 w-32 h-32 opacity-20"
// //         viewBox="0 0 100 100"
// //         fill="none"
// //       >
// //         <path
// //           d="M0 0 L40 0 L0 40"
// //           stroke={BRAND.gold.primary}
// //           strokeWidth="1"
// //           strokeLinecap="round"
// //         />
// //         <circle cx="0" cy="0" r="3" fill={BRAND.gold.primary} />
// //       </svg>

// //       {/* Bottom Right Corner Decoration */}
// //       <svg
// //         className="absolute bottom-0 right-0 w-48 h-48 opacity-10"
// //         viewBox="0 0 200 200"
// //         fill="none"
// //       >
// //         <circle
// //           cx="200"
// //           cy="200"
// //           r="150"
// //           stroke={BRAND.gold.primary}
// //           strokeWidth="0.5"
// //         />
// //         <circle
// //           cx="200"
// //           cy="200"
// //           r="100"
// //           stroke={BRAND.gold.primary}
// //           strokeWidth="0.5"
// //         />
// //         <circle
// //           cx="200"
// //           cy="200"
// //           r="50"
// //           stroke={BRAND.gold.primary}
// //           strokeWidth="0.5"
// //         />
// //       </svg>

// //       {/* Grain Texture Overlay */}
// //       <div
// //         className="absolute inset-0 pointer-events-none opacity-[0.03]"
// //         style={{
// //           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
// //           backgroundSize: "128px 128px",
// //         }}
// //       />

// //       {/* Vignette Effect */}
// //       <div
// //         className="absolute inset-0 pointer-events-none"
// //         style={{
// //           background:
// //             "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.4) 100%)",
// //         }}
// //       />
// //     </section>
// //   );
// // };

// // export default HeroImageSlider;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const HeroAutoSlider = ({
//   // 🔧 CONFIGURATION - Replace with your images
//   images = [
//     "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
//     "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80",
//     "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
//     "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80",
//     "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
//     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
//   ],

//   interval = 4000, // ⏱️ Change slide every 4 seconds
// }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-rotate images
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, interval);

//     return () => clearInterval(timer);
//   }, [images.length, interval]);

//   return (
//     <section className="relative w-full h-[70vh] overflow-hidden">
//       {/* ==================== IMAGE SLIDER ==================== */}
//       <div className="absolute inset-0 w-full h-full">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.5, ease: "easeInOut" }}
//             className="absolute inset-0 w-full h-full bg-cover bg-center"
//             style={{
//               backgroundImage: `url(${images[currentIndex]})`,
//             }}
//           />
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default HeroAutoSlider;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaComments, FaChevronDown } from "react-icons/fa";

// 🎨 BRAND COLORS
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

const HeroSliderWithContent = ({
  // 🔧 CONFIGURATION - Replace with your images
  images = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
  ],

  interval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-black">
      {/* ==================== IMAGE SLIDER BACKGROUND ==================== */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[currentIndex]})`,
            }}
          />
        </AnimatePresence>
      </div>

      {/* ==================== OVERLAY GRADIENTS ==================== */}

      {/* Main Dark Gradient Overlay (Left Side) */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to right,
            ${BRAND.navy.dark}ee 0%,
            ${BRAND.navy.mid}aa 40%,
            rgba(11,29,51,0.5) 65%,
            transparent 100%
          )`,
        }}
      />

      {/* Bottom Gradient Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: `linear-gradient(to top, ${BRAND.navy.dark}, transparent)`,
        }}
      />

      {/* Left Edge Accent Line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className="absolute left-8 lg:left-16 top-0 bottom-0 w-[3px] origin-top z-20"
        style={{ background: BRAND.gold.gradient }}
      />

      {/* ==================== CONTENT SECTION ==================== */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
          <div className="max-w-2xl">
            {/* Badge / Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: `rgba(253,185,19,0.15)`,
                border: `1px solid ${BRAND.gold.primary}40`,
                backdropFilter: "blur(10px)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: BRAND.gold.primary }}
              />
              <span
                className="text-sm font-semibold tracking-wide uppercase"
                style={{ color: BRAND.gold.primary }}
              >
                Trusted SAP Partner
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              style={{ color: "#FFFFFF" }}
            >
              Exclusive SAP{" "}
              <span
                style={{
                  background: BRAND.gold.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Excellence
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-xl md:text-2xl font-semibold mb-6"
              style={{ color: BRAND.gold.light }}
            >
              Delivered Globally
            </motion.h2>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-base md:text-lg leading-relaxed mb-10 max-w-xl"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              Innovise IT is your specialized SAP partner — delivering expert
              consulting, AMS, AI-powered testing, and landscape transformation
              across{" "}
              <span className="font-bold" style={{ color: BRAND.gold.primary }}>
                6 global offices
              </span>
              .
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Primary Button - Explore Services */}
              <Link
                to="/services"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                style={{
                  background: BRAND.gold.gradient,
                  color: BRAND.navy.dark,
                  boxShadow: `0 8px 32px rgba(253,185,19,0.35)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 16px 48px rgba(253,185,19,0.5)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 8px 32px rgba(253,185,19,0.35)`;
                }}
              >
                <span className="relative z-10 tracking-wide">
                  Explore Services
                </span>
                <FaArrowRight className="relative z-10 text-sm transition-transform group-hover:translate-x-1" />

                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out">
                  <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                </div>
              </Link>

              {/* Secondary Button - Talk to an Expert */}
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base overflow-hidden transition-all duration-500 hover:-translate-y-1"
                style={{
                  background: `rgba(26,69,112,0.6)`,
                  backdropFilter: "blur(20px)",
                  border: `2px solid ${BRAND.gold.primary}50`,
                  color: "#FFFFFF",
                  boxShadow: `0 8px 32px rgba(253,185,19,0.15)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `rgba(253,185,19,0.15)`;
                  e.currentTarget.style.borderColor = BRAND.gold.primary;
                  e.currentTarget.style.boxShadow = `0 12px 40px rgba(253,185,19,0.3)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `rgba(26,69,112,0.6)`;
                  e.currentTarget.style.borderColor = `${BRAND.gold.primary}50`;
                  e.currentTarget.style.boxShadow = `0 8px 32px rgba(253,185,19,0.15)`;
                }}
              >
                <FaComments className="relative z-10 text-sm transition-transform group-hover:scale-110" />
                <span className="relative z-10 tracking-wide">
                  Talk to an Expert
                </span>

                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out">
                  <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                </div>
              </Link>
            </motion.div>

            {/* Stats / Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="mt-12 pt-8 flex flex-wrap gap-8 md:gap-12"
              style={{
                borderTop: `1px solid rgba(253,185,19,0.2)`,
              }}
            >
              <div>
                <div
                  className="text-3xl font-bold"
                  style={{ color: BRAND.gold.primary }}
                >
                  6+
                </div>
                <div
                  className="text-sm uppercase tracking-wider mt-1"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Global Offices
                </div>
              </div>

              <div>
                <div
                  className="text-3xl font-bold"
                  style={{ color: BRAND.gold.primary }}
                >
                  24/7
                </div>
                <div
                  className="text-sm uppercase tracking-wider mt-1"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Support Available
                </div>
              </div>

              <div>
                <div
                  className="text-3xl font-bold"
                  style={{ color: BRAND.gold.primary }}
                >
                  100+
                </div>
                <div
                  className="text-sm uppercase tracking-wider mt-1"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  SAP Experts
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ==================== SCROLL INDICATOR ==================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 right-8 lg:right-16 z-30 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium rotate-180 writing-vertical-rl">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <FaChevronDown
            className="text-xs"
            style={{ color: BRAND.gold.primary }}
          />
          <div
            className="w-[1px] h-8"
            style={{
              background: `linear-gradient(to bottom, ${BRAND.gold.primary}, transparent)`,
            }}
          />
        </motion.div>
      </motion.div>

      {/* ==================== DECORATIVE ELEMENTS ==================== */}

      {/* Top Left Corner Decoration */}
      <svg
        className="absolute top-0 left-0 w-32 h-32 opacity-20 pointer-events-none"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M0 0 L40 0 L0 40"
          stroke={BRAND.gold.primary}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="0" cy="0" r="4" fill={BRAND.gold.primary} />
      </svg>

      {/* Bottom Right Corner Decoration */}
      <svg
        className="absolute bottom-0 right-0 w-56 h-56 opacity-10 pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle
          cx="200"
          cy="200"
          r="150"
          stroke={BRAND.gold.primary}
          strokeWidth="0.5"
        />
        <circle
          cx="200"
          cy="200"
          r="100"
          stroke={BRAND.gold.primary}
          strokeWidth="0.5"
        />
        <circle
          cx="200"
          cy="200"
          r="50"
          stroke={BRAND.gold.primary}
          strokeWidth="0.5"
        />
      </svg>

      {/* Grain Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Vignette Effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.5) 100%)",
        }}
      />
    </section>
  );
};

export default HeroSliderWithContent;
