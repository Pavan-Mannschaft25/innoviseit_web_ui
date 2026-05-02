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
          className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[100vw] max-w-[1100px] bg-white shadow-2xl border border-gray-100 overflow-hidden z-50"
          onMouseLeave={onClose}
        >
          <div className="grid grid-cols-3 gap-0 divide-x divide-gray-100">
            {data.map((section, sectionIndex) => (
              <div key={sectionIndex} className="p-8">
                <h3 className="text-sm font-bold text-[#0B2A4A] uppercase tracking-wider mb-5 pb-3 border-b border-gray-100">
                  {section.title}
                </h3>

                <ul className="space-y-1">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        to={item.path}
                        className="group flex items-start gap-3 p-3 -mx-3 rounded-xl hover:bg-primary-50 transition-colors duration-200"
                        onClick={onClose}
                      >
                        <div className="mt-0.5 w-8 h-8 rounded-lg bg-primary-100 text-[#0B2A4A] flex items-center justify-center group-hover:bg-primary-200 group-hover:text-[#0B2A4A] transition-colors flex-shrink-0">
                          <IconComponent iconName={item.icon} />
                        </div>

                        <div className="min-w-0">
                          <p className="font-semibold text-sm text-gray-900 group-hover:text-[#0B2A4A] transition-colors truncate">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* View all link */}
                <Link
                  to="#"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#0B2A4A] hover:text-yellow-700 transition-colors"
                >
                  Explore all {section.title.toLowerCase()}
                  <FaIcons.FaArrowRight className="text-xs" />
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom bar with CTA */}
          {/* <div className="bg-gradient-to-r from-primary-50 to-accent-50 px-8 py-4 flex items-center justify-between">
            <p className="text-sm text-gray-700">
              <strong>Need guidance?</strong> Talk to our solution architects
            </p>
            <button className="px-5 py-2 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors">
              Schedule Consultation
            </button>
          </div> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
