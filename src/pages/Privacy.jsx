// export default function PrivacyPolicy() {
//   return (
//     <div className="bg-white overflow-x-hidden">
//       {/* Hero Section */}
//       <section className="bg-primary-800 text-white relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
//           <h1 className="mt-2 sm:mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
//             Privacy Notice
//           </h1>

//           <p className="mt-3 sm:mt-4 max-w-4xl text-base sm:text-lg text-white/90 leading-7 sm:leading-8">
//             Innovise LLC ('Innovise', 'we', 'our', or 'us') is an SAP consulting
//             and managed services firm headquartered in Snohomish, Washington,
//             United States, with operations in Mexico and India. We are committed
//             to protecting the privacy of individuals who interact with us. This
//             Privacy Notice explains what personal information we collect, how we
//             use it, and your rights in relation to it.
//           </p>

//           <p className="mt-3 sm:mt-4 max-w-4xl text-base sm:text-lg text-white/90 leading-7 sm:leading-8">
//             This Notice applies to personal information collected through our
//             website (innovise-it.com), direct business communications, and our
//             service delivery activities.
//           </p>

//           <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm text-white/70 bg-white/10 rounded-xl p-3 sm:p-4 inline-block">
//             <div className="flex items-center gap-1.5 sm:gap-2">
//               <svg
//                 className="w-3.5 h-3.5 sm:w-4 sm:h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
//                 />
//               </svg>
//               <span>Version 1.2</span>
//             </div>
//             <div className="flex items-center gap-1.5 sm:gap-2">
//               <svg
//                 className="w-3.5 h-3.5 sm:w-4 sm:h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                 />
//               </svg>
//               <span>Effective June 29, 2026</span>
//             </div>
//             <div className="flex items-center gap-1.5 sm:gap-2">
//               <svg
//                 className="w-3.5 h-3.5 sm:w-4 sm:h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//               <span>Last Reviewed June 2026</span>
//             </div>
//             <div className="flex items-center gap-1.5 sm:gap-2">
//               <svg
//                 className="w-3.5 h-3.5 sm:w-4 sm:h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                 />
//               </svg>
//               <span>Approved By CEO</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mobile TOC - Only visible on mobile/tablet */}
//       <div className=" border-b border-slate-200 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
//           <details className="group">
//             <summary className="flex items-center justify-between cursor-pointer list-none">
//               <span className="font-semibold text-sm sm:text-base text-gray-900 flex items-center gap-2">
//                 <svg
//                   className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h7"
//                   />
//                 </svg>
//                 Table of Contents
//               </span>
//               <svg
//                 className="w-4 h-4 text-gray-500 transition-transform duration-200 group-open:rotate-180"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </summary>
//             <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
//               {[
//                 { id: "who-we-are", label: "Who We Are" },
//                 { id: "information", label: "Information We Collect" },
//                 { id: "usage", label: "How We Use Information" },
//                 { id: "sharing", label: "Sharing Information" },
//                 { id: "transfers", label: "International Transfers" },
//                 { id: "retention", label: "Data Retention" },
//                 { id: "security", label: "Security" },
//                 { id: "rights", label: "Privacy Rights" },
//                 { id: "cookies", label: "Cookies & Tracking" },
//                 { id: "children", label: "Children's Privacy" },
//                 { id: "changes", label: "Changes to Notice" },
//                 { id: "contact", label: "Contact Us" },
//               ].map((item) => (
//                 <a
//                   key={item.id}
//                   href={`#${item.id}`}
//                   className="text-xs sm:text-sm text-gray-600 hover:text-primary-800 bg-white border border-slate-200 rounded-lg px-2 sm:px-3 py-2 text-center transition-colors"
//                   onClick={() => {
//                     document.activeElement.blur();
//                   }}
//                 >
//                   {item.label}
//                 </a>
//               ))}
//             </div>
//           </details>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-10 lg:py-12">
//         {/* ✅ Add lg:items-start to make sticky work */}
//         <div className="grid gap-12">
//           {/* Main Content */}
//           <main>
//             {/* Section 1: Who We Are */}
//             <section
//               id="who-we-are"
//               className="mb-14 sm:mb-14 lg:mb-12  scroll-mt-20 sm:scroll-mt-20 lg:scroll-mt-28"
//             >
//               <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-8">
//                 <span className="bg-primary-100 text-primary-800 font-semibold text-xs sm:text-sm px-2.5 sm:px-3 py-1 rounded-full">
//                   1
//                 </span>
//                 <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
//                   Who We Are / Data Controller
//                 </h2>
//               </div>

//               <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-200">
//                 <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
//                   <Info label="Legal Name" value="Innovise LLC" />
//                   <Info
//                     label="Registered In"
//                     value="United States of America"
//                   />
//                   <Info
//                     label="Corporate Address"
//                     value="6216 152nd PL SE, Snohomish, WA 98296, United States"
//                   />
//                   <Info
//                     label="Operating Locations"
//                     value="United States (WA, TN, UT, TX), Mexico (Saltillo, Coahuila), India"
//                   />
//                   <Info
//                     label="Privacy Officer"
//                     value="privacy@innovise-it.com"
//                   />
//                   <Info label="Website" value="https://innovise-it.com" />
//                 </div>

//                 <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-200">
//                   <p className="text-xs sm:text-sm text-gray-600 leading-6 sm:leading-7">
//                     <strong className="text-gray-900">
//                       Data Protection Officer:
//                     </strong>{" "}
//                     Innovise has assessed its obligations under applicable
//                     privacy law and has determined that the appointment of a
//                     formal Data Protection Officer is not currently required.
//                   </p>
//                 </div>
//               </div>
//             </section>

//             {/* Section 2: Information We Collect */}
//             <section
//               id="information"
//               className="mb-14 sm:mb-14 lg:mb-12 scroll-mt-20 sm:scroll-mt-20 lg:scroll-mt-28"
//             >
//               <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-8">
//                 <span className="bg-primary-100 text-primary-800 font-semibold text-xs sm:text-sm px-2.5 sm:px-3 py-1 rounded-full">
//                   2
//                 </span>
//                 <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
//                   Information We Collect
//                 </h2>
//               </div>

//               <div className="space-y-6 sm:space-y-8">
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
//                     2.1 Information You Provide Directly
//                   </h3>
//                   <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7 mb-3 sm:mb-4">
//                     We collect personal information that you voluntarily provide
//                     when you:
//                   </p>
//                   <ul className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
//                     {[
//                       "Contact us by email, phone, or other means to inquire about our services.",
//                       "Enter into a business relationship or contract with us.",
//                       "Apply for employment or a contract role.",
//                       "Correspond with us during an ongoing engagement.",
//                     ].map((item, index) => (
//                       <li
//                         key={index}
//                         className="flex items-start gap-2 sm:gap-3"
//                       >
//                         <svg
//                           className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 flex-shrink-0 mt-0.5"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M9 5l7 7-7 7"
//                           />
//                         </svg>
//                         <span className="text-sm sm:text-base text-gray-600">
//                           {item}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                   <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7">
//                     This information may include: name, job title, company name,
//                     work email address, phone number, and any information you
//                     choose to include in your communications.
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
//                     2.2 Information Collected Automatically
//                   </h3>
//                   <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7">
//                     Our website (innovise-it.com) is a static informational
//                     site. We do not intentionally use advertising, analytics, or
//                     behavioral tracking technologies. No personal data is
//                     collected automatically when you visit our website.
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
//                     2.3 Information We Receive from Third Parties
//                   </h3>
//                   <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7">
//                     In the course of delivering SAP consulting services, we may
//                     receive personal information about client employees from our
//                     clients (e.g., system access lists, user directories). We
//                     process such data solely to fulfill the contractual services
//                     and treat it as Restricted data under our Information
//                     Classification and Handling Policy (ISEC-AST-005).
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
//                     2.4 Categories of Personal Information
//                   </h3>
//                   <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7 mb-3 sm:mb-4">
//                     The categories of personal information we may collect and
//                     process include:
//                   </p>

//                   {/* Mobile: Card Layout */}
//                   <div className="sm:hidden space-y-2 mb-3">
//                     {[
//                       {
//                         category: "Identifiers",
//                         examples:
//                           "Name, email address, phone number, job title",
//                       },
//                       {
//                         category: "Professional Information",
//                         examples:
//                           "Company name, job title, department, work history",
//                       },
//                       {
//                         category: "Contact Information",
//                         examples:
//                           "Business email, business phone, mailing address",
//                       },
//                       {
//                         category: "Account & Access Data",
//                         examples:
//                           "Usernames, system access credentials (client environments)",
//                       },
//                       {
//                         category: "Communications Data",
//                         examples:
//                           "Emails, meeting notes, support tickets, feedback",
//                       },
//                       {
//                         category: "Employment / Contractor Data",
//                         examples:
//                           "Résumé, employment history, references, payroll information",
//                       },
//                     ].map((row, index) => (
//                       <div
//                         key={index}
//                         className="bg-white border border-slate-200 rounded-lg p-3"
//                       >
//                         <h4 className="font-medium text-gray-900 text-sm mb-1">
//                           {row.category}
//                         </h4>
//                         <p className="text-xs text-gray-600 leading-5">
//                           {row.examples}
//                         </p>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Desktop: Table Layout */}
//                   <div className="hidden sm:block bg-white border border-slate-200 rounded-xl overflow-hidden">
//                     <table className="w-full">
//                       <thead>
//                         <tr className="bg-slate-50">
//                           <th className="text-left p-4 font-semibold text-gray-900">
//                             Category
//                           </th>
//                           <th className="text-left p-4 font-semibold text-gray-900">
//                             Examples
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {[
//                           {
//                             category: "Identifiers",
//                             examples:
//                               "Name, email address, phone number, job title",
//                           },
//                           {
//                             category: "Professional Information",
//                             examples:
//                               "Company name, job title, department, work history",
//                           },
//                           {
//                             category: "Contact Information",
//                             examples:
//                               "Business email, business phone, mailing address",
//                           },
//                           {
//                             category: "Account & Access Data",
//                             examples:
//                               "Usernames, system access credentials (client environments)",
//                           },
//                           {
//                             category: "Communications Data",
//                             examples:
//                               "Emails, meeting notes, support tickets, feedback",
//                           },
//                           {
//                             category: "Employment / Contractor Data",
//                             examples:
//                               "Résumé, employment history, references, payroll information",
//                           },
//                         ].map((row, index) => (
//                           <tr key={index} className="border-t border-slate-100">
//                             <td className="p-4 font-medium text-gray-900">
//                               {row.category}
//                             </td>
//                             <td className="p-4 text-gray-600">
//                               {row.examples}
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>

//                   <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-amber-50 border border-amber-100 rounded-lg">
//                     <p className="text-xs sm:text-sm text-amber-800 leading-5 sm:leading-6">
//                       <strong>Note:</strong> We do not intentionally collect
//                       Sensitive Personal Information (such as health data,
//                       biometric data, racial or ethnic origin, religious
//                       beliefs, or sexual orientation) unless it is strictly
//                       necessary for a specific engagement and we obtain
//                       appropriate consent or have another valid legal basis.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             {/* Section 3: How We Use Information */}
//             <section
//               id="usage"
//               className="mb-14 sm:mb-14 lg:mb-12  scroll-mt-20 sm:scroll-mt-20 lg:scroll-mt-28"
//             >
//               <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-8">
//                 <span className="bg-primary-100 text-primary-800 font-semibold text-xs sm:text-sm px-2.5 sm:px-3 py-1 rounded-full">
//                   3
//                 </span>
//                 <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
//                   How We Use Your Information
//                 </h2>
//               </div>

//               <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7 mb-4 sm:mb-6">
//                 We use personal information for the following purposes and on
//                 the following legal bases:
//               </p>

//               {/* Mobile: Card Layout */}
//               <div className="sm:hidden space-y-2 mb-4">
//                 {[
//                   {
//                     purpose:
//                       "Responding to inquiries and pre-sales communications",
//                     gdpr: "Legitimate interest",
//                     mexico: "Legitimate interest",
//                   },
//                   {
//                     purpose:
//                       "Performing contractual services (delivery, support)",
//                     gdpr: "Contract performance",
//                     mexico: "Contract performance",
//                   },
//                   {
//                     purpose: "Managing employment and contractor relationships",
//                     gdpr: "Contract / Legal obligation",
//                     mexico: "Contract performance",
//                   },
//                   {
//                     purpose: "Complying with legal and regulatory obligations",
//                     gdpr: "Legal obligation",
//                     mexico: "Legal obligation",
//                   },
//                   {
//                     purpose:
//                       "Managing our Information Security Management System (ISMS)",
//                     gdpr: "Legitimate interest",
//                     mexico: "Legitimate interest",
//                   },
//                 ].map((row, index) => (
//                   <div
//                     key={index}
//                     className="bg-white border border-slate-200 rounded-lg p-3"
//                   >
//                     <h4 className="font-medium text-gray-900 text-sm mb-2">
//                       {row.purpose}
//                     </h4>
//                     <div className="space-y-1">
//                       <p className="text-xs text-gray-600">
//                         <span className="font-medium">GDPR:</span> {row.gdpr}
//                       </p>
//                       <p className="text-xs text-gray-600">
//                         <span className="font-medium">Mexico:</span>{" "}
//                         {row.mexico}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Desktop: Table Layout */}
//               <div className="hidden sm:block bg-white border border-slate-200 rounded-xl overflow-hidden">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="bg-slate-50">
//                       <th className="text-left p-4 font-semibold text-gray-900">
//                         Purpose
//                       </th>
//                       <th className="text-left p-4 font-semibold text-gray-900">
//                         Legal Basis (GDPR)
//                       </th>
//                       <th className="text-left p-4 font-semibold text-gray-900">
//                         Legal Basis (Mexico)
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {[
//                       {
//                         purpose:
//                           "Responding to inquiries and pre-sales communications",
//                         gdpr: "Legitimate interest",
//                         mexico: "Legitimate interest",
//                       },
//                       {
//                         purpose:
//                           "Performing contractual services (delivery, support)",
//                         gdpr: "Contract performance",
//                         mexico: "Contract performance",
//                       },
//                       {
//                         purpose:
//                           "Managing employment and contractor relationships",
//                         gdpr: "Contract / Legal obligation",
//                         mexico: "Contract performance",
//                       },
//                       {
//                         purpose:
//                           "Complying with legal and regulatory obligations",
//                         gdpr: "Legal obligation",
//                         mexico: "Legal obligation",
//                       },
//                       {
//                         purpose:
//                           "Managing our Information Security Management System (ISMS)",
//                         gdpr: "Legitimate interest",
//                         mexico: "Legitimate interest",
//                       },
//                     ].map((row, index) => (
//                       <tr key={index} className="border-t border-slate-100">
//                         <td className="p-4 text-gray-900">{row.purpose}</td>
//                         <td className="p-4 text-gray-600">{row.gdpr}</td>
//                         <td className="p-4 text-gray-600">{row.mexico}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </section>

//             {/* Section 4: Sharing Information */}
//             <section
//               id="sharing"
//               className="mb-14 sm:mb-14 lg:mb-12  scroll-mt-20 sm:scroll-mt-20 lg:scroll-mt-28"
//             >
//               <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-8">
//                 <span className="bg-primary-100 text-primary-800 font-semibold text-xs sm:text-sm px-2.5 sm:px-3 py-1 rounded-full">
//                   4
//                 </span>
//                 <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
//                   Sharing Your Information
//                 </h2>
//               </div>

//               <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
//                 <div className="p-3 sm:p-4 bg-red-50 border border-red-100 rounded-lg mb-4 sm:mb-6">
//                   <p className="text-sm sm:text-base text-red-800 font-medium">
//                     We do not sell, rent, or trade personal information to third
//                     parties for monetary or other valuable consideration.
//                   </p>
//                 </div>

//                 <p className="text-sm sm:text-base text-gray-700 leading-6 sm:leading-8 mb-4 sm:mb-6">
//                   We may share personal information in the following limited
//                   circumstances:
//                 </p>

//                 <div className="space-y-4 sm:space-y-6">
//                   <div className="flex gap-3 sm:gap-4">
//                     <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-primary-100 rounded-lg flex items-center justify-center">
//                       <svg
//                         className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
//                         />
//                       </svg>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">
//                         Service providers and subprocessors
//                       </h4>
//                       <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7">
//                         We engage trusted third-party vendors who process data
//                         on our behalf under contractual data protection
//                         obligations. Categories include cloud hosting,
//                         email/collaboration platforms, HR/payroll systems,
//                         security monitoring, and professional services
//                         providers.
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex gap-3 sm:gap-4">
//                     <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-primary-100 rounded-lg flex items-center justify-center">
//                       <svg
//                         className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
//                         />
//                       </svg>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">
//                         Legal compliance
//                       </h4>
//                       <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7">
//                         We may disclose information if required by law, court
//                         order, or to protect the rights and safety of Innovise,
//                         our clients, or others.
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex gap-3 sm:gap-4">
//                     <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-primary-100 rounded-lg flex items-center justify-center">
//                       <svg
//                         className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
//                         />
//                       </svg>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">
//                         Business transfers
//                       </h4>
//                       <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7">
//                         In the event of a merger, acquisition, or sale of
//                         assets, personal information may be transferred as part
//                         of that transaction, subject to equivalent privacy
//                         protections.
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-slate-200">
//                   <p className="text-xs sm:text-sm text-gray-600 leading-6 sm:leading-7">
//                     All third-party data processors are subject to our
//                     Third-Party Risk Management Policy (ISEC-VND-001) and are
//                     required to maintain appropriate security controls and
//                     confidentiality obligations.
//                   </p>
//                 </div>
//               </div>
//             </section>

//             {/* Section 5: International Data Transfers */}
//             <section
//               id="transfers"
//               className="mb-14 sm:mb-14 lg:mb-12  scroll-mt-20 sm:scroll-mt-20 lg:scroll-mt-28"
//             >
//               <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-8">
//                 <span className="bg-primary-100 text-primary-800 font-semibold text-xs sm:text-sm px-2.5 sm:px-3 py-1 rounded-full">
//                   5
//                 </span>
//                 <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
//                   International Data Transfers
//                 </h2>
//               </div>

//               <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
//                 <p className="text-sm sm:text-base text-gray-700 leading-6 sm:leading-8 mb-3 sm:mb-4">
//                   Innovise operates across the United States, Mexico, and India.
//                   Personal information may be transferred between these
//                   jurisdictions in the course of our operations and service
//                   delivery. When we transfer personal information
//                   internationally, we implement appropriate safeguards
//                   consistent with applicable law, including contractual data
//                   protection clauses (such as Standard Contractual Clauses or
//                   equivalent mechanisms) and organizational measures to ensure
//                   an adequate level of protection.
//                 </p>
//               </div>
//             </section>

//             {/* Section 6: Data Retention */}
//             <section
//               id="retention"
//               className="mb-14 sm:mb-14 lg:mb-12  scroll-mt-20 sm:scroll-mt-20 lg:scroll-mt-28"
//             >
//               <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-8">
//                 <span className="bg-primary-100 text-primary-800 font-semibold text-xs sm:text-sm px-2.5 sm:px-3 py-1 rounded-full">
//                   6
//                 </span>
//                 <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
//                   Data Retention
//                 </h2>
//               </div>

//               <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
//                 <p className="text-sm sm:text-base text-gray-700 leading-6 sm:leading-8 mb-4 sm:mb-6">
//                   We retain personal information for as long as necessary to
//                   fulfill the purposes described in this Notice, or as required
//                   by law. Our Data Retention Policy (ISEC-AST-008) governs
//                   retention schedules by data category.
//                 </p>

//                 <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-3 sm:mb-4">
//                   General retention periods are as follows:
//                 </h4>

//                 <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
//                   <div className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-50 rounded-lg">
//                     <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-primary-100 rounded-lg flex items-center justify-center">
//                       <svg
//                         className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                         />
//                       </svg>
//                     </div>
//                     <div>
//                       <h5 className="font-medium text-gray-900 text-sm sm:text-base">
//                         Client engagement data
//                       </h5>
//                       <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
//                         Duration of the engagement plus 5 years, or as specified
//                         in the applicable contract.
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-50 rounded-lg">
//                     <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-primary-100 rounded-lg flex items-center justify-center">
//                       <svg
//                         className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//                         />
//                       </svg>
//                     </div>
//                     <div>
//                       <h5 className="font-medium text-gray-900 text-sm sm:text-base">
//                         Employment and contractor records
//                       </h5>
//                       <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
//                         7 years following termination of the employment or
//                         contract relationship, subject to applicable labor law
//                         in each jurisdiction.
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-50 rounded-lg">
//                     <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-primary-100 rounded-lg flex items-center justify-center">
//                       <svg
//                         className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
//                         />
//                       </svg>
//                     </div>
//                     <div>
//                       <h5 className="font-medium text-gray-900 text-sm sm:text-base">
//                         Inquiry and pre-sales communications
//                       </h5>
//                       <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
//                         Up to 2 years from the date of last contact.
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <p className="text-sm sm:text-base text-gray-700 leading-6 sm:leading-8">
//                   When personal information is no longer required, it is
//                   securely destroyed in accordance with our Data Disposal and
//                   Sanitization Policy (ISEC-AST-007).
//                 </p>
//               </div>
//             </section>

//             {/* Section 7: Security */}
//             <section
//               id="security"
//               className="mb-14 sm:mb-14 lg:mb-12  scroll-mt-20 sm:scroll-mt-20 lg:scroll-mt-28"
//             >
//               <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-8">
//                 <span className="bg-primary-100 text-primary-800 font-semibold text-xs sm:text-sm px-2.5 sm:px-3 py-1 rounded-full">
//                   7
//                 </span>
//                 <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
//                   Security
//                 </h2>
//               </div>

//               <div className="bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
//                 <p className="text-sm sm:text-base leading-6 sm:leading-8 text-gray-700 mb-3 sm:mb-4">
//                   Innovise has designed and implemented an Information Security
//                   Management System (ISMS) based on the AICPA SOC 2 Trust
//                   Services Criteria and the ISO/IEC 27001:2022 framework.
//                   Technical and organizational measures include access controls,
//                   multi-factor authentication, encryption at rest and in
//                   transit, regular risk assessments, and security monitoring.
//                 </p>

//                 <div className="p-3 sm:p-4 bg-amber-50 border border-amber-100 rounded-lg">
//                   <p className="text-xs sm:text-sm text-amber-800 leading-5 sm:leading-6">
//                     <strong>Note:</strong> No transmission over the internet is
//                     entirely secure. While we apply industry-standard controls,
//                     we cannot guarantee the absolute security of information
//                     transmitted to us.
//                   </p>
//                 </div>
//               </div>
//             </section>

//             {/* Section 8: Privacy Rights */}
//             <section
//               id="rights"
//               className="mb-14 sm:mb-14 lg:mb-12  scroll-mt-20 sm:scroll-mt-20 lg:scroll-mt-28"
//             >
//               <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-8">
//                 <span className="bg-primary-100 text-primary-800 font-semibold text-xs sm:text-sm px-2.5 sm:px-3 py-1 rounded-full">
//                   8
//                 </span>
//                 <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
//                   Your Privacy Rights
//                 </h2>
//               </div>

//               <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7 mb-4 sm:mb-6">
//                 Depending on your jurisdiction, you may have the following
//                 rights:
//               </p>

//               {/* Mobile: Card Layout */}
//               <div className="sm:hidden space-y-2 mb-6">
//                 {[
//                   { right: "Access", gdpr: "Yes", mexico: "Yes (Acceso)" },
//                   {
//                     right: "Rectification / Correction",
//                     gdpr: "Yes",
//                     mexico: "Yes (Rectificación)",
//                   },
//                   {
//                     right: "Erasure / Cancellation",
//                     gdpr: "Yes (right to be forgotten)",
//                     mexico: "Yes (Cancelación)",
//                   },
//                   {
//                     right: "Restriction of Processing",
//                     gdpr: "Yes",
//                     mexico: "Yes (Oposición)",
//                   },
//                   {
//                     right: "Data Portability",
//                     gdpr: "Yes",
//                     mexico: "N/A under LFPDPPP",
//                   },
//                   {
//                     right: "Objection",
//                     gdpr: "Yes",
//                     mexico: "Yes (Oposición)",
//                   },
//                 ].map((row, index) => (
//                   <div
//                     key={index}
//                     className="bg-white border border-slate-200 rounded-lg p-3"
//                   >
//                     <h4 className="font-medium text-gray-900 text-sm mb-2">
//                       {row.right}
//                     </h4>
//                     <div className="space-y-1">
//                       <p className="text-xs text-gray-600">
//                         <span className="font-medium">GDPR (EU/UK):</span>{" "}
//                         {row.gdpr}
//                       </p>
//                       <p className="text-xs text-gray-600">
//                         <span className="font-medium">Mexico (LFPDPPP):</span>{" "}
//                         {row.mexico}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Desktop: Table Layout */}
//               <div className="hidden sm:block overflow-hidden rounded-2xl border border-slate-200 mb-6 sm:mb-8">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="bg-slate-50">
//                       <th className="text-left p-5 font-semibold text-gray-900">
//                         Right
//                       </th>
//                       <th className="text-left p-5 font-semibold text-gray-900">
//                         GDPR (EU / UK)
//                       </th>
//                       <th className="text-left p-5 font-semibold text-gray-900">
//                         Mexico (LFPDPPP) — ARCO
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {[
//                       { right: "Access", gdpr: "Yes", mexico: "Yes (Acceso)" },
//                       {
//                         right: "Rectification / Correction",
//                         gdpr: "Yes",
//                         mexico: "Yes (Rectificación)",
//                       },
//                       {
//                         right: "Erasure / Cancellation",
//                         gdpr: "Yes (right to be forgotten)",
//                         mexico: "Yes (Cancelación)",
//                       },
//                       {
//                         right: "Restriction of Processing",
//                         gdpr: "Yes",
//                         mexico: "Yes (Oposición)",
//                       },
//                       {
//                         right: "Data Portability",
//                         gdpr: "Yes",
//                         mexico: "N/A under LFPDPPP",
//                       },
//                       {
//                         right: "Objection",
//                         gdpr: "Yes",
//                         mexico: "Yes (Oposición)",
//                       },
//                     ].map((row, index) => (
//                       <tr key={index} className="border-t border-slate-100">
//                         <td className="p-5 font-medium text-gray-900">
//                           {row.right}
//                         </td>
//                         <td className="p-5 text-gray-600">{row.gdpr}</td>
//                         <td className="p-5 text-gray-600">{row.mexico}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               <div className="space-y-6 sm:space-y-8">
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
//                     8.1 US State Privacy Rights
//                   </h3>
//                   <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7 mb-3 sm:mb-4">
//                     Residents of the following states have specific statutory
//                     privacy rights under applicable state laws:
//                   </p>

//                   <div className="space-y-3 sm:space-y-4 mb-3 sm:mb-4">
//                     <div className="p-3 sm:p-4 bg-slate-50 rounded-lg">
//                       <h4 className="font-medium text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">
//                         Texas (TDPSA — Texas Data Privacy and Security Act)
//                       </h4>
//                       <p className="text-xs sm:text-sm text-gray-600 leading-5 sm:leading-7">
//                         Rights to access, correct, delete, and obtain a portable
//                         copy of your personal data, and to opt out of targeted
//                         advertising or the sale of personal data.
//                       </p>
//                     </div>

//                     <div className="p-3 sm:p-4 bg-slate-50 rounded-lg">
//                       <h4 className="font-medium text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">
//                         Utah (UCPA — Utah Consumer Privacy Act)
//                       </h4>
//                       <p className="text-xs sm:text-sm text-gray-600 leading-5 sm:leading-7">
//                         Rights to access, delete, and obtain a portable copy of
//                         personal data you have provided, and to opt out of the
//                         sale of personal data.
//                       </p>
//                     </div>
//                   </div>

//                   <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7">
//                     To exercise any US state privacy right, please contact us at
//                     privacy@innovise-it.com. We will respond within the
//                     timeframe required by applicable law. We do not sell
//                     personal information for monetary consideration, and we do
//                     not engage in targeted advertising using personal
//                     information collected from our website or business
//                     communications.
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
//                     8.2 Automated Decision-Making and Profiling
//                   </h3>
//                   <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7">
//                     Innovise does not engage in automated decision-making or
//                     profiling that produces legal or similarly significant
//                     effects on individuals.
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
//                     8.3 How to Submit a Privacy Request
//                   </h3>
//                   <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7 mb-3 sm:mb-4">
//                     To exercise any of your privacy rights, please submit a
//                     written request to privacy@innovise-it.com including:
//                   </p>

//                   <ul className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
//                     {[
//                       "Your full name and contact information.",
//                       "A description of the specific right you wish to exercise and the personal information involved.",
//                       "A copy of a valid government-issued ID for identity verification purposes.",
//                     ].map((item, index) => (
//                       <li
//                         key={index}
//                         className="flex items-start gap-2 sm:gap-3"
//                       >
//                         <svg
//                           className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 flex-shrink-0 mt-0.5"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M9 5l7 7-7 7"
//                           />
//                         </svg>
//                         <span className="text-sm sm:text-base text-gray-600">
//                           {item}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>

//                   <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7 mb-3 sm:mb-4">
//                     Authorized representatives may submit requests on behalf of
//                     data subjects with proof of authorization. We will
//                     acknowledge receipt within 5 business days and respond
//                     within the timeframe required by applicable law: within one
//                     month (GDPR) or 20 business days (LFPDPPP). We reserve the
//                     right to request additional information if necessary to
//                     verify identity.
//                   </p>

//                   <div className="p-3 sm:p-4 bg-blue-50 border border-blue-100 rounded-lg">
//                     <p className="text-xs sm:text-sm text-blue-800 leading-5 sm:leading-6">
//                       <strong>For Mexican residents:</strong> If you are not
//                       satisfied with our response, you have the right to file a
//                       complaint with the Instituto Nacional de Transparencia,
//                       Acceso a la Información y Protección de Datos Personales
//                       (INAI) at{" "}
//                       <a
//                         href="https://home.inai.org.mx"
//                         className="underline hover:text-blue-900"
//                       >
//                         https://home.inai.org.mx
//                       </a>
//                       .
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             {/* Section 9: Cookies and Tracking */}
//             <section
//               id="cookies"
//               className="mb-14 sm:mb-14 lg:mb-12  scroll-mt-20 sm:scroll-mt-20 lg:scroll-mt-28"
//             >
//               <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-8">
//                 <span className="bg-primary-100 text-primary-800 font-semibold text-xs sm:text-sm px-2.5 sm:px-3 py-1 rounded-full">
//                   9
//                 </span>
//                 <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
//                   Cookies and Tracking
//                 </h2>
//               </div>

//               <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
//                 <p className="text-sm sm:text-base text-gray-700 leading-6 sm:leading-8">
//                   We do not intentionally use advertising, analytics, or
//                   behavioral tracking technologies on our website. No personal
//                   data is collected automatically through your visit to
//                   innovise-it.com. If this practice changes in the future, we
//                   will update this Notice and provide appropriate notice and
//                   consent mechanisms as required.
//                 </p>
//               </div>
//             </section>

//             {/* Section 10: Children's Privacy */}
//             <section
//               id="children"
//               className="mb-14 sm:mb-14 lg:mb-12  scroll-mt-20 sm:scroll-mt-20 lg:scroll-mt-28"
//             >
//               <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-8">
//                 <span className="bg-primary-100 text-primary-800 font-semibold text-xs sm:text-sm px-2.5 sm:px-3 py-1 rounded-full">
//                   10
//                 </span>
//                 <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
//                   Children's Privacy
//                 </h2>
//               </div>

//               <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
//                 <p className="text-sm sm:text-base text-gray-700 leading-6 sm:leading-8">
//                   Our website and services are directed at business
//                   professionals and are not intended for individuals under the
//                   age of 18. We do not knowingly collect personal information
//                   from minors.
//                 </p>
//               </div>
//             </section>

//             {/* Section 11: Changes to This Notice */}
//             <section
//               id="changes"
//               className="mb-14 sm:mb-14 lg:mb-12  scroll-mt-20 sm:scroll-mt-20 lg:scroll-mt-28"
//             >
//               <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-8">
//                 <span className="bg-primary-100 text-primary-800 font-semibold text-xs sm:text-sm px-2.5 sm:px-3 py-1 rounded-full">
//                   11
//                 </span>
//                 <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
//                   Changes to This Notice
//                 </h2>
//               </div>

//               <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
//                 <p className="text-sm sm:text-base text-gray-700 leading-6 sm:leading-8">
//                   We may update this Privacy Notice periodically to reflect
//                   changes in our practices, technology, or legal requirements.
//                   When we make material changes, we will update the Effective
//                   Date and Version above. We encourage you to review this Notice
//                   regularly. The current version is always available on our
//                   website.
//                 </p>
//               </div>
//             </section>

//             {/* Section 12: Contact Us */}
//             <section
//               id="contact"
//               className="scroll-mt-20 sm:scroll-mt-20 lg:scroll-mt-28"
//             >
//               <div className="bg-primary-800 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-16 relative overflow-hidden">
//                 <div className="relative z-10">
//                   {/* Header */}
//                   <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
//                     <span className="bg-white/20 text-white font-semibold text-xs sm:text-sm px-2.5 sm:px-3 py-1 rounded-full">
//                       12
//                     </span>
//                     <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
//                       Contact Us
//                     </h2>
//                   </div>

//                   <p className="text-sm sm:text-base text-slate-300 leading-6 sm:leading-7">
//                     For questions, requests, or complaints regarding this
//                     Privacy Notice or our data practices, please contact:
//                   </p>

//                   {/* Contact Cards - Stacked on Mobile */}
//                   <div className="mt-5 sm:mt-8 space-y-2 sm:space-y-4">
//                     <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white/10 rounded-xl">
//                       <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-white/15 rounded-lg flex items-center justify-center mt-0.5">
//                         <svg
//                           className="w-4 h-4 sm:w-5 sm:h-5 text-white"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="1.5"
//                             d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                           />
//                         </svg>
//                       </div>
//                       <div className="min-w-0">
//                         <h4 className="font-semibold text-white text-sm sm:text-base mb-1">
//                           Privacy Officer
//                         </h4>
//                         <a
//                           href="mailto:privacy@innovise-it.com"
//                           className="text-slate-300 text-xs sm:text-sm break-all hover:text-white transition-colors"
//                         >
//                           privacy@innovise-it.com
//                         </a>
//                       </div>
//                     </div>

//                     <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white/10 rounded-xl">
//                       <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-white/15 rounded-lg flex items-center justify-center mt-0.5">
//                         <svg
//                           className="w-4 h-4 sm:w-5 sm:h-5 text-white"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="1.5"
//                             d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//                           />
//                         </svg>
//                       </div>
//                       <div className="min-w-0">
//                         <h4 className="font-semibold text-white text-sm sm:text-base mb-1">
//                           General Inquiries
//                         </h4>
//                         <a
//                           href="mailto:contact@innovise-it.com"
//                           className="text-slate-300 text-xs sm:text-sm break-all hover:text-white transition-colors"
//                         >
//                           contact@innovise-it.com
//                         </a>
//                       </div>
//                     </div>

//                     <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white/10 rounded-xl">
//                       <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-white/15 rounded-lg flex items-center justify-center mt-0.5">
//                         <svg
//                           className="w-4 h-4 sm:w-5 sm:h-5 text-white"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="1.5"
//                             d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                           />
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="1.5"
//                             d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                           />
//                         </svg>
//                       </div>
//                       <div className="min-w-0">
//                         <h4 className="font-semibold text-white text-sm sm:text-base mb-1">
//                           Mailing Address
//                         </h4>
//                         <p className="text-slate-300 text-xs sm:text-sm">
//                           Innovise LLC, 6216 152nd PL SE,
//                           <br className="sm:hidden" /> Snohomish, WA 98296,
//                           United States
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white/10 rounded-xl">
//                       <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-white/15 rounded-lg flex items-center justify-center mt-0.5">
//                         <svg
//                           className="w-4 h-4 sm:w-5 sm:h-5 text-white"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="1.5"
//                             d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
//                           />
//                         </svg>
//                       </div>
//                       <div className="min-w-0">
//                         <h4 className="font-semibold text-white text-sm sm:text-base mb-1">
//                           Website
//                         </h4>
//                         <a
//                           href="https://innovise-it.com"
//                           className="text-blue-300 text-xs sm:text-sm hover:text-blue-200 transition-colors break-all"
//                         >
//                           innovise-it.com
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Info({ label, value }) {
//   return (
//     <div>
//       <p className="text-xs sm:text-sm text-gray-500 mb-0.5 sm:mb-1">{label}</p>
//       <p className="font-medium text-sm sm:text-base text-gray-900 break-words">
//         {value}
//       </p>
//     </div>
//   );
// }

import React from "react";
import {
  FaTag,
  FaCalendarAlt,
  FaCheckCircle,
  FaUserTie,
  FaListUl,
  FaChevronDown,
  FaChevronRight,
  FaBoxOpen,
  FaBalanceScale,
  FaExchangeAlt,
  FaBriefcase,
  FaUsers,
  FaComments,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";

/*
  Brand palette (from the Innovise logo) — see index.css
  navy    #0b1849  -> primary-900  (hero, contact panel, headings)
  blue    #013dfb  -> primary-500  (links, numbers, icons)
  aqua    #0cf0d1  -> accent-400   (highlights on navy only)
  white   #ffffff
  Solid colors only. The legal text below is unchanged.
*/

/* ============ TABLE OF CONTENTS ============ */
const sections = [
  { id: "who-we-are", label: "Who We Are" },
  { id: "information", label: "Information We Collect" },
  { id: "usage", label: "How We Use Information" },
  { id: "sharing", label: "Sharing Information" },
  { id: "transfers", label: "International Transfers" },
  { id: "retention", label: "Data Retention" },
  { id: "security", label: "Security" },
  { id: "rights", label: "Privacy Rights" },
  { id: "cookies", label: "Cookies & Tracking" },
  { id: "children", label: "Children's Privacy" },
  { id: "changes", label: "Changes to Notice" },
  { id: "contact", label: "Contact Us" },
];

const meta = [
  { icon: FaTag, text: "Version 1.2" },
  { icon: FaCalendarAlt, text: "Effective June 29, 2026" },
  { icon: FaCheckCircle, text: "Last Reviewed June 2026" },
  { icon: FaUserTie, text: "Approved By CEO" },
];

/* ============ DATA ============ */
const controllerInfo = [
  ["Legal Name", "Innovise LLC"],
  ["Registered In", "United States of America"],
  ["Corporate Address", "6216 152nd PL SE, Snohomish, WA 98296, United States"],
  [
    "Operating Locations",
    "United States (WA, TN, UT, TX), Mexico (Saltillo, Coahuila), India",
  ],
  ["Privacy Officer", "privacy@innovise-it.com"],
  ["Website", "https://innovise-it.com"],
];

const provideDirectly = [
  "Contact us by email, phone, or other means to inquire about our services.",
  "Enter into a business relationship or contract with us.",
  "Apply for employment or a contract role.",
  "Correspond with us during an ongoing engagement.",
];

const categories = {
  columns: [
    { key: "category", label: "Category" },
    { key: "examples", label: "Examples" },
  ],
  rows: [
    {
      category: "Identifiers",
      examples: "Name, email address, phone number, job title",
    },
    {
      category: "Professional Information",
      examples: "Company name, job title, department, work history",
    },
    {
      category: "Contact Information",
      examples: "Business email, business phone, mailing address",
    },
    {
      category: "Account & Access Data",
      examples: "Usernames, system access credentials (client environments)",
    },
    {
      category: "Communications Data",
      examples: "Emails, meeting notes, support tickets, feedback",
    },
    {
      category: "Employment / Contractor Data",
      examples: "Résumé, employment history, references, payroll information",
    },
  ],
};

const purposes = {
  columns: [
    { key: "purpose", label: "Purpose" },
    { key: "gdpr", label: "Legal Basis (GDPR)" },
    { key: "mexico", label: "Legal Basis (Mexico)" },
  ],
  rows: [
    {
      purpose: "Responding to inquiries and pre-sales communications",
      gdpr: "Legitimate interest",
      mexico: "Legitimate interest",
    },
    {
      purpose: "Performing contractual services (delivery, support)",
      gdpr: "Contract performance",
      mexico: "Contract performance",
    },
    {
      purpose: "Managing employment and contractor relationships",
      gdpr: "Contract / Legal obligation",
      mexico: "Contract performance",
    },
    {
      purpose: "Complying with legal and regulatory obligations",
      gdpr: "Legal obligation",
      mexico: "Legal obligation",
    },
    {
      purpose: "Managing our Information Security Management System (ISMS)",
      gdpr: "Legitimate interest",
      mexico: "Legitimate interest",
    },
  ],
};

const sharing = [
  {
    icon: FaBoxOpen,
    title: "Service providers and subprocessors",
    text: "We engage trusted third-party vendors who process data on our behalf under contractual data protection obligations. Categories include cloud hosting, email/collaboration platforms, HR/payroll systems, security monitoring, and professional services providers.",
  },
  {
    icon: FaBalanceScale,
    title: "Legal compliance",
    text: "We may disclose information if required by law, court order, or to protect the rights and safety of Innovise, our clients, or others.",
  },
  {
    icon: FaExchangeAlt,
    title: "Business transfers",
    text: "In the event of a merger, acquisition, or sale of assets, personal information may be transferred as part of that transaction, subject to equivalent privacy protections.",
  },
];

const retention = [
  {
    icon: FaBriefcase,
    title: "Client engagement data",
    text: "Duration of the engagement plus 5 years, or as specified in the applicable contract.",
  },
  {
    icon: FaUsers,
    title: "Employment and contractor records",
    text: "7 years following termination of the employment or contract relationship, subject to applicable labor law in each jurisdiction.",
  },
  {
    icon: FaComments,
    title: "Inquiry and pre-sales communications",
    text: "Up to 2 years from the date of last contact.",
  },
];

const rights = {
  columns: [
    { key: "right", label: "Right" },
    { key: "gdpr", label: "GDPR (EU / UK)" },
    { key: "mexico", label: "Mexico (LFPDPPP) — ARCO" },
  ],
  rows: [
    { right: "Access", gdpr: "Yes", mexico: "Yes (Acceso)" },
    {
      right: "Rectification / Correction",
      gdpr: "Yes",
      mexico: "Yes (Rectificación)",
    },
    {
      right: "Erasure / Cancellation",
      gdpr: "Yes (right to be forgotten)",
      mexico: "Yes (Cancelación)",
    },
    {
      right: "Restriction of Processing",
      gdpr: "Yes",
      mexico: "Yes (Oposición)",
    },
    { right: "Data Portability", gdpr: "Yes", mexico: "N/A under LFPDPPP" },
    { right: "Objection", gdpr: "Yes", mexico: "Yes (Oposición)" },
  ],
};

const stateRights = [
  {
    title: "Texas (TDPSA — Texas Data Privacy and Security Act)",
    text: "Rights to access, correct, delete, and obtain a portable copy of your personal data, and to opt out of targeted advertising or the sale of personal data.",
  },
  {
    title: "Utah (UCPA — Utah Consumer Privacy Act)",
    text: "Rights to access, delete, and obtain a portable copy of personal data you have provided, and to opt out of the sale of personal data.",
  },
];

const requestItems = [
  "Your full name and contact information.",
  "A description of the specific right you wish to exercise and the personal information involved.",
  "A copy of a valid government-issued ID for identity verification purposes.",
];

const contacts = [
  {
    icon: FaEnvelope,
    title: "Privacy Officer",
    text: "privacy@innovise-it.com",
    href: "mailto:privacy@innovise-it.com",
  },
  {
    icon: FaComments,
    title: "General Inquiries",
    text: "contact@innovise-it.com",
    href: "mailto:contact@innovise-it.com",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Mailing Address",
    text: "Innovise LLC, 6216 152nd PL SE, Snohomish, WA 98296, United States",
  },
  {
    icon: FaGlobe,
    title: "Website",
    text: "innovise-it.com",
    href: "https://innovise-it.com",
  },
];

/* ============ BUILDING BLOCKS ============ */
const P = ({ children, className = "" }) => (
  <p className={`text-base leading-7 text-primary-900/75 ${className}`}>
    {children}
  </p>
);

const H3 = ({ children }) => (
  <h3 className="mb-3 text-xl font-semibold text-primary-900">{children}</h3>
);

const Card = ({ children, tone = "white" }) => (
  <div
    className={`rounded-2xl border border-primary-100 p-5 sm:p-7 ${tone === "tint" ? "bg-primary-50" : "bg-white"}`}
  >
    {children}
  </div>
);

/* Highlighted note: blue rule on a light tint */
const Callout = ({ children, strong = false }) => (
  <div className="rounded-r-lg border-l-4 border-primary-500 bg-primary-50 p-4">
    <p
      className={`text-base leading-7 ${strong ? "font-semibold text-primary-900" : "text-primary-900/85"}`}
    >
      {children}
    </p>
  </div>
);

const BulletList = ({ items }) => (
  <ul className="space-y-2.5">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <FaChevronRight className="mt-1.5 shrink-0 text-xs text-primary-500" />
        <span className="text-base leading-7 text-primary-900/75">{item}</span>
      </li>
    ))}
  </ul>
);

/* Icon row used in Sharing and Retention */
const IconItem = ({ icon: Icon, title, text, tinted }) => (
  <div className={`flex gap-4 ${tinted ? "rounded-xl bg-primary-50 p-4" : ""}`}>
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-500">
      <Icon />
    </span>
    <div>
      <h4 className="mb-1 font-semibold text-primary-900">{title}</h4>
      <p className="text-base leading-7 text-primary-900/75">{text}</p>
    </div>
  </div>
);

/* Cards on small screens, a table from `sm` up — one data source for both */
const ResponsiveTable = ({ columns, rows, caption }) => {
  const [first, ...rest] = columns;
  return (
    <>
      <div className="space-y-2 sm:hidden">
        {rows.map((row) => (
          <div
            key={row[first.key]}
            className="rounded-lg border border-primary-100 bg-white p-4"
          >
            <h4 className="mb-1 font-semibold text-primary-900">
              {row[first.key]}
            </h4>
            {rest.map((c) => (
              <p key={c.key} className="text-sm text-primary-900/75">
                {rest.length > 1 && (
                  <span className="font-medium text-primary-900">
                    {c.label}:{" "}
                  </span>
                )}
                {row[c.key]}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="hidden overflow-hidden rounded-xl border border-primary-100 sm:block">
        <table className="w-full text-left">
          <caption className="sr-only">{caption}</caption>
          <thead className="bg-primary-900">
            <tr>
              {columns.map((c) => (
                <th
                  key={c.key}
                  scope="col"
                  className="p-4 text-sm font-semibold text-white"
                >
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row[first.key]}
                className={i % 2 ? "bg-primary-50" : "bg-white"}
              >
                {columns.map((c, ci) => (
                  <td
                    key={c.key}
                    className={`border-t border-primary-100 p-4 text-base ${ci === 0 ? "font-medium text-primary-900" : "text-primary-900/75"}`}
                  >
                    {row[c.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

/* Numbered section with heading */
const Section = ({ id, number, title, children, last = false }) => (
  <section
    id={id}
    aria-labelledby={`${id}-title`}
    className={`scroll-mt-28 ${last ? "" : "mb-14"}`}
  >
    <div className="mb-6 flex items-center gap-3">
      <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-primary-500 px-2 text-sm font-bold text-white">
        {number}
      </span>
      <h2
        id={`${id}-title`}
        className="text-2xl font-bold text-primary-900 sm:text-3xl"
      >
        {title}
      </h2>
    </div>
    {children}
  </section>
);

/* ============ PAGE ============ */
export default function PrivacyPolicy() {
  return (
    <main role="main" className="overflow-x-hidden bg-white">
      {/* Hero */}
      <section className="bg-primary-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-400">
            Legal
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Privacy Notice
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-white/85">
            Innovise LLC ('Innovise', 'we', 'our', or 'us') is an SAP consulting
            and managed services firm headquartered in Snohomish, Washington,
            United States, with operations in Mexico and India. We are committed
            to protecting the privacy of individuals who interact with us. This
            Privacy Notice explains what personal information we collect, how we
            use it, and your rights in relation to it.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-white/85">
            This Notice applies to personal information collected through our
            website (innovise-it.com), direct business communications, and our
            service delivery activities.
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm text-white/80">
            {meta.map((m) => (
              <li key={m.text} className="flex items-center gap-2">
                <m.icon className="text-accent-400" aria-hidden="true" />
                {m.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Table of contents for small screens */}
      <div className="border-b border-primary-100 bg-primary-50 lg:hidden">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-primary-900">
              <span className="flex items-center gap-2">
                <FaListUl className="text-primary-500" />
                Table of Contents
              </span>
              <FaChevronDown className="text-sm text-primary-900/60 transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <nav
              aria-label="Table of contents"
              className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3"
            >
              {sections.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-lg border border-primary-100 bg-white px-3 py-2 text-sm text-primary-900/80 transition-colors hover:border-primary-300 hover:text-primary-500"
                >
                  {i + 1}. {s.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:items-start">
          {/* Sticky table of contents on large screens */}
          <nav
            aria-label="Table of contents"
            className="hidden lg:sticky lg:top-28 lg:block"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-500">
              On this page
            </p>
            <ol className="space-y-1 border-l border-primary-100">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-sm text-primary-900/70 transition-colors hover:border-primary-500 hover:text-primary-900"
                  >
                    {i + 1}. {s.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="min-w-0 max-w-4xl">
            {/* 1 */}
            <Section
              id="who-we-are"
              number={1}
              title="Who We Are / Data Controller"
            >
              <Card tone="tint">
                <dl className="grid gap-6 sm:grid-cols-2">
                  {controllerInfo.map(([label, value]) => (
                    <div key={label}>
                      <dt className="mb-1 text-sm text-primary-900/60">
                        {label}
                      </dt>
                      <dd className="break-words font-medium text-primary-900">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 border-t border-primary-100 pt-5">
                  <P>
                    <strong className="text-primary-900">
                      Data Protection Officer:
                    </strong>{" "}
                    Innovise has assessed its obligations under applicable
                    privacy law and has determined that the appointment of a
                    formal Data Protection Officer is not currently required.
                  </P>
                </div>
              </Card>
            </Section>

            {/* 2 */}
            <Section id="information" number={2} title="Information We Collect">
              <div className="space-y-8">
                <div>
                  <H3>2.1 Information You Provide Directly</H3>
                  <P className="mb-4">
                    We collect personal information that you voluntarily provide
                    when you:
                  </P>
                  <BulletList items={provideDirectly} />
                  <P className="mt-4">
                    This information may include: name, job title, company name,
                    work email address, phone number, and any information you
                    choose to include in your communications.
                  </P>
                </div>
                <div>
                  <H3>2.2 Information Collected Automatically</H3>
                  <P>
                    Our website (innovise-it.com) is a static informational
                    site. We do not intentionally use advertising, analytics, or
                    behavioral tracking technologies. No personal data is
                    collected automatically when you visit our website.
                  </P>
                </div>
                <div>
                  <H3>2.3 Information We Receive from Third Parties</H3>
                  <P>
                    In the course of delivering SAP consulting services, we may
                    receive personal information about client employees from our
                    clients (e.g., system access lists, user directories). We
                    process such data solely to fulfill the contractual services
                    and treat it as Restricted data under our Information
                    Classification and Handling Policy (ISEC-AST-005).
                  </P>
                </div>
                <div>
                  <H3>2.4 Categories of Personal Information</H3>
                  <P className="mb-4">
                    The categories of personal information we may collect and
                    process include:
                  </P>
                  <ResponsiveTable
                    {...categories}
                    caption="Categories of personal information"
                  />
                  <div className="mt-4">
                    <Callout>
                      <strong className="text-primary-900">Note:</strong> We do
                      not intentionally collect Sensitive Personal Information
                      (such as health data, biometric data, racial or ethnic
                      origin, religious beliefs, or sexual orientation) unless
                      it is strictly necessary for a specific engagement and we
                      obtain appropriate consent or have another valid legal
                      basis.
                    </Callout>
                  </div>
                </div>
              </div>
            </Section>

            {/* 3 */}
            <Section id="usage" number={3} title="How We Use Your Information">
              <P className="mb-5">
                We use personal information for the following purposes and on
                the following legal bases:
              </P>
              <ResponsiveTable
                {...purposes}
                caption="Purposes and legal bases for processing"
              />
            </Section>

            {/* 4 */}
            <Section id="sharing" number={4} title="Sharing Your Information">
              <Card>
                <Callout strong>
                  We do not sell, rent, or trade personal information to third
                  parties for monetary or other valuable consideration.
                </Callout>
                <P className="my-6">
                  We may share personal information in the following limited
                  circumstances:
                </P>
                <div className="space-y-6">
                  {sharing.map((s) => (
                    <IconItem key={s.title} {...s} />
                  ))}
                </div>
                <div className="mt-6 border-t border-primary-100 pt-5">
                  <P>
                    All third-party data processors are subject to our
                    Third-Party Risk Management Policy (ISEC-VND-001) and are
                    required to maintain appropriate security controls and
                    confidentiality obligations.
                  </P>
                </div>
              </Card>
            </Section>

            {/* 5 */}
            <Section
              id="transfers"
              number={5}
              title="International Data Transfers"
            >
              <Card>
                <P>
                  Innovise operates across the United States, Mexico, and India.
                  Personal information may be transferred between these
                  jurisdictions in the course of our operations and service
                  delivery. When we transfer personal information
                  internationally, we implement appropriate safeguards
                  consistent with applicable law, including contractual data
                  protection clauses (such as Standard Contractual Clauses or
                  equivalent mechanisms) and organizational measures to ensure
                  an adequate level of protection.
                </P>
              </Card>
            </Section>

            {/* 6 */}
            <Section id="retention" number={6} title="Data Retention">
              <Card>
                <P className="mb-6">
                  We retain personal information for as long as necessary to
                  fulfill the purposes described in this Notice, or as required
                  by law. Our Data Retention Policy (ISEC-AST-008) governs
                  retention schedules by data category.
                </P>
                <h4 className="mb-4 font-semibold text-primary-900">
                  General retention periods are as follows:
                </h4>
                <div className="mb-6 space-y-3">
                  {retention.map((r) => (
                    <IconItem key={r.title} {...r} tinted />
                  ))}
                </div>
                <P>
                  When personal information is no longer required, it is
                  securely destroyed in accordance with our Data Disposal and
                  Sanitization Policy (ISEC-AST-007).
                </P>
              </Card>
            </Section>

            {/* 7 */}
            <Section id="security" number={7} title="Security">
              <Card tone="tint">
                <P className="mb-5">
                  Innovise has designed and implemented an Information Security
                  Management System (ISMS) based on the AICPA SOC 2 Trust
                  Services Criteria and the ISO/IEC 27001:2022 framework.
                  Technical and organizational measures include access controls,
                  multi-factor authentication, encryption at rest and in
                  transit, regular risk assessments, and security monitoring.
                </P>
                <div className="rounded-lg border border-primary-200 bg-white p-4">
                  <P>
                    <strong className="text-primary-900">Note:</strong> No
                    transmission over the internet is entirely secure. While we
                    apply industry-standard controls, we cannot guarantee the
                    absolute security of information transmitted to us.
                  </P>
                </div>
              </Card>
            </Section>

            {/* 8 */}
            <Section id="rights" number={8} title="Your Privacy Rights">
              <P className="mb-5">
                Depending on your jurisdiction, you may have the following
                rights:
              </P>
              <ResponsiveTable
                {...rights}
                caption="Privacy rights by jurisdiction"
              />

              <div className="mt-8 space-y-8">
                <div>
                  <H3>8.1 US State Privacy Rights</H3>
                  <P className="mb-4">
                    Residents of the following states have specific statutory
                    privacy rights under applicable state laws:
                  </P>
                  <div className="mb-4 space-y-3">
                    {stateRights.map((s) => (
                      <div
                        key={s.title}
                        className="rounded-xl bg-primary-50 p-4"
                      >
                        <h4 className="mb-1 font-semibold text-primary-900">
                          {s.title}
                        </h4>
                        <P>{s.text}</P>
                      </div>
                    ))}
                  </div>
                  <P>
                    To exercise any US state privacy right, please contact us at{" "}
                    <a
                      href="mailto:privacy@innovise-it.com"
                      className="font-medium text-primary-500 underline hover:text-primary-900"
                    >
                      privacy@innovise-it.com
                    </a>
                    . We will respond within the timeframe required by
                    applicable law. We do not sell personal information for
                    monetary consideration, and we do not engage in targeted
                    advertising using personal information collected from our
                    website or business communications.
                  </P>
                </div>

                <div>
                  <H3>8.2 Automated Decision-Making and Profiling</H3>
                  <P>
                    Innovise does not engage in automated decision-making or
                    profiling that produces legal or similarly significant
                    effects on individuals.
                  </P>
                </div>

                <div>
                  <H3>8.3 How to Submit a Privacy Request</H3>
                  <P className="mb-4">
                    To exercise any of your privacy rights, please submit a
                    written request to{" "}
                    <a
                      href="mailto:privacy@innovise-it.com"
                      className="font-medium text-primary-500 underline hover:text-primary-900"
                    >
                      privacy@innovise-it.com
                    </a>{" "}
                    including:
                  </P>
                  <BulletList items={requestItems} />
                  <P className="my-4">
                    Authorized representatives may submit requests on behalf of
                    data subjects with proof of authorization. We will
                    acknowledge receipt within 5 business days and respond
                    within the timeframe required by applicable law: within one
                    month (GDPR) or 20 business days (LFPDPPP). We reserve the
                    right to request additional information if necessary to
                    verify identity.
                  </P>
                  <Callout>
                    <strong className="text-primary-900">
                      For Mexican residents:
                    </strong>{" "}
                    If you are not satisfied with our response, you have the
                    right to file a complaint with the Instituto Nacional de
                    Transparencia, Acceso a la Información y Protección de Datos
                    Personales (INAI) at{" "}
                    <a
                      href="https://home.inai.org.mx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-primary-500 underline hover:text-primary-900"
                    >
                      https://home.inai.org.mx
                    </a>
                    .
                  </Callout>
                </div>
              </div>
            </Section>

            {/* 9 */}
            <Section id="cookies" number={9} title="Cookies and Tracking">
              <Card>
                <P>
                  We do not intentionally use advertising, analytics, or
                  behavioral tracking technologies on our website. No personal
                  data is collected automatically through your visit to
                  innovise-it.com. If this practice changes in the future, we
                  will update this Notice and provide appropriate notice and
                  consent mechanisms as required.
                </P>
              </Card>
            </Section>

            {/* 10 */}
            <Section id="children" number={10} title="Children's Privacy">
              <Card>
                <P>
                  Our website and services are directed at business
                  professionals and are not intended for individuals under the
                  age of 18. We do not knowingly collect personal information
                  from minors.
                </P>
              </Card>
            </Section>

            {/* 11 */}
            <Section id="changes" number={11} title="Changes to This Notice">
              <Card>
                <P>
                  We may update this Privacy Notice periodically to reflect
                  changes in our practices, technology, or legal requirements.
                  When we make material changes, we will update the Effective
                  Date and Version above. We encourage you to review this Notice
                  regularly. The current version is always available on our
                  website.
                </P>
              </Card>
            </Section>

            {/* 12 */}
            <section
              id="contact"
              aria-labelledby="contact-title"
              className="scroll-mt-28 rounded-2xl bg-primary-900 p-6 text-white sm:p-10"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-accent-400 px-2 text-sm font-bold text-primary-900">
                  12
                </span>
                <h2
                  id="contact-title"
                  className="text-2xl font-bold sm:text-3xl"
                >
                  Contact Us
                </h2>
              </div>
              <p className="text-base leading-7 text-white/80">
                For questions, requests, or complaints regarding this Privacy
                Notice or our data practices, please contact:
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {contacts.map((c) => (
                  <li
                    key={c.title}
                    className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-400 text-primary-900">
                      <c.icon />
                    </span>
                    <div className="min-w-0">
                      <h3 className="mb-1 font-semibold text-white">
                        {c.title}
                      </h3>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="break-all text-sm text-accent-400 underline-offset-2 hover:underline"
                        >
                          {c.text}
                        </a>
                      ) : (
                        <p className="text-sm text-white/80">{c.text}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
