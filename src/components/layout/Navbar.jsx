// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FaBars, FaChevronDown, FaGlobe } from "react-icons/fa";
// import MegaMenu from "./MegaMenu";
// import MobileMenu from "./MobileMenu";
// import { navData } from "../../data/navData";
// import Container from "../ui/Container";
// import logo from "../../assets/images/innovise_it_logo.png";

// const Navbar = () => {
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const location = useLocation();

//   const menuTimeoutRef = React.useRef(null);

//   const handleMouseEnter = (menu) => {
//     if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
//     setActiveMenu(menu);
//   };

//   const handleMouseLeave = () => {
//     menuTimeoutRef.current = setTimeout(() => {
//       setActiveMenu(null);
//     }, 150);
//   };

//   return (
//     <>
//       <header className="sticky top-0 z-50 bg-white shadow-2xl border-b border-gray-200">
//         <Container>
//           <nav className="flex items-center justify-between h-20">
//             {/* Logo */}
//             <Link to="/" className="flex items-center">
//               <img
//                 src={logo}
//                 alt="Innovise IT"
//                 className="h-8 w-auto object-contain"
//               />
//             </Link>

//             {/* Desktop Menu */}
//             <div className="hidden lg:flex items-center gap-8 text-[18px] text-gray-700">
//               {/* What We Do */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => handleMouseEnter("what")}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <button className="flex items-center gap-1 hover:text-black transition">
//                   What We Do
//                   <FaChevronDown className="text-xs" />
//                 </button>

//                 <MegaMenu
//                   data={navData.whatWeDo}
//                   isOpen={activeMenu === "what"}
//                   onClose={() => setActiveMenu(null)}
//                 />
//               </div>

//               {/* What We Think */}
//               <Link to="/think" className="hover:text-black transition">
//                 What We Think
//               </Link>

//               {/* About */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => handleMouseEnter("who")}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <button className="flex items-center gap-1 hover:text-black transition">
//                   About Innovise
//                   <FaChevronDown className="text-xs" />
//                 </button>

//                 <MegaMenu
//                   data={navData.whoWeAre}
//                   isOpen={activeMenu === "who"}
//                   onClose={() => setActiveMenu(null)}
//                 />
//               </div>

//               {/* Careers */}
//               <Link to="/careers" className="hover:text-black transition">
//                 Careers
//               </Link>

//               {/* Contact */}
//               <Link to="/contact" className="hover:text-black transition">
//                 Contact Us
//               </Link>
//             </div>

//             {/* Right Section (Language) */}
//             <div className="hidden lg:flex items-center gap-2 text-gray-700 cursor-pointer">
//               <FaGlobe className="text-md" />
//               <span className="text-md font-medium">EN</span>
//               <FaChevronDown className="text-xs" />
//             </div>

//             {/* Mobile Button */}
//             <button
//               onClick={() => setMobileOpen(true)}
//               className="lg:hidden w-10 h-10 flex items-center justify-center"
//             >
//               <FaBars className="text-lg" />
//             </button>
//           </nav>
//         </Container>
//       </header>

//       {/* Mobile Menu */}
//       <MobileMenu
//         isOpen={mobileOpen}
//         onClose={() => setMobileOpen(false)}
//         currentPage={location.pathname}
//       />
//     </>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// // Add motion import if using framer-motion
// import { motion } from "framer-motion";

// import {
//   FaBars,
//   FaChevronDown,
//   FaGlobe,
//   FaPhone,
//   FaEnvelope,
//   FaArrowRight,
//   FaTimes,
//   FaStar,
// } from "react-icons/fa";
// import MegaMenu from "./MegaMenu";
// import MobileMenu from "./MobileMenu";
// import { navData } from "../../data/navData";
// import Container from "../ui/Container";
// import logo from "../../assets/images/innovise_it_logo.png";

// const Navbar = () => {
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   const menuTimeoutRef = React.useRef(null);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleMouseEnter = (menu) => {
//     if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
//     setActiveMenu(menu);
//   };

//   const handleMouseLeave = () => {
//     menuTimeoutRef.current = setTimeout(() => {
//       setActiveMenu(null);
//     }, 150);
//   };

//   return (
//     <>
//       {/* Main Navigation */}
//       <header
//         className={`sticky top-0 z-50 transition-all duration-500 ${
//           scrolled
//             ? "bg-white/95 backdrop-blur-lg shadow-xl shadow-[#0a1628]/5 border-b border-[#FFD700]/20"
//             : "bg-white shadow-lg shadow-gray-100/50 border-b border-gray-100"
//         }`}
//       >
//         <Container>
//           <nav className="flex items-center justify-between h-18 lg:h-22">
//             {/* Logo with Premium Styling */}
//             <Link to="/" className="relative group flex items-center">
//               <div className="relative overflow-hidden rounded-lg p-1">
//                 <img
//                   src={logo}
//                   alt="Innovise IT"
//                   className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
//                 />
//                 {/* Logo Shine Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
//               </div>
//             </Link>

//             {/* Desktop Menu - Premium Styling */}
//             <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-[18px]  text-gray-700">
//               {/* What We Do - Mega Menu Trigger */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => handleMouseEnter("what")}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <button
//                   className={`flex items-center gap-1.5 px-4 py-1 rounded-lg transition-all duration-300 ${
//                     activeMenu === "what"
//                       ? "bg-gradient-to-r from-[#0a1628] to-[#152d52] text-white shadow-lg shadow-[#0a1628]/25"
//                       : "hover:bg-[#0a1628]/5 hover:text-[#0a1628]"
//                   }`}
//                 >
//                   What We Do
//                   <FaChevronDown
//                     className={`text-xs transition-transform duration-300 ${activeMenu === "what" ? "rotate-180 text-[#FFD700]" : ""}`}
//                   />
//                 </button>

//                 <MegaMenu
//                   data={navData.whatWeDo}
//                   isOpen={activeMenu === "what"}
//                   onClose={() => setActiveMenu(null)}
//                 />
//               </div>

//               {/* What We Think */}
//               <Link
//                 to="/think"
//                 className="px-4 py-1 rounded-lg hover:bg-[#0a1628]/5 hover:text-[#0a1628] transition-all duration-300 relative group"
//               >
//                 What We Think
//                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
//               </Link>

//               {/* About - Mega Menu Trigger */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => handleMouseEnter("who")}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <button
//                   className={`flex items-center gap-1.5 px-4 py-1 rounded-lg transition-all duration-300 ${
//                     activeMenu === "who"
//                       ? "bg-gradient-to-r from-[#0a1628] to-[#152d52] text-white shadow-lg shadow-[#0a1628]/25"
//                       : "hover:bg-[#0a1628]/5 hover:text-[#0a1628]"
//                   }`}
//                 >
//                   About Innovise
//                   <FaChevronDown
//                     className={`text-xs transition-transform duration-300 ${activeMenu === "who" ? "rotate-180 text-[#FFD700]" : ""}`}
//                   />
//                 </button>

//                 <MegaMenu
//                   data={navData.whoWeAre}
//                   isOpen={activeMenu === "who"}
//                   onClose={() => setActiveMenu(null)}
//                 />
//               </div>

//               {/* Careers - Highlighted */}
//               <Link
//                 to="/careers"
//                 className="px-4 py-1 rounded-lg hover:bg-[#0a1628]/5 hover:text-[#0a1628] transition-all duration-300 relative group"
//               >
//                 Careers
//                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
//               </Link>

//               <Link
//                 to="/contact"
//                 className="px-4 py-1 rounded-lg hover:bg-[#0a1628]/5 hover:text-[#0a1628] transition-all duration-300 relative group"
//               >
//                 Contact
//                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
//               </Link>
//             </div>

//             {/* Right Section - Language (Mobile Visible) */}
//             <div className="hidden lg:flex items-center gap-3 pl-4 border-l border-gray-200">
//               <button className="flex items-center gap-2 text-gray-600 hover:text-[#0a1628] transition-colors group p-2 rounded-lg hover:bg-[#0a1628]/5">
//                 <FaGlobe className="text-lg group-hover:rotate-12 transition-transform text-[#0a1628]" />
//                 <span className="font-medium text-sm">EN</span>
//                 <FaChevronDown className="text-xs" />
//               </button>
//             </div>

//             {/* Mobile Menu Button - Premium Design */}
//             <button
//               onClick={() => setMobileOpen(true)}
//               className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0a1628] to-[#152d52] text-white shadow-lg shadow-[#0a1628]/30 hover:shadow-xl hover:shadow-[#0a1628]/40 transform hover:scale-105 transition-all duration-300"
//             >
//               <FaBars className="text-lg" />
//               {/* Pulse Effect */}
//               <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#FFD700] rounded-full animate-ping"></span>
//               <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#FFD700] rounded-full"></span>
//             </button>
//           </nav>
//         </Container>
//       </header>

//       {/* Mobile Menu */}
//       <MobileMenu
//         isOpen={mobileOpen}
//         onClose={() => setMobileOpen(false)}
//         currentPage={location.pathname}
//       />

//       {/* Scroll to Top Button (Optional Enhancement) */}
//       {scrolled && (
//         <motion.button
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] text-[#0a1628] rounded-full shadow-xl shadow-[#FFD700]/40 flex items-center justify-center hover:shadow-2xl hover:scale-110 transition-all duration-300 hidden lg:flex"
//         >
//           <FaArrowRight className="rotate-[-90deg] text-lg" />
//         </motion.button>
//       )}
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaBars,
  FaChevronDown,
  FaGlobe,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import { navData } from "../../data/navData";
import Container from "../ui/Container";
import logo from "../../assets/images/innovise_it_logo.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Language Dropdown State
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    name: "United States",
    code: "EN-US",
    flag: "🇺🇸",
  });

  const location = useLocation();
  const menuTimeoutRef = React.useRef(null);
  const languageRef = useRef(null);

  const countries = [
    {
      name: "United States",
      code: "EN-US",
      flag: "🇺🇸",
    },
    {
      name: "India",
      code: "EN-IN",
      flag: "🇮🇳",
    },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close Language Dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (menu) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  return (
    <>
      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-[#0a1628]/5 border-b border-[#FFD700]/20"
            : "bg-white shadow-gray-100/50 border-b border-gray-100"
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between h-18 lg:h-20">
            {/* Logo */}
            <Link to="/" className="relative group flex items-center">
              <div className="relative overflow-hidden rounded-lg p-1">
                <img
                  src={logo}
                  alt="Innovise IT"
                  className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-[16px] font-medium text-[#12324f]">
              <Link
                to="/"
                className="px-4 py-1 rounded-lg hover:bg-[#0a1628]/5 hover:text-[#0a1628] transition-all duration-300 relative group text-[#12324f]"
              >
                Home
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
              </Link>
              {/* What We Do */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("what")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1.5 px-4 py-1 rounded-lg transition-all duration-300 ${
                    activeMenu === "what"
                      ? "bg-gradient-to-r from-[#0a1628] to-[#152d52] text-white shadow-lg shadow-[#0a1628]/25"
                      : "hover:bg-[#0a1628]/5 hover:text-[#0a1628]"
                  }`}
                >
                  What We Do
                  <FaChevronDown
                    className={`text-xs transition-transform duration-300 ${
                      activeMenu === "what" ? "rotate-180 text-[#FFD700]" : ""
                    }`}
                  />
                </button>

                <MegaMenu
                  data={navData.whatWeDo}
                  isOpen={activeMenu === "what"}
                  onClose={() => setActiveMenu(null)}
                />
              </div>

              {/* What We Think */}
              {/* <Link
                to="/think"
                className="px-4 py-1 rounded-lg text-[#12324f] hover:bg-[#0a1628]/5 hover:text-[#0a1628] transition-all duration-300 relative group"
              >
                What We Think
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
              </Link> */}

              {/* About */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("who")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1.5 px-4 py-1 rounded-lg transition-all duration-300 text-[#12324f] ${
                    activeMenu === "who"
                      ? "bg-gradient-to-r from-[#0a1628] to-[#152d52] text-white shadow-lg shadow-[#0a1628]/25"
                      : "hover:bg-[#0a1628]/5 hover:text-[#0a1628]"
                  }`}
                >
                  About Innovise
                  <FaChevronDown
                    className={`text-xs transition-transform duration-300 ${
                      activeMenu === "who" ? "rotate-180 text-[#FFD700]" : ""
                    }`}
                  />
                </button>

                <MegaMenu
                  data={navData.whoWeAre}
                  isOpen={activeMenu === "who"}
                  onClose={() => setActiveMenu(null)}
                />
              </div>

              {/* Careers */}
              <Link
                to="/careers"
                className="px-4 py-1 rounded-lg hover:bg-[#0a1628]/5 hover:text-[#0a1628] transition-all duration-300 relative group text-[#12324f]"
              >
                Careers
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                className="px-4 py-1 rounded-lg hover:bg-[#0a1628]/5 hover:text-[#0a1628] transition-all duration-300 relative group text-[#12324f]"
              >
                Contact
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
              </Link>
            </div>

            {/* Language Dropdown */}
            <div
              className="hidden lg:flex items-center gap-3 pl-4 border-l border-gray-200 relative"
              ref={languageRef}
            >
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center gap-2 text-gray-600 hover:text-[#0a1628] transition-all duration-300 group p-2 rounded-lg hover:bg-[#0a1628]/5"
              >
                <FaGlobe className="text-lg group-hover:rotate-12 transition-transform text-[#0a1628]" />

                <span className="text-lg">{selectedCountry.flag}</span>

                <FaChevronDown
                  className={`text-xs transition-transform duration-300 ${
                    languageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {languageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-16 right-0 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                  >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#0a1628] to-[#152d52] px-5 py-4">
                      <h3 className="text-white font-semibold text-sm">
                        Select Region
                      </h3>

                      <p className="text-gray-300 text-xs mt-1">
                        Choose your preferred country
                      </p>
                    </div>

                    {/* Countries */}
                    <div className="py-2">
                      {countries.map((country, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedCountry(country);
                            setLanguageOpen(false);
                          }}
                          className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-50 transition-all duration-200 group"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{country.flag}</span>

                            <div className="text-left">
                              <p className="text-sm font-semibold text-gray-800 group-hover:text-[#0a1628]">
                                {country.name}
                              </p>

                              <p className="text-xs text-gray-500">
                                {country.code}
                              </p>
                            </div>
                          </div>

                          {selectedCountry.name === country.name && (
                            <FaCheck className="text-[#0a1628] text-sm" />
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0a1628] to-[#152d52] text-white shadow-lg shadow-[#0a1628]/30 hover:shadow-xl hover:shadow-[#0a1628]/40 transform hover:scale-105 transition-all duration-300"
            >
              <FaBars className="text-lg" />

              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#FFD700] rounded-full animate-ping"></span>

              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#FFD700] rounded-full"></span>
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        currentPage={location.pathname}
      />

      {/* Scroll To Top */}
      {scrolled && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] text-[#0a1628] rounded-full shadow-xl shadow-[#FFD700]/40 flex items-center justify-center hover:shadow-2xl hover:scale-110 transition-all duration-300 hidden lg:flex"
        >
          <FaArrowRight className="rotate-[-90deg] text-lg" />
        </motion.button>
      )}
    </>
  );
};

export default Navbar;
