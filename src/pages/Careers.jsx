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
//   FaBullseye,
//   FaBookOpen,
//   FaHandshake,
//   FaTrophy,
//   FaQuoteLeft,
// } from "react-icons/fa6";
// import img1 from "../assets/leaders/NishantGautam.webp";
// import banner from "../assets/banners/careers_banner.jpeg";
// import why1 from "../assets/banners/career_why1.png";
// import why2 from "../assets/banners/career_why2.png";
// import why3 from "../assets/banners/career_why3.png";
// import why4 from "../assets/banners/career_why4.png";

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

// const MAX_FILE_SIZE = 5 * 1024 * 1024;
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

// // Why Choose Us tabs data
// const WHY_TABS = [
//   {
//     id: "impact",
//     label: "Impact",
//     icon: FaBullseye,
//     title: "Delivering Measurable Business Impact",
//     description:
//       "We create technology solutions that drive real business outcomes. From AI-powered applications and cloud transformation to enterprise software, every solution is designed to improve efficiency, accelerate growth, and deliver lasting value.",
//     image: why1,
//   },

//   {
//     id: "development",
//     label: "Development",
//     icon: FaBookOpen,
//     title: "Innovation Through Continuous Development",
//     description:
//       "Technology evolves every day, and so do we. Our team embraces modern frameworks, AI technologies, cloud platforms, and agile development practices to build scalable, secure, and future-ready digital solutions.",
//     image: why2,
//   },

//   {
//     id: "support",
//     label: "Support",
//     icon: FaHandshake,
//     title: "Reliable Support & Long-Term Partnership",
//     description:
//       "Our relationship doesn't end at deployment. We provide proactive maintenance, security updates, performance optimization, and dedicated technical support to ensure your business operates without interruption.",
//     image: why3,
//   },

//   {
//     id: "progress",
//     label: "Progress",
//     icon: FaTrophy,
//     title: "Driving Sustainable Digital Growth",
//     description:
//       "We help organizations embrace digital transformation with confidence. By combining innovation, strategic thinking, and cutting-edge technology, we enable businesses to scale faster, adapt to change, and stay ahead of the competition.",
//     image: why4,
//   },
// ];

// // const POSITIONS = [
// //   {
// //     id: 1,
// //     title: "Backend Developer",
// //     department: "Engineering",
// //     location: "Remote",
// //     type: "Full-Time",
// //     experience: "3 – 5 Years",
// //     image: "https://picsum.photos/seed/guidewire-pos/640/400.jpg",
// //     description:
// //       "We're looking for an experienced Guidewire Developer to design, develop, and implement Guidewire InsuranceSuite solutions. You'll work closely with business analysts and stakeholders to deliver high-quality P&C insurance platforms for enterprise clients.",
// //     tags: ["Guidewire", "Java", "SQL", "InsuranceSuite"],
// //     highlights: ["Enterprise Projects", "Client Facing", "Agile Team"],
// //   },
// //   {
// //     id: 2,
// //     title: "Frontend Developer",
// //     department: "Engineering",
// //     location: "Remote",
// //     type: "Full-Time",
// //     experience: "2 – 4 Years",
// //     image: "https://picsum.photos/seed/frontend-pos/640/400.jpg",
// //     description:
// //       "Build beautiful, performant web applications using React, Next.js, and modern CSS. Collaborate with designers and backend engineers to create seamless user experiences for enterprise clients across the globe.",
// //     tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
// //     highlights: ["Remote First", "Modern Stack", "Open Source"],
// //   },
// //   {
// //     id: 3,
// //     title: "QA Engineer",
// //     department: "Quality",
// //     location: "Remote",
// //     type: "Full-Time",
// //     experience: "2 – 4 Years",
// //     image: "https://picsum.photos/seed/qa-pos/640/400.jpg",
// //     description:
// //       "Design and execute comprehensive test strategies including automated testing with Selenium, Cypress, or Playwright. Ensure the highest quality standards for our software products and client deliverables.",
// //     tags: ["Selenium", "Cypress", "Playwright", "CI/CD"],
// //     highlights: ["Automation Focus", "Cross-Team", "Quality Lead"],
// //   },
// // ];

// const POSITIONS = [
//   {
//     id: 1,
//     title: "SAP Technical Consultant",
//     department: "SAP",
//     location: "Remote",
//     type: "Full-Time",
//     experience: "4 – 7 Years",
//     image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
//     description:
//       "Design, implement, and support SAP solutions including S/4HANA migrations, SAP Security, GRC, and enterprise transformation initiatives for global clients.",
//     tags: ["SAP S/4HANA", "SAP Security", "GRC", "ABAP"],
//     highlights: ["Global Projects", "Enterprise Solutions", "Client Facing"],
//   },
//   {
//     id: 2,
//     title: "Guidewire Developer",
//     department: "Guidewire",
//     location: "Remote",
//     type: "Full-Time",
//     experience: "3 – 6 Years",
//     image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
//     description:
//       "Develop and implement Guidewire InsuranceSuite applications including PolicyCenter, BillingCenter, and ClaimCenter for leading insurance organizations.",
//     tags: ["Guidewire", "Java", "PolicyCenter", "ClaimCenter"],
//     highlights: ["Insurance Domain", "Enterprise Projects", "Agile Team"],
//   },
//   {
//     id: 3,
//     title: "AI Engineer",
//     department: "AI & Engineering",
//     location: "Remote",
//     type: "Full-Time",
//     experience: "3 – 5 Years",
//     image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
//     description:
//       "Build AI-powered applications, intelligent automation solutions, and machine learning services that accelerate digital transformation initiatives.",
//     tags: ["Python", "LLMs", "Machine Learning", "Generative AI"],
//     highlights: ["Innovation Driven", "Cutting-edge AI", "Cloud Native"],
//   },
//   {
//     id: 4,
//     title: "Full Stack Developer",
//     department: "Engineering",
//     location: "Remote",
//     type: "Full-Time",
//     experience: "3 – 5 Years",
//     image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28",
//     description:
//       "Develop scalable enterprise applications using React, Node.js, TypeScript, and cloud technologies while collaborating with cross-functional teams.",
//     tags: ["React", "Node.js", "TypeScript", "AWS"],
//     highlights: ["Modern Stack", "Remote First", "Enterprise Apps"],
//   },
//   {
//     id: 5,
//     title: "QA Automation Engineer",
//     department: "Quality Engineering",
//     location: "Remote",
//     type: "Full-Time",
//     experience: "2 – 5 Years",
//     image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
//     description:
//       "Design and implement automation frameworks and quality strategies to ensure high-quality enterprise software delivery across SAP, Guidewire, and AI platforms.",
//     tags: ["Selenium", "Cypress", "Playwright", "CI/CD"],
//     highlights: ["Automation Focus", "Cross-Team", "Quality Leadership"],
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
//         setErrors((prev) => ({
//           ...prev,
//           [name]: validateField(name, newVal),
//         }));
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
//     className={`reveal text-4xl md:text-5xl font-bold mb-5 ${className}`}
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
//   <section className="relative h-[70vh] md:h-[90vh] overflow-hidden">
//     <img
//       src={banner}
//       alt="Innovise Career"
//       className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8s] ease-out"
//     />
//   </section>
// ));

// /* ---------- POSITIONS ---------- */

// // Department color map
// const DEPT_COLORS = {
//   Engineering: {
//     bg: "rgba(59,130,246,0.12)",
//     color: "#60A5FA",
//     border: "rgba(59,130,246,0.25)",
//   },
//   Quality: {
//     bg: "rgba(34,197,94,0.12)",
//     color: "#4ADE80",
//     border: "rgba(34,197,94,0.25)",
//   },
//   Design: {
//     bg: "rgba(168,85,247,0.12)",
//     color: "#C084FC",
//     border: "rgba(168,85,247,0.25)",
//   },
//   Default: {
//     bg: `${BRAND.gold.primary}18`,
//     color: BRAND.gold.primary,
//     border: `${BRAND.gold.primary}35`,
//   },
// };

// const getDeptColor = (dept) => DEPT_COLORS[dept] || DEPT_COLORS.Default;

// const PositionRow = memo(({ position, onApply }) => {
//   const [expanded, setExpanded] = useState(false);
//   const c = getDeptColor(position.department);

//   return (
//     <article
//       className="reveal position-row group"
//       style={{
//         background: "rgba(255,255,255,0.03)",
//         border: "1px solid rgba(255,255,255,0.07)",
//         borderRadius: 16,
//         transition:
//           "border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease",
//       }}
//     >
//       {/* ── Main row (always visible) ── */}
//       <div className="flex flex-col lg:flex-row lg:items-center gap-5 p-6">
//         {/* Left */}
//         <div className="flex items-start gap-4 flex-1">
//           <div
//             className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
//             style={{
//               background: c.bg,
//               border: `1px solid ${c.border}`,
//             }}
//           >
//             <FaBriefcase className="text-xl" style={{ color: c.color }} />
//           </div>

//           <div className="flex-1 min-w-0">
//             <div className="flex flex-wrap items-center gap-3 mb-2">
//               <h3 className="text-lg font-bold text-white">{position.title}</h3>

//               <span
//                 className="px-3 py-1 rounded-full text-[10px] font-bold uppercase"
//                 style={{
//                   background: c.bg,
//                   color: c.color,
//                   border: `1px solid ${c.border}`,
//                 }}
//               >
//                 {position.department}
//               </span>
//             </div>

//             <div className="flex flex-wrap gap-4 text-sm text-white/50 mb-4">
//               <span className="flex items-center gap-2">
//                 <FaLocationDot style={{ color: BRAND.gold.primary }} />
//                 {position.location}
//               </span>

//               <span className="flex items-center gap-2">
//                 <FaClock style={{ color: BRAND.gold.primary }} />
//                 {position.type}
//               </span>

//               <span className="flex items-center gap-2">
//                 <FaGraduationCap style={{ color: BRAND.gold.primary }} />
//                 {position.experience}
//               </span>
//             </div>

//             <p className="text-sm text-white/60 line-clamp-2 mb-4">
//               {position.description}
//             </p>

//             {/* Skills */}
//             <div className="flex flex-wrap gap-2">
//               {position.tags.map((tag) => (
//                 <span
//                   key={tag}
//                   className="px-3 py-1 rounded-full text-xs"
//                   style={{
//                     background: "rgba(255,255,255,.05)",
//                     border: "1px solid rgba(255,255,255,.08)",
//                     color: "rgba(255,255,255,.75)",
//                   }}
//                 >
//                   #{tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right */}
//         <div className="lg:w-[260px] flex flex-col gap-4">
//           <div className="flex flex-wrap gap-2 justify-start lg:justify-end">
//             {position.highlights.map((item) => (
//               <span
//                 key={item}
//                 className="px-3 py-1 rounded-full text-xs font-semibold"
//                 style={{
//                   background: "rgba(212,175,55,.12)",
//                   color: BRAND.gold.primary,
//                 }}
//               >
//                 {item}
//               </span>
//             ))}
//           </div>

//           <div className="flex gap-3 lg:justify-end">
//             <button
//               onClick={() => setExpanded(!expanded)}
//               className="px-4 py-2 rounded-xl text-sm font-medium"
//               style={{
//                 background: "rgba(255,255,255,.05)",
//                 border: "1px solid rgba(255,255,255,.08)",
//                 color: "rgba(255,255,255,.8)",
//               }}
//             >
//               {expanded ? "Hide Details" : "View Details"}
//             </button>

//             <GoldButton
//               className="px-5 py-2.5 text-sm"
//               onClick={() => onApply(position.title)}
//             >
//               Apply Now
//               <FaArrowRight className="text-xs" />
//             </GoldButton>
//           </div>
//         </div>
//       </div>

//       {/* ── Expanded detail panel ── */}
//       <div
//         style={{
//           maxHeight: expanded ? 500 : 0,
//           overflow: "hidden",
//           transition: "max-height .4s ease",
//         }}
//       >
//         <div
//           className="px-6 pb-6"
//           style={{
//             borderTop: "1px solid rgba(255,255,255,.08)",
//           }}
//         >
//           <div className="pt-6 grid md:grid-cols-2 gap-8">
//             <div>
//               <h4
//                 className="font-semibold mb-3"
//                 style={{
//                   color: BRAND.gold.primary,
//                 }}
//               >
//                 Role Overview
//               </h4>

//               <p className="text-sm text-white/60 leading-7">
//                 {position.description}
//               </p>
//             </div>

//             <div>
//               <h4
//                 className="font-semibold mb-3"
//                 style={{
//                   color: BRAND.gold.primary,
//                 }}
//               >
//                 Key Highlights
//               </h4>

//               <div className="space-y-3">
//                 {position.highlights.map((item) => (
//                   <div key={item} className="flex items-center gap-3">
//                     <FaCheck
//                       style={{
//                         color: BRAND.gold.primary,
//                       }}
//                     />

//                     <span className="text-white/70 text-sm">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// });

// const PositionsSection = memo(({ onApply }) => (
//   <section
//     id="positions"
//     className="py-10 md:py-12 relative overflow-hidden bg-primary-800"
//   >
//     <div className="absolute inset-0 dot-pattern opacity-[0.025]" />

//     {/* Subtle gold glow top-right */}
//     <div
//       className="absolute pointer-events-none"
//       style={{
//         width: 500,
//         height: 500,
//         borderRadius: "50%",
//         filter: "blur(130px)",
//         opacity: 0.05,
//         top: -100,
//         right: -100,
//         background: BRAND.gold.primary,
//       }}
//     />

//     <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
//         <div>
//           <SectionTitle light className="!mb-2">
//             Open <Gold>Positions</Gold>
//           </SectionTitle>
//           <p className="reveal text-base text-white/50 max-w-lg">
//             Find your perfect role and join our growing team of technology
//             professionals.
//           </p>
//         </div>
//         {/* Count pill */}
//         <div
//           className="reveal self-start sm:self-auto inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold flex-shrink-0"
//           style={{
//             background: `${BRAND.gold.primary}12`,
//             color: BRAND.gold.primary,
//             border: `1px solid ${BRAND.gold.primary}25`,
//           }}
//         >
//           <FaBriefcase />
//           {POSITIONS.length} Open Roles
//         </div>
//       </div>

//       {/* Listing rows */}
//       <div className="stagger-children">
//         {POSITIONS.length > 0 ? (
//           <div className="flex flex-col gap-3">
//             {POSITIONS.map((pos) => (
//               <PositionRow key={pos.id} position={pos} onApply={onApply} />
//             ))}
//           </div>
//         ) : (
//           <div
//             className="reveal text-center rounded-3xl p-10 md:p-14 border"
//             style={{
//               background: "rgba(255,255,255,0.03)",
//               borderColor: "rgba(255,255,255,0.08)",
//             }}
//           >
//             {/* Icon */}
//             <div
//               className="mx-auto mb-6 flex items-center justify-center rounded-full"
//               style={{
//                 width: 90,
//                 height: 90,
//                 background: `${BRAND.gold.primary}12`,
//                 color: BRAND.gold.primary,
//               }}
//             >
//               <FaBriefcase size={34} />
//             </div>

//             <h3 className="text-3xl font-bold text-white mb-3">
//               No Open Positions Right Now
//             </h3>

//             <p className="text-white/60 max-w-xl mx-auto leading-7">
//               We're not actively hiring at the moment, but we're always
//               interested in connecting with talented people. Submit your profile
//               and we'll contact you when a suitable opportunity becomes
//               available.
//             </p>

//             <div className="mt-8 flex flex-wrap justify-center gap-4">
//               <a
//                 href="#application-form"
//                 className="px-7 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
//                 style={{
//                   background: BRAND.gold.primary,
//                   color: "#111",
//                 }}
//               >
//                 Submit General Application
//               </a>
//             </div>

//             <p className="mt-8 text-sm text-white/40">
//               Follow us for future career opportunities.
//             </p>
//           </div>
//         )}
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

// /* ---------- RESUME UPLOAD ---------- */
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
//             className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
//             tabIndex={-1}
//             aria-hidden="true"
//           />
//           {file ? (
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
//             <div className="flex flex-col items-center justify-center py-10 px-6">
//               <div
//                 className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300"
//                 style={{
//                   background: isDragging
//                     ? `${BRAND.gold.primary}20`
//                     : `${BRAND.gold.primary}10`,
//                   border: `1px solid ${
//                     isDragging
//                       ? `${BRAND.gold.primary}40`
//                       : `${BRAND.gold.primary}20`
//                   }`,
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
//     <h3 className="text-2xl font-bold mb-3" style={{ color: BRAND.navy.dark }}>
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

// /* ---------- APPLICATION FORM ---------- */
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

//   const isFullyValid = useMemo(
//     () => isValid && !!resume.file,
//     [isValid, resume.file],
//   );

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
//               {/* <SectionLabel>Apply Now</SectionLabel> */}
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
//                 <div className="relative h-36 md:h-36 overflow-hidden bg-primary-800">
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
//                         placeholder="Enter Full Name"
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
//                         placeholder="Enter Email Address"
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
//                       placeholder="Enter Phone Number"
//                       icon={FaPhone}
//                       value={form.phone}
//                       error={errors.phone}
//                       touched={touched.phone}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     <div
//                     // className={
//                     //   errors.position && touched.position
//                     //     ? "field-error-scroll"
//                     //     : ""
//                     // }
//                     >
//                       <FormField
//                         label="Position"
//                         name="position"
//                         type="select"
//                         placeholder="Select a position..."
//                         value={form.position}
//                         error={errors.position}
//                         touched={touched.position}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         options={positionOptions}
//                       />
//                     </div>
//                   </div>

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
//       className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 text-lg font-bold"
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
//         {/* <SectionLabel light>How It Works</SectionLabel> */}
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

// /* ---------- LEADER QUOTE ---------- */
// const LeaderQuoteSection = memo(() => (
//   <section className="py-12 md:py-12 bg-white relative overflow-hidden">
//     {/* Background Accent */}
//     <div className="absolute inset-0 pointer-events-none" />

//     <div className="max-w-8xl mx-auto px-6 lg:px-8 relative z-10">
//       <div className="reveal relative rounded-3xl p-10 md:p-16 overflow-hidden bg-primary-800">
//         {/* Gold Glow */}
//         <div
//           className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
//           style={{
//             background: BRAND.gold.primary,
//             filter: "blur(100px)",
//             opacity: 0.08,
//           }}
//         />

//         <div className="relative z-10">
//           {/* Quote Icon */}
//           <div
//             className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-8"
//             style={{
//               background: `${BRAND.gold.primary}18`,
//               border: `1px solid ${BRAND.gold.primary}35`,
//             }}
//           >
//             <FaQuoteLeft
//               className="text-2xl"
//               style={{ color: BRAND.gold.primary }}
//             />
//           </div>

//           <blockquote>
//             {/* Quote */}
//             <p
//               className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-white/90 mb-10"
//               style={{ letterSpacing: "-0.01em" }}
//             >
//               "Technology is meaningful only when it creates lasting value for
//               people and businesses. At Innovise IT, we combine innovation,
//               artificial intelligence, and strategic thinking to deliver
//               solutions that empower organizations to grow, transform, and lead
//               confidently in the digital era. Our mission is not just to build
//               technology—but to build the future."
//             </p>

//             {/* Divider */}
//             <div
//               className="w-16 h-0.5 mb-8 rounded-full"
//               style={{
//                 background: `linear-gradient(to right, ${BRAND.gold.primary}, transparent)`,
//               }}
//             />

//             {/* Author */}
//             <div className="flex items-center gap-5">
//               <div
//                 className="w-14 h-14 rounded-full flex-shrink-0 bg-cover bg-center"
//                 style={{
//                   backgroundImage: `url(${img1})`,
//                   boxShadow: `0 0 0 2px ${BRAND.gold.primary}50`,
//                 }}
//               />

//               <div>
//                 <p
//                   className="text-sm font-bold uppercase tracking-widest mb-1"
//                   style={{ color: BRAND.gold.primary }}
//                 >
//                   Nishant Gautam
//                 </p>

//                 <span className="text-sm text-white/90 font-light">
//                   Founder & Chief Executive Officer
//                 </span>
//               </div>
//             </div>
//           </blockquote>
//         </div>
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
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-Black mb-6">
//           Don't See the <Gold>Right Role?</Gold>
//         </h2>
//         <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
//           We're always looking for talented individuals. Send us your resume and
//           we'll keep you in mind for future opportunities.
//         </p>
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
//           <GoldLink href="#application-form" className="px-10 py-5 text-lg">
//             Submit Your Resume <FaArrowRight className="text-sm" />
//           </GoldLink>
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
//         .position-row:hover { border-color: rgba(253,185,19,0.22) !important; background: rgba(255,255,255,0.05) !important; box-shadow: 0 8px 32px rgba(0,0,0,0.2); }
//         @media (max-width: 768px) { .step-connector { display: none; } }
//       `}</style>

//       <HeroSection />
//       <LeaderQuoteSection />
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
  FaQuoteLeft,
} from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import img1 from "../assets/leaders/NishantGautam.webp";
import banner from "../assets/banners/careers_banner.png";

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
  {
    id: 6,
    title: "Cyber Security Engineer",
    department: "Cyber Security",
    location: "Remote",
    type: "Full-Time",
    experience: "3 – 6 Years",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    description:
      "Design, implement, and manage enterprise security solutions to protect applications, cloud infrastructure, and critical business data from cyber threats.",
    tags: ["Cyber Security", "IAM", "Network Security", "SIEM"],
    highlights: ["Enterprise Security", "Cloud Security", "Threat Detection"],
  },
  {
    id: 7,
    title: "DevOps Engineer",
    department: "Cloud & Infrastructure",
    location: "Remote",
    type: "Full-Time",
    experience: "3 – 6 Years",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
    description:
      "Design and implement CI/CD pipelines, manage cloud infrastructure, and automate deployment processes to ensure scalable and reliable software delivery.",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
    highlights: ["Cloud Infrastructure", "Automation", "Scalable Systems"],
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
    className={`reveal text-4xl md:text-5xl font-bold mb-5 ${className}`}
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

// ==================== MERGED POSITIONS & FORM SECTION ====================

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
    color: "#FB923C",
    border: "rgba(168,85,247,0.25)",
  },
  SAP: {
    bg: "rgba(59,130,246,0.12)",
    color: "#60A5FA",
    border: "rgba(59,130,246,0.25)",
  },
  Guidewire: {
    bg: "rgba(59,130,246,0.12)",
    color: "#60A5FA",
    border: "rgba(59,130,246,0.25)",
  },

  Default: {
    bg: "rgba(59,130,246,0.12)",
    color: "#60A5FA",
    border: "rgba(59,130,246,0.25)",
  },
};

const getDeptColor = (dept) => {
  // Find matching department or return default
  const key = Object.keys(DEPT_COLORS).find(
    (k) => k !== "Default" && dept.includes(k),
  );
  return DEPT_COLORS[key] || DEPT_COLORS.Default;
};

// ===== POSITION CARD (Compact for left panel) =====
const CompactPositionCard = memo(({ position, isActive, onClick }) => {
  const c = getDeptColor(position.department);

  return (
    <div
      onClick={() => onClick(position)}
      className={`group cursor-pointer transition-all duration-300 rounded-lg p-4 ${
        isActive
          ? "bg-[#FDB913] border-2 border-[#FDB913] shadow-lg shadow-[#FDB913]/20"
          : "bg-white border border-[#E8EDF2] hover:border-[#FDB913] hover:shadow-md hover:shadow-[#FDB913]/10"
      }`}
    >
      <div className="flex items-start gap-3">
        {/* Icon Container */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{
            background: isActive ? "rgba(255,255,255,0.25)" : c.bg,
            border: isActive
              ? "1px solid rgba(255,255,255,0.3)"
              : `1px solid ${c.border}`,
          }}
        >
          <FaBriefcase
            className="text-sm transition-all duration-300"
            style={{
              color: isActive ? BRAND.navy.dark : c.color,
            }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4
            className="text-sm font-semibold truncate transition-colors duration-300"
            style={{
              color: isActive ? BRAND.navy.dark : BRAND.navy.dark,
            }}
          >
            {position.title}
          </h4>

          <div className="flex flex-wrap gap-2 mt-1">
            <span
              className="text-[10px] flex items-center gap-1 transition-colors duration-300"
              style={{
                color: isActive ? BRAND.navy.dark : "#94A3B8",
              }}
            >
              <FaLocationDot size={8} />
              {position.location}
            </span>
            <span
              className="text-[10px] flex items-center gap-1 transition-colors duration-300"
              style={{
                color: isActive ? BRAND.navy.dark : "#94A3B8",
              }}
            >
              <FaClock size={8} />
              {position.type}
            </span>
          </div>

          <div className="flex flex-wrap gap-1 mt-1.5">
            <span
              className="px-2 py-0.5 rounded text-[9px] font-medium transition-all duration-300"
              style={{
                background: isActive ? "rgba(255,255,255,0.2)" : c.bg,
                color: isActive ? BRAND.navy.dark : c.color,
              }}
            >
              {position.department}
            </span>
            <span
              className="px-2 py-0.5 rounded text-[9px] font-medium transition-all duration-300"
              style={{
                background: isActive ? "rgba(255,255,255,0.15)" : "#F1F5F9",
                color: isActive ? BRAND.navy.dark : "#64748B",
              }}
            >
              {position.experience}
            </span>
          </div>
        </div>

        {/* Active Indicator */}
        {isActive && (
          <div className="flex items-center gap-1 flex-shrink-0 mt-1">
            <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
            <span className="text-[8px] font-semibold text-black uppercase tracking-wider">
              Selected
            </span>
          </div>
        )}
      </div>

      {/* Hover effect overlay - subtle */}
      {!isActive && (
        <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#FDB913]/5 to-transparent" />
        </div>
      )}
    </div>
  );
});

// ===== FORM FIELD =====
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

// ===== RESUME UPLOAD =====
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
            <div className="flex flex-col items-center justify-center py-8 px-6">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-all duration-300"
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
                  className="text-xl"
                  style={{ color: BRAND.gold.primary }}
                />
              </div>
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: BRAND.navy.dark }}
              >
                {isDragging
                  ? "Drop your resume here"
                  : "Drag & drop your resume"}
              </p>
              <p className="text-sm text-slate-400">
                or{" "}
                <span
                  className="font-semibold underline"
                  style={{ color: BRAND.gold.primary }}
                >
                  browse files
                </span>
              </p>
              <p className="text-xs text-slate-400 mt-2 flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-medium text-[10px]">
                  PDF
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-medium text-[10px]">
                  DOC
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-medium text-[10px]">
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

// ===== SUCCESS STATE =====
const SuccessState = memo(({ onReset }) => (
  <div className="p-8 text-center animate-[fadeSlideIn_0.4s_ease-out]">
    <div
      className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
      style={{ background: `${BRAND.gold.primary}15` }}
    >
      <FaCircleCheck
        className="text-3xl"
        style={{ color: BRAND.gold.primary }}
      />
    </div>
    <h3 className="text-xl font-bold mb-2" style={{ color: BRAND.navy.dark }}>
      Application Submitted!
    </h3>
    <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
      Thank you for applying. Our team will review your application and get back
      to you within 3–5 business days.
    </p>
    <button
      type="button"
      onClick={onReset}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors hover:bg-slate-100"
      style={{
        color: BRAND.navy.dark,
        border: `1px solid ${BRAND.navy.mid}20`,
      }}
    >
      Submit Another <FaArrowRight className="text-xs" />
    </button>
  </div>
));

// ===== MERGED SECTION - IMPROVED WITH EQUAL WIDTH & HEIGHT =====
const MergedPositionsAndForm = memo(() => {
  // --- State ---
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  // --- Utilize Custom Hooks (The "Better Way") ---
  const {
    form,
    errors,
    touched,
    handleChange,
    handleBlur,
    forceValidate: validateForm,
    resetForm,
    setForm,
  } = useFormValidation();

  const {
    file: resumeFile,
    error: resumeError,
    touched: resumeTouched,
    selectFile: handleResumeSelect,
    removeFile: handleResumeRemove,
    forceValidate: validateResume,
    reset: resetResume,
  } = useResumeUpload();

  // --- Effects ---
  useEffect(() => {
    if (selectedPosition && !submitted) {
      setForm((prev) => ({ ...prev, position: selectedPosition.title }));
      if (window.innerWidth < 1024) {
        setTimeout(
          () =>
            formRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            }),
          300,
        );
      }
    }
  }, [selectedPosition, submitted, setForm]);

  // --- Derived Data ---
  const filteredPositions = useMemo(() => {
    if (!searchTerm.trim()) return POSITIONS;
    const term = searchTerm.toLowerCase().trim();
    return POSITIONS.filter(
      (p) =>
        p.title.toLowerCase().includes(term) ||
        p.department.toLowerCase().includes(term) ||
        p.tags.some((t) => t.toLowerCase().includes(term)),
    );
  }, [searchTerm]);

  const positionOptions = useMemo(() => POSITIONS.map((p) => p.title), []);

  // --- Handlers ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const isFormValid = validateForm();
    const isResumeValid = validateResume();

    if (!isFormValid || !isResumeValid) {
      setIsSubmitting(false);
      document
        .querySelector(".field-error-scroll")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleReset = () => {
    setSubmitted(false);
    resetForm();
    resetResume();
    setSelectedPosition(null);
  };

  // --- Consistent Panel Heights ---
  const panelStyles = "flex flex-col w-full h-[650px] lg:h-[840px]";

  return (
    <section
      id="application-form"
      className="relative overflow-hidden bg-primary-800 py-12 md:py-16"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 dot-pattern opacity-[0.025]" />
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
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 400,
          borderRadius: "50%",
          filter: "blur(130px)",
          opacity: 0.04,
          bottom: -80,
          left: -80,
          background: BRAND.gold.primary,
        }}
      />

      <div className="max-w-8xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[rgba(253,185,19,0.3)]" />
            <span
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: BRAND.gold.primary }}
            >
              Careers
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[rgba(253,185,19,0.3)]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Open <span style={{ color: BRAND.gold.primary }}>Positions</span>
          </h2>
          <p className="text-white/40 text-sm mt-3 max-w-2xl mx-auto">
            Find your perfect role and apply directly. Click any position to
            pre-fill the application form.
          </p>
        </div>

        {/* Grid Layout - Perfect Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* LEFT COLUMN - Positions */}
          <div
            className={`${panelStyles} bg-[rgba(255,255,255,0.03)] rounded-2xl border border-[rgba(255,255,255,0.06)] p-5`}
          >
            {/* Search Bar */}
            <div className="flex items-center gap-3 mb-4 flex-shrink-0">
              <div className="relative flex-1">
                <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/20 text-sm" />
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] text-white placeholder-white/30 focus:border-[rgba(253,185,19,0.4)] focus:outline-none transition-all"
                />
              </div>
              <div
                className="flex-shrink-0 px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap"
                style={{
                  background: `${BRAND.gold.primary}12`,
                  color: BRAND.gold.primary,
                  border: `1px solid ${BRAND.gold.primary}25`,
                }}
              >
                {filteredPositions.length} Open
              </div>
            </div>

            {/* Scrollable List */}
            <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar">
              <div className="space-y-2">
                {filteredPositions.length > 0 ? (
                  filteredPositions.map((pos) => (
                    <CompactPositionCard
                      key={pos.id}
                      position={pos}
                      isActive={selectedPosition?.id === pos.id}
                      onClick={setSelectedPosition}
                    />
                  ))
                ) : (
                  <div className="text-center py-16">
                    <div className="text-white/20 text-4xl mb-3">🔍</div>
                    <p className="text-white/40 text-sm">
                      No positions found matching "{searchTerm}"
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="flex-shrink-0 mt-3 pt-3 border-t border-[rgba(255,255,255,0.04)] text-center">
              <p className="text-[10px] text-white/20 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[rgba(253,185,19,0.3)]" />
                Click a position to auto-fill the form
                <span className="w-1.5 h-1.5 rounded-full bg-[rgba(253,185,19,0.3)]" />
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN - Form */}
          <div
            className={`${panelStyles} bg-white rounded-2xl shadow-2xl overflow-hidden`}
            ref={formRef}
          >
            {/* Form Header */}
            {!submitted && (
              <div
                className="p-5 text-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #0A1628, #12324f)",
                }}
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-2"
                  style={{
                    background: "linear-gradient(135deg, #FDB913, #FFD54F)",
                  }}
                >
                  <FaPaperPlane
                    className="text-xl"
                    style={{ color: BRAND.navy.dark }}
                  />
                </div>
                <h3 className="text-lg font-bold text-white">
                  Start Your Application
                </h3>
                <p className="text-white/40 text-sm mt-0.5">
                  {selectedPosition
                    ? `Applying for: ${selectedPosition.title}`
                    : "Select a position from the list"}
                </p>
              </div>
            )}

            {/* Form Body */}
            <div className="flex-1 overflow-y-auto px-6 py-5 custom-scrollbar-light">
              {submitted ? (
                <div className="flex items-center justify-center h-full">
                  <SuccessState onReset={handleReset} />
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="field-error-scroll">
                      <FormField
                        label="Full Name"
                        name="fullName"
                        placeholder="Enter your full name"
                        icon={FaUser}
                        required
                        value={form.fullName}
                        error={errors.fullName}
                        touched={touched.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="field-error-scroll">
                      <FormField
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        icon={FaEnvelope}
                        required
                        value={form.email}
                        error={errors.email}
                        touched={touched.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone"
                      icon={FaPhone}
                      value={form.phone}
                      error={errors.phone}
                      touched={touched.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div className="field-error-scroll">
                      <FormField
                        label="Position"
                        name="position"
                        type="select"
                        placeholder="Select a position..."
                        icon={FaBriefcase}
                        required
                        value={form.position}
                        error={errors.position}
                        touched={touched.position}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        options={positionOptions}
                      />
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div className="field-error-scroll">
                    <ResumeUpload
                      file={resumeFile}
                      error={resumeError}
                      touched={resumeTouched}
                      onFileSelect={handleResumeSelect}
                      onFileRemove={handleResumeRemove}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold mb-1.5"
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
                      rows={2}
                      placeholder="Tell us about yourself and why you'd be a great fit..."
                      className="w-full px-4 py-3 rounded-xl resize-none text-sm border border-[#E2E8F0] bg-[#F8FAFC] focus:border-[#FDB913] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Terms */}
                  <div className="field-error-scroll">
                    <TermsCheckbox
                      checked={form.agreedToTerms}
                      error={errors.agreedToTerms}
                      touched={touched.agreedToTerms}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>

                  {/* Submit Button */}
                  <GoldButton
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block w-5 h-5 border-2 border-[#0A1628] border-t-transparent rounded-full animate-spin" />{" "}
                        Submitting...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane /> Submit Application{" "}
                        <FaArrowRight className="text-sm" />
                      </>
                    )}
                  </GoldButton>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Global Styles for Scrollbars */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(253,185,19,0.3); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(253,185,19,0.5); }
        
        .custom-scrollbar-light::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar-light::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar-light::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
        .custom-scrollbar-light::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.2); }
        
        .field-error-scroll { scroll-margin-top: 80px; }
        .animate-spin { animation: spin 0.8s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
});

// ==================== OTHER SECTIONS ====================

/* ---------- HERO ---------- */
const HeroSection = memo(() => (
  <section className="relative h-[26vh] md:h-[60vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden">
    <img
      src={banner}
      alt="Innovise Career"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8s] ease-out"
    />
  </section>
));

/* ---------- HIRING PROCESS ---------- */
const ProcessStep = memo(({ step, isLast }) => (
  <div className="reveal text-center relative">
    {!isLast && <div className="hidden lg:block step-connector" />}
    <div
      className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 text-lg font-bold"
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
    <div className="max-w-8xl mx-auto px-6 lg:px-8 relative z-10">
      <div className="reveal relative rounded-3xl p-10 md:p-16 overflow-hidden bg-primary-800">
        <div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: BRAND.gold.primary,
            filter: "blur(100px)",
            opacity: 0.08,
          }}
        />

        <div className="relative z-10">
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

            <div
              className="w-16 h-0.5 mb-8 rounded-full"
              style={{
                background: `linear-gradient(to right, ${BRAND.gold.primary}, transparent)`,
              }}
            />

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
                <span className="text-sm text-white/90 font-light">
                  Founder & Chief Executive Officer
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-Black mb-6">
          Don't See the <Gold>Right Role?</Gold>
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          We're always looking for talented individuals. Send us your resume and
          we'll keep you in mind for future opportunities.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <GoldLink href="#application-form" className="px-10 py-5 text-lg">
            Submit Your Resume <FaArrowRight className="text-sm" />
          </GoldLink>
        </div>
      </div>
    </div>
  </section>
));

// ==================== MAIN PAGE ====================
const CareersPage = () => {
  const wrapperRef = useScrollReveal();

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
        .step-connector { position: absolute; top: 28px; left: calc(50% + 36px); width: calc(100% - 72px); height: 2px; background: linear-gradient(90deg, rgba(253,185,19,0.4), rgba(253,185,19,0.08)); }
        .dot-pattern { background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0); background-size: 40px 40px; }
        .select-arrow { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' fill='none' stroke='%2394A3B8' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 16px center; }
        @media (max-width: 768px) { .step-connector { display: none; } }
      `}</style>

      <HeroSection />
      <LeaderQuoteSection />

      {/* MERGED POSITIONS & FORM */}
      <MergedPositionsAndForm />

      <HiringProcessSection />
      <CTASection />
    </main>
  );
};

export default memo(CareersPage);
