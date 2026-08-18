// // import React from "react";
// // import Container from "../ui/Container";
// // import { clientLogos, companyData } from "../../data/companyData";

// // const Clients = () => {
// //   return (
// //     <section className="py-20 bg-white border-y border-gray-100">
// //       <Container>
// //         <div className="text-center mb-12">
// //           <p className="text-sm font-bold text-primary-600 uppercase tracking-wider mb-2">
// //             Trusted By Industry Leaders
// //           </p>
// //           <p className="text-gray-600 max-w-2xl mx-auto">
// //             Partnering with Fortune 500 companies and innovative enterprises
// //             worldwide
// //           </p>
// //         </div>

// //         {/* Client Logos Grid */}
// //         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
// //           {clientLogos.map((client, idx) => (
// //             <div
// //               key={idx}
// //               className="flex items-center justify-center p-6 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 group"
// //             >
// //               <div className="text-center">
// //                 <div className="text-2xl font-bold text-gray-400 group-hover:text-primary-600 transition-colors">
// //                   {client.name}
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Certifications */}
// //         <div className="mt-16 pt-12 border-t border-gray-100">
// //           <p className="text-center text-sm font-semibold text-gray-500 mb-6">
// //             CERTIFICATIONS & PARTNERSHIPS
// //           </p>
// //           <div className="flex flex-wrap justify-center gap-4">
// //             {companyData.certifications.map((cert, idx) => (
// //               <div
// //                 key={idx}
// //                 className="px-5 py-2.5 bg-gray-50 rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-primary-300 hover:text-primary-700 transition-colors"
// //               >
// //                 {cert}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </Container>
// //     </section>
// //   );
// // };

// // export default Clients;

// import React from "react";
// import { motion } from "framer-motion";

// // Import your logo images
// import img1 from "../../assets/patners/p1.png";
// import img2 from "../../assets/patners/p2.png";
// import img3 from "../../assets/patners/p3.png";
// import img4 from "../../assets/patners/p4.png";
// import img5 from "../../assets/patners/p5.png";
// import img6 from "../../assets/patners/p1.png";
// import img7 from "../../assets/patners/p2.png";
// import img8 from "../../assets/patners/p3.png";

// const logos = [
//   { id: 1, src: img1, name: "Partner 1" },
//   { id: 2, src: img2, name: "Partner 2" },
//   { id: 3, src: img3, name: "Partner 3" },
//   { id: 4, src: img4, name: "Partner 4" },
//   { id: 5, src: img5, name: "Partner 5" },
//   { id: 6, src: img6, name: "Partner 6" },
//   { id: 7, src: img7, name: "Partner 7" },
//   { id: 8, src: img8, name: "Partner 8" },
// ];

// // Duplicate logos for seamless loop
// const duplicatedLogos = [...logos, ...logos];

// const PartnerMarquee = () => {
//   return (
//     <section className="relative py-6 lg:py-10 overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//             backgroundSize: "40px 40px",
//           }}
//         />
//       </div>

//       {/* Gradient Overlays for Fade Effect */}
//       <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10" />
//       <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10" />

//       <div className="relative z-20 max-w-8xl mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white tracking-tight">
//             Our <span className=" text-white ">Partners</span>
//           </h2>
//           <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
//             Collaborating with world-class organizations to deliver exceptional
//             results
//           </p>
//         </div>
//       </div>

//       {/* Infinite Marquee Container */}
//       <div className="relative">
//         {/* Top Row - Left to Right */}
//         <div className="overflow-hidden mb-8">
//           <motion.div
//             className="flex gap-8 md:gap-12 lg:gap-16"
//             animate={{ x: [0, -((duplicatedLogos.length / 2) * 200)] }}
//             transition={{
//               x: {
//                 repeat: Infinity,
//                 repeatType: "loop",
//                 duration: 30,
//                 ease: "linear",
//               },
//             }}
//           >
//             {duplicatedLogos.map((logo, index) => (
//               <motion.div
//                 key={`top-${logo.id}-${index}`}
//                 className="flex-shrink-0 group"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <div
//                   className="w-40 h-24 md:w-48 md:h-28 lg:w-56 lg:h-32
//                    backdrop-blur-sm rounded-2xl
//                   border border-white/10
//                   flex items-center justify-center
//                   bg-white/10"
//                 >
//                   <img
//                     src={logo.src}
//                     alt={logo.name}
//                     className="w-full h-full object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
//                     loading="lazy"
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Bottom Row - Right to Left (Reverse) */}
//         <div className="overflow-hidden">
//           <motion.div
//             className="flex gap-8 md:gap-12 lg:gap-16"
//             animate={{ x: [-((duplicatedLogos.length / 2) * 200), 0] }}
//             transition={{
//               x: {
//                 repeat: Infinity,
//                 repeatType: "loop",
//                 duration: 35,
//                 ease: "linear",
//               },
//             }}
//           >
//             {[...duplicatedLogos].reverse().map((logo, index) => (
//               <motion.div
//                 key={`bottom-${logo.id}-${index}`}
//                 className="flex-shrink-0 group"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <div
//                   className="w-40 h-24 md:w-48 md:h-28 lg:w-56 lg:h-32
//                   bg-white/5 backdrop-blur-sm rounded-2xl
//                   border border-white/10
//                   flex items-center justify-center p-4
//                   hover:bg-white/10 hover:border-cyan-500/50
//                   hover:shadow-lg hover:shadow-cyan-500/10
//                   transition-all duration-300 cursor-pointer"
//                 >
//                   <img
//                     src={logo.src}
//                     alt={logo.name}
//                     className="w-full h-full object-contain filter brightness-0 invert opacity-50 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
//                     loading="lazy"
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PartnerMarquee;

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// // Import your logo images
// import img1 from "../../assets/patners/p1.png";
// import img2 from "../../assets/patners/p2.png";
// import img3 from "../../assets/patners/p3.png";
// import img4 from "../../assets/patners/p4.png";
// import img5 from "../../assets/patners/p5.png";
// import img6 from "../../assets/patners/p1.png";
// import img7 from "../../assets/patners/p2.png";
// import img8 from "../../assets/patners/p3.png";

// const logos = [
//   { id: 1, src: img1, name: "Partner 1" },
//   { id: 2, src: img2, name: "Partner 2" },
//   { id: 3, src: img3, name: "Partner 3" },
//   { id: 4, src: img4, name: "Partner 4" },
//   { id: 5, src: img5, name: "Partner 5" },
//   { id: 6, src: img6, name: "Partner 6" },
//   { id: 7, src: img7, name: "Partner 7" },
//   { id: 8, src: img8, name: "Partner 8" },
// ];

// const PartnerMarquee = () => {
//   const [containerWidth, setContainerWidth] = useState(0);

//   // Calculate proper scroll distance based on container
//   useEffect(() => {
//     const updateWidth = () => {
//       const itemWidth =
//         window.innerWidth < 768 ? 160 : window.innerWidth < 1024 ? 192 : 224;
//       const gap =
//         window.innerWidth < 768 ? 32 : window.innerWidth < 1024 ? 48 : 64;
//       setContainerWidth((itemWidth + gap) * logos.length);
//     };

//     updateWidth();
//     window.addEventListener("resize", updateWidth);
//     return () => window.removeEventListener("resize", updateWidth);
//   }, []);

//   return (
//     <section className="relative py-6 lg:py-8 overflow-hidden bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950">
//       {/* Animated Background Grid */}
//       <div className="absolute inset-0 opacity-[0.03]">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
//             `,
//             backgroundSize: "60px 60px",
//           }}
//         />
//       </div>

//       {/* Gradient Overlays for Seamless Fade */}
//       <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 lg:w-56 bg-gradient-to-r from-gray-950 via-gray-950/95 to-transparent z-20 pointer-events-none" />
//       <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 lg:w-56 bg-gradient-to-l from-gray-950 via-gray-950/95 to-transparent z-20 pointer-events-none" />

//       <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12 lg:mb-16"
//         >
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white tracking-tight mb-4">
//             Our{" "}
//             <span className="relative">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-500">
//                 Partners
//               </span>
//             </span>
//           </h2>

//           <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
//             Collaborating with world-class organizations to deliver exceptional
//             results
//           </p>
//         </motion.div>
//       </div>

//       {/* Marquee Container */}
//       <div className="relative">
//         {/*  TOP ROW - Left to Right */}
//         <div className="overflow-hidden">
//           <motion.div
//             className="flex items-center"
//             animate={{ x: [0, -containerWidth] }}
//             transition={{
//               x: {
//                 repeat: Infinity,
//                 repeatType: "loop",
//                 duration: 25,
//                 ease: "linear",
//               },
//             }}
//           >
//             {[...logos, ...logos].map((logo, index) => (
//               <div
//                 key={`top-${logo.id}-${index}`}
//                 className="flex-shrink-0 mx-2 sm:mx-3 md:mx-4 lg:mx-5 group"
//               >
//                 <div
//                   className="relative w-36 h-20 sm:w-44 sm:h-24 md:w-52 md:h-28 lg:w-56 lg:h-32
//                     bg-white/[0.03] backdrop-blur-sm
//                     rounded-xl md:rounded-2xl
//                     border border-white/[0.08]
//                     flex items-center justify-center p-3 sm:p-4 md:p-5
//                     hover:bg-white/[0.08]
//                     hover:border-cyan-500/30
//                     hover:shadow-lg hover:shadow-cyan-500/10
//                     hover:-translate-y-1
//                     transition-all duration-500 ease-out cursor-pointer overflow-hidden"
//                 >
//                   {/* Hover Glow Effect */}
//                   <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/5 group-hover:to-purple-500/10 transition-all duration-500" />

//                   {/* Shine Effect on Hover */}
//                   <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out">
//                     <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
//                   </div>

//                   {/* Logo Image - FIXED DISPLAY */}
//                   <img
//                     src={logo.src}
//                     alt={logo.name}
//                     className="relative z-10 w-full h-full object-contain
//                       opacity-60 grayscale
//                       group-hover:opacity-100 group-hover:grayscale-0
//                       group-hover:scale-110
//                       transition-all duration-500 ease-out"
//                     loading="lazy"
//                     draggable={false}
//                   />
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Divider Line */}
//         <div className="max-w-4xl mx-auto my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

//         {/*  BOTTOM ROW - Right to Left (Reverse Direction) */}
//         <div className="overflow-hidden py-4">
//           <motion.div
//             className="flex items-center"
//             animate={{ x: [-containerWidth, 0] }}
//             transition={{
//               x: {
//                 repeat: Infinity,
//                 repeatType: "loop",
//                 duration: 30,
//                 ease: "linear",
//               },
//             }}
//           >
//             {[...logos.reverse(), ...logos.reverse()].map((logo, index) => (
//               <div
//                 key={`bottom-${logo.id}-${index}`}
//                 className="flex-shrink-0 mx-2 sm:mx-3 md:mx-4 lg:mx-5 group"
//               >
//                 <div
//                   className="relative w-36 h-20 sm:w-44 sm:h-24 md:w-52 md:h-28 lg:w-56 lg:h-32
//                     bg-white/[0.03] backdrop-blur-sm
//                     rounded-xl md:rounded-2xl
//                     border border-white/[0.08]
//                     flex items-center justify-center p-3 sm:p-4 md:p-5
//                     hover:bg-white/[0.08]
//                     hover:border-purple-500/30
//                     hover:shadow-lg hover:shadow-purple-500/10
//                     hover:-translate-y-1
//                     transition-all duration-500 ease-out cursor-pointer overflow-hidden"
//                 >
//                   {/* Hover Glow Effect */}
//                   <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/5 group-hover:to-orange-500/10 transition-all duration-500" />

//                   {/* Shine Effect */}
//                   <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out delay-100">
//                     <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
//                   </div>

//                   {/* Logo Image - FIXED DISPLAY */}
//                   <img
//                     src={logo.src}
//                     alt={logo.name}
//                     className="relative z-10 w-full h-full object-contain
//                       opacity-50 grayscale
//                       group-hover:opacity-90 group-hover:grayscale-0
//                       group-hover:scale-110
//                       transition-all duration-500 ease-out"
//                     loading="lazy"
//                     draggable={false}
//                   />
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Bottom Accent Line */}
//       <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
//     </section>
//   );
// };

// export default PartnerMarquee;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Import your logo images
import img1 from "../../assets/patners/p1.png";
import img2 from "../../assets/patners/p2.png";
import img3 from "../../assets/patners/p3.png";
import img4 from "../../assets/patners/p4.png";
import img5 from "../../assets/patners/p5.png";
import img6 from "../../assets/patners/p6.png";
// import img7 from "../../assets/patners/p2.png";
// import img8 from "../../assets/patners/p3.png";

// ============================================================
// 🎨 NAVY & GOLD BRAND COLORS
// ============================================================
const COLORS = {
  navy: {
    dark: "#12324f",
    mid: "#12324f",
    light: "#132D4B",
    darker: "#081629",
  },
  gold: {
    primary: "#FDB913",
    light: "#FFD54F",
    dark: "#E5A812",
    gradient: "linear-gradient(135deg, #FDB913 0%, #FFD54F 100%)",
  },
};

const logos = [
  { id: 1, src: img1, name: "Partner 1" },
  { id: 2, src: img2, name: "Partner 2" },
  { id: 3, src: img3, name: "Partner 3" },
  { id: 4, src: img4, name: "Partner 4" },
  { id: 5, src: img5, name: "Partner 5" },
  { id: 6, src: img6, name: "Partner 6" },
  // { id: 7, src: img7, name: "Partner 7" },
  // { id: 8, src: img8, name: "Partner 8" },
];

const PartnerMarquee = () => {
  const [containerWidth, setContainerWidth] = useState(0);

  // Calculate proper scroll distance based on container
  useEffect(() => {
    const updateWidth = () => {
      const itemWidth =
        window.innerWidth < 768 ? 160 : window.innerWidth < 1024 ? 192 : 224;
      const gap =
        window.innerWidth < 768 ? 32 : window.innerWidth < 1024 ? 48 : 64;
      setContainerWidth((itemWidth + gap) * logos.length);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <section className="relative py-6 lg:py-8 overflow-hidden bg-primary-100">
      {/*  Animated Background Effects */}

      {/* Gold Glow Top Left */}
      {/* <div
        className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-yellow-500/[0.04] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      /> */}

      {/* Navy Glow Bottom Right */}
      {/* <div
        className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-900/[0.12] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      /> */}

      {/* Subtle Dot Grid Pattern */}
      {/* <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #FDB913 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
        aria-hidden="true"
      /> */}

      {/* Gradient Overlays for Seamless Fade */}
      {/* <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 lg:w-56 bg-gradient-to-r from-[#12324f] via-[#12324f]/98 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 lg:w-56 bg-gradient-to-l from-[#12324f] via-[#12324f]/98 to-transparent z-20 pointer-events-none" /> */}

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================================ */}
        {/* 📌 HEADER SECTION                */}
        {/* ================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-14 lg:mb-18"
        >
          {/* Badge */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-yellow-500/[0.12] to-yellow-400/[0.06] border border-yellow-500/25 rounded-full mb-6"
          >
            <i className="fas fa-handshake text-[#FDB913] text-sm animate-pulse" />
            <span className="text-[#FFD54F] text-xs font-bold tracking-[0.15em] uppercase">
              Trusted Partnerships
            </span>
          </motion.div> */}

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 leading-tight">
            <span className="text-black">Our </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#FDB913] via-[#FFD54F] to-[#FDB913] bg-clip-text text-transparent">
                Partners
              </span>
              {/* Underline Decoration */}
              {/* <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FDB913] to-[#FFD54F] rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              /> */}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-800 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Collaborating with world-class organizations to deliver exceptional
            results and drive innovation across industries
          </p>

          {/* Decorative Line */}
          {/* <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-16 h-[2px] rounded-full bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FDB913] shadow-[0_0_15px_rgba(253,185,19,0.5)] animate-pulse" />
            <div className="w-16 h-[2px] rounded-full bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
          </div> */}
        </motion.div>
      </div>

      {/* ================================ */}
      {/*  MARQUEE CONTAINER             */}
      {/* ================================ */}
      <div className="relative mt-4">
        {/* TOP ROW - Left to Right */}
        <div className="overflow-hidden">
          <motion.div
            className="flex items-center"
            animate={{ x: [0, -containerWidth] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 28,
                ease: "linear",
              },
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`top-${logo.id}-${index}`}
                className="flex-shrink-0 mx-4 sm:mx-5 md:mx-6 lg:mx-7"
              >
                <div
                  className="
    relative
    w-44 h-28
    sm:w-52 sm:h-28
    md:w-60 md:h-28
    lg:w-60 lg:h-28
    xl:w-60 xl:h-28
    bg-white
    rounded-2xl
    border border-gray-100
    shadow-md
    hover:shadow-xl
    flex items-center justify-center
    p-4
    transition-all duration-300
  "
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Elegant Divider Line */}
        {/* <div className="max-w-4xl mx-auto my-8 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 rounded-full bg-[#FDB913] shadow-[0_0_10px_rgba(253,185,19,0.6)]" />
        </div> */}

        {/* BOTTOM ROW - Right to Left (Reverse Direction) */}
        {/* <div className="overflow-hidden pt-4">
          <motion.div
            className="flex items-center"
            animate={{ x: [-containerWidth, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {[...logos.reverse(), ...logos.reverse()].map((logo, index) => (
              <div
                key={`bottom-${logo.id}-${index}`}
                className="flex-shrink-0 mx-2 sm:mx-3 md:mx-4 lg:mx-5 group"
              >
                <div
                  className="relative w-36 h-20 sm:w-44 sm:h-24 md:w-52 md:h-28 lg:w-56 lg:h-32 
                    bg-white/[0.02] backdrop-blur-md 
                    rounded-xl md:rounded-2xl 
                    border border-white/[0.05]
                    flex items-center justify-center p-4 sm:p-5 md:p-6
                   
                    transition-all duration-500 ease-out cursor-pointer overflow-hidden"
                >
                  

                  
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="relative z-10 w-full h-full object-contain 
                      
                      transition-all duration-500 ease-out"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div> */}
      </div>

      {/* ================================ */}
      {/* 🔻 BOTTOM ACCENT                 */}
      {/* ================================ */}

      {/* Accent Line */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FDB913]/30 to-transparent" /> */}

      {/* Custom Animations */}
      {/* <style>{`
        @keyframes float-glow {
          0%, 100% { 
            transform: translateY(0); 
            box-shadow: 0 0 20px rgba(253, 185, 19, 0.1);
          }
          50% { 
            transform: translateY(-5px); 
            box-shadow: 0 0 35px rgba(253, 185, 19, 0.2);
          }
        }

        @keyframes shimmer-gold {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .animate-float-glow {
          animation: float-glow 4s ease-in-out infinite;
        }

        .shimmer-gold {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(253, 185, 19, 0.1) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmer-gold 3s infinite;
        }
      `}</style> */}
    </section>
  );
};

export default PartnerMarquee;
