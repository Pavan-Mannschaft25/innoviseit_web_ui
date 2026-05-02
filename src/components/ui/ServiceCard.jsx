// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { FaArrowRight } from "react-icons/fa";

// // const StoryCard = ({ data }) => {
// //   return (
// //     <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full min-h-[380px]">
// //       {" "}
// //       {/* Image */}
// //       <div className="overflow-hidden">
// //         <img
// //           src={data.image}
// //           alt={data.title}
// //           className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-500"
// //         />
// //       </div>
// //       {/* Content */}
// //       <div className="p-5 flex flex-col flex-grow">
// //         <h3 className="text-lg font-semibold text-gray-900 mb-2">
// //           {data.title}
// //         </h3>

// //         <p className="text-gray-600 text-sm mb-4 flex-grow">
// //           {data.description}
// //         </p>

// //         {/* CTA */}
// //         <Link
// //           to={data.link}
// //           className="inline-flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all"
// //         >
// //           Read more <FaArrowRight size={14} />
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default StoryCard;

// import React from "react";
// import { Link } from "react-router-dom";
// import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
// import { motion } from "framer-motion";

// const ServiceCard = ({ data, index = 0 }) => {
//   // Animation variants
//   const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: index * 0.1,
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <motion.div
//       variants={cardVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-50px" }}
//       className="group relative h-full"
//     >
//       <Link
//         to={data.link}
//         className="block h-full"
//         aria-label={`Learn more about ${data.title}`}
//       >
//         <div
//           className="relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)]
//           hover:shadow-[0_12px_40px_-8px_rgba(59,130,246,0.25)]
//           transition-all duration-500 ease-out h-full min-h-[420px] flex flex-col
//           border border-transparent hover:border-blue-100/50"
//         >
//           {/* Image Container with Overlay */}
//           <div className="relative h-60 overflow-hidden">
//             <img
//               src={data.image}
//               alt={data.title}
//               loading="lazy"
//               className="w-full h-full object-cover transform
//                 group-hover:scale-110 transition-transform duration-700 ease-out"
//             />

//             {/* Gradient Overlay on Hover */}
//             <div
//               className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
//               opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//             />

//             {/* Category Badge */}
//             {data.category && (
//               <div className="absolute top-4 left-4 z-10">
//                 <span
//                   className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
//                   bg-white/95 backdrop-blur-sm text-gray-800 shadow-sm
//                   group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300"
//                 >
//                   {data.category}
//                 </span>
//               </div>
//             )}

//             {/* External Link Icon on Hover */}
//             <div
//               className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full
//               bg-white/90 backdrop-blur-sm flex items-center justify-center
//               opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
//               transition-all duration-500 delay-100"
//             >
//               <FaExternalLinkAlt className="text-primary-600 text-sm" />
//             </div>
//           </div>

//           {/* Content Section */}
//           <div className="flex-1 p-6 flex flex-col">
//             {/* Title */}
//             <h3
//               className="text-xl font-bold text-gray-900 mb-3 line-clamp-2
//               group-hover:text-primary-600 transition-colors duration-300"
//             >
//               {data.title}
//             </h3>

//             {/* Description */}
//             <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3 flex-grow">
//               {data.description}
//             </p>

//             {/* Features Tags (Optional) */}
//             {data.features && data.features.length > 0 && (
//               <div className="flex flex-wrap gap-2 mb-5">
//                 {data.features.slice(0, 3).map((feature, idx) => (
//                   <span
//                     key={idx}
//                     className="px-2.5 py-1 text-xs font-medium rounded-md
//                     bg-gray-100 text-gray-600 group-hover:bg-primary-50
//                     group-hover:text-primary-700 transition-colors duration-300"
//                   >
//                     {feature}
//                   </span>
//                 ))}
//               </div>
//             )}

//             {/* CTA Button */}
//             <div className="mt-auto pt-4 border-t border-gray-100 group-hover:border-primary-100 transition-colors duration-300">
//               <span
//                 className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600
//                 group-hover:gap-3 transition-all duration-300"
//               >
//                 Explore Service
//                 <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
//               </span>
//             </div>
//           </div>

//           {/* Animated Bottom Border */}
//           <div
//             className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-blue-500 to-cyan-500
//             scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
//           />
//         </div>
//       </Link>
//     </motion.div>
//   );
// };

// export default ServiceCard;

import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

const ServiceCard = ({ data, index = 0 }) => {
  return (
    <div className="group relative h-full w-full flex flex-col">
      <Link
        to={data.link}
        className="block h-full w-full"
        aria-label={`Learn more about ${data.title}`}
      >
        <div
          className="relative bg-white overflow-hidden 
          shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] 
          hover:shadow-[0_12px_40px_-8px_rgba(59,130,246,0.25)] 
          transition-all duration-500 ease-out 
          h-full w-full flex flex-col
          border border-transparent hover:border-blue-100/50"
        >
          {/* Image Container - Fixed Height */}
          <div className="relative w-full h-56 lg:h-60 overflow-hidden flex-shrink-0">
            <img
              src={data.image}
              alt={data.title}
              loading="lazy"
              className="w-full h-full object-cover transform 
                group-hover:scale-110 transition-transform duration-700 ease-out"
            />

            {/* Gradient Overlay on Hover */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
              opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* Category Badge */}
            {data.category && (
              <div className="absolute top-4 left-4 z-10">
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold 
                  bg-white/95 backdrop-blur-sm text-gray-800 shadow-sm
                  group-hover:bg-[#0B2A4A] group-hover:text-white transition-colors duration-300"
                >
                  {data.category}
                </span>
              </div>
            )}

            {/* External Link Icon on Hover */}
            <div
              className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full 
              bg-white/90 backdrop-blur-sm flex items-center justify-center
              opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
              transition-all duration-500 delay-100"
            >
              <FaExternalLinkAlt className="text-[#0B2A4A] text-sm" />
            </div>
          </div>

          {/* Content Section - Flex Grow for Equal Height */}
          <div className="flex-1 p-5 lg:p-6 flex flex-col min-h-0">
            {/* Title */}
            <h3
              className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3 line-clamp-2 
              group-hover:text-[#0B2A4A] transition-colors duration-300"
            >
              {data.title}
            </h3>

            {/* Description - Flex Grow */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
              {data.description}
            </p>

            {/* Features Tags (Optional) */}
            {data.features && data.features.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
                {data.features.slice(0, 3).map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-medium rounded-md 
                    bg-gray-100 text-gray-600 group-hover:bg-primary-50 
                    group-hover:text-[#0B2A4A] transition-colors duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            )}

            {/* CTA Button - Always at Bottom */}
            <div className="mt-auto pt-4 border-t border-gray-100 group-hover:border-primary-100 transition-colors duration-300 flex-shrink-0">
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2A4A] 
                group-hover:gap-3 transition-all duration-300"
              >
                Explore Service
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>

          {/* Animated Bottom Border */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1 bg-[#0B2A4A] 
            scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
          />
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
