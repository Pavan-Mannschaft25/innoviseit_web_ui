// // import React from "react";
// // import { Link } from "react-router-dom";
// // import {
// //   FiPackage,
// //   FiShield,
// //   FiCheckCircle,
// //   FiArrowRight,
// // } from "react-icons/fi";

// // import sapImage from "../../assets/logos/sap.png";
// // import guidwireImage from "../../assets/logos/guidewire.png";

// // function PlatformsSection() {
// //   const sapServices = [
// //     "SAP S/4HANA",
// //     "Consulting & Advisory",
// //     "Implementation & Migration",
// //     "Security & Compliance",
// //     "Application Management",
// //     "Quality Engineering",
// //   ];

// //   const guidewireServices = [
// //     "Guidewire InsuranceSuite",
// //     "PolicyCenter",
// //     "BillingCenter",
// //     "ClaimCenter",
// //     "DataHub & Integration",
// //     "Upgrade & Support",
// //   ];

// //   return (
// //     <section className="relative py-6 md:py-12 overflow-hidden bg-white">
// //       <div className="max-w-8xl mx-auto px-6 lg:px-12 relative z-10">
// //         {/* Section Heading */}
// //         <div className="max-w-8xl mx-auto mb-6">
// //           <h2 className="text-3xl md:text-5xl font-bold text-primary-800 leading-tight mb-4">
// //             Two Leading Platforms. One Connected Ecosystem.
// //           </h2>
// //           <p className="text-lg text-gray-500 leading-8">
// //             We specialize in delivering end-to-end solutions for the world's
// //             leading enterprise and insurance platforms.
// //           </p>
// //         </div>

// //         {/* Platforms Grid */}
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// //           {/* SAP Card */}
// //           <div className="group bg-white rounded-3xl p-6 lg:p-6 border border-gray-200 shadow-sm  transition-all duration-300">
// //             <div className="flex flex-col items-start gap-4 mb-8">
// //               <img
// //                 src={sapImage}
// //                 alt="SAP Consulting"
// //                 className="w-40 h-20 object-contain"
// //               />

// //               <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
// //                 SAP Consulting & Implementation
// //               </h3>
// //             </div>

// //             {/* Services List */}
// //             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-6">
// //               {sapServices.map((service, index) => (
// //                 <li
// //                   key={index}
// //                   className="flex items-center gap-3 text-gray-600"
// //                 >
// //                   <FiCheckCircle className="w-5 h-5 text-primary-900 flex-shrink-0" />
// //                   <span className="font-medium">{service}</span>
// //                 </li>
// //               ))}
// //             </ul>

// //             {/* Explore Link */}
// //             <Link
// //               to="/services/sap-consulting"
// //               className="inline-flex items-center gap-2 bg-primary-800 text-[#FFF] font-semibold group-hover:gap-3 transition-all duration-300 p-4 rounded-lg"
// //             >
// //               Explore SAP Services
// //               <FiArrowRight />
// //             </Link>
// //           </div>

// //           {/* Guidewire Card */}
// //           <div className="group bg-white rounded-3xl p-6 lg:p-6 border border-gray-200 shadow-sm  transition-all duration-300">
// //             <div className="flex flex-col items-start gap-4 mb-8">
// //               <img
// //                 src={guidwireImage}
// //                 alt="SAP Consulting"
// //                 className="w-80 h-20 object-contain"
// //               />

// //               <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
// //                 Guidewire Services
// //               </h3>
// //             </div>

// //             {/* Services List */}
// //             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-6">
// //               {guidewireServices.map((service, index) => (
// //                 <li
// //                   key={index}
// //                   className="flex items-center gap-3 text-gray-600"
// //                 >
// //                   <FiCheckCircle className="w-5 h-5 text-primary-900 flex-shrink-0" />
// //                   <span className="font-medium">{service}</span>
// //                 </li>
// //               ))}
// //             </ul>

// //             {/* Explore Link */}
// //             <Link
// //               to="/services/guidewire"
// //               className="inline-flex items-center gap-2 bg-primary-800 text-[#FFF] font-semibold group-hover:gap-3 transition-all duration-300 p-4 rounded-lg"
// //             >
// //               Explore Guidewire Services
// //               <FiArrowRight />
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default PlatformsSection;

// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import sapImage from "../../assets/logos/sap.png";
// import guidewireImage from "../../assets/logos/guidewire.png";

// /*
//   Brand palette (from the Innovise logo) — see index.css
//   navy    #0b1849  -> primary-900  (dark sections, headings)
//   blue    #013dfb  -> primary-500  (buttons, links, accents on white)
//   aqua    #0cf0d1  -> accent-400   (highlights on navy only)
//   white   #ffffff

//   Corporate editorial style: solid colors, square corners, thin rules
//   instead of floating cards, large headlines, text links with arrows.
// */

// const fade = (i = 0) => ({
//   initial: { opacity: 0, y: 16 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
//   transition: { delay: i * 0.06, duration: 0.5 },
// });

// const Container = ({ children, className = "" }) => (
//   <div className={`max-w-7xl mx-auto px-4 lg:px-8 ${className}`}>
//     {children}
//   </div>
// );

// /* Section header: title on the left, description (and action) on the right,
//    sitting under a thin rule — the layout used by large consultancies. */
// const SectionHead = ({ eyebrow, title, text, dark, action }) => (
//   <motion.header
//     {...fade()}
//     className={`mb-14 grid gap-6 border-t pt-8 lg:grid-cols-12 lg:gap-12 ${dark ? "border-white/20" : "border-primary-900/15"}`}
//   >
//     <div className="lg:col-span-7">
//       {eyebrow && (
//         <p
//           className={`mb-4 text-base font-semibold ${dark ? "text-accent-400" : "text-primary-500"}`}
//         >
//           {eyebrow}
//         </p>
//       )}
//       <h2
//         className={`text-4xl font-semibold leading-[1.1] tracking-tight lg:text-5xl ${dark ? "text-white" : "text-primary-900"}`}
//       >
//         {title}
//       </h2>
//     </div>
//     {(text || action) && (
//       <div className="flex flex-col justify-end gap-6 lg:col-span-5">
//         {text && (
//           <p
//             className={`text-lg leading-relaxed ${dark ? "text-white/75" : "text-primary-900/70"}`}
//           >
//             {text}
//           </p>
//         )}
//         {action}
//       </div>
//     )}
//   </motion.header>
// );

// /* Text link with an arrow that slides on hover */
// const ArrowLink = ({ to, children, dark }) => (
//   <Link
//     to={to}
//     className={`group inline-flex items-center gap-2 text-base font-semibold underline-offset-4 hover:underline focus:outline-none focus-visible:underline ${dark ? "text-accent-400" : "text-primary-500"}`}
//   >
//     {children}
//     <span
//       className="transition-transform duration-200 group-hover:translate-x-1"
//       aria-hidden="true"
//     >
//       →
//     </span>
//   </Link>
// );

// const platforms = [
//   {
//     logo: sapImage,
//     logoAlt: "SAP",
//     logoClass: "h-14 w-32",
//     title: "SAP Consulting & Implementation",
//     summary:
//       "Intelligent enterprise transformation on SAP S/4HANA, from advisory to ongoing management.",
//     services: [
//       "SAP S/4HANA",
//       "Consulting & Advisory",
//       "Implementation & Migration",
//       "Security & Compliance",
//       "Application Management",
//       "Quality Engineering",
//     ],
//     link: "/services/sap-consulting",
//     cta: "Explore SAP services",
//   },
//   {
//     logo: guidewireImage,
//     logoAlt: "Guidewire",
//     logoClass: "h-14 w-56",
//     title: "Guidewire Services",
//     summary:
//       "Modern core insurance platforms for policy, billing and claims, built and run by specialists.",
//     services: [
//       "Guidewire InsuranceSuite",
//       "PolicyCenter",
//       "BillingCenter",
//       "ClaimCenter",
//       "DataHub & Integration",
//       "Upgrade & Support",
//     ],
//     link: "/services/guidewire",
//     cta: "Explore Guidewire services",
//   },
// ];

// /* Two platforms side by side, divided by a single rule — no floating cards */
// function PlatformsSection() {
//   return (
//     <section className="bg-white pb-20 pt-4 lg:pb-24">
//       <Container>
//         <SectionHead
//           eyebrow="Our platforms"
//           title="Two leading platforms. One connected ecosystem."
//           text="We specialize in delivering end-to-end solutions for the world's leading enterprise and insurance platforms."
//         />
//         <div className="grid border border-primary-900/15 lg:grid-cols-2">
//           {platforms.map((p, i) => (
//             <motion.article
//               key={p.title}
//               {...fade(i)}
//               className={`flex flex-col p-8 lg:p-12 ${i === 1 ? "border-t border-primary-900/15 lg:border-l lg:border-t-0" : ""}`}
//             >
//               <img
//                 src={p.logo}
//                 alt={p.logoAlt}
//                 loading="lazy"
//                 className={`mb-8 object-contain object-left ${p.logoClass}`}
//               />
//               <h3 className="mb-3 text-3xl font-semibold tracking-tight text-primary-900">
//                 {p.title}
//               </h3>
//               <p className="mb-8 max-w-lg text-lg leading-relaxed text-primary-900/70">
//                 {p.summary}
//               </p>
//               <ul className="mb-10 grid border-t border-primary-900/10 sm:grid-cols-2 sm:gap-x-8">
//                 {p.services.map((s) => (
//                   <li
//                     key={s}
//                     className="flex items-center gap-3 border-b border-primary-900/10 py-3 text-base text-primary-900"
//                   >
//                     <span
//                       className="h-1.5 w-1.5 shrink-0 bg-primary-500"
//                       aria-hidden="true"
//                     />
//                     {s}
//                   </li>
//                 ))}
//               </ul>
//               <div className="mt-auto">
//                 <ArrowLink to={p.link}>{p.cta}</ArrowLink>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }

// export default PlatformsSection;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import Container from "../ui/Container";
import sapImage from "../../assets/logos/sap.png";
import guidewireImage from "../../assets/logos/guidewire.png";

const platforms = [
  {
    logo: sapImage,
    logoAlt: "SAP",
    logoClass: "h-14 w-auto",
    title: "SAP Consulting & Implementation",
    services: [
      "SAP S/4HANA",
      "Consulting & Advisory",
      "Implementation & Migration",
      "Security & Compliance",
      "Application Management",
      "Quality Engineering",
    ],
    path: "/services/sap-consulting",
    cta: "Explore SAP Services",
  },
  {
    logo: guidewireImage,
    logoAlt: "Guidewire",
    logoClass: "h-12 w-auto",
    title: "Guidewire Services",
    services: [
      "Guidewire InsuranceSuite",
      "PolicyCenter",
      "BillingCenter",
      "ClaimCenter",
      "DataHub & Integration",
      "Upgrade & Support",
    ],
    path: "/services/guidewire",
    cta: "Explore Guidewire Services",
  },
];

function PlatformsSection() {
  return (
    <section className="bg-primary-50 py-10 lg:py-14">
      <Container>
        <div className="mb-8 max-w-3xl lg:mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-500">
            Core Platforms
          </p>
          <h2 className="text-3xl font-bold leading-tight text-primary-900 lg:text-4xl">
            Two Leading Platforms. One Connected Ecosystem.
          </h2>
          <p className="mt-3 text-lg text-primary-900/70">
            We specialize in delivering end-to-end solutions for the world's
            leading enterprise and insurance platforms.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {platforms.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="flex flex-col overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm shadow-primary-900/5"
            >
              <span className="h-1 bg-primary-500" aria-hidden="true" />
              <div className="flex flex-1 flex-col p-6 lg:p-8">
                <div className="mb-5 flex h-16 items-center">
                  <img
                    src={p.logo}
                    alt={p.logoAlt}
                    className={`${p.logoClass} object-contain`}
                  />
                </div>
                <h3 className="mb-5 text-2xl font-bold text-primary-900">
                  {p.title}
                </h3>
                <ul className="mb-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {p.services.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-3 text-base text-primary-900/85"
                    >
                      <FiCheckCircle
                        className="h-5 w-5 shrink-0 text-primary-500"
                        aria-hidden="true"
                      />
                      {s}
                    </li>
                  ))}
                </ul>
                <Link
                  to={p.path}
                  className="group mt-auto inline-flex items-center gap-2 self-start rounded-lg bg-primary-500 px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                >
                  {p.cta}
                  <FiArrowRight
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default PlatformsSection;
