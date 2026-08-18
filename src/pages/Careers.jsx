// // // import React, {
// // //   useState,
// // //   useCallback,
// // //   useMemo,
// // //   useEffect,
// // //   useRef,
// // //   memo,
// // // } from "react";
// // // import {
// // //   FaLaptopCode,
// // //   FaGraduationCap,
// // //   FaUsers,
// // //   FaChartLine,
// // //   FaHeart,
// // //   FaEarthAmericas,
// // //   FaBriefcase,
// // //   FaLocationDot,
// // //   FaClock,
// // //   FaUser,
// // //   FaEnvelope,
// // //   FaPhone,
// // //   FaPaperPlane,
// // //   FaArrowRight,
// // //   FaCheck,
// // //   FaCircleExclamation,
// // //   FaCircleCheck,
// // //   FaCircleXmark,
// // //   FaCloudArrowUp,
// // //   FaFilePdf,
// // //   FaFileWord,
// // //   FaFileLines,
// // //   FaXmark,
// // //   FaBullseye,
// // //   FaBookOpen,
// // //   FaHandshake,
// // //   FaTrophy,
// // //   FaQuoteLeft,
// // // } from "react-icons/fa6";
// // // import img1 from "../assets/leaders/NishantGautam.webp";
// // // import banner from "../assets/banners/careers_banner.jpeg";
// // // import why1 from "../assets/banners/career_why1.png";
// // // import why2 from "../assets/banners/career_why2.png";
// // // import why3 from "../assets/banners/career_why3.png";
// // // import why4 from "../assets/banners/career_why4.png";

// // // // ==================== CONSTANTS ====================
// // // const BRAND = {
// // //   navy: {
// // //     dark: "#0A1628",
// // //     mid: "#12324f",
// // //     light: "#143A63",
// // //     lighter: "#1A4570",
// // //   },
// // //   gold: { primary: "#FDB913", light: "#FFD54F" },
// // // };

// // // const MAX_FILE_SIZE = 5 * 1024 * 1024;
// // // const ACCEPTED_TYPES = [
// // //   "application/pdf",
// // //   "application/msword",
// // //   "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
// // // ];
// // // const ACCEPTED_EXTENSIONS = ".pdf,.doc,.docx";

// // // const BENEFITS = [
// // //   {
// // //     icon: FaLaptopCode,
// // //     title: "Modern Tech Stack",
// // //     desc: "Work with cutting-edge technologies and tools that keep you ahead of the curve.",
// // //   },
// // //   {
// // //     icon: FaGraduationCap,
// // //     title: "Learning & Growth",
// // //     desc: "$5,000 annual learning budget plus certifications and conference sponsorships.",
// // //   },
// // //   {
// // //     icon: FaUsers,
// // //     title: "Great Culture",
// // //     desc: "Collaborative, inclusive, and fun work environment that feels like a second home.",
// // //   },
// // //   {
// // //     icon: FaChartLine,
// // //     title: "Career Growth",
// // //     desc: "Clear promotion paths and leadership opportunities tailored to your ambitions.",
// // //   },
// // //   {
// // //     icon: FaHeart,
// // //     title: "Health & Wellness",
// // //     desc: "Comprehensive medical, dental, and vision coverage for you and your family.",
// // //   },
// // //   {
// // //     icon: FaEarthAmericas,
// // //     title: "Global Opportunities",
// // //     desc: "Work with clients across 30+ countries and expand your global perspective.",
// // //   },
// // // ];

// // // // Why Choose Us tabs data
// // // const WHY_TABS = [
// // //   {
// // //     id: "impact",
// // //     label: "Impact",
// // //     icon: FaBullseye,
// // //     title: "Delivering Measurable Business Impact",
// // //     description:
// // //       "We create technology solutions that drive real business outcomes. From AI-powered applications and cloud transformation to enterprise software, every solution is designed to improve efficiency, accelerate growth, and deliver lasting value.",
// // //     image: why1,
// // //   },

// // //   {
// // //     id: "development",
// // //     label: "Development",
// // //     icon: FaBookOpen,
// // //     title: "Innovation Through Continuous Development",
// // //     description:
// // //       "Technology evolves every day, and so do we. Our team embraces modern frameworks, AI technologies, cloud platforms, and agile development practices to build scalable, secure, and future-ready digital solutions.",
// // //     image: why2,
// // //   },

// // //   {
// // //     id: "support",
// // //     label: "Support",
// // //     icon: FaHandshake,
// // //     title: "Reliable Support & Long-Term Partnership",
// // //     description:
// // //       "Our relationship doesn't end at deployment. We provide proactive maintenance, security updates, performance optimization, and dedicated technical support to ensure your business operates without interruption.",
// // //     image: why3,
// // //   },

// // //   {
// // //     id: "progress",
// // //     label: "Progress",
// // //     icon: FaTrophy,
// // //     title: "Driving Sustainable Digital Growth",
// // //     description:
// // //       "We help organizations embrace digital transformation with confidence. By combining innovation, strategic thinking, and cutting-edge technology, we enable businesses to scale faster, adapt to change, and stay ahead of the competition.",
// // //     image: why4,
// // //   },
// // // ];

// // // // const POSITIONS = [
// // // //   {
// // // //     id: 1,
// // // //     title: "Backend Developer",
// // // //     department: "Engineering",
// // // //     location: "Remote",
// // // //     type: "Full-Time",
// // // //     experience: "3 – 5 Years",
// // // //     image: "https://picsum.photos/seed/guidewire-pos/640/400.jpg",
// // // //     description:
// // // //       "We're looking for an experienced Guidewire Developer to design, develop, and implement Guidewire InsuranceSuite solutions. You'll work closely with business analysts and stakeholders to deliver high-quality P&C insurance platforms for enterprise clients.",
// // // //     tags: ["Guidewire", "Java", "SQL", "InsuranceSuite"],
// // // //     highlights: ["Enterprise Projects", "Client Facing", "Agile Team"],
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     title: "Frontend Developer",
// // // //     department: "Engineering",
// // // //     location: "Remote",
// // // //     type: "Full-Time",
// // // //     experience: "2 – 4 Years",
// // // //     image: "https://picsum.photos/seed/frontend-pos/640/400.jpg",
// // // //     description:
// // // //       "Build beautiful, performant web applications using React, Next.js, and modern CSS. Collaborate with designers and backend engineers to create seamless user experiences for enterprise clients across the globe.",
// // // //     tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
// // // //     highlights: ["Remote First", "Modern Stack", "Open Source"],
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     title: "QA Engineer",
// // // //     department: "Quality",
// // // //     location: "Remote",
// // // //     type: "Full-Time",
// // // //     experience: "2 – 4 Years",
// // // //     image: "https://picsum.photos/seed/qa-pos/640/400.jpg",
// // // //     description:
// // // //       "Design and execute comprehensive test strategies including automated testing with Selenium, Cypress, or Playwright. Ensure the highest quality standards for our software products and client deliverables.",
// // // //     tags: ["Selenium", "Cypress", "Playwright", "CI/CD"],
// // // //     highlights: ["Automation Focus", "Cross-Team", "Quality Lead"],
// // // //   },
// // // // ];

// // // const POSITIONS = [
// // //   {
// // //     id: 1,
// // //     title: "SAP Technical Consultant",
// // //     department: "SAP",
// // //     location: "Remote",
// // //     type: "Full-Time",
// // //     experience: "4 – 7 Years",
// // //     image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
// // //     description:
// // //       "Design, implement, and support SAP solutions including S/4HANA migrations, SAP Security, GRC, and enterprise transformation initiatives for global clients.",
// // //     tags: ["SAP S/4HANA", "SAP Security", "GRC", "ABAP"],
// // //     highlights: ["Global Projects", "Enterprise Solutions", "Client Facing"],
// // //   },
// // //   {
// // //     id: 2,
// // //     title: "Guidewire Developer",
// // //     department: "Guidewire",
// // //     location: "Remote",
// // //     type: "Full-Time",
// // //     experience: "3 – 6 Years",
// // //     image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
// // //     description:
// // //       "Develop and implement Guidewire InsuranceSuite applications including PolicyCenter, BillingCenter, and ClaimCenter for leading insurance organizations.",
// // //     tags: ["Guidewire", "Java", "PolicyCenter", "ClaimCenter"],
// // //     highlights: ["Insurance Domain", "Enterprise Projects", "Agile Team"],
// // //   },
// // //   {
// // //     id: 3,
// // //     title: "AI Engineer",
// // //     department: "AI & Engineering",
// // //     location: "Remote",
// // //     type: "Full-Time",
// // //     experience: "3 – 5 Years",
// // //     image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
// // //     description:
// // //       "Build AI-powered applications, intelligent automation solutions, and machine learning services that accelerate digital transformation initiatives.",
// // //     tags: ["Python", "LLMs", "Machine Learning", "Generative AI"],
// // //     highlights: ["Innovation Driven", "Cutting-edge AI", "Cloud Native"],
// // //   },
// // //   {
// // //     id: 4,
// // //     title: "Full Stack Developer",
// // //     department: "Engineering",
// // //     location: "Remote",
// // //     type: "Full-Time",
// // //     experience: "3 – 5 Years",
// // //     image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28",
// // //     description:
// // //       "Develop scalable enterprise applications using React, Node.js, TypeScript, and cloud technologies while collaborating with cross-functional teams.",
// // //     tags: ["React", "Node.js", "TypeScript", "AWS"],
// // //     highlights: ["Modern Stack", "Remote First", "Enterprise Apps"],
// // //   },
// // //   {
// // //     id: 5,
// // //     title: "QA Automation Engineer",
// // //     department: "Quality Engineering",
// // //     location: "Remote",
// // //     type: "Full-Time",
// // //     experience: "2 – 5 Years",
// // //     image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
// // //     description:
// // //       "Design and implement automation frameworks and quality strategies to ensure high-quality enterprise software delivery across SAP, Guidewire, and AI platforms.",
// // //     tags: ["Selenium", "Cypress", "Playwright", "CI/CD"],
// // //     highlights: ["Automation Focus", "Cross-Team", "Quality Leadership"],
// // //   },
// // // ];

// // // const PROCESS_STEPS = [
// // //   {
// // //     num: 1,
// // //     title: "Apply Online",
// // //     desc: "Submit your resume and details through our application form.",
// // //   },
// // //   {
// // //     num: 2,
// // //     title: "Resume Screening",
// // //     desc: "Our team reviews your application and shortlists candidates.",
// // //   },
// // //   {
// // //     num: 3,
// // //     title: "Technical Interview",
// // //     desc: "Demonstrate your skills through assessments and coding challenges.",
// // //   },
// // //   {
// // //     num: 4,
// // //     title: "Manager Round",
// // //     desc: "Meet your future manager and discuss role expectations.",
// // //   },
// // //   {
// // //     num: 5,
// // //     title: "Offer & Onboarding",
// // //     desc: "Receive your offer letter and begin a smooth onboarding.",
// // //   },
// // // ];

// // // const FORM_FIELDS = [
// // //   "fullName",
// // //   "email",
// // //   "phone",
// // //   "position",
// // //   "message",
// // //   "agreedToTerms",
// // // ];

// // // // ==================== CUSTOM HOOKS ====================

// // // function useScrollReveal(threshold = 0.1) {
// // //   const ref = useRef(null);
// // //   useEffect(() => {
// // //     const el = ref.current;
// // //     if (!el) return;
// // //     const targets = el.querySelectorAll(".reveal");
// // //     if (!targets.length) return;
// // //     const obs = new IntersectionObserver(
// // //       (entries) =>
// // //         entries.forEach((e) => {
// // //           if (e.isIntersecting) e.target.classList.add("visible");
// // //         }),
// // //       { threshold, rootMargin: "0px 0px -30px 0px" },
// // //     );
// // //     targets.forEach((t) => obs.observe(t));
// // //     return () => obs.disconnect();
// // //   }, [threshold]);
// // //   return ref;
// // // }

// // // function useToast() {
// // //   const [toast, setToast] = useState(null);
// // //   const show = useCallback((message, type = "success") => {
// // //     setToast({ message, type, id: Date.now() });
// // //     setTimeout(() => setToast(null), 4000);
// // //   }, []);
// // //   const ToastUI = useMemo(
// // //     () =>
// // //       toast ? (
// // //         <div
// // //           key={toast.id}
// // //           className="fixed top-6 right-6 z-[9999] flex items-center gap-2.5 px-6 py-4 rounded-xl text-sm font-semibold shadow-2xl"
// // //           style={{
// // //             background: toast.type === "success" ? "#065F46" : "#7F1D1D",
// // //             color: toast.type === "success" ? "#A7F3D0" : "#FCA5A5",
// // //             animation: "slideIn 0.4s cubic-bezier(.22,1,.36,1) forwards",
// // //           }}
// // //           role="alert"
// // //         >
// // //           {toast.type === "success" ? <FaCircleCheck /> : <FaCircleXmark />}
// // //           {toast.message}
// // //         </div>
// // //       ) : null,
// // //     [toast],
// // //   );
// // //   return { show, ToastUI };
// // // }

// // // function useResumeUpload() {
// // //   const [file, setFile] = useState(null);
// // //   const [error, setError] = useState("");
// // //   const [touched, setTouched] = useState(false);

// // //   const validateFile = useCallback((f) => {
// // //     if (!f) return "Please upload your resume";
// // //     if (!ACCEPTED_TYPES.includes(f.type))
// // //       return "Please upload a PDF, DOC, or DOCX file";
// // //     if (f.size > MAX_FILE_SIZE) return "File size must be less than 5MB";
// // //     return "";
// // //   }, []);

// // //   const selectFile = useCallback(
// // //     (f) => {
// // //       setTouched(true);
// // //       if (!f) {
// // //         setFile(null);
// // //         setError("Please upload your resume");
// // //         return;
// // //       }
// // //       const err = validateFile(f);
// // //       if (err) {
// // //         setFile(null);
// // //         setError(err);
// // //         return;
// // //       }
// // //       setFile(f);
// // //       setError("");
// // //     },
// // //     [validateFile],
// // //   );

// // //   const removeFile = useCallback(() => {
// // //     setFile(null);
// // //   }, []);

// // //   const forceValidate = useCallback(() => {
// // //     setTouched(true);
// // //     const err = validateFile(file);
// // //     setError(err);
// // //     return !err;
// // //   }, [file, validateFile]);

// // //   const reset = useCallback(() => {
// // //     setFile(null);
// // //     setError("");
// // //     setTouched(false);
// // //   }, []);

// // //   return { file, error, touched, selectFile, removeFile, forceValidate, reset };
// // // }

// // // function useFormValidation() {
// // //   const initialForm = useMemo(
// // //     () => ({
// // //       fullName: "",
// // //       email: "",
// // //       phone: "",
// // //       position: "",
// // //       message: "",
// // //       agreedToTerms: false,
// // //     }),
// // //     [],
// // //   );

// // //   const [form, setForm] = useState(initialForm);
// // //   const [errors, setErrors] = useState({});
// // //   const [touched, setTouched] = useState({});

// // //   const validateField = useCallback((name, value) => {
// // //     switch (name) {
// // //       case "fullName":
// // //         if (!value.trim()) return "Full name is required";
// // //         if (value.trim().length < 2)
// // //           return "Name must be at least 2 characters";
// // //         if (!/^[a-zA-Z\s'-]+$/.test(value.trim()))
// // //           return "Name can only contain letters, spaces, hyphens";
// // //         return "";
// // //       case "email":
// // //         if (!value.trim()) return "Email address is required";
// // //         if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()))
// // //           return "Please enter a valid email address";
// // //         return "";
// // //       case "position":
// // //         if (!value) return "Please select a position";
// // //         return "";
// // //       case "agreedToTerms":
// // //         if (!value) return "You must agree to the privacy policy to continue";
// // //         return "";
// // //       default:
// // //         return "";
// // //     }
// // //   }, []);

// // //   const validateAll = useCallback(() => {
// // //     const newErrors = {};
// // //     FORM_FIELDS.forEach((key) => {
// // //       const err = validateField(key, form[key]);
// // //       if (err) newErrors[key] = err;
// // //     });
// // //     return newErrors;
// // //   }, [form, validateField]);

// // //   const touchAll = useCallback(() => {
// // //     const allTouched = {};
// // //     FORM_FIELDS.forEach((key) => {
// // //       allTouched[key] = true;
// // //     });
// // //     setTouched(allTouched);
// // //   }, []);

// // //   const handleChange = useCallback(
// // //     (e) => {
// // //       const { name, value, type, checked } = e.target;
// // //       const newVal = type === "checkbox" ? checked : value;
// // //       setForm((prev) => ({ ...prev, [name]: newVal }));
// // //       if (touched[name]) {
// // //         setErrors((prev) => ({
// // //           ...prev,
// // //           [name]: validateField(name, newVal),
// // //         }));
// // //       }
// // //     },
// // //     [touched, validateField],
// // //   );

// // //   const handleBlur = useCallback(
// // //     (e) => {
// // //       const { name, value, type, checked } = e.target;
// // //       const val = type === "checkbox" ? checked : value;
// // //       setTouched((prev) => ({ ...prev, [name]: true }));
// // //       setErrors((prev) => ({ ...prev, [name]: validateField(name, val) }));
// // //     },
// // //     [validateField],
// // //   );

// // //   const isValid = useMemo(() => {
// // //     return FORM_FIELDS.every((k) => !validateField(k, form[k]));
// // //   }, [form, validateField]);

// // //   const forceValidate = useCallback(() => {
// // //     touchAll();
// // //     const allErrors = validateAll();
// // //     setErrors(allErrors);
// // //     return Object.keys(allErrors).length === 0;
// // //   }, [touchAll, validateAll]);

// // //   const resetForm = useCallback(() => {
// // //     setForm(initialForm);
// // //     setErrors({});
// // //     setTouched({});
// // //   }, [initialForm]);

// // //   return {
// // //     form,
// // //     errors,
// // //     touched,
// // //     handleChange,
// // //     handleBlur,
// // //     isValid,
// // //     forceValidate,
// // //     resetForm,
// // //     setForm,
// // //   };
// // // }

// // // // ==================== REUSABLE UI ====================

// // // const SectionLabel = memo(({ children, light = false }) => (
// // //   <span
// // //     className="reveal inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
// // //     style={
// // //       light
// // //         ? {
// // //             background: `${BRAND.gold.primary}15`,
// // //             color: BRAND.gold.primary,
// // //             border: `1px solid ${BRAND.gold.primary}30`,
// // //           }
// // //         : {
// // //             background: `${BRAND.navy.mid}08`,
// // //             color: BRAND.navy.dark,
// // //             border: `1px solid ${BRAND.navy.mid}12`,
// // //           }
// // //     }
// // //   >
// // //     {children}
// // //   </span>
// // // ));

// // // const SectionTitle = memo(({ children, light = false, className = "" }) => (
// // //   <h2
// // //     className={`reveal text-4xl md:text-5xl font-bold mb-5 ${className}`}
// // //     style={{ color: light ? "#fff" : BRAND.navy.dark }}
// // //   >
// // //     {children}
// // //   </h2>
// // // ));

// // // const Gold = memo(({ children }) => (
// // //   <span style={{ color: BRAND.gold.primary }}>{children}</span>
// // // ));

// // // const GoldButton = memo(({ children, className = "", ...props }) => (
// // //   <button
// // //     className={`group relative overflow-hidden rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 ${className}`}
// // //     style={{
// // //       background:
// // //         "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
// // //       color: BRAND.navy.dark,
// // //       boxShadow: "0 8px 30px rgba(253,185,19,0.3)",
// // //       ["--tw-ring-color"]: BRAND.gold.primary,
// // //     }}
// // //     {...props}
// // //   >
// // //     <span className="relative z-10 flex items-center justify-center gap-3">
// // //       {children}
// // //     </span>
// // //     <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full group-disabled:hover:-translate-x-full transition-transform duration-700 pointer-events-none">
// // //       <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
// // //     </div>
// // //   </button>
// // // ));

// // // const GoldLink = memo(({ children, className = "", onClick, ...props }) => (
// // //   <a
// // //     className={`group relative inline-flex items-center overflow-hidden rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
// // //     style={{
// // //       background:
// // //         "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
// // //       color: BRAND.navy.dark,
// // //       boxShadow: "0 8px 30px rgba(253,185,19,0.3)",
// // //       ["--tw-ring-color"]: BRAND.gold.primary,
// // //     }}
// // //     onClick={onClick}
// // //     {...props}
// // //   >
// // //     <span className="relative z-10 flex items-center gap-2">{children}</span>
// // //     <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none">
// // //       <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
// // //     </div>
// // //   </a>
// // // ));

// // // // ==================== SECTIONS ====================

// // // /* ---------- HERO ---------- */
// // // const HeroSection = memo(() => (
// // //   <section className="relative h-[70vh] md:h-[90vh] overflow-hidden">
// // //     <img
// // //       src={banner}
// // //       alt="Innovise Career"
// // //       className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8s] ease-out"
// // //     />
// // //   </section>
// // // ));

// // // /* ---------- POSITIONS ---------- */

// // // // Department color map
// // // const DEPT_COLORS = {
// // //   Engineering: {
// // //     bg: "rgba(59,130,246,0.12)",
// // //     color: "#60A5FA",
// // //     border: "rgba(59,130,246,0.25)",
// // //   },
// // //   Quality: {
// // //     bg: "rgba(34,197,94,0.12)",
// // //     color: "#4ADE80",
// // //     border: "rgba(34,197,94,0.25)",
// // //   },
// // //   Design: {
// // //     bg: "rgba(168,85,247,0.12)",
// // //     color: "#C084FC",
// // //     border: "rgba(168,85,247,0.25)",
// // //   },
// // //   Default: {
// // //     bg: `${BRAND.gold.primary}18`,
// // //     color: BRAND.gold.primary,
// // //     border: `${BRAND.gold.primary}35`,
// // //   },
// // // };

// // // const getDeptColor = (dept) => DEPT_COLORS[dept] || DEPT_COLORS.Default;

// // // const PositionRow = memo(({ position, onApply }) => {
// // //   const [expanded, setExpanded] = useState(false);
// // //   const c = getDeptColor(position.department);

// // //   return (
// // //     <article
// // //       className="reveal position-row group"
// // //       style={{
// // //         background: "rgba(255,255,255,0.03)",
// // //         border: "1px solid rgba(255,255,255,0.07)",
// // //         borderRadius: 16,
// // //         transition:
// // //           "border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease",
// // //       }}
// // //     >
// // //       {/* ── Main row (always visible) ── */}
// // //       <div className="flex flex-col lg:flex-row lg:items-center gap-5 p-6">
// // //         {/* Left */}
// // //         <div className="flex items-start gap-4 flex-1">
// // //           <div
// // //             className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
// // //             style={{
// // //               background: c.bg,
// // //               border: `1px solid ${c.border}`,
// // //             }}
// // //           >
// // //             <FaBriefcase className="text-xl" style={{ color: c.color }} />
// // //           </div>

// // //           <div className="flex-1 min-w-0">
// // //             <div className="flex flex-wrap items-center gap-3 mb-2">
// // //               <h3 className="text-lg font-bold text-white">{position.title}</h3>

// // //               <span
// // //                 className="px-3 py-1 rounded-full text-[10px] font-bold uppercase"
// // //                 style={{
// // //                   background: c.bg,
// // //                   color: c.color,
// // //                   border: `1px solid ${c.border}`,
// // //                 }}
// // //               >
// // //                 {position.department}
// // //               </span>
// // //             </div>

// // //             <div className="flex flex-wrap gap-4 text-sm text-white/50 mb-4">
// // //               <span className="flex items-center gap-2">
// // //                 <FaLocationDot style={{ color: BRAND.gold.primary }} />
// // //                 {position.location}
// // //               </span>

// // //               <span className="flex items-center gap-2">
// // //                 <FaClock style={{ color: BRAND.gold.primary }} />
// // //                 {position.type}
// // //               </span>

// // //               <span className="flex items-center gap-2">
// // //                 <FaGraduationCap style={{ color: BRAND.gold.primary }} />
// // //                 {position.experience}
// // //               </span>
// // //             </div>

// // //             <p className="text-sm text-white/60 line-clamp-2 mb-4">
// // //               {position.description}
// // //             </p>

// // //             {/* Skills */}
// // //             <div className="flex flex-wrap gap-2">
// // //               {position.tags.map((tag) => (
// // //                 <span
// // //                   key={tag}
// // //                   className="px-3 py-1 rounded-full text-xs"
// // //                   style={{
// // //                     background: "rgba(255,255,255,.05)",
// // //                     border: "1px solid rgba(255,255,255,.08)",
// // //                     color: "rgba(255,255,255,.75)",
// // //                   }}
// // //                 >
// // //                   #{tag}
// // //                 </span>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Right */}
// // //         <div className="lg:w-[260px] flex flex-col gap-4">
// // //           <div className="flex flex-wrap gap-2 justify-start lg:justify-end">
// // //             {position.highlights.map((item) => (
// // //               <span
// // //                 key={item}
// // //                 className="px-3 py-1 rounded-full text-xs font-semibold"
// // //                 style={{
// // //                   background: "rgba(212,175,55,.12)",
// // //                   color: BRAND.gold.primary,
// // //                 }}
// // //               >
// // //                 {item}
// // //               </span>
// // //             ))}
// // //           </div>

// // //           <div className="flex gap-3 lg:justify-end">
// // //             <button
// // //               onClick={() => setExpanded(!expanded)}
// // //               className="px-4 py-2 rounded-xl text-sm font-medium"
// // //               style={{
// // //                 background: "rgba(255,255,255,.05)",
// // //                 border: "1px solid rgba(255,255,255,.08)",
// // //                 color: "rgba(255,255,255,.8)",
// // //               }}
// // //             >
// // //               {expanded ? "Hide Details" : "View Details"}
// // //             </button>

// // //             <GoldButton
// // //               className="px-5 py-2.5 text-sm"
// // //               onClick={() => onApply(position.title)}
// // //             >
// // //               Apply Now
// // //               <FaArrowRight className="text-xs" />
// // //             </GoldButton>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* ── Expanded detail panel ── */}
// // //       <div
// // //         style={{
// // //           maxHeight: expanded ? 500 : 0,
// // //           overflow: "hidden",
// // //           transition: "max-height .4s ease",
// // //         }}
// // //       >
// // //         <div
// // //           className="px-6 pb-6"
// // //           style={{
// // //             borderTop: "1px solid rgba(255,255,255,.08)",
// // //           }}
// // //         >
// // //           <div className="pt-6 grid md:grid-cols-2 gap-8">
// // //             <div>
// // //               <h4
// // //                 className="font-semibold mb-3"
// // //                 style={{
// // //                   color: BRAND.gold.primary,
// // //                 }}
// // //               >
// // //                 Role Overview
// // //               </h4>

// // //               <p className="text-sm text-white/60 leading-7">
// // //                 {position.description}
// // //               </p>
// // //             </div>

// // //             <div>
// // //               <h4
// // //                 className="font-semibold mb-3"
// // //                 style={{
// // //                   color: BRAND.gold.primary,
// // //                 }}
// // //               >
// // //                 Key Highlights
// // //               </h4>

// // //               <div className="space-y-3">
// // //                 {position.highlights.map((item) => (
// // //                   <div key={item} className="flex items-center gap-3">
// // //                     <FaCheck
// // //                       style={{
// // //                         color: BRAND.gold.primary,
// // //                       }}
// // //                     />

// // //                     <span className="text-white/70 text-sm">{item}</span>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </article>
// // //   );
// // // });

// // // const PositionsSection = memo(({ onApply }) => (
// // //   <section
// // //     id="positions"
// // //     className="py-10 md:py-12 relative overflow-hidden bg-primary-800"
// // //   >
// // //     <div className="absolute inset-0 dot-pattern opacity-[0.025]" />

// // //     {/* Subtle gold glow top-right */}
// // //     <div
// // //       className="absolute pointer-events-none"
// // //       style={{
// // //         width: 500,
// // //         height: 500,
// // //         borderRadius: "50%",
// // //         filter: "blur(130px)",
// // //         opacity: 0.05,
// // //         top: -100,
// // //         right: -100,
// // //         background: BRAND.gold.primary,
// // //       }}
// // //     />

// // //     <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
// // //       {/* Header */}
// // //       <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
// // //         <div>
// // //           <SectionTitle light className="!mb-2">
// // //             Open <Gold>Positions</Gold>
// // //           </SectionTitle>
// // //           <p className="reveal text-base text-white/50 max-w-lg">
// // //             Find your perfect role and join our growing team of technology
// // //             professionals.
// // //           </p>
// // //         </div>
// // //         {/* Count pill */}
// // //         <div
// // //           className="reveal self-start sm:self-auto inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold flex-shrink-0"
// // //           style={{
// // //             background: `${BRAND.gold.primary}12`,
// // //             color: BRAND.gold.primary,
// // //             border: `1px solid ${BRAND.gold.primary}25`,
// // //           }}
// // //         >
// // //           <FaBriefcase />
// // //           {POSITIONS.length} Open Roles
// // //         </div>
// // //       </div>

// // //       {/* Listing rows */}
// // //       <div className="stagger-children">
// // //         {POSITIONS.length > 0 ? (
// // //           <div className="flex flex-col gap-3">
// // //             {POSITIONS.map((pos) => (
// // //               <PositionRow key={pos.id} position={pos} onApply={onApply} />
// // //             ))}
// // //           </div>
// // //         ) : (
// // //           <div
// // //             className="reveal text-center rounded-3xl p-10 md:p-14 border"
// // //             style={{
// // //               background: "rgba(255,255,255,0.03)",
// // //               borderColor: "rgba(255,255,255,0.08)",
// // //             }}
// // //           >
// // //             {/* Icon */}
// // //             <div
// // //               className="mx-auto mb-6 flex items-center justify-center rounded-full"
// // //               style={{
// // //                 width: 90,
// // //                 height: 90,
// // //                 background: `${BRAND.gold.primary}12`,
// // //                 color: BRAND.gold.primary,
// // //               }}
// // //             >
// // //               <FaBriefcase size={34} />
// // //             </div>

// // //             <h3 className="text-3xl font-bold text-white mb-3">
// // //               No Open Positions Right Now
// // //             </h3>

// // //             <p className="text-white/60 max-w-xl mx-auto leading-7">
// // //               We're not actively hiring at the moment, but we're always
// // //               interested in connecting with talented people. Submit your profile
// // //               and we'll contact you when a suitable opportunity becomes
// // //               available.
// // //             </p>

// // //             <div className="mt-8 flex flex-wrap justify-center gap-4">
// // //               <a
// // //                 href="#application-form"
// // //                 className="px-7 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
// // //                 style={{
// // //                   background: BRAND.gold.primary,
// // //                   color: "#111",
// // //                 }}
// // //               >
// // //                 Submit General Application
// // //               </a>
// // //             </div>

// // //             <p className="mt-8 text-sm text-white/40">
// // //               Follow us for future career opportunities.
// // //             </p>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   </section>
// // // ));

// // // /* ---------- FORM COMPONENTS ---------- */

// // // const FieldError = memo(({ message }) => {
// // //   if (!message) return null;
// // //   return (
// // //     <div className="mt-1.5 flex items-start gap-1.5 animate-[fadeSlideIn_0.25s_ease-out]">
// // //       <FaCircleExclamation className="text-xs mt-0.5 flex-shrink-0 text-red-500" />
// // //       <span className="text-sm text-red-500 leading-snug">{message}</span>
// // //     </div>
// // //   );
// // // });

// // // const FormField = memo(
// // //   ({
// // //     label,
// // //     name,
// // //     type = "text",
// // //     placeholder,
// // //     icon: Icon,
// // //     required,
// // //     value,
// // //     error,
// // //     touched,
// // //     onChange,
// // //     onBlur,
// // //     options,
// // //   }) => {
// // //     const isSelect = type === "select";
// // //     const hasError = error && touched;
// // //     const baseCls =
// // //       "w-full rounded-xl transition-all duration-200 outline-none text-sm";
// // //     const stateCls = hasError
// // //       ? "border-red-400 bg-red-50/50 focus:border-red-400 focus:ring-red-100"
// // //       : "border-[#E2E8F0] bg-[#F8FAFC] focus:border-[#FDB913] focus:ring-[rgba(253,185,19,0.15)]";
// // //     const iconColor = hasError ? "#EF4444" : "#94A3B8";

// // //     return (
// // //       <div>
// // //         <label
// // //           htmlFor={name}
// // //           className="block text-sm font-semibold mb-2"
// // //           style={{ color: BRAND.navy.dark }}
// // //         >
// // //           {label} {required && <span className="text-red-500">*</span>}
// // //         </label>
// // //         <div className="relative">
// // //           {Icon && (
// // //             <Icon
// // //               className="absolute left-4 top-1/2 -translate-y-1/2 text-sm transition-colors duration-200"
// // //               style={{ color: iconColor }}
// // //             />
// // //           )}
// // //           {isSelect ? (
// // //             <select
// // //               id={name}
// // //               name={name}
// // //               value={value}
// // //               onChange={onChange}
// // //               onBlur={onBlur}
// // //               required={required}
// // //               className={`${baseCls} ${stateCls} pl-11 pr-10 py-3.5 select-arrow appearance-none cursor-pointer focus:ring-2`}
// // //             >
// // //               <option value="">{placeholder}</option>
// // //               {options?.map((o) => (
// // //                 <option key={o} value={o}>
// // //                   {o}
// // //                 </option>
// // //               ))}
// // //             </select>
// // //           ) : (
// // //             <input
// // //               id={name}
// // //               name={name}
// // //               type={type}
// // //               value={value}
// // //               onChange={onChange}
// // //               onBlur={onBlur}
// // //               placeholder={placeholder}
// // //               required={required}
// // //               className={`${baseCls} ${stateCls} ${Icon ? "pl-11" : "px-4"} pr-4 py-3.5 focus:ring-2`}
// // //             />
// // //           )}
// // //         </div>
// // //         <FieldError message={hasError ? error : ""} />
// // //       </div>
// // //     );
// // //   },
// // // );

// // // const TermsCheckbox = memo(({ checked, error, touched, onChange, onBlur }) => {
// // //   const hasError = error && touched;
// // //   return (
// // //     <div>
// // //       <label
// // //         className="flex items-start gap-3 cursor-pointer group"
// // //         htmlFor="terms"
// // //       >
// // //         <div className="relative mt-0.5 flex-shrink-0">
// // //           <input
// // //             type="checkbox"
// // //             id="terms"
// // //             name="agreedToTerms"
// // //             checked={checked}
// // //             onChange={onChange}
// // //             onBlur={onBlur}
// // //             className="peer sr-only"
// // //           />
// // //           <div
// // //             className="w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200"
// // //             style={{
// // //               borderColor: hasError
// // //                 ? "#EF4444"
// // //                 : checked
// // //                   ? BRAND.gold.primary
// // //                   : "#CBD5E1",
// // //               background: checked ? BRAND.gold.primary : "transparent",
// // //             }}
// // //           >
// // //             <FaCheck
// // //               className="text-[10px] transition-opacity duration-150"
// // //               style={{ color: BRAND.navy.dark, opacity: checked ? 1 : 0 }}
// // //             />
// // //           </div>
// // //         </div>
// // //         <span className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
// // //           I agree to the{" "}
// // //           <a
// // //             href="#"
// // //             className="font-semibold underline"
// // //             style={{ color: BRAND.gold.primary }}
// // //           >
// // //             Privacy Policy
// // //           </a>{" "}
// // //           and consent to my data being processed for recruitment purposes.
// // //         </span>
// // //       </label>
// // //       <div className="ml-8">
// // //         <FieldError message={hasError ? error : ""} />
// // //       </div>
// // //     </div>
// // //   );
// // // });

// // // /* ---------- RESUME UPLOAD ---------- */
// // // const ResumeUpload = memo(
// // //   ({ file, error, touched, onFileSelect, onFileRemove }) => {
// // //     const [isDragging, setIsDragging] = useState(false);
// // //     const inputRef = useRef(null);
// // //     const hasError = error && touched;

// // //     const formatSize = useCallback((bytes) => {
// // //       if (bytes < 1024) return `${bytes} B`;
// // //       if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
// // //       return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
// // //     }, []);

// // //     const getFileIcon = useCallback(() => {
// // //       if (!file) return null;
// // //       const ext = file.name.split(".").pop().toLowerCase();
// // //       if (ext === "pdf") return <FaFilePdf className="text-2xl text-red-500" />;
// // //       if (ext === "doc" || ext === "docx")
// // //         return <FaFileWord className="text-2xl text-blue-600" />;
// // //       return <FaFileLines className="text-2xl text-slate-400" />;
// // //     }, [file]);

// // //     const handleFile = useCallback(
// // //       (f) => {
// // //         if (!f) return;
// // //         onFileSelect(f);
// // //       },
// // //       [onFileSelect],
// // //     );

// // //     const handleDrop = useCallback(
// // //       (e) => {
// // //         e.preventDefault();
// // //         setIsDragging(false);
// // //         handleFile(e.dataTransfer.files[0]);
// // //       },
// // //       [handleFile],
// // //     );

// // //     const handleDragOver = useCallback((e) => {
// // //       e.preventDefault();
// // //       setIsDragging(true);
// // //     }, []);
// // //     const handleDragLeave = useCallback((e) => {
// // //       e.preventDefault();
// // //       setIsDragging(false);
// // //     }, []);

// // //     const handleInputChange = useCallback(
// // //       (e) => {
// // //         handleFile(e.target.files[0]);
// // //         e.target.value = "";
// // //       },
// // //       [handleFile],
// // //     );

// // //     const handleRemove = useCallback(
// // //       (e) => {
// // //         e.stopPropagation();
// // //         onFileRemove();
// // //       },
// // //       [onFileRemove],
// // //     );

// // //     const handleClick = useCallback(() => {
// // //       if (!file) inputRef.current?.click();
// // //     }, [file]);

// // //     const borderStyle = hasError
// // //       ? "border-2 border-dashed border-red-400 bg-red-50/30"
// // //       : isDragging
// // //         ? "border-2 border-dashed border-[#FDB913] bg-[#FDB913]/5"
// // //         : file
// // //           ? "border-2 border-solid border-[#FDB913]/30 bg-[#FDB913]/5"
// // //           : "border-2 border-dashed border-[#CBD5E1] bg-[#F8FAFC] hover:border-[#FDB913]/50 hover:bg-[#FDB913]/5";

// // //     return (
// // //       <div>
// // //         <label
// // //           className="block text-sm font-semibold mb-2"
// // //           style={{ color: BRAND.navy.dark }}
// // //         >
// // //           Upload Resume <span className="text-red-500">*</span>
// // //         </label>
// // //         <div
// // //           onClick={handleClick}
// // //           onDrop={handleDrop}
// // //           onDragOver={handleDragOver}
// // //           onDragLeave={handleDragLeave}
// // //           className={`relative rounded-xl transition-all duration-300 cursor-pointer ${borderStyle}`}
// // //           role="button"
// // //           tabIndex={0}
// // //           aria-label={file ? `Uploaded: ${file.name}` : "Upload resume"}
// // //           onKeyDown={(e) => {
// // //             if (e.key === "Enter" || e.key === " ") {
// // //               e.preventDefault();
// // //               handleClick();
// // //             }
// // //           }}
// // //         >
// // //           <input
// // //             ref={inputRef}
// // //             type="file"
// // //             accept={ACCEPTED_EXTENSIONS}
// // //             onChange={handleInputChange}
// // //             className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
// // //             tabIndex={-1}
// // //             aria-hidden="true"
// // //           />
// // //           {file ? (
// // //             <div className="flex items-center gap-4 p-5">
// // //               <div
// // //                 className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
// // //                 style={{ background: `${BRAND.gold.primary}12` }}
// // //               >
// // //                 {getFileIcon()}
// // //               </div>
// // //               <div className="flex-grow min-w-0">
// // //                 <p
// // //                   className="text-sm font-semibold truncate"
// // //                   style={{ color: BRAND.navy.dark }}
// // //                 >
// // //                   {file.name}
// // //                 </p>
// // //                 <p className="text-xs text-slate-400 mt-0.5">
// // //                   {formatSize(file.size)} • Ready to submit
// // //                 </p>
// // //               </div>
// // //               <div className="flex items-center gap-3 flex-shrink-0">
// // //                 <span
// // //                   className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold"
// // //                   style={{
// // //                     background: `${BRAND.gold.primary}18`,
// // //                     color: BRAND.gold.primary,
// // //                   }}
// // //                 >
// // //                   <FaCheck className="text-[9px]" /> Uploaded
// // //                 </span>
// // //                 <button
// // //                   type="button"
// // //                   onClick={handleRemove}
// // //                   className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200"
// // //                   aria-label="Remove file"
// // //                 >
// // //                   <FaXmark className="text-sm" />
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           ) : (
// // //             <div className="flex flex-col items-center justify-center py-10 px-6">
// // //               <div
// // //                 className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300"
// // //                 style={{
// // //                   background: isDragging
// // //                     ? `${BRAND.gold.primary}20`
// // //                     : `${BRAND.gold.primary}10`,
// // //                   border: `1px solid ${
// // //                     isDragging
// // //                       ? `${BRAND.gold.primary}40`
// // //                       : `${BRAND.gold.primary}20`
// // //                   }`,
// // //                   transform: isDragging
// // //                     ? "scale(1.1) translateY(-2px)"
// // //                     : "scale(1)",
// // //                 }}
// // //               >
// // //                 <FaCloudArrowUp
// // //                   className="text-2xl"
// // //                   style={{ color: BRAND.gold.primary }}
// // //                 />
// // //               </div>
// // //               <p
// // //                 className="text-sm font-semibold mb-1"
// // //                 style={{ color: BRAND.navy.dark }}
// // //               >
// // //                 {isDragging
// // //                   ? "Drop your resume here"
// // //                   : "Drag & drop your resume here"}
// // //               </p>
// // //               <p className="text-sm text-slate-400">
// // //                 or{" "}
// // //                 <span
// // //                   className="font-semibold underline"
// // //                   style={{ color: BRAND.gold.primary }}
// // //                 >
// // //                   browse files
// // //                 </span>{" "}
// // //                 to upload
// // //               </p>
// // //               <p className="text-xs text-slate-400 mt-3 flex items-center gap-2">
// // //                 <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-medium">
// // //                   PDF
// // //                 </span>
// // //                 <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-medium">
// // //                   DOC
// // //                 </span>
// // //                 <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-medium">
// // //                   DOCX
// // //                 </span>
// // //                 <span className="text-slate-300">•</span>
// // //                 Max 5MB
// // //               </p>
// // //             </div>
// // //           )}
// // //         </div>
// // //         <FieldError message={hasError ? error : ""} />
// // //       </div>
// // //     );
// // //   },
// // // );

// // // const SuccessState = memo(({ onReset }) => (
// // //   <div className="p-12 md:p-16 text-center animate-[fadeSlideIn_0.4s_ease-out]">
// // //     <div
// // //       className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
// // //       style={{ background: `${BRAND.gold.primary}15` }}
// // //     >
// // //       <FaCircleCheck
// // //         className="text-4xl"
// // //         style={{ color: BRAND.gold.primary }}
// // //       />
// // //     </div>
// // //     <h3 className="text-2xl font-bold mb-3" style={{ color: BRAND.navy.dark }}>
// // //       Application Submitted!
// // //     </h3>
// // //     <p className="text-slate-500 leading-relaxed mb-8 max-w-md mx-auto">
// // //       Thank you for applying. Our talent acquisition team will review your
// // //       application and get back to you within 3–5 business days.
// // //     </p>
// // //     <button
// // //       type="button"
// // //       onClick={onReset}
// // //       className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-colors hover:bg-slate-100"
// // //       style={{
// // //         color: BRAND.navy.dark,
// // //         border: `1px solid ${BRAND.navy.mid}20`,
// // //       }}
// // //     >
// // //       Submit Another Application <FaArrowRight className="text-xs" />
// // //     </button>
// // //   </div>
// // // ));

// // // /* ---------- APPLICATION FORM ---------- */
// // // const ApplicationFormSection = memo(({ prefillPosition }) => {
// // //   const {
// // //     form,
// // //     errors,
// // //     touched,
// // //     handleChange,
// // //     handleBlur,
// // //     isValid,
// // //     forceValidate,
// // //     resetForm,
// // //     setForm,
// // //   } = useFormValidation();
// // //   const resume = useResumeUpload();
// // //   const { show, ToastUI } = useToast();
// // //   const formRef = useRef(null);
// // //   const [submitted, setSubmitted] = useState(false);

// // //   const isFullyValid = useMemo(
// // //     () => isValid && !!resume.file,
// // //     [isValid, resume.file],
// // //   );

// // //   useEffect(() => {
// // //     if (prefillPosition && !form.position && !submitted) {
// // //       setForm((prev) => ({ ...prev, position: prefillPosition }));
// // //       setTimeout(() => {
// // //         formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
// // //       }, 100);
// // //     }
// // //   }, [prefillPosition, setForm, form.position, submitted]);

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     const formValid = forceValidate();
// // //     const resumeValid = resume.forceValidate();
// // //     if (!formValid || !resumeValid) {
// // //       show("Please fix the highlighted errors below", "error");
// // //       const firstErr = document.querySelector(".field-error-scroll");
// // //       firstErr?.scrollIntoView({ behavior: "smooth", block: "center" });
// // //       return;
// // //     }
// // //     show(
// // //       "Application submitted successfully! We'll be in touch soon.",
// // //       "success",
// // //     );
// // //     setSubmitted(true);
// // //     resetForm();
// // //     resume.reset();
// // //   };

// // //   const handleReset = useCallback(() => {
// // //     setSubmitted(false);
// // //     resetForm();
// // //     resume.reset();
// // //   }, [resetForm, resume]);

// // //   const positionOptions = useMemo(() => POSITIONS.map((p) => p.title), []);

// // //   return (
// // //     <>
// // //       {ToastUI}
// // //       <section
// // //         id="application-form"
// // //         ref={formRef}
// // //         className="py-12 bg-white relative overflow-hidden scroll-mt-8"
// // //       >
// // //         <div
// // //           className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.04]"
// // //           style={{ background: BRAND.gold.primary }}
// // //         />
// // //         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
// // //           <div className="max-w-4xl mx-auto">
// // //             <header className="text-center mb-12">
// // //               {/* <SectionLabel>Apply Now</SectionLabel> */}
// // //               <SectionTitle>
// // //                 Ready to <Gold>Join Us?</Gold>
// // //               </SectionTitle>
// // //               <p className="reveal text-lg text-slate-500">
// // //                 Submit your application and our talent acquisition team will
// // //                 reach out shortly.
// // //               </p>
// // //             </header>

// // //             <div className="reveal rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
// // //               {!submitted && (
// // //                 <div className="relative h-36 md:h-36 overflow-hidden bg-primary-800">
// // //                   <div className="absolute inset-0 flex items-center justify-center">
// // //                     <div className="text-center">
// // //                       <div
// // //                         className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
// // //                         style={{
// // //                           background:
// // //                             "linear-gradient(135deg, #FDB913, #FFD54F)",
// // //                         }}
// // //                       >
// // //                         <FaPaperPlane
// // //                           className="text-2xl"
// // //                           style={{ color: BRAND.navy.dark }}
// // //                         />
// // //                       </div>
// // //                       <h3 className="text-2xl font-bold text-white">
// // //                         Start Your Journey
// // //                       </h3>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               )}

// // //               {submitted ? (
// // //                 <SuccessState onReset={handleReset} />
// // //               ) : (
// // //                 <form
// // //                   onSubmit={handleSubmit}
// // //                   noValidate
// // //                   className="p-8 md:p-12 space-y-6"
// // //                 >
// // //                   <div className="grid md:grid-cols-2 gap-6">
// // //                     <div
// // //                       className={
// // //                         errors.fullName && touched.fullName
// // //                           ? "field-error-scroll"
// // //                           : ""
// // //                       }
// // //                     >
// // //                       <FormField
// // //                         label="Full Name"
// // //                         name="fullName"
// // //                         placeholder="Enter Full Name"
// // //                         icon={FaUser}
// // //                         required
// // //                         value={form.fullName}
// // //                         error={errors.fullName}
// // //                         touched={touched.fullName}
// // //                         onChange={handleChange}
// // //                         onBlur={handleBlur}
// // //                       />
// // //                     </div>
// // //                     <div
// // //                       className={
// // //                         errors.email && touched.email
// // //                           ? "field-error-scroll"
// // //                           : ""
// // //                       }
// // //                     >
// // //                       <FormField
// // //                         label="Email Address"
// // //                         name="email"
// // //                         type="email"
// // //                         placeholder="Enter Email Address"
// // //                         icon={FaEnvelope}
// // //                         required
// // //                         value={form.email}
// // //                         error={errors.email}
// // //                         touched={touched.email}
// // //                         onChange={handleChange}
// // //                         onBlur={handleBlur}
// // //                       />
// // //                     </div>
// // //                     <FormField
// // //                       label="Phone Number"
// // //                       name="phone"
// // //                       type="tel"
// // //                       placeholder="Enter Phone Number"
// // //                       icon={FaPhone}
// // //                       value={form.phone}
// // //                       error={errors.phone}
// // //                       touched={touched.phone}
// // //                       onChange={handleChange}
// // //                       onBlur={handleBlur}
// // //                     />
// // //                     <div
// // //                     // className={
// // //                     //   errors.position && touched.position
// // //                     //     ? "field-error-scroll"
// // //                     //     : ""
// // //                     // }
// // //                     >
// // //                       <FormField
// // //                         label="Position"
// // //                         name="position"
// // //                         type="select"
// // //                         placeholder="Select a position..."
// // //                         value={form.position}
// // //                         error={errors.position}
// // //                         touched={touched.position}
// // //                         onChange={handleChange}
// // //                         onBlur={handleBlur}
// // //                         options={positionOptions}
// // //                       />
// // //                     </div>
// // //                   </div>

// // //                   <div
// // //                     className={
// // //                       resume.error && resume.touched ? "field-error-scroll" : ""
// // //                     }
// // //                   >
// // //                     <ResumeUpload
// // //                       file={resume.file}
// // //                       error={resume.error}
// // //                       touched={resume.touched}
// // //                       onFileSelect={resume.selectFile}
// // //                       onFileRemove={resume.removeFile}
// // //                     />
// // //                   </div>

// // //                   <div>
// // //                     <label
// // //                       htmlFor="message"
// // //                       className="block text-sm font-semibold mb-2"
// // //                       style={{ color: BRAND.navy.dark }}
// // //                     >
// // //                       Cover Letter / Message
// // //                     </label>
// // //                     <textarea
// // //                       id="message"
// // //                       name="message"
// // //                       value={form.message}
// // //                       onChange={handleChange}
// // //                       onBlur={handleBlur}
// // //                       rows={5}
// // //                       placeholder="Tell us about yourself and why you'd be a great fit..."
// // //                       className="form-input w-full px-4 py-3.5 rounded-xl resize-none text-sm"
// // //                     />
// // //                   </div>

// // //                   <div
// // //                     className={
// // //                       errors.agreedToTerms && touched.agreedToTerms
// // //                         ? "field-error-scroll"
// // //                         : ""
// // //                     }
// // //                   >
// // //                     <TermsCheckbox
// // //                       checked={form.agreedToTerms}
// // //                       error={errors.agreedToTerms}
// // //                       touched={touched.agreedToTerms}
// // //                       onChange={handleChange}
// // //                       onBlur={handleBlur}
// // //                     />
// // //                   </div>

// // //                   <GoldButton
// // //                     type="submit"
// // //                     disabled={!isFullyValid}
// // //                     className="w-full py-5 text-lg"
// // //                   >
// // //                     <FaPaperPlane />
// // //                     Submit Application
// // //                     <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
// // //                   </GoldButton>
// // //                 </form>
// // //               )}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </>
// // //   );
// // // });

// // // /* ---------- HIRING PROCESS ---------- */
// // // const ProcessStep = memo(({ step, isLast }) => (
// // //   <div className="reveal text-center relative">
// // //     {!isLast && <div className="hidden lg:block step-connector" />}
// // //     <div
// // //       className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 text-lg font-bold"
// // //       style={{
// // //         background: "linear-gradient(135deg, #FDB913, #FFD54F)",
// // //         color: BRAND.navy.dark,
// // //       }}
// // //     >
// // //       {step.num}
// // //     </div>
// // //     <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
// // //     <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
// // //   </div>
// // // ));

// // // const HiringProcessSection = memo(() => (
// // //   <section className="py-12 relative overflow-hidden bg-primary-800">
// // //     <div className="absolute inset-0 dot-pattern opacity-[0.025]" />
// // //     <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
// // //       <header className="text-center max-w-3xl mx-auto mb-16">
// // //         {/* <SectionLabel light>How It Works</SectionLabel> */}
// // //         <SectionTitle light>
// // //           Our Hiring <Gold>Process</Gold>
// // //         </SectionTitle>
// // //         <p className="reveal text-lg text-gray-400">
// // //           A streamlined 5-step journey from application to onboarding.
// // //         </p>
// // //       </header>
// // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 stagger-children">
// // //         {PROCESS_STEPS.map((s, i) => (
// // //           <ProcessStep
// // //             key={s.num}
// // //             step={s}
// // //             isLast={i === PROCESS_STEPS.length - 1}
// // //           />
// // //         ))}
// // //       </div>
// // //     </div>
// // //   </section>
// // // ));

// // // /* ---------- LEADER QUOTE ---------- */
// // // const LeaderQuoteSection = memo(() => (
// // //   <section className="py-12 md:py-12 bg-white relative overflow-hidden">
// // //     {/* Background Accent */}
// // //     <div className="absolute inset-0 pointer-events-none" />

// // //     <div className="max-w-8xl mx-auto px-6 lg:px-8 relative z-10">
// // //       <div className="reveal relative rounded-3xl p-10 md:p-16 overflow-hidden bg-primary-800">
// // //         {/* Gold Glow */}
// // //         <div
// // //           className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
// // //           style={{
// // //             background: BRAND.gold.primary,
// // //             filter: "blur(100px)",
// // //             opacity: 0.08,
// // //           }}
// // //         />

// // //         <div className="relative z-10">
// // //           {/* Quote Icon */}
// // //           <div
// // //             className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-8"
// // //             style={{
// // //               background: `${BRAND.gold.primary}18`,
// // //               border: `1px solid ${BRAND.gold.primary}35`,
// // //             }}
// // //           >
// // //             <FaQuoteLeft
// // //               className="text-2xl"
// // //               style={{ color: BRAND.gold.primary }}
// // //             />
// // //           </div>

// // //           <blockquote>
// // //             {/* Quote */}
// // //             <p
// // //               className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-white/90 mb-10"
// // //               style={{ letterSpacing: "-0.01em" }}
// // //             >
// // //               "Technology is meaningful only when it creates lasting value for
// // //               people and businesses. At Innovise IT, we combine innovation,
// // //               artificial intelligence, and strategic thinking to deliver
// // //               solutions that empower organizations to grow, transform, and lead
// // //               confidently in the digital era. Our mission is not just to build
// // //               technology—but to build the future."
// // //             </p>

// // //             {/* Divider */}
// // //             <div
// // //               className="w-16 h-0.5 mb-8 rounded-full"
// // //               style={{
// // //                 background: `linear-gradient(to right, ${BRAND.gold.primary}, transparent)`,
// // //               }}
// // //             />

// // //             {/* Author */}
// // //             <div className="flex items-center gap-5">
// // //               <div
// // //                 className="w-14 h-14 rounded-full flex-shrink-0 bg-cover bg-center"
// // //                 style={{
// // //                   backgroundImage: `url(${img1})`,
// // //                   boxShadow: `0 0 0 2px ${BRAND.gold.primary}50`,
// // //                 }}
// // //               />

// // //               <div>
// // //                 <p
// // //                   className="text-sm font-bold uppercase tracking-widest mb-1"
// // //                   style={{ color: BRAND.gold.primary }}
// // //                 >
// // //                   Nishant Gautam
// // //                 </p>

// // //                 <span className="text-sm text-white/90 font-light">
// // //                   Founder & Chief Executive Officer
// // //                 </span>
// // //               </div>
// // //             </div>
// // //           </blockquote>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   </section>
// // // ));

// // // /* ---------- CTA ---------- */
// // // const CTASection = memo(() => (
// // //   <section className="py-12 relative overflow-hidden bg-white">
// // //     <div className="absolute inset-0 dot-pattern opacity-[0.02]" />
// // //     <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
// // //       <div className="reveal max-w-4xl mx-auto text-center">
// // //         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-Black mb-6">
// // //           Don't See the <Gold>Right Role?</Gold>
// // //         </h2>
// // //         <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
// // //           We're always looking for talented individuals. Send us your resume and
// // //           we'll keep you in mind for future opportunities.
// // //         </p>
// // //         <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
// // //           <GoldLink href="#application-form" className="px-10 py-5 text-lg">
// // //             Submit Your Resume <FaArrowRight className="text-sm" />
// // //           </GoldLink>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   </section>
// // // ));

// // // // ==================== MAIN PAGE ====================
// // // const CareersPage = () => {
// // //   const [prefillPosition, setPrefillPosition] = useState(null);
// // //   const wrapperRef = useScrollReveal();

// // //   const handleApply = useCallback((title) => {
// // //     setPrefillPosition(title);
// // //   }, []);

// // //   useEffect(() => {
// // //     if (prefillPosition) {
// // //       const timer = setTimeout(() => setPrefillPosition(null), 600);
// // //       return () => clearTimeout(timer);
// // //     }
// // //   }, [prefillPosition]);

// // //   return (
// // //     <main ref={wrapperRef} role="main">
// // //       <style>{`
// // //         @keyframes slideIn { from { transform: translateX(calc(100% + 40px)); } to { transform: translateX(0); } }
// // //         @keyframes fadeSlideIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
// // //         .reveal { opacity: 0; transform: translateY(36px); transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1); }
// // //         .reveal.visible { opacity: 1; transform: translateY(0); }
// // //         .stagger-children .reveal:nth-child(1) { transition-delay: 0s; }
// // //         .stagger-children .reveal:nth-child(2) { transition-delay: 0.08s; }
// // //         .stagger-children .reveal:nth-child(3) { transition-delay: 0.16s; }
// // //         .stagger-children .reveal:nth-child(4) { transition-delay: 0.24s; }
// // //         .stagger-children .reveal:nth-child(5) { transition-delay: 0.32s; }
// // //         .stagger-children .reveal:nth-child(6) { transition-delay: 0.40s; }
// // //         .benefit-card { border: 1px solid rgba(0,0,0,0.06); transition: all 0.45s ease; }
// // //         .benefit-card:hover { border-color: rgba(253,185,19,0.25); box-shadow: 0 20px 50px rgba(253,185,19,0.1); transform: translateY(-6px); }
// // //         .benefit-card:hover .benefit-icon { background: rgba(253,185,19,0.15) !important; transform: scale(1.08) rotate(3deg); }
// // //         .benefit-card:hover .benefit-glow { opacity: 1; }
// // //         .benefit-icon { transition: all 0.45s ease; }
// // //         .benefit-glow { opacity: 0; transition: opacity 0.5s ease; }
// // //         .form-input { border: 1px solid #E2E8F0; background: #F8FAFC; transition: border-color 0.25s, box-shadow 0.25s; }
// // //         .form-input:focus { outline: none; border-color: #FDB913; box-shadow: 0 0 0 3px rgba(253,185,19,0.15); }
// // //         .step-connector { position: absolute; top: 28px; left: calc(50% + 36px); width: calc(100% - 72px); height: 2px; background: linear-gradient(90deg, rgba(253,185,19,0.4), rgba(253,185,19,0.08)); }
// // //         .dot-pattern { background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0); background-size: 40px 40px; }
// // //         .select-arrow { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' fill='none' stroke='%2394A3B8' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 16px center; }
// // //         .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
// // //         .position-row:hover { border-color: rgba(253,185,19,0.22) !important; background: rgba(255,255,255,0.05) !important; box-shadow: 0 8px 32px rgba(0,0,0,0.2); }
// // //         @media (max-width: 768px) { .step-connector { display: none; } }
// // //       `}</style>

// // //       <HeroSection />
// // //       <LeaderQuoteSection />
// // //       <PositionsSection onApply={handleApply} />
// // //       <ApplicationFormSection prefillPosition={prefillPosition} />
// // //       <HiringProcessSection />
// // //       <CTASection />
// // //     </main>
// // //   );
// // // };

// // // export default memo(CareersPage);

// import React, {
//   useState,
//   useCallback,
//   useMemo,
//   useEffect,
//   useRef,
//   memo,
// } from "react";
// import {
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
//   FaQuoteLeft,
// } from "react-icons/fa6";
// import { FaSearch } from "react-icons/fa";

// // ==================== CONSTANTS ====================

// const MAX_FILE_SIZE = 5 * 1024 * 1024;
// const ACCEPTED_TYPES = [
//   "application/pdf",
//   "application/msword",
//   "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
// ];
// const ACCEPTED_EXTENSIONS = ".pdf,.doc,.docx";

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
//   {
//     id: 6,
//     title: "Cyber Security Engineer",
//     department: "Cyber Security",
//     location: "Remote",
//     type: "Full-Time",
//     experience: "3 – 6 Years",
//     image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
//     description:
//       "Design, implement, and manage enterprise security solutions to protect applications, cloud infrastructure, and critical business data from cyber threats.",
//     tags: ["Cyber Security", "IAM", "Network Security", "SIEM"],
//     highlights: ["Enterprise Security", "Cloud Security", "Threat Detection"],
//   },
//   {
//     id: 7,
//     title: "DevOps Engineer",
//     department: "Cloud & Infrastructure",
//     location: "Remote",
//     type: "Full-Time",
//     experience: "3 – 6 Years",
//     image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
//     description:
//       "Design and implement CI/CD pipelines, manage cloud infrastructure, and automate deployment processes to ensure scalable and reliable software delivery.",
//     tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
//     highlights: ["Cloud Infrastructure", "Automation", "Scalable Systems"],
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

// // ==================== MERGED POSITIONS & FORM SECTION ====================

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
//     color: "#FB923C",
//     border: "rgba(168,85,247,0.25)",
//   },
//   SAP: {
//     bg: "rgba(59,130,246,0.12)",
//     color: "#60A5FA",
//     border: "rgba(59,130,246,0.25)",
//   },
//   Guidewire: {
//     bg: "rgba(59,130,246,0.12)",
//     color: "#60A5FA",
//     border: "rgba(59,130,246,0.25)",
//   },

//   Default: {
//     bg: "rgba(59,130,246,0.12)",
//     color: "#60A5FA",
//     border: "rgba(59,130,246,0.25)",
//   },
// };

// const getDeptColor = (dept) => {
//   // Find matching department or return default
//   const key = Object.keys(DEPT_COLORS).find(
//     (k) => k !== "Default" && dept.includes(k),
//   );
//   return DEPT_COLORS[key] || DEPT_COLORS.Default;
// };

// // ===== POSITION CARD (Compact for left panel) =====
// const CompactPositionCard = memo(({ position, isActive, onClick }) => {
//   const c = getDeptColor(position.department);

//   return (
//     <div
//       onClick={() => onClick(position)}
//       className={`group cursor-pointer transition-all duration-300 rounded-lg p-4 ${
//         isActive
//           ? "bg-[#FDB913] border-2 border-[#FDB913] shadow-lg shadow-[#FDB913]/20"
//           : "bg-white border border-[#E8EDF2] hover:border-[#FDB913] hover:shadow-md hover:shadow-[#FDB913]/10"
//       }`}
//     >
//       <div className="flex items-start gap-3">
//         {/* Icon Container */}
//         <div
//           className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
//           style={{
//             background: isActive ? "rgba(255,255,255,0.25)" : c.bg,
//             border: isActive
//               ? "1px solid rgba(255,255,255,0.3)"
//               : `1px solid ${c.border}`,
//           }}
//         >
//           <FaBriefcase
//             className="text-sm transition-all duration-300"
//             style={{
//               color: isActive ? BRAND.navy.dark : c.color,
//             }}
//           />
//         </div>

//         {/* Content */}
//         <div className="flex-1 min-w-0">
//           <h4
//             className="text-sm font-semibold truncate transition-colors duration-300"
//             style={{
//               color: isActive ? BRAND.navy.dark : BRAND.navy.dark,
//             }}
//           >
//             {position.title}
//           </h4>

//           <div className="flex flex-wrap gap-2 mt-1">
//             <span
//               className="text-[10px] flex items-center gap-1 transition-colors duration-300"
//               style={{
//                 color: isActive ? BRAND.navy.dark : "#94A3B8",
//               }}
//             >
//               <FaLocationDot size={8} />
//               {position.location}
//             </span>
//             <span
//               className="text-[10px] flex items-center gap-1 transition-colors duration-300"
//               style={{
//                 color: isActive ? BRAND.navy.dark : "#94A3B8",
//               }}
//             >
//               <FaClock size={8} />
//               {position.type}
//             </span>
//           </div>

//           <div className="flex flex-wrap gap-1 mt-1.5">
//             <span
//               className="px-2 py-0.5 rounded text-[9px] font-medium transition-all duration-300"
//               style={{
//                 background: isActive ? "rgba(255,255,255,0.2)" : c.bg,
//                 color: isActive ? BRAND.navy.dark : c.color,
//               }}
//             >
//               {position.department}
//             </span>
//             <span
//               className="px-2 py-0.5 rounded text-[9px] font-medium transition-all duration-300"
//               style={{
//                 background: isActive ? "rgba(255,255,255,0.15)" : "#F1F5F9",
//                 color: isActive ? BRAND.navy.dark : "#64748B",
//               }}
//             >
//               {position.experience}
//             </span>
//           </div>
//         </div>

//         {/* Active Indicator */}
//         {isActive && (
//           <div className="flex items-center gap-1 flex-shrink-0 mt-1">
//             <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
//             <span className="text-[8px] font-semibold text-black uppercase tracking-wider">
//               Selected
//             </span>
//           </div>
//         )}
//       </div>

//       {/* Hover effect overlay - subtle */}
//       {!isActive && (
//         <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden">
//           <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#FDB913]/5 to-transparent" />
//         </div>
//       )}
//     </div>
//   );
// });

// // ===== FORM FIELD =====
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

// // ===== RESUME UPLOAD =====
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
//             <div className="flex flex-col items-center justify-center py-8 px-6">
//               <div
//                 className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-all duration-300"
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
//                   className="text-xl"
//                   style={{ color: BRAND.gold.primary }}
//                 />
//               </div>
//               <p
//                 className="text-sm font-semibold mb-1"
//                 style={{ color: BRAND.navy.dark }}
//               >
//                 {isDragging
//                   ? "Drop your resume here"
//                   : "Drag & drop your resume"}
//               </p>
//               <p className="text-sm text-slate-400">
//                 or{" "}
//                 <span
//                   className="font-semibold underline"
//                   style={{ color: BRAND.gold.primary }}
//                 >
//                   browse files
//                 </span>
//               </p>
//               <p className="text-xs text-slate-400 mt-2 flex items-center gap-2">
//                 <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-medium text-[10px]">
//                   PDF
//                 </span>
//                 <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-medium text-[10px]">
//                   DOC
//                 </span>
//                 <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-medium text-[10px]">
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

// // ===== SUCCESS STATE =====
// const SuccessState = memo(({ onReset }) => (
//   <div className="p-8 text-center animate-[fadeSlideIn_0.4s_ease-out]">
//     <div
//       className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
//       style={{ background: `${BRAND.gold.primary}15` }}
//     >
//       <FaCircleCheck
//         className="text-3xl"
//         style={{ color: BRAND.gold.primary }}
//       />
//     </div>
//     <h3 className="text-xl font-bold mb-2" style={{ color: BRAND.navy.dark }}>
//       Application Submitted!
//     </h3>
//     <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
//       Thank you for applying. Our team will review your application and get back
//       to you within 3–5 business days.
//     </p>
//     <button
//       type="button"
//       onClick={onReset}
//       className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors hover:bg-slate-100"
//       style={{
//         color: BRAND.navy.dark,
//         border: `1px solid ${BRAND.navy.mid}20`,
//       }}
//     >
//       Submit Another <FaArrowRight className="text-xs" />
//     </button>
//   </div>
// ));

// // ===== MERGED SECTION - IMPROVED WITH EQUAL WIDTH & HEIGHT =====
// const MergedPositionsAndForm = memo(() => {
//   // --- State ---
//   const [selectedPosition, setSelectedPosition] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const formRef = useRef(null);

//   // --- Utilize Custom Hooks (The "Better Way") ---
//   const {
//     form,
//     errors,
//     touched,
//     handleChange,
//     handleBlur,
//     forceValidate: validateForm,
//     resetForm,
//     setForm,
//   } = useFormValidation();

//   const {
//     file: resumeFile,
//     error: resumeError,
//     touched: resumeTouched,
//     selectFile: handleResumeSelect,
//     removeFile: handleResumeRemove,
//     forceValidate: validateResume,
//     reset: resetResume,
//   } = useResumeUpload();

//   // --- Effects ---
//   useEffect(() => {
//     if (selectedPosition && !submitted) {
//       setForm((prev) => ({ ...prev, position: selectedPosition.title }));
//       if (window.innerWidth < 1024) {
//         setTimeout(
//           () =>
//             formRef.current?.scrollIntoView({
//               behavior: "smooth",
//               block: "start",
//             }),
//           300,
//         );
//       }
//     }
//   }, [selectedPosition, submitted, setForm]);

//   // --- Derived Data ---
//   const filteredPositions = useMemo(() => {
//     if (!searchTerm.trim()) return POSITIONS;
//     const term = searchTerm.toLowerCase().trim();
//     return POSITIONS.filter(
//       (p) =>
//         p.title.toLowerCase().includes(term) ||
//         p.department.toLowerCase().includes(term) ||
//         p.tags.some((t) => t.toLowerCase().includes(term)),
//     );
//   }, [searchTerm]);

//   const positionOptions = useMemo(() => POSITIONS.map((p) => p.title), []);

//   // --- Handlers ---
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const isFormValid = validateForm();
//     const isResumeValid = validateResume();

//     if (!isFormValid || !isResumeValid) {
//       setIsSubmitting(false);
//       document
//         .querySelector(".field-error-scroll")
//         ?.scrollIntoView({ behavior: "smooth", block: "center" });
//       return;
//     }

//     await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API
//     setSubmitted(true);
//     setIsSubmitting(false);
//   };

//   const handleReset = () => {
//     setSubmitted(false);
//     resetForm();
//     resetResume();
//     setSelectedPosition(null);
//   };

//   // --- Consistent Panel Heights ---
//   const panelStyles = "flex flex-col w-full h-[650px] lg:h-[840px]";

//   return (
//     <section
//       id="application-form"
//       className="relative overflow-hidden bg-primary-800 py-12 md:py-16"
//     >
//       {/* Background Decorations */}
//       <div className="absolute inset-0 dot-pattern opacity-[0.025]" />
//       <div
//         className="absolute pointer-events-none"
//         style={{
//           width: 500,
//           height: 500,
//           borderRadius: "50%",
//           filter: "blur(130px)",
//           opacity: 0.05,
//           top: -100,
//           right: -100,
//           background: BRAND.gold.primary,
//         }}
//       />
//       <div
//         className="absolute pointer-events-none"
//         style={{
//           width: 400,
//           height: 400,
//           borderRadius: "50%",
//           filter: "blur(130px)",
//           opacity: 0.04,
//           bottom: -80,
//           left: -80,
//           background: BRAND.gold.primary,
//         }}
//       />

//       <div className="max-w-8xl mx-auto px-4 lg:px-8 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-10">
//           <div className="flex items-center justify-center gap-3 mb-3">
//             <div className="h-px w-12 bg-gradient-to-r from-transparent to-[rgba(253,185,19,0.3)]" />
//             <span
//               className="text-xs font-bold uppercase tracking-[0.2em]"
//               style={{ color: BRAND.gold.primary }}
//             >
//               Careers
//             </span>
//             <div className="h-px w-12 bg-gradient-to-l from-transparent to-[rgba(253,185,19,0.3)]" />
//           </div>
//           <h2 className="text-3xl md:text-5xl font-bold text-white">
//             Open <span style={{ color: BRAND.gold.primary }}>Positions</span>
//           </h2>
//           <p className="text-white/40 text-sm mt-3 max-w-2xl mx-auto">
//             Find your perfect role and apply directly. Click any position to
//             pre-fill the application form.
//           </p>
//         </div>

//         {/* Grid Layout - Perfect Alignment */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
//           {/* LEFT COLUMN - Positions */}
//           <div
//             className={`${panelStyles} bg-[rgba(255,255,255,0.03)] rounded-2xl border border-[rgba(255,255,255,0.06)] p-5`}
//           >
//             {/* Search Bar */}
//             <div className="flex items-center gap-3 mb-4 flex-shrink-0">
//               <div className="relative flex-1">
//                 <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/20 text-sm" />
//                 <input
//                   type="text"
//                   placeholder="Search positions..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] text-white placeholder-white/30 focus:border-[rgba(253,185,19,0.4)] focus:outline-none transition-all"
//                 />
//               </div>
//               <div
//                 className="flex-shrink-0 px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap"
//                 style={{
//                   background: `${BRAND.gold.primary}12`,
//                   color: BRAND.gold.primary,
//                   border: `1px solid ${BRAND.gold.primary}25`,
//                 }}
//               >
//                 {filteredPositions.length} Open
//               </div>
//             </div>

//             {/* Scrollable List */}
//             <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar">
//               <div className="space-y-2">
//                 {filteredPositions.length > 0 ? (
//                   filteredPositions.map((pos) => (
//                     <CompactPositionCard
//                       key={pos.id}
//                       position={pos}
//                       isActive={selectedPosition?.id === pos.id}
//                       onClick={setSelectedPosition}
//                     />
//                   ))
//                 ) : (
//                   <div className="text-center py-16">
//                     <div className="text-white/20 text-4xl mb-3">🔍</div>
//                     <p className="text-white/40 text-sm">
//                       No positions found matching "{searchTerm}"
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Footer */}
//             <div className="flex-shrink-0 mt-3 pt-3 border-t border-[rgba(255,255,255,0.04)] text-center">
//               <p className="text-[10px] text-white/20 flex items-center justify-center gap-2">
//                 <span className="w-1.5 h-1.5 rounded-full bg-[rgba(253,185,19,0.3)]" />
//                 Click a position to auto-fill the form
//                 <span className="w-1.5 h-1.5 rounded-full bg-[rgba(253,185,19,0.3)]" />
//               </p>
//             </div>
//           </div>

//           {/* RIGHT COLUMN - Form */}
//           <div
//             className={`${panelStyles} bg-white rounded-2xl shadow-2xl overflow-hidden`}
//             ref={formRef}
//           >
//             {/* Form Header */}
//             {!submitted && (
//               <div
//                 className="p-5 text-center flex-shrink-0"
//                 style={{
//                   background: "linear-gradient(135deg, #0A1628, #12324f)",
//                 }}
//               >
//                 <div
//                   className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-2"
//                   style={{
//                     background: "linear-gradient(135deg, #FDB913, #FFD54F)",
//                   }}
//                 >
//                   <FaPaperPlane
//                     className="text-xl"
//                     style={{ color: BRAND.navy.dark }}
//                   />
//                 </div>
//                 <h3 className="text-lg font-bold text-white">
//                   Start Your Application
//                 </h3>
//                 <p className="text-white/40 text-sm mt-0.5">
//                   {selectedPosition
//                     ? `Applying for: ${selectedPosition.title}`
//                     : "Select a position from the list"}
//                 </p>
//               </div>
//             )}

//             {/* Form Body */}
//             <div className="flex-1 overflow-y-auto px-6 py-5 custom-scrollbar-light">
//               {submitted ? (
//                 <div className="flex items-center justify-center h-full">
//                   <SuccessState onReset={handleReset} />
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} noValidate className="space-y-4">
//                   {/* Row 1 */}
//                   <div className="grid sm:grid-cols-2 gap-4">
//                     <div className="field-error-scroll">
//                       <FormField
//                         label="Full Name"
//                         name="fullName"
//                         placeholder="Enter your full name"
//                         icon={FaUser}
//                         required
//                         value={form.fullName}
//                         error={errors.fullName}
//                         touched={touched.fullName}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                       />
//                     </div>
//                     <div className="field-error-scroll">
//                       <FormField
//                         label="Email Address"
//                         name="email"
//                         type="email"
//                         placeholder="Enter your email"
//                         icon={FaEnvelope}
//                         required
//                         value={form.email}
//                         error={errors.email}
//                         touched={touched.email}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                       />
//                     </div>
//                   </div>

//                   {/* Row 2 */}
//                   <div className="grid sm:grid-cols-2 gap-4">
//                     <FormField
//                       label="Phone Number"
//                       name="phone"
//                       type="tel"
//                       placeholder="Enter your phone"
//                       icon={FaPhone}
//                       value={form.phone}
//                       error={errors.phone}
//                       touched={touched.phone}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     <div className="field-error-scroll">
//                       <FormField
//                         label="Position"
//                         name="position"
//                         type="select"
//                         placeholder="Select a position..."
//                         icon={FaBriefcase}
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

//                   {/* Resume Upload */}
//                   <div className="field-error-scroll">
//                     <ResumeUpload
//                       file={resumeFile}
//                       error={resumeError}
//                       touched={resumeTouched}
//                       onFileSelect={handleResumeSelect}
//                       onFileRemove={handleResumeRemove}
//                     />
//                   </div>

//                   {/* Message */}
//                   <div>
//                     <label
//                       htmlFor="message"
//                       className="block text-sm font-semibold mb-1.5"
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
//                       rows={2}
//                       placeholder="Tell us about yourself and why you'd be a great fit..."
//                       className="w-full px-4 py-3 rounded-xl resize-none text-sm border border-[#E2E8F0] bg-[#F8FAFC] focus:border-[#FDB913] focus:outline-none transition-all"
//                     />
//                   </div>

//                   {/* Terms */}
//                   <div className="field-error-scroll">
//                     <TermsCheckbox
//                       checked={form.agreedToTerms}
//                       error={errors.agreedToTerms}
//                       touched={touched.agreedToTerms}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                   </div>

//                   {/* Submit Button */}
//                   <GoldButton
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full py-3.5 text-base"
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <span className="inline-block w-5 h-5 border-2 border-[#0A1628] border-t-transparent rounded-full animate-spin" />{" "}
//                         Submitting...
//                       </>
//                     ) : (
//                       <>
//                         <FaPaperPlane /> Submit Application{" "}
//                         <FaArrowRight className="text-sm" />
//                       </>
//                     )}
//                   </GoldButton>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Global Styles for Scrollbars */}
//       <style>{`
//         .custom-scrollbar::-webkit-scrollbar { width: 4px; }
//         .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
//         .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(253,185,19,0.3); border-radius: 10px; }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(253,185,19,0.5); }

//         .custom-scrollbar-light::-webkit-scrollbar { width: 4px; }
//         .custom-scrollbar-light::-webkit-scrollbar-track { background: transparent; }
//         .custom-scrollbar-light::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
//         .custom-scrollbar-light::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.2); }

//         .field-error-scroll { scroll-margin-top: 80px; }
//         .animate-spin { animation: spin 0.8s linear infinite; }
//         @keyframes spin { to { transform: rotate(360deg); } }
//       `}</style>
//     </section>
//   );
// });

// // ==================== OTHER SECTIONS ====================

// /* ---------- HERO ---------- */
// const HeroSection = memo(() => (
//   <section className="relative h-[26vh] md:h-[60vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden">
//     <img
//       src={banner}
//       alt="Innovise Career"
//       className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8s] ease-out"
//     />
//   </section>
// ));

// const HiringProcessSection = memo(() => (
//   <section className="py-12 relative overflow-hidden bg-primary-800">
//     <div className="absolute inset-0 dot-pattern opacity-[0.025]" />
//     <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
//       <header className="text-center max-w-3xl mx-auto mb-16">
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
//   const wrapperRef = useScrollReveal();

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
//         .step-connector { position: absolute; top: 28px; left: calc(50% + 36px); width: calc(100% - 72px); height: 2px; background: linear-gradient(90deg, rgba(253,185,19,0.4), rgba(253,185,19,0.08)); }
//         .dot-pattern { background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0); background-size: 40px 40px; }
//         .select-arrow { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' fill='none' stroke='%2394A3B8' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 16px center; }
//         @media (max-width: 768px) { .step-connector { display: none; } }
//       `}</style>

//       <HeroSection />
//       <LeaderQuoteSection />

//       {/* MERGED POSITIONS & FORM */}
//       <MergedPositionsAndForm />

//       <HiringProcessSection />
//       <CTASection />
//     </main>
//   );
// };

// export default memo(CareersPage);

// import React, { useState, useMemo, useEffect, memo } from "react";
// import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
// import {
//   FaSearch,
//   FaMapMarkerAlt,
//   FaBriefcase,
//   FaClock,
//   FaArrowRight,
//   FaArrowLeft,
//   FaCheckCircle,
//   FaCloudUploadAlt,
//   FaFileAlt,
//   FaTimes,
//   FaUser,
//   FaEnvelope,
//   FaPhone,
//   FaLinkedin,
//   FaGithub,
//   FaGlobe,
//   FaUsers,
//   FaDollarSign,
//   FaCalendarAlt,
//   FaShieldAlt,
//   FaCode,
//   FaQuoteLeft,
// } from "react-icons/fa";
// import banner from "../assets/banners/careers_banner.png";
// import img1 from "../assets/leaders/NishantGautam.webp";

// const BRAND = {
//   navy: {
//     dark: "#0A1628",
//     mid: "#12324f",
//     light: "#143A63",
//     lighter: "#1A4570",
//   },
//   gold: { primary: "#FDB913", light: "#FFD54F" },
// };
// // ==========================================
// // 1. DESIGN SYSTEM & CONSTANTS
// // ==========================================
// const COLORS = {
//   bg: "#FFFFFF",
//   surface: "#F9FAFB",
//   textPrimary: "#111827",
//   textSecondary: "#6B7280",
//   border: "#E5E7EB",
//   brand: "#0F172A",
//   accent: "#12324f",
//   success: "#10B981",
//   warning: "#F59E0B",
//   danger: "#EF4444",
// };

// const DEPARTMENTS = [
//   "Engineering",
//   "Product",
//   "Design",
//   "Marketing",
//   "Sales",
//   "Security",
//   "Customer Success",
// ];
// const LOCATIONS = [
//   "San Francisco, CA",
//   "New York, NY",
//   "Austin, TX",
//   "Remote (US)",
//   "Remote (Global)",
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

// // Mock API Data
// const MOCK_JOBS = [
//   {
//     id: "job_1",
//     title: "Senior Frontend Engineer",
//     department: "Engineering",
//     location: "San Francisco, CA",
//     employmentType: "Full-Time",
//     experienceLevel: "Senior",
//     workModel: "Hybrid",
//     salaryRange: "$165,000–$210,000",
//     postedDate: "3 days ago",
//     hiringStatus: "Actively Hiring",
//     team: "Web Platform",
//     aboutTeam:
//       "Our Web Platform team builds the core interfaces that millions of users interact with daily. We focus on performance, accessibility, and creating delightful user experiences.",
//     aboutRole:
//       "We are looking for a Senior Frontend Engineer to lead complex web projects. You will architect scalable React applications and mentor mid-level engineers.",
//     responsibilities: [
//       "Lead the design and implementation of complex web applications using React and TypeScript.",
//       "Collaborate with product managers and designers to deliver exceptional user experiences.",
//       "Optimize applications for maximum speed and scalability.",
//       "Mentor junior engineers and conduct rigorous code reviews.",
//     ],
//     qualifications: [
//       "5+ years of experience in frontend development.",
//       "Deep expertise in React, TypeScript, and modern CSS frameworks (Tailwind).",
//       "Strong understanding of web accessibility (WCAG AA) and performance metrics.",
//       "Experience with CI/CD pipelines and automated testing.",
//     ],
//     techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "AWS Amplify"],
//   },
//   {
//     id: "job_2",
//     title: "Product Manager, Platform",
//     department: "Product",
//     location: "Remote (US)",
//     employmentType: "Full-Time",
//     experienceLevel: "Mid-Senior",
//     workModel: "Remote",
//     salaryRange: "$140,000–$180,000",
//     postedDate: "1 week ago",
//     hiringStatus: "Actively Hiring",
//     team: "Core Platform",
//     aboutTeam:
//       "The Core Platform PM team owns the underlying architecture that powers all our product lines. We build the tools that other teams use to build magic.",
//     aboutRole:
//       "Drive the roadmap for our developer platform. You will talk to internal stakeholders, define APIs, and ensure our platform scales globally.",
//     responsibilities: [
//       "Define and drive the product roadmap for the internal platform.",
//       "Work closely with engineering to prioritize features based on ROI.",
//       "Conduct user research with internal developers to identify pain points.",
//     ],
//     qualifications: [
//       "4+ years of Product Management experience, ideally in platform or infrastructure.",
//       "Technical background or strong understanding of API design.",
//       "Proven track record of shipping successful products.",
//     ],
//     techStack: ["Jira", "Figma", "Amplitude", "SQL"],
//   },
//   {
//     id: "job_3",
//     title: "UI/UX Designer",
//     department: "Design",
//     location: "New York, NY",
//     employmentType: "Full-Time",
//     experienceLevel: "Mid-Level",
//     workModel: "On-site",
//     salaryRange: "$110,000–$140,000",
//     postedDate: "2 days ago",
//     hiringStatus: "Reviewing",
//     team: "Design System",
//     aboutTeam:
//       "We maintain the single source of truth for all UI components. We ensure brand consistency and accessibility across all digital touchpoints.",
//     aboutRole:
//       "Craft beautiful, functional interfaces. You will work directly with engineering to implement designs and expand our component library.",
//     responsibilities: [
//       "Design high-fidelity wireframes and prototypes in Figma.",
//       "Expand and maintain the core design system.",
//       "Conduct usability testing to validate design decisions.",
//     ],
//     qualifications: [
//       "3+ years of experience in UX/UI design.",
//       "Mastery of Figma and prototyping tools.",
//       "Strong portfolio demonstrating clean, modern aesthetic.",
//     ],
//     techStack: ["Figma", "Maze", "Storybook"],
//   },
//   {
//     id: "job_4",
//     title: "Staff Software Engineer",
//     department: "Engineering",
//     location: "Seattle, WA",
//     employmentType: "Full-Time",
//     experienceLevel: "Staff",
//     workModel: "Hybrid",
//     salaryRange: "$190,000–$245,000",
//     postedDate: "Today",
//     hiringStatus: "Actively Hiring",
//     team: "Cloud Infrastructure",
//     aboutTeam:
//       "Our Cloud Infrastructure team builds scalable distributed systems powering millions of requests every day.",
//     aboutRole:
//       "Lead technical architecture and mentor engineering teams while building highly available cloud services.",
//     responsibilities: [
//       "Design scalable distributed systems.",
//       "Lead technical initiatives across engineering.",
//       "Mentor senior engineers.",
//       "Improve system reliability and performance.",
//     ],
//     qualifications: [
//       "8+ years of software engineering experience.",
//       "Strong knowledge of AWS and Kubernetes.",
//       "Experience building distributed systems.",
//     ],
//     techStack: ["React", "Node.js", "AWS", "Kubernetes", "Terraform"],
//   },

//   {
//     id: "job_5",
//     title: "Frontend Engineer",
//     department: "Engineering",
//     location: "Austin, TX",
//     employmentType: "Full-Time",
//     experienceLevel: "Mid-Level",
//     workModel: "Remote",
//     salaryRange: "$125,000–$155,000",
//     postedDate: "5 days ago",
//     hiringStatus: "Actively Hiring",
//     team: "Customer Experience",
//     aboutTeam:
//       "We create intuitive customer-facing experiences used worldwide.",
//     aboutRole:
//       "Develop modern React applications with a strong focus on performance and accessibility.",
//     responsibilities: [
//       "Develop reusable UI components.",
//       "Collaborate with UX designers.",
//       "Write automated tests.",
//       "Optimize frontend performance.",
//     ],
//     qualifications: [
//       "3+ years React experience.",
//       "Strong JavaScript and TypeScript knowledge.",
//       "Experience with modern frontend tooling.",
//     ],
//     techStack: ["React", "TypeScript", "Redux", "Tailwind CSS", "Jest"],
//   },

//   {
//     id: "job_6",
//     title: "Engineering Manager",
//     department: "Engineering",
//     location: "Boston, MA",
//     employmentType: "Full-Time",
//     experienceLevel: "Manager",
//     workModel: "Hybrid",
//     salaryRange: "$200,000–$240,000",
//     postedDate: "4 days ago",
//     hiringStatus: "Actively Hiring",
//     team: "Platform Engineering",
//     aboutTeam:
//       "Platform Engineering builds shared services that empower product teams.",
//     aboutRole:
//       "Lead multiple engineering teams delivering mission-critical platform capabilities.",
//     responsibilities: [
//       "Manage engineering teams.",
//       "Drive technical strategy.",
//       "Hire and mentor engineers.",
//       "Improve engineering processes.",
//     ],
//     qualifications: [
//       "7+ years engineering experience.",
//       "3+ years management experience.",
//       "Strong leadership skills.",
//     ],
//     techStack: ["AWS", "Docker", "Kubernetes", "Node.js"],
//   },

//   {
//     id: "job_7",
//     title: "Senior Product Manager",
//     department: "Product",
//     location: "Chicago, IL",
//     employmentType: "Full-Time",
//     experienceLevel: "Senior",
//     workModel: "Hybrid",
//     salaryRange: "$170,000–$210,000",
//     postedDate: "Yesterday",
//     hiringStatus: "Actively Hiring",
//     team: "AI Products",
//     aboutTeam:
//       "The AI Products team builds intelligent experiences powered by machine learning.",
//     aboutRole:
//       "Own product strategy and execution for AI-powered enterprise products.",
//     responsibilities: [
//       "Define product roadmap.",
//       "Collaborate with engineering.",
//       "Analyze customer feedback.",
//       "Launch new product features.",
//     ],
//     qualifications: [
//       "5+ years Product Management.",
//       "Strong analytical mindset.",
//       "Experience launching SaaS products.",
//     ],
//     techStack: ["Jira", "SQL", "Figma", "Amplitude"],
//   },

//   {
//     id: "job_8",
//     title: "Technical Product Manager",
//     department: "Product",
//     location: "Denver, CO",
//     employmentType: "Full-Time",
//     experienceLevel: "Mid-Senior",
//     workModel: "Remote",
//     salaryRange: "$150,000–$190,000",
//     postedDate: "6 days ago",
//     hiringStatus: "Reviewing",
//     team: "Developer Platform",
//     aboutTeam:
//       "Developer Platform provides APIs and infrastructure used across all products.",
//     aboutRole:
//       "Partner closely with engineering to build scalable developer experiences.",
//     responsibilities: [
//       "Prioritize engineering roadmap.",
//       "Define API requirements.",
//       "Coordinate cross-functional teams.",
//     ],
//     qualifications: [
//       "Technical background.",
//       "Experience with APIs.",
//       "Strong communication skills.",
//     ],
//     techStack: ["Postman", "SQL", "Jira"],
//   },

//   {
//     id: "job_9",
//     title: "Senior Product Designer",
//     department: "Design",
//     location: "Los Angeles, CA",
//     employmentType: "Full-Time",
//     experienceLevel: "Senior",
//     workModel: "Hybrid",
//     salaryRange: "$145,000–$185,000",
//     postedDate: "Today",
//     hiringStatus: "Actively Hiring",
//     team: "Product Design",
//     aboutTeam:
//       "We design intuitive experiences that delight enterprise customers.",
//     aboutRole: "Lead product design initiatives from discovery through launch.",
//     responsibilities: [
//       "Design user journeys.",
//       "Conduct UX research.",
//       "Prototype experiences.",
//       "Collaborate with engineers.",
//     ],
//     qualifications: [
//       "5+ years Product Design.",
//       "Excellent Figma skills.",
//       "Strong portfolio.",
//     ],
//     techStack: ["Figma", "FigJam", "Maze", "Storybook"],
//   },

//   {
//     id: "job_10",
//     title: "Design Systems Engineer",
//     department: "Design",
//     location: "San Diego, CA",
//     employmentType: "Full-Time",
//     experienceLevel: "Senior",
//     workModel: "Remote",
//     salaryRange: "$150,000–$190,000",
//     postedDate: "1 week ago",
//     hiringStatus: "Actively Hiring",
//     team: "Design Systems",
//     aboutTeam:
//       "Our Design Systems team creates scalable UI libraries shared across every product.",
//     aboutRole:
//       "Bridge design and engineering by building reusable UI components.",
//     responsibilities: [
//       "Build design system components.",
//       "Maintain Storybook.",
//       "Collaborate with designers.",
//       "Improve accessibility.",
//     ],
//     qualifications: [
//       "Strong React experience.",
//       "Expertise in Design Systems.",
//       "Accessibility knowledge.",
//     ],
//     techStack: ["React", "Storybook", "TypeScript", "Tailwind CSS"],
//   },
// ];

// // ==================== REUSABLE UI ====================

// // const SectionLabel = memo(({ children, light = false }) => (
// //   <span
// //     className="reveal inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
// //     style={
// //       light
// //         ? {
// //             background: `${BRAND.gold.primary}15`,
// //             color: BRAND.gold.primary,
// //             border: `1px solid ${BRAND.gold.primary}30`,
// //           }
// //         : {
// //             background: `${BRAND.navy.mid}08`,
// //             color: BRAND.navy.dark,
// //             border: `1px solid ${BRAND.navy.mid}12`,
// //           }
// //     }
// //   >
// //     {children}
// //   </span>
// // ));

// // const SectionTitle = memo(({ children, light = false, className = "" }) => (
// //   <h2
// //     className={`reveal text-4xl md:text-5xl font-bold mb-5 ${className}`}
// //     style={{ color: light ? "#fff" : BRAND.navy.dark }}
// //   >
// //     {children}
// //   </h2>
// // ));

// // const Gold = memo(({ children }) => (
// //   <span style={{ color: BRAND.gold.primary }}>{children}</span>
// // ));

// // const GoldButton = memo(({ children, className = "", ...props }) => (
// //   <button
// //     className={`group relative overflow-hidden rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 ${className}`}
// //     style={{
// //       background:
// //         "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
// //       color: BRAND.navy.dark,
// //       boxShadow: "0 8px 30px rgba(253,185,19,0.3)",
// //       ["--tw-ring-color"]: BRAND.gold.primary,
// //     }}
// //     {...props}
// //   >
// //     <span className="relative z-10 flex items-center justify-center gap-3">
// //       {children}
// //     </span>
// //     <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full group-disabled:hover:-translate-x-full transition-transform duration-700 pointer-events-none">
// //       <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
// //     </div>
// //   </button>
// // ));

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

// // ==========================================
// // 2. UI PRIMITIVES & HOOKS
// // ==========================================
// const Button = ({
//   children,
//   variant = "primary",
//   className = "",
//   ...props
// }) => {
//   const base =
//     "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 px-6 py-3 text-sm";
//   const variants = {
//     primary:
//       "bg-[#12324f] text-white hover:bg-[#1D4ED8] focus:ring-[#12324f] shadow-sm",
//     secondary:
//       "bg-white text-[#111827] border border-[#E5E7EB] hover:bg-[#F9FAFB] focus:ring-[#E5E7EB]",
//     ghost:
//       "bg-transparent text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#111827] border border-transparent",
//   };
//   return (
//     <button className={`${base} ${variants[variant]} ${className}`} {...props}>
//       {children}
//     </button>
//   );
// };

// const Badge = ({ children, color = COLORS.accent }) => (
//   <span
//     className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border"
//     style={{ color, borderColor: `${color}33`, backgroundColor: `${color}0D` }}
//   >
//     {children}
//   </span>
// );

// const useJobsData = () => {
//   const [jobs, setJobs] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     const fetchJobs = async () => {
//       setIsLoading(true);
//       await new Promise((resolve) => setTimeout(resolve, 500));
//       setJobs(MOCK_JOBS);
//       setIsLoading(false);
//     };
//     fetchJobs();
//   }, []);
//   return { jobs, isLoading };
// };

// // ==========================================
// // 3. JOB CARD COMPONENT
// // ==========================================
// const JobCard = memo(({ job }) => {
//   const navigate = useNavigate();
//   return (
//     <div
//       onClick={() => navigate(`/careers/jobdetails/${job.id}`)}
//       className="group bg-white border border-[#E5E7EB] rounded-2xl p-6 cursor-pointer transition-all duration-[250ms] ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-[#12324f]"
//     >
//       <div className="flex justify-between items-start mb-4">
//         <div>
//           <h3 className="text-lg font-bold text-[#111827] mb-1">{job.title}</h3>
//           <p className="text-sm text-[#6B7280]">
//             {job.department} • {job.team}
//           </p>
//         </div>
//         <FaArrowRight className="text-[#9CA3AF] group-hover:text-[#12324f] group-hover:translate-x-1 transition-all duration-[250ms]" />
//       </div>
//       <div className="flex flex-wrap gap-3 mb-5 text-xs text-[#6B7280]">
//         <span className="inline-flex items-center gap-1.5">
//           <FaMapMarkerAlt /> {job.location}
//         </span>
//         <span className="inline-flex items-center gap-1.5">
//           <FaBriefcase /> {job.employmentType}
//         </span>
//         <span className="inline-flex items-center gap-1.5">
//           <FaClock /> {job.workModel}
//         </span>
//       </div>
//       <div className="border-t border-[#F3F4F6] pt-4 flex items-center justify-between">
//         <div>
//           <p className="text-sm font-semibold text-[#111827]">
//             {job.salaryRange}
//           </p>
//           <p className="text-xs text-[#9CA3AF] mt-0.5">
//             Posted {job.postedDate}
//           </p>
//         </div>
//         {job.hiringStatus === "Actively Hiring" ? (
//           <Badge color={COLORS.success}>Actively Hiring</Badge>
//         ) : (
//           <Badge color={COLORS.warning}>Reviewing</Badge>
//         )}
//       </div>
//     </div>
//   );
// });

// const HeroSection = memo(() => (
//   <section className="relative h-[26vh] md:h-[60vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden">
//     <img
//       src={banner}
//       alt="Innovise Career"
//       className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8s] ease-out"
//     />
//   </section>
// ));

// /* ---------- LEADER QUOTE ---------- */
// const LeaderQuoteSection = memo(() => (
//   <section className="py-12 md:py-12 bg-white relative overflow-hidden">
//     <div className="max-w-8xl mx-auto px-6 lg:px-8 relative z-10">
//       <div className="reveal relative rounded-3xl p-10 md:p-16 overflow-hidden bg-primary-800">
//         <div
//           className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
//           style={{
//             background: BRAND.gold.primary,
//             filter: "blur(100px)",
//             opacity: 0.08,
//           }}
//         />

//         <div className="relative z-10">
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

//             <div
//               className="w-16 h-0.5 mb-8 rounded-full"
//               style={{
//                 background: `linear-gradient(to right, ${BRAND.gold.primary}, transparent)`,
//               }}
//             />

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

// const CTASection = memo(() => (
//   <section className="py-12 relative overflow-hidden bg-white">
//     <div className="absolute inset-0 dot-pattern opacity-[0.02]" />

//     <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
//       <div className="reveal max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
//           Build the Future <Gold>With Us</Gold>
//         </h2>

//         <p className="text-lg text-gray-600 mb-10 max-w-5xl mx-auto leading-relaxed">
//           Great careers aren't always about finding the perfect opening today.
//           We're continuously growing and creating new opportunities across
//           engineering, product, design, and business teams. Explore our culture,
//           stay connected, and discover where your skills can make a lasting
//           impact.
//         </p>

//         <div className="flex justify-center">
//           <Link
//             to="/culture/values"
//             className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-[#FFC107] text-black font-semibold hover:bg-[#E6AE00] transition-all duration-300 hover:scale-105"
//           >
//             Explore Our Culture
//             <FaArrowRight className="text-sm" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   </section>
// ));

// // ==========================================
// // 4. OPEN POSITIONS LIST (Route: /careers)
// // ==========================================
// const OpenPositions = memo(() => {
//   const { jobs, isLoading } = useJobsData();
//   const [search, setSearch] = useState("");
//   const [deptFilter, setDeptFilter] = useState("");
//   const [locationFilter, setLocationFilter] = useState("");

//   const filteredJobs = useMemo(() => {
//     return jobs.filter(
//       (job) =>
//         (job.title.toLowerCase().includes(search.toLowerCase()) ||
//           job.department.toLowerCase().includes(search.toLowerCase())) &&
//         (deptFilter ? job.department === deptFilter : true) &&
//         (locationFilter ? job.location === locationFilter : true),
//     );
//   }, [jobs, search, deptFilter, locationFilter]);

//   const groupedJobs = useMemo(() => {
//     const groups = {};
//     filteredJobs.forEach((job) => {
//       if (!groups[job.department]) groups[job.department] = [];
//       groups[job.department].push(job);
//     });
//     return Object.entries(groups);
//   }, [filteredJobs]);

//   const clearFilters = () => {
//     setSearch("");
//     setDeptFilter("");
//     setLocationFilter("");
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <HeroSection />

//       <LeaderQuoteSection />

//       <section id="positions" className="bg-[#FFFFFF] py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-Black mb-6">
//               Open <Gold>Positions</Gold>
//             </h2>
//             <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
//               Explore roles across our teams. We're looking for passionate
//               individuals ready to make a global impact.
//             </p>
//           </div>

//           {/* Search & Filter Bar */}
//           <div className="bg-white border border-[#E5E7EB] rounded-2xl shadow-sm p-4 mb-12">
//             <div className="flex flex-col md:flex-row gap-4 items-center">
//               <div className="relative w-full md:w-1/3">
//                 <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
//                 <input
//                   type="text"
//                   placeholder="Search jobs..."
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   className="w-full pl-11 pr-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
//                 />
//               </div>
//               <div className="flex flex-wrap gap-3 w-full md:w-auto md:ml-auto items-center">
//                 <select
//                   value={deptFilter}
//                   onChange={(e) => setDeptFilter(e.target.value)}
//                   className="px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#12324f] cursor-pointer"
//                 >
//                   <option value="">All Departments</option>
//                   {DEPARTMENTS.map((d) => (
//                     <option key={d} value={d}>
//                       {d}
//                     </option>
//                   ))}
//                 </select>
//                 <select
//                   value={locationFilter}
//                   onChange={(e) => setLocationFilter(e.target.value)}
//                   className="px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#12324f] cursor-pointer"
//                 >
//                   <option value="">All Locations</option>
//                   {LOCATIONS.map((l) => (
//                     <option key={l} value={l}>
//                       {l}
//                     </option>
//                   ))}
//                 </select>
//                 {(search || deptFilter || locationFilter) && (
//                   <button
//                     onClick={clearFilters}
//                     className="text-sm font-medium text-[#6B7280] hover:text-[#12324f] transition-colors px-3 py-2"
//                   >
//                     Clear
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Job Results */}
//           {isLoading ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[1, 2, 3, 4, 5, 6].map((i) => (
//                 <div
//                   key={i}
//                   className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-6 animate-pulse h-48"
//                 ></div>
//               ))}
//             </div>
//           ) : groupedJobs.length > 0 ? (
//             <div className="space-y-12">
//               {groupedJobs.map(([dept, jobsList]) => (
//                 <div key={dept}>
//                   <div className="flex items-center gap-3 mb-6">
//                     <h3 className="text-xl font-bold text-[#12324f]">{dept}</h3>
//                     <span className="text-sm font-medium text-[#854D0E] bg-[#FEF9C3] border border-[#EAB308] px-2.5 py-0.5 rounded-full">
//                       {jobsList.length}{" "}
//                       {jobsList.length === 1 ? "Role" : "Roles"}
//                     </span>
//                     {/* Gradient Line: Yellow to Gray */}
//                     <div className="flex-1 h-0.5 bg-gradient-to-r from-[#EAB308] to-[#E5E7EB] ml-4 rounded-full"></div>
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {jobsList.map((job) => (
//                       <JobCard key={job.id} job={job} />
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-20 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl">
//               <p className="text-[#6B7280] text-lg">
//                 No positions match your current filters.
//               </p>
//               {/* Replaced variant="secondary" with explicit brand styling for consistency */}
//               <button
//                 onClick={clearFilters}
//                 className="mt-6 bg-[#22527e] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#2f5c86] transition-colors shadow-sm"
//               >
//                 Clear all filters
//               </button>
//             </div>
//           )}
//         </div>
//       </section>

//       <HiringProcessSection />
//       <CTASection />
//     </>
//   );
// });

// // ==========================================
// // 5. JOB DETAILS PAGE (Route: /careers/jobdetails/:jobId)
// // ==========================================
// const JobDetailsPage = memo(() => {
//   const { jobId } = useParams();
//   const navigate = useNavigate();
//   const [job, setJob] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [showApplication, setShowApplication] = useState(false);

//   useEffect(() => {
//     // Simulate fetching the specific job
//     setIsLoading(true);
//     setTimeout(() => {
//       const found = MOCK_JOBS.find((j) => j.id === jobId);
//       setJob(found || null);
//       setIsLoading(false);
//     }, 300);
//   }, [jobId]);

//   if (isLoading) {
//     return (
//       <div className="bg-white min-h-screen flex items-center justify-center text-[#12324f] font-medium">
//         Loading job details...
//       </div>
//     );
//   }

//   if (!job) {
//     return (
//       <div className="bg-white min-h-screen flex flex-col items-center justify-center p-4">
//         <h2 className="text-2xl font-bold text-[#12324f] mb-4">
//           Job Not Found
//         </h2>
//         <button
//           onClick={() => navigate("/careers")}
//           className="bg-[#12324f] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#2f5c86] transition-colors shadow-sm"
//         >
//           Back to all roles
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white min-h-screen">
//       {/* Sub Navigation */}
//       <div className="border-b border-[#E5E7EB] sticky top-0 bg-white/95 backdrop-blur z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//           <button
//             onClick={() => navigate("/careers")}
//             className="flex items-center gap-2 text-sm font-medium text-[#12324f] hover:text-[#12324f] transition-colors"
//           >
//             <FaArrowLeft /> Back to all roles
//           </button>
//           <button
//             onClick={() => setShowApplication(true)}
//             className="hidden md:inline-flex items-center gap-2 bg-[#12324f] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#2f5c86] transition-colors shadow-sm"
//           >
//             Apply Now <FaArrowRight />
//           </button>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
//         {/* Header Section */}
//         <div className="mb-12 border-b border-[#E5E7EB] pb-8">
//           {/* Department Badge (Brand Yellow) */}
//           <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#FEF9C3] text-[#854D0E] border border-[#EAB308] mb-4">
//             {job.department}
//           </span>
//           <h1 className="text-4xl md:text-5xl font-bold text-[#12324f] tracking-tight mb-4">
//             {job.title}
//           </h1>
//           <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#6B7280]">
//             <span className="inline-flex items-center gap-2">
//               <FaMapMarkerAlt className="text-[#EAB308]" /> {job.location}
//             </span>
//             <span className="inline-flex items-center gap-2">
//               <FaBriefcase className="text-[#EAB308]" /> {job.employmentType}
//             </span>
//             <span className="inline-flex items-center gap-2">
//               <FaClock className="text-[#EAB308]" /> {job.workModel}
//             </span>
//             <span className="inline-flex items-center gap-2">
//               <FaUsers className="text-[#EAB308]" /> {job.team} Team
//             </span>
//             <span className="inline-flex items-center gap-2">
//               <FaCalendarAlt className="text-[#EAB308]" /> Posted{" "}
//               {job.postedDate}
//             </span>
//           </div>
//         </div>

//         {/* Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="sticky top-24 space-y-6">
//               {/* Added a subtle top accent border using brand Yellow */}
//               <div className="bg-[#F9FAFB] border border-[#E5E7EB] border-t-4 border-t-[#EAB308] rounded-2xl p-6 shadow-sm">
//                 <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-4">
//                   Job Details
//                 </h4>
//                 <div className="space-y-4 text-sm">
//                   <div className="flex justify-between">
//                     <span className="text-[#6B7280] flex items-center gap-2">
//                       <FaDollarSign /> Salary
//                     </span>
//                     <span className="font-semibold text-[#111827] text-right">
//                       {job.salaryRange}
//                     </span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-[#6B7280] flex items-center gap-2">
//                       <FaBriefcase /> Level
//                     </span>
//                     <span className="font-semibold text-[#111827]">
//                       {job.experienceLevel}
//                     </span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-[#6B7280] flex items-center gap-2">
//                       <FaShieldAlt /> Status
//                     </span>
//                     {job.hiringStatus === "Actively Hiring" ? (
//                       <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">
//                         Actively Hiring
//                       </span>
//                     ) : (
//                       <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700 border border-yellow-200">
//                         Reviewing
//                       </span>
//                     )}
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => setShowApplication(true)}
//                   className="w-full mt-6 inline-flex items-center justify-center gap-2 bg-[#12324f] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#2f5c86] transition-colors shadow-sm"
//                 >
//                   Apply Now <FaArrowRight />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Main Content Area */}
//           <div className="lg:col-span-2 space-y-10 text-[#374151] text-base leading-relaxed">
//             <section>
//               <h2 className="text-2xl font-bold text-[#12324f] mb-4">
//                 About the Team
//               </h2>
//               <p>{job.aboutTeam}</p>
//             </section>
//             <section>
//               <h2 className="text-2xl font-bold text-[#12324f] mb-4">
//                 About the Role
//               </h2>
//               <p>{job.aboutRole}</p>
//             </section>
//             <section>
//               <h2 className="text-2xl font-bold text-[#12324f] mb-4">
//                 What You'll Do
//               </h2>
//               <ul className="space-y-3">
//                 {job.responsibilities.map((item, i) => (
//                   <li key={i} className="flex gap-3">
//                     <FaCheckCircle className="text-[#12324f] mt-1 flex-shrink-0" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </section>
//             <section>
//               <h2 className="text-2xl font-bold text-[#12324f] mb-4">
//                 What We're Looking For
//               </h2>
//               <ul className="space-y-3">
//                 {job.qualifications.map((item, i) => (
//                   <li key={i} className="flex gap-3">
//                     {/* Using brand Yellow for secondary list checks to differentiate lists */}
//                     <FaCheckCircle className="text-[#EAB308] mt-1 flex-shrink-0" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </section>
//             {job.techStack && (
//               <section>
//                 <h2 className="text-2xl font-bold text-[#12324f] mb-4">
//                   Tech Stack
//                 </h2>
//                 <div className="flex flex-wrap gap-2">
//                   {job.techStack.map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-4 py-2 bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg text-sm font-medium text-[#12324f] flex items-center gap-2"
//                     >
//                       <FaCode className="text-[#12324f]" /> {tech}
//                     </span>
//                   ))}
//                 </div>
//               </section>
//             )}
//             <section className="pt-8 border-t border-[#E5E7EB]">
//               <p className="text-sm text-[#6B7280] italic">
//                 We are an equal opportunity employer. We celebrate diversity and
//                 are committed to creating an inclusive environment for all
//                 employees.
//               </p>
//             </section>
//           </div>
//         </div>
//       </div>

//       {/* Render Application Flow Modal */}
//       {showApplication && (
//         <ApplicationFlow
//           selectedJob={job}
//           onClose={() => setShowApplication(false)}
//         />
//       )}
//     </div>
//   );
// });

// // ==========================================
// // 6. MULTI-STEP APPLICATION FLOW MODAL
// // ==========================================
// const ApplicationFlow = memo(({ selectedJob, onClose }) => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     resume: null,
//     linkedin: "",
//     github: "",
//     website: "",
//     workAuth: false,
//   });
//   const [errors, setErrors] = useState({});
//   const [isDragging, setIsDragging] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   if (!selectedJob) return null;
//   const steps = ["Personal", "Resume", "Portfolio", "Questions", "Review"];

//   const validateStep = () => {
//     let tempErrors = {};
//     if (step === 1) {
//       if (!formData.fullName.trim())
//         tempErrors.fullName = "Full name is required";
//       if (!formData.email.trim()) tempErrors.email = "Email is required";
//       else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
//         tempErrors.email = "Invalid email format";
//     }
//     if (step === 2 && !formData.resume)
//       tempErrors.resume = "Please upload your resume";
//     if (step === 4 && !formData.workAuth)
//       tempErrors.workAuth = "You must confirm work authorization";
//     setErrors(tempErrors);
//     return Object.keys(tempErrors).length === 0;
//   };

//   const handleNext = () => {
//     if (validateStep()) setStep((prev) => Math.min(prev + 1, 5));
//   };
//   const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));
//   const handleSubmit = () => {
//     if (validateStep()) {
//       console.log("Submitting application:", {
//         job: selectedJob,
//         applicant: formData,
//       });
//       setSubmitted(true);
//     }
//   };

//   const handleFileChange = (file) => {
//     if (file && file.size < 5 * 1024 * 1024) {
//       setFormData((prev) => ({ ...prev, resume: file }));
//       setErrors((prev) => ({ ...prev, resume: null }));
//     } else {
//       setErrors((prev) => ({
//         ...prev,
//         resume: "Invalid file. Must be under 5MB.",
//       }));
//     }
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//     handleFileChange(e.dataTransfer.files[0]);
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/60 backdrop-blur-sm">
//       <div className="bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
//         <div className="flex justify-between items-center p-6 border-b border-[#E5E7EB]">
//           <div>
//             <p className="text-sm text-[#6B7280]">Applying for</p>
//             <h3 className="text-xl font-bold text-[#0F172A]">
//               {selectedJob.title}
//             </h3>
//           </div>
//           <button
//             onClick={onClose}
//             className="p-2 text-[#6B7280] hover:bg-[#F9FAFB] rounded-lg transition-colors"
//           >
//             <FaTimes size={20} />
//           </button>
//         </div>

//         {submitted ? (
//           <div className="p-12 text-center flex-1 flex flex-col items-center justify-center">
//             <div className="w-16 h-16 bg-[#10B981]/10 rounded-full flex items-center justify-center mb-6">
//               <FaCheckCircle size={32} className="text-[#10B981]" />
//             </div>
//             <h2 className="text-2xl font-bold text-[#0F172A] mb-3">
//               Application Submitted!
//             </h2>
//             <p className="text-[#6B7280] max-w-md mb-8">
//               Thank you for applying. Our talent acquisition team will review
//               your application and get back to you within 5-7 business days.
//             </p>
//             <Button onClick={onClose}>Close</Button>
//           </div>
//         ) : (
//           <>
//             {/* Progress Indicator */}
//             <div className="px-6 pt-6">
//               <div className="flex items-center justify-between mb-2">
//                 {steps.map((label, i) => (
//                   <div key={label} className="flex-1 flex items-center">
//                     <div
//                       className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300
//                       ${step > i + 1 ? "bg-[#10B981] text-white" : step === i + 1 ? "bg-[#12324f] text-white" : "bg-[#F9FAFB] text-[#6B7280] border border-[#E5E7EB]"}`}
//                     >
//                       {step > i + 1 ? <FaCheckCircle /> : i + 1}
//                     </div>
//                     {i < steps.length - 1 && (
//                       <div
//                         className={`flex-1 h-1 mx-2 rounded-full ${step > i + 1 ? "bg-[#10B981]" : "bg-[#E5E7EB]"}`}
//                       ></div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//               <div className="flex justify-between mb-6">
//                 {steps.map((label, i) => (
//                   <div
//                     key={label}
//                     className={`flex-1 text-center text-xs font-medium ${step === i + 1 ? "text-[#12324f]" : "text-[#9CA3AF]"}`}
//                   >
//                     {label}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="flex-1 overflow-y-auto p-6 bg-[#F9FAFB]">
//               {step === 1 && (
//                 <div className="space-y-5 bg-white p-6 rounded-xl border border-[#E5E7EB]">
//                   <div>
//                     <label className="block text-sm font-semibold text-[#111827] mb-2">
//                       Full Name *
//                     </label>
//                     <div className="relative">
//                       <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
//                       <input
//                         type="text"
//                         value={formData.fullName}
//                         onChange={(e) =>
//                           setFormData({ ...formData, fullName: e.target.value })
//                         }
//                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
//                       />
//                     </div>
//                     {errors.fullName && (
//                       <p className="text-[#EF4444] text-xs mt-1.5">
//                         {errors.fullName}
//                       </p>
//                     )}
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-[#111827] mb-2">
//                       Email Address *
//                     </label>
//                     <div className="relative">
//                       <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
//                       <input
//                         type="email"
//                         value={formData.email}
//                         onChange={(e) =>
//                           setFormData({ ...formData, email: e.target.value })
//                         }
//                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
//                       />
//                     </div>
//                     {errors.email && (
//                       <p className="text-[#EF4444] text-xs mt-1.5">
//                         {errors.email}
//                       </p>
//                     )}
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-[#111827] mb-2">
//                       Phone Number
//                     </label>
//                     <div className="relative">
//                       <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
//                       <input
//                         type="tel"
//                         value={formData.phone}
//                         onChange={(e) =>
//                           setFormData({ ...formData, phone: e.target.value })
//                         }
//                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {step === 2 && (
//                 <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
//                   <label className="block text-sm font-semibold text-[#111827] mb-2">
//                     Upload Resume *
//                   </label>
//                   <div
//                     onDragOver={(e) => {
//                       e.preventDefault();
//                       setIsDragging(true);
//                     }}
//                     onDragLeave={() => setIsDragging(false)}
//                     onDrop={handleDrop}
//                     className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${isDragging ? "border-[#12324f] bg-[#12324f]/5" : "border-[#E5E7EB] hover:border-[#12324f]"}`}
//                     onClick={() => document.getElementById("fileInput").click()}
//                   >
//                     {formData.resume ? (
//                       <div className="flex items-center justify-center gap-4 text-left">
//                         <div className="w-12 h-12 bg-[#12324f]/10 rounded-xl flex items-center justify-center">
//                           <FaFileAlt size={20} className="text-[#12324f]" />
//                         </div>
//                         <div>
//                           <p className="font-semibold text-[#111827]">
//                             {formData.resume.name}
//                           </p>
//                           <p className="text-xs text-[#6B7280]">
//                             {(formData.resume.size / 1024).toFixed(1)} KB •
//                             Ready to submit
//                           </p>
//                         </div>
//                       </div>
//                     ) : (
//                       <>
//                         <FaCloudUploadAlt
//                           size={32}
//                           className="mx-auto text-[#9CA3AF] mb-3"
//                         />
//                         <p className="font-semibold text-[#111827] mb-1">
//                           Drag & drop your resume here
//                         </p>
//                         <p className="text-sm text-[#6B7280]">
//                           or click to browse files
//                         </p>
//                         <p className="text-xs text-[#9CA3AF] mt-3">
//                           PDF, DOC, DOCX (Max 5MB)
//                         </p>
//                       </>
//                     )}
//                     <input
//                       type="file"
//                       id="fileInput"
//                       className="hidden"
//                       onChange={(e) => handleFileChange(e.target.files[0])}
//                       accept=".pdf,.doc,.docx"
//                     />
//                   </div>
//                   {errors.resume && (
//                     <p className="text-[#EF4444] text-xs mt-2">
//                       {errors.resume}
//                     </p>
//                   )}
//                 </div>
//               )}

//               {step === 3 && (
//                 <div className="space-y-5 bg-white p-6 rounded-xl border border-[#E5E7EB]">
//                   <div>
//                     <label className="block text-sm font-semibold text-[#111827] mb-2">
//                       LinkedIn Profile
//                     </label>
//                     <div className="relative">
//                       <FaLinkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
//                       <input
//                         type="url"
//                         placeholder="https://linkedin.com/in/username"
//                         value={formData.linkedin}
//                         onChange={(e) =>
//                           setFormData({ ...formData, linkedin: e.target.value })
//                         }
//                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-[#111827] mb-2">
//                       GitHub Profile
//                     </label>
//                     <div className="relative">
//                       <FaGithub className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
//                       <input
//                         type="url"
//                         placeholder="https://github.com/username"
//                         value={formData.github}
//                         onChange={(e) =>
//                           setFormData({ ...formData, github: e.target.value })
//                         }
//                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-[#111827] mb-2">
//                       Personal Website / Portfolio
//                     </label>
//                     <div className="relative">
//                       <FaGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
//                       <input
//                         type="url"
//                         placeholder="https://yourportfolio.com"
//                         value={formData.website}
//                         onChange={(e) =>
//                           setFormData({ ...formData, website: e.target.value })
//                         }
//                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {step === 4 && (
//                 <div className="space-y-5 bg-white p-6 rounded-xl border border-[#E5E7EB]">
//                   <div className="flex items-start gap-3">
//                     <input
//                       type="checkbox"
//                       id="workAuth"
//                       checked={formData.workAuth}
//                       onChange={(e) =>
//                         setFormData({ ...formData, workAuth: e.target.checked })
//                       }
//                       className="mt-1 w-5 h-5 rounded border-[#E5E7EB] text-[#12324f] focus:ring-[#12324f] cursor-pointer"
//                     />
//                     <label
//                       htmlFor="workAuth"
//                       className="text-sm text-[#111827]"
//                     >
//                       Are you legally authorized to work in the country of this
//                       role? *
//                     </label>
//                   </div>
//                   {errors.workAuth && (
//                     <p className="text-[#EF4444] text-xs">{errors.workAuth}</p>
//                   )}
//                   <div>
//                     <label className="block text-sm font-semibold text-[#111827] mb-2">
//                       Why are you interested in this role?
//                     </label>
//                     <textarea
//                       rows={5}
//                       placeholder="Tell us why you'd be a great fit..."
//                       className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all resize-none"
//                     ></textarea>
//                   </div>
//                 </div>
//               )}

//               {step === 5 && (
//                 <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
//                   <h4 className="text-lg font-bold text-[#0F172A] mb-4">
//                     Review Your Application
//                   </h4>
//                   <div className="space-y-3 text-sm border-t border-[#E5E7EB] pt-4">
//                     <div className="flex justify-between">
//                       <span className="text-[#6B7280]">Name:</span>{" "}
//                       <span className="font-medium text-[#111827]">
//                         {formData.fullName}
//                       </span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-[#6B7280]">Email:</span>{" "}
//                       <span className="font-medium text-[#111827]">
//                         {formData.email}
//                       </span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-[#6B7280]">Phone:</span>{" "}
//                       <span className="font-medium text-[#111827]">
//                         {formData.phone || "N/A"}
//                       </span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-[#6B7280]">Resume:</span>{" "}
//                       <span className="font-medium text-[#12324f]">
//                         {formData.resume?.name}
//                       </span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-[#6B7280]">Work Authorized:</span>{" "}
//                       <span className="font-medium text-[#111827]">
//                         {formData.workAuth ? "Yes" : "No"}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             <div className="flex justify-between items-center p-6 bg-white border-t border-[#E5E7EB]">
//               <Button
//                 variant="ghost"
//                 onClick={step === 1 ? onClose : handlePrev}
//               >
//                 {step === 1 ? "Cancel" : "Back"}
//               </Button>
//               {step < 5 ? (
//                 <Button onClick={handleNext}>
//                   Continue <FaArrowRight />
//                 </Button>
//               ) : (
//                 <Button onClick={handleSubmit}>
//                   Submit Application <FaCheckCircle />
//                 </Button>
//               )}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// });

// // ==========================================
// // 7. MAIN CAREERS PAGE ROUTER
// // ==========================================
// const CareersPage = () => {
//   return (
//     <main className="bg-[#FFFFFF] min-h-screen font-sans antialiased">
//       <Routes>
//         <Route path="/" element={<OpenPositions />} />
//         <Route path="/jobdetails/:jobId" element={<JobDetailsPage />} />
//       </Routes>
//     </main>
//   );
// };

// export default memo(CareersPage);

import React, { useState, useMemo, useEffect, useCallback, memo } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
  FaArrowRight,
  FaArrowLeft,
  FaCheckCircle,
  FaCloudUploadAlt,
  FaFileAlt,
  FaTimes,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaUsers,
  FaDollarSign,
  FaCalendarAlt,
  FaShieldAlt,
  FaCode,
  FaQuoteLeft,
  FaExclamationTriangle,
  FaSpinner,
} from "react-icons/fa";
import banner from "../assets/banners/careers_banner.png";
import img1 from "../assets/leaders/NishantGautam.webp";

const BRAND = {
  navy: {
    dark: "#0A1628",
    mid: "#12324f",
    light: "#143A63",
    lighter: "#1A4570",
  },
  gold: { primary: "#FDB913", light: "#FFD54F" },
};
// ==========================================
// 1. DESIGN SYSTEM & CONSTANTS
// ==========================================
const COLORS = {
  bg: "#FFFFFF",
  surface: "#F9FAFB",
  textPrimary: "#111827",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
  brand: "#0F172A",
  accent: "#12324f",
  success: "#10B981",
  warning: "#F59E0B",
  danger: "#EF4444",
};

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

// ==========================================
// 2. API LAYER
// ==========================================
// Configure this via your build tool's env vars (Vite shown here).
// Falls back to localhost for local development.
const API_BASE_URL =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_URL) ||
  "https://innoviseit-backend-1.onrender.com/api";

const PAGE_SIZE = 20;

class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

async function apiRequest(path, options = {}) {
  let res;
  try {
    res = await fetch(`${API_BASE_URL}${path}`, options);
  } catch (networkErr) {
    throw new ApiError(
      "Unable to reach the server. Please check your connection and try again.",
    );
  }

  let json = null;
  try {
    json = await res.json();
  } catch {
    // Non-JSON response, fall through to status-based error below.
  }

  if (!res.ok || (json && json.success === false)) {
    throw new ApiError(
      json?.message || `Request failed with status ${res.status}`,
      res.status,
    );
  }
  return json;
}

async function fetchJobsPage({ page = 1, limit = PAGE_SIZE } = {}) {
  const json = await apiRequest(`/jobs?page=${page}&limit=${limit}`);
  return {
    jobs: json.data?.jobs || [],
    pagination: json.data?.pagination || {
      page,
      limit,
      total: 0,
      totalPages: 1,
    },
  };
}

async function fetchJobById(id) {
  try {
    const json = await apiRequest(`/jobs/${id}`);
    return json.data || null;
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) return null;
    throw err;
  }
}

// Departments change rarely, so cache them for the session to avoid refetching
// on every job list / job details load.
let departmentsCache = null;
async function fetchDepartments() {
  if (departmentsCache) return departmentsCache;
  const json = await apiRequest("/departments");
  departmentsCache = json.data || [];
  return departmentsCache;
}

async function submitApplication(payload) {
  const json = await apiRequest("/applications", {
    method: "POST",
    body: payload,
  });
  return json.data;
}

// ==========================================
// 3. DATA NORMALIZATION
// ==========================================
// The API returns raw records shaped for storage (snake_case, plain
// description strings, numeric-string salaries, etc). These helpers adapt
// that shape into what the UI components expect, without ever inventing
// data the API doesn't provide.

function formatCurrency(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return null;
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(num);
}

function formatSalaryRange(min, max) {
  const lo = formatCurrency(min);
  const hi = formatCurrency(max);
  if (lo && hi) return `${lo} – ${hi}`;
  return lo || hi || null;
}

function formatRelativeDate(isoDate) {
  if (!isoDate) return null;
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return null;
  const diffMs = Date.now() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays <= 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  const weeks = Math.floor(diffDays / 7);
  if (weeks < 5) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// Splits a freeform paragraph the API stores as a single string into list
// items: prefers newlines, falls back to sentence/comma splitting.
function parseListString(str) {
  if (!str || typeof str !== "string") return [];
  const trimmed = str.trim();
  if (!trimmed) return [];

  if (trimmed.includes("\n")) {
    return trimmed
      .split("\n")
      .map((s) => s.replace(/^[-•*]\s*/, "").trim())
      .filter(Boolean);
  }
  // Multiple sentences in one line, e.g. "Build X. Own Y. Ship Z."
  const sentences = trimmed
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
  if (sentences.length > 1) return sentences;

  // Comma-separated single line, e.g. "Java, Spring Boot, SQL"
  if (trimmed.includes(",")) {
    return trimmed
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [trimmed];
}

function normalizeJob(raw, departments = []) {
  if (!raw) return null;
  const dept = departments.find((d) => d.id === raw.department_id);

  return {
    id: String(raw.id),
    title: raw.title,
    department: raw.department_name || dept?.department_name || "General",
    team: raw.department_name || dept?.department_name || "General",
    location: raw.location || "Location TBD",
    employmentType: raw.employment_type || null,
    experienceLevel: raw.experience_level || null,
    // The API doesn't return a work model field; avoid fabricating one.
    workModel: raw.work_model || null,
    salaryRange: formatSalaryRange(raw.salary_min, raw.salary_max),
    postedDate: formatRelativeDate(raw.created_at),
    applicationDeadline: raw.application_deadline
      ? new Date(raw.application_deadline).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      : null,
    openings: raw.openings ?? null,
    hiringStatus: raw.status === "Open" ? "Actively Hiring" : "Reviewing",
    aboutTeam: dept?.description || null,
    aboutRole: raw.description || "",
    responsibilities: parseListString(raw.responsibilities),
    qualifications: parseListString(raw.requirements),
    benefits: parseListString(raw.benefits),
    // techStack isn't provided by the API, so the Tech Stack section
    // simply won't render (it's already guarded by `job.techStack &&`).
  };
}

// ==================== REUSABLE UI ====================

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

// ==========================================
// 4. UI PRIMITIVES & DATA HOOKS
// ==========================================
const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 px-6 py-3 text-sm disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary:
      "bg-[#12324f] text-white hover:bg-[#1D4ED8] focus:ring-[#12324f] shadow-sm",
    secondary:
      "bg-white text-[#111827] border border-[#E5E7EB] hover:bg-[#F9FAFB] focus:ring-[#E5E7EB]",
    ghost:
      "bg-transparent text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#111827] border border-transparent",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Badge = ({ children, color = COLORS.accent }) => (
  <span
    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border"
    style={{ color, borderColor: `${color}33`, backgroundColor: `${color}0D` }}
  >
    {children}
  </span>
);

// Inline error state with retry, used wherever a fetch can fail.
const ErrorState = ({ message, onRetry }) => (
  <div className="text-center py-16 bg-[#FEF2F2] border border-[#FECACA] rounded-2xl px-6">
    <FaExclamationTriangle className="mx-auto text-2xl text-[#EF4444] mb-3" />
    <p className="text-[#991B1B] font-medium mb-1">
      Something went wrong loading this data.
    </p>
    <p className="text-[#B91C1C] text-sm mb-6">{message}</p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="bg-[#EF4444] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-[#DC2626] transition-colors shadow-sm"
      >
        Try Again
      </button>
    )}
  </div>
);

// Fetches the paginated jobs list plus departments (used to enrich each
// job with its department's description for the "About the Team" copy).
const useJobsData = () => {
  const [jobs, setJobs] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState(null);

  const load = useCallback(async (page = 1, append = false) => {
    append ? setIsLoadingMore(true) : setIsLoading(true);
    setError(null);
    try {
      const [{ jobs: rawJobs, pagination: pageInfo }, departments] =
        await Promise.all([
          fetchJobsPage({ page, limit: PAGE_SIZE }),
          fetchDepartments().catch(() => []), // departments are a nice-to-have enrichment
        ]);
      const normalized = rawJobs.map((j) => normalizeJob(j, departments));
      setJobs((prev) => (append ? [...prev, ...normalized] : normalized));
      setPagination(pageInfo);
    } catch (err) {
      setError(err.message || "Failed to load open positions.");
    } finally {
      setIsLoading(false);
      setIsLoadingMore(false);
    }
  }, []);

  useEffect(() => {
    load(1, false);
  }, [load]);

  const loadMore = useCallback(() => {
    if (pagination && pagination.page < pagination.totalPages) {
      load(pagination.page + 1, true);
    }
  }, [pagination, load]);

  const hasMore = pagination ? pagination.page < pagination.totalPages : false;

  return {
    jobs,
    isLoading,
    isLoadingMore,
    error,
    hasMore,
    loadMore,
    refetch: () => load(1, false),
  };
};

// Fetches a single job for the details page.
const useJobDetails = (jobId) => {
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const load = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setNotFound(false);
    try {
      const [rawJob, departments] = await Promise.all([
        fetchJobById(jobId),
        fetchDepartments().catch(() => []),
      ]);
      if (!rawJob) {
        setNotFound(true);
        setJob(null);
      } else {
        setJob(normalizeJob(rawJob, departments));
      }
    } catch (err) {
      setError(err.message || "Failed to load this job.");
    } finally {
      setIsLoading(false);
    }
  }, [jobId]);

  useEffect(() => {
    load();
  }, [load]);

  return { job, isLoading, error, notFound, refetch: load };
};

// ==========================================
// 5. JOB CARD COMPONENT
// ==========================================
const JobCard = memo(({ job }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/careers/jobdetails/${job.id}`)}
      className="group bg-white border border-[#E5E7EB] rounded-2xl p-6 cursor-pointer transition-all duration-[250ms] ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-[#12324f]"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-[#111827] mb-1">{job.title}</h3>
          <p className="text-sm text-[#6B7280]">
            {job.department} • {job.team}
          </p>
        </div>
        <FaArrowRight className="text-[#9CA3AF] group-hover:text-[#12324f] group-hover:translate-x-1 transition-all duration-[250ms]" />
      </div>
      <div className="flex flex-wrap gap-3 mb-5 text-xs text-[#6B7280]">
        <span className="inline-flex items-center gap-1.5">
          <FaMapMarkerAlt /> {job.location}
        </span>
        {job.employmentType && (
          <span className="inline-flex items-center gap-1.5">
            <FaBriefcase /> {job.employmentType}
          </span>
        )}
        {job.workModel && (
          <span className="inline-flex items-center gap-1.5">
            <FaClock /> {job.workModel}
          </span>
        )}
      </div>
      <div className="border-t border-[#F3F4F6] pt-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-[#111827]">
            {job.salaryRange || "Salary on request"}
          </p>
          {job.postedDate && (
            <p className="text-xs text-[#9CA3AF] mt-0.5">
              Posted {job.postedDate}
            </p>
          )}
        </div>
        {job.hiringStatus === "Actively Hiring" ? (
          <Badge color={COLORS.success}>Actively Hiring</Badge>
        ) : (
          <Badge color={COLORS.warning}>Reviewing</Badge>
        )}
      </div>
    </div>
  );
});

const HeroSection = memo(() => (
  <section className="relative h-[26vh] md:h-[60vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden">
    <img
      src={banner}
      alt="Innovise Career"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8s] ease-out"
    />
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

const CTASection = memo(() => (
  <section className="py-12 relative overflow-hidden bg-white">
    <div className="absolute inset-0 dot-pattern opacity-[0.02]" />

    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div className="reveal max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
          Build the Future <Gold>With Us</Gold>
        </h2>

        <p className="text-lg text-gray-600 mb-10 max-w-5xl mx-auto leading-relaxed">
          Great careers aren't always about finding the perfect opening today.
          We're continuously growing and creating new opportunities across
          engineering, product, design, and business teams. Explore our culture,
          stay connected, and discover where your skills can make a lasting
          impact.
        </p>

        <div className="flex justify-center">
          <Link
            to="/culture/values"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-[#FFC107] text-black font-semibold hover:bg-[#E6AE00] transition-all duration-300 hover:scale-105"
          >
            Explore Our Culture
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </div>
  </section>
));

// ==========================================
// 6. OPEN POSITIONS LIST (Route: /careers)
// ==========================================
const OpenPositions = memo(() => {
  const { jobs, isLoading, isLoadingMore, error, hasMore, loadMore, refetch } =
    useJobsData();
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  // Filter options are derived from whatever jobs are actually open right
  // now, rather than a hardcoded list, so the dropdowns never go stale.
  const departmentOptions = useMemo(
    () => Array.from(new Set(jobs.map((j) => j.department))).sort(),
    [jobs],
  );
  const locationOptions = useMemo(
    () => Array.from(new Set(jobs.map((j) => j.location))).sort(),
    [jobs],
  );

  const filteredJobs = useMemo(() => {
    const q = search.toLowerCase();
    return jobs.filter(
      (job) =>
        (job.title.toLowerCase().includes(q) ||
          job.department.toLowerCase().includes(q)) &&
        (deptFilter ? job.department === deptFilter : true) &&
        (locationFilter ? job.location === locationFilter : true),
    );
  }, [jobs, search, deptFilter, locationFilter]);

  const groupedJobs = useMemo(() => {
    const groups = {};
    filteredJobs.forEach((job) => {
      if (!groups[job.department]) groups[job.department] = [];
      groups[job.department].push(job);
    });
    return Object.entries(groups);
  }, [filteredJobs]);

  const clearFilters = () => {
    setSearch("");
    setDeptFilter("");
    setLocationFilter("");
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      <LeaderQuoteSection />

      <section id="positions" className="bg-[#FFFFFF] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-Black mb-6">
              Open <Gold>Positions</Gold>
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Explore roles across our teams. We're looking for passionate
              individuals ready to make a global impact.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl shadow-sm p-4 mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative w-full md:w-1/3">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
                />
              </div>
              <div className="flex flex-wrap gap-3 w-full md:w-auto md:ml-auto items-center">
                <select
                  value={deptFilter}
                  onChange={(e) => setDeptFilter(e.target.value)}
                  className="px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#12324f] cursor-pointer"
                >
                  <option value="">All Departments</option>
                  {departmentOptions.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                <select
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#12324f] cursor-pointer"
                >
                  <option value="">All Locations</option>
                  {locationOptions.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
                {(search || deptFilter || locationFilter) && (
                  <button
                    onClick={clearFilters}
                    className="text-sm font-medium text-[#6B7280] hover:text-[#12324f] transition-colors px-3 py-2"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Job Results */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-6 animate-pulse h-48"
                ></div>
              ))}
            </div>
          ) : error ? (
            <ErrorState message={error} onRetry={refetch} />
          ) : groupedJobs.length > 0 ? (
            <>
              <div className="space-y-12">
                {groupedJobs.map(([dept, jobsList]) => (
                  <div key={dept}>
                    <div className="flex items-center gap-3 mb-6">
                      <h3 className="text-xl font-bold text-[#12324f]">
                        {dept}
                      </h3>
                      <span className="text-sm font-medium text-[#854D0E] bg-[#FEF9C3] border border-[#EAB308] px-2.5 py-0.5 rounded-full">
                        {jobsList.length}{" "}
                        {jobsList.length === 1 ? "Role" : "Roles"}
                      </span>
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-[#EAB308] to-[#E5E7EB] ml-4 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {jobsList.map((job) => (
                        <JobCard key={job.id} job={job} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Only show "Load more" when no client-side filters are active,
                  since filtering only ever applies to jobs already fetched. */}
              {hasMore && !search && !deptFilter && !locationFilter && (
                <div className="text-center mt-12">
                  <button
                    onClick={loadMore}
                    disabled={isLoadingMore}
                    className="inline-flex items-center gap-2 bg-[#12324f] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#2f5c86] transition-colors shadow-sm disabled:opacity-60"
                  >
                    {isLoadingMore && <FaSpinner className="animate-spin" />}
                    {isLoadingMore ? "Loading..." : "Load More Roles"}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl">
              <p className="text-[#6B7280] text-lg">
                No positions match your current filters.
              </p>
              <button
                onClick={clearFilters}
                className="mt-6 bg-[#22527e] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#2f5c86] transition-colors shadow-sm"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      <HiringProcessSection />
      <CTASection />
    </>
  );
});

// ==========================================
// 7. JOB DETAILS PAGE (Route: /careers/jobdetails/:jobId)
// ==========================================
const JobDetailsPage = memo(() => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { job, isLoading, error, notFound, refetch } = useJobDetails(jobId);
  const [showApplication, setShowApplication] = useState(false);

  if (isLoading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center text-[#12324f] font-medium gap-3">
        <FaSpinner className="animate-spin" /> Loading job details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <ErrorState message={error} onRetry={refetch} />
        </div>
      </div>
    );
  }

  if (notFound || !job) {
    return (
      <div className="bg-white min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-[#12324f] mb-4">
          Job Not Found
        </h2>
        <button
          onClick={() => navigate("/careers")}
          className="bg-[#12324f] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#2f5c86] transition-colors shadow-sm"
        >
          Back to all roles
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Sub Navigation */}
      <div className="border-b border-[#E5E7EB] sticky top-0 bg-white/95 backdrop-blur z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <button
            onClick={() => navigate("/careers")}
            className="flex items-center gap-2 text-sm font-medium text-[#12324f] hover:text-[#12324f] transition-colors"
          >
            <FaArrowLeft /> Back to all roles
          </button>
          <button
            onClick={() => setShowApplication(true)}
            className="hidden md:inline-flex items-center gap-2 bg-[#12324f] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#2f5c86] transition-colors shadow-sm"
          >
            Apply Now <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header Section */}
        <div className="mb-12 border-b border-[#E5E7EB] pb-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#FEF9C3] text-[#854D0E] border border-[#EAB308] mb-4">
            {job.department}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#12324f] tracking-tight mb-4">
            {job.title}
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#6B7280]">
            <span className="inline-flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#EAB308]" /> {job.location}
            </span>
            {job.employmentType && (
              <span className="inline-flex items-center gap-2">
                <FaBriefcase className="text-[#EAB308]" /> {job.employmentType}
              </span>
            )}
            {job.workModel && (
              <span className="inline-flex items-center gap-2">
                <FaClock className="text-[#EAB308]" /> {job.workModel}
              </span>
            )}
            <span className="inline-flex items-center gap-2">
              <FaUsers className="text-[#EAB308]" /> {job.team} Team
            </span>
            {job.postedDate && (
              <span className="inline-flex items-center gap-2">
                <FaCalendarAlt className="text-[#EAB308]" /> Posted{" "}
                {job.postedDate}
              </span>
            )}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#F9FAFB] border border-[#E5E7EB] border-t-4 border-t-[#EAB308] rounded-2xl p-6 shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-4">
                  Job Details
                </h4>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#6B7280] flex items-center gap-2">
                      <FaDollarSign /> Salary
                    </span>
                    <span className="font-semibold text-[#111827] text-right">
                      {job.salaryRange || "On request"}
                    </span>
                  </div>
                  {job.experienceLevel && (
                    <div className="flex justify-between">
                      <span className="text-[#6B7280] flex items-center gap-2">
                        <FaBriefcase /> Level
                      </span>
                      <span className="font-semibold text-[#111827]">
                        {job.experienceLevel}
                      </span>
                    </div>
                  )}
                  {job.openings != null && (
                    <div className="flex justify-between">
                      <span className="text-[#6B7280] flex items-center gap-2">
                        <FaUsers /> Openings
                      </span>
                      <span className="font-semibold text-[#111827]">
                        {job.openings}
                      </span>
                    </div>
                  )}
                  {job.applicationDeadline && (
                    <div className="flex justify-between">
                      <span className="text-[#6B7280] flex items-center gap-2">
                        <FaCalendarAlt /> Apply By
                      </span>
                      <span className="font-semibold text-[#111827]">
                        {job.applicationDeadline}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-[#6B7280] flex items-center gap-2">
                      <FaShieldAlt /> Status
                    </span>
                    {job.hiringStatus === "Actively Hiring" ? (
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">
                        Actively Hiring
                      </span>
                    ) : (
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700 border border-yellow-200">
                        Reviewing
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setShowApplication(true)}
                  className="w-full mt-6 inline-flex items-center justify-center gap-2 bg-[#12324f] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#2f5c86] transition-colors shadow-sm"
                >
                  Apply Now <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-10 text-[#374151] text-base leading-relaxed">
            {job.aboutTeam && (
              <section>
                <h2 className="text-2xl font-bold text-[#12324f] mb-4">
                  About the Team
                </h2>
                <p>{job.aboutTeam}</p>
              </section>
            )}
            {job.aboutRole && (
              <section>
                <h2 className="text-2xl font-bold text-[#12324f] mb-4">
                  About the Role
                </h2>
                <p>{job.aboutRole}</p>
              </section>
            )}
            {job.responsibilities.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-[#12324f] mb-4">
                  What You'll Do
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <FaCheckCircle className="text-[#12324f] mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {job.qualifications.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-[#12324f] mb-4">
                  What We're Looking For
                </h2>
                <ul className="space-y-3">
                  {job.qualifications.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <FaCheckCircle className="text-[#EAB308] mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {job.benefits.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-[#12324f] mb-4">
                  Benefits
                </h2>
                <div className="flex flex-wrap gap-2">
                  {job.benefits.map((b) => (
                    <span
                      key={b}
                      className="px-4 py-2 bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg text-sm font-medium text-[#166534]"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </section>
            )}
            {job.techStack && (
              <section>
                <h2 className="text-2xl font-bold text-[#12324f] mb-4">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {job.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg text-sm font-medium text-[#12324f] flex items-center gap-2"
                    >
                      <FaCode className="text-[#12324f]" /> {tech}
                    </span>
                  ))}
                </div>
              </section>
            )}
            <section className="pt-8 border-t border-[#E5E7EB]">
              <p className="text-sm text-[#6B7280] italic">
                We are an equal opportunity employer. We celebrate diversity and
                are committed to creating an inclusive environment for all
                employees.
              </p>
            </section>
          </div>
        </div>
      </div>

      {showApplication && (
        <ApplicationFlow
          selectedJob={job}
          onClose={() => setShowApplication(false)}
        />
      )}
    </div>
  );
});

// ==========================================
// 8. MULTI-STEP APPLICATION FLOW MODAL
// ==========================================
const ApplicationFlow = memo(({ selectedJob, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    resume: null,
    linkedin: "",
    github: "",
    website: "",
    workAuth: false,
    coverLetter: "",
  });
  const [errors, setErrors] = useState({});
  const [isDragging, setIsDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  if (!selectedJob) return null;
  const steps = ["Personal", "Resume", "Portfolio", "Questions", "Review"];

  const validateStep = () => {
    let tempErrors = {};
    if (step === 1) {
      if (!formData.fullName.trim())
        tempErrors.fullName = "Full name is required";
      if (!formData.email.trim()) tempErrors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        tempErrors.email = "Invalid email format";
    }
    if (step === 2 && !formData.resume)
      tempErrors.resume = "Please upload your resume";
    if (step === 4 && !formData.workAuth)
      tempErrors.workAuth = "You must confirm work authorization";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep((prev) => Math.min(prev + 1, 5));
  };
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async () => {
    if (!validateStep()) return;
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const nameParts = formData.fullName.trim().split(/\s+/);
      const firstName = nameParts[0] || formData.fullName.trim();
      const lastName = nameParts.slice(1).join(" ") || "-";

      // The API only accepts a single "portfolio" link and no GitHub field,
      // so we fold GitHub into the cover letter rather than dropping it.
      const notes = [
        formData.coverLetter,
        formData.github ? `GitHub: ${formData.github}` : null,
      ]
        .filter(Boolean)
        .join("\n\n");

      const payload = new FormData();
      payload.append("resume", formData.resume);
      payload.append("job_id", selectedJob.id);
      payload.append("first_name", firstName);
      payload.append("last_name", lastName);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("linkedin", formData.linkedin);
      payload.append("portfolio", formData.website);
      payload.append("experience", formData.experience);
      payload.append("cover_letter", notes);

      await submitApplication(payload);
      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err.message ||
          "Something went wrong submitting your application. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (file) => {
    if (!file) return;
    if (file.size < 5 * 1024 * 1024) {
      setFormData((prev) => ({ ...prev, resume: file }));
      setErrors((prev) => ({ ...prev, resume: null }));
    } else {
      setErrors((prev) => ({
        ...prev,
        resume: "Invalid file. Must be under 5MB.",
      }));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileChange(e.dataTransfer.files[0]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-[#E5E7EB]">
          <div>
            <p className="text-sm text-[#6B7280]">Applying for</p>
            <h3 className="text-xl font-bold text-[#0F172A]">
              {selectedJob.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#6B7280] hover:bg-[#F9FAFB] rounded-lg transition-colors"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="p-12 text-center flex-1 flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-[#10B981]/10 rounded-full flex items-center justify-center mb-6">
              <FaCheckCircle size={32} className="text-[#10B981]" />
            </div>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-3">
              Application Submitted!
            </h2>
            <p className="text-[#6B7280] max-w-md mb-8">
              Thank you for applying. Our talent acquisition team will review
              your application and get back to you within 5-7 business days.
            </p>
            <Button onClick={onClose}>Close</Button>
          </div>
        ) : (
          <>
            {/* Progress Indicator */}
            <div className="px-6 pt-6">
              <div className="flex items-center justify-between mb-2">
                {steps.map((label, i) => (
                  <div key={label} className="flex-1 flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300 
                      ${step > i + 1 ? "bg-[#10B981] text-white" : step === i + 1 ? "bg-[#12324f] text-white" : "bg-[#F9FAFB] text-[#6B7280] border border-[#E5E7EB]"}`}
                    >
                      {step > i + 1 ? <FaCheckCircle /> : i + 1}
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        className={`flex-1 h-1 mx-2 rounded-full ${step > i + 1 ? "bg-[#10B981]" : "bg-[#E5E7EB]"}`}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mb-6">
                {steps.map((label, i) => (
                  <div
                    key={label}
                    className={`flex-1 text-center text-xs font-medium ${step === i + 1 ? "text-[#12324f]" : "text-[#9CA3AF]"}`}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 bg-[#F9FAFB]">
              {step === 1 && (
                <div className="space-y-5 bg-white p-6 rounded-xl border border-[#E5E7EB]">
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-[#EF4444] text-xs mt-1.5">
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[#EF4444] text-xs mt-1.5">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-2">
                      Years of Experience
                    </label>
                    <div className="relative">
                      <FaBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                      <input
                        type="text"
                        placeholder="e.g. 2 years"
                        value={formData.experience}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            experience: e.target.value,
                          })
                        }
                        className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
                  <label className="block text-sm font-semibold text-[#111827] mb-2">
                    Upload Resume *
                  </label>
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragging(true);
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${isDragging ? "border-[#12324f] bg-[#12324f]/5" : "border-[#E5E7EB] hover:border-[#12324f]"}`}
                    onClick={() => document.getElementById("fileInput").click()}
                  >
                    {formData.resume ? (
                      <div className="flex items-center justify-center gap-4 text-left">
                        <div className="w-12 h-12 bg-[#12324f]/10 rounded-xl flex items-center justify-center">
                          <FaFileAlt size={20} className="text-[#12324f]" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#111827]">
                            {formData.resume.name}
                          </p>
                          <p className="text-xs text-[#6B7280]">
                            {(formData.resume.size / 1024).toFixed(1)} KB •
                            Ready to submit
                          </p>
                        </div>
                      </div>
                    ) : (
                      <>
                        <FaCloudUploadAlt
                          size={32}
                          className="mx-auto text-[#9CA3AF] mb-3"
                        />
                        <p className="font-semibold text-[#111827] mb-1">
                          Drag & drop your resume here
                        </p>
                        <p className="text-sm text-[#6B7280]">
                          or click to browse files
                        </p>
                        <p className="text-xs text-[#9CA3AF] mt-3">
                          PDF, DOC, DOCX (Max 5MB)
                        </p>
                      </>
                    )}
                    <input
                      type="file"
                      id="fileInput"
                      className="hidden"
                      onChange={(e) => handleFileChange(e.target.files[0])}
                      accept=".pdf,.doc,.docx"
                    />
                  </div>
                  {errors.resume && (
                    <p className="text-[#EF4444] text-xs mt-2">
                      {errors.resume}
                    </p>
                  )}
                </div>
              )}

              {step === 3 && (
                <div className="space-y-5 bg-white p-6 rounded-xl border border-[#E5E7EB]">
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-2">
                      LinkedIn Profile
                    </label>
                    <div className="relative">
                      <FaLinkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/username"
                        value={formData.linkedin}
                        onChange={(e) =>
                          setFormData({ ...formData, linkedin: e.target.value })
                        }
                        className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-2">
                      GitHub Profile
                    </label>
                    <div className="relative">
                      <FaGithub className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                      <input
                        type="url"
                        placeholder="https://github.com/username"
                        value={formData.github}
                        onChange={(e) =>
                          setFormData({ ...formData, github: e.target.value })
                        }
                        className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-2">
                      Personal Website / Portfolio
                    </label>
                    <div className="relative">
                      <FaGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                      <input
                        type="url"
                        placeholder="https://yourportfolio.com"
                        value={formData.website}
                        onChange={(e) =>
                          setFormData({ ...formData, website: e.target.value })
                        }
                        className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-5 bg-white p-6 rounded-xl border border-[#E5E7EB]">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="workAuth"
                      checked={formData.workAuth}
                      onChange={(e) =>
                        setFormData({ ...formData, workAuth: e.target.checked })
                      }
                      className="mt-1 w-5 h-5 rounded border-[#E5E7EB] text-[#12324f] focus:ring-[#12324f] cursor-pointer"
                    />
                    <label
                      htmlFor="workAuth"
                      className="text-sm text-[#111827]"
                    >
                      Are you legally authorized to work in the country of this
                      role? *
                    </label>
                  </div>
                  {errors.workAuth && (
                    <p className="text-[#EF4444] text-xs">{errors.workAuth}</p>
                  )}
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-2">
                      Why are you interested in this role?
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us why you'd be a great fit..."
                      value={formData.coverLetter}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          coverLetter: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
                  <h4 className="text-lg font-bold text-[#0F172A] mb-4">
                    Review Your Application
                  </h4>
                  <div className="space-y-3 text-sm border-t border-[#E5E7EB] pt-4">
                    <div className="flex justify-between">
                      <span className="text-[#6B7280]">Name:</span>{" "}
                      <span className="font-medium text-[#111827]">
                        {formData.fullName}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6B7280]">Email:</span>{" "}
                      <span className="font-medium text-[#111827]">
                        {formData.email}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6B7280]">Phone:</span>{" "}
                      <span className="font-medium text-[#111827]">
                        {formData.phone || "N/A"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6B7280]">Experience:</span>{" "}
                      <span className="font-medium text-[#111827]">
                        {formData.experience || "N/A"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6B7280]">Resume:</span>{" "}
                      <span className="font-medium text-[#12324f]">
                        {formData.resume?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6B7280]">Work Authorized:</span>{" "}
                      <span className="font-medium text-[#111827]">
                        {formData.workAuth ? "Yes" : "No"}
                      </span>
                    </div>
                  </div>
                  {submitError && (
                    <div className="mt-5 flex items-start gap-2 bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] text-sm rounded-lg p-3">
                      <FaExclamationTriangle className="mt-0.5 flex-shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="flex justify-between items-center p-6 bg-white border-t border-[#E5E7EB]">
              <Button
                variant="ghost"
                onClick={step === 1 ? onClose : handlePrev}
                disabled={isSubmitting}
              >
                {step === 1 ? "Cancel" : "Back"}
              </Button>
              {step < 5 ? (
                <Button onClick={handleNext}>
                  Continue <FaArrowRight />
                </Button>
              ) : (
                <Button onClick={handleSubmit} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application <FaCheckCircle />
                    </>
                  )}
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
});

// ==========================================
// 9. MAIN CAREERS PAGE ROUTER
// ==========================================
const CareersPage = () => {
  return (
    <main className="bg-[#FFFFFF] min-h-screen font-sans antialiased">
      <Routes>
        <Route path="/" element={<OpenPositions />} />
        <Route path="/jobdetails/:jobId" element={<JobDetailsPage />} />
      </Routes>
    </main>
  );
};

export default memo(CareersPage);
