// // // import { useState } from "react";
// // // import { motion } from "framer-motion";
// // // import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

// // // // ─── Data ───────────────────────────────────────────────────────────
// // // const servicesData = [
// // //   {
// // //     id: 5,
// // //     title: "Application Management Services",
// // //     description:
// // //       "Ensure uninterrupted business operations with end-to-end SAP Application Management Services. We provide 24/7 monitoring, proactive maintenance, incident resolution, performance optimization, and continuous enhancements to maximize system availability and business productivity.",
// // //     image:
// // //       "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
// // //     imageAlt: "SAP Application Management Services",
// // //     features: [
// // //       "24/7 Application Monitoring & Support",
// // //       "Incident & Problem Management",
// // //       "Performance Optimization",
// // //       "Release & Change Management",
// // //     ],
// // //     buttonText: "Learn More",
// // //     path: "/services/app-maintenance",
// // //   },

// // //   {
// // //     id: 6,
// // //     title: "Data Migration & Transformation",
// // //     description:
// // //       "Accelerate your digital transformation with secure and reliable SAP data migration services. We help organizations migrate from legacy systems to SAP HANA and SAP S/4HANA while ensuring data accuracy, consistency, and minimal business disruption.",
// // //     image:
// // //       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
// // //     imageAlt: "SAP Data Migration & Transformation",
// // //     features: [
// // //       "SAP HANA & S/4HANA Migration",
// // //       "Legacy Data Conversion",
// // //       "Data Validation & Cleansing",
// // //       "System Consolidation",
// // //     ],
// // //     buttonText: "Learn More",
// // //     path: "/services/data-migration",
// // //   },

// // //   {
// // //     id: 7,
// // //     title: "SAP Talent & Staff Augmentation",
// // //     description:
// // //       "Strengthen your SAP initiatives with experienced consultants, architects, developers, and project managers. Our flexible engagement models provide the right expertise to support implementation, upgrades, support, and transformation projects.",
// // //     image:
// // //       "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
// // //     imageAlt: "SAP Talent & Staff Augmentation",
// // //     features: [
// // //       "Certified SAP Functional Consultants",
// // //       "SAP Technical Experts",
// // //       "Project & Delivery Managers",
// // //       "Flexible Resource Engagement",
// // //     ],
// // //     buttonText: "Learn More",
// // //     path: "/services/staff-augmentation",
// // //   },

// // //   {
// // //     id: 8,
// // //     title: "Code Quality & Security",
// // //     description:
// // //       "Deliver enterprise-grade SAP applications with robust code quality, security, and compliance practices. We perform continuous code reviews, vulnerability assessments, and governance checks to ensure secure, scalable, and high-performing SAP solutions.",
// // //     image:
// // //       "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
// // //     imageAlt: "SAP Code Quality & Security",
// // //     features: [
// // //       "Automated Code Reviews",
// // //       "Security & Vulnerability Assessments",
// // //       "Compliance & Governance Validation",
// // //       "Risk Analysis & Mitigation",
// // //     ],
// // //     buttonText: "Learn More",
// // //     path: "/services/code-quality-security",
// // //   },
// // // ];

// // // // ─── Check Icon (matches Elementor SVG) ─────────────────────────────
// // // const CheckIcon = () => (
// // //   <svg
// // //     width="15"
// // //     height="12"
// // //     viewBox="0 0 15 12"
// // //     fill="none"
// // //     xmlns="http://www.w3.org/2000/svg"
// // //     className="flex-shrink-0"
// // //   >
// // //     <path
// // //       d="M1 6L5.24264 10.2426L13.727 1.75732"
// // //       stroke="#FDB913"
// // //       strokeWidth="2"
// // //       strokeLinecap="round"
// // //       strokeLinejoin="round"
// // //     />
// // //   </svg>
// // // );

// // // // ─── Service Row ────────────────────────────────────────────────────
// // // const ServiceRow = ({ service, index }) => {
// // //   const isReversed = index % 2 !== 0;
// // //   const [imgLoaded, setImgLoaded] = useState(false);

// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0, y: 60 }}
// // //       whileInView={{ opacity: 1, y: 0 }}
// // //       viewport={{ once: true, margin: "-80px" }}
// // //       transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// // //       className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
// // //         isReversed ? "lg:direction-rtl" : ""
// // //       }`}
// // //     >
// // //       {/* ── Text Side ── */}
// // //       <div
// // //         className={`order-2 lg:order-1 ${
// // //           isReversed ? "lg:order-2" : "lg:order-1"
// // //         }`}
// // //       >
// // //         {/* Title */}
// // //         <motion.h3
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ delay: 0.15, duration: 0.5 }}
// // //           className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-white mb-4 leading-tight"
// // //         >
// // //           {service.title}
// // //         </motion.h3>

// // //         {/* Description */}
// // //         <motion.p
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ delay: 0.25, duration: 0.5 }}
// // //           className="text-white/60 text-base leading-relaxed mb-7 max-w-lg"
// // //         >
// // //           {service.description}
// // //         </motion.p>

// // //         {/* Features */}
// // //         <motion.ul
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ delay: 0.35, duration: 0.5 }}
// // //           className="space-y-3.5 mb-8"
// // //         >
// // //           {service.features.map((feature, idx) => (
// // //             <motion.li
// // //               key={idx}
// // //               initial={{ opacity: 0, x: -15 }}
// // //               whileInView={{ opacity: 1, x: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{
// // //                 delay: 0.4 + idx * 0.08,
// // //                 duration: 0.4,
// // //               }}
// // //               className="flex items-start gap-3 text-sm text-white/80"
// // //             >
// // //               <span className="mt-0.5">
// // //                 <CheckIcon />
// // //               </span>
// // //               <span>{feature}</span>
// // //             </motion.li>
// // //           ))}
// // //         </motion.ul>

// // //         {/* CTA */}
// // //         <motion.a
// // //           href="/contact"
// // //           initial={{ opacity: 0, y: 15 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ delay: 0.6, duration: 0.4 }}
// // //           whileHover={{ x: 6 }}
// // //           whileTap={{ scale: 0.97 }}
// // //           className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-wide group/btn"
// // //           style={{ color: "#FDB913" }}
// // //         >
// // //           <span>Learn More</span>
// // //           <FaArrowRight
// // //             size={13}
// // //             className="transition-transform duration-300 group-hover/btn:translate-x-1"
// // //           />
// // //         </motion.a>
// // //       </div>

// // //       {/* ── Image Side ── */}
// // //       <motion.div
// // //         initial={{ opacity: 0, scale: 0.92 }}
// // //         whileInView={{ opacity: 1, scale: 1 }}
// // //         viewport={{ once: true }}
// // //         transition={{
// // //           delay: isReversed ? 0.1 : 0.3,
// // //           duration: 0.8,
// // //           ease: [0.22, 1, 0.36, 1],
// // //         }}
// // //         className={`order-1 lg:order-2 ${
// // //           isReversed ? "lg:order-1" : "lg:order-2"
// // //         }`}
// // //       >
// // //         <div className="relative group">
// // //           {/* Glow behind image */}
// // //           <div
// // //             className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"
// // //             style={{ background: "rgba(253,185,19,0.08)" }}
// // //           />

// // //           {/* Border accent line */}
// // //           <div
// // //             className="absolute -bottom-px left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
// // //             style={{
// // //               background:
// // //                 "linear-gradient(90deg, transparent, #FDB913, transparent)",
// // //             }}
// // //           />

// // //           {/* Image container */}
// // //           <div
// // //             className="relative rounded-2xl overflow-hidden border border-white/[0.06] transition-all duration-500 group-hover:border-white/[0.12]"
// // //             style={{
// // //               background:
// // //                 "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
// // //               boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
// // //             }}
// // //           >
// // //             {/* Placeholder shimmer */}
// // //             {!imgLoaded && (
// // //               <div
// // //                 className="absolute inset-0 animate-pulse"
// // //                 style={{
// // //                   background:
// // //                     "linear-gradient(90deg, rgba(255,255,255,0.02) 25%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.02) 75%)",
// // //                   backgroundSize: "200% 100%",
// // //                   animation: "shimmer 1.5s infinite",
// // //                 }}
// // //               />
// // //             )}

// // //             <img
// // //               src={service.image}
// // //               alt={service.imageAlt}
// // //               loading="lazy"
// // //               onLoad={() => setImgLoaded(true)}
// // //               className={`w-full h-auto object-cover transition-all duration-700 group-hover:scale-[1.03] ${
// // //                 imgLoaded ? "opacity-100" : "opacity-0"
// // //               }`}
// // //             />

// // //             {/* Subtle top gradient overlay */}
// // //             <div
// // //               className="absolute inset-x-0 top-0 h-20 pointer-events-none"
// // //               style={{
// // //                 background:
// // //                   "linear-gradient(to bottom, rgba(8,28,52,0.3), transparent)",
// // //               }}
// // //             />

// // //             {/* Corner accent */}
// // //             <div
// // //               className="absolute top-4 right-4 w-10 h-10 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0"
// // //               style={{
// // //                 background: "rgba(253,185,19,0.15)",
// // //                 border: "1px solid rgba(253,185,19,0.25)",
// // //                 backdropFilter: "blur(10px)",
// // //               }}
// // //             >
// // //               <FaArrowRight size={14} className="text-[#FDB913] -rotate-45" />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </motion.div>
// // //     </motion.div>
// // //   );
// // // };

// // // // ─── Main Section ───────────────────────────────────────────────────
// // // const ServicesSection = () => (
// // //   <section
// // //     id="services"
// // //     className="relative overflow-hidden py-20 lg:py-28 bg-[#01182f]"
// // //   >
// // //     {/* ── Animated SVG Background Lines ── */}
// // //     <div
// // //       className="absolute inset-0 pointer-events-none hidden xl:block"
// // //       style={{ left: "17.5%" }}
// // //     >
// // //       <svg
// // //         width="898"
// // //         height="3215"
// // //         viewBox="0 0 898 3215"
// // //         fill="none"
// // //         xmlns="http://www.w3.org/2000/svg"
// // //         className="h-full"
// // //       >
// // //         <defs>
// // //           {/* ── Glow filter for yellow dots ── */}
// // //           <filter
// // //             id="yellowGlow"
// // //             x="-100%"
// // //             y="-100%"
// // //             width="300%"
// // //             height="300%"
// // //           >
// // //             <feGaussianBlur
// // //               in="SourceGraphic"
// // //               stdDeviation="6"
// // //               result="blur1"
// // //             />
// // //             <feGaussianBlur
// // //               in="SourceGraphic"
// // //               stdDeviation="2"
// // //               result="blur2"
// // //             />
// // //             <feMerge>
// // //               <feMergeNode in="blur1" />
// // //               <feMergeNode in="blur2" />
// // //               <feMergeNode in="SourceGraphic" />
// // //             </feMerge>
// // //           </filter>

// // //           {/* ── Soft white glow for node dots ── */}
// // //           <filter id="whiteGlow" x="-100%" y="-100%" width="300%" height="300%">
// // //             <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
// // //             <feMerge>
// // //               <feMergeNode in="blur" />
// // //               <feMergeNode in="SourceGraphic" />
// // //             </feMerge>
// // //           </filter>

// // //           {/* ── White line glow (makes lines look bolder & glowing) ── */}
// // //           <filter id="lineGlow" x="-20%" y="-5%" width="140%" height="110%">
// // //             <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
// // //             <feMerge>
// // //               <feMergeNode in="blur" />
// // //               <feMergeNode in="SourceGraphic" />
// // //             </feMerge>
// // //           </filter>

// // //           {/* ── Stronger line glow for the thick shadow layer ── */}
// // //           <filter
// // //             id="lineGlowStrong"
// // //             x="-20%"
// // //             y="-5%"
// // //             width="140%"
// // //             height="110%"
// // //           >
// // //             <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
// // //             <feMerge>
// // //               <feMergeNode in="blur" />
// // //             </feMerge>
// // //           </filter>

// // //           {/* ── Motion paths (simplified straight-line routes) ── */}
// // //           <path
// // //             id="motionPath1"
// // //             d="M427.75,0 L427.75,225 L891,225 L891,1618 L7.5,1618 L7.5,2981"
// // //             fill="none"
// // //           />
// // //           <path
// // //             id="motionPath2"
// // //             d="M428.5,3215 L428.5,3075 L7.5,3075 L7.5,2707"
// // //             fill="none"
// // //           />
// // //           {/* Reverse motion on path 1 */}
// // //           <path
// // //             id="motionPath1Rev"
// // //             d="M7.5,2981 L7.5,1618 L891,1618 L891,225 L427.75,225 L427.75,0"
// // //             fill="none"
// // //           />
// // //         </defs>

// // //         {/* ═══════════════════════════════════════════════
// // //             FULL WHITE LINES — bold, wide, glowing
// // //         ═══════════════════════════════════════════════ */}

// // //         {/* ── Main line: Layer 1 — outer glow (widest, softest) ── */}
// // //         <path
// // //           d="M427.751 0V199.655C427.751 213.462 438.943 224.655 452.751 224.655H866C879.807 224.655 891 235.848 891 249.655V1593C891 1606.81 879.807 1618 866 1618H32.5C18.6929 1618 7.5 1629.19 7.5 1643V2981"
// // //           stroke="white"
// // //           strokeWidth="6"
// // //           strokeLinecap="round"
// // //           strokeLinejoin="round"
// // //           opacity="0.06"
// // //           filter="url(#lineGlowStrong)"
// // //         />

// // //         {/* ── Main line: Layer 2 — medium glow ── */}
// // //         <path
// // //           d="M427.751 0V199.655C427.751 213.462 438.943 224.655 452.751 224.655H866C879.807 224.655 891 235.848 891 249.655V1593C891 1606.81 879.807 1618 866 1618H32.5C18.6929 1618 7.5 1629.19 7.5 1643V2981"
// // //           stroke="white"
// // //           strokeWidth="3"
// // //           strokeLinecap="round"
// // //           strokeLinejoin="round"
// // //           opacity="0.12"
// // //           filter="url(#lineGlow)"
// // //         />

// // //         {/* ── Main line: Layer 3 — sharp core (thinnest, brightest) ── */}
// // //         <path
// // //           d="M427.751 0V199.655C427.751 213.462 438.943 224.655 452.751 224.655H866C879.807 224.655 891 235.848 891 249.655V1593C891 1606.81 879.807 1618 866 1618H32.5C18.6929 1618 7.5 1629.19 7.5 1643V2981"
// // //           stroke="white"
// // //           strokeWidth="1.8"
// // //           strokeLinecap="round"
// // //           strokeLinejoin="round"
// // //           opacity="0.35"
// // //         />

// // //         {/* ── Branch line: Layer 1 — outer glow ── */}
// // //         <path
// // //           d="M428.5 3215V3100.5C428.5 3086.69 417.307 3075.5 403.5 3075.5H32.5C18.6929 3075.5 7.5 3064.31 7.5 3050.5V2707"
// // //           stroke="white"
// // //           strokeWidth="5"
// // //           strokeLinecap="round"
// // //           strokeLinejoin="round"
// // //           opacity="0.06"
// // //           filter="url(#lineGlowStrong)"
// // //         />

// // //         {/* ── Branch line: Layer 2 — medium glow ── */}
// // //         <path
// // //           d="M428.5 3215V3100.5C428.5 3086.69 417.307 3075.5 403.5 3075.5H32.5C18.6929 3075.5 7.5 3064.31 7.5 3050.5V2707"
// // //           stroke="white"
// // //           strokeWidth="2.5"
// // //           strokeLinecap="round"
// // //           strokeLinejoin="round"
// // //           opacity="0.12"
// // //           filter="url(#lineGlow)"
// // //         />

// // //         {/* ── Branch line: Layer 3 — sharp core ── */}
// // //         <path
// // //           d="M428.5 3215V3100.5C428.5 3086.69 417.307 3075.5 403.5 3075.5H32.5C18.6929 3075.5 7.5 3064.31 7.5 3050.5V2707"
// // //           stroke="white"
// // //           strokeWidth="1.5"
// // //           strokeLinecap="round"
// // //           strokeLinejoin="round"
// // //           opacity="0.3"
// // //         />

// // //         {/* ═══════════════════════════════════════════════
// // //             STATIC NODE DOTS at turning points
// // //         ═══════════════════════════════════════════════ */}

// // //         {/* Top start */}
// // //         <circle
// // //           cx="427.75"
// // //           cy="0"
// // //           r="4"
// // //           fill="white"
// // //           opacity="0.4"
// // //           filter="url(#whiteGlow)"
// // //         />

// // //         {/* First corner — top right */}
// // //         <circle
// // //           cx="891"
// // //           cy="225"
// // //           r="5"
// // //           fill="white"
// // //           opacity="0.5"
// // //           filter="url(#whiteGlow)"
// // //         />

// // //         {/* Right side midpoint */}
// // //         <circle
// // //           cx="891"
// // //           cy="1618"
// // //           r="5"
// // //           fill="white"
// // //           opacity="0.5"
// // //           filter="url(#whiteGlow)"
// // //         />

// // //         {/* Left side midpoint */}
// // //         <circle
// // //           cx="7.5"
// // //           cy="1618"
// // //           r="5"
// // //           fill="white"
// // //           opacity="0.5"
// // //           filter="url(#whiteGlow)"
// // //         />

// // //         {/* Bottom end */}
// // //         <circle
// // //           cx="7.5"
// // //           cy="2981"
// // //           r="4"
// // //           fill="white"
// // //           opacity="0.4"
// // //           filter="url(#whiteGlow)"
// // //         />

// // //         {/* Branch start */}
// // //         <circle
// // //           cx="428.5"
// // //           cy="3215"
// // //           r="4"
// // //           fill="white"
// // //           opacity="0.4"
// // //           filter="url(#whiteGlow)"
// // //         />

// // //         {/* Branch corner */}
// // //         <circle
// // //           cx="7.5"
// // //           cy="3075"
// // //           r="4"
// // //           fill="white"
// // //           opacity="0.35"
// // //           filter="url(#whiteGlow)"
// // //         />

// // //         {/* Branch end */}
// // //         <circle
// // //           cx="7.5"
// // //           cy="2707"
// // //           r="4"
// // //           fill="white"
// // //           opacity="0.35"
// // //           filter="url(#whiteGlow)"
// // //         />

// // //         {/* ═══════════════════════════════════════════════
// // //             YELLOW GLOWING DOTS moving along paths
// // //         ═══════════════════════════════════════════════ */}

// // //         {/* ── Dot 1: Main path, top → bottom ── */}
// // //         <circle r="5" fill="#FDB913" filter="url(#yellowGlow)">
// // //           <animateMotion dur="12s" repeatCount="indefinite" rotate="auto">
// // //             <mpath href="#motionPath1" />
// // //           </animateMotion>
// // //         </circle>

// // //         {/* ── Dot 2: Main path, bottom → top (reverse, offset) ── */}
// // //         <circle r="4" fill="#FDB913" opacity="0.7" filter="url(#yellowGlow)">
// // //           <animateMotion
// // //             dur="14s"
// // //             repeatCount="indefinite"
// // //             begin="3s"
// // //             rotate="auto"
// // //           >
// // //             <mpath href="#motionPath1Rev" />
// // //           </animateMotion>
// // //         </circle>

// // //         {/* ── Dot 3: Main path, top → bottom (slower, smaller) ── */}
// // //         <circle r="3.5" fill="#FDB913" opacity="0.5">
// // //           <animateMotion
// // //             dur="18s"
// // //             repeatCount="indefinite"
// // //             begin="7s"
// // //             rotate="auto"
// // //           >
// // //             <mpath href="#motionPath1" />
// // //           </animateMotion>
// // //         </circle>

// // //         {/* ── Dot 4: Branch path, bottom → top ── */}
// // //         <circle r="4.5" fill="#FDB913" filter="url(#yellowGlow)">
// // //           <animateMotion
// // //             dur="6s"
// // //             repeatCount="indefinite"
// // //             begin="1s"
// // //             rotate="auto"
// // //           >
// // //             <mpath href="#motionPath2" />
// // //           </animateMotion>
// // //         </circle>

// // //         {/* ── Dot 5: Branch path, top → bottom (reverse) ── */}
// // //         <circle r="3" fill="#FDB913" opacity="0.6">
// // //           <animateMotion
// // //             dur="7s"
// // //             repeatCount="indefinite"
// // //             begin="4s"
// // //             keyPoints="1;0"
// // //             keyTimes="0;1"
// // //             calcMode="linear"
// // //           >
// // //             <mpath href="#motionPath2" />
// // //           </animateMotion>
// // //         </circle>

// // //         {/* ── Dot 6: Large trailing glow on main path ── */}
// // //         <circle r="12" fill="#FDB913" opacity="0.12">
// // //           <animateMotion dur="12s" repeatCount="indefinite" rotate="auto">
// // //             <mpath href="#motionPath1" />
// // //           </animateMotion>
// // //         </circle>

// // //         {/* ── Dot 7: Large trailing glow on branch path ── */}
// // //         <circle r="10" fill="#FDB913" opacity="0.1">
// // //           <animateMotion
// // //             dur="6s"
// // //             repeatCount="indefinite"
// // //             begin="1s"
// // //             rotate="auto"
// // //           >
// // //             <mpath href="#motionPath2" />
// // //           </animateMotion>
// // //         </circle>

// // //         {/* ═══════════════════════════════════════════════
// // //             PULSING YELLOW DOTS at key junctions
// // //         ═══════════════════════════════════════════════ */}

// // //         {/* Pulse at top-right corner */}
// // //         <circle
// // //           cx="891"
// // //           cy="225"
// // //           r="6"
// // //           fill="#FDB913"
// // //           opacity="0.5"
// // //           filter="url(#yellowGlow)"
// // //         >
// // //           <animate
// // //             attributeName="r"
// // //             values="4;10;4"
// // //             dur="3s"
// // //             repeatCount="indefinite"
// // //           />
// // //           <animate
// // //             attributeName="opacity"
// // //             values="0.6;0.15;0.6"
// // //             dur="3s"
// // //             repeatCount="indefinite"
// // //           />
// // //         </circle>

// // //         {/* Pulse at left-middle corner */}
// // //         <circle
// // //           cx="7.5"
// // //           cy="1618"
// // //           r="6"
// // //           fill="#FDB913"
// // //           opacity="0.5"
// // //           filter="url(#yellowGlow)"
// // //         >
// // //           <animate
// // //             attributeName="r"
// // //             values="4;10;4"
// // //             dur="3s"
// // //             repeatCount="indefinite"
// // //             begin="1.5s"
// // //           />
// // //           <animate
// // //             attributeName="opacity"
// // //             values="0.6;0.15;0.6"
// // //             dur="3s"
// // //             repeatCount="indefinite"
// // //             begin="1.5s"
// // //           />
// // //         </circle>

// // //         {/* Pulse at branch junction */}
// // //         <circle
// // //           cx="7.5"
// // //           cy="3075"
// // //           r="5"
// // //           fill="#FDB913"
// // //           opacity="0.4"
// // //           filter="url(#yellowGlow)"
// // //         >
// // //           <animate
// // //             attributeName="r"
// // //             values="3;8;3"
// // //             dur="2.5s"
// // //             repeatCount="indefinite"
// // //             begin="0.8s"
// // //           />
// // //           <animate
// // //             attributeName="opacity"
// // //             values="0.5;0.1;0.5"
// // //             dur="2.5s"
// // //             repeatCount="indefinite"
// // //             begin="0.8s"
// // //           />
// // //         </circle>
// // //       </svg>
// // //     </div>

// // //     {/* ── Ambient glow blobs ── */}
// // //     <div
// // //       className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.04] -translate-x-1/2 -translate-y-1/2"
// // //       style={{ background: "#FDB913" }}
// // //     />
// // //     <div
// // //       className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.03] translate-x-1/3 translate-y-1/3"
// // //       style={{ background: "#FDB913" }}
// // //     />

// // //     <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
// // //       {/* ── Section Header ── */}
// // //       <motion.header
// // //         initial={{ opacity: 0, y: 30 }}
// // //         whileInView={{ opacity: 1, y: 0 }}
// // //         viewport={{ once: true }}
// // //         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// // //         className="text-center max-w-3xl mx-auto mb-20 lg:mb-28"
// // //       >
// // //         <span
// // //           className="inline-block px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-6"
// // //           style={{
// // //             background: "rgba(253,185,19,0.08)",
// // //             color: "#FDB913",
// // //             border: "1px solid rgba(253,185,19,0.15)",
// // //           }}
// // //         >
// // //           What We Deliver
// // //         </span>

// // //         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
// // //           Comprehensive SAP Services
// // //         </h2>

// // //         <p className="text-lg leading-relaxed text-white">
// // //           End-to-end solutions designed to maximize your SAP investment and
// // //           accelerate digital transformation.
// // //         </p>
// // //       </motion.header>

// // //       {/* ── Services Rows ── */}
// // //       <div className="space-y-20 lg:space-y-28">
// // //         {servicesData.map((service, index) => (
// // //           <ServiceRow key={service.id} service={service} index={index} />
// // //         ))}
// // //       </div>
// // //     </div>
// // //   </section>
// // // );

// // // export default ServicesSection;

// // import { useState } from "react";
// // import { motion } from "framer-motion";
// // import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

// // // ─── Data ───────────────────────────────────────────────────────────
// // const servicesData = [
// //   {
// //     id: 5,
// //     title: "Application Management Services",
// //     description:
// //       "Ensure uninterrupted business operations with end-to-end SAP Application Management Services. We provide 24/7 monitoring, proactive maintenance, incident resolution, performance optimization, and continuous enhancements to maximize system availability and business productivity.",
// //     image:
// //       "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
// //     imageAlt: "SAP Application Management Services",
// //     image2:
// //       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
// //     imageAlt2: "SAP Monitoring Dashboard",
// //     features: [
// //       "24/7 Application Monitoring & Support",
// //       "Incident & Problem Management",
// //       "Performance Optimization",
// //       "Release & Change Management",
// //     ],
// //     path: "/services/app-maintenance",
// //   },
// //   {
// //     id: 6,
// //     title: "Data Migration & Transformation",
// //     description:
// //       "Accelerate your digital transformation with secure and reliable SAP data migration services. We help organizations migrate from legacy systems to SAP HANA and SAP S/4HANA while ensuring data accuracy, consistency, and minimal business disruption.",
// //     image:
// //       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
// //     imageAlt: "SAP Data Migration & Transformation",
// //     image2:
// //       "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
// //     imageAlt2: "Data Analytics Visualization",
// //     features: [
// //       "SAP HANA & S/4HANA Migration",
// //       "Legacy Data Conversion",
// //       "Data Validation & Cleansing",
// //       "System Consolidation",
// //     ],
// //     path: "/services/data-migration",
// //   },
// //   {
// //     id: 7,
// //     title: "SAP Talent & Staff Augmentation",
// //     description:
// //       "Strengthen your SAP initiatives with experienced consultants, architects, developers, and project managers. Our flexible engagement models provide the right expertise to support implementation, upgrades, support, and transformation projects.",
// //     image:
// //       "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
// //     imageAlt: "SAP Talent & Staff Augmentation",
// //     image2:
// //       "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
// //     imageAlt2: "Team Collaboration",
// //     features: [
// //       "Certified SAP Functional Consultants",
// //       "SAP Technical Experts",
// //       "Project & Delivery Managers",
// //       "Flexible Resource Engagement",
// //     ],
// //     path: "/services/staff-augmentation",
// //   },
// //   {
// //     id: 8,
// //     title: "Code Quality & Security",
// //     description:
// //       "Deliver enterprise-grade SAP applications with robust code quality, security, and compliance practices. We perform continuous code reviews, vulnerability assessments, and governance checks to ensure secure, scalable, and high-performing SAP solutions.",
// //     image:
// //       "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
// //     imageAlt: "SAP Code Quality & Security",
// //     image2:
// //       "https://images.unsplash.com/photo-1563986768609-322da13575f2?q=80&w=800&auto=format&fit=crop",
// //     imageAlt2: "Security Code Analysis",
// //     features: [
// //       "Automated Code Reviews",
// //       "Security & Vulnerability Assessments",
// //       "Compliance & Governance Validation",
// //       "Risk Analysis & Mitigation",
// //     ],
// //     path: "/services/code-quality-security",
// //   },
// // ];

// // // ─── Check Icon ─────────────────────────────────────────────────────
// // const CheckIcon = () => (
// //   <svg
// //     width="15"
// //     height="12"
// //     viewBox="0 0 15 12"
// //     fill="none"
// //     xmlns="http://www.w3.org/2000/svg"
// //     className="flex-shrink-0"
// //   >
// //     <path
// //       d="M1 6L5.24264 10.2426L13.727 1.75732"
// //       stroke="#FDB913"
// //       strokeWidth="2"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     />
// //   </svg>
// // );

// // // ─── Image Pair Component ───────────────────────────────────────────
// // const ImagePair = ({ service, isReversed }) => {
// //   const [img1Loaded, setImg1Loaded] = useState(false);
// //   const [img2Loaded, setImg2Loaded] = useState(false);

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, scale: 0.9, x: isReversed ? 30 : -30 }}
// //       whileInView={{ opacity: 1, scale: 1, x: 0 }}
// //       viewport={{ once: true }}
// //       transition={{
// //         delay: isReversed ? 0.15 : 0.3,
// //         duration: 0.9,
// //         ease: [0.22, 1, 0.36, 1],
// //       }}
// //       className="relative w-full"
// //       style={{ minHeight: "420px" }}
// //     >
// //       {/* Glow behind images */}
// //       <div
// //         className="absolute -inset-6 rounded-[2rem] opacity-0 hover:opacity-100 transition-opacity duration-700 blur-2xl pointer-events-none"
// //         style={{ background: "rgba(253,185,19,0.06)" }}
// //       />

// //       {/* IMAGE 1 — Main (larger, offset to one side) */}
// //       <motion.div
// //         whileHover={{ y: -4 }}
// //         transition={{ duration: 0.4 }}
// //         className={`
// //           relative rounded-2xl overflow-hidden border border-white/[0.06]
// //           transition-all duration-500 hover:border-white/[0.15]
// //           ${isReversed ? "ml-auto w-[95%]" : "w-[95%]"}
// //         `}
// //         style={{
// //           boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
// //           background:
// //             "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
// //         }}
// //       >
// //         {!img1Loaded && (
// //           <div
// //             className="absolute inset-0 animate-pulse"
// //             style={{
// //               background:
// //                 "linear-gradient(90deg, rgba(255,255,255,0.02) 25%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.02) 75%)",
// //               backgroundSize: "200% 100%",
// //               animation: "shimmer 1.5s infinite",
// //             }}
// //           />
// //         )}

// //         <img
// //           src={service.image}
// //           alt={service.imageAlt}
// //           loading="lazy"
// //           onLoad={() => setImg1Loaded(true)}
// //           className={`w-full h-[380px] lg:h-[320px] object-cover transition-all duration-700 hover:scale-[1.03] ${
// //             img1Loaded ? "opacity-100" : "opacity-0"
// //           }`}
// //         />

// //         <div
// //           className="absolute inset-x-0 top-0 h-24 pointer-events-none"
// //           style={{
// //             background:
// //               "linear-gradient(to bottom, rgba(8,28,52,0.35), transparent)",
// //           }}
// //         />
// //         <div
// //           className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
// //           style={{
// //             background:
// //               "linear-gradient(to top, rgba(8,28,52,0.2), transparent)",
// //           }}
// //         />
// //       </motion.div>

// //       {/* IMAGE 2 — Secondary (smaller, overlapping bottom) */}
// //       {/* <motion.div
// //         initial={{ opacity: 0, y: 20, scale: 0.95 }}
// //         whileInView={{ opacity: 1, y: 0, scale: 1 }}
// //         viewport={{ once: true }}
// //         transition={{
// //           delay: isReversed ? 0.35 : 0.55,
// //           duration: 0.7,
// //           ease: [0.22, 1, 0.36, 1],
// //         }}
// //         whileHover={{ y: -6, scale: 1.02 }}
// //         className={`
// //           absolute bottom-0 rounded-2xl overflow-hidden border border-white/[0.1]
// //           transition-all duration-500 hover:border-[#FDB913]/30 z-10
// //           ${isReversed ? "left-0 w-[52%]" : "right-0 w-[52%]"}
// //         `}
// //         style={{
// //           boxShadow:
// //             "0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(253,185,19,0.08)",
// //           background:
// //             "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
// //         }}
// //       >
// //         {!img2Loaded && (
// //           <div
// //             className="absolute inset-0 animate-pulse"
// //             style={{
// //               background:
// //                 "linear-gradient(90deg, rgba(255,255,255,0.02) 25%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.02) 75%)",
// //               backgroundSize: "200% 100%",
// //               animation: "shimmer 1.5s infinite",
// //             }}
// //           />
// //         )}

// //         <img
// //           src={service.image2}
// //           alt={service.imageAlt2}
// //           loading="lazy"
// //           onLoad={() => setImg2Loaded(true)}
// //           className={`w-full h-[200px] lg:h-[230px] object-cover transition-all duration-700 hover:scale-[1.05] ${
// //             img2Loaded ? "opacity-100" : "opacity-0"
// //           }`}
// //         />

// //         <div
// //           className="absolute inset-0 pointer-events-none"
// //           style={{
// //             background:
// //               "linear-gradient(135deg, rgba(8,28,52,0.25), transparent 60%)",
// //           }}
// //         />
// //       </motion.div> */}

// //       {/* Decorative corner dot */}
// //       <div
// //         className={`
// //           absolute w-3 h-3 rounded-full opacity-40 z-20
// //           ${isReversed ? "top-4 left-4" : "top-4 right-4"}
// //         `}
// //         style={{
// //           background: "#FDB913",
// //           boxShadow: "0 0 12px rgba(253,185,19,0.4)",
// //         }}
// //       />

// //       {/* Decorative small ring */}
// //       <div
// //         className={`
// //           absolute w-6 h-6 rounded-full opacity-20 z-20
// //           ${isReversed ? "top-3 right-[18%]" : "top-3 left-[18%]"}
// //         `}
// //         style={{ border: "1.5px solid #FDB913" }}
// //       />
// //     </motion.div>
// //   );
// // };

// // // ─── Service Row ────────────────────────────────────────────────────
// // const ServiceRow = ({ service, index }) => {
// //   const isReversed = index % 2 !== 0;

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 60 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true, margin: "-80px" }}
// //       transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// //       className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
// //     >
// //       {/* ── Text Side ── */}
// //       <div
// //         className={`${
// //           isReversed ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8"
// //         }`}
// //       >
// //         {/* Title */}
// //         <motion.h3
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.15, duration: 0.5 }}
// //           className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-accent-300 mb-5 leading-tight"
// //         >
// //           {service.title}
// //         </motion.h3>

// //         {/* Gold divider */}
// //         <motion.div
// //           initial={{ scaleX: 0 }}
// //           whileInView={{ scaleX: 1 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
// //           className="w-16 h-[2px] mb-6 origin-left"
// //           style={{ background: "linear-gradient(90deg, #FDB913, transparent)" }}
// //         />

// //         {/* Description */}
// //         <motion.p
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.25, duration: 0.5 }}
// //           className="text-white text-[15px] leading-[1.8] mb-8 max-w-lg"
// //         >
// //           {service.description}
// //         </motion.p>

// //         {/* Features */}
// //         <motion.ul
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.35, duration: 0.5 }}
// //           className="space-y-3.5 mb-9"
// //         >
// //           {service.features.map((feature, idx) => (
// //             <motion.li
// //               key={idx}
// //               initial={{ opacity: 0, x: -15 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: 0.4 + idx * 0.08, duration: 0.4 }}
// //               className="flex items-start gap-3 text-sm text-white"
// //             >
// //               <span className="mt-0.5">
// //                 <CheckIcon />
// //               </span>
// //               <span className="leading-relaxed">{feature}</span>
// //             </motion.li>
// //           ))}
// //         </motion.ul>

// //         {/* CTA — navigates to service.path */}
// //         <motion.a
// //           href={service.path}
// //           initial={{ opacity: 0, y: 15 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.6, duration: 0.4 }}
// //           whileHover={{ x: 6 }}
// //           whileTap={{ scale: 0.97 }}
// //           className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide group/btn"
// //           style={{ color: "#FDB913" }}
// //         >
// //           <span>Learn More</span>
// //           <span
// //             className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover/btn:bg-[#FDB913]/10"
// //             style={{ border: "1px solid rgba(253,185,19,0.25)" }}
// //           >
// //             <FaArrowRight
// //               size={12}
// //               className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-rotate-45"
// //             />
// //           </span>
// //         </motion.a>
// //       </div>

// //       {/* ── Images Side ── */}
// //       <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
// //         <ImagePair service={service} isReversed={isReversed} />
// //       </div>
// //     </motion.div>
// //   );
// // };

// // // ─── Main Section ───────────────────────────────────────────────────
// // const ServicesSection = () => (
// //   <section
// //     id="services"
// //     className="relative overflow-hidden py-20 lg:py-20 bg-[#01182f]"
// //   >
// //     {/* ═══════════════════════════════════════════════════════════════
// //         ZIGZAG SVG LINE — follows alternating image positions

// //         Row 1: images RIGHT  → line goes RIGHT
// //         Row 2: images LEFT   → line goes LEFT
// //         Row 3: images RIGHT  → line goes RIGHT
// //         Row 4: images LEFT   → line goes LEFT
// //     ═══════════════════════════════════════════════════════════════ */}
// //     <div
// //       className="absolute inset-0 pointer-events-none hidden xl:block"
// //       style={{ left: "17.5%" }}
// //     >
// //       <svg
// //         width="898"
// //         height="3215"
// //         viewBox="0 0 898 3215"
// //         fill="none"
// //         xmlns="http://www.w3.org/2000/svg"
// //         className="h-full"
// //       >
// //         <defs>
// //           {/* Yellow glow */}
// //           <filter
// //             id="yellowGlow"
// //             x="-100%"
// //             y="-100%"
// //             width="300%"
// //             height="300%"
// //           >
// //             <feGaussianBlur
// //               in="SourceGraphic"
// //               stdDeviation="6"
// //               result="blur1"
// //             />
// //             <feGaussianBlur
// //               in="SourceGraphic"
// //               stdDeviation="2"
// //               result="blur2"
// //             />
// //             <feMerge>
// //               <feMergeNode in="blur1" />
// //               <feMergeNode in="blur2" />
// //               <feMergeNode in="SourceGraphic" />
// //             </feMerge>
// //           </filter>

// //           {/* White node glow */}
// //           <filter id="whiteGlow" x="-100%" y="-100%" width="300%" height="300%">
// //             <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
// //             <feMerge>
// //               <feMergeNode in="blur" />
// //               <feMergeNode in="SourceGraphic" />
// //             </feMerge>
// //           </filter>

// //           {/* Line medium glow */}
// //           <filter id="lineGlow" x="-20%" y="-5%" width="140%" height="110%">
// //             <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
// //             <feMerge>
// //               <feMergeNode in="blur" />
// //               <feMergeNode in="SourceGraphic" />
// //             </feMerge>
// //           </filter>

// //           {/* Line strong outer glow */}
// //           <filter
// //             id="lineGlowStrong"
// //             x="-20%"
// //             y="-5%"
// //             width="140%"
// //             height="110%"
// //           >
// //             <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
// //             <feMerge>
// //               <feMergeNode in="blur" />
// //             </feMerge>
// //           </filter>

// //           {/* ── ZIGZAG motion paths ── */}
// //           {/* Forward: top → bottom, zigzagging right/left per row */}
// //           <path
// //             id="zigzagFwd"
// //             d="M449,0 L449,480 L891,480 L891,1080 L7,1080 L7,1680 L891,1680 L891,2280 L7,2280 L7,2981"
// //             fill="none"
// //           />
// //           {/* Reverse: bottom → top */}
// //           <path
// //             id="zigzagRev"
// //             d="M7,2981 L7,2280 L891,2280 L891,1680 L7,1680 L7,1080 L891,1080 L891,480 L449,480 L449,0"
// //             fill="none"
// //           />
// //           {/* Branch path */}
// //           <path
// //             id="branchPath"
// //             d="M449,3215 L449,3075 L7,3075 L7,2700"
// //             fill="none"
// //           />
// //           {/* Branch reverse */}
// //           <path
// //             id="branchPathRev"
// //             d="M7,2700 L7,3075 L449,3075 L449,3215"
// //             fill="none"
// //           />
// //         </defs>

// //         {/* ═══════════════════════════════════════════
// //             ZIGZAG WHITE LINES — 3-layer glow
// //         ═══════════════════════════════════════════ */}

// //         {/* ZIGZAG — Layer 1: outer glow */}
// //         <path
// //           d="M449,0 L449,480 L891,480 L891,1080 L7,1080 L7,1680 L891,1680 L891,2280 L7,2280 L7,2981"
// //           stroke="white"
// //           strokeWidth="6"
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //           opacity="0.06"
// //           filter="url(#lineGlowStrong)"
// //         />
// //         {/* ZIGZAG — Layer 2: medium glow */}
// //         <path
// //           d="M449,0 L449,480 L891,480 L891,1080 L7,1080 L7,1680 L891,1680 L891,2280 L7,2280 L7,2981"
// //           stroke="white"
// //           strokeWidth="3"
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //           opacity="0.12"
// //           filter="url(#lineGlow)"
// //         />
// //         {/* ZIGZAG — Layer 3: sharp core */}
// //         <path
// //           d="M449,0 L449,480 L891,480 L891,1080 L7,1080 L7,1680 L891,1680 L891,2280 L7,2280 L7,2981"
// //           stroke="white"
// //           strokeWidth="1.8"
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //           opacity="0.35"
// //         />

// //         {/* BRANCH — Layer 1 */}
// //         <path
// //           d="M449,3215 L449,3075 L7,3075 L7,2700"
// //           stroke="white"
// //           strokeWidth="5"
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //           opacity="0.06"
// //           filter="url(#lineGlowStrong)"
// //         />
// //         {/* BRANCH — Layer 2 */}
// //         <path
// //           d="M449,3215 L449,3075 L7,3075 L7,2700"
// //           stroke="white"
// //           strokeWidth="2.5"
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //           opacity="0.12"
// //           filter="url(#lineGlow)"
// //         />
// //         {/* BRANCH — Layer 3 */}
// //         <path
// //           d="M449,3215 L449,3075 L7,3075 L7,2700"
// //           stroke="white"
// //           strokeWidth="1.5"
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //           opacity="0.3"
// //         />

// //         {/* ═══════════════════════════════════════════
// //             STATIC NODE DOTS at every zigzag turn
// //         ═══════════════════════════════════════════ */}

// //         {/* Top start */}
// //         <circle
// //           cx="449"
// //           cy="0"
// //           r="4"
// //           fill="white"
// //           opacity="0.4"
// //           filter="url(#whiteGlow)"
// //         />

// //         {/* Turn 1 — center to right (Row 1 images RIGHT) */}
// //         <circle
// //           cx="449"
// //           cy="480"
// //           r="4"
// //           fill="white"
// //           opacity="0.35"
// //           filter="url(#whiteGlow)"
// //         />
// //         <circle
// //           cx="891"
// //           cy="480"
// //           r="5"
// //           fill="white"
// //           opacity="0.5"
// //           filter="url(#whiteGlow)"
// //         />

// //         {/* Turn 2 — right to left (Row 2 images LEFT) */}
// //         <circle
// //           cx="891"
// //           cy="1080"
// //           r="5"
// //           fill="white"
// //           opacity="0.5"
// //           filter="url(#whiteGlow)"
// //         />
// //         <circle
// //           cx="7"
// //           cy="1080"
// //           r="5"
// //           fill="white"
// //           opacity="0.5"
// //           filter="url(#whiteGlow)"
// //         />

// //         {/* Turn 3 — left to right (Row 3 images RIGHT) */}
// //         <circle
// //           cx="7"
// //           cy="1680"
// //           r="5"
// //           fill="white"
// //           opacity="0.5"
// //           filter="url(#whiteGlow)"
// //         />
// //         <circle
// //           cx="891"
// //           cy="1680"
// //           r="5"
// //           fill="white"
// //           opacity="0.5"
// //           filter="url(#whiteGlow)"
// //         />

// //         {/* Turn 4 — right to left (Row 4 images LEFT) */}
// //         <circle
// //           cx="891"
// //           cy="2280"
// //           r="5"
// //           fill="white"
// //           opacity="0.5"
// //           filter="url(#whiteGlow)"
// //         />
// //         <circle
// //           cx="7"
// //           cy="2280"
// //           r="5"
// //           fill="white"
// //           opacity="0.5"
// //           filter="url(#whiteGlow)"
// //         />

// //         {/* Bottom end */}
// //         <circle
// //           cx="7"
// //           cy="2981"
// //           r="4"
// //           fill="white"
// //           opacity="0.4"
// //           filter="url(#whiteGlow)"
// //         />

// //         {/* Branch nodes */}
// //         <circle
// //           cx="449"
// //           cy="3215"
// //           r="4"
// //           fill="white"
// //           opacity="0.4"
// //           filter="url(#whiteGlow)"
// //         />
// //         <circle
// //           cx="7"
// //           cy="3075"
// //           r="4"
// //           fill="white"
// //           opacity="0.35"
// //           filter="url(#whiteGlow)"
// //         />
// //         <circle
// //           cx="7"
// //           cy="2700"
// //           r="4"
// //           fill="white"
// //           opacity="0.35"
// //           filter="url(#whiteGlow)"
// //         />

// //         {/* ═══════════════════════════════════════════
// //             YELLOW GLOWING DOTS moving along zigzag
// //         ═══════════════════════════════════════════ */}

// //         {/* Dot 1: zigzag forward */}
// //         <circle r="5" fill="#FDB913" filter="url(#yellowGlow)">
// //           <animateMotion dur="16s" repeatCount="indefinite" rotate="auto">
// //             <mpath href="#zigzagFwd" />
// //           </animateMotion>
// //         </circle>

// //         {/* Dot 2: zigzag reverse */}
// //         <circle r="4" fill="#FDB913" opacity="0.7" filter="url(#yellowGlow)">
// //           <animateMotion
// //             dur="18s"
// //             repeatCount="indefinite"
// //             begin="4s"
// //             rotate="auto"
// //           >
// //             <mpath href="#zigzagRev" />
// //           </animateMotion>
// //         </circle>

// //         {/* Dot 3: zigzag forward (slower, smaller) */}
// //         <circle r="3.5" fill="#FDB913" opacity="0.5">
// //           <animateMotion
// //             dur="22s"
// //             repeatCount="indefinite"
// //             begin="8s"
// //             rotate="auto"
// //           >
// //             <mpath href="#zigzagFwd" />
// //           </animateMotion>
// //         </circle>

// //         {/* Dot 4: branch forward */}
// //         <circle r="4.5" fill="#FDB913" filter="url(#yellowGlow)">
// //           <animateMotion
// //             dur="6s"
// //             repeatCount="indefinite"
// //             begin="1s"
// //             rotate="auto"
// //           >
// //             <mpath href="#branchPath" />
// //           </animateMotion>
// //         </circle>

// //         {/* Dot 5: branch reverse */}
// //         <circle r="3" fill="#FDB913" opacity="0.6">
// //           <animateMotion
// //             dur="7s"
// //             repeatCount="indefinite"
// //             begin="4s"
// //             keyPoints="1;0"
// //             keyTimes="0;1"
// //             calcMode="linear"
// //           >
// //             <mpath href="#branchPath" />
// //           </animateMotion>
// //         </circle>

// //         {/* Dot 6: large trailing glow on zigzag */}
// //         <circle r="14" fill="#FDB913" opacity="0.1">
// //           <animateMotion dur="16s" repeatCount="indefinite" rotate="auto">
// //             <mpath href="#zigzagFwd" />
// //           </animateMotion>
// //         </circle>

// //         {/* Dot 7: large trailing glow on branch */}
// //         <circle r="10" fill="#FDB913" opacity="0.08">
// //           <animateMotion
// //             dur="6s"
// //             repeatCount="indefinite"
// //             begin="1s"
// //             rotate="auto"
// //           >
// //             <mpath href="#branchPath" />
// //           </animateMotion>
// //         </circle>

// //         {/* ═══════════════════════════════════════════
// //             PULSING YELLOW DOTS at image-side peaks
// //             (right side for odd rows, left side for even)
// //         ═══════════════════════════════════════════ */}

// //         {/* Pulse — Row 1 RIGHT peak */}
// //         <circle
// //           cx="891"
// //           cy="480"
// //           r="6"
// //           fill="#FDB913"
// //           opacity="0.5"
// //           filter="url(#yellowGlow)"
// //         >
// //           <animate
// //             attributeName="r"
// //             values="4;12;4"
// //             dur="3s"
// //             repeatCount="indefinite"
// //           />
// //           <animate
// //             attributeName="opacity"
// //             values="0.6;0.1;0.6"
// //             dur="3s"
// //             repeatCount="indefinite"
// //           />
// //         </circle>

// //         {/* Pulse — Row 2 LEFT peak */}
// //         <circle
// //           cx="7"
// //           cy="1080"
// //           r="6"
// //           fill="#FDB913"
// //           opacity="0.5"
// //           filter="url(#yellowGlow)"
// //         >
// //           <animate
// //             attributeName="r"
// //             values="4;12;4"
// //             dur="3s"
// //             repeatCount="indefinite"
// //             begin="0.75s"
// //           />
// //           <animate
// //             attributeName="opacity"
// //             values="0.6;0.1;0.6"
// //             dur="3s"
// //             repeatCount="indefinite"
// //             begin="0.75s"
// //           />
// //         </circle>

// //         {/* Pulse — Row 3 RIGHT peak */}
// //         <circle
// //           cx="891"
// //           cy="1680"
// //           r="6"
// //           fill="#FDB913"
// //           opacity="0.5"
// //           filter="url(#yellowGlow)"
// //         >
// //           <animate
// //             attributeName="r"
// //             values="4;12;4"
// //             dur="3s"
// //             repeatCount="indefinite"
// //             begin="1.5s"
// //           />
// //           <animate
// //             attributeName="opacity"
// //             values="0.6;0.1;0.6"
// //             dur="3s"
// //             repeatCount="indefinite"
// //             begin="1.5s"
// //           />
// //         </circle>

// //         {/* Pulse — Row 4 LEFT peak */}
// //         <circle
// //           cx="7"
// //           cy="2280"
// //           r="6"
// //           fill="#FDB913"
// //           opacity="0.5"
// //           filter="url(#yellowGlow)"
// //         >
// //           <animate
// //             attributeName="r"
// //             values="4;12;4"
// //             dur="3s"
// //             repeatCount="indefinite"
// //             begin="2.25s"
// //           />
// //           <animate
// //             attributeName="opacity"
// //             values="0.6;0.1;0.6"
// //             dur="3s"
// //             repeatCount="indefinite"
// //             begin="2.25s"
// //           />
// //         </circle>

// //         {/* Pulse — Branch junction */}
// //         <circle
// //           cx="7"
// //           cy="3075"
// //           r="5"
// //           fill="#FDB913"
// //           opacity="0.4"
// //           filter="url(#yellowGlow)"
// //         >
// //           <animate
// //             attributeName="r"
// //             values="3;8;3"
// //             dur="2.5s"
// //             repeatCount="indefinite"
// //             begin="0.8s"
// //           />
// //           <animate
// //             attributeName="opacity"
// //             values="0.5;0.1;0.5"
// //             dur="2.5s"
// //             repeatCount="indefinite"
// //             begin="0.8s"
// //           />
// //         </circle>
// //       </svg>
// //     </div>

// //     {/* ── Ambient glow blobs ── */}
// //     <div
// //       className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.04] -translate-x-1/2 -translate-y-1/2"
// //       style={{ background: "#FDB913" }}
// //     />
// //     <div
// //       className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.03] translate-x-1/3 translate-y-1/3"
// //       style={{ background: "#FDB913" }}
// //     />

// //     <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
// //       {/* ── Section Header ── */}
// //       <motion.header
// //         initial={{ opacity: 0, y: 30 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// //         className="text-center max-w-3xl mx-auto mb-20 lg:mb-28"
// //       >
// //         <span
// //           className="inline-block px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-6"
// //           style={{
// //             background: "rgba(253,185,19,0.08)",
// //             color: "#FDB913",
// //             border: "1px solid rgba(253,185,19,0.15)",
// //           }}
// //         >
// //           What We Deliver
// //         </span>

// //         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
// //           Comprehensive SAP Services
// //         </h2>

// //         <p className="text-lg leading-relaxed text-white">
// //           End-to-end solutions designed to maximize your SAP investment and
// //           accelerate digital transformation.
// //         </p>
// //       </motion.header>

// //       {/* ── Services Rows ── */}
// //       <div className="space-y-24 lg:space-y-32">
// //         {servicesData.map((service, index) => (
// //           <ServiceRow key={service.id} service={service} index={index} />
// //         ))}
// //       </div>
// //     </div>

// //     <style>{`
// //       @keyframes shimmer {
// //         0%   { background-position: 200% 0; }
// //         100% { background-position: -200% 0; }
// //       }
// //     `}</style>
// //   </section>
// // );

// // export default ServicesSection;

// // import { useState, useEffect } from "react";
// // import { motion } from "framer-motion";
// // import { FaArrowRight } from "react-icons/fa";

// // // ═══════════════════════════════════════════════════════════════════
// // // DATA
// // // ═══════════════════════════════════════════════════════════════════
// // const servicesData = [
// //   {
// //     id: 5,
// //     title: "Application Management Services",
// //     description:
// //       "Ensure uninterrupted business operations with end-to-end SAP Application Management Services. We provide 24/7 monitoring, proactive maintenance, incident resolution, performance optimization, and continuous enhancements to maximize system availability and business productivity.",
// //     features: [
// //       "24/7 Application Monitoring & Support",
// //       "Incident & Problem Management",
// //       "Performance Optimization",
// //       "Release & Change Management",
// //     ],
// //     path: "/services/app-maintenance",
// //   },
// //   {
// //     id: 6,
// //     title: "Data Migration & Transformation",
// //     description:
// //       "Accelerate your digital transformation with secure and reliable SAP data migration services. We help organizations migrate from legacy systems to SAP HANA and SAP S/4HANA while ensuring data accuracy, consistency, and minimal business disruption.",
// //     features: [
// //       "SAP HANA & S/4HANA Migration",
// //       "Legacy Data Conversion",
// //       "Data Validation & Cleansing",
// //       "System Consolidation",
// //     ],
// //     path: "/services/data-migration",
// //   },
// //   {
// //     id: 7,
// //     title: "SAP Talent & Staff Augmentation",
// //     description:
// //       "Strengthen your SAP initiatives with experienced consultants, architects, developers, and project managers. Our flexible engagement models provide the right expertise to support implementation, upgrades, support, and transformation projects.",
// //     features: [
// //       "Certified SAP Functional Consultants",
// //       "SAP Technical Experts",
// //       "Project & Delivery Managers",
// //       "Flexible Resource Engagement",
// //     ],
// //     path: "/services/staff-augmentation",
// //   },
// //   {
// //     id: 8,
// //     title: "Code Quality & Security",
// //     description:
// //       "Deliver enterprise-grade SAP applications with robust code quality, security, and compliance practices. We perform continuous code reviews, vulnerability assessments, and governance checks to ensure secure, scalable, and high-performing SAP solutions.",
// //     features: [
// //       "Automated Code Reviews",
// //       "Security & Vulnerability Assessments",
// //       "Compliance & Governance Validation",
// //       "Risk Analysis & Mitigation",
// //     ],
// //     path: "/services/code-quality-security",
// //   },
// // ];

// // // ─── Ecosystem Layout Constants ────────────────────────────────────
// // const CENTER = { x: 50, y: 45 };
// // const RADIUS = 34;

// // const ecosystemModules = [
// //   { id: "support", title: "SAP Support", short: "Support", angle: 0 },
// //   { id: "btp", title: "SAP BTP", short: "SAP BTP", angle: 45 },
// //   { id: "fiori", title: "SAP Fiori", short: "Fiori", angle: 90 },
// //   { id: "analytics", title: "Analytics Cloud", short: "Analytics", angle: 135 },
// //   {
// //     id: "integration",
// //     title: "Integration Suite",
// //     short: "Integration",
// //     angle: 180,
// //   },
// //   {
// //     id: "cloud",
// //     title: "Cloud Transform",
// //     short: "Cloud",
// //     angle: 225,
// //     tabletHidden: true,
// //   },
// //   {
// //     id: "ai",
// //     title: "AI & Automation",
// //     short: "AI & Auto",
// //     angle: 270,
// //     tabletHidden: true,
// //   },
// //   { id: "s4hana", title: "S/4HANA", short: "S/4HANA", angle: 315 },
// // ].map((m) => {
// //   const rad = (m.angle - 90) * (Math.PI / 180);
// //   return {
// //     ...m,
// //     x: CENTER.x + RADIUS * Math.cos(rad),
// //     y: CENTER.y + RADIUS * Math.sin(rad),
// //     status: m.id === "ai" ? "Active" : "Live",
// //     statusColor: m.id === "ai" ? "#FDB913" : "#10B981",
// //   };
// // });

// // const dashboardWidgets = [
// //   { label: "Uptime", value: "99.97%", x: 70, y: 30, barW: 95 },
// //   { label: "Processes", value: "12,847", x: 72, y: 58, barW: 78 },
// //   { label: "AI Score", value: "94.2%", x: 28, y: 58, barW: 88 },
// // ];

// // // ═══════════════════════════════════════════════════════════════════
// // // SVG SERVICE ICONS
// // // ═══════════════════════════════════════════════════════════════════
// // const ServiceIcon = ({ type, className = "" }) => {
// //   const cls = className || "w-5 h-5";
// //   const icons = {
// //     s4hana: (
// //       <svg
// //         viewBox="0 0 22 22"
// //         className={cls}
// //         fill="none"
// //         stroke="currentColor"
// //         strokeWidth="1.4"
// //       >
// //         <rect x="4" y="3" width="14" height="16" rx="2" />
// //         <path d="M4 8h14M4 13h14" opacity="0.45" strokeWidth="1.2" />
// //         <circle
// //           cx="11"
// //           cy="5.5"
// //           r="1"
// //           fill="currentColor"
// //           opacity="0.6"
// //           stroke="none"
// //         />
// //       </svg>
// //     ),
// //     btp: (
// //       <svg
// //         viewBox="0 0 22 22"
// //         className={cls}
// //         fill="none"
// //         stroke="currentColor"
// //         strokeWidth="1.4"
// //       >
// //         <path d="M6 17h10a3.5 3.5 0 00.5-6.97A5 5 0 006.5 8 3.5 3.5 0 006 17z" />
// //         <path d="M8.5 12h5M11 10.5v3" opacity="0.45" strokeWidth="1.2" />
// //       </svg>
// //     ),
// //     fiori: (
// //       <svg
// //         viewBox="0 0 22 22"
// //         className={cls}
// //         fill="none"
// //         stroke="currentColor"
// //         strokeWidth="1.4"
// //       >
// //         <rect x="3" y="3" width="7" height="7" rx="1.5" />
// //         <rect x="12" y="3" width="7" height="7" rx="1.5" />
// //         <rect x="3" y="12" width="7" height="7" rx="1.5" />
// //         <rect x="12" y="12" width="7" height="7" rx="1.5" />
// //       </svg>
// //     ),
// //     analytics: (
// //       <svg
// //         viewBox="0 0 22 22"
// //         className={cls}
// //         fill="currentColor"
// //         stroke="none"
// //       >
// //         <rect x="3" y="14" width="3" height="5" rx="0.5" opacity="0.45" />
// //         <rect x="8" y="9" width="3" height="10" rx="0.5" opacity="0.65" />
// //         <rect x="13" y="5" width="3" height="14" rx="0.5" opacity="0.85" />
// //         <rect x="18" y="3" width="2" height="16" rx="0.5" />
// //         <rect x="2" y="19.5" width="19" height="0.8" rx="0.4" opacity="0.3" />
// //       </svg>
// //     ),
// //     integration: (
// //       <svg
// //         viewBox="0 0 22 22"
// //         className={cls}
// //         fill="none"
// //         stroke="currentColor"
// //         strokeWidth="1.3"
// //       >
// //         <circle cx="4" cy="5" r="2.5" />
// //         <circle cx="18" cy="5" r="2.5" />
// //         <circle cx="11" cy="17" r="2.5" />
// //         <line x1="6.2" y1="6.2" x2="15.8" y2="6.2" strokeWidth="1.1" />
// //         <line x1="5.5" y1="7.2" x2="9.5" y2="15" strokeWidth="1.1" />
// //         <line x1="16.5" y1="7.2" x2="12.5" y2="15" strokeWidth="1.1" />
// //       </svg>
// //     ),
// //     cloud: (
// //       <svg
// //         viewBox="0 0 22 22"
// //         className={cls}
// //         fill="none"
// //         stroke="currentColor"
// //         strokeWidth="1.4"
// //       >
// //         <path d="M5.5 16a3.5 3.5 0 01-.4-6.97A5.5 5.5 0 0116 9h.5A3 3 0 0116.5 16h-11z" />
// //         <path
// //           d="M8 12.5h6"
// //           strokeWidth="1"
// //           opacity="0.35"
// //           strokeDasharray="1.5 1.5"
// //         />
// //       </svg>
// //     ),
// //     ai: (
// //       <svg
// //         viewBox="0 0 22 22"
// //         className={cls}
// //         fill="none"
// //         stroke="currentColor"
// //         strokeWidth="1.2"
// //       >
// //         <circle cx="11" cy="11" r="3" strokeWidth="1.4" />
// //         <circle cx="4" cy="5" r="1.8" />
// //         <circle cx="18" cy="5" r="1.8" />
// //         <circle cx="4" cy="17" r="1.8" />
// //         <circle cx="18" cy="17" r="1.8" />
// //         <line x1="5.8" y1="6" x2="9" y2="9.2" />
// //         <line x1="16.2" y1="6" x2="13" y2="9.2" />
// //         <line x1="5.8" y1="16" x2="9" y2="12.8" />
// //         <line x1="16.2" y1="16" x2="13" y2="12.8" />
// //       </svg>
// //     ),
// //     support: (
// //       <svg
// //         viewBox="0 0 22 22"
// //         className={cls}
// //         fill="none"
// //         stroke="currentColor"
// //         strokeWidth="1.4"
// //       >
// //         <path d="M11 2L3.5 6v5c0 5 3.2 9.5 7.5 11 4.3-1.5 7.5-6 7.5-11V6L11 2z" />
// //         <path
// //           d="M8 11l2 2 4-4"
// //           strokeWidth="1.5"
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //         />
// //       </svg>
// //     ),
// //   };
// //   return icons[type] || null;
// // };

// // // ═══════════════════════════════════════════════════════════════════
// // // SUB-COMPONENTS
// // // ═══════════════════════════════════════════════════════════════════

// // // ─── Background ────────────────────────────────────────────────────
// // const EcosystemBackground = () => (
// //   <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
// //     {/* Radial glow from center */}
// //     <div
// //       className="absolute rounded-full"
// //       style={{
// //         width: "70%",
// //         height: "70%",
// //         left: "15%",
// //         top: "10%",
// //         background:
// //           "radial-gradient(circle, rgba(0,164,253,0.07) 0%, transparent 70%)",
// //       }}
// //     />
// //     {/* Gold ambient */}
// //     <div
// //       className="absolute rounded-full"
// //       style={{
// //         width: "40%",
// //         height: "40%",
// //         right: "-5%",
// //         bottom: "-5%",
// //         background:
// //           "radial-gradient(circle, rgba(253,185,19,0.04) 0%, transparent 70%)",
// //       }}
// //     />
// //     {/* Grid pattern */}
// //     <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
// //       <defs>
// //         <pattern
// //           id="ecoGrid"
// //           width="20"
// //           height="20"
// //           patternUnits="userSpaceOnUse"
// //         >
// //           <path
// //             d="M 20 0 L 0 0 0 20"
// //             fill="none"
// //             stroke="white"
// //             strokeWidth="0.3"
// //           />
// //         </pattern>
// //       </defs>
// //       <rect width="100%" height="100%" fill="url(#ecoGrid)" />
// //     </svg>
// //     {/* Hexagonal subtle overlay */}
// //     <svg
// //       className="absolute inset-0 w-full h-full opacity-[0.015]"
// //       viewBox="0 0 200 200"
// //     >
// //       <defs>
// //         <pattern
// //           id="ecoHex"
// //           width="30"
// //           height="52"
// //           patternUnits="userSpaceOnUse"
// //           patternTransform="rotate(15)"
// //         >
// //           <polygon
// //             points="15,0 30,8.66 30,25.98 15,34.64 0,25.98 0,8.66"
// //             fill="none"
// //             stroke="white"
// //             strokeWidth="0.5"
// //           />
// //         </pattern>
// //       </defs>
// //       <rect width="200" height="200" fill="url(#ecoHex)" />
// //     </svg>
// //   </div>
// // );

// // // ─── Floating Particles ────────────────────────────────────────────
// // const FloatingParticles = () => {
// //   const particles = Array.from({ length: 14 }, (_, i) => ({
// //     id: i,
// //     x: 5 + Math.random() * 90,
// //     y: 10 + Math.random() * 80,
// //     size: 1 + Math.random() * 2,
// //     dur: 6 + Math.random() * 8,
// //     delay: Math.random() * 5,
// //     dx: (Math.random() - 0.5) * 30,
// //     dy: -(15 + Math.random() * 40),
// //     color: i % 3 === 0 ? "#FDB913" : "#00A4FD",
// //   }));

// //   return (
// //     <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
// //       {particles.map((p) => (
// //         <div
// //           key={p.id}
// //           className="absolute rounded-full"
// //           style={{
// //             left: `${p.x}%`,
// //             top: `${p.y}%`,
// //             width: p.size,
// //             height: p.size,
// //             background: p.color,
// //             opacity: 0,
// //             animation: `eco-particle ${p.dur}s ${p.delay}s ease-in-out infinite`,
// //             "--dx": `${p.dx}px`,
// //             "--dy": `${p.dy}px`,
// //           }}
// //         />
// //       ))}
// //     </div>
// //   );
// // };

// // // ─── Service Module Card ───────────────────────────────────────────
// // const ServiceModule = ({ module, index, isHovered, onHover, onLeave }) => (
// //   <motion.div
// //     initial={{ opacity: 0, scale: 0.6 }}
// //     whileInView={{ opacity: 1, scale: 1 }}
// //     viewport={{ once: true }}
// //     transition={{
// //       delay: 0.4 + index * 0.06,
// //       duration: 0.5,
// //       ease: [0.22, 1, 0.36, 1],
// //     }}
// //     onMouseEnter={onHover}
// //     onMouseLeave={onLeave}
// //     className={`absolute z-10 cursor-default select-none ${
// //       module.tabletHidden ? "hidden lg:block" : ""
// //     }`}
// //     style={{
// //       left: `${module.x}%`,
// //       top: `${module.y}%`,
// //       transform: "translate(-50%, -50%)",
// //       animation: `eco-float ${4 + index * 0.4}s ${index * 0.5}s ease-in-out infinite`,
// //     }}
// //   >
// //     <div
// //       className="relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border transition-all duration-400"
// //       style={{
// //         background: isHovered
// //           ? "rgba(255,255,255,0.08)"
// //           : "rgba(255,255,255,0.04)",
// //         borderColor: isHovered
// //           ? "rgba(0,164,253,0.35)"
// //           : "rgba(255,255,255,0.06)",
// //         backdropFilter: "blur(12px)",
// //         WebkitBackdropFilter: "blur(12px)",
// //         boxShadow: isHovered
// //           ? "0 0 20px rgba(0,164,253,0.15), 0 4px 15px rgba(0,0,0,0.3)"
// //           : "0 2px 8px rgba(0,0,0,0.2)",
// //         transform: isHovered ? "scale(1.1)" : "scale(1)",
// //       }}
// //     >
// //       {/* Status dot */}
// //       <div
// //         className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full"
// //         style={{
// //           background: module.statusColor,
// //           boxShadow: `0 0 4px ${module.statusColor}`,
// //           animation: "eco-status-blink 2.5s ease-in-out infinite",
// //         }}
// //       />
// //       {/* Icon */}
// //       <div
// //         style={{ color: isHovered ? "#00A4FD" : "rgba(255,255,255,0.6)" }}
// //         className="transition-colors duration-300 flex-shrink-0"
// //       >
// //         <ServiceIcon type={module.id} className="w-4 h-4" />
// //       </div>
// //       {/* Title */}
// //       <span
// //         className="text-[8px] font-semibold tracking-wide whitespace-nowrap transition-colors duration-300"
// //         style={{ color: isHovered ? "#ffffff" : "rgba(255,255,255,0.55)" }}
// //       >
// //         {module.short}
// //       </span>
// //     </div>
// //   </motion.div>
// // );

// // // ─── SAP Core Node ─────────────────────────────────────────────────
// // const SAPCoreNode = ({ isPulsing }) => (
// //   <motion.div
// //     initial={{ opacity: 0, scale: 0 }}
// //     whileInView={{ opacity: 1, scale: 1 }}
// //     viewport={{ once: true }}
// //     transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// //     className="relative pointer-events-none"
// //     style={{ width: "22%", paddingTop: "22%" }}
// //   >
// //     {/* Ripple rings */}
// //     <div
// //       className="absolute inset-[-30%] rounded-full border border-[#00A4FD]/10"
// //       style={{ animation: "eco-ripple 3s ease-out infinite" }}
// //     />
// //     <div
// //       className="absolute inset-[-20%] rounded-full border border-[#FDB913]/10"
// //       style={{ animation: "eco-ripple 3s 1s ease-out infinite" }}
// //     />
// //     <div
// //       className="absolute inset-[-10%] rounded-full border border-[#00A4FD]/15"
// //       style={{ animation: "eco-ripple 3s 2s ease-out infinite" }}
// //     />

// //     {/* Rotating gradient border */}
// //     <div
// //       className="absolute inset-[-3px] rounded-full"
// //       style={{
// //         background:
// //           "conic-gradient(from 0deg, transparent 55%, #00A4FD 65%, #FDB913 78%, #00A4FD 88%, transparent 95%)",
// //         animation: "eco-rotate-border 5s linear infinite",
// //       }}
// //     />

// //     {/* Inner card */}
// //     <div
// //       className="absolute inset-[3px] rounded-full flex flex-col items-center justify-center text-center"
// //       style={{
// //         background:
// //           "linear-gradient(145deg, rgba(10,37,64,0.95), rgba(1,24,47,0.98))",
// //         backdropFilter: "blur(20px)",
// //         WebkitBackdropFilter: "blur(20px)",
// //         animation: isPulsing
// //           ? "eco-core-pulse-active 2s ease-in-out infinite"
// //           : "eco-core-pulse 3s ease-in-out infinite",
// //       }}
// //     >
// //       {/* SAP text */}
// //       <span
// //         className="font-black tracking-wider leading-none"
// //         style={{ color: "#00A4FD", fontSize: "clamp(11px, 1.6vw, 18px)" }}
// //       >
// //         SAP
// //       </span>
// //       <span
// //         className="font-semibold leading-none mt-0.5"
// //         style={{
// //           color: "rgba(255,255,255,0.6)",
// //           fontSize: "clamp(4px, 0.55vw, 7px)",
// //         }}
// //       >
// //         DIGITAL CORE
// //       </span>
// //       {/* Gold accent line */}
// //       <div
// //         className="w-[40%] h-[1px] mt-1"
// //         style={{
// //           background:
// //             "linear-gradient(90deg, transparent, #FDB913, transparent)",
// //         }}
// //       />
// //     </div>
// //   </motion.div>
// // );

// // // ─── Dashboard Widget ──────────────────────────────────────────────
// // const DashboardWidget = ({ data, index }) => (
// //   <motion.div
// //     initial={{ opacity: 0, scale: 0.8 }}
// //     whileInView={{ opacity: 1, scale: 1 }}
// //     viewport={{ once: true }}
// //     transition={{ delay: 0.8 + index * 0.15, duration: 0.5 }}
// //     className="absolute pointer-events-none"
// //     style={{
// //       left: `${data.x}%`,
// //       top: `${data.y}%`,
// //       transform: "translate(-50%, -50%)",
// //       animation: `eco-widget-pulse ${3 + index}s ${index * 0.5}s ease-in-out infinite`,
// //     }}
// //   >
// //     <div
// //       className="px-2 py-1.5 rounded-md border"
// //       style={{
// //         background: "rgba(255,255,255,0.025)",
// //         borderColor: "rgba(255,255,255,0.04)",
// //         backdropFilter: "blur(8px)",
// //         minWidth: "clamp(55px, 8vw, 80px)",
// //       }}
// //     >
// //       <div
// //         className="text-[6px] font-medium tracking-wider uppercase"
// //         style={{ color: "rgba(255,255,255,0.3)" }}
// //       >
// //         {data.label}
// //       </div>
// //       <div
// //         className="text-[9px] font-bold mt-0.5"
// //         style={{ color: "rgba(255,255,255,0.7)" }}
// //       >
// //         {data.value}
// //       </div>
// //       {/* Mini progress bar */}
// //       <div
// //         className="h-[2px] mt-1 rounded-full overflow-hidden"
// //         style={{ background: "rgba(255,255,255,0.06)" }}
// //       >
// //         <div
// //           className="h-full rounded-full"
// //           style={{
// //             width: `${data.barW}%`,
// //             background: "linear-gradient(90deg, #00A4FD, #FDB913)",
// //             animation: `eco-bar-fill 2s ${1 + index * 0.3}s ease-out forwards`,
// //             "--bar-width": `${data.barW}%`,
// //           }}
// //         />
// //       </div>
// //     </div>
// //   </motion.div>
// // );

// // // ─── Connector SVG ─────────────────────────────────────────────────
// // const ConnectorSVG = ({ hoveredId }) => (
// //   <svg
// //     viewBox="0 0 100 100"
// //     className="absolute inset-0 w-full h-full pointer-events-none"
// //     preserveAspectRatio="none"
// //   >
// //     <defs>
// //       <filter id="cGlow" x="-100%" y="-100%" width="300%" height="300%">
// //         <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" />
// //       </filter>
// //       <filter id="pGlow" x="-300%" y="-300%" width="700%" height="700%">
// //         <feGaussianBlur in="SourceGraphic" stdDeviation="0.35" result="b" />
// //         <feMerge>
// //           <feMergeNode in="b" />
// //           <feMergeNode in="SourceGraphic" />
// //         </feMerge>
// //       </filter>
// //     </defs>

// //     {ecosystemModules.map((mod, i) => {
// //       const active = hoveredId === mod.id;
// //       const d = `M${CENTER.x},${CENTER.y} L${mod.x},${mod.y}`;
// //       const pid = `cp-${mod.id}`;

// //       return (
// //         <g key={mod.id} className={mod.tabletHidden ? "hidden lg:block" : ""}>
// //           {/* Glow layer */}
// //           <path
// //             d={d}
// //             stroke={active ? "#00A4FD" : "rgba(0,164,253,0.05)"}
// //             strokeWidth={active ? "1" : "0.5"}
// //             fill="none"
// //             filter="url(#cGlow)"
// //             className="transition-all duration-500"
// //           />
// //           {/* Core line */}
// //           <path
// //             d={d}
// //             stroke={active ? "rgba(0,164,253,0.5)" : "rgba(0,164,253,0.12)"}
// //             strokeWidth={active ? "0.35" : "0.18"}
// //             fill="none"
// //             className="transition-all duration-500"
// //           />
// //           {/* Dash flow */}
// //           <path
// //             d={d}
// //             stroke={active ? "rgba(253,185,19,0.6)" : "rgba(253,185,19,0.15)"}
// //             strokeWidth="0.2"
// //             fill="none"
// //             strokeDasharray="0.8 2.5"
// //             style={{
// //               animation: `eco-dash-flow ${2.5 + i * 0.3}s linear infinite`,
// //             }}
// //           />

// //           {/* Data packet → outward */}
// //           <circle
// //             r={active ? "0.7" : "0.4"}
// //             fill={active ? "#FDB913" : "#00A4FD"}
// //             filter="url(#pGlow)"
// //             opacity={active ? 1 : 0.65}
// //           >
// //             <animateMotion
// //               dur={`${3.5 + i * 0.4}s`}
// //               repeatCount="indefinite"
// //               begin={`${i * 0.5}s`}
// //             >
// //               <mpath href={`#${pid}`} />
// //             </animateMotion>
// //           </circle>
// //           {/* Data packet ← inward */}
// //           <circle r="0.3" fill="#00A4FD" opacity="0.45">
// //             <animateMotion
// //               dur={`${4 + i * 0.3}s`}
// //               repeatCount="indefinite"
// //               begin={`${i * 0.8 + 1.5}s`}
// //               keyPoints="1;0"
// //               keyTimes="0;1"
// //               calcMode="linear"
// //             >
// //               <mpath href={`#${pid}`} />
// //             </animateMotion>
// //           </circle>
// //           {/* Trailing glow */}
// //           <circle
// //             r={active ? "1.8" : "1"}
// //             fill={active ? "#FDB913" : "#00A4FD"}
// //             opacity={active ? 0.12 : 0.05}
// //           >
// //             <animateMotion
// //               dur={`${3.5 + i * 0.4}s`}
// //               repeatCount="indefinite"
// //               begin={`${i * 0.5}s`}
// //             >
// //               <mpath href={`#${pid}`} />
// //             </animateMotion>
// //           </circle>

// //           {/* Hidden path for animateMotion */}
// //           <path id={pid} d={d} fill="none" stroke="none" />
// //         </g>
// //       );
// //     })}

// //     {/* Center pulse on hover */}
// //     {hoveredId && (
// //       <circle
// //         cx={CENTER.x}
// //         cy={CENTER.y}
// //         r="2"
// //         fill="none"
// //         stroke="#FDB913"
// //         strokeWidth="0.2"
// //         opacity="0.6"
// //       >
// //         <animate
// //           attributeName="r"
// //           values="2;8;2"
// //           dur="1.5s"
// //           repeatCount="indefinite"
// //         />
// //         <animate
// //           attributeName="opacity"
// //           values="0.6;0;0.6"
// //           dur="1.5s"
// //           repeatCount="indefinite"
// //         />
// //       </circle>
// //     )}
// //   </svg>
// // );

// // // ─── Mobile Vertical Workflow ──────────────────────────────────────
// // const MobileWorkflow = () => {
// //   const mobileModules = ecosystemModules
// //     .filter((m) => !m.tabletHidden)
// //     .slice(0, 6);
// //   const coreY = 8;
// //   const startY = 22;
// //   const endY = 90;
// //   const stepY = (endY - startY) / (mobileModules.length - 1);

// //   return (
// //     <div className="absolute inset-0">
// //       {/* Vertical line */}
// //       <svg
// //         viewBox="0 0 100 100"
// //         className="absolute inset-0 w-full h-full"
// //         preserveAspectRatio="none"
// //       >
// //         <defs>
// //           <filter id="mGlow" x="-100%" y="-20%" width="300%" height="140%">
// //             <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
// //           </filter>
// //           <filter id="mPGlow" x="-400%" y="-400%" width="900%" height="900%">
// //             <feGaussianBlur in="SourceGraphic" stdDeviation="0.4" result="b" />
// //             <feMerge>
// //               <feMergeNode in="b" />
// //               <feMergeNode in="SourceGraphic" />
// //             </feMerge>
// //           </filter>
// //         </defs>

// //         {/* Main vertical line - glow */}
// //         <line
// //           x1="50"
// //           y1={coreY + 5}
// //           x2="50"
// //           y2={endY}
// //           stroke="rgba(0,164,253,0.06)"
// //           strokeWidth="1"
// //           filter="url(#mGlow)"
// //         />
// //         {/* Main vertical line - core */}
// //         <line
// //           x1="50"
// //           y1={coreY + 5}
// //           x2="50"
// //           y2={endY}
// //           stroke="rgba(0,164,253,0.15)"
// //           strokeWidth="0.3"
// //         />
// //         {/* Dash flow */}
// //         <line
// //           x1="50"
// //           y1={coreY + 5}
// //           x2="50"
// //           y2={endY}
// //           stroke="rgba(253,185,19,0.2)"
// //           strokeWidth="0.2"
// //           strokeDasharray="0.8 3"
// //           style={{ animation: "eco-dash-flow 3s linear infinite" }}
// //         />

// //         {/* Branches + nodes */}
// //         {mobileModules.map((mod, i) => {
// //           const y = startY + i * stepY;
// //           const goLeft = i % 2 === 0;
// //           const endX = goLeft ? 15 : 85;
// //           const branchD = `M50,${y} L${endX},${y}`;
// //           const vPathD = `M50,${coreY + 5} L50,${endY}`;
// //           const bpid = `mb-${mod.id}`;

// //           return (
// //             <g key={mod.id}>
// //               {/* Branch line */}
// //               <line
// //                 x1="50"
// //                 y1={y}
// //                 x2={endX}
// //                 y2={y}
// //                 stroke="rgba(0,164,253,0.12)"
// //                 strokeWidth="0.2"
// //               />
// //               {/* Node dot */}
// //               <circle cx="50" cy={y} r="1" fill="#00A4FD" opacity="0.5" />
// //               <circle
// //                 cx="50"
// //                 cy={y}
// //                 r="1.8"
// //                 fill="none"
// //                 stroke="#00A4FD"
// //                 strokeWidth="0.15"
// //                 opacity="0.3"
// //               >
// //                 <animate
// //                   attributeName="r"
// //                   values="1;3;1"
// //                   dur="3s"
// //                   begin={`${i * 0.5}s`}
// //                   repeatCount="indefinite"
// //                 />
// //                 <animate
// //                   attributeName="opacity"
// //                   values="0.3;0;0.3"
// //                   dur="3s"
// //                   begin={`${i * 0.5}s`}
// //                   repeatCount="indefinite"
// //                 />
// //               </circle>

// //               {/* Packet on branch */}
// //               <circle r="0.4" fill="#FDB913" opacity="0.6">
// //                 <animateMotion
// //                   dur={`${2 + i * 0.3}s`}
// //                   repeatCount="indefinite"
// //                   begin={`${i * 0.4}s`}
// //                 >
// //                   <mpath href={`#${bpid}`} />
// //                 </animateMotion>
// //               </circle>
// //               <path id={bpid} d={branchD} fill="none" stroke="none" />

// //               {/* Service label */}
// //               <foreignObject
// //                 x={goLeft ? 1 : 55}
// //                 y={y - 4.5}
// //                 width="40"
// //                 height="9"
// //               >
// //                 <div
// //                   xmlns="http://www.w3.org/1999/xhtml"
// //                   className="flex items-center gap-1 px-1.5 py-0.5 rounded border"
// //                   style={{
// //                     background: "rgba(255,255,255,0.04)",
// //                     borderColor: "rgba(255,255,255,0.06)",
// //                     justifyContent: goLeft ? "flex-start" : "flex-start",
// //                   }}
// //                 >
// //                   <div
// //                     style={{ color: "rgba(0,164,253,0.7)" }}
// //                     className="flex-shrink-0"
// //                   >
// //                     <ServiceIcon type={mod.id} className="w-3 h-3" />
// //                   </div>
// //                   <span
// //                     style={{
// //                       color: "rgba(255,255,255,0.5)",
// //                       fontSize: "5px",
// //                       fontWeight: 600,
// //                       whiteSpace: "nowrap",
// //                     }}
// //                   >
// //                     {mod.short}
// //                   </span>
// //                 </div>
// //               </foreignObject>
// //             </g>
// //           );
// //         })}

// //         {/* Packets on vertical line */}
// //         <circle r="0.5" fill="#00A4FD" filter="url(#mPGlow)" opacity="0.7">
// //           <animateMotion dur="5s" repeatCount="indefinite">
// //             <mpath href="#mvert" />
// //           </animateMotion>
// //         </circle>
// //         <circle r="0.35" fill="#FDB913" opacity="0.5">
// //           <animateMotion
// //             dur="6s"
// //             repeatCount="indefinite"
// //             begin="2s"
// //             keyPoints="1;0"
// //             keyTimes="0;1"
// //             calcMode="linear"
// //           >
// //             <mpath href="#mvert" />
// //           </animateMotion>
// //         </circle>
// //         <path
// //           id="mvert"
// //           d={`M50,${coreY + 5} L50,${endY}`}
// //           fill="none"
// //           stroke="none"
// //         />
// //       </svg>

// //       {/* Mobile SAP Core */}
// //       <div
// //         className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-center rounded-full border"
// //         style={{
// //           top: `${coreY - 3}%`,
// //           width: "28%",
// //           paddingTop: "28%",
// //           background:
// //             "linear-gradient(145deg, rgba(10,37,64,0.95), rgba(1,24,47,0.98))",
// //           borderColor: "rgba(0,164,253,0.25)",
// //           boxShadow:
// //             "0 0 15px rgba(0,164,253,0.2), 0 0 40px rgba(0,164,253,0.06)",
// //           animation: "eco-core-pulse 3s ease-in-out infinite",
// //         }}
// //       >
// //         <div className="absolute inset-0 flex flex-col items-center justify-center">
// //           <span
// //             className="font-black tracking-wider text-[#00A4FD]"
// //             style={{ fontSize: "clamp(10px, 3.5vw, 16px)" }}
// //           >
// //             SAP
// //           </span>
// //           <span
// //             className="font-semibold text-white"
// //             style={{ fontSize: "clamp(3px, 1.2vw, 6px)" }}
// //           >
// //             DIGITAL CORE
// //           </span>
// //         </div>
// //       </div>

// //       {/* Mobile dashboard widgets */}
// //       <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
// //         {[
// //           { label: "Uptime", value: "99.97%" },
// //           { label: "Processes", value: "12.8K" },
// //         ].map((w, i) => (
// //           <div
// //             key={i}
// //             className="px-2 py-1 rounded border text-center"
// //             style={{
// //               background: "rgba(255,255,255,0.025)",
// //               borderColor: "rgba(255,255,255,0.04)",
// //               animation: `eco-widget-pulse ${3 + i}s ease-in-out infinite`,
// //             }}
// //           >
// //             <div className="text-[5px] font-medium uppercase tracking-wider text-white/25">
// //               {w.label}
// //             </div>
// //             <div className="text-[7px] font-bold text-white/60">{w.value}</div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // // ═══════════════════════════════════════════════════════════════════
// // // MAIN ECOSYSTEM VISUALIZATION
// // // ═══════════════════════════════════════════════════════════════════
// // const SAPEcosystemViz = ({ isReversed }) => {
// //   const [hoveredId, setHoveredId] = useState(null);

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, scale: 0.9, x: isReversed ? 30 : -30 }}
// //       whileInView={{ opacity: 1, scale: 1, x: 0 }}
// //       viewport={{ once: true }}
// //       transition={{
// //         delay: isReversed ? 0.15 : 0.3,
// //         duration: 0.9,
// //         ease: [0.22, 1, 0.36, 1],
// //       }}
// //       className="relative w-full rounded-2xl overflow-hidden border border-white/[0.05]"
// //       style={{ aspectRatio: "1.35 / 1" }}
// //     >
// //       {/* Background effects */}
// //       <EcosystemBackground />

// //       {/* SVG Connectors (Desktop/Tablet) */}
// //       <div className="absolute inset-0 hidden md:block">
// //         <ConnectorSVG hoveredId={hoveredId} />
// //       </div>

// //       {/* Dashboard Widgets (Desktop/Tablet) */}
// //       <div className="absolute inset-0 hidden md:block">
// //         {dashboardWidgets.map((w, i) => (
// //           <DashboardWidget key={i} data={w} index={i} />
// //         ))}
// //       </div>

// //       {/* Service Modules (Desktop/Tablet) */}
// //       <div className="absolute inset-0 hidden md:block">
// //         {ecosystemModules.map((mod, i) => (
// //           <ServiceModule
// //             key={mod.id}
// //             module={mod}
// //             index={i}
// //             isHovered={hoveredId === mod.id}
// //             onHover={() => setHoveredId(mod.id)}
// //             onLeave={() => setHoveredId(null)}
// //           />
// //         ))}
// //       </div>

// //       {/* SAP Core (Desktop/Tablet) */}
// //       <div
// //         className="absolute inset-0 hidden md:flex items-center justify-center"
// //         style={{ paddingTop: "2%" }}
// //       >
// //         <SAPCoreNode isPulsing={hoveredId !== null} />
// //       </div>

// //       {/* Mobile Vertical Workflow */}
// //       <div className="md:hidden absolute inset-0">
// //         <MobileWorkflow />
// //       </div>

// //       {/* Floating Particles (all viewports) */}
// //       <FloatingParticles />

// //       {/* Hover glow overlay */}
// //       <div
// //         className="absolute -inset-3 rounded-3xl opacity-0 transition-opacity duration-700 blur-2xl pointer-events-none"
// //         style={{
// //           background: hoveredId
// //             ? "rgba(0,164,253,0.08)"
// //             : "rgba(253,185,19,0.04)",
// //           opacity: hoveredId ? 1 : 0,
// //         }}
// //       />
// //     </motion.div>
// //   );
// // };

// // // ═══════════════════════════════════════════════════════════════════
// // // CHECK ICON
// // // ═══════════════════════════════════════════════════════════════════
// // const CheckIcon = () => (
// //   <svg
// //     width="15"
// //     height="12"
// //     viewBox="0 0 15 12"
// //     fill="none"
// //     className="flex-shrink-0"
// //   >
// //     <path
// //       d="M1 6L5.24264 10.2426L13.727 1.75732"
// //       stroke="#FDB913"
// //       strokeWidth="2"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     />
// //   </svg>
// // );

// // // ═══════════════════════════════════════════════════════════════════
// // // SERVICE ROW
// // // ═══════════════════════════════════════════════════════════════════
// // const ServiceRow = ({ service, index }) => {
// //   const isReversed = index % 2 !== 0;

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 60 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true, margin: "-80px" }}
// //       transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// //       className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
// //     >
// //       {/* ── Text Side ── */}
// //       <div
// //         className={`${isReversed ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8"}`}
// //       >
// //         <motion.h3
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.15, duration: 0.5 }}
// //           className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-accent-300 mb-5 leading-tight"
// //         >
// //           {service.title}
// //         </motion.h3>

// //         <motion.div
// //           initial={{ scaleX: 0 }}
// //           whileInView={{ scaleX: 1 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
// //           className="w-16 h-[2px] mb-6 origin-left"
// //           style={{ background: "linear-gradient(90deg, #FDB913, transparent)" }}
// //         />

// //         <motion.p
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.25, duration: 0.5 }}
// //           className="text-white text-[15px] leading-[1.8] mb-8 max-w-lg"
// //         >
// //           {service.description}
// //         </motion.p>

// //         <motion.ul
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.35, duration: 0.5 }}
// //           className="space-y-3.5 mb-9"
// //         >
// //           {service.features.map((feature, idx) => (
// //             <motion.li
// //               key={idx}
// //               initial={{ opacity: 0, x: -15 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: 0.4 + idx * 0.08, duration: 0.4 }}
// //               className="flex items-start gap-3 text-sm text-white"
// //             >
// //               <span className="mt-0.5">
// //                 <CheckIcon />
// //               </span>
// //               <span className="leading-relaxed">{feature}</span>
// //             </motion.li>
// //           ))}
// //         </motion.ul>

// //         <motion.a
// //           href={service.path}
// //           initial={{ opacity: 0, y: 15 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.6, duration: 0.4 }}
// //           whileHover={{ x: 6 }}
// //           whileTap={{ scale: 0.97 }}
// //           className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide group/btn"
// //           style={{ color: "#FDB913" }}
// //         >
// //           <span>Learn More</span>
// //           <span
// //             className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover/btn:bg-[#FDB913]/10"
// //             style={{ border: "1px solid rgba(253,185,19,0.25)" }}
// //           >
// //             <FaArrowRight
// //               size={12}
// //               className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-rotate-45"
// //             />
// //           </span>
// //         </motion.a>
// //       </div>

// //       {/* ── Ecosystem Visualization Side ── */}
// //       <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
// //         <SAPEcosystemViz isReversed={isReversed} />
// //       </div>
// //     </motion.div>
// //   );
// // };

// // // ═══════════════════════════════════════════════════════════════════
// // // MAIN SECTION
// // // ═══════════════════════════════════════════════════════════════════
// // const ServicesSection = () => (
// //   <>
// //     <style>{`
// //       @keyframes eco-float {
// //         0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
// //         50% { transform: translate(-50%, -50%) translateY(-5px); }
// //       }
// //       @keyframes eco-core-pulse {
// //         0%, 100% { box-shadow: 0 0 20px rgba(0,164,253,0.25), 0 0 50px rgba(0,164,253,0.08); }
// //         50% { box-shadow: 0 0 30px rgba(0,164,253,0.4), 0 0 70px rgba(0,164,253,0.12); }
// //       }
// //       @keyframes eco-core-pulse-active {
// //         0%, 100% { box-shadow: 0 0 25px rgba(0,164,253,0.35), 0 0 50px rgba(253,185,19,0.1); }
// //         50% { box-shadow: 0 0 40px rgba(0,164,253,0.55), 0 0 80px rgba(253,185,19,0.18); }
// //       }
// //       @keyframes eco-rotate-border {
// //         to { transform: rotate(360deg); }
// //       }
// //       @keyframes eco-dash-flow {
// //         to { stroke-dashoffset: -16; }
// //       }
// //       @keyframes eco-particle {
// //         0% { transform: translate(0, 0); opacity: 0; }
// //         8% { opacity: 0.5; }
// //         85% { opacity: 0.4; }
// //         100% { transform: translate(var(--dx), var(--dy)); opacity: 0; }
// //       }
// //       @keyframes eco-widget-pulse {
// //         0%, 100% { opacity: 0.65; }
// //         50% { opacity: 1; }
// //       }
// //       @keyframes eco-bar-fill {
// //         0% { width: 0%; }
// //         100% { width: var(--bar-width); }
// //       }
// //       @keyframes eco-status-blink {
// //         0%, 100% { opacity: 1; }
// //         50% { opacity: 0.35; }
// //       }
// //       @keyframes eco-ripple {
// //         0% { transform: scale(1); opacity: 0.35; }
// //         100% { transform: scale(2.5); opacity: 0; }
// //       }
// //     `}</style>

// //     <section
// //       id="services"
// //       className="relative overflow-hidden py-20 lg:py-20 bg-[#01182f]"
// //     >
// //       {/* ── Zigzag SVG Background Lines ── */}
// //       <div
// //         className="absolute inset-0 pointer-events-none hidden xl:block"
// //         style={{ left: "17.5%" }}
// //       >
// //         <svg
// //           width="898"
// //           height="3215"
// //           viewBox="0 0 898 3215"
// //           fill="none"
// //           className="h-full"
// //         >
// //           <defs>
// //             <filter
// //               id="yellowGlow"
// //               x="-100%"
// //               y="-100%"
// //               width="300%"
// //               height="300%"
// //             >
// //               <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="b1" />
// //               <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="b2" />
// //               <feMerge>
// //                 <feMergeNode in="b1" />
// //                 <feMergeNode in="b2" />
// //                 <feMergeNode in="SourceGraphic" />
// //               </feMerge>
// //             </filter>
// //             <filter
// //               id="whiteGlow"
// //               x="-100%"
// //               y="-100%"
// //               width="300%"
// //               height="300%"
// //             >
// //               <feGaussianBlur
// //                 in="SourceGraphic"
// //                 stdDeviation="3"
// //                 result="blur"
// //               />
// //               <feMerge>
// //                 <feMergeNode in="blur" />
// //                 <feMergeNode in="SourceGraphic" />
// //               </feMerge>
// //             </filter>
// //             <filter id="lineGlow" x="-20%" y="-5%" width="140%" height="110%">
// //               <feGaussianBlur
// //                 in="SourceGraphic"
// //                 stdDeviation="3"
// //                 result="blur"
// //               />
// //               <feMerge>
// //                 <feMergeNode in="blur" />
// //                 <feMergeNode in="SourceGraphic" />
// //               </feMerge>
// //             </filter>
// //             <filter
// //               id="lineGlowStrong"
// //               x="-20%"
// //               y="-5%"
// //               width="140%"
// //               height="110%"
// //             >
// //               <feGaussianBlur
// //                 in="SourceGraphic"
// //                 stdDeviation="6"
// //                 result="blur"
// //               />
// //               <feMerge>
// //                 <feMergeNode in="blur" />
// //               </feMerge>
// //             </filter>
// //             <path
// //               id="zigzagFwd"
// //               d="M449,0 L449,480 L891,480 L891,1080 L7,1080 L7,1680 L891,1680 L891,2280 L7,2280 L7,2981"
// //               fill="none"
// //             />
// //             <path
// //               id="zigzagRev"
// //               d="M7,2981 L7,2280 L891,2280 L891,1680 L7,1680 L7,1080 L891,1080 L891,480 L449,480 L449,0"
// //               fill="none"
// //             />
// //             <path
// //               id="branchPath"
// //               d="M449,3215 L449,3075 L7,3075 L7,2700"
// //               fill="none"
// //             />
// //           </defs>

// //           {/* Zigzag lines - 3 layers */}
// //           <path
// //             d="M449,0 L449,480 L891,480 L891,1080 L7,1080 L7,1680 L891,1680 L891,2280 L7,2280 L7,2981"
// //             stroke="white"
// //             strokeWidth="6"
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             opacity="0.06"
// //             filter="url(#lineGlowStrong)"
// //           />
// //           <path
// //             d="M449,0 L449,480 L891,480 L891,1080 L7,1080 L7,1680 L891,1680 L891,2280 L7,2280 L7,2981"
// //             stroke="white"
// //             strokeWidth="3"
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             opacity="0.12"
// //             filter="url(#lineGlow)"
// //           />
// //           <path
// //             d="M449,0 L449,480 L891,480 L891,1080 L7,1080 L7,1680 L891,1680 L891,2280 L7,2280 L7,2981"
// //             stroke="white"
// //             strokeWidth="1.8"
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             opacity="0.35"
// //           />

// //           {/* Branch lines */}
// //           <path
// //             d="M449,3215 L449,3075 L7,3075 L7,2700"
// //             stroke="white"
// //             strokeWidth="5"
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             opacity="0.06"
// //             filter="url(#lineGlowStrong)"
// //           />
// //           <path
// //             d="M449,3215 L449,3075 L7,3075 L7,2700"
// //             stroke="white"
// //             strokeWidth="2.5"
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             opacity="0.12"
// //             filter="url(#lineGlow)"
// //           />
// //           <path
// //             d="M449,3215 L449,3075 L7,3075 L7,2700"
// //             stroke="white"
// //             strokeWidth="1.5"
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             opacity="0.3"
// //           />

// //           {/* Static node dots */}
// //           {[
// //             [449, 0],
// //             [449, 480],
// //             [891, 480],
// //             [891, 1080],
// //             [7, 1080],
// //             [7, 1680],
// //             [891, 1680],
// //             [891, 2280],
// //             [7, 2280],
// //             [7, 2981],
// //             [449, 3215],
// //             [7, 3075],
// //             [7, 2700],
// //           ].map(([cx, cy], i) => (
// //             <circle
// //               key={i}
// //               cx={cx}
// //               cy={cy}
// //               r={4}
// //               fill="white"
// //               opacity={0.4}
// //               filter="url(#whiteGlow)"
// //             />
// //           ))}

// //           {/* Animated yellow dots */}
// //           <circle r="5" fill="#FDB913" filter="url(#yellowGlow)">
// //             <animateMotion dur="16s" repeatCount="indefinite" rotate="auto">
// //               <mpath href="#zigzagFwd" />
// //             </animateMotion>
// //           </circle>
// //           <circle r="4" fill="#FDB913" opacity="0.7" filter="url(#yellowGlow)">
// //             <animateMotion
// //               dur="18s"
// //               repeatCount="indefinite"
// //               begin="4s"
// //               rotate="auto"
// //             >
// //               <mpath href="#zigzagRev" />
// //             </animateMotion>
// //           </circle>
// //           <circle r="3.5" fill="#FDB913" opacity="0.5">
// //             <animateMotion
// //               dur="22s"
// //               repeatCount="indefinite"
// //               begin="8s"
// //               rotate="auto"
// //             >
// //               <mpath href="#zigzagFwd" />
// //             </animateMotion>
// //           </circle>
// //           <circle r="4.5" fill="#FDB913" filter="url(#yellowGlow)">
// //             <animateMotion
// //               dur="6s"
// //               repeatCount="indefinite"
// //               begin="1s"
// //               rotate="auto"
// //             >
// //               <mpath href="#branchPath" />
// //             </animateMotion>
// //           </circle>
// //           <circle r="3" fill="#FDB913" opacity="0.6">
// //             <animateMotion
// //               dur="7s"
// //               repeatCount="indefinite"
// //               begin="4s"
// //               keyPoints="1;0"
// //               keyTimes="0;1"
// //               calcMode="linear"
// //             >
// //               <mpath href="#branchPath" />
// //             </animateMotion>
// //           </circle>
// //           <circle r="12" fill="#FDB913" opacity="0.12">
// //             <animateMotion dur="16s" repeatCount="indefinite" rotate="auto">
// //               <mpath href="#zigzagFwd" />
// //             </animateMotion>
// //           </circle>
// //           <circle r="10" fill="#FDB913" opacity="0.1">
// //             <animateMotion
// //               dur="6s"
// //               repeatCount="indefinite"
// //               begin="1s"
// //               rotate="auto"
// //             >
// //               <mpath href="#branchPath" />
// //             </animateMotion>
// //           </circle>

// //           {/* Pulsing junction dots */}
// //           {[
// //             [891, 225],
// //             [7, 1618],
// //             [7, 3075],
// //           ].map(([cx, cy], i) => (
// //             <circle
// //               key={`p${i}`}
// //               cx={cx}
// //               cy={cy}
// //               r="6"
// //               fill="#FDB913"
// //               opacity="0.5"
// //               filter="url(#yellowGlow)"
// //             >
// //               <animate
// //                 attributeName="r"
// //                 values="4;10;4"
// //                 dur="3s"
// //                 begin={`${i * 1.5}s`}
// //                 repeatCount="indefinite"
// //               />
// //               <animate
// //                 attributeName="opacity"
// //                 values="0.6;0.15;0.6"
// //                 dur="3s"
// //                 begin={`${i * 1.5}s`}
// //                 repeatCount="indefinite"
// //               />
// //             </circle>
// //           ))}
// //         </svg>
// //       </div>

// //       {/* ── Ambient glow blobs ── */}
// //       <div
// //         className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.04] -translate-x-1/2 -translate-y-1/2"
// //         style={{ background: "#FDB913" }}
// //       />
// //       <div
// //         className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.03] translate-x-1/3 translate-y-1/3"
// //         style={{ background: "#FDB913" }}
// //       />

// //       <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
// //         {/* ── Section Header ── */}
// //         <motion.header
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
// //           className="text-center max-w-3xl mx-auto mb-20 lg:mb-28"
// //         >
// //           <span
// //             className="inline-block px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-6"
// //             style={{
// //               background: "rgba(253,185,19,0.08)",
// //               color: "#FDB913",
// //               border: "1px solid rgba(253,185,19,0.15)",
// //             }}
// //           >
// //             What We Deliver
// //           </span>
// //           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
// //             Comprehensive SAP Services
// //           </h2>
// //           <p className="text-lg leading-relaxed text-white">
// //             End-to-end solutions designed to maximize your SAP investment and
// //             accelerate digital transformation.
// //           </p>
// //         </motion.header>

// //         {/* ── Service Rows ── */}
// //         <div className="space-y-20 lg:space-y-28">
// //           {servicesData.map((service, index) => (
// //             <ServiceRow key={service.id} service={service} index={index} />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   </>
// // );

// // export default ServicesSection;

// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { FaArrowRight } from "react-icons/fa";

// // ═══════════════════════════════════════════════════════════════════
// // DATA
// // ═══════════════════════════════════════════════════════════════════
// const servicesData = [
//   {
//     id: 5,
//     title: "Application Management Services",
//     description:
//       "Ensure uninterrupted business operations with end-to-end SAP Application Management Services. We provide 24/7 monitoring, proactive maintenance, incident resolution, performance optimization, and continuous enhancements to maximize system availability and business productivity.",
//     features: [
//       "24/7 Application Monitoring & Support",
//       "Incident & Problem Management",
//       "Performance Optimization",
//       "Release & Change Management",
//     ],
//     path: "/services/app-maintenance",
//     vizType: "maintenance",
//   },
//   {
//     id: 6,
//     title: "Data Migration & Transformation",
//     description:
//       "Accelerate your digital transformation with secure and reliable SAP data migration services. We help organizations migrate from legacy systems to SAP HANA and SAP S/4HANA while ensuring data accuracy, consistency, and minimal business disruption.",
//     features: [
//       "SAP HANA & S/4HANA Migration",
//       "Legacy Data Conversion",
//       "Data Validation & Cleansing",
//       "System Consolidation",
//     ],
//     path: "/services/data-migration",
//     vizType: "migration",
//   },
//   {
//     id: 7,
//     title: "SAP Talent & Staff Augmentation",
//     description:
//       "Strengthen your SAP initiatives with experienced consultants, architects, developers, and project managers. Our flexible engagement models provide the right expertise to support implementation, upgrades, support, and transformation projects.",
//     features: [
//       "Certified SAP Functional Consultants",
//       "SAP Technical Experts",
//       "Project & Delivery Managers",
//       "Flexible Resource Engagement",
//     ],
//     path: "/services/staff-augmentation",
//     vizType: "talent",
//   },
//   {
//     id: 8,
//     title: "Code Quality & Security",
//     description:
//       "Deliver enterprise-grade SAP applications with robust code quality, security, and compliance practices. We perform continuous code reviews, vulnerability assessments, and governance checks to ensure secure, scalable, and high-performing SAP solutions.",
//     features: [
//       "Automated Code Reviews",
//       "Security & Vulnerability Assessments",
//       "Compliance & Governance Validation",
//       "Risk Analysis & Mitigation",
//     ],
//     path: "/services/code-quality-security",
//     vizType: "security",
//   },
// ];

// // ═══════════════════════════════════════════════════════════════════
// // CHECK ICON
// // ═══════════════════════════════════════════════════════════════════
// const CheckIcon = () => (
//   <svg
//     width="15"
//     height="12"
//     viewBox="0 0 15 12"
//     fill="none"
//     className="flex-shrink-0"
//   >
//     <path
//       d="M1 6L5.24264 10.2426L13.727 1.75732"
//       stroke="#FDB913"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// // ═══════════════════════════════════════════════════════════════════
// // 1. MAINTENANCE VIZ — Command Center
// // ═══════════════════════════════════════════════════════════════════
// const MaintenanceViz = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     let w, h;
//     let animationId;
//     let time = 0;

//     const resize = () => {
//       const rect = canvas.parentElement.getBoundingClientRect();
//       const dpr = window.devicePixelRatio || 1;
//       w = rect.width;
//       h = rect.height;
//       canvas.width = w * dpr;
//       canvas.height = h * dpr;
//       canvas.style.width = w + "px";
//       canvas.style.height = h + "px";
//       ctx.scale(dpr, dpr);
//     };

//     resize();
//     window.addEventListener("resize", resize);

//     // ── Data ──
//     const nodes = [];
//     const numNodes = 12;
//     for (let i = 0; i < numNodes; i++) {
//       const angle = (i / numNodes) * Math.PI * 2;
//       const r = Math.min(w, h) * 0.28;
//       nodes.push({
//         x: w / 2 + r * Math.cos(angle),
//         y: h / 2 + r * Math.sin(angle),
//         phase: i * 0.8,
//         size: 3 + Math.random() * 3,
//         status: Math.random() > 0.2 ? "healthy" : "warning",
//       });
//     }

//     // ── Radar ──
//     let radarAngle = 0;

//     // ── Widgets ──
//     const widgets = [
//       { label: "Incidents", value: "3", x: 0.08, y: 0.12, color: "#00A4FD" },
//       { label: "Uptime", value: "99.97%", x: 0.85, y: 0.1, color: "#FDB913" },
//       { label: "Requests", value: "47", x: 0.08, y: 0.82, color: "#00A4FD" },
//       {
//         label: "Performance",
//         value: "94%",
//         x: 0.85,
//         y: 0.84,
//         color: "#10B981",
//       },
//     ];

//     // ── Draw ──
//     const draw = () => {
//       time += 0.008;
//       radarAngle += 0.012;

//       ctx.clearRect(0, 0, w, h);

//       // ── Background ──
//       const grad = ctx.createRadialGradient(
//         w / 2,
//         h / 2,
//         0,
//         w / 2,
//         h / 2,
//         w * 0.6,
//       );
//       grad.addColorStop(0, "rgba(0, 164, 253, 0.04)");
//       grad.addColorStop(1, "rgba(0, 10, 30, 0)");
//       ctx.fillStyle = grad;
//       ctx.fillRect(0, 0, w, h);

//       // ── Grid ──
//       ctx.strokeStyle = "rgba(0, 164, 253, 0.04)";
//       ctx.lineWidth = 0.5;
//       for (let i = 0; i < w; i += 30) {
//         ctx.beginPath();
//         ctx.moveTo(i, 0);
//         ctx.lineTo(i, h);
//         ctx.stroke();
//       }
//       for (let i = 0; i < h; i += 30) {
//         ctx.beginPath();
//         ctx.moveTo(0, i);
//         ctx.lineTo(w, i);
//         ctx.stroke();
//       }

//       // ── Radar ──
//       const cx = w / 2,
//         cy = h / 2;
//       const maxR = Math.min(w, h) * 0.32;

//       // Radar rings
//       for (let ring = 0; ring < 3; ring++) {
//         const r = maxR * ((ring + 1) / 3);
//         ctx.beginPath();
//         ctx.arc(cx, cy, r, 0, Math.PI * 2);
//         ctx.strokeStyle = `rgba(0, 164, 253, ${0.06 + ring * 0.03})`;
//         ctx.lineWidth = 0.5;
//         ctx.stroke();
//       }

//       // Radar sweep
//       const sweep = radarAngle % (Math.PI * 2);
//       ctx.beginPath();
//       ctx.moveTo(cx, cy);
//       ctx.arc(cx, cy, maxR, sweep - 0.3, sweep);
//       ctx.closePath();
//       ctx.fillStyle = "rgba(0, 164, 253, 0.06)";
//       ctx.fill();

//       // Radar line
//       ctx.beginPath();
//       ctx.moveTo(cx, cy);
//       ctx.lineTo(cx + maxR * Math.cos(sweep), cy + maxR * Math.sin(sweep));
//       ctx.strokeStyle = "rgba(0, 164, 253, 0.3)";
//       ctx.lineWidth = 1;
//       ctx.stroke();

//       // ── Nodes & Connections ──
//       nodes.forEach((node, i) => {
//         const pulse = 0.5 + 0.5 * Math.sin(time * 2 + node.phase);
//         const r = node.size * (0.8 + 0.2 * pulse);

//         // Glow
//         const glow = ctx.createRadialGradient(
//           node.x,
//           node.y,
//           0,
//           node.x,
//           node.y,
//           r * 6,
//         );
//         const isHealthy = node.status === "healthy";
//         glow.addColorStop(
//           0,
//           isHealthy ? "rgba(16, 185, 129, 0.2)" : "rgba(251, 191, 36, 0.2)",
//         );
//         glow.addColorStop(1, "rgba(0,0,0,0)");
//         ctx.fillStyle = glow;
//         ctx.beginPath();
//         ctx.arc(node.x, node.y, r * 6, 0, Math.PI * 2);
//         ctx.fill();

//         // Node
//         ctx.beginPath();
//         ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
//         ctx.fillStyle = isHealthy ? "#10B981" : "#FBBF24";
//         ctx.fill();

//         // Inner glow
//         ctx.beginPath();
//         ctx.arc(node.x, node.y, r * 0.4, 0, Math.PI * 2);
//         ctx.fillStyle = "rgba(255,255,255,0.4)";
//         ctx.fill();

//         // Connections to center
//         ctx.beginPath();
//         ctx.moveTo(cx, cy);
//         ctx.lineTo(node.x, node.y);
//         ctx.strokeStyle = `rgba(0, 164, 253, ${0.05 + 0.05 * pulse})`;
//         ctx.lineWidth = 0.5;
//         ctx.stroke();
//       });

//       // ── SAP Core ──
//       // Outer glow
//       const coreGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR * 0.35);
//       coreGlow.addColorStop(0, "rgba(0, 164, 253, 0.15)");
//       coreGlow.addColorStop(0.5, "rgba(0, 164, 253, 0.05)");
//       coreGlow.addColorStop(1, "rgba(0,0,0,0)");
//       ctx.fillStyle = coreGlow;
//       ctx.beginPath();
//       ctx.arc(cx, cy, maxR * 0.35, 0, Math.PI * 2);
//       ctx.fill();

//       // Core ring
//       const ringPulse = 1 + 0.03 * Math.sin(time * 1.5);
//       ctx.beginPath();
//       ctx.arc(cx, cy, maxR * 0.18 * ringPulse, 0, Math.PI * 2);
//       ctx.strokeStyle = "rgba(0, 164, 253, 0.3)";
//       ctx.lineWidth = 2;
//       ctx.stroke();

//       // Core circle
//       const coreGrad = ctx.createRadialGradient(
//         cx - 5,
//         cy - 5,
//         0,
//         cx,
//         cy,
//         maxR * 0.15,
//       );
//       coreGrad.addColorStop(0, "#00A4FD");
//       coreGrad.addColorStop(0.7, "#0066AA");
//       coreGrad.addColorStop(1, "#003366");
//       ctx.fillStyle = coreGrad;
//       ctx.beginPath();
//       ctx.arc(cx, cy, maxR * 0.15, 0, Math.PI * 2);
//       ctx.fill();

//       // SAP text
//       ctx.fillStyle = "rgba(255,255,255,0.9)";
//       ctx.font = `bold ${maxR * 0.1}px Inter, sans-serif`;
//       ctx.textAlign = "center";
//       ctx.textBaseline = "middle";
//       ctx.fillText("SAP", cx, cy - 3);

//       ctx.fillStyle = "rgba(255,255,255,0.3)";
//       ctx.font = `${maxR * 0.035}px Inter, sans-serif`;
//       ctx.fillText("DIGITAL CORE", cx, cy + maxR * 0.07);

//       // ── Widgets ──
//       widgets.forEach((w) => {
//         const wx = w.x * w;
//         const wy = w.y * h;
//         const ww = Math.min(w, h) * 0.16;
//         const wh = Math.min(w, h) * 0.08;

//         // Glass background
//         ctx.fillStyle = "rgba(255,255,255,0.03)";
//         ctx.strokeStyle = "rgba(255,255,255,0.06)";
//         ctx.lineWidth = 0.5;
//         ctx.beginPath();
//         ctx.roundRect(wx, wy, ww, wh, 6);
//         ctx.fill();
//         ctx.stroke();

//         // Label
//         ctx.fillStyle = "rgba(255,255,255,0.3)";
//         ctx.font = `${ww * 0.12}px Inter, sans-serif`;
//         ctx.textAlign = "left";
//         ctx.textBaseline = "top";
//         ctx.fillText(w.label, wx + ww * 0.08, wy + wh * 0.12);

//         // Value
//         ctx.fillStyle = w.color;
//         ctx.font = `bold ${ww * 0.2}px Inter, sans-serif`;
//         ctx.textBaseline = "bottom";
//         ctx.fillText(w.value, wx + ww * 0.08, wy + wh * 0.85);
//       });

//       // ── Notification cards ──
//       const notifCount = 3;
//       for (let i = 0; i < notifCount; i++) {
//         const offset = ((time * 1.2 + i * 2.1) % 6) - 3;
//         const alpha = 1 - Math.abs(offset) / 3;
//         if (alpha <= 0) continue;

//         const nx = w * 0.5 + offset * w * 0.15;
//         const ny = h * 0.04 + i * h * 0.045;
//         const nw = Math.min(w, h) * 0.2;
//         const nh = Math.min(w, h) * 0.035;

//         ctx.fillStyle = `rgba(0, 164, 253, ${0.06 * alpha})`;
//         ctx.strokeStyle = `rgba(0, 164, 253, ${0.1 * alpha})`;
//         ctx.lineWidth = 0.5;
//         ctx.beginPath();
//         ctx.roundRect(nx, ny, nw, nh, 4);
//         ctx.fill();
//         ctx.stroke();

//         ctx.fillStyle = `rgba(255,255,255,${0.4 * alpha})`;
//         ctx.font = `${nw * 0.09}px Inter, sans-serif`;
//         ctx.textAlign = "left";
//         ctx.textBaseline = "middle";
//         const msgs = [
//           "Incident #1042 resolved",
//           "Patch deployed successfully",
//           "Performance alert cleared",
//         ];
//         ctx.fillText(msgs[i % msgs.length], nx + nw * 0.06, ny + nh / 2);
//       }

//       // ── Flow particles ──
//       for (let i = 0; i < 6; i++) {
//         const t = (time * 0.5 + i * 0.3) % 1;
//         const angle = t * Math.PI * 2;
//         const r = maxR * 0.2 + t * maxR * 0.3;
//         const px = cx + r * Math.cos(angle + i * 1.2);
//         const py = cy + r * Math.sin(angle + i * 1.2);
//         const size = 1.5 + Math.random() * 1.5;
//         ctx.fillStyle = `rgba(253, 185, 19, ${0.3 + 0.3 * Math.sin(t * 20)})`;
//         ctx.beginPath();
//         ctx.arc(px, py, size, 0, Math.PI * 2);
//         ctx.fill();
//       }
//     };

//     // ── roundRect polyfill for canvas ──
//     if (!CanvasRenderingContext2D.prototype.roundRect) {
//       CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
//         if (r > w / 2) r = w / 2;
//         if (r > h / 2) r = h / 2;
//         this.moveTo(x + r, y);
//         this.lineTo(x + w - r, y);
//         this.quadraticCurveTo(x + w, y, x + w, y + r);
//         this.lineTo(x + w, y + h - r);
//         this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
//         this.lineTo(x + r, y + h);
//         this.quadraticCurveTo(x, y + h, x, y + h - r);
//         this.lineTo(x, y + r);
//         this.quadraticCurveTo(x, y, x + r, y);
//         return this;
//       };
//     }

//     const loop = () => {
//       draw();
//       animationId = requestAnimationFrame(loop);
//     };
//     loop();

//     return () => {
//       cancelAnimationFrame(animationId);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <div
//       className="relative w-full rounded-2xl overflow-hidden"
//       style={{ aspectRatio: "1.35 / 1" }}
//     >
//       <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
//     </div>
//   );
// };

// // ═══════════════════════════════════════════════════════════════════
// // 2. MIGRATION VIZ — Data Flow
// // ═══════════════════════════════════════════════════════════════════
// const MigrationViz = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     let w, h;
//     let animationId;
//     let time = 0;

//     const resize = () => {
//       const rect = canvas.parentElement.getBoundingClientRect();
//       const dpr = window.devicePixelRatio || 1;
//       w = rect.width;
//       h = rect.height;
//       canvas.width = w * dpr;
//       canvas.height = h * dpr;
//       canvas.style.width = w + "px";
//       canvas.style.height = h + "px";
//       ctx.scale(dpr, dpr);
//     };

//     resize();
//     window.addEventListener("resize", resize);

//     // ── Particles ──
//     const particles = [];
//     const numParticles = 80;
//     for (let i = 0; i < numParticles; i++) {
//       particles.push({
//         x: Math.random() * w * 0.2,
//         y: Math.random() * h,
//         speed: 0.3 + Math.random() * 0.5,
//         size: 1 + Math.random() * 2.5,
//         phase: Math.random() * 10,
//         type: Math.random() > 0.85 ? "gold" : "blue",
//         corrupted: Math.random() < 0.1,
//       });
//     }

//     const draw = () => {
//       time += 0.008;
//       ctx.clearRect(0, 0, w, h);

//       // ── Background ──
//       const grad = ctx.createLinearGradient(0, 0, w, 0);
//       grad.addColorStop(0, "rgba(1, 24, 47, 0.3)");
//       grad.addColorStop(0.5, "rgba(0, 40, 80, 0.2)");
//       grad.addColorStop(1, "rgba(0, 10, 30, 0.3)");
//       ctx.fillStyle = grad;
//       ctx.fillRect(0, 0, w, h);

//       // ── Legacy systems (left) ──
//       const legacyX = w * 0.08;
//       const legacyY = h * 0.15;
//       const legacyW = w * 0.16;
//       const legacyH = h * 0.7;

//       ctx.fillStyle = "rgba(255,255,255,0.02)";
//       ctx.strokeStyle = "rgba(255,255,255,0.05)";
//       ctx.lineWidth = 0.5;
//       ctx.beginPath();
//       ctx.roundRect(legacyX, legacyY, legacyW, legacyH, 8);
//       ctx.fill();
//       ctx.stroke();

//       // Legacy label
//       ctx.fillStyle = "rgba(255,255,255,0.2)";
//       ctx.font = `${w * 0.018}px Inter, sans-serif`;
//       ctx.textAlign = "center";
//       ctx.textBaseline = "top";
//       ctx.fillText("LEGACY SYSTEMS", legacyX + legacyW / 2, legacyY + 8);

//       // Legacy icons (simple boxes)
//       for (let i = 0; i < 4; i++) {
//         const lx = legacyX + legacyW * 0.12 + (i % 2) * legacyW * 0.35;
//         const ly = legacyY + legacyH * 0.2 + Math.floor(i / 2) * legacyH * 0.25;
//         const lw = legacyW * 0.3;
//         const lh = legacyH * 0.12;
//         ctx.fillStyle = `rgba(100, 100, 130, ${0.15 + i * 0.04})`;
//         ctx.strokeStyle = `rgba(200, 200, 220, ${0.1 + i * 0.03})`;
//         ctx.lineWidth = 0.5;
//         ctx.beginPath();
//         ctx.roundRect(lx, ly, lw, lh, 3);
//         ctx.fill();
//         ctx.stroke();
//         ctx.fillStyle = "rgba(255,255,255,0.15)";
//         ctx.font = `${lw * 0.15}px Inter, sans-serif`;
//         ctx.textAlign = "center";
//         ctx.textBaseline = "middle";
//         const labels = ["ERP", "CRM", "DB", "Legacy"];
//         ctx.fillText(labels[i], lx + lw / 2, ly + lh / 2);
//       }

//       // ── SAP Cloud (right) ──
//       const cloudX = w * 0.76;
//       const cloudY = h * 0.12;
//       const cloudW = w * 0.18;
//       const cloudH = h * 0.76;

//       ctx.fillStyle = "rgba(0, 164, 253, 0.04)";
//       ctx.strokeStyle = "rgba(0, 164, 253, 0.08)";
//       ctx.lineWidth = 0.5;
//       ctx.beginPath();
//       ctx.roundRect(cloudX, cloudY, cloudW, cloudH, 8);
//       ctx.fill();
//       ctx.stroke();

//       ctx.fillStyle = "rgba(0, 164, 253, 0.3)";
//       ctx.font = `bold ${w * 0.018}px Inter, sans-serif`;
//       ctx.textAlign = "center";
//       ctx.textBaseline = "top";
//       ctx.fillText("SAP S/4HANA", cloudX + cloudW / 2, cloudY + 8);

//       // Cloud icon
//       ctx.fillStyle = "rgba(0, 164, 253, 0.08)";
//       ctx.beginPath();
//       ctx.arc(
//         cloudX + cloudW / 2,
//         cloudY + cloudH * 0.25,
//         cloudW * 0.25,
//         0,
//         Math.PI * 2,
//       );
//       ctx.fill();

//       ctx.fillStyle = "rgba(0, 164, 253, 0.15)";
//       ctx.font = `${cloudW * 0.4}px Inter, sans-serif`;
//       ctx.textAlign = "center";
//       ctx.textBaseline = "middle";
//       ctx.fillText("☁", cloudX + cloudW / 2, cloudY + cloudH * 0.25);

//       // ── Pipeline ──
//       const pipeY1 = h * 0.2;
//       const pipeY2 = h * 0.8;
//       const pipeX1 = legacyX + legacyW;
//       const pipeX2 = cloudX;

//       // Pipe lines
//       for (let i = 0; i < 6; i++) {
//         const yPos = pipeY1 + (pipeY2 - pipeY1) * (i / 5);
//         ctx.beginPath();
//         ctx.moveTo(pipeX1, yPos);
//         ctx.lineTo(pipeX2, yPos);
//         ctx.strokeStyle = `rgba(0, 164, 253, ${0.03 + 0.02 * (i / 5)})`;
//         ctx.lineWidth = 0.5;
//         ctx.stroke();
//       }

//       // ── Transformation Engine (center) ──
//       const tx = w * 0.42;
//       const ty = h * 0.35;
//       const tr = Math.min(w, h) * 0.12;

//       // Glow
//       const tGlow = ctx.createRadialGradient(tx, ty, 0, tx, ty, tr * 1.2);
//       tGlow.addColorStop(0, "rgba(253, 185, 19, 0.1)");
//       tGlow.addColorStop(0.5, "rgba(0, 164, 253, 0.05)");
//       tGlow.addColorStop(1, "rgba(0,0,0,0)");
//       ctx.fillStyle = tGlow;
//       ctx.beginPath();
//       ctx.arc(tx, ty, tr * 1.2, 0, Math.PI * 2);
//       ctx.fill();

//       // Engine ring
//       const ringPulse = 1 + 0.05 * Math.sin(time * 2);
//       ctx.beginPath();
//       ctx.arc(tx, ty, tr * 0.9 * ringPulse, 0, Math.PI * 2);
//       ctx.strokeStyle = `rgba(253, 185, 19, ${0.2 + 0.1 * Math.sin(time * 2)})`;
//       ctx.lineWidth = 1.5;
//       ctx.stroke();

//       // Engine inner
//       const tGrad = ctx.createRadialGradient(
//         tx - 5,
//         ty - 5,
//         0,
//         tx,
//         ty,
//         tr * 0.7,
//       );
//       tGrad.addColorStop(0, "#FDB913");
//       tGrad.addColorStop(0.5, "#D4A020");
//       tGrad.addColorStop(1, "#8A6A10");
//       ctx.fillStyle = tGrad;
//       ctx.beginPath();
//       ctx.arc(tx, ty, tr * 0.7, 0, Math.PI * 2);
//       ctx.fill();

//       ctx.fillStyle = "rgba(255,255,255,0.8)";
//       ctx.font = `bold ${tr * 0.25}px Inter, sans-serif`;
//       ctx.textAlign = "center";
//       ctx.textBaseline = "middle";
//       ctx.fillText("AI", tx, ty - 3);

//       ctx.fillStyle = "rgba(255,255,255,0.4)";
//       ctx.font = `${tr * 0.09}px Inter, sans-serif`;
//       ctx.fillText("TRANSFORM", tx, ty + tr * 0.3);

//       // ── Particles flowing ──
//       particles.forEach((p, idx) => {
//         // Move
//         p.x += p.speed * 0.8;
//         if (p.x > w) {
//           p.x = w * 0.05 + Math.random() * w * 0.1;
//           p.y = Math.random() * h;
//           p.corrupted = Math.random() < 0.08;
//         }

//         // Draw particle
//         const px = p.x;
//         const py = p.y;
//         const size = p.size;

//         // Glow
//         if (!p.corrupted) {
//           const glow = ctx.createRadialGradient(px, py, 0, px, py, size * 6);
//           glow.addColorStop(
//             0,
//             p.type === "gold" ? "rgba(253,185,19,0.1)" : "rgba(0,164,253,0.1)",
//           );
//           glow.addColorStop(1, "rgba(0,0,0,0)");
//           ctx.fillStyle = glow;
//           ctx.beginPath();
//           ctx.arc(px, py, size * 6, 0, Math.PI * 2);
//           ctx.fill();
//         }

//         // Particle body
//         ctx.beginPath();
//         ctx.arc(px, py, size, 0, Math.PI * 2);
//         if (p.corrupted) {
//           ctx.fillStyle = `rgba(239, 68, 68, ${0.6 + 0.4 * Math.sin(time * 3 + p.phase)})`;
//         } else if (p.type === "gold") {
//           ctx.fillStyle = `rgba(253, 185, 19, ${0.5 + 0.3 * Math.sin(time * 2 + p.phase)})`;
//         } else {
//           ctx.fillStyle = `rgba(0, 164, 253, ${0.4 + 0.3 * Math.sin(time * 1.5 + p.phase)})`;
//         }
//         ctx.fill();

//         // Checkmark for validated
//         if (!p.corrupted && p.type === "gold" && p.x > w * 0.45) {
//           ctx.strokeStyle = "rgba(16, 185, 129, 0.3)";
//           ctx.lineWidth = 0.5;
//           ctx.beginPath();
//           ctx.moveTo(px - size * 0.6, py);
//           ctx.lineTo(px - size * 0.2, py + size * 0.5);
//           ctx.lineTo(px + size * 0.6, py - size * 0.4);
//           ctx.stroke();
//         }
//       });

//       // ── Progress bar ──
//       const progX = w * 0.3;
//       const progY = h * 0.92;
//       const progW = w * 0.4;
//       const progH = h * 0.02;

//       ctx.fillStyle = "rgba(255,255,255,0.05)";
//       ctx.beginPath();
//       ctx.roundRect(progX, progY, progW, progH, 4);
//       ctx.fill();

//       const progress = 0.55 + 0.35 * Math.sin(time * 0.3);
//       const fillGrad = ctx.createLinearGradient(progX, 0, progX + progW, 0);
//       fillGrad.addColorStop(0, "#00A4FD");
//       fillGrad.addColorStop(0.6, "#FDB913");
//       fillGrad.addColorStop(1, "#10B981");
//       ctx.fillStyle = fillGrad;
//       ctx.beginPath();
//       ctx.roundRect(progX, progY, progW * progress, progH, 4);
//       ctx.fill();

//       ctx.fillStyle = "rgba(255,255,255,0.2)";
//       ctx.font = `${w * 0.012}px Inter, sans-serif`;
//       ctx.textAlign = "center";
//       ctx.textBaseline = "middle";
//       ctx.fillText(
//         `Migration ${Math.round(progress * 100)}%`,
//         progX + progW / 2,
//         progY + progH / 2,
//       );
//     };

//     if (!CanvasRenderingContext2D.prototype.roundRect) {
//       CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
//         if (r > w / 2) r = w / 2;
//         if (r > h / 2) r = h / 2;
//         this.moveTo(x + r, y);
//         this.lineTo(x + w - r, y);
//         this.quadraticCurveTo(x + w, y, x + w, y + r);
//         this.lineTo(x + w, y + h - r);
//         this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
//         this.lineTo(x + r, y + h);
//         this.quadraticCurveTo(x, y + h, x, y + h - r);
//         this.lineTo(x, y + r);
//         this.quadraticCurveTo(x, y, x + r, y);
//         return this;
//       };
//     }

//     const loop = () => {
//       draw();
//       animationId = requestAnimationFrame(loop);
//     };
//     loop();

//     return () => {
//       cancelAnimationFrame(animationId);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <div
//       className="relative w-full rounded-2xl overflow-hidden"
//       style={{ aspectRatio: "1.35 / 1" }}
//     >
//       <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
//     </div>
//   );
// };

// // ═══════════════════════════════════════════════════════════════════
// // 3. TALENT VIZ — Network Collaboration
// // ═══════════════════════════════════════════════════════════════════
// const TalentViz = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     let w, h;
//     let animationId;
//     let time = 0;

//     const resize = () => {
//       const rect = canvas.parentElement.getBoundingClientRect();
//       const dpr = window.devicePixelRatio || 1;
//       w = rect.width;
//       h = rect.height;
//       canvas.width = w * dpr;
//       canvas.height = h * dpr;
//       canvas.style.width = w + "px";
//       canvas.style.height = h + "px";
//       ctx.scale(dpr, dpr);
//     };

//     resize();
//     window.addEventListener("resize", resize);

//     // ── Nodes ──
//     const roles = [
//       { label: "SAP Fiori", x: 0.12, y: 0.15 },
//       { label: "SAP BTP", x: 0.88, y: 0.12 },
//       { label: "SAP Basis", x: 0.05, y: 0.55 },
//       { label: "ABAP Dev", x: 0.95, y: 0.5 },
//       { label: "SAP HANA", x: 0.15, y: 0.85 },
//       { label: "SAP FICO", x: 0.85, y: 0.88 },
//       { label: "SAP MM", x: 0.48, y: 0.06 },
//       { label: "SAP SD", x: 0.52, y: 0.94 },
//     ];

//     const nodePositions = roles.map((r) => ({
//       x: r.x * w,
//       y: r.y * h,
//       label: r.label,
//       phase: Math.random() * 10,
//       size: 5 + Math.random() * 4,
//       connected: true,
//     }));

//     // ── Connections ──
//     const connections = [];
//     for (let i = 0; i < nodePositions.length; i++) {
//       for (let j = i + 1; j < nodePositions.length; j++) {
//         if (Math.random() > 0.5) {
//           connections.push([i, j]);
//         }
//       }
//     }

//     const draw = () => {
//       time += 0.006;
//       ctx.clearRect(0, 0, w, h);

//       // ── Background ──
//       const grad = ctx.createRadialGradient(
//         w / 2,
//         h / 2,
//         0,
//         w / 2,
//         h / 2,
//         w * 0.6,
//       );
//       grad.addColorStop(0, "rgba(0, 164, 253, 0.03)");
//       grad.addColorStop(1, "rgba(0, 10, 30, 0)");
//       ctx.fillStyle = grad;
//       ctx.fillRect(0, 0, w, h);

//       // ── Grid ──
//       ctx.strokeStyle = "rgba(0, 164, 253, 0.02)";
//       ctx.lineWidth = 0.3;
//       for (let i = 0; i < w; i += 40) {
//         ctx.beginPath();
//         ctx.moveTo(i, 0);
//         ctx.lineTo(i, h);
//         ctx.stroke();
//       }
//       for (let i = 0; i < h; i += 40) {
//         ctx.beginPath();
//         ctx.moveTo(0, i);
//         ctx.lineTo(w, i);
//         ctx.stroke();
//       }

//       // ── Connections ──
//       connections.forEach(([i, j]) => {
//         const n1 = nodePositions[i];
//         const n2 = nodePositions[j];
//         const pulse = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(time * 1.2 + i + j));

//         ctx.beginPath();
//         ctx.moveTo(n1.x, n1.y);
//         ctx.lineTo(n2.x, n2.y);
//         ctx.strokeStyle = `rgba(0, 164, 253, ${0.03 + 0.06 * pulse})`;
//         ctx.lineWidth = 0.5 + pulse * 0.5;
//         ctx.stroke();

//         // Flow particle on connection
//         const t = (time * 0.4 + i * 0.7 + j * 0.3) % 1;
//         const px = n1.x + (n2.x - n1.x) * t;
//         const py = n1.y + (n2.y - n1.y) * t;
//         ctx.fillStyle = `rgba(253, 185, 19, ${0.2 + 0.3 * Math.sin(t * 20)})`;
//         ctx.beginPath();
//         ctx.arc(px, py, 1.5, 0, Math.PI * 2);
//         ctx.fill();
//       });

//       // ── SAP Core ──
//       const cx = w / 2,
//         cy = h / 2;
//       const coreR = Math.min(w, h) * 0.09;

//       // Glow
//       const coreGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR * 1.8);
//       coreGlow.addColorStop(0, "rgba(0, 164, 253, 0.12)");
//       coreGlow.addColorStop(0.5, "rgba(0, 164, 253, 0.04)");
//       coreGlow.addColorStop(1, "rgba(0,0,0,0)");
//       ctx.fillStyle = coreGlow;
//       ctx.beginPath();
//       ctx.arc(cx, cy, coreR * 1.8, 0, Math.PI * 2);
//       ctx.fill();

//       // Core rings
//       for (let ring = 0; ring < 3; ring++) {
//         const r =
//           coreR * (0.6 + ring * 0.3 + 0.05 * Math.sin(time * 1.5 + ring));
//         ctx.beginPath();
//         ctx.arc(cx, cy, r, 0, Math.PI * 2);
//         ctx.strokeStyle = `rgba(0, 164, 253, ${0.1 + ring * 0.05})`;
//         ctx.lineWidth = 0.5 + ring * 0.3;
//         ctx.stroke();
//       }

//       // Core body
//       const coreGrad = ctx.createRadialGradient(
//         cx - 5,
//         cy - 5,
//         0,
//         cx,
//         cy,
//         coreR,
//       );
//       coreGrad.addColorStop(0, "#00A4FD");
//       coreGrad.addColorStop(0.7, "#0066AA");
//       coreGrad.addColorStop(1, "#003366");
//       ctx.fillStyle = coreGrad;
//       ctx.beginPath();
//       ctx.arc(cx, cy, coreR, 0, Math.PI * 2);
//       ctx.fill();

//       ctx.fillStyle = "rgba(255,255,255,0.9)";
//       ctx.font = `bold ${coreR * 0.5}px Inter, sans-serif`;
//       ctx.textAlign = "center";
//       ctx.textBaseline = "middle";
//       ctx.fillText("SAP", cx, cy - 2);

//       ctx.fillStyle = "rgba(255,255,255,0.25)";
//       ctx.font = `${coreR * 0.2}px Inter, sans-serif`;
//       ctx.fillText("DELIVERY HUB", cx, cy + coreR * 0.45);

//       // ── Nodes ──
//       nodePositions.forEach((node, idx) => {
//         const pulse = 0.6 + 0.4 * Math.sin(time * 1.8 + node.phase);
//         const r = node.size * (0.7 + 0.3 * pulse);

//         // Glow
//         const glow = ctx.createRadialGradient(
//           node.x,
//           node.y,
//           0,
//           node.x,
//           node.y,
//           r * 8,
//         );
//         glow.addColorStop(0, "rgba(0, 164, 253, 0.08)");
//         glow.addColorStop(1, "rgba(0,0,0,0)");
//         ctx.fillStyle = glow;
//         ctx.beginPath();
//         ctx.arc(node.x, node.y, r * 8, 0, Math.PI * 2);
//         ctx.fill();

//         // Avatar circle
//         ctx.beginPath();
//         ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(0, 164, 253, ${0.15 + 0.1 * pulse})`;
//         ctx.fill();
//         ctx.strokeStyle = `rgba(0, 164, 253, ${0.2 + 0.15 * pulse})`;
//         ctx.lineWidth = 1.5;
//         ctx.stroke();

//         // Avatar icon
//         ctx.fillStyle = `rgba(255,255,255,${0.4 + 0.2 * pulse})`;
//         ctx.font = `${r * 0.8}px Inter, sans-serif`;
//         ctx.textAlign = "center";
//         ctx.textBaseline = "middle";
//         ctx.fillText("👤", node.x, node.y + 1);

//         // Label
//         ctx.fillStyle = `rgba(255,255,255,${0.3 + 0.15 * pulse})`;
//         ctx.font = `${w * 0.015}px Inter, sans-serif`;
//         ctx.textAlign = "center";
//         ctx.textBaseline = "top";
//         ctx.fillText(node.label, node.x, node.y + r + 6);

//         // Status dot
//         ctx.beginPath();
//         ctx.arc(node.x + r * 0.6, node.y - r * 0.6, r * 0.3, 0, Math.PI * 2);
//         ctx.fillStyle = "#10B981";
//         ctx.fill();
//         ctx.fillStyle = "rgba(255,255,255,0.3)";
//         ctx.beginPath();
//         ctx.arc(node.x + r * 0.6, node.y - r * 0.6, r * 0.1, 0, Math.PI * 2);
//         ctx.fill();
//       });

//       // ── Resource allocation widget ──
//       const wx = w * 0.04;
//       const wy = h * 0.04;
//       const ww = w * 0.18;
//       const wh = h * 0.14;

//       ctx.fillStyle = "rgba(255,255,255,0.02)";
//       ctx.strokeStyle = "rgba(255,255,255,0.04)";
//       ctx.lineWidth = 0.5;
//       ctx.beginPath();
//       ctx.roundRect(wx, wy, ww, wh, 6);
//       ctx.fill();
//       ctx.stroke();

//       ctx.fillStyle = "rgba(255,255,255,0.2)";
//       ctx.font = `${ww * 0.1}px Inter, sans-serif`;
//       ctx.textAlign = "left";
//       ctx.textBaseline = "top";
//       ctx.fillText("Resource Pool", wx + 8, wy + 6);

//       const resources = [
//         { label: "Available", value: "87", color: "#10B981" },
//         { label: "Allocated", value: "142", color: "#00A4FD" },
//         { label: "On Bench", value: "23", color: "#FBBF24" },
//       ];
//       resources.forEach((r, i) => {
//         const ry = wy + 22 + i * wh * 0.25;
//         ctx.fillStyle = "rgba(255,255,255,0.05)";
//         ctx.beginPath();
//         ctx.roundRect(wx + 8, ry, ww - 16, wh * 0.18, 3);
//         ctx.fill();

//         ctx.fillStyle = "rgba(255,255,255,0.3)";
//         ctx.font = `${ww * 0.07}px Inter, sans-serif`;
//         ctx.textBaseline = "middle";
//         ctx.fillText(r.label, wx + 12, ry + wh * 0.09);

//         ctx.fillStyle = r.color;
//         ctx.font = `bold ${ww * 0.1}px Inter, sans-serif`;
//         ctx.textAlign = "right";
//         ctx.fillText(r.value, wx + ww - 12, ry + wh * 0.09);
//       });

//       // ── Collaboration notifications ──
//       const notifX = w * 0.78;
//       const notifY = h * 0.04;
//       const notifW = w * 0.2;
//       const notifH = h * 0.06;

//       const notifs = [
//         "Team joined: SAP Fiori",
//         "Resource matched",
//         "Project kickoff",
//       ];
//       notifs.forEach((n, i) => {
//         const alpha = 0.3 + 0.2 * Math.sin(time * 1.5 + i * 2);
//         const ny = notifY + i * (notifH + 4);

//         ctx.fillStyle = `rgba(253, 185, 19, ${0.03 * alpha})`;
//         ctx.strokeStyle = `rgba(253, 185, 19, ${0.06 * alpha})`;
//         ctx.lineWidth = 0.5;
//         ctx.beginPath();
//         ctx.roundRect(notifX, ny, notifW, notifH, 4);
//         ctx.fill();
//         ctx.stroke();

//         ctx.fillStyle = `rgba(255,255,255,${0.25 * alpha})`;
//         ctx.font = `${notifW * 0.08}px Inter, sans-serif`;
//         ctx.textAlign = "left";
//         ctx.textBaseline = "middle";
//         ctx.fillText("✦ " + n, notifX + 8, ny + notifH / 2);
//       });
//     };

//     if (!CanvasRenderingContext2D.prototype.roundRect) {
//       CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
//         if (r > w / 2) r = w / 2;
//         if (r > h / 2) r = h / 2;
//         this.moveTo(x + r, y);
//         this.lineTo(x + w - r, y);
//         this.quadraticCurveTo(x + w, y, x + w, y + r);
//         this.lineTo(x + w, y + h - r);
//         this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
//         this.lineTo(x + r, y + h);
//         this.quadraticCurveTo(x, y + h, x, y + h - r);
//         this.lineTo(x, y + r);
//         this.quadraticCurveTo(x, y, x + r, y);
//         return this;
//       };
//     }

//     const loop = () => {
//       draw();
//       animationId = requestAnimationFrame(loop);
//     };
//     loop();

//     return () => {
//       cancelAnimationFrame(animationId);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <div
//       className="relative w-full rounded-2xl overflow-hidden"
//       style={{ aspectRatio: "1.35 / 1" }}
//     >
//       <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
//     </div>
//   );
// };

// // ═══════════════════════════════════════════════════════════════════
// // 4. SECURITY VIZ — Shield & Code Scan
// // ═══════════════════════════════════════════════════════════════════
// const SecurityViz = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     let w, h;
//     let animationId;
//     let time = 0;

//     const resize = () => {
//       const rect = canvas.parentElement.getBoundingClientRect();
//       const dpr = window.devicePixelRatio || 1;
//       w = rect.width;
//       h = rect.height;
//       canvas.width = w * dpr;
//       canvas.height = h * dpr;
//       canvas.style.width = w + "px";
//       canvas.style.height = h + "px";
//       ctx.scale(dpr, dpr);
//     };

//     resize();
//     window.addEventListener("resize", resize);

//     // ── Code lines ──
//     const codeLines = [];
//     for (let i = 0; i < 30; i++) {
//       codeLines.push({
//         x: Math.random() * w,
//         y: Math.random() * h,
//         len: 20 + Math.random() * 60,
//         speed: 0.1 + Math.random() * 0.3,
//         phase: Math.random() * 10,
//       });
//     }

//     // ── Particles (threats) ──
//     const threats = [];
//     for (let i = 0; i < 8; i++) {
//       threats.push({
//         x: Math.random() * w,
//         y: Math.random() * h,
//         vx: (Math.random() - 0.5) * 1.2,
//         vy: (Math.random() - 0.5) * 1.2,
//         size: 2 + Math.random() * 3,
//         phase: Math.random() * 10,
//         alive: true,
//       });
//     }

//     const draw = () => {
//       time += 0.008;
//       ctx.clearRect(0, 0, w, h);

//       // ── Background ──
//       const grad = ctx.createRadialGradient(
//         w / 2,
//         h / 2,
//         0,
//         w / 2,
//         h / 2,
//         w * 0.6,
//       );
//       grad.addColorStop(0, "rgba(0, 164, 253, 0.03)");
//       grad.addColorStop(1, "rgba(0, 10, 30, 0)");
//       ctx.fillStyle = grad;
//       ctx.fillRect(0, 0, w, h);

//       // ── Code lines ──
//       codeLines.forEach((line) => {
//         const yPos = line.y + Math.sin(time * line.speed + line.phase) * 5;
//         const alpha = 0.05 + 0.05 * Math.sin(time * line.speed + line.phase);

//         // Code characters
//         const chars = "abcdefghijklmnopqrstuvwxyz0123456789{}()<>/";
//         for (let i = 0; i < line.len; i += 6) {
//           const char = chars[Math.floor(Math.random() * chars.length)];
//           ctx.fillStyle = `rgba(0, 164, 253, ${alpha * 0.5})`;
//           ctx.font = `${6 + Math.random() * 4}px monospace`;
//           ctx.textBaseline = "middle";
//           ctx.fillText(char, line.x + i * 3, yPos + Math.sin(i * 0.3) * 3);
//         }
//       });

//       // ── Shield ──
//       const cx = w / 2,
//         cy = h / 2;
//       const shieldR = Math.min(w, h) * 0.2;

//       // Shield glow
//       const shieldGlow = ctx.createRadialGradient(
//         cx,
//         cy,
//         0,
//         cx,
//         cy,
//         shieldR * 1.5,
//       );
//       shieldGlow.addColorStop(0, "rgba(0, 164, 253, 0.06)");
//       shieldGlow.addColorStop(0.5, "rgba(0, 164, 253, 0.02)");
//       shieldGlow.addColorStop(1, "rgba(0,0,0,0)");
//       ctx.fillStyle = shieldGlow;
//       ctx.beginPath();
//       ctx.arc(cx, cy, shieldR * 1.5, 0, Math.PI * 2);
//       ctx.fill();

//       // Shield layers
//       for (let layer = 0; layer < 4; layer++) {
//         const r = shieldR * (0.3 + layer * 0.2);
//         const rot = time * (0.2 + layer * 0.1);
//         ctx.beginPath();
//         for (let i = 0; i < 12; i++) {
//           const angle = (i / 12) * Math.PI * 2 + rot;
//           const radius = r * (1 + 0.08 * Math.sin(time * 1.5 + layer + i));
//           const px = cx + radius * Math.cos(angle);
//           const py = cy + radius * Math.sin(angle);
//           if (i === 0) ctx.moveTo(px, py);
//           else ctx.lineTo(px, py);
//         }
//         ctx.closePath();
//         ctx.strokeStyle = `rgba(0, 164, 253, ${0.04 + layer * 0.02})`;
//         ctx.lineWidth = 0.5 + layer * 0.3;
//         ctx.stroke();
//       }

//       // Shield icon
//       const shieldSize = shieldR * 0.5;
//       // Shield shape
//       ctx.beginPath();
//       ctx.moveTo(cx, cy - shieldSize * 0.8);
//       ctx.quadraticCurveTo(
//         cx + shieldSize * 1.2,
//         cy - shieldSize * 0.6,
//         cx + shieldSize * 0.9,
//         cy,
//       );
//       ctx.quadraticCurveTo(
//         cx + shieldSize * 0.8,
//         cy + shieldSize * 0.7,
//         cx,
//         cy + shieldSize * 0.9,
//       );
//       ctx.quadraticCurveTo(
//         cx - shieldSize * 0.8,
//         cy + shieldSize * 0.7,
//         cx - shieldSize * 0.9,
//         cy,
//       );
//       ctx.quadraticCurveTo(
//         cx - shieldSize * 1.2,
//         cy - shieldSize * 0.6,
//         cx,
//         cy - shieldSize * 0.8,
//       );
//       ctx.closePath();

//       const shieldGrad = ctx.createLinearGradient(
//         cx - shieldSize,
//         cy - shieldSize,
//         cx + shieldSize,
//         cy + shieldSize,
//       );
//       shieldGrad.addColorStop(0, "rgba(0, 164, 253, 0.15)");
//       shieldGrad.addColorStop(0.5, "rgba(0, 164, 253, 0.05)");
//       shieldGrad.addColorStop(1, "rgba(0, 164, 253, 0.02)");
//       ctx.fillStyle = shieldGrad;
//       ctx.fill();
//       ctx.strokeStyle = `rgba(0, 164, 253, ${0.15 + 0.1 * Math.sin(time * 2)})`;
//       ctx.lineWidth = 1.5;
//       ctx.stroke();

//       // SAP text on shield
//       ctx.fillStyle = "rgba(255,255,255,0.15)";
//       ctx.font = `bold ${shieldSize * 0.5}px Inter, sans-serif`;
//       ctx.textAlign = "center";
//       ctx.textBaseline = "middle";
//       ctx.fillText("SECURE", cx, cy - 2);

//       // ── Threats ──
//       threats.forEach((t) => {
//         t.x += t.vx;
//         t.y += t.vy;

//         // Bounce
//         if (t.x < 0 || t.x > w) t.vx *= -1;
//         if (t.y < 0 || t.y > h) t.vy *= -1;

//         // Distance to center
//         const dx = t.x - cx;
//         const dy = t.y - cy;
//         const dist = Math.sqrt(dx * dx + dy * dy);

//         // If near shield, "block" and disappear
//         if (dist < shieldR * 0.7) {
//           // Explosion effect
//           for (let i = 0; i < 6; i++) {
//             const angle = Math.random() * Math.PI * 2;
//             const speed = 1 + Math.random() * 2;
//             ctx.fillStyle = `rgba(239, 68, 68, ${0.2 + Math.random() * 0.3})`;
//             ctx.beginPath();
//             ctx.arc(
//               t.x + Math.cos(angle) * speed * 3,
//               t.y + Math.sin(angle) * speed * 3,
//               1 + Math.random() * 2,
//               0,
//               Math.PI * 2,
//             );
//             ctx.fill();
//           }
//           // Reset threat
//           t.x = Math.random() * w;
//           t.y = Math.random() * h;
//           t.vx = (Math.random() - 0.5) * 1.5;
//           t.vy = (Math.random() - 0.5) * 1.5;
//           return;
//         }

//         // Draw threat
//         const pulse = 0.5 + 0.5 * Math.sin(time * 3 + t.phase);
//         ctx.fillStyle = `rgba(239, 68, 68, ${0.2 + 0.3 * pulse})`;
//         ctx.beginPath();
//         ctx.arc(t.x, t.y, t.size * (0.5 + 0.5 * pulse), 0, Math.PI * 2);
//         ctx.fill();

//         // Threat glow
//         const threatGlow = ctx.createRadialGradient(
//           t.x,
//           t.y,
//           0,
//           t.x,
//           t.y,
//           t.size * 4,
//         );
//         threatGlow.addColorStop(0, `rgba(239, 68, 68, ${0.05 * pulse})`);
//         threatGlow.addColorStop(1, "rgba(0,0,0,0)");
//         ctx.fillStyle = threatGlow;
//         ctx.beginPath();
//         ctx.arc(t.x, t.y, t.size * 4, 0, Math.PI * 2);
//         ctx.fill();

//         // "X" marker
//         ctx.strokeStyle = `rgba(239, 68, 68, ${0.2 * pulse})`;
//         ctx.lineWidth = 0.5;
//         const s = t.size * 0.5;
//         ctx.beginPath();
//         ctx.moveTo(t.x - s, t.y - s);
//         ctx.lineTo(t.x + s, t.y + s);
//         ctx.moveTo(t.x + s, t.y - s);
//         ctx.lineTo(t.x - s, t.y + s);
//         ctx.stroke();
//       });

//       // ── Security widgets ──
//       const widgets = [
//         {
//           label: "Risk Score",
//           value: "Low",
//           color: "#10B981",
//           x: 0.02,
//           y: 0.02,
//         },
//         {
//           label: "Vulnerabilities",
//           value: "0",
//           color: "#10B981",
//           x: 0.02,
//           y: 0.88,
//         },
//         {
//           label: "Code Quality",
//           value: "94%",
//           color: "#00A4FD",
//           x: 0.78,
//           y: 0.02,
//         },
//         {
//           label: "Compliance",
//           value: "100%",
//           color: "#10B981",
//           x: 0.78,
//           y: 0.88,
//         },
//       ];

//       widgets.forEach((w) => {
//         const wx = w.x * w;
//         const wy = w.y * h;
//         const ww = Math.min(w, h) * 0.16;
//         const wh = Math.min(w, h) * 0.07;

//         ctx.fillStyle = "rgba(255,255,255,0.02)";
//         ctx.strokeStyle = "rgba(255,255,255,0.04)";
//         ctx.lineWidth = 0.5;
//         ctx.beginPath();
//         ctx.roundRect(wx, wy, ww, wh, 6);
//         ctx.fill();
//         ctx.stroke();

//         ctx.fillStyle = "rgba(255,255,255,0.2)";
//         ctx.font = `${ww * 0.1}px Inter, sans-serif`;
//         ctx.textAlign = "left";
//         ctx.textBaseline = "top";
//         ctx.fillText(w.label, wx + 8, wy + 4);

//         ctx.fillStyle = w.color;
//         ctx.font = `bold ${ww * 0.18}px Inter, sans-serif`;
//         ctx.textBaseline = "bottom";
//         ctx.fillText(w.value, wx + 8, wy + wh - 6);
//       });

//       // ── Scan line ──
//       const scanY = (time * 30) % h;
//       ctx.fillStyle = "rgba(0, 164, 253, 0.02)";
//       ctx.fillRect(0, scanY - 2, w, 4);
//       ctx.fillStyle = "rgba(0, 164, 253, 0.04)";
//       ctx.fillRect(0, scanY - 10, w, 20);
//     };

//     if (!CanvasRenderingContext2D.prototype.roundRect) {
//       CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
//         if (r > w / 2) r = w / 2;
//         if (r > h / 2) r = h / 2;
//         this.moveTo(x + r, y);
//         this.lineTo(x + w - r, y);
//         this.quadraticCurveTo(x + w, y, x + w, y + r);
//         this.lineTo(x + w, y + h - r);
//         this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
//         this.lineTo(x + r, y + h);
//         this.quadraticCurveTo(x, y + h, x, y + h - r);
//         this.lineTo(x, y + r);
//         this.quadraticCurveTo(x, y, x + r, y);
//         return this;
//       };
//     }

//     const loop = () => {
//       draw();
//       animationId = requestAnimationFrame(loop);
//     };
//     loop();

//     return () => {
//       cancelAnimationFrame(animationId);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <div
//       className="relative w-full rounded-2xl overflow-hidden"
//       style={{ aspectRatio: "1.35 / 1" }}
//     >
//       <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
//     </div>
//   );
// };

// // ═══════════════════════════════════════════════════════════════════
// // VIZ MAPPER
// // ═══════════════════════════════════════════════════════════════════
// const vizMap = {
//   maintenance: MaintenanceViz,
//   migration: MigrationViz,
//   talent: TalentViz,
//   security: SecurityViz,
// };

// // ═══════════════════════════════════════════════════════════════════
// // SERVICE ROW
// // ═══════════════════════════════════════════════════════════════════
// const ServiceRow = ({ service, index }) => {
//   const isReversed = index % 2 !== 0;
//   const VizComponent = vizMap[service.vizType] || MaintenanceViz;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-80px" }}
//       transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//       className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
//     >
//       {/* ── Text Side ── */}
//       <div
//         className={`${isReversed ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8"}`}
//       >
//         <motion.h3
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.15, duration: 0.5 }}
//           className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-accent-300 mb-5 leading-tight text-white"
//         >
//           {service.title}
//         </motion.h3>

//         <motion.div
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//           className="w-16 h-[2px] mb-6 origin-left"
//           style={{ background: "linear-gradient(90deg, #FDB913, transparent)" }}
//         />

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.25, duration: 0.5 }}
//           className="text-white text-[15px] leading-[1.8] mb-8 max-w-lg"
//         >
//           {service.description}
//         </motion.p>

//         <motion.ul
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.35, duration: 0.5 }}
//           className="space-y-3.5 mb-9"
//         >
//           {service.features.map((feature, idx) => (
//             <motion.li
//               key={idx}
//               initial={{ opacity: 0, x: -15 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.4 + idx * 0.08, duration: 0.4 }}
//               className="flex items-start gap-3 text-sm text-white"
//             >
//               <span className="mt-0.5">
//                 <CheckIcon />
//               </span>
//               <span className="leading-relaxed">{feature}</span>
//             </motion.li>
//           ))}
//         </motion.ul>

//         <motion.a
//           href={service.path}
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.6, duration: 0.4 }}
//           whileHover={{ x: 6 }}
//           whileTap={{ scale: 0.97 }}
//           className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide group/btn"
//           style={{ color: "#FDB913" }}
//         >
//           <span>Learn More</span>
//           <span
//             className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover/btn:bg-[#FDB913]/10"
//             style={{ border: "1px solid rgba(253,185,19,0.25)" }}
//           >
//             <FaArrowRight
//               size={12}
//               className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-rotate-45"
//             />
//           </span>
//         </motion.a>
//       </div>

//       {/* ── Visualization Side ── */}
//       <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
//         <VizComponent />
//       </div>
//     </motion.div>
//   );
// };

// // ═══════════════════════════════════════════════════════════════════
// // MAIN SECTION
// // ═══════════════════════════════════════════════════════════════════
// const ServicesSection = () => {
//   return (
//     <section
//       id="services"
//       className="relative overflow-hidden py-20 lg:py-20 bg-[#01182f]"
//     >
//       {/* ── Ambient glow blobs ── */}
//       <div
//         className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.04] -translate-x-1/2 -translate-y-1/2"
//         style={{ background: "#FDB913" }}
//       />
//       <div
//         className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.03] translate-x-1/3 translate-y-1/3"
//         style={{ background: "#FDB913" }}
//       />

//       <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
//         {/* ── Section Header ── */}
//         <motion.header
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//           className="text-center max-w-3xl mx-auto mb-20 lg:mb-28"
//         >
//           <span
//             className="inline-block px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-6"
//             style={{
//               background: "rgba(253,185,19,0.08)",
//               color: "#FDB913",
//               border: "1px solid rgba(253,185,19,0.15)",
//             }}
//           >
//             What We Deliver
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
//             Comprehensive SAP Services
//           </h2>
//           <p className="text-lg leading-relaxed text-white">
//             End-to-end solutions designed to maximize your SAP investment and
//             accelerate digital transformation.
//           </p>
//         </motion.header>

//         {/* ── Service Rows ── */}
//         <div className="space-y-20 lg:space-y-28">
//           {servicesData.map((service, index) => (
//             <ServiceRow key={service.id} service={service} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// ═══════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════
const servicesData = [
  {
    id: 5,
    title: "Application Management Services",
    description:
      "Ensure uninterrupted business operations with end-to-end SAP Application Management Services. We provide 24/7 monitoring, proactive maintenance, incident resolution, performance optimization, and continuous enhancements to maximize system availability and business productivity.",
    features: [
      "24/7 Application Monitoring & Support",
      "Incident & Problem Management",
      "Performance Optimization",
      "Release & Change Management",
    ],
    path: "/services/app-maintenance",
    vizType: "maintenance",
  },
  {
    id: 6,
    title: "Data Migration & Transformation",
    description:
      "Accelerate your digital transformation with secure and reliable SAP data migration services. We help organizations migrate from legacy systems to SAP HANA and SAP S/4HANA while ensuring data accuracy, consistency, and minimal business disruption.",
    features: [
      "SAP HANA & S/4HANA Migration",
      "Legacy Data Conversion",
      "Data Validation & Cleansing",
      "System Consolidation",
    ],
    path: "/services/data-migration",
    vizType: "migration",
  },
  {
    id: 7,
    title: "SAP Talent & Staff Augmentation",
    description:
      "Strengthen your SAP initiatives with experienced consultants, architects, developers, and project managers. Our flexible engagement models provide the right expertise to support implementation, upgrades, support, and transformation projects.",
    features: [
      "Certified SAP Functional Consultants",
      "SAP Technical Experts",
      "Project & Delivery Managers",
      "Flexible Resource Engagement",
    ],
    path: "/services/staff-augmentation",
    vizType: "talent",
  },
  {
    id: 8,
    title: "Code Quality & Security",
    description:
      "Deliver enterprise-grade SAP applications with robust code quality, security, and compliance practices. We perform continuous code reviews, vulnerability assessments, and governance checks to ensure secure, scalable, and high-performing SAP solutions.",
    features: [
      "Automated Code Reviews",
      "Security & Vulnerability Assessments",
      "Compliance & Governance Validation",
      "Risk Analysis & Mitigation",
    ],
    path: "/services/code-quality-security",
    vizType: "security",
  },
];

// ═══════════════════════════════════════════════════════════════════
// CHECK ICON
// ═══════════════════════════════════════════════════════════════════
const CheckIcon = () => (
  <svg
    width="15"
    height="12"
    viewBox="0 0 15 12"
    fill="none"
    className="flex-shrink-0"
  >
    <path
      d="M1 6L5.24264 10.2426L13.727 1.75732"
      stroke="#FDB913"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ═══════════════════════════════════════════════════════════════════
// 1. MAINTENANCE VIZ — Command Center (Brighter)
// ═══════════════════════════════════════════════════════════════════
const MaintenanceViz = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h;
    let animationId;
    let time = 0;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const nodes = [];
    const numNodes = 14;
    for (let i = 0; i < numNodes; i++) {
      const angle = (i / numNodes) * Math.PI * 2;
      const r = Math.min(w, h) * 0.3;
      nodes.push({
        x: w / 2 + r * Math.cos(angle),
        y: h / 2 + r * Math.sin(angle),
        phase: i * 0.8,
        size: 3 + Math.random() * 4,
        status: Math.random() > 0.15 ? "healthy" : "warning",
      });
    }

    let radarAngle = 0;

    const widgets = [
      { label: "Incidents", value: "3", x: 0.06, y: 0.1, color: "#00A4FD" },
      { label: "Uptime", value: "99.97%", x: 0.86, y: 0.08, color: "#FDB913" },
      { label: "Requests", value: "47", x: 0.06, y: 0.86, color: "#00A4FD" },
      {
        label: "Performance",
        value: "94%",
        x: 0.86,
        y: 0.88,
        color: "#10B981",
      },
    ];

    const draw = () => {
      time += 0.01;
      radarAngle += 0.015;

      ctx.clearRect(0, 0, w, h);

      // ── Background with brighter glow ──
      const grad = ctx.createRadialGradient(
        w / 2,
        h / 2,
        0,
        w / 2,
        h / 2,
        w * 0.6,
      );
      grad.addColorStop(0, "rgba(0, 164, 253, 0.08)");
      grad.addColorStop(0.5, "rgba(0, 164, 253, 0.03)");
      grad.addColorStop(1, "rgba(0, 10, 30, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // ── Grid ──
      ctx.strokeStyle = "rgba(0, 164, 253, 0.06)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < w; i += 25) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, h);
        ctx.stroke();
      }
      for (let i = 0; i < h; i += 25) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(w, i);
        ctx.stroke();
      }

      // ── Radar ──
      const cx = w / 2,
        cy = h / 2;
      const maxR = Math.min(w, h) * 0.34;

      for (let ring = 0; ring < 4; ring++) {
        const r = maxR * ((ring + 1) / 4);
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 164, 253, ${0.08 + ring * 0.04})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Radar sweep with brighter fill
      const sweep = radarAngle % (Math.PI * 2);
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, maxR, sweep - 0.4, sweep);
      ctx.closePath();
      ctx.fillStyle = "rgba(0, 164, 253, 0.10)";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + maxR * Math.cos(sweep), cy + maxR * Math.sin(sweep));
      ctx.strokeStyle = "rgba(0, 164, 253, 0.5)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // ── Nodes & Connections ──
      nodes.forEach((node, i) => {
        const pulse = 0.5 + 0.5 * Math.sin(time * 2.5 + node.phase);
        const r = node.size * (0.7 + 0.3 * pulse);

        // Brighter glow
        const glow = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          r * 8,
        );
        const isHealthy = node.status === "healthy";
        glow.addColorStop(
          0,
          isHealthy ? "rgba(16, 185, 129, 0.4)" : "rgba(251, 191, 36, 0.4)",
        );
        glow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 8, 0, Math.PI * 2);
        ctx.fill();

        // Node with bright color
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fillStyle = isHealthy ? "#10B981" : "#FBBF24";
        ctx.fill();

        // Brighter inner glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.6)";
        ctx.fill();

        // Connections
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(node.x, node.y);
        ctx.strokeStyle = `rgba(0, 164, 253, ${0.08 + 0.08 * pulse})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });

      // ── SAP Core with brighter glow ──
      const coreGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR * 0.38);
      coreGlow.addColorStop(0, "rgba(0, 164, 253, 0.25)");
      coreGlow.addColorStop(0.5, "rgba(0, 164, 253, 0.08)");
      coreGlow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = coreGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, maxR * 0.38, 0, Math.PI * 2);
      ctx.fill();

      const ringPulse = 1 + 0.05 * Math.sin(time * 2);
      ctx.beginPath();
      ctx.arc(cx, cy, maxR * 0.2 * ringPulse, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0, 164, 253, 0.5)`;
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Second ring
      ctx.beginPath();
      ctx.arc(cx, cy, maxR * 0.25 * ringPulse, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(253, 185, 19, ${0.15 + 0.1 * Math.sin(time * 1.5)})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      const coreGrad = ctx.createRadialGradient(
        cx - 5,
        cy - 5,
        0,
        cx,
        cy,
        maxR * 0.16,
      );
      coreGrad.addColorStop(0, "#00A4FD");
      coreGrad.addColorStop(0.6, "#0066AA");
      coreGrad.addColorStop(1, "#003366");
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, maxR * 0.16, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "rgba(255,255,255,0.95)";
      ctx.font = `bold ${maxR * 0.11}px Inter, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("SAP", cx, cy - 3);

      ctx.fillStyle = "rgba(255,255,255,0.4)";
      ctx.font = `${maxR * 0.04}px Inter, sans-serif`;
      ctx.fillText("DIGITAL CORE", cx, cy + maxR * 0.08);

      // ── Widgets with brighter glass ──
      widgets.forEach((w) => {
        const wx = w.x * w;
        const wy = w.y * h;
        const ww = Math.min(w, h) * 0.17;
        const wh = Math.min(w, h) * 0.09;

        ctx.fillStyle = "rgba(255,255,255,0.05)";
        ctx.strokeStyle = "rgba(255,255,255,0.08)";
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.roundRect(wx, wy, ww, wh, 8);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "rgba(255,255,255,0.35)";
        ctx.font = `${ww * 0.12}px Inter, sans-serif`;
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText(w.label, wx + ww * 0.08, wy + wh * 0.12);

        ctx.fillStyle = w.color;
        ctx.font = `bold ${ww * 0.22}px Inter, sans-serif`;
        ctx.textBaseline = "bottom";
        ctx.fillText(w.value, wx + ww * 0.08, wy + wh * 0.88);
      });

      // ── Notification cards (brighter) ──
      const notifCount = 4;
      for (let i = 0; i < notifCount; i++) {
        const offset = ((time * 0.8 + i * 1.8) % 5) - 2.5;
        const alpha = Math.max(0, 1 - Math.abs(offset) / 2.5);
        if (alpha <= 0.05) continue;

        const nx = w * 0.5 + offset * w * 0.14;
        const ny = h * 0.03 + i * h * 0.045;
        const nw = Math.min(w, h) * 0.22;
        const nh = Math.min(w, h) * 0.04;

        ctx.fillStyle = `rgba(0, 164, 253, ${0.1 * alpha})`;
        ctx.strokeStyle = `rgba(0, 164, 253, ${0.15 * alpha})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.roundRect(nx, ny, nw, nh, 5);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = `rgba(255,255,255,${0.5 * alpha})`;
        ctx.font = `${nw * 0.1}px Inter, sans-serif`;
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        const msgs = [
          "✅ Incident #1042 resolved",
          "⚡ Patch deployed successfully",
          "📊 Performance alert cleared",
          "🔄 Release v4.2.1 ready",
        ];
        ctx.fillText(msgs[i % msgs.length], nx + nw * 0.06, ny + nh / 2);
      }

      // ── Flow particles (brighter gold) ──
      for (let i = 0; i < 10; i++) {
        const t = (time * 0.6 + i * 0.25) % 1;
        const angle = t * Math.PI * 2;
        const r = maxR * 0.15 + t * maxR * 0.35;
        const px = cx + r * Math.cos(angle + i * 0.9);
        const py = cy + r * Math.sin(angle + i * 0.9);
        const size = 1.5 + Math.random() * 2.5;
        const bright = 0.4 + 0.6 * Math.sin(t * 30 + i);
        ctx.fillStyle = `rgba(253, 185, 19, ${0.4 + 0.4 * bright})`;
        ctx.beginPath();
        ctx.arc(px, py, size * (0.5 + 0.5 * bright), 0, Math.PI * 2);
        ctx.fill();

        // Glow for each particle
        const pGlow = ctx.createRadialGradient(px, py, 0, px, py, size * 5);
        pGlow.addColorStop(0, `rgba(253, 185, 19, ${0.1 * bright})`);
        pGlow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = pGlow;
        ctx.beginPath();
        ctx.arc(px, py, size * 5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    if (!CanvasRenderingContext2D.prototype.roundRect) {
      CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
        if (r > w / 2) r = w / 2;
        if (r > h / 2) r = h / 2;
        this.moveTo(x + r, y);
        this.lineTo(x + w - r, y);
        this.quadraticCurveTo(x + w, y, x + w, y + r);
        this.lineTo(x + w, y + h - r);
        this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        this.lineTo(x + r, y + h);
        this.quadraticCurveTo(x, y + h, x, y + h - r);
        this.lineTo(x, y + r);
        this.quadraticCurveTo(x, y, x + r, y);
        return this;
      };
    }

    const loop = () => {
      draw();
      animationId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{ aspectRatio: "1.35 / 1" }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════
// 2. MIGRATION VIZ — Data Flow (Brighter)
// ═══════════════════════════════════════════════════════════════════
const MigrationViz = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h;
    let animationId;
    let time = 0;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // ── Data flows ──
    const flows = [];
    const numFlows = 6;
    for (let i = 0; i < numFlows; i++) {
      flows.push({
        y: 0.15 + (i / (numFlows - 1)) * 0.7,
        phase: i * 0.6,
        speed: 0.3 + Math.random() * 0.4,
        count: 6 + Math.floor(Math.random() * 8),
      });
    }

    // ── Particles ──
    const particles = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * 0.25,
        y: 0.15 + Math.random() * 0.7,
        speed: 0.2 + Math.random() * 0.6,
        size: 2 + Math.random() * 3,
        phase: Math.random() * 10,
        type: Math.random() > 0.7 ? "gold" : "blue",
        flowIndex: Math.floor(Math.random() * numFlows),
      });
    }

    // ── Data quality over time ──
    let dataQuality = 85;

    const draw = () => {
      time += 0.008;
      dataQuality = 85 + 7 * Math.sin(time * 0.15) + 3 * Math.sin(time * 0.3);

      ctx.clearRect(0, 0, w, h);

      // ── Background ──
      const grad = ctx.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0, "rgba(1, 24, 47, 0.3)");
      grad.addColorStop(0.5, "rgba(0, 40, 80, 0.2)");
      grad.addColorStop(1, "rgba(0, 10, 30, 0.3)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // ── Legacy Systems (Left) ──
      const legacyX = w * 0.04;
      const legacyY = h * 0.08;
      const legacyW = w * 0.18;
      const legacyH = h * 0.84;

      // Container
      ctx.fillStyle = "rgba(255,255,255,0.02)";
      ctx.strokeStyle = "rgba(255,255,255,0.05)";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.roundRect(legacyX, legacyY, legacyW, legacyH, 12);
      ctx.fill();
      ctx.stroke();

      // Header
      ctx.fillStyle = "rgba(255,255,255,0.2)";
      ctx.font = `bold ${w * 0.018}px Inter, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillText("Legacy Systems", legacyX + legacyW / 2, legacyY + 14);

      // Legacy icons
      const legacyItems = [
        { label: "ERP", color: "rgba(100, 120, 180, 0.2)" },
        { label: "CRM", color: "rgba(120, 100, 180, 0.2)" },
        { label: "Database", color: "rgba(80, 140, 200, 0.2)" },
      ];

      legacyItems.forEach((item, i) => {
        const lx = legacyX + legacyW * 0.12;
        const ly = legacyY + legacyH * 0.15 + i * legacyH * 0.22;
        const lw = legacyW * 0.76;
        const lh = legacyH * 0.14;

        ctx.fillStyle = item.color;
        ctx.strokeStyle = "rgba(255,255,255,0.05)";
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.roundRect(lx, ly, lw, lh, 6);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "rgba(255,255,255,0.15)";
        ctx.font = `${lw * 0.12}px Inter, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(item.label, lx + lw / 2, ly + lh / 2);

        // Glowing dot (active)
        ctx.beginPath();
        ctx.arc(
          lx + lw - 14,
          ly + lh / 2,
          3 + 1.5 * Math.sin(time * 2 + i),
          0,
          Math.PI * 2,
        );
        ctx.fillStyle = `rgba(16, 185, 129, ${0.4 + 0.3 * Math.sin(time * 2 + i)})`;
        ctx.fill();
      });

      // ── SAP S/4HANA (Right) ──
      const sapX = w * 0.78;
      const sapY = h * 0.08;
      const sapW = w * 0.19;
      const sapH = h * 0.84;

      // Container with glow
      ctx.fillStyle = "rgba(0, 164, 253, 0.04)";
      ctx.strokeStyle = "rgba(0, 164, 253, 0.08)";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.roundRect(sapX, sapY, sapW, sapH, 12);
      ctx.fill();
      ctx.stroke();

      // Header
      ctx.fillStyle = "rgba(0, 164, 253, 0.4)";
      ctx.font = `bold ${w * 0.018}px Inter, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillText("SAP S/4HANA", sapX + sapW / 2, sapY + 14);

      // SAP Cloud icon
      const cloudCX = sapX + sapW / 2;
      const cloudCY = sapY + sapH * 0.22;
      const cloudR = sapW * 0.25;

      // Cloud glow
      const cloudGlow = ctx.createRadialGradient(
        cloudCX,
        cloudCY,
        0,
        cloudCX,
        cloudCY,
        cloudR * 1.3,
      );
      cloudGlow.addColorStop(0, "rgba(0, 164, 253, 0.06)");
      cloudGlow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = cloudGlow;
      ctx.beginPath();
      ctx.arc(cloudCX, cloudCY, cloudR * 1.3, 0, Math.PI * 2);
      ctx.fill();

      // Cloud shape
      ctx.fillStyle = "rgba(0, 164, 253, 0.08)";
      ctx.beginPath();
      ctx.arc(cloudCX, cloudCY, cloudR, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(0, 164, 253, 0.1)";
      ctx.lineWidth = 0.5;
      ctx.stroke();

      ctx.fillStyle = "rgba(0, 164, 253, 0.15)";
      ctx.font = `${cloudR * 0.7}px Inter, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("☁", cloudCX, cloudCY + 2);

      // S/4HANA badge
      const badgeX = sapX + sapW / 2;
      const badgeY = sapY + sapH * 0.45;
      const badgeW = sapW * 0.7;
      const badgeH = sapH * 0.08;

      ctx.fillStyle = "rgba(0, 164, 253, 0.06)";
      ctx.strokeStyle = "rgba(0, 164, 253, 0.08)";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.roundRect(badgeX - badgeW / 2, badgeY, badgeW, badgeH, 4);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "rgba(0, 164, 253, 0.3)";
      ctx.font = `${badgeH * 0.45}px Inter, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("HANA Cloud", badgeX, badgeY + badgeH / 2);

      // ── Data Flows (horizontal pipes) ──
      flows.forEach((flow) => {
        const yPos = h * flow.y;
        const x1 = legacyX + legacyW;
        const x2 = sapX;

        // Pipe glow
        ctx.beginPath();
        ctx.moveTo(x1, yPos);
        ctx.lineTo(x2, yPos);
        ctx.strokeStyle = `rgba(0, 164, 253, ${0.03 + 0.02 * Math.sin(time * 0.5 + flow.phase)})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Main pipe
        ctx.beginPath();
        ctx.moveTo(x1, yPos);
        ctx.lineTo(x2, yPos);
        ctx.strokeStyle = `rgba(0, 164, 253, 0.08)`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Flow particles on this pipe
        const count = flow.count;
        for (let i = 0; i < count; i++) {
          const t = (time * flow.speed + i / count + flow.phase * 0.2) % 1;
          const px = x1 + (x2 - x1) * t;
          const py = yPos + 3 * Math.sin(t * 20 + flow.phase);

          const isGold = i % 3 === 0;
          const size = isGold ? 2.5 : 2;

          // Glow
          const glow = ctx.createRadialGradient(px, py, 0, px, py, size * 5);
          glow.addColorStop(
            0,
            isGold
              ? `rgba(253, 185, 19, ${0.08 + 0.06 * Math.sin(time * 3 + i)})`
              : `rgba(0, 164, 253, ${0.08 + 0.06 * Math.sin(time * 3 + i)})`,
          );
          glow.addColorStop(1, "rgba(0,0,0,0)");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(px, py, size * 5, 0, Math.PI * 2);
          ctx.fill();

          // Particle
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fillStyle = isGold
            ? `rgba(253, 185, 19, ${0.5 + 0.3 * Math.sin(time * 3 + i)})`
            : `rgba(0, 164, 253, ${0.4 + 0.3 * Math.sin(time * 3 + i)})`;
          ctx.fill();

          // Checkmark for validated gold particles near end
          if (isGold && t > 0.85) {
            ctx.strokeStyle = "rgba(16, 185, 129, 0.3)";
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(px - size * 0.6, py);
            ctx.lineTo(px - size * 0.2, py + size * 0.5);
            ctx.lineTo(px + size * 0.6, py - size * 0.4);
            ctx.stroke();
          }
        }
      });

      // ── Transformation Engine (Center) ──
      const tx = w * 0.42;
      const ty = h * 0.38;
      const tr = Math.min(w, h) * 0.11;

      // Outer glow
      const tGlow = ctx.createRadialGradient(tx, ty, 0, tx, ty, tr * 1.6);
      tGlow.addColorStop(0, "rgba(253, 185, 19, 0.12)");
      tGlow.addColorStop(0.3, "rgba(0, 164, 253, 0.06)");
      tGlow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = tGlow;
      ctx.beginPath();
      ctx.arc(tx, ty, tr * 1.6, 0, Math.PI * 2);
      ctx.fill();

      // Rotating rings
      const ringPulse = 1 + 0.04 * Math.sin(time * 2);
      for (let ring = 0; ring < 3; ring++) {
        const r = tr * (0.5 + ring * 0.25) * ringPulse;
        ctx.beginPath();
        ctx.arc(tx, ty, r, 0, Math.PI * 2);
        const rot = time * (0.3 + ring * 0.1);
        ctx.strokeStyle = `rgba(253, 185, 19, ${0.08 + ring * 0.04 + 0.04 * Math.sin(time * 2 + ring)})`;
        ctx.lineWidth = 0.8 + ring * 0.4;
        ctx.setLineDash([3, 6]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Inner ring
      ctx.beginPath();
      ctx.arc(
        tx,
        ty,
        tr * 0.7 * (1 + 0.03 * Math.sin(time * 2.5)),
        0,
        Math.PI * 2,
      );
      ctx.strokeStyle = `rgba(253, 185, 19, ${0.15 + 0.1 * Math.sin(time * 2.5)})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Engine body
      const tGrad = ctx.createRadialGradient(
        tx - 4,
        ty - 4,
        0,
        tx,
        ty,
        tr * 0.65,
      );
      tGrad.addColorStop(0, "#FDB913");
      tGrad.addColorStop(0.6, "#D4A020");
      tGrad.addColorStop(1, "#8A6A10");
      ctx.fillStyle = tGrad;
      ctx.beginPath();
      ctx.arc(tx, ty, tr * 0.65, 0, Math.PI * 2);
      ctx.fill();

      // AI text
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.font = `bold ${tr * 0.3}px Inter, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("AI", tx, ty - 2);

      ctx.fillStyle = "rgba(255,255,255,0.4)";
      ctx.font = `${tr * 0.1}px Inter, sans-serif`;
      ctx.fillText("TRANSFORM", tx, ty + tr * 0.35);

      // ── Data Quality Widget ──
      const dqX = w * 0.04;
      const dqY = h * 0.92;
      const dqW = w * 0.18;
      const dqH = h * 0.06;

      ctx.fillStyle = "rgba(255,255,255,0.03)";
      ctx.strokeStyle = "rgba(255,255,255,0.04)";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.roundRect(dqX, dqY, dqW, dqH, 6);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "rgba(255,255,255,0.15)";
      ctx.font = `${dqW * 0.08}px Inter, sans-serif`;
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      ctx.fillText("Data Quality", dqX + 8, dqY + 4);

      const qualityVal = Math.round(dataQuality);
      const qualityColor =
        qualityVal > 90 ? "#10B981" : qualityVal > 80 ? "#FBBF24" : "#EF4444";

      ctx.fillStyle = qualityColor;
      ctx.font = `bold ${dqW * 0.16}px Inter, sans-serif`;
      ctx.textBaseline = "bottom";
      ctx.textAlign = "right";
      ctx.fillText(`${qualityVal}%`, dqX + dqW - 8, dqY + dqH - 4);

      // Quality bar
      const barX = dqX + 8;
      const barY = dqY + dqH - 8;
      const barW = dqW - 16;
      const barH = 3;

      ctx.fillStyle = "rgba(255,255,255,0.05)";
      ctx.beginPath();
      ctx.roundRect(barX, barY, barW, barH, 2);
      ctx.fill();

      const qualityPercent = qualityVal / 100;
      const barGrad = ctx.createLinearGradient(barX, 0, barX + barW, 0);
      barGrad.addColorStop(0, "#00A4FD");
      barGrad.addColorStop(0.6, "#FDB913");
      barGrad.addColorStop(1, "#10B981");
      ctx.fillStyle = barGrad;
      ctx.beginPath();
      ctx.roundRect(barX, barY, barW * qualityPercent, barH, 2);
      ctx.fill();

      // ── Status Badge ──
      const statusX = w * 0.78;
      const statusY = h * 0.92;
      const statusW = w * 0.19;
      const statusH = h * 0.06;

      ctx.fillStyle = "rgba(16, 185, 129, 0.05)";
      ctx.strokeStyle = "rgba(16, 185, 129, 0.08)";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.roundRect(statusX, statusY, statusW, statusH, 6);
      ctx.fill();
      ctx.stroke();

      // Status dot
      ctx.beginPath();
      ctx.arc(
        statusX + 14,
        statusY + statusH / 2,
        4 + 2 * Math.sin(time * 2),
        0,
        Math.PI * 2,
      );
      ctx.fillStyle = `rgba(16, 185, 129, ${0.6 + 0.3 * Math.sin(time * 2)})`;
      ctx.fill();

      ctx.fillStyle = "rgba(255,255,255,0.2)";
      ctx.font = `${statusW * 0.08}px Inter, sans-serif`;
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillText("Live Migration", statusX + 24, statusY + statusH / 2);

      // Speed indicator
      ctx.fillStyle = "rgba(255,255,255,0.1)";
      ctx.font = `${statusW * 0.06}px Inter, sans-serif`;
      ctx.textAlign = "right";
      ctx.fillText("12.4 GB/s", statusX + statusW - 8, statusY + statusH / 2);
    };

    if (!CanvasRenderingContext2D.prototype.roundRect) {
      CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
        if (r > w / 2) r = w / 2;
        if (r > h / 2) r = h / 2;
        this.moveTo(x + r, y);
        this.lineTo(x + w - r, y);
        this.quadraticCurveTo(x + w, y, x + w, y + r);
        this.lineTo(x + w, y + h - r);
        this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        this.lineTo(x + r, y + h);
        this.quadraticCurveTo(x, y + h, x, y + h - r);
        this.lineTo(x, y + r);
        this.quadraticCurveTo(x, y, x + r, y);
        return this;
      };
    }

    const loop = () => {
      draw();
      animationId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{ aspectRatio: "1.35 / 1" }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════
// 3. TALENT VIZ — Network Collaboration (Brighter)
// ═══════════════════════════════════════════════════════════════════
const TalentViz = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h;
    let animationId;
    let time = 0;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const roles = [
      { label: "SAP Fiori", x: 0.1, y: 0.12 },
      { label: "SAP BTP", x: 0.9, y: 0.1 },
      { label: "SAP Basis", x: 0.04, y: 0.55 },
      { label: "ABAP Dev", x: 0.96, y: 0.48 },
      { label: "SAP HANA", x: 0.12, y: 0.88 },
      { label: "SAP FICO", x: 0.88, y: 0.9 },
      { label: "SAP MM", x: 0.48, y: 0.04 },
      { label: "SAP SD", x: 0.52, y: 0.96 },
    ];

    const nodePositions = roles.map((r) => ({
      x: r.x * w,
      y: r.y * h,
      label: r.label,
      phase: Math.random() * 10,
      size: 6 + Math.random() * 5,
    }));

    const connections = [];
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        if (Math.random() > 0.45) {
          connections.push([i, j]);
        }
      }
    }

    const draw = () => {
      time += 0.008;
      ctx.clearRect(0, 0, w, h);

      const grad = ctx.createRadialGradient(
        w / 2,
        h / 2,
        0,
        w / 2,
        h / 2,
        w * 0.6,
      );
      grad.addColorStop(0, "rgba(0, 164, 253, 0.05)");
      grad.addColorStop(1, "rgba(0, 10, 30, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = "rgba(0, 164, 253, 0.03)";
      ctx.lineWidth = 0.3;
      for (let i = 0; i < w; i += 35) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, h);
        ctx.stroke();
      }
      for (let i = 0; i < h; i += 35) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(w, i);
        ctx.stroke();
      }

      // ── Connections ──
      connections.forEach(([i, j]) => {
        const n1 = nodePositions[i];
        const n2 = nodePositions[j];
        const pulse = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(time * 1.5 + i + j));

        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.strokeStyle = `rgba(0, 164, 253, ${0.04 + 0.08 * pulse})`;
        ctx.lineWidth = 0.6 + pulse * 0.8;
        ctx.stroke();

        const t = (time * 0.5 + i * 0.6 + j * 0.3) % 1;
        const px = n1.x + (n2.x - n1.x) * t;
        const py = n1.y + (n2.y - n1.y) * t;
        ctx.fillStyle = `rgba(253, 185, 19, ${0.3 + 0.4 * Math.sin(t * 25)})`;
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // ── SAP Core ──
      const cx = w / 2,
        cy = h / 2;
      const coreR = Math.min(w, h) * 0.1;

      const coreGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR * 2);
      coreGlow.addColorStop(0, "rgba(0, 164, 253, 0.2)");
      coreGlow.addColorStop(0.5, "rgba(0, 164, 253, 0.06)");
      coreGlow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = coreGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, coreR * 2, 0, Math.PI * 2);
      ctx.fill();

      for (let ring = 0; ring < 3; ring++) {
        const r =
          coreR * (0.5 + ring * 0.35 + 0.06 * Math.sin(time * 2 + ring));
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 164, 253, ${0.12 + ring * 0.06})`;
        ctx.lineWidth = 0.8 + ring * 0.5;
        ctx.stroke();
      }

      const coreGrad = ctx.createRadialGradient(
        cx - 5,
        cy - 5,
        0,
        cx,
        cy,
        coreR,
      );
      coreGrad.addColorStop(0, "#00A4FD");
      coreGrad.addColorStop(0.6, "#0066AA");
      coreGrad.addColorStop(1, "#003366");
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, coreR, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "rgba(255,255,255,0.95)";
      ctx.font = `bold ${coreR * 0.55}px Inter, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("SAP", cx, cy - 2);

      ctx.fillStyle = "rgba(255,255,255,0.3)";
      ctx.font = `${coreR * 0.22}px Inter, sans-serif`;
      ctx.fillText("DELIVERY HUB", cx, cy + coreR * 0.5);

      // ── Nodes ──
      nodePositions.forEach((node, idx) => {
        const pulse = 0.5 + 0.5 * Math.sin(time * 2 + node.phase);
        const r = node.size * (0.6 + 0.4 * pulse);

        const glow = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          r * 10,
        );
        glow.addColorStop(0, "rgba(0, 164, 253, 0.12)");
        glow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 10, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 164, 253, ${0.2 + 0.15 * pulse})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(0, 164, 253, ${0.3 + 0.2 * pulse})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = `rgba(255,255,255,${0.5 + 0.3 * pulse})`;
        ctx.font = `${r * 0.9}px Inter, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("👤", node.x, node.y + 1);

        ctx.fillStyle = `rgba(255,255,255,${0.35 + 0.15 * pulse})`;
        ctx.font = `${w * 0.016}px Inter, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillText(node.label, node.x, node.y + r + 8);

        ctx.beginPath();
        ctx.arc(node.x + r * 0.6, node.y - r * 0.6, r * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = "#10B981";
        ctx.fill();
        ctx.fillStyle = "rgba(255,255,255,0.4)";
        ctx.beginPath();
        ctx.arc(node.x + r * 0.6, node.y - r * 0.6, r * 0.12, 0, Math.PI * 2);
        ctx.fill();
      });

      // ── Resource widget ──
      const wx = w * 0.03;
      const wy = h * 0.03;
      const ww = w * 0.19;
      const wh = h * 0.16;

      ctx.fillStyle = "rgba(255,255,255,0.04)";
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.roundRect(wx, wy, ww, wh, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "rgba(255,255,255,0.3)";
      ctx.font = `${ww * 0.11}px Inter, sans-serif`;
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      ctx.fillText("Resource Pool", wx + 10, wy + 6);

      const resources = [
        { label: "Available", value: "87", color: "#10B981" },
        { label: "Allocated", value: "142", color: "#00A4FD" },
        { label: "On Bench", value: "23", color: "#FBBF24" },
      ];
      resources.forEach((r, i) => {
        const ry = wy + 24 + i * wh * 0.24;
        ctx.fillStyle = "rgba(255,255,255,0.06)";
        ctx.beginPath();
        ctx.roundRect(wx + 10, ry, ww - 20, wh * 0.18, 4);
        ctx.fill();

        ctx.fillStyle = "rgba(255,255,255,0.35)";
        ctx.font = `${ww * 0.075}px Inter, sans-serif`;
        ctx.textBaseline = "middle";
        ctx.fillText(r.label, wx + 14, ry + wh * 0.09);

        ctx.fillStyle = r.color;
        ctx.font = `bold ${ww * 0.12}px Inter, sans-serif`;
        ctx.textAlign = "right";
        ctx.fillText(r.value, wx + ww - 14, ry + wh * 0.09);
      });

      // ── Notifications ──
      const notifX = w * 0.76;
      const notifY = h * 0.03;
      const notifW = w * 0.22;
      const notifH = h * 0.055;

      const notifs = [
        "✨ Team joined: SAP Fiori",
        "🎯 Resource matched",
        "🚀 Project kickoff",
      ];
      notifs.forEach((n, i) => {
        const alpha = 0.3 + 0.25 * Math.sin(time * 1.8 + i * 2.3);
        const ny = notifY + i * (notifH + 5);

        ctx.fillStyle = `rgba(253, 185, 19, ${0.04 * alpha})`;
        ctx.strokeStyle = `rgba(253, 185, 19, ${0.08 * alpha})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.roundRect(notifX, ny, notifW, notifH, 5);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = `rgba(255,255,255,${0.3 * alpha})`;
        ctx.font = `${notifW * 0.085}px Inter, sans-serif`;
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText(n, notifX + 10, ny + notifH / 2);
      });
    };

    if (!CanvasRenderingContext2D.prototype.roundRect) {
      CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
        if (r > w / 2) r = w / 2;
        if (r > h / 2) r = h / 2;
        this.moveTo(x + r, y);
        this.lineTo(x + w - r, y);
        this.quadraticCurveTo(x + w, y, x + w, y + r);
        this.lineTo(x + w, y + h - r);
        this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        this.lineTo(x + r, y + h);
        this.quadraticCurveTo(x, y + h, x, y + h - r);
        this.lineTo(x, y + r);
        this.quadraticCurveTo(x, y, x + r, y);
        return this;
      };
    }

    const loop = () => {
      draw();
      animationId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{ aspectRatio: "1.35 / 1" }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════
// 4. SECURITY VIZ — Advanced Security Operations Center
// ═══════════════════════════════════════════════════════════════════
const SecurityViz = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h;
    let animationId;
    let time = 0;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // ── Code scanning lines ──
    const codeLines = [];
    for (let i = 0; i < 35; i++) {
      codeLines.push({
        x: Math.random() * w,
        y: Math.random() * h,
        len: 20 + Math.random() * 80,
        speed: 0.1 + Math.random() * 0.3,
        phase: Math.random() * 10,
        opacity: 0.3 + Math.random() * 0.5,
      });
    }

    // ── Threat actors ──
    const threats = [];
    for (let i = 0; i < 10; i++) {
      threats.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 1.8,
        vy: (Math.random() - 0.5) * 1.8,
        size: 3 + Math.random() * 5,
        phase: Math.random() * 10,
        type: Math.random() > 0.6 ? "malware" : "suspicious",
        alive: true,
        trail: [],
      });
    }

    // ── Security nodes ──
    const nodes = [];
    const numNodes = 8;
    for (let i = 0; i < numNodes; i++) {
      const angle = (i / numNodes) * Math.PI * 2;
      const radius = Math.min(w, h) * 0.28;
      nodes.push({
        x: w / 2 + radius * Math.cos(angle),
        y: h / 2 + radius * Math.sin(angle),
        phase: i * 0.9,
        size: 4 + Math.random() * 3,
        status: Math.random() > 0.2 ? "secure" : "warning",
      });
    }

    const draw = () => {
      time += 0.008;
      ctx.clearRect(0, 0, w, h);

      // ── Background with security grid ──
      const grad = ctx.createRadialGradient(
        w / 2,
        h / 2,
        0,
        w / 2,
        h / 2,
        w * 0.7,
      );
      grad.addColorStop(0, "rgba(0, 164, 253, 0.04)");
      grad.addColorStop(0.5, "rgba(0, 164, 253, 0.02)");
      grad.addColorStop(1, "rgba(0, 10, 30, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // ── Security grid lines ──
      ctx.strokeStyle = "rgba(0, 164, 253, 0.03)";
      ctx.lineWidth = 0.3;
      for (let i = 0; i < w; i += 30) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, h);
        ctx.stroke();
      }
      for (let i = 0; i < h; i += 30) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(w, i);
        ctx.stroke();
      }

      // ── Code scanning lines ──
      codeLines.forEach((line) => {
        const yPos = line.y + Math.sin(time * line.speed + line.phase) * 8;
        const alpha =
          line.opacity *
          (0.08 + 0.06 * Math.sin(time * line.speed + line.phase));

        const chars = "abcdefghijklmnopqrstuvwxyz0123456789{}()<>/[]";
        for (let i = 0; i < line.len; i += 4) {
          const char = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillStyle = `rgba(0, 164, 253, ${alpha * 0.8})`;
          ctx.font = `${6 + Math.random() * 6}px monospace`;
          ctx.textBaseline = "middle";
          ctx.fillText(char, line.x + i * 3, yPos + Math.sin(i * 0.3) * 5);
        }
      });

      // ── Security nodes with connections ──
      // Draw connections first
      nodes.forEach((node, i) => {
        nodes.forEach((node2, j) => {
          if (i >= j) return;
          const dist = Math.sqrt(
            Math.pow(node.x - node2.x, 2) + Math.pow(node.y - node2.y, 2),
          );
          if (dist < Math.min(w, h) * 0.5) {
            const alpha = 0.04 + 0.06 * (1 - dist / (Math.min(w, h) * 0.5));
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.strokeStyle = `rgba(0, 164, 253, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodes.forEach((node) => {
        const pulse = 0.6 + 0.4 * Math.sin(time * 1.5 + node.phase);
        const r = node.size * (0.6 + 0.4 * pulse);

        // Glow
        const glow = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          r * 8,
        );
        glow.addColorStop(
          0,
          node.status === "secure"
            ? "rgba(16, 185, 129, 0.15)"
            : "rgba(251, 191, 36, 0.15)",
        );
        glow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 8, 0, Math.PI * 2);
        ctx.fill();

        // Node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        const isSecure = node.status === "secure";
        ctx.fillStyle = isSecure
          ? "rgba(16, 185, 129, 0.3)"
          : "rgba(251, 191, 36, 0.3)";
        ctx.fill();
        ctx.strokeStyle = isSecure
          ? "rgba(16, 185, 129, 0.5)"
          : "rgba(251, 191, 36, 0.5)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Inner dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = isSecure
          ? "rgba(16, 185, 129, 0.6)"
          : "rgba(251, 191, 36, 0.6)";
        ctx.fill();

        // Security badge
        ctx.fillStyle = "rgba(255,255,255,0.15)";
        ctx.font = `${r * 0.6}px Inter, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";
        const labels = [
          "FW",
          "WAF",
          "IDS",
          "SIEM",
          "VPN",
          "IAM",
          "DDoS",
          "SSL",
        ];
        ctx.fillText(labels[nodes.indexOf(node)], node.x, node.y - r - 4);
      });

      // ── Central Shield ──
      const cx = w / 2,
        cy = h / 2;
      const shieldR = Math.min(w, h) * 0.19;

      // Shield outer glow
      const shieldGlow = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        shieldR * 1.8,
      );
      shieldGlow.addColorStop(0, "rgba(0, 164, 253, 0.08)");
      shieldGlow.addColorStop(0.5, "rgba(0, 164, 253, 0.03)");
      shieldGlow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = shieldGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, shieldR * 1.8, 0, Math.PI * 2);
      ctx.fill();

      // Rotating defense layers
      for (let layer = 0; layer < 6; layer++) {
        const r = shieldR * (0.2 + layer * 0.16);
        const rot = time * (0.15 + layer * 0.06);
        ctx.beginPath();
        for (let i = 0; i < 20; i++) {
          const angle = (i / 20) * Math.PI * 2 + rot;
          const radius =
            r * (1 + 0.06 * Math.sin(time * 1.8 + layer * 0.5 + i * 0.6));
          const px = cx + radius * Math.cos(angle);
          const py = cy + radius * Math.sin(angle);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        const alpha = 0.04 + layer * 0.02 + 0.02 * Math.sin(time * 1.5 + layer);
        ctx.strokeStyle = `rgba(0, 164, 253, ${alpha})`;
        ctx.lineWidth = 0.6 + layer * 0.3;
        ctx.stroke();
      }

      // Shield shape
      const shieldSize = shieldR * 0.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy - shieldSize * 0.9);
      ctx.quadraticCurveTo(
        cx + shieldSize * 1.4,
        cy - shieldSize * 0.5,
        cx + shieldSize * 1.0,
        cy + shieldSize * 0.1,
      );
      ctx.quadraticCurveTo(
        cx + shieldSize * 0.9,
        cy + shieldSize * 0.8,
        cx,
        cy + shieldSize * 1.0,
      );
      ctx.quadraticCurveTo(
        cx - shieldSize * 0.9,
        cy + shieldSize * 0.8,
        cx - shieldSize * 1.0,
        cy + shieldSize * 0.1,
      );
      ctx.quadraticCurveTo(
        cx - shieldSize * 1.4,
        cy - shieldSize * 0.5,
        cx,
        cy - shieldSize * 0.9,
      );
      ctx.closePath();

      const shieldGrad = ctx.createLinearGradient(
        cx - shieldSize,
        cy - shieldSize,
        cx + shieldSize,
        cy + shieldSize,
      );
      shieldGrad.addColorStop(0, "rgba(0, 164, 253, 0.2)");
      shieldGrad.addColorStop(0.3, "rgba(0, 164, 253, 0.08)");
      shieldGrad.addColorStop(0.7, "rgba(0, 164, 253, 0.05)");
      shieldGrad.addColorStop(1, "rgba(0, 164, 253, 0.1)");
      ctx.fillStyle = shieldGrad;
      ctx.fill();

      // Shield border with pulse
      const shieldPulse = 0.15 + 0.1 * Math.sin(time * 2);
      ctx.strokeStyle = `rgba(0, 164, 253, ${0.2 + shieldPulse})`;
      ctx.lineWidth = 2 + 0.5 * Math.sin(time * 2);
      ctx.stroke();

      // Shield lock icon
      ctx.fillStyle = "rgba(255,255,255,0.15)";
      ctx.font = `${shieldSize * 0.5}px Inter, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("🔒", cx, cy - 2);

      ctx.fillStyle = "rgba(255,255,255,0.08)";
      ctx.font = `${shieldSize * 0.2}px Inter, sans-serif`;
      ctx.fillText("SECURE", cx, cy + shieldSize * 0.35);

      // ── Threat actors ──
      threats.forEach((t) => {
        // Store trail
        t.trail.push({ x: t.x, y: t.y });
        if (t.trail.length > 15) t.trail.shift();

        t.x += t.vx;
        t.y += t.vy;

        // Bounce with slight randomness
        if (t.x < 20 || t.x > w - 20) {
          t.vx *= -1;
          t.x += t.vx * 2;
        }
        if (t.y < 20 || t.y > h - 20) {
          t.vy *= -1;
          t.y += t.vy * 2;
        }

        // Distance to shield
        const dx = t.x - cx;
        const dy = t.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // If threat reaches shield, block it
        if (dist < shieldR * 0.7) {
          // Explosion effect
          for (let i = 0; i < 15; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 2 + Math.random() * 4;
            const size = 1 + Math.random() * 4;
            ctx.fillStyle = `rgba(239, 68, 68, ${0.2 + Math.random() * 0.3})`;
            ctx.beginPath();
            ctx.arc(
              t.x + Math.cos(angle) * speed * 5,
              t.y + Math.sin(angle) * speed * 5,
              size,
              0,
              Math.PI * 2,
            );
            ctx.fill();
          }
          // Shield flash
          ctx.fillStyle = "rgba(0, 164, 253, 0.05)";
          ctx.beginPath();
          ctx.arc(cx, cy, shieldR * 0.8, 0, Math.PI * 2);
          ctx.fill();

          // Reset threat
          t.x = 20 + Math.random() * (w - 40);
          t.y = 20 + Math.random() * (h - 40);
          t.vx = (Math.random() - 0.5) * 2.5;
          t.vy = (Math.random() - 0.5) * 2.5;
          t.trail = [];
          return;
        }

        // Draw trail
        t.trail.forEach((point, idx) => {
          const alpha = (idx / t.trail.length) * 0.15;
          ctx.fillStyle = `rgba(239, 68, 68, ${alpha})`;
          ctx.beginPath();
          ctx.arc(
            point.x,
            point.y,
            t.size * 0.3 * (idx / t.trail.length),
            0,
            Math.PI * 2,
          );
          ctx.fill();
        });

        // Threat body
        const pulse = 0.5 + 0.5 * Math.sin(time * 3 + t.phase);
        const threatSize = t.size * (0.4 + 0.6 * pulse);

        // Glow
        const threatGlow = ctx.createRadialGradient(
          t.x,
          t.y,
          0,
          t.x,
          t.y,
          threatSize * 6,
        );
        threatGlow.addColorStop(0, `rgba(239, 68, 68, ${0.06 * pulse})`);
        threatGlow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = threatGlow;
        ctx.beginPath();
        ctx.arc(t.x, t.y, threatSize * 6, 0, Math.PI * 2);
        ctx.fill();

        // Threat icon
        ctx.beginPath();
        ctx.arc(t.x, t.y, threatSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(239, 68, 68, ${0.3 + 0.4 * pulse})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(239, 68, 68, ${0.5 * pulse})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // X mark
        ctx.strokeStyle = `rgba(255,255,255,${0.3 * pulse})`;
        ctx.lineWidth = 1.5;
        const s = threatSize * 0.4;
        ctx.beginPath();
        ctx.moveTo(t.x - s, t.y - s);
        ctx.lineTo(t.x + s, t.y + s);
        ctx.moveTo(t.x + s, t.y - s);
        ctx.lineTo(t.x - s, t.y + s);
        ctx.stroke();

        // Threat label
        ctx.fillStyle = `rgba(239, 68, 68, ${0.2 * pulse})`;
        ctx.font = `${threatSize * 0.4}px Inter, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";
        ctx.fillText(
          t.type === "malware" ? "⚠" : "•",
          t.x,
          t.y - threatSize - 2,
        );
      });

      // ── Security widgets ──
      const widgets = [
        {
          label: "Risk Score",
          value: "Low",
          color: "#10B981",
          x: 0.02,
          y: 0.02,
          icon: "🛡",
        },
        {
          label: "Threats Blocked",
          value: "1,247",
          color: "#00A4FD",
          x: 0.02,
          y: 0.88,
          icon: "🚫",
        },
        {
          label: "Code Quality",
          value: "94%",
          color: "#FDB913",
          x: 0.78,
          y: 0.02,
          icon: "✓",
        },
        {
          label: "Compliance",
          value: "100%",
          color: "#10B981",
          x: 0.78,
          y: 0.88,
          icon: "✅",
        },
      ];

      widgets.forEach((w) => {
        const wx = w.x * w;
        const wy = w.y * h;
        const ww = Math.min(w, h) * 0.17;
        const wh = Math.min(w, h) * 0.075;

        // Glass background
        ctx.fillStyle = "rgba(255,255,255,0.03)";
        ctx.strokeStyle = "rgba(255,255,255,0.05)";
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.roundRect(wx, wy, ww, wh, 8);
        ctx.fill();
        ctx.stroke();

        // Icon
        ctx.fillStyle = "rgba(255,255,255,0.1)";
        ctx.font = `${wh * 0.35}px Inter, sans-serif`;
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText(w.icon, wx + 8, wy + 4);

        // Label
        ctx.fillStyle = "rgba(255,255,255,0.25)";
        ctx.font = `${ww * 0.08}px Inter, sans-serif`;
        ctx.textBaseline = "top";
        ctx.fillText(w.label, wx + 28, wy + 4);

        // Value
        ctx.fillStyle = w.color;
        ctx.font = `bold ${ww * 0.18}px Inter, sans-serif`;
        ctx.textBaseline = "bottom";
        ctx.textAlign = "right";
        ctx.fillText(w.value, wx + ww - 8, wy + wh - 6);
      });

      // ── Scan line ──
      const scanY = (time * 35) % h;
      const scanGrad = ctx.createLinearGradient(0, scanY - 20, 0, scanY + 20);
      scanGrad.addColorStop(0, "rgba(0, 164, 253, 0)");
      scanGrad.addColorStop(0.5, "rgba(0, 164, 253, 0.06)");
      scanGrad.addColorStop(1, "rgba(0, 164, 253, 0)");
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 20, w, 40);

      ctx.fillStyle = "rgba(0, 164, 253, 0.04)";
      ctx.fillRect(0, scanY - 2, w, 4);

      // Scan label
      ctx.fillStyle = "rgba(0, 164, 253, 0.08)";
      ctx.font = `${w * 0.012}px Inter, sans-serif`;
      ctx.textAlign = "right";
      ctx.textBaseline = "bottom";
      ctx.fillText("SCANNING •", w - 8, scanY - 4);

      // ── Live threat counter ──
      const activeThreats = threats.filter((t) => {
        const dx = t.x - cx;
        const dy = t.y - cy;
        return Math.sqrt(dx * dx + dy * dy) > shieldR * 0.7;
      }).length;

      ctx.fillStyle = "rgba(255,255,255,0.03)";
      ctx.strokeStyle = "rgba(255,255,255,0.04)";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.roundRect(w * 0.4, h * 0.94, w * 0.2, h * 0.04, 4);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "rgba(239, 68, 68, 0.3)";
      ctx.font = `${w * 0.012}px Inter, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        `🛡 ${activeThreats} threats detected • ${Math.round(99.9 - activeThreats * 0.05)}% secure`,
        w * 0.5,
        h * 0.96,
      );
    };

    if (!CanvasRenderingContext2D.prototype.roundRect) {
      CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
        if (r > w / 2) r = w / 2;
        if (r > h / 2) r = h / 2;
        this.moveTo(x + r, y);
        this.lineTo(x + w - r, y);
        this.quadraticCurveTo(x + w, y, x + w, y + r);
        this.lineTo(x + w, y + h - r);
        this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        this.lineTo(x + r, y + h);
        this.quadraticCurveTo(x, y + h, x, y + h - r);
        this.lineTo(x, y + r);
        this.quadraticCurveTo(x, y, x + r, y);
        return this;
      };
    }

    const loop = () => {
      draw();
      animationId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{ aspectRatio: "1.35 / 1" }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════
// VIZ MAPPER
// ═══════════════════════════════════════════════════════════════════
const vizMap = {
  maintenance: MaintenanceViz,
  migration: MigrationViz,
  talent: TalentViz,
  security: SecurityViz,
};

// ═══════════════════════════════════════════════════════════════════
// SERVICE ROW
// ═══════════════════════════════════════════════════════════════════
const ServiceRow = ({ service, index }) => {
  const isReversed = index % 2 !== 0;
  const VizComponent = vizMap[service.vizType] || MaintenanceViz;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
    >
      <div
        className={`${isReversed ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8"}`}
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-accent-300 mb-5 leading-tight text-white"
        >
          {service.title}
        </motion.h3>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-16 h-[2px] mb-6 origin-left"
          style={{ background: "linear-gradient(90deg, #FDB913, transparent)" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-white text-[15px] leading-[1.8] mb-8 max-w-lg"
        >
          {service.description}
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="space-y-3.5 mb-9"
        >
          {service.features.map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + idx * 0.08, duration: 0.4 }}
              className="flex items-start gap-3 text-sm text-white"
            >
              <span className="mt-0.5">
                <CheckIcon />
              </span>
              <span className="leading-relaxed">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.a
          href={service.path}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.4 }}
          whileHover={{ x: 6 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide group/btn"
          style={{ color: "#FDB913" }}
        >
          <span>Learn More</span>
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover/btn:bg-[#FDB913]/10"
            style={{ border: "1px solid rgba(253,185,19,0.25)" }}
          >
            <FaArrowRight
              size={12}
              className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-rotate-45"
            />
          </span>
        </motion.a>
      </div>

      <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
        <VizComponent />
      </div>
    </motion.div>
  );
};

// ═══════════════════════════════════════════════════════════════════
// MAIN SECTION
// ═══════════════════════════════════════════════════════════════════
const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-10 lg:py-10 bg-black"
    >
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.06] -translate-x-1/2 -translate-y-1/2"
        style={{ background: "#FDB913" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.05] translate-x-1/3 translate-y-1/3"
        style={{ background: "#FDB913" }}
      />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-20 lg:mb-28"
        >
          <span
            className="inline-block px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-6"
            style={{
              background: "rgba(253,185,19,0.10)",
              color: "#FDB913",
              border: "1px solid rgba(253,185,19,0.20)",
            }}
          >
            What We Deliver
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Comprehensive SAP Services
          </h2>
          <p className="text-lg leading-relaxed text-white">
            End-to-end solutions designed to maximize your SAP investment and
            accelerate digital transformation.
          </p>
        </motion.header>

        <div className="space-y-20 lg:space-y-28">
          {servicesData.map((service, index) => (
            <ServiceRow key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
