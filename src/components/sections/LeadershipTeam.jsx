// // import React from "react";
// // import { motion } from "framer-motion";
// // import { FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";

// // // Sample leader data
// // const leaders = [
// //   {
// //     id: 1,
// //     name: "Nishant Gautam",
// //     role: "CEO & Founder",
// //     image:
// //       "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
// //     bio: "Visionary leader with 20+ years in tech innovation",
// //     linkedin: "#",
// //     twitter: "#",
// //   },
// //   {
// //     id: 2,
// //     name: "Robert Marchand",
// //     role: "COO",
// //     image:
// //       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
// //     bio: "Operations expert driving organizational excellence",
// //     linkedin: "#",
// //     twitter: "#",
// //   },
// //   {
// //     id: 3,
// //     name: "Rodrigo Recio",
// //     role: "Director Testing Services",
// //     image:
// //       "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
// //     bio: "Quality assurance pioneer with global experience",
// //     linkedin: "#",
// //     twitter: "#",
// //   },
// //   {
// //     id: 4,
// //     name: "Jason Mitchell",
// //     role: "CTO",
// //     image:
// //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
// //     bio: "Technology architect shaping digital futures",
// //     linkedin: "#",
// //     twitter: "#",
// //   },
// // ];

// // const LeadershipTeam = () => {
// //   return (
// //     <section className="relative py-6 lg:py-10 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
// //       {/* Subtle Background Pattern */}
// //       <div className="absolute inset-0 opacity-[0.03]">
// //         <div
// //           className="absolute inset-0"
// //           style={{
// //             backgroundImage: `radial-gradient(circle at 2px 2px, #1e3a5f 1px, transparent 0)`,
// //             backgroundSize: "40px 40px",
// //           }}
// //         />
// //       </div>

// //       <div className="relative max-w-8xl mx-auto px-2 sm:px-4 lg:px-6">
// //         {/* Header Section */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.6 }}
// //           className="text-center mb-16 lg:mb-20"
// //         >
// //           {/* Badge */}
// //           <div className="inline-flex items-center gap-3 mb-6">
// //             <span className="flex gap-1.5">
// //               {[...Array(5)].map((_, i) => (
// //                 <span
// //                   key={i}
// //                   className={`w-2 h-2 rounded-full ${i === 2 ? "bg-blue-900 scale-125" : "bg-blue-300"}`}
// //                 />
// //               ))}
// //             </span>
// //             <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-900">
// //               Innovise Executive
// //             </span>
// //             <span className="w-10 h-10 rounded-full border-2 border-blue-200 flex items-center justify-center">
// //               <span className="w-2.5 h-2.5 rounded-full bg-blue-900" />
// //             </span>
// //           </div>

// //           {/* Title */}
// //           <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-blue-950 tracking-tight mb-4">
// //             Leadership Team
// //           </h2>

// //           {/* <div className="w-24 h-1 bg-gradient-to-r from-blue-900 via-orange-500 to-blue-900 mx-auto rounded-full" /> */}
// //         </motion.div>

// //         {/* Leaders Grid */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
// //           {leaders.map((leader, index) => (
// //             <motion.div
// //               key={leader.id}
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: index * 0.15, duration: 0.5 }}
// //               className="group"
// //             >
// //               <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
// //                 {/* Top Section - Navy Blue with Photo */}
// //                 <div className="relative pt-12 pb-24 px-6 bg-gradient-to-b from-[#12324f] via-[#143a63] to-[#1a4570]">
// //                   {/* Decorative Circle Border */}
// //                   <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-32 sm:w-36 sm:h-36">
// //                     {/* Outer rotating ring */}
// //                     <motion.div
// //                       className="absolute inset-0 rounded-full border-4 border-dashed border-white/30"
// //                       animate={{ rotate: 360 }}
// //                       transition={{
// //                         duration: 20,
// //                         repeat: Infinity,
// //                         ease: "linear",
// //                       }}
// //                     />

// //                     {/* Solid white arc (top) */}
// //                     <svg
// //                       className="absolute inset-0 w-full h-full"
// //                       viewBox="0 0 100 100"
// //                     >
// //                       <path
// //                         d="M 10,50 A 40,40 0 0,1 90,50"
// //                         fill="none"
// //                         stroke="white"
// //                         strokeWidth="4"
// //                         strokeLinecap="round"
// //                       />
// //                       {/* Purple dots on ends */}
// //                       <circle cx="10" cy="50" r="4" fill="#7c3aed" />
// //                       <circle cx="90" cy="50" r="4" fill="#7c3aed" />
// //                     </svg>

// //                     {/* Photo Container */}
// //                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
// //                       <img
// //                         src={leader.image}
// //                         alt={leader.name}
// //                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// //                         loading="lazy"
// //                       />
// //                     </div>
// //                   </div>

// //                   {/* Decorative dots pattern */}
// //                   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
// //                     <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
// //                     <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
// //                     <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
// //                   </div>
// //                 </div>

// //                 {/* Orange Chevron Divider */}
// //                 <div className="relative h-8 bg-gradient-to-b from-[#1a4570] overflow-hidden">
// //                   <svg
// //                     className="absolute w-full h-full"
// //                     preserveAspectRatio="none"
// //                     viewBox="0 0 400 32"
// //                   >
// //                     <path
// //                       d="M0,0 L150,28 L200,16 L250,28 L400,0 L400,32 L0,32 Z"
// //                       fill="#dc2626"
// //                     />
// //                     <path
// //                       d="M0,0 L160,26 L200,14 L240,26 L400,0"
// //                       fill="none"
// //                       stroke="#f97316"
// //                       strokeWidth="2"
// //                     />
// //                   </svg>
// //                 </div>

// //                 {/* Bottom Section - Dark Purple/Maroon */}
// //                 <div className="relative px-6 py-8 bg-gradient-to-b from-[#4a1942] to-[#2d1130] text-center">
// //                   {/* Name */}
// //                   <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
// //                     {leader.name}
// //                   </h3>

// //                   {/* Role */}
// //                   <p className="text-sm text-purple-200 font-medium mb-4">
// //                     {leader.role}
// //                   </p>

// //                   {/* Social Links - Appear on Hover */}
// //                   <div className="flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
// //                     {[
// //                       {
// //                         icon: FaLinkedinIn,
// //                         href: leader.linkedin,
// //                         color: "hover:bg-blue-600",
// //                       },
// //                       {
// //                         icon: FaTwitter,
// //                         href: leader.twitter,
// //                         color: "hover:bg-sky-500",
// //                       },
// //                       {
// //                         icon: FaEnvelope,
// //                         href: `mailto:${leader.email}`,
// //                         color: "hover:bg-red-500",
// //                       },
// //                     ].map((social, idx) => (
// //                       <a
// //                         key={idx}
// //                         href={social.href}
// //                         className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center ${social.color} hover:text-white transition-all duration-300`}
// //                         aria-label={`${social.icon.name} profile`}
// //                       >
// //                         <social.icon className="text-xs text-white" />
// //                       </a>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 {/* Hover Glow Effect */}
// //                 <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
// //                   <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent" />
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default LeadershipTeam;

// import React from "react";
// import { motion } from "framer-motion";
// import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";

// // Leadership Data (Updated)
// const leaders = [
//   {
//     name: "Nishant Gautam",
//     role: "Founder & CEO",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//     description:
//       "20+ years in IT services, SAP ecosystem, and enterprise transformation with deal experience up to $100M.",
//   },
//   {
//     name: "Bob Marchand",
//     role: "Chief Operating Officer",
//     image: "https://randomuser.me/api/portraits/men/45.jpg",
//     description:
//       "20+ years SAP leadership, GTM strategy, and global program execution.",
//   },
//   {
//     name: "Alan Wu",
//     role: "Chief Revenue Officer",
//     image: "https://randomuser.me/api/portraits/men/50.jpg",
//     description:
//       "Enterprise sales expert translating SAP technologies into business value.",
//   },
//   {
//     name: "Oliver Betz",
//     role: "Board Advisor",
//     image: "https://randomuser.me/api/portraits/men/60.jpg",
//     description:
//       "25 years at SAP SE driving ERP, AI, and global enterprise growth.",
//   },
//   {
//     name: "Silvio Bessa",
//     role: "Board Advisor",
//     image: "https://randomuser.me/api/portraits/men/70.jpg",
//     description:
//       "Expert in scaling high-growth organizations and SAP service expansion.",
//   },
//   {
//     name: "Timothy Wirtjes",
//     role: "Guidewire Practice Lead",
//     image: "https://randomuser.me/api/portraits/men/22.jpg",
//     description:
//       "14+ years in Guidewire, cloud migrations, and insurance systems.",
//   },
//   {
//     name: "Jasbir Singh",
//     role: "Director – AMS",
//     image: "https://randomuser.me/api/portraits/men/80.jpg",
//     description:
//       "24 years in SAP consulting, project management, and AMS delivery.",
//   },
//   {
//     name: "Rodrigo Recio",
//     role: "Director – Testing Services",
//     image: "https://randomuser.me/api/portraits/men/90.jpg",
//     description: "15+ years in QA, automation, and AI-driven transformation.",
//   },
// ];

// const LeadershipTeam = () => {
//   return (
//     <section className="py-16 bg-[#0B1F3A] text-white">
//       <div className="max-w-8xl mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-5xl font-bold text-white">
//             Leadership Team
//           </h2>
//           <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
//         </div>

//         {/* Carousel */}
//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={30}
//           autoplay={{ delay: 2500 }}
//           loop={true}
//           breakpoints={{
//             320: { slidesPerView: 1 },
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {leaders.map((leader, index) => (
//             <SwiperSlide key={index}>
//               <motion.div
//                 whileHover={{ y: -10 }}
//                 className="bg-[#112D4E] rounded-2xl shadow-xl overflow-hidden group"
//               >
//                 {/* Image */}
//                 <div className="relative">
//                   <img
//                     src={leader.image}
//                     alt={leader.name}
//                     className="w-full h-64 object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 text-center">
//                   <h3 className="text-xl font-semibold text-yellow-400">
//                     {leader.name}
//                   </h3>

//                   <p className="text-sm text-gray-300 mb-3">{leader.role}</p>

//                   <p className="text-xs text-gray-400 mb-4 leading-relaxed">
//                     {leader.description}
//                   </p>

//                   {/* Social */}
//                   <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
//                     <a className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center">
//                       <FaLinkedinIn />
//                     </a>
//                     <a className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center">
//                       <FaEnvelope />
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default LeadershipTeam;

// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import img1 from "../../assets/leaders/NishantGautam.webp";
// import img2 from "../../assets/leaders/BobMarchand.webp";
// import img3 from "../../assets/leaders/AlanWu.webp";
// import img4 from "../../assets/leaders/OliverBetz.webp";
// import img5 from "../../assets/leaders/SilvioBessa.webp";
// import img6 from "../../assets/leaders/TimothyWirtjes.webp";
// import img7 from "../../assets/leaders/JasbirSingh.webp";
// import img8 from "../../assets/leaders/RodrigoRecio.webp";

// import "swiper/css";

// const leaders = [
//   {
//     name: "Nishant Gautam",
//     role: "Founder & CEO",
//     image: img1,
//   },
//   {
//     name: "Bob Marchand",
//     role: "Chief Operating Officer",
//     image: img2,
//   },
//   {
//     name: "Alan Wu",
//     role: "Chief Revenue Officer",
//     image: img3,
//   },
//   {
//     name: "Oliver Betz",
//     role: "Board Advisor",
//     image: img4,
//   },
//   {
//     name: "Silvio Bessa",
//     role: "Board Advisor",
//     image: img5,
//   },
//   {
//     name: "Timothy Wirtjes",
//     role: "Guidewire Practice Lead",
//     image: img6,
//   },
//   {
//     name: "Jasbir Singh",
//     role: "Director – AMS",
//     image: img7,
//   },
//   {
//     name: "Rodrigo Recio",
//     role: "Director – Testing Services",
//     image: img8,
//   },
// ];

// const LeadershipTeam = () => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-8xl mx-auto px-4">
//         {/* Title */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3A]">
//             Leadership Team
//           </h2>
//           <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4 rounded-full" />
//         </div>

//         {/* Carousel */}
//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={20}
//           autoplay={{ delay: 2500 }}
//           loop={true}
//           breakpoints={{
//             320: { slidesPerView: 2 },
//             640: { slidesPerView: 3 },
//             1024: { slidesPerView: 5 },
//           }}
//         >
//           {leaders.map((leader, index) => (
//             <SwiperSlide key={index}>
//               <motion.div whileHover={{ y: -6 }} className="text-center group">
//                 {/* Image */}
//                 <div className="w-60 h-60 mx-auto rounded-lg overflow-hidden shadow-md border-1 border-[#0B1F3A] group-hover:shadow-xl transition">
//                   <img
//                     src={leader.image}
//                     alt={leader.name}
//                     className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
//                   />
//                 </div>

//                 {/* Name */}
//                 <h3 className="mt-4 text-xl font-semibold text-[#0B1F3A]">
//                   {leader.name}
//                 </h3>

//                 {/* Role */}
//                 <p className="text-md text-gray-500">{leader.role}</p>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Bottom Button */}
//         <div className="text-center mt-12">
//           <Link to="/about/leadership">
//             <button className="px-8 py-3 bg-[#0B1F3A] text-white font-medium rounded-full hover:bg-yellow-500 hover:text-black transition duration-300">
//               View Leadership Team
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LeadershipTeam;

// import React, { useRef, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Autoplay,
//   Navigation,
//   Pagination,
//   EffectCoverflow,
// } from "swiper/modules";
// import {
//   FaArrowRight,
//   FaLinkedinIn,
//   FaTwitter,
//   FaQuoteLeft,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";

// // Leader Images
// import img1 from "../../assets/leaders/NishantGautam.webp";
// import img2 from "../../assets/leaders/BobMarchand.webp";
// import img3 from "../../assets/leaders/AlanWu.webp";
// import img4 from "../../assets/leaders/OliverBetz.webp";
// import img5 from "../../assets/leaders/SilvioBessa.webp";
// import img6 from "../../assets/leaders/TimothyWirtjes.webp";
// import img7 from "../../assets/leaders/JasbirSingh.webp";
// import img8 from "../../assets/leaders/RodrigoRecio.webp";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";

// // ============================================================
// // 🎨 NAVY & GOLD BRAND COLORS
// // ============================================================
// const BRAND = {
//   navy: {
//     dark: "#12324f",
//     mid: "#12324f",
//     light: "#132D4B",
//   },
//   gold: {
//     primary: "#FDB913",
//     light: "#FFD54F",
//     gradient: "linear-gradient(135deg, #FDB913 0%, #FFD54F 100%)",
//   },
// };

// const leaders = [
//   {
//     name: "Nishant Gautam",
//     role: "Founder & CEO",
//     image: img1,
//     quote: "Building the future of digital transformation",
//     social: { linkedin: "#", twitter: "#" },
//   },
//   {
//     name: "Bob Marchand",
//     role: "Chief Operating Officer",
//     image: img2,
//     quote: "Operational excellence drives our success",
//     social: { linkedin: "#", twitter: "#" },
//   },
//   {
//     name: "Alan Wu",
//     role: "Chief Revenue Officer",
//     image: img3,
//     quote: "Revenue growth through innovation",
//     social: { linkedin: "#", twitter: "#" },
//   },
//   {
//     name: "Oliver Betz",
//     role: "Board Advisor",
//     image: img4,
//     quote: "Strategic vision for sustainable growth",
//     social: { linkedin: "#", twitter: "#" },
//   },
//   {
//     name: "Silvio Bessa",
//     role: "Board Advisor",
//     image: img5,
//     quote: "Guiding companies toward excellence",
//     social: { linkedin: "#", twitter: "#" },
//   },
//   {
//     name: "Timothy Wirtjes",
//     role: "Guidewire Practice Lead",
//     image: img6,
//     quote: "Leading insurance technology solutions",
//     social: { linkedin: "#", twitter: "#" },
//   },
//   {
//     name: "Jasbir Singh",
//     role: "Director – AMS",
//     image: img7,
//     quote: "Delivering managed services excellence",
//     social: { linkedin: "#", twitter: "#" },
//   },
//   {
//     name: "Rodrigo Recio",
//     role: "Director – Testing Services",
//     image: img8,
//     quote: "Quality assurance at its finest",
//     social: { linkedin: "#", twitter: "#" },
//   },
// ];

// const LeadershipTeam = () => {
//   const swiperRef = useRef(null);
//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Track swiper state
//   useEffect(() => {
//     if (swiperRef.current) {
//       const swiper = swiperRef.current.swiper;

//       const updateState = () => {
//         setIsBeginning(swiper.isBeginning);
//         setIsEnd(swiper.isEnd);
//         setActiveIndex(swiper.realIndex);
//       };

//       swiper.on("slideChange", updateState);
//       swiper.on("reachBeginning", () => setIsBeginning(true));
//       swiper.on("reachEnd", () => setIsEnd(true));

//       return () => {
//         swiper.off("slideChange", updateState);
//         swiper.off("reachBeginning");
//         swiper.off("reachEnd");
//       };
//     }
//   }, []);

//   // Navigation handlers
//   const goPrev = () => {
//     if (swiperRef.current) {
//       swiperRef.current.swiper.slidePrev();
//     }
//   };

//   const goNext = () => {
//     if (swiperRef.current) {
//       swiperRef.current.swiper.slideNext();
//     }
//   };

//   return (
//     <section className="relative py-6 lg:py-10 bg-gradient-to-br from-white via-gray-50/50 to-white overflow-hidden">
//       {/* ✨ Background Decorative Elements */}
//       <div
//         className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/[0.04] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
//         aria-hidden="true"
//       />
//       <div
//         className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-900/[0.03] rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"
//         aria-hidden="true"
//       />

//       {/* Subtle Pattern */}
//       <div
//         className="absolute inset-0 opacity-[0.02]"
//         style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, ${BRAND.navy.dark} 1px, transparent 0)`,
//           backgroundSize: "40px 40px",
//         }}
//         aria-hidden="true"
//       />

//       <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
//         {/* ================================ */}
//         {/* 📌 SECTION HEADER                */}
//         {/* ================================ */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-6 lg:mb-10"
//         >
//           {/* Badge */}

//           {/* Title */}
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
//             <span className="bg-gradient-to-br from-[#12324f] via-[#12324f] to-[#132D4B] bg-clip-text text-transparent">
//               Leadership
//             </span>{" "}
//             <span className="bg-gradient-to-r from-[#FDB913] via-[#FFD54F] to-[#FDB913] bg-clip-text text-transparent">
//               Team
//             </span>
//           </h2>

//           {/* Subtitle */}
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
//             Visionary leaders driving innovation and excellence across every
//             dimension of our organization
//           </p>
//         </motion.div>

//         {/* ================================ */}
//         {/* 🎠 AUTO CAROUSEL CONTAINER       */}
//         {/* ================================ */}
//         <div className="relative">
//           {/* Custom Navigation Buttons */}
//           <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-20 flex justify-between items-center px-2 lg:px-4 pointer-events-none">
//             {/* Prev Button */}
//             <button
//               onClick={goPrev}
//               disabled={isBeginning}
//               className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all duration-300 pointer-events-auto ${
//                 isBeginning
//                   ? "bg-white/50 text-gray-300 cursor-not-allowed opacity-50"
//                   : "bg-white shadow-lg hover:bg-[#12324f] hover:text-[#FFD54F] hover:shadow-xl cursor-pointer"
//               }`}
//               aria-label="Previous slide"
//             >
//               <FaChevronLeft className="text-lg" />
//             </button>

//             {/* Next Button */}
//             <button
//               onClick={goNext}
//               disabled={isEnd}
//               className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all duration-300 pointer-events-auto ${
//                 isEnd
//                   ? "bg-white/50 text-gray-300 cursor-not-allowed opacity-50"
//                   : "bg-white shadow-lg hover:bg-[#12324f] hover:text-[#FFD54F] hover:shadow-xl cursor-pointer"
//               }`}
//               aria-label="Next slide"
//             >
//               <FaChevronRight className="text-lg" />
//             </button>
//           </div>

//           {/* Swiper Carousel */}
//           <Swiper
//             ref={swiperRef}
//             modules={[Autoplay, Navigation, Pagination]}
//             spaceBetween={24}
//             slidesPerView={1.3}
//             centeredSlides={true}
//             loop={true}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//               pauseOnMouseEnter: true,
//             }}
//             speed={800}
//             effect="slide"
//             grabCursor={true}
//             breakpoints={{
//               480: {
//                 slidesPerView: 2,
//                 spaceBetween: 20,
//                 centeredSlides: false,
//               },
//               768: {
//                 slidesPerView: 3,
//                 spaceBetween: 24,
//                 centeredSlides: false,
//               },
//               1024: {
//                 slidesPerView: 4,
//                 spaceBetween: 28,
//                 centeredSlides: false,
//               },
//               1280: {
//                 slidesPerView: 5,
//                 spaceBetween: 32,
//                 centeredSlides: false,
//               },
//             }}
//             className="leadership-swiper !pb-10"
//             onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//           >
//             {leaders.map((leader, index) => (
//               <SwiperSlide key={leader.name} className="!h-auto">
//                 <motion.div
//                   whileHover={{ y: 6, scale: 1.02 }}
//                   transition={{ duration: 0.4, ease: "easeOut" }}
//                   className="group relative h-full"
//                 >
//                   {/* Card Container */}
//                   <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#FDB913]/30">
//                     {/* Image Section */}
//                     <div className="relative aspect-square overflow-hidden">
//                       <img
//                         src={leader.image}
//                         alt={leader.name}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                         loading="lazy"
//                       />

//                       {/* Image Overlay Gradient */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-[#12324f]/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

//                       {/* Hover Social Icons */}
//                       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-400 delay-100">
//                         {leader.social?.linkedin && (
//                           <a
//                             href={leader.social.linkedin}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-[#12324f] hover:bg-[#FDB913] hover:text-[#12324f] hover:scale-110 transition-all duration-300 shadow-lg"
//                             aria-label={`${leader.name} LinkedIn`}
//                           >
//                             <FaLinkedinIn className="text-sm" />
//                           </a>
//                         )}
//                         {leader.social?.twitter && (
//                           <a
//                             href={leader.social.twitter}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-[#12324f] hover:bg-[#FDB913] hover:text-[#12324f] hover:scale-110 transition-all duration-300 shadow-lg"
//                             aria-label={`${leader.name} Twitter`}
//                           >
//                             <FaTwitter className="text-sm" />
//                           </a>
//                         )}
//                       </div>

//                       {/* Quote Icon (appears on hover) */}
//                       <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#FDB913]/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-400">
//                         <FaQuoteLeft className="text-[#12324f] text-sm" />
//                       </div>
//                     </div>

//                     {/* Content Section */}
//                     <div className="p-5 lg:p-6 relative">
//                       {/* Name */}
//                       <h3 className="text-lg lg:text-xl font-bold text-[#12324f] mb-1 group-hover:text-[#12324f] transition-colors truncate">
//                         {leader.name}
//                       </h3>

//                       {/* Role */}
//                       <p className="text-sm text-gray-500 mb-3 font-medium truncate">
//                         {leader.role}
//                       </p>

//                       {/* Divider */}
//                       <div className="h-[1px] bg-gradient-to-r from-[#FDB913]/40 via-transparent to-transparent mb-3" />

//                       {/* Quote Text (subtle) */}
//                       <p className="text-xs text-gray-400 italic line-clamp-2 leading-relaxed">
//                         "{leader.quote}"
//                       </p>

//                       {/* Active Indicator Dot */}
//                       <div
//                         className={`absolute bottom-4 right-4 w-2 h-2 rounded-full transition-all duration-300 ${
//                           activeIndex === index % leaders.length
//                             ? "bg-[#FDB913] scale-125 shadow-md shadow-yellow-400/50"
//                             : "bg-gray-200"
//                         }`}
//                       />
//                     </div>

//                     {/* Top Accent Line on Hover */}
//                     <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FDB913] via-[#FFD54F] to-[#FDB913] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* ================================ */}
//         {/* 🎯 BOTTOM CTA SECTION             */}
//         {/* ================================ */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="text-center mt-6 lg:mt-6"
//         >
//           {/* Primary CTA Button */}
//           <Link to="/about/leadership">
//             <motion.button
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.98 }}
//               className="group relative inline-flex items-center gap-3 px-10 py-4.5 bg-gradient-to-r from-[#12324f] to-[#12324f] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/30 focus:outline-none focus:ring-2 focus:ring-[#FDB913] focus:ring-offset-2"
//             >
//               {/* Shine Effect */}
//               <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out">
//                 <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
//               </span>

//               <span className="relative z-10">View Full Leadership Team</span>
//               <FaArrowRight className="relative z-10 group-hover:translate-x-1 group-hover:text-[#FFD54F] transition-all duration-300" />
//             </motion.button>
//           </Link>

//           {/* Secondary Info Text */}
//           <p className="mt-5 text-sm text-gray-500 tracking-wide">
//             Discover the minds behind our success story
//           </p>
//         </motion.div>
//       </div>

//       {/* Bottom Accent Line */}
//       <div
//         className="absolute bottom-0 left-0 right-0 h-px"
//         style={{
//           background:
//             "linear-gradient(to-right, transparent, rgba(253,185,19,0.3), transparent)",
//         }}
//       />

//       {/* Custom Styles for Swiper */}
//       <style>{`
//         .leadership-swiper .swiper-pagination-bullet-active {
//           background: linear-gradient(135deg, #FDB913, #FFD54F) !important;
//           width: 32px;
//           border-radius: 9999px;
//         }

//         .leadership-swiper .swiper-pagination-bullet {
//           background: #e5e7eb;
//           opacity: 1;
//         }

//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default LeadershipTeam;

import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import {
  FaArrowRight,
  FaLinkedinIn,
  FaTwitter,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// Leader Images
import img1 from "../../assets/leaders/NishantGautam.webp";
import img2 from "../../assets/leaders/BobMarchand.webp";
import img3 from "../../assets/leaders/AlanWu.webp";
import img4 from "../../assets/leaders/OliverBetz.webp";
import img5 from "../../assets/leaders/SilvioBessa.webp";
import img6 from "../../assets/leaders/TimothyWirtjes.webp";
import img7 from "../../assets/leaders/JasbirSingh.webp";
import img8 from "../../assets/leaders/RodrigoRecio.webp";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// ============================================================
// 🎨 BRAND COLORS
// ============================================================
const BRAND = {
  navy: {
    dark: "#12324f",
    mid: "#12324f",
    light: "#132D4B",
  },
  gold: {
    primary: "#FDB913",
    light: "#FFD54F",
    gradient: "linear-gradient(135deg, #FDB913 0%, #FFD54F 100%)",
  },
};

// const leaders = [
//   {
//     name: "Nishant Gautam",
//     role: "Founder & CEO",
//     image: img1,
//     quote: "Building the future of digital transformation",
//     social: { linkedin: "https://www.linkedin.com/in/nishantgautamsap/" },
//   },
//   {
//     name: "Bob Marchand",
//     role: "Chief Operating Officer",
//     image: img2,
//     quote: "Operational excellence drives our success",
//     social: { linkedin: "https://www.linkedin.com/in/bomarchand/" },
//   },
//   {
//     name: "Alan Wu",
//     role: "Chief Revenue Officer",
//     image: img3,
//     quote: "Revenue growth through innovation",
//     social: { linkedin: "https://www.linkedin.com/in/alan-wu-886190" },
//   },
//   {
//     name: "Oliver Betz",
//     role: "Board Advisor",
//     image: img4,
//     quote: "Strategic vision for sustainable growth",
//     social: { linkedin: "https://www.linkedin.com/in/oliver-betz-4443292/" },
//   },
//   {
//     name: "Silvio Bessa",
//     role: "Board Advisor",
//     image: img5,
//     quote: "Guiding companies toward excellence",
//     social: { linkedin: "https://www.linkedin.com/in/silviobessa/" },
//   },
//   {
//     name: "Timothy Wirtjes",
//     role: "Guidewire Practice Lead",
//     image: img6,
//     quote: "Leading insurance technology solutions",
//     social: { linkedin: "https://www.linkedin.com/in/timothy-wirtjes/" },
//   },
//   {
//     name: "Jasbir Singh",
//     role: "Director – AMS",
//     image: img7,
//     quote: "Delivering managed services excellence",
//     social: {
//       linkedin:
//         "https://www.linkedin.com/in/jasbir-singh-12b256b?originalSubdomain=ca",
//     },
//   },
//   {
//     name: "Rodrigo Recio",
//     role: "Director – Testing Services",
//     image: img8,
//     quote: "Quality assurance at its finest",
//     social: { linkedin: "https://www.linkedin.com/in/rodrigo-recio-b8003717/" },
//   },
// ];

const leaders = [
  {
    name: "Nishant Gautam",
    role: "CEO & Founder",
    image: img1,
    quote: "15+ years in SAP consulting and strategic leadership.",
    social: {
      linkedin: "https://www.linkedin.com/in/nishantgautamsap/",
    },
  },

  {
    name: "Bob Marchand",
    role: "COO",
    image: img2,
    quote: "20+ years managing SAP delivery and global operations.",
    social: {
      linkedin: "https://www.linkedin.com/in/bomarchand/",
    },
  },

  {
    name: "Alan Wu",
    role: "Chief Revenue Officer",
    image: img3,
    quote: "Expert in deep SAP and cybersecurity expertise.",
    social: {
      linkedin: "https://www.linkedin.com/in/alan-wu-886190",
    },
  },

  {
    name: "Oliver Betz",
    role: "Board Advisor",
    image: img4,
    quote: "Leads SAP AMS and Hybrid Cloud Services Delivery.",
    social: {
      linkedin: "https://www.linkedin.com/in/oliver-betz-4443292/",
    },
  },

  {
    name: "Silvio Bessa",
    role: "Board Advisor",
    image: img5,
    quote: "Deep global experience in enterprise technology and partnerships.",
    social: {
      linkedin: "https://www.linkedin.com/in/silviobessa/",
    },
  },

  {
    name: "Timothy Wirtjes",
    role: "Director – Guidewire Practice",
    image: img6,
    quote: "Bringing over 14+ years of Guidewire expertise.",
    social: {
      linkedin: "https://www.linkedin.com/in/timothy-wirtjes/",
    },
  },

  {
    name: "Jasbir Singh",
    role: "Director – AMS",
    image: img7,
    quote: "Leads SAP AMS and Hybrid Cloud Services Delivery.",
    social: {
      linkedin:
        "https://www.linkedin.com/in/jasbir-singh-12b256b?originalSubdomain=ca",
    },
  },

  {
    name: "Rodrigo Recio",
    role: "Director – Head of Testing Services",
    image: img8,
    quote: "Expert in SAP testing and automation leadership.",
    social: {
      linkedin: "https://www.linkedin.com/in/rodrigo-recio-b8003717/",
    },
  },
];
const LeadershipTeam = () => {
  const swiperRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const goNext = () => {
    swiperRef.current?.swiper.slideNext();
  };

  return (
    <section className="relative py-10 lg:py-16 bg-gradient-to-br from-white via-gray-50/50 to-white overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.04] -translate-x-1/2 -translate-y-1/2"
        style={{ background: BRAND.gold.primary }}
      />

      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-[0.03] translate-x-1/3 translate-y-1/3"
        style={{ background: BRAND.navy.dark }}
      />

      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${BRAND.navy.dark} 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 lg:mb-14"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
            <span className="bg-gradient-to-br from-[#12324f] via-[#12324f] to-[#132D4B] bg-clip-text text-transparent">
              Leadership
            </span>{" "}
            <span className="bg-gradient-to-r from-[#FDB913] via-[#FFD54F] to-[#FDB913] bg-clip-text text-transparent">
              Team
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Visionary leaders driving innovation and excellence across every
            dimension of our organization
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-20 flex justify-between items-center px-2 lg:px-4 pointer-events-none">
            <button
              onClick={goPrev}
              className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white shadow-xl hover:bg-[#12324f] hover:text-[#FFD54F] transition-all duration-300 flex items-center justify-center pointer-events-auto"
            >
              <FaChevronLeft className="text-lg" />
            </button>

            <button
              onClick={goNext}
              className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white shadow-xl hover:bg-[#12324f] hover:text-[#FFD54F] transition-all duration-300 flex items-center justify-center pointer-events-auto"
            >
              <FaChevronRight className="text-lg" />
            </button>
          </div>

          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Pagination]}
            slidesPerView={1.3}
            spaceBetween={24}
            loop={true}
            speed={800}
            grabCursor={true}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            //   pauseOnMouseEnter: true,
            // }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 28,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 32,
              },
            }}
            className="leadership-swiper !pb-10"
          >
            {leaders.map((leader, index) => (
              <SwiperSlide key={leader.name} className="!h-auto">
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="group relative h-full pb-2"
                >
                  <div className="relative bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(11,29,51,0.18)] transition-all duration-500 border border-gray-100 hover:border-[#FDB913]/30">
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#12324f]/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                      {/* Social Icons */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <a
                          href={leader.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#12324f] hover:bg-[#FDB913] transition-all duration-300"
                        >
                          <FaLinkedinIn className="text-sm" />
                        </a>

                        {/* <a
                          href={leader.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#12324f] hover:bg-[#FDB913] transition-all duration-300"
                        >
                          <FaTwitter className="text-sm" />
                        </a> */}
                      </div>

                      {/* Quote Icon */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#FDB913]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
                        <FaQuoteLeft className="text-[#12324f] text-sm" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 lg:p-6 relative">
                      <h3 className="text-lg lg:text-xl font-bold text-[#12324f] mb-1 truncate">
                        {leader.name}
                      </h3>

                      <p className="text-sm text-gray-500 mb-3 font-medium truncate">
                        {leader.role}
                      </p>

                      <div className="h-[1px] bg-gradient-to-r from-[#FDB913]/40 via-transparent to-transparent mb-3" />

                      <p className="text-xs text-gray-400 italic line-clamp-2 leading-relaxed">
                        "{leader.quote}"
                      </p>

                      {/* Active Dot */}
                      <div
                        className={`absolute bottom-4 right-4 w-2 h-2 rounded-full transition-all duration-300 ${
                          activeIndex === index
                            ? "bg-[#FDB913] scale-125 shadow-md shadow-yellow-400/50"
                            : "bg-gray-200"
                        }`}
                      />
                    </div>

                    {/* Top Border */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FDB913] via-[#FFD54F] to-[#FDB913] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link to="/about/leadership">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#12324f] to-[#12324f] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/30"
            >
              <span className="relative z-10">View Full Leadership Team</span>

              <FaArrowRight className="relative z-10 group-hover:translate-x-1 group-hover:text-[#FFD54F] transition-all duration-300" />
            </motion.button>
          </Link>

          <p className="mt-5 text-sm text-gray-500 tracking-wide">
            Discover the minds behind our success story
          </p>
        </motion.div>
      </div>

      {/* Bottom Line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(253,185,19,0.3), transparent)",
        }}
      />

      {/* Extra Styles */}
      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default LeadershipTeam;
