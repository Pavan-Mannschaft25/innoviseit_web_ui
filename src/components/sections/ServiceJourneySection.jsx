// // import React from "react";
// // import {
// //   FiCompass,
// //   FiLayers,
// //   FiCheckSquare,
// //   FiGrid,
// //   FiTrendingUp,
// // } from "react-icons/fi";

// // function ServiceJourneySection() {
// //   const stages = [
// //     {
// //       icon: <FiCompass className="w-7 h-7" />,
// //       title: "Consult & Strategize",
// //       description:
// //         "Understand business goals and define a clear technology roadmap.",
// //     },
// //     {
// //       icon: <FiLayers className="w-7 h-7" />,
// //       title: "Implement & Integrate",
// //       description:
// //         "Seamless deployment and integration into your existing ecosystem.",
// //     },
// //     {
// //       icon: <FiCheckSquare className="w-7 h-7" />,
// //       title: "Test & Assure",
// //       description:
// //         "Ensure quality, security, and high performance across platforms.",
// //     },
// //     {
// //       icon: <FiGrid className="w-7 h-7" />,
// //       title: "Manage Applications",
// //       description:
// //         "Reliable ongoing management and support for your applications.",
// //     },
// //     {
// //       icon: <FiTrendingUp className="w-7 h-7" />,
// //       title: "Optimize & Grow",
// //       description:
// //         "Continuously innovate and optimize for long-term business success.",
// //     },
// //   ];

// //   return (
// //     <section className="relative py-10 md:py-12 overflow-hidden bg-gray-50">
// //       <div className="max-w-8xl mx-auto px-6 lg:px-12 relative z-10">
// //         {/* Section Heading */}
// //         <div className="max-w-8xl mx-auto mb-10">
// //           <h2 className="text-3xl md:text-5xl font-bold text-primary-800 leading-tight mb-4">
// //             A Connected Service Journey
// //           </h2>
// //           <p className="text-lg text-gray-500 leading-8">
// //             From strategy to ongoing support, we deliver seamless and integrated
// //             services across SAP, Guidewire and other technologies.
// //           </p>
// //         </div>

// //         {/* Journey Grid */}
// //         <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
// //           {/* Connecting Line (Visible only on large screens) */}
// //           <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gray-200"></div>

// //           {stages.map((stage, index) => (
// //             <div
// //               key={index}
// //               className="relative flex flex-col items-center text-center"
// //             >
// //               {/* Icon Container with Number Badge */}
// //               <div className="relative z-10 w-18 h-18 flex items-center justify-center bg-primary-900 text-[#FFF] rounded-full shadow-md border border-gray-100 mb-6">
// //                 {stage.icon}
// //               </div>

// //               {/* Content */}
// //               <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
// //                 {stage.title}
// //               </h3>
// //               <p className="text-sm text-gray-500 leading-6 max-w-xs">
// //                 {stage.description}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default ServiceJourneySection;

// import React from "react";
// import { motion } from "framer-motion";

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

// const stages = [
//   {
//     title: "Consult & strategize",
//     description:
//       "Understand business goals and define a clear technology roadmap.",
//   },
//   {
//     title: "Implement & integrate",
//     description:
//       "Seamless deployment and integration into your existing ecosystem.",
//   },
//   {
//     title: "Test & assure",
//     description:
//       "Ensure quality, security, and high performance across platforms.",
//   },
//   {
//     title: "Manage applications",
//     description:
//       "Reliable ongoing management and support for your applications.",
//   },
//   {
//     title: "Optimize & grow",
//     description:
//       "Continuously innovate and optimize for long-term business success.",
//   },
// ];

// /* A five-stage timeline: large step numbers on a shared rule.
//    Numbers are used because this really is a sequence. */
// function ServiceJourneySection() {
//   return (
//     <section className="bg-primary-50 py-20 lg:py-24">
//       <Container>
//         <SectionHead
//           eyebrow="How we work"
//           title="A connected service journey"
//           text="From strategy to ongoing support, we deliver seamless and integrated services across SAP, Guidewire and other technologies."
//         />
//         <ol className="grid border-t-2 border-primary-900 sm:grid-cols-2 lg:grid-cols-5">
//           {stages.map((s, i) => (
//             <motion.li
//               key={s.title}
//               {...fade(i)}
//               className="relative border-b border-primary-900/10 py-8 sm:pr-8 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0"
//             >
//               <span
//                 className="absolute -top-[5px] left-0 h-2 w-2 bg-primary-500"
//                 aria-hidden="true"
//               />
//               <p className="mb-6 text-5xl font-semibold tabular-nums text-primary-500">
//                 {String(i + 1).padStart(2, "0")}
//               </p>
//               <h3 className="mb-3 text-xl font-semibold text-primary-900">
//                 {s.title}
//               </h3>
//               <p className="text-base leading-relaxed text-primary-900/70">
//                 {s.description}
//               </p>
//             </motion.li>
//           ))}
//         </ol>
//       </Container>
//     </section>
//   );
// }

// export default ServiceJourneySection;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiCompass,
  FiLayers,
  FiCheckSquare,
  FiGrid,
  FiTrendingUp,
  FiArrowRight,
} from "react-icons/fi";
import Container from "../ui/Container";

/*
  Corporate "process strip" layout (same family as the mega menu):

  HOW WE WORK                                   Talk to our experts →
  A Connected Service Journey
  ───────────┬───────────┬───────────┬───────────┬───────────
  01         │ 02        │ 03        │ 04        │ 05
  icon       │ icon      │ icon      │ icon      │ icon
  Title      │ Title     │ Title     │ Title     │ Title
  Text       │ Text      │ Text      │ Text      │ Text

  Each step has its own top rule that turns blue on hover.
*/

const stages = [
  {
    icon: FiCompass,
    title: "Consult & Strategize",
    description:
      "Understand business goals and define a clear technology roadmap.",
  },
  {
    icon: FiLayers,
    title: "Implement & Integrate",
    description:
      "Seamless deployment and integration into your existing ecosystem.",
  },
  {
    icon: FiCheckSquare,
    title: "Test & Assure",
    description:
      "Ensure quality, security, and high performance across platforms.",
  },
  {
    icon: FiGrid,
    title: "Manage Applications",
    description:
      "Reliable ongoing management and support for your applications.",
  },
  {
    icon: FiTrendingUp,
    title: "Optimize & Grow",
    description:
      "Continuously innovate and optimize for long-term business success.",
  },
];

function ServiceJourneySection() {
  return (
    <section className="bg-white py-10 lg:py-14">
      <Container>
        {/* Heading row */}
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between lg:mb-10">
          <div className="max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-500">
              How We Work
            </p>
            <h2 className="text-3xl font-bold leading-tight text-primary-900 lg:text-4xl">
              A Connected Service Journey
            </h2>
            <p className="mt-3 text-lg text-primary-900/70">
              From strategy to ongoing support, we deliver seamless and
              integrated services across SAP, Guidewire and other technologies.
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center gap-2 text-base font-semibold text-primary-500 hover:text-primary-900 focus:outline-none focus-visible:underline"
          >
            Talk to our experts
            <FiArrowRight
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Steps */}
        <ol className="grid sm:grid-cols-2 lg:grid-cols-5">
          {stages.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="group relative border-t-2 border-primary-100 py-6 transition-colors duration-300 hover:border-t-primary-500 sm:pr-6 lg:border-l lg:border-l-primary-100 lg:px-6 lg:first:border-l-0 lg:first:pl-0"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm font-bold tracking-widest text-primary-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <s.icon
                  className="text-2xl text-primary-900/40 transition-colors duration-300 group-hover:text-primary-500"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mb-2 text-lg font-semibold leading-snug text-primary-900">
                {s.title}
              </h3>
              <p className="text-base leading-relaxed text-primary-900/70">
                {s.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export default ServiceJourneySection;
