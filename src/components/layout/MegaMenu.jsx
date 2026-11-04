// // // import React from "react";
// // // import { Link } from "react-router-dom";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import * as FaIcons from "react-icons/fa";

// // // const MegaMenu = ({ data, isOpen, onClose }) => {
// // //   if (!isOpen) return null;

// // //   // Dynamic icon resolver
// // //   const IconComponent = ({ iconName }) => {
// // //     const Icon = FaIcons[iconName] || FaIcons.FaCircle;
// // //     return <Icon className="text-lg" />;
// // //   };

// // //   return (
// // //     <AnimatePresence>
// // //       {isOpen && (
// // //         <motion.div
// // //           initial={{ opacity: 0, y: -10 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           exit={{ opacity: 0, y: -10 }}
// // //           transition={{ duration: 0.2 }}
// // //           className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[100vw] max-w-[900px] bg-white max-h-[80vh] overflow-y-auto z-50"
// // //           onMouseLeave={onClose}
// // //         >
// // //           <div className="grid grid-cols-2 gap-0 divide-x divide-gray-100">
// // //             {data.map((section, sectionIndex) => (
// // //               <div key={sectionIndex} className="p-8">
// // //                 <h3 className="text-sm font-bold text-[#0B2A4A] uppercase tracking-wider mb-2 pb-3 border-b border-gray-100">
// // //                   {section.title}
// // //                 </h3>

// // //                 <ul className="space-y-1">
// // //                   {section.items.map((item, itemIndex) => (
// // //                     <li key={itemIndex}>
// // //                       <Link
// // //                         to={item.path}
// // //                         className="group flex items-start gap-3 p-3 -mx-3 rounded-xl hover:bg-primary-50 transition-colors duration-200"
// // //                         onClick={onClose}
// // //                       >
// // //                         <div className="mt-0.5 w-8 h-8 rounded-lg bg-primary-100 text-[#0B2A4A] flex items-center justify-center group-hover:bg-primary-200 group-hover:text-[#0B2A4A] transition-colors flex-shrink-0">
// // //                           <IconComponent iconName={item.icon} />
// // //                         </div>

// // //                         <div className="min-w-0">
// // //                           <p className="font-semibold text-sm text-gray-900 group-hover:text-[#0B2A4A] transition-colors truncate">
// // //                             {item.name}
// // //                           </p>
// // //                           <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
// // //                             {item.desc}
// // //                           </p>
// // //                         </div>
// // //                       </Link>
// // //                     </li>
// // //                   ))}
// // //                 </ul>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </motion.div>
// // //       )}
// // //     </AnimatePresence>
// // //   );
// // // };

// // // export default MegaMenu;

// // // // import React from "react";
// // // // import { Link } from "react-router-dom";
// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import * as FaIcons from "react-icons/fa";

// // // // const MegaMenu = ({ data, isOpen, onClose }) => {
// // // //   if (!isOpen) return null;

// // // //   // Dynamic icon resolver
// // // //   const IconComponent = ({ iconName }) => {
// // // //     const Icon = FaIcons[iconName] || FaIcons.FaCircle;
// // // //     return <Icon className="text-lg" />;
// // // //   };

// // // //   return (
// // // //     <AnimatePresence>
// // // //       {isOpen && (
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: -10 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           exit={{ opacity: 0, y: -10 }}
// // // //           transition={{ duration: 0.2 }}
// // // //           className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[100vw] max-w-[900px] bg-[#0B1D33] max-h-[80vh] overflow-y-auto z-50 rounded-2xl shadow-2xl border border-[#1A4570]"
// // // //           onMouseLeave={onClose}
// // // //         >
// // // //           <div className="grid grid-cols-2 gap-0 divide-x divide-[#1A4570]">
// // // //             {data.map((section, sectionIndex) => (
// // // //               <div key={sectionIndex} className="p-8">
// // // //                 <h3 className="text-sm font-bold text-[#FFF] uppercase tracking-wider mb-2 pb-3 border-b border-[#1A4570]">
// // // //                   {section.title}
// // // //                 </h3>

// // // //                 <ul className="space-y-1">
// // // //                   {section.items.map((item, itemIndex) => (
// // // //                     <li key={itemIndex}>
// // // //                       <Link
// // // //                         to={item.path}
// // // //                         className="group flex items-start gap-3 p-3 -mx-3 rounded-xl hover:bg-[#143A63] transition-colors duration-200"
// // // //                         onClick={onClose}
// // // //                       >
// // // //                         <div className="mt-0.5 w-8 h-8 rounded-lg bg-[#143A63] text-[#FFF] flex items-center justify-center group-hover:bg-[#FFF] group-hover:text-[#0B1D33] transition-colors flex-shrink-0">
// // // //                           <IconComponent iconName={item.icon} />
// // // //                         </div>

// // // //                         <div className="min-w-0">
// // // //                           <p className="font-semibold text-sm text-white group-hover:text-[#FFF] transition-colors truncate">
// // // //                             {item.name}
// // // //                           </p>
// // // //                           <p className="text-xs text-slate-400 mt-0.5 line-clamp-2 group-hover:text-slate-300">
// // // //                             {item.desc}
// // // //                           </p>
// // // //                         </div>
// // // //                       </Link>
// // // //                     </li>
// // // //                   ))}
// // // //                 </ul>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </motion.div>
// // // //       )}
// // // //     </AnimatePresence>
// // // //   );
// // // // };

// // // // export default MegaMenu;

// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { motion, AnimatePresence } from "framer-motion";
// // import * as FaIcons from "react-icons/fa";

// // const MegaMenu = ({ data, isOpen, onClose }) => {
// //   if (!isOpen) return null;

// //   // Dynamic icon resolver
// //   const IconComponent = ({ iconName }) => {
// //     const Icon = FaIcons[iconName] || FaIcons.FaCircle;
// //     return <Icon className="text-lg" />;
// //   };

// //   // Determine layout based on the number of sections passed
// //   const isSingleColumn = data.length === 1;
// //   const containerWidth = isSingleColumn ? "max-w-[450px]" : "max-w-[900px]";
// //   const gridLayout = isSingleColumn
// //     ? "grid grid-cols-1"
// //     : "grid grid-cols-2 divide-x divide-gray-100";

// //   return (
// //     <AnimatePresence>
// //       {isOpen && (
// //         <motion.div
// //           initial={{ opacity: 0, y: -10 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           exit={{ opacity: 0, y: -10 }}
// //           transition={{ duration: 0.2 }}
// //           className={`absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[100vw] ${containerWidth} bg-white max-h-[80vh] overflow-y-auto z-50 rounded-2xl shadow-2xl border border-gray-100`}
// //         >
// //           <div className={gridLayout}>
// //             {data.map((section, sectionIndex) => (
// //               <div key={sectionIndex} className="p-8">
// //                 <h3 className="text-sm font-bold text-[#0B2A4A] uppercase tracking-wider mb-2 pb-3 border-b border-gray-100">
// //                   {section.title}
// //                 </h3>

// //                 <ul className="space-y-1">
// //                   {section.items.map((item, itemIndex) => (
// //                     <li key={itemIndex}>
// //                       <Link
// //                         to={item.path}
// //                         className="group flex items-start gap-3 p-3 -mx-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
// //                         onClick={onClose}
// //                       >
// //                         <div className="mt-0.5 w-8 h-8 rounded-lg bg-[#0B2A4A]/10 text-[#0B2A4A] flex items-center justify-center group-hover:bg-[#0B2A4A] group-hover:text-white transition-colors flex-shrink-0">
// //                           <IconComponent iconName={item.icon} />
// //                         </div>

// //                         <div className="min-w-0">
// //                           <p className="font-semibold text-sm text-gray-900 group-hover:text-[#0B2A4A] transition-colors truncate">
// //                             {item.name}
// //                           </p>
// //                           <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
// //                             {item.desc}
// //                           </p>
// //                         </div>
// //                       </Link>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             ))}
// //           </div>
// //         </motion.div>
// //       )}
// //     </AnimatePresence>
// //   );
// // };

// // export default MegaMenu;

// import React from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import * as FaIcons from "react-icons/fa";

// /*
//   Dropdown used by the desktop Navbar for Services, About and Industries.
//   One section  -> narrow single column
//   Two sections -> wide two-column panel
//   Brand colors only: navy text, blue icons and hover, white panel.
// */

// const ItemIcon = ({ name }) => {
//   const Icon = FaIcons[name] || FaIcons.FaCircle;
//   return <Icon className="text-base" aria-hidden="true" />;
// };

// const MegaMenu = ({ id, data = [], isOpen, onClose }) => {
//   const single = data.length === 1;

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           id={id}
//           initial={{ opacity: 0, y: -8 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -8 }}
//           transition={{ duration: 0.18 }}
//           // pt-4 is a hover "bridge": the gap between the button and the
//           // panel belongs to this element, so the menu doesn't close while
//           // the mouse travels down to it.
//           className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 ${
//             single ? "w-[450px]" : "w-[min(900px,100vw)]"
//           }`}
//         >
//           <div className="max-h-[80vh] overflow-hidden overflow-y-auto rounded-2xl border border-primary-100 bg-white shadow-2xl shadow-primary-900/10">
//             <span className="block h-1 bg-primary-500" aria-hidden="true" />
//             <div
//               className={
//                 single ? "grid" : "grid grid-cols-2 divide-x divide-primary-100"
//               }
//             >
//               {data.map((section) => (
//                 <div key={section.title} className="p-7">
//                   <h3 className="mb-3 border-b border-primary-100 pb-3 text-sm font-semibold uppercase tracking-widest text-primary-500">
//                     {section.title}
//                   </h3>
//                   <ul className="space-y-1">
//                     {section.items.map((item) => (
//                       <li key={item.path}>
//                         <Link
//                           to={item.path}
//                           onClick={onClose}
//                           className="group -mx-3 flex items-start gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-primary-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
//                         >
//                           <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-500 transition-colors group-hover:bg-primary-500 group-hover:text-white">
//                             <ItemIcon name={item.icon} />
//                           </span>
//                           <span className="min-w-0">
//                             <span className="block text-base font-semibold text-primary-900 group-hover:text-primary-500">
//                               {item.name}
//                             </span>
//                             {item.desc && (
//                               <span className="mt-0.5 line-clamp-2 block text-sm text-primary-900/65">
//                                 {item.desc}
//                               </span>
//                             )}
//                           </span>
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
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

/*
  Full-width dropdown used by the desktop Navbar (Services, About, Industries).

  Layout
  ┌────────────────┬──────────────────────────────────────────────┐
  │ Menu title     │ SECTION TITLE          SECTION TITLE          │
  │ Short intro    │ Item name           →  Item name           →  │
  │                │ One-line description   One-line description   │
  │ Talk to us  →  │ ...                    ...                    │
  └────────────────┴──────────────────────────────────────────────┘

  The panel is fixed directly under the header (lg:h-20 = 80px → top-20).
  If you change the header height, change `top-20` below to match.
  Brand colors only: navy text, blue accents, white and light-blue surfaces.
*/

const ItemIcon = ({ name }) => {
  const Icon = FaIcons[name];
  return Icon ? <Icon aria-hidden="true" /> : null;
};

const MenuLink = ({ item, onClose }) => (
  <li>
    <Link
      to={item.path}
      onClick={onClose}
      className="group flex items-start gap-3 border-l-2 border-transparent py-2.5 pl-4 pr-2 transition-colors duration-200 hover:border-primary-500 hover:bg-primary-50 focus:outline-none focus-visible:border-primary-500 focus-visible:bg-primary-50"
    >
      {item.icon && (
        <span className="mt-1 shrink-0 text-sm text-primary-500">
          <ItemIcon name={item.icon} />
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-2 text-base font-semibold text-primary-900 group-hover:text-primary-500">
          {item.name}
          <FaIcons.FaArrowRight
            className="-translate-x-1 text-xs opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
            aria-hidden="true"
          />
        </span>
        {item.desc && (
          <span className="mt-0.5 line-clamp-2 block text-sm leading-relaxed text-primary-900/65">
            {item.desc}
          </span>
        )}
      </span>
    </Link>
  </li>
);

const MegaMenu = ({ id, title, intro, data = [], isOpen, onClose }) => {
  const single = data.length === 1;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id={id}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="fixed inset-x-0 top-20 z-40 border-t border-primary-100 bg-white shadow-xl shadow-primary-900/10"
        >
          {/* Invisible strip covering the gap between the menu button and
              the panel, so the menu stays open while the mouse moves down */}
          <span className="absolute inset-x-0 -top-5 h-5" aria-hidden="true" />

          <div className="mx-auto grid max-w-7xl grid-cols-12">
            {/* Intro column */}
            <div className="col-span-3 border-r border-primary-100 bg-primary-50 px-8 py-10">
              {title && (
                <p className="mb-3 text-2xl font-bold leading-tight text-primary-900">
                  {title}
                </p>
              )}
              {intro && (
                <p className="mb-8 text-base leading-relaxed text-primary-900/70">
                  {intro}
                </p>
              )}
              <Link
                to="/contact"
                onClick={onClose}
                className="group inline-flex items-center gap-2 text-base font-semibold text-primary-500 hover:text-primary-900 focus:outline-none focus-visible:underline"
              >
                Talk to our experts
                <FaIcons.FaArrowRight
                  className="text-xs transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* Link columns */}
            <div
              className={`col-span-9 grid max-h-[calc(100vh-8rem)] gap-x-8 overflow-y-auto px-8 py-10 ${
                single ? "" : "grid-cols-2"
              }`}
            >
              {data.map((section) => (
                <div key={section.title}>
                  <h3 className="mb-4 border-b border-primary-100 pb-3 text-sm font-semibold uppercase tracking-widest text-primary-500">
                    {section.title}
                  </h3>
                  <ul
                    className={
                      single ? "grid grid-cols-2 gap-x-8 gap-y-1" : "space-y-1"
                    }
                  >
                    {section.items.map((item) => (
                      <MenuLink key={item.path} item={item} onClose={onClose} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
