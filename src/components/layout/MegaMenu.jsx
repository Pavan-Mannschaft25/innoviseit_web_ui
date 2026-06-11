// import React from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import * as FaIcons from "react-icons/fa";

// const MegaMenu = ({ data, isOpen, onClose }) => {
//   if (!isOpen) return null;

//   // Dynamic icon resolver
//   const IconComponent = ({ iconName }) => {
//     const Icon = FaIcons[iconName] || FaIcons.FaCircle;
//     return <Icon className="text-lg" />;
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           transition={{ duration: 0.2 }}
//           className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[100vw] max-w-[900px] bg-white max-h-[80vh] overflow-y-auto z-50"
//           onMouseLeave={onClose}
//         >
//           <div className="grid grid-cols-2 gap-0 divide-x divide-gray-100">
//             {data.map((section, sectionIndex) => (
//               <div key={sectionIndex} className="p-8">
//                 <h3 className="text-sm font-bold text-[#0B2A4A] uppercase tracking-wider mb-2 pb-3 border-b border-gray-100">
//                   {section.title}
//                 </h3>

//                 <ul className="space-y-1">
//                   {section.items.map((item, itemIndex) => (
//                     <li key={itemIndex}>
//                       <Link
//                         to={item.path}
//                         className="group flex items-start gap-3 p-3 -mx-3 rounded-xl hover:bg-primary-50 transition-colors duration-200"
//                         onClick={onClose}
//                       >
//                         <div className="mt-0.5 w-8 h-8 rounded-lg bg-primary-100 text-[#0B2A4A] flex items-center justify-center group-hover:bg-primary-200 group-hover:text-[#0B2A4A] transition-colors flex-shrink-0">
//                           <IconComponent iconName={item.icon} />
//                         </div>

//                         <div className="min-w-0">
//                           <p className="font-semibold text-sm text-gray-900 group-hover:text-[#0B2A4A] transition-colors truncate">
//                             {item.name}
//                           </p>
//                           <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
//                             {item.desc}
//                           </p>
//                         </div>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default MegaMenu;

import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import * as FaIcons from "react-icons/fa";

const MegaMenu = ({ data, isOpen, onClose }) => {
  if (!isOpen) return null;

  // Dynamic icon resolver
  const IconComponent = ({ iconName }) => {
    const Icon = FaIcons[iconName] || FaIcons.FaCircle;
    return <Icon className="text-lg" />;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[100vw] max-w-[900px] bg-[#0B1D33] max-h-[80vh] overflow-y-auto z-50 rounded-2xl shadow-2xl border border-[#1A4570]"
          onMouseLeave={onClose}
        >
          <div className="grid grid-cols-2 gap-0 divide-x divide-[#1A4570]">
            {data.map((section, sectionIndex) => (
              <div key={sectionIndex} className="p-8">
                <h3 className="text-sm font-bold text-[#FDB913] uppercase tracking-wider mb-2 pb-3 border-b border-[#1A4570]">
                  {section.title}
                </h3>

                <ul className="space-y-1">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        to={item.path}
                        className="group flex items-start gap-3 p-3 -mx-3 rounded-xl hover:bg-[#143A63] transition-colors duration-200"
                        onClick={onClose}
                      >
                        <div className="mt-0.5 w-8 h-8 rounded-lg bg-[#143A63] text-[#FDB913] flex items-center justify-center group-hover:bg-[#FDB913] group-hover:text-[#0B1D33] transition-colors flex-shrink-0">
                          <IconComponent iconName={item.icon} />
                        </div>

                        <div className="min-w-0">
                          <p className="font-semibold text-sm text-white group-hover:text-[#FDB913] transition-colors truncate">
                            {item.name}
                          </p>
                          <p className="text-xs text-slate-400 mt-0.5 line-clamp-2 group-hover:text-slate-300">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
