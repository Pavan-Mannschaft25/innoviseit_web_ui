// import React, { useState, useEffect, useRef } from "react";
// import {
//   FaLaptopCode,
//   FaProjectDiagram,
//   FaBrain,
//   FaCloud,
//   FaShieldAlt,
//   FaCogs,
//   FaSearch,
//   FaPencilRuler,
//   FaCode,
//   FaPlug,
//   FaRocket,
//   FaChartLine,
//   FaFolderOpen,
//   FaBuilding,
//   FaServer,
//   FaHeadset,
//   FaCheckCircle,
//   FaArrowRight,
//   FaChevronDown,
//   FaComments,
//   FaCalendarAlt,
//   FaCube,
//   FaEnvelope,
//   FaPhone,
//   FaDatabase,
//   FaLock,
//   FaDollarSign,
//   FaUniversity,
//   FaHeartbeat,
//   FaShoppingCart,
//   FaIndustry,
//   FaTruck,
//   FaBolt,
//   FaLandmark,
//   FaRobot,
//   FaCloudUploadAlt,
//   FaMagic,
//   FaUsers,
//   FaBookOpen,
//   FaLinkedin,
//   FaTwitter,
//   FaGithub,
// } from "react-icons/fa";
// import {
//   FaAws,
//   FaMicrosoft,
//   FaBrain as FaBrainIcon,
//   FaShieldHalved as FaShieldIcon,
//   FaCircleCheck as FaCheckIcon,
// } from "react-icons/fa6";

// // ==================== SCROLL REVEAL HOOK ====================
// const useScrollReveal = (threshold = 0.1) => {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold },
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [threshold]);

//   return [ref, isVisible];
// };

// // ==================== HERO SECTION ====================
// const HeroSection = () => {
//   const floatingCards = [
//     {
//       title: "AI & Analytics",
//       icon: FaBrain,
//       desc: "ML & Automation",
//       position: "top-2 left-1/2 -translate-x-1/2",
//       color: "bg-purple-100",
//       iconColor: "text-purple-600",
//     },
//     {
//       title: "SAP",
//       icon: FaPhone,
//       desc: "ERP Solutions",
//       position: "top-1/2 -translate-y-1/2 left-2",
//       color: "bg-blue-100",
//       iconColor: "text-blue-700",
//     },
//     {
//       title: "Guidewire",
//       icon: FaShieldAlt,
//       desc: "Insurance Platform",
//       position: "top-1/2 -translate-y-1/2 right-2",
//       color: "bg-orange-100",
//       iconColor: "text-orange-600",
//     },
//     {
//       title: "Applications & APIs",
//       icon: FaCode,
//       desc: "Custom Development",
//       position: "bottom-2 left-1/2 -translate-x-1/2",
//       color: "bg-green-100",
//       iconColor: "text-green-600",
//     },
//     {
//       title: "Cloud Services",
//       icon: FaCloud,
//       position: "top-1/4 left-6",
//       iconColor: "text-cyan-600",
//       small: true,
//     },
//     {
//       title: "Data Platform",
//       icon: FaDatabase,
//       position: "top-1/4 right-6",
//       iconColor: "text-yellow-600",
//       small: true,
//     },
//     {
//       title: "Security",
//       icon: FaLock,
//       position: "bottom-1/4 left-6",
//       iconColor: "text-red-500",
//       small: true,
//     },
//     {
//       title: "Analytics",
//       icon: FaChartLine,
//       position: "bottom-1/4 right-6",
//       iconColor: "text-emerald-600",
//       small: true,
//     },
//   ];

//   return (
//     <section
//       className="min-h-screen relative overflow-hidden pt-10 pb-10 px-4 md:px-8"
//       style={{
//         background:
//           "linear-gradient(180deg, #ffffff 0%, #f8fafc 40%, #f1f5f9 100%)",
//       }}
//     >
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-amber-100 rounded-full blur-3xl opacity-60"></div>
//         <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-60"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-50 rounded-full blur-3xl opacity-50"></div>
//       </div>
//       <div
//         className="absolute inset-0 opacity-30"
//         style={{
//           backgroundImage: `radial-gradient(circle, #e2e8f0 1px, transparent 1px)`,
//           backgroundSize: "24px 24px",
//         }}
//       ></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Content */}
//           <div className="space-y-8 animate-fade-in-up">
//             <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-50 border border-amber-200">
//               <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
//               <span className="text-sm font-semibold text-amber-700">
//                 Application Development • Integration Services • AI
//               </span>
//             </div>

//             <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-slate-900">
//               Transforming Enterprises Through{" "}
//               <span className="text-gradient-gold">
//                 Intelligent Applications
//               </span>
//               , Seamless Integrations &{" "}
//               <span className="text-gradient-gold">AI-Powered Innovation</span>
//             </h1>

//             <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
//               Innovise delivers enterprise-grade application development, system
//               integration, and AI solutions that help organizations modernize
//               operations, improve customer experiences, and accelerate digital
//               transformation.
//             </p>

//             <div className="flex flex-wrap gap-4 pt-4">
//               <button className="btn-primary px-8 py-4 rounded-xl font-semibold text-black flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
//                 Schedule Consultation <FaArrowRight />
//               </button>
//               <button className="px-8 py-4 rounded-xl font-semibold text-slate-700 flex items-center gap-2 border-2 border-slate-200 bg-white hover:border-amber-500 hover:bg-amber-50 transition-all">
//                 Explore Services <FaChevronDown />
//               </button>
//             </div>

//             <div className="flex flex-wrap gap-8 pt-8 border-t border-slate-200">
//               <div>
//                 <div className="text-3xl font-bold text-slate-900">250+</div>
//                 <div className="text-sm text-slate-500">Projects Delivered</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-slate-900">99.9%</div>
//                 <div className="text-sm text-slate-500">Uptime Guarantee</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-slate-900">24/7</div>
//                 <div className="text-sm text-slate-500">Global Support</div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Enterprise Ecosystem Diagram */}
//           <div className="relative h-[650px] hidden lg:block">
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
//               <div className="relative">
//                 <div
//                   className="w-44 h-44 rounded-2xl flex items-center justify-center shadow-2xl glow-effect"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
//                   }}
//                 >
//                   <div className="text-center">
//                     <i className="fas fa-network-wired text-4xl text-black mb-2"></i>
//                     <div className="font-bold text-black text-base">
//                       Enterprise Hub
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   className="absolute inset-0 rounded-2xl pulse-ring"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
//                   }}
//                 ></div>
//               </div>
//             </div>

//             <svg
//               className="absolute inset-0 w-full h-full"
//               style={{ zIndex: 10 }}
//             >
//               <line
//                 x1="50%"
//                 y1="32%"
//                 x2="50%"
//                 y2="12%"
//                 stroke="#fbbf24"
//                 strokeWidth="3"
//                 strokeDasharray="8,8"
//               />
//               <line
//                 x1="50%"
//                 y1="68%"
//                 x2="50%"
//                 y2="88%"
//                 stroke="#fbbf24"
//                 strokeWidth="3"
//                 strokeDasharray="8,8"
//               />
//               <line
//                 x1="32%"
//                 y1="50%"
//                 x2="12%"
//                 y2="50%"
//                 stroke="#fbbf24"
//                 strokeWidth="3"
//                 strokeDasharray="8,8"
//               />
//               <line
//                 x1="68%"
//                 y1="50%"
//                 x2="88%"
//                 y2="50%"
//                 stroke="#fbbf24"
//                 strokeWidth="3"
//                 strokeDasharray="8,8"
//               />
//             </svg>

//             {floatingCards.map((card, index) => (
//               <div
//                 key={index}
//                 className={`floating-card absolute ${card.position} bg-white backdrop-blur-sm p-${card.small ? "4" : "5"} rounded-${card.small ? "xl" : "2xl"} ecosystem-node cursor-pointer shadow-lg border border-slate-200`}
//                 style={{ animationDelay: `${index * -1}s` }}
//               >
//                 <div
//                   className={`flex items-center ${card.small ? "gap-2" : "gap-4"}`}
//                 >
//                   <div
//                     className={`w-${card.small ? "8" : "12"} h-${card.small ? "8" : "12"} rounded-${card.small ? "lg" : "xl"} ${card.color || "bg-slate-100"} flex items-center justify-center`}
//                   >
//                     <card.icon
//                       className={`${card.iconColor} ${card.small ? "text-base" : "text-xl"}`}
//                     />
//                   </div>
//                   {!card.small && (
//                     <div>
//                       <div className="font-bold text-slate-900 text-sm">
//                         {card.title}
//                       </div>
//                       <div className="text-xs text-slate-500">{card.desc}</div>
//                     </div>
//                   )}
//                   {card.small && (
//                     <span className="text-sm font-semibold text-slate-800">
//                       {card.title}
//                     </span>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .text-gradient-gold { background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
//         .btn-primary { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); position: relative; overflow: hidden; }
//         .btn-primary::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); transition: left 0.5s; }
//         .btn-primary:hover::before { left: 100%; }
//         .glow-effect { box-shadow: 0 0 60px rgba(245, 158, 11, 0.3); }
//         @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
//         .floating-card { animation: float 6s ease-in-out infinite; }
//         @keyframes pulse-ring { 0% { transform: scale(1); opacity: 0.6; } 100% { transform: scale(1.5); opacity: 0; } }
//         .pulse-ring { animation: pulse-ring 2s ease-out infinite; }
//         @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
//         .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
//         .ecosystem-node { transition: all 0.3s ease; }
//         .ecosystem-node:hover { transform: scale(1.05); box-shadow: 0 12px 40px rgba(245, 158, 11, 0.25); }
//       `}</style>
//     </section>
//   );
// };

// // ==================== TRUSTED BY SECTION ====================
// const TrustedBySection = () => {
//   const partners = [
//     { name: "SAP", icon: FaPhone },
//     { name: "Guidewire", icon: FaShieldAlt },
//     { name: "AWS", icon: FaAws },
//     { name: "Azure", icon: FaMicrosoft },
//     { name: "OpenAI", icon: FaBrainIcon },
//     { name: "Tricentis", icon: FaCheckIcon },
//     { name: "Onapsis", icon: FaShieldIcon },
//   ];

//   return (
//     <section className="py-14 bg-slate-50 border-y border-slate-200">
//       <div className="max-w-7xl mx-auto px-4 md:px-8">
//         <p className="text-center text-sm text-slate-500 uppercase tracking-wider mb-8 font-medium">
//           Trusted by Leading Enterprises Worldwide
//         </p>
//         <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
//           {partners.map((partner, index) => (
//             <div
//               key={index}
//               className="group flex items-center gap-3 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
//             >
//               <partner.icon className="text-2xl md:text-3xl text-slate-400 group-hover:text-amber-500 transition-colors" />
//               <span className="text-lg md:text-xl font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
//                 {partner.name}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== WHY INNOVISE SECTION ====================
// const WhyInnoviseSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const cards = [
//     {
//       title: "Application Development",
//       icon: FaLaptopCode,
//       features: [
//         "Web Applications",
//         "Mobile Apps",
//         "Enterprise Platforms",
//         "Cloud Native Solutions",
//       ],
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       title: "Integration Services",
//       icon: FaProjectDiagram,
//       features: [
//         "SAP Integration",
//         "Guidewire Integration",
//         "API Development",
//         "Middleware Solutions",
//       ],
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       title: "Artificial Intelligence",
//       icon: FaBrain,
//       features: [
//         "Generative AI",
//         "Automation",
//         "Predictive Analytics",
//         "Machine Learning",
//       ],
//       gradient: "from-amber-500 to-orange-500",
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className={`py-16 px-4 md:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <p className="text-amber-600 font-bold mb-4 uppercase tracking-wider text-sm">
//             Why Choose Innovise
//           </p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 max-w-3xl mx-auto leading-tight">
//             Engineering Business Growth Through{" "}
//             <span className="text-gradient-gold">Technology Excellence</span>
//           </h2>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer card-hover"
//             >
//               <div
//                 className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
//               >
//                 <card.icon className="text-2xl text-black" />
//               </div>
//               <h3 className="text-2xl font-bold mb-5 text-slate-900 group-hover:text-amber-600 transition-colors">
//                 {card.title}
//               </h3>
//               <ul className="space-y-3">
//                 {card.features.map((feature, idx) => (
//                   <li
//                     key={idx}
//                     className="flex items-center gap-3 text-slate-600"
//                   >
//                     <FaCheckCircle className="text-amber-500 text-sm" />
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//       <style>{`.text-gradient-gold { background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }`}</style>
//     </section>
//   );
// };

// // ==================== SERVICES SECTION ====================
// const ServicesSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const services = [
//     {
//       title: "Custom Application Development",
//       icon: FaLaptopCode,
//       desc: "Tailored solutions built for your unique business needs",
//     },
//     {
//       title: "Enterprise Integrations",
//       icon: FaProjectDiagram,
//       desc: "Seamless connectivity across your entire tech stack",
//     },
//     {
//       title: "AI & Automation",
//       icon: FaBrain,
//       desc: "Intelligent automation to drive efficiency and innovation",
//     },
//     {
//       title: "Cloud Engineering",
//       icon: FaCloud,
//       desc: "Scalable cloud infrastructure and migration services",
//     },
//     {
//       title: "Quality Assurance",
//       icon: FaShieldAlt,
//       desc: "Comprehensive testing for flawless performance",
//     },
//     {
//       title: "Managed Services",
//       icon: FaCogs,
//       desc: "24/7 monitoring and support for peace of mind",
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className={`py-16 px-4 md:px-8 bg-slate-50 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <p className="text-amber-600 font-bold mb-4 uppercase tracking-wider text-sm">
//             Our Services
//           </p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
//             Comprehensive{" "}
//             <span className="text-gradient-gold">Digital Solutions</span>
//           </h2>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer card-hover"
//             >
//               <div className="flex items-start gap-4">
//                 <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 group-hover:bg-amber-100 transition-colors">
//                   <service.icon className="text-xl text-amber-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold mb-2 text-slate-900 group-hover:text-amber-600 transition-colors">
//                     {service.title}
//                   </h3>
//                   <p className="text-sm text-slate-500 leading-relaxed">
//                     {service.desc}
//                   </p>
//                 </div>
//               </div>
//               <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-amber-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
//                 Learn More <FaArrowRight className="text-xs" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <style>{`.text-gradient-gold { background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }`}</style>
//     </section>
//   );
// };

// // ==================== TRANSFORMATION JOURNEY SECTION ====================
// const TransformationJourneySection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const steps = [
//     {
//       title: "Discover",
//       icon: FaSearch,
//       desc: "Analyze requirements and identify opportunities",
//     },
//     {
//       title: "Design",
//       icon: FaPencilRuler,
//       desc: "Create architecture and user experience blueprints",
//     },
//     {
//       title: "Develop",
//       icon: FaCode,
//       desc: "Build robust, scalable applications",
//     },
//     {
//       title: "Integrate",
//       icon: FaPlug,
//       desc: "Connect systems and data flows seamlessly",
//     },
//     {
//       title: "Deploy",
//       icon: FaRocket,
//       desc: "Launch with confidence and minimal disruption",
//     },
//     {
//       title: "Optimize",
//       icon: FaChartLine,
//       desc: "Continuously improve performance and ROI",
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className={`py-16 px-4 md:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <p className="text-amber-600 font-bold mb-4 uppercase tracking-wider text-sm">
//             Our Process
//           </p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
//             Digital Transformation{" "}
//             <span className="text-gradient-gold">Journey</span>
//           </h2>
//         </div>
//         <div className="relative">
//           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 rounded-full timeline-line"></div>

//           <div className="space-y-8 md:space-y-0">
//             <div className="grid md:grid-cols-2 gap-8 md:gap-16">
//               {steps.slice(0, 3).map((step, index) => (
//                 <div
//                   key={index}
//                   className={`${index % 2 === 0 ? "md:text-right" : "md:col-start-2"} relative`}
//                 >
//                   <div
//                     className={`bg-white rounded-xl p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 inline-block border border-slate-200 shadow-sm ${index % 2 === 0 ? "md:ml-auto" : ""}`}
//                   >
//                     <div
//                       className={`flex items-center gap-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
//                     >
//                       <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-lg gradient-gold">
//                         <step.icon className="text-xl text-black" />
//                       </div>
//                       <div className={index % 2 === 0 ? "md:text-left" : ""}>
//                         <h3 className="text-xl font-bold mb-1 text-slate-900">
//                           {step.title}
//                         </h3>
//                         <p className="text-sm text-slate-500">{step.desc}</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div
//                     className="hidden md:block absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-amber-500 border-4 border-white shadow-md"
//                     style={{
//                       left: index % 2 === 0 ? "auto" : "-2.25rem",
//                       right: index % 2 === 0 ? "-2.25rem" : "auto",
//                     }}
//                   ></div>
//                 </div>
//               ))}
//             </div>

//             <div className="grid md:grid-cols-2 gap-8 md:gap-16 mt-8 md:-mt-8">
//               {steps.slice(3).map((step, index) => (
//                 <div
//                   key={index + 3}
//                   className={`${index % 2 === 1 ? "md:text-right" : ""} relative`}
//                 >
//                   <div
//                     className={`bg-white rounded-xl p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 inline-block border border-slate-200 shadow-sm ${index % 2 === 1 ? "md:ml-auto" : ""}`}
//                   >
//                     <div
//                       className={`flex items-center gap-4 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
//                     >
//                       <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-lg gradient-gold">
//                         <step.icon className="text-xl text-black" />
//                       </div>
//                       <div className={index % 2 === 1 ? "md:text-left" : ""}>
//                         <h3 className="text-xl font-bold mb-1 text-slate-900">
//                           {step.title}
//                         </h3>
//                         <p className="text-sm text-slate-500">{step.desc}</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div
//                     className="hidden md:block absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-amber-500 border-4 border-white shadow-md"
//                     style={{
//                       left: index % 2 === 1 ? "auto" : "-2.25rem",
//                       right: index % 2 === 1 ? "-2.25rem" : "auto",
//                     }}
//                   ></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <style>{`
//         .text-gradient-gold { background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
//         .timeline-line { background: linear-gradient(180deg, #f59e0b 0%, #d97706 100%); }
//         .gradient-gold { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); }
//       `}</style>
//     </section>
//   );
// };

// // ==================== TECHNOLOGY ECOSYSTEM SECTION ====================
// const TechnologyEcosystemSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const ecosystems = {
//     Enterprise: ["SAP", "Guidewire", "Salesforce", "Oracle"],
//     Development: ["React", "Angular", "Node.js", "Java", ".NET"],
//     Cloud: ["AWS", "Azure", "Google Cloud"],
//     AI: ["OpenAI", "Machine Learning", "Automation", "Analytics"],
//   };

//   return (
//     <section
//       ref={ref}
//       className={`py-16 px-4 md:px-8 bg-slate-50 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <p className="text-amber-600 font-bold mb-4 uppercase tracking-wider text-sm">
//             Technology Stack
//           </p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
//             Our Technology <span className="text-gradient-gold">Ecosystem</span>
//           </h2>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {Object.entries(ecosystems).map(
//             ([category, technologies], catIndex) => (
//               <div
//                 key={catIndex}
//                 className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
//               >
//                 <h3 className="text-lg font-bold mb-4 text-amber-600">
//                   {category}
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   {technologies.map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-sm text-slate-700 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700 transition-all cursor-default font-medium"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ),
//           )}
//         </div>
//       </div>
//       <style>{`.text-gradient-gold { background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }`}</style>
//     </section>
//   );
// };

// // ==================== BUSINESS IMPACT SECTION ====================
// const BusinessImpactSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const metrics = [
//     { value: "40%", label: "Faster Delivery", icon: FaRocket },
//     { value: "60%", label: "Reduction in Manual Processes", icon: FaCogs },
//     { value: "99.9%", label: "System Availability", icon: FaServer },
//     { value: "30%", label: "Lower Operational Costs", icon: FaDollarSign },
//   ];

//   return (
//     <section
//       ref={ref}
//       className={`py-16 px-4 md:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//       style={{
//         background:
//           "linear-gradient(135deg, #1e3a5f 0%, #2d5a87 50%, #4a7ba7 100%)",
//       }}
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <p className="text-amber-300 font-bold mb-4 uppercase tracking-wider text-sm">
//             Results That Matter
//           </p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
//             Delivering Measurable{" "}
//             <span className="text-amber-300">Business Impact</span>
//           </h2>
//         </div>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {metrics.map((metric, index) => (
//             <div
//               key={index}
//               className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 border border-white/20"
//             >
//               <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-6">
//                 <metric.icon className="text-2xl text-amber-300" />
//               </div>
//               <div
//                 className="stat-number text-black mb-2"
//                 style={{
//                   fontSize: "clamp(48px, 8vw, 80px)",
//                   fontWeight: 800,
//                   lineHeight: 1,
//                 }}
//               >
//                 {metric.value}
//               </div>
//               <div className="text-black font-medium">{metric.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== INDUSTRIES SECTION ====================
// const IndustriesSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const industries = [
//     {
//       name: "Insurance",
//       icon: FaShieldAlt,
//       gradient: "from-blue-500 to-indigo-600",
//     },
//     {
//       name: "Banking",
//       icon: FaUniversity,
//       gradient: "from-green-500 to-emerald-600",
//     },
//     {
//       name: "Healthcare",
//       icon: FaHeartbeat,
//       gradient: "from-red-500 to-rose-600",
//     },
//     {
//       name: "Retail",
//       icon: FaShoppingCart,
//       gradient: "from-purple-500 to-violet-600",
//     },
//     {
//       name: "Manufacturing",
//       icon: FaIndustry,
//       gradient: "from-orange-500 to-amber-600",
//     },
//     { name: "Logistics", icon: FaTruck, gradient: "from-cyan-500 to-teal-600" },
//     { name: "Energy", icon: FaBolt, gradient: "from-yellow-500 to-orange-600" },
//     {
//       name: "Public Sector",
//       icon: FaLandmark,
//       gradient: "from-slate-500 to-gray-600",
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className={`py-16 px-4 md:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <p className="text-amber-600 font-bold mb-4 uppercase tracking-wider text-sm">
//             Industries We Serve
//           </p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
//             Expertise Across{" "}
//             <span className="text-gradient-gold">Industries</span>
//           </h2>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
//           {industries.map((industry, index) => (
//             <div
//               key={index}
//               className="industry-card bg-white rounded-xl p-6 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200 shadow-sm group"
//             >
//               <div className="industry-icon w-16 h-16 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-md">
//                 <industry.icon className="text-2xl text-black" />
//               </div>
//               <h3 className="font-semibold text-slate-800">{industry.name}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//       <style>{`.text-gradient-gold { background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }`}</style>
//     </section>
//   );
// };

// // ==================== CASE STUDIES SECTION ====================
// const CaseStudiesSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const cases = [
//     {
//       title: "Enterprise Integration Program",
//       description:
//         "Connected SAP, CRM and third-party systems through a centralized integration layer.",
//       results: [
//         "45% Faster Processing",
//         "Reduced Data Errors",
//         "Improved User Experience",
//       ],
//       icon: FaProjectDiagram,
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       title: "AI Automation Initiative",
//       description:
//         "Implemented intelligent automation reducing manual workload by 70% while improving accuracy.",
//       results: [
//         "70% Less Manual Work",
//         "95% Accuracy Rate",
//         "$2M Annual Savings",
//       ],
//       icon: FaRobot,
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       title: "Cloud Modernization Project",
//       description:
//         "Migrated legacy on-premise infrastructure to AWS with zero downtime.",
//       results: [
//         "Zero Downtime Migration",
//         "60% Cost Reduction",
//         "Auto-scaling Enabled",
//       ],
//       icon: FaCloudUploadAlt,
//       gradient: "from-amber-500 to-orange-500",
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className={`py-16 px-4 md:px-8 bg-slate-50 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <p className="text-amber-600 font-bold mb-4 uppercase tracking-wider text-sm">
//             Success Stories
//           </p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
//             Featured <span className="text-gradient-gold">Case Studies</span>
//           </h2>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {cases.map((caseStudy, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group border border-slate-200 shadow-sm"
//             >
//               <div
//                 className={`h-2 bg-gradient-to-r ${caseStudy.gradient}`}
//               ></div>
//               <div className="p-8">
//                 <div
//                   className={`w-14 h-14 rounded-xl bg-gradient-to-br ${caseStudy.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md`}
//                 >
//                   <caseStudy.icon className="text-xl text-black" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-amber-600 transition-colors">
//                   {caseStudy.title}
//                 </h3>
//                 <p className="text-slate-500 mb-6 text-sm leading-relaxed">
//                   {caseStudy.description}
//                 </p>
//                 <div className="border-t border-slate-100 pt-4">
//                   <p className="text-xs text-slate-400 uppercase tracking-wider mb-3 font-semibold">
//                     Key Results:
//                   </p>
//                   <ul className="space-y-2">
//                     {caseStudy.results.map((result, idx) => (
//                       <li
//                         key={idx}
//                         className="flex items-center gap-2 text-sm text-slate-600"
//                       >
//                         <FaCheckCircle className="text-amber-500" />
//                         <span>{result}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <button className="mt-6 text-amber-600 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
//                   Read Full Case Study <FaArrowRight />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <style>{`.text-gradient-gold { background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }`}</style>
//     </section>
//   );
// };

// // ==================== AI INNOVATION SECTION ====================
// const AIInnovationSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const features = [
//     {
//       title: "Generative AI Solutions",
//       icon: FaMagic,
//       desc: "Create content, code, and insights automatically",
//     },
//     {
//       title: "Intelligent Automation",
//       icon: FaRobot,
//       desc: "Streamline workflows with smart automation",
//     },
//     {
//       title: "Predictive Analytics",
//       icon: FaChartLine,
//       desc: "Forecast trends and make data-driven decisions",
//     },
//     {
//       title: "AI-Powered Experiences",
//       icon: FaUsers,
//       desc: "Deliver personalized customer interactions",
//     },
//     {
//       title: "Knowledge Management",
//       icon: FaBookOpen,
//       desc: "Organize and retrieve information intelligently",
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className={`py-16 px-4 md:px-8 relative overflow-hidden transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//       style={{
//         background:
//           "linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #fb923c 100%)",
//       }}
//     >
//       <div
//         className="absolute inset-0 opacity-10"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//         }}
//       ></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div>
//             <p className="text-black/90 font-bold mb-4 uppercase tracking-wider text-sm">
//               AI Innovation
//             </p>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
//               Unlock the Power of
//               <br />
//               <span className="text-black/90">Artificial Intelligence</span>
//             </h2>
//             <p className="text-black/85 text-lg mb-8 leading-relaxed">
//               Harness cutting-edge AI capabilities to transform your business
//               operations, enhance decision-making, and create unprecedented
//               competitive advantages.
//             </p>
//             <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl">
//               Explore AI Solutions <FaArrowRight />
//             </button>
//           </div>
//           <div className="grid gap-4">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="bg-white/95 backdrop-blur-sm rounded-xl p-5 flex items-start gap-4 hover:bg-white hover:shadow-xl transition-all cursor-pointer shadow-md"
//               >
//                 <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center shrink-0">
//                   <feature.icon className="text-amber-500" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-slate-900 mb-1">
//                     {feature.title}
//                   </h3>
//                   <p className="text-sm text-slate-600">{feature.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== STATS SECTION ====================
// const StatsSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const stats = [
//     { value: "250+", label: "Projects Delivered", icon: FaFolderOpen },
//     { value: "50+", label: "Enterprise Clients", icon: FaBuilding },
//     { value: "99.9%", label: "Service Availability", icon: FaServer },
//     { value: "24/7", label: "Global Support", icon: FaHeadset },
//   ];

//   return (
//     <section
//       ref={ref}
//       className={`py-16 px-4 md:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <div key={index} className="text-center">
//               <div className="w-20 h-20 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto mb-4 border border-amber-100">
//                 <stat.icon className="text-3xl text-amber-600" />
//               </div>
//               <div
//                 className="mb-2 stat-number text-gradient-gold"
//                 style={{
//                   fontSize: "clamp(48px, 8vw, 80px)",
//                   fontWeight: 800,
//                   lineHeight: 1,
//                 }}
//               >
//                 {stat.value}
//               </div>
//               <div className="text-slate-600 font-medium">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <style>{`.text-gradient-gold { background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }`}</style>
//     </section>
//   );
// };

// // ==================== CTA SECTION ====================
// const CTASection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   return (
//     <section
//       ref={ref}
//       className={`py-16 px-4 md:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//       style={{
//         background:
//           "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)",
//       }}
//     >
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
//           Ready to Modernize Your{" "}
//           <span className="text-gradient-gold">Enterprise?</span>
//         </h2>
//         <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
//           From application development to enterprise integrations and AI
//           innovation, Innovise helps businesses build future-ready digital
//           ecosystems.
//         </p>
//         <div className="flex flex-wrap justify-center gap-4">
//           <button className="btn-primary px-10 py-4 rounded-xl font-semibold text-black flex items-center gap-2 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
//             Talk to Our Experts <FaComments />
//           </button>
//           <button className="px-10 py-4 rounded-xl font-semibold text-slate-700 flex items-center gap-2 text-lg shadow-md border-2 border-slate-200 bg-white hover:border-amber-500 hover:bg-amber-50 transition-all">
//             Request a Consultation <FaCalendarAlt />
//           </button>
//         </div>
//         <div className="mt-14 pt-10 border-t border-slate-300">
//           <p className="text-sm text-slate-500 mb-6 font-medium">
//             Join industry leaders who trust Innovise
//           </p>
//           <div className="flex flex-wrap justify-center items-center gap-10 opacity-50">
//             <FaPhone className="text-3xl text-slate-600" />
//             <FaAws className="text-3xl text-slate-600" />
//             <FaMicrosoft className="text-3xl text-slate-600" />
//             <FaShieldAlt className="text-3xl text-slate-600" />
//             <FaBrainIcon className="text-3xl text-slate-600" />
//           </div>
//         </div>
//       </div>
//       <style>{`
//         .text-gradient-gold { background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
//         .btn-primary { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); position: relative; overflow: hidden; }
//         .btn-primary::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); transition: left 0.5s; }
//         .btn-primary:hover::before { left: 100%; }
//       `}</style>
//     </section>
//   );
// };

// // ==================== FOOTER ====================
// const Footer = () => {
//   const footerLinks = [
//     {
//       title: "Services",
//       links: ["App Development", "Integration", "AI Solutions"],
//     },
//     { title: "Company", links: ["About Us", "Careers", "Contact"] },
//     { title: "Resources", links: ["Case Studies", "Blog", "Documentation"] },
//     {
//       title: "Contact",
//       links: ["info@innovise.com", "+1 (555) 123-4567"],
//       icons: true,
//     },
//   ];

//   return (
//     <footer className="bg-slate-900 py-14 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//           <div className="flex items-center gap-3">
//             <div
//               className="w-11 h-11 rounded-xl flex items-center justify-center shadow-lg"
//               style={{
//                 background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
//               }}
//             >
//               <FaCube className="text-black font-bold text-lg" />
//             </div>
//             <span className="text-xl font-bold text-black">Innovise IT</span>
//           </div>
//           <p className="text-slate-400 text-sm">
//             © 2024 Innovise IT Solutions. All rights reserved.
//           </p>
//           <div className="flex gap-3">
//             {[FaLinkedin, FaTwitter, FaGithub].map((SocialIcon, i) => (
//               <a
//                 key={i}
//                 href="#"
//                 className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 transition-colors group"
//               >
//                 <SocialIcon className="text-slate-400 group-hover:text-black transition-colors" />
//               </a>
//             ))}
//           </div>
//         </div>

//         <div className="mt-10 pt-8 border-t border-slate-800 grid md:grid-cols-4 gap-8 text-center md:text-left">
//           {footerLinks.map((section, i) => (
//             <div key={i}>
//               <h4 className="font-semibold text-black mb-3">{section.title}</h4>
//               <ul className="space-y-2 text-sm text-slate-400">
//                 {section.links.map((link, j) => (
//                   <li key={j}>
//                     <a
//                       href="#"
//                       className="hover:text-amber-400 transition-colors flex items-center justify-center md:justify-start gap-2"
//                     >
//                       {section.icons && j === 0 && <FaEnvelope />}
//                       {section.icons && j === 1 && <FaPhone />}
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// // ==================== MAIN PAGE COMPONENT ====================
// const ApplicationDevelopmentIntegrationAIPage = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <HeroSection />
//       <TrustedBySection />
//       <WhyInnoviseSection />
//       <ServicesSection />
//       <TransformationJourneySection />
//       <TechnologyEcosystemSection />
//       <BusinessImpactSection />
//       <IndustriesSection />
//       <CaseStudiesSection />
//       <AIInnovationSection />
//       <StatsSection />
//       <CTASection />
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default ApplicationDevelopmentIntegrationAIPage;

// import React, { useState, useEffect, useRef } from "react";
// import {
//   FaLaptopCode,
//   FaProjectDiagram,
//   FaBrain,
//   FaCloud,
//   FaShieldAlt,
//   FaCogs,
//   FaSearch,
//   FaPencilRuler,
//   FaCode,
//   FaPlug,
//   FaRocket,
//   FaChartLine,
//   FaFolderOpen,
//   FaBuilding,
//   FaServer,
//   FaHeadset,
//   FaCheckCircle,
//   FaArrowRight,
//   FaChevronDown,
//   FaComments,
//   FaCalendarAlt,
//   FaCube,
//   FaEnvelope,
//   FaPhone,
//   FaDatabase,
//   FaLock,
//   FaDollarSign,
//   FaUniversity,
//   FaHeartbeat,
//   FaShoppingCart,
//   FaIndustry,
//   FaTruck,
//   FaBolt,
//   FaLandmark,
//   FaRobot,
//   FaCloudUploadAlt,
//   FaMagic,
//   FaUsers,
//   FaBookOpen,
//   FaLinkedin,
//   FaTwitter,
//   FaGithub,
//   FaPlayCircle,
//   FaHandshake,
//   FaFlask,
//   FaStar,
//   FaAward,
//   FaGlobe,
// } from "react-icons/fa";
// import {
//   FaAws,
//   FaMicrosoft,
//   FaBrain as FaBrainIcon,
//   FaShieldHalved as FaShieldIcon,
//   FaCircleCheck as FaCheckIcon,
// } from "react-icons/fa6";
// import { motion, AnimatePresence } from "framer-motion";

// // ==================== BRAND COLORS (NAVY + GOLD) ====================
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
//     dark: "#E5A700",
//     gradient: "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
//   },
// };

// // ==================== ANIMATION CONFIG ====================
// const ANIMATION = {
//   stagger: 0.12,
//   duration: 0.6,
//   spring: { type: "spring", stiffness: 300, damping: 25 },
// };

// // ==================== SCROLL REVEAL HOOK ====================
// const useScrollReveal = (threshold = 0.1) => {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold },
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [threshold]);

//   return [ref, isVisible];
// };

// // ==================== HERO SECTION ====================
// const HeroSection = () => {
//   const floatingCards = [
//     {
//       title: "AI & Analytics",
//       icon: FaBrain,
//       desc: "ML & Automation",
//       position: "top-2 left-1/2 -translate-x-1/2",
//       color: "rgba(139,92,246,0.15)",
//       iconColor: "#A78BFA",
//       border: "rgba(139,92,246,0.3)",
//     },
//     {
//       title: "SAP",
//       icon: FaPhone,
//       desc: "ERP Solutions",
//       position: "top-1/2 -translate-y-1/2 left-2",
//       color: "rgba(59,130,246,0.15)",
//       iconColor: "#60A5FA",
//       border: "rgba(59,130,246,0.3)",
//     },
//     {
//       title: "Guidewire",
//       icon: FaShieldAlt,
//       desc: "Insurance Platform",
//       position: "top-1/2 -translate-y-1/2 right-2",
//       color: "rgba(253,185,19,0.15)",
//       iconColor: "#FDB913",
//       border: "rgba(253,185,19,0.3)",
//     },
//     {
//       title: "Applications & APIs",
//       icon: FaCode,
//       desc: "Custom Development",
//       position: "bottom-2 left-1/2 -translate-x-1/2",
//       color: "rgba(16,185,129,0.15)",
//       iconColor: "#34D399",
//       border: "rgba(16,185,129,0.3)",
//     },
//     {
//       title: "Cloud Services",
//       icon: FaCloud,
//       position: "top-1/4 left-6",
//       iconColor: "#22D3EE",
//       color: "rgba(34,211,238,0.12)",
//       border: "rgba(34,211,238,0.25)",
//       small: true,
//     },
//     {
//       title: "Data Platform",
//       icon: FaDatabase,
//       position: "top-1/4 right-6",
//       iconColor: "#FBBF24",
//       color: "rgba(251,191,36,0.12)",
//       border: "rgba(251,191,36,0.25)",
//       small: true,
//     },
//     {
//       title: "Security",
//       icon: FaLock,
//       position: "bottom-1/4 left-6",
//       iconColor: "#F87171",
//       color: "rgba(248,113,113,0.12)",
//       border: "rgba(248,113,113,0.25)",
//       small: true,
//     },
//     {
//       title: "Analytics",
//       icon: FaChartLine,
//       position: "bottom-1/4 right-6",
//       iconColor: "#34D399",
//       color: "rgba(52,211,153,0.12)",
//       border: "rgba(52,211,153,0.25)",
//       small: true,
//     },
//   ];

//   return (
//     <section
//       className="min-h-screen relative overflow-hidden pt-10 pb-10 px-4 md:px-8 bg-primary-800"
//       // style={{
//       //   background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 60%, ${BRAND.navy.lighter} 100%)`,
//       // }}
//     >
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div
//           className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//             backgroundSize: "32px 32px",
//           }}
//         />
//         <div
//           className="absolute inset-0 opacity-[0.02]"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
//             `,
//             backgroundSize: "80px 80px",
//           }}
//         />
//         <motion.div
//           animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-20 right-20 w-[450px] h-[450px] rounded-full blur-3xl opacity-[0.07]"
//           style={{ background: "#3B82F6" }}
//         />
//         <motion.div
//           animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 3,
//           }}
//           className="absolute bottom-20 left-20 w-[350px] h-[350px] rounded-full blur-3xl opacity-[0.05]"
//           style={{ background: BRAND.gold.primary }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-8"
//           >
//             <div
//               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full"
//               style={{
//                 background: "rgba(253,185,19,0.12)",
//                 border: "1px solid rgba(253,185,19,0.25)",
//               }}
//             >
//               <span
//                 className="w-2 h-2 rounded-full animate-pulse"
//                 style={{ background: BRAND.gold.primary }}
//               ></span>
//               <span
//                 className="text-sm font-semibold"
//                 style={{ color: BRAND.gold.primary }}
//               >
//                 Application Development • Integration Services • AI
//               </span>
//             </div>

//             <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-black">
//               Transforming Enterprises Through{" "}
//               <span
//                 style={{
//                   backgroundImage: BRAND.gold.gradient,
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}
//               >
//                 Intelligent Applications
//               </span>
//               , Seamless Integrations &{" "}
//               <span
//                 style={{
//                   backgroundImage: BRAND.gold.gradient,
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}
//               >
//                 AI-Powered Innovation
//               </span>
//             </h1>

//             <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
//               Innovise delivers enterprise-grade application development, system
//               integration, and AI solutions that help organizations modernize
//               operations, improve customer experiences, and accelerate digital
//               transformation.
//             </p>

//             <div className="flex flex-wrap gap-4 pt-4">
//               <button
//                 className="btn-primary px-8 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
//                 style={{
//                   background: BRAND.gold.gradient,
//                   color: BRAND.navy.dark,
//                   boxShadow: `0 10px 40px rgba(253,185,19,0.25)`,
//                 }}
//               >
//                 Schedule Consultation <FaArrowRight />
//               </button>
//               <button
//                 className="px-8 py-4 rounded-xl font-semibold text-black flex items-center gap-2 transition-all hover:-translate-y-1"
//                 style={{
//                   border: "2px solid rgba(255,255,255,0.2)",
//                   background: "rgba(255,255,255,0.05)",
//                 }}
//               >
//                 Explore Services <FaChevronDown />
//               </button>
//             </div>

//             <div
//               className="flex flex-wrap gap-8 pt-8"
//               style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
//             >
//               <div>
//                 <div
//                   className="text-3xl font-bold"
//                   style={{
//                     backgroundImage: BRAND.gold.gradient,
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                     backgroundClip: "text",
//                   }}
//                 >
//                   250+
//                 </div>
//                 <div className="text-sm text-black/50">Projects Delivered</div>
//               </div>
//               <div>
//                 <div
//                   className="text-3xl font-bold"
//                   style={{
//                     backgroundImage: BRAND.gold.gradient,
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                     backgroundClip: "text",
//                   }}
//                 >
//                   99.9%
//                 </div>
//                 <div className="text-sm text-black/50">Uptime Guarantee</div>
//               </div>
//               <div>
//                 <div
//                   className="text-3xl font-bold"
//                   style={{
//                     backgroundImage: BRAND.gold.gradient,
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                     backgroundClip: "text",
//                   }}
//                 >
//                   24/7
//                 </div>
//                 <div className="text-sm text-black/50">Global Support</div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Side - Enterprise Ecosystem Diagram */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative h-[650px] hidden lg:block"
//           >
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
//               <div className="relative">
//                 <div
//                   className="w-44 h-44 rounded-2xl flex items-center justify-center shadow-2xl"
//                   style={{
//                     background: BRAND.gold.gradient,
//                     boxShadow: "0 0 60px rgba(253,185,19,0.3)",
//                   }}
//                 >
//                   <div className="text-center">
//                     <FaGlobe className="text-4xl text-black mb-2 mx-auto" />
//                     <div
//                       className="font-bold text-base"
//                       style={{ color: BRAND.navy.dark }}
//                     >
//                       Enterprise Hub
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   className="absolute inset-0 rounded-2xl"
//                   style={{
//                     background: BRAND.gold.gradient,
//                     animation: "pulseRing 2s ease-out infinite",
//                   }}
//                 ></div>
//               </div>
//             </div>

//             <svg
//               className="absolute inset-0 w-full h-full"
//               style={{ zIndex: 10 }}
//             >
//               <line
//                 x1="50%"
//                 y1="32%"
//                 x2="50%"
//                 y2="12%"
//                 stroke="#FDB913"
//                 strokeWidth="2"
//                 strokeDasharray="8,8"
//                 opacity="0.4"
//               />
//               <line
//                 x1="50%"
//                 y1="68%"
//                 x2="50%"
//                 y2="88%"
//                 stroke="#FDB913"
//                 strokeWidth="2"
//                 strokeDasharray="8,8"
//                 opacity="0.4"
//               />
//               <line
//                 x1="32%"
//                 y1="50%"
//                 x2="12%"
//                 y2="50%"
//                 stroke="#FDB913"
//                 strokeWidth="2"
//                 strokeDasharray="8,8"
//                 opacity="0.4"
//               />
//               <line
//                 x1="68%"
//                 y1="50%"
//                 x2="88%"
//                 y2="50%"
//                 stroke="#FDB913"
//                 strokeWidth="2"
//                 strokeDasharray="8,8"
//                 opacity="0.4"
//               />
//             </svg>

//             {floatingCards.map((card, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.3 + index * 0.1 }}
//                 className={`absolute ${card.position} backdrop-blur-xl p-5 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105`}
//                 style={{
//                   background: "rgba(11,29,51,0.85)",
//                   border: `1px solid ${card.border}`,
//                   boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
//                   animation: `float 6s ease-in-out infinite`,
//                   animationDelay: `${index * -1}s`,
//                 }}
//               >
//                 <div className="flex items-center gap-4">
//                   <div
//                     className="w-12 h-12 rounded-xl flex items-center justify-center"
//                     style={{
//                       background: card.color,
//                       border: `1px solid ${card.border}`,
//                     }}
//                   >
//                     <card.icon
//                       className="text-xl"
//                       style={{ color: card.iconColor }}
//                     />
//                   </div>
//                   {!card.small && (
//                     <div>
//                       <div className="font-bold text-black text-sm">
//                         {card.title}
//                       </div>
//                       <div className="text-xs text-black/50">{card.desc}</div>
//                     </div>
//                   )}
//                   {card.small && (
//                     <span className="text-sm font-semibold text-black/80">
//                       {card.title}
//                     </span>
//                   )}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-15px); }
//         }
//         @keyframes pulseRing {
//           0% { transform: scale(1); opacity: 0.6; }
//           100% { transform: scale(1.5); opacity: 0; }
//         }
//         .btn-primary { position: relative; overflow: hidden; }
//         .btn-primary::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); transition: left 0.5s; }
//         .btn-primary:hover::before { left: 100%; }
//       `}</style>
//     </section>
//   );
// };

// // ==================== TRUSTED BY SECTION ====================
// const TrustedBySection = () => {
//   const partners = [
//     { name: "SAP", icon: FaPhone },
//     { name: "Guidewire", icon: FaShieldAlt },
//     { name: "Tricentis", icon: FaCheckIcon },
//     { name: "Onapsis", icon: FaShieldIcon },
//   ];

//   return (
//     <section
//       className="py-14 relative overflow-hidden"
//       style={{
//         background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-4 md:px-8">
//         <p className="text-center text-sm uppercase tracking-wider mb-8 font-medium text-black/40">
//           Trusted by Leading Enterprises Worldwide
//         </p>
//         <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
//           {partners.map((partner, index) => (
//             <div
//               key={index}
//               className="group flex items-center gap-3 opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer"
//             >
//               <partner.icon className="text-2xl md:text-3xl text-black/50 group-hover:text-[#FDB913] transition-colors" />
//               <span className="text-lg md:text-xl font-semibold text-black/50 group-hover:text-black transition-colors">
//                 {partner.name}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== WHY INNOVISE SECTION ====================
// const WhyInnoviseSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const cards = [
//     {
//       title: "Application Development",
//       icon: FaLaptopCode,
//       features: [
//         "Web Applications",
//         "Mobile Apps",
//         "Enterprise Platforms",
//         "Cloud Native Solutions",
//       ],
//       gradient: "linear-gradient(135deg, #3B82F6, #06B6D4)",
//       color: "#3B82F6",
//     },
//     {
//       title: "Integration Services",
//       icon: FaProjectDiagram,
//       features: [
//         "SAP Integration",
//         "Guidewire Integration",
//         "API Development",
//         "Middleware Solutions",
//       ],
//       gradient: "linear-gradient(135deg, #8B5CF6, #EC4899)",
//       color: "#8B5CF6",
//     },
//     {
//       title: "Artificial Intelligence",
//       icon: FaBrain,
//       features: [
//         "Generative AI",
//         "Automation",
//         "Predictive Analytics",
//         "Machine Learning",
//       ],
//       gradient: BRAND.gold.gradient,
//       color: BRAND.gold.primary,
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="py-16 px-4 md:px-8 bg-white relative overflow-hidden"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div
//         className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.03] translate-x-1/3 -translate-y-1/3"
//         style={{ background: BRAND.navy.lighter }}
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <span
//             className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
//             style={{
//               background: "rgba(253,185,19,0.1)",
//               color: BRAND.navy.dark,
//               border: "1px solid rgba(253,185,19,0.2)",
//             }}
//           >
//             Why Choose Innovise
//           </span>
//           <h2
//             className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto leading-tight"
//             style={{ color: BRAND.navy.dark }}
//           >
//             Engineering Business Growth Through{" "}
//             <span
//               style={{
//                 backgroundImage: BRAND.gold.gradient,
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Technology Excellence
//             </span>
//           </h2>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {cards.map((card, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * ANIMATION.stagger }}
//               whileHover={{ y: -8 }}
//               className="group cursor-pointer"
//             >
//               <div
//                 className="h-full rounded-3xl p-8 overflow-hidden transition-all duration-500"
//                 style={{
//                   background:
//                     "linear-gradient(135deg, #0A1A2F 0%, #102B4C 50%, #163B66 100%)",
//                   border: "1px solid rgba(255,255,255,0.06)",
//                   boxShadow: "0 10px 35px rgba(8,28,52,0.20)",
//                 }}
//               >
//                 <div
//                   className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//                   style={{ background: `${card.color}20` }}
//                 />

//                 <div
//                   className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
//                   style={{
//                     background: `${card.color}20`,
//                     border: `1px solid ${card.color}40`,
//                   }}
//                 >
//                   <card.icon
//                     className="text-2xl"
//                     style={{ color: card.color }}
//                   />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-5 text-black group-hover:text-[#FDB913] transition-colors">
//                   {card.title}
//                 </h3>
//                 <ul className="space-y-3">
//                   {card.features.map((feature, idx) => (
//                     <li
//                       key={idx}
//                       className="flex items-center gap-3 text-black/70"
//                     >
//                       <FaCheckCircle
//                         className="text-sm"
//                         style={{ color: BRAND.gold.primary }}
//                       />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== SERVICES SECTION ====================
// const ServicesSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const services = [
//     {
//       title: "Custom Application Development",
//       icon: FaLaptopCode,
//       desc: "Tailored solutions built for your unique business needs",
//       color: "#3B82F6",
//       status: "DEV",
//     },
//     {
//       title: "Enterprise Integrations",
//       icon: FaProjectDiagram,
//       desc: "Seamless connectivity across your entire tech stack",
//       color: "#8B5CF6",
//       status: "CONNECT",
//     },
//     {
//       title: "AI & Automation",
//       icon: FaBrain,
//       desc: "Intelligent automation to drive efficiency and innovation",
//       color: BRAND.gold.primary,
//       status: "AI",
//     },
//     {
//       title: "Cloud Engineering",
//       icon: FaCloud,
//       desc: "Scalable cloud infrastructure and migration services",
//       color: "#06B6D4",
//       status: "CLOUD",
//     },
//     {
//       title: "Quality Assurance",
//       icon: FaShieldAlt,
//       desc: "Comprehensive testing for flawless performance",
//       color: "#10B981",
//       status: "QA",
//     },
//     {
//       title: "Managed Services",
//       icon: FaCogs,
//       desc: "24/7 monitoring and support for peace of mind",
//       color: "#F59E0B",
//       status: "ACTIVE",
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="py-16 px-4 md:px-8 relative overflow-hidden bg-primary-800"
//       style={{
//         // background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 100%)`,
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       {/* <div className="absolute top-0 left-0 w-96 h-96 bg-[#FDB913]/10 blur-3xl rounded-full"></div>
//       <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#102B4C] blur-3xl rounded-full"></div> */}

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <span
//             className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border"
//             style={{
//               background: "rgba(253,185,19,0.12)",
//               color: "#FDB913",
//               borderColor: "rgba(253,185,19,0.25)",
//             }}
//           >
//             Our Services
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
//             Comprehensive{" "}
//             <span style={{ color: "#FDB913" }}>Digital Solutions</span>
//           </h2>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * ANIMATION.stagger }}
//               whileHover={{ y: -8 }}
//               className="group cursor-pointer"
//             >
//               <div
//                 className="relative h-full rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-700"
//                 style={{
//                   background: "rgba(255,255,255,0.04)",
//                   border: "1px solid rgba(255,255,255,0.08)",
//                   boxShadow: "0 10px 35px rgba(0,0,0,0.2)",
//                 }}
//               >
//                 {/* Top Accent */}
//                 <div
//                   className="absolute top-0 left-0 right-0 h-1 origin-left group-hover:scale-x-100 scale-x-0 transition-transform duration-400"
//                   style={{
//                     background: `linear-gradient(90deg, ${service.color}, transparent)`,
//                   }}
//                 />

//                 {/* Status Badge */}
//                 <div className="absolute top-5 right-5 z-20">
//                   <span
//                     className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
//                     style={{
//                       background: `${service.color}15`,
//                       color: service.color,
//                       border: `1px solid ${service.color}30`,
//                     }}
//                   >
//                     <motion.span
//                       animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
//                       transition={{ duration: 2, repeat: Infinity }}
//                       className="w-1.5 h-1.5 rounded-full inline-block"
//                       style={{ background: service.color }}
//                     />
//                     {service.status}
//                   </span>
//                 </div>

//                 {/* Glow */}
//                 <div
//                   className="absolute top-0 right-0 w-40 h-40 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
//                   style={{ background: `${service.color}15` }}
//                 />

//                 <div className="relative z-10 p-8 pt-16">
//                   <div
//                     className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
//                     style={{
//                       background: `${service.color}15`,
//                       border: `1px solid ${service.color}30`,
//                     }}
//                   >
//                     <service.icon
//                       className="text-xl"
//                       style={{ color: service.color }}
//                     />
//                   </div>
//                   <h3 className="text-lg font-bold mb-2 text-black group-hover:text-[#FDB913] transition-colors">
//                     {service.title}
//                   </h3>
//                   <p className="text-sm text-black/50 leading-relaxed">
//                     {service.desc}
//                   </p>
//                   <div
//                     className="mt-4 pt-4 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
//                     style={{
//                       color: service.color,
//                       borderTop: "1px solid rgba(255,255,255,0.06)",
//                     }}
//                   >
//                     Learn More <FaArrowRight className="text-xs" />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== TRANSFORMATION JOURNEY SECTION ====================
// const TransformationJourneySection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const steps = [
//     {
//       title: "Discover",
//       icon: FaSearch,
//       desc: "Analyze requirements and identify opportunities",
//       color: "#3B82F6",
//     },
//     {
//       title: "Design",
//       icon: FaPencilRuler,
//       desc: "Create architecture and user experience blueprints",
//       color: "#F59E0B",
//     },
//     {
//       title: "Develop",
//       icon: FaCode,
//       desc: "Build robust, scalable applications",
//       color: "#10B981",
//     },
//     {
//       title: "Integrate",
//       icon: FaPlug,
//       desc: "Connect systems and data flows seamlessly",
//       color: "#8B5CF6",
//     },
//     {
//       title: "Deploy",
//       icon: FaRocket,
//       desc: "Launch with confidence and minimal disruption",
//       color: BRAND.gold.primary,
//     },
//     {
//       title: "Optimize",
//       icon: FaChartLine,
//       desc: "Continuously improve performance and ROI",
//       color: "#06B6D4",
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="py-16 px-4 md:px-8 bg-white relative overflow-hidden"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <span
//             className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
//             style={{
//               background: "rgba(253,185,19,0.1)",
//               color: BRAND.navy.dark,
//               border: "1px solid rgba(253,185,19,0.2)",
//             }}
//           >
//             Our Process
//           </span>
//           <h2
//             className="text-3xl md:text-4xl lg:text-5xl font-bold"
//             style={{ color: BRAND.navy.dark }}
//           >
//             Digital Transformation{" "}
//             <span
//               style={{
//                 backgroundImage: BRAND.gold.gradient,
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Journey
//             </span>
//           </h2>
//         </div>

//         {/* Desktop View */}
//         <div className="hidden lg:block">
//           <div className="grid grid-cols-6 gap-4">
//             {steps.map((step, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="group relative"
//               >
//                 <div
//                   className="h-full p-6 rounded-3xl transition-all duration-500 hover:-translate-y-2"
//                   style={{
//                     background: "white",
//                     border: `1px solid rgba(0,0,0,0.08)`,
//                     boxShadow: "0 4px 20px rgba(11,29,51,0.06)",
//                   }}
//                 >
//                   <div
//                     className="absolute top-4 right-4 text-4xl font-black opacity-5"
//                     style={{ color: BRAND.navy.dark }}
//                   >
//                     {index + 1}
//                   </div>

//                   <div
//                     className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg"
//                     style={{
//                       background: BRAND.gold.gradient,
//                       boxShadow: `0 8px 24px rgba(253,185,19,0.25)`,
//                     }}
//                   >
//                     <step.icon
//                       className="text-xl"
//                       style={{ color: BRAND.navy.dark }}
//                     />
//                   </div>

//                   <h4
//                     className="text-lg font-bold mb-1"
//                     style={{ color: BRAND.navy.dark }}
//                   >
//                     {step.title}
//                   </h4>
//                   <p
//                     className="text-xs font-semibold uppercase tracking-wider mb-2"
//                     style={{ color: BRAND.gold.primary }}
//                   >
//                     Step {index + 1}
//                   </p>
//                   <p className="text-sm leading-relaxed text-slate-500">
//                     {step.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Mobile View */}
//         <div className="lg:hidden space-y-8">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="flex gap-5"
//             >
//               <div className="flex flex-col items-center">
//                 <div
//                   className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
//                   style={{
//                     background: BRAND.gold.gradient,
//                     boxShadow: `0 8px 24px rgba(253,185,19,0.25)`,
//                   }}
//                 >
//                   <step.icon
//                     className="text-lg"
//                     style={{ color: BRAND.navy.dark }}
//                   />
//                 </div>
//                 {index < steps.length - 1 && (
//                   <div
//                     className="w-0.5 flex-1 mt-3"
//                     style={{
//                       background: `linear-gradient(to bottom, ${BRAND.gold.primary}, rgba(253,185,19,0.1))`,
//                     }}
//                   />
//                 )}
//               </div>
//               <div className="pb-8">
//                 <h4
//                   className="font-bold text-lg mb-1"
//                   style={{ color: BRAND.navy.dark }}
//                 >
//                   {step.title}
//                 </h4>
//                 <p
//                   className="text-xs font-semibold uppercase tracking-wider mb-2"
//                   style={{ color: BRAND.gold.primary }}
//                 >
//                   Step {index + 1}
//                 </p>
//                 <p className="text-sm leading-relaxed text-slate-500">
//                   {step.desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== TECHNOLOGY ECOSYSTEM SECTION ====================
// const TechnologyEcosystemSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const ecosystems = {
//     Enterprise: ["SAP", "Guidewire", "Salesforce", "Oracle"],
//     Development: ["React", "Angular", "Node.js", "Java", ".NET"],
//     Cloud: ["AWS", "Azure", "Google Cloud"],
//     AI: ["OpenAI", "Machine Learning", "Automation", "Analytics"],
//   };

//   const categoryIcons = {
//     Enterprise: FaBuilding,
//     Development: FaCode,
//     Cloud: FaCloud,
//     AI: FaBrain,
//   };

//   const categoryColors = {
//     Enterprise: "#3B82F6",
//     Development: "#10B981",
//     Cloud: "#06B6D4",
//     AI: BRAND.gold.primary,
//   };

//   return (
//     <section
//       ref={ref}
//       className="py-12 px-4 md:px-8 relative overflow-hidden bg-primary-800"
//       style={{
//         // background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//           backgroundSize: "32px 32px",
//         }}
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <span
//             className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border"
//             style={{
//               background: "rgba(253,185,19,0.12)",
//               color: "#FDB913",
//               borderColor: "rgba(253,185,19,0.25)",
//             }}
//           >
//             Technology Stack
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
//             Our Technology <span style={{ color: "#FDB913" }}>Ecosystem</span>
//           </h2>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {Object.entries(ecosystems).map(
//             ([category, technologies], catIndex) => {
//               const Icon = categoryIcons[category];
//               const color = categoryColors[category];
//               return (
//                 <motion.div
//                   key={catIndex}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: catIndex * 0.1 }}
//                   whileHover={{ y: -6 }}
//                   className="rounded-2xl p-6 transition-all duration-300"
//                   style={{
//                     background: "rgba(255,255,255,0.04)",
//                     border: "1px solid rgba(255,255,255,0.08)",
//                     boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
//                   }}
//                 >
//                   <div className="flex items-center gap-3 mb-5">
//                     <div
//                       className="w-10 h-10 rounded-lg flex items-center justify-center"
//                       style={{
//                         background: `${color}15`,
//                         border: `1px solid ${color}30`,
//                       }}
//                     >
//                       <Icon className="text-base" style={{ color }} />
//                     </div>
//                     <h3 className="text-lg font-bold" style={{ color }}>
//                       {category}
//                     </h3>
//                   </div>
//                   <div className="flex flex-wrap gap-2">
//                     {technologies.map((tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className="px-4 py-2 rounded-full text-sm cursor-default font-medium transition-all hover:scale-105"
//                         style={{
//                           background: "rgba(255,255,255,0.05)",
//                           border: "1px solid rgba(255,255,255,0.1)",
//                           color: "rgba(255,255,255,0.7)",
//                         }}
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </motion.div>
//               );
//             },
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== BUSINESS IMPACT SECTION ====================
// const BusinessImpactSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const metrics = [
//     {
//       value: "40%",
//       label: "Faster Delivery",
//       icon: FaRocket,
//       color: BRAND.gold.primary,
//     },
//     {
//       value: "60%",
//       label: "Reduction in Manual Processes",
//       icon: FaCogs,
//       color: "#10B981",
//     },
//     {
//       value: "99.9%",
//       label: "System Availability",
//       icon: FaServer,
//       color: "#3B82F6",
//     },
//     {
//       value: "30%",
//       label: "Lower Operational Costs",
//       icon: FaDollarSign,
//       color: "#8B5CF6",
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="py-8 px-4 md:px-8 relative overflow-hidden bg-primary-800"
//       style={{
//         // background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 50%, ${BRAND.navy.lighter} 100%)`,
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//           backgroundSize: "32px 32px",
//         }}
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-6">
//           <span
//             className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border"
//             style={{
//               // background: "rgba(253,185,19,0.12)",
//               color: "#FDB913",
//               borderColor: "rgba(253,185,19,0.25)",
//             }}
//           >
//             Results That Matter
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
//             Delivering Measurable{" "}
//             <span style={{ color: "#FDB913" }}>Business Impact</span>
//           </h2>
//         </div>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {metrics.map((metric, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -8, scale: 1.02 }}
//               className="text-center rounded-3xl p-8 border border-white/10 backdrop-blur-xl"
//               style={{ background: "rgba(255,255,255,0.05)" }}
//             >
//               <div
//                 className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
//                 style={{
//                   background: `${metric.color}15`,
//                   border: `1px solid ${metric.color}30`,
//                 }}
//               >
//                 <metric.icon
//                   className="text-2xl"
//                   style={{ color: metric.color }}
//                 />
//               </div>
//               <div
//                 className="text-black mb-2"
//                 style={{
//                   fontSize: "clamp(48px, 8vw, 80px)",
//                   fontWeight: 800,
//                   lineHeight: 1,
//                 }}
//               >
//                 {metric.value}
//               </div>
//               <div className="text-black/50 font-medium">{metric.label}</div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== INDUSTRIES SECTION ====================
// const IndustriesSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const industries = [
//     { name: "Insurance", icon: FaShieldAlt, color: "#3B82F6" },
//     { name: "Banking", icon: FaUniversity, color: "#10B981" },
//     { name: "Healthcare", icon: FaHeartbeat, color: "#EF4444" },
//     { name: "Retail", icon: FaShoppingCart, color: "#8B5CF6" },
//     { name: "Manufacturing", icon: FaIndustry, color: "#F59E0B" },
//     { name: "Logistics", icon: FaTruck, color: "#06B6D4" },
//     { name: "Energy", icon: FaBolt, color: BRAND.gold.primary },
//     { name: "Public Sector", icon: FaLandmark, color: "#64748B" },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="py-16 px-4 md:px-8 bg-white relative overflow-hidden"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <span
//             className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
//             style={{
//               background: "rgba(253,185,19,0.1)",
//               color: BRAND.navy.dark,
//               border: "1px solid rgba(253,185,19,0.2)",
//             }}
//           >
//             Industries We Serve
//           </span>
//           <h2
//             className="text-3xl md:text-4xl lg:text-5xl font-bold"
//             style={{ color: BRAND.navy.dark }}
//           >
//             Expertise Across{" "}
//             <span
//               style={{
//                 backgroundImage: BRAND.gold.gradient,
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Industries
//             </span>
//           </h2>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
//           {industries.map((industry, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.08 }}
//               whileHover={{ y: -8, scale: 1.05 }}
//               className="group cursor-pointer"
//             >
//               <div
//                 className="rounded-2xl p-6 text-center transition-all duration-500"
//                 style={{
//                   background: "white",
//                   border: "1px solid rgba(0,0,0,0.06)",
//                   boxShadow: "0 4px 20px rgba(11,29,51,0.06)",
//                 }}
//               >
//                 <div
//                   className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
//                   style={{
//                     background: `${industry.color}12`,
//                     border: `1px solid ${industry.color}25`,
//                   }}
//                 >
//                   <industry.icon
//                     className="text-2xl"
//                     style={{ color: industry.color }}
//                   />
//                 </div>
//                 <h3
//                   className="font-semibold"
//                   style={{ color: BRAND.navy.dark }}
//                 >
//                   {industry.name}
//                 </h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== CASE STUDIES SECTION ====================
// const CaseStudiesSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const cases = [
//     {
//       title: "Enterprise Integration Program",
//       description:
//         "Connected SAP, CRM and third-party systems through a centralized integration layer.",
//       results: [
//         "45% Faster Processing",
//         "Reduced Data Errors",
//         "Improved User Experience",
//       ],
//       icon: FaProjectDiagram,
//       color: "#3B82F6",
//     },
//     {
//       title: "AI Automation Initiative",
//       description:
//         "Implemented intelligent automation reducing manual workload by 70% while improving accuracy.",
//       results: [
//         "70% Less Manual Work",
//         "95% Accuracy Rate",
//         "$2M Annual Savings",
//       ],
//       icon: FaRobot,
//       color: "#8B5CF6",
//     },
//     {
//       title: "Cloud Modernization Project",
//       description:
//         "Migrated legacy on-premise infrastructure to AWS with zero downtime.",
//       results: [
//         "Zero Downtime Migration",
//         "60% Cost Reduction",
//         "Auto-scaling Enabled",
//       ],
//       icon: FaCloudUploadAlt,
//       color: BRAND.gold.primary,
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="py-12 px-4 md:px-8 relative overflow-hidden bg-primary-800"
//       style={{
//         // background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.mid})`,
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//           backgroundSize: "32px 32px",
//         }}
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <span
//             className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border"
//             style={{
//               background: "rgba(253,185,19,0.12)",
//               color: "#FDB913",
//               borderColor: "rgba(253,185,19,0.25)",
//             }}
//           >
//             Success Stories
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
//             Featured <span style={{ color: "#FDB913" }}>Case Studies</span>
//           </h2>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {cases.map((caseStudy, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.15 }}
//               whileHover={{ y: -8 }}
//               className="group cursor-pointer"
//             >
//               <div
//                 className="rounded-3xl overflow-hidden backdrop-blur-xl"
//                 style={{
//                   background: "rgba(255,255,255,0.04)",
//                   border: "1px solid rgba(255,255,255,0.08)",
//                   boxShadow: "0 10px 35px rgba(0,0,0,0.2)",
//                 }}
//               >
//                 {/* Top Accent */}
//                 <div
//                   className="h-1"
//                   style={{
//                     background: `linear-gradient(90deg, ${caseStudy.color}, transparent)`,
//                   }}
//                 />

//                 <div className="p-8">
//                   <div
//                     className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
//                     style={{
//                       background: `${caseStudy.color}15`,
//                       border: `1px solid ${caseStudy.color}30`,
//                     }}
//                   >
//                     <caseStudy.icon
//                       className="text-xl"
//                       style={{ color: caseStudy.color }}
//                     />
//                   </div>
//                   <h3 className="text-xl font-bold mb-3 text-black group-hover:text-[#FDB913] transition-colors">
//                     {caseStudy.title}
//                   </h3>
//                   <p className="text-black/50 mb-6 text-sm leading-relaxed">
//                     {caseStudy.description}
//                   </p>
//                   <div
//                     style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
//                     className="pt-4"
//                   >
//                     <p
//                       className="text-xs uppercase tracking-wider mb-3 font-semibold"
//                       style={{ color: BRAND.gold.primary }}
//                     >
//                       Key Results:
//                     </p>
//                     <ul className="space-y-2">
//                       {caseStudy.results.map((result, idx) => (
//                         <li
//                           key={idx}
//                           className="flex items-center gap-2 text-sm text-black/70"
//                         >
//                           <FaCheckCircle
//                             className="text-xs"
//                             style={{ color: BRAND.gold.primary }}
//                           />
//                           <span>{result}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <button
//                     className="mt-6 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
//                     style={{ color: caseStudy.color }}
//                   >
//                     Read Full Case Study <FaArrowRight />
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== AI INNOVATION SECTION ====================
// const AIInnovationSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const features = [
//     {
//       title: "Generative AI Solutions",
//       icon: FaMagic,
//       desc: "Create content, code, and insights automatically",
//     },
//     {
//       title: "Intelligent Automation",
//       icon: FaRobot,
//       desc: "Streamline workflows with smart automation",
//     },
//     {
//       title: "Predictive Analytics",
//       icon: FaChartLine,
//       desc: "Forecast trends and make data-driven decisions",
//     },
//     {
//       title: "AI-Powered Experiences",
//       icon: FaUsers,
//       desc: "Deliver personalized customer interactions",
//     },
//     {
//       title: "Knowledge Management",
//       icon: FaBookOpen,
//       desc: "Organize and retrieve information intelligently",
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="py-16 px-4 md:px-8 relative overflow-hidden"
//       style={{
//         background: BRAND.gold.light,
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div
//         className="absolute inset-0 opacity-[0.06]"
//         style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, ${BRAND.navy.dark} 1px, transparent 0)`,
//           backgroundSize: "24px 24px",
//         }}
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div>
//             <p
//               className="font-bold mb-4 uppercase tracking-wider text-sm"
//               style={{ color: BRAND.navy.dark }}
//             >
//               AI Innovation
//             </p>
//             <h2
//               className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
//               style={{ color: BRAND.navy.dark }}
//             >
//               Unlock the Power of
//               <br />
//               <span style={{ color: BRAND.navy.mid }}>
//                 Artificial Intelligence
//               </span>
//             </h2>
//             <p
//               className="text-lg mb-8 leading-relaxed"
//               style={{ color: BRAND.navy.light }}
//             >
//               Harness cutting-edge AI capabilities to transform your business
//               operations, enhance decision-making, and create unprecedented
//               competitive advantages.
//             </p>
//             <button
//               className="px-8 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
//               style={{
//                 background: BRAND.navy.dark,
//                 color: BRAND.gold.primary,
//               }}
//             >
//               Explore AI Solutions <FaArrowRight />
//             </button>
//           </div>
//           <div className="grid gap-4">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ x: -4 }}
//                 className="rounded-xl p-5 flex items-start gap-4 cursor-pointer shadow-md transition-all hover:shadow-xl"
//                 style={{
//                   background: "rgba(255,255,255,0.95)",
//                   backdropFilter: "blur(8px)",
//                 }}
//               >
//                 <div
//                   className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
//                   style={{ background: BRAND.navy.dark }}
//                 >
//                   <feature.icon style={{ color: BRAND.gold.primary }} />
//                 </div>
//                 <div>
//                   <h3
//                     className="font-bold mb-1"
//                     style={{ color: BRAND.navy.dark }}
//                   >
//                     {feature.title}
//                   </h3>
//                   <p className="text-sm" style={{ color: BRAND.navy.light }}>
//                     {feature.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== STATS SECTION ====================
// const StatsSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const stats = [
//     {
//       value: "250+",
//       label: "Projects Delivered",
//       icon: FaFolderOpen,
//       color: BRAND.gold.primary,
//     },
//     {
//       value: "50+",
//       label: "Enterprise Clients",
//       icon: FaBuilding,
//       color: "#3B82F6",
//     },
//     {
//       value: "99.9%",
//       label: "Service Availability",
//       icon: FaServer,
//       color: "#10B981",
//     },
//     {
//       value: "24/7",
//       label: "Global Support",
//       icon: FaHeadset,
//       color: "#8B5CF6",
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="py-12 px-4 md:px-8 bg-white relative overflow-hidden"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="text-center"
//             >
//               <div
//                 className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4"
//                 style={{
//                   background: `${stat.color}12`,
//                   border: `1px solid ${stat.color}25`,
//                 }}
//               >
//                 <stat.icon className="text-3xl" style={{ color: stat.color }} />
//               </div>
//               <div
//                 className="mb-2"
//                 style={{
//                   fontSize: "clamp(48px, 8vw, 80px)",
//                   fontWeight: 800,
//                   lineHeight: 1,
//                   backgroundImage: BRAND.gold.gradient,
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}
//               >
//                 {stat.value}
//               </div>
//               <div className="text-slate-600 font-medium">{stat.label}</div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== CTA SECTION ====================
// const CTABannerSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   return (
//     <section
//       ref={ref}
//       className="py-16 px-4 md:px-8 relative overflow-hidden bg-primary-800"
//       style={{
//         // background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, #0A1628 50%, ${BRAND.navy.mid} 100%)`,
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div
//         className="absolute inset-0 opacity-[0.04]"
//         style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//           backgroundSize: "32px 32px",
//         }}
//       />

//       <motion.div
//         animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-10 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.08]"
//         style={{ background: "#3B82F6" }}
//       />
//       <motion.div
//         animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 2,
//         }}
//         className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.06]"
//         style={{ background: BRAND.gold.primary }}
//       />

//       <div className="max-w-5xl mx-auto px-4 lg:px-8 relative z-10 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//             className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8"
//             style={{
//               background: "rgba(253,185,19,0.12)",
//               border: "2px solid rgba(253,185,19,0.25)",
//             }}
//           >
//             <FaRocket
//               className="text-3xl"
//               style={{ color: BRAND.gold.primary }}
//             />
//           </motion.div>

//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
//             Ready to Modernize Your{" "}
//             <span
//               style={{
//                 backgroundImage: BRAND.gold.gradient,
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Enterprise?
//             </span>
//           </h2>

//           <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
//             From application development to enterprise integrations and AI
//             innovation, Innovise helps businesses build future-ready digital
//             ecosystems.
//           </p>

//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
//             <a
//               href="/contact"
//               className="group relative px-10 py-5 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
//               style={{
//                 background: BRAND.gold.gradient,
//                 color: BRAND.navy.dark,
//                 boxShadow: `0 10px 40px rgba(253,185,19,0.25)`,
//               }}
//             >
//               <span className="relative z-10 flex items-center gap-3">
//                 Talk to Our Experts
//                 <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
//               </span>
//               <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
//                 <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
//               </div>
//             </a>

//             <a
//               href="/contact"
//               className="group px-8 py-5 rounded-xl font-bold text-lg text-black flex items-center gap-3 transition-all duration-300"
//               style={{
//                 border: "2px solid rgba(255,255,255,0.2)",
//                 background: "rgba(255,255,255,0.05)",
//               }}
//             >
//               <FaPlayCircle style={{ color: BRAND.gold.primary }} />
//               Request a Consultation
//             </a>
//           </div>

//           <div
//             className="flex flex-wrap items-center justify-center gap-8 pt-8"
//             style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
//           >
//             {[
//               { value: "Free Assessment", icon: FaSearch },
//               { value: "Proof of Concept", icon: FaFlask },
//               { value: "Flexible Engagement", icon: FaHandshake },
//             ].map((item, idx) => (
//               <div key={idx} className="flex items-center gap-2 text-black/60">
//                 <item.icon
//                   className="text-sm"
//                   style={{ color: BRAND.gold.primary }}
//                 />
//                 <span className="text-sm font-medium">{item.value}</span>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // ==================== FOOTER ====================
// const Footer = () => {
//   const footerLinks = [
//     {
//       title: "Services",
//       links: ["App Development", "Integration", "AI Solutions"],
//     },
//     { title: "Company", links: ["About Us", "Careers", "Contact"] },
//     { title: "Resources", links: ["Case Studies", "Blog", "Documentation"] },
//     {
//       title: "Contact",
//       links: ["info@innovise.com", "+1 (555) 123-4567"],
//       icons: true,
//     },
//   ];

//   return (
//     <footer
//       className="py-14 px-4 md:px-8"
//       style={{ background: BRAND.navy.dark }}
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//           <div className="flex items-center gap-3">
//             <div
//               className="w-11 h-11 rounded-xl flex items-center justify-center shadow-lg"
//               style={{ background: BRAND.gold.gradient }}
//             >
//               <FaCube className="text-black text-lg" />
//             </div>
//             <span className="text-xl font-bold text-black">Innovise IT</span>
//           </div>
//           <p className="text-black/30 text-sm">
//             © 2024 Innovise IT Solutions. All rights reserved.
//           </p>
//           <div className="flex gap-3">
//             {[FaLinkedin, FaTwitter, FaGithub].map((SocialIcon, i) => (
//               <a
//                 key={i}
//                 href="#"
//                 className="w-10 h-10 rounded-full flex items-center justify-center transition-colors group"
//                 style={{
//                   background: "rgba(255,255,255,0.05)",
//                   border: "1px solid rgba(255,255,255,0.08)",
//                 }}
//               >
//                 <SocialIcon className="text-black/40 group-hover:text-[#FDB913] transition-colors" />
//               </a>
//             ))}
//           </div>
//         </div>

//         <div
//           className="mt-10 pt-8 grid md:grid-cols-4 gap-8 text-center md:text-left"
//           style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
//         >
//           {footerLinks.map((section, i) => (
//             <div key={i}>
//               <h4 className="font-semibold text-black mb-3">{section.title}</h4>
//               <ul className="space-y-2 text-sm text-black/40">
//                 {section.links.map((link, j) => (
//                   <li key={j}>
//                     <a
//                       href="#"
//                       className="hover:text-[#FDB913] transition-colors flex items-center justify-center md:justify-start gap-2"
//                     >
//                       {section.icons && j === 0 && <FaEnvelope />}
//                       {section.icons && j === 1 && <FaPhone />}
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// // ==================== MAIN PAGE COMPONENT ====================
// const ApplicationDevelopmentIntegrationAIPage = () => {
//   return (
//     <div className="min-h-screen" style={{ background: "#ffffff" }}>
//       <HeroSection />
//       {/* <TrustedBySection /> */}
//       <WhyInnoviseSection />
//       <ServicesSection />
//       <TransformationJourneySection />
//       <TechnologyEcosystemSection />
//       <BusinessImpactSection />
//       <IndustriesSection />
//       <CaseStudiesSection />
//       <AIInnovationSection />
//       <StatsSection />
//       <CTABannerSection />
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default ApplicationDevelopmentIntegrationAIPage;

// import React, { useState, useEffect, useRef } from "react";
// import {
//   FaLaptopCode,
//   FaProjectDiagram,
//   FaBrain,
//   FaCloud,
//   FaShieldAlt,
//   FaCogs,
//   FaSearch,
//   FaPencilRuler,
//   FaCode,
//   FaPlug,
//   FaRocket,
//   FaChartLine,
//   FaFolderOpen,
//   FaBuilding,
//   FaServer,
//   FaHeadset,
//   FaCheckCircle,
//   FaArrowRight,
//   FaChevronDown,
//   FaCube,
//   FaEnvelope,
//   FaPhone,
//   FaDatabase,
//   FaLock,
//   FaDollarSign,
//   FaUniversity,
//   FaHeartbeat,
//   FaShoppingCart,
//   FaIndustry,
//   FaTruck,
//   FaBolt,
//   FaLandmark,
//   FaRobot,
//   FaCloudUploadAlt,
//   FaMagic,
//   FaUsers,
//   FaBookOpen,
//   FaLinkedin,
//   FaTwitter,
//   FaGithub,
//   FaPlayCircle,
//   FaHandshake,
//   FaFlask,
//   FaStar,
//   FaAward,
//   FaGlobe,
// } from "react-icons/fa";
// import {
//   FaAws,
//   FaMicrosoft,
//   FaBrain as FaBrainIcon,
//   FaShieldHalved as FaShieldIcon,
//   FaCircleCheck as FaCheckIcon,
// } from "react-icons/fa6";
// import { motion } from "framer-motion";

// // ==================== BRAND COLORS (NAVY + GOLD) ====================
// const BRAND = {
//   navy: {
//     dark: "#0B1D33",
//     mid: "#12324f",
//     light: "#143A63",
//     lighter: "#1A4570",
//   },
//   gold: {
//     primary: "#FDB913",
//     light: "#FFD54F",
//     dark: "#E5A700",
//     gradient: "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
//   },
// };

// // ==================== ANIMATION CONFIG ====================
// const ANIMATION = {
//   stagger: 0.12,
//   duration: 0.6,
//   spring: { type: "spring", stiffness: 300, damping: 25 },
// };

// // ==================== SCROLL REVEAL HOOK ====================
// const useScrollReveal = (threshold = 0.1) => {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold },
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [threshold]);

//   return [ref, isVisible];
// };

// // ==================== HERO SECTION (Dark Anchor) ====================
// const HeroSection = () => {
//   const floatingCards = [
//     {
//       title: "AI & Analytics",
//       icon: FaBrain,
//       desc: "ML & Automation",
//       position: "top-2 left-1/2 -translate-x-1/2",
//       iconColor: "#A78BFA",
//       border: "rgba(139,92,246,0.4)",
//       bg: "rgba(139,92,246,0.1)",
//     },
//     {
//       title: "SAP",
//       icon: FaPhone,
//       desc: "ERP Solutions",
//       position: "top-1/2 -translate-y-1/2 left-2",
//       iconColor: "#60A5FA",
//       border: "rgba(59,130,246,0.4)",
//       bg: "rgba(59,130,246,0.1)",
//     },
//     {
//       title: "Guidewire",
//       icon: FaShieldAlt,
//       desc: "Insurance Platform",
//       position: "top-1/2 -translate-y-1/2 right-2",
//       iconColor: "#FDB913",
//       border: "rgba(253,185,19,0.4)",
//       bg: "rgba(253,185,19,0.1)",
//     },
//     {
//       title: "Applications & APIs",
//       icon: FaCode,
//       desc: "Custom Development",
//       position: "bottom-2 left-1/2 -translate-x-1/2",
//       iconColor: "#34D399",
//       border: "rgba(16,185,129,0.4)",
//       bg: "rgba(16,185,129,0.1)",
//     },
//     {
//       title: "Cloud Services",
//       icon: FaCloud,
//       position: "top-1/4 left-6",
//       iconColor: "#22D3EE",
//       border: "rgba(34,211,238,0.3)",
//       bg: "rgba(34,211,238,0.1)",
//       small: true,
//     },
//     {
//       title: "Data Platform",
//       icon: FaDatabase,
//       position: "top-1/4 right-6",
//       iconColor: "#FBBF24",
//       border: "rgba(251,191,36,0.3)",
//       bg: "rgba(251,191,36,0.1)",
//       small: true,
//     },
//     {
//       title: "Security",
//       icon: FaLock,
//       position: "bottom-1/4 left-6",
//       iconColor: "#F87171",
//       border: "rgba(248,113,113,0.3)",
//       bg: "rgba(248,113,113,0.1)",
//       small: true,
//     },
//     {
//       title: "Analytics",
//       icon: FaChartLine,
//       position: "bottom-1/4 right-6",
//       iconColor: "#34D399",
//       border: "rgba(52,211,153,0.3)",
//       bg: "rgba(52,211,153,0.1)",
//       small: true,
//     },
//   ];

//   return (
//     <section
//       className="min-h-screen relative overflow-hidden pt-10 pb-10 px-4 md:px-8"
//       style={{
//         background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 60%, ${BRAND.navy.lighter} 100%)`,
//       }}
//     >
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div
//           className="absolute inset-0 opacity-[0.04]"
//           style={{
//             backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//             backgroundSize: "32px 32px",
//           }}
//         />
//         <motion.div
//           animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-20 right-20 w-[450px] h-[450px] rounded-full blur-3xl opacity-[0.1]"
//           style={{ background: "#3B82F6" }}
//         />
//         <motion.div
//           animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 3,
//           }}
//           className="absolute bottom-20 left-20 w-[350px] h-[350px] rounded-full blur-3xl opacity-[0.08]"
//           style={{ background: BRAND.gold.primary }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-8"
//           >
//             <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10">
//               <span
//                 className="w-2 h-2 rounded-full animate-pulse"
//                 style={{ background: BRAND.gold.primary }}
//               ></span>
//               <span className="text-sm font-semibold text-black">
//                 Application Development • Integration Services • AI
//               </span>
//             </div>

//             <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight text-black">
//               Transforming Enterprises Through{" "}
//               <span
//                 style={{
//                   backgroundImage: BRAND.gold.gradient,
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}
//               >
//                 Intelligent Applications
//               </span>
//               , Seamless Integrations &{" "}
//               <span
//                 style={{
//                   backgroundImage: BRAND.gold.gradient,
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}
//               >
//                 AI-Powered Innovation
//               </span>
//             </h1>

//             <p className="text-lg md:text-xl text-black max-w-xl leading-relaxed">
//               Innovise delivers enterprise-grade application development, system
//               integration, and AI solutions that help organizations modernize
//               operations, improve customer experiences, and accelerate digital
//               transformation.
//             </p>

//             <div className="flex flex-wrap gap-4 pt-4">
//               <button
//                 className="px-8 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white"
//                 style={{ color: BRAND.navy.dark }}
//               >
//                 Schedule Consultation <FaArrowRight />
//               </button>
//               <button className="px-8 py-4 rounded-xl font-semibold text-black flex items-center gap-2 transition-all hover:-translate-y-1 hover:bg-white/10 border-2 border-white/20 bg-white/5">
//                 Explore Services <FaChevronDown />
//               </button>
//             </div>

//             <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
//               {[
//                 { value: "250+", label: "Projects Delivered" },
//                 { value: "99.9%", label: "Uptime Guarantee" },
//                 { value: "24/7", label: "Global Support" },
//               ].map((stat, idx) => (
//                 <div key={idx}>
//                   <div className="text-3xl font-bold text-black">
//                     {stat.value}
//                   </div>
//                   <div className="text-sm text-slate-400">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative h-[650px] hidden lg:block"
//           >
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
//               <div className="relative">
//                 <div
//                   className="w-44 h-44 rounded-2xl flex items-center justify-center shadow-2xl"
//                   style={{
//                     background: BRAND.gold.gradient,
//                     boxShadow: "0 0 80px rgba(253,185,19,0.4)",
//                   }}
//                 >
//                   <div className="text-center">
//                     <FaGlobe className="text-4xl text-black mb-2 mx-auto" />
//                     <div
//                       className="font-bold text-base"
//                       style={{ color: BRAND.navy.dark }}
//                     >
//                       Enterprise Hub
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <svg
//               className="absolute inset-0 w-full h-full"
//               style={{ zIndex: 10 }}
//             >
//               <line
//                 x1="50%"
//                 y1="32%"
//                 x2="50%"
//                 y2="12%"
//                 stroke="#FDB913"
//                 strokeWidth="2"
//                 strokeDasharray="8,8"
//                 opacity="0.4"
//               />
//               <line
//                 x1="50%"
//                 y1="68%"
//                 x2="50%"
//                 y2="88%"
//                 stroke="#FDB913"
//                 strokeWidth="2"
//                 strokeDasharray="8,8"
//                 opacity="0.4"
//               />
//               <line
//                 x1="32%"
//                 y1="50%"
//                 x2="12%"
//                 y2="50%"
//                 stroke="#FDB913"
//                 strokeWidth="2"
//                 strokeDasharray="8,8"
//                 opacity="0.4"
//               />
//               <line
//                 x1="68%"
//                 y1="50%"
//                 x2="88%"
//                 y2="50%"
//                 stroke="#FDB913"
//                 strokeWidth="2"
//                 strokeDasharray="8,8"
//                 opacity="0.4"
//               />
//             </svg>

//             {floatingCards.map((card, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.3 + index * 0.1 }}
//                 className={`absolute ${card.position} backdrop-blur-xl p-5 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 bg-[#12324f]/90 border ${card.border}`}
//                 style={{
//                   boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
//                   animation: `float 6s ease-in-out infinite`,
//                   animationDelay: `${index * -1}s`,
//                 }}
//               >
//                 <div className="flex items-center gap-4">
//                   <div
//                     className="w-12 h-12 rounded-xl flex items-center justify-center"
//                     style={{
//                       background: card.bg,
//                       border: `1px solid ${card.border}`,
//                     }}
//                   >
//                     <card.icon
//                       className="text-xl"
//                       style={{ color: card.iconColor }}
//                     />
//                   </div>
//                   {!card.small ? (
//                     <div>
//                       <div className="font-bold text-black text-sm">
//                         {card.title}
//                       </div>
//                       <div className="text-xs text-black">{card.desc}</div>
//                     </div>
//                   ) : (
//                     <span className="text-sm font-semibold text-slate-200">
//                       {card.title}
//                     </span>
//                   )}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
//       `}</style>
//     </section>
//   );
// };

// // ==================== WHY INNOVISE SECTION (LIGHT) ====================
// const WhyInnoviseSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   const cards = [
//     {
//       title: "Application Development",
//       icon: FaLaptopCode,
//       features: [
//         "Web Applications",
//         "Mobile Apps",
//         "Enterprise Platforms",
//         "Cloud Native Solutions",
//       ],
//       color: "#3B82F6",
//       bg: "bg-blue-50",
//       border: "border-blue-100",
//     },
//     {
//       title: "Integration Services",
//       icon: FaProjectDiagram,
//       features: [
//         "SAP Integration",
//         "Guidewire Integration",
//         "API Development",
//         "Middleware Solutions",
//       ],
//       color: "#8B5CF6",
//       bg: "bg-purple-50",
//       border: "border-purple-100",
//     },
//     {
//       title: "Artificial Intelligence",
//       icon: FaBrain,
//       features: [
//         "Generative AI",
//         "Automation",
//         "Predictive Analytics",
//         "Machine Learning",
//       ],
//       color: "#D97706",
//       bg: "bg-amber-50",
//       border: "border-amber-100",
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="py-24 px-4 md:px-8 bg-white relative overflow-hidden"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-slate-50 text-slate-700 border border-slate-100">
//             Why Choose Innovise
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold max-w-3xl mx-auto leading-tight text-slate-900">
//             Engineering Business Growth Through{" "}
//             <span
//               style={{
//                 backgroundImage: BRAND.gold.gradient,
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Technology Excellence
//             </span>
//           </h2>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {cards.map((card, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * ANIMATION.stagger }}
//               whileHover={{ y: -8 }}
//               className="group cursor-pointer"
//             >
//               <div
//                 className={`h-full rounded-3xl p-8 overflow-hidden transition-all duration-500 bg-white border ${card.border} shadow-sm hover:shadow-xl`}
//               >
//                 <div
//                   className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${card.bg}`}
//                 >
//                   <card.icon
//                     className="text-2xl"
//                     style={{ color: card.color }}
//                   />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-5 text-slate-900 group-hover:text-amber-600 transition-colors">
//                   {card.title}
//                 </h3>
//                 <ul className="space-y-3">
//                   {card.features.map((feature, idx) => (
//                     <li
//                       key={idx}
//                       className="flex items-center gap-3 text-slate-600"
//                     >
//                       <FaCheckCircle className="text-sm text-amber-500" />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== SERVICES SECTION (LIGHT) ====================
// const ServicesSection = () => {
//   const [ref, isVisible] = useScrollReveal();
//   const services = [
//     {
//       title: "Custom Application Development",
//       icon: FaLaptopCode,
//       desc: "Tailored solutions built for your unique business needs",
//       color: "#3B82F6",
//       bg: "bg-blue-50",
//     },
//     {
//       title: "Enterprise Integrations",
//       icon: FaProjectDiagram,
//       desc: "Seamless connectivity across your entire tech stack",
//       color: "#8B5CF6",
//       bg: "bg-purple-50",
//     },
//     {
//       title: "AI & Automation",
//       icon: FaBrain,
//       desc: "Intelligent automation to drive efficiency and innovation",
//       color: "#D97706",
//       bg: "bg-amber-50",
//     },
//     {
//       title: "Cloud Engineering",
//       icon: FaCloud,
//       desc: "Scalable cloud infrastructure and migration services",
//       color: "#0891B2",
//       bg: "bg-cyan-50",
//     },
//     {
//       title: "Quality Assurance",
//       icon: FaShieldAlt,
//       desc: "Comprehensive testing for flawless performance",
//       color: "#059669",
//       bg: "bg-emerald-50",
//     },
//     {
//       title: "Managed Services",
//       icon: FaCogs,
//       desc: "24/7 monitoring and support for peace of mind",
//       color: "#D97706",
//       bg: "bg-orange-50",
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="py-24 px-4 md:px-8 relative overflow-hidden bg-slate-50"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-white text-slate-700 border border-slate-200 shadow-sm">
//             Our Services
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">
//             Comprehensive{" "}
//             <span style={{ color: "#D97706" }}>Digital Solutions</span>
//           </h2>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * ANIMATION.stagger }}
//               whileHover={{ y: -8 }}
//               className="group cursor-pointer"
//             >
//               <div className="h-full rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 relative">
//                 <div
//                   className="absolute top-0 left-0 right-0 h-1 origin-left group-hover:scale-x-100 scale-x-0 transition-transform duration-400"
//                   style={{
//                     background: `linear-gradient(90deg, ${service.color}, transparent)`,
//                   }}
//                 />
//                 <div className="p-8">
//                   <div
//                     className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${service.bg} group-hover:scale-110 transition-transform`}
//                   >
//                     <service.icon
//                       className="text-xl"
//                       style={{ color: service.color }}
//                     />
//                   </div>
//                   <h3 className="text-lg font-bold mb-2 text-slate-900 group-hover:text-amber-600 transition-colors">
//                     {service.title}
//                   </h3>
//                   <p className="text-sm text-slate-500 leading-relaxed">
//                     {service.desc}
//                   </p>
//                   <div className="mt-6 pt-4 flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-amber-600 transition-colors border-t border-slate-50">
//                     Learn More <FaArrowRight className="text-xs" />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== TRANSFORMATION JOURNEY SECTION (LIGHT) ====================
// const TransformationJourneySection = () => {
//   const [ref, isVisible] = useScrollReveal();
//   const steps = [
//     {
//       title: "Discover",
//       icon: FaSearch,
//       desc: "Analyze requirements and identify opportunities",
//       color: "#3B82F6",
//     },
//     {
//       title: "Design",
//       icon: FaPencilRuler,
//       desc: "Create architecture and user experience blueprints",
//       color: "#D97706",
//     },
//     {
//       title: "Develop",
//       icon: FaCode,
//       desc: "Build robust, scalable applications",
//       color: "#059669",
//     },
//     {
//       title: "Integrate",
//       icon: FaPlug,
//       desc: "Connect systems and data flows seamlessly",
//       color: "#8B5CF6",
//     },
//     {
//       title: "Deploy",
//       icon: FaRocket,
//       desc: "Launch with confidence and minimal disruption",
//       color: "#D97706",
//     },
//     {
//       title: "Optimize",
//       icon: FaChartLine,
//       desc: "Continuously improve performance and ROI",
//       color: "#0891B2",
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="py-24 px-4 md:px-8 bg-white relative overflow-hidden"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-slate-50 text-slate-700 border border-slate-100">
//             Our Process
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">
//             Digital Transformation{" "}
//             <span
//               style={{
//                 backgroundImage: BRAND.gold.gradient,
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Journey
//             </span>
//           </h2>
//         </div>
//         <div className="hidden lg:block">
//           <div className="grid grid-cols-6 gap-4">
//             {steps.map((step, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="group relative"
//               >
//                 <div className="h-full p-6 rounded-3xl transition-all duration-500 hover:-translate-y-2 bg-white border border-slate-100 shadow-sm hover:shadow-xl">
//                   <div className="absolute top-4 right-4 text-4xl font-black opacity-5 text-slate-900">
//                     {index + 1}
//                   </div>
//                   <div
//                     className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-md"
//                     style={{
//                       background: BRAND.gold.gradient,
//                       boxShadow: `0 8px 24px rgba(253,185,19,0.25)`,
//                     }}
//                   >
//                     <step.icon className="text-xl text-black" />
//                   </div>
//                   <h4 className="text-lg font-bold mb-1 text-slate-900">
//                     {step.title}
//                   </h4>
//                   <p
//                     className="text-xs font-semibold uppercase tracking-wider mb-2"
//                     style={{ color: step.color }}
//                   >
//                     Step {index + 1}
//                   </p>
//                   <p className="text-sm leading-relaxed text-slate-500">
//                     {step.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//         <div className="lg:hidden space-y-8">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="flex gap-5"
//             >
//               <div className="flex flex-col items-center">
//                 <div
//                   className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
//                   style={{
//                     background: BRAND.gold.gradient,
//                     boxShadow: `0 8px 24px rgba(253,185,19,0.25)`,
//                   }}
//                 >
//                   <step.icon className="text-lg text-black" />
//                 </div>
//                 {index < steps.length - 1 && (
//                   <div className="w-0.5 flex-1 mt-3 bg-gradient-to-b from-amber-400 to-slate-100" />
//                 )}
//               </div>
//               <div className="pb-8">
//                 <h4 className="font-bold text-lg mb-1 text-slate-900">
//                   {step.title}
//                 </h4>
//                 <p
//                   className="text-xs font-semibold uppercase tracking-wider mb-2"
//                   style={{ color: step.color }}
//                 >
//                   Step {index + 1}
//                 </p>
//                 <p className="text-sm leading-relaxed text-slate-500">
//                   {step.desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== TECHNOLOGY ECOSYSTEM SECTION (LIGHT) ====================
// const TechnologyEcosystemSection = () => {
//   const [ref, isVisible] = useScrollReveal();
//   const ecosystems = {
//     Enterprise: ["SAP", "Guidewire", "Salesforce", "Oracle"],
//     Development: ["React", "Angular", "Node.js", "Java", ".NET"],
//     Cloud: ["AWS", "Azure", "Google Cloud"],
//     AI: ["OpenAI", "Machine Learning", "Automation", "Analytics"],
//   };
//   const categoryIcons = {
//     Enterprise: FaBuilding,
//     Development: FaCode,
//     Cloud: FaCloud,
//     AI: FaBrain,
//   };
//   const categoryColors = {
//     Enterprise: "#3B82F6",
//     Development: "#059669",
//     Cloud: "#0891B2",
//     AI: "#D97706",
//   };

//   return (
//     <section
//       ref={ref}
//       className="py-24 px-4 md:px-8 relative overflow-hidden bg-slate-50"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-white text-slate-700 border border-slate-200 shadow-sm">
//             Technology Stack
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">
//             Our Technology <span style={{ color: "#D97706" }}>Ecosystem</span>
//           </h2>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {Object.entries(ecosystems).map(
//             ([category, technologies], catIndex) => {
//               const Icon = categoryIcons[category];
//               const color = categoryColors[category];
//               return (
//                 <motion.div
//                   key={catIndex}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: catIndex * 0.1 }}
//                   whileHover={{ y: -6 }}
//                   className="rounded-2xl p-6 transition-all duration-300 bg-white border border-slate-100 shadow-sm hover:shadow-lg"
//                 >
//                   <div className="flex items-center gap-3 mb-5">
//                     <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-50 border border-slate-100">
//                       <Icon className="text-base" style={{ color }} />
//                     </div>
//                     <h3 className="text-lg font-bold text-slate-900">
//                       {category}
//                     </h3>
//                   </div>
//                   <div className="flex flex-wrap gap-2">
//                     {technologies.map((tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className="px-4 py-2 rounded-full text-sm cursor-default font-medium transition-all hover:scale-105 bg-slate-50 border border-slate-100 text-slate-700 hover:bg-amber-50 hover:border-amber-100 hover:text-amber-700"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </motion.div>
//               );
//             },
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== BUSINESS IMPACT SECTION (LIGHT) ====================
// const BusinessImpactSection = () => {
//   const [ref, isVisible] = useScrollReveal();
//   const metrics = [
//     {
//       value: "40%",
//       label: "Faster Delivery",
//       icon: FaRocket,
//       color: "#D97706",
//     },
//     {
//       value: "60%",
//       label: "Reduction in Manual Processes",
//       icon: FaCogs,
//       color: "#059669",
//     },
//     {
//       value: "99.9%",
//       label: "System Availability",
//       icon: FaServer,
//       color: "#3B82F6",
//     },
//     {
//       value: "30%",
//       label: "Lower Operational Costs",
//       icon: FaDollarSign,
//       color: "#8B5CF6",
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="py-24 px-4 md:px-8 relative overflow-hidden bg-white"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-12">
//           <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-slate-50 text-slate-700 border border-slate-100">
//             Results That Matter
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">
//             Delivering Measurable{" "}
//             <span style={{ color: "#D97706" }}>Business Impact</span>
//           </h2>
//         </div>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {metrics.map((metric, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -8, scale: 1.02 }}
//               className="text-center rounded-3xl p-8 bg-slate-50 border border-slate-100"
//             >
//               <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-white shadow-sm border border-slate-100">
//                 <metric.icon
//                   className="text-2xl"
//                   style={{ color: metric.color }}
//                 />
//               </div>
//               <div
//                 className="text-slate-900 mb-2"
//                 style={{
//                   fontSize: "clamp(48px, 8vw, 80px)",
//                   fontWeight: 800,
//                   lineHeight: 1,
//                 }}
//               >
//                 {metric.value}
//               </div>
//               <div className="text-slate-500 font-medium">{metric.label}</div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== INDUSTRIES SECTION (LIGHT) ====================
// const IndustriesSection = () => {
//   const [ref, isVisible] = useScrollReveal();
//   const industries = [
//     { name: "Insurance", icon: FaShieldAlt, color: "#3B82F6" },
//     { name: "Banking", icon: FaUniversity, color: "#059669" },
//     { name: "Healthcare", icon: FaHeartbeat, color: "#DC2626" },
//     { name: "Retail", icon: FaShoppingCart, color: "#8B5CF6" },
//     { name: "Manufacturing", icon: FaIndustry, color: "#D97706" },
//     { name: "Logistics", icon: FaTruck, color: "#0891B2" },
//     { name: "Energy", icon: FaBolt, color: "#D97706" },
//     { name: "Public Sector", icon: FaLandmark, color: "#475569" },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="py-24 px-4 md:px-8 bg-slate-50 relative overflow-hidden"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-white text-slate-700 border border-slate-200 shadow-sm">
//             Industries We Serve
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">
//             Expertise Across{" "}
//             <span
//               style={{
//                 backgroundImage: BRAND.gold.gradient,
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Industries
//             </span>
//           </h2>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
//           {industries.map((industry, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.08 }}
//               whileHover={{ y: -8, scale: 1.05 }}
//               className="group cursor-pointer"
//             >
//               <div className="rounded-2xl p-6 text-center transition-all duration-500 bg-white border border-slate-100 shadow-sm hover:shadow-xl">
//                 <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 bg-slate-50 border border-slate-100">
//                   <industry.icon
//                     className="text-2xl"
//                     style={{ color: industry.color }}
//                   />
//                 </div>
//                 <h3 className="font-bold text-slate-900">{industry.name}</h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== CASE STUDIES SECTION (LIGHT) ====================
// const CaseStudiesSection = () => {
//   const [ref, isVisible] = useScrollReveal();
//   const cases = [
//     {
//       title: "Enterprise Integration Program",
//       description:
//         "Connected SAP, CRM and third-party systems through a centralized integration layer.",
//       results: [
//         "45% Faster Processing",
//         "Reduced Data Errors",
//         "Improved User Experience",
//       ],
//       icon: FaProjectDiagram,
//       color: "#3B82F6",
//     },
//     {
//       title: "AI Automation Initiative",
//       description:
//         "Implemented intelligent automation reducing manual workload by 70% while improving accuracy.",
//       results: [
//         "70% Less Manual Work",
//         "95% Accuracy Rate",
//         "$2M Annual Savings",
//       ],
//       icon: FaRobot,
//       color: "#8B5CF6",
//     },
//     {
//       title: "Cloud Modernization Project",
//       description:
//         "Migrated legacy on-premise infrastructure to AWS with zero downtime.",
//       results: [
//         "Zero Downtime Migration",
//         "60% Cost Reduction",
//         "Auto-scaling Enabled",
//       ],
//       icon: FaCloudUploadAlt,
//       color: "#D97706",
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="py-24 px-4 md:px-8 relative overflow-hidden bg-white"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-slate-50 text-slate-700 border border-slate-100">
//             Success Stories
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">
//             Featured <span style={{ color: "#D97706" }}>Case Studies</span>
//           </h2>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {cases.map((caseStudy, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.15 }}
//               whileHover={{ y: -8 }}
//               className="group cursor-pointer"
//             >
//               <div className="rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
//                 <div
//                   className="h-1"
//                   style={{
//                     background: `linear-gradient(90deg, ${caseStudy.color}, transparent)`,
//                   }}
//                 />
//                 <div className="p-8">
//                   <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-slate-50 border border-slate-100">
//                     <caseStudy.icon
//                       className="text-xl"
//                       style={{ color: caseStudy.color }}
//                     />
//                   </div>
//                   <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-amber-600 transition-colors">
//                     {caseStudy.title}
//                   </h3>
//                   <p className="text-slate-500 mb-6 text-sm leading-relaxed">
//                     {caseStudy.description}
//                   </p>
//                   <div className="border-t border-slate-50 pt-4">
//                     <p className="text-xs uppercase tracking-wider mb-3 font-semibold text-amber-600">
//                       Key Results:
//                     </p>
//                     <ul className="space-y-2">
//                       {caseStudy.results.map((result, idx) => (
//                         <li
//                           key={idx}
//                           className="flex items-center gap-2 text-sm text-slate-600"
//                         >
//                           <FaCheckCircle className="text-xs text-amber-500" />
//                           <span>{result}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <button className="mt-6 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all text-slate-500 hover:text-amber-600">
//                     Read Full Case Study <FaArrowRight />
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== AI INNOVATION SECTION (LIGHT GOLD ACCENT) ====================
// const AIInnovationSection = () => {
//   const [ref, isVisible] = useScrollReveal();
//   const features = [
//     {
//       title: "Generative AI Solutions",
//       icon: FaMagic,
//       desc: "Create content, code, and insights automatically",
//     },
//     {
//       title: "Intelligent Automation",
//       icon: FaRobot,
//       desc: "Streamline workflows with smart automation",
//     },
//     {
//       title: "Predictive Analytics",
//       icon: FaChartLine,
//       desc: "Forecast trends and make data-driven decisions",
//     },
//     {
//       title: "AI-Powered Experiences",
//       icon: FaUsers,
//       desc: "Deliver personalized customer interactions",
//     },
//     {
//       title: "Knowledge Management",
//       icon: FaBookOpen,
//       desc: "Organize and retrieve information intelligently",
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="py-24 px-4 md:px-8 relative overflow-hidden bg-amber-50"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div>
//             <p className="font-bold mb-4 uppercase tracking-wider text-sm text-amber-700">
//               AI Innovation
//             </p>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-slate-900">
//               Unlock the Power of
//               <br />
//               <span className="text-amber-700">Artificial Intelligence</span>
//             </h2>
//             <p className="text-lg mb-8 leading-relaxed text-slate-600">
//               Harness cutting-edge AI capabilities to transform your business
//               operations, enhance decision-making, and create unprecedented
//               competitive advantages.
//             </p>
//             <button className="px-8 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all bg-slate-900 text-amber-400">
//               Explore AI Solutions <FaArrowRight />
//             </button>
//           </div>
//           <div className="grid gap-4">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ x: -4 }}
//                 className="rounded-xl p-5 flex items-start gap-4 cursor-pointer shadow-sm transition-all hover:shadow-md bg-white border border-amber-100/50"
//               >
//                 <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-slate-900">
//                   <feature.icon className="text-amber-400" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold mb-1 text-slate-900">
//                     {feature.title}
//                   </h3>
//                   <p className="text-sm text-slate-600">{feature.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== STATS SECTION (LIGHT) ====================
// const StatsSection = () => {
//   const [ref, isVisible] = useScrollReveal();
//   const stats = [
//     {
//       value: "250+",
//       label: "Projects Delivered",
//       icon: FaFolderOpen,
//       color: "#D97706",
//     },
//     {
//       value: "50+",
//       label: "Enterprise Clients",
//       icon: FaBuilding,
//       color: "#3B82F6",
//     },
//     {
//       value: "99.9%",
//       label: "Service Availability",
//       icon: FaServer,
//       color: "#059669",
//     },
//     {
//       value: "24/7",
//       label: "Global Support",
//       icon: FaHeadset,
//       color: "#8B5CF6",
//     },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="py-20 px-4 md:px-8 bg-white relative overflow-hidden"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="text-center"
//             >
//               <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-slate-50 border border-slate-100">
//                 <stat.icon className="text-3xl" style={{ color: stat.color }} />
//               </div>
//               <div
//                 className="mb-2 text-slate-900"
//                 style={{
//                   fontSize: "clamp(48px, 8vw, 80px)",
//                   fontWeight: 800,
//                   lineHeight: 1,
//                 }}
//               >
//                 {stat.value}
//               </div>
//               <div className="text-slate-500 font-medium">{stat.label}</div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== CTA SECTION (DARK ANCHOR) ====================
// const CTABannerSection = () => {
//   const [ref, isVisible] = useScrollReveal();

//   return (
//     <section
//       ref={ref}
//       className="py-24 px-4 md:px-8 relative overflow-hidden"
//       style={{
//         background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 100%)`,
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(10px)",
//         transition: "all 1s",
//       }}
//     >
//       <div
//         className="absolute inset-0 opacity-[0.04]"
//         style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//           backgroundSize: "32px 32px",
//         }}
//       />
//       <motion.div
//         animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-10 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.08]"
//         style={{ background: "#3B82F6" }}
//       />
//       <motion.div
//         animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 2,
//         }}
//         className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.06]"
//         style={{ background: BRAND.gold.primary }}
//       />

//       <div className="max-w-5xl mx-auto px-4 lg:px-8 relative z-10 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//             className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 bg-white/5 border-2 border-amber-400/30"
//           >
//             <FaRocket className="text-3xl text-amber-400" />
//           </motion.div>

//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight mb-6">
//             Ready to Modernize Your{" "}
//             <span
//               style={{
//                 backgroundImage: BRAND.gold.gradient,
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Enterprise?
//             </span>
//           </h2>

//           <p className="text-lg text-black leading-relaxed mb-10 max-w-2xl mx-auto">
//             From application development to enterprise integrations and AI
//             innovation, Innovise helps businesses build future-ready digital
//             ecosystems.
//           </p>

//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
//             <a
//               href="/contact"
//               className="group relative px-10 py-5 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl bg-white text-slate-900 shadow-lg"
//             >
//               <span className="relative z-10 flex items-center gap-3">
//                 Talk to Our Experts{" "}
//                 <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
//               </span>
//             </a>
//             <a
//               href="/contact"
//               className="group px-8 py-5 rounded-xl font-bold text-lg text-black flex items-center gap-3 transition-all duration-300 hover:bg-white/10 border-2 border-white/20 bg-white/5"
//             >
//               <FaPlayCircle className="text-amber-400" /> Request a Consultation
//             </a>
//           </div>

//           <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-white/10">
//             {[
//               { value: "Free Assessment", icon: FaSearch },
//               { value: "Proof of Concept", icon: FaFlask },
//               { value: "Flexible Engagement", icon: FaHandshake },
//             ].map((item, idx) => (
//               <div key={idx} className="flex items-center gap-2 text-slate-400">
//                 <item.icon className="text-sm text-amber-400" />
//                 <span className="text-sm font-medium">{item.value}</span>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // ==================== FOOTER ====================
// const Footer = () => {
//   const footerLinks = [
//     {
//       title: "Services",
//       links: ["App Development", "Integration", "AI Solutions"],
//     },
//     { title: "Company", links: ["About Us", "Careers", "Contact"] },
//     { title: "Resources", links: ["Case Studies", "Blog", "Documentation"] },
//     {
//       title: "Contact",
//       links: ["info@innovise.com", "+1 (555) 123-4567"],
//       icons: true,
//     },
//   ];

//   return (
//     <footer className="py-14 px-4 md:px-8 bg-slate-900">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//           <div className="flex items-center gap-3">
//             <div
//               className="w-11 h-11 rounded-xl flex items-center justify-center shadow-lg"
//               style={{ background: BRAND.gold.gradient }}
//             >
//               <FaCube className="text-black text-lg" />
//             </div>
//             <span className="text-xl font-bold text-black">Innovise IT</span>
//           </div>
//           <p className="text-slate-500 text-sm">
//             © 2024 Innovise IT Solutions. All rights reserved.
//           </p>
//           <div className="flex gap-3">
//             {[FaLinkedin, FaTwitter, FaGithub].map((SocialIcon, i) => (
//               <a
//                 key={i}
//                 href="#"
//                 className="w-10 h-10 rounded-full flex items-center justify-center transition-colors group bg-slate-800 hover:bg-amber-500"
//               >
//                 <SocialIcon className="text-slate-500 group-hover:text-black transition-colors" />
//               </a>
//             ))}
//           </div>
//         </div>
//         <div className="mt-10 pt-8 grid md:grid-cols-4 gap-8 text-center md:text-left border-t border-slate-800">
//           {footerLinks.map((section, i) => (
//             <div key={i}>
//               <h4 className="font-semibold text-black mb-3">{section.title}</h4>
//               <ul className="space-y-2 text-sm text-slate-500">
//                 {section.links.map((link, j) => (
//                   <li key={j}>
//                     <a
//                       href="#"
//                       className="hover:text-amber-400 transition-colors flex items-center justify-center md:justify-start gap-2"
//                     >
//                       {section.icons && j === 0 && <FaEnvelope />}
//                       {section.icons && j === 1 && <FaPhone />}
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// // ==================== MAIN PAGE COMPONENT ====================
// const ApplicationDevelopmentIntegrationAIPage = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <HeroSection />
//       <WhyInnoviseSection />
//       <ServicesSection />
//       <TransformationJourneySection />
//       <TechnologyEcosystemSection />
//       <BusinessImpactSection />
//       <IndustriesSection />
//       <CaseStudiesSection />
//       <AIInnovationSection />
//       <StatsSection />
//       <CTABannerSection />
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default ApplicationDevelopmentIntegrationAIPage;

import React, { useState, useEffect, useRef } from "react";
import {
  FaLaptopCode,
  FaProjectDiagram,
  FaBrain,
  FaCloud,
  FaShieldAlt,
  FaCogs,
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaPlug,
  FaRocket,
  FaChartLine,
  FaFolderOpen,
  FaBuilding,
  FaServer,
  FaHeadset,
  FaCheckCircle,
  FaArrowRight,
  FaChevronDown,
  FaCube,
  FaEnvelope,
  FaPhone,
  FaDatabase,
  FaLock,
  FaDollarSign,
  FaUniversity,
  FaHeartbeat,
  FaShoppingCart,
  FaIndustry,
  FaTruck,
  FaBolt,
  FaLandmark,
  FaRobot,
  FaCloudUploadAlt,
  FaMagic,
  FaUsers,
  FaBookOpen,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaPlayCircle,
  FaHandshake,
  FaFlask,
  FaStar,
  FaAward,
  FaGlobe,
} from "react-icons/fa";
import { motion } from "framer-motion";

// ==================== BRAND COLORS (NAVY + GOLD STRICTLY) ====================
const BRAND = {
  navy: {
    dark: "#0B1D33", // Innovise Blue
    mid: "#143A63",
    light: "#1A4570",
  },
  gold: {
    primary: "#FDB913", // Innovise Yellow
    light: "#FFD54F",
    dark: "#E5A700",
    gradient: "linear-gradient(135deg, #E5A700 0%, #FDB913 50%, #FFD54F 100%)",
  },
};

// ==================== ANIMATION CONFIG ====================
const ANIMATION = {
  stagger: 0.12,
  duration: 0.6,
  spring: { type: "spring", stiffness: 300, damping: 25 },
};

// ==================== SCROLL REVEAL HOOK ====================
const useScrollReveal = (threshold = 0.1) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

// ==================== HERO SECTION (Dark Anchor) ====================
const HeroSection = () => {
  const floatingCards = [
    {
      title: "AI & Analytics",
      icon: FaBrain,
      desc: "ML & Automation",
      position: "top-2 left-1/2 -translate-x-1/2",
      iconColor: "#FDB913",
      border: "rgba(253,185,19,0.4)",
      bg: "rgba(253,185,19,0.1)",
    },
    {
      title: "SAP",
      icon: FaPhone,
      desc: "ERP Solutions",
      position: "top-1/2 -translate-y-1/2 left-2",
      iconColor: "#FFFFFF",
      border: "rgba(20,58,99,0.6)",
      bg: "rgba(20,58,99,0.3)",
    },
    {
      title: "Guidewire",
      icon: FaShieldAlt,
      desc: "Insurance Platform",
      position: "top-1/2 -translate-y-1/2 right-2",
      iconColor: "#FDB913",
      border: "rgba(253,185,19,0.4)",
      bg: "rgba(253,185,19,0.1)",
    },
    {
      title: "Applications & APIs",
      icon: FaCode,
      desc: "Custom Development",
      position: "bottom-2 left-1/2 -translate-x-1/2",
      iconColor: "#FFFFFF",
      border: "rgba(20,58,99,0.6)",
      bg: "rgba(20,58,99,0.3)",
    },
    {
      title: "Cloud Services",
      icon: FaCloud,
      position: "top-1/4 left-6",
      iconColor: "#FDB913",
      border: "rgba(253,185,19,0.3)",
      bg: "rgba(253,185,19,0.1)",
      small: true,
    },
    {
      title: "Data Platform",
      icon: FaDatabase,
      position: "top-1/4 right-6",
      iconColor: "#FFFFFF",
      border: "rgba(20,58,99,0.5)",
      bg: "rgba(20,58,99,0.2)",
      small: true,
    },
    {
      title: "Security",
      icon: FaLock,
      position: "bottom-1/4 left-6",
      iconColor: "#FDB913",
      border: "rgba(253,185,19,0.3)",
      bg: "rgba(253,185,19,0.1)",
      small: true,
    },
    {
      title: "Analytics",
      icon: FaChartLine,
      position: "bottom-1/4 right-6",
      iconColor: "#FFFFFF",
      border: "rgba(20,58,99,0.5)",
      bg: "rgba(20,58,99,0.2)",
      small: true,
    },
  ];

  return (
    <section
      className="min-h-screen relative overflow-hidden pt-10 pb-10 px-4 md:px-8"
      // style={{
      //   background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 60%, ${BRAND.navy.light} 100%)`,
      // }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-[450px] h-[450px] rounded-full blur-3xl opacity-[0.1]"
          style={{ background: BRAND.navy.light }}
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-20 left-20 w-[350px] h-[350px] rounded-full blur-3xl opacity-[0.08]"
          style={{ background: BRAND.gold.primary }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-2"
          >
            <div className="inline-flex items-center gap-2 py-2.5 rounded-full bg-white/5 border border-white/10">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: BRAND.gold.primary }}
              ></span>
              <span className="text-sm font-semibold text-black ">
                Application Development • Integration Services • AI
              </span>
            </div>

            <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight text-black">
              Transforming Enterprises Through{" "}
              <span
                style={{
                  backgroundImage: BRAND.gold.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Intelligent Applications
              </span>
              , Seamless Integrations &{" "}
              <span
                style={{
                  backgroundImage: BRAND.gold.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                AI-Powered Innovation
              </span>
            </h1>

            <p className="text-lg md:text-xl text-black max-w-xl leading-relaxed">
              Innovise delivers enterprise-grade application development, system
              integration, and AI solutions that help organizations modernize
              operations, improve customer experiences, and accelerate digital
              transformation.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/contact"
                className="px-8 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                style={{
                  background: BRAND.gold.gradient,
                  color: BRAND.navy.dark,
                }}
              >
                Schedule Consultation <FaArrowRight />
              </a>
              <a
                href="/contact"
                className="px-8 py-4 rounded-xl font-semibold text-black flex items-center gap-2 transition-all hover:-translate-y-1 hover:bg-white/10 border-2 border-[#FDB913]/30 bg-white/5"
              >
                Explore Services
              </a>
            </div>

            {/* <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
              {[
                { value: "250+", label: "Projects Delivered" },
                { value: "99.9%", label: "Uptime Guarantee" },
                { value: "24/7", label: "Global Support" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl font-bold text-black">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[650px] hidden lg:block"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative">
                <div
                  className="w-44 h-44 rounded-2xl flex items-center justify-center shadow-2xl"
                  style={{
                    background: BRAND.gold.gradient,
                    boxShadow: `0 0 80px rgba(253,185,19,0.4)`,
                  }}
                >
                  <div className="text-center">
                    <FaGlobe
                      className="text-4xl mb-2 mx-auto"
                      style={{ color: BRAND.navy.dark }}
                    />
                    <div
                      className="font-bold text-base"
                      style={{ color: BRAND.navy.dark }}
                    >
                      Enterprise Hub
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <svg
              className="absolute inset-0 w-full h-full"
              style={{ zIndex: 10 }}
            >
              <line
                x1="50%"
                y1="32%"
                x2="50%"
                y2="12%"
                stroke="#FDB913"
                strokeWidth="2"
                strokeDasharray="8,8"
                opacity="0.4"
              />
              <line
                x1="50%"
                y1="68%"
                x2="50%"
                y2="88%"
                stroke="#143A63"
                strokeWidth="2"
                strokeDasharray="8,8"
                opacity="0.4"
              />
              <line
                x1="32%"
                y1="50%"
                x2="12%"
                y2="50%"
                stroke="#FDB913"
                strokeWidth="2"
                strokeDasharray="8,8"
                opacity="0.4"
              />
              <line
                x1="68%"
                y1="50%"
                x2="88%"
                y2="50%"
                stroke="#143A63"
                strokeWidth="2"
                strokeDasharray="8,8"
                opacity="0.4"
              />
            </svg>

            {floatingCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`absolute ${card.position} backdrop-blur-xl p-5 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 bg-[#12324f]/90 border ${card.border}`}
                style={{
                  boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                  animation: `float 6s ease-in-out infinite`,
                  animationDelay: `${index * -1}s`,
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: card.bg,
                      border: `1px solid ${card.border}`,
                    }}
                  >
                    <card.icon
                      className="text-xl"
                      style={{ color: card.iconColor }}
                    />
                  </div>
                  {!card.small ? (
                    <div>
                      <div className="font-bold text-white text-sm">
                        {card.title}
                      </div>
                      <div className="text-xs text-white">{card.desc}</div>
                    </div>
                  ) : (
                    <span className="text-sm font-semibold text-slate-200">
                      {card.title}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
      `}</style>
    </section>
  );
};

// ==================== WHY INNOVISE SECTION (LIGHT) ====================
const WhyInnoviseSection = () => {
  const [ref, isVisible] = useScrollReveal();

  const cards = [
    {
      title: "Application Development",
      icon: FaLaptopCode,
      features: [
        "Web Applications",
        "Mobile Apps",
        "Enterprise Platforms",
        "Cloud Native Solutions",
      ],
      color: BRAND.navy.dark,
      bg: "rgba(11, 29, 51, 0.05)",
      border: "rgba(11, 29, 51, 0.1)",
    },
    {
      title: "Integration Services",
      icon: FaProjectDiagram,
      features: [
        "SAP Integration",
        "Guidewire Integration",
        "API Development",
        "Middleware Solutions",
      ],
      color: BRAND.gold.primary,
      bg: "rgba(253, 185, 19, 0.1)",
      border: "rgba(253, 185, 19, 0.2)",
    },
    {
      title: "Artificial Intelligence",
      icon: FaBrain,
      features: [
        "Generative AI",
        "Automation",
        "Predictive Analytics",
        "Machine Learning",
      ],
      color: BRAND.navy.dark,
      bg: "rgba(11, 29, 51, 0.05)",
      border: "rgba(11, 29, 51, 0.1)",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 px-4 md:px-8 bg-white relative overflow-hidden"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(10px)",
        transition: "all 1s",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-slate-50 text-[#0B1D33] border border-slate-100">
            Why Choose Innovise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold max-w-3xl mx-auto leading-tight text-[#0B1D33]">
            Engineering Business Growth Through{" "}
            <span
              style={{
                backgroundImage: BRAND.gold.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Technology Excellence
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * ANIMATION.stagger }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div
                className={`h-full rounded-3xl p-8 overflow-hidden transition-all duration-500 bg-white border ${card.border} shadow-sm hover:shadow-xl`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  style={{ background: card.bg }}
                >
                  <card.icon
                    className="text-2xl"
                    style={{ color: card.color }}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-5 text-[#0B1D33] group-hover:text-[#143A63] transition-colors">
                  {card.title}
                </h3>
                <ul className="space-y-3">
                  {card.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-black"
                    >
                      <FaCheckCircle
                        className="text-sm"
                        style={{ color: BRAND.gold.primary }}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== SERVICES SECTION (LIGHT) ====================
const ServicesSection = () => {
  const [ref, isVisible] = useScrollReveal();
  const services = [
    {
      title: "Custom Application Development",
      icon: FaLaptopCode,
      desc: "Tailored solutions built for your unique business needs",
      color: BRAND.navy.dark,
      bg: "rgba(11, 29, 51, 0.05)",
    },
    {
      title: "Enterprise Integrations",
      icon: FaProjectDiagram,
      desc: "Seamless connectivity across your entire tech stack",
      color: BRAND.gold.primary,
      bg: "rgba(253, 185, 19, 0.1)",
    },
    {
      title: "AI & Automation",
      icon: FaBrain,
      desc: "Intelligent automation to drive efficiency and innovation",
      color: BRAND.navy.dark,
      bg: "rgba(11, 29, 51, 0.05)",
    },
    {
      title: "Cloud Engineering",
      icon: FaCloud,
      desc: "Scalable cloud infrastructure and migration services",
      color: BRAND.gold.primary,
      bg: "rgba(253, 185, 19, 0.1)",
    },
    {
      title: "Quality Assurance",
      icon: FaShieldAlt,
      desc: "Comprehensive testing for flawless performance",
      color: BRAND.navy.dark,
      bg: "rgba(11, 29, 51, 0.05)",
    },
    {
      title: "Managed Services",
      icon: FaCogs,
      desc: "24/7 monitoring and support for peace of mind",
      color: BRAND.gold.primary,
      bg: "rgba(253, 185, 19, 0.1)",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 px-4 md:px-8 relative overflow-hidden bg-slate-50"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(10px)",
        transition: "all 1s",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-white text-[#0B1D33] border border-slate-200 shadow-sm">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B1D33]">
            Comprehensive{" "}
            <span style={{ color: BRAND.navy.mid }}>Digital Solutions</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * ANIMATION.stagger }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="h-full rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 relative">
                <div
                  className="absolute top-0 left-0 right-0 h-1 origin-left group-hover:scale-x-100 scale-x-0 transition-transform duration-400"
                  style={{
                    background: `linear-gradient(90deg, ${service.color}, transparent)`,
                  }}
                />
                <div className="p-8">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                    style={{ background: service.bg }}
                  >
                    <service.icon
                      className="text-xl"
                      style={{ color: service.color }}
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#0B1D33] group-hover:text-[#143A63] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-black/70 leading-relaxed">
                    {service.desc}
                  </p>
                  {/* <div className="mt-6 pt-4 flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-[#0B1D33] transition-colors border-t border-slate-50">
                    Learn More <FaArrowRight className="text-xs" />
                  </div> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== TRANSFORMATION JOURNEY SECTION (LIGHT) ====================
const TransformationJourneySection = () => {
  const [ref, isVisible] = useScrollReveal();
  const steps = [
    {
      title: "Discover",
      icon: FaSearch,
      desc: "Analyze requirements and identify opportunities",
      color: BRAND.navy.dark,
    },
    {
      title: "Design",
      icon: FaPencilRuler,
      desc: "Create architecture and user experience blueprints",
      color: BRAND.gold.dark,
    },
    {
      title: "Develop",
      icon: FaCode,
      desc: "Build robust, scalable applications",
      color: BRAND.navy.dark,
    },
    {
      title: "Integrate",
      icon: FaPlug,
      desc: "Connect systems and data flows seamlessly",
      color: BRAND.gold.dark,
    },
    {
      title: "Deploy",
      icon: FaRocket,
      desc: "Launch with confidence and minimal disruption",
      color: BRAND.navy.dark,
    },
    {
      title: "Optimize",
      icon: FaChartLine,
      desc: "Continuously improve performance and ROI",
      color: BRAND.gold.dark,
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 px-4 md:px-8 bg-white relative overflow-hidden"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(10px)",
        transition: "all 1s",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-slate-50 text-[#0B1D33] border border-slate-100">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B1D33]">
            Digital Transformation{" "}
            <span style={{ color: BRAND.navy.mid }}>Journey</span>
          </h2>
        </div>
        <div className="hidden lg:block">
          <div className="grid grid-cols-6 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full p-6 rounded-3xl transition-all duration-500 hover:-translate-y-2 bg-white border border-slate-100 shadow-sm hover:shadow-xl">
                  <div className="absolute top-4 right-4 text-4xl font-black opacity-5 text-[#0B1D33]">
                    {index + 1}
                  </div>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-md"
                    style={{
                      background: BRAND.gold.gradient,
                      boxShadow: `0 8px 24px rgba(253,185,19,0.25)`,
                    }}
                  >
                    <step.icon className="text-xl text-[#0B1D33]" />
                  </div>
                  <h4 className="text-lg font-bold mb-1 text-[#0B1D33]">
                    {step.title}
                  </h4>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: step.color }}
                  >
                    Step {index + 1}
                  </p>
                  <p className="text-sm leading-relaxed text-black/70">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-5"
            >
              <div className="flex flex-col items-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    background: BRAND.gold.gradient,
                    boxShadow: `0 8px 24px rgba(253,185,19,0.25)`,
                  }}
                >
                  <step.icon className="text-lg text-[#0B1D33]" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-1 mt-3 bg-gradient-to-b from-[#FDB913] to-slate-100" />
                )}
              </div>
              <div className="pb-8">
                <h4 className="font-bold text-lg mb-1 text-[#0B1D33]">
                  {step.title}
                </h4>
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: step.color }}
                >
                  Step {index + 1}
                </p>
                <p className="text-sm leading-relaxed text-black/70">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== TECHNOLOGY ECOSYSTEM SECTION (LIGHT) ====================
const TechnologyEcosystemSection = () => {
  const [ref, isVisible] = useScrollReveal();
  const ecosystems = {
    Enterprise: ["SAP", "Guidewire", "Salesforce", "Oracle"],
    Development: ["React", "Angular", "Node.js", "Java", ".NET"],
    Cloud: ["AWS", "Azure", "Google Cloud"],
    AI: ["OpenAI", "Machine Learning", "Automation", "Analytics"],
  };
  const categoryIcons = {
    Enterprise: FaBuilding,
    Development: FaCode,
    Cloud: FaCloud,
    AI: FaBrain,
  };
  const categoryColors = {
    Enterprise: BRAND.navy.dark,
    Development: BRAND.gold.primary,
    Cloud: BRAND.navy.dark,
    AI: BRAND.gold.primary,
  };

  return (
    <section
      ref={ref}
      className="py-24 px-4 md:px-8 relative overflow-hidden bg-slate-50"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(10px)",
        transition: "all 1s",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-white text-[#0B1D33] border border-slate-200 shadow-sm">
            Technology Stack
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B1D33]">
            Our Technology{" "}
            <span style={{ color: BRAND.navy.mid }}>Ecosystem</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(ecosystems).map(
            ([category, technologies], catIndex) => {
              const Icon = categoryIcons[category];
              const color = categoryColors[category];
              return (
                <motion.div
                  key={catIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl p-6 transition-all duration-300 bg-white border border-slate-100 shadow-sm hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-50 border border-slate-100">
                      <Icon className="text-base" style={{ color }} />
                    </div>
                    <h3 className="text-lg font-bold text-[#0B1D33]">
                      {category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 rounded-full text-sm cursor-default font-medium transition-all hover:scale-105 bg-slate-50 border border-slate-100 text-[#0B1D33] hover:bg-[#0B1D33] hover:text-black hover:border-[#0B1D33]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
};

// ==================== BUSINESS IMPACT SECTION (LIGHT) ====================
const BusinessImpactSection = () => {
  const [ref, isVisible] = useScrollReveal();
  const metrics = [
    {
      value: "40%",
      label: "Faster Delivery",
      icon: FaRocket,
      iconColor: BRAND.gold.primary,
    },
    {
      value: "60%",
      label: "Reduction in Manual Processes",
      icon: FaCogs,
      iconColor: BRAND.navy.dark,
    },
    {
      value: "99.9%",
      label: "System Availability",
      icon: FaServer,
      iconColor: BRAND.gold.primary,
    },
    {
      value: "30%",
      label: "Lower Operational Costs",
      icon: FaDollarSign,
      iconColor: BRAND.navy.dark,
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 px-4 md:px-8 relative overflow-hidden bg-white"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(10px)",
        transition: "all 1s",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-slate-50 text-[#0B1D33] border border-slate-100">
            Results That Matter
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B1D33]">
            Delivering Measurable{" "}
            <span style={{ color: BRAND.navy.mid }}>Business Impact</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="text-center rounded-3xl p-8 bg-slate-50 border border-slate-100"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-white shadow-sm border border-slate-100">
                <metric.icon
                  className="text-2xl"
                  style={{ color: metric.iconColor }}
                />
              </div>
              <div
                className="text-[#0B1D33] mb-2"
                style={{
                  fontSize: "clamp(48px, 8vw, 80px)",
                  fontWeight: 800,
                  lineHeight: 1,
                }}
              >
                {metric.value}
              </div>
              <div className="text-black/70 font-medium">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== INDUSTRIES SECTION (LIGHT) ====================
const IndustriesSection = () => {
  const [ref, isVisible] = useScrollReveal();
  const industries = [
    { name: "Insurance", icon: FaShieldAlt, color: BRAND.navy.dark },
    { name: "Banking", icon: FaUniversity, color: BRAND.gold.primary },
    { name: "Healthcare", icon: FaHeartbeat, color: BRAND.navy.dark },
    { name: "Retail", icon: FaShoppingCart, color: BRAND.gold.primary },
    { name: "Manufacturing", icon: FaIndustry, color: BRAND.navy.dark },
    { name: "Logistics", icon: FaTruck, color: BRAND.gold.primary },
    { name: "Energy", icon: FaBolt, color: BRAND.navy.dark },
    { name: "Public Sector", icon: FaLandmark, color: BRAND.gold.primary },
  ];

  return (
    <section
      ref={ref}
      className="py-24 px-4 md:px-8 bg-slate-50 relative overflow-hidden"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(10px)",
        transition: "all 1s",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-white text-[#0B1D33] border border-slate-200 shadow-sm">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B1D33]">
            Expertise Across{" "}
            <span style={{ color: BRAND.navy.mid }}>Industries</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className="rounded-2xl p-6 text-center transition-all duration-500 bg-white border border-slate-100 shadow-sm hover:shadow-xl">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 bg-slate-50 border border-slate-100">
                  <industry.icon
                    className="text-2xl"
                    style={{ color: industry.color }}
                  />
                </div>
                <h3 className="font-bold text-[#0B1D33]">{industry.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== CASE STUDIES SECTION (LIGHT) ====================
const CaseStudiesSection = () => {
  const [ref, isVisible] = useScrollReveal();
  const cases = [
    {
      title: "Enterprise Integration Program",
      description:
        "Connected SAP, CRM and third-party systems through a centralized integration layer.",
      results: [
        "45% Faster Processing",
        "Reduced Data Errors",
        "Improved User Experience",
      ],
      icon: FaProjectDiagram,
      color: BRAND.navy.dark,
    },
    {
      title: "AI Automation Initiative",
      description:
        "Implemented intelligent automation reducing manual workload by 70% while improving accuracy.",
      results: [
        "70% Less Manual Work",
        "95% Accuracy Rate",
        "$2M Annual Savings",
      ],
      icon: FaRobot,
      color: BRAND.gold.dark,
    },
    {
      title: "Cloud Modernization Project",
      description:
        "Migrated legacy on-premise infrastructure to AWS with zero downtime.",
      results: [
        "Zero Downtime Migration",
        "60% Cost Reduction",
        "Auto-scaling Enabled",
      ],
      icon: FaCloudUploadAlt,
      color: BRAND.navy.dark,
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 px-4 md:px-8 relative overflow-hidden bg-white"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(10px)",
        transition: "all 1s",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-slate-50 text-[#0B1D33] border border-slate-100">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B1D33]">
            Featured <span style={{ color: BRAND.navy.mid }}>Case Studies</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div
                  className="h-1"
                  style={{
                    background: `linear-gradient(90deg, ${caseStudy.color}, transparent)`,
                  }}
                />
                <div className="p-8">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-slate-50 border border-slate-100">
                    <caseStudy.icon
                      className="text-xl"
                      style={{ color: caseStudy.color }}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0B1D33] group-hover:text-[#143A63] transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="text-black/70 mb-6 text-sm leading-relaxed">
                    {caseStudy.description}
                  </p>
                  <div className="border-t border-slate-50 pt-4">
                    <p className="text-xs uppercase tracking-wider mb-3 font-semibold text-[#0B1D33]">
                      Key Results:
                    </p>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-black"
                        >
                          <FaCheckCircle
                            className="text-xs"
                            style={{ color: BRAND.gold.primary }}
                          />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* <button className="mt-6 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all text-[#0B1D33] hover:text-[#143A63]">
                    Read Full Case Study <FaArrowRight />
                  </button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== AI INNOVATION SECTION (LIGHT GOLD ACCENT) ====================
const AIInnovationSection = () => {
  const [ref, isVisible] = useScrollReveal();
  const features = [
    {
      title: "Generative AI Solutions",
      icon: FaMagic,
      desc: "Create content, code, and insights automatically",
    },
    {
      title: "Intelligent Automation",
      icon: FaRobot,
      desc: "Streamline workflows with smart automation",
    },
    {
      title: "Predictive Analytics",
      icon: FaChartLine,
      desc: "Forecast trends and make data-driven decisions",
    },
    {
      title: "AI-Powered Experiences",
      icon: FaUsers,
      desc: "Deliver personalized customer interactions",
    },
    {
      title: "Knowledge Management",
      icon: FaBookOpen,
      desc: "Organize and retrieve information intelligently",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 px-4 md:px-8 relative overflow-hidden bg-[#FFFBEB]"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(10px)",
        transition: "all 1s",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-bold mb-4 uppercase tracking-wider text-sm text-[#0B1D33]">
              AI Innovation
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#0B1D33]">
              Unlock the Power of
              <br />
              <span style={{ color: BRAND.gold.dark }}>
                Artificial Intelligence
              </span>
            </h2>
            <p className="text-lg mb-8 leading-relaxed text-black/80">
              Harness cutting-edge AI capabilities to transform your business
              operations, enhance decision-making, and create unprecedented
              competitive advantages.
            </p>
            <button className="px-8 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all bg-[#0B1D33] text-[#FDB913]">
              Explore AI Solutions <FaArrowRight />
            </button>
          </div>
          <div className="grid gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: -4 }}
                className="rounded-xl p-5 flex items-start gap-4 cursor-pointer shadow-sm transition-all hover:shadow-md bg-white border border-[#FDB913]/20"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-[#0B1D33]">
                  <feature.icon className="text-[#FDB913]" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-[#0B1D33]">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-black/70">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== STATS SECTION (LIGHT) ====================
const StatsSection = () => {
  const [ref, isVisible] = useScrollReveal();
  const stats = [
    {
      value: "250+",
      label: "Projects Delivered",
      icon: FaFolderOpen,
      iconColor: BRAND.gold.primary,
    },
    {
      value: "50+",
      label: "Enterprise Clients",
      icon: FaBuilding,
      iconColor: BRAND.navy.dark,
    },
    {
      value: "99.9%",
      label: "Service Availability",
      icon: FaServer,
      iconColor: BRAND.gold.primary,
    },
    {
      value: "24/7",
      label: "Global Support",
      icon: FaHeadset,
      iconColor: BRAND.navy.dark,
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 px-4 md:px-8 bg-white relative overflow-hidden"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(10px)",
        transition: "all 1s",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-slate-50 border border-slate-100">
                <stat.icon
                  className="text-3xl"
                  style={{ color: stat.iconColor }}
                />
              </div>
              <div
                className="mb-2 text-[#0B1D33]"
                style={{
                  fontSize: "clamp(48px, 8vw, 80px)",
                  fontWeight: 800,
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div className="text-black/70 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== CTA SECTION (DARK ANCHOR) ====================
const CTABannerSection = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      ref={ref}
      className="py-16 px-4 md:px-8 relative overflow-hidden"
      // style={{
      //   background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 100%)`,
      //   opacity: isVisible ? 1 : 0,
      //   transform: isVisible ? "translateY(0)" : "translateY(10px)",
      //   transition: "all 1s",
      // }}
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.08]"
        style={{ background: BRAND.navy.light }}
      />
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.06]"
        style={{ background: BRAND.gold.primary }}
      />

      <div className="max-w-5xl mx-auto px-4 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 bg-white/5 border-2 border-[#FDB913]/30"
          >
            <FaRocket className="text-3xl text-[#FDB913]" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight mb-6">
            Ready to Modernize Your{" "}
            <span
              style={{
                backgroundImage: BRAND.gold.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Enterprise?
            </span>
          </h2>

          <p className="text-lg text-black leading-relaxed mb-10 max-w-2xl mx-auto">
            From application development to enterprise integrations and AI
            innovation, Innovise helps businesses build future-ready digital
            ecosystems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="/contact"
              className="group relative px-10 py-5 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl bg-[#FDB913] text-[#0B1D33] shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-3">
                Talk to Our Experts{" "}
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="/contact"
              className="group px-8 py-5 rounded-xl font-bold text-lg text-black flex items-center gap-3 transition-all duration-300 hover:bg-white/10 border-2 border-[#FDB913]/30 bg-white/5"
            >
              <FaPlayCircle className="text-[#FDB913]" /> Request a Consultation
            </a>
          </div>

          {/* <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-white/10">
            {[
              { value: "Free Assessment", icon: FaSearch },
              { value: "Proof of Concept", icon: FaFlask },
              { value: "Flexible Engagement", icon: FaHandshake },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-400">
                <item.icon className="text-sm text-[#FDB913]" />
                <span className="text-sm font-medium">{item.value}</span>
              </div>
            ))}
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

// ==================== FOOTER ====================
const Footer = () => {
  const footerLinks = [
    {
      title: "Services",
      links: ["App Development", "Integration", "AI Solutions"],
    },
    { title: "Company", links: ["About Us", "Careers", "Contact"] },
    { title: "Resources", links: ["Case Studies", "Blog", "Documentation"] },
    {
      title: "Contact",
      links: ["info@innovise.com", "+1 (555) 123-4567"],
      icons: true,
    },
  ];

  return (
    <footer className="py-14 px-4 md:px-8 bg-[#0B1D33]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shadow-lg"
              style={{ background: BRAND.gold.gradient }}
            >
              <FaCube className="text-[#0B1D33] text-lg" />
            </div>
            <span className="text-xl font-bold text-black">
              Innovise <span className="text-[#FDB913]">IT</span>
            </span>
          </div>
          <p className="text-slate-400 text-sm">
            © 2024 Innovise IT Solutions. All rights reserved.
          </p>
          <div className="flex gap-3">
            {[FaLinkedin, FaTwitter, FaGithub].map((SocialIcon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors group bg-[#143A63] hover:bg-[#FDB913]"
              >
                <SocialIcon className="text-black group-hover:text-[#0B1D33] transition-colors" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 pt-8 grid md:grid-cols-4 gap-8 text-center md:text-left border-t border-[#143A63]">
          {footerLinks.map((section, i) => (
            <div key={i}>
              <h4 className="font-semibold text-black mb-3">{section.title}</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="hover:text-[#FDB913] transition-colors flex items-center justify-center md:justify-start gap-2"
                    >
                      {section.icons && j === 0 && <FaEnvelope />}
                      {section.icons && j === 1 && <FaPhone />}
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

// ==================== MAIN PAGE COMPONENT ====================
const ApplicationDevelopmentIntegrationAIPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <WhyInnoviseSection />
      <ServicesSection />
      <TransformationJourneySection />
      <TechnologyEcosystemSection />
      <BusinessImpactSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <AIInnovationSection />
      <StatsSection />
      <CTABannerSection />
      {/* <Footer /> */}
    </div>
  );
};

export default ApplicationDevelopmentIntegrationAIPage;
