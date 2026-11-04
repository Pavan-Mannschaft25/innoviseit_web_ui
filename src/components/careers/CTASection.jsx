// import React, { memo } from "react";
// import { Link } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";
// import { Gold } from "../common/SectionPrimitives";

// const CTASection = memo(() => (
//   <section className="py-12 relative overflow-hidden bg-white">
//     <div className="absolute inset-0 dot-pattern opacity-[0.02]" />
//     <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
//       <div className="reveal max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
//           Build the Future With Us
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
//             className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-primary-800 text-[#FFF] font-semibold hover:bg-primary-600 transition-all duration-300 hover:scale-105"
//           >
//             Explore Our Culture <FaArrowRight className="text-sm" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   </section>
// ));
// export default CTASection;

import React, { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Container from "../ui/Container";

const CTASection = memo(() => (
  <section className="bg-white py-10 lg:py-14">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-primary-100 bg-primary-50 p-8 lg:flex-row lg:items-center lg:p-10"
      >
        <div className="max-w-3xl">
          <h2 className="mb-3 text-2xl font-bold text-primary-900 lg:text-3xl">
            Build the Future With Us
          </h2>
          <p className="text-lg leading-relaxed text-primary-900/70">
            Great careers aren't always about the perfect opening today. We're
            continuously growing across engineering, product, design and
            business teams. Explore our culture and discover where your skills
            can make a lasting impact.
          </p>
        </div>
        <Link
          to="/culture/values"
          className="group inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary-500 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
        >
          Explore Our Culture
          <FaArrowRight
            className="text-sm transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </motion.div>
    </Container>
  </section>
));
CTASection.displayName = "CTASection";

export default CTASection;
