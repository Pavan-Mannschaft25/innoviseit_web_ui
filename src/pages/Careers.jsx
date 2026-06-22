// // import React, { useState, useCallback, useMemo, memo } from "react";
// // import Container from "../components/ui/Container";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Link } from "react-router-dom";
// // import {
// //   FaMapMarkerAlt,
// //   FaClock,
// //   FaBriefcase,
// //   FaArrowRight,
// //   FaCheck,
// //   FaPaperPlane,
// //   FaHeart,
// //   FaUsers,
// //   FaGraduationCap,
// //   FaLaptopCode,
// //   FaEarthAmericas ,
// //   FaChartLine,
// //   FaUser,
// //   FaEnvelope,
// //   FaPhone,
// //   FaTimes,
// //   FaChevronDown,
// //   FaStar,
// //   FaPlay,
// //   FaExclamationCircle,
// // } from "react-icons/fa";
// // import toast from "react-hot-toast";
// // import bannerImg from "../assets/banners/career.png";

// // import img1 from "../assets/services/sap.png";
// // import img2 from "../assets/services/app.png";
// // import img3 from "../assets/services/ai.png";
// // import img4 from "../assets/services/cloud.png";
// // import img5 from "../assets/services/global.png";
// // import img6 from "../assets/services/digital.png";

// // // ==================== CONSTANTS & CONFIG ====================
// // const BRAND = {
// //   navy: {
// //     dark: "#12324f",
// //     mid: "#12324f",
// //     light: "#143A63",
// //     lighter: "#1A4570",
// //   },
// //   gold: {
// //     primary: "#FDB913",
// //     light: "#FFD54F",
// //     gradient: "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
// //   },
// // };

// // const ANIMATION_CONFIG = {
// //   stagger: 0.1,
// //   duration: 0.5,
// //   spring: { type: "spring", stiffness: 300, damping: 30 },
// // };

// // // ==================== DATA ====================
// // const benefits = [
// //   {
// //     icon: FaLaptopCode,
// //     title: "Modern Tech Stack",
// //     desc: "Work with cutting-edge technologies and tools",
// //   },
// //   {
// //     icon: FaGraduationCap,
// //     title: "Learning & Growth",
// //     desc: "$5,000 annual learning budget + certifications",
// //   },
// //   {
// //     icon: FaUsers,
// //     title: "Great Culture",
// //     desc: "Collaborative, inclusive, fun work environment",
// //   },
// //   {
// //     icon: FaChartLine,
// //     title: "Career Growth",
// //     desc: "Clear promotion paths and leadership opportunities",
// //   },
// //   {
// //     icon: FaHeart,
// //     title: "Health & Wellness",
// //     desc: "Comprehensive medical, dental, vision coverage",
// //   },
// //   {
// //     icon: FaEarthAmericas ,
// //     title: "Global Opportunities",
// //     desc: "Work with clients across 30+ countries",
// //   },
// // ];

// // const openPositions = [
// //   {
// //     id: 1,
// //     title: "Senior Full-Stack Developer",
// //     department: "Engineering",
// //     location: "Remote / Hybrid",
// //     type: "Full-Time",
// //     experience: "5+ Years",
// //     description:
// //       "We're looking for an experienced full-stack developer to lead complex projects using React, Node.js, and cloud technologies.",
// //     image: img1,
// //   },
// //   {
// //     id: 2,
// //     title: "Cloud Solutions Architect",
// //     department: "Cloud",
// //     location: "New York, NY",
// //     type: "Full-Time",
// //     experience: "8+ Years",
// //     description:
// //       "Design and implement scalable cloud infrastructure on AWS, Azure, and GCP for enterprise clients.",
// //     image: img2,
// //   },
// //   {
// //     id: 3,
// //     title: "Data Scientist",
// //     department: "Analytics",
// //     location: "Chicago, IL",
// //     type: "Full-Time",
// //     experience: "3+ Years",
// //     description:
// //       "Build ML models, analyze big data, and deliver actionable insights that drive business decisions.",
// //     image: img3,
// //   },
// //   {
// //     id: 4,
// //     title: "DevOps Engineer",
// //     department: "Infrastructure",
// //     location: "Austin, TX",
// //     type: "Full-Time",
// //     experience: "4+ Years",
// //     description:
// //       "Manage CI/CD pipelines, Kubernetes clusters, and infrastructure as code for high-availability systems.",
// //     image: img4,
// //   },
// //   {
// //     id: 5,
// //     title: "UI/UX Designer",
// //     department: "Design",
// //     location: "San Francisco, CA",
// //     type: "Full-Time",
// //     experience: "4+ Years",
// //     description:
// //       "Create beautiful, intuitive user experiences for enterprise applications and consumer products.",
// //     image: img5,
// //   },
// //   {
// //     id: 6,
// //     title: "Project Manager",
// //     department: "Management",
// //     location: "Remote",
// //     type: "Full-Time",
// //     experience: "6+ Years",
// //     description:
// //       "Lead cross-functional teams, manage stakeholder expectations, and deliver projects on time and budget.",
// //     image: img6,
// //   },
// // ];

// // // ==================== CUSTOM HOOKS ====================
// // const useFormValidation = (initialState) => {
// //   const [formData, setFormData] = useState(initialState);
// //   const [errors, setErrors] = useState({});
// //   const [touched, setTouched] = useState({});

// //   const validateField = useCallback((name, value) => {
// //     let error = "";
// //     switch (name) {
// //       case "fullName":
// //         if (!value.trim()) error = "Full name is required";
// //         else if (value.length < 2) error = "Name must be at least 2 characters";
// //         break;
// //       case "email":
// //         if (!value.trim()) error = "Email is required";
// //         else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
// //           error = "Please enter a valid email";
// //         break;
// //       case "position":
// //         if (!value) error = "Please select a position";
// //         break;
// //       default:
// //         break;
// //     }
// //     return error;
// //   }, []);

// //   const handleChange = useCallback(
// //     (e) => {
// //       const { name, value } = e.target;
// //       setFormData((prev) => ({ ...prev, [name]: value }));
// //       if (touched[name]) {
// //         const error = validateField(name, value);
// //         setErrors((prev) => ({ ...prev, [name]: error }));
// //       }
// //     },
// //     [touched, validateField],
// //   );

// //   const handleBlur = useCallback(
// //     (e) => {
// //       const { name, value } = e.target;
// //       setTouched((prev) => ({ ...prev, [name]: true }));
// //       const error = validateField(name, value);
// //       setErrors((prev) => ({ ...prev, [name]: error }));
// //     },
// //     [validateField],
// //   );

// //   const resetForm = useCallback(() => {
// //     setFormData(initialState);
// //     setErrors({});
// //     setTouched({});
// //   }, [initialState]);

// //   const isValid = useMemo(() => {
// //     return (
// //       Object.keys(errors).every((key) => !errors[key]) &&
// //       Object.keys(initialState).every(
// //         (key) =>
// //           initialState[key] === false || formData[key]?.toString().trim(),
// //       )
// //     );
// //   }, [errors, formData, initialState]);

// //   return {
// //     formData,
// //     errors,
// //     touched,
// //     handleChange,
// //     handleBlur,
// //     resetForm,
// //     isValid,
// //     setFormData,
// //   };
// // };

// // // ==================== MEMOIZED COMPONENTS ====================

// // // Hero Section - Memoized as it's static
// // const HeroSection = memo(() => {
// //   return (
// //     <section className="relative h-[70vh] overflow-hidden">
// //       {/* Background Image */}
// //       <img
// //         src={bannerImg} // your uploaded image
// //         alt="Innovise IT Think"
// //         className="absolute inset-0 w-full h-full object-cover"
// //       />

// //       {/* Optional Dark Overlay (for better text visibility) */}
// //       <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F2C]/90 via-[#0A0F2C]/60 to-transparent" />

// //       {/* LEFT SIDE TEXT */}
// //       <div className="relative z-10 h-full flex items-center">
// //         <div className="max-w-2xl px-6 md:px-12 lg:px-20">
// //           {/* Small Label */}
// //           <p className="text-sm uppercase tracking-widest text-yellow-400 mb-4">
// //             We're Hiring
// //           </p>

// //           {/* Main Heading */}
// //           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
// //             Build Your Career at Innovise IT
// //           </h1>

// //           {/* Subtitle */}
// //           <p className="text-lg md:text-xl text-white/70 leading-relaxed">
// //             Join a global team of innovators shaping the future of technology.
// //             Grow your skills, make real impact, and advance your career with us.
// //           </p>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // });

// // HeroSection.displayName = "HeroSection";

// // // Benefits Section
// // const BenefitsSection = memo(() => {
// //   const BenefitCard = memo(({ benefit, index }) => (
// //     <motion.div
// //       initial={{ opacity: 0, y: 30 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true }}
// //       transition={{
// //         delay: index * ANIMATION_CONFIG.stagger,
// //         duration: ANIMATION_CONFIG.duration,
// //       }}
// //       whileHover={{ y: -8 }}
// //       className="group relative p-8 rounded-lg transition-all duration-500 cursor-default focus-within:ring-2 focus-within:ring-offset-2"
// //       style={{
// //         background: `linear-gradient(180deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 100%)`,
// //       }}
// //       onMouseEnter={(e) => {
// //         e.currentTarget.style.borderColor = `${BRAND.gold.primary}40`;
// //         e.currentTarget.style.boxShadow = `0 20px 40px ${BRAND.gold.primary}15`;
// //       }}
// //       onMouseLeave={(e) => {
// //         e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
// //         e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)";
// //       }}
// //       tabIndex={0}
// //       role="article"
// //       aria-labelledby={`benefit-title-${index}`}
// //     >
// //       <div
// //         className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
// //         style={{
// //           background: `${BRAND.gold.primary}10`,
// //           border: `1px solid ${BRAND.gold.primary}25`,
// //         }}
// //       >
// //         <benefit.icon
// //           className="text-2xl transition-colors duration-300"
// //           style={{ color: BRAND.gold.primary }}
// //           aria-hidden="true"
// //         />
// //       </div>

// //       <h3
// //         id={`benefit-title-${index}`}
// //         className="text-xl font-bold mb-3 transition-colors duration-300 text-white"
// //       >
// //         {benefit.title}
// //       </h3>

// //       <p className="text-sm leading-relaxed text-white">{benefit.desc}</p>

// //       {/* <div
// //         className="mt-6 pt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 group-focus:translate-y-0"
// //         style={{ borderTop: `1px solid ${BRAND.gold.primary}15` }}
// //       >
// //         <span
// //           className="text-xs font-semibold uppercase tracking-wider"
// //           style={{ color: BRAND.gold.primary }}
// //         >
// //           Learn More
// //         </span>
// //         <FaArrowRight
// //           className="text-xs"
// //           style={{ color: BRAND.gold.primary }}
// //           aria-hidden="true"
// //         />
// //       </div> */}

// //       <div
// //         className="absolute bottom-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
// //         style={{ background: BRAND.gold.primary }}
// //         aria-hidden="true"
// //       />
// //     </motion.div>
// //   ));

// //   BenefitCard.displayName = "BenefitCard";

// //   return (
// //     <section
// //       className="py-14 bg-white relative overflow-hidden"
// //       aria-labelledby="benefits-heading"
// //     >
// //       <div
// //         className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.04] -translate-y-1/2 translate-x-1/2"
// //         style={{ background: BRAND.navy.lighter }}
// //         aria-hidden="true"
// //       />

// //       <Container>
// //         <header className="text-center max-w-3xl mx-auto mb-16">
// //           <motion.span
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
// //             style={{
// //               background: `${BRAND.navy.mid}08`,
// //               color: BRAND.navy.dark,
// //               border: `1px solid ${BRAND.navy.mid}15`,
// //             }}
// //           >
// //             Why Choose Us
// //           </motion.span>

// //           <motion.h2
// //             id="benefits-heading"
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: 0.1 }}
// //             className="text-4xl md:text-5xl font-bold mb-6"
// //             style={{ color: BRAND.navy.dark }}
// //           >
// //             Why Join{" "}
// //             <span style={{ color: BRAND.gold.primary }}>Our Team?</span>
// //           </motion.h2>

// //           <motion.p
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: 0.2 }}
// //             className="text-lg"
// //             style={{ color: "#64748B" }}
// //           >
// //             Exceptional benefits, growth opportunities, and a culture that truly
// //             values your contributions.
// //           </motion.p>
// //         </header>

// //         <div
// //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
// //           role="list"
// //           aria-label="Company benefits"
// //         >
// //           {benefits.map((benefit, index) => (
// //             <BenefitCard key={index} benefit={benefit} index={index} />
// //           ))}
// //         </div>
// //       </Container>
// //     </section>
// //   );
// // });

// // BenefitsSection.displayName = "BenefitsSection";

// // // Position Card Component
// // const PositionCard = memo(({ position, isSelected, onSelect }) => {
// //   const metaItems = useMemo(
// //     () => [
// //       { icon: FaBriefcase, text: position.department },
// //       { icon: FaMapMarkerAlt, text: position.location },
// //       { icon: FaClock, text: position.type },
// //       { icon: FaGraduationCap, text: position.experience },
// //     ],
// //     [position],
// //   );

// //   return (
// //     <motion.article
// //       layout
// //       initial={{ opacity: 0, y: 30 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true }}
// //       transition={{ duration: ANIMATION_CONFIG.duration }}
// //       role="article"
// //       aria-expanded={isSelected}
// //     >
// //       <div
// //         onClick={() => onSelect(position)}
// //         onKeyDown={(e) => {
// //           if (e.key === "Enter" || e.key === " ") {
// //             e.preventDefault();
// //             onSelect(position);
// //           }
// //         }}
// //         className={`group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 ${
// //           isSelected ? "ring-2 ring-offset-2 ring-offset-transparent" : ""
// //         }`}
// //         style={{
// //           background: isSelected
// //             ? `linear-gradient(135deg, ${BRAND.navy.lighter}, ${BRAND.navy.mid})`
// //             : "rgba(255,255,255,0.03)",
// //           border: isSelected
// //             ? `1px solid ${BRAND.gold.primary}`
// //             : "1px solid rgba(255,255,255,0.06)",
// //           boxShadow: isSelected
// //             ? `0 20px 60px ${BRAND.gold.primary}15`
// //             : "0 4px 20px rgba(0,0,0,0.1)",
// //           "--tw-ring-color": BRAND.gold.primary,
// //         }}
// //         tabIndex={0}
// //         aria-label={`${position.title} - ${position.department}`}
// //       >
// //         <div className="flex flex-col lg:flex-row items-center gap-6 p-6 lg:p-8">
// //           {/* Job Image */}
// //           <div className="lg:w-42 h-18 lg:h-30 flex-shrink-0 rounded-xl overflow-hidden order-2 lg:order-1">
// //             <img
// //               src={position.image}
// //               alt={`${position.title} workplace`}
// //               className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
// //               loading="lazy"
// //             />
// //           </div>

// //           {/* Content */}
// //           <div className="flex-grow order-1 lg:order-2">
// //             <div className="flex items-start justify-between gap-4 mb-4">
// //               <div>
// //                 <div className="flex items-center gap-3 mb-2 flex-wrap">
// //                   <h3
// //                     className="text-xl lg:text-2xl font-bold transition-colors"
// //                     style={{
// //                       color: isSelected ? "white" : "#FFFFFF",
// //                     }}
// //                   >
// //                     {position.title}
// //                   </h3>
// //                   <span
// //                     className="px-3 py-1 rounded-full text-xs font-bold"
// //                     style={{
// //                       background: `${BRAND.gold.primary}20`,
// //                       color: BRAND.gold.primary,
// //                       border: `1px solid ${BRAND.gold.primary}40`,
// //                     }}
// //                   >
// //                     New
// //                   </span>
// //                 </div>

// //                 <div
// //                   className="flex flex-wrap gap-4 text-sm"
// //                   role="list"
// //                   aria-label="Job details"
// //                 >
// //                   {metaItems.map((item, i) => (
// //                     <span
// //                       key={i}
// //                       className="flex items-center gap-1.5"
// //                       style={{ color: "rgba(255,255,255,0.6)" }}
// //                       role="listitem"
// //                     >
// //                       <item.icon
// //                         className="text-xs"
// //                         style={{ color: BRAND.gold.primary }}
// //                         aria-hidden="true"
// //                       />
// //                       {item.text}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>

// //               <button
// //                 className={`flex-shrink-0 px-6 py-3 rounded-xl font-bold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
// //                   isSelected ? "" : ""
// //                 }`}
// //                 style={
// //                   isSelected
// //                     ? {
// //                         background: BRAND.gold.gradient,
// //                         color: BRAND.navy.dark,
// //                         boxShadow: `0 4px 15px ${BRAND.gold.primary}35`,
// //                         "--tw-ring-color": BRAND.gold.primary,
// //                       }
// //                     : {
// //                         background: "rgba(255,255,255,0.08)",
// //                         color: "white",
// //                         border: `1px solid rgba(255,255,255,0.15)`,
// //                         "--tw-ring-color": "rgba(255,255,255,0.5)",
// //                       }
// //                 }
// //                 aria-pressed={isSelected}
// //               >
// //                 {isSelected ? (
// //                   <>
// //                     Selected{" "}
// //                     <FaCheck className="inline ml-1" aria-hidden="true" />
// //                   </>
// //                 ) : (
// //                   "View Details"
// //                 )}
// //               </button>
// //             </div>

// //             {/* Expanded Content */}
// //             <AnimatePresence>
// //               {isSelected && (
// //                 <motion.div
// //                   initial={{ height: 0, opacity: 0 }}
// //                   animate={{ height: "auto", opacity: 1 }}
// //                   exit={{ height: 0, opacity: 0 }}
// //                   transition={{ duration: 0.3 }}
// //                   className="mt-6 pt-6 overflow-hidden"
// //                   style={{
// //                     borderTop: "1px solid rgba(255,255,255,0.1)",
// //                   }}
// //                   role="region"
// //                   aria-label="Job description"
// //                 >
// //                   <p className="text-gray-300 mb-6 leading-relaxed">
// //                     {position.description}
// //                   </p>

// //                   <div className="flex flex-wrap gap-4">
// //                     <button
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         document
// //                           .getElementById("application-form")
// //                           ?.scrollIntoView({ behavior: "smooth" });
// //                       }}
// //                       className="group/btn flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
// //                       style={{
// //                         background: BRAND.gold.gradient,
// //                         color: BRAND.navy.dark,
// //                         boxShadow: `0 8px 25px ${BRAND.gold.primary}35`,
// //                         "--tw-ring-color": BRAND.gold.primary,
// //                       }}
// //                     >
// //                       <FaPaperPlane aria-hidden="true" />
// //                       Apply Now
// //                       <FaArrowRight
// //                         className="text-xs group-hover/btn:translate-x-1 transition-transform"
// //                         aria-hidden="true"
// //                       />
// //                     </button>

// //                     <button
// //                       onClick={(e) => e.stopPropagation()}
// //                       className="px-8 py-4 rounded-xl font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"
// //                       style={{
// //                         border: "1px dashed rgba(255,255,255,0.3)",
// //                         color: "white",
// //                         "--tw-ring-color": "rgba(255,255,255,0.5)",
// //                       }}
// //                     >
// //                       Save Job
// //                     </button>
// //                   </div>
// //                 </motion.div>
// //               )}
// //             </AnimatePresence>
// //           </div>
// //         </div>
// //       </div>
// //     </motion.article>
// //   );
// // });

// // PositionCard.displayName = "PositionCard";

// // // Positions Section
// // const PositionsSection = memo(({ selectedJob, setSelectedJob }) => {
// //   const handleSelect = useCallback(
// //     (position) => {
// //       setSelectedJob((prev) => (prev?.id === position.id ? null : position));
// //     },
// //     [setSelectedJob],
// //   );

// //   return (
// //     <section
// //       id="positions"
// //       className="py-24 relative overflow-hidden"
// //       style={{
// //         background: `linear-gradient(180deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 100%)`,
// //       }}
// //       aria-labelledby="positions-heading"
// //     >
// //       <div
// //         className="absolute inset-0 opacity-[0.02]"
// //         style={{
// //           backgroundImage:
// //             "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
// //           backgroundSize: "40px 40px",
// //         }}
// //         aria-hidden="true"
// //       />

// //       <Container>
// //         <header className="text-center max-w-3xl mx-auto mb-16">
// //           <motion.span
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
// //             style={{
// //               background: `${BRAND.gold.primary}15`,
// //               color: BRAND.gold.primary,
// //               border: `1px solid ${BRAND.gold.primary}30`,
// //             }}
// //           >
// //             Current Openings
// //           </motion.span>

// //           <motion.h2
// //             id="positions-heading"
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: 0.1 }}
// //             className="text-4xl md:text-5xl font-bold text-white mb-6"
// //           >
// //             Explore{" "}
// //             <span style={{ color: BRAND.gold.primary }}>Opportunities</span>
// //           </motion.h2>

// //           <motion.p
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: 0.2 }}
// //             className="text-lg text-gray-400"
// //           >
// //             Find your perfect role and join our growing team of technology
// //             professionals
// //           </motion.p>
// //         </header>

// //         <div className="max-w-5xl mx-auto space-y-5" role="list">
// //           {openPositions.map((position) => (
// //             <PositionCard
// //               key={position.id}
// //               position={position}
// //               isSelected={selectedJob?.id === position.id}
// //               onSelect={handleSelect}
// //             />
// //           ))}
// //         </div>
// //       </Container>
// //     </section>
// //   );
// // });

// // PositionsSection.displayName = "PositionsSection";

// // // Application Form Section
// // const ApplicationFormSection = memo(() => {
// //   const initialFormData = useMemo(
// //     () => ({
// //       fullName: "",
// //       email: "",
// //       phone: "",
// //       position: "",
// //       message: "",
// //       agreedToTerms: false,
// //     }),
// //     [],
// //   );

// //   const {
// //     formData,
// //     errors,
// //     touched,
// //     handleChange,
// //     handleBlur,
// //     resetForm,
// //     isValid,
// //   } = useFormValidation(initialFormData);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     // Validate all fields before submission
// //     const newErrors = {};
// //     Object.keys(initialFormData).forEach((key) => {
// //       if (key !== "agreedToTerms" && key !== "phone") {
// //         const error = /* validateField */ (() => {
// //           let err = "";
// //           const value = formData[key];
// //           switch (key) {
// //             case "fullName":
// //               if (!value?.trim()) err = "Full name is required";
// //               else if (value.length < 2)
// //                 err = "Name must be at least 2 characters";
// //               break;
// //             case "email":
// //               if (!value?.trim()) err = "Email is required";
// //               else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
// //                 err = "Please enter a valid email";
// //               break;
// //             case "position":
// //               if (!value) err = "Please select a position";
// //               break;
// //             default:
// //               break;
// //           }
// //           return err;
// //         })();
// //         if (error) newErrors[key] = error;
// //       }
// //     });

// //     if (!formData.agreedToTerms) {
// //       newErrors.agreedToTerms =
// //         "You must agree to the privacy policy to submit";
// //     }

// //     if (Object.keys(newErrors).length > 0) {
// //       toast.error("Please fix the errors in the form");
// //       return;
// //     }

// //     // Simulate API call
// //     toast.success(
// //       "Application submitted successfully! We'll be in touch soon.",
// //     );
// //     resetForm();
// //   };

// //   const inputClasses = (fieldName) =>
// //     `w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:ring-2 transition-all ${
// //       errors[fieldName] && touched[fieldName]
// //         ? "border-red-400 focus:ring-red-200"
// //         : "focus:ring-yellow-200"
// //     }`;

// //   return (
// //     <section
// //       id="application-form"
// //       className="py-24 bg-white relative overflow-hidden"
// //       aria-labelledby="application-heading"
// //     >
// //       <div
// //         className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.04]"
// //         style={{ background: BRAND.gold.primary }}
// //         aria-hidden="true"
// //       />

// //       <Container>
// //         <div className="max-w-4xl mx-auto">
// //           <header className="text-center mb-12">
// //             <motion.span
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
// //               style={{
// //                 background: `${BRAND.navy.mid}08`,
// //                 color: BRAND.navy.dark,
// //               }}
// //             >
// //               Apply Now
// //             </motion.span>

// //             <motion.h2
// //               id="application-heading"
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: 0.1 }}
// //               className="text-4xl md:text-5xl font-bold mb-4"
// //               style={{ color: BRAND.navy.dark }}
// //             >
// //               Ready to{" "}
// //               <span style={{ color: BRAND.gold.primary }}>Join Us?</span>
// //             </motion.h2>

// //             <motion.p
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: 0.2 }}
// //               className="text-lg"
// //               style={{ color: "#64748B" }}
// //             >
// //               Submit your application and our talent acquisition team will reach
// //               out shortly
// //             </motion.p>
// //           </header>

// //           <motion.form
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             onSubmit={handleSubmit}
// //             noValidate
// //             className="rounded-3xl overflow-hidden shadow-2xl"
// //             style={{ border: "1px solid rgba(0,0,0,0.06)" }}
// //           >
// //             {/* Form Header */}
// //             <div
// //               className="relative h-48 md:h-56 overflow-hidden"
// //               style={{
// //                 background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.lighter})`,
// //               }}
// //             >
// //               <div className="absolute inset-0 flex items-center justify-center">
// //                 <div className="text-center">
// //                   <div
// //                     className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
// //                     style={{ background: BRAND.gold.gradient }}
// //                   >
// //                     <FaPaperPlane
// //                       className="text-2xl"
// //                       style={{ color: BRAND.navy.dark }}
// //                       aria-hidden="true"
// //                     />
// //                   </div>
// //                   <h3 className="text-2xl font-bold text-white">
// //                     Start Your Journey
// //                   </h3>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Form Body */}
// //             <div className="p-8 md:p-12 space-y-6">
// //               <div className="grid md:grid-cols-2 gap-6">
// //                 {/* Full Name */}
// //                 <div>
// //                   <label
// //                     htmlFor="fullName"
// //                     className="block text-sm font-semibold mb-2"
// //                     style={{ color: BRAND.navy.dark }}
// //                   >
// //                     Full Name <span className="text-red-500">*</span>
// //                   </label>
// //                   <div className="relative">
// //                     <FaUser
// //                       className="absolute left-4 top-1/2 -translate-y-1/2 text-sm"
// //                       style={{ color: "#94A3B8" }}
// //                       aria-hidden="true"
// //                     />
// //                     <input
// //                       type="text"
// //                       id="fullName"
// //                       name="fullName"
// //                       value={formData.fullName}
// //                       onChange={handleChange}
// //                       onBlur={handleBlur}
// //                       placeholder="John Doe"
// //                       required
// //                       aria-invalid={errors.fullName && touched.fullName}
// //                       aria-describedby={
// //                         errors.fullName ? "fullName-error" : undefined
// //                       }
// //                       className={`${inputClasses("fullName")} pl-11`}
// //                       style={{
// //                         borderColor:
// //                           errors.fullName && touched.fullName
// //                             ? "#EF4444"
// //                             : "#E2E8F0",
// //                         background: "#F8FAFC",
// //                       }}
// //                     />
// //                   </div>
// //                   {errors.fullName && touched.fullName && (
// //                     <p
// //                       id="fullName-error"
// //                       className="mt-1 text-sm text-red-500 flex items-center gap-1"
// //                       role="alert"
// //                     >
// //                       <FaExclamationCircle aria-hidden="true" />
// //                       {errors.fullName}
// //                     </p>
// //                   )}
// //                 </div>

// //                 {/* Email */}
// //                 <div>
// //                   <label
// //                     htmlFor="email"
// //                     className="block text-sm font-semibold mb-2"
// //                     style={{ color: BRAND.navy.dark }}
// //                   >
// //                     Email Address <span className="text-red-500">*</span>
// //                   </label>
// //                   <div className="relative">
// //                     <FaEnvelope
// //                       className="absolute left-4 top-1/2 -translate-y-1/2 text-sm"
// //                       style={{ color: "#94A3B8" }}
// //                       aria-hidden="true"
// //                     />
// //                     <input
// //                       type="email"
// //                       id="email"
// //                       name="email"
// //                       value={formData.email}
// //                       onChange={handleChange}
// //                       onBlur={handleBlur}
// //                       placeholder="john@example.com"
// //                       required
// //                       aria-invalid={errors.email && touched.email}
// //                       aria-describedby={
// //                         errors.email ? "email-error" : undefined
// //                       }
// //                       className={`${inputClasses("email")} pl-11`}
// //                       style={{
// //                         borderColor:
// //                           errors.email && touched.email ? "#EF4444" : "#E2E8F0",
// //                         background: "#F8FAFC",
// //                       }}
// //                     />
// //                   </div>
// //                   {errors.email && touched.email && (
// //                     <p
// //                       id="email-error"
// //                       className="mt-1 text-sm text-red-500 flex items-center gap-1"
// //                       role="alert"
// //                     >
// //                       <FaExclamationCircle aria-hidden="true" />
// //                       {errors.email}
// //                     </p>
// //                   )}
// //                 </div>

// //                 {/* Phone */}
// //                 <div>
// //                   <label
// //                     htmlFor="phone"
// //                     className="block text-sm font-semibold mb-2"
// //                     style={{ color: BRAND.navy.dark }}
// //                   >
// //                     Phone Number
// //                   </label>
// //                   <div className="relative">
// //                     <FaPhone
// //                       className="absolute left-4 top-1/2 -translate-y-1/2 text-sm"
// //                       style={{ color: "#94A3B8" }}
// //                       aria-hidden="true"
// //                     />
// //                     <input
// //                       type="tel"
// //                       id="phone"
// //                       name="phone"
// //                       value={formData.phone}
// //                       onChange={handleChange}
// //                       onBlur={handleBlur}
// //                       placeholder="+1 (555) 000-0000"
// //                       className={`${inputClasses("phone")} pl-11`}
// //                       style={{ borderColor: "#E2E8F0", background: "#F8FAFC" }}
// //                     />
// //                   </div>
// //                 </div>

// //                 {/* Position Select */}
// //                 <div>
// //                   <label
// //                     htmlFor="position"
// //                     className="block text-sm font-semibold mb-2"
// //                     style={{ color: BRAND.navy.dark }}
// //                   >
// //                     Position <span className="text-red-500">*</span>
// //                   </label>
// //                   <select
// //                     id="position"
// //                     name="position"
// //                     value={formData.position}
// //                     onChange={handleChange}
// //                     onBlur={handleBlur}
// //                     required
// //                     aria-invalid={errors.position && touched.position}
// //                     aria-describedby={
// //                       errors.position ? "position-error" : undefined
// //                     }
// //                     className={`${inputClasses("position")} appearance-none cursor-pointer`}
// //                     style={{
// //                       borderColor:
// //                         errors.position && touched.position
// //                           ? "#EF4444"
// //                           : "#E2E8F0",
// //                       background: `#F8FAFC url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M6 8L2 4l4-4 4 4z' fill='%2394A3B8'/%3E%3C/svg%3E") no-repeat right 16px center`,
// //                     }}
// //                   >
// //                     <option value="">Select a position...</option>
// //                     {openPositions.map((pos) => (
// //                       <option key={pos.id} value={pos.title}>
// //                         {pos.title}
// //                       </option>
// //                     ))}
// //                   </select>
// //                   {errors.position && touched.position && (
// //                     <p
// //                       id="position-error"
// //                       className="mt-1 text-sm text-red-500 flex items-center gap-1"
// //                       role="alert"
// //                     >
// //                       <FaExclamationCircle aria-hidden="true" />
// //                       {errors.position}
// //                     </p>
// //                   )}
// //                 </div>
// //               </div>

// //               {/* Message */}
// //               <div>
// //                 <label
// //                   htmlFor="message"
// //                   className="block text-sm font-semibold mb-2"
// //                   style={{ color: BRAND.navy.dark }}
// //                 >
// //                   Cover Letter / Message
// //                 </label>
// //                 <textarea
// //                   id="message"
// //                   name="message"
// //                   value={formData.message}
// //                   onChange={handleChange}
// //                   onBlur={handleBlur}
// //                   rows="5"
// //                   placeholder="Tell us about yourself and why you'd be a great fit..."
// //                   className={`${inputClasses("message")} resize-none`}
// //                   style={{ borderColor: "#E2E8F0", background: "#F8FAFC" }}
// //                 ></textarea>
// //               </div>

// //               {/* Terms Checkbox */}
// //               <div className="flex items-start gap-3">
// //                 <input
// //                   type="checkbox"
// //                   id="terms"
// //                   name="agreedToTerms"
// //                   checked={formData.agreedToTerms}
// //                   onChange={handleChange}
// //                   required
// //                   className="mt-1 w-5 h-5 rounded accent-current cursor-pointer"
// //                   style={{ accentColor: BRAND.gold.primary }}
// //                   aria-describedby={
// //                     errors.agreedToTerms ? "terms-error" : undefined
// //                   }
// //                 />
// //                 <label
// //                   htmlFor="terms"
// //                   className="text-sm cursor-pointer"
// //                   style={{ color: "#64748B" }}
// //                 >
// //                   I agree to the{" "}
// //                   <a
// //                     href="#"
// //                     className="font-semibold underline"
// //                     style={{ color: BRAND.gold.primary }}
// //                   >
// //                     Privacy Policy
// //                   </a>{" "}
// //                   and consent to my data being processed for recruitment
// //                   purposes.
// //                 </label>
// //               </div>
// //               {errors.agreedToTerms && (
// //                 <p
// //                   id="terms-error"
// //                   className="text-sm text-red-500 flex items-center gap-1"
// //                   role="alert"
// //                 >
// //                   <FaExclamationCircle aria-hidden="true" />
// //                   {errors.agreedToTerms}
// //                 </p>
// //               )}

// //               {/* Submit Button */}
// //               <button
// //                 type="submit"
// //                 disabled={!isValid || !formData.agreedToTerms}
// //                 className="group relative w-full py-5 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none focus:outline-none focus:ring-2 focus:ring-offset-2"
// //                 style={{
// //                   background: BRAND.gold.gradient,
// //                   color: BRAND.navy.dark,
// //                   boxShadow: `0 8px 30px ${BRAND.gold.primary}35`,
// //                   "--tw-ring-color": BRAND.gold.primary,
// //                 }}
// //                 aria-label="Submit application form"
// //               >
// //                 <span className="relative z-10 flex items-center justify-center gap-3">
// //                   <FaPaperPlane aria-hidden="true" />
// //                   Submit Application
// //                   <FaArrowRight
// //                     className="text-sm group-hover:translate-x-1 transition-transform"
// //                     aria-hidden="true"
// //                   />
// //                 </span>

// //                 {/* Shine Effect */}
// //                 <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full group-disabled:hover:-translate-x-full transition-transform duration-700">
// //                   <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
// //                 </div>
// //               </button>
// //             </div>
// //           </motion.form>
// //         </div>
// //       </Container>
// //     </section>
// //   );
// // });

// // ApplicationFormSection.displayName = "ApplicationFormSection";

// // // CTA Section
// // const CTASection = memo(() => (
// //   <section
// //     className="py-24 relative overflow-hidden"
// //     style={{
// //       background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
// //     }}
// //     aria-labelledby="cta-heading"
// //   >
// //     <div
// //       className="absolute inset-0 opacity-[0.03]"
// //       style={{
// //         backgroundImage:
// //           "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
// //         backgroundSize: "40px 40px",
// //       }}
// //       aria-hidden="true"
// //     />

// //     <Container>
// //       <motion.div
// //         initial={{ opacity: 0, y: 30 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         className="max-w-4xl mx-auto text-center relative z-10"
// //       >
// //         <h2
// //           id="cta-heading"
// //           className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
// //         >
// //           Don't See the{" "}
// //           <span style={{ color: BRAND.gold.primary }}>Right Role?</span>
// //         </h2>

// //         <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
// //           We're always looking for talented individuals. Send us your resume and
// //           we'll keep you in mind for future opportunities.
// //         </p>

// //         <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
// //           <Link
// //             to="/contact"
// //             className="group relative px-10 py-5 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
// //             style={{
// //               background: BRAND.gold.gradient,
// //               color: BRAND.navy.dark,
// //               boxShadow: `0 8px 30px ${BRAND.gold.primary}35`,
// //               "--tw-ring-color": BRAND.gold.primary,
// //             }}
// //           >
// //             <span className="relative z-10 flex items-center gap-2">
// //               Send General Application
// //               <FaArrowRight
// //                 className="text-sm group-hover:translate-x-1 transition-transform"
// //                 aria-hidden="true"
// //               />
// //             </span>
// //           </Link>

// //           <Link
// //             to="/contact"
// //             className="px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2"
// //             style={{
// //               border: "1px solid rgba(255,255,255,0.2)",
// //               color: "white",
// //               "--tw-ring-color": "rgba(255,255,255,0.5)",
// //             }}
// //           >
// //             Contact Recruiting Team →
// //           </Link>
// //         </div>
// //       </motion.div>
// //     </Container>
// //   </section>
// // ));

// // CTASection.displayName = "CTASection";

// // // ==================== MAIN COMPONENT ====================
// // const CareersPage = () => {
// //   const [selectedJob, setSelectedJob] = useState(null);

// //   return (
// //     <main role="main">
// //       <HeroSection />
// //       <BenefitsSection />
// //       {/* <PositionsSection
// //         selectedJob={selectedJob}
// //         setSelectedJob={setSelectedJob}
// //       /> */}
// //       {/* <ApplicationFormSection /> */}
// //       {/* <CTASection /> */}
// //     </main>
// //   );
// // };

// // export default memo(CareersPage);

// import React, {
//   useState,
//   useCallback,
//   useMemo,
//   useEffect,
//   useRef,
//   memo,
// } from "react";

// // ==================== CONSTANTS & CONFIG ====================
// const BRAND = {
//   navy: {
//     dark: "#0A1628",
//     mid: "#12324f",
//     light: "#143A63",
//     lighter: "#1A4570",
//   },
//   gold: { primary: "#FDB913", light: "#FFD54F" },
// };

// const BENEFITS = [
//   {
//     icon: "fa-laptop-code",
//     title: "Modern Tech Stack",
//     desc: "Work with cutting-edge technologies and tools that keep you ahead of the curve.",
//   },
//   {
//     icon: "fa-graduation-cap",
//     title: "Learning & Growth",
//     desc: "$5,000 annual learning budget plus certifications and conference sponsorships.",
//   },
//   {
//     icon: "fa-users",
//     title: "Great Culture",
//     desc: "Collaborative, inclusive, and fun work environment that feels like a second home.",
//   },
//   {
//     icon: "fa-chart-line",
//     title: "Career Growth",
//     desc: "Clear promotion paths and leadership opportunities tailored to your ambitions.",
//   },
//   {
//     icon: "fa-heart",
//     title: "Health & Wellness",
//     desc: "Comprehensive medical, dental, and vision coverage for you and your family.",
//   },
//   {
//     icon: "fa-globe-americas",
//     title: "Global Opportunities",
//     desc: "Work with clients across 30+ countries and expand your global perspective.",
//   },
// ];

// const POSITIONS = [
//   {
//     id: 1,
//     title: "Guidewire Developer",
//     department: "Engineering",
//     location: "Hyderabad",
//     type: "Full-Time",
//     experience: "3 – 5 Years",
//     image: "https://picsum.photos/seed/guidewire-pos/320/200.jpg",
//     description:
//       "We're looking for an experienced Guidewire Developer to design, develop, and implement Guidewire InsuranceSuite solutions. You'll work closely with business analysts and stakeholders to deliver high-quality P&C insurance platforms for enterprise clients.",
//   },
//   {
//     id: 2,
//     title: "Frontend Developer",
//     department: "Engineering",
//     location: "Remote",
//     type: "Full-Time",
//     experience: "2 – 4 Years",
//     image: "https://picsum.photos/seed/frontend-pos/320/200.jpg",
//     description:
//       "Build beautiful, performant web applications using React, Next.js, and modern CSS. Collaborate with designers and backend engineers to create seamless user experiences for enterprise clients across the globe.",
//   },
//   {
//     id: 3,
//     title: "QA Engineer",
//     department: "Quality",
//     location: "Hyderabad",
//     type: "Full-Time",
//     experience: "2 – 4 Years",
//     image: "https://picsum.photos/seed/qa-pos/320/200.jpg",
//     description:
//       "Design and execute comprehensive test strategies including automated testing with Selenium, Cypress, or Playwright. Ensure the highest quality standards for our software products and client deliverables.",
//   },
// ];

// const PROCESS_STEPS = [
//   {
//     num: 1,
//     title: "Apply Online",
//     desc: "Submit your resume and details through our application form.",
//   },
//   {
//     num: 2,
//     title: "Resume Screening",
//     desc: "Our team reviews your application and shortlists candidates.",
//   },
//   {
//     num: 3,
//     title: "Technical Interview",
//     desc: "Demonstrate your skills through assessments and coding challenges.",
//   },
//   {
//     num: 4,
//     title: "Manager Round",
//     desc: "Meet your future manager and discuss role expectations.",
//   },
//   {
//     num: 5,
//     title: "Offer & Onboarding",
//     desc: "Receive your offer letter and begin a smooth onboarding.",
//   },
// ];

// // ==================== CUSTOM HOOKS ====================

// /** IntersectionObserver-based scroll reveal */
// function useScrollReveal(threshold = 0.1) {
//   const ref = useRef(null);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const targets = el.querySelectorAll(".reveal");
//     if (!targets.length) return;

//     const observer = new IntersectionObserver(
//       (entries) =>
//         entries.forEach((e) => {
//           if (e.isIntersecting) e.target.classList.add("visible");
//         }),
//       { threshold, rootMargin: "0px 0px -30px 0px" },
//     );

//     targets.forEach((t) => observer.observe(t));
//     return () => observer.disconnect();
//   }, [threshold]);

//   return ref;
// }

// /** Lightweight toast system */
// function useToast() {
//   const [toast, setToast] = useState(null);

//   const show = useCallback((message, type = "success") => {
//     setToast({ message, type, id: Date.now() });
//     setTimeout(() => setToast(null), 4000);
//   }, []);

//   const ToastComponent = useMemo(
//     () =>
//       toast ? (
//         <div
//           key={toast.id}
//           className="fixed top-6 right-6 z-[9999] flex items-center gap-2.5 px-6 py-4 rounded-xl text-sm font-semibold shadow-2xl"
//           style={{
//             background: toast.type === "success" ? "#065F46" : "#7F1D1D",
//             color: toast.type === "success" ? "#A7F3D0" : "#FCA5A5",
//             animation: "slideIn 0.4s cubic-bezier(.22,1,.36,1) forwards",
//           }}
//           role="alert"
//         >
//           <i
//             className={`fa-solid ${toast.type === "success" ? "fa-circle-check" : "fa-circle-xmark"}`}
//           />
//           {toast.message}
//         </div>
//       ) : null,
//     [toast],
//   );

//   return { show, ToastComponent };
// }

// /** Form validation hook */
// function useFormValidation() {
//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     position: "",
//     message: "",
//     agreedToTerms: false,
//   });
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});

//   const validateField = useCallback((name, value) => {
//     switch (name) {
//       case "fullName":
//         if (!value.trim()) return "Full name is required";
//         if (value.length < 2) return "Name must be at least 2 characters";
//         return "";
//       case "email":
//         if (!value.trim()) return "Email is required";
//         if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
//           return "Please enter a valid email";
//         return "";
//       case "position":
//         if (!value) return "Please select a position";
//         return "";
//       default:
//         return "";
//     }
//   }, []);

//   const handleChange = useCallback(
//     (e) => {
//       const { name, value, type, checked } = e.target;
//       const newVal = type === "checkbox" ? checked : value;
//       setForm((prev) => ({ ...prev, [name]: newVal }));
//       if (touched[name]) {
//         const err = name === "agreedToTerms" ? "" : validateField(name, newVal);
//         setErrors((prev) => ({ ...prev, [name]: err }));
//       }
//     },
//     [touched, validateField],
//   );

//   const handleBlur = useCallback(
//     (e) => {
//       const { name, value } = e.target;
//       setTouched((prev) => ({ ...prev, [name]: true }));
//       if (name !== "agreedToTerms") {
//         const err = validateField(name, value);
//         setErrors((prev) => ({ ...prev, [name]: err }));
//       }
//     },
//     [validateField],
//   );

//   const isValid = useMemo(() => {
//     const fieldsOk = ["fullName", "email", "position"].every(
//       (key) => !validateField(key, form[key]),
//     );
//     return fieldsOk && form.agreedToTerms;
//   }, [form, validateField]);

//   const resetForm = useCallback(() => {
//     setForm({
//       fullName: "",
//       email: "",
//       phone: "",
//       position: "",
//       message: "",
//       agreedToTerms: false,
//     });
//     setErrors({});
//     setTouched({});
//   }, []);

//   return {
//     form,
//     errors,
//     touched,
//     handleChange,
//     handleBlur,
//     isValid,
//     resetForm,
//     setForm,
//   };
// }

// // ==================== REUSABLE UI PRIMITIVES ====================

// const SectionLabel = memo(({ children, light = false }) => (
//   <span
//     className="reveal inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
//     style={
//       light
//         ? {
//             background: `${BRAND.gold.primary}15`,
//             color: BRAND.gold.primary,
//             border: `1px solid ${BRAND.gold.primary}30`,
//           }
//         : {
//             background: `${BRAND.navy.mid}08`,
//             color: BRAND.navy.dark,
//             border: `1px solid ${BRAND.navy.mid}12`,
//           }
//     }
//   >
//     {children}
//   </span>
// ));

// const SectionTitle = memo(({ children, light = false, className = "" }) => (
//   <h2
//     className={`reveal text-4xl md:text-5xl font-extrabold mb-5 ${className}`}
//     style={{ color: light ? "#FFFFFF" : BRAND.navy.dark }}
//   >
//     {children}
//   </h2>
// ));

// const GoldSpan = memo(({ children }) => (
//   <span style={{ color: BRAND.gold.primary }}>{children}</span>
// ));

// const GoldButton = memo(({ children, className = "", ...props }) => (
//   <button
//     className={`group relative overflow-hidden rounded-xl font-bold text-navy-dark transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 ${className}`}
//     style={{
//       background:
//         "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
//       boxShadow: "0 8px 30px rgba(253,185,19,0.3)",
//       ["--tw-ring-color"]: BRAND.gold.primary,
//     }}
//     {...props}
//   >
//     <span className="relative z-10 flex items-center justify-center gap-3">
//       {children}
//     </span>
//     <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full group-disabled:hover:-translate-x-full transition-transform duration-700 pointer-events-none">
//       <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
//     </div>
//   </button>
// ));

// const GoldLink = memo(({ children, className = "", ...props }) => (
//   <a
//     className={`group relative inline-flex items-center overflow-hidden rounded-xl font-bold text-navy-dark transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
//     style={{
//       background:
//         "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
//       boxShadow: "0 8px 30px rgba(253,185,19,0.3)",
//       ["--tw-ring-color"]: BRAND.gold.primary,
//     }}
//     {...props}
//   >
//     <span className="relative z-10 flex items-center gap-2">{children}</span>
//     <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none">
//       <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
//     </div>
//   </a>
// ));

// // ==================== SUB-COMPONENTS ====================

// const HeroSection = memo(() => (
//   <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
//     <img
//       src="https://picsum.photos/seed/innovise-career-banner/1920/1080.jpg"
//       alt="Innovise Career"
//       className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8s] ease-out hover:scale-[1.03]"
//     />
//     <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/93 via-[#0A1628]/65 to-[#0A1628]/20" />
//     <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

//     <div className="relative z-10 h-full flex items-center">
//       <div className="max-w-2xl px-6 md:px-12 lg:px-20">
//         <p
//           className="reveal text-sm uppercase tracking-[0.25em] mb-5 font-bold"
//           style={{ color: BRAND.gold.primary }}
//         >
//           We're Hiring
//         </p>
//         <h1 className="reveal text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.12] mb-6">
//           Build the Future
//           <br />
//           With <GoldSpan>Innovise</GoldSpan>
//         </h1>
//         <p className="reveal text-lg md:text-xl text-white/60 leading-relaxed max-w-xl">
//           Join a global team of innovators shaping the future of technology.
//           Grow your skills, make real impact, and advance your career with us.
//         </p>
//         <div className="reveal mt-8 flex flex-wrap gap-4">
//           <GoldLink href="#positions" className="px-8 py-4 text-sm">
//             View Open Positions{" "}
//             <i className="fa-solid fa-arrow-right text-xs ml-1" />
//           </GoldLink>
//           <a
//             href="#application-form"
//             className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-sm border border-white/20 hover:bg-white/5 transition-colors"
//           >
//             Submit Resume
//           </a>
//         </div>
//       </div>
//     </div>
//   </section>
// ));

// const BenefitCard = memo(({ benefit }) => (
//   <div className="reveal benefit-card bg-white rounded-2xl p-8 relative">
//     <div
//       className="benefit-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
//       style={{
//         background: `${BRAND.gold.primary}10`,
//         border: `1px solid ${BRAND.gold.primary}20`,
//       }}
//     >
//       <i
//         className={`fa-solid ${benefit.icon} text-2xl`}
//         style={{ color: BRAND.gold.primary }}
//       />
//     </div>
//     <h3 className="text-xl font-bold mb-3" style={{ color: BRAND.navy.dark }}>
//       {benefit.title}
//     </h3>
//     <p className="text-sm leading-relaxed text-slate-500">{benefit.desc}</p>
//     <div
//       className="benefit-glow absolute bottom-0 right-0 w-24 h-24 rounded-full blur-2xl pointer-events-none"
//       style={{ background: BRAND.gold.primary }}
//     />
//   </div>
// ));

// const BenefitsSection = memo(() => (
//   <section className="py-20 bg-white relative overflow-hidden">
//     <div
//       className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.03] -translate-y-1/2 translate-x-1/2"
//       style={{ background: BRAND.navy.lighter }}
//     />
//     <div className="max-w-7xl mx-auto px-6 lg:px-8">
//       <header className="text-center max-w-3xl mx-auto mb-16">
//         <SectionLabel>Why Work With Us</SectionLabel>
//         <SectionTitle>
//           Why Join <GoldSpan>Our Team?</GoldSpan>
//         </SectionTitle>
//         <p className="reveal text-lg text-slate-500 leading-relaxed">
//           Exceptional benefits, growth opportunities, and a culture that truly
//           values your contributions.
//         </p>
//       </header>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 stagger-children">
//         {BENEFITS.map((b) => (
//           <BenefitCard key={b.title} benefit={b} />
//         ))}
//       </div>
//     </div>
//   </section>
// ));

// const MetaItem = memo(({ icon, text }) => (
//   <span className="flex items-center gap-1.5 text-white/55 text-sm">
//     <i
//       className={`fa-solid ${icon} text-xs`}
//       style={{ color: BRAND.gold.primary }}
//     />
//     {text}
//   </span>
// ));

// const PositionCard = memo(({ position, isActive, onToggle, onApply }) => {
//   const metaItems = useMemo(
//     () => [
//       { icon: "fa-briefcase", text: position.department },
//       { icon: "fa-location-dot", text: position.location },
//       { icon: "fa-clock", text: position.type },
//       { icon: "fa-graduation-cap", text: position.experience },
//     ],
//     [position],
//   );

//   return (
//     <div
//       className={`reveal position-card rounded-2xl bg-white/[0.03] p-6 lg:p-8 ${isActive ? "active" : ""}`}
//       onClick={onToggle}
//       onKeyDown={(e) => {
//         if (e.key === "Enter" || e.key === " ") {
//           e.preventDefault();
//           onToggle();
//         }
//       }}
//       tabIndex={0}
//       role="article"
//       aria-expanded={isActive}
//     >
//       <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
//         <div className="lg:w-32 h-20 flex-shrink-0 rounded-xl overflow-hidden">
//           <img
//             src={position.image}
//             alt=""
//             className="pos-img w-full h-full object-cover"
//             loading="lazy"
//           />
//         </div>
//         <div className="flex-grow w-full">
//           <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
//             <div>
//               <div className="flex items-center gap-3 mb-3 flex-wrap">
//                 <h3 className="text-xl lg:text-2xl font-bold text-white">
//                   {position.title}
//                 </h3>
//                 <span
//                   className="px-3 py-1 rounded-full text-xs font-bold"
//                   style={{
//                     background: `${BRAND.gold.primary}20`,
//                     color: BRAND.gold.primary,
//                     border: `1px solid ${BRAND.gold.primary}40`,
//                   }}
//                 >
//                   New
//                 </span>
//               </div>
//               <div className="flex flex-wrap gap-x-5 gap-y-2">
//                 {metaItems.map((m) => (
//                   <MetaItem key={m.icon} icon={m.icon} text={m.text} />
//                 ))}
//               </div>
//             </div>
//             <button
//               className={`view-btn flex-shrink-0 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
//                 isActive
//                   ? "view-btn-active"
//                   : "bg-white/[0.08] text-white border border-white/15 hover:bg-gold-primary hover:text-navy-dark hover:border-gold-primary"
//               }`}
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onToggle();
//               }}
//             >
//               {isActive ? (
//                 <>
//                   Selected <i className="fa-solid fa-check inline ml-1" />
//                 </>
//               ) : (
//                 "View Details"
//               )}
//             </button>
//           </div>

//           {/* Expandable area */}
//           <div
//             className={`expand-wrap ${isActive ? "open" : ""}`}
//             style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
//           >
//             <p className="text-gray-300 leading-relaxed mb-5">
//               {position.description}
//             </p>
//             <div className="flex flex-wrap gap-3">
//               <GoldLink
//                 href="#application-form"
//                 className="px-7 py-3.5 text-sm"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   onApply(position.title);
//                 }}
//               >
//                 <i className="fa-solid fa-paper-plane" /> Apply Now{" "}
//                 <i className="fa-solid fa-arrow-right text-xs" />
//               </GoldLink>
//               <button
//                 className="px-7 py-3.5 rounded-xl font-semibold text-sm text-white border border-dashed border-white/25 hover:bg-white/5 transition-colors"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 Save Job
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

// const PositionsSection = memo(({ activeId, onToggle, onApply }) => (
//   <section
//     id="positions"
//     className="py-24 relative overflow-hidden"
//     style={{
//       background: `linear-gradient(180deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 100%)`,
//     }}
//   >
//     <div className="absolute inset-0 dot-pattern opacity-[0.025]" />
//     <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
//       <header className="text-center max-w-3xl mx-auto mb-16">
//         <SectionLabel light>Current Openings</SectionLabel>
//         <SectionTitle light>
//           Open <GoldSpan>Positions</GoldSpan>
//         </SectionTitle>
//         <p className="reveal text-lg text-gray-400">
//           Find your perfect role and join our growing team of technology
//           professionals.
//         </p>
//       </header>
//       <div className="max-w-5xl mx-auto space-y-5">
//         {POSITIONS.map((pos) => (
//           <PositionCard
//             key={pos.id}
//             position={pos}
//             isActive={activeId === pos.id}
//             onToggle={() => onToggle(pos.id)}
//             onApply={onApply}
//           />
//         ))}
//       </div>
//     </div>
//   </section>
// ));

// const ErrorMsg = memo(({ msg }) =>
//   msg ? (
//     <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
//       <i className="fa-solid fa-circle-exclamation text-xs" /> {msg}
//     </p>
//   ) : null,
// );

// const FormField = memo(
//   ({
//     label,
//     name,
//     type = "text",
//     placeholder,
//     icon,
//     required,
//     value,
//     error,
//     touched,
//     onChange,
//     onBlur,
//     options,
//   }) => {
//     const isSelect = type === "select";
//     const showError = error && touched;

//     const inputClass = `form-input w-full ${icon ? "pl-11" : "px-4"} pr-4 py-3.5 rounded-xl ${isSelect ? "select-arrow appearance-none cursor-pointer" : ""} ${showError ? "error" : ""}`;

//     return (
//       <div>
//         <label
//           htmlFor={name}
//           className="block text-sm font-semibold mb-2"
//           style={{ color: BRAND.navy.dark }}
//         >
//           {label} {required && <span className="text-red-500">*</span>}
//         </label>
//         <div className="relative">
//           {icon && (
//             <i
//               className={`fa-solid ${icon} absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400`}
//             />
//           )}
//           {isSelect ? (
//             <select
//               id={name}
//               name={name}
//               value={value}
//               onChange={onChange}
//               onBlur={onBlur}
//               required={required}
//               className={inputClass}
//             >
//               <option value="">{placeholder}</option>
//               {options?.map((opt) => (
//                 <option key={opt} value={opt}>
//                   {opt}
//                 </option>
//               ))}
//             </select>
//           ) : (
//             <input
//               id={name}
//               name={name}
//               type={type}
//               value={value}
//               onChange={onChange}
//               onBlur={onBlur}
//               placeholder={placeholder}
//               required={required}
//               className={inputClass}
//             />
//           )}
//         </div>
//         {showError && <ErrorMsg msg={error} />}
//       </div>
//     );
//   },
// );

// const ApplicationFormSection = memo(({ prefillPosition }) => {
//   const {
//     form,
//     errors,
//     touched,
//     handleChange,
//     handleBlur,
//     isValid,
//     resetForm,
//     setForm,
//   } = useFormValidation();
//   const { show, ToastComponent } = useToast();

//   // Sync prefill from position cards
//   useEffect(() => {
//     if (prefillPosition && !form.position) {
//       setForm((prev) => ({ ...prev, position: prefillPosition }));
//     }
//   }, [prefillPosition, setForm, form.position]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!isValid) {
//       show("Please fix the errors in the form", "error");
//       return;
//     }
//     show(
//       "Application submitted successfully! We'll be in touch soon.",
//       "success",
//     );
//     resetForm();
//   };

//   const positionOptions = useMemo(() => POSITIONS.map((p) => p.title), []);

//   return (
//     <>
//       {ToastComponent}
//       <section
//         id="application-form"
//         className="py-24 bg-white relative overflow-hidden"
//       >
//         <div
//           className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.04]"
//           style={{ background: BRAND.gold.primary }}
//         />
//         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
//           <div className="max-w-4xl mx-auto">
//             <header className="text-center mb-12">
//               <SectionLabel>Apply Now</SectionLabel>
//               <SectionTitle>
//                 Ready to <GoldSpan>Join Us?</GoldSpan>
//               </SectionTitle>
//               <p className="reveal text-lg text-slate-500">
//                 Submit your application and our talent acquisition team will
//                 reach out shortly.
//               </p>
//             </header>

//             <form
//               onSubmit={handleSubmit}
//               noValidate
//               className="reveal rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
//             >
//               {/* Header Banner */}
//               <div
//                 className="relative h-48 md:h-56 overflow-hidden"
//                 style={{
//                   background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.lighter})`,
//                 }}
//               >
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="text-center">
//                     <div
//                       className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
//                       style={{
//                         background: "linear-gradient(135deg, #FDB913, #FFD54F)",
//                       }}
//                     >
//                       <i
//                         className="fa-solid fa-paper-plane text-2xl"
//                         style={{ color: BRAND.navy.dark }}
//                       />
//                     </div>
//                     <h3 className="text-2xl font-bold text-white">
//                       Start Your Journey
//                     </h3>
//                   </div>
//                 </div>
//               </div>

//               {/* Form Fields */}
//               <div className="p-8 md:p-12 space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <FormField
//                     label="Full Name"
//                     name="fullName"
//                     placeholder="John Doe"
//                     icon="fa-user"
//                     required
//                     value={form.fullName}
//                     error={errors.fullName}
//                     touched={touched.fullName}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                   />
//                   <FormField
//                     label="Email Address"
//                     name="email"
//                     type="email"
//                     placeholder="john@example.com"
//                     icon="fa-envelope"
//                     required
//                     value={form.email}
//                     error={errors.email}
//                     touched={touched.email}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                   />
//                   <FormField
//                     label="Phone Number"
//                     name="phone"
//                     type="tel"
//                     placeholder="+91 (555) 000-0000"
//                     icon="fa-phone"
//                     value={form.phone}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                   />
//                   <FormField
//                     label="Position"
//                     name="position"
//                     type="select"
//                     placeholder="Select a position..."
//                     required
//                     value={form.position}
//                     error={errors.position}
//                     touched={touched.position}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     options={positionOptions}
//                   />
//                 </div>

//                 {/* Message */}
//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="block text-sm font-semibold mb-2"
//                     style={{ color: BRAND.navy.dark }}
//                   >
//                     Cover Letter / Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={form.message}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     rows={5}
//                     placeholder="Tell us about yourself and why you'd be a great fit..."
//                     className="form-input w-full px-4 py-3.5 rounded-xl resize-none"
//                   />
//                 </div>

//                 {/* Terms */}
//                 <div>
//                   <div className="flex items-start gap-3">
//                     <input
//                       type="checkbox"
//                       id="terms"
//                       name="agreedToTerms"
//                       checked={form.agreedToTerms}
//                       onChange={handleChange}
//                       className="custom-check mt-1 w-5 h-5 rounded cursor-pointer"
//                       style={{ accentColor: BRAND.gold.primary }}
//                     />
//                     <label
//                       htmlFor="terms"
//                       className="text-sm text-slate-500 cursor-pointer leading-relaxed"
//                     >
//                       I agree to the{" "}
//                       <a
//                         href="#"
//                         className="font-semibold underline"
//                         style={{ color: BRAND.gold.primary }}
//                       >
//                         Privacy Policy
//                       </a>{" "}
//                       and consent to my data being processed for recruitment
//                       purposes.
//                     </label>
//                   </div>
//                   {errors.agreedToTerms && touched.agreedToTerms && (
//                     <ErrorMsg msg={errors.agreedToTerms} />
//                   )}
//                 </div>

//                 {/* Submit */}
//                 <GoldButton
//                   type="submit"
//                   disabled={!isValid}
//                   className="w-full py-5 text-lg"
//                 >
//                   <i className="fa-solid fa-paper-plane" /> Submit Application
//                   <i className="fa-solid fa-arrow-right text-sm group-hover:translate-x-1 transition-transform" />
//                 </GoldButton>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// });

// const ProcessStep = memo(({ step, isLast }) => (
//   <div className="reveal text-center relative">
//     {!isLast && <div className="hidden lg:block step-connector" />}
//     <div
//       className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 text-lg font-extrabold"
//       style={{
//         background: "linear-gradient(135deg, #FDB913, #FFD54F)",
//         color: BRAND.navy.dark,
//       }}
//     >
//       {step.num}
//     </div>
//     <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
//     <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
//   </div>
// ));

// const HiringProcessSection = memo(() => (
//   <section
//     className="py-24 relative overflow-hidden"
//     style={{
//       background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
//     }}
//   >
//     <div className="absolute inset-0 dot-pattern opacity-[0.025]" />
//     <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
//       <header className="text-center max-w-3xl mx-auto mb-16">
//         <SectionLabel light>How It Works</SectionLabel>
//         <SectionTitle light>
//           Our Hiring <GoldSpan>Process</GoldSpan>
//         </SectionTitle>
//         <p className="reveal text-lg text-gray-400">
//           A streamlined 5-step journey from application to onboarding.
//         </p>
//       </header>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 stagger-children">
//         {PROCESS_STEPS.map((step, i) => (
//           <ProcessStep
//             key={step.num}
//             step={step}
//             isLast={i === PROCESS_STEPS.length - 1}
//           />
//         ))}
//       </div>
//     </div>
//   </section>
// ));

// const CTASection = memo(() => (
//   <section
//     className="py-24 relative overflow-hidden"
//     style={{
//       background: `linear-gradient(135deg, ${BRAND.navy.mid}, ${BRAND.navy.dark})`,
//     }}
//   >
//     <div className="absolute inset-0 dot-pattern opacity-[0.02]" />
//     <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
//       <div className="reveal max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
//           Don't See the <GoldSpan>Right Role?</GoldSpan>
//         </h2>
//         <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
//           We're always looking for talented individuals. Send us your resume and
//           we'll keep you in mind for future opportunities.
//         </p>
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
//           <GoldLink href="#application-form" className="px-10 py-5 text-lg">
//             Submit General Resume{" "}
//             <i className="fa-solid fa-arrow-right text-sm" />
//           </GoldLink>
//           <a
//             href="#"
//             className="px-10 py-5 rounded-xl font-semibold text-lg text-white border border-white/20 hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50"
//           >
//             Contact Recruiting Team <span className="ml-1">→</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   </section>
// ));

// // ==================== MAIN PAGE COMPONENT ====================

// const CareersPage = () => {
//   const [activePositionId, setActivePositionId] = useState(null);
//   const [prefillPosition, setPrefillPosition] = useState(null);
//   const wrapperRef = useScrollReveal();

//   const handleTogglePosition = useCallback((id) => {
//     setActivePositionId((prev) => (prev === id ? null : id));
//   }, []);

//   const handleApply = useCallback((title) => {
//     setPrefillPosition(title);
//     // Smooth scroll handled by native anchor
//   }, []);

//   return (
//     <main ref={wrapperRef} role="main">
//       <HeroSection />
//       <BenefitsSection />
//       <PositionsSection
//         activeId={activePositionId}
//         onToggle={handleTogglePosition}
//         onApply={handleApply}
//       />
//       <ApplicationFormSection prefillPosition={prefillPosition} />
//       <HiringProcessSection />
//       <CTASection />
//     </main>
//   );
// };

// export default memo(CareersPage);

// import React, {
//   useState,
//   useCallback,
//   useMemo,
//   useEffect,
//   useRef,
//   memo,
// } from "react";
// import {
//   FaLaptopCode,
//   FaGraduationCap,
//   FaUsers,
//   FaChartLine,
//   FaHeart,
//   FaEarthAmericas,
//   FaBriefcase,
//   FaLocationDot,
//   FaClock,
//   FaUser,
//   FaEnvelope,
//   FaPhone,
//   FaPaperPlane,
//   FaArrowRight,
//   FaCheck,
//   FaCircleExclamation,
//   FaCircleCheck,
//   FaCircleXmark,
//   FaCloudArrowUp,
//   FaFilePdf,
//   FaFileWord,
//   FaFileLines,
//   FaXmark,
// } from "react-icons/fa6";

// // ==================== CONSTANTS ====================
// const BRAND = {
//   navy: {
//     dark: "#0A1628",
//     mid: "#12324f",
//     light: "#143A63",
//     lighter: "#1A4570",
//   },
//   gold: { primary: "#FDB913", light: "#FFD54F" },
// };

// const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
// const ACCEPTED_TYPES = [
//   "application/pdf",
//   "application/msword",
//   "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
// ];
// const ACCEPTED_EXTENSIONS = ".pdf,.doc,.docx";

// const BENEFITS = [
//   {
//     icon: FaLaptopCode,
//     title: "Modern Tech Stack",
//     desc: "Work with cutting-edge technologies and tools that keep you ahead of the curve.",
//   },
//   {
//     icon: FaGraduationCap,
//     title: "Learning & Growth",
//     desc: "$5,000 annual learning budget plus certifications and conference sponsorships.",
//   },
//   {
//     icon: FaUsers,
//     title: "Great Culture",
//     desc: "Collaborative, inclusive, and fun work environment that feels like a second home.",
//   },
//   {
//     icon: FaChartLine,
//     title: "Career Growth",
//     desc: "Clear promotion paths and leadership opportunities tailored to your ambitions.",
//   },
//   {
//     icon: FaHeart,
//     title: "Health & Wellness",
//     desc: "Comprehensive medical, dental, and vision coverage for you and your family.",
//   },
//   {
//     icon: FaEarthAmericas,
//     title: "Global Opportunities",
//     desc: "Work with clients across 30+ countries and expand your global perspective.",
//   },
// ];

// const POSITIONS = [
//   {
//     id: 1,
//     title: "Guidewire Developer",
//     department: "Engineering",
//     location: "Hyderabad",
//     type: "Full-Time",
//     experience: "3 – 5 Years",
//     image: "https://picsum.photos/seed/guidewire-pos/640/400.jpg",
//     description:
//       "We're looking for an experienced Guidewire Developer to design, develop, and implement Guidewire InsuranceSuite solutions. You'll work closely with business analysts and stakeholders to deliver high-quality P&C insurance platforms for enterprise clients.",
//     tags: ["Guidewire", "Java", "SQL", "InsuranceSuite"],
//     highlights: ["Enterprise Projects", "Client Facing", "Agile Team"],
//   },
//   {
//     id: 2,
//     title: "Frontend Developer",
//     department: "Engineering",
//     location: "Remote",
//     type: "Full-Time",
//     experience: "2 – 4 Years",
//     image: "https://picsum.photos/seed/frontend-pos/640/400.jpg",
//     description:
//       "Build beautiful, performant web applications using React, Next.js, and modern CSS. Collaborate with designers and backend engineers to create seamless user experiences for enterprise clients across the globe.",
//     tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
//     highlights: ["Remote First", "Modern Stack", "Open Source"],
//   },
//   {
//     id: 3,
//     title: "QA Engineer",
//     department: "Quality",
//     location: "Hyderabad",
//     type: "Full-Time",
//     experience: "2 – 4 Years",
//     image: "https://picsum.photos/seed/qa-pos/640/400.jpg",
//     description:
//       "Design and execute comprehensive test strategies including automated testing with Selenium, Cypress, or Playwright. Ensure the highest quality standards for our software products and client deliverables.",
//     tags: ["Selenium", "Cypress", "Playwright", "CI/CD"],
//     highlights: ["Automation Focus", "Cross-Team", "Quality Lead"],
//   },
// ];

// const PROCESS_STEPS = [
//   {
//     num: 1,
//     title: "Apply Online",
//     desc: "Submit your resume and details through our application form.",
//   },
//   {
//     num: 2,
//     title: "Resume Screening",
//     desc: "Our team reviews your application and shortlists candidates.",
//   },
//   {
//     num: 3,
//     title: "Technical Interview",
//     desc: "Demonstrate your skills through assessments and coding challenges.",
//   },
//   {
//     num: 4,
//     title: "Manager Round",
//     desc: "Meet your future manager and discuss role expectations.",
//   },
//   {
//     num: 5,
//     title: "Offer & Onboarding",
//     desc: "Receive your offer letter and begin a smooth onboarding.",
//   },
// ];

// const FORM_FIELDS = [
//   "fullName",
//   "email",
//   "phone",
//   "position",
//   "message",
//   "agreedToTerms",
// ];

// // ==================== CUSTOM HOOKS ====================

// function useScrollReveal(threshold = 0.1) {
//   const ref = useRef(null);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const targets = el.querySelectorAll(".reveal");
//     if (!targets.length) return;
//     const obs = new IntersectionObserver(
//       (entries) =>
//         entries.forEach((e) => {
//           if (e.isIntersecting) e.target.classList.add("visible");
//         }),
//       { threshold, rootMargin: "0px 0px -30px 0px" },
//     );
//     targets.forEach((t) => obs.observe(t));
//     return () => obs.disconnect();
//   }, [threshold]);
//   return ref;
// }

// function useToast() {
//   const [toast, setToast] = useState(null);
//   const show = useCallback((message, type = "success") => {
//     setToast({ message, type, id: Date.now() });
//     setTimeout(() => setToast(null), 4000);
//   }, []);
//   const ToastUI = useMemo(
//     () =>
//       toast ? (
//         <div
//           key={toast.id}
//           className="fixed top-6 right-6 z-[9999] flex items-center gap-2.5 px-6 py-4 rounded-xl text-sm font-semibold shadow-2xl"
//           style={{
//             background: toast.type === "success" ? "#065F46" : "#7F1D1D",
//             color: toast.type === "success" ? "#A7F3D0" : "#FCA5A5",
//             animation: "slideIn 0.4s cubic-bezier(.22,1,.36,1) forwards",
//           }}
//           role="alert"
//         >
//           {toast.type === "success" ? <FaCircleCheck /> : <FaCircleXmark />}
//           {toast.message}
//         </div>
//       ) : null,
//     [toast],
//   );
//   return { show, ToastUI };
// }

// /** Resume file state hook — separate from text form because File objects need special handling */
// function useResumeUpload() {
//   const [file, setFile] = useState(null);
//   const [error, setError] = useState("");
//   const [touched, setTouched] = useState(false);

//   const validateFile = useCallback((f) => {
//     if (!f) return "Please upload your resume";
//     if (!ACCEPTED_TYPES.includes(f.type))
//       return "Please upload a PDF, DOC, or DOCX file";
//     if (f.size > MAX_FILE_SIZE) return "File size must be less than 5MB";
//     return "";
//   }, []);

//   const selectFile = useCallback(
//     (f) => {
//       setTouched(true);
//       if (!f) {
//         setFile(null);
//         setError("Please upload your resume");
//         return;
//       }
//       const err = validateFile(f);
//       if (err) {
//         setFile(null);
//         setError(err);
//         return;
//       }
//       setFile(f);
//       setError("");
//     },
//     [validateFile],
//   );

//   const removeFile = useCallback(() => {
//     setFile(null);
//     // Keep touched=true so error shows if they submit without re-uploading
//   }, []);

//   const forceValidate = useCallback(() => {
//     setTouched(true);
//     const err = validateFile(file);
//     setError(err);
//     return !err;
//   }, [file, validateFile]);

//   const reset = useCallback(() => {
//     setFile(null);
//     setError("");
//     setTouched(false);
//   }, []);

//   return { file, error, touched, selectFile, removeFile, forceValidate, reset };
// }

// function useFormValidation() {
//   const initialForm = useMemo(
//     () => ({
//       fullName: "",
//       email: "",
//       phone: "",
//       position: "",
//       message: "",
//       agreedToTerms: false,
//     }),
//     [],
//   );

//   const [form, setForm] = useState(initialForm);
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});

//   const validateField = useCallback((name, value) => {
//     switch (name) {
//       case "fullName":
//         if (!value.trim()) return "Full name is required";
//         if (value.trim().length < 2)
//           return "Name must be at least 2 characters";
//         if (!/^[a-zA-Z\s'-]+$/.test(value.trim()))
//           return "Name can only contain letters, spaces, hyphens";
//         return "";
//       case "email":
//         if (!value.trim()) return "Email address is required";
//         if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()))
//           return "Please enter a valid email address";
//         return "";
//       case "position":
//         if (!value) return "Please select a position";
//         return "";
//       case "agreedToTerms":
//         if (!value) return "You must agree to the privacy policy to continue";
//         return "";
//       default:
//         return "";
//     }
//   }, []);

//   const validateAll = useCallback(() => {
//     const newErrors = {};
//     FORM_FIELDS.forEach((key) => {
//       const err = validateField(key, form[key]);
//       if (err) newErrors[key] = err;
//     });
//     return newErrors;
//   }, [form, validateField]);

//   const touchAll = useCallback(() => {
//     const allTouched = {};
//     FORM_FIELDS.forEach((key) => {
//       allTouched[key] = true;
//     });
//     setTouched(allTouched);
//   }, []);

//   const handleChange = useCallback(
//     (e) => {
//       const { name, value, type, checked } = e.target;
//       const newVal = type === "checkbox" ? checked : value;
//       setForm((prev) => ({ ...prev, [name]: newVal }));
//       if (touched[name]) {
//         setErrors((prev) => ({ ...prev, [name]: validateField(name, newVal) }));
//       }
//     },
//     [touched, validateField],
//   );

//   const handleBlur = useCallback(
//     (e) => {
//       const { name, value, type, checked } = e.target;
//       const val = type === "checkbox" ? checked : value;
//       setTouched((prev) => ({ ...prev, [name]: true }));
//       setErrors((prev) => ({ ...prev, [name]: validateField(name, val) }));
//     },
//     [validateField],
//   );

//   const isValid = useMemo(() => {
//     return FORM_FIELDS.every((k) => !validateField(k, form[k]));
//   }, [form, validateField]);

//   const forceValidate = useCallback(() => {
//     touchAll();
//     const allErrors = validateAll();
//     setErrors(allErrors);
//     return Object.keys(allErrors).length === 0;
//   }, [touchAll, validateAll]);

//   const resetForm = useCallback(() => {
//     setForm(initialForm);
//     setErrors({});
//     setTouched({});
//   }, [initialForm]);

//   return {
//     form,
//     errors,
//     touched,
//     handleChange,
//     handleBlur,
//     isValid,
//     forceValidate,
//     resetForm,
//     setForm,
//   };
// }

// // ==================== REUSABLE UI ====================

// const SectionLabel = memo(({ children, light = false }) => (
//   <span
//     className="reveal inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
//     style={
//       light
//         ? {
//             background: `${BRAND.gold.primary}15`,
//             color: BRAND.gold.primary,
//             border: `1px solid ${BRAND.gold.primary}30`,
//           }
//         : {
//             background: `${BRAND.navy.mid}08`,
//             color: BRAND.navy.dark,
//             border: `1px solid ${BRAND.navy.mid}12`,
//           }
//     }
//   >
//     {children}
//   </span>
// ));

// const SectionTitle = memo(({ children, light = false, className = "" }) => (
//   <h2
//     className={`reveal text-4xl md:text-5xl font-extrabold mb-5 ${className}`}
//     style={{ color: light ? "#fff" : BRAND.navy.dark }}
//   >
//     {children}
//   </h2>
// ));

// const Gold = memo(({ children }) => (
//   <span style={{ color: BRAND.gold.primary }}>{children}</span>
// ));

// const GoldButton = memo(({ children, className = "", ...props }) => (
//   <button
//     className={`group relative overflow-hidden rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 ${className}`}
//     style={{
//       background:
//         "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
//       color: BRAND.navy.dark,
//       boxShadow: "0 8px 30px rgba(253,185,19,0.3)",
//       ["--tw-ring-color"]: BRAND.gold.primary,
//     }}
//     {...props}
//   >
//     <span className="relative z-10 flex items-center justify-center gap-3">
//       {children}
//     </span>
//     <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full group-disabled:hover:-translate-x-full transition-transform duration-700 pointer-events-none">
//       <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
//     </div>
//   </button>
// ));

// const GoldLink = memo(({ children, className = "", onClick, ...props }) => (
//   <a
//     className={`group relative inline-flex items-center overflow-hidden rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
//     style={{
//       background:
//         "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
//       color: BRAND.navy.dark,
//       boxShadow: "0 8px 30px rgba(253,185,19,0.3)",
//       ["--tw-ring-color"]: BRAND.gold.primary,
//     }}
//     onClick={onClick}
//     {...props}
//   >
//     <span className="relative z-10 flex items-center gap-2">{children}</span>
//     <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none">
//       <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
//     </div>
//   </a>
// ));

// // ==================== SECTIONS ====================

// /* ---------- HERO ---------- */
// const HeroSection = memo(() => (
//   <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
//     <img
//       src="https://picsum.photos/seed/innovise-career-banner/1920/1080.jpg"
//       alt="Innovise Career"
//       className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8s] ease-out hover:scale-[1.03]"
//     />
//     <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/93 via-[#0A1628]/65 to-[#0A1628]/20" />
//     {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" /> */}
//     <div className="relative z-10 h-full flex items-center">
//       <div className="max-w-2xl px-6 md:px-12 lg:px-20">
//         <p
//           className="reveal text-sm uppercase tracking-[0.25em] mb-5 font-bold"
//           style={{ color: BRAND.gold.primary }}
//         >
//           We're Hiring
//         </p>
//         <h1 className="reveal text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.12] mb-6">
//           Build the Future
//           <br />
//           With <Gold>Innovise</Gold>
//         </h1>
//         <p className="reveal text-lg md:text-xl text-white/60 leading-relaxed max-w-xl">
//           Join a global team of innovators shaping the future of technology.
//           Grow your skills, make real impact, and advance your career with us.
//         </p>
//         <div className="reveal mt-8 flex flex-wrap gap-4">
//           <GoldLink href="#positions" className="px-8 py-4 text-sm">
//             View Open Positions <FaArrowRight className="text-xs ml-1" />
//           </GoldLink>
//           <a
//             href="#application-form"
//             className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-sm border border-white/20 hover:bg-white/5 transition-colors"
//           >
//             Submit Resume
//           </a>
//         </div>
//       </div>
//     </div>
//   </section>
// ));

// /* ---------- BENEFITS ---------- */
// const BenefitCard = memo(({ benefit }) => {
//   const Icon = benefit.icon;
//   return (
//     <div className="reveal benefit-card bg-white rounded-2xl p-8 relative">
//       <div
//         className="benefit-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
//         style={{
//           background: `${BRAND.gold.primary}10`,
//           border: `1px solid ${BRAND.gold.primary}20`,
//         }}
//       >
//         <Icon className="text-2xl" style={{ color: BRAND.gold.primary }} />
//       </div>
//       <h3 className="text-xl font-bold mb-3" style={{ color: BRAND.navy.dark }}>
//         {benefit.title}
//       </h3>
//       <p className="text-sm leading-relaxed text-slate-500">{benefit.desc}</p>
//       <div
//         className="benefit-glow absolute bottom-0 right-0 w-24 h-24 rounded-full blur-2xl pointer-events-none"
//         style={{ background: BRAND.gold.primary }}
//       />
//     </div>
//   );
// });

// const BenefitsSection = memo(() => (
//   <section className="py-12 bg-white relative overflow-hidden">
//     <div className="max-w-7xl mx-auto px-6 lg:px-8">
//       <header className="text-center max-w-3xl mx-auto mb-16">
//         <SectionLabel>Why Work With Us</SectionLabel>
//         <SectionTitle>
//           Why Join <Gold>Our Team?</Gold>
//         </SectionTitle>
//         <p className="reveal text-lg text-slate-500 leading-relaxed">
//           Exceptional benefits, growth opportunities, and a culture that truly
//           values your contributions.
//         </p>
//       </header>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 stagger-children">
//         {BENEFITS.map((b) => (
//           <BenefitCard key={b.title} benefit={b} />
//         ))}
//       </div>
//     </div>
//   </section>
// ));

// /* ---------- POSITIONS ---------- */
// const PositionCard = memo(({ position, onApply }) => {
//   const [hovered, setHovered] = useState(false);
//   return (
//     <article
//       className="reveal group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
//       style={{
//         background: hovered
//           ? "linear-gradient(160deg, #1A4570 0%, #12324f 100%)"
//           : "rgba(255,255,255,0.03)",
//         border: `1px solid ${hovered ? "rgba(253,185,19,0.4)" : "rgba(255,255,255,0.07)"}`,
//         boxShadow: hovered
//           ? "0 24px 60px rgba(253,185,19,0.12)"
//           : "0 4px 20px rgba(0,0,0,0.1)",
//       }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div className="relative h-48 overflow-hidden">
//         <img
//           src={position.image}
//           alt=""
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//           loading="lazy"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/40 to-transparent" />
//         <div className="absolute top-4 left-4">
//           <span
//             className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold backdrop-blur-md"
//             style={{
//               background: `${BRAND.gold.primary}25`,
//               color: BRAND.gold.primary,
//               border: `1px solid ${BRAND.gold.primary}35`,
//             }}
//           >
//             <FaBriefcase className="text-[10px]" />
//             {position.department}
//           </span>
//         </div>
//         <div className="absolute top-4 right-4">
//           <span
//             className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white/80 backdrop-blur-md"
//             style={{
//               background: "rgba(0,0,0,0.4)",
//               border: "1px solid rgba(255,255,255,0.1)",
//             }}
//           >
//             <FaGraduationCap className="text-[10px]" />
//             {position.experience}
//           </span>
//         </div>
//         <div className="absolute bottom-4 left-4 flex items-center gap-3">
//           <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/70">
//             <FaLocationDot
//               className="text-[10px]"
//               style={{ color: BRAND.gold.primary }}
//             />
//             {position.location}
//           </span>
//           <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/70">
//             <FaClock
//               className="text-[10px]"
//               style={{ color: BRAND.gold.primary }}
//             />
//             {position.type}
//           </span>
//         </div>
//       </div>
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-white mb-3">{position.title}</h3>
//         <p className="text-sm text-gray-400 leading-relaxed mb-5 line-clamp-3">
//           {position.description}
//         </p>
//         <div className="flex flex-wrap gap-2 mb-5">
//           {position.tags.map((tag) => (
//             <span
//               key={tag}
//               className="px-3 py-1 rounded-md text-[11px] font-semibold tracking-wide transition-colors"
//               style={{
//                 background: hovered
//                   ? `${BRAND.gold.primary}15`
//                   : "rgba(255,255,255,0.06)",
//                 color: hovered ? BRAND.gold.primary : "rgba(255,255,255,0.5)",
//                 border: `1px solid ${hovered ? `${BRAND.gold.primary}30` : "rgba(255,255,255,0.08)"}`,
//               }}
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//         <div className="flex flex-wrap gap-3 mb-6">
//           {position.highlights.map((h) => (
//             <span
//               key={h}
//               className="flex items-center gap-1.5 text-xs text-gray-500"
//             >
//               <FaCheck
//                 className="text-[10px]"
//                 style={{ color: BRAND.gold.primary }}
//               />
//               {h}
//             </span>
//           ))}
//         </div>
//         <GoldButton
//           className="w-full py-3.5 text-sm"
//           onClick={() => onApply(position.title)}
//         >
//           <FaPaperPlane className="text-sm" />
//           Apply Now
//           <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
//         </GoldButton>
//       </div>
//     </article>
//   );
// });

// const PositionsSection = memo(({ onApply }) => (
//   <section
//     id="positions"
//     className="py-12 relative overflow-hidden bg-primary-800"
//   >
//     <div className="absolute inset-0 dot-pattern opacity-[0.025]" />
//     <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
//       <header className="text-center max-w-3xl mx-auto mb-16">
//         <SectionLabel light>Current Openings</SectionLabel>
//         <SectionTitle light>
//           Open <Gold>Positions</Gold>
//         </SectionTitle>
//         <p className="reveal text-lg text-gray-400">
//           Find your perfect role and join our growing team of technology
//           professionals.
//         </p>
//         <div
//           className="reveal mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
//           style={{
//             background: `${BRAND.gold.primary}15`,
//             color: BRAND.gold.primary,
//             border: `1px solid ${BRAND.gold.primary}25`,
//           }}
//         >
//           <FaBriefcase className="text-xs" />
//           {POSITIONS.length} Open Positions
//         </div>
//       </header>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 stagger-children">
//         {POSITIONS.map((pos) => (
//           <PositionCard key={pos.id} position={pos} onApply={onApply} />
//         ))}
//       </div>
//     </div>
//   </section>
// ));

// /* ---------- FORM COMPONENTS ---------- */

// const FieldError = memo(({ message }) => {
//   if (!message) return null;
//   return (
//     <div className="mt-1.5 flex items-start gap-1.5 animate-[fadeSlideIn_0.25s_ease-out]">
//       <FaCircleExclamation className="text-xs mt-0.5 flex-shrink-0 text-red-500" />
//       <span className="text-sm text-red-500 leading-snug">{message}</span>
//     </div>
//   );
// });

// const FormField = memo(
//   ({
//     label,
//     name,
//     type = "text",
//     placeholder,
//     icon: Icon,
//     required,
//     value,
//     error,
//     touched,
//     onChange,
//     onBlur,
//     options,
//   }) => {
//     const isSelect = type === "select";
//     const hasError = error && touched;
//     const baseCls =
//       "w-full rounded-xl transition-all duration-200 outline-none text-sm";
//     const stateCls = hasError
//       ? "border-red-400 bg-red-50/50 focus:border-red-400 focus:ring-red-100"
//       : "border-[#E2E8F0] bg-[#F8FAFC] focus:border-[#FDB913] focus:ring-[rgba(253,185,19,0.15)]";
//     const iconColor = hasError ? "#EF4444" : "#94A3B8";

//     return (
//       <div>
//         <label
//           htmlFor={name}
//           className="block text-sm font-semibold mb-2"
//           style={{ color: BRAND.navy.dark }}
//         >
//           {label} {required && <span className="text-red-500">*</span>}
//         </label>
//         <div className="relative">
//           {Icon && (
//             <Icon
//               className="absolute left-4 top-1/2 -translate-y-1/2 text-sm transition-colors duration-200"
//               style={{ color: iconColor }}
//             />
//           )}
//           {isSelect ? (
//             <select
//               id={name}
//               name={name}
//               value={value}
//               onChange={onChange}
//               onBlur={onBlur}
//               required={required}
//               className={`${baseCls} ${stateCls} pl-11 pr-10 py-3.5 select-arrow appearance-none cursor-pointer focus:ring-2`}
//             >
//               <option value="">{placeholder}</option>
//               {options?.map((o) => (
//                 <option key={o} value={o}>
//                   {o}
//                 </option>
//               ))}
//             </select>
//           ) : (
//             <input
//               id={name}
//               name={name}
//               type={type}
//               value={value}
//               onChange={onChange}
//               onBlur={onBlur}
//               placeholder={placeholder}
//               required={required}
//               className={`${baseCls} ${stateCls} ${Icon ? "pl-11" : "px-4"} pr-4 py-3.5 focus:ring-2`}
//             />
//           )}
//         </div>
//         <FieldError message={hasError ? error : ""} />
//       </div>
//     );
//   },
// );

// const TermsCheckbox = memo(({ checked, error, touched, onChange, onBlur }) => {
//   const hasError = error && touched;
//   return (
//     <div>
//       <label
//         className="flex items-start gap-3 cursor-pointer group"
//         htmlFor="terms"
//       >
//         <div className="relative mt-0.5 flex-shrink-0">
//           <input
//             type="checkbox"
//             id="terms"
//             name="agreedToTerms"
//             checked={checked}
//             onChange={onChange}
//             onBlur={onBlur}
//             className="peer sr-only"
//           />
//           <div
//             className="w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200"
//             style={{
//               borderColor: hasError
//                 ? "#EF4444"
//                 : checked
//                   ? BRAND.gold.primary
//                   : "#CBD5E1",
//               background: checked ? BRAND.gold.primary : "transparent",
//             }}
//           >
//             <FaCheck
//               className="text-[10px] transition-opacity duration-150"
//               style={{ color: BRAND.navy.dark, opacity: checked ? 1 : 0 }}
//             />
//           </div>
//         </div>
//         <span className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
//           I agree to the{" "}
//           <a
//             href="#"
//             className="font-semibold underline"
//             style={{ color: BRAND.gold.primary }}
//           >
//             Privacy Policy
//           </a>{" "}
//           and consent to my data being processed for recruitment purposes.
//         </span>
//       </label>
//       <div className="ml-8">
//         <FieldError message={hasError ? error : ""} />
//       </div>
//     </div>
//   );
// });

// /* ---------- RESUME UPLOAD COMPONENT ---------- */
// const ResumeUpload = memo(
//   ({ file, error, touched, onFileSelect, onFileRemove }) => {
//     const [isDragging, setIsDragging] = useState(false);
//     const inputRef = useRef(null);
//     const hasError = error && touched;

//     const formatSize = useCallback((bytes) => {
//       if (bytes < 1024) return `${bytes} B`;
//       if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
//       return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
//     }, []);

//     const getFileIcon = useCallback(() => {
//       if (!file) return null;
//       const ext = file.name.split(".").pop().toLowerCase();
//       if (ext === "pdf") return <FaFilePdf className="text-2xl text-red-500" />;
//       if (ext === "doc" || ext === "docx")
//         return <FaFileWord className="text-2xl text-blue-600" />;
//       return <FaFileLines className="text-2xl text-slate-400" />;
//     }, [file]);

//     const handleFile = useCallback(
//       (f) => {
//         if (!f) return;
//         onFileSelect(f);
//       },
//       [onFileSelect],
//     );

//     const handleDrop = useCallback(
//       (e) => {
//         e.preventDefault();
//         setIsDragging(false);
//         handleFile(e.dataTransfer.files[0]);
//       },
//       [handleFile],
//     );

//     const handleDragOver = useCallback((e) => {
//       e.preventDefault();
//       setIsDragging(true);
//     }, []);
//     const handleDragLeave = useCallback((e) => {
//       e.preventDefault();
//       setIsDragging(false);
//     }, []);

//     const handleInputChange = useCallback(
//       (e) => {
//         handleFile(e.target.files[0]);
//         e.target.value = "";
//       },
//       [handleFile],
//     );

//     const handleRemove = useCallback(
//       (e) => {
//         e.stopPropagation();
//         onFileRemove();
//       },
//       [onFileRemove],
//     );

//     const handleClick = useCallback(() => {
//       if (!file) inputRef.current?.click();
//     }, [file]);

//     // Border style based on state
//     const borderStyle = hasError
//       ? "border-2 border-dashed border-red-400 bg-red-50/30"
//       : isDragging
//         ? "border-2 border-dashed border-[#FDB913] bg-[#FDB913]/5"
//         : file
//           ? "border-2 border-solid border-[#FDB913]/30 bg-[#FDB913]/5"
//           : "border-2 border-dashed border-[#CBD5E1] bg-[#F8FAFC] hover:border-[#FDB913]/50 hover:bg-[#FDB913]/5";

//     return (
//       <div>
//         <label
//           className="block text-sm font-semibold mb-2"
//           style={{ color: BRAND.navy.dark }}
//         >
//           Upload Resume <span className="text-red-500">*</span>
//         </label>

//         {/* Drop Zone / File Card */}
//         <div
//           onClick={handleClick}
//           onDrop={handleDrop}
//           onDragOver={handleDragOver}
//           onDragLeave={handleDragLeave}
//           className={`relative rounded-xl transition-all duration-300 cursor-pointer ${borderStyle}`}
//           role="button"
//           tabIndex={0}
//           aria-label={file ? `Uploaded: ${file.name}` : "Upload resume"}
//           onKeyDown={(e) => {
//             if (e.key === "Enter" || e.key === " ") {
//               e.preventDefault();
//               handleClick();
//             }
//           }}
//         >
//           <input
//             ref={inputRef}
//             type="file"
//             accept={ACCEPTED_EXTENSIONS}
//             onChange={handleInputChange}
//             className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//             tabIndex={-1}
//             aria-hidden="true"
//           />

//           {file ? (
//             /* ---- File Selected State ---- */
//             <div className="flex items-center gap-4 p-5">
//               <div
//                 className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
//                 style={{ background: `${BRAND.gold.primary}12` }}
//               >
//                 {getFileIcon()}
//               </div>
//               <div className="flex-grow min-w-0">
//                 <p
//                   className="text-sm font-semibold truncate"
//                   style={{ color: BRAND.navy.dark }}
//                 >
//                   {file.name}
//                 </p>
//                 <p className="text-xs text-slate-400 mt-0.5">
//                   {formatSize(file.size)} • Ready to submit
//                 </p>
//               </div>
//               <div className="flex items-center gap-3 flex-shrink-0">
//                 <span
//                   className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold"
//                   style={{
//                     background: `${BRAND.gold.primary}18`,
//                     color: BRAND.gold.primary,
//                   }}
//                 >
//                   <FaCheck className="text-[9px]" /> Uploaded
//                 </span>
//                 <button
//                   type="button"
//                   onClick={handleRemove}
//                   className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200"
//                   aria-label="Remove file"
//                 >
//                   <FaXmark className="text-sm" />
//                 </button>
//               </div>
//             </div>
//           ) : (
//             /* ---- Empty / Drag State ---- */
//             <div className="flex flex-col items-center justify-center py-10 px-6">
//               <div
//                 className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300"
//                 style={{
//                   background: isDragging
//                     ? `${BRAND.gold.primary}20`
//                     : `${BRAND.gold.primary}10`,
//                   border: `1px solid ${isDragging ? `${BRAND.gold.primary}40` : `${BRAND.gold.primary}20`}`,
//                   transform: isDragging
//                     ? "scale(1.1) translateY(-2px)"
//                     : "scale(1)",
//                 }}
//               >
//                 <FaCloudArrowUp
//                   className="text-2xl"
//                   style={{ color: BRAND.gold.primary }}
//                 />
//               </div>
//               <p
//                 className="text-sm font-semibold mb-1"
//                 style={{ color: BRAND.navy.dark }}
//               >
//                 {isDragging
//                   ? "Drop your resume here"
//                   : "Drag & drop your resume here"}
//               </p>
//               <p className="text-sm text-slate-400">
//                 or{" "}
//                 <span
//                   className="font-semibold underline"
//                   style={{ color: BRAND.gold.primary }}
//                 >
//                   browse files
//                 </span>{" "}
//                 to upload
//               </p>
//               <p className="text-xs text-slate-400 mt-3 flex items-center gap-2">
//                 <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-medium">
//                   PDF
//                 </span>
//                 <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-medium">
//                   DOC
//                 </span>
//                 <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-medium">
//                   DOCX
//                 </span>
//                 <span className="text-slate-300">•</span>
//                 Max 5MB
//               </p>
//             </div>
//           )}
//         </div>

//         <FieldError message={hasError ? error : ""} />
//       </div>
//     );
//   },
// );

// const SuccessState = memo(({ onReset }) => (
//   <div className="p-12 md:p-16 text-center animate-[fadeSlideIn_0.4s_ease-out]">
//     <div
//       className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
//       style={{ background: `${BRAND.gold.primary}15` }}
//     >
//       <FaCircleCheck
//         className="text-4xl"
//         style={{ color: BRAND.gold.primary }}
//       />
//     </div>
//     <h3
//       className="text-2xl font-extrabold mb-3"
//       style={{ color: BRAND.navy.dark }}
//     >
//       Application Submitted!
//     </h3>
//     <p className="text-slate-500 leading-relaxed mb-8 max-w-md mx-auto">
//       Thank you for applying. Our talent acquisition team will review your
//       application and get back to you within 3–5 business days.
//     </p>
//     <button
//       type="button"
//       onClick={onReset}
//       className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-colors hover:bg-slate-100"
//       style={{
//         color: BRAND.navy.dark,
//         border: `1px solid ${BRAND.navy.mid}20`,
//       }}
//     >
//       Submit Another Application <FaArrowRight className="text-xs" />
//     </button>
//   </div>
// ));

// /* ---------- APPLICATION FORM SECTION ---------- */
// const ApplicationFormSection = memo(({ prefillPosition }) => {
//   const {
//     form,
//     errors,
//     touched,
//     handleChange,
//     handleBlur,
//     isValid,
//     forceValidate,
//     resetForm,
//     setForm,
//   } = useFormValidation();
//   const resume = useResumeUpload();
//   const { show, ToastUI } = useToast();
//   const formRef = useRef(null);
//   const [submitted, setSubmitted] = useState(false);

//   // Combined validity: text form + resume
//   const isFullyValid = useMemo(
//     () => isValid && !!resume.file,
//     [isValid, resume.file],
//   );

//   // Prefill position from position cards
//   useEffect(() => {
//     if (prefillPosition && !form.position && !submitted) {
//       setForm((prev) => ({ ...prev, position: prefillPosition }));
//       setTimeout(() => {
//         formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//       }, 100);
//     }
//   }, [prefillPosition, setForm, form.position, submitted]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formValid = forceValidate();
//     const resumeValid = resume.forceValidate();
//     if (!formValid || !resumeValid) {
//       show("Please fix the highlighted errors below", "error");
//       const firstErr = document.querySelector(".field-error-scroll");
//       firstErr?.scrollIntoView({ behavior: "smooth", block: "center" });
//       return;
//     }
//     show(
//       "Application submitted successfully! We'll be in touch soon.",
//       "success",
//     );
//     setSubmitted(true);
//     resetForm();
//     resume.reset();
//   };

//   const handleReset = useCallback(() => {
//     setSubmitted(false);
//     resetForm();
//     resume.reset();
//   }, [resetForm, resume]);

//   const positionOptions = useMemo(() => POSITIONS.map((p) => p.title), []);

//   return (
//     <>
//       {ToastUI}
//       <section
//         id="application-form"
//         ref={formRef}
//         className="py-12 bg-white relative overflow-hidden scroll-mt-8"
//       >
//         <div
//           className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.04]"
//           style={{ background: BRAND.gold.primary }}
//         />
//         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
//           <div className="max-w-4xl mx-auto">
//             <header className="text-center mb-12">
//               <SectionLabel>Apply Now</SectionLabel>
//               <SectionTitle>
//                 Ready to <Gold>Join Us?</Gold>
//               </SectionTitle>
//               <p className="reveal text-lg text-slate-500">
//                 Submit your application and our talent acquisition team will
//                 reach out shortly.
//               </p>
//             </header>

//             <div className="reveal rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
//               {!submitted && (
//                 <div
//                   className="relative h-8 md:h-36 overflow-hidden"
//                   style={{
//                     background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.lighter})`,
//                   }}
//                 >
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="text-center">
//                       <div
//                         className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
//                         style={{
//                           background:
//                             "linear-gradient(135deg, #FDB913, #FFD54F)",
//                         }}
//                       >
//                         <FaPaperPlane
//                           className="text-2xl"
//                           style={{ color: BRAND.navy.dark }}
//                         />
//                       </div>
//                       <h3 className="text-2xl font-bold text-white">
//                         Start Your Journey
//                       </h3>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {submitted ? (
//                 <SuccessState onReset={handleReset} />
//               ) : (
//                 <form
//                   onSubmit={handleSubmit}
//                   noValidate
//                   className="p-8 md:p-12 space-y-6"
//                 >
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div
//                       className={
//                         errors.fullName && touched.fullName
//                           ? "field-error-scroll"
//                           : ""
//                       }
//                     >
//                       <FormField
//                         label="Full Name"
//                         name="fullName"
//                         placeholder="John Doe"
//                         icon={FaUser}
//                         required
//                         value={form.fullName}
//                         error={errors.fullName}
//                         touched={touched.fullName}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                       />
//                     </div>
//                     <div
//                       className={
//                         errors.email && touched.email
//                           ? "field-error-scroll"
//                           : ""
//                       }
//                     >
//                       <FormField
//                         label="Email Address"
//                         name="email"
//                         type="email"
//                         placeholder="john@example.com"
//                         icon={FaEnvelope}
//                         required
//                         value={form.email}
//                         error={errors.email}
//                         touched={touched.email}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                       />
//                     </div>
//                     <FormField
//                       label="Phone Number"
//                       name="phone"
//                       type="tel"
//                       placeholder="+91 (555) 000-0000"
//                       icon={FaPhone}
//                       value={form.phone}
//                       error={errors.phone}
//                       touched={touched.phone}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     <div
//                       className={
//                         errors.position && touched.position
//                           ? "field-error-scroll"
//                           : ""
//                       }
//                     >
//                       <FormField
//                         label="Position"
//                         name="position"
//                         type="select"
//                         placeholder="Select a position..."
//                         required
//                         value={form.position}
//                         error={errors.position}
//                         touched={touched.position}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         options={positionOptions}
//                       />
//                     </div>
//                   </div>

//                   {/* Resume Upload — Full Width */}
//                   <div
//                     className={
//                       resume.error && resume.touched ? "field-error-scroll" : ""
//                     }
//                   >
//                     <ResumeUpload
//                       file={resume.file}
//                       error={resume.error}
//                       touched={resume.touched}
//                       onFileSelect={resume.selectFile}
//                       onFileRemove={resume.removeFile}
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="message"
//                       className="block text-sm font-semibold mb-2"
//                       style={{ color: BRAND.navy.dark }}
//                     >
//                       Cover Letter / Message
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={form.message}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       rows={5}
//                       placeholder="Tell us about yourself and why you'd be a great fit..."
//                       className="form-input w-full px-4 py-3.5 rounded-xl resize-none text-sm"
//                     />
//                   </div>

//                   <div
//                     className={
//                       errors.agreedToTerms && touched.agreedToTerms
//                         ? "field-error-scroll"
//                         : ""
//                     }
//                   >
//                     <TermsCheckbox
//                       checked={form.agreedToTerms}
//                       error={errors.agreedToTerms}
//                       touched={touched.agreedToTerms}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                   </div>

//                   <GoldButton
//                     type="submit"
//                     disabled={!isFullyValid}
//                     className="w-full py-5 text-lg"
//                   >
//                     <FaPaperPlane />
//                     Submit Application
//                     <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
//                   </GoldButton>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// });

// /* ---------- HIRING PROCESS ---------- */
// const ProcessStep = memo(({ step, isLast }) => (
//   <div className="reveal text-center relative">
//     {!isLast && <div className="hidden lg:block step-connector" />}
//     <div
//       className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 text-lg font-extrabold"
//       style={{
//         background: "linear-gradient(135deg, #FDB913, #FFD54F)",
//         color: BRAND.navy.dark,
//       }}
//     >
//       {step.num}
//     </div>
//     <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
//     <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
//   </div>
// ));

// const HiringProcessSection = memo(() => (
//   <section className="py-12 relative overflow-hidden bg-primary-800">
//     <div className="absolute inset-0 dot-pattern opacity-[0.025]" />
//     <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
//       <header className="text-center max-w-3xl mx-auto mb-16">
//         <SectionLabel light>How It Works</SectionLabel>
//         <SectionTitle light>
//           Our Hiring <Gold>Process</Gold>
//         </SectionTitle>
//         <p className="reveal text-lg text-gray-400">
//           A streamlined 5-step journey from application to onboarding.
//         </p>
//       </header>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 stagger-children">
//         {PROCESS_STEPS.map((s, i) => (
//           <ProcessStep
//             key={s.num}
//             step={s}
//             isLast={i === PROCESS_STEPS.length - 1}
//           />
//         ))}
//       </div>
//     </div>
//   </section>
// ));

// /* ---------- CTA ---------- */
// const CTASection = memo(() => (
//   <section className="py-12 relative overflow-hidden bg-white">
//     <div className="absolute inset-0 dot-pattern opacity-[0.02]" />
//     <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
//       <div className="reveal max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-Black mb-6">
//           Don't See the <Gold>Right Role?</Gold>
//         </h2>
//         <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
//           We're always looking for talented individuals. Send us your resume and
//           we'll keep you in mind for future opportunities.
//         </p>
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
//           <GoldLink href="#application-form" className="px-10 py-5 text-lg">
//             Submit General Resume <FaArrowRight className="text-sm" />
//           </GoldLink>
//           {/* <a
//             href="#"
//             className="px-10 py-5 rounded-xl font-semibold text-lg text-white border border-white/20 hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50"
//           >
//             Contact Recruiting Team <span className="ml-1">→</span>
//           </a> */}
//         </div>
//       </div>
//     </div>
//   </section>
// ));

// // ==================== MAIN PAGE ====================
// const CareersPage = () => {
//   const [prefillPosition, setPrefillPosition] = useState(null);
//   const wrapperRef = useScrollReveal();

//   const handleApply = useCallback((title) => {
//     setPrefillPosition(title);
//   }, []);

//   useEffect(() => {
//     if (prefillPosition) {
//       const timer = setTimeout(() => setPrefillPosition(null), 600);
//       return () => clearTimeout(timer);
//     }
//   }, [prefillPosition]);

//   return (
//     <main ref={wrapperRef} role="main">
//       <style>{`
//         @keyframes slideIn { from { transform: translateX(calc(100% + 40px)); } to { transform: translateX(0); } }
//         @keyframes fadeSlideIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
//         .reveal { opacity: 0; transform: translateY(36px); transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1); }
//         .reveal.visible { opacity: 1; transform: translateY(0); }
//         .stagger-children .reveal:nth-child(1) { transition-delay: 0s; }
//         .stagger-children .reveal:nth-child(2) { transition-delay: 0.08s; }
//         .stagger-children .reveal:nth-child(3) { transition-delay: 0.16s; }
//         .stagger-children .reveal:nth-child(4) { transition-delay: 0.24s; }
//         .stagger-children .reveal:nth-child(5) { transition-delay: 0.32s; }
//         .stagger-children .reveal:nth-child(6) { transition-delay: 0.40s; }
//         .benefit-card { border: 1px solid rgba(0,0,0,0.06); transition: all 0.45s ease; }
//         .benefit-card:hover { border-color: rgba(253,185,19,0.25); box-shadow: 0 20px 50px rgba(253,185,19,0.1); transform: translateY(-6px); }
//         .benefit-card:hover .benefit-icon { background: rgba(253,185,19,0.15) !important; transform: scale(1.08) rotate(3deg); }
//         .benefit-card:hover .benefit-glow { opacity: 1; }
//         .benefit-icon { transition: all 0.45s ease; }
//         .benefit-glow { opacity: 0; transition: opacity 0.5s ease; }
//         .form-input { border: 1px solid #E2E8F0; background: #F8FAFC; transition: border-color 0.25s, box-shadow 0.25s; }
//         .form-input:focus { outline: none; border-color: #FDB913; box-shadow: 0 0 0 3px rgba(253,185,19,0.15); }
//         .step-connector { position: absolute; top: 28px; left: calc(50% + 36px); width: calc(100% - 72px); height: 2px; background: linear-gradient(90deg, rgba(253,185,19,0.4), rgba(253,185,19,0.08)); }
//         .dot-pattern { background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0); background-size: 40px 40px; }
//         .select-arrow { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' fill='none' stroke='%2394A3B8' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 16px center; }
//         .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
//         @media (max-width: 768px) { .step-connector { display: none; } }
//       `}</style>

//       <HeroSection />
//       <BenefitsSection />
//       <PositionsSection onApply={handleApply} />
//       <ApplicationFormSection prefillPosition={prefillPosition} />
//       <HiringProcessSection />
//       <CTASection />
//     </main>
//   );
// };

// export default memo(CareersPage);

import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
  memo,
} from "react";
import {
  FaLaptopCode,
  FaGraduationCap,
  FaUsers,
  FaChartLine,
  FaHeart,
  FaEarthAmericas,
  FaBriefcase,
  FaLocationDot,
  FaClock,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaArrowRight,
  FaCheck,
  FaCircleExclamation,
  FaCircleCheck,
  FaCircleXmark,
  FaCloudArrowUp,
  FaFilePdf,
  FaFileWord,
  FaFileLines,
  FaXmark,
  FaBullseye,
  FaBookOpen,
  FaHandshake,
  FaTrophy,
  FaQuoteLeft,
} from "react-icons/fa6";
import img1 from "../assets/leaders/NishantGautam.webp";
import banner from "../assets/banners/careers.png";
import why1 from "../assets/banners/career_why1.png";
import why2 from "../assets/banners/career_why2.png";
import why3 from "../assets/banners/career_why3.png";
import why4 from "../assets/banners/career_why4.png";

// ==================== CONSTANTS ====================
const BRAND = {
  navy: {
    dark: "#0A1628",
    mid: "#12324f",
    light: "#143A63",
    lighter: "#1A4570",
  },
  gold: { primary: "#FDB913", light: "#FFD54F" },
};

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ACCEPTED_EXTENSIONS = ".pdf,.doc,.docx";

const BENEFITS = [
  {
    icon: FaLaptopCode,
    title: "Modern Tech Stack",
    desc: "Work with cutting-edge technologies and tools that keep you ahead of the curve.",
  },
  {
    icon: FaGraduationCap,
    title: "Learning & Growth",
    desc: "$5,000 annual learning budget plus certifications and conference sponsorships.",
  },
  {
    icon: FaUsers,
    title: "Great Culture",
    desc: "Collaborative, inclusive, and fun work environment that feels like a second home.",
  },
  {
    icon: FaChartLine,
    title: "Career Growth",
    desc: "Clear promotion paths and leadership opportunities tailored to your ambitions.",
  },
  {
    icon: FaHeart,
    title: "Health & Wellness",
    desc: "Comprehensive medical, dental, and vision coverage for you and your family.",
  },
  {
    icon: FaEarthAmericas,
    title: "Global Opportunities",
    desc: "Work with clients across 30+ countries and expand your global perspective.",
  },
];

// Why Choose Us tabs data
const WHY_TABS = [
  {
    id: "impact",
    label: "Impact",
    icon: FaBullseye,
    title: "Delivering Measurable Business Impact",
    description:
      "We create technology solutions that drive real business outcomes. From AI-powered applications and cloud transformation to enterprise software, every solution is designed to improve efficiency, accelerate growth, and deliver lasting value.",
    image: why1,
  },

  {
    id: "development",
    label: "Development",
    icon: FaBookOpen,
    title: "Innovation Through Continuous Development",
    description:
      "Technology evolves every day, and so do we. Our team embraces modern frameworks, AI technologies, cloud platforms, and agile development practices to build scalable, secure, and future-ready digital solutions.",
    image: why2,
  },

  {
    id: "support",
    label: "Support",
    icon: FaHandshake,
    title: "Reliable Support & Long-Term Partnership",
    description:
      "Our relationship doesn't end at deployment. We provide proactive maintenance, security updates, performance optimization, and dedicated technical support to ensure your business operates without interruption.",
    image: why3,
  },

  {
    id: "progress",
    label: "Progress",
    icon: FaTrophy,
    title: "Driving Sustainable Digital Growth",
    description:
      "We help organizations embrace digital transformation with confidence. By combining innovation, strategic thinking, and cutting-edge technology, we enable businesses to scale faster, adapt to change, and stay ahead of the competition.",
    image: why4,
  },
];

// const POSITIONS = [
//   {
//     id: 1,
//     title: "Backend Developer",
//     department: "Engineering",
//     location: "Remote",
//     type: "Full-Time",
//     experience: "3 – 5 Years",
//     image: "https://picsum.photos/seed/guidewire-pos/640/400.jpg",
//     description:
//       "We're looking for an experienced Guidewire Developer to design, develop, and implement Guidewire InsuranceSuite solutions. You'll work closely with business analysts and stakeholders to deliver high-quality P&C insurance platforms for enterprise clients.",
//     tags: ["Guidewire", "Java", "SQL", "InsuranceSuite"],
//     highlights: ["Enterprise Projects", "Client Facing", "Agile Team"],
//   },
//   {
//     id: 2,
//     title: "Frontend Developer",
//     department: "Engineering",
//     location: "Remote",
//     type: "Full-Time",
//     experience: "2 – 4 Years",
//     image: "https://picsum.photos/seed/frontend-pos/640/400.jpg",
//     description:
//       "Build beautiful, performant web applications using React, Next.js, and modern CSS. Collaborate with designers and backend engineers to create seamless user experiences for enterprise clients across the globe.",
//     tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
//     highlights: ["Remote First", "Modern Stack", "Open Source"],
//   },
//   {
//     id: 3,
//     title: "QA Engineer",
//     department: "Quality",
//     location: "Remote",
//     type: "Full-Time",
//     experience: "2 – 4 Years",
//     image: "https://picsum.photos/seed/qa-pos/640/400.jpg",
//     description:
//       "Design and execute comprehensive test strategies including automated testing with Selenium, Cypress, or Playwright. Ensure the highest quality standards for our software products and client deliverables.",
//     tags: ["Selenium", "Cypress", "Playwright", "CI/CD"],
//     highlights: ["Automation Focus", "Cross-Team", "Quality Lead"],
//   },
// ];

const POSITIONS = [
  {
    id: 1,
    title: "SAP Technical Consultant",
    department: "SAP",
    location: "Remote",
    type: "Full-Time",
    experience: "4 – 7 Years",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    description:
      "Design, implement, and support SAP solutions including S/4HANA migrations, SAP Security, GRC, and enterprise transformation initiatives for global clients.",
    tags: ["SAP S/4HANA", "SAP Security", "GRC", "ABAP"],
    highlights: ["Global Projects", "Enterprise Solutions", "Client Facing"],
  },
  {
    id: 2,
    title: "Guidewire Developer",
    department: "Guidewire",
    location: "Remote",
    type: "Full-Time",
    experience: "3 – 6 Years",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    description:
      "Develop and implement Guidewire InsuranceSuite applications including PolicyCenter, BillingCenter, and ClaimCenter for leading insurance organizations.",
    tags: ["Guidewire", "Java", "PolicyCenter", "ClaimCenter"],
    highlights: ["Insurance Domain", "Enterprise Projects", "Agile Team"],
  },
  {
    id: 3,
    title: "AI Engineer",
    department: "AI & Engineering",
    location: "Remote",
    type: "Full-Time",
    experience: "3 – 5 Years",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    description:
      "Build AI-powered applications, intelligent automation solutions, and machine learning services that accelerate digital transformation initiatives.",
    tags: ["Python", "LLMs", "Machine Learning", "Generative AI"],
    highlights: ["Innovation Driven", "Cutting-edge AI", "Cloud Native"],
  },
  {
    id: 4,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-Time",
    experience: "3 – 5 Years",
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28",
    description:
      "Develop scalable enterprise applications using React, Node.js, TypeScript, and cloud technologies while collaborating with cross-functional teams.",
    tags: ["React", "Node.js", "TypeScript", "AWS"],
    highlights: ["Modern Stack", "Remote First", "Enterprise Apps"],
  },
  {
    id: 5,
    title: "QA Automation Engineer",
    department: "Quality Engineering",
    location: "Remote",
    type: "Full-Time",
    experience: "2 – 5 Years",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
    description:
      "Design and implement automation frameworks and quality strategies to ensure high-quality enterprise software delivery across SAP, Guidewire, and AI platforms.",
    tags: ["Selenium", "Cypress", "Playwright", "CI/CD"],
    highlights: ["Automation Focus", "Cross-Team", "Quality Leadership"],
  },
];

const PROCESS_STEPS = [
  {
    num: 1,
    title: "Apply Online",
    desc: "Submit your resume and details through our application form.",
  },
  {
    num: 2,
    title: "Resume Screening",
    desc: "Our team reviews your application and shortlists candidates.",
  },
  {
    num: 3,
    title: "Technical Interview",
    desc: "Demonstrate your skills through assessments and coding challenges.",
  },
  {
    num: 4,
    title: "Manager Round",
    desc: "Meet your future manager and discuss role expectations.",
  },
  {
    num: 5,
    title: "Offer & Onboarding",
    desc: "Receive your offer letter and begin a smooth onboarding.",
  },
];

const FORM_FIELDS = [
  "fullName",
  "email",
  "phone",
  "position",
  "message",
  "agreedToTerms",
];

// ==================== CUSTOM HOOKS ====================

function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll(".reveal");
    if (!targets.length) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold, rootMargin: "0px 0px -30px 0px" },
    );
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

function useToast() {
  const [toast, setToast] = useState(null);
  const show = useCallback((message, type = "success") => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => setToast(null), 4000);
  }, []);
  const ToastUI = useMemo(
    () =>
      toast ? (
        <div
          key={toast.id}
          className="fixed top-6 right-6 z-[9999] flex items-center gap-2.5 px-6 py-4 rounded-xl text-sm font-semibold shadow-2xl"
          style={{
            background: toast.type === "success" ? "#065F46" : "#7F1D1D",
            color: toast.type === "success" ? "#A7F3D0" : "#FCA5A5",
            animation: "slideIn 0.4s cubic-bezier(.22,1,.36,1) forwards",
          }}
          role="alert"
        >
          {toast.type === "success" ? <FaCircleCheck /> : <FaCircleXmark />}
          {toast.message}
        </div>
      ) : null,
    [toast],
  );
  return { show, ToastUI };
}

function useResumeUpload() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  const validateFile = useCallback((f) => {
    if (!f) return "Please upload your resume";
    if (!ACCEPTED_TYPES.includes(f.type))
      return "Please upload a PDF, DOC, or DOCX file";
    if (f.size > MAX_FILE_SIZE) return "File size must be less than 5MB";
    return "";
  }, []);

  const selectFile = useCallback(
    (f) => {
      setTouched(true);
      if (!f) {
        setFile(null);
        setError("Please upload your resume");
        return;
      }
      const err = validateFile(f);
      if (err) {
        setFile(null);
        setError(err);
        return;
      }
      setFile(f);
      setError("");
    },
    [validateFile],
  );

  const removeFile = useCallback(() => {
    setFile(null);
  }, []);

  const forceValidate = useCallback(() => {
    setTouched(true);
    const err = validateFile(file);
    setError(err);
    return !err;
  }, [file, validateFile]);

  const reset = useCallback(() => {
    setFile(null);
    setError("");
    setTouched(false);
  }, []);

  return { file, error, touched, selectFile, removeFile, forceValidate, reset };
}

function useFormValidation() {
  const initialForm = useMemo(
    () => ({
      fullName: "",
      email: "",
      phone: "",
      position: "",
      message: "",
      agreedToTerms: false,
    }),
    [],
  );

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = useCallback((name, value) => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Full name is required";
        if (value.trim().length < 2)
          return "Name must be at least 2 characters";
        if (!/^[a-zA-Z\s'-]+$/.test(value.trim()))
          return "Name can only contain letters, spaces, hyphens";
        return "";
      case "email":
        if (!value.trim()) return "Email address is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()))
          return "Please enter a valid email address";
        return "";
      case "position":
        if (!value) return "Please select a position";
        return "";
      case "agreedToTerms":
        if (!value) return "You must agree to the privacy policy to continue";
        return "";
      default:
        return "";
    }
  }, []);

  const validateAll = useCallback(() => {
    const newErrors = {};
    FORM_FIELDS.forEach((key) => {
      const err = validateField(key, form[key]);
      if (err) newErrors[key] = err;
    });
    return newErrors;
  }, [form, validateField]);

  const touchAll = useCallback(() => {
    const allTouched = {};
    FORM_FIELDS.forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);
  }, []);

  const handleChange = useCallback(
    (e) => {
      const { name, value, type, checked } = e.target;
      const newVal = type === "checkbox" ? checked : value;
      setForm((prev) => ({ ...prev, [name]: newVal }));
      if (touched[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: validateField(name, newVal),
        }));
      }
    },
    [touched, validateField],
  );

  const handleBlur = useCallback(
    (e) => {
      const { name, value, type, checked } = e.target;
      const val = type === "checkbox" ? checked : value;
      setTouched((prev) => ({ ...prev, [name]: true }));
      setErrors((prev) => ({ ...prev, [name]: validateField(name, val) }));
    },
    [validateField],
  );

  const isValid = useMemo(() => {
    return FORM_FIELDS.every((k) => !validateField(k, form[k]));
  }, [form, validateField]);

  const forceValidate = useCallback(() => {
    touchAll();
    const allErrors = validateAll();
    setErrors(allErrors);
    return Object.keys(allErrors).length === 0;
  }, [touchAll, validateAll]);

  const resetForm = useCallback(() => {
    setForm(initialForm);
    setErrors({});
    setTouched({});
  }, [initialForm]);

  return {
    form,
    errors,
    touched,
    handleChange,
    handleBlur,
    isValid,
    forceValidate,
    resetForm,
    setForm,
  };
}

// ==================== REUSABLE UI ====================

const SectionLabel = memo(({ children, light = false }) => (
  <span
    className="reveal inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
    style={
      light
        ? {
            background: `${BRAND.gold.primary}15`,
            color: BRAND.gold.primary,
            border: `1px solid ${BRAND.gold.primary}30`,
          }
        : {
            background: `${BRAND.navy.mid}08`,
            color: BRAND.navy.dark,
            border: `1px solid ${BRAND.navy.mid}12`,
          }
    }
  >
    {children}
  </span>
));

const SectionTitle = memo(({ children, light = false, className = "" }) => (
  <h2
    className={`reveal text-4xl md:text-5xl font-extrabold mb-5 ${className}`}
    style={{ color: light ? "#fff" : BRAND.navy.dark }}
  >
    {children}
  </h2>
));

const Gold = memo(({ children }) => (
  <span style={{ color: BRAND.gold.primary }}>{children}</span>
));

const GoldButton = memo(({ children, className = "", ...props }) => (
  <button
    className={`group relative overflow-hidden rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 ${className}`}
    style={{
      background:
        "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
      color: BRAND.navy.dark,
      boxShadow: "0 8px 30px rgba(253,185,19,0.3)",
      ["--tw-ring-color"]: BRAND.gold.primary,
    }}
    {...props}
  >
    <span className="relative z-10 flex items-center justify-center gap-3">
      {children}
    </span>
    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full group-disabled:hover:-translate-x-full transition-transform duration-700 pointer-events-none">
      <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
    </div>
  </button>
));

const GoldLink = memo(({ children, className = "", onClick, ...props }) => (
  <a
    className={`group relative inline-flex items-center overflow-hidden rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
    style={{
      background:
        "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
      color: BRAND.navy.dark,
      boxShadow: "0 8px 30px rgba(253,185,19,0.3)",
      ["--tw-ring-color"]: BRAND.gold.primary,
    }}
    onClick={onClick}
    {...props}
  >
    <span className="relative z-10 flex items-center gap-2">{children}</span>
    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none">
      <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
    </div>
  </a>
));

// ==================== SECTIONS ====================

/* ---------- HERO ---------- */
const HeroSection = memo(() => (
  <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
    <img
      src={banner}
      alt="Innovise Career"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8s] ease-out hover:scale-[1.03]"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/93 via-[#0A1628]/65 to-[#0A1628]/20" />
    <div className="relative z-10 h-full flex items-center">
      <div className="max-w-2xl px-6 md:px-12 lg:px-20">
        <p
          className="reveal text-sm uppercase tracking-[0.25em] mb-5 font-bold"
          style={{ color: BRAND.gold.primary }}
        >
          We're Hiring
        </p>
        <h1 className="reveal text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.12] mb-6">
          Build the Future
          <br />
          With <Gold>Innovise</Gold>
        </h1>
        <p className="reveal text-lg md:text-xl text-white/60 leading-relaxed max-w-xl">
          Join a global team of innovators shaping the future of technology.
          Grow your skills, make real impact, and advance your career with us.
        </p>
        <div className="reveal mt-8 flex flex-wrap gap-4">
          <GoldLink href="#positions" className="px-8 py-4 text-sm">
            View Open Positions <FaArrowRight className="text-xs ml-1" />
          </GoldLink>
        </div>
      </div>
    </div>
  </section>
));

/* ---------- BENEFITS ---------- */
const BenefitCard = memo(({ benefit }) => {
  const Icon = benefit.icon;
  return (
    <div className="reveal benefit-card bg-white rounded-2xl p-8 relative">
      <div
        className="benefit-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
        style={{
          background: `${BRAND.gold.primary}10`,
          border: `1px solid ${BRAND.gold.primary}20`,
        }}
      >
        <Icon className="text-2xl" style={{ color: BRAND.gold.primary }} />
      </div>
      <h3 className="text-xl font-bold mb-3" style={{ color: BRAND.navy.dark }}>
        {benefit.title}
      </h3>
      <p className="text-sm leading-relaxed text-slate-500">{benefit.desc}</p>
      <div
        className="benefit-glow absolute bottom-0 right-0 w-24 h-24 rounded-full blur-2xl pointer-events-none"
        style={{ background: BRAND.gold.primary }}
      />
    </div>
  );
});

const BenefitsSection = memo(() => (
  <section className="py-12 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <header className="text-center max-w-3xl mx-auto mb-16">
        <SectionLabel>Why Work With Us</SectionLabel>
        <SectionTitle>
          Why Join <Gold>Our Team?</Gold>
        </SectionTitle>
        <p className="reveal text-lg text-slate-500 leading-relaxed">
          Exceptional benefits, growth opportunities, and a culture that truly
          values your contributions.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 stagger-children">
        {BENEFITS.map((b) => (
          <BenefitCard key={b.title} benefit={b} />
        ))}
      </div>
    </div>
  </section>
));

/* ---------- WHY CHOOSE US ---------- */
const WhyChooseUsSection = memo(() => {
  const [activeTab, setActiveTab] = useState("impact");
  const [animating, setAnimating] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const activeData = WHY_TABS.find((t) => t.id === activeTab);

  const handleTabChange = useCallback(
    (id) => {
      if (id === activeTab) return;
      setAnimating(true);
      setDropdownOpen(false);
      setTimeout(() => {
        setActiveTab(id);
        setAnimating(false);
      }, 220);
    },
    [activeTab],
  );

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const activeLabel =
    WHY_TABS.find((t) => t.id === activeTab)?.label ?? "Select";

  return (
    <section
      className="relative overflow-hidden py-12 md:py-12"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <h2
            className="reveal text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: BRAND.navy.dark }}
          >
            Why <Gold>Innovise IT</Gold>
          </h2>
        </div>

        {/* ===== DESKTOP TABS ===== */}
        <div className="hidden xl:block">
          {/* Tab nav — plain text, gold underline only */}
          <div
            className="flex mb-12"
            style={{ borderBottom: "1.5px solid #f0f0f0" }}
            role="tablist"
          >
            {WHY_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleTabChange(tab.id)}
                  className="relative px-8 py-3 text-sm bg-transparent border-0 cursor-pointer outline-none transition-colors duration-200"
                  style={{
                    color: isActive ? BRAND.navy.dark : "text-gray-500",
                    fontWeight: isActive ? 800 : 600,
                    letterSpacing: "0.02em",
                  }}
                >
                  {tab.label}
                  <span
                    className="absolute bottom-[-1.5px] left-0 right-0 h-[2.5px] transition-all duration-300 rounded-full"
                    style={{
                      background: BRAND.gold.primary,
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "scaleX(1)" : "scaleX(0)",
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <div
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(10px)" : "translateY(0)",
              transition: "opacity 0.28s ease, transform 0.28s ease",
            }}
          >
            {activeData && (
              <div className="grid grid-cols-12 gap-16 items-center">
                {/* Image */}
                <div className="col-span-7">
                  <div
                    className="overflow-hidden rounded-2xl"
                    style={{ boxShadow: "0 16px 56px rgba(10,22,40,0.10)" }}
                  >
                    <img
                      src={activeData.image}
                      alt={activeData.title}
                      className="w-full h-[420px] object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="col-span-5">
                  <div
                    className="w-9 h-[3px] rounded-full mb-7"
                    style={{ background: BRAND.gold.primary }}
                  />
                  <h3
                    className="text-[2rem] font-extrabold leading-snug mb-5 tracking-tight"
                    style={{ color: BRAND.navy.dark }}
                  >
                    {activeData.title}
                  </h3>
                  <p
                    className="text-base leading-[1.85]"
                    style={{ color: "#6b7280" }}
                  >
                    {activeData.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ===== MOBILE / TABLET DROPDOWN ===== */}
        <div className="xl:hidden">
          {/* Dropdown */}
          <div className="relative mb-8" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen((v) => !v)}
              aria-expanded={dropdownOpen}
              className="w-full flex items-center justify-between px-5 py-4 rounded-xl text-left transition-all duration-200"
              style={{
                background: "#fff",
                border: `1.5px solid ${dropdownOpen ? "#c0c8d2" : "#e5e7eb"}`,
                boxShadow: dropdownOpen
                  ? `0 0 0 3px ${BRAND.gold.primary}18`
                  : "0 1px 4px rgba(0,0,0,0.05)",
              }}
            >
              <span
                className="text-sm font-semibold"
                style={{ color: BRAND.navy.dark }}
              >
                {activeLabel}
              </span>
              <svg
                className="w-4 h-4 transition-transform duration-300"
                style={{
                  transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  color: "#9ca3af",
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div
                className="absolute left-0 right-0 z-50 mt-1.5 p-1.5 rounded-xl"
                style={{
                  background: "#fff",
                  border: "1.5px solid #e5e7eb",
                  boxShadow: "0 10px 32px rgba(0,0,0,0.09)",
                }}
              >
                {WHY_TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id)}
                      className="w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-150"
                      style={{
                        color: isActive ? BRAND.navy.dark : "#6b7280",
                        fontWeight: isActive ? 700 : 400,
                        background: isActive
                          ? `${BRAND.gold.primary}0f`
                          : "transparent",
                        borderLeft: isActive
                          ? `3px solid ${BRAND.gold.primary}`
                          : "3px solid transparent",
                      }}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Mobile content */}
          {activeData && (
            <div
              style={{
                opacity: animating ? 0 : 1,
                transform: animating ? "translateY(8px)" : "translateY(0)",
                transition: "opacity 0.25s ease, transform 0.25s ease",
              }}
            >
              <div
                className="overflow-hidden rounded-2xl mb-7"
                style={{ boxShadow: "0 10px 40px rgba(10,22,40,0.08)" }}
              >
                <img
                  src={activeData.image}
                  alt={activeData.title}
                  className="w-full h-[240px] md:h-[340px] object-cover"
                />
              </div>
              <div
                className="w-8 h-[3px] rounded-full mb-5"
                style={{ background: BRAND.gold.primary }}
              />
              <h3
                className="text-2xl font-extrabold mb-4 leading-snug"
                style={{ color: BRAND.navy.dark }}
              >
                {activeData.title}
              </h3>
              <p
                className="text-base leading-[1.85]"
                style={{ color: "#6b7280" }}
              >
                {activeData.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
});

/* ---------- POSITIONS ---------- */

// Department color map
const DEPT_COLORS = {
  Engineering: {
    bg: "rgba(59,130,246,0.12)",
    color: "#60A5FA",
    border: "rgba(59,130,246,0.25)",
  },
  Quality: {
    bg: "rgba(34,197,94,0.12)",
    color: "#4ADE80",
    border: "rgba(34,197,94,0.25)",
  },
  Design: {
    bg: "rgba(168,85,247,0.12)",
    color: "#C084FC",
    border: "rgba(168,85,247,0.25)",
  },
  Default: {
    bg: `${BRAND.gold.primary}18`,
    color: BRAND.gold.primary,
    border: `${BRAND.gold.primary}35`,
  },
};

const getDeptColor = (dept) => DEPT_COLORS[dept] || DEPT_COLORS.Default;

// Department icon initials badge
const DeptBadge = memo(({ department }) => {
  const c = getDeptColor(department);
  const initials = department.slice(0, 2).toUpperCase();
  return (
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-extrabold flex-shrink-0"
      style={{
        background: c.bg,
        color: c.color,
        border: `1px solid ${c.border}`,
      }}
    >
      {initials}
    </div>
  );
});

const PositionRow = memo(({ position, onApply }) => {
  const [expanded, setExpanded] = useState(false);
  const c = getDeptColor(position.department);

  return (
    <article
      className="reveal position-row group"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 16,
        transition:
          "border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* ── Main row (always visible) ── */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-5 p-6">
        {/* Left */}
        <div className="flex items-start gap-4 flex-1">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{
              background: c.bg,
              border: `1px solid ${c.border}`,
            }}
          >
            <FaBriefcase className="text-xl" style={{ color: c.color }} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="text-lg font-bold text-white">{position.title}</h3>

              <span
                className="px-3 py-1 rounded-full text-[10px] font-bold uppercase"
                style={{
                  background: c.bg,
                  color: c.color,
                  border: `1px solid ${c.border}`,
                }}
              >
                {position.department}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-white/50 mb-4">
              <span className="flex items-center gap-2">
                <FaLocationDot style={{ color: BRAND.gold.primary }} />
                {position.location}
              </span>

              <span className="flex items-center gap-2">
                <FaClock style={{ color: BRAND.gold.primary }} />
                {position.type}
              </span>

              <span className="flex items-center gap-2">
                <FaGraduationCap style={{ color: BRAND.gold.primary }} />
                {position.experience}
              </span>
            </div>

            <p className="text-sm text-white/60 line-clamp-2 mb-4">
              {position.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {position.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs"
                  style={{
                    background: "rgba(255,255,255,.05)",
                    border: "1px solid rgba(255,255,255,.08)",
                    color: "rgba(255,255,255,.75)",
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="lg:w-[260px] flex flex-col gap-4">
          <div className="flex flex-wrap gap-2 justify-start lg:justify-end">
            {position.highlights.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(212,175,55,.12)",
                  color: BRAND.gold.primary,
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex gap-3 lg:justify-end">
            <button
              onClick={() => setExpanded(!expanded)}
              className="px-4 py-2 rounded-xl text-sm font-medium"
              style={{
                background: "rgba(255,255,255,.05)",
                border: "1px solid rgba(255,255,255,.08)",
                color: "rgba(255,255,255,.8)",
              }}
            >
              {expanded ? "Hide Details" : "View Details"}
            </button>

            <GoldButton
              className="px-5 py-2.5 text-sm"
              onClick={() => onApply(position.title)}
            >
              Apply Now
              <FaArrowRight className="text-xs" />
            </GoldButton>
          </div>
        </div>
      </div>

      {/* ── Expanded detail panel ── */}
      <div
        style={{
          maxHeight: expanded ? 500 : 0,
          overflow: "hidden",
          transition: "max-height .4s ease",
        }}
      >
        <div
          className="px-6 pb-6"
          style={{
            borderTop: "1px solid rgba(255,255,255,.08)",
          }}
        >
          <div className="pt-6 grid md:grid-cols-2 gap-8">
            <div>
              <h4
                className="font-semibold mb-3"
                style={{
                  color: BRAND.gold.primary,
                }}
              >
                Role Overview
              </h4>

              <p className="text-sm text-white/60 leading-7">
                {position.description}
              </p>
            </div>

            <div>
              <h4
                className="font-semibold mb-3"
                style={{
                  color: BRAND.gold.primary,
                }}
              >
                Key Highlights
              </h4>

              <div className="space-y-3">
                {position.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <FaCheck
                      style={{
                        color: BRAND.gold.primary,
                      }}
                    />

                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
});

const PositionsSection = memo(({ onApply }) => (
  <section
    id="positions"
    className="py-10 md:py-12 relative overflow-hidden bg-primary-800"
  >
    <div className="absolute inset-0 dot-pattern opacity-[0.025]" />

    {/* Subtle gold glow top-right */}
    <div
      className="absolute pointer-events-none"
      style={{
        width: 500,
        height: 500,
        borderRadius: "50%",
        filter: "blur(130px)",
        opacity: 0.05,
        top: -100,
        right: -100,
        background: BRAND.gold.primary,
      }}
    />

    <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
        <div>
          <SectionTitle light className="!mb-2">
            Open <Gold>Positions</Gold>
          </SectionTitle>
          <p className="reveal text-base text-white/50 max-w-lg">
            Find your perfect role and join our growing team of technology
            professionals.
          </p>
        </div>
        {/* Count pill */}
        <div
          className="reveal self-start sm:self-auto inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold flex-shrink-0"
          style={{
            background: `${BRAND.gold.primary}12`,
            color: BRAND.gold.primary,
            border: `1px solid ${BRAND.gold.primary}25`,
          }}
        >
          <FaBriefcase />
          {POSITIONS.length} Open Roles
        </div>
      </div>

      {/* Listing rows */}
      <div className="stagger-children">
        {POSITIONS.length > 0 ? (
          <div className="flex flex-col gap-3">
            {POSITIONS.map((pos) => (
              <PositionRow key={pos.id} position={pos} onApply={onApply} />
            ))}
          </div>
        ) : (
          <div
            className="reveal text-center rounded-3xl p-10 md:p-14 border"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            {/* Icon */}
            <div
              className="mx-auto mb-6 flex items-center justify-center rounded-full"
              style={{
                width: 90,
                height: 90,
                background: `${BRAND.gold.primary}12`,
                color: BRAND.gold.primary,
              }}
            >
              <FaBriefcase size={34} />
            </div>

            <h3 className="text-3xl font-bold text-white mb-3">
              No Open Positions Right Now
            </h3>

            <p className="text-white/60 max-w-xl mx-auto leading-7">
              We're not actively hiring at the moment, but we're always
              interested in connecting with talented people. Submit your profile
              and we'll contact you when a suitable opportunity becomes
              available.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#application-form"
                className="px-7 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: BRAND.gold.primary,
                  color: "#111",
                }}
              >
                Submit General Application
              </a>
            </div>

            <p className="mt-8 text-sm text-white/40">
              Follow us for future career opportunities.
            </p>
          </div>
        )}
      </div>
    </div>
  </section>
));

/* ---------- FORM COMPONENTS ---------- */

const FieldError = memo(({ message }) => {
  if (!message) return null;
  return (
    <div className="mt-1.5 flex items-start gap-1.5 animate-[fadeSlideIn_0.25s_ease-out]">
      <FaCircleExclamation className="text-xs mt-0.5 flex-shrink-0 text-red-500" />
      <span className="text-sm text-red-500 leading-snug">{message}</span>
    </div>
  );
});

const FormField = memo(
  ({
    label,
    name,
    type = "text",
    placeholder,
    icon: Icon,
    required,
    value,
    error,
    touched,
    onChange,
    onBlur,
    options,
  }) => {
    const isSelect = type === "select";
    const hasError = error && touched;
    const baseCls =
      "w-full rounded-xl transition-all duration-200 outline-none text-sm";
    const stateCls = hasError
      ? "border-red-400 bg-red-50/50 focus:border-red-400 focus:ring-red-100"
      : "border-[#E2E8F0] bg-[#F8FAFC] focus:border-[#FDB913] focus:ring-[rgba(253,185,19,0.15)]";
    const iconColor = hasError ? "#EF4444" : "#94A3B8";

    return (
      <div>
        <label
          htmlFor={name}
          className="block text-sm font-semibold mb-2"
          style={{ color: BRAND.navy.dark }}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className="relative">
          {Icon && (
            <Icon
              className="absolute left-4 top-1/2 -translate-y-1/2 text-sm transition-colors duration-200"
              style={{ color: iconColor }}
            />
          )}
          {isSelect ? (
            <select
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              required={required}
              className={`${baseCls} ${stateCls} pl-11 pr-10 py-3.5 select-arrow appearance-none cursor-pointer focus:ring-2`}
            >
              <option value="">{placeholder}</option>
              {options?.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={name}
              name={name}
              type={type}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              required={required}
              className={`${baseCls} ${stateCls} ${Icon ? "pl-11" : "px-4"} pr-4 py-3.5 focus:ring-2`}
            />
          )}
        </div>
        <FieldError message={hasError ? error : ""} />
      </div>
    );
  },
);

const TermsCheckbox = memo(({ checked, error, touched, onChange, onBlur }) => {
  const hasError = error && touched;
  return (
    <div>
      <label
        className="flex items-start gap-3 cursor-pointer group"
        htmlFor="terms"
      >
        <div className="relative mt-0.5 flex-shrink-0">
          <input
            type="checkbox"
            id="terms"
            name="agreedToTerms"
            checked={checked}
            onChange={onChange}
            onBlur={onBlur}
            className="peer sr-only"
          />
          <div
            className="w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200"
            style={{
              borderColor: hasError
                ? "#EF4444"
                : checked
                  ? BRAND.gold.primary
                  : "#CBD5E1",
              background: checked ? BRAND.gold.primary : "transparent",
            }}
          >
            <FaCheck
              className="text-[10px] transition-opacity duration-150"
              style={{ color: BRAND.navy.dark, opacity: checked ? 1 : 0 }}
            />
          </div>
        </div>
        <span className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
          I agree to the{" "}
          <a
            href="#"
            className="font-semibold underline"
            style={{ color: BRAND.gold.primary }}
          >
            Privacy Policy
          </a>{" "}
          and consent to my data being processed for recruitment purposes.
        </span>
      </label>
      <div className="ml-8">
        <FieldError message={hasError ? error : ""} />
      </div>
    </div>
  );
});

/* ---------- RESUME UPLOAD ---------- */
const ResumeUpload = memo(
  ({ file, error, touched, onFileSelect, onFileRemove }) => {
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef(null);
    const hasError = error && touched;

    const formatSize = useCallback((bytes) => {
      if (bytes < 1024) return `${bytes} B`;
      if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
      return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    }, []);

    const getFileIcon = useCallback(() => {
      if (!file) return null;
      const ext = file.name.split(".").pop().toLowerCase();
      if (ext === "pdf") return <FaFilePdf className="text-2xl text-red-500" />;
      if (ext === "doc" || ext === "docx")
        return <FaFileWord className="text-2xl text-blue-600" />;
      return <FaFileLines className="text-2xl text-slate-400" />;
    }, [file]);

    const handleFile = useCallback(
      (f) => {
        if (!f) return;
        onFileSelect(f);
      },
      [onFileSelect],
    );

    const handleDrop = useCallback(
      (e) => {
        e.preventDefault();
        setIsDragging(false);
        handleFile(e.dataTransfer.files[0]);
      },
      [handleFile],
    );

    const handleDragOver = useCallback((e) => {
      e.preventDefault();
      setIsDragging(true);
    }, []);
    const handleDragLeave = useCallback((e) => {
      e.preventDefault();
      setIsDragging(false);
    }, []);

    const handleInputChange = useCallback(
      (e) => {
        handleFile(e.target.files[0]);
        e.target.value = "";
      },
      [handleFile],
    );

    const handleRemove = useCallback(
      (e) => {
        e.stopPropagation();
        onFileRemove();
      },
      [onFileRemove],
    );

    const handleClick = useCallback(() => {
      if (!file) inputRef.current?.click();
    }, [file]);

    const borderStyle = hasError
      ? "border-2 border-dashed border-red-400 bg-red-50/30"
      : isDragging
        ? "border-2 border-dashed border-[#FDB913] bg-[#FDB913]/5"
        : file
          ? "border-2 border-solid border-[#FDB913]/30 bg-[#FDB913]/5"
          : "border-2 border-dashed border-[#CBD5E1] bg-[#F8FAFC] hover:border-[#FDB913]/50 hover:bg-[#FDB913]/5";

    return (
      <div>
        <label
          className="block text-sm font-semibold mb-2"
          style={{ color: BRAND.navy.dark }}
        >
          Upload Resume <span className="text-red-500">*</span>
        </label>
        <div
          onClick={handleClick}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`relative rounded-xl transition-all duration-300 cursor-pointer ${borderStyle}`}
          role="button"
          tabIndex={0}
          aria-label={file ? `Uploaded: ${file.name}` : "Upload resume"}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleClick();
            }
          }}
        >
          <input
            ref={inputRef}
            type="file"
            accept={ACCEPTED_EXTENSIONS}
            onChange={handleInputChange}
            className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
            tabIndex={-1}
            aria-hidden="true"
          />
          {file ? (
            <div className="flex items-center gap-4 p-5">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${BRAND.gold.primary}12` }}
              >
                {getFileIcon()}
              </div>
              <div className="flex-grow min-w-0">
                <p
                  className="text-sm font-semibold truncate"
                  style={{ color: BRAND.navy.dark }}
                >
                  {file.name}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {formatSize(file.size)} • Ready to submit
                </p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold"
                  style={{
                    background: `${BRAND.gold.primary}18`,
                    color: BRAND.gold.primary,
                  }}
                >
                  <FaCheck className="text-[9px]" /> Uploaded
                </span>
                <button
                  type="button"
                  onClick={handleRemove}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200"
                  aria-label="Remove file"
                >
                  <FaXmark className="text-sm" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-10 px-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300"
                style={{
                  background: isDragging
                    ? `${BRAND.gold.primary}20`
                    : `${BRAND.gold.primary}10`,
                  border: `1px solid ${
                    isDragging
                      ? `${BRAND.gold.primary}40`
                      : `${BRAND.gold.primary}20`
                  }`,
                  transform: isDragging
                    ? "scale(1.1) translateY(-2px)"
                    : "scale(1)",
                }}
              >
                <FaCloudArrowUp
                  className="text-2xl"
                  style={{ color: BRAND.gold.primary }}
                />
              </div>
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: BRAND.navy.dark }}
              >
                {isDragging
                  ? "Drop your resume here"
                  : "Drag & drop your resume here"}
              </p>
              <p className="text-sm text-slate-400">
                or{" "}
                <span
                  className="font-semibold underline"
                  style={{ color: BRAND.gold.primary }}
                >
                  browse files
                </span>{" "}
                to upload
              </p>
              <p className="text-xs text-slate-400 mt-3 flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-medium">
                  PDF
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-medium">
                  DOC
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-medium">
                  DOCX
                </span>
                <span className="text-slate-300">•</span>
                Max 5MB
              </p>
            </div>
          )}
        </div>
        <FieldError message={hasError ? error : ""} />
      </div>
    );
  },
);

const SuccessState = memo(({ onReset }) => (
  <div className="p-12 md:p-16 text-center animate-[fadeSlideIn_0.4s_ease-out]">
    <div
      className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
      style={{ background: `${BRAND.gold.primary}15` }}
    >
      <FaCircleCheck
        className="text-4xl"
        style={{ color: BRAND.gold.primary }}
      />
    </div>
    <h3
      className="text-2xl font-extrabold mb-3"
      style={{ color: BRAND.navy.dark }}
    >
      Application Submitted!
    </h3>
    <p className="text-slate-500 leading-relaxed mb-8 max-w-md mx-auto">
      Thank you for applying. Our talent acquisition team will review your
      application and get back to you within 3–5 business days.
    </p>
    <button
      type="button"
      onClick={onReset}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-colors hover:bg-slate-100"
      style={{
        color: BRAND.navy.dark,
        border: `1px solid ${BRAND.navy.mid}20`,
      }}
    >
      Submit Another Application <FaArrowRight className="text-xs" />
    </button>
  </div>
));

/* ---------- APPLICATION FORM ---------- */
const ApplicationFormSection = memo(({ prefillPosition }) => {
  const {
    form,
    errors,
    touched,
    handleChange,
    handleBlur,
    isValid,
    forceValidate,
    resetForm,
    setForm,
  } = useFormValidation();
  const resume = useResumeUpload();
  const { show, ToastUI } = useToast();
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const isFullyValid = useMemo(
    () => isValid && !!resume.file,
    [isValid, resume.file],
  );

  useEffect(() => {
    if (prefillPosition && !form.position && !submitted) {
      setForm((prev) => ({ ...prev, position: prefillPosition }));
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [prefillPosition, setForm, form.position, submitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValid = forceValidate();
    const resumeValid = resume.forceValidate();
    if (!formValid || !resumeValid) {
      show("Please fix the highlighted errors below", "error");
      const firstErr = document.querySelector(".field-error-scroll");
      firstErr?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    show(
      "Application submitted successfully! We'll be in touch soon.",
      "success",
    );
    setSubmitted(true);
    resetForm();
    resume.reset();
  };

  const handleReset = useCallback(() => {
    setSubmitted(false);
    resetForm();
    resume.reset();
  }, [resetForm, resume]);

  const positionOptions = useMemo(() => POSITIONS.map((p) => p.title), []);

  return (
    <>
      {ToastUI}
      <section
        id="application-form"
        ref={formRef}
        className="py-12 bg-white relative overflow-hidden scroll-mt-8"
      >
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.04]"
          style={{ background: BRAND.gold.primary }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              {/* <SectionLabel>Apply Now</SectionLabel> */}
              <SectionTitle>
                Ready to <Gold>Join Us?</Gold>
              </SectionTitle>
              <p className="reveal text-lg text-slate-500">
                Submit your application and our talent acquisition team will
                reach out shortly.
              </p>
            </header>

            <div className="reveal rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              {!submitted && (
                <div
                  className="relative h-8 md:h-36 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.lighter})`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
                        style={{
                          background:
                            "linear-gradient(135deg, #FDB913, #FFD54F)",
                        }}
                      >
                        <FaPaperPlane
                          className="text-2xl"
                          style={{ color: BRAND.navy.dark }}
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        Start Your Journey
                      </h3>
                    </div>
                  </div>
                </div>
              )}

              {submitted ? (
                <SuccessState onReset={handleReset} />
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="p-8 md:p-12 space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div
                      className={
                        errors.fullName && touched.fullName
                          ? "field-error-scroll"
                          : ""
                      }
                    >
                      <FormField
                        label="Full Name"
                        name="fullName"
                        placeholder="Enter Full Name"
                        icon={FaUser}
                        required
                        value={form.fullName}
                        error={errors.fullName}
                        touched={touched.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div
                      className={
                        errors.email && touched.email
                          ? "field-error-scroll"
                          : ""
                      }
                    >
                      <FormField
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="Enter Email Address"
                        icon={FaEnvelope}
                        required
                        value={form.email}
                        error={errors.email}
                        touched={touched.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <FormField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="Enter Phone Number"
                      icon={FaPhone}
                      value={form.phone}
                      error={errors.phone}
                      touched={touched.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div
                    // className={
                    //   errors.position && touched.position
                    //     ? "field-error-scroll"
                    //     : ""
                    // }
                    >
                      <FormField
                        label="Position"
                        name="position"
                        type="select"
                        placeholder="Select a position..."
                        value={form.position}
                        error={errors.position}
                        touched={touched.position}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        options={positionOptions}
                      />
                    </div>
                  </div>

                  <div
                    className={
                      resume.error && resume.touched ? "field-error-scroll" : ""
                    }
                  >
                    <ResumeUpload
                      file={resume.file}
                      error={resume.error}
                      touched={resume.touched}
                      onFileSelect={resume.selectFile}
                      onFileRemove={resume.removeFile}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold mb-2"
                      style={{ color: BRAND.navy.dark }}
                    >
                      Cover Letter / Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={5}
                      placeholder="Tell us about yourself and why you'd be a great fit..."
                      className="form-input w-full px-4 py-3.5 rounded-xl resize-none text-sm"
                    />
                  </div>

                  <div
                    className={
                      errors.agreedToTerms && touched.agreedToTerms
                        ? "field-error-scroll"
                        : ""
                    }
                  >
                    <TermsCheckbox
                      checked={form.agreedToTerms}
                      error={errors.agreedToTerms}
                      touched={touched.agreedToTerms}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>

                  <GoldButton
                    type="submit"
                    disabled={!isFullyValid}
                    className="w-full py-5 text-lg"
                  >
                    <FaPaperPlane />
                    Submit Application
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                  </GoldButton>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

/* ---------- HIRING PROCESS ---------- */
const ProcessStep = memo(({ step, isLast }) => (
  <div className="reveal text-center relative">
    {!isLast && <div className="hidden lg:block step-connector" />}
    <div
      className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 text-lg font-extrabold"
      style={{
        background: "linear-gradient(135deg, #FDB913, #FFD54F)",
        color: BRAND.navy.dark,
      }}
    >
      {step.num}
    </div>
    <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
    <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
  </div>
));

const HiringProcessSection = memo(() => (
  <section className="py-12 relative overflow-hidden bg-primary-800">
    <div className="absolute inset-0 dot-pattern opacity-[0.025]" />
    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <header className="text-center max-w-3xl mx-auto mb-16">
        {/* <SectionLabel light>How It Works</SectionLabel> */}
        <SectionTitle light>
          Our Hiring <Gold>Process</Gold>
        </SectionTitle>
        <p className="reveal text-lg text-gray-400">
          A streamlined 5-step journey from application to onboarding.
        </p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 stagger-children">
        {PROCESS_STEPS.map((s, i) => (
          <ProcessStep
            key={s.num}
            step={s}
            isLast={i === PROCESS_STEPS.length - 1}
          />
        ))}
      </div>
    </div>
  </section>
));

/* ---------- LEADER QUOTE ---------- */
const LeaderQuoteSection = memo(() => (
  <section className="py-12 md:py-12 bg-white relative overflow-hidden">
    {/* Background Accent */}
    <div className="absolute inset-0 pointer-events-none" />

    <div className="max-w-8xl mx-auto px-6 lg:px-8 relative z-10">
      <div className="reveal relative rounded-3xl p-10 md:p-16 overflow-hidden bg-primary-800">
        {/* Gold Glow */}
        <div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: BRAND.gold.primary,
            filter: "blur(100px)",
            opacity: 0.08,
          }}
        />

        <div className="relative z-10">
          {/* Quote Icon */}
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-8"
            style={{
              background: `${BRAND.gold.primary}18`,
              border: `1px solid ${BRAND.gold.primary}35`,
            }}
          >
            <FaQuoteLeft
              className="text-2xl"
              style={{ color: BRAND.gold.primary }}
            />
          </div>

          <blockquote>
            {/* Quote */}
            <p
              className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-white/90 mb-10"
              style={{ letterSpacing: "-0.01em" }}
            >
              "Technology is meaningful only when it creates lasting value for
              people and businesses. At Innovise IT, we combine innovation,
              artificial intelligence, and strategic thinking to deliver
              solutions that empower organizations to grow, transform, and lead
              confidently in the digital era. Our mission is not just to build
              technology—but to build the future."
            </p>

            {/* Divider */}
            <div
              className="w-16 h-0.5 mb-8 rounded-full"
              style={{
                background: `linear-gradient(to right, ${BRAND.gold.primary}, transparent)`,
              }}
            />

            {/* Author */}
            <div className="flex items-center gap-5">
              <div
                className="w-14 h-14 rounded-full flex-shrink-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${img1})`,
                  boxShadow: `0 0 0 2px ${BRAND.gold.primary}50`,
                }}
              />

              <div>
                <p
                  className="text-sm font-bold uppercase tracking-widest mb-1"
                  style={{ color: BRAND.gold.primary }}
                >
                  Nishant Gautam
                </p>

                <span className="text-sm text-white/60 font-light">
                  Founder & CEO
                </span>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
));

/* ---------- CTA ---------- */
const CTASection = memo(() => (
  <section className="py-12 relative overflow-hidden bg-white">
    <div className="absolute inset-0 dot-pattern opacity-[0.02]" />
    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div className="reveal max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-Black mb-6">
          Don't See the <Gold>Right Role?</Gold>
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          We're always looking for talented individuals. Send us your resume and
          we'll keep you in mind for future opportunities.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <GoldLink href="#application-form" className="px-10 py-5 text-lg">
            Submit General Resume <FaArrowRight className="text-sm" />
          </GoldLink>
        </div>
      </div>
    </div>
  </section>
));

// ==================== MAIN PAGE ====================
const CareersPage = () => {
  const [prefillPosition, setPrefillPosition] = useState(null);
  const wrapperRef = useScrollReveal();

  const handleApply = useCallback((title) => {
    setPrefillPosition(title);
  }, []);

  useEffect(() => {
    if (prefillPosition) {
      const timer = setTimeout(() => setPrefillPosition(null), 600);
      return () => clearTimeout(timer);
    }
  }, [prefillPosition]);

  return (
    <main ref={wrapperRef} role="main">
      <style>{`
        @keyframes slideIn { from { transform: translateX(calc(100% + 40px)); } to { transform: translateX(0); } }
        @keyframes fadeSlideIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .reveal { opacity: 0; transform: translateY(36px); transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1); }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .stagger-children .reveal:nth-child(1) { transition-delay: 0s; }
        .stagger-children .reveal:nth-child(2) { transition-delay: 0.08s; }
        .stagger-children .reveal:nth-child(3) { transition-delay: 0.16s; }
        .stagger-children .reveal:nth-child(4) { transition-delay: 0.24s; }
        .stagger-children .reveal:nth-child(5) { transition-delay: 0.32s; }
        .stagger-children .reveal:nth-child(6) { transition-delay: 0.40s; }
        .benefit-card { border: 1px solid rgba(0,0,0,0.06); transition: all 0.45s ease; }
        .benefit-card:hover { border-color: rgba(253,185,19,0.25); box-shadow: 0 20px 50px rgba(253,185,19,0.1); transform: translateY(-6px); }
        .benefit-card:hover .benefit-icon { background: rgba(253,185,19,0.15) !important; transform: scale(1.08) rotate(3deg); }
        .benefit-card:hover .benefit-glow { opacity: 1; }
        .benefit-icon { transition: all 0.45s ease; }
        .benefit-glow { opacity: 0; transition: opacity 0.5s ease; }
        .form-input { border: 1px solid #E2E8F0; background: #F8FAFC; transition: border-color 0.25s, box-shadow 0.25s; }
        .form-input:focus { outline: none; border-color: #FDB913; box-shadow: 0 0 0 3px rgba(253,185,19,0.15); }
        .step-connector { position: absolute; top: 28px; left: calc(50% + 36px); width: calc(100% - 72px); height: 2px; background: linear-gradient(90deg, rgba(253,185,19,0.4), rgba(253,185,19,0.08)); }
        .dot-pattern { background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0); background-size: 40px 40px; }
        .select-arrow { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' fill='none' stroke='%2394A3B8' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 16px center; }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        .position-row:hover { border-color: rgba(253,185,19,0.22) !important; background: rgba(255,255,255,0.05) !important; box-shadow: 0 8px 32px rgba(0,0,0,0.2); }
        @media (max-width: 768px) { .step-connector { display: none; } }
      `}</style>

      <HeroSection />
      {/* <BenefitsSection /> */}
      <WhyChooseUsSection />
      <PositionsSection onApply={handleApply} />
      <ApplicationFormSection prefillPosition={prefillPosition} />
      <HiringProcessSection />
      <CTASection />
      <LeaderQuoteSection />
    </main>
  );
};

export default memo(CareersPage);
