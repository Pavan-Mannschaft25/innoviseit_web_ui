// import React, { useState, useCallback, useMemo, memo } from "react";
// import Container from "../components/ui/Container";
// import { motion } from "framer-motion";
// import {
//   FaMapMarkerAlt,
//   FaEnvelope,
//   FaPhone,
//   FaClock,
//   FaPaperPlane,
//   FaHeadset,
//   FaArrowRight,
//   FaCheck,
//   FaExclamationCircle,
// } from "react-icons/fa";
// import toast from "react-hot-toast";
// import bannerImg from "../assets/banners/contact.png";

// // ==================== BRAND COLORS (Same as Careers) ====================
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
// const ANIMATION_CONFIG = {
//   stagger: 0.15,
//   duration: 0.6,
// };

// // ==================== DATA ====================
// const companyData = {
//   contact: {
//     address: {
//       street: "123 Innovation Drive, Suite 500",
//       city: "Redmond",
//       state: "WA",
//       zip: "98052",
//       country: "United States",
//     },
//     email: "contact@innoviseit.com",
//     phone: "+1 (555) 234-5678",
//     hours: "Mon - Fri: 9:00 AM - 6:00 PM PST",
//   },
// };

// // ==================== CUSTOM HOOKS ====================
// const useFormState = (initialState) => {
//   const [formData, setFormData] = useState(initialState);
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});

//   const handleChange = useCallback(
//     (e) => {
//       const { name, value } = e.target;
//       setFormData((prev) => ({ ...prev, [name]: value }));
//       // Clear error on change
//       if (errors[name]) {
//         setErrors((prev) => ({ ...prev, [name]: "" }));
//       }
//     },
//     [errors],
//   );

//   const handleBlur = useCallback((e) => {
//     const { name, value } = e.target;
//     setTouched((prev) => ({ ...prev, [name]: true }));

//     // Validate on blur
//     let error = "";
//     if (
//       name === "email" &&
//       value &&
//       !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
//     ) {
//       error = "Please enter a valid email address";
//     }
//     if (
//       (name === "firstName" || name === "lastName") &&
//       value &&
//       value.length < 2
//     ) {
//       error = "Must be at least 2 characters";
//     }

//     if (error) {
//       setErrors((prev) => ({ ...prev, [name]: error }));
//     }
//   }, []);

//   const resetForm = useCallback(() => {
//     setFormData(initialState);
//     setErrors({});
//     setTouched({});
//   }, [initialState]);

//   return {
//     formData,
//     errors,
//     touched,
//     handleChange,
//     handleBlur,
//     resetForm,
//     setFormData,
//   };
// };

// // ==================== MEMOIZED COMPONENTS ====================

// // Hero Section
// const HeroSection = memo(() => (
//   <section className="relative h-[70vh] overflow-hidden">
//     {/* Background Image */}
//     <img
//       src={bannerImg} // your uploaded image
//       alt="Innovise IT Think"
//       className="absolute inset-0 w-full h-full object-cover"
//     />

//     {/* Optional Dark Overlay (for better text visibility) */}
//     <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F2C]/90 via-[#0A0F2C]/60 to-transparent" />

//     {/* LEFT SIDE TEXT */}
//     <div className="relative z-10 h-full flex items-center">
//       <div className="max-w-2xl px-6 md:px-12 lg:px-20">
//         {/* Small Label */}
//         <p className="text-sm uppercase tracking-widest text-yellow-400 mb-4">
//           Let's Connect
//         </p>

//         {/* Main Heading */}
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
//           Get in Touch
//         </h1>

//         {/* Subtitle */}
//         <p className="text-lg md:text-xl text-white/70 leading-relaxed">
//           Ready to start your transformation journey? Our team of experts is
//           here to help you find the perfect solution for your business needs.
//         </p>
//       </div>
//     </div>
//   </section>
// ));

// HeroSection.displayName = "HeroSection";

// // Contact Info Card Component
// const ContactInfoCard = memo(({ info, index }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{
//       delay: index * ANIMATION_CONFIG.stagger,
//       duration: ANIMATION_CONFIG.duration,
//     }}
//     whileHover={{ y: -5, scale: 1.02 }}
//     className="group relative rounded-2xl overflow-hidden transition-all duration-500 cursor-default focus-within:ring-2 focus-within:ring-offset-2"
//     style={{
//       background: "white",
//       border: "1px solid rgba(0,0,0,0.06)",
//       boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
//       "--tw-ring-color": BRAND.gold.primary,
//     }}
//     onMouseEnter={(e) => {
//       e.currentTarget.style.borderColor = `${BRAND.gold.primary}40`;
//       e.currentTarget.style.boxShadow = `0 20px 40px ${BRAND.gold.primary}15`;
//     }}
//     onMouseLeave={(e) => {
//       e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
//       e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)";
//     }}
//     tabIndex={0}
//     role="article"
//     aria-labelledby={`contact-title-${index}`}
//   >
//     <div className="p-6 lg:p-8">
//       <div className="flex items-start gap-4">
//         {/* Icon Container */}
//         <div
//           className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
//           style={{
//             background: `${BRAND.gold.primary}10`,
//             border: `1px solid ${BRAND.gold.primary}25`,
//           }}
//         >
//           <info.icon
//             className="text-xl transition-colors duration-300"
//             style={{ color: BRAND.gold.primary }}
//             aria-hidden="true"
//           />
//         </div>

//         {/* Content */}
//         <div className="flex-grow min-w-0">
//           <h4
//             id={`contact-title-${index}`}
//             className="font-bold text-lg mb-3 transition-colors"
//             style={{ color: BRAND.navy.dark }}
//           >
//             {info.title}
//           </h4>

//           <div className="space-y-1">
//             {info.details.map((detail, idx) => (
//               <p
//                 key={idx}
//                 className="text-sm leading-relaxed"
//                 style={{ color: "#64748B" }}
//               >
//                 {detail}
//               </p>
//             ))}
//           </div>

//           {info.action && (
//             <a
//               href={info.action.href}
//               className="inline-flex items-center gap-2 mt-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 group/link hover:gap-3"
//               style={{ color: BRAND.gold.primary }}
//               aria-label={info.action.label}
//             >
//               {info.action.label}
//               <FaArrowRight
//                 className="text-xs transition-transform duration-300 group-hover/link:translate-x-1"
//                 aria-hidden="true"
//               />
//             </a>
//           )}
//         </div>
//       </div>
//     </div>

//     {/* Corner Glow Effect */}
//     <div
//       className="absolute bottom-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//       style={{ background: BRAND.gold.primary }}
//       aria-hidden="true"
//     />
//   </motion.div>
// ));

// ContactInfoCard.displayName = "ContactInfoCard";

// // Support Card Component
// const SupportCard = memo(() => (
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ delay: 0.5, duration: ANIMATION_CONFIG.duration }}
//     className="relative rounded-2xl overflow-hidden"
//     style={{
//       background: `linear-gradient(135deg, ${BRAND.navy.dark}, ${BRAND.navy.lighter})`,
//       border: `1px solid ${BRAND.gold.primary}20`,
//     }}
//   >
//     <div className="p-6 lg:p-8 relative z-10">
//       <div className="flex items-start gap-4">
//         <div
//           className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
//           style={{ background: BRAND.gold.gradient }}
//         >
//           <FaHeadset
//             className="text-2xl"
//             style={{ color: BRAND.navy.dark }}
//             aria-hidden="true"
//           />
//         </div>

//         <div className="flex-grow">
//           <h4 className="font-bold text-lg mb-2 text-white">
//             Need Immediate Assistance?
//           </h4>
//           <p
//             className="text-sm mb-4"
//             style={{ color: "rgba(255,255,255,0.7)" }}
//           >
//             Our support team is available 24/7 for existing clients.
//           </p>

//           <a
//             href={`tel:${companyData.contact.phone.replace(/\s/g, "")}`}
//             className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
//             style={{
//               background: BRAND.gold.gradient,
//               color: BRAND.navy.dark,
//               boxShadow: `0 4px 15px ${BRAND.gold.primary}35`,
//               "--tw-ring-color": BRAND.gold.primary,
//               "--tw-ring-offset-color": BRAND.navy.dark,
//             }}
//           >
//             <FaPhone className="text-xs" aria-hidden="true" />
//             Emergency Support Line
//             <FaArrowRight
//               className="text-xs group-hover/btn:translate-x-1 transition-transform"
//               aria-hidden="true"
//             />
//           </a>
//         </div>
//       </div>
//     </div>

//     {/* Background Pattern */}
//     <div
//       className="absolute inset-0 opacity-[0.03]"
//       style={{
//         backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//         backgroundSize: "30px 30px",
//       }}
//       aria-hidden="true"
//     />
//   </motion.div>
// ));

// SupportCard.displayName = "SupportCard";

// // Input Field Component
// const FormInput = memo(
//   ({
//     label,
//     name,
//     type = "text",
//     value,
//     onChange,
//     onBlur,
//     placeholder,
//     required,
//     error,
//     icon: Icon,
//     textarea = false,
//   }) => {
//     const baseClasses =
//       "w-full px-4 py-3.5 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2";
//     const stateClasses = error
//       ? "border-red-400 focus:border-red-500 focus:ring-red-200 bg-red-50/30"
//       : "border-gray-200 focus:border-yellow-400 bg-gray-50 focus:bg-white focus:ring-yellow-200";

//     const Component = textarea ? "textarea" : "input";

//     return (
//       <div className="space-y-2">
//         <label
//           htmlFor={name}
//           className="block text-sm font-semibold transition-colors"
//           style={{ color: BRAND.navy.dark }}
//         >
//           {label} {required && <span className="text-red-500">*</span>}
//         </label>

//         <div className="relative">
//           {Icon && (
//             <Icon
//               className="absolute left-4 top-1/2 -translate-y-1/2 text-sm transition-colors pointer-events-none"
//               style={{ color: error ? "#EF4444" : "#94A3B8" }}
//               aria-hidden="true"
//             />
//           )}

//           <Component
//             id={name}
//             name={name}
//             type={type}
//             value={value}
//             onChange={onChange}
//             onBlur={onBlur}
//             placeholder={placeholder}
//             required={required}
//             aria-invalid={!!error}
//             aria-describedby={error ? `${name}-error` : undefined}
//             className={`${baseClasses} ${stateClasses} ${Icon ? "pl-11" : ""} ${
//               textarea ? "resize-none" : ""
//             }`}
//             rows={textarea ? 5 : undefined}
//           />
//         </div>

//         {error && (
//           <p
//             id={`${name}-error`}
//             className="flex items-center gap-1.5 text-sm text-red-500"
//             role="alert"
//           >
//             <FaExclamationCircle className="flex-shrink-0" aria-hidden="true" />
//             {error}
//           </p>
//         )}
//       </div>
//     );
//   },
// );

// FormInput.displayName = "FormInput";

// // Main Contact Page Component
// const ContactPage = () => {
//   // Form State
//   const initialFormData = useMemo(
//     () => ({
//       firstName: "",
//       lastName: "",
//       email: "",
//       company: "",
//       phone: "",
//       subject: "",
//       message: "",
//       agreedToTerms: false,
//     }),
//     [],
//   );

//   const { formData, errors, touched, handleChange, handleBlur, resetForm } =
//     useFormState(initialFormData);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Contact Info Data
//   const contactInfo = useMemo(
//     () => [
//       {
//         icon: FaMapMarkerAlt,
//         title: "Visit Our Office",
//         details: [
//           companyData.contact.address.street,
//           `${companyData.contact.address.city}, ${companyData.contact.address.state} ${companyData.contact.address.zip}`,
//           companyData.contact.address.country,
//         ],
//         action: null,
//       },
//       {
//         icon: FaEnvelope,
//         title: "Email Us",
//         details: [companyData.contact.email],
//         action: {
//           label: "Send Email",
//           href: `mailto:${companyData.contact.email}`,
//         },
//       },
//       {
//         icon: FaPhone,
//         title: "Call Us",
//         details: [companyData.contact.phone],
//         action: {
//           label: "Call Now",
//           href: `tel:${companyData.contact.phone.replace(/\s/g, "")}`,
//         },
//       },
//       {
//         icon: FaClock,
//         title: "Business Hours",
//         details: [companyData.contact.hours],
//         action: null,
//       },
//     ],
//     [],
//   );

//   // Subject Options
//   const subjectOptions = useMemo(
//     () => [
//       { value: "", label: "Select a topic..." },

//       { value: "sap-consulting", label: "SAP Consulting & Implementation" },

//       { value: "guidewire-services", label: "Guidewire Services" },

//       { value: "ai-engineering", label: "AI & Engineering Services" },

//       {
//         value: "cloud-transformation",
//         label: "Cloud & Digital Transformation",
//       },

//       {
//         value: "integration-services",
//         label: "Enterprise Integration Services",
//       },

//       {
//         value: "application-management",
//         label: "Application Management Services",
//       },

//       { value: "data-migration", label: "Data Migration & Transformation" },

//       { value: "staff-augmentation", label: "Staff Augmentation" },

//       { value: "partnership", label: "Partnership Inquiry" },

//       { value: "support", label: "Technical Support" },

//       { value: "other", label: "Other" },
//     ],
//     [],
//   );

//   // Form Submission Handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate required fields
//     const newErrors = {};
//     if (!formData.firstName?.trim())
//       newErrors.firstName = "First name is required";
//     if (!formData.lastName?.trim())
//       newErrors.lastName = "Last name is required";
//     if (!formData.email?.trim()) newErrors.email = "Email is required";
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
//       newErrors.email = "Invalid email format";
//     if (!formData.subject) newErrors.subject = "Please select a subject";
//     if (!formData.message?.trim()) newErrors.message = "Message is required";
//     if (!formData.agreedToTerms)
//       newErrors.agreedToTerms = "You must agree to the privacy policy";

//     if (Object.keys(newErrors).length > 0) {
//       toast.error("Please fix the errors in the form");
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       toast.success(
//         "Message sent successfully! We'll respond within 24 hours.",
//         {
//           icon: "",
//           duration: 5000,
//           style: {
//             background: BRAND.navy.dark,
//             color: "#fff",
//             border: `1px solid ${BRAND.gold.primary}`,
//           },
//           iconTheme: {
//             primary: BRAND.gold.primary,
//             secondary: BRAND.navy.dark,
//           },
//         },
//       );

//       resetForm();
//     } catch (error) {
//       toast.error("Something went wrong. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <main role="main">
//       {/* Hero Section */}
//       <HeroSection />

//       {/* Main Contact Content */}
//       <section
//         className="py-24 bg-white relative overflow-hidden"
//         aria-label="Contact information and form"
//       >
//         {/* Background Decoration */}
//         <div
//           className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.04] -translate-y-1/2 translate-x-1/2"
//           style={{ background: BRAND.navy.lighter }}
//           aria-hidden="true"
//         />

//         <Container>
//           <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
//             {/* Left Column - Contact Information */}
//             <div className="lg:col-span-2 space-y-6">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//               >
//                 <span
//                   className="inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4"
//                   style={{
//                     background: `${BRAND.navy.mid}08`,
//                     color: BRAND.navy.dark,
//                     border: `1px solid ${BRAND.navy.mid}15`,
//                   }}
//                 >
//                   Contact Info
//                 </span>

//                 <h2
//                   className="text-3xl md:text-4xl font-bold mb-4"
//                   style={{ color: BRAND.navy.dark }}
//                 >
//                   Get in{" "}
//                   <span style={{ color: BRAND.gold.primary }}>Touch</span>
//                 </h2>

//                 <p
//                   className="text-base leading-relaxed mb-8"
//                   style={{ color: "#64748B" }}
//                 >
//                   Whether you have a question about our services, need technical
//                   support, or want to explore partnership opportunities—we're
//                   here to help.
//                 </p>
//               </motion.div>

//               {/* Contact Cards */}
//               <div
//                 className="space-y-5"
//                 role="list"
//                 aria-label="Contact methods"
//               >
//                 {contactInfo.map((info, index) => (
//                   <ContactInfoCard key={index} info={info} index={index} />
//                 ))}
//               </div>

//               {/* Support CTA Card */}
//               <SupportCard />
//             </div>

//             {/* Right Column - Contact Form */}
//             <div className="lg:col-span-3">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2 }}
//                 className="rounded-3xl overflow-hidden shadow-2xl relative"
//                 style={{
//                   border: `1px solid rgba(0,0,0,0.06)`,
//                   background: "white",
//                 }}
//               >
//                 {/* Form Header */}
//                 <div className="relative p-8 lg:p-10 pb-0">
//                   <div className="mb-8">
//                     <h3
//                       className="text-2xl lg:text-3xl font-bold mb-3"
//                       style={{ color: BRAND.navy.dark }}
//                     >
//                       Send us a{" "}
//                       <span style={{ color: BRAND.gold.primary }}>Message</span>
//                     </h3>
//                     <p className="text-base" style={{ color: "#64748B" }}>
//                       Fill out the form below and we'll get back to you within
//                       24 hours.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Form Body */}
//                 <form
//                   onSubmit={handleSubmit}
//                   className="p-8 lg:p-10 pt-0 space-y-6"
//                   noValidate
//                 >
//                   {/* Name Fields */}
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <FormInput
//                       label="First Name"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       placeholder="John"
//                       required
//                       error={touched.firstName ? errors.firstName : ""}
//                     />
//                     <FormInput
//                       label="Last Name"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       placeholder="Doe"
//                       required
//                       error={touched.lastName ? errors.lastName : ""}
//                     />
//                   </div>

//                   {/* Email & Phone */}
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <FormInput
//                       label="Email Address"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       placeholder="john@company.com"
//                       required
//                       icon={FaEnvelope}
//                       error={touched.email ? errors.email : ""}
//                     />
//                     <FormInput
//                       label="Phone Number"
//                       name="phone"
//                       type="tel"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       placeholder="+1 (555) 000-0000"
//                       icon={FaPhone}
//                     />
//                   </div>

//                   {/* Company */}
//                   <FormInput
//                     label="Company Name"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     placeholder="Your Company"
//                   />

//                   {/* Subject Select */}
//                   <div className="space-y-2">
//                     <label
//                       htmlFor="subject"
//                       className="block text-sm font-semibold"
//                       style={{ color: BRAND.navy.dark }}
//                     >
//                       Subject <span className="text-red-500">*</span>
//                     </label>

//                     <select
//                       id="subject"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       required
//                       aria-invalid={!!errors.subject}
//                       className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 appearance-none cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:border-yellow-400 focus:bg-white focus:ring-yellow-200"
//                       style={{
//                         backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M6 8L2 4l4-4 4 4z' fill='%2394A3B8'/%3E%3C/svg%3E")`,
//                         backgroundRepeat: "no-repeat",
//                         backgroundPosition: "right 16px center",
//                       }}
//                     >
//                       {subjectOptions.map((option) => (
//                         <option key={option.value} value={option.value}>
//                           {option.label}
//                         </option>
//                       ))}
//                     </select>

//                     {errors.subject && touched.subject && (
//                       <p
//                         className="flex items-center gap-1.5 text-sm text-red-500"
//                         role="alert"
//                       >
//                         <FaExclamationCircle aria-hidden="true" />
//                         {errors.subject}
//                       </p>
//                     )}
//                   </div>

//                   {/* Message Textarea */}
//                   <FormInput
//                     label="Message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     placeholder="Tell us about your project or inquiry..."
//                     required
//                     textarea
//                     error={touched.message ? errors.message : ""}
//                   />

//                   {/* Privacy Checkbox */}
//                   <div className="flex items-start gap-3 pt-2">
//                     <input
//                       type="checkbox"
//                       id="privacy"
//                       name="agreedToTerms"
//                       checked={formData.agreedToTerms}
//                       onChange={handleChange}
//                       required
//                       className="mt-1 w-5 h-5 rounded cursor-pointer transition-all"
//                       style={{ accentColor: BRAND.gold.primary }}
//                       aria-describedby={
//                         errors.agreedToTerms ? "privacy-error" : undefined
//                       }
//                     />
//                     <label
//                       htmlFor="privacy"
//                       className="text-sm cursor-pointer leading-relaxed"
//                       style={{ color: "#64748B" }}
//                     >
//                       I agree to the{" "}
//                       <a
//                         href="#"
//                         className="font-semibold underline transition-colors hover:opacity-80"
//                         style={{ color: BRAND.gold.primary }}
//                       >
//                         Privacy Policy
//                       </a>{" "}
//                       and consent to processing my personal data for contact
//                       purposes.
//                     </label>
//                   </div>

//                   {errors.agreedToTerms && (
//                     <p
//                       id="privacy-error"
//                       className="flex items-center gap-1.5 text-sm text-red-500"
//                       role="alert"
//                     >
//                       <FaExclamationCircle aria-hidden="true" />
//                       {errors.agreedToTerms}
//                     </p>
//                   )}

//                   {/* Submit Button */}
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="group relative w-full py-5 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:transform-none focus:outline-none focus:ring-2 focus:ring-offset-2 mt-4"
//                     style={{
//                       background: BRAND.gold.gradient,
//                       color: BRAND.navy.dark,
//                       boxShadow: `0 8px 30px ${BRAND.gold.primary}35`,
//                       "--tw-ring-color": BRAND.gold.primary,
//                     }}
//                     aria-label={
//                       isSubmitting ? "Sending message..." : "Send message"
//                     }
//                   >
//                     <span className="relative z-10 flex items-center justify-center gap-3">
//                       {isSubmitting ? (
//                         <>
//                           <svg
//                             className="animate-spin h-5 w-5"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             aria-hidden="true"
//                           >
//                             <circle
//                               className="opacity-25"
//                               cx="12"
//                               cy="12"
//                               r="10"
//                               stroke="currentColor"
//                               strokeWidth="4"
//                             ></circle>
//                             <path
//                               className="opacity-75"
//                               fill="currentColor"
//                               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                             ></path>
//                           </svg>
//                           Sending...
//                         </>
//                       ) : (
//                         <>
//                           <FaPaperPlane aria-hidden="true" />
//                           Send Message
//                           <FaArrowRight
//                             className="text-sm group-hover:translate-x-1 transition-transform"
//                             aria-hidden="true"
//                           />
//                         </>
//                       )}
//                     </span>

//                     {/* Shine Effect */}
//                     {!isSubmitting && (
//                       <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
//                         <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
//                       </div>
//                     )}
//                   </button>
//                 </form>
//               </motion.div>
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* Map Section */}
//       <section
//         className="relative h-96 lg:h-[500px] overflow-hidden"
//         aria-label="Office location map"
//       >
//         <div
//           className="absolute inset-0"
//           style={{
//             background: `linear-gradient(135deg, ${BRAND.navy.lighter} 0%, ${BRAND.navy.mid} 50%, ${BRAND.navy.dark} 100%)`,
//           }}
//         >
//           {/* Map Placeholder Pattern */}
//           <div
//             className="absolute inset-0 opacity-[0.05]"
//             style={{
//               backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//               backgroundSize: "30px 30px",
//             }}
//             aria-hidden="true"
//           />

//           {/* Decorative Elements */}
//           <motion.div
//             animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
//             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl"
//             style={{ background: BRAND.gold.primary }}
//             aria-hidden="true"
//           />
//         </div>

//         <Container className="relative z-10 h-full flex items-center justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center"
//           >
//             <motion.div
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
//               style={{
//                 background: BRAND.gold.gradient,
//                 boxShadow: `0 10px 40px ${BRAND.gold.primary}40`,
//               }}
//             >
//               <FaMapMarkerAlt
//                 className="text-3xl"
//                 style={{ color: BRAND.navy.dark }}
//                 aria-hidden="true"
//               />
//             </motion.div>

//             <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
//               Visit Our{" "}
//               <span style={{ color: BRAND.gold.primary }}>Office</span>
//             </h3>

//             <p className="text-lg text-gray-300 mb-2">
//               {companyData.contact.address.street}
//             </p>
//             <p className="text-base" style={{ color: "rgba(255,255,255,0.6)" }}>
//               {companyData.contact.address.city},{" "}
//               {companyData.contact.address.state}{" "}
//               {companyData.contact.address.zip}
//             </p>

//             <a
//               href={`https://maps.google.com/?q=${encodeURIComponent(
//                 `${companyData.contact.address.street}, ${companyData.contact.address.city}, ${companyData.contact.address.state}`,
//               )}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 mt-6 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2"
//               style={{
//                 background: "rgba(255,255,255,0.1)",
//                 color: "white",
//                 border: "1px solid rgba(255,255,255,0.2)",
//                 backdropFilter: "blur(10px)",
//                 "--tw-ring-color": BRAND.gold.primary,
//               }}
//             >
//               <FaMapMarkerAlt className="text-sm" aria-hidden="true" />
//               Open in Google Maps
//               <FaArrowRight className="text-xs" aria-hidden="true" />
//             </a>
//           </motion.div>
//         </Container>
//       </section>
//     </main>
//   );
// };

// export default memo(ContactPage);

import React, { useState, useCallback, useMemo, memo } from "react";
import Container from "../components/ui/Container";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaPaperPlane,
  FaHeadset,
  FaArrowRight,
  FaCheck,
  FaExclamationCircle,
  FaBuilding,
  FaGlobe,
  FaDirections,
} from "react-icons/fa";
import toast from "react-hot-toast";
import bannerImg from "../assets/banners/contact.png";
import emailjs from "@emailjs/browser";

// ==================== BRAND COLORS (Aligned with Guidewire/AppSec) ====================
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

// ==================== ANIMATION CONFIG ====================
const ANIMATION_CONFIG = {
  stagger: 0.12,
  duration: 0.6,
  spring: { type: "spring", stiffness: 300, damping: 25 },
};

// ==================== DATA ====================
const companyData = {
  contact: {
    address: {
      street: "123 Innovation Drive, Suite 500",
      city: "Redmond",
      state: "WA",
      zip: "98052",
      country: "United States",
    },
    email: "Contact@innovise-IT.com",
    phone: "+1 (425) 518-5442",
    hours: "Mon - Fri: 9.30am – 6.30pm",
  },
};

// ==================== CUSTOM HOOKS ====================
const useFormState = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = useCallback(
    (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    },
    [errors],
  );

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    let error = "";
    if (
      name === "email" &&
      value &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ) {
      error = "Please enter a valid email address";
    }
    if (
      (name === "firstName" || name === "lastName") &&
      value &&
      value.length < 2
    ) {
      error = "Must be at least 2 characters";
    }
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  }, []);

  const resetForm = useCallback(() => {
    setFormData(initialState);
    setErrors({});
    setTouched({});
  }, [initialState]);

  return { formData, errors, touched, handleChange, handleBlur, resetForm };
};

// ==================== MEMOIZED COMPONENTS ====================

// Hero Section
const HeroSection = memo(() => (
  <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
    <img
      src={bannerImg}
      alt="Innovise IT Contact"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div
      className="absolute inset-0"
      style={{
        background: `linear-gradient(90deg, ${BRAND.navy.dark}E6 0%, ${BRAND.navy.mid}B3 50%, ${BRAND.navy.mid}66 100%)`,
      }}
    />
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: "32px 32px",
      }}
    />

    <div className="relative z-10 h-full flex items-center">
      <div className="max-w-3xl px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{
                background: `${BRAND.gold.primary}15`,
                border: `1px solid ${BRAND.gold.primary}30`,
              }}
            >
              <FaHeadset
                className="text-lg"
                style={{ color: BRAND.gold.primary }}
              />
            </div>
            <span
              className="text-sm font-bold uppercase tracking-[0.2em]"
              style={{ color: BRAND.gold.primary }}
            >
              Let's Connect
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
            Get in{" "}
            <span
              style={{
                backgroundImage: BRAND.gold.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Touch
            </span>
            , We're Here to Help
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
            Ready to start your transformation journey? Our team of experts is
            here to help you find the perfect solution for your business needs.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
));

HeroSection.displayName = "HeroSection";

// Contact Info Card Component (Premium Glassmorphism)
const ContactInfoCard = memo(({ info, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{
      delay: index * ANIMATION_CONFIG.stagger,
      duration: ANIMATION_CONFIG.duration,
      ...ANIMATION_CONFIG.spring,
    }}
    whileHover={{ x: 5 }}
    className="group relative rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-500"
    style={{
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
    }}
  >
    <div className="p-5 flex items-start gap-4">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110"
        style={{
          background: "rgba(253,185,19,0.12)",
          border: "1px solid rgba(253,185,19,0.25)",
        }}
      >
        <info.icon className="text-lg" style={{ color: BRAND.gold.primary }} />
      </div>

      <div className="flex-grow min-w-0">
        <h4 className="font-bold text-base mb-1 text-white">{info.title}</h4>
        <div className="space-y-0.5">
          {info.details.map((detail, idx) => (
            <p key={idx} className="text-sm leading-relaxed text-white/60">
              {detail}
            </p>
          ))}
        </div>

        {info.action && (
          <a
            href={info.action.href}
            className="inline-flex items-center gap-2 mt-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 group/link hover:gap-3"
            style={{ color: BRAND.gold.primary }}
          >
            {info.action.label}
            <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover/link:translate-x-1" />
          </a>
        )}
      </div>
    </div>

    {/* Hover Glow */}
    <div
      className="absolute top-0 right-0 w-24 h-24 bg-[#FDB913]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      aria-hidden="true"
    />
  </motion.div>
));

ContactInfoCard.displayName = "ContactInfoCard";

// Input Field Component
const FormInput = memo(
  ({
    label,
    name,
    type = "text",
    value,
    onChange,
    onBlur,
    placeholder,
    required,
    error,
    icon: Icon,
    textarea = false,
  }) => {
    const baseClasses =
      "w-full px-4 py-3.5 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 text-sm";
    const stateClasses = error
      ? "border-red-400 focus:border-red-500 focus:ring-red-200 bg-red-50/30"
      : "border-gray-200 focus:border-[#FDB913] bg-gray-50/50 focus:bg-white focus:ring-[#FDB913]/20";

    const Component = textarea ? "textarea" : "input";

    return (
      <div className="space-y-1.5">
        <label
          htmlFor={name}
          className="block text-xs font-bold uppercase tracking-wider"
          style={{ color: BRAND.navy.dark }}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>

        <div className="relative">
          {Icon && (
            <Icon
              className="absolute left-4 top-1/2 -translate-y-1/2 text-sm transition-colors pointer-events-none"
              style={{ color: error ? "#EF4444" : "#94A3B8" }}
            />
          )}

          <Component
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            required={required}
            className={`${baseClasses} ${stateClasses} ${Icon ? "pl-11" : ""} ${
              textarea ? "resize-none" : ""
            }`}
            rows={textarea ? 5 : undefined}
          />
        </div>

        {error && (
          <p className="flex items-center gap-1.5 text-xs text-red-500 mt-1">
            <FaExclamationCircle className="flex-shrink-0" />
            {error}
          </p>
        )}
      </div>
    );
  },
);

FormInput.displayName = "FormInput";

// Main Contact Page Component
const ContactPage = () => {
  const initialFormData = useMemo(
    () => ({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
      agreedToTerms: false,
    }),
    [],
  );

  const { formData, errors, touched, handleChange, handleBlur, resetForm } =
    useFormState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = useMemo(
    () => [
      {
        icon: FaMapMarkerAlt,
        title: "Visit Our Office",
        details: [
          companyData.contact.address.street,
          `${companyData.contact.address.city}, ${companyData.contact.address.state} ${companyData.contact.address.zip}`,
        ],
        action: null,
      },
      {
        icon: FaEnvelope,
        title: "Email Us",
        details: [companyData.contact.email],
        action: {
          label: "Send Email",
          href: `mailto:${companyData.contact.email}`,
        },
      },
      {
        icon: FaPhone,
        title: "Call Us",
        details: [companyData.contact.phone],
        action: {
          label: "Call Now",
          href: `tel:${companyData.contact.phone.replace(/\s/g, "")}`,
        },
      },
      {
        icon: FaClock,
        title: "Business Hours",
        details: [companyData.contact.hours],
        action: null,
      },
    ],
    [],
  );

  const subjectOptions = useMemo(
    () => [
      { value: "", label: "Select a topic..." },
      { value: "sap", label: "SAP Consulting & Implementation" },
      { value: "guidewire", label: "Guidewire Services" },
      { value: "ai", label: "AI & Engineering Services" },
      { value: "cloud", label: "Cloud & Digital Transformation" },
      { value: "integration", label: "Enterprise Integration Services" },
      { value: "ams", label: "Application Management Services" },
      { value: "partnership", label: "Partnership Inquiry" },
      { value: "support", label: "Technical Support" },
      { value: "other", label: "Other" },
    ],
    [],
  );

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     const newErrors = {};
  //     if (!formData.firstName?.trim())
  //       newErrors.firstName = "First name is required";
  //     if (!formData.lastName?.trim())
  //       newErrors.lastName = "Last name is required";
  //     if (!formData.email?.trim()) newErrors.email = "Email is required";
  //     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
  //       newErrors.email = "Invalid email format";
  //     if (!formData.subject) newErrors.subject = "Please select a subject";
  //     if (!formData.message?.trim()) newErrors.message = "Message is required";
  //     if (!formData.agreedToTerms)
  //       newErrors.agreedToTerms = "You must agree to the privacy policy";

  //     if (Object.keys(newErrors).length > 0) {
  //       toast.error("Please fix the errors in the form");
  //       return;
  //     }

  //     setIsSubmitting(true);

  //     try {
  //   const templateParams = {
  //     first_name: formData.firstName,
  //     last_name: formData.lastName,
  //     email: formData.email,
  //     phone: formData.phone,
  //     company: formData.company,
  //     subject: formData.subject,
  //     message: formData.message,
  //   };

  //   await emailjs.send(
  //     import.meta.env.VITE_EMAILJS_SERVICE_ID,
  //     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  //     templateParams,
  //     import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  //   );

  //   toast.success(
  //     "Message sent successfully! We'll respond within 24 hours.",
  //     {
  //       duration: 5000,
  //       style: {
  //         background: BRAND.navy.dark,
  //         color: "#fff",
  //         border: `1px solid ${BRAND.gold.primary}`,
  //       },
  //       iconTheme: {
  //         primary: BRAND.gold.primary,
  //         secondary: BRAND.navy.dark,
  //       },
  //     }
  //   );

  //   resetForm();
  // } catch (error) {
  //   console.error("EmailJS Error:", error);

  //   toast.error(
  //     "Failed to send message. Please try again."
  //   );
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.firstName?.trim()) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.lastName?.trim()) {
      newErrors.lastName = "Last Name is required";
    }

    if (!formData.email?.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject) {
      newErrors.subject = "Please select a subject";
    }

    if (!formData.message?.trim()) {
      newErrors.message = "Message is required";
    }

    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = "Please accept the privacy policy";
    }

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fill all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success(
        "Message sent successfully! We'll respond within 24 hours.",
      );

      resetForm();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Construct map address query
  const mapQuery = encodeURIComponent(
    `${companyData.contact.address.street}, ${companyData.contact.address.city}, ${companyData.contact.address.state} ${companyData.contact.address.zip}`,
  );

  return (
    <main role="main">
      <HeroSection />

      {/* Main Contact Content */}
      <section
        className="py-6 lg:py-12 bg-white relative overflow-hidden"
        aria-label="Contact form"
      >
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl opacity-[0.03] -translate-y-1/3 translate-x-1/3"
          style={{ background: BRAND.navy.lighter }}
        />

        <Container>
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            {/* Left Column - Contact Information (Premium Navy Card) */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden p-8 lg:p-10 bg-primary-800"
              >
                {/* Grid Pattern Overlay */}
                {/* <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: "24px 24px",
                  }}
                /> */}

                <div className="relative z-10">
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    Contact{" "}
                    <span
                      style={{
                        backgroundImage: BRAND.gold.gradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Information
                    </span>
                  </h2>
                  <p className="text-sm text-white/60 mb-8">
                    Reach out through any channel, or fill out the form to get a
                    prompt response.
                  </p>

                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <ContactInfoCard key={index} info={info} index={index} />
                    ))}
                  </div>

                  {/* Support CTA */}
                  <div
                    className="mt-8 p-5 rounded-2xl"
                    style={{
                      background: "rgba(253,185,19,0.08)",
                      border: "1px solid rgba(253,185,19,0.2)",
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: BRAND.gold.gradient }}
                      >
                        <FaHeadset
                          className="text-xl"
                          style={{ color: BRAND.navy.dark }}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-base mb-1 text-white">
                          Emergency Support
                        </h4>
                        <p className="text-xs text-white/50 mb-3">
                          Existing clients requiring immediate technical
                          assistance.
                        </p>
                        <a
                          href={`tel:${companyData.contact.phone.replace(/\s/g, "")}`}
                          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
                          style={{ color: BRAND.gold.primary }}
                        >
                          Priority Line <FaArrowRight className="text-[9px]" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
              >
                <div className="p-8 lg:p-10">
                  <div className="mb-8">
                    <h3
                      className="text-2xl lg:text-3xl font-bold mb-2"
                      style={{ color: BRAND.navy.dark }}
                    >
                      Send us a{" "}
                      <span style={{ color: BRAND.gold.primary }}>Message</span>
                    </h3>
                    <p className="text-sm text-gray-500">
                      Fill out the form below and our team will get back to you
                      within 24 business hours.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    noValidate
                  >
                    <div className="grid md:grid-cols-2 gap-5">
                      <FormInput
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Your First Name"
                        required
                        error={touched.firstName ? errors.firstName : ""}
                      />
                      <FormInput
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Your Last Name"
                        required
                        error={touched.lastName ? errors.lastName : ""}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <FormInput
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Your Email Address"
                        required
                        icon={FaEnvelope}
                        error={touched.email ? errors.email : ""}
                      />
                      <FormInput
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Your Phone Number"
                        icon={FaPhone}
                      />
                    </div>

                    <FormInput
                      label="Company Name"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your Organization"
                      icon={FaBuilding}
                    />

                    {/* Subject Select */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="subject"
                        className="block text-xs font-bold uppercase tracking-wider"
                        style={{ color: BRAND.navy.dark }}
                      >
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-900 appearance-none cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:border-[#FDB913] focus:bg-white focus:ring-[#FDB913]/20"
                      >
                        {subjectOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {errors.subject && touched.subject && (
                        <p className="flex items-center gap-1.5 text-xs text-red-500 mt-1">
                          <FaExclamationCircle /> {errors.subject}
                        </p>
                      )}
                    </div>

                    <FormInput
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell us about your project or inquiry..."
                      required
                      textarea
                      error={touched.message ? errors.message : ""}
                    />

                    <div className="flex items-start gap-3 pt-2">
                      <input
                        type="checkbox"
                        id="privacy"
                        name="agreedToTerms"
                        checked={formData.agreedToTerms}
                        onChange={handleChange}
                        required
                        className="mt-0.5 w-5 h-5 rounded cursor-pointer transition-all"
                        style={{ accentColor: BRAND.gold.primary }}
                      />
                      <label
                        htmlFor="privacy"
                        className="text-xs cursor-pointer leading-relaxed text-gray-500"
                      >
                        I agree to the{" "}
                        <a
                          href="#"
                          className="font-bold underline"
                          style={{ color: BRAND.gold.primary }}
                        >
                          Privacy Policy
                        </a>{" "}
                        and consent to processing my data for contact purposes.
                      </label>
                    </div>
                    {errors.agreedToTerms && (
                      <p className="flex items-center gap-1.5 text-xs text-red-500 -mt-2">
                        <FaExclamationCircle /> {errors.agreedToTerms}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full py-4 rounded-xl font-bold text-base overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:transform-none focus:outline-none focus:ring-2 focus:ring-offset-2 mt-4"
                      style={{
                        background: BRAND.gold.gradient,
                        color: BRAND.navy.dark,
                        boxShadow: `0 8px 30px ${BRAND.gold.primary}35`,
                      }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane />
                            Send Message
                            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                      {!isSubmitting && (
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
                          <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                        </div>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Real Map Section */}
      <section
        className="relative h-[500px] lg:h-[600px] overflow-hidden"
        aria-label="Office location map"
      >
        {/* Real Embedded Google Map */}
        <iframe
          title="Innovise IT Office Location"
          src={`https://www.google.com/maps?q=${mapQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
          className="absolute inset-0 w-full h-full border-0 grayscale contrast-125"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Dark Overlay to match brand theme and ensure text readability */}
        {/* <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(90deg, ${BRAND.navy.dark}E6 0%, ${BRAND.navy.dark}B3 40%, transparent 100%)`,
          }}
        /> */}

        {/* Floating Contact Card over Map */}
        <Container className="relative z-10 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-md"
          >
            <div className="rounded-3xl p-8 lg:p-10 backdrop-blur-xl bg-primary-800">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: BRAND.gold.gradient,
                  boxShadow: `0 10px 30px ${BRAND.gold.primary}30`,
                }}
              >
                <FaMapMarkerAlt
                  className="text-2xl"
                  style={{ color: BRAND.navy.dark }}
                />
              </motion.div>

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Visit Our{" "}
                <span style={{ color: BRAND.gold.primary }}>Headquarters</span>
              </h3>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <FaBuilding className="text-[#FDB913] mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {companyData.contact.address.street}
                    <br />
                    {companyData.contact.address.city},{" "}
                    {companyData.contact.address.state}{" "}
                    {companyData.contact.address.zip}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="text-[#FDB913] flex-shrink-0" />
                  <p className="text-sm text-gray-300">
                    {companyData.contact.hours}
                  </p>
                </div>
              </div>

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group/dir inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: BRAND.gold.gradient,
                  color: BRAND.navy.dark,
                  boxShadow: `0 8px 25px ${BRAND.gold.primary}30`,
                }}
              >
                <FaDirections />
                Get Directions
                <FaArrowRight className="text-xs group-hover/dir:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
};

export default memo(ContactPage);
