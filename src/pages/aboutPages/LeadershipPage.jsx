// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaLinkedinIn,
//   FaTwitter,
//   FaEnvelope,
//   FaQuoteLeft,
//   FaArrowRight,
//   FaCheckCircle,
//   FaAward,
//   FaLightbulb,
//   FaEye,
//   FaCogs,
//   FaHandshake,
//   FaUsers,
//   FaGraduationCap,
//   FaStar,
//   FaShieldAlt,
//   FaRocket,
//   FaIndustry,
//   FaCloud,
//   FaChartLine,
//   FaGlobeAmericas,
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

// // ==================== BRAND COLORS (NAVY + GOLD ONLY) ====================
// const BRAND = {
//   navy: {
//     dark: "#12324f",
//     mid: "#12324f",
//     light: "#143A63",
//     lighter: "#1A4570",
//   },
//   gold: {
//     primary: "#FDB913",
//     light: "#FFD54F",
//     gradient: "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
//   },
// };

// // ==================== ANIMATION CONFIG ====================
// const ANIMATION = {
//   stagger: 0.15,
//   duration: 0.6,
//   spring: { type: "spring", stiffness: 300, damping: 25 },
// };

// // ==================== LEADERSHIP DATA ====================
// const leadershipData = [
//   {
//     id: 1,
//     name: "Nishant Gautam",
//     role: "Founder & CEO",
//     image: img1,
//     initials: "NG",
//     color: "#FDB913",
//     quote: "Building the future of digital transformation",
//     bio: "Visionary leader driving enterprise innovation, SAP transformation, and global digital strategy.",
//     expertise: ["Digital Transformation", "Enterprise Strategy", "Leadership"],
//     experience: "20+ Years",
//     achievements: [
//       "Led large-scale digital transformation programs",
//       "Built global enterprise delivery models",
//       "Recognized industry leader",
//     ],
//     social: { linkedin: "#", twitter: "#" },
//     email: "nishant@innoviseit.com",
//   },
//   {
//     id: 2,
//     name: "Bob Marchand",
//     role: "Chief Operating Officer",
//     image: img2,
//     initials: "BM",
//     color: "#3B82F6",
//     quote: "Operational excellence drives our success",
//     bio: "Operations leader focused on scaling delivery, optimizing performance, and ensuring client success.",
//     expertise: ["Operations Strategy", "Program Management", "Execution"],
//     experience: "18+ Years",
//     achievements: [
//       "Improved operational efficiency across global teams",
//       "Managed multi-million delivery portfolios",
//     ],
//     social: { linkedin: "#", twitter: "#" },
//     email: "bob@innoviseit.com",
//   },
//   {
//     id: 3,
//     name: "Alan Wu",
//     role: "Chief Revenue Officer",
//     image: img3,
//     initials: "AW",
//     color: "#10B981",
//     quote: "Revenue growth through innovation",
//     bio: "Revenue strategist driving growth through customer-centric solutions and market expansion.",
//     expertise: ["Revenue Growth", "Sales Strategy", "Market Expansion"],
//     experience: "17+ Years",
//     achievements: [
//       "Scaled revenue across multiple regions",
//       "Built high-performing sales teams",
//     ],
//     social: { linkedin: "#", twitter: "#" },
//     email: "alan@innoviseit.com",
//   },
//   {
//     id: 4,
//     name: "Oliver Betz",
//     role: "Board Advisor",
//     image: img4,
//     initials: "OB",
//     color: "#8B5CF6",
//     quote: "Strategic vision for sustainable growth",
//     bio: "Advisor bringing strategic insight for long-term growth and enterprise scalability.",
//     expertise: ["Strategy", "Governance", "Advisory"],
//     experience: "20+ Years",
//     achievements: [
//       "Advised global enterprise organizations",
//       "Supported long-term strategic growth initiatives",
//     ],
//     social: { linkedin: "#", twitter: "#" },
//     email: "oliver@innoviseit.com",
//   },
//   {
//     id: 5,
//     name: "Silvio Bessa",
//     role: "Board Advisor",
//     image: img5,
//     initials: "SB",
//     color: "#EC4899",
//     quote: "Guiding companies toward excellence",
//     bio: "Business advisor focused on operational excellence and enterprise transformation.",
//     expertise: ["Business Strategy", "Transformation", "Advisory"],
//     experience: "19+ Years",
//     achievements: [
//       "Helped scale enterprise organizations globally",
//       "Improved operational efficiency across sectors",
//     ],
//     social: { linkedin: "#", twitter: "#" },
//     email: "silvio@innoviseit.com",
//   },
//   {
//     id: 6,
//     name: "Timothy Wirtjes",
//     role: "Guidewire Practice Lead",
//     image: img6,
//     initials: "TW",
//     color: "#F59E0B",
//     quote: "Leading insurance technology solutions",
//     bio: "Insurance technology expert specializing in Guidewire implementations and modernization.",
//     expertise: ["Guidewire", "Insurance Tech", "Platform Modernization"],
//     experience: "15+ Years",
//     achievements: [
//       "Led multiple Guidewire implementations",
//       "Improved insurance platform efficiency",
//     ],
//     social: { linkedin: "#", twitter: "#" },
//     email: "timothy@innoviseit.com",
//   },
//   {
//     id: 7,
//     name: "Jasbir Singh",
//     role: "Director – AMS",
//     image: img7,
//     initials: "JS",
//     color: "#22C55E",
//     quote: "Delivering managed services excellence",
//     bio: "AMS leader ensuring continuous support, optimization, and enterprise system performance.",
//     expertise: ["AMS", "Support Services", "Optimization"],
//     experience: "16+ Years",
//     achievements: [
//       "Delivered 24/7 enterprise support models",
//       "Improved SLA performance across clients",
//     ],
//     social: { linkedin: "#", twitter: "#" },
//     email: "jasbir@innoviseit.com",
//   },
//   {
//     id: 8,
//     name: "Rodrigo Recio",
//     role: "Director – Testing Services",
//     image: img8,
//     initials: "RR",
//     color: "#EF4444",
//     quote: "Quality assurance at its finest",
//     bio: "QA leader specializing in automation, testing strategy, and enterprise quality frameworks.",
//     expertise: ["QA Automation", "Testing Strategy", "Performance Testing"],
//     experience: "14+ Years",
//     achievements: [
//       "Built enterprise QA frameworks",
//       "Reduced defects and improved release quality",
//     ],
//     social: { linkedin: "#", twitter: "#" },
//     email: "rodrigo@innoviseit.com",
//   },
// ];

// // ==================== WHAT SETS US APART DATA ====================
// const differentiatorsData = [
//   {
//     icon: FaAward,
//     title: "Proven Expertise",
//     description:
//       "Decades of combined experience across industries like banking, manufacturing, and healthcare",
//   },
//   {
//     icon: FaEye,
//     title: "Strategic Vision",
//     description:
//       "Focused on long-term value creation and digital transformation initiatives",
//   },
//   {
//     icon: FaLightbulb,
//     title: "Innovation-Driven",
//     description:
//       "Embracing emerging technologies to solve real-world business problems",
//   },
//   {
//     icon: FaHandshake,
//     title: "Client-Centric Approach",
//     description:
//       "Committed to delivering excellence and building lasting partnerships",
//   },
// ];

// // ==================== COMPONENTS ====================

// // Leader Card Component (Clean, Minimal Design like TCS/Infosys)
// const LeaderCard = ({ leader, index }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-50px" }}
//       transition={{
//         delay: index * ANIMATION.stagger,
//         duration: ANIMATION.duration,
//         ...ANIMATION.spring,
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className="group relative"
//       style={{
//         transform: isHovered ? "translateY(-8px)" : "translateY(0)",
//       }}
//     >
//       <div
//         className="relative rounded-2xl overflow-hidden transition-all duration-500 h-full"
//         style={{
//           background: "white",
//           border: isHovered
//             ? `2px solid ${BRAND.gold.primary}40`
//             : "1px solid rgba(0,0,0,0.06)",
//           boxShadow: isHovered
//             ? `0 25px 60px ${BRAND.navy.dark}15`
//             : "0 4px 20px rgba(0,0,0,0.04)",
//         }}
//       >
//         {/* Top Accent Line */}
//         <motion.div
//           className="absolute top-0 left-0 right-0 h-1 origin-left z-20"
//           style={{ background: BRAND.gold.gradient }}
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: isHovered ? 1 : 0 }}
//           transition={{ duration: 0.4 }}
//         />

//         {/* Image / Avatar Section */}
//         <div className="relative pt-8 px-8 pb-6">
//           {/* Background Decoration */}
//           <div
//             className="absolute inset-0 opacity-[0.03]"
//             style={{
//               background: `linear-gradient(180deg, ${leader.color}10, transparent)`,
//             }}
//           />

//           {/* Profile Image Container */}
//           <div className="relative z-10 flex justify-center mb-6">
//             <motion.div
//               className="relative"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             >
//               {/* Outer Ring */}
//               <div
//                 className="w-32 h-32 rounded-full p-1 transition-all duration-500"
//                 style={{
//                   background: isHovered
//                     ? BRAND.gold.gradient
//                     : `${leader.color}20`,
//                 }}
//               >
//                 {/* Inner Circle */}
//                 <div
//                   className="w-full h-full rounded-full overflow-hidden flex items-center justify-center"
//                   style={{
//                     background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
//                     border: `3px solid white`,
//                   }}
//                 >
//                   {/* If no image, show initials */}
//                   {!leader.image ? (
//                     <span
//                       className="text-3xl font-black"
//                       style={{
//                         backgroundImage: BRAND.gold.gradient,
//                         WebkitBackgroundClip: "text",
//                         WebkitTextFillColor: "transparent",
//                         backgroundClip: "text",
//                       }}
//                     >
//                       {leader.initials}
//                     </span>
//                   ) : (
//                     <img
//                       src={leader.image}
//                       alt={leader.name}
//                       className="w-full h-full object-cover"
//                     />
//                   )}
//                 </div>
//               </div>

//               {/* Online Status Dot */}
//               <div
//                 className="absolute bottom-2 right-2 w-5 h-5 rounded-full border-2 border-white"
//                 style={{ background: "#10B981" }}
//               />
//             </motion.div>
//           </div>

//           {/* Name & Role */}
//           <div className="text-center mb-4">
//             <h3
//               className="text-xl font-bold mb-1 transition-colors duration-300"
//               style={{ color: BRAND.navy.dark }}
//             >
//               {leader.name}
//             </h3>

//             <p
//               className="text-sm font-semibold uppercase tracking-wider"
//               style={{ color: BRAND.gold.primary }}
//             >
//               {leader.role}
//             </p>
//           </div>

//           {/* Experience Badge */}
//           <div className="flex justify-center mb-4">
//             <span
//               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold"
//               style={{
//                 background: `${BRAND.navy.dark}05`,
//                 color: BRAND.navy.dark,
//                 border: `1px solid ${BRAND.navy.dark}10`,
//               }}
//             >
//               <FaGraduationCap className="text-xs" />
//               {leader.experience} Experience
//             </span>
//           </div>
//         </div>

//         {/* Bio Section */}
//         <div
//           className="px-8 pb-6"
//           style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
//         >
//           <p
//             className="text-sm leading-relaxed text-center mb-5"
//             style={{ color: "#64748B" }}
//           >
//             {leader.bio}
//           </p>

//           {/* Expertise Tags */}
//           <div className="flex flex-wrap justify-center gap-2 mb-5">
//             {leader.expertise.map((skill, idx) => (
//               <span
//                 key={idx}
//                 className="px-3 py-1 rounded-full text-xs font-medium"
//                 style={{
//                   background: `${leader.color}10`,
//                   color: leader.color,
//                   border: `1px solid ${leader.color}20`,
//                 }}
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>

//           {/* Social Links - Show on Hover */}
//           <AnimatePresence>
//             {isHovered && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="overflow-hidden"
//               >
//                 <div
//                   className="flex justify-center gap-3 pt-4"
//                   style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
//                 >
//                   {/* LinkedIn */}
//                   <a
//                     href={leader.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
//                     style={{
//                       background: "#0077B5",
//                       color: "white",
//                     }}
//                     aria-label={`${leader.name}'s LinkedIn`}
//                   >
//                     <FaLinkedinIn className="text-sm" />
//                   </a>

//                   {/* Twitter */}
//                   <a
//                     href={leader.twitter}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
//                     style={{
//                       background: "#1DA1F2",
//                       color: "white",
//                     }}
//                     aria-label={`${leader.name}'s Twitter`}
//                   >
//                     <FaTwitter className="text-sm" />
//                   </a>

//                   {/* Email */}
//                   <a
//                     href={`mailto:${leader.email}`}
//                     className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
//                     style={{
//                       background: BRAND.navy.dark,
//                       color: "white",
//                     }}
//                     aria-label={`Email ${leader.name}`}
//                   >
//                     <FaEnvelope className="text-sm" />
//                   </a>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // Differentiator Card Component
// const DifferentiatorCard = ({ item, index }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{
//       delay: index * 0.1,
//       duration: ANIMATION.duration,
//       ...ANIMATION.spring,
//     }}
//     whileHover={{ y: -5 }}
//     className="group"
//   >
//     <div
//       className="p-6 lg:p-8 rounded-2xl h-full transition-all duration-300 hover:shadow-lg"
//       style={{
//         background: index % 2 === 0 ? "white" : `${BRAND.navy.dark}`,
//         border: `1px solid ${index % 2 === 0 ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.08)"}`,
//       }}
//     >
//       {/* Icon */}
//       <motion.div
//         className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
//         style={{
//           background:
//             index % 2 === 0
//               ? `${BRAND.gold.primary}10`
//               : `${BRAND.gold.primary}15`,
//           border: `2px solid ${index % 2 === 0 ? `${BRAND.gold.primary}25` : `${BRAND.gold.primary}30`}`,
//         }}
//         whileHover={{ rotate: [0, -10, 10, 0] }}
//       >
//         <item.icon className="text-xl" style={{ color: BRAND.gold.primary }} />
//       </motion.div>

//       {/* Title */}
//       <h3
//         className="text-lg font-bold mb-3"
//         style={{ color: index % 2 === 0 ? BRAND.navy.dark : "white" }}
//       >
//         {item.title}
//       </h3>

//       {/* Description */}
//       <p
//         className="text-sm leading-relaxed"
//         style={{ color: index % 2 === 0 ? "#64748B" : "rgba(255,255,255,0.7)" }}
//       >
//         {item.description}
//       </p>
//     </div>
//   </motion.div>
// );

// // ==================== SECTIONS ====================

// // Hero Section
// const HeroSection = () => (
//   <section
//     className="relative py-8 lg:py-12 h-[70vh] overflow-hidden bg-cover bg-center"
//     style={{
//       backgroundImage: `
//       linear-gradient(135deg, rgba(10,22,40,0.85), rgba(15,33,64,0.85)),
//       url('https://images.unsplash.com/photo-1552664730-d307ca884978')
//     `,
//     }}
//   >
//     {/* Background Elements */}
//     <div className="absolute inset-0" aria-hidden="true">
//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//           backgroundSize: "40px 40px",
//         }}
//       />

//       {/* Floating Orbs */}
//       <motion.div
//         animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.08]"
//         style={{ background: BRAND.gold.primary }}
//       />

//       <motion.div
//         animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 3,
//         }}
//         className="absolute bottom-20 left-20 w-[400px] h-[400px] rounded-full blur-3xl opacity-[0.06]"
//         style={{ background: BRAND.navy.lighter }}
//       />

//       {/* Geometric Shapes */}
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//         className="absolute top-1/4 left-10 w-64 h-64 border border-white/5 rounded-full"
//       />
//       <motion.div
//         animate={{ rotate: -360 }}
//         transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
//         className="absolute bottom-1/4 right-10 w-96 h-96 border border-white/5 rounded-full"
//       />
//     </div>

//     <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
//       <div className="max-w-4xl mx-auto text-center">
//         {/* Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="inline-flex items-center gap-3 mb-2"
//         >
//           <span
//             className="w-12 h-[2px]"
//             style={{ background: BRAND.gold.gradient }}
//           />
//           <span
//             className="text-sm font-bold uppercase tracking-[0.25em]"
//             style={{ color: BRAND.gold.primary }}
//           >
//             👥 Leadership Team
//           </span>
//           <span
//             className="w-12 h-[2px]"
//             style={{ background: BRAND.gold.gradient }}
//           />
//         </motion.div>

//         {/* Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-6"
//         >
//           Driving{" "}
//           <span
//             style={{
//               backgroundImage: BRAND.gold.gradient,
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             Innovation
//           </span>
//           . Delivering{" "}
//           <span
//             style={{
//               backgroundImage: BRAND.gold.gradient,
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             Excellence
//           </span>
//           .
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12"
//         >
//           Experienced leaders shaping the future of enterprise technology
//           through strategic vision, deep expertise, and a passion for
//           innovation.
//         </motion.p>
//       </div>
//     </div>
//   </section>
// );

// // What Sets Us Apart Section
// const DifferentiatorsSection = () => (
//   <section className="py-6 lg:py-12 bg-white relative overflow-hidden">
//     <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
//       {/* Section Header */}
//       <motion.header
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center max-w-3xl mx-auto mb-16"
//       >
//         <span
//           className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
//           style={{
//             background: `${BRAND.navy.mid}08`,
//             color: BRAND.navy.dark,
//             border: `1px solid ${BRAND.navy.mid}15`,
//           }}
//         >
//            What Sets Our Leaders Apart
//         </span>

//         <h2
//           className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
//           style={{ color: BRAND.navy.dark }}
//         >
//           The{" "}
//           <span style={{ color: BRAND.gold.primary }}>Innovise Difference</span>
//         </h2>

//         <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
//           Our leadership team brings a unique combination of expertise, vision,
//           and commitment that sets us apart.
//         </p>
//       </motion.header>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {differentiatorsData.map((item, index) => (
//           <DifferentiatorCard key={index} item={item} index={index} />
//         ))}
//       </div>
//     </div>
//   </section>
// );

// // Leadership Philosophy Section
// const PhilosophySection = () => (
//   <section
//     className="py-6 lg:py-12 relative overflow-hidden"
//     style={{
//       background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
//     }}
//   >
//     {/* Background Pattern */}
//     <div
//       className="absolute inset-0 opacity-[0.03]"
//       style={{
//         backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//         backgroundSize: "40px 40px",
//       }}
//     />

//     {/* Decorative Elements */}
//     <motion.div
//       animate={{ y: [0, -20, 0] }}
//       transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.06]"
//       style={{ background: BRAND.gold.primary }}
//     />

//     <div className="max-w-5xl mx-auto px-4 lg:px-8 relative z-10">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         className="text-center"
//       >
//         {/* Quote Icon */}
//         <motion.div
//           initial={{ scale: 0 }}
//           whileInView={{ scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//           className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8"
//           style={{
//             background: `${BRAND.gold.primary}15`,
//             border: `2px solid ${BRAND.gold.primary}30`,
//           }}
//         >
//           <FaQuoteLeft
//             className="text-3xl"
//             style={{ color: BRAND.gold.primary }}
//           />
//         </motion.div>

//         {/* Label */}
//         <span
//           className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
//           style={{
//             background: "rgba(255,255,255,0.08)",
//             color: BRAND.gold.primary,
//             border: "1px solid rgba(255,255,255,0.15)",
//           }}
//         >
//            Leadership Philosophy
//         </span>

//         {/* Quote Text */}
//         <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-8 max-w-4xl mx-auto">
//           Our leaders believe in a{" "}
//           <span
//             style={{
//               backgroundImage: BRAND.gold.gradient,
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             collaborative
//           </span>{" "}
//           and{" "}
//           <span
//             style={{
//               backgroundImage: BRAND.gold.gradient,
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             forward-thinking approach
//           </span>
//           —empowering teams, fostering innovation, and ensuring every solution
//           is aligned with client success.
//         </blockquote>

//         {/* Key Principles */}
//         <div className="flex flex-wrap justify-center gap-4 mt-12">
//           {[
//             "Empowerment",
//             "Innovation",
//             "Collaboration",
//             "Excellence",
//             "Integrity",
//           ].map((principle, idx) => (
//             <motion.span
//               key={idx}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.4 + idx * 0.1 }}
//               className="px-6 py-3 rounded-xl font-semibold text-sm"
//               style={{
//                 background: "rgba(255,255,255,0.05)",
//                 color: "white",
//                 border: "1px solid rgba(255,255,255,0.1)",
//               }}
//             >
//               {principle}
//             </motion.span>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   </section>
// );

// // Team Grid Section
// const TeamSection = () => (
//   <section className="py-6 lg:py-12 bg-gray-50 relative overflow-hidden">
//     {/* Background Decoration */}
//     <div
//       className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-3xl opacity-[0.03] -translate-x-1/2 -translate-y-1/2"
//       style={{ background: BRAND.navy.lighter }}
//     />

//     <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
//       {/* Section Header */}
//       <motion.header
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
//       >
//         <span
//           className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
//           style={{
//             background: `${BRAND.navy.mid}08`,
//             color: BRAND.navy.dark,
//             border: `1px solid ${BRAND.navy.mid}15`,
//           }}
//         >
//           👤 Meet Our Leaders
//         </span>

//         <h2
//           className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
//           style={{ color: BRAND.navy.dark }}
//         >
//           The Minds Behind{" "}
//           <span style={{ color: BRAND.gold.primary }}>Innovise IT</span>
//         </h2>

//         <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
//           Meet the experienced professionals who drive our vision and deliver
//           exceptional results for clients worldwide.
//         </p>
//       </motion.header>

//       {/* Leaders Grid - 3 columns on large screens */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {leadershipData.map((leader, index) => (
//           <LeaderCard key={leader.id} leader={leader} index={index} />
//         ))}
//       </div>
//     </div>
//   </section>
// );

// // Expanded Leader Detail Modal (Optional Enhancement)
// const LeaderDetailModal = ({ leader, isOpen, onClose }) => {
//   if (!isOpen || !leader) return null;

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-50 flex items-center justify-center p-4"
//       onClick={onClose}
//       style={{ background: "rgba(11,29,51,0.9)", backdropFilter: "blur(8px)" }}
//     >
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0, y: 20 }}
//         animate={{ scale: 1, opacity: 1, y: 0 }}
//         exit={{ scale: 0.9, opacity: 0, y: 20 }}
//         transition={{ type: "spring", stiffness: 300, damping: 25 }}
//         className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Header */}
//         <div
//           className="p-8 pb-0"
//           style={{
//             background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
//           }}
//         >
//           <div className="flex items-start justify-between mb-6">
//             <div className="flex items-center gap-6">
//               {/* Avatar */}
//               <div
//                 className="w-24 h-24 rounded-full p-1"
//                 style={{ background: BRAND.gold.gradient }}
//               >
//                 <div
//                   className="w-full h-full rounded-full flex items-center justify-center"
//                   style={{
//                     background: BRAND.navy.dark,
//                     border: "3px solid white",
//                   }}
//                 >
//                   <span
//                     className="text-2xl font-black"
//                     style={{
//                       backgroundImage: BRAND.gold.gradient,
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                     }}
//                   >
//                     {leader.initials}
//                   </span>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-2xl font-bold text-white">{leader.name}</h3>
//                 <p
//                   className="text-sm font-semibold"
//                   style={{ color: BRAND.gold.primary }}
//                 >
//                   {leader.role}
//                 </p>
//                 <span className="inline-flex items-center gap-1 mt-2 text-xs text-white/60">
//                   <FaGraduationCap /> {leader.experience}
//                 </span>
//               </div>
//             </div>

//             {/* Close Button */}
//             <button
//               onClick={onClose}
//               className="w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
//             >
//               ✕
//             </button>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-8">
//           {/* Bio */}
//           <p
//             className="text-base leading-relaxed mb-6"
//             style={{ color: "#475569" }}
//           >
//             {leader.bio}
//           </p>

//           {/* Expertise */}
//           <div className="mb-6">
//             <h4
//               className="text-sm font-bold uppercase tracking-wider mb-3"
//               style={{ color: BRAND.navy.dark }}
//             >
//               Areas of Expertise
//             </h4>
//             <div className="flex flex-wrap gap-2">
//               {leader.expertise.map((skill, idx) => (
//                 <span
//                   key={idx}
//                   className="px-4 py-2 rounded-lg text-sm font-medium"
//                   style={{
//                     background: `${leader.color}10`,
//                     color: leader.color,
//                     border: `1px solid ${leader.color}20`,
//                   }}
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Achievements */}
//           <div className="mb-8">
//             <h4
//               className="text-sm font-bold uppercase tracking-wider mb-3"
//               style={{ color: BRAND.navy.dark }}
//             >
//               Key Achievements
//             </h4>
//             <ul className="space-y-3">
//               {leader.achievements.map((achievement, idx) => (
//                 <li key={idx} className="flex items-start gap-3">
//                   <FaCheckCircle
//                     className="mt-1 flex-shrink-0"
//                     style={{ color: BRAND.gold.primary }}
//                   />
//                   <span className="text-sm" style={{ color: "#64748B" }}>
//                     {achievement}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Actions */}
//           <div
//             className="flex gap-4 pt-6"
//             style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
//           >
//             <a
//               href={leader.linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex-1 py-3 rounded-xl font-semibold text-sm text-center transition-all hover:-translate-y-1"
//               style={{
//                 background: "#0077B5",
//                 color: "white",
//               }}
//             >
//               <FaLinkedinIn className="mr-2" />
//               Connect on LinkedIn
//             </a>
//             <a
//               href={`mailto:${leader.email}`}
//               className="flex-1 py-3 rounded-xl font-semibold text-sm text-center transition-all hover:-translate-y-1"
//               style={{
//                 background: BRAND.navy.dark,
//                 color: "white",
//               }}
//             >
//               <FaEnvelope className="mr-2" />
//               Send Email
//             </a>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// // Closing Section
// const ClosingSection = () => (
//   <section
//     className="relative py-24 lg:py-32 overflow-hidden"
//     style={{
//       background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
//     }}
//   >
//     {/* Background Pattern */}
//     <div
//       className="absolute inset-0 opacity-[0.03]"
//       style={{
//         backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//         backgroundSize: "40px 40px",
//       }}
//     />

//     {/* Decorative Elements */}
//     <motion.div
//       animate={{ y: [0, -20, 0] }}
//       transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.06]"
//       style={{ background: BRAND.gold.primary }}
//     />

//     <div className="max-w-4xl mx-auto px-4 lg:px-8 relative z-10 text-center">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Quote Icon */}
//         <motion.div
//           initial={{ scale: 0 }}
//           whileInView={{ scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//           className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8"
//           style={{
//             background: `${BRAND.gold.primary}15`,
//             border: `2px solid ${BRAND.gold.primary}30`,
//           }}
//         >
//           <FaRocket
//             className="text-3xl"
//             style={{ color: BRAND.gold.primary }}
//           />
//         </motion.div>

//         {/* Closing Message */}
//         <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-8">
//           Ready to Work With{" "}
//           <span
//             style={{
//               backgroundImage: BRAND.gold.gradient,
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             Exceptional Leaders
//           </span>
//           ?
//         </h2>

//         <p className="text-lg text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto">
//           Our leadership team is ready to help you navigate your digital
//           transformation journey. Let's start a conversation about how we can
//           drive success together.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//           <a
//             href="/contact"
//             className="group relative px-10 py-5 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2"
//             style={{
//               background: BRAND.gold.gradient,
//               color: BRAND.navy.dark,
//               boxShadow: `0 8px 30px ${BRAND.gold.primary}35`,
//             }}
//           >
//             <span className="relative z-10 flex items-center gap-3">
//               Schedule a Meeting
//               <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
//             </span>

//             <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
//               <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
//             </div>
//           </a>

//           <a
//             href="/about"
//             className="px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/5 focus:outline-none focus:ring-2"
//             style={{
//               border: `1px solid rgba(255,255,255,0.2)`,
//               color: "white",
//             }}
//           >
//             Learn More About Us →
//           </a>
//         </div>
//       </motion.div>
//     </div>
//   </section>
// );

// // Main Leadership Page Component
// const LeadershipPage = () => {
//   const [selectedLeader, setSelectedLeader] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleLeaderClick = (leader) => {
//     setSelectedLeader(leader);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setTimeout(() => setSelectedLeader(null), 300);
//   };

//   return (
//     <main role="main">
//       <HeroSection />
//       <TeamSection />

//       <PhilosophySection />
//       <DifferentiatorsSection />
//       <ClosingSection />

//       {/* Optional Modal for detailed view */}
//       <LeaderDetailModal
//         leader={selectedLeader}
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//       />
//     </main>
//   );
// };

// export default LeadershipPage;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaQuoteLeft,
  FaArrowRight,
  FaCheckCircle,
  FaAward,
  FaLightbulb,
  FaEye,
  FaHandshake,
  FaGraduationCap,
  FaRocket,
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

import leaderImg from "../../assets/banners/le1.png";

import AboutHeroSection from "../../components/sections/AboutHeroSection";

// ==================== BRAND COLORS (NAVY + GOLD ONLY) ====================
const BRAND = {
  navy: {
    dark: "#12324f",
    mid: "#12324f",
    light: "#143A63",
    lighter: "#1A4570",
  },
  gold: {
    primary: "#FDB913",
    light: "#FFD54F",
    gradient: "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
  },
};

// ==================== ANIMATION CONFIG ====================
const ANIMATION = {
  stagger: 0.15,
  duration: 0.6,
  spring: { type: "spring", stiffness: 300, damping: 25 },
};

// ==================== LEADERSHIP DATA ====================
// const leadershipData = [
//   {
//     id: 1,
//     name: "Nishant Gautam",
//     role: "Founder & CEO",
//     image: img1,
//     initials: "NG",
//     color: "#FDB913",
//     quote: "Building the future of digital transformation",
//     bio: "Visionary leader driving enterprise innovation, SAP transformation, and global digital strategy.",
//     expertise: ["Digital Transformation", "Enterprise Strategy", "Leadership"],
//     experience: "20+ Years",
//     achievements: [
//       "Led large-scale digital transformation programs",
//       "Built global enterprise delivery models",
//       "Recognized industry leader",
//     ],
//     social: { linkedin: "https://www.linkedin.com/in/nishantgautamsap/" },
//     email: "nishant@innoviseit.com",
//   },
//   {
//     id: 2,
//     name: "Bob Marchand",
//     role: "Chief Operating Officer",
//     image: img2,
//     initials: "BM",
//     color: "#3B82F6",
//     quote: "Operational excellence drives our success",
//     bio: "Operations leader focused on scaling delivery, optimizing performance, and ensuring client success.",
//     expertise: ["Operations Strategy", "Program Management", "Execution"],
//     experience: "18+ Years",
//     achievements: [
//       "Improved operational efficiency across global teams",
//       "Managed multi-million delivery portfolios",
//     ],
//     social: { linkedin: "https://www.linkedin.com/in/bomarchand/" },
//     email: "bob@innoviseit.com",
//   },
//   {
//     id: 3,
//     name: "Alan Wu",
//     role: "Chief Revenue Officer",
//     image: img3,
//     initials: "AW",
//     color: "#10B981",
//     quote: "Revenue growth through innovation",
//     bio: "Revenue strategist driving growth through customer-centric solutions and market expansion.",
//     expertise: ["Revenue Growth", "Sales Strategy", "Market Expansion"],
//     experience: "17+ Years",
//     achievements: [
//       "Scaled revenue across multiple regions",
//       "Built high-performing sales teams",
//     ],
//     social: { linkedin: "https://www.linkedin.com/in/alan-wu-886190" },
//     email: "alan@innoviseit.com",
//   },
//   {
//     id: 4,
//     name: "Oliver Betz",
//     role: "Board Advisor",
//     image: img4,
//     initials: "OB",
//     color: "#8B5CF6",
//     quote: "Strategic vision for sustainable growth",
//     bio: "Advisor bringing strategic insight for long-term growth and enterprise scalability.",
//     expertise: ["Strategy", "Governance", "Advisory"],
//     experience: "20+ Years",
//     achievements: [
//       "Advised global enterprise organizations",
//       "Supported long-term strategic growth initiatives",
//     ],
//     social: { linkedin: "https://www.linkedin.com/in/oliver-betz-4443292/" },
//     email: "oliver@innoviseit.com",
//   },
//   {
//     id: 5,
//     name: "Silvio Bessa",
//     role: "Board Advisor",
//     image: img5,
//     initials: "SB",
//     color: "#EC4899",
//     quote: "Guiding companies toward excellence",
//     bio: "Business advisor focused on operational excellence and enterprise transformation.",
//     expertise: ["Business Strategy", "Transformation", "Advisory"],
//     experience: "19+ Years",
//     achievements: [
//       "Helped scale enterprise organizations globally",
//       "Improved operational efficiency across sectors",
//     ],
//     social: { linkedin: "https://www.linkedin.com/in/silviobessa/" },
//     email: "silvio@innoviseit.com",
//   },
//   {
//     id: 6,
//     name: "Timothy Wirtjes",
//     role: "Guidewire Practice Lead",
//     image: img6,
//     initials: "TW",
//     color: "#F59E0B",
//     quote: "Leading insurance technology solutions",
//     bio: "Insurance technology expert specializing in Guidewire implementations and modernization.",
//     expertise: ["Guidewire", "Insurance Tech", "Platform Modernization"],
//     experience: "15+ Years",
//     achievements: [
//       "Led multiple Guidewire implementations",
//       "Improved insurance platform efficiency",
//     ],
//     social: { linkedin: "https://www.linkedin.com/in/timothy-wirtjes/" },
//     email: "timothy@innoviseit.com",
//   },
//   {
//     id: 7,
//     name: "Jasbir Singh",
//     role: "Director – AMS",
//     image: img7,
//     initials: "JS",
//     color: "#22C55E",
//     quote: "Delivering managed services excellence",
//     bio: "AMS leader ensuring continuous support, optimization, and enterprise system performance.",
//     expertise: ["AMS", "Support Services", "Optimization"],
//     experience: "16+ Years",
//     achievements: [
//       "Delivered 24/7 enterprise support models",
//       "Improved SLA performance across clients",
//     ],
//     social: {
//       linkedin:
//         "https://www.linkedin.com/in/jasbir-singh-12b256b?originalSubdomain=ca",
//     },
//     email: "jasbir@innoviseit.com",
//   },
//   {
//     id: 8,
//     name: "Rodrigo Recio",
//     role: "Director – Testing Services",
//     image: img8,
//     initials: "RR",
//     color: "#EF4444",
//     quote: "Quality assurance at its finest",
//     bio: "QA leader specializing in automation, testing strategy, and enterprise quality frameworks.",
//     expertise: ["QA Automation", "Testing Strategy", "Performance Testing"],
//     experience: "14+ Years",
//     achievements: [
//       "Built enterprise QA frameworks",
//       "Reduced defects and improved release quality",
//     ],
//     social: {
//       linkedin: "https://www.linkedin.com/in/rodrigo-recio-b8003717/",
//       twitter: "#",
//     },
//     email: "rodrigo@innoviseit.com",
//   },
// ];
const leadershipData = [
  {
    id: 1,
    name: "Nishant Gautam",
    role: "CEO & Founder",
    image: img1,
    initials: "NG",
    color: "#FDB913",
    quote: "Driving enterprise transformation through innovation.",
    bio: "SAP consulting leader with over 15 years of experience delivering enterprise transformation initiatives and strategic business solutions.",
    expertise: [
      "SAP Consulting",
      "Digital Transformation",
      "Strategic Leadership",
    ],
    experience: "15+ Years",
    achievements: [
      "Led enterprise SAP transformation programs",
      "Built high-performing global consulting teams",
      "Delivered strategic digital transformation initiatives",
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/nishantgautamsap/",
    },
    email: "[nishant@innoviseit.com](mailto:nishant@innoviseit.com)",
  },

  {
    id: 2,
    name: "Bob Marchand",
    role: "Chief Operating Officer",
    image: img2,
    initials: "BM",
    color: "#3B82F6",
    quote: "Operational excellence powers sustainable growth.",
    bio: "Operations executive with more than 20 years of experience managing SAP delivery programs and global enterprise operations.",
    expertise: ["Operations Management", "SAP Delivery", "Program Leadership"],
    experience: "20+ Years",
    achievements: [
      "Managed global SAP delivery organizations",
      "Improved operational performance across regions",
      "Led multi-million-dollar transformation initiatives",
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/bomarchand/",
    },
    email: "[bob@innoviseit.com](mailto:bob@innoviseit.com)",
  },

  {
    id: 3,
    name: "Alan Wu",
    role: "Chief Revenue Officer",
    image: img3,
    initials: "AW",
    color: "#10B981",
    quote: "Growth is driven by innovation and customer success.",
    bio: "Revenue leader with deep expertise in SAP solutions, cybersecurity services, and enterprise business development.",
    expertise: ["Revenue Growth", "Cybersecurity", "Enterprise Sales"],
    experience: "18+ Years",
    achievements: [
      "Expanded enterprise revenue channels globally",
      "Built strategic customer partnerships",
      "Led high-growth sales organizations",
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/alan-wu-886190",
    },
    email: "[alan@innoviseit.com](mailto:alan@innoviseit.com)",
  },

  {
    id: 4,
    name: "Oliver Betz",
    role: "Board Advisor",
    image: img4,
    initials: "OB",
    color: "#8B5CF6",
    quote: "Strategic leadership creates long-term value.",
    bio: "Board advisor focused on SAP AMS, Hybrid Cloud Services, and enterprise delivery excellence.",
    expertise: ["SAP AMS", "Hybrid Cloud", "Executive Advisory"],
    experience: "20+ Years",
    achievements: [
      "Advised global enterprise organizations",
      "Supported cloud transformation initiatives",
      "Enabled scalable service delivery models",
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/oliver-betz-4443292/",
    },
    email: "[oliver@innoviseit.com](mailto:oliver@innoviseit.com)",
  },

  {
    id: 5,
    name: "Silvio Bessa",
    role: "Board Advisor",
    image: img5,
    initials: "SB",
    color: "#EC4899",
    quote: "Partnerships and innovation drive business success.",
    bio: "Technology advisor bringing extensive global experience in enterprise technology, partnerships, and organizational growth.",
    expertise: ["Enterprise Technology", "Partnerships", "Business Strategy"],
    experience: "20+ Years",
    achievements: [
      "Built strategic technology partnerships",
      "Supported global business expansion",
      "Advised enterprise transformation programs",
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/silviobessa/",
    },
    email: "[silvio@innoviseit.com](mailto:silvio@innoviseit.com)",
  },

  {
    id: 6,
    name: "Timothy Wirtjes",
    role: "Director – Guidewire Practice",
    image: img6,
    initials: "TW",
    color: "#F59E0B",
    quote: "Modernizing insurance platforms through innovation.",
    bio: "Guidewire specialist with 14+ years of experience delivering insurance technology solutions and modernization programs.",
    expertise: ["Guidewire", "Insurance Technology", "Platform Modernization"],
    experience: "14+ Years",
    achievements: [
      "Led successful Guidewire implementations",
      "Modernized enterprise insurance platforms",
      "Improved operational efficiency for insurers",
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/timothy-wirtjes/",
    },
    email: "[timothy@innoviseit.com](mailto:timothy@innoviseit.com)",
  },

  {
    id: 7,
    name: "Jasbir Singh",
    role: "Director – AMS",
    image: img7,
    initials: "JS",
    color: "#22C55E",
    quote: "Delivering reliable managed services at scale.",
    bio: "AMS leader responsible for SAP AMS and Hybrid Cloud Services delivery, ensuring operational excellence and customer success.",
    expertise: ["SAP AMS", "Cloud Services", "Service Delivery"],
    experience: "16+ Years",
    achievements: [
      "Established enterprise AMS delivery models",
      "Improved SLA performance across clients",
      "Led cloud support transformation programs",
    ],
    social: {
      linkedin:
        "https://www.linkedin.com/in/jasbir-singh-12b256b?originalSubdomain=ca",
    },
    email: "[jasbir@innoviseit.com](mailto:jasbir@innoviseit.com)",
  },

  {
    id: 8,
    name: "Rodrigo Recio",
    role: "Director – Head of Testing Services",
    image: img8,
    initials: "RR",
    color: "#EF4444",
    quote: "Quality engineering ensures business confidence.",
    bio: "Testing and quality assurance leader with expertise in SAP testing, automation frameworks, and enterprise quality management.",
    expertise: ["SAP Testing", "Automation", "Quality Engineering"],
    experience: "15+ Years",
    achievements: [
      "Built enterprise QA and automation frameworks",
      "Reduced release risks through quality governance",
      "Led large-scale testing transformation initiatives",
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/rodrigo-recio-b8003717/",
    },
    email: "[rodrigo@innoviseit.com](mailto:rodrigo@innoviseit.com)",
  },
];

// ==================== WHAT SETS US APART DATA ====================
const differentiatorsData = [
  {
    icon: FaAward,
    title: "Proven Expertise",
    description:
      "Decades of combined experience across industries like banking, manufacturing, and healthcare",
  },
  {
    icon: FaEye,
    title: "Strategic Vision",
    description:
      "Focused on long-term value creation and digital transformation initiatives",
  },
  {
    icon: FaLightbulb,
    title: "Innovation-Driven",
    description:
      "Embracing emerging technologies to solve real-world business problems",
  },
  {
    icon: FaHandshake,
    title: "Client-Centric Approach",
    description:
      "Committed to delivering excellence and building lasting partnerships",
  },
];

// ==================== COMPONENTS ====================

// 🎴 UPDATED Leader Card Component - FULL PHOTO DISPLAY
const LeaderCard = ({ leader, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * ANIMATION.stagger,
        duration: ANIMATION.duration,
        ...ANIMATION.spring,
      }}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div
        className="relative rounded-2xl overflow-hidden transition-all duration-700 ease-out h-full bg-white"
        style={{
          border: isHovered
            ? `2px solid ${BRAND.gold.primary}`
            : "1px solid rgba(11,29,51,0.08)",
          boxShadow: isHovered
            ? `0 30px 60px ${BRAND.navy.dark}15, 0 0 40px rgba(253,185,19,0.08)`
            : "0 10px 35px rgba(11,29,51,0.08)",
          transform: isHovered ? "translateY(-12px)" : "translateY(0)",
        }}
      >
        {/* Top Accent Line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1.5 origin-left z-20"
          style={{ background: BRAND.gold.gradient }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* ================================= */}
        {/* IMAGE SECTION */}
        {/* ================================= */}
        <div className="relative h-[400px] md:h-[420px] lg:h-[420px] overflow-hidden">
          <img
            src={leader.image}
            alt={`${leader.name} - ${leader.role}`}
            className={`w-full h-full object-fit object-top transition-all duration-700 ${
              isHovered ? "scale-105" : "scale-100"
            }`}
            loading="lazy"
          />

          {/* Soft Gradient */}
          <div
            className="absolute inset-x-0 bottom-0 h-28"
            style={{
              background:
                "linear-gradient(to top, rgba(18,50,79,0.45), transparent)",
            }}
          />

          {/* Experience Badge */}
          <div className="absolute top-4 left-1 z-20">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold backdrop-blur-md"
              style={{
                background: "rgba(18,50,79,0.85)",
                color: "white",
              }}
            >
              <FaGraduationCap className="text-[#FFD54F]" />
              {leader.experience}
            </span>
          </div>

          {/* Quote Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.5,
            }}
            transition={{ duration: 0.3 }}
            className="absolute top-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-md"
            style={{
              background: `${BRAND.gold.primary}ee`,
              boxShadow: "0 8px 24px rgba(253,185,19,0.35)",
            }}
          >
            <FaQuoteLeft className="text-[#12324f] text-lg" />
          </motion.div>
        </div>

        {/* ================================= */}
        {/* CONTENT SECTION */}
        {/* ================================= */}
        <div className="p-5 lg:p-6 flex flex-col h-full">
          {/* Name */}
          <h3
            className="text-xl lg:text-2xl font-bold mb-2"
            style={{ color: BRAND.navy.dark }}
          >
            {leader.name}
          </h3>

          {/* Role */}
          <p
            className="text-sm font-semibold uppercase tracking-wider mb-4"
            style={{ color: BRAND.gold.primary }}
          >
            {leader.role}
          </p>

          {/* Bio */}
          <p
            className="text-sm leading-relaxed mb-5"
            style={{ color: "#64748B" }}
          >
            {leader.bio}
          </p>

          {/* Quote on Hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="mb-5 p-4 rounded-xl"
                  style={{
                    background: "rgba(253,185,19,0.08)",
                    border: `1px solid ${BRAND.gold.primary}30`,
                  }}
                >
                  <p
                    className="text-sm italic leading-relaxed"
                    style={{ color: BRAND.navy.dark }}
                  >
                    "{leader.quote}"
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Social Links */}
          <div
            className="flex items-center gap-3 pt-4"
            style={{
              borderTop: "1px solid rgba(11,29,51,0.08)",
            }}
          >
            <a
              href={leader.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "#0077B5",
                color: "white",
              }}
            >
              <FaLinkedinIn className="text-base" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Differentiator Card Component
const DifferentiatorCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      delay: index * 0.1,
      duration: ANIMATION.duration,
      ...ANIMATION.spring,
    }}
    whileHover={{ y: -5 }}
    className="group"
  >
    <div className="p-6 lg:p-8 rounded-2xl h-full transition-all duration-300 hover:shadow-lg bg-primary-800">
      {/* Icon */}
      <motion.div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
        style={{
          background:
            index % 2 === 0
              ? `${BRAND.gold.primary}10`
              : `${BRAND.gold.primary}15`,
          border: `2px solid ${index % 2 === 0 ? `${BRAND.gold.primary}25` : `${BRAND.gold.primary}30`}`,
        }}
        whileHover={{ rotate: [0, -10, 10, 0] }}
      >
        <item.icon className="text-xl" style={{ color: BRAND.gold.primary }} />
      </motion.div>

      {/* Title */}
      <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-white">{item.description}</p>
    </div>
  </motion.div>
);

// ==================== SECTIONS ====================

// Hero Section
const HeroSection = () => (
  <section
    className="relative w-full min-h-[90vh] flex items-center justify-center bg-cover bg-center"
    style={{
      backgroundImage: `url(${leaderImg})`,
    }}
  >
    {/* Optional overlay */}
    <div className="absolute inset-0 bg-black/20" />
  </section>
);
// Team Section - UPDATED with py-10 for lg devices
const TeamSection = () => (
  <section className="py-10 lg:py-4 bg-gradient-to-br from-white via-gray-50/40 to-white relative overflow-hidden">
    {/* Background Decoration */}
    <div
      className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-3xl opacity-[0.03] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{ background: BRAND.navy.lighter }}
    />

    <div
      className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.02] translate-x-1/3 translate-y-1/3 pointer-events-none"
      style={{ background: BRAND.gold.primary }}
    />

    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
      {/* Section Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-6 lg:mb-10"
      >
        {/* <span
          className="inline-block px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
          style={{
            background: `${BRAND.navy.mid}08`,
            color: BRAND.navy.dark,
            border: `1px solid ${BRAND.navy.mid}15`,
          }}
        >
          👤 Meet Our Leaders
        </span> */}

        <h2
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-5"
          style={{ color: BRAND.navy.dark }}
        >
          The Minds Behind{" "}
          <span style={{ color: BRAND.gold.primary }}>Innovise IT</span>
        </h2>

        <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
          Meet the experienced professionals who drive our vision and deliver
          exceptional results for clients worldwide.
        </p>
      </motion.header>

      {/* Leaders Grid - Updated with responsive columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 lg:gap-9">
        {leadershipData.map((leader, index) => (
          <LeaderCard key={leader.id} leader={leader} index={index} />
        ))}
      </div>
    </div>
  </section>
);

// Philosophy Section
const PhilosophySection = () => (
  <section className="py-10 lg:py-16 relative overflow-hidden bg-primary-800">
    {/* Background Pattern */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }}
    />

    {/* Decorative Elements */}
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.06]"
      style={{ background: BRAND.gold.primary }}
    />

    <div className="max-w-5xl mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        {/* Quote Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8"
          style={{
            background: `${BRAND.gold.primary}15`,
            border: `2px solid ${BRAND.gold.primary}30`,
          }}
        >
          <FaQuoteLeft
            className="text-3xl"
            style={{ color: BRAND.gold.primary }}
          />
        </motion.div>

        {/* Label */}
        <span
          className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
          style={{
            background: "rgba(255,255,255,0.08)",
            color: BRAND.gold.primary,
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          Leadership Philosophy
        </span>

        {/* Quote Text */}
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-8 max-w-4xl mx-auto">
          Our leaders believe in a{" "}
          <span
            style={{
              backgroundImage: BRAND.gold.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            collaborative
          </span>{" "}
          and{" "}
          <span
            style={{
              backgroundImage: BRAND.gold.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            forward-thinking approach
          </span>
          —empowering teams, fostering innovation, and ensuring every solution
          is aligned with client success.
        </blockquote>

        {/* Key Principles */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {[
            "Empowerment",
            "Innovation",
            "Collaboration",
            "Excellence",
            "Integrity",
          ].map((principle, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="px-6 py-3 rounded-xl font-semibold text-sm"
              style={{
                background: "rgba(255,255,255,0.05)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {principle}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// What Sets Us Apart Section
const DifferentiatorsSection = () => (
  <section className="py-10 lg:py-14 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      {/* Section Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-14 lg:mb-16"
      >
        <span
          className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
          style={{
            background: `${BRAND.navy.mid}08`,
            color: BRAND.navy.dark,
            border: `1px solid ${BRAND.navy.mid}15`,
          }}
        >
          What Sets Our Leaders Apart
        </span>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5"
          style={{ color: BRAND.navy.dark }}
        >
          The{" "}
          <span style={{ color: BRAND.gold.primary }}>Innovise Difference</span>
        </h2>

        <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
          Our leadership team brings a unique combination of expertise, vision,
          and commitment that sets us apart.
        </p>
      </motion.header>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {differentiatorsData.map((item, index) => (
          <DifferentiatorCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  </section>
);

// Expanded Leader Detail Modal
const LeaderDetailModal = ({ leader, isOpen, onClose }) => {
  if (!isOpen || !leader) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      style={{
        background: "rgba(11,29,51,0.92)",
        backdropFilter: "blur(10px)",
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Full Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={leader.image}
            alt={leader.name}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, ${BRAND.navy.dark}, transparent)`,
            }}
          />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-start gap-6 mb-6 -mt-16 relative z-10">
            {/* Avatar */}
            <div
              className="w-28 h-28 rounded-2xl p-1 shadow-2xl flex-shrink-0"
              style={{ background: BRAND.gold.gradient }}
            >
              <div
                className="w-full h-full rounded-xl overflow-hidden"
                style={{
                  background: BRAND.navy.dark,
                  border: "3px solid white",
                }}
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="pt-12">
              <h3
                className="text-2xl font-bold"
                style={{ color: BRAND.navy.dark }}
              >
                {leader.name}
              </h3>
              <p
                className="text-base font-semibold mt-1"
                style={{ color: BRAND.gold.primary }}
              >
                {leader.role}
              </p>
              <span
                className="inline-flex items-center gap-1 mt-2 text-xs"
                style={{ color: "#64748B" }}
              >
                <FaGraduationCap /> {leader.experience}
              </span>
            </div>
          </div>

          {/* Bio */}
          <p
            className="text-base leading-relaxed mb-6"
            style={{ color: "#475569" }}
          >
            {leader.bio}
          </p>

          {/* Expertise */}
          <div className="mb-6">
            <h4
              className="text-sm font-bold uppercase tracking-wider mb-3"
              style={{ color: BRAND.navy.dark }}
            >
              Areas of Expertise
            </h4>
            <div className="flex flex-wrap gap-2">
              {leader.expertise.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-lg text-sm font-medium"
                  style={{
                    background: `${leader.color}10`,
                    color: leader.color,
                    border: `1px solid ${leader.color}20`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-8">
            <h4
              className="text-sm font-bold uppercase tracking-wider mb-3"
              style={{ color: BRAND.navy.dark }}
            >
              Key Achievements
            </h4>
            <ul className="space-y-3">
              {leader.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FaCheckCircle
                    className="mt-1 flex-shrink-0"
                    style={{ color: BRAND.gold.primary }}
                  />
                  <span className="text-sm" style={{ color: "#64748B" }}>
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Actions */}
          <div
            className="flex gap-4 pt-6"
            style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
          >
            <a
              href={leader.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3.5 rounded-xl font-semibold text-sm text-center transition-all hover:-translate-y-1"
              style={{
                background: "#0077B5",
                color: "white",
              }}
            >
              <FaLinkedinIn className="mr-2 inline" />
              Connect on LinkedIn
            </a>
            <a
              href={`mailto:${leader.email}`}
              className="flex-1 py-3.5 rounded-xl font-semibold text-sm text-center transition-all hover:-translate-y-1"
              style={{
                background: BRAND.navy.dark,
                color: "white",
              }}
            >
              <FaEnvelope className="mr-2 inline" />
              Send Email
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Closing Section
const ClosingSection = () => (
  <section
    className="relative py-16 lg:py-24 overflow-hidden"
    style={{
      background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
    }}
  >
    {/* Background Pattern */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }}
    />

    {/* Decorative Elements */}
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.06]"
      style={{ background: BRAND.gold.primary }}
    />

    <div className="max-w-4xl mx-auto px-4 lg:px-8 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8"
          style={{
            background: `${BRAND.gold.primary}15`,
            border: `2px solid ${BRAND.gold.primary}30`,
          }}
        >
          <FaRocket
            className="text-3xl"
            style={{ color: BRAND.gold.primary }}
          />
        </motion.div>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-8">
          Ready to Work With{" "}
          <span
            style={{
              backgroundImage: BRAND.gold.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Exceptional Leaders
          </span>
          ?
        </h2>

        <p className="text-lg text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto">
          Our leadership team is ready to help you navigate your digital
          transformation journey. Let's start a conversation about how we can
          drive success together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact"
            className="group relative px-10 py-5 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              background: BRAND.gold.gradient,
              color: BRAND.navy.dark,
              boxShadow: `0 8px 30px ${BRAND.gold.primary}35`,
              "--tw-ring-color": BRAND.gold.primary,
            }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Schedule a Meeting
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </span>

            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            </div>
          </a>

          <a
            href="/about"
            className="px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/5 focus:outline-none focus:ring-2"
            style={{
              border: `1px solid rgba(255,255,255,0.2)`,
              color: "white",
            }}
          >
            Learn More About Us →
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

// Main Leadership Page Component
const LeadershipPage = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleLeaderClick = (leader) => {
    setSelectedLeader(leader);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedLeader(null), 300);
  };

  return (
    <main role="main">
      {/* <HeroSection /> */}
      {/* <AboutHeroSection /> */}
      <TeamSection />
      <PhilosophySection />
      <DifferentiatorsSection />
      {/* <ClosingSection /> */}

      {/* Optional Modal for detailed view */}
      <LeaderDetailModal
        leader={selectedLeader}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
};

export default LeadershipPage;
