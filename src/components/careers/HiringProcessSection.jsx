// import React, { memo } from "react";
// import { PROCESS_STEPS, BRAND } from "../../constants/careersConstants";
// import { SectionTitle, Gold } from "../common/SectionPrimitives";

// const ProcessStep = memo(({ step, isLast }) => (
//   <div className="reveal text-center relative">
//     {!isLast && <div className="hidden lg:block step-connector" />}
//     <div
//       className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 text-lg font-bold"
//       style={{
//         background: "#FFF",
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
//         <SectionTitle light>Our Hiring Process</SectionTitle>
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
// export default HiringProcessSection;

import React, { memo } from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import { PROCESS_STEPS } from "../../constants/careersConstants";

/*
  Same "process strip" layout as the home page journey, on navy:
  each step has a top rule (turns aqua on hover), a number, title and text.
*/
const HiringProcessSection = memo(() => (
  <section className="bg-primary-900 py-10 lg:py-14">
    <Container>
      <div className="mb-8 max-w-3xl lg:mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-400">
          How We Hire
        </p>
        <h2 className="text-3xl font-bold leading-tight text-white lg:text-4xl">
          Our Hiring Process
        </h2>
        <p className="mt-3 text-lg text-white/75">
          A streamlined {PROCESS_STEPS.length}-step journey from application to
          onboarding.
        </p>
      </div>

      <ol className="grid sm:grid-cols-2 lg:grid-cols-5">
        {PROCESS_STEPS.map((step, i) => (
          <motion.li
            key={step.num ?? i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className="group border-t-2 border-white/15 py-6 transition-colors duration-300 hover:border-t-accent-400 sm:pr-6 lg:border-l lg:border-l-white/10 lg:px-6 lg:first:border-l-0 lg:first:pl-0"
          >
            <span className="mb-4 block text-sm font-bold tracking-widest text-accent-400">
              {String(step.num ?? i + 1).padStart(2, "0")}
            </span>
            <h3 className="mb-2 text-lg font-semibold text-white">
              {step.title}
            </h3>
            <p className="text-base leading-relaxed text-white/70">
              {step.desc}
            </p>
          </motion.li>
        ))}
      </ol>
    </Container>
  </section>
));
HiringProcessSection.displayName = "HiringProcessSection";

export default HiringProcessSection;
