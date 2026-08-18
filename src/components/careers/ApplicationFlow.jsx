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
// // // } from "react-icons/fa";
// // // import { Button } from "../common/Button";
// // // import { submitApplication } from "../../api/careersApi";

// // // const ApplicationFlow = memo(({ selectedJob, onClose }) => {
// // //   const [formData, setFormData] = useState({
// // //     fullName: "",
// // //     email: "",
// // //     phone: "",
// // //     experience: "",
// // //     resume: null,
// // //     linkedin: "",
// // //     github: "",
// // //     website: "",
// // //     workAuth: false,
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
// // //     if (!formData.workAuth)
// // //       tempErrors.workAuth = "You must confirm work authorization";

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
// // //       const notes = [
// // //         formData.coverLetter,
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
// // //         <div className="flex justify-between items-center p-6 border-b border-[#E5E7EB]">
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
// // //               {/* Section 1: Personal Information */}
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

// // //               {/* Section 4: Questions */}
// // //               <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
// // //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// // //                   Additional Information
// // //                 </h4>
// // //                 <div className="space-y-5">
// // //                   <div className="flex items-start gap-3">
// // //                     <input
// // //                       type="checkbox"
// // //                       id="workAuth"
// // //                       checked={formData.workAuth}
// // //                       onChange={(e) =>
// // //                         setFormData({ ...formData, workAuth: e.target.checked })
// // //                       }
// // //                       className="mt-1 w-5 h-5 rounded border-[#E5E7EB] text-[#12324f] focus:ring-[#12324f] cursor-pointer"
// // //                     />
// // //                     <label
// // //                       htmlFor="workAuth"
// // //                       className="text-sm text-[#111827]"
// // //                     >
// // //                       Are you legally authorized to work in the country of this
// // //                       role? *
// // //                     </label>
// // //                   </div>
// // //                   {errors.workAuth && (
// // //                     <p className="text-[#EF4444] text-xs">{errors.workAuth}</p>
// // //                   )}

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
// // //             <div className="flex justify-end items-center p-6 bg-white border-t border-[#E5E7EB] gap-4">
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
// // } from "react-icons/fa";
// // import { Button } from "../common/Button";
// // import { submitApplication } from "../../api/careersApi";

// // const ApplicationFlow = memo(({ selectedJob, onClose }) => {
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     email: "",
// //     phone: "",
// //     experience: "",
// //     resume: null,
// //     linkedin: "",
// //     github: "",
// //     website: "",
// //     // Replaced single checkbox with specific US-style authorization questions
// //     authorizedToWork: "", // "Yes" or "No"
// //     requiresSponsorship: "", // "Yes" or "No"
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

// //     // Validating the new radio inputs
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

// //       // Appending Visa/Sponsorship answers to the notes/cover letter
// //       // so the backend has full context.
// //       const notes = [
// //         formData.coverLetter,
// //         `Authorized to work in US: ${formData.authorizedToWork}`,
// //         `Requires visa sponsorship: ${formData.requiresSponsorship}`,
// //         formData.github ? `GitHub: ${formData.github}` : null,
// //       ]
// //         .filter(Boolean)
// //         .join("\n\n");

// //       const payload = new FormData();
// //       payload.append("resume", formData.resume);
// //       payload.append("job_id", selectedJob.id);
// //       payload.append("first_name", firstName);
// //       payload.append("last_name", lastName);
// //       payload.append("email", formData.email);
// //       payload.append("phone", formData.phone);
// //       payload.append("linkedin", formData.linkedin);
// //       payload.append("portfolio", formData.website);
// //       payload.append("experience", formData.experience);
// //       payload.append("cover_letter", notes);

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
// //         <div className="flex justify-between items-center p-6 border-b border-[#E5E7EB]">
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
// //               {/* Section 1: Personal Information */}
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

// //               {/* Section 4: Visa & Work Authorization (US Standard) */}
// //               <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
// //                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
// //                   Work Authorization & Visa Status
// //                 </h4>
// //                 <div className="space-y-6">
// //                   {/* Question 1 */}
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

// //                   {/* Question 2 */}
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

// //                   {/* Cover Letter */}
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
// //             <div className="flex justify-end items-center p-6 bg-white border-t border-[#E5E7EB] gap-4">
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

// import React, { useState, memo } from "react";
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

//   if (!selectedJob) return null;

//   const validateForm = () => {
//     let tempErrors = {};
//     if (!formData.fullName.trim())
//       tempErrors.fullName = "Full name is required";
//     if (!formData.email.trim()) tempErrors.email = "Email is required";
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
//       tempErrors.email = "Invalid email format";
//     if (!formData.resume) tempErrors.resume = "Please upload your resume";
//     if (!formData.authorizedToWork)
//       tempErrors.authorizedToWork = "Please select an option.";
//     if (!formData.requiresSponsorship)
//       tempErrors.requiresSponsorship = "Please select an option.";

//     setErrors(tempErrors);
//     return Object.keys(tempErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setIsSubmitting(true);
//     setSubmitError(null);
//     try {
//       const nameParts = formData.fullName.trim().split(/\s+/);
//       const firstName = nameParts[0] || formData.fullName.trim();
//       const lastName = nameParts.slice(1).join(" ") || "-";

//       // Compiling extra details into a structured note for the backend
//       const notes = [
//         formData.coverLetter,
//         `Current Location: ${formData.currentLocation || "N/A"}`,
//         `Salary Expectation: ${formData.salaryExpectation || "N/A"}`,
//         `Availability: ${formData.availability || "N/A"}`,
//         `Source: ${formData.source || "N/A"}`,
//         `Authorized to work in US: ${formData.authorizedToWork}`,
//         `Requires visa sponsorship: ${formData.requiresSponsorship}`,
//         formData.github ? `GitHub: ${formData.github}` : null,
//       ]
//         .filter(Boolean)
//         .join("\n\n");

//       const payload = new FormData();
//       payload.append("resume", formData.resume);
//       payload.append("job_id", selectedJob.id);
//       payload.append("first_name", firstName);
//       payload.append("last_name", lastName);
//       payload.append("email", formData.email);
//       payload.append("phone", formData.phone);
//       payload.append("linkedin", formData.linkedin);
//       payload.append("portfolio", formData.website);
//       payload.append("experience", formData.experience);
//       payload.append("cover_letter", notes);

//       await submitApplication(payload);
//       setSubmitted(true);
//     } catch (err) {
//       setSubmitError(
//         err.message ||
//           "Something went wrong submitting your application. Please try again.",
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleFileChange = (file) => {
//     if (!file) return;
//     if (file.size < 5 * 1024 * 1024) {
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
//         {/* Modal Header */}
//         <div className="flex justify-between items-center p-6 border-b border-[#E5E7EB] sticky top-0 bg-white z-10">
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

//         {/* Success State */}
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
//           /* Single Page Form */
//           <form
//             onSubmit={handleSubmit}
//             className="flex-1 flex flex-col overflow-hidden"
//           >
//             <div className="flex-1 overflow-y-auto p-6 bg-[#F9FAFB] space-y-6">
//               {/* Section 1: Personal Information & Preferences */}
//               <div className="space-y-5 bg-white p-6 rounded-xl border border-[#E5E7EB]">
//                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
//                   Personal Information
//                 </h4>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
//                   <div>
//                     <label className="block text-sm font-semibold text-[#111827] mb-2">
//                       Current Location
//                     </label>
//                     <div className="relative">
//                       <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
//                       <input
//                         type="text"
//                         placeholder="City, State, Country"
//                         value={formData.currentLocation}
//                         onChange={(e) =>
//                           setFormData({
//                             ...formData,
//                             currentLocation: e.target.value,
//                           })
//                         }
//                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-[#111827] mb-2">
//                       Years of Experience
//                     </label>
//                     <div className="relative">
//                       <FaBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
//                       <input
//                         type="text"
//                         placeholder="e.g. 2 years"
//                         value={formData.experience}
//                         onChange={(e) =>
//                           setFormData({
//                             ...formData,
//                             experience: e.target.value,
//                           })
//                         }
//                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-[#111827] mb-2">
//                       Salary Expectation (USD)
//                     </label>
//                     <div className="relative">
//                       <FaDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
//                       <input
//                         type="text"
//                         placeholder="e.g. 80,000"
//                         value={formData.salaryExpectation}
//                         onChange={(e) =>
//                           setFormData({
//                             ...formData,
//                             salaryExpectation: e.target.value,
//                           })
//                         }
//                         className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-[#111827] mb-2">
//                       Availability
//                     </label>
//                     <div className="relative">
//                       <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
//                       <select
//                         value={formData.availability}
//                         onChange={(e) =>
//                           setFormData({
//                             ...formData,
//                             availability: e.target.value,
//                           })
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
//                       onChange={(e) =>
//                         setFormData({ ...formData, source: e.target.value })
//                       }
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
//               <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
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
//                   className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${isDragging ? "border-[#12324f] bg-[#12324f]/5" : "border-[#E5E7EB] hover:border-[#12324f]"}`}
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
//               <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
//                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
//                   Portfolio & Links
//                 </h4>
//                 <div className="space-y-5">
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
//               </div>

//               {/* Section 4: Visa & Work Authorization */}
//               <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
//                 <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
//                   Work Authorization & Visa Status
//                 </h4>
//                 <div className="space-y-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-[#111827] mb-3">
//                       Are you legally authorized to work in the United States? *
//                     </label>
//                     <div className="flex gap-6">
//                       <label className="flex items-center gap-2 cursor-pointer">
//                         <input
//                           type="radio"
//                           name="authorizedToWork"
//                           value="Yes"
//                           checked={formData.authorizedToWork === "Yes"}
//                           onChange={(e) =>
//                             setFormData({
//                               ...formData,
//                               authorizedToWork: e.target.value,
//                             })
//                           }
//                           className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
//                         />
//                         <span className="text-sm text-[#111827]">Yes</span>
//                       </label>
//                       <label className="flex items-center gap-2 cursor-pointer">
//                         <input
//                           type="radio"
//                           name="authorizedToWork"
//                           value="No"
//                           checked={formData.authorizedToWork === "No"}
//                           onChange={(e) =>
//                             setFormData({
//                               ...formData,
//                               authorizedToWork: e.target.value,
//                             })
//                           }
//                           className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
//                         />
//                         <span className="text-sm text-[#111827]">No</span>
//                       </label>
//                     </div>
//                     {errors.authorizedToWork && (
//                       <p className="text-[#EF4444] text-xs mt-2">
//                         {errors.authorizedToWork}
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-[#111827] mb-3">
//                       Will you now, or in the future, require sponsorship for
//                       employment visa status (e.g., H-1B)? *
//                     </label>
//                     <div className="flex gap-6">
//                       <label className="flex items-center gap-2 cursor-pointer">
//                         <input
//                           type="radio"
//                           name="requiresSponsorship"
//                           value="Yes"
//                           checked={formData.requiresSponsorship === "Yes"}
//                           onChange={(e) =>
//                             setFormData({
//                               ...formData,
//                               requiresSponsorship: e.target.value,
//                             })
//                           }
//                           className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
//                         />
//                         <span className="text-sm text-[#111827]">Yes</span>
//                       </label>
//                       <label className="flex items-center gap-2 cursor-pointer">
//                         <input
//                           type="radio"
//                           name="requiresSponsorship"
//                           value="No"
//                           checked={formData.requiresSponsorship === "No"}
//                           onChange={(e) =>
//                             setFormData({
//                               ...formData,
//                               requiresSponsorship: e.target.value,
//                             })
//                           }
//                           className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
//                         />
//                         <span className="text-sm text-[#111827]">No</span>
//                       </label>
//                     </div>
//                     {errors.requiresSponsorship && (
//                       <p className="text-[#EF4444] text-xs mt-2">
//                         {errors.requiresSponsorship}
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-[#111827] mb-2">
//                       Why are you interested in this role?
//                     </label>
//                     <textarea
//                       rows={5}
//                       placeholder="Tell us why you'd be a great fit..."
//                       value={formData.coverLetter}
//                       onChange={(e) =>
//                         setFormData({
//                           ...formData,
//                           coverLetter: e.target.value,
//                         })
//                       }
//                       className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all resize-none"
//                     ></textarea>
//                   </div>
//                 </div>
//               </div>

//               {/* Server Error Display */}
//               {submitError && (
//                 <div className="flex items-start gap-2 bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] text-sm rounded-lg p-3">
//                   <FaExclamationTriangle className="mt-0.5 flex-shrink-0" />
//                   <span>{submitError}</span>
//                 </div>
//               )}
//             </div>

//             {/* Form Actions Footer */}
//             <div className="flex justify-end items-center p-6 bg-white border-t border-[#E5E7EB] gap-4 sticky bottom-0">
//               <Button
//                 type="button"
//                 variant="ghost"
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

import React, { useState, memo } from "react";
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
  FaCalendarAlt,
} from "react-icons/fa";
import { Button } from "../common/Button";
import { submitApplication } from "../../api/careersApi";

const ApplicationFlow = memo(({ selectedJob, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
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

  if (!selectedJob) return null;

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.fullName.trim())
      tempErrors.fullName = "Full name is required";
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      tempErrors.email = "Invalid email format";
    if (!formData.resume) tempErrors.resume = "Please upload your resume";
    if (!formData.authorizedToWork)
      tempErrors.authorizedToWork = "Please select an option.";
    if (!formData.requiresSponsorship)
      tempErrors.requiresSponsorship = "Please select an option.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const nameParts = formData.fullName.trim().split(/\s+/);
      const firstName = nameParts[0] || formData.fullName.trim();
      const lastName = nameParts.slice(1).join(" ") || "-";

      // Append GitHub to cover letter since there's no DB column for it
      let finalCoverLetter = formData.coverLetter || "";
      if (formData.github) {
        finalCoverLetter += `\n\nGitHub Profile: ${formData.github}`;
      }

      const payload = new FormData();
      payload.append("resume", formData.resume);
      payload.append("job_id", selectedJob.id);
      payload.append("first_name", firstName);
      payload.append("last_name", lastName);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("current_location", formData.currentLocation);
      payload.append("linkedin", formData.linkedin);
      payload.append("portfolio", formData.website);
      payload.append("experience", formData.experience);
      payload.append("salary_expectation", formData.salaryExpectation);
      payload.append("availability", formData.availability);
      payload.append("source", formData.source);
      payload.append("authorized_to_work", formData.authorizedToWork);
      payload.append("requires_sponsorship", formData.requiresSponsorship);
      payload.append("cover_letter", finalCoverLetter);

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
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-[#E5E7EB] sticky top-0 bg-white z-10">
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

        {/* Success State */}
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
          /* Single Page Form */
          <form
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col overflow-hidden"
          >
            <div className="flex-1 overflow-y-auto p-6 bg-[#F9FAFB] space-y-6">
              {/* Section 1: Personal Information & Preferences */}
              <div className="space-y-5 bg-white p-6 rounded-xl border border-[#E5E7EB]">
                <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
                  Personal Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                      Current Location
                    </label>
                    <div className="relative">
                      <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                      <input
                        type="text"
                        placeholder="City, State, Country"
                        value={formData.currentLocation}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            currentLocation: e.target.value,
                          })
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
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-2">
                      Salary Expectation (USD)
                    </label>
                    <div className="relative">
                      <FaDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                      <input
                        type="text"
                        placeholder="e.g. 80,000"
                        value={formData.salaryExpectation}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            salaryExpectation: e.target.value,
                          })
                        }
                        className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-2">
                      Availability
                    </label>
                    <div className="relative">
                      <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                      <select
                        value={formData.availability}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            availability: e.target.value,
                          })
                        }
                        className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all appearance-none bg-white"
                      >
                        <option value="">Select...</option>
                        <option value="Immediately">Immediately</option>
                        <option value="2 weeks">2 Weeks Notice</option>
                        <option value="1 month">1 Month Notice</option>
                        <option value="3 months">3 Months Notice</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      value={formData.source}
                      onChange={(e) =>
                        setFormData({ ...formData, source: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all appearance-none bg-white"
                    >
                      <option value="">Select...</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Referral">Referral</option>
                      <option value="Company Website">Company Website</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 2: Resume Upload */}
              <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
                <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
                  Resume
                </h4>
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
                          {(formData.resume.size / 1024).toFixed(1)} KB • Ready
                          to submit
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
                  <p className="text-[#EF4444] text-xs mt-2">{errors.resume}</p>
                )}
              </div>

              {/* Section 3: Portfolio Links */}
              <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
                <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
                  Portfolio & Links
                </h4>
                <div className="space-y-5">
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
              </div>

              {/* Section 4: Visa & Work Authorization */}
              <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
                <h4 className="text-lg font-bold text-[#0F172A] border-b pb-3 mb-4">
                  Work Authorization & Visa Status
                </h4>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-3">
                      Are you legally authorized to work in the United States? *
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="authorizedToWork"
                          value="Yes"
                          checked={formData.authorizedToWork === "Yes"}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              authorizedToWork: e.target.value,
                            })
                          }
                          className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
                        />
                        <span className="text-sm text-[#111827]">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="authorizedToWork"
                          value="No"
                          checked={formData.authorizedToWork === "No"}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              authorizedToWork: e.target.value,
                            })
                          }
                          className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
                        />
                        <span className="text-sm text-[#111827]">No</span>
                      </label>
                    </div>
                    {errors.authorizedToWork && (
                      <p className="text-[#EF4444] text-xs mt-2">
                        {errors.authorizedToWork}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-3">
                      Will you now, or in the future, require sponsorship for
                      employment visa status (e.g., H-1B)? *
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="requiresSponsorship"
                          value="Yes"
                          checked={formData.requiresSponsorship === "Yes"}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              requiresSponsorship: e.target.value,
                            })
                          }
                          className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
                        />
                        <span className="text-sm text-[#111827]">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="requiresSponsorship"
                          value="No"
                          checked={formData.requiresSponsorship === "No"}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              requiresSponsorship: e.target.value,
                            })
                          }
                          className="w-4 h-4 text-[#12324f] border-[#E5E7EB] focus:ring-[#12324f]"
                        />
                        <span className="text-sm text-[#111827]">No</span>
                      </label>
                    </div>
                    {errors.requiresSponsorship && (
                      <p className="text-[#EF4444] text-xs mt-2">
                        {errors.requiresSponsorship}
                      </p>
                    )}
                  </div>

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
              </div>

              {/* Server Error Display */}
              {submitError && (
                <div className="flex items-start gap-2 bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] text-sm rounded-lg p-3">
                  <FaExclamationTriangle className="mt-0.5 flex-shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}
            </div>

            {/* Form Actions Footer */}
            <div className="flex justify-end items-center p-6 bg-white border-t border-[#E5E7EB] gap-4 sticky bottom-0">
              <Button
                type="button"
                variant="ghost"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    Submit Application <FaCheckCircle className="ml-1" />
                  </>
                )}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
});

export default ApplicationFlow;
