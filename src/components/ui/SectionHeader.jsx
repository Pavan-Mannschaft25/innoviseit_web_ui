// import React from "react";
// import { motion } from "framer-motion";

// const SectionHeader = ({
//   title,
//   subtitle,
//   badge,
//   centered = true,
//   light = false,
//   className = "",
// }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.6 }}
//     className={`mb-10 ${centered ? "text-center" : ""} ${className}`}
//   >
//     {/* {badge && (
//       <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-primary-100 text-primary-700 mb-4">
//         {badge}
//       </span>
//     )} */}

//     <h2
//       className={`text-4xl md:text-5xl font-semibold mb-4 ${
//         light ? "text-white" : "text-[#0B2A4A]"
//       }`}
//     >
//       {title}
//     </h2>

//     {subtitle && (
//       <p
//         className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
//           light ? "text-blue-100" : "text-gray-600"
//         }`}
//       >
//         {subtitle}
//       </p>
//     )}
//   </motion.div>
// );

// export default SectionHeader;

import React from "react";

const SectionHeader = ({
  badge,
  title,
  subtitle,
  decoration,
  className = "",
}) => {
  return (
    <div className={`text-center mb-12 lg:mb-16 ${className}`}>
      {badge && <div className="mb-6 inline-block">{badge}</div>}
      {title && <div className="mb-5">{title}</div>}
      {subtitle && <div className="mb-6">{subtitle}</div>}
      {decoration && <div>{decoration}</div>}
    </div>
  );
};

export default SectionHeader;
