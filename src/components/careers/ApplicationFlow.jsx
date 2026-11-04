// // // // // import React, { useState, memo } from "react";
// // // // // import {
// // // // //   FaTimes,
// // // // //   FaCheckCircle,
// // // // //   FaCloudUploadAlt,
// // // // //   FaFileAlt,
// // // // //   FaUser,
// // // // //   FaEnvelope,
// // // // //   FaPhone,
// // // // //   FaLinkedin,
// // // // //   FaGithub,
// // // // //   FaGlobe,
// // // // //   FaSpinner,
// // // // //   FaExclamationTriangle,
// // // // //   FaBriefcase,
// // // // // } from "react-icons/fa";
// // // // // import { Button } from "../common/Button";
// // // // // import { submitApplication } from "../../api/careersApi";

// // // // // const ApplicationFlow = memo(({ selectedJob, onClose }) => {
// // // // //   const [formData, setFormData] = useState({
// // // // //     fullName: "",
// // // // //     email: "",
// // // // //     phone: "",
// // // // //     experience: "",
// // // // //     resume: null,
// // // // //     linkedin: "",
// // // // //     github: "",
// // // // //     website: "",
// // // // //     workAuth: false,
// // // // //     coverLetter: "",
// // // // //   });
// // // // //   const [errors, setErrors] = useState({});
// // // // //   const [isDragging, setIsDragging] = useState(false);
// // // // //   const [submitted, setSubmitted] = useState(false);
// // // // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // // // //   const [submitError, setSubmitError] = useState(null);

// // // // //   if (!selectedJob) return null;

// // // // //   const validateForm = () => {
// // // // //     let tempErrors = {};
// // // // //     if (!formData.fullName.trim())
// // // // //       tempErrors.fullName = "Full name is required";
// // // // //     if (!formData.email.trim()) tempErrors.email = "Email is required";
// // // // //     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
// // // // //       tempErrors.email = "Invalid email format";
// // // // //     if (!formData.resume) tempErrors.resume = "Please upload your resume";
// // // // //     if (!formData.workAuth)
// // // // //       tempErrors.workAuth = "You must confirm work authorization";

// // // // //     setErrors(tempErrors);
// // // // //     return Object.keys(tempErrors).length === 0;
// // // // //   };

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     if (!validateForm()) return;

// // // // //     setIsSubmitting(true);
// // // // //     setSubmitError(null);
// // // // //     try {
// // // // //       const nameParts = formData.fullName.trim().split(/\s+/);
// // // // //       const firstName = nameParts[0] || formData.fullName.trim();
// // // // //       const lastName = nameParts.slice(1).join(" ") || "-";
// // // // //       const notes = [
// // // // //         formData.coverLetter,
// // // // //         formData.github ? `GitHub: ${formData.github}` : null,
// // // // //       ]
// // // // //         .filter(Boolean)
// // // // //         .join("\n\n");

// // // // //       const payload = new FormData();
// // // // //       payload.append("resume", formData.resume);
// // // // //       payload.append("job_id", selectedJob.id);
// // // // //       payload.append("first_name", firstName);
// // // // //       payload.append("last_name", lastName);
// // // // //       payload.append("email", formData.email);
// // // // //       payload.append("phone", formData.phone);
// // // // //       payload.append("linkedin", formData.linkedin);
// // // // //       payload.append("portfolio", formData.website);
// // // // //       payload.append("experience", formData.experience);
// // // // //       payload.append("cover_letter", notes);

// // // // //       await submitApplication(payload);
// // // // //       setSubmitted(true);
// // // // //     } catch (err) {
// // // // //       setSubmitError(
// // // // //         err.message ||
// // // // //           "Something went wrong submitting your application. Please try again.",
// // // // //       );
// // // // //     } finally {
// // // // //       setIsSubmitting(false);
// // // // //     }
// // // // //   };

// // // // //   const handleFileChange = (file) => {
// // // // //     if (!file) return;
// // // // //     if (file.size < 5 * 1024 * 1024) {
// // // // //       setFormData((prev) => ({ ...prev, resume: file }));
// // // // //       setErrors((prev) => ({ ...prev, resume: null }));
// // // // //     } else {
// // // // //       setErrors((prev) => ({
// // // // //         ...prev,
// // // // //         resume: "Invalid file. Must be under 5MB.",
// // // // //       }));
// // // // //     }
// // // // //   };

// // // // //   const handleDrop = (e) => {
// // // // //     e.preventDefault();
// // // // //     setIsDragging(false);
// // // // //     handleFileChange(e.dataTransfer.files[0]);
// // // // //   };

// // // // //   return (
// // // // //     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/60 backdrop-blur-sm">
// // // // //       <div className="bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
// // // // //         {/* Modal Header */}
// // // // //         <div className="flex justify-between items-center p-6 border-b border-[#E5E7EB]">
// // // // //           <div>
// // // // //             <p className="text-sm text-[#6B7280]">Applying for</p>
// // // // //             <h3 className="text-xl font-bold text-[#0F172A]">
// // // // //               {selectedJob.title}
// // // // //             </h3>
// // // // //           </div>
// // // // //           <button
// // // // //             onClick={onClose}
// // // // //             className="p-2 text-[#6B7280] hover:bg-[#F9FAFB] rounded-lg transition-colors"
// // // // //           >
// // // // //             <FaTimes size={20} />
// // // // //           </button>
// // // // //         </div>

// // // // //         {/* Success State */}
// // // // //         {submitted ? (
// // // // //           <div className="p-12 text-center flex-1 flex flex-col items-center justify-center">
// // // // //             <div className="w-16 h-16 bg-[#10B981]/10 rounded-full flex items-center justify-center mb-6">
// // // // //               <FaCheckCircle size={32} className="text-[#10B981]" />
// // // // //             </div>
// // // // //             <h2 className="text-2xl font-bold text-[#0F172A] mb-3">
// // // // //               Application Submitted!
// // // // //             </h2>
// // // // //             <p className="text-[#6B7280] max-w-md mb-8">
// // // // //               Thank you for applying. Our talent acquisition team will review
// // // // //               your application and get back to you within 5-7 business days.
// // // // //             </p>
// // // // //             <Button onClick={onClose}>Close</Button>
// // // // //           </div>
// // // // //         ) : (
// // // // //           /* Single Page Form */
// // // // //           <form
// // // // //             onSubmit={handleSubmit}
// // // // //             className="flex-1 flex flex-col overflow-hidden"
// // // // //           >
// // // // //             <div className="flex-1 overflow-y-auto p-6 bg-[#F9FAFB] space-y-6">
// // // // //               {/* Section 1: Personal Information */}
// // // // //               <div className="space-y-5 bg-white p-6 rounded-xl border border-[#E5E7EB]">
// // // // //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// // // // //                   Personal Information
// // // // //                 </h4>
// // // // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// // // // //                   <div>
// // // // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // // // //                       Full Name *
// // // // //                     </label>
// // // // //                     <div className="relative">
// // // // //                       <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// // // // //                       <input
// // // // //                         type="text"
// // // // //                         value={formData.fullName}
// // // // //                         onChange={(e) =>
// // // // //                           setFormData({ ...formData, fullName: e.target.value })
// // // // //                         }
// // // // //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// // // // //                       />
// // // // //                     </div>
// // // // //                     {errors.fullName && (
// // // // //                       <p className="text-[#EF4444] text-xs mt-1.5">
// // // // //                         {errors.fullName}
// // // // //                       </p>
// // // // //                     )}
// // // // //                   </div>
// // // // //                   <div>
// // // // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // // // //                       Email Address *
// // // // //                     </label>
// // // // //                     <div className="relative">
// // // // //                       <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// // // // //                       <input
// // // // //                         type="email"
// // // // //                         value={formData.email}
// // // // //                         onChange={(e) =>
// // // // //                           setFormData({ ...formData, email: e.target.value })
// // // // //                         }
// // // // //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// // // // //                       />
// // // // //                     </div>
// // // // //                     {errors.email && (
// // // // //                       <p className="text-[#EF4444] text-xs mt-1.5">
// // // // //                         {errors.email}
// // // // //                       </p>
// // // // //                     )}
// // // // //                   </div>
// // // // //                   <div>
// // // // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // // // //                       Phone Number
// // // // //                     </label>
// // // // //                     <div className="relative">
// // // // //                       <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// // // // //                       <input
// // // // //                         type="tel"
// // // // //                         value={formData.phone}
// // // // //                         onChange={(e) =>
// // // // //                           setFormData({ ...formData, phone: e.target.value })
// // // // //                         }
// // // // //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// // // // //                       />
// // // // //                     </div>
// // // // //                   </div>
// // // // //                   <div>
// // // // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // // // //                       Years of Experience
// // // // //                     </label>
// // // // //                     <div className="relative">
// // // // //                       <FaBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// // // // //                       <input
// // // // //                         type="text"
// // // // //                         placeholder="e.g. 2 years"
// // // // //                         value={formData.experience}
// // // // //                         onChange={(e) =>
// // // // //                           setFormData({
// // // // //                             ...formData,
// // // // //                             experience: e.target.value,
// // // // //                           })
// // // // //                         }
// // // // //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// // // // //                       />
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Section 2: Resume Upload */}
// // // // //               <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
// // // // //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// // // // //                   Resume
// // // // //                 </h4>
// // // // //                 <label className="block text-sm font-semibold text-[#111827] mb-2">
// // // // //                   Upload Resume *
// // // // //                 </label>
// // // // //                 <div
// // // // //                   onDragOver={(e) => {
// // // // //                     e.preventDefault();
// // // // //                     setIsDragging(true);
// // // // //                   }}
// // // // //                   onDragLeave={() => setIsDragging(false)}
// // // // //                   onDrop={handleDrop}
// // // // //                   className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${isDragging ? "border-[#12324f] bg-[#12324f]/5" : "border-[#E5E7EB] hover:border-[#12324f]"}`}
// // // // //                   onClick={() => document.getElementById("fileInput").click()}
// // // // //                 >
// // // // //                   {formData.resume ? (
// // // // //                     <div className="flex items-center justify-center gap-4 text-left">
// // // // //                       <div className="w-12 h-12 bg-[#12324f]/10 rounded-xl flex items-center justify-center">
// // // // //                         <FaFileAlt size={20} className="text-[#12324f]" />
// // // // //                       </div>
// // // // //                       <div>
// // // // //                         <p className="font-semibold text-[#111827]">
// // // // //                           {formData.resume.name}
// // // // //                         </p>
// // // // //                         <p className="text-xs text-[#6B7280]">
// // // // //                           {(formData.resume.size / 1024).toFixed(1)} KB • Ready
// // // // //                           to submit
// // // // //                         </p>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   ) : (
// // // // //                     <>
// // // // //                       <FaCloudUploadAlt
// // // // //                         size={32}
// // // // //                         className="mx-auto text-[#9CA3AF] mb-3"
// // // // //                       />
// // // // //                       <p className="font-semibold text-[#111827] mb-1">
// // // // //                         Drag & drop your resume here
// // // // //                       </p>
// // // // //                       <p className="text-sm text-[#6B7280]">
// // // // //                         or click to browse files
// // // // //                       </p>
// // // // //                       <p className="text-xs text-[#9CA3AF] mt-3">
// // // // //                         PDF, DOC, DOCX (Max 5MB)
// // // // //                       </p>
// // // // //                     </>
// // // // //                   )}
// // // // //                   <input
// // // // //                     type="file"
// // // // //                     id="fileInput"
// // // // //                     className="hidden"
// // // // //                     onChange={(e) => handleFileChange(e.target.files[0])}
// // // // //                     accept=".pdf,.doc,.docx"
// // // // //                   />
// // // // //                 </div>
// // // // //                 {errors.resume && (
// // // // //                   <p className="text-[#EF4444] text-xs mt-2">{errors.resume}</p>
// // // // //                 )}
// // // // //               </div>

// // // // //               {/* Section 3: Portfolio Links */}
// // // // //               <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
// // // // //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// // // // //                   Portfolio & Links
// // // // //                 </h4>
// // // // //                 <div className="space-y-5">
// // // // //                   <div>
// // // // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // // // //                       LinkedIn Profile
// // // // //                     </label>
// // // // //                     <div className="relative">
// // // // //                       <FaLinkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// // // // //                       <input
// // // // //                         type="url"
// // // // //                         placeholder="https://linkedin.com/in/username"
// // // // //                         value={formData.linkedin}
// // // // //                         onChange={(e) =>
// // // // //                           setFormData({ ...formData, linkedin: e.target.value })
// // // // //                         }
// // // // //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// // // // //                       />
// // // // //                     </div>
// // // // //                   </div>
// // // // //                   <div>
// // // // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // // // //                       GitHub Profile
// // // // //                     </label>
// // // // //                     <div className="relative">
// // // // //                       <FaGithub className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// // // // //                       <input
// // // // //                         type="url"
// // // // //                         placeholder="https://github.com/username"
// // // // //                         value={formData.github}
// // // // //                         onChange={(e) =>
// // // // //                           setFormData({ ...formData, github: e.target.value })
// // // // //                         }
// // // // //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// // // // //                       />
// // // // //                     </div>
// // // // //                   </div>
// // // // //                   <div>
// // // // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // // // //                       Personal Website / Portfolio
// // // // //                     </label>
// // // // //                     <div className="relative">
// // // // //                       <FaGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// // // // //                       <input
// // // // //                         type="url"
// // // // //                         placeholder="https://yourportfolio.com"
// // // // //                         value={formData.website}
// // // // //                         onChange={(e) =>
// // // // //                           setFormData({ ...formData, website: e.target.value })
// // // // //                         }
// // // // //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// // // // //                       />
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Section 4: Questions */}
// // // // //               <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
// // // // //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// // // // //                   Additional Information
// // // // //                 </h4>
// // // // //                 <div className="space-y-5">
// // // // //                   <div className="flex items-start gap-3">
// // // // //                     <input
// // // // //                       type="checkbox"
// // // // //                       id="workAuth"
// // // // //                       checked={formData.workAuth}
// // // // //                       onChange={(e) =>
// // // // //                         setFormData({ ...formData, workAuth: e.target.checked })
// // // // //                       }
// // // // //                       className="mt-1 w-5 h-5 rounded border-[#E5E7EB] text-[#12324f] focus:ring-[#12324f] cursor-pointer"
// // // // //                     />
// // // // //                     <label
// // // // //                       htmlFor="workAuth"
// // // // //                       className="text-sm text-[#111827]"
// // // // //                     >
// // // // //                       Are you legally authorized to work in the country of this
// // // // //                       role? *
// // // // //                     </label>
// // // // //                   </div>
// // // // //                   {errors.workAuth && (
// // // // //                     <p className="text-[#EF4444] text-xs">{errors.workAuth}</p>
// // // // //                   )}

// // // // //                   <div>
// // // // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // // // //                       Why are you interested in this role?
// // // // //                     </label>
// // // // //                     <textarea
// // // // //                       rows={5}
// // // // //                       placeholder="Tell us why you'd be a great fit..."
// // // // //                       value={formData.coverLetter}
// // // // //                       onChange={(e) =>
// // // // //                         setFormData({
// // // // //                           ...formData,
// // // // //                           coverLetter: e.target.value,
// // // // //                         })
// // // // //                       }
// // // // //                       className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all resize-none"
// // // // //                     ></textarea>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Server Error Display */}
// // // // //               {submitError && (
// // // // //                 <div className="flex items-start gap-2 bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] text-sm rounded-lg p-3">
// // // // //                   <FaExclamationTriangle className="mt-0.5 flex-shrink-0" />
// // // // //                   <span>{submitError}</span>
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>

// // // // //             {/* Form Actions Footer */}
// // // // //             <div className="flex justify-end items-center p-6 bg-white border-t border-[#E5E7EB] gap-4">
// // // // //               <Button
// // // // //                 type="button"
// // // // //                 variant="ghost"
// // // // //                 onClick={onClose}
// // // // //                 disabled={isSubmitting}
// // // // //               >
// // // // //                 Cancel
// // // // //               </Button>
// // // // //               <Button type="submit" disabled={isSubmitting}>
// // // // //                 {isSubmitting ? (
// // // // //                   <>
// // // // //                     <FaSpinner className="animate-spin" /> Submitting...
// // // // //                   </>
// // // // //                 ) : (
// // // // //                   <>
// // // // //                     Submit Application <FaCheckCircle className="ml-1" />
// // // // //                   </>
// // // // //                 )}
// // // // //               </Button>
// // // // //             </div>
// // // // //           </form>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // });

// // // // // export default ApplicationFlow;

// // // // import React, { useState, memo } from "react";
// // // // import {
// // // //   FaTimes,
// // // //   FaCheckCircle,
// // // //   FaCloudUploadAlt,
// // // //   FaFileAlt,
// // // //   FaUser,
// // // //   FaEnvelope,
// // // //   FaPhone,
// // // //   FaLinkedin,
// // // //   FaGithub,
// // // //   FaGlobe,
// // // //   FaSpinner,
// // // //   FaExclamationTriangle,
// // // //   FaBriefcase,
// // // // } from "react-icons/fa";
// // // // import { Button } from "../common/Button";
// // // // import { submitApplication } from "../../api/careersApi";

// // // // const ApplicationFlow = memo(({ selectedJob, onClose }) => {
// // // //   const [formData, setFormData] = useState({
// // // //     fullName: "",
// // // //     email: "",
// // // //     phone: "",
// // // //     experience: "",
// // // //     resume: null,
// // // //     linkedin: "",
// // // //     github: "",
// // // //     website: "",
// // // //     // Replaced single checkbox with specific US-style authorization questions
// // // //     authorizedToWork: "", // "Yes" or "No"
// // // //     requiresSponsorship: "", // "Yes" or "No"
// // // //     coverLetter: "",
// // // //   });
// // // //   const [errors, setErrors] = useState({});
// // // //   const [isDragging, setIsDragging] = useState(false);
// // // //   const [submitted, setSubmitted] = useState(false);
// // // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // // //   const [submitError, setSubmitError] = useState(null);

// // // //   if (!selectedJob) return null;

// // // //   const validateForm = () => {
// // // //     let tempErrors = {};
// // // //     if (!formData.fullName.trim())
// // // //       tempErrors.fullName = "Full name is required";
// // // //     if (!formData.email.trim()) tempErrors.email = "Email is required";
// // // //     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
// // // //       tempErrors.email = "Invalid email format";
// // // //     if (!formData.resume) tempErrors.resume = "Please upload your resume";

// // // //     // Validating the new radio inputs
// // // //     if (!formData.authorizedToWork)
// // // //       tempErrors.authorizedToWork = "Please select an option.";
// // // //     if (!formData.requiresSponsorship)
// // // //       tempErrors.requiresSponsorship = "Please select an option.";

// // // //     setErrors(tempErrors);
// // // //     return Object.keys(tempErrors).length === 0;
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     if (!validateForm()) return;

// // // //     setIsSubmitting(true);
// // // //     setSubmitError(null);
// // // //     try {
// // // //       const nameParts = formData.fullName.trim().split(/\s+/);
// // // //       const firstName = nameParts[0] || formData.fullName.trim();
// // // //       const lastName = nameParts.slice(1).join(" ") || "-";

// // // //       // Appending Visa/Sponsorship answers to the notes/cover letter
// // // //       // so the backend has full context.
// // // //       const notes = [
// // // //         formData.coverLetter,
// // // //         `Authorized to work in US: ${formData.authorizedToWork}`,
// // // //         `Requires visa sponsorship: ${formData.requiresSponsorship}`,
// // // //         formData.github ? `GitHub: ${formData.github}` : null,
// // // //       ]
// // // //         .filter(Boolean)
// // // //         .join("\n\n");

// // // //       const payload = new FormData();
// // // //       payload.append("resume", formData.resume);
// // // //       payload.append("job_id", selectedJob.id);
// // // //       payload.append("first_name", firstName);
// // // //       payload.append("last_name", lastName);
// // // //       payload.append("email", formData.email);
// // // //       payload.append("phone", formData.phone);
// // // //       payload.append("linkedin", formData.linkedin);
// // // //       payload.append("portfolio", formData.website);
// // // //       payload.append("experience", formData.experience);
// // // //       payload.append("cover_letter", notes);

// // // //       await submitApplication(payload);
// // // //       setSubmitted(true);
// // // //     } catch (err) {
// // // //       setSubmitError(
// // // //         err.message ||
// // // //           "Something went wrong submitting your application. Please try again.",
// // // //       );
// // // //     } finally {
// // // //       setIsSubmitting(false);
// // // //     }
// // // //   };

// // // //   const handleFileChange = (file) => {
// // // //     if (!file) return;
// // // //     if (file.size < 5 * 1024 * 1024) {
// // // //       setFormData((prev) => ({ ...prev, resume: file }));
// // // //       setErrors((prev) => ({ ...prev, resume: null }));
// // // //     } else {
// // // //       setErrors((prev) => ({
// // // //         ...prev,
// // // //         resume: "Invalid file. Must be under 5MB.",
// // // //       }));
// // // //     }
// // // //   };

// // // //   const handleDrop = (e) => {
// // // //     e.preventDefault();
// // // //     setIsDragging(false);
// // // //     handleFileChange(e.dataTransfer.files[0]);
// // // //   };

// // // //   return (
// // // //     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/60 backdrop-blur-sm">
// // // //       <div className="bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
// // // //         {/* Modal Header */}
// // // //         <div className="flex justify-between items-center p-6 border-b border-[#E5E7EB]">
// // // //           <div>
// // // //             <p className="text-sm text-[#6B7280]">Applying for</p>
// // // //             <h3 className="text-xl font-bold text-[#0F172A]">
// // // //               {selectedJob.title}
// // // //             </h3>
// // // //           </div>
// // // //           <button
// // // //             onClick={onClose}
// // // //             className="p-2 text-[#6B7280] hover:bg-[#F9FAFB] rounded-lg transition-colors"
// // // //           >
// // // //             <FaTimes size={20} />
// // // //           </button>
// // // //         </div>

// // // //         {/* Success State */}
// // // //         {submitted ? (
// // // //           <div className="p-12 text-center flex-1 flex flex-col items-center justify-center">
// // // //             <div className="w-16 h-16 bg-[#10B981]/10 rounded-full flex items-center justify-center mb-6">
// // // //               <FaCheckCircle size={32} className="text-[#10B981]" />
// // // //             </div>
// // // //             <h2 className="text-2xl font-bold text-[#0F172A] mb-3">
// // // //               Application Submitted!
// // // //             </h2>
// // // //             <p className="text-[#6B7280] max-w-md mb-8">
// // // //               Thank you for applying. Our talent acquisition team will review
// // // //               your application and get back to you within 5-7 business days.
// // // //             </p>
// // // //             <Button onClick={onClose}>Close</Button>
// // // //           </div>
// // // //         ) : (
// // // //           /* Single Page Form */
// // // //           <form
// // // //             onSubmit={handleSubmit}
// // // //             className="flex-1 flex flex-col overflow-hidden"
// // // //           >
// // // //             <div className="flex-1 overflow-y-auto p-6 bg-[#F9FAFB] space-y-6">
// // // //               {/* Section 1: Personal Information */}
// // // //               <div className="space-y-5 bg-white p-6 rounded-xl border border-[#E5E7EB]">
// // // //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// // // //                   Personal Information
// // // //                 </h4>
// // // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// // // //                   <div>
// // // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // // //                       Full Name *
// // // //                     </label>
// // // //                     <div className="relative">
// // // //                       <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// // // //                       <input
// // // //                         type="text"
// // // //                         value={formData.fullName}
// // // //                         onChange={(e) =>
// // // //                           setFormData({ ...formData, fullName: e.target.value })
// // // //                         }
// // // //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// // // //                       />
// // // //                     </div>
// // // //                     {errors.fullName && (
// // // //                       <p className="text-[#EF4444] text-xs mt-1.5">
// // // //                         {errors.fullName}
// // // //                       </p>
// // // //                     )}
// // // //                   </div>
// // // //                   <div>
// // // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // // //                       Email Address *
// // // //                     </label>
// // // //                     <div className="relative">
// // // //                       <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// // // //                       <input
// // // //                         type="email"
// // // //                         value={formData.email}
// // // //                         onChange={(e) =>
// // // //                           setFormData({ ...formData, email: e.target.value })
// // // //                         }
// // // //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// // // //                       />
// // // //                     </div>
// // // //                     {errors.email && (
// // // //                       <p className="text-[#EF4444] text-xs mt-1.5">
// // // //                         {errors.email}
// // // //                       </p>
// // // //                     )}
// // // //                   </div>
// // // //                   <div>
// // // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // // //                       Phone Number
// // // //                     </label>
// // // //                     <div className="relative">
// // // //                       <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// // // //                       <input
// // // //                         type="tel"
// // // //                         value={formData.phone}
// // // //                         onChange={(e) =>
// // // //                           setFormData({ ...formData, phone: e.target.value })
// // // //                         }
// // // //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// // // //                       />
// // // //                     </div>
// // // //                   </div>
// // // //                   <div>
// // // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // // //                       Years of Experience
// // // //                     </label>
// // // //                     <div className="relative">
// // // //                       <FaBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// // // //                       <input
// // // //                         type="text"
// // // //                         placeholder="e.g. 2 years"
// // // //                         value={formData.experience}
// // // //                         onChange={(e) =>
// // // //                           setFormData({
// // // //                             ...formData,
// // // //                             experience: e.target.value,
// // // //                           })
// // // //                         }
// // // //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// // // //                       />
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Section 2: Resume Upload */}
// // // //               <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
// // // //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// // // //                   Resume
// // // //                 </h4>
// // // //                 <label className="block text-sm font-semibold text-[#111827] mb-2">
// // // //                   Upload Resume *
// // // //                 </label>
// // // //                 <div
// // // //                   onDragOver={(e) => {
// // // //                     e.preventDefault();
// // // //                     setIsDragging(true);
// // // //                   }}
// // // //                   onDragLeave={() => setIsDragging(false)}
// // // //                   onDrop={handleDrop}
// // // //                   className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${isDragging ? "border-[#12324f] bg-[#12324f]/5" : "border-[#E5E7EB] hover:border-[#12324f]"}`}
// // // //                   onClick={() => document.getElementById("fileInput").click()}
// // // //                 >
// // // //                   {formData.resume ? (
// // // //                     <div className="flex items-center justify-center gap-4 text-left">
// // // //                       <div className="w-12 h-12 bg-[#12324f]/10 rounded-xl flex items-center justify-center">
// // // //                         <FaFileAlt size={20} className="text-[#12324f]" />
// // // //                       </div>
// // // //                       <div>
// // // //                         <p className="font-semibold text-[#111827]">
// // // //                           {formData.resume.name}
// // // //                         </p>
// // // //                         <p className="text-xs text-[#6B7280]">
// // // //                           {(formData.resume.size / 1024).toFixed(1)} KB • Ready
// // // //                           to submit
// // // //                         </p>
// // // //                       </div>
// // // //                     </div>
// // // //                   ) : (
// // // //                     <>
// // // //                       <FaCloudUploadAlt
// // // //                         size={32}
// // // //                         className="mx-auto text-[#9CA3AF] mb-3"
// // // //                       />
// // // //                       <p className="font-semibold text-[#111827] mb-1">
// // // //                         Drag & drop your resume here
// // // //                       </p>
// // // //                       <p className="text-sm text-[#6B7280]">
// // // //                         or click to browse files
// // // //                       </p>
// // // //                       <p className="text-xs text-[#9CA3AF] mt-3">
// // // //                         PDF, DOC, DOCX (Max 5MB)
// // // //                       </p>
// // // //                     </>
// // // //                   )}
// // // //                   <input
// // // //                     type="file"
// // // //                     id="fileInput"
// // // //                     className="hidden"
// // // //                     onChange={(e) => handleFileChange(e.target.files[0])}
// // // //                     accept=".pdf,.doc,.docx"
// // // //                   />
// // // //                 </div>
// // // //                 {errors.resume && (
// // // //                   <p className="text-[#EF4444] text-xs mt-2">{errors.resume}</p>
// // // //                 )}
// // // //               </div>

// // // //               {/* Section 3: Portfolio Links */}
// // // //               <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
// // // //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// // // //                   Portfolio & Links
// // // //                 </h4>
// // // //                 <div className="space-y-5">
// // // //                   <div>
// // // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // // //                       LinkedIn Profile
// // // //                     </label>
// // // //                     <div className="relative">
// // // //                       <FaLinkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// // // //                       <input
// // // //                         type="url"
// // // //                         placeholder="https://linkedin.com/in/username"
// // // //                         value={formData.linkedin}
// // // //                         onChange={(e) =>
// // // //                           setFormData({ ...formData, linkedin: e.target.value })
// // // //                         }
// // // //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// // // //                       />
// // // //                     </div>
// // // //                   </div>
// // // //                   <div>
// // // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // // //                       GitHub Profile
// // // //                     </label>
// // // //                     <div className="relative">
// // // //                       <FaGithub className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// // // //                       <input
// // // //                         type="url"
// // // //                         placeholder="https://github.com/username"
// // // //                         value={formData.github}
// // // //                         onChange={(e) =>
// // // //                           setFormData({ ...formData, github: e.target.value })
// // // //                         }
// // // //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// // // //                       />
// // // //                     </div>
// // // //                   </div>
// // // //                   <div>
// // // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // // //                       Personal Website / Portfolio
// // // //                     </label>
// // // //                     <div className="relative">
// // // //                       <FaGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// // // //                       <input
// // // //                         type="url"
// // // //                         placeholder="https://yourportfolio.com"
// // // //                         value={formData.website}
// // // //                         onChange={(e) =>
// // // //                           setFormData({ ...formData, website: e.target.value })
// // // //                         }
// // // //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// // // //                       />
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Section 4: Visa & Work Authorization (US Standard) */}
// // // //               <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
// // // //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// // // //                   Work Authorization & Visa Status
// // // //                 </h4>
// // // //                 <div className="space-y-6">
// // // //                   {/* Question 1 */}
// // // //                   <div>
// // // //                     <label className="block text-sm font-semibold text-[#111827] mb-3">
// // // //                       Are you legally authorized to work in the United States? *
// // // //                     </label>
// // // //                     <div className="flex gap-6">
// // // //                       <label className="flex items-center gap-2 cursor-pointer">
// // // //                         <input
// // // //                           type="radio"
// // // //                           name="authorizedToWork"
// // // //                           value="Yes"
// // // //                           checked={formData.authorizedToWork === "Yes"}
// // // //                           onChange={(e) =>
// // // //                             setFormData({
// // // //                               ...formData,
// // // //                               authorizedToWork: e.target.value,
// // // //                             })
// // // //                           }
// // // //                           className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// // // //                         />
// // // //                         <span className="text-sm text-[#111827]">Yes</span>
// // // //                       </label>
// // // //                       <label className="flex items-center gap-2 cursor-pointer">
// // // //                         <input
// // // //                           type="radio"
// // // //                           name="authorizedToWork"
// // // //                           value="No"
// // // //                           checked={formData.authorizedToWork === "No"}
// // // //                           onChange={(e) =>
// // // //                             setFormData({
// // // //                               ...formData,
// // // //                               authorizedToWork: e.target.value,
// // // //                             })
// // // //                           }
// // // //                           className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// // // //                         />
// // // //                         <span className="text-sm text-[#111827]">No</span>
// // // //                       </label>
// // // //                     </div>
// // // //                     {errors.authorizedToWork && (
// // // //                       <p className="text-[#EF4444] text-xs mt-2">
// // // //                         {errors.authorizedToWork}
// // // //                       </p>
// // // //                     )}
// // // //                   </div>

// // // //                   {/* Question 2 */}
// // // //                   <div>
// // // //                     <label className="block text-sm font-semibold text-[#111827] mb-3">
// // // //                       Will you now, or in the future, require sponsorship for
// // // //                       employment visa status (e.g., H-1B)? *
// // // //                     </label>
// // // //                     <div className="flex gap-6">
// // // //                       <label className="flex items-center gap-2 cursor-pointer">
// // // //                         <input
// // // //                           type="radio"
// // // //                           name="requiresSponsorship"
// // // //                           value="Yes"
// // // //                           checked={formData.requiresSponsorship === "Yes"}
// // // //                           onChange={(e) =>
// // // //                             setFormData({
// // // //                               ...formData,
// // // //                               requiresSponsorship: e.target.value,
// // // //                             })
// // // //                           }
// // // //                           className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// // // //                         />
// // // //                         <span className="text-sm text-[#111827]">Yes</span>
// // // //                       </label>
// // // //                       <label className="flex items-center gap-2 cursor-pointer">
// // // //                         <input
// // // //                           type="radio"
// // // //                           name="requiresSponsorship"
// // // //                           value="No"
// // // //                           checked={formData.requiresSponsorship === "No"}
// // // //                           onChange={(e) =>
// // // //                             setFormData({
// // // //                               ...formData,
// // // //                               requiresSponsorship: e.target.value,
// // // //                             })
// // // //                           }
// // // //                           className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// // // //                         />
// // // //                         <span className="text-sm text-[#111827]">No</span>
// // // //                       </label>
// // // //                     </div>
// // // //                     {errors.requiresSponsorship && (
// // // //                       <p className="text-[#EF4444] text-xs mt-2">
// // // //                         {errors.requiresSponsorship}
// // // //                       </p>
// // // //                     )}
// // // //                   </div>

// // // //                   {/* Cover Letter */}
// // // //                   <div>
// // // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // // //                       Why are you interested in this role?
// // // //                     </label>
// // // //                     <textarea
// // // //                       rows={5}
// // // //                       placeholder="Tell us why you'd be a great fit..."
// // // //                       value={formData.coverLetter}
// // // //                       onChange={(e) =>
// // // //                         setFormData({
// // // //                           ...formData,
// // // //                           coverLetter: e.target.value,
// // // //                         })
// // // //                       }
// // // //                       className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all resize-none"
// // // //                     ></textarea>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Server Error Display */}
// // // //               {submitError && (
// // // //                 <div className="flex items-start gap-2 bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] text-sm rounded-lg p-3">
// // // //                   <FaExclamationTriangle className="mt-0.5 flex-shrink-0" />
// // // //                   <span>{submitError}</span>
// // // //                 </div>
// // // //               )}
// // // //             </div>

// // // //             {/* Form Actions Footer */}
// // // //             <div className="flex justify-end items-center p-6 bg-white border-t border-[#E5E7EB] gap-4">
// // // //               <Button
// // // //                 type="button"
// // // //                 variant="ghost"
// // // //                 onClick={onClose}
// // // //                 disabled={isSubmitting}
// // // //               >
// // // //                 Cancel
// // // //               </Button>
// // // //               <Button type="submit" disabled={isSubmitting}>
// // // //                 {isSubmitting ? (
// // // //                   <>
// // // //                     <FaSpinner className="animate-spin" /> Submitting...
// // // //                   </>
// // // //                 ) : (
// // // //                   <>
// // // //                     Submit Application <FaCheckCircle className="ml-1" />
// // // //                   </>
// // // //                 )}
// // // //               </Button>
// // // //             </div>
// // // //           </form>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // });

// // // // export default ApplicationFlow;

// // // import React, { useState, memo } from "react";
// // // import {
// // //   FaTimes,
// // //   FaCheckCircle,
// // //   FaCloudUploadAlt,
// // //   FaFileAlt,
// // //   FaUser,
// // //   FaEnvelope,
// // //   FaPhone,
// // //   FaLinkedin,
// // //   FaGithub,
// // //   FaGlobe,
// // //   FaSpinner,
// // //   FaExclamationTriangle,
// // //   FaBriefcase,
// // //   FaMapMarkerAlt,
// // //   FaDollarSign,
// // //   FaCalendarAlt,
// // // } from "react-icons/fa";
// // // import { Button } from "../common/Button";
// // // import { submitApplication } from "../../api/careersApi";

// // // const ApplicationFlow = memo(({ selectedJob, onClose }) => {
// // //   const [formData, setFormData] = useState({
// // //     fullName: "",
// // //     email: "",
// // //     phone: "",
// // //     experience: "",
// // //     currentLocation: "",
// // //     salaryExpectation: "",
// // //     availability: "",
// // //     source: "",
// // //     resume: null,
// // //     linkedin: "",
// // //     github: "",
// // //     website: "",
// // //     authorizedToWork: "",
// // //     requiresSponsorship: "",
// // //     coverLetter: "",
// // //   });
// // //   const [errors, setErrors] = useState({});
// // //   const [isDragging, setIsDragging] = useState(false);
// // //   const [submitted, setSubmitted] = useState(false);
// // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // //   const [submitError, setSubmitError] = useState(null);

// // //   if (!selectedJob) return null;

// // //   const validateForm = () => {
// // //     let tempErrors = {};
// // //     if (!formData.fullName.trim())
// // //       tempErrors.fullName = "Full name is required";
// // //     if (!formData.email.trim()) tempErrors.email = "Email is required";
// // //     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
// // //       tempErrors.email = "Invalid email format";
// // //     if (!formData.resume) tempErrors.resume = "Please upload your resume";
// // //     if (!formData.authorizedToWork)
// // //       tempErrors.authorizedToWork = "Please select an option.";
// // //     if (!formData.requiresSponsorship)
// // //       tempErrors.requiresSponsorship = "Please select an option.";

// // //     setErrors(tempErrors);
// // //     return Object.keys(tempErrors).length === 0;
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     if (!validateForm()) return;

// // //     setIsSubmitting(true);
// // //     setSubmitError(null);
// // //     try {
// // //       const nameParts = formData.fullName.trim().split(/\s+/);
// // //       const firstName = nameParts[0] || formData.fullName.trim();
// // //       const lastName = nameParts.slice(1).join(" ") || "-";

// // //       // Compiling extra details into a structured note for the backend
// // //       const notes = [
// // //         formData.coverLetter,
// // //         `Current Location: ${formData.currentLocation || "N/A"}`,
// // //         `Salary Expectation: ${formData.salaryExpectation || "N/A"}`,
// // //         `Availability: ${formData.availability || "N/A"}`,
// // //         `Source: ${formData.source || "N/A"}`,
// // //         `Authorized to work in US: ${formData.authorizedToWork}`,
// // //         `Requires visa sponsorship: ${formData.requiresSponsorship}`,
// // //         formData.github ? `GitHub: ${formData.github}` : null,
// // //       ]
// // //         .filter(Boolean)
// // //         .join("\n\n");

// // //       const payload = new FormData();
// // //       payload.append("resume", formData.resume);
// // //       payload.append("job_id", selectedJob.id);
// // //       payload.append("first_name", firstName);
// // //       payload.append("last_name", lastName);
// // //       payload.append("email", formData.email);
// // //       payload.append("phone", formData.phone);
// // //       payload.append("linkedin", formData.linkedin);
// // //       payload.append("portfolio", formData.website);
// // //       payload.append("experience", formData.experience);
// // //       payload.append("cover_letter", notes);

// // //       await submitApplication(payload);
// // //       setSubmitted(true);
// // //     } catch (err) {
// // //       setSubmitError(
// // //         err.message ||
// // //           "Something went wrong submitting your application. Please try again.",
// // //       );
// // //     } finally {
// // //       setIsSubmitting(false);
// // //     }
// // //   };

// // //   const handleFileChange = (file) => {
// // //     if (!file) return;
// // //     if (file.size < 5 * 1024 * 1024) {
// // //       setFormData((prev) => ({ ...prev, resume: file }));
// // //       setErrors((prev) => ({ ...prev, resume: null }));
// // //     } else {
// // //       setErrors((prev) => ({
// // //         ...prev,
// // //         resume: "Invalid file. Must be under 5MB.",
// // //       }));
// // //     }
// // //   };

// // //   const handleDrop = (e) => {
// // //     e.preventDefault();
// // //     setIsDragging(false);
// // //     handleFileChange(e.dataTransfer.files[0]);
// // //   };

// // //   return (
// // //     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/60 backdrop-blur-sm">
// // //       <div className="bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
// // //         {/* Modal Header */}
// // //         <div className="flex justify-between items-center p-6 border-b border-[#E5E7EB] sticky top-0 bg-white z-10">
// // //           <div>
// // //             <p className="text-sm text-[#6B7280]">Applying for</p>
// // //             <h3 className="text-xl font-bold text-[#0F172A]">
// // //               {selectedJob.title}
// // //             </h3>
// // //           </div>
// // //           <button
// // //             onClick={onClose}
// // //             className="p-2 text-[#6B7280] hover:bg-[#F9FAFB] rounded-lg transition-colors"
// // //           >
// // //             <FaTimes size={20} />
// // //           </button>
// // //         </div>

// // //         {/* Success State */}
// // //         {submitted ? (
// // //           <div className="p-12 text-center flex-1 flex flex-col items-center justify-center">
// // //             <div className="w-16 h-16 bg-[#10B981]/10 rounded-full flex items-center justify-center mb-6">
// // //               <FaCheckCircle size={32} className="text-[#10B981]" />
// // //             </div>
// // //             <h2 className="text-2xl font-bold text-[#0F172A] mb-3">
// // //               Application Submitted!
// // //             </h2>
// // //             <p className="text-[#6B7280] max-w-md mb-8">
// // //               Thank you for applying. Our talent acquisition team will review
// // //               your application and get back to you within 5-7 business days.
// // //             </p>
// // //             <Button onClick={onClose}>Close</Button>
// // //           </div>
// // //         ) : (
// // //           /* Single Page Form */
// // //           <form
// // //             onSubmit={handleSubmit}
// // //             className="flex-1 flex flex-col overflow-hidden"
// // //           >
// // //             <div className="flex-1 overflow-y-auto p-6 bg-[#F9FAFB] space-y-6">
// // //               {/* Section 1: Personal Information & Preferences */}
// // //               <div className="space-y-5 bg-white p-6 rounded-xl border border-[#E5E7EB]">
// // //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// // //                   Personal Information
// // //                 </h4>
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// // //                   <div>
// // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // //                       Full Name *
// // //                     </label>
// // //                     <div className="relative">
// // //                       <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// // //                       <input
// // //                         type="text"
// // //                         value={formData.fullName}
// // //                         onChange={(e) =>
// // //                           setFormData({ ...formData, fullName: e.target.value })
// // //                         }
// // //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// // //                       />
// // //                     </div>
// // //                     {errors.fullName && (
// // //                       <p className="text-[#EF4444] text-xs mt-1.5">
// // //                         {errors.fullName}
// // //                       </p>
// // //                     )}
// // //                   </div>
// // //                   <div>
// // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // //                       Email Address *
// // //                     </label>
// // //                     <div className="relative">
// // //                       <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// // //                       <input
// // //                         type="email"
// // //                         value={formData.email}
// // //                         onChange={(e) =>
// // //                           setFormData({ ...formData, email: e.target.value })
// // //                         }
// // //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// // //                       />
// // //                     </div>
// // //                     {errors.email && (
// // //                       <p className="text-[#EF4444] text-xs mt-1.5">
// // //                         {errors.email}
// // //                       </p>
// // //                     )}
// // //                   </div>
// // //                   <div>
// // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // //                       Phone Number
// // //                     </label>
// // //                     <div className="relative">
// // //                       <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// // //                       <input
// // //                         type="tel"
// // //                         value={formData.phone}
// // //                         onChange={(e) =>
// // //                           setFormData({ ...formData, phone: e.target.value })
// // //                         }
// // //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                   <div>
// // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // //                       Current Location
// // //                     </label>
// // //                     <div className="relative">
// // //                       <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// // //                       <input
// // //                         type="text"
// // //                         placeholder="City, State, Country"
// // //                         value={formData.currentLocation}
// // //                         onChange={(e) =>
// // //                           setFormData({
// // //                             ...formData,
// // //                             currentLocation: e.target.value,
// // //                           })
// // //                         }
// // //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                   <div>
// // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // //                       Years of Experience
// // //                     </label>
// // //                     <div className="relative">
// // //                       <FaBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// // //                       <input
// // //                         type="text"
// // //                         placeholder="e.g. 2 years"
// // //                         value={formData.experience}
// // //                         onChange={(e) =>
// // //                           setFormData({
// // //                             ...formData,
// // //                             experience: e.target.value,
// // //                           })
// // //                         }
// // //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                   <div>
// // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // //                       Salary Expectation (USD)
// // //                     </label>
// // //                     <div className="relative">
// // //                       <FaDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// // //                       <input
// // //                         type="text"
// // //                         placeholder="e.g. 80,000"
// // //                         value={formData.salaryExpectation}
// // //                         onChange={(e) =>
// // //                           setFormData({
// // //                             ...formData,
// // //                             salaryExpectation: e.target.value,
// // //                           })
// // //                         }
// // //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                   <div>
// // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // //                       Availability
// // //                     </label>
// // //                     <div className="relative">
// // //                       <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// // //                       <select
// // //                         value={formData.availability}
// // //                         onChange={(e) =>
// // //                           setFormData({
// // //                             ...formData,
// // //                             availability: e.target.value,
// // //                           })
// // //                         }
// // //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all appearance-none bg-white"
// // //                       >
// // //                         <option value="">Select...</option>
// // //                         <option value="Immediately">Immediately</option>
// // //                         <option value="2 weeks">2 Weeks Notice</option>
// // //                         <option value="1 month">1 Month Notice</option>
// // //                         <option value="3 months">3 Months Notice</option>
// // //                       </select>
// // //                     </div>
// // //                   </div>
// // //                   <div>
// // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // //                       How did you hear about us?
// // //                     </label>
// // //                     <select
// // //                       value={formData.source}
// // //                       onChange={(e) =>
// // //                         setFormData({ ...formData, source: e.target.value })
// // //                       }
// // //                       className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all appearance-none bg-white"
// // //                     >
// // //                       <option value="">Select...</option>
// // //                       <option value="LinkedIn">LinkedIn</option>
// // //                       <option value="Referral">Referral</option>
// // //                       <option value="Company Website">Company Website</option>
// // //                     </select>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Section 2: Resume Upload */}
// // //               <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
// // //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// // //                   Resume
// // //                 </h4>
// // //                 <label className="block text-sm font-semibold text-[#111827] mb-2">
// // //                   Upload Resume *
// // //                 </label>
// // //                 <div
// // //                   onDragOver={(e) => {
// // //                     e.preventDefault();
// // //                     setIsDragging(true);
// // //                   }}
// // //                   onDragLeave={() => setIsDragging(false)}
// // //                   onDrop={handleDrop}
// // //                   className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${isDragging ? "border-[#12324f] bg-[#12324f]/5" : "border-[#E5E7EB] hover:border-[#12324f]"}`}
// // //                   onClick={() => document.getElementById("fileInput").click()}
// // //                 >
// // //                   {formData.resume ? (
// // //                     <div className="flex items-center justify-center gap-4 text-left">
// // //                       <div className="w-12 h-12 bg-[#12324f]/10 rounded-xl flex items-center justify-center">
// // //                         <FaFileAlt size={20} className="text-[#12324f]" />
// // //                       </div>
// // //                       <div>
// // //                         <p className="font-semibold text-[#111827]">
// // //                           {formData.resume.name}
// // //                         </p>
// // //                         <p className="text-xs text-[#6B7280]">
// // //                           {(formData.resume.size / 1024).toFixed(1)} KB • Ready
// // //                           to submit
// // //                         </p>
// // //                       </div>
// // //                     </div>
// // //                   ) : (
// // //                     <>
// // //                       <FaCloudUploadAlt
// // //                         size={32}
// // //                         className="mx-auto text-[#9CA3AF] mb-3"
// // //                       />
// // //                       <p className="font-semibold text-[#111827] mb-1">
// // //                         Drag & drop your resume here
// // //                       </p>
// // //                       <p className="text-sm text-[#6B7280]">
// // //                         or click to browse files
// // //                       </p>
// // //                       <p className="text-xs text-[#9CA3AF] mt-3">
// // //                         PDF, DOC, DOCX (Max 5MB)
// // //                       </p>
// // //                     </>
// // //                   )}
// // //                   <input
// // //                     type="file"
// // //                     id="fileInput"
// // //                     className="hidden"
// // //                     onChange={(e) => handleFileChange(e.target.files[0])}
// // //                     accept=".pdf,.doc,.docx"
// // //                   />
// // //                 </div>
// // //                 {errors.resume && (
// // //                   <p className="text-[#EF4444] text-xs mt-2">{errors.resume}</p>
// // //                 )}
// // //               </div>

// // //               {/* Section 3: Portfolio Links */}
// // //               <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
// // //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// // //                   Portfolio & Links
// // //                 </h4>
// // //                 <div className="space-y-5">
// // //                   <div>
// // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // //                       LinkedIn Profile
// // //                     </label>
// // //                     <div className="relative">
// // //                       <FaLinkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// // //                       <input
// // //                         type="url"
// // //                         placeholder="https://linkedin.com/in/username"
// // //                         value={formData.linkedin}
// // //                         onChange={(e) =>
// // //                           setFormData({ ...formData, linkedin: e.target.value })
// // //                         }
// // //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                   <div>
// // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // //                       GitHub Profile
// // //                     </label>
// // //                     <div className="relative">
// // //                       <FaGithub className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// // //                       <input
// // //                         type="url"
// // //                         placeholder="https://github.com/username"
// // //                         value={formData.github}
// // //                         onChange={(e) =>
// // //                           setFormData({ ...formData, github: e.target.value })
// // //                         }
// // //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                   <div>
// // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // //                       Personal Website / Portfolio
// // //                     </label>
// // //                     <div className="relative">
// // //                       <FaGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// // //                       <input
// // //                         type="url"
// // //                         placeholder="https://yourportfolio.com"
// // //                         value={formData.website}
// // //                         onChange={(e) =>
// // //                           setFormData({ ...formData, website: e.target.value })
// // //                         }
// // //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// // //                       />
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Section 4: Visa & Work Authorization */}
// // //               <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
// // //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// // //                   Work Authorization & Visa Status
// // //                 </h4>
// // //                 <div className="space-y-6">
// // //                   <div>
// // //                     <label className="block text-sm font-semibold text-[#111827] mb-3">
// // //                       Are you legally authorized to work in the United States? *
// // //                     </label>
// // //                     <div className="flex gap-6">
// // //                       <label className="flex items-center gap-2 cursor-pointer">
// // //                         <input
// // //                           type="radio"
// // //                           name="authorizedToWork"
// // //                           value="Yes"
// // //                           checked={formData.authorizedToWork === "Yes"}
// // //                           onChange={(e) =>
// // //                             setFormData({
// // //                               ...formData,
// // //                               authorizedToWork: e.target.value,
// // //                             })
// // //                           }
// // //                           className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// // //                         />
// // //                         <span className="text-sm text-[#111827]">Yes</span>
// // //                       </label>
// // //                       <label className="flex items-center gap-2 cursor-pointer">
// // //                         <input
// // //                           type="radio"
// // //                           name="authorizedToWork"
// // //                           value="No"
// // //                           checked={formData.authorizedToWork === "No"}
// // //                           onChange={(e) =>
// // //                             setFormData({
// // //                               ...formData,
// // //                               authorizedToWork: e.target.value,
// // //                             })
// // //                           }
// // //                           className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// // //                         />
// // //                         <span className="text-sm text-[#111827]">No</span>
// // //                       </label>
// // //                     </div>
// // //                     {errors.authorizedToWork && (
// // //                       <p className="text-[#EF4444] text-xs mt-2">
// // //                         {errors.authorizedToWork}
// // //                       </p>
// // //                     )}
// // //                   </div>

// // //                   <div>
// // //                     <label className="block text-sm font-semibold text-[#111827] mb-3">
// // //                       Will you now, or in the future, require sponsorship for
// // //                       employment visa status (e.g., H-1B)? *
// // //                     </label>
// // //                     <div className="flex gap-6">
// // //                       <label className="flex items-center gap-2 cursor-pointer">
// // //                         <input
// // //                           type="radio"
// // //                           name="requiresSponsorship"
// // //                           value="Yes"
// // //                           checked={formData.requiresSponsorship === "Yes"}
// // //                           onChange={(e) =>
// // //                             setFormData({
// // //                               ...formData,
// // //                               requiresSponsorship: e.target.value,
// // //                             })
// // //                           }
// // //                           className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// // //                         />
// // //                         <span className="text-sm text-[#111827]">Yes</span>
// // //                       </label>
// // //                       <label className="flex items-center gap-2 cursor-pointer">
// // //                         <input
// // //                           type="radio"
// // //                           name="requiresSponsorship"
// // //                           value="No"
// // //                           checked={formData.requiresSponsorship === "No"}
// // //                           onChange={(e) =>
// // //                             setFormData({
// // //                               ...formData,
// // //                               requiresSponsorship: e.target.value,
// // //                             })
// // //                           }
// // //                           className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// // //                         />
// // //                         <span className="text-sm text-[#111827]">No</span>
// // //                       </label>
// // //                     </div>
// // //                     {errors.requiresSponsorship && (
// // //                       <p className="text-[#EF4444] text-xs mt-2">
// // //                         {errors.requiresSponsorship}
// // //                       </p>
// // //                     )}
// // //                   </div>

// // //                   <div>
// // //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// // //                       Why are you interested in this role?
// // //                     </label>
// // //                     <textarea
// // //                       rows={5}
// // //                       placeholder="Tell us why you'd be a great fit..."
// // //                       value={formData.coverLetter}
// // //                       onChange={(e) =>
// // //                         setFormData({
// // //                           ...formData,
// // //                           coverLetter: e.target.value,
// // //                         })
// // //                       }
// // //                       className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all resize-none"
// // //                     ></textarea>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Server Error Display */}
// // //               {submitError && (
// // //                 <div className="flex items-start gap-2 bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] text-sm rounded-lg p-3">
// // //                   <FaExclamationTriangle className="mt-0.5 flex-shrink-0" />
// // //                   <span>{submitError}</span>
// // //                 </div>
// // //               )}
// // //             </div>

// // //             {/* Form Actions Footer */}
// // //             <div className="flex justify-end items-center p-6 bg-white border-t border-[#E5E7EB] gap-4 sticky bottom-0">
// // //               <Button
// // //                 type="button"
// // //                 variant="ghost"
// // //                 onClick={onClose}
// // //                 disabled={isSubmitting}
// // //               >
// // //                 Cancel
// // //               </Button>
// // //               <Button type="submit" disabled={isSubmitting}>
// // //                 {isSubmitting ? (
// // //                   <>
// // //                     <FaSpinner className="animate-spin" /> Submitting...
// // //                   </>
// // //                 ) : (
// // //                   <>
// // //                     Submit Application <FaCheckCircle className="ml-1" />
// // //                   </>
// // //                 )}
// // //               </Button>
// // //             </div>
// // //           </form>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // });

// // // export default ApplicationFlow;

// // import React, { useState, memo } from "react";
// // import {
// //   FaTimes,
// //   FaCheckCircle,
// //   FaCloudUploadAlt,
// //   FaFileAlt,
// //   FaUser,
// //   FaEnvelope,
// //   FaPhone,
// //   FaLinkedin,
// //   FaGithub,
// //   FaGlobe,
// //   FaSpinner,
// //   FaExclamationTriangle,
// //   FaBriefcase,
// //   FaMapMarkerAlt,
// //   FaDollarSign,
// //   FaCalendarAlt,
// // } from "react-icons/fa";
// // import { Button } from "../common/Button";
// // import { submitApplication } from "../../api/careersApi";

// // const ApplicationFlow = memo(({ selectedJob, onClose }) => {
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     email: "",
// //     phone: "",
// //     experience: "",
// //     currentLocation: "",
// //     salaryExpectation: "",
// //     availability: "",
// //     source: "",
// //     resume: null,
// //     linkedin: "",
// //     github: "",
// //     website: "",
// //     authorizedToWork: "",
// //     requiresSponsorship: "",
// //     coverLetter: "",
// //   });
// //   const [errors, setErrors] = useState({});
// //   const [isDragging, setIsDragging] = useState(false);
// //   const [submitted, setSubmitted] = useState(false);
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [submitError, setSubmitError] = useState(null);

// //   if (!selectedJob) return null;

// //   const validateForm = () => {
// //     let tempErrors = {};
// //     if (!formData.fullName.trim())
// //       tempErrors.fullName = "Full name is required";
// //     if (!formData.email.trim()) tempErrors.email = "Email is required";
// //     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
// //       tempErrors.email = "Invalid email format";
// //     if (!formData.resume) tempErrors.resume = "Please upload your resume";
// //     if (!formData.authorizedToWork)
// //       tempErrors.authorizedToWork = "Please select an option.";
// //     if (!formData.requiresSponsorship)
// //       tempErrors.requiresSponsorship = "Please select an option.";

// //     setErrors(tempErrors);
// //     return Object.keys(tempErrors).length === 0;
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!validateForm()) return;

// //     setIsSubmitting(true);
// //     setSubmitError(null);
// //     try {
// //       const nameParts = formData.fullName.trim().split(/\s+/);
// //       const firstName = nameParts[0] || formData.fullName.trim();
// //       const lastName = nameParts.slice(1).join(" ") || "-";

// //       // Append GitHub to cover letter since there's no DB column for it
// //       let finalCoverLetter = formData.coverLetter || "";
// //       if (formData.github) {
// //         finalCoverLetter += `\n\nGitHub Profile: ${formData.github}`;
// //       }

// //       const payload = new FormData();
// //       payload.append("resume", formData.resume);
// //       payload.append("job_id", selectedJob.id);
// //       payload.append("first_name", firstName);
// //       payload.append("last_name", lastName);
// //       payload.append("email", formData.email);
// //       payload.append("phone", formData.phone);
// //       payload.append("current_location", formData.currentLocation);
// //       payload.append("linkedin", formData.linkedin);
// //       payload.append("portfolio", formData.website);
// //       payload.append("experience", formData.experience);
// //       payload.append("salary_expectation", formData.salaryExpectation);
// //       payload.append("availability", formData.availability);
// //       payload.append("source", formData.source);
// //       payload.append("authorized_to_work", formData.authorizedToWork);
// //       payload.append("requires_sponsorship", formData.requiresSponsorship);
// //       payload.append("cover_letter", finalCoverLetter);

// //       await submitApplication(payload);
// //       setSubmitted(true);
// //     } catch (err) {
// //       setSubmitError(
// //         err.message ||
// //           "Something went wrong submitting your application. Please try again.",
// //       );
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   const handleFileChange = (file) => {
// //     if (!file) return;
// //     if (file.size < 5 * 1024 * 1024) {
// //       setFormData((prev) => ({ ...prev, resume: file }));
// //       setErrors((prev) => ({ ...prev, resume: null }));
// //     } else {
// //       setErrors((prev) => ({
// //         ...prev,
// //         resume: "Invalid file. Must be under 5MB.",
// //       }));
// //     }
// //   };

// //   const handleDrop = (e) => {
// //     e.preventDefault();
// //     setIsDragging(false);
// //     handleFileChange(e.dataTransfer.files[0]);
// //   };

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/60 backdrop-blur-sm">
// //       <div className="bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
// //         {/* Modal Header */}
// //         <div className="flex justify-between items-center p-6 border-b border-[#E5E7EB] sticky top-0 bg-white z-10">
// //           <div>
// //             <p className="text-sm text-[#6B7280]">Applying for</p>
// //             <h3 className="text-xl font-bold text-[#0F172A]">
// //               {selectedJob.title}
// //             </h3>
// //           </div>
// //           <button
// //             onClick={onClose}
// //             className="p-2 text-[#6B7280] hover:bg-[#F9FAFB] rounded-lg transition-colors"
// //           >
// //             <FaTimes size={20} />
// //           </button>
// //         </div>

// //         {/* Success State */}
// //         {submitted ? (
// //           <div className="p-12 text-center flex-1 flex flex-col items-center justify-center">
// //             <div className="w-16 h-16 bg-[#10B981]/10 rounded-full flex items-center justify-center mb-6">
// //               <FaCheckCircle size={32} className="text-[#10B981]" />
// //             </div>
// //             <h2 className="text-2xl font-bold text-[#0F172A] mb-3">
// //               Application Submitted!
// //             </h2>
// //             <p className="text-[#6B7280] max-w-md mb-8">
// //               Thank you for applying. Our talent acquisition team will review
// //               your application and get back to you within 5-7 business days.
// //             </p>
// //             <Button onClick={onClose}>Close</Button>
// //           </div>
// //         ) : (
// //           /* Single Page Form */
// //           <form
// //             onSubmit={handleSubmit}
// //             className="flex-1 flex flex-col overflow-hidden"
// //           >
// //             <div className="flex-1 overflow-y-auto p-6 bg-[#F9FAFB] space-y-6">
// //               {/* Section 1: Personal Information & Preferences */}
// //               <div className="space-y-5 bg-white p-6 rounded-xl border border-[#E5E7EB]">
// //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// //                   Personal Information
// //                 </h4>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Full Name *
// //                     </label>
// //                     <div className="relative">
// //                       <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="text"
// //                         value={formData.fullName}
// //                         onChange={(e) =>
// //                           setFormData({ ...formData, fullName: e.target.value })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                     {errors.fullName && (
// //                       <p className="text-[#EF4444] text-xs mt-1.5">
// //                         {errors.fullName}
// //                       </p>
// //                     )}
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Email Address *
// //                     </label>
// //                     <div className="relative">
// //                       <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="email"
// //                         value={formData.email}
// //                         onChange={(e) =>
// //                           setFormData({ ...formData, email: e.target.value })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                     {errors.email && (
// //                       <p className="text-[#EF4444] text-xs mt-1.5">
// //                         {errors.email}
// //                       </p>
// //                     )}
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Phone Number
// //                     </label>
// //                     <div className="relative">
// //                       <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="tel"
// //                         value={formData.phone}
// //                         onChange={(e) =>
// //                           setFormData({ ...formData, phone: e.target.value })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Current Location
// //                     </label>
// //                     <div className="relative">
// //                       <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="text"
// //                         placeholder="City, State, Country"
// //                         value={formData.currentLocation}
// //                         onChange={(e) =>
// //                           setFormData({
// //                             ...formData,
// //                             currentLocation: e.target.value,
// //                           })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Years of Experience
// //                     </label>
// //                     <div className="relative">
// //                       <FaBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="text"
// //                         placeholder="e.g. 2 years"
// //                         value={formData.experience}
// //                         onChange={(e) =>
// //                           setFormData({
// //                             ...formData,
// //                             experience: e.target.value,
// //                           })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Salary Expectation (USD)
// //                     </label>
// //                     <div className="relative">
// //                       <FaDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="text"
// //                         placeholder="e.g. 80,000"
// //                         value={formData.salaryExpectation}
// //                         onChange={(e) =>
// //                           setFormData({
// //                             ...formData,
// //                             salaryExpectation: e.target.value,
// //                           })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Availability
// //                     </label>
// //                     <div className="relative">
// //                       <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <select
// //                         value={formData.availability}
// //                         onChange={(e) =>
// //                           setFormData({
// //                             ...formData,
// //                             availability: e.target.value,
// //                           })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all appearance-none bg-white"
// //                       >
// //                         <option value="">Select...</option>
// //                         <option value="Immediately">Immediately</option>
// //                         <option value="2 weeks">2 Weeks Notice</option>
// //                         <option value="1 month">1 Month Notice</option>
// //                         <option value="3 months">3 Months Notice</option>
// //                       </select>
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       How did you hear about us?
// //                     </label>
// //                     <select
// //                       value={formData.source}
// //                       onChange={(e) =>
// //                         setFormData({ ...formData, source: e.target.value })
// //                       }
// //                       className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all appearance-none bg-white"
// //                     >
// //                       <option value="">Select...</option>
// //                       <option value="LinkedIn">LinkedIn</option>
// //                       <option value="Referral">Referral</option>
// //                       <option value="Company Website">Company Website</option>
// //                     </select>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Section 2: Resume Upload */}
// //               <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
// //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// //                   Resume
// //                 </h4>
// //                 <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                   Upload Resume *
// //                 </label>
// //                 <div
// //                   onDragOver={(e) => {
// //                     e.preventDefault();
// //                     setIsDragging(true);
// //                   }}
// //                   onDragLeave={() => setIsDragging(false)}
// //                   onDrop={handleDrop}
// //                   className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${isDragging ? "border-[#12324f] bg-[#12324f]/5" : "border-[#E5E7EB] hover:border-[#12324f]"}`}
// //                   onClick={() => document.getElementById("fileInput").click()}
// //                 >
// //                   {formData.resume ? (
// //                     <div className="flex items-center justify-center gap-4 text-left">
// //                       <div className="w-12 h-12 bg-[#12324f]/10 rounded-xl flex items-center justify-center">
// //                         <FaFileAlt size={20} className="text-[#12324f]" />
// //                       </div>
// //                       <div>
// //                         <p className="font-semibold text-[#111827]">
// //                           {formData.resume.name}
// //                         </p>
// //                         <p className="text-xs text-[#6B7280]">
// //                           {(formData.resume.size / 1024).toFixed(1)} KB • Ready
// //                           to submit
// //                         </p>
// //                       </div>
// //                     </div>
// //                   ) : (
// //                     <>
// //                       <FaCloudUploadAlt
// //                         size={32}
// //                         className="mx-auto text-[#9CA3AF] mb-3"
// //                       />
// //                       <p className="font-semibold text-[#111827] mb-1">
// //                         Drag & drop your resume here
// //                       </p>
// //                       <p className="text-sm text-[#6B7280]">
// //                         or click to browse files
// //                       </p>
// //                       <p className="text-xs text-[#9CA3AF] mt-3">
// //                         PDF, DOC, DOCX (Max 5MB)
// //                       </p>
// //                     </>
// //                   )}
// //                   <input
// //                     type="file"
// //                     id="fileInput"
// //                     className="hidden"
// //                     onChange={(e) => handleFileChange(e.target.files[0])}
// //                     accept=".pdf,.doc,.docx"
// //                   />
// //                 </div>
// //                 {errors.resume && (
// //                   <p className="text-[#EF4444] text-xs mt-2">{errors.resume}</p>
// //                 )}
// //               </div>

// //               {/* Section 3: Portfolio Links */}
// //               <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
// //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// //                   Portfolio & Links
// //                 </h4>
// //                 <div className="space-y-5">
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       LinkedIn Profile
// //                     </label>
// //                     <div className="relative">
// //                       <FaLinkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="url"
// //                         placeholder="https://linkedin.com/in/username"
// //                         value={formData.linkedin}
// //                         onChange={(e) =>
// //                           setFormData({ ...formData, linkedin: e.target.value })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       GitHub Profile
// //                     </label>
// //                     <div className="relative">
// //                       <FaGithub className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="url"
// //                         placeholder="https://github.com/username"
// //                         value={formData.github}
// //                         onChange={(e) =>
// //                           setFormData({ ...formData, github: e.target.value })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Personal Website / Portfolio
// //                     </label>
// //                     <div className="relative">
// //                       <FaGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="url"
// //                         placeholder="https://yourportfolio.com"
// //                         value={formData.website}
// //                         onChange={(e) =>
// //                           setFormData({ ...formData, website: e.target.value })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Section 4: Visa & Work Authorization */}
// //               <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
// //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// //                   Work Authorization & Visa Status
// //                 </h4>
// //                 <div className="space-y-6">
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-3">
// //                       Are you legally authorized to work in the United States? *
// //                     </label>
// //                     <div className="flex gap-6">
// //                       <label className="flex items-center gap-2 cursor-pointer">
// //                         <input
// //                           type="radio"
// //                           name="authorizedToWork"
// //                           value="Yes"
// //                           checked={formData.authorizedToWork === "Yes"}
// //                           onChange={(e) =>
// //                             setFormData({
// //                               ...formData,
// //                               authorizedToWork: e.target.value,
// //                             })
// //                           }
// //                           className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// //                         />
// //                         <span className="text-sm text-[#111827]">Yes</span>
// //                       </label>
// //                       <label className="flex items-center gap-2 cursor-pointer">
// //                         <input
// //                           type="radio"
// //                           name="authorizedToWork"
// //                           value="No"
// //                           checked={formData.authorizedToWork === "No"}
// //                           onChange={(e) =>
// //                             setFormData({
// //                               ...formData,
// //                               authorizedToWork: e.target.value,
// //                             })
// //                           }
// //                           className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// //                         />
// //                         <span className="text-sm text-[#111827]">No</span>
// //                       </label>
// //                     </div>
// //                     {errors.authorizedToWork && (
// //                       <p className="text-[#EF4444] text-xs mt-2">
// //                         {errors.authorizedToWork}
// //                       </p>
// //                     )}
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-3">
// //                       Will you now, or in the future, require sponsorship for
// //                       employment visa status (e.g., H-1B)? *
// //                     </label>
// //                     <div className="flex gap-6">
// //                       <label className="flex items-center gap-2 cursor-pointer">
// //                         <input
// //                           type="radio"
// //                           name="requiresSponsorship"
// //                           value="Yes"
// //                           checked={formData.requiresSponsorship === "Yes"}
// //                           onChange={(e) =>
// //                             setFormData({
// //                               ...formData,
// //                               requiresSponsorship: e.target.value,
// //                             })
// //                           }
// //                           className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// //                         />
// //                         <span className="text-sm text-[#111827]">Yes</span>
// //                       </label>
// //                       <label className="flex items-center gap-2 cursor-pointer">
// //                         <input
// //                           type="radio"
// //                           name="requiresSponsorship"
// //                           value="No"
// //                           checked={formData.requiresSponsorship === "No"}
// //                           onChange={(e) =>
// //                             setFormData({
// //                               ...formData,
// //                               requiresSponsorship: e.target.value,
// //                             })
// //                           }
// //                           className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// //                         />
// //                         <span className="text-sm text-[#111827]">No</span>
// //                       </label>
// //                     </div>
// //                     {errors.requiresSponsorship && (
// //                       <p className="text-[#EF4444] text-xs mt-2">
// //                         {errors.requiresSponsorship}
// //                       </p>
// //                     )}
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Why are you interested in this role?
// //                     </label>
// //                     <textarea
// //                       rows={5}
// //                       placeholder="Tell us why you'd be a great fit..."
// //                       value={formData.coverLetter}
// //                       onChange={(e) =>
// //                         setFormData({
// //                           ...formData,
// //                           coverLetter: e.target.value,
// //                         })
// //                       }
// //                       className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all resize-none"
// //                     ></textarea>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Server Error Display */}
// //               {submitError && (
// //                 <div className="flex items-start gap-2 bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] text-sm rounded-lg p-3">
// //                   <FaExclamationTriangle className="mt-0.5 flex-shrink-0" />
// //                   <span>{submitError}</span>
// //                 </div>
// //               )}
// //             </div>

// //             {/* Form Actions Footer */}
// //             <div className="flex justify-end items-center p-6 bg-white border-t border-[#E5E7EB] gap-4 sticky bottom-0">
// //               <Button
// //                 type="button"
// //                 variant="ghost"
// //                 onClick={onClose}
// //                 disabled={isSubmitting}
// //               >
// //                 Cancel
// //               </Button>
// //               <Button type="submit" disabled={isSubmitting}>
// //                 {isSubmitting ? (
// //                   <>
// //                     <FaSpinner className="animate-spin" /> Submitting...
// //                   </>
// //                 ) : (
// //                   <>
// //                     Submit Application <FaCheckCircle className="ml-1" />
// //                   </>
// //                 )}
// //               </Button>
// //             </div>
// //           </form>
// //         )}
// //       </div>
// //     </div>
// //   );
// // });

// // export default ApplicationFlow;

// // import React, { useState, memo } from "react";
// // import {
// //   FaTimes,
// //   FaCheckCircle,
// //   FaCloudUploadAlt,
// //   FaFileAlt,
// //   FaUser,
// //   FaEnvelope,
// //   FaPhone,
// //   FaLinkedin,
// //   FaGithub,
// //   FaGlobe,
// //   FaSpinner,
// //   FaExclamationTriangle,
// //   FaBriefcase,
// //   FaMapMarkerAlt,
// //   FaDollarSign,
// //   FaRupeeSign,
// //   FaCalendarAlt,
// // } from "react-icons/fa";
// // import { Button } from "../common/Button";
// // import { submitApplication } from "../../api/careersApi";

// // const ApplicationFlow = memo(({ selectedJob, onClose }) => {
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     email: "",
// //     phone: "",
// //     experience: "",
// //     country: "",
// //     currentLocation: "",
// //     salaryExpectation: "",
// //     availability: "",
// //     source: "",
// //     resume: null,
// //     linkedin: "",
// //     github: "",
// //     website: "",
// //     authorizedToWork: "",
// //     requiresSponsorship: "",
// //     coverLetter: "",
// //   });
// //   const [errors, setErrors] = useState({});
// //   const [isDragging, setIsDragging] = useState(false);
// //   const [submitted, setSubmitted] = useState(false);
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [submitError, setSubmitError] = useState(null);

// //   if (!selectedJob) return null;

// //   // Stricter email regex
// //   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// //   const validateForm = () => {
// //     let tempErrors = {};

// //     if (!formData.fullName.trim()) {
// //       tempErrors.fullName = "Full name is required";
// //     }

// //     if (!formData.email.trim()) {
// //       tempErrors.email = "Email address is required";
// //     } else if (!emailRegex.test(formData.email.trim())) {
// //       tempErrors.email = "Please enter a valid email address";
// //     }

// //     if (!formData.country) {
// //       tempErrors.country = "Please select your country";
// //     }

// //     if (!formData.resume) {
// //       tempErrors.resume = "Please upload your resume";
// //     }

// //     // Only validate US-specific questions for US applicants
// //     if (formData.country === "United States") {
// //       if (!formData.authorizedToWork) {
// //         tempErrors.authorizedToWork = "Please select an option.";
// //       }
// //       if (!formData.requiresSponsorship) {
// //         tempErrors.requiresSponsorship = "Please select an option.";
// //       }
// //     }

// //     setErrors(tempErrors);
// //     return Object.keys(tempErrors).length === 0;
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!validateForm()) return;

// //     setIsSubmitting(true);
// //     setSubmitError(null);
// //     try {
// //       const nameParts = formData.fullName.trim().split(/\s+/);
// //       const firstName = nameParts[0] || formData.fullName.trim();
// //       const lastName = nameParts.slice(1).join(" ") || "-";

// //       // Append GitHub to cover letter since there's no DB column for it
// //       let finalCoverLetter = formData.coverLetter || "";
// //       if (formData.github) {
// //         finalCoverLetter += `\n\nGitHub Profile: ${formData.github}`;
// //       }

// //       const payload = new FormData();
// //       payload.append("resume", formData.resume);
// //       payload.append("job_id", selectedJob.id);
// //       payload.append("first_name", firstName);
// //       payload.append("last_name", lastName);
// //       payload.append("email", formData.email);
// //       payload.append("phone", formData.phone);
// //       payload.append("country", formData.country);
// //       payload.append("current_location", formData.currentLocation);
// //       payload.append("linkedin", formData.linkedin);
// //       payload.append("portfolio", formData.website);
// //       payload.append("experience", formData.experience);
// //       payload.append("salary_expectation", formData.salaryExpectation);
// //       payload.append("availability", formData.availability);
// //       payload.append("source", formData.source);

// //       // Only send US-specific fields for US applicants
// //       if (formData.country === "United States") {
// //         payload.append("authorized_to_work", formData.authorizedToWork);
// //         payload.append("requires_sponsorship", formData.requiresSponsorship);
// //       }

// //       payload.append("cover_letter", finalCoverLetter);

// //       await submitApplication(payload);
// //       setSubmitted(true);
// //     } catch (err) {
// //       setSubmitError(
// //         err.message ||
// //           "Something went wrong submitting your application. Please try again.",
// //       );
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   const handleFileChange = (file) => {
// //     if (!file) return;
// //     if (file.size < 5 * 1024 * 1024) {
// //       setFormData((prev) => ({ ...prev, resume: file }));
// //       setErrors((prev) => ({ ...prev, resume: null }));
// //     } else {
// //       setErrors((prev) => ({
// //         ...prev,
// //         resume: "Invalid file. Must be under 5MB.",
// //       }));
// //     }
// //   };

// //   const handleDrop = (e) => {
// //     e.preventDefault();
// //     setIsDragging(false);
// //     handleFileChange(e.dataTransfer.files[0]);
// //   };

// //   // Reset US-specific fields whenever country changes to avoid stale data
// //   const handleCountryChange = (value) => {
// //     setFormData({
// //       ...formData,
// //       country: value,
// //       authorizedToWork: "",
// //       requiresSponsorship: "",
// //     });
// //     // Clear any existing errors for US-specific fields
// //     setErrors((prev) => ({
// //       ...prev,
// //       country: undefined,
// //       authorizedToWork: undefined,
// //       requiresSponsorship: undefined,
// //     }));
// //   };

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/60 backdrop-blur-sm">
// //       <div className="bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
// //         {/* Modal Header */}
// //         <div className="flex justify-between items-center p-6 border-b border-[#E5E7EB] sticky top-0 bg-white z-10">
// //           <div>
// //             <p className="text-sm text-[#6B7280]">Applying for</p>
// //             <h3 className="text-xl font-bold text-[#0F172A]">
// //               {selectedJob.title}
// //             </h3>
// //           </div>
// //           <button
// //             onClick={onClose}
// //             className="p-2 text-[#6B7280] hover:bg-[#F9FAFB] rounded-lg transition-colors"
// //           >
// //             <FaTimes size={20} />
// //           </button>
// //         </div>

// //         {/* Success State */}
// //         {submitted ? (
// //           <div className="p-12 text-center flex-1 flex flex-col items-center justify-center">
// //             <div className="w-16 h-16 bg-[#10B981]/10 rounded-full flex items-center justify-center mb-6">
// //               <FaCheckCircle size={32} className="text-[#10B981]" />
// //             </div>
// //             <h2 className="text-2xl font-bold text-[#0F172A] mb-3">
// //               Application Submitted!
// //             </h2>
// //             <p className="text-[#6B7280] max-w-md mb-8">
// //               Thank you for applying. Our talent acquisition team will review
// //               your application and get back to you within 5-7 business days.
// //             </p>
// //             <Button onClick={onClose}>Close</Button>
// //           </div>
// //         ) : (
// //           /* Single Page Form */
// //           <form
// //             onSubmit={handleSubmit}
// //             className="flex-1 flex flex-col overflow-hidden"
// //           >
// //             <div className="flex-1 overflow-y-auto p-6 bg-[#F9FAFB] space-y-6">
// //               {/* Section 1: Personal Information & Preferences */}
// //               <div className="space-y-5 bg-white p-6 rounded-xl border border-[#E5E7EB]">
// //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// //                   Personal Information
// //                 </h4>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Full Name *
// //                     </label>
// //                     <div className="relative">
// //                       <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="text"
// //                         value={formData.fullName}
// //                         onChange={(e) =>
// //                           setFormData({ ...formData, fullName: e.target.value })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                     {errors.fullName && (
// //                       <p className="text-[#EF4444] text-xs mt-1.5">
// //                         {errors.fullName}
// //                       </p>
// //                     )}
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Email Address *
// //                     </label>
// //                     <div className="relative">
// //                       <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="email"
// //                         value={formData.email}
// //                         onChange={(e) =>
// //                           setFormData({ ...formData, email: e.target.value })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                     {errors.email && (
// //                       <p className="text-[#EF4444] text-xs mt-1.5">
// //                         {errors.email}
// //                       </p>
// //                     )}
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Phone Number
// //                     </label>
// //                     <div className="relative">
// //                       <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="tel"
// //                         value={formData.phone}
// //                         onChange={(e) =>
// //                           setFormData({ ...formData, phone: e.target.value })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>

// //                   {/* Country Dropdown (replaces typed Country) */}
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Country *
// //                     </label>
// //                     <select
// //                       value={formData.country}
// //                       onChange={(e) => handleCountryChange(e.target.value)}
// //                       className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all appearance-none bg-white"
// //                     >
// //                       <option value="">Select country...</option>
// //                       <option value="India">India</option>
// //                       <option value="United States">United States</option>
// //                     </select>
// //                     {errors.country && (
// //                       <p className="text-[#EF4444] text-xs mt-1.5">
// //                         {errors.country}
// //                       </p>
// //                     )}
// //                   </div>

// //                   {/* Current Location (City, State only) */}
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Current Location
// //                     </label>
// //                     <div className="relative">
// //                       <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="text"
// //                         placeholder={
// //                           formData.country === "India"
// //                             ? "City, State (e.g. Hyderabad, Telangana)"
// //                             : formData.country === "United States"
// //                               ? "City, State (e.g. Austin, TX)"
// //                               : "City, State"
// //                         }
// //                         value={formData.currentLocation}
// //                         onChange={(e) =>
// //                           setFormData({
// //                             ...formData,
// //                             currentLocation: e.target.value,
// //                           })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Years of Experience
// //                     </label>
// //                     <div className="relative">
// //                       <FaBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="text"
// //                         placeholder="e.g. 2 years"
// //                         value={formData.experience}
// //                         onChange={(e) =>
// //                           setFormData({
// //                             ...formData,
// //                             experience: e.target.value,
// //                           })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Salary Expectation{" "}
// //                       {formData.country === "India" ? "(INR)" : "(USD)"}
// //                     </label>
// //                     <div className="relative">
// //                       {formData.country === "India" ? (
// //                         <FaRupeeSign className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       ) : (
// //                         <FaDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       )}
// //                       <input
// //                         type="text"
// //                         placeholder={
// //                           formData.country === "India"
// //                             ? "e.g. 8,00,000"
// //                             : "e.g. 80,000"
// //                         }
// //                         value={formData.salaryExpectation}
// //                         onChange={(e) =>
// //                           setFormData({
// //                             ...formData,
// //                             salaryExpectation: e.target.value,
// //                           })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Availability
// //                     </label>
// //                     <div className="relative">
// //                       <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <select
// //                         value={formData.availability}
// //                         onChange={(e) =>
// //                           setFormData({
// //                             ...formData,
// //                             availability: e.target.value,
// //                           })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all appearance-none bg-white"
// //                       >
// //                         <option value="">Select...</option>
// //                         <option value="Immediately">Immediately</option>
// //                         <option value="2 weeks">2 Weeks Notice</option>
// //                         <option value="1 month">1 Month Notice</option>
// //                         <option value="3 months">3 Months Notice</option>
// //                       </select>
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       How did you hear about us?
// //                     </label>
// //                     <select
// //                       value={formData.source}
// //                       onChange={(e) =>
// //                         setFormData({ ...formData, source: e.target.value })
// //                       }
// //                       className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all appearance-none bg-white"
// //                     >
// //                       <option value="">Select...</option>
// //                       <option value="LinkedIn">LinkedIn</option>
// //                       <option value="Referral">Referral</option>
// //                       <option value="Company Website">Company Website</option>
// //                     </select>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Section 2: Resume Upload */}
// //               <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
// //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// //                   Resume
// //                 </h4>
// //                 <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                   Upload Resume *
// //                 </label>
// //                 <div
// //                   onDragOver={(e) => {
// //                     e.preventDefault();
// //                     setIsDragging(true);
// //                   }}
// //                   onDragLeave={() => setIsDragging(false)}
// //                   onDrop={handleDrop}
// //                   className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${isDragging ? "border-[#12324f] bg-[#12324f]/5" : "border-[#E5E7EB] hover:border-[#12324f]"}`}
// //                   onClick={() => document.getElementById("fileInput").click()}
// //                 >
// //                   {formData.resume ? (
// //                     <div className="flex items-center justify-center gap-4 text-left">
// //                       <div className="w-12 h-12 bg-[#12324f]/10 rounded-xl flex items-center justify-center">
// //                         <FaFileAlt size={20} className="text-[#12324f]" />
// //                       </div>
// //                       <div>
// //                         <p className="font-semibold text-[#111827]">
// //                           {formData.resume.name}
// //                         </p>
// //                         <p className="text-xs text-[#6B7280]">
// //                           {(formData.resume.size / 1024).toFixed(1)} KB • Ready
// //                           to submit
// //                         </p>
// //                       </div>
// //                     </div>
// //                   ) : (
// //                     <>
// //                       <FaCloudUploadAlt
// //                         size={32}
// //                         className="mx-auto text-[#9CA3AF] mb-3"
// //                       />
// //                       <p className="font-semibold text-[#111827] mb-1">
// //                         Drag & drop your resume here
// //                       </p>
// //                       <p className="text-sm text-[#6B7280]">
// //                         or click to browse files
// //                       </p>
// //                       <p className="text-xs text-[#9CA3AF] mt-3">
// //                         PDF, DOC, DOCX (Max 5MB)
// //                       </p>
// //                     </>
// //                   )}
// //                   <input
// //                     type="file"
// //                     id="fileInput"
// //                     className="hidden"
// //                     onChange={(e) => handleFileChange(e.target.files[0])}
// //                     accept=".pdf,.doc,.docx"
// //                   />
// //                 </div>
// //                 {errors.resume && (
// //                   <p className="text-[#EF4444] text-xs mt-2">{errors.resume}</p>
// //                 )}
// //               </div>

// //               {/* Section 3: Portfolio Links */}
// //               <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
// //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// //                   Portfolio & Links
// //                 </h4>
// //                 <div className="space-y-5">
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       LinkedIn Profile
// //                     </label>
// //                     <div className="relative">
// //                       <FaLinkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="url"
// //                         placeholder="https://linkedin.com/in/username"
// //                         value={formData.linkedin}
// //                         onChange={(e) =>
// //                           setFormData({ ...formData, linkedin: e.target.value })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       GitHub Profile
// //                     </label>
// //                     <div className="relative">
// //                       <FaGithub className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="url"
// //                         placeholder="https://github.com/username"
// //                         value={formData.github}
// //                         onChange={(e) =>
// //                           setFormData({ ...formData, github: e.target.value })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Personal Website / Portfolio
// //                     </label>
// //                     <div className="relative">
// //                       <FaGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="url"
// //                         placeholder="https://yourportfolio.com"
// //                         value={formData.website}
// //                         onChange={(e) =>
// //                           setFormData({ ...formData, website: e.target.value })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Section 4: Work Authorization & Visa Status (US only) */}
// //               {formData.country === "United States" && (
// //                 <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
// //                   <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// //                     Work Authorization & Visa Status
// //                   </h4>
// //                   <div className="space-y-6">
// //                     {/* Authorization */}
// //                     <div>
// //                       <label className="block text-sm font-semibold text-[#111827] mb-3">
// //                         Are you legally authorized to work in the United States?
// //                         *
// //                       </label>
// //                       <div className="flex gap-6">
// //                         <label className="flex items-center gap-2 cursor-pointer">
// //                           <input
// //                             type="radio"
// //                             name="authorizedToWork"
// //                             value="Yes"
// //                             checked={formData.authorizedToWork === "Yes"}
// //                             onChange={(e) =>
// //                               setFormData({
// //                                 ...formData,
// //                                 authorizedToWork: e.target.value,
// //                               })
// //                             }
// //                             className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// //                           />
// //                           <span className="text-sm text-[#111827]">Yes</span>
// //                         </label>
// //                         <label className="flex items-center gap-2 cursor-pointer">
// //                           <input
// //                             type="radio"
// //                             name="authorizedToWork"
// //                             value="No"
// //                             checked={formData.authorizedToWork === "No"}
// //                             onChange={(e) =>
// //                               setFormData({
// //                                 ...formData,
// //                                 authorizedToWork: e.target.value,
// //                               })
// //                             }
// //                             className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// //                           />
// //                           <span className="text-sm text-[#111827]">No</span>
// //                         </label>
// //                       </div>
// //                       {errors.authorizedToWork && (
// //                         <p className="text-[#EF4444] text-xs mt-2">
// //                           {errors.authorizedToWork}
// //                         </p>
// //                       )}
// //                     </div>

// //                     {/* Sponsorship */}
// //                     <div>
// //                       <label className="block text-sm font-semibold text-[#111827] mb-3">
// //                         Will you now, or in the future, require sponsorship for
// //                         employment visa status (e.g., H-1B)? *
// //                       </label>
// //                       <div className="flex gap-6">
// //                         <label className="flex items-center gap-2 cursor-pointer">
// //                           <input
// //                             type="radio"
// //                             name="requiresSponsorship"
// //                             value="Yes"
// //                             checked={formData.requiresSponsorship === "Yes"}
// //                             onChange={(e) =>
// //                               setFormData({
// //                                 ...formData,
// //                                 requiresSponsorship: e.target.value,
// //                               })
// //                             }
// //                             className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// //                           />
// //                           <span className="text-sm text-[#111827]">Yes</span>
// //                         </label>
// //                         <label className="flex items-center gap-2 cursor-pointer">
// //                           <input
// //                             type="radio"
// //                             name="requiresSponsorship"
// //                             value="No"
// //                             checked={formData.requiresSponsorship === "No"}
// //                             onChange={(e) =>
// //                               setFormData({
// //                                 ...formData,
// //                                 requiresSponsorship: e.target.value,
// //                               })
// //                             }
// //                             className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// //                           />
// //                           <span className="text-sm text-[#111827]">No</span>
// //                         </label>
// //                       </div>
// //                       {errors.requiresSponsorship && (
// //                         <p className="text-[#EF4444] text-xs mt-2">
// //                           {errors.requiresSponsorship}
// //                         </p>
// //                       )}
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}

// //               {/* Section 5: Cover Letter (always visible) */}
// //               <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
// //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// //                   Additional Information
// //                 </h4>
// //                 <div>
// //                   <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                     Why are you interested in this role?
// //                   </label>
// //                   <textarea
// //                     rows={5}
// //                     placeholder="Tell us why you'd be a great fit..."
// //                     value={formData.coverLetter}
// //                     onChange={(e) =>
// //                       setFormData({
// //                         ...formData,
// //                         coverLetter: e.target.value,
// //                       })
// //                     }
// //                     className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all resize-none"
// //                   ></textarea>
// //                 </div>
// //               </div>

// //               {/* Server Error Display */}
// //               {submitError && (
// //                 <div className="flex items-start gap-2 bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] text-sm rounded-lg p-3">
// //                   <FaExclamationTriangle className="mt-0.5 flex-shrink-0" />
// //                   <span>{submitError}</span>
// //                 </div>
// //               )}
// //             </div>

// //             {/* Form Actions Footer */}
// //             <div className="flex justify-end items-center p-6 bg-white border-t border-[#E5E7EB] gap-4 sticky bottom-0">
// //               <Button
// //                 type="button"
// //                 variant="ghost"
// //                 onClick={onClose}
// //                 disabled={isSubmitting}
// //               >
// //                 Cancel
// //               </Button>
// //               <Button type="submit" disabled={isSubmitting}>
// //                 {isSubmitting ? (
// //                   <>
// //                     <FaSpinner className="animate-spin" /> Submitting...
// //                   </>
// //                 ) : (
// //                   <>
// //                     Submit Application <FaCheckCircle className="ml-1" />
// //                   </>
// //                 )}
// //               </Button>
// //             </div>
// //           </form>
// //         )}
// //       </div>
// //     </div>
// //   );
// // });

// // export default ApplicationFlow;

// // import React, { useState, memo } from "react";
// // import {
// //   FaTimes,
// //   FaCheckCircle,
// //   FaCloudUploadAlt,
// //   FaFileAlt,
// //   FaUser,
// //   FaEnvelope,
// //   FaPhone,
// //   FaLinkedin,
// //   FaGithub,
// //   FaGlobe,
// //   FaSpinner,
// //   FaExclamationTriangle,
// //   FaBriefcase,
// //   FaMapMarkerAlt,
// //   FaDollarSign,
// //   FaRupeeSign,
// //   FaCalendarAlt,
// // } from "react-icons/fa";
// // import { Button } from "../common/Button";
// // import { submitApplication } from "../../api/careersApi";

// // const ApplicationFlow = memo(({ selectedJob, onClose }) => {
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     email: "",
// //     phone: "",
// //     experience: "",
// //     country: "",
// //     currentLocation: "",
// //     salaryExpectation: "",
// //     availability: "",
// //     source: "",
// //     resume: null,
// //     linkedin: "",
// //     github: "",
// //     website: "",
// //     authorizedToWork: "",
// //     requiresSponsorship: "",
// //     coverLetter: "",
// //   });
// //   const [errors, setErrors] = useState({});
// //   const [isDragging, setIsDragging] = useState(false);
// //   const [submitted, setSubmitted] = useState(false);
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [submitError, setSubmitError] = useState(null);

// //   if (!selectedJob) return null;

// //   // Requires at least one letter [a-zA-Z] before the @ sign
// //   const emailRegex =
// //     /^(?=.*[a-zA-Z])[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// //   const validateForm = () => {
// //     let tempErrors = {};

// //     if (!formData.fullName.trim()) {
// //       tempErrors.fullName = "Full name is required";
// //     }

// //     if (!formData.email.trim()) {
// //       tempErrors.email = "Email address is required";
// //     } else if (!emailRegex.test(formData.email.trim())) {
// //       tempErrors.email = "Please enter a valid email address";
// //     }

// //     if (!formData.country) {
// //       tempErrors.country = "Please select your country";
// //     }

// //     if (!formData.resume) {
// //       tempErrors.resume = "Please upload your resume";
// //     }

// //     // Only validate US-specific questions for US applicants
// //     if (formData.country === "United States") {
// //       if (!formData.authorizedToWork) {
// //         tempErrors.authorizedToWork = "Please select an option.";
// //       }
// //       if (!formData.requiresSponsorship) {
// //         tempErrors.requiresSponsorship = "Please select an option.";
// //       }
// //     }

// //     setErrors(tempErrors);
// //     return Object.keys(tempErrors).length === 0;
// //   };
// //   // const validateForm = () => {
// //   //   let tempErrors = {};

// //   //   if (!formData.fullName.trim())
// //   //     tempErrors.fullName = "Full name is required";

// //   //   if (!formData.email.trim()) tempErrors.email = "Email address is required";
// //   //   else if (!emailRegex.test(formData.email.trim()))
// //   //     tempErrors.email = "Please enter a valid email address";

// //   //   if (!formData.country) tempErrors.country = "Please select your country";
// //   //   if (!formData.resume) tempErrors.resume = "Please upload your resume";

// //   //   if (formData.country === "United States") {
// //   //     if (!formData.authorizedToWork)
// //   //       tempErrors.authorizedToWork = "Please select an option.";
// //   //     if (!formData.requiresSponsorship)
// //   //       tempErrors.requiresSponsorship = "Please select an option.";
// //   //   }

// //   //   setErrors(tempErrors);
// //   //   return Object.keys(tempErrors).length === 0;
// //   // };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!validateForm()) return;

// //     setIsSubmitting(true);
// //     setSubmitError(null);
// //     try {
// //       const nameParts = formData.fullName.trim().split(/\s+/);
// //       const firstName = nameParts[0] || formData.fullName.trim();
// //       const lastName = nameParts.slice(1).join(" ") || "-";

// //       let finalCoverLetter = formData.coverLetter || "";
// //       if (formData.github) {
// //         finalCoverLetter += `\n\nGitHub Profile: ${formData.github}`;
// //       }

// //       // Combine City, State and Country for the API payload
// //       const fullLocation = [formData.currentLocation, formData.country]
// //         .filter(Boolean)
// //         .join(", ");

// //       const payload = new FormData();
// //       payload.append("resume", formData.resume);
// //       payload.append("job_id", selectedJob.id);
// //       payload.append("first_name", firstName);
// //       payload.append("last_name", lastName);
// //       payload.append("email", formData.email);
// //       payload.append("phone", formData.phone);

// //       // Sending the combined location as requested
// //       payload.append("current_location", fullLocation);
// //       payload.append("country", formData.country);

// //       payload.append("linkedin", formData.linkedin);
// //       payload.append("portfolio", formData.website);
// //       payload.append("experience", formData.experience);
// //       payload.append("salary_expectation", formData.salaryExpectation);
// //       payload.append("availability", formData.availability);
// //       payload.append("source", formData.source);

// //       if (formData.country === "United States") {
// //         payload.append("authorized_to_work", formData.authorizedToWork);
// //         payload.append("requires_sponsorship", formData.requiresSponsorship);
// //       }

// //       payload.append("cover_letter", finalCoverLetter);

// //       await submitApplication(payload);
// //       setSubmitted(true);
// //     } catch (err) {
// //       setSubmitError(
// //         err.message ||
// //           "Something went wrong submitting your application. Please try again.",
// //       );
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   const handleFileChange = (file) => {
// //     if (!file) return;
// //     if (file.size < 5 * 1024 * 1024) {
// //       setFormData((prev) => ({ ...prev, resume: file }));
// //       setErrors((prev) => ({ ...prev, resume: null }));
// //     } else {
// //       setErrors((prev) => ({
// //         ...prev,
// //         resume: "Invalid file. Must be under 5MB.",
// //       }));
// //     }
// //   };

// //   const handleDrop = (e) => {
// //     e.preventDefault();
// //     setIsDragging(false);
// //     handleFileChange(e.dataTransfer.files[0]);
// //   };

// //   const handleCountryChange = (value) => {
// //     setFormData({
// //       ...formData,
// //       country: value,
// //       authorizedToWork: "",
// //       requiresSponsorship: "",
// //     });
// //     setErrors((prev) => ({
// //       ...prev,
// //       country: undefined,
// //       authorizedToWork: undefined,
// //       requiresSponsorship: undefined,
// //     }));
// //   };

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-[#0F172A]/60 backdrop-blur-sm">
// //       <div className="bg-white w-full max-w-3xl max-h-[96vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
// //         {/* Modal Header */}
// //         <div className="flex justify-between items-center p-4 border-b border-[#E5E7EB] sticky top-0 bg-white z-10">
// //           <div>
// //             <p className="text-sm text-[#6B7280] font-medium">Applying for</p>
// //             <h3 className="text-xl font-bold text-[#0F172A]">
// //               {selectedJob.title}
// //             </h3>
// //           </div>
// //           <button
// //             onClick={onClose}
// //             className="p-2 text-[#6B7280] hover:bg-[#F9FAFB] rounded-lg transition-colors"
// //           >
// //             <FaTimes size={20} />
// //           </button>
// //         </div>

// //         {submitted ? (
// //           <div className="p-12 text-center flex-1 flex flex-col items-center justify-center">
// //             <div className="w-16 h-16 bg-[#10B981]/10 rounded-full flex items-center justify-center mb-6">
// //               <FaCheckCircle size={32} className="text-[#10B981]" />
// //             </div>
// //             <h2 className="text-2xl font-bold text-[#0F172A] mb-3">
// //               Application Submitted!
// //             </h2>
// //             <p className="text-[#6B7280] max-w-md mb-8">
// //               Thank you for applying. Our talent acquisition team will review
// //               your application and get back to you within 5-7 business days.
// //             </p>
// //             <Button onClick={onClose}>Close</Button>
// //           </div>
// //         ) : (
// //           <form
// //             onSubmit={handleSubmit}
// //             className="flex-1 flex flex-col overflow-hidden"
// //           >
// //             <div className="flex-1 overflow-y-auto p-6 md:p-4 bg-[#F9FAFB] space-y-6">
// //               {/* Section 1: Personal Information & Preferences */}
// //               <div className="space-y-5 bg-white p-6 md:p-8 rounded-xl border border-[#E5E7EB] shadow-sm">
// //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// //                   Personal Information
// //                 </h4>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Full Name *
// //                     </label>
// //                     <div className="relative">
// //                       <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="text"
// //                         value={formData.fullName}
// //                         onChange={(e) =>
// //                           setFormData({ ...formData, fullName: e.target.value })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                     {errors.fullName && (
// //                       <p className="text-[#EF4444] text-xs mt-1.5">
// //                         {errors.fullName}
// //                       </p>
// //                     )}
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Email Address *
// //                     </label>
// //                     <div className="relative">
// //                       <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="email"
// //                         value={formData.email}
// //                         onChange={(e) =>
// //                           setFormData({ ...formData, email: e.target.value })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                     {errors.email && (
// //                       <p className="text-[#EF4444] text-xs mt-1.5">
// //                         {errors.email}
// //                       </p>
// //                     )}
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Phone Number
// //                     </label>
// //                     <div className="relative">
// //                       <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="tel"
// //                         value={formData.phone}
// //                         onChange={(e) =>
// //                           setFormData({ ...formData, phone: e.target.value })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Country *
// //                     </label>
// //                     <select
// //                       value={formData.country}
// //                       onChange={(e) => handleCountryChange(e.target.value)}
// //                       className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all appearance-none bg-white"
// //                     >
// //                       <option value="">Select country...</option>
// //                       <option value="India">India</option>
// //                       <option value="United States">United States</option>
// //                     </select>
// //                     {errors.country && (
// //                       <p className="text-[#EF4444] text-xs mt-1.5">
// //                         {errors.country}
// //                       </p>
// //                     )}
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Current Location
// //                     </label>
// //                     <div className="relative">
// //                       <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="text"
// //                         placeholder={
// //                           formData.country === "India"
// //                             ? "City, State (e.g. Hyderabad, Telangana)"
// //                             : formData.country === "United States"
// //                               ? "City, State (e.g. Austin, TX)"
// //                               : "City, State"
// //                         }
// //                         value={formData.currentLocation}
// //                         onChange={(e) =>
// //                           setFormData({
// //                             ...formData,
// //                             currentLocation: e.target.value,
// //                           })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Years of Experience
// //                     </label>
// //                     <div className="relative">
// //                       <FaBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="text"
// //                         placeholder="e.g. 2 years"
// //                         value={formData.experience}
// //                         onChange={(e) =>
// //                           setFormData({
// //                             ...formData,
// //                             experience: e.target.value,
// //                           })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Salary Expectation{" "}
// //                       {formData.country === "India" ? "(INR)" : "(USD)"}
// //                     </label>
// //                     <div className="relative">
// //                       {formData.country === "India" ? (
// //                         <FaRupeeSign className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       ) : (
// //                         <FaDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       )}
// //                       <input
// //                         type="text"
// //                         placeholder={
// //                           formData.country === "India"
// //                             ? "e.g. 8,00,000"
// //                             : "e.g. 80,000"
// //                         }
// //                         value={formData.salaryExpectation}
// //                         onChange={(e) =>
// //                           setFormData({
// //                             ...formData,
// //                             salaryExpectation: e.target.value,
// //                           })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Availability
// //                     </label>
// //                     <div className="relative">
// //                       <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <select
// //                         value={formData.availability}
// //                         onChange={(e) =>
// //                           setFormData({
// //                             ...formData,
// //                             availability: e.target.value,
// //                           })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all appearance-none bg-white"
// //                       >
// //                         <option value="">Select...</option>
// //                         <option value="Immediately">Immediately</option>
// //                         <option value="2 weeks">2 Weeks Notice</option>
// //                         <option value="1 month">1 Month Notice</option>
// //                         <option value="3 months">3 Months Notice</option>
// //                       </select>
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       How did you hear about us?
// //                     </label>
// //                     <select
// //                       value={formData.source}
// //                       onChange={(e) =>
// //                         setFormData({ ...formData, source: e.target.value })
// //                       }
// //                       className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all appearance-none bg-white"
// //                     >
// //                       <option value="">Select...</option>
// //                       <option value="LinkedIn">LinkedIn</option>
// //                       <option value="Referral">Referral</option>
// //                       <option value="Company Website">Company Website</option>
// //                     </select>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Section 2: Resume Upload */}
// //               <div className="bg-white p-6 md:p-8 rounded-xl border border-[#E5E7EB] shadow-sm">
// //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// //                   Resume
// //                 </h4>
// //                 <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                   Upload Resume *
// //                 </label>
// //                 <div
// //                   onDragOver={(e) => {
// //                     e.preventDefault();
// //                     setIsDragging(true);
// //                   }}
// //                   onDragLeave={() => setIsDragging(false)}
// //                   onDrop={handleDrop}
// //                   className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${isDragging ? "border-[#12324f] bg-[#12324f]/5" : "border-[#E5E7EB] hover:border-[#12324f]"}`}
// //                   onClick={() => document.getElementById("fileInput").click()}
// //                 >
// //                   {formData.resume ? (
// //                     <div className="flex items-center justify-center gap-4 text-left">
// //                       <div className="w-12 h-12 bg-[#12324f]/10 rounded-xl flex items-center justify-center">
// //                         <FaFileAlt size={20} className="text-[#12324f]" />
// //                       </div>
// //                       <div>
// //                         <p className="font-semibold text-[#111827]">
// //                           {formData.resume.name}
// //                         </p>
// //                         <p className="text-xs text-[#6B7280]">
// //                           {(formData.resume.size / 1024).toFixed(1)} KB • Ready
// //                           to submit
// //                         </p>
// //                       </div>
// //                     </div>
// //                   ) : (
// //                     <>
// //                       <FaCloudUploadAlt
// //                         size={32}
// //                         className="mx-auto text-[#9CA3AF] mb-3"
// //                       />
// //                       <p className="font-semibold text-[#111827] mb-1">
// //                         Drag & drop your resume here
// //                       </p>
// //                       <p className="text-sm text-[#6B7280]">
// //                         or click to browse files
// //                       </p>
// //                       <p className="text-xs text-[#9CA3AF] mt-3">
// //                         PDF, DOC, DOCX (Max 5MB)
// //                       </p>
// //                     </>
// //                   )}
// //                   <input
// //                     type="file"
// //                     id="fileInput"
// //                     className="hidden"
// //                     onChange={(e) => handleFileChange(e.target.files[0])}
// //                     accept=".pdf,.doc,.docx"
// //                   />
// //                 </div>
// //                 {errors.resume && (
// //                   <p className="text-[#EF4444] text-xs mt-2">{errors.resume}</p>
// //                 )}
// //               </div>

// //               {/* Section 3: Portfolio Links */}
// //               <div className="bg-white p-6 md:p-8 rounded-xl border border-[#E5E7EB] shadow-sm">
// //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// //                   Portfolio & Links
// //                 </h4>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       LinkedIn Profile
// //                     </label>
// //                     <div className="relative">
// //                       <FaLinkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="url"
// //                         placeholder="https://linkedin.com/in/username"
// //                         value={formData.linkedin}
// //                         onChange={(e) =>
// //                           setFormData({ ...formData, linkedin: e.target.value })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       GitHub Profile
// //                     </label>
// //                     <div className="relative">
// //                       <FaGithub className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="url"
// //                         placeholder="https://github.com/username"
// //                         value={formData.github}
// //                         onChange={(e) =>
// //                           setFormData({ ...formData, github: e.target.value })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div className="md:col-span-2">
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Personal Website / Portfolio
// //                     </label>
// //                     <div className="relative">
// //                       <FaGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="url"
// //                         placeholder="https://yourportfolio.com"
// //                         value={formData.website}
// //                         onChange={(e) =>
// //                           setFormData({ ...formData, website: e.target.value })
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Section 4: Work Authorization & Visa Status (US only) */}
// //               {formData.country === "United States" && (
// //                 <div className="bg-white p-6 md:p-8 rounded-xl border border-[#E5E7EB] shadow-sm">
// //                   <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// //                     Work Authorization & Visa Status
// //                   </h4>
// //                   <div className="space-y-6">
// //                     <div>
// //                       <label className="block text-sm font-semibold text-[#111827] mb-3">
// //                         Are you legally authorized to work in the United States?
// //                         *
// //                       </label>
// //                       <div className="flex gap-6">
// //                         <label className="flex items-center gap-2 cursor-pointer">
// //                           <input
// //                             type="radio"
// //                             name="authorizedToWork"
// //                             value="Yes"
// //                             checked={formData.authorizedToWork === "Yes"}
// //                             onChange={(e) =>
// //                               setFormData({
// //                                 ...formData,
// //                                 authorizedToWork: e.target.value,
// //                               })
// //                             }
// //                             className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// //                           />
// //                           <span className="text-sm text-[#111827]">Yes</span>
// //                         </label>
// //                         <label className="flex items-center gap-2 cursor-pointer">
// //                           <input
// //                             type="radio"
// //                             name="authorizedToWork"
// //                             value="No"
// //                             checked={formData.authorizedToWork === "No"}
// //                             onChange={(e) =>
// //                               setFormData({
// //                                 ...formData,
// //                                 authorizedToWork: e.target.value,
// //                               })
// //                             }
// //                             className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// //                           />
// //                           <span className="text-sm text-[#111827]">No</span>
// //                         </label>
// //                       </div>
// //                       {errors.authorizedToWork && (
// //                         <p className="text-[#EF4444] text-xs mt-2">
// //                           {errors.authorizedToWork}
// //                         </p>
// //                       )}
// //                     </div>

// //                     <div>
// //                       <label className="block text-sm font-semibold text-[#111827] mb-3">
// //                         Will you now, or in the future, require sponsorship for
// //                         employment visa status (e.g., H-1B)? *
// //                       </label>
// //                       <div className="flex gap-6">
// //                         <label className="flex items-center gap-2 cursor-pointer">
// //                           <input
// //                             type="radio"
// //                             name="requiresSponsorship"
// //                             value="Yes"
// //                             checked={formData.requiresSponsorship === "Yes"}
// //                             onChange={(e) =>
// //                               setFormData({
// //                                 ...formData,
// //                                 requiresSponsorship: e.target.value,
// //                               })
// //                             }
// //                             className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// //                           />
// //                           <span className="text-sm text-[#111827]">Yes</span>
// //                         </label>
// //                         <label className="flex items-center gap-2 cursor-pointer">
// //                           <input
// //                             type="radio"
// //                             name="requiresSponsorship"
// //                             value="No"
// //                             checked={formData.requiresSponsorship === "No"}
// //                             onChange={(e) =>
// //                               setFormData({
// //                                 ...formData,
// //                                 requiresSponsorship: e.target.value,
// //                               })
// //                             }
// //                             className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// //                           />
// //                           <span className="text-sm text-[#111827]">No</span>
// //                         </label>
// //                       </div>
// //                       {errors.requiresSponsorship && (
// //                         <p className="text-[#EF4444] text-xs mt-2">
// //                           {errors.requiresSponsorship}
// //                         </p>
// //                       )}
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}

// //               {/* Section 5: Additional Information */}
// //               <div className="bg-white p-6 md:p-8 rounded-xl border border-[#E5E7EB] shadow-sm">
// //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// //                   Additional Information
// //                 </h4>
// //                 <div>
// //                   <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                     Why are you interested in this role?
// //                   </label>
// //                   <textarea
// //                     rows={5}
// //                     placeholder="Tell us why you'd be a great fit..."
// //                     value={formData.coverLetter}
// //                     onChange={(e) =>
// //                       setFormData({
// //                         ...formData,
// //                         coverLetter: e.target.value,
// //                       })
// //                     }
// //                     className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all resize-none"
// //                   ></textarea>
// //                 </div>
// //               </div>

// //               {submitError && (
// //                 <div className="flex items-start gap-2 bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] text-sm rounded-lg p-3">
// //                   <FaExclamationTriangle className="mt-0.5 flex-shrink-0" />
// //                   <span>{submitError}</span>
// //                 </div>
// //               )}
// //             </div>

// //             <div className="flex justify-end items-center p-6 bg-white border-t border-[#E5E7EB] gap-4 sticky bottom-0">
// //               <Button
// //                 type="button"
// //                 variant="ghost"
// //                 onClick={onClose}
// //                 disabled={isSubmitting}
// //               >
// //                 Cancel
// //               </Button>
// //               <Button type="submit" disabled={isSubmitting}>
// //                 {isSubmitting ? (
// //                   <>
// //                     <FaSpinner className="animate-spin" /> Submitting...
// //                   </>
// //                 ) : (
// //                   <>
// //                     Submit Application <FaCheckCircle className="ml-1" />
// //                   </>
// //                 )}
// //               </Button>
// //             </div>
// //           </form>
// //         )}
// //       </div>
// //     </div>
// //   );
// // });

// // export default ApplicationFlow;

// // import React, { useState, memo, useRef } from "react";
// // import {
// //   FaTimes,
// //   FaCheckCircle,
// //   FaCloudUploadAlt,
// //   FaFileAlt,
// //   FaUser,
// //   FaEnvelope,
// //   FaPhone,
// //   FaLinkedin,
// //   FaGithub,
// //   FaGlobe,
// //   FaSpinner,
// //   FaExclamationTriangle,
// //   FaBriefcase,
// //   FaMapMarkerAlt,
// //   FaDollarSign,
// //   FaRupeeSign,
// //   FaCalendarAlt,
// // } from "react-icons/fa";
// // import { Button } from "../common/Button";
// // import { submitApplication } from "../../api/careersApi";

// // const ApplicationFlow = memo(({ selectedJob, onClose }) => {
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     email: "",
// //     phone: "",
// //     experience: "",
// //     country: "",
// //     currentLocation: "",
// //     salaryExpectation: "",
// //     availability: "",
// //     source: "",
// //     resume: null,
// //     linkedin: "",
// //     github: "",
// //     website: "",
// //     authorizedToWork: "",
// //     requiresSponsorship: "",
// //     coverLetter: "",
// //   });
// //   const [errors, setErrors] = useState({});
// //   const [isDragging, setIsDragging] = useState(false);
// //   const [submitted, setSubmitted] = useState(false);
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [submitError, setSubmitError] = useState(null);
// //   const [showValidationError, setShowValidationError] = useState(false);

// //   const scrollRef = useRef(null);

// //   if (!selectedJob) return null;

// //   // Regex to require at least one letter specifically BEFORE the @ symbol
// //   const emailRegex =
// //     /^[a-zA-Z0-9._%+-]*[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// //   const validateForm = () => {
// //     let tempErrors = {};

// //     if (!formData.fullName.trim()) {
// //       tempErrors.fullName = "Full name is required";
// //     }

// //     if (!formData.email.trim()) {
// //       tempErrors.email = "Email address is required";
// //     } else if (!emailRegex.test(formData.email.trim())) {
// //       tempErrors.email = "Please enter a valid email address";
// //     }

// //     if (!formData.country) {
// //       tempErrors.country = "Please select your country";
// //     }

// //     if (!formData.resume) {
// //       tempErrors.resume = "Please upload your resume";
// //     }

// //     if (formData.country === "United States") {
// //       if (!formData.authorizedToWork) {
// //         tempErrors.authorizedToWork = "Please select an option.";
// //       }
// //       if (!formData.requiresSponsorship) {
// //         tempErrors.requiresSponsorship = "Please select an option.";
// //       }
// //     }

// //     setErrors(tempErrors);
// //     return Object.keys(tempErrors).length === 0;
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const isValid = validateForm();

// //     if (!isValid) {
// //       setShowValidationError(true);
// //       // Scroll to top so user can see the error banner and missed fields
// //       if (scrollRef.current) {
// //         scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
// //       }
// //       return;
// //     }

// //     setShowValidationError(false);
// //     setIsSubmitting(true);
// //     setSubmitError(null);
// //     try {
// //       const nameParts = formData.fullName.trim().split(/\s+/);
// //       const firstName = nameParts[0] || formData.fullName.trim();
// //       const lastName = nameParts.slice(1).join(" ") || "-";

// //       let finalCoverLetter = formData.coverLetter || "";
// //       if (formData.github) {
// //         finalCoverLetter += `\n\nGitHub Profile: ${formData.github}`;
// //       }

// //       const fullLocation = [formData.currentLocation, formData.country]
// //         .filter(Boolean)
// //         .join(", ");

// //       const payload = new FormData();
// //       payload.append("resume", formData.resume);
// //       payload.append("job_id", selectedJob.id);
// //       payload.append("first_name", firstName);
// //       payload.append("last_name", lastName);
// //       payload.append("email", formData.email);
// //       payload.append("phone", formData.phone);
// //       payload.append("current_location", fullLocation);
// //       payload.append("country", formData.country);
// //       payload.append("linkedin", formData.linkedin);
// //       payload.append("portfolio", formData.website);
// //       payload.append("experience", formData.experience);
// //       payload.append("salary_expectation", formData.salaryExpectation);
// //       payload.append("availability", formData.availability);
// //       payload.append("source", formData.source);

// //       if (formData.country === "United States") {
// //         payload.append("authorized_to_work", formData.authorizedToWork);
// //         payload.append("requires_sponsorship", formData.requiresSponsorship);
// //       }

// //       payload.append("cover_letter", finalCoverLetter);

// //       await submitApplication(payload);
// //       setSubmitted(true);
// //     } catch (err) {
// //       setSubmitError(
// //         err.message ||
// //           "Something went wrong submitting your application. Please try again.",
// //       );
// //       if (scrollRef.current) {
// //         scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
// //       }
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   const handleFileChange = (file) => {
// //     if (!file) return;
// //     if (file.size < 5 * 1024 * 1024) {
// //       setFormData((prev) => ({ ...prev, resume: file }));
// //       setErrors((prev) => ({ ...prev, resume: null }));
// //       setShowValidationError(false);
// //     } else {
// //       setErrors((prev) => ({
// //         ...prev,
// //         resume: "Invalid file. Must be under 5MB.",
// //       }));
// //     }
// //   };

// //   const handleDrop = (e) => {
// //     e.preventDefault();
// //     setIsDragging(false);
// //     handleFileChange(e.dataTransfer.files[0]);
// //   };

// //   const handleCountryChange = (value) => {
// //     setFormData({
// //       ...formData,
// //       country: value,
// //       authorizedToWork: "",
// //       requiresSponsorship: "",
// //     });
// //     setErrors((prev) => ({
// //       ...prev,
// //       country: undefined,
// //       authorizedToWork: undefined,
// //       requiresSponsorship: undefined,
// //     }));
// //     setShowValidationError(false);
// //   };

// //   const handleChange = (field, value) => {
// //     setFormData((prev) => ({ ...prev, [field]: value }));
// //     if (errors[field]) {
// //       setErrors((prev) => ({ ...prev, [field]: undefined }));
// //     }
// //     setShowValidationError(false);
// //   };

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-[#0F172A]/60 backdrop-blur-sm">
// //       <div className="bg-white w-full max-w-3xl max-h-[96vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
// //         {/* Modal Header */}
// //         <div className="flex justify-between items-center p-4 border-b border-[#E5E7EB] sticky top-0 bg-white z-10">
// //           <div>
// //             <p className="text-sm text-[#6B7280] font-medium">Applying for</p>
// //             <h3 className="text-xl font-bold text-[#0F172A]">
// //               {selectedJob.title}
// //             </h3>
// //           </div>
// //           <button
// //             onClick={onClose}
// //             className="p-2 text-[#6B7280] hover:bg-[#F9FAFB] rounded-lg transition-colors"
// //           >
// //             <FaTimes size={20} />
// //           </button>
// //         </div>

// //         {submitted ? (
// //           <div className="p-12 text-center flex-1 flex flex-col items-center justify-center">
// //             <div className="w-16 h-16 bg-[#10B981]/10 rounded-full flex items-center justify-center mb-6">
// //               <FaCheckCircle size={32} className="text-[#10B981]" />
// //             </div>
// //             <h2 className="text-2xl font-bold text-[#0F172A] mb-3">
// //               Application Submitted!
// //             </h2>
// //             <p className="text-[#6B7280] max-w-md mb-8">
// //               Thank you for applying. Our talent acquisition team will review
// //               your application and get back to you within 5-7 business days.
// //             </p>
// //             <Button onClick={onClose}>Close</Button>
// //           </div>
// //         ) : (
// //           <form
// //             onSubmit={handleSubmit}
// //             noValidate
// //             className="flex-1 flex flex-col overflow-hidden"
// //           >
// //             <div
// //               ref={scrollRef}
// //               className="flex-1 overflow-y-auto p-6 md:p-4 bg-[#F9FAFB] space-y-6"
// //             >
// //               {/* Top Level Validation Error Banner */}
// //               {showValidationError && (
// //                 <div className="flex items-start gap-2 bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] text-sm rounded-lg p-3 sticky top-0 z-10 shadow-sm">
// //                   <FaExclamationTriangle className="mt-0.5 flex-shrink-0" />
// //                   <span>
// //                     Please fill in all required fields correctly before
// //                     submitting.
// //                   </span>
// //                 </div>
// //               )}

// //               {/* Server Error Display */}
// //               {submitError && (
// //                 <div className="flex items-start gap-2 bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] text-sm rounded-lg p-3">
// //                   <FaExclamationTriangle className="mt-0.5 flex-shrink-0" />
// //                   <span>{submitError}</span>
// //                 </div>
// //               )}

// //               {/* Section 1: Personal Information & Preferences */}
// //               <div className="space-y-5 bg-white p-6 md:p-8 rounded-xl border border-[#E5E7EB] shadow-sm">
// //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// //                   Personal Information
// //                 </h4>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Full Name *
// //                     </label>
// //                     <div className="relative">
// //                       <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="text"
// //                         value={formData.fullName}
// //                         onChange={(e) =>
// //                           handleChange("fullName", e.target.value)
// //                         }
// //                         className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all ${errors.fullName ? "border-[#EF4444]" : "border-[#E5E7EB]"}`}
// //                       />
// //                     </div>
// //                     {errors.fullName && (
// //                       <p className="text-[#EF4444] text-xs mt-1.5">
// //                         {errors.fullName}
// //                       </p>
// //                     )}
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Email Address *
// //                     </label>
// //                     <div className="relative">
// //                       <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="email"
// //                         value={formData.email}
// //                         onChange={(e) =>
// //                           handleChange("email", e.target.value.toLowerCase())
// //                         }
// //                         className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all ${errors.email ? "border-[#EF4444]" : "border-[#E5E7EB]"}`}
// //                       />
// //                     </div>
// //                     {errors.email && (
// //                       <p className="text-[#EF4444] text-xs mt-1.5">
// //                         {errors.email}
// //                       </p>
// //                     )}
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Phone Number
// //                     </label>
// //                     <div className="relative">
// //                       <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="tel"
// //                         value={formData.phone}
// //                         onChange={(e) => handleChange("phone", e.target.value)}
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Country *
// //                     </label>
// //                     <select
// //                       value={formData.country}
// //                       onChange={(e) => handleCountryChange(e.target.value)}
// //                       className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all appearance-none bg-white ${errors.country ? "border-[#EF4444]" : "border-[#E5E7EB]"}`}
// //                     >
// //                       <option value="">Select country...</option>
// //                       <option value="India">India</option>
// //                       <option value="United States">United States</option>
// //                     </select>
// //                     {errors.country && (
// //                       <p className="text-[#EF4444] text-xs mt-1.5">
// //                         {errors.country}
// //                       </p>
// //                     )}
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Current Location
// //                     </label>
// //                     <div className="relative">
// //                       <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="text"
// //                         placeholder={
// //                           formData.country === "India"
// //                             ? "City, State (e.g. Hyderabad, Telangana)"
// //                             : formData.country === "United States"
// //                               ? "City, State (e.g. Austin, TX)"
// //                               : "City, State"
// //                         }
// //                         value={formData.currentLocation}
// //                         onChange={(e) =>
// //                           handleChange("currentLocation", e.target.value)
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Years of Experience
// //                     </label>
// //                     <div className="relative">
// //                       <FaBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="text"
// //                         placeholder="e.g. 2 years"
// //                         value={formData.experience}
// //                         onChange={(e) =>
// //                           handleChange("experience", e.target.value)
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Salary Expectation{" "}
// //                       {formData.country === "India" ? "(INR)" : "(USD)"}
// //                     </label>
// //                     <div className="relative">
// //                       {formData.country === "India" ? (
// //                         <FaRupeeSign className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       ) : (
// //                         <FaDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       )}
// //                       <input
// //                         type="text"
// //                         placeholder={
// //                           formData.country === "India"
// //                             ? "e.g. 8,00,000"
// //                             : "e.g. 80,000"
// //                         }
// //                         value={formData.salaryExpectation}
// //                         onChange={(e) =>
// //                           handleChange("salaryExpectation", e.target.value)
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Availability
// //                     </label>
// //                     <div className="relative">
// //                       <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <select
// //                         value={formData.availability}
// //                         onChange={(e) =>
// //                           handleChange("availability", e.target.value)
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all appearance-none bg-white"
// //                       >
// //                         <option value="">Select...</option>
// //                         <option value="Immediately">Immediately</option>
// //                         <option value="2 weeks">2 Weeks Notice</option>
// //                         <option value="1 month">1 Month Notice</option>
// //                         <option value="3 months">3 Months Notice</option>
// //                       </select>
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       How did you hear about us?
// //                     </label>
// //                     <select
// //                       value={formData.source}
// //                       onChange={(e) => handleChange("source", e.target.value)}
// //                       className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all appearance-none bg-white"
// //                     >
// //                       <option value="">Select...</option>
// //                       <option value="LinkedIn">LinkedIn</option>
// //                       <option value="Referral">Referral</option>
// //                       <option value="Company Website">Company Website</option>
// //                     </select>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Section 2: Resume Upload */}
// //               <div className="bg-white p-6 md:p-8 rounded-xl border border-[#E5E7EB] shadow-sm">
// //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// //                   Resume
// //                 </h4>
// //                 <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                   Upload Resume *
// //                 </label>
// //                 <div
// //                   onDragOver={(e) => {
// //                     e.preventDefault();
// //                     setIsDragging(true);
// //                   }}
// //                   onDragLeave={() => setIsDragging(false)}
// //                   onDrop={handleDrop}
// //                   className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${isDragging ? "border-[#12324f] bg-[#12324f]/5" : errors.resume ? "border-[#EF4444]" : "border-[#E5E7EB] hover:border-[#12324f]"}`}
// //                   onClick={() => document.getElementById("fileInput").click()}
// //                 >
// //                   {formData.resume ? (
// //                     <div className="flex items-center justify-center gap-4 text-left">
// //                       <div className="w-12 h-12 bg-[#12324f]/10 rounded-xl flex items-center justify-center">
// //                         <FaFileAlt size={20} className="text-[#12324f]" />
// //                       </div>
// //                       <div>
// //                         <p className="font-semibold text-[#111827]">
// //                           {formData.resume.name}
// //                         </p>
// //                         <p className="text-xs text-[#6B7280]">
// //                           {(formData.resume.size / 1024).toFixed(1)} KB • Ready
// //                           to submit
// //                         </p>
// //                       </div>
// //                     </div>
// //                   ) : (
// //                     <>
// //                       <FaCloudUploadAlt
// //                         size={32}
// //                         className="mx-auto text-[#9CA3AF] mb-3"
// //                       />
// //                       <p className="font-semibold text-[#111827] mb-1">
// //                         Drag & drop your resume here
// //                       </p>
// //                       <p className="text-sm text-[#6B7280]">
// //                         or click to browse files
// //                       </p>
// //                       <p className="text-xs text-[#9CA3AF] mt-3">
// //                         PDF, DOC, DOCX (Max 5MB)
// //                       </p>
// //                     </>
// //                   )}
// //                   <input
// //                     type="file"
// //                     id="fileInput"
// //                     className="hidden"
// //                     onChange={(e) => handleFileChange(e.target.files[0])}
// //                     accept=".pdf,.doc,.docx"
// //                   />
// //                 </div>
// //                 {errors.resume && (
// //                   <p className="text-[#EF4444] text-xs mt-2">{errors.resume}</p>
// //                 )}
// //               </div>

// //               {/* Section 3: Portfolio Links */}
// //               <div className="bg-white p-6 md:p-8 rounded-xl border border-[#E5E7EB] shadow-sm">
// //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// //                   Portfolio & Links
// //                 </h4>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       LinkedIn Profile
// //                     </label>
// //                     <div className="relative">
// //                       <FaLinkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="url"
// //                         placeholder="https://linkedin.com/in/username"
// //                         value={formData.linkedin}
// //                         onChange={(e) =>
// //                           handleChange("linkedin", e.target.value)
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       GitHub Profile
// //                     </label>
// //                     <div className="relative">
// //                       <FaGithub className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="url"
// //                         placeholder="https://github.com/username"
// //                         value={formData.github}
// //                         onChange={(e) => handleChange("github", e.target.value)}
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div className="md:col-span-2">
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Personal Website / Portfolio
// //                     </label>
// //                     <div className="relative">
// //                       <FaGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
// //                       <input
// //                         type="url"
// //                         placeholder="https://yourportfolio.com"
// //                         value={formData.website}
// //                         onChange={(e) =>
// //                           handleChange("website", e.target.value)
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Section 4: Work Authorization & Visa Status (US only) */}
// //               {formData.country === "United States" && (
// //                 <div className="bg-white p-6 md:p-8 rounded-xl border border-[#E5E7EB] shadow-sm">
// //                   <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// //                     Work Authorization & Visa Status
// //                   </h4>
// //                   <div className="space-y-6">
// //                     <div>
// //                       <label className="block text-sm font-semibold text-[#111827] mb-3">
// //                         Are you legally authorized to work in the United States?
// //                         *
// //                       </label>
// //                       <div className="flex gap-6">
// //                         <label className="flex items-center gap-2 cursor-pointer">
// //                           <input
// //                             type="radio"
// //                             name="authorizedToWork"
// //                             value="Yes"
// //                             checked={formData.authorizedToWork === "Yes"}
// //                             onChange={(e) =>
// //                               handleChange("authorizedToWork", e.target.value)
// //                             }
// //                             className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// //                           />
// //                           <span className="text-sm text-[#111827]">Yes</span>
// //                         </label>
// //                         <label className="flex items-center gap-2 cursor-pointer">
// //                           <input
// //                             type="radio"
// //                             name="authorizedToWork"
// //                             value="No"
// //                             checked={formData.authorizedToWork === "No"}
// //                             onChange={(e) =>
// //                               handleChange("authorizedToWork", e.target.value)
// //                             }
// //                             className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// //                           />
// //                           <span className="text-sm text-[#111827]">No</span>
// //                         </label>
// //                       </div>
// //                       {errors.authorizedToWork && (
// //                         <p className="text-[#EF4444] text-xs mt-2">
// //                           {errors.authorizedToWork}
// //                         </p>
// //                       )}
// //                     </div>

// //                     <div>
// //                       <label className="block text-sm font-semibold text-[#111827] mb-3">
// //                         Will you now, or in the future, require sponsorship for
// //                         employment visa status (e.g., H-1B)? *
// //                       </label>
// //                       <div className="flex gap-6">
// //                         <label className="flex items-center gap-2 cursor-pointer">
// //                           <input
// //                             type="radio"
// //                             name="requiresSponsorship"
// //                             value="Yes"
// //                             checked={formData.requiresSponsorship === "Yes"}
// //                             onChange={(e) =>
// //                               handleChange(
// //                                 "requiresSponsorship",
// //                                 e.target.value,
// //                               )
// //                             }
// //                             className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// //                           />
// //                           <span className="text-sm text-[#111827]">Yes</span>
// //                         </label>
// //                         <label className="flex items-center gap-2 cursor-pointer">
// //                           <input
// //                             type="radio"
// //                             name="requiresSponsorship"
// //                             value="No"
// //                             checked={formData.requiresSponsorship === "No"}
// //                             onChange={(e) =>
// //                               handleChange(
// //                                 "requiresSponsorship",
// //                                 e.target.value,
// //                               )
// //                             }
// //                             className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// //                           />
// //                           <span className="text-sm text-[#111827]">No</span>
// //                         </label>
// //                       </div>
// //                       {errors.requiresSponsorship && (
// //                         <p className="text-[#EF4444] text-xs mt-2">
// //                           {errors.requiresSponsorship}
// //                         </p>
// //                       )}
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}

// //               {/* Section 5: Additional Information */}
// //               <div className="bg-white p-6 md:p-8 rounded-xl border border-[#E5E7EB] shadow-sm">
// //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// //                   Additional Information
// //                 </h4>
// //                 <div>
// //                   <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                     Why are you interested in this role?
// //                   </label>
// //                   <textarea
// //                     rows={5}
// //                     placeholder="Tell us why you'd be a great fit..."
// //                     value={formData.coverLetter}
// //                     onChange={(e) =>
// //                       handleChange("coverLetter", e.target.value)
// //                     }
// //                     className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all resize-none"
// //                   ></textarea>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="flex justify-end items-center p-6 bg-white border-t border-[#E5E7EB] gap-4 sticky bottom-0">
// //               <Button
// //                 type="button"
// //                 variant="ghost"
// //                 onClick={onClose}
// //                 disabled={isSubmitting}
// //               >
// //                 Cancel
// //               </Button>
// //               <Button type="submit" disabled={isSubmitting}>
// //                 {isSubmitting ? (
// //                   <>
// //                     <FaSpinner className="animate-spin" /> Submitting...
// //                   </>
// //                 ) : (
// //                   <>
// //                     Submit Application <FaCheckCircle className="ml-1" />
// //                   </>
// //                 )}
// //               </Button>
// //             </div>
// //           </form>
// //         )}
// //       </div>
// //     </div>
// //   );
// // });

// // export default ApplicationFlow;

// // import React, { useState, memo, useRef } from "react";
// // import {
// //   FaTimes,
// //   FaCheckCircle,
// //   FaCloudUploadAlt,
// //   FaFileAlt,
// //   FaUser,
// //   FaEnvelope,
// //   FaPhone,
// //   FaLinkedin,
// //   FaGithub,
// //   FaGlobe,
// //   FaSpinner,
// //   FaExclamationTriangle,
// //   FaBriefcase,
// //   FaMapMarkerAlt,
// //   FaDollarSign,
// //   FaRupeeSign,
// //   FaCalendarAlt,
// // } from "react-icons/fa";
// // import { Button } from "../common/Button";
// // import { submitApplication } from "../../api/careersApi";

// // const ApplicationFlow = memo(({ selectedJob, onClose }) => {
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     email: "",
// //     phone: "",
// //     experience: "",
// //     country: "",
// //     currentLocation: "",
// //     salaryExpectation: "",
// //     availability: "",
// //     source: "",
// //     resume: null,
// //     linkedin: "",
// //     github: "",
// //     website: "",
// //     authorizedToWork: "",
// //     requiresSponsorship: "",
// //     coverLetter: "",
// //   });
// //   const [errors, setErrors] = useState({});
// //   const [isDragging, setIsDragging] = useState(false);
// //   const [submitted, setSubmitted] = useState(false);
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [submitError, setSubmitError] = useState(null);
// //   const [showValidationError, setShowValidationError] = useState(false);

// //   const scrollRef = useRef(null);

// //   // MNC Standard: Country Code Mapping
// //   const countryCodeMap = {
// //     India: "+91",
// //     "United States": "+1",
// //   };

// //   if (!selectedJob) return null;

// //   // Regex to require at least one letter specifically BEFORE the @ symbol
// //   const emailRegex =
// //     /^[a-zA-Z0-9._%+-]*[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// //   // MNC Standard: Field-level validation for onBlur
// //   const validateField = (name, value) => {
// //     let error = "";

// //     switch (name) {
// //       case "fullName":
// //         if (!value.trim()) error = "Full name is required";
// //         else if (!/^[A-Za-z\s]+$/.test(value.trim()))
// //           error = "Name must contain letters and spaces only";
// //         else if (value.trim().length < 3)
// //           error = "Please enter a valid full name";
// //         break;
// //       case "email":
// //         if (!value.trim()) error = "Email address is required";
// //         else if (!emailRegex.test(value.trim()))
// //           error = "Please enter a valid email address";
// //         break;
// //       case "phone":
// //         if (!value) error = "Phone number is required";
// //         else if (!/^\d+$/.test(value))
// //           error = "Phone number must contain digits only";
// //         else if (formData.country === "India" && value.length !== 10)
// //           error = "Indian phone numbers must be exactly 10 digits";
// //         else if (formData.country === "United States" && value.length !== 10)
// //           error = 0 ? false : true; // Fixed logic below
// //         // Proper US validation:
// //         if (formData.country === "United States" && value.length !== 10)
// //           error = "US phone numbers must be exactly 10 digits";
// //         break;
// //       case "country":
// //         if (!value) error = "Please select your country";
// //         break;
// //       default:
// //         break;
// //     }
// //     return error;
// //   };

// //   const validateForm = () => {
// //     let tempErrors = {};

// //     tempErrors.fullName = validateField("fullName", formData.fullName);
// //     tempErrors.email = validateField("email", formData.email);
// //     tempErrors.country = validateField("country", formData.country);

// //     // Phone validation
// //     if (!formData.phone) {
// //       tempErrors.phone = "Phone number is required";
// //     } else if (!/^\d+$/.test(formData.phone)) {
// //       tempErrors.phone = "Phone number must contain digits only";
// //     } else if (formData.country === "India" && formData.phone.length !== 10) {
// //       tempErrors.phone = "Indian phone numbers must be exactly 10 digits";
// //     } else if (
// //       formData.country === "United States" &&
// //       formData.phone.length !== 10
// //     ) {
// //       tempErrors.phone = "US phone numbers must be exactly 10 digits";
// //     }

// //     if (!formData.resume) {
// //       tempErrors.resume = "Please upload your resume";
// //     }

// //     if (formData.country === "United States") {
// //       if (!formData.authorizedToWork)
// //         tempErrors.authorizedToWork = "Please select an option.";
// //       if (!formData.requiresSponsorship)
// //         tempErrors.requiresSponsorship = "Please select an option.";
// //     }

// //     // Remove empty errors
// //     Object.keys(tempErrors).forEach(
// //       (key) => !tempErrors[key] && delete tempErrors[key],
// //     );

// //     setErrors(tempErrors);
// //     return Object.keys(tempErrors).length === 0;
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const isValid = validateForm();

// //     if (!isValid) {
// //       setShowValidationError(true);
// //       if (scrollRef.current) {
// //         scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
// //       }
// //       return;
// //     }

// //     setShowValidationError(false);
// //     setIsSubmitting(true);
// //     setSubmitError(null);
// //     try {
// //       const nameParts = formData.fullName.trim().split(/\s+/);
// //       const firstName = nameParts[0] || formData.fullName.trim();
// //       const lastName = nameParts.slice(1).join(" ") || "-";

// //       let finalCoverLetter = formData.coverLetter || "";
// //       if (formData.github) {
// //         finalCoverLetter += `\n\nGitHub Profile: ${formData.github}`;
// //       }

// //       const fullLocation = [formData.currentLocation, formData.country]
// //         .filter(Boolean)
// //         .join(", ");

// //       // Prepend country code to phone before sending to API
// //       const fullPhoneNumber = formData.country
// //         ? `${countryCodeMap[formData.country]} ${formData.phone}`
// //         : formData.phone;

// //       const payload = new FormData();
// //       payload.append("resume", formData.resume);
// //       payload.append("job_id", selectedJob.id);
// //       payload.append("first_name", firstName);
// //       payload.append("last_name", lastName);
// //       payload.append("email", formData.email);
// //       payload.append("phone", fullPhoneNumber);
// //       payload.append("current_location", fullLocation);
// //       payload.append("country", formData.country);
// //       payload.append("linkedin", formData.linkedin);
// //       payload.append("portfolio", formData.website);
// //       payload.append("experience", formData.experience);
// //       payload.append("salary_expectation", formData.salaryExpectation);
// //       payload.append("availability", formData.availability);
// //       payload.append("source", formData.source);

// //       if (formData.country === "United States") {
// //         payload.append("authorized_to_work", formData.authorizedToWork);
// //         payload.append("requires_sponsorship", formData.requiresSponsorship);
// //       }

// //       payload.append("cover_letter", finalCoverLetter);

// //       await submitApplication(payload);
// //       setSubmitted(true);
// //     } catch (err) {
// //       setSubmitError(
// //         err.message ||
// //           "Something went wrong submitting your application. Please try again.",
// //       );
// //       if (scrollRef.current) {
// //         scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
// //       }
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   const handleFileChange = (file) => {
// //     if (!file) return;
// //     if (file.size < 5 * 1024 * 1024) {
// //       setFormData((prev) => ({ ...prev, resume: file }));
// //       setErrors((prev) => ({ ...prev, resume: null }));
// //       setShowValidationError(false);
// //     } else {
// //       setErrors((prev) => ({
// //         ...prev,
// //         resume: "Invalid file. Must be under 5MB.",
// //       }));
// //     }
// //   };

// //   const handleDrop = (e) => {
// //     e.preventDefault();
// //     setIsDragging(false);
// //     handleFileChange(e.dataTransfer.files[0]);
// //   };

// //   const handleCountryChange = (value) => {
// //     setFormData((prev) => ({
// //       ...prev,
// //       country: value,
// //       phone: "", // Reset phone when country changes
// //       authorizedToWork: "",
// //       requiresSponsorship: "",
// //     }));
// //     setErrors((prev) => ({
// //       ...prev,
// //       country: undefined,
// //       phone: undefined,
// //       authorizedToWork: undefined,
// //       requiresSponsorship: undefined,
// //     }));
// //     setShowValidationError(false);
// //   };

// //   // MNC Standard: Handle input changes with specific restrictions
// //   const handleChange = (field, value) => {
// //     let sanitizedValue = value;

// //     if (field === "fullName") {
// //       // Allow only letters and spaces
// //       sanitizedValue = value.replace(/[^a-zA-Z\s]/g, "");
// //     } else if (field === "phone") {
// //       // Allow only numbers
// //       sanitizedValue = value.replace(/[^0-9]/g, "");
// //     } else if (field === "email") {
// //       sanitizedValue = value.toLowerCase();
// //     }

// //     setFormData((prev) => ({ ...prev, [field]: sanitizedValue }));

// //     // Clear error on change
// //     if (errors[field]) {
// //       setErrors((prev) => ({ ...prev, [field]: undefined }));
// //     }
// //     setShowValidationError(false);
// //   };

// //   // MNC Standard: Validate on blur
// //   const handleBlur = (field) => {
// //     const error = validateField(field, formData[field]);
// //     setErrors((prev) => ({ ...prev, [field]: error }));
// //   };

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-[#0F172A]/60 backdrop-blur-sm">
// //       <div className="bg-white w-full max-w-3xl max-h-[96vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
// //         {/* Modal Header */}
// //         <div className="flex justify-between items-center p-4 border-b border-[#E5E7EB] sticky top-0 bg-white z-10">
// //           <div>
// //             <p className="text-sm text-[#6B7280] font-medium">Applying for</p>
// //             <h3 className="text-xl font-bold text-[#0F172A]">
// //               {selectedJob.title}
// //             </h3>
// //           </div>
// //           <button
// //             onClick={onClose}
// //             className="p-2 text-[#6B7280] hover:bg-[#F9FAFB] rounded-lg transition-colors"
// //           >
// //             <FaTimes size={20} />
// //           </button>
// //         </div>

// //         {submitted ? (
// //           <div className="p-12 text-center flex-1 flex flex-col items-center justify-center">
// //             <div className="w-16 h-16 bg-[#10B981]/10 rounded-full flex items-center justify-center mb-6">
// //               <FaCheckCircle size={32} className="text-[#10B981]" />
// //             </div>
// //             <h2 className="text-2xl font-bold text-[#0F172A] mb-3">
// //               Application Submitted!
// //             </h2>
// //             <p className="text-[#6B7280] max-w-md mb-8">
// //               Thank you for applying. Our talent acquisition team will review
// //               your application and get back to you within 5-7 business days.
// //             </p>
// //             <Button onClick={onClose}>Close</Button>
// //           </div>
// //         ) : (
// //           <form
// //             onSubmit={handleSubmit}
// //             noValidate
// //             className="flex-1 flex flex-col overflow-hidden"
// //           >
// //             <div
// //               ref={scrollRef}
// //               className="flex-1 overflow-y-auto p-6 md:p-4 bg-[#F9FAFB] space-y-6"
// //             >
// //               {/* Top Level Validation Error Banner */}
// //               {showValidationError && (
// //                 <div className="flex items-start gap-2 bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] text-sm rounded-lg p-3 sticky top-0 z-10 shadow-sm">
// //                   <FaExclamationTriangle className="mt-0.5 flex-shrink-0" />
// //                   <span>
// //                     Please fill in all required fields correctly before
// //                     submitting.
// //                   </span>
// //                 </div>
// //               )}

// //               {/* Server Error Display */}
// //               {submitError && (
// //                 <div className="flex items-start gap-2 bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] text-sm rounded-lg p-3">
// //                   <FaExclamationTriangle className="mt-0.5 flex-shrink-0" />
// //                   <span>{submitError}</span>
// //                 </div>
// //               )}

// //               {/* Section 1: Personal Information & Preferences */}
// //               <div className="space-y-5 bg-white p-6 md:p-8 rounded-xl border border-[#E5E7EB] shadow-sm">
// //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// //                   Personal Information
// //                 </h4>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Full Name *
// //                     </label>
// //                     <div className="relative">
// //                       <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] z-10" />
// //                       <input
// //                         type="text"
// //                         value={formData.fullName}
// //                         onChange={(e) =>
// //                           handleChange("fullName", e.target.value)
// //                         }
// //                         onBlur={() => handleBlur("fullName")}
// //                         placeholder="Enter Full Name"
// //                         className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all ${errors.fullName ? "border-[#EF4444]" : "border-[#E5E7EB]"}`}
// //                       />
// //                     </div>
// //                     {errors.fullName && (
// //                       <p className="text-[#EF4444] text-xs mt-1.5">
// //                         {errors.fullName}
// //                       </p>
// //                     )}
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Email Address *
// //                     </label>
// //                     <div className="relative">
// //                       <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] z-10" />
// //                       <input
// //                         type="email"
// //                         value={formData.email}
// //                         onChange={(e) => handleChange("email", e.target.value)}
// //                         onBlur={() => handleBlur("email")}
// //                         placeholder="Enter Your Email"
// //                         className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all ${errors.email ? "border-[#EF4444]" : "border-[#E5E7EB]"}`}
// //                       />
// //                     </div>
// //                     {errors.email && (
// //                       <p className="text-[#EF4444] text-xs mt-1.5">
// //                         {errors.email}
// //                       </p>
// //                     )}
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Phone Number *
// //                     </label>
// //                     <div className="relative">
// //                       <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] z-10" />

// //                       {/* MNC Standard: Auto Country Code Prefix */}
// //                       {formData.country && (
// //                         <span className="absolute left-11 top-1/2 -translate-y-1/2 text-[#111827] font-semibold z-10 border-r border-[#E5E7EB] pr-2 h-5 flex items-center">
// //                           {countryCodeMap[formData.country]}
// //                         </span>
// //                       )}

// //                       <input
// //                         type="tel"
// //                         value={formData.phone}
// //                         onChange={(e) => handleChange("phone", e.target.value)}
// //                         onBlur={() => handleBlur("phone")}
// //                         maxLength={10}
// //                         placeholder="10-digit number"
// //                         className={`w-full ${formData.country ? "pl-24" : "pl-11"} pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all ${errors.phone ? "border-[#EF4444]" : "border-[#E5E7EB]"}`}
// //                       />
// //                     </div>
// //                     {errors.phone && (
// //                       <p className="text-[#EF4444] text-xs mt-1.5">
// //                         {errors.phone}
// //                       </p>
// //                     )}
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Country *
// //                     </label>
// //                     <select
// //                       value={formData.country}
// //                       onChange={(e) => handleCountryChange(e.target.value)}
// //                       className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all appearance-none bg-white ${errors.country ? "border-[#EF4444]" : "border-[#E5E7EB]"}`}
// //                     >
// //                       <option value="">Select country...</option>
// //                       <option value="India">India</option>
// //                       <option value="United States">United States</option>
// //                     </select>
// //                     {errors.country && (
// //                       <p className="text-[#EF4444] text-xs mt-1.5">
// //                         {errors.country}
// //                       </p>
// //                     )}
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Current Location
// //                     </label>
// //                     <div className="relative">
// //                       <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] z-10" />
// //                       <input
// //                         type="text"
// //                         placeholder={
// //                           formData.country === "India"
// //                             ? "City, State (e.g. Hyderabad, Telangana)"
// //                             : formData.country === "United States"
// //                               ? "City, State (e.g. Austin, TX)"
// //                               : "City, State"
// //                         }
// //                         value={formData.currentLocation}
// //                         onChange={(e) =>
// //                           handleChange("currentLocation", e.target.value)
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Years of Experience
// //                     </label>
// //                     <div className="relative">
// //                       <FaBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] z-10" />
// //                       <input
// //                         type="text"
// //                         placeholder="e.g. 2 years"
// //                         value={formData.experience}
// //                         onChange={(e) =>
// //                           handleChange("experience", e.target.value)
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Salary Expectation{" "}
// //                       {formData.country === "India" ? "(INR)" : "(USD)"}
// //                     </label>
// //                     <div className="relative">
// //                       {formData.country === "India" ? (
// //                         <FaRupeeSign className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] z-10" />
// //                       ) : (
// //                         <FaDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] z-10" />
// //                       )}
// //                       <input
// //                         type="text"
// //                         placeholder={
// //                           formData.country === "India"
// //                             ? "e.g. 8,00,000"
// //                             : "e.g. 80,000"
// //                         }
// //                         value={formData.salaryExpectation}
// //                         onChange={(e) =>
// //                           handleChange("salaryExpectation", e.target.value)
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Availability
// //                     </label>
// //                     <div className="relative">
// //                       <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] z-10" />
// //                       <select
// //                         value={formData.availability}
// //                         onChange={(e) =>
// //                           handleChange("availability", e.target.value)
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all appearance-none bg-white"
// //                       >
// //                         <option value="">Select...</option>
// //                         <option value="Immediately">Immediately</option>
// //                         <option value="2 weeks">2 Weeks Notice</option>
// //                         <option value="1 month">1 Month Notice</option>
// //                         <option value="3 months">3 Months Notice</option>
// //                       </select>
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       How did you hear about us?
// //                     </label>
// //                     <select
// //                       value={formData.source}
// //                       onChange={(e) => handleChange("source", e.target.value)}
// //                       className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all appearance-none bg-white"
// //                     >
// //                       <option value="">Select...</option>
// //                       <option value="LinkedIn">LinkedIn</option>
// //                       <option value="Referral">Referral</option>
// //                       <option value="Company Website">Company Website</option>
// //                     </select>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Section 2: Resume Upload */}
// //               <div className="bg-white p-6 md:p-8 rounded-xl border border-[#E5E7EB] shadow-sm">
// //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// //                   Resume
// //                 </h4>
// //                 <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                   Upload Resume *
// //                 </label>
// //                 <div
// //                   onDragOver={(e) => {
// //                     e.preventDefault();
// //                     setIsDragging(true);
// //                   }}
// //                   onDragLeave={() => setIsDragging(false)}
// //                   onDrop={handleDrop}
// //                   className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${isDragging ? "border-[#12324f] bg-[#12324f]/5" : errors.resume ? "border-[#EF4444]" : "border-[#E5E7EB] hover:border-[#12324f]"}`}
// //                   onClick={() => document.getElementById("fileInput").click()}
// //                 >
// //                   {formData.resume ? (
// //                     <div className="flex items-center justify-center gap-4 text-left">
// //                       <div className="w-12 h-12 bg-[#12324f]/10 rounded-xl flex items-center justify-center">
// //                         <FaFileAlt size={20} className="text-[#12324f]" />
// //                       </div>
// //                       <div>
// //                         <p className="font-semibold text-[#111827]">
// //                           {formData.resume.name}
// //                         </p>
// //                         <p className="text-xs text-[#6B7280]">
// //                           {(formData.resume.size / 1024).toFixed(1)} KB • Ready
// //                           to submit
// //                         </p>
// //                       </div>
// //                     </div>
// //                   ) : (
// //                     <>
// //                       <FaCloudUploadAlt
// //                         size={32}
// //                         className="mx-auto text-[#9CA3AF] mb-3"
// //                       />
// //                       <p className="font-semibold text-[#111827] mb-1">
// //                         Drag & drop your resume here
// //                       </p>
// //                       <p className="text-sm text-[#6B7280]">
// //                         or click to browse files
// //                       </p>
// //                       <p className="text-xs text-[#9CA3AF] mt-3">
// //                         PDF, DOC, DOCX (Max 5MB)
// //                       </p>
// //                     </>
// //                   )}
// //                   <input
// //                     type="file"
// //                     id="fileInput"
// //                     className="hidden"
// //                     onChange={(e) => handleFileChange(e.target.files[0])}
// //                     accept=".pdf,.doc,.docx"
// //                   />
// //                 </div>
// //                 {errors.resume && (
// //                   <p className="text-[#EF4444] text-xs mt-2">{errors.resume}</p>
// //                 )}
// //               </div>

// //               {/* Section 3: Portfolio Links */}
// //               <div className="bg-white p-6 md:p-8 rounded-xl border border-[#E5E7EB] shadow-sm">
// //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// //                   Portfolio & Links
// //                 </h4>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       LinkedIn Profile
// //                     </label>
// //                     <div className="relative">
// //                       <FaLinkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] z-10" />
// //                       <input
// //                         type="url"
// //                         placeholder="https://linkedin.com/in/username"
// //                         value={formData.linkedin}
// //                         onChange={(e) =>
// //                           handleChange("linkedin", e.target.value)
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       GitHub Profile
// //                     </label>
// //                     <div className="relative">
// //                       <FaGithub className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] z-10" />
// //                       <input
// //                         type="url"
// //                         placeholder="https://github.com/username"
// //                         value={formData.github}
// //                         onChange={(e) => handleChange("github", e.target.value)}
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>
// //                   <div className="md:col-span-2">
// //                     <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                       Personal Website / Portfolio
// //                     </label>
// //                     <div className="relative">
// //                       <FaGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] z-10" />
// //                       <input
// //                         type="url"
// //                         placeholder="https://yourportfolio.com"
// //                         value={formData.website}
// //                         onChange={(e) =>
// //                           handleChange("website", e.target.value)
// //                         }
// //                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
// //                       />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Section 4: Work Authorization & Visa Status (US only) */}
// //               {formData.country === "United States" && (
// //                 <div className="bg-white p-6 md:p-8 rounded-xl border border-[#E5E7EB] shadow-sm">
// //                   <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// //                     Work Authorization & Visa Status
// //                   </h4>
// //                   <div className="space-y-6">
// //                     <div>
// //                       <label className="block text-sm font-semibold text-[#111827] mb-3">
// //                         Are you legally authorized to work in the United States?
// //                         *
// //                       </label>
// //                       <div className="flex gap-6">
// //                         <label className="flex items-center gap-2 cursor-pointer">
// //                           <input
// //                             type="radio"
// //                             name="authorizedToWork"
// //                             value="Yes"
// //                             checked={formData.authorizedToWork === "Yes"}
// //                             onChange={(e) =>
// //                               handleChange("authorizedToWork", e.target.value)
// //                             }
// //                             className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// //                           />
// //                           <span className="text-sm text-[#111827]">Yes</span>
// //                         </label>
// //                         <label className="flex items-center gap-2 cursor-pointer">
// //                           <input
// //                             type="radio"
// //                             name="authorizedToWork"
// //                             value="No"
// //                             checked={formData.authorizedToWork === "No"}
// //                             onChange={(e) =>
// //                               handleChange("authorizedToWork", e.target.value)
// //                             }
// //                             className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// //                           />
// //                           <span className="text-sm text-[#111827]">No</span>
// //                         </label>
// //                       </div>
// //                       {errors.authorizedToWork && (
// //                         <p className="text-[#EF4444] text-xs mt-2">
// //                           {errors.authorizedToWork}
// //                         </p>
// //                       )}
// //                     </div>

// //                     <div>
// //                       <label className="block text-sm font-semibold text-[#111827] mb-3">
// //                         Will you now, or in the future, require sponsorship for
// //                         employment visa status (e.g., H-1B)? *
// //                       </label>
// //                       <div className="flex gap-6">
// //                         <label className="flex items-center gap-2 cursor-pointer">
// //                           <input
// //                             type="radio"
// //                             name="requiresSponsorship"
// //                             value="Yes"
// //                             checked={formData.requiresSponsorship === "Yes"}
// //                             onChange={(e) =>
// //                               handleChange(
// //                                 "requiresSponsorship",
// //                                 e.target.value,
// //                               )
// //                             }
// //                             className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// //                           />
// //                           <span className="text-sm text-[#111827]">Yes</span>
// //                         </label>
// //                         <label className="flex items-center gap-2 cursor-pointer">
// //                           <input
// //                             type="radio"
// //                             name="requiresSponsorship"
// //                             value="No"
// //                             checked={formData.requiresSponsorship === "No"}
// //                             onChange={(e) =>
// //                               handleChange(
// //                                 "requiresSponsorship",
// //                                 e.target.value,
// //                               )
// //                             }
// //                             className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
// //                           />
// //                           <span className="text-sm text-[#111827]">No</span>
// //                         </label>
// //                       </div>
// //                       {errors.requiresSponsorship && (
// //                         <p className="text-[#EF4444] text-xs mt-2">
// //                           {errors.requiresSponsorship}
// //                         </p>
// //                       )}
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}

// //               {/* Section 5: Additional Information */}
// //               <div className="bg-white p-6 md:p-8 rounded-xl border border-[#E5E7EB] shadow-sm">
// //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// //                   Additional Information
// //                 </h4>
// //                 <div>
// //                   <label className="block text-sm font-semibold text-[#111827] mb-2">
// //                     Why are you interested in this role?
// //                   </label>
// //                   <textarea
// //                     rows={5}
// //                     placeholder="Tell us why you'd be a great fit..."
// //                     value={formData.coverLetter}
// //                     onChange={(e) =>
// //                       handleChange("coverLetter", e.target.value)
// //                     }
// //                     className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all resize-none"
// //                   ></textarea>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="flex justify-end items-center p-6 bg-white border-t border-[#E5E7EB] gap-4 sticky bottom-0">
// //               <Button
// //                 type="button"
// //                 variant="ghost"
// //                 onClick={onClose}
// //                 disabled={isSubmitting}
// //               >
// //                 Cancel
// //               </Button>
// //               <Button type="submit" disabled={isSubmitting}>
// //                 {isSubmitting ? (
// //                   <>
// //                     <FaSpinner className="animate-spin" /> Submitting...
// //                   </>
// //                 ) : (
// //                   <>
// //                     Submit Application <FaCheckCircle className="ml-1" />
// //                   </>
// //                 )}
// //               </Button>
// //             </div>
// //           </form>
// //         )}
// //       </div>
// //     </div>
// //   );
// // });

// // export default ApplicationFlow;

// import React, { useState, memo, useRef } from "react";
// import {
//   FaTimes,
//   FaCheckCircle,
//   FaCloudUploadAlt,
//   FaFileAlt,
//   FaUser,
//   FaEnvelope,
//   FaPhone,
//   FaLinkedin,
//   FaGithub,
//   FaGlobe,
//   FaSpinner,
//   FaExclamationTriangle,
//   FaBriefcase,
//   FaMapMarkerAlt,
//   FaDollarSign,
//   FaRupeeSign,
//   FaCalendarAlt,
// } from "react-icons/fa";
// import { Button } from "../common/Button";
// import { submitApplication } from "../../api/careersApi";

// const ApplicationFlow = memo(({ selectedJob, onClose }) => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     experience: "",
//     country: "",
//     currentLocation: "",
//     salaryExpectation: "",
//     availability: "",
//     source: "",
//     resume: null,
//     linkedin: "",
//     github: "",
//     website: "",
//     authorizedToWork: "",
//     requiresSponsorship: "",
//     coverLetter: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isDragging, setIsDragging] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitError, setSubmitError] = useState(null);
//   const [showValidationError, setShowValidationError] = useState(false);

//   const scrollRef = useRef(null);

//   // MNC Standard: Country Code Mapping
//   const countryCodeMap = {
//     India: "+91",
//     "United States": "+1",
//   };

//   if (!selectedJob) return null;

//   // Regex to require at least one letter specifically BEFORE the @ symbol
//   const emailRegex =
//     /^[a-zA-Z0-9._%+-]*[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//   // MNC Standard: Field-level validation for onBlur
//   const validateField = (name, value) => {
//     let error = "";

//     switch (name) {
//       case "fullName":
//         if (!value.trim()) error = "Full name is required";
//         else if (!/^[A-Za-z\s]+$/.test(value.trim()))
//           error = "Name must contain letters and spaces only";
//         else if (value.trim().length < 3)
//           error = "Please enter a valid full name";
//         break;
//       case "email":
//         if (!value.trim()) error = "Email address is required";
//         else if (!emailRegex.test(value.trim()))
//           error = "Please enter a valid email address";
//         break;
//       case "phone":
//         if (!value) error = "Phone number is required";
//         else if (!/^\d+$/.test(value))
//           error = "Phone number must contain digits only";
//         else if (formData.country === "India" && value.length !== 10)
//           error = "Indian phone numbers must be exactly 10 digits";
//         else if (formData.country === "United States" && value.length !== 10) {
//           error = "US phone numbers must be exactly 10 digits";
//         }
//         break;
//       case "country":
//         if (!value) error = "Please select your country";
//         break;
//       case "experience":
//         if ((value && isNaN(parseFloat(value))) || /[a-zA-Z]/.test(value))
//           error = "Experience must be a number";
//         break;
//       case "salaryExpectation":
//         if (value && !/^[0-9,]+$/.test(value))
//           error = "Salary must contain numbers only";
//         break;
//       default:
//         break;
//     }
//     return error;
//   };

//   const validateForm = () => {
//     let tempErrors = {};

//     tempErrors.fullName = validateField("fullName", formData.fullName);
//     tempErrors.email = validateField("email", formData.email);
//     tempErrors.country = validateField("country", formData.country);
//     tempErrors.experience = validateField("experience", formData.experience);
//     tempErrors.salaryExpectation = validateField(
//       "salaryExpectation",
//       formData.salaryExpectation,
//     );

//     // Phone validation
//     if (!formData.phone) {
//       tempErrors.phone = "Phone number is required";
//     } else if (!/^\d+$/.test(formData.phone)) {
//       tempErrors.phone = "Phone number must contain digits only";
//     } else if (formData.country === "India" && formData.phone.length !== 10) {
//       tempErrors.phone = "Indian phone numbers must be exactly 10 digits";
//     } else if (
//       formData.country === "United States" &&
//       formData.phone.length !== 10
//     ) {
//       tempErrors.phone = "US phone numbers must be exactly 10 digits";
//     }

//     if (!formData.resume) {
//       tempErrors.resume = "Please upload your resume";
//     }

//     if (formData.country === "United States") {
//       if (!formData.authorizedToWork)
//         tempErrors.authorizedToWork = "Please select an option.";
//       if (!formData.requiresSponsorship)
//         tempErrors.requiresSponsorship = "Please select an option.";
//     }

//     // Remove empty errors
//     Object.keys(tempErrors).forEach(
//       (key) => !tempErrors[key] && delete tempErrors[key],
//     );

//     setErrors(tempErrors);
//     return Object.keys(tempErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const isValid = validateForm();

//     if (!isValid) {
//       setShowValidationError(true);
//       if (scrollRef.current) {
//         scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
//       }
//       return;
//     }

//     setShowValidationError(false);
//     setIsSubmitting(true);
//     setSubmitError(null);
//     try {
//       const nameParts = formData.fullName.trim().split(/\s+/);
//       const firstName = nameParts[0] || formData.fullName.trim();
//       const lastName = nameParts.slice(1).join(" ") || "-";

//       let finalCoverLetter = formData.coverLetter || "";
//       if (formData.github) {
//         finalCoverLetter += `\n\nGitHub Profile: ${formData.github}`;
//       }

//       const fullLocation = [formData.currentLocation, formData.country]
//         .filter(Boolean)
//         .join(", ");

//       // Prepend country code to phone before sending to API
//       const fullPhoneNumber = formData.country
//         ? `${countryCodeMap[formData.country]} ${formData.phone}`
//         : formData.phone;

//       const payload = new FormData();
//       payload.append("resume", formData.resume);
//       payload.append("job_id", selectedJob.id);
//       payload.append("first_name", firstName);
//       payload.append("last_name", lastName);
//       payload.append("email", formData.email);
//       payload.append("phone", fullPhoneNumber);
//       payload.append("current_location", fullLocation);
//       payload.append("country", formData.country);
//       payload.append("linkedin", formData.linkedin);
//       payload.append("portfolio", formData.website);
//       payload.append("experience", formData.experience);
//       payload.append("salary_expectation", formData.salaryExpectation);
//       payload.append("availability", formData.availability);
//       payload.append("source", formData.source);

//       if (formData.country === "United States") {
//         payload.append("authorized_to_work", formData.authorizedToWork);
//         payload.append("requires_sponsorship", formData.requiresSponsorship);
//       }

//       payload.append("cover_letter", finalCoverLetter);

//       await submitApplication(payload);
//       setSubmitted(true);
//     } catch (err) {
//       setSubmitError(
//         err.message ||
//           "Something went wrong submitting your application. Please try again.",
//       );
//       if (scrollRef.current) {
//         scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleFileChange = (file) => {
//     if (!file) return;
//     if (file.size < 5 * 1024 * 1024) {
//       setFormData((prev) => ({ ...prev, resume: file }));
//       setErrors((prev) => ({ ...prev, resume: null }));
//       setShowValidationError(false);
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

//   const handleCountryChange = (value) => {
//     setFormData((prev) => ({
//       ...prev,
//       country: value,
//       phone: "", // Reset phone when country changes
//       authorizedToWork: "",
//       requiresSponsorship: "",
//     }));
//     setErrors((prev) => ({
//       ...prev,
//       country: undefined,
//       phone: undefined,
//       authorizedToWork: undefined,
//       requiresSponsorship: undefined,
//     }));
//     setShowValidationError(false);
//   };

//   // MNC Standard: Handle input changes with specific restrictions
//   const handleChange = (field, value) => {
//     let sanitizedValue = value;

//     if (field === "fullName") {
//       // Allow only letters and spaces
//       sanitizedValue = value.replace(/[^a-zA-Z\s]/g, "");
//     } else if (field === "phone") {
//       // Allow only numbers
//       sanitizedValue = value.replace(/[^0-9]/g, "");
//     } else if (field === "email") {
//       sanitizedValue = value.toLowerCase();
//     } else if (field === "experience") {
//       // Allow only numbers and a single decimal point (e.g., 2.5 years)
//       sanitizedValue = value.replace(/[^0-9.]/g, "");
//     } else if (field === "salaryExpectation") {
//       // Allow only numbers and commas (e.g., 8,00,000)
//       sanitizedValue = value.replace(/[^0-9,]/g, "");
//     }

//     setFormData((prev) => ({ ...prev, [field]: sanitizedValue }));

//     // Clear error on change
//     if (errors[field]) {
//       setErrors((prev) => ({ ...prev, [field]: undefined }));
//     }
//     setShowValidationError(false);
//   };

//   // MNC Standard: Validate on blur
//   const handleBlur = (field) => {
//     const error = validateField(field, formData[field]);
//     setErrors((prev) => ({ ...prev, [field]: error }));
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-[#0F172A]/60 backdrop-blur-sm">
//       <div className="bg-white w-full max-w-3xl max-h-[96vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
//         {/* Modal Header */}
//         <div className="flex justify-between items-center p-4 border-b border-[#E5E7EB] sticky top-0 bg-white z-10">
//           <div>
//             <p className="text-sm text-[#6B7280] font-medium">Applying for</p>
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
//           <form
//             onSubmit={handleSubmit}
//             noValidate
//             className="flex-1 flex flex-col overflow-hidden"
//           >
//             <div
//               ref={scrollRef}
//               className="flex-1 overflow-y-auto p-6 md:p-4 bg-[#F9FAFB] space-y-6"
//             >
//               {/* Top Level Validation Error Banner */}
//               {showValidationError && (
//                 <div className="flex items-start gap-2 bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] text-sm rounded-lg p-3 sticky top-0 z-10 shadow-sm">
//                   <FaExclamationTriangle className="mt-0.5 flex-shrink-0" />
//                   <span>
//                     Please fill in all required fields correctly before
//                     submitting.
//                   </span>
//                 </div>
//               )}

//               {/* Server Error Display */}
//               {submitError && (
//                 <div className="flex items-start gap-2 bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] text-sm rounded-lg p-3">
//                   <FaExclamationTriangle className="mt-0.5 flex-shrink-0" />
//                   <span>{submitError}</span>
//                 </div>
//               )}

//               {/* Section 1: Personal Information & Preferences */}
//               <div className="space-y-5 bg-white p-6 md:p-8 rounded-xl border border-[#E5E7EB] shadow-sm">
//                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
//                   Personal Information
//                 </h4>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                   <div>
//                     <label className="block text-sm font-semibold text-[#111827] mb-2">
//                       Full Name *
//                     </label>
//                     <div className="relative">
//                       <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] z-10" />
//                       <input
//                         type="text"
//                         value={formData.fullName}
//                         onChange={(e) =>
//                           handleChange("fullName", e.target.value)
//                         }
//                         onBlur={() => handleBlur("fullName")}
//                         placeholder="Enter Full Name"
//                         className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all ${errors.fullName ? "border-[#EF4444]" : "border-[#E5E7EB]"}`}
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
//                       <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] z-10" />
//                       <input
//                         type="email"
//                         value={formData.email}
//                         onChange={(e) => handleChange("email", e.target.value)}
//                         onBlur={() => handleBlur("email")}
//                         placeholder="Enter Your Email"
//                         className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all ${errors.email ? "border-[#EF4444]" : "border-[#E5E7EB]"}`}
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
//                       Phone Number *
//                     </label>
//                     <div className="relative">
//                       <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] z-10" />

//                       {/* MNC Standard: Auto Country Code Prefix */}
//                       {formData.country && (
//                         <span className="absolute left-11 top-1/2 -translate-y-1/2 text-[#111827] font-semibold z-10 border-r border-[#E5E7EB] pr-2 h-5 flex items-center">
//                           {countryCodeMap[formData.country]}
//                         </span>
//                       )}

//                       <input
//                         type="tel"
//                         value={formData.phone}
//                         onChange={(e) => handleChange("phone", e.target.value)}
//                         onBlur={() => handleBlur("phone")}
//                         maxLength={10}
//                         placeholder="10-digit number"
//                         className={`w-full ${formData.country ? "pl-24" : "pl-11"} pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all ${errors.phone ? "border-[#EF4444]" : "border-[#E5E7EB]"}`}
//                       />
//                     </div>
//                     {errors.phone && (
//                       <p className="text-[#EF4444] text-xs mt-1.5">
//                         {errors.phone}
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-[#111827] mb-2">
//                       Country *
//                     </label>
//                     <select
//                       value={formData.country}
//                       onChange={(e) => handleCountryChange(e.target.value)}
//                       className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all appearance-none bg-white ${errors.country ? "border-[#EF4444]" : "border-[#E5E7EB]"}`}
//                     >
//                       <option value="">Select country...</option>
//                       <option value="India">India</option>
//                       <option value="United States">United States</option>
//                     </select>
//                     {errors.country && (
//                       <p className="text-[#EF4444] text-xs mt-1.5">
//                         {errors.country}
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-[#111827] mb-2">
//                       Current Location
//                     </label>
//                     <div className="relative">
//                       <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] z-10" />
//                       <input
//                         type="text"
//                         placeholder={
//                           formData.country === "India"
//                             ? "City, State (e.g. Hyderabad, Telangana)"
//                             : formData.country === "United States"
//                               ? "City, State (e.g. Austin, TX)"
//                               : "City, State"
//                         }
//                         value={formData.currentLocation}
//                         onChange={(e) =>
//                           handleChange("currentLocation", e.target.value)
//                         }
//                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
//                       />
//                     </div>
//                   </div>

//                   {/* Experience Field - Allows only numbers and decimals */}
//                   <div>
//                     <label className="block text-sm font-semibold text-[#111827] mb-2">
//                       Years of Experience
//                     </label>
//                     <div className="relative">
//                       <FaBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] z-10" />
//                       <input
//                         type="text"
//                         placeholder="e.g. 2.5"
//                         value={formData.experience}
//                         onChange={(e) =>
//                           handleChange("experience", e.target.value)
//                         }
//                         onBlur={() => handleBlur("experience")}
//                         className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all ${errors.experience ? "border-[#EF4444]" : "border-[#E5E7EB]"}`}
//                       />
//                     </div>
//                     {errors.experience && (
//                       <p className="text-[#EF4444] text-xs mt-1.5">
//                         {errors.experience}
//                       </p>
//                     )}
//                   </div>

//                   {/* Salary Expectation Field - Allows only numbers and commas */}
//                   <div>
//                     <label className="block text-sm font-semibold text-[#111827] mb-2">
//                       Salary Expectation{" "}
//                       {formData.country === "India" ? "(INR)" : "(USD)"}
//                     </label>
//                     <div className="relative">
//                       {formData.country === "India" ? (
//                         <FaRupeeSign className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] z-10" />
//                       ) : (
//                         <FaDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] z-10" />
//                       )}
//                       <input
//                         type="text"
//                         placeholder={
//                           formData.country === "India"
//                             ? "e.g. 8,00,000"
//                             : "e.g. 80,000"
//                         }
//                         value={formData.salaryExpectation}
//                         onChange={(e) =>
//                           handleChange("salaryExpectation", e.target.value)
//                         }
//                         onBlur={() => handleBlur("salaryExpectation")}
//                         className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all ${errors.salaryExpectation ? "border-[#EF4444]" : "border-[#E5E7EB]"}`}
//                       />
//                     </div>
//                     {errors.salaryExpectation && (
//                       <p className="text-[#EF4444] text-xs mt-1.5">
//                         {errors.salaryExpectation}
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-[#111827] mb-2">
//                       Availability
//                     </label>
//                     <div className="relative">
//                       <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] z-10" />
//                       <select
//                         value={formData.availability}
//                         onChange={(e) =>
//                           handleChange("availability", e.target.value)
//                         }
//                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all appearance-none bg-white"
//                       >
//                         <option value="">Select...</option>
//                         <option value="Immediately">Immediately</option>
//                         <option value="2 weeks">2 Weeks Notice</option>
//                         <option value="1 month">1 Month Notice</option>
//                         <option value="3 months">3 Months Notice</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-[#111827] mb-2">
//                       How did you hear about us?
//                     </label>
//                     <select
//                       value={formData.source}
//                       onChange={(e) => handleChange("source", e.target.value)}
//                       className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all appearance-none bg-white"
//                     >
//                       <option value="">Select...</option>
//                       <option value="LinkedIn">LinkedIn</option>
//                       <option value="Referral">Referral</option>
//                       <option value="Company Website">Company Website</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               {/* Section 2: Resume Upload */}
//               <div className="bg-white p-6 md:p-8 rounded-xl border border-[#E5E7EB] shadow-sm">
//                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
//                   Resume
//                 </h4>
//                 <label className="block text-sm font-semibold text-[#111827] mb-2">
//                   Upload Resume *
//                 </label>
//                 <div
//                   onDragOver={(e) => {
//                     e.preventDefault();
//                     setIsDragging(true);
//                   }}
//                   onDragLeave={() => setIsDragging(false)}
//                   onDrop={handleDrop}
//                   className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${isDragging ? "border-[#12324f] bg-[#12324f]/5" : errors.resume ? "border-[#EF4444]" : "border-[#E5E7EB] hover:border-[#12324f]"}`}
//                   onClick={() => document.getElementById("fileInput").click()}
//                 >
//                   {formData.resume ? (
//                     <div className="flex items-center justify-center gap-4 text-left">
//                       <div className="w-12 h-12 bg-[#12324f]/10 rounded-xl flex items-center justify-center">
//                         <FaFileAlt size={20} className="text-[#12324f]" />
//                       </div>
//                       <div>
//                         <p className="font-semibold text-[#111827]">
//                           {formData.resume.name}
//                         </p>
//                         <p className="text-xs text-[#6B7280]">
//                           {(formData.resume.size / 1024).toFixed(1)} KB • Ready
//                           to submit
//                         </p>
//                       </div>
//                     </div>
//                   ) : (
//                     <>
//                       <FaCloudUploadAlt
//                         size={32}
//                         className="mx-auto text-[#9CA3AF] mb-3"
//                       />
//                       <p className="font-semibold text-[#111827] mb-1">
//                         Drag & drop your resume here
//                       </p>
//                       <p className="text-sm text-[#6B7280]">
//                         or click to browse files
//                       </p>
//                       <p className="text-xs text-[#9CA3AF] mt-3">
//                         PDF, DOC, DOCX (Max 5MB)
//                       </p>
//                     </>
//                   )}
//                   <input
//                     type="file"
//                     id="fileInput"
//                     className="hidden"
//                     onChange={(e) => handleFileChange(e.target.files[0])}
//                     accept=".pdf,.doc,.docx"
//                   />
//                 </div>
//                 {errors.resume && (
//                   <p className="text-[#EF4444] text-xs mt-2">{errors.resume}</p>
//                 )}
//               </div>

//               {/* Section 3: Portfolio Links */}
//               <div className="bg-white p-6 md:p-8 rounded-xl border border-[#E5E7EB] shadow-sm">
//                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
//                   Portfolio & Links
//                 </h4>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                   <div>
//                     <label className="block text-sm font-semibold text-[#111827] mb-2">
//                       LinkedIn Profile
//                     </label>
//                     <div className="relative">
//                       <FaLinkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] z-10" />
//                       <input
//                         type="url"
//                         placeholder="https://linkedin.com/in/username"
//                         value={formData.linkedin}
//                         onChange={(e) =>
//                           handleChange("linkedin", e.target.value)
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
//                       <FaGithub className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] z-10" />
//                       <input
//                         type="url"
//                         placeholder="https://github.com/username"
//                         value={formData.github}
//                         onChange={(e) => handleChange("github", e.target.value)}
//                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
//                       />
//                     </div>
//                   </div>
//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-semibold text-[#111827] mb-2">
//                       Personal Website / Portfolio
//                     </label>
//                     <div className="relative">
//                       <FaGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] z-10" />
//                       <input
//                         type="url"
//                         placeholder="https://yourportfolio.com"
//                         value={formData.website}
//                         onChange={(e) =>
//                           handleChange("website", e.target.value)
//                         }
//                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Section 4: Work Authorization & Visa Status (US only) */}
//               {formData.country === "United States" && (
//                 <div className="bg-white p-6 md:p-8 rounded-xl border border-[#E5E7EB] shadow-sm">
//                   <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
//                     Work Authorization & Visa Status
//                   </h4>
//                   <div className="space-y-6">
//                     <div>
//                       <label className="block text-sm font-semibold text-[#111827] mb-3">
//                         Are you legally authorized to work in the United States?
//                         *
//                       </label>
//                       <div className="flex gap-6">
//                         <label className="flex items-center gap-2 cursor-pointer">
//                           <input
//                             type="radio"
//                             name="authorizedToWork"
//                             value="Yes"
//                             checked={formData.authorizedToWork === "Yes"}
//                             onChange={(e) =>
//                               handleChange("authorizedToWork", e.target.value)
//                             }
//                             className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
//                           />
//                           <span className="text-sm text-[#111827]">Yes</span>
//                         </label>
//                         <label className="flex items-center gap-2 cursor-pointer">
//                           <input
//                             type="radio"
//                             name="authorizedToWork"
//                             value="No"
//                             checked={formData.authorizedToWork === "No"}
//                             onChange={(e) =>
//                               handleChange("authorizedToWork", e.target.value)
//                             }
//                             className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
//                           />
//                           <span className="text-sm text-[#111827]">No</span>
//                         </label>
//                       </div>
//                       {errors.authorizedToWork && (
//                         <p className="text-[#EF4444] text-xs mt-2">
//                           {errors.authorizedToWork}
//                         </p>
//                       )}
//                     </div>

//                     <div>
//                       <label className="block text-sm font-semibold text-[#111827] mb-3">
//                         Will you now, or in the future, require sponsorship for
//                         employment visa status (e.g., H-1B)? *
//                       </label>
//                       <div className="flex gap-6">
//                         <label className="flex items-center gap-2 cursor-pointer">
//                           <input
//                             type="radio"
//                             name="requiresSponsorship"
//                             value="Yes"
//                             checked={formData.requiresSponsorship === "Yes"}
//                             onChange={(e) =>
//                               handleChange(
//                                 "requiresSponsorship",
//                                 e.target.value,
//                               )
//                             }
//                             className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
//                           />
//                           <span className="text-sm text-[#111827]">Yes</span>
//                         </label>
//                         <label className="flex items-center gap-2 cursor-pointer">
//                           <input
//                             type="radio"
//                             name="requiresSponsorship"
//                             value="No"
//                             checked={formData.requiresSponsorship === "No"}
//                             onChange={(e) =>
//                               handleChange(
//                                 "requiresSponsorship",
//                                 e.target.value,
//                               )
//                             }
//                             className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
//                           />
//                           <span className="text-sm text-[#111827]">No</span>
//                         </label>
//                       </div>
//                       {errors.requiresSponsorship && (
//                         <p className="text-[#EF4444] text-xs mt-2">
//                           {errors.requiresSponsorship}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Section 5: Additional Information */}
//               <div className="bg-white p-6 md:p-8 rounded-xl border border-[#E5E7EB] shadow-sm">
//                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
//                   Additional Information
//                 </h4>
//                 <div>
//                   <label className="block text-sm font-semibold text-[#111827] mb-2">
//                     Why are you interested in this role?
//                   </label>
//                   <textarea
//                     rows={5}
//                     placeholder="Tell us why you'd be a great fit..."
//                     value={formData.coverLetter}
//                     onChange={(e) =>
//                       handleChange("coverLetter", e.target.value)
//                     }
//                     className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all resize-none"
//                   ></textarea>
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-end items-center p-6 bg-white border-t border-[#E5E7EB] gap-4 sticky bottom-0">
//               <Button
//                 type="button"
//                 variant="primary"
//                 onClick={onClose}
//                 disabled={isSubmitting}
//               >
//                 Cancel
//               </Button>
//               <Button type="submit" disabled={isSubmitting}>
//                 {isSubmitting ? (
//                   <>
//                     <FaSpinner className="animate-spin" /> Submitting...
//                   </>
//                 ) : (
//                   <>
//                     Submit Application <FaCheckCircle className="ml-1" />
//                   </>
//                 )}
//               </Button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// });

// export default ApplicationFlow;

import React, { useState, memo, useRef, useEffect } from "react";
import {
  FaTimes,
  FaCheckCircle,
  FaCloudUploadAlt,
  FaFileAlt,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaSpinner,
  FaExclamationTriangle,
  FaBriefcase,
  FaMapMarkerAlt,
  FaDollarSign,
  FaRupeeSign,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
import { submitApplication } from "../../api/careersApi";

/*
  Job application modal.
  Brand colors only; red is kept for errors so they stay recognizable.
  Validation and submission logic is unchanged.
*/

const countryCodeMap = { India: "+91", "United States": "+1" };

// Requires at least one letter before the @
const emailRegex =
  /^[a-zA-Z0-9._%+-]*[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const MAX_FILE = 5 * 1024 * 1024;
const ALLOWED_EXT = [".pdf", ".doc", ".docx"];

/* ============ FIELD HELPERS ============ */
const inputClass = (error, withIcon = true, extra = "") =>
  `w-full rounded-lg border bg-white py-3 pr-4 text-base text-primary-900 placeholder:text-primary-900/40 transition-colors focus:outline-none focus:ring-2 ${
    withIcon ? "pl-11" : "pl-4"
  } ${
    error
      ? "border-red-500 focus:border-red-500 focus:ring-red-200"
      : "border-primary-200 hover:border-primary-300 focus:border-primary-500 focus:ring-primary-500/20"
  } ${extra}`;

const Field = ({
  id,
  label,
  required,
  error,
  icon: Icon,
  className = "",
  children,
}) => (
  <div className={className}>
    <label
      htmlFor={id}
      className="mb-1.5 block text-sm font-semibold text-primary-900"
    >
      {label}
      {required ? (
        <span className="text-red-600" aria-hidden="true">
          {" "}
          *
        </span>
      ) : (
        <span className="font-normal text-primary-900/60"> (optional)</span>
      )}
    </label>
    <div className="relative">
      {Icon && (
        <Icon
          className={`pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 ${error ? "text-red-500" : "text-primary-900/40"}`}
          aria-hidden="true"
        />
      )}
      {children}
    </div>
    {error && (
      <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">
        {error}
      </p>
    )}
  </div>
);

const SelectArrow = () => (
  <FaChevronDown
    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-primary-900/50"
    aria-hidden="true"
  />
);

const Panel = ({ title, children }) => (
  <fieldset className="rounded-xl border border-primary-100 bg-white p-6 md:p-7">
    <legend className="sr-only">{title}</legend>
    <h4 className="mb-5 border-b border-primary-100 pb-3 text-lg font-bold text-primary-900">
      {title}
    </h4>
    {children}
  </fieldset>
);

const RadioGroup = ({ name, label, value, onChange, error }) => (
  <div role="radiogroup" aria-labelledby={`${name}-label`}>
    <p
      id={`${name}-label`}
      className="mb-3 text-sm font-semibold text-primary-900"
    >
      {label}
      <span className="text-red-600" aria-hidden="true">
        {" "}
        *
      </span>
    </p>
    <div className="flex gap-6">
      {["Yes", "No"].map((opt) => (
        <label key={opt} className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={(e) => onChange(e.target.value)}
            className="h-4 w-4 accent-primary-500"
          />
          <span className="text-base text-primary-900">{opt}</span>
        </label>
      ))}
    </div>
    {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
  </div>
);

const Alert = ({ children }) => (
  <div
    role="alert"
    className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800"
  >
    <FaExclamationTriangle className="mt-0.5 shrink-0" aria-hidden="true" />
    <span>{children}</span>
  </div>
);

/* ============ COMPONENT ============ */
const ApplicationFlow = memo(({ selectedJob, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    country: "",
    currentLocation: "",
    salaryExpectation: "",
    availability: "",
    source: "",
    resume: null,
    linkedin: "",
    github: "",
    website: "",
    authorizedToWork: "",
    requiresSponsorship: "",
    coverLetter: "",
  });
  const [errors, setErrors] = useState({});
  const [isDragging, setIsDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [showValidationError, setShowValidationError] = useState(false);

  const scrollRef = useRef(null);
  const fileInputRef = useRef(null);
  const closeRef = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  // While open: lock page scroll, close on Escape, focus the close button
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onCloseRef.current();
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  if (!selectedJob) return null;

  const validateField = (name, value) => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Enter your full name";
        if (!/^[A-Za-z\s]+$/.test(value.trim()))
          return "Use letters and spaces only";
        if (value.trim().length < 3) return "Enter your full name";
        return "";
      case "email":
        if (!value.trim()) return "Enter your email address";
        if (!emailRegex.test(value.trim()))
          return "Enter a valid email address, like name@company.com";
        return "";
      case "phone":
        if (!value) return "Enter your phone number";
        if (!/^\d+$/.test(value)) return "Use digits only";
        if (formData.country === "India" && value.length !== 10)
          return "Indian phone numbers have 10 digits";
        if (formData.country === "United States" && value.length !== 10)
          return "US phone numbers have 10 digits";
        return "";
      case "country":
        return value ? "" : "Select your country";
      case "experience":
        return (value && isNaN(parseFloat(value))) || /[a-zA-Z]/.test(value)
          ? "Enter a number, like 2.5"
          : "";
      case "salaryExpectation":
        return value && !/^[0-9,]+$/.test(value) ? "Use numbers only" : "";
      default:
        return "";
    }
  };

  const validateForm = () => {
    const temp = {};
    [
      "fullName",
      "email",
      "country",
      "phone",
      "experience",
      "salaryExpectation",
    ].forEach((f) => {
      const err = validateField(f, formData[f]);
      if (err) temp[f] = err;
    });
    if (!formData.resume) temp.resume = "Upload your resume";
    if (formData.country === "United States") {
      if (!formData.authorizedToWork)
        temp.authorizedToWork = "Choose Yes or No";
      if (!formData.requiresSponsorship)
        temp.requiresSponsorship = "Choose Yes or No";
    }
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const scrollTop = () =>
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setShowValidationError(true);
      scrollTop();
      return;
    }

    setShowValidationError(false);
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const nameParts = formData.fullName.trim().split(/\s+/);
      const firstName = nameParts[0] || formData.fullName.trim();
      const lastName = nameParts.slice(1).join(" ") || "-";

      let finalCoverLetter = formData.coverLetter || "";
      if (formData.github) {
        finalCoverLetter += `\n\nGitHub Profile: ${formData.github}`;
      }

      const fullLocation = [formData.currentLocation, formData.country]
        .filter(Boolean)
        .join(", ");

      const fullPhoneNumber = formData.country
        ? `${countryCodeMap[formData.country]} ${formData.phone}`
        : formData.phone;

      const payload = new FormData();
      payload.append("resume", formData.resume);
      payload.append("job_id", selectedJob.id);
      payload.append("first_name", firstName);
      payload.append("last_name", lastName);
      payload.append("email", formData.email);
      payload.append("phone", fullPhoneNumber);
      payload.append("current_location", fullLocation);
      payload.append("country", formData.country);
      payload.append("linkedin", formData.linkedin);
      payload.append("portfolio", formData.website);
      payload.append("experience", formData.experience);
      payload.append("salary_expectation", formData.salaryExpectation);
      payload.append("availability", formData.availability);
      payload.append("source", formData.source);
      if (formData.country === "United States") {
        payload.append("authorized_to_work", formData.authorizedToWork);
        payload.append("requires_sponsorship", formData.requiresSponsorship);
      }
      payload.append("cover_letter", finalCoverLetter);

      await submitApplication(payload);
      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err.message ||
          "Your application couldn't be submitted. Check your connection and try again.",
      );
      scrollTop();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (file) => {
    if (!file) return;
    const ext = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
    if (!ALLOWED_EXT.includes(ext)) {
      setErrors((p) => ({ ...p, resume: "Upload a PDF, DOC or DOCX file" }));
      return;
    }
    if (file.size >= MAX_FILE) {
      setErrors((p) => ({
        ...p,
        resume: "This file is over 5MB. Upload a smaller file.",
      }));
      return;
    }
    setFormData((p) => ({ ...p, resume: file }));
    setErrors((p) => ({ ...p, resume: null }));
    setShowValidationError(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileChange(e.dataTransfer.files[0]);
  };

  const handleCountryChange = (value) => {
    setFormData((p) => ({
      ...p,
      country: value,
      phone: "",
      authorizedToWork: "",
      requiresSponsorship: "",
    }));
    setErrors((p) => ({
      ...p,
      country: undefined,
      phone: undefined,
      authorizedToWork: undefined,
      requiresSponsorship: undefined,
    }));
    setShowValidationError(false);
  };

  // Restrict what can be typed into some fields
  const handleChange = (field, value) => {
    let v = value;
    if (field === "fullName") v = value.replace(/[^a-zA-Z\s]/g, "");
    else if (field === "phone") v = value.replace(/[^0-9]/g, "");
    else if (field === "email") v = value.toLowerCase();
    else if (field === "experience") v = value.replace(/[^0-9.]/g, "");
    else if (field === "salaryExpectation") v = value.replace(/[^0-9,]/g, "");

    setFormData((p) => ({ ...p, [field]: v }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
    setShowValidationError(false);
  };

  const handleBlur = (field) =>
    setErrors((p) => ({
      ...p,
      [field]: validateField(field, formData[field]),
    }));

  /* Props shared by text inputs */
  const textProps = (field) => ({
    id: `app-${field}`,
    value: formData[field],
    onChange: (e) => handleChange(field, e.target.value),
    onBlur: () => handleBlur(field),
    "aria-invalid": Boolean(errors[field]),
    "aria-describedby": errors[field] ? `app-${field}-error` : undefined,
  });

  const isIndia = formData.country === "India";
  const isUS = formData.country === "United States";

  return (
    // Clicking the backdrop does NOT close the form, so typed answers aren't lost
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-primary-900/60 p-2 sm:p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="application-title"
        className="flex max-h-[96vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl shadow-primary-900/30"
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 bg-primary-900 px-6 py-4">
          <div className="min-w-0">
            <p className="text-sm font-medium text-accent-400">Applying for</p>
            <h3
              id="application-title"
              className="truncate text-xl font-bold text-white"
            >
              {selectedJob.title}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close application"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
          >
            <FaTimes />
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-1 flex-col items-center justify-center p-12 text-center">
            <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-3xl text-primary-500">
              <FaCheckCircle aria-hidden="true" />
            </span>
            <h2 className="mb-3 text-2xl font-bold text-primary-900">
              Application submitted
            </h2>
            <p className="mb-8 max-w-md text-base text-primary-900/70">
              Thank you for applying. Our talent acquisition team will review
              your application and reply within 5–7 business days.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-primary-500 px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
            >
              Close
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-1 flex-col overflow-hidden"
          >
            <div
              ref={scrollRef}
              className="flex-1 space-y-5 overflow-y-auto bg-primary-50 p-4 md:p-6"
            >
              {showValidationError && (
                <Alert>
                  Some fields need your attention. They're marked in red below.
                </Alert>
              )}
              {submitError && <Alert>{submitError}</Alert>}

              {/* Personal information */}
              <Panel title="Personal Information">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field
                    id="app-fullName"
                    label="Full name"
                    required
                    icon={FaUser}
                    error={errors.fullName}
                  >
                    <input
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Smith"
                      {...textProps("fullName")}
                      className={inputClass(errors.fullName)}
                    />
                  </Field>

                  <Field
                    id="app-email"
                    label="Email address"
                    required
                    icon={FaEnvelope}
                    error={errors.email}
                  >
                    <input
                      type="email"
                      autoComplete="email"
                      placeholder="name@company.com"
                      {...textProps("email")}
                      className={inputClass(errors.email)}
                    />
                  </Field>

                  <Field
                    id="app-country"
                    label="Country"
                    required
                    error={errors.country}
                  >
                    <select
                      id="app-country"
                      value={formData.country}
                      onChange={(e) => handleCountryChange(e.target.value)}
                      aria-invalid={Boolean(errors.country)}
                      aria-describedby={
                        errors.country ? "app-country-error" : undefined
                      }
                      className={inputClass(
                        errors.country,
                        false,
                        "cursor-pointer appearance-none pr-10",
                      )}
                    >
                      <option value="">Select country</option>
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                    </select>
                    <SelectArrow />
                  </Field>

                  <Field
                    id="app-phone"
                    label="Phone number"
                    required
                    icon={FaPhone}
                    error={errors.phone}
                  >
                    {formData.country && (
                      <span className="pointer-events-none absolute left-11 top-1/2 z-10 flex h-5 -translate-y-1/2 items-center border-r border-primary-200 pr-2 font-semibold text-primary-900">
                        {countryCodeMap[formData.country]}
                      </span>
                    )}
                    <input
                      type="tel"
                      autoComplete="tel-national"
                      inputMode="numeric"
                      maxLength={10}
                      placeholder={
                        formData.country
                          ? "10-digit number"
                          : "Select a country first"
                      }
                      {...textProps("phone")}
                      className={inputClass(
                        errors.phone,
                        true,
                        formData.country ? "!pl-24" : "",
                      )}
                    />
                  </Field>

                  <Field
                    id="app-currentLocation"
                    label="Current location"
                    icon={FaMapMarkerAlt}
                  >
                    <input
                      type="text"
                      autoComplete="address-level2"
                      placeholder={
                        isIndia
                          ? "City, State (e.g. Hyderabad, Telangana)"
                          : isUS
                            ? "City, State (e.g. Austin, TX)"
                            : "City, State"
                      }
                      {...textProps("currentLocation")}
                      className={inputClass(false)}
                    />
                  </Field>

                  <Field
                    id="app-experience"
                    label="Years of experience"
                    icon={FaBriefcase}
                    error={errors.experience}
                  >
                    <input
                      type="text"
                      inputMode="decimal"
                      placeholder="e.g. 2.5"
                      {...textProps("experience")}
                      className={inputClass(errors.experience)}
                    />
                  </Field>

                  <Field
                    id="app-salaryExpectation"
                    label={`Salary expectation (${isIndia ? "INR" : "USD"})`}
                    icon={isIndia ? FaRupeeSign : FaDollarSign}
                    error={errors.salaryExpectation}
                  >
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder={isIndia ? "e.g. 8,00,000" : "e.g. 80,000"}
                      {...textProps("salaryExpectation")}
                      className={inputClass(errors.salaryExpectation)}
                    />
                  </Field>

                  <Field
                    id="app-availability"
                    label="Availability"
                    icon={FaCalendarAlt}
                  >
                    <select
                      id="app-availability"
                      value={formData.availability}
                      onChange={(e) =>
                        handleChange("availability", e.target.value)
                      }
                      className={inputClass(
                        false,
                        true,
                        "cursor-pointer appearance-none pr-10",
                      )}
                    >
                      <option value="">Select</option>
                      <option value="Immediately">Immediately</option>
                      <option value="2 weeks">2 weeks' notice</option>
                      <option value="1 month">1 month's notice</option>
                      <option value="3 months">3 months' notice</option>
                    </select>
                    <SelectArrow />
                  </Field>

                  <Field
                    id="app-source"
                    label="How did you hear about us?"
                    className="md:col-span-2"
                  >
                    <select
                      id="app-source"
                      value={formData.source}
                      onChange={(e) => handleChange("source", e.target.value)}
                      className={inputClass(
                        false,
                        false,
                        "cursor-pointer appearance-none pr-10",
                      )}
                    >
                      <option value="">Select</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Referral">Referral</option>
                      <option value="Company Website">Company website</option>
                    </select>
                    <SelectArrow />
                  </Field>
                </div>
              </Panel>

              {/* Resume */}
              <Panel title="Resume">
                <p className="mb-2 text-sm font-semibold text-primary-900">
                  Upload resume
                  <span className="text-red-600" aria-hidden="true">
                    {" "}
                    *
                  </span>
                </p>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  aria-describedby={
                    errors.resume ? "app-resume-error" : "app-resume-hint"
                  }
                  className={`w-full rounded-xl border-2 border-dashed p-8 text-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                    isDragging
                      ? "border-primary-500 bg-primary-50"
                      : errors.resume
                        ? "border-red-500"
                        : "border-primary-200 hover:border-primary-500"
                  }`}
                >
                  {formData.resume ? (
                    <span className="flex items-center justify-center gap-4 text-left">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-500">
                        <FaFileAlt aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block font-semibold text-primary-900">
                          {formData.resume.name}
                        </span>
                        <span className="block text-sm text-primary-900/60">
                          {(formData.resume.size / 1024).toFixed(1)} KB · Click
                          to replace
                        </span>
                      </span>
                    </span>
                  ) : (
                    <>
                      <FaCloudUploadAlt
                        className="mx-auto mb-3 text-4xl text-primary-500"
                        aria-hidden="true"
                      />
                      <span className="mb-1 block font-semibold text-primary-900">
                        Drag and drop your resume here
                      </span>
                      <span className="block text-base text-primary-900/70">
                        or click to browse files
                      </span>
                      <span
                        id="app-resume-hint"
                        className="mt-3 block text-sm text-primary-900/60"
                      >
                        PDF, DOC or DOCX, up to 5MB
                      </span>
                    </>
                  )}
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(e.target.files[0])}
                />
                {errors.resume && (
                  <p
                    id="app-resume-error"
                    className="mt-2 text-sm text-red-600"
                  >
                    {errors.resume}
                  </p>
                )}
              </Panel>

              {/* Links */}
              <Panel title="Portfolio & Links">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field
                    id="app-linkedin"
                    label="LinkedIn profile"
                    icon={FaLinkedin}
                  >
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/username"
                      {...textProps("linkedin")}
                      className={inputClass(false)}
                    />
                  </Field>
                  <Field id="app-github" label="GitHub profile" icon={FaGithub}>
                    <input
                      type="url"
                      placeholder="https://github.com/username"
                      {...textProps("github")}
                      className={inputClass(false)}
                    />
                  </Field>
                  <Field
                    id="app-website"
                    label="Personal website or portfolio"
                    icon={FaGlobe}
                    className="md:col-span-2"
                  >
                    <input
                      type="url"
                      placeholder="https://yourportfolio.com"
                      {...textProps("website")}
                      className={inputClass(false)}
                    />
                  </Field>
                </div>
              </Panel>

              {/* US work authorization */}
              {isUS && (
                <Panel title="Work Authorization & Visa Status">
                  <div className="space-y-6">
                    <RadioGroup
                      name="authorizedToWork"
                      label="Are you legally authorized to work in the United States?"
                      value={formData.authorizedToWork}
                      onChange={(v) => handleChange("authorizedToWork", v)}
                      error={errors.authorizedToWork}
                    />
                    <RadioGroup
                      name="requiresSponsorship"
                      label="Will you now, or in the future, require sponsorship for employment visa status (e.g., H-1B)?"
                      value={formData.requiresSponsorship}
                      onChange={(v) => handleChange("requiresSponsorship", v)}
                      error={errors.requiresSponsorship}
                    />
                  </div>
                </Panel>
              )}

              {/* Additional */}
              <Panel title="Additional Information">
                <Field
                  id="app-coverLetter"
                  label="Why are you interested in this role?"
                >
                  <textarea
                    rows={5}
                    placeholder="Tell us why you'd be a great fit"
                    {...textProps("coverLetter")}
                    className={inputClass(false, false, "resize-none")}
                  />
                </Field>
              </Panel>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 border-t border-primary-100 bg-white p-4 md:px-6">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="rounded-lg border border-primary-200 px-5 py-3 text-base font-semibold text-primary-900 transition-colors hover:bg-primary-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:opacity-60"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" aria-hidden="true" />
                    Submitting…
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
});
ApplicationFlow.displayName = "ApplicationFlow";

export default ApplicationFlow;
