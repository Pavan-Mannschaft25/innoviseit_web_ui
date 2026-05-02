import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import { navData } from "../../data/navData";

const MobileMenu = ({ isOpen, onClose, currentPage }) => {
  const IconComponent = ({ iconName }) => {
    const Icon = FaIcons[iconName] || FaIcons.FaCircle;
    return <Icon className="text-lg" />;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed top-0 right-0 w-[85%] max-w-md h-full bg-white z-50 overflow-y-auto shadow-2xl lg:hidden"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-5 flex items-center justify-between z-10">
              <div className="font-bold text-xl">
                <span className="text-primary-900">Innovise</span>
                <span className="text-accent-500">IT</span>
              </div>

              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <FaIcons.FaTimes className="text-lg" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-6 space-y-6">
              {/* Main Pages */}
              <div className="space-y-2">
                <Link
                  to="/"
                  onClick={onClose}
                  className={`block px-4 py-3 rounded-xl font-semibold transition-colors ${
                    currentPage === "/"
                      ? "bg-primary-50 text-primary-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Home
                </Link>

                <Link
                  to="/think"
                  onClick={onClose}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-colors ${
                    currentPage === "/think"
                      ? "bg-primary-50 text-primary-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  What We Think
                  <FaIcons.FaStar className="text-xs text-accent-500" />
                </Link>

                <Link
                  to="/careers"
                  onClick={onClose}
                  className={`block px-4 py-3 rounded-xl font-semibold transition-colors ${
                    currentPage === "/careers"
                      ? "bg-primary-50 text-primary-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Careers
                </Link>

                <Link
                  to="/contact"
                  onClick={onClose}
                  className={`block px-4 py-3 rounded-xl font-semibold transition-colors ${
                    currentPage === "/contact"
                      ? "bg-primary-50 text-primary-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Contact Us
                </Link>
              </div>

              {/* Mega Menu Sections */}
              <div className="pt-6 border-t border-gray-100 space-y-6">
                {/* What We Do */}
                <div>
                  <h3 className="text-xs font-bold text-primary-900 uppercase tracking-wider mb-3 px-4">
                    What We Do
                  </h3>
                  <div className="space-y-1">
                    {navData.whatWeDo.map((section, idx) => (
                      <div key={idx} className="px-4 py-2">
                        <p className="text-xs font-semibold text-gray-500 mb-2">
                          {section.title}
                        </p>
                        <ul className="space-y-1 pl-2">
                          {section.items.slice(0, 3).map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                to={item.path}
                                onClick={onClose}
                                className="flex items-center gap-2 py-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                              >
                                <IconComponent iconName={item.icon} />
                                <span>{item.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Who We Are */}
                <div>
                  <h3 className="text-xs font-bold text-primary-900 uppercase tracking-wider mb-3 px-4">
                    Who We Are
                  </h3>
                  <ul className="space-y-1 px-4">
                    {navData.whoWeAre[0].items.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={item.path}
                          onClick={onClose}
                          className="flex items-center gap-2 py-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          <IconComponent iconName={item.icon} />
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="block w-full text-center px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg"
                >
                  Get Started Today
                </Link>
              </div>
            </nav>

            {/* Footer Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-50 border-t border-gray-100">
              <p className="text-sm text-gray-600 text-center">
                Questions?{" "}
                <a
                  href="tel:+14255185442"
                  className="font-semibold text-primary-600"
                >
                  +1 (425) 518-5442
                </a>
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
