// import { useState, useRef, useEffect, useMemo } from "react";
// import { motion, useInView } from "framer-motion";
// import {
//   FaSearch,
//   FaClipboardList,
//   FaPencilRuler,
//   FaCode,
//   FaRocket,
//   FaHeadset,
// } from "react-icons/fa";

// /* ═══════════════════════════════════════════════════
//    DATA
// ═══════════════════════════════════════════════════ */
// const approachData = [
//   {
//     step: 1,
//     icon: FaSearch,
//     title: "Discover",
//     subtitle: "Business Assessment",
//     bullets: [
//       "Business Assessment",
//       "Requirement Gathering",
//       "Scope Definition",
//     ],
//   },
//   {
//     step: 2,
//     icon: FaClipboardList,
//     title: "Prepare",
//     subtitle: "Project Preparation",
//     bullets: ["Project Planning", "Team Setup", "Governance Framework"],
//   },
//   {
//     step: 3,
//     icon: FaPencilRuler,
//     title: "Explore",
//     subtitle: "Solution Design",
//     bullets: [
//       "Fit-to-Standard Workshops",
//       "Solution Architecture",
//       "Gap Analysis",
//     ],
//   },
//   {
//     step: 4,
//     icon: FaCode,
//     title: "Realize",
//     subtitle: "Build & Validation",
//     bullets: [
//       "Configuration & Development",
//       "Integration Testing",
//       "User Acceptance",
//     ],
//   },
//   {
//     step: 5,
//     icon: FaRocket,
//     title: "Deploy",
//     subtitle: "Go-Live Execution",
//     bullets: ["Data Migration", "Cutover Execution", "End-User Training"],
//   },
//   {
//     step: 6,
//     icon: FaHeadset,
//     title: "Run",
//     subtitle: "Continuous Support",
//     bullets: [
//       "Ongoing Support",
//       "Process Optimization",
//       "Continuous Improvement",
//     ],
//   },
// ];

// /* ═══════════════════════════════════════════════════
//    CIRCLE GEOMETRY
// ═══════════════════════════════════════════════════ */
// const CX = 190,
//   CY = 190,
//   R = 155,
//   NR = 23;
// const ARC_LEN = (2 * Math.PI * R * 60) / 360;

// const nodePos = (i) => {
//   const a = ((-90 + i * 60) * Math.PI) / 180;
//   return { x: CX + R * Math.cos(a), y: CY + R * Math.sin(a) };
// };

// const arcPath = (i) => {
//   const f = nodePos(i),
//     t = nodePos((i + 1) % 6);
//   return `M ${f.x} ${f.y} A ${R} ${R} 0 0 1 ${t.x} ${t.y}`;
// };

// const arrowPos = (i) => {
//   const a = ((-90 + i * 60 + 30) * Math.PI) / 180;
//   const ar = R + 1;
//   return {
//     x: CX + ar * Math.cos(a),
//     y: CY + ar * Math.sin(a),
//     rot: -90 + i * 60 + 30 + 90,
//   };
// };

// /* ═══════════════════════════════════════════════════
//    PARTICLES
// ═══════════════════════════════════════════════════ */
// const particles = Array.from({ length: 28 }, (_, i) => ({
//   id: i,
//   x: Math.random() * 100,
//   y: Math.random() * 100,
//   size: Math.random() * 2.2 + 0.6,
//   dur: Math.random() * 14 + 10,
//   del: Math.random() * 8,
//   op: Math.random() * 0.25 + 0.08,
//   color: i % 4 === 0 ? "#FDB913" : i % 4 === 1 ? "#1E5090" : "#ffffff",
// }));

// /* ═══════════════════════════════════════════════════
//    PARTICLES COMPONENT
// ═══════════════════════════════════════════════════ */
// const Particles = () => (
//   <div className="absolute inset-0 overflow-hidden pointer-events-none">
//     {particles.map((p) => (
//       <div
//         key={p.id}
//         className="absolute rounded-full particle"
//         style={{
//           left: `${p.x}%`,
//           top: `${p.y}%`,
//           width: `${p.size}px`,
//           height: `${p.size}px`,
//           background: p.color,
//           "--dur": `${p.dur}s`,
//           "--del": `${p.del}s`,
//           "--op": p.op,
//           opacity: p.op,
//           animation: `float var(--dur) ease-in-out infinite var(--del)`,
//         }}
//       />
//     ))}
//   </div>
// );

// /* ═══════════════════════════════════════════════════
//    CIRCLE DIAGRAM (SVG)
// ═══════════════════════════════════════════════════ */
// const CircleDiagram = ({ activeStep, isVisible }) => {
//   const circumference = 2 * Math.PI * R;

//   return (
//     <svg
//       viewBox="0 0 380 380"
//       className="w-full h-full"
//       style={{ overflow: "visible" }}
//     >
//       <defs>
//         <filter id="glow">
//           <feGaussianBlur stdDeviation="3" result="b" />
//           <feMerge>
//             <feMergeNode in="b" />
//             <feMergeNode in="SourceGraphic" />
//           </feMerge>
//         </filter>
//         <filter id="glowStrong">
//           <feGaussianBlur stdDeviation="6" result="b" />
//           <feMerge>
//             <feMergeNode in="b" />
//             <feMergeNode in="SourceGraphic" />
//           </feMerge>
//         </filter>
//         <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//           <stop offset="0%" stopColor="#FDB913" stopOpacity="0.5" />
//           <stop offset="50%" stopColor="#1E5090" stopOpacity="0.35" />
//           <stop offset="100%" stopColor="#FDB913" stopOpacity="0.5" />
//         </linearGradient>
//         <radialGradient id="centerBg" cx="50%" cy="50%" r="50%">
//           <stop offset="0%" stopColor="#0d1f3c" stopOpacity="0.95" />
//           <stop offset="70%" stopColor="#081221" stopOpacity="0.9" />
//           <stop offset="100%" stopColor="#081221" stopOpacity="0" />
//         </radialGradient>
//         <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
//           <stop offset="0%" stopColor="#FDB913" stopOpacity="0.06" />
//           <stop offset="100%" stopColor="#FDB913" stopOpacity="0" />
//         </radialGradient>
//       </defs>

//       {/* Background glow */}
//       <circle
//         cx={CX}
//         cy={CY}
//         r={R + 50}
//         fill="url(#centerGlow)"
//         className="pulse-glow"
//       />

//       {/* Rotating outer dashed rings */}
//       <circle
//         cx={CX}
//         cy={CY}
//         r={R + 20}
//         fill="none"
//         stroke="rgba(253,185,19,0.04)"
//         strokeWidth="0.8"
//         strokeDasharray="3 9"
//         className="spin-slow"
//         style={{ transformOrigin: `${CX}px ${CY}px` }}
//       />
//       <circle
//         cx={CX}
//         cy={CY}
//         r={R + 30}
//         fill="none"
//         stroke="rgba(30,80,144,0.04)"
//         strokeWidth="0.6"
//         strokeDasharray="2 12"
//         className="spin-slow-reverse"
//         style={{ transformOrigin: `${CX}px ${CY}px` }}
//       />

//       {/* Base ring */}
//       <circle
//         cx={CX}
//         cy={CY}
//         r={R}
//         fill="none"
//         stroke="rgba(253,185,19,0.06)"
//         strokeWidth="1.5"
//       />

//       {/* Arc connectors */}
//       {approachData.map((_, i) => {
//         const ni = (i + 1) % 6;
//         const isActive = activeStep === i + 1 || activeStep === ni + 1;
//         return (
//           <path
//             key={i}
//             d={arcPath(i)}
//             fill="none"
//             stroke={isActive ? "#FDB913" : "rgba(253,185,19,0.18)"}
//             strokeWidth={isActive ? 2.5 : 1.5}
//             strokeLinecap="round"
//             strokeDasharray={ARC_LEN}
//             strokeDashoffset={isVisible ? 0 : ARC_LEN}
//             filter={isActive ? "url(#glow)" : undefined}
//             className="arc-path"
//             style={{ transitionDelay: `${0.4 + i * 0.12}s` }}
//           />
//         );
//       })}

//       {/* Animated progress ring */}
//       <circle
//         cx={CX}
//         cy={CY}
//         r={R}
//         fill="none"
//         stroke="url(#arcGrad)"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeDasharray={circumference}
//         strokeDashoffset={isVisible ? 0 : circumference}
//         transform={`rotate(-90 ${CX} ${CY})`}
//         filter="url(#glow)"
//         style={{
//           transition: "stroke-dashoffset 2.2s cubic-bezier(0.22,1,0.36,1) 0.3s",
//         }}
//       />

//       {/* Flow direction arrows */}
//       {approachData.map((_, i) => {
//         const ap = arrowPos(i);
//         const ni = (i + 1) % 6;
//         const isActive = activeStep === i + 1 || activeStep === ni + 1;
//         return (
//           <polygon
//             key={`arr-${i}`}
//             points="0,-3.5 2.8,2 -2.8,2"
//             fill={isActive ? "rgba(253,185,19,0.7)" : "rgba(253,185,19,0.25)"}
//             transform={`translate(${ap.x},${ap.y}) rotate(${ap.rot})`}
//             style={{
//               opacity: isVisible ? 1 : 0,
//               transition: `opacity 0.5s ease ${1.2 + i * 0.1}s, fill 0.4s ease`,
//             }}
//           />
//         );
//       })}

//       {/* Center background */}
//       <circle cx={CX} cy={CY} r={80} fill="url(#centerBg)" />
//       <circle
//         cx={CX}
//         cy={CY}
//         r={80}
//         fill="none"
//         stroke="rgba(253,185,19,0.08)"
//         strokeWidth="1"
//       />

//       {/* Center text */}
//       <text
//         x={CX}
//         y={CY - 16}
//         textAnchor="middle"
//         fill="white"
//         fontSize="11.5"
//         fontWeight="700"
//         letterSpacing="0.08em"
//         style={{
//           opacity: isVisible ? 1 : 0,
//           transition: "opacity 0.6s ease 0.8s",
//         }}
//       >
//         SAP IMPLEMENTATION
//       </text>
//       <text
//         x={CX}
//         y={CY + 4}
//         textAnchor="middle"
//         fill="#FDB913"
//         fontSize="11.5"
//         fontWeight="700"
//         letterSpacing="0.08em"
//         style={{
//           opacity: isVisible ? 1 : 0,
//           transition: "opacity 0.6s ease 0.9s",
//         }}
//       >
//         METHODOLOGY
//       </text>
//       <line
//         x1={CX - 22}
//         y1={CY + 16}
//         x2={CX + 22}
//         y2={CY + 16}
//         stroke="#FDB913"
//         strokeWidth="1.2"
//         strokeLinecap="round"
//         strokeDasharray={44}
//         strokeDashoffset={isVisible ? 0 : 44}
//         style={{
//           transition: "stroke-dashoffset 0.6s ease 1.1s",
//           opacity: 0.4,
//         }}
//       />
//       <rect
//         x={CX - 4}
//         y={CY + 24}
//         width="8"
//         height="8"
//         rx="1.5"
//         fill="none"
//         stroke="rgba(253,185,19,0.3)"
//         strokeWidth="1"
//         transform={`rotate(45 ${CX} ${CY + 28})`}
//         style={{
//           opacity: isVisible ? 1 : 0,
//           transition: "opacity 0.5s ease 1.2s",
//         }}
//       />

//       {/* Nodes */}
//       {approachData.map((step, i) => {
//         const pos = nodePos(i);
//         const isActive = activeStep === step.step;
//         return (
//           <g key={step.step}>
//             {isActive && (
//               <circle
//                 cx={pos.x}
//                 cy={pos.y}
//                 r={NR}
//                 fill="none"
//                 stroke="#FDB913"
//                 strokeWidth="1.5"
//                 opacity="0"
//                 style={{
//                   animation: "nodePulse 1.8s ease-out infinite",
//                   transformOrigin: `${pos.x}px ${pos.y}px`,
//                 }}
//               />
//             )}
//             <circle
//               cx={pos.x}
//               cy={pos.y}
//               r={NR}
//               className="node-circle"
//               fill={isActive ? "rgba(253,185,19,0.12)" : "rgba(8,18,33,0.95)"}
//               stroke={isActive ? "#FDB913" : "rgba(253,185,19,0.25)"}
//               strokeWidth={isActive ? 2 : 1.5}
//               filter={isActive ? "url(#glowStrong)" : undefined}
//               style={{
//                 transformOrigin: `${pos.x}px ${pos.y}px`,
//                 transform: isVisible ? "scale(1)" : "scale(0)",
//                 transition: `transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${0.5 + i * 0.1}s, fill 0.4s ease, stroke 0.4s ease, stroke-width 0.4s ease`,
//               }}
//             />
//             <text
//               x={pos.x}
//               y={pos.y + 1}
//               textAnchor="middle"
//               dominantBaseline="central"
//               fill={isActive ? "#FDB913" : "rgba(255,255,255,0.65)"}
//               fontSize="12"
//               fontWeight="800"
//               style={{
//                 opacity: isVisible ? 1 : 0,
//                 transition: `opacity 0.4s ease ${0.7 + i * 0.1}s, fill 0.4s ease`,
//               }}
//             >
//               0{step.step}
//             </text>
//           </g>
//         );
//       })}
//     </svg>
//   );
// };

// /* ═══════════════════════════════════════════════════
//    APPROACH CARD
// ═══════════════════════════════════════════════════ */
// const ApproachCard = ({ data, activeStep, setActiveStep, direction }) => {
//   const isActive = activeStep === data.step;
//   const Icon = data.icon;

//   return (
//     <motion.div
//       className="relative glass-card rounded-[20px] p-5 cursor-pointer"
//       initial={{
//         opacity: 0,
//         y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
//         x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
//         scale: 0.95,
//       }}
//       whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
//       viewport={{ once: true, amount: 0.3 }}
//       transition={{
//         duration: 0.7,
//         ease: [0.22, 1, 0.36, 1],
//         delay: data.step * 0.12,
//       }}
//       whileHover={{ y: -5 }}
//       onMouseEnter={() => setActiveStep(data.step)}
//       onMouseLeave={() => setActiveStep(null)}
//       style={{
//         opacity: activeStep !== null && !isActive ? 0.35 : undefined,
//         transition: "opacity 0.5s cubic-bezier(0.22,1,0.36,1)",
//         background: isActive
//           ? "rgba(255,255,255,0.06)"
//           : "rgba(255,255,255,0.025)",
//         border: `1px solid ${isActive ? "rgba(253,185,19,0.25)" : "rgba(255,255,255,0.06)"}`,
//         boxShadow: isActive
//           ? "0 24px 64px rgba(0,0,0,0.35), 0 0 30px rgba(253,185,19,0.06), 0 0 0 1px rgba(253,185,19,0.12)"
//           : "none",
//         backdropFilter: "blur(16px)",
//         WebkitBackdropFilter: "blur(16px)",
//       }}
//     >
//       {/* Icon */}
//       <div
//         className="w-11 h-11 rounded-xl flex items-center justify-center mb-3.5"
//         style={{
//           background: isActive
//             ? "rgba(253,185,19,0.15)"
//             : "rgba(253,185,19,0.07)",
//           border: `1px solid ${isActive ? "rgba(253,185,19,0.35)" : "rgba(253,185,19,0.15)"}`,
//           transition: "all 0.4s ease",
//         }}
//       >
//         <Icon className="text-base" style={{ color: "#FDB913" }} />
//       </div>

//       {/* Title */}
//       <h4 className="text-white font-bold text-[17px] mb-0.5 leading-tight">
//         {data.title}
//       </h4>

//       {/* Subtitle */}
//       <p
//         className="text-[10px] font-bold uppercase tracking-[0.18em] mb-3.5"
//         style={{ color: "#FDB913" }}
//       >
//         {data.subtitle}
//       </p>

//       {/* Bullets */}
//       <ul className="space-y-2">
//         {data.bullets.map((b, j) => (
//           <li
//             key={j}
//             className="flex items-start gap-2.5 text-[12.5px] leading-relaxed"
//             style={{ color: "rgba(255,255,255,0.45)" }}
//           >
//             <span
//               className="mt-[7px] w-[5px] h-[5px] rounded-full flex-shrink-0"
//               style={{
//                 background: isActive
//                   ? "rgba(253,185,19,0.7)"
//                   : "rgba(253,185,19,0.35)",
//                 transition: "background 0.4s ease",
//               }}
//             />
//             {b}
//           </li>
//         ))}
//       </ul>

//       {/* Hover glow */}
//       <div
//         className="absolute top-0 right-0 w-28 h-28 rounded-full pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(253,185,19,0.06) 0%, transparent 70%)",
//           opacity: isActive ? 1 : 0,
//           transition: "opacity 0.5s ease",
//         }}
//       />
//     </motion.div>
//   );
// };

// /* ═══════════════════════════════════════════════════
//    CONNECTOR LINES
// ═══════════════════════════════════════════════════ */
// const ConnectorV = ({ delay = 0, flip = false, inView }) => (
//   <div className="flex justify-center" style={{ height: "28px" }}>
//     <div
//       style={{
//         width: "1px",
//         height: inView ? "100%" : "0%",
//         background: flip
//           ? "linear-gradient(to bottom, rgba(253,185,19,0.04), rgba(253,185,19,0.25))"
//           : "linear-gradient(to bottom, rgba(253,185,19,0.25), rgba(253,185,19,0.04))",
//         transition: `height 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
//       }}
//     />
//   </div>
// );

// const ConnectorH = ({ delay = 0, fromLeft = true, inView }) => (
//   <div className="flex items-center" style={{ width: "28px" }}>
//     <div
//       style={{
//         height: "1px",
//         width: inView ? "100%" : "0%",
//         background: fromLeft
//           ? "linear-gradient(to right, rgba(253,185,19,0.2), rgba(253,185,19,0.03))"
//           : "linear-gradient(to left, rgba(253,185,19,0.2), rgba(253,185,19,0.03))",
//         transition: `width 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
//       }}
//     />
//   </div>
// );

// /* ═══════════════════════════════════════════════════
//    MOBILE TIMELINE
// ═══════════════════════════════════════════════════ */
// const MobileTimeline = ({ inView }) => (
//   <div className="lg:hidden relative">
//     {/* Vertical line */}
//     <div className="absolute left-[23px] top-0 bottom-0 w-px">
//       <div
//         style={{
//           width: "100%",
//           height: inView ? "100%" : "0%",
//           background:
//             "linear-gradient(to bottom, rgba(253,185,19,0.3), rgba(30,80,144,0.2), rgba(253,185,19,0.1))",
//           transition: "height 2.5s cubic-bezier(0.22,1,0.36,1) 0.3s",
//         }}
//       />
//     </div>

//     <div className="space-y-6">
//       {approachData.map((step, i) => {
//         const Icon = step.icon;
//         return (
//           <motion.div
//             key={step.step}
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               delay: 0.2 + i * 0.12,
//               duration: 0.6,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="flex gap-5"
//           >
//             {/* Step dot */}
//             <div className="flex-shrink-0 w-[46px] flex flex-col items-center pt-1">
//               <div
//                 className="w-[46px] h-[46px] rounded-full flex items-center justify-center"
//                 style={{
//                   background: "rgba(8,18,33,0.95)",
//                   border: "1.5px solid rgba(253,185,19,0.25)",
//                   boxShadow: "0 0 20px rgba(253,185,19,0.08)",
//                 }}
//               >
//                 <span
//                   className="text-[11px] font-extrabold"
//                   style={{ color: "rgba(253,185,19,0.8)" }}
//                 >
//                   0{step.step}
//                 </span>
//               </div>
//             </div>

//             {/* Card */}
//             <div
//               className="rounded-2xl p-5 flex-1 relative overflow-hidden"
//               style={{
//                 background: "rgba(255,255,255,0.025)",
//                 border: "1px solid rgba(255,255,255,0.06)",
//                 backdropFilter: "blur(16px)",
//                 WebkitBackdropFilter: "blur(16px)",
//               }}
//             >
//               <div className="flex items-center gap-3 mb-3">
//                 <div
//                   className="w-9 h-9 rounded-lg flex items-center justify-center"
//                   style={{
//                     background: "rgba(253,185,19,0.08)",
//                     border: "1px solid rgba(253,185,19,0.15)",
//                   }}
//                 >
//                   <Icon className="text-sm" style={{ color: "#FDB913" }} />
//                 </div>
//                 <div>
//                   <h4 className="text-white font-bold text-[15px] leading-tight">
//                     {step.title}
//                   </h4>
//                   <p
//                     className="text-[9px] font-bold uppercase tracking-[0.18em]"
//                     style={{ color: "#FDB913" }}
//                   >
//                     {step.subtitle}
//                   </p>
//                 </div>
//               </div>
//               <ul className="space-y-2">
//                 {step.bullets.map((b, j) => (
//                   <li
//                     key={j}
//                     className="flex items-start gap-2 text-[12px] leading-relaxed"
//                     style={{ color: "rgba(255,255,255,0.45)" }}
//                   >
//                     <span
//                       className="mt-[6px] w-[4px] h-[4px] rounded-full flex-shrink-0"
//                       style={{ background: "rgba(253,185,19,0.4)" }}
//                     />
//                     {b}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>
//         );
//       })}
//     </div>
//   </div>
// );

// /* ═══════════════════════════════════════════════════
//    MAIN SECTION
// ═══════════════════════════════════════════════════ */
// const ApproachSection = () => {
//   const [activeStep, setActiveStep] = useState(null);
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, amount: 0.05 });

//   return (
//     <section
//       ref={sectionRef}
//       className="py-20 lg:py-12 relative overflow-hidden"
//       style={{ background: "#01182f" }}
//     >
//       {/* ── Background Effects ── */}
//       <div
//         className="absolute inset-0 opacity-[0.012] pointer-events-none"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
//           backgroundSize: "32px 32px",
//         }}
//       />
//       <div
//         className="absolute pointer-events-none"
//         style={{
//           top: "-8%",
//           left: "-4%",
//           width: "500px",
//           height: "500px",
//           borderRadius: "50%",
//           background:
//             "radial-gradient(circle, rgba(253,185,19,0.045) 0%, transparent 70%)",
//           filter: "blur(60px)",
//         }}
//       />
//       <div
//         className="absolute pointer-events-none"
//         style={{
//           bottom: "-10%",
//           right: "-6%",
//           width: "600px",
//           height: "600px",
//           borderRadius: "50%",
//           background:
//             "radial-gradient(circle, rgba(30,80,144,0.04) 0%, transparent 70%)",
//           filter: "blur(80px)",
//         }}
//       />
//       <div
//         className="absolute pointer-events-none"
//         style={{
//           top: "40%",
//           left: "50%",
//           transform: "translate(-50%,-50%)",
//           width: "800px",
//           height: "800px",
//           borderRadius: "50%",
//           background:
//             "radial-gradient(circle, rgba(253,185,19,0.015) 0%, transparent 60%)",
//           filter: "blur(100px)",
//         }}
//       />
//       <Particles />

//       <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
//         {/* ── Header ── */}
//         {/* <motion.header
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//           className="text-center max-w-3xl mx-auto mb-14 lg:mb-20"
//         >
//           <span
//             className="inline-block px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.22em] mb-6 border"
//             style={{
//               background: "rgba(253,185,19,0.07)",
//               color: "#FDB913",
//               borderColor: "rgba(253,185,19,0.15)",
//             }}
//           >
//             Our Approach
//           </span>

//           <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold mb-5 text-white leading-[1.1] tracking-tight">
//             Proven{" "}
//             <span style={{ color: "#FDB913" }}>Implementation Methodology</span>
//           </h2>

//           <p
//             className="text-[15px] lg:text-base leading-relaxed"
//             style={{ color: "rgba(255,255,255,0.4)" }}
//           >
//             A structured, six-phase approach ensuring successful SAP
//             transformations — from initial discovery through continuous
//             optimization.
//           </p>
//         </motion.header> */}

//         {/* ═══════════════════════════════════════════
//             DESKTOP: Circular Layout
//         ═══════════════════════════════════════════ */}
//         <div className="hidden lg:block">
//           {/* Top: Discover */}
//           <div className="flex justify-center mb-0">
//             <div className="w-[260px]">
//               <ApproachCard
//                 data={approachData[0]}
//                 activeStep={activeStep}
//                 setActiveStep={setActiveStep}
//                 direction="down"
//               />
//             </div>
//           </div>

//           <ConnectorV delay={400} inView={isInView} />

//           {/* Middle row */}
//           <div className="flex items-center justify-center">
//             {/* Left: Run + Deploy */}
//             <div
//               className="flex flex-col justify-around flex-shrink-0"
//               style={{ width: "260px", height: "380px" }}
//             >
//               <ApproachCard
//                 data={approachData[5]}
//                 activeStep={activeStep}
//                 setActiveStep={setActiveStep}
//                 direction="right"
//               />
//               <ApproachCard
//                 data={approachData[4]}
//                 activeStep={activeStep}
//                 setActiveStep={setActiveStep}
//                 direction="right"
//               />
//             </div>

//             {/* Left connectors */}
//             <div
//               className="flex flex-col justify-around flex-shrink-0"
//               style={{ width: "28px", height: "380px" }}
//             >
//               <ConnectorH delay={500} fromLeft={true} inView={isInView} />
//               <ConnectorH delay={900} fromLeft={true} inView={isInView} />
//             </div>

//             {/* Circle */}
//             <div
//               className="flex-shrink-0 relative"
//               style={{ width: "380px", height: "380px" }}
//             >
//               <CircleDiagram activeStep={activeStep} isVisible={isInView} />
//             </div>

//             {/* Right connectors */}
//             <div
//               className="flex flex-col justify-around flex-shrink-0"
//               style={{ width: "28px", height: "380px" }}
//             >
//               <ConnectorH delay={600} fromLeft={false} inView={isInView} />
//               <ConnectorH delay={1000} fromLeft={false} inView={isInView} />
//             </div>

//             {/* Right: Prepare + Explore */}
//             <div
//               className="flex flex-col justify-around flex-shrink-0"
//               style={{ width: "260px", height: "380px" }}
//             >
//               <ApproachCard
//                 data={approachData[1]}
//                 activeStep={activeStep}
//                 setActiveStep={setActiveStep}
//                 direction="left"
//               />
//               <ApproachCard
//                 data={approachData[2]}
//                 activeStep={activeStep}
//                 setActiveStep={setActiveStep}
//                 direction="left"
//               />
//             </div>
//           </div>

//           <ConnectorV delay={1100} flip={true} inView={isInView} />

//           {/* Bottom: Realize */}
//           <div className="flex justify-center mt-0">
//             <div className="w-[260px]">
//               <ApproachCard
//                 data={approachData[3]}
//                 activeStep={activeStep}
//                 setActiveStep={setActiveStep}
//                 direction="up"
//               />
//             </div>
//           </div>
//         </div>

//         {/* ═══════════════════════════════════════════
//             MOBILE: Timeline
//         ═══════════════════════════════════════════ */}
//         <MobileTimeline inView={isInView} />
//       </div>

//       {/* Bottom fade */}
//       <div
//         className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
//         style={{
//           background: "linear-gradient(to bottom, transparent, #081221)",
//         }}
//       />
//     </section>
//   );
// };

// export default ApproachSection;

import { useState, useRef, useEffect, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaSearch,
  FaClipboardList,
  FaPencilRuler,
  FaCode,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

/* ═══════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════ */
const approachData = [
  {
    step: 1,
    icon: FaSearch,
    title: "Discover",
    subtitle: "Business Assessment",
    bullets: [
      "Business Assessment",
      "Requirement Gathering",
      "Scope Definition",
    ],
  },
  {
    step: 2,
    icon: FaClipboardList,
    title: "Prepare",
    subtitle: "Project Preparation",
    bullets: ["Project Planning", "Team Setup", "Governance Framework"],
  },
  {
    step: 3,
    icon: FaPencilRuler,
    title: "Explore",
    subtitle: "Solution Design",
    bullets: [
      "Fit-to-Standard Workshops",
      "Solution Architecture",
      "Gap Analysis",
    ],
  },
  {
    step: 4,
    icon: FaCode,
    title: "Realize",
    subtitle: "Build & Validation",
    bullets: [
      "Configuration & Development",
      "Integration Testing",
      "User Acceptance",
    ],
  },
  {
    step: 5,
    icon: FaRocket,
    title: "Deploy",
    subtitle: "Go-Live Execution",
    bullets: ["Data Migration", "Cutover Execution", "End-User Training"],
  },
  {
    step: 6,
    icon: FaHeadset,
    title: "Run",
    subtitle: "Continuous Support",
    bullets: [
      "Ongoing Support",
      "Process Optimization",
      "Continuous Improvement",
    ],
  },
];

/* ═══════════════════════════════════════════════════
   CIRCLE GEOMETRY
═══════════════════════════════════════════════════ */
const CX = 190,
  CY = 190,
  R = 155,
  NR = 23;
const ARC_LEN = (2 * Math.PI * R * 60) / 360;

const nodePos = (i) => {
  const a = ((-90 + i * 60) * Math.PI) / 180;
  return { x: CX + R * Math.cos(a), y: CY + R * Math.sin(a) };
};

const arcPath = (i) => {
  const f = nodePos(i),
    t = nodePos((i + 1) % 6);
  return `M ${f.x} ${f.y} A ${R} ${R} 0 0 1 ${t.x} ${t.y}`;
};

const arrowPos = (i) => {
  const a = ((-90 + i * 60 + 30) * Math.PI) / 180;
  const ar = R + 1;
  return {
    x: CX + ar * Math.cos(a),
    y: CY + ar * Math.sin(a),
    rot: -90 + i * 60 + 30 + 90,
  };
};

/* ═══════════════════════════════════════════════════
   PARTICLES
═══════════════════════════════════════════════════ */
const particles = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 0.5,
  dur: Math.random() * 16 + 12,
  del: Math.random() * 10,
  op: Math.random() * 0.3 + 0.05,
  color: i % 5 === 0 ? "#FDB913" : i % 5 === 1 ? "#1E5090" : "#ffffff",
}));

/* ═══════════════════════════════════════════════════
   PARTICLES COMPONENT
═══════════════════════════════════════════════════ */
const Particles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {particles.map((p) => (
      <div
        key={p.id}
        className="absolute rounded-full particle"
        style={{
          left: `${p.x}%`,
          top: `${p.y}%`,
          width: `${p.size}px`,
          height: `${p.size}px`,
          background: p.color,
          "--dur": `${p.dur}s`,
          "--del": `${p.del}s`,
          "--op": p.op,
          opacity: p.op,
          animation: `float var(--dur) ease-in-out infinite var(--del)`,
        }}
      />
    ))}
  </div>
);

/* ═══════════════════════════════════════════════════
   CIRCLE DIAGRAM (SVG) — Enhanced with Rotation
═══════════════════════════════════════════════════ */
const CircleDiagram = ({ activeStep, isVisible }) => {
  const circumference = 2 * Math.PI * R;
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.15) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      viewBox="0 0 380 380"
      className="w-full h-full"
      style={{ overflow: "visible" }}
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glowStrong">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glowGold">
          <feGaussianBlur stdDeviation="8" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDB913" stopOpacity="0.6" />
          <stop offset="30%" stopColor="#1E5090" stopOpacity="0.4" />
          <stop offset="70%" stopColor="#1E5090" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FDB913" stopOpacity="0.6" />
        </linearGradient>
        <radialGradient id="centerBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0d1f3c" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#081221" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#081221" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FDB913" stopOpacity="0.08" />
          <stop offset="60%" stopColor="#FDB913" stopOpacity="0.02" />
          <stop offset="100%" stopColor="#FDB913" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FDB913" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FDB913" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background glow - pulsing */}
      <circle
        cx={CX}
        cy={CY}
        r={R + 55}
        fill="url(#centerGlow)"
        className="pulse-glow"
        style={{
          animation: "pulseGlow 3s ease-in-out infinite",
        }}
      />

      {/* Rotating outer dashed ring - clockwise */}
      <circle
        cx={CX}
        cy={CY}
        r={R + 22}
        fill="none"
        stroke="rgba(253,185,19,0.06)"
        strokeWidth="0.8"
        strokeDasharray="4 10"
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: `${CX}px ${CY}px`,
        }}
      />

      {/* Rotating outer dashed ring - counter-clockwise */}
      <circle
        cx={CX}
        cy={CY}
        r={R + 32}
        fill="none"
        stroke="rgba(30,80,144,0.05)"
        strokeWidth="0.6"
        strokeDasharray="3 14"
        style={{
          transform: `rotate(${-rotation * 0.7}deg)`,
          transformOrigin: `${CX}px ${CY}px`,
        }}
      />

      {/* Rotating dotted ring */}
      <circle
        cx={CX}
        cy={CY}
        r={R + 12}
        fill="none"
        stroke="rgba(253,185,19,0.04)"
        strokeWidth="1"
        strokeDasharray="1 18"
        style={{
          transform: `rotate(${rotation * 1.3}deg)`,
          transformOrigin: `${CX}px ${CY}px`,
        }}
      />

      {/* Base ring with glow */}
      <circle
        cx={CX}
        cy={CY}
        r={R}
        fill="none"
        stroke="rgba(253,185,19,0.08)"
        strokeWidth="1.5"
      />

      {/* Inner glow ring */}
      <circle
        cx={CX}
        cy={CY}
        r={R - 8}
        fill="none"
        stroke="rgba(30,80,144,0.04)"
        strokeWidth="0.5"
      />

      {/* Arc connectors with active state */}
      {approachData.map((_, i) => {
        const ni = (i + 1) % 6;
        const isActive = activeStep === i + 1 || activeStep === ni + 1;
        return (
          <path
            key={i}
            d={arcPath(i)}
            fill="none"
            stroke={isActive ? "#FDB913" : "rgba(253,185,19,0.2)"}
            strokeWidth={isActive ? 2.5 : 1.5}
            strokeLinecap="round"
            strokeDasharray={ARC_LEN}
            strokeDashoffset={isVisible ? 0 : ARC_LEN}
            filter={isActive ? "url(#glow)" : undefined}
            className="arc-path"
            style={{ transitionDelay: `${0.4 + i * 0.12}s` }}
          />
        );
      })}

      {/* Animated progress ring */}
      <circle
        cx={CX}
        cy={CY}
        r={R}
        fill="none"
        stroke="url(#arcGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={isVisible ? 0 : circumference}
        transform={`rotate(-90 ${CX} ${CY})`}
        filter="url(#glowGold)"
        style={{
          transition: "stroke-dashoffset 2.5s cubic-bezier(0.22,1,0.36,1) 0.3s",
        }}
      />

      {/* Flow direction arrows - pulsing */}
      {approachData.map((_, i) => {
        const ap = arrowPos(i);
        const ni = (i + 1) % 6;
        const isActive = activeStep === i + 1 || activeStep === ni + 1;
        const pulse = 0.5 + 0.5 * Math.sin(Date.now() / 1000 + i);
        return (
          <polygon
            key={`arr-${i}`}
            points="0,-4 3,2.5 -3,2.5"
            fill={
              isActive
                ? `rgba(253,185,19,${0.5 + 0.3 * pulse})`
                : `rgba(253,185,19,${0.15 + 0.1 * pulse})`
            }
            transform={`translate(${ap.x},${ap.y}) rotate(${ap.rot})`}
            style={{
              opacity: isVisible ? 1 : 0,
              transition: `opacity 0.5s ease ${1.2 + i * 0.1}s, fill 0.4s ease`,
            }}
          />
        );
      })}

      {/* Center background with pulse */}
      <circle cx={CX} cy={CY} r={82} fill="url(#centerBg)" />
      <circle
        cx={CX}
        cy={CY}
        r={82}
        fill="none"
        stroke="rgba(253,185,19,0.06)"
        strokeWidth="1"
        style={{
          animation: "ringPulse 2s ease-in-out infinite",
        }}
      />
      <circle
        cx={CX}
        cy={CY}
        r={72}
        fill="none"
        stroke="rgba(253,185,19,0.03)"
        strokeWidth="0.5"
        style={{
          animation: "ringPulse 2.5s ease-in-out infinite 0.5s",
        }}
      />

      {/* Center text */}
      <text
        x={CX}
        y={CY - 18}
        textAnchor="middle"
        fill="white"
        fontSize="11.5"
        fontWeight="700"
        letterSpacing="0.08em"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.6s ease 0.8s",
        }}
      >
        SAP IMPLEMENTATION
      </text>
      <text
        x={CX}
        y={CY + 2}
        textAnchor="middle"
        fill="#FDB913"
        fontSize="11.5"
        fontWeight="700"
        letterSpacing="0.08em"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.6s ease 0.9s",
        }}
      >
        METHODOLOGY
      </text>

      {/* Decorative line */}
      <line
        x1={CX - 25}
        y1={CY + 16}
        x2={CX + 25}
        y2={CY + 16}
        stroke="#FDB913"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray={50}
        strokeDashoffset={isVisible ? 0 : 50}
        style={{
          transition: "stroke-dashoffset 0.6s ease 1.1s",
          opacity: 0.4,
        }}
      />

      {/* Diamond accent */}
      <rect
        x={CX - 5}
        y={CY + 24}
        width="10"
        height="10"
        rx="2"
        fill="none"
        stroke="rgba(253,185,19,0.25)"
        strokeWidth="1"
        transform={`rotate(${45 + rotation * 0.5} ${CX} ${CY + 29})`}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.5s ease 1.2s",
        }}
      />

      {/* Nodes with enhanced animation */}
      {approachData.map((step, i) => {
        const pos = nodePos(i);
        const isActive = activeStep === step.step;
        const pulse = 0.5 + 0.5 * Math.sin(Date.now() / 1500 + i * 1.2);

        return (
          <g key={step.step}>
            {/* Node pulse ring */}
            {isActive && (
              <circle
                cx={pos.x}
                cy={pos.y}
                r={NR + 4}
                fill="none"
                stroke="#FDB913"
                strokeWidth="0.8"
                opacity="0"
                style={{
                  animation: "nodePulse 2s ease-out infinite",
                  transformOrigin: `${pos.x}px ${pos.y}px`,
                }}
              />
            )}

            {/* Node glow */}
            {isActive && (
              <circle
                cx={pos.x}
                cy={pos.y}
                r={NR + 8}
                fill="none"
                stroke="rgba(253,185,19,0.08)"
                strokeWidth="0.5"
                style={{
                  animation: "ringPulse 1.8s ease-in-out infinite",
                  transformOrigin: `${pos.x}px ${pos.y}px`,
                }}
              />
            )}

            {/* Node circle */}
            <circle
              cx={pos.x}
              cy={pos.y}
              r={NR}
              className="node-circle"
              fill={isActive ? "rgba(253,185,19,0.15)" : "rgba(8,18,33,0.95)"}
              stroke={
                isActive ? "#FDB913" : `rgba(253,185,19,${0.2 + 0.1 * pulse})`
              }
              strokeWidth={isActive ? 2.5 : 1.5}
              filter={isActive ? "url(#glowStrong)" : undefined}
              style={{
                transformOrigin: `${pos.x}px ${pos.y}px`,
                transform: isVisible ? "scale(1)" : "scale(0)",
                transition: `transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${0.5 + i * 0.1}s, fill 0.4s ease, stroke 0.4s ease, stroke-width 0.4s ease`,
              }}
            />

            {/* Step number */}
            <text
              x={pos.x}
              y={pos.y + 1}
              textAnchor="middle"
              dominantBaseline="central"
              fill={
                isActive ? "#FDB913" : `rgba(255,255,255,${0.5 + 0.2 * pulse})`
              }
              fontSize="12"
              fontWeight="800"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: `opacity 0.4s ease ${0.7 + i * 0.1}s, fill 0.4s ease`,
              }}
            >
              0{step.step}
            </text>
          </g>
        );
      })}

      {/* Rotating inner ring with dots */}
      <g
        style={{
          transform: `rotate(${rotation * 1.5}deg)`,
          transformOrigin: `${CX}px ${CY}px`,
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const r = 40;
          const x = CX + r * Math.cos(angle);
          const y = CY + r * Math.sin(angle);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="1.5"
              fill={`rgba(253,185,19,${0.05 + 0.04 * Math.sin(i * 0.5)})`}
            />
          );
        })}
      </g>
    </svg>
  );
};

/* ═══════════════════════════════════════════════════
   APPROACH CARD
═══════════════════════════════════════════════════ */
const ApproachCard = ({ data, activeStep, setActiveStep, direction }) => {
  const isActive = activeStep === data.step;
  const Icon = data.icon;

  return (
    <motion.div
      className="relative glass-card rounded-[20px] p-5 cursor-pointer"
      initial={{
        opacity: 0,
        y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
        x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        scale: 0.95,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: data.step * 0.12,
      }}
      whileHover={{ y: -5, scale: 1.02 }}
      onMouseEnter={() => setActiveStep(data.step)}
      onMouseLeave={() => setActiveStep(null)}
      style={{
        opacity: activeStep !== null && !isActive ? 0.35 : undefined,
        transition: "opacity 0.5s cubic-bezier(0.22,1,0.36,1)",
        background: isActive
          ? "rgba(255,255,255,0.06)"
          : "rgba(255,255,255,0.025)",
        border: `1px solid ${isActive ? "rgba(253,185,19,0.25)" : "rgba(255,255,255,0.06)"}`,
        boxShadow: isActive
          ? "0 24px 64px rgba(0,0,0,0.35), 0 0 30px rgba(253,185,19,0.06), 0 0 0 1px rgba(253,185,19,0.12)"
          : "none",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-3.5"
        style={{
          background: isActive
            ? "rgba(253,185,19,0.15)"
            : "rgba(253,185,19,0.07)",
          border: `1px solid ${isActive ? "rgba(253,185,19,0.35)" : "rgba(253,185,19,0.15)"}`,
          transition: "all 0.4s ease",
        }}
      >
        <Icon className="text-base" style={{ color: "#FDB913" }} />
      </div>

      {/* Title */}
      <h4 className="text-white font-bold text-[17px] mb-0.5 leading-tight">
        {data.title}
      </h4>

      {/* Subtitle */}
      <p
        className="text-[10px] font-bold uppercase tracking-[0.18em] mb-3.5"
        style={{ color: "#FDB913" }}
      >
        {data.subtitle}
      </p>

      {/* Bullets */}
      <ul className="space-y-2">
        {data.bullets.map((b, j) => (
          <li
            key={j}
            className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-white"
            // style={{ color: "rgba(255,255,255,0.45)" }}
          >
            <span
              className="mt-[7px] w-[5px] h-[5px] rounded-full flex-shrink-0"
              style={{
                background: isActive
                  ? "rgba(253,185,19,0.7)"
                  : "rgba(253,185,19,0.35)",
                transition: "background 0.4s ease",
              }}
            />
            {b}
          </li>
        ))}
      </ul>

      {/* Hover glow */}
      <div
        className="absolute top-0 right-0 w-28 h-28 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(253,185,19,0.06) 0%, transparent 70%)",
          opacity: isActive ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      />
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════════
   CONNECTOR LINES
═══════════════════════════════════════════════════ */
const ConnectorV = ({ delay = 0, flip = false, inView }) => (
  <div className="flex justify-center" style={{ height: "28px" }}>
    <div
      style={{
        width: "1px",
        height: inView ? "100%" : "0%",
        background: flip
          ? "linear-gradient(to bottom, rgba(253,185,19,0.04), rgba(253,185,19,0.25))"
          : "linear-gradient(to bottom, rgba(253,185,19,0.25), rgba(253,185,19,0.04))",
        transition: `height 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    />
  </div>
);

const ConnectorH = ({ delay = 0, fromLeft = true, inView }) => (
  <div className="flex items-center" style={{ width: "28px" }}>
    <div
      style={{
        height: "1px",
        width: inView ? "100%" : "0%",
        background: fromLeft
          ? "linear-gradient(to right, rgba(253,185,19,0.2), rgba(253,185,19,0.03))"
          : "linear-gradient(to left, rgba(253,185,19,0.2), rgba(253,185,19,0.03))",
        transition: `width 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    />
  </div>
);

/* ═══════════════════════════════════════════════════
   MOBILE TIMELINE
═══════════════════════════════════════════════════ */
const MobileTimeline = ({ inView }) => (
  <div className="lg:hidden relative">
    {/* Vertical line with pulse */}
    <div className="absolute left-[23px] top-0 bottom-0 w-px">
      <div
        style={{
          width: "100%",
          height: inView ? "100%" : "0%",
          background:
            "linear-gradient(to bottom, rgba(253,185,19,0.3), rgba(30,80,144,0.2), rgba(253,185,19,0.1))",
          transition: "height 2.5s cubic-bezier(0.22,1,0.36,1) 0.3s",
        }}
      />
      {/* Pulse dot on line */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
        style={{
          background: "#FDB913",
          animation: "float 2s ease-in-out infinite",
          opacity: 0.3,
        }}
      />
    </div>

    <div className="space-y-6">
      {approachData.map((step, i) => {
        const Icon = step.icon;
        return (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2 + i * 0.12,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex gap-5"
          >
            {/* Step dot */}
            <div className="flex-shrink-0 w-[46px] flex flex-col items-center pt-1">
              <div
                className="w-[46px] h-[46px] rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(8,18,33,0.95)",
                  border: "1.5px solid rgba(253,185,19,0.25)",
                  boxShadow: "0 0 20px rgba(253,185,19,0.08)",
                }}
              >
                <span
                  className="text-[11px] font-extrabold"
                  style={{ color: "rgba(253,185,19,0.8)" }}
                >
                  0{step.step}
                </span>
              </div>
            </div>

            {/* Card */}
            <div
              className="rounded-2xl p-5 flex-1 relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{
                    background: "rgba(253,185,19,0.08)",
                    border: "1px solid rgba(253,185,19,0.15)",
                  }}
                >
                  <Icon className="text-sm" style={{ color: "#FDB913" }} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-[15px] leading-tight">
                    {step.title}
                  </h4>
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: "#FDB913" }}
                  >
                    {step.subtitle}
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                {step.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-[12px] leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    <span
                      className="mt-[6px] w-[4px] h-[4px] rounded-full flex-shrink-0"
                      style={{ background: "rgba(253,185,19,0.4)" }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════
   MAIN SECTION
═══════════════════════════════════════════════════ */
const ApproachSection = () => {
  const [activeStep, setActiveStep] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-12 relative overflow-hidden bg-primary-800"
      // style={{ background: "#01182f" }}
    >
      {/* ── Background Effects ── */}
      <div
        className="absolute inset-0 opacity-[0.012] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-8%",
          left: "-4%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(253,185,19,0.045) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-10%",
          right: "-6%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(30,80,144,0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "40%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(253,185,19,0.015) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
      />
      <Particles />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* ── Header ── */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto mb-14 lg:mb-20"
        >
          <span
            className="inline-block px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.22em] mb-6 border"
            style={{
              background: "rgba(253,185,19,0.07)",
              color: "#FDB913",
              borderColor: "rgba(253,185,19,0.15)",
            }}
          >
            Our Approach
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-white leading-[1.1] tracking-tight">
            Proven <span>Implementation Methodology</span>
          </h2>

          <p
            className="text-[15px] lg:text-base leading-relaxed"
            style={{ color: "white" }}
          >
            A structured, six-phase approach ensuring successful SAP
            transformations — from initial discovery through continuous
            optimization.
          </p>
        </motion.header>

        {/* ═══════════════════════════════════════════
            DESKTOP: Circular Layout
        ═══════════════════════════════════════════ */}
        <div className="hidden lg:block">
          {/* Top: Discover */}
          <div className="flex justify-center mb-0">
            <div className="w-[260px]">
              <ApproachCard
                data={approachData[0]}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                direction="down"
              />
            </div>
          </div>

          <ConnectorV delay={400} inView={isInView} />

          {/* Middle row */}
          <div className="flex items-center justify-center">
            {/* Left: Run + Deploy */}
            <div
              className="flex flex-col justify-around flex-shrink-0"
              style={{ width: "260px", height: "380px" }}
            >
              <ApproachCard
                data={approachData[5]}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                direction="right"
              />
              <ApproachCard
                data={approachData[4]}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                direction="right"
              />
            </div>

            {/* Left connectors */}
            <div
              className="flex flex-col justify-around flex-shrink-0"
              style={{ width: "28px", height: "380px" }}
            >
              <ConnectorH delay={500} fromLeft={true} inView={isInView} />
              <ConnectorH delay={900} fromLeft={true} inView={isInView} />
            </div>

            {/* Circle */}
            <div
              className="flex-shrink-0 relative"
              style={{ width: "380px", height: "380px" }}
            >
              <CircleDiagram activeStep={activeStep} isVisible={isInView} />
            </div>

            {/* Right connectors */}
            <div
              className="flex flex-col justify-around flex-shrink-0"
              style={{ width: "28px", height: "380px" }}
            >
              <ConnectorH delay={600} fromLeft={false} inView={isInView} />
              <ConnectorH delay={1000} fromLeft={false} inView={isInView} />
            </div>

            {/* Right: Prepare + Explore */}
            <div
              className="flex flex-col justify-around flex-shrink-0"
              style={{ width: "260px", height: "380px" }}
            >
              <ApproachCard
                data={approachData[1]}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                direction="left"
              />
              <ApproachCard
                data={approachData[2]}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                direction="left"
              />
            </div>
          </div>

          <ConnectorV delay={1100} flip={true} inView={isInView} />

          {/* Bottom: Realize */}
          <div className="flex justify-center mt-0">
            <div className="w-[260px]">
              <ApproachCard
                data={approachData[3]}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                direction="up"
              />
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            MOBILE: Timeline
        ═══════════════════════════════════════════ */}
        <MobileTimeline inView={isInView} />
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #081221)",
        }}
      />
    </section>
  );
};

export default ApproachSection;
