// // // // import React, { useState, useEffect } from "react";
// // // // import { Link, useLocation } from "react-router-dom";
// // // // import { FaBars, FaChevronDown, FaGlobe } from "react-icons/fa";
// // // // import MegaMenu from "./MegaMenu";
// // // // import MobileMenu from "./MobileMenu";
// // // // import { navData } from "../../data/navData";
// // // // import Container from "../ui/Container";
// // // // import logo from "../../assets/images/innovise_it_logo.png";

// // // // const Navbar = () => {
// // // //   const [activeMenu, setActiveMenu] = useState(null);
// // // //   const [mobileOpen, setMobileOpen] = useState(false);
// // // //   const location = useLocation();

// // // //   const menuTimeoutRef = React.useRef(null);

// // // //   const handleMouseEnter = (menu) => {
// // // //     if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
// // // //     setActiveMenu(menu);
// // // //   };

// // // //   const handleMouseLeave = () => {
// // // //     menuTimeoutRef.current = setTimeout(() => {
// // // //       setActiveMenu(null);
// // // //     }, 150);
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <header className="sticky top-0 z-50 bg-white shadow-2xl border-b border-gray-200">
// // // //         <Container>
// // // //           <nav className="flex items-center justify-between h-20">
// // // //             {/* Logo */}
// // // //             <Link to="/" className="flex items-center">
// // // //               <img
// // // //                 src={logo}
// // // //                 alt="Innovise"
// // // //                 className="h-8 w-auto object-contain"
// // // //               />
// // // //             </Link>

// // // //             {/* Desktop Menu */}
// // // //             <div className="hidden lg:flex items-center gap-8 text-[18px] text-gray-700">
// // // //               {/* What We Do */}
// // // //               <div
// // // //                 className="relative"
// // // //                 onMouseEnter={() => handleMouseEnter("what")}
// // // //                 onMouseLeave={handleMouseLeave}
// // // //               >
// // // //                 <button className="flex items-center gap-1 hover:text-black transition">
// // // //                   What We Do
// // // //                   <FaChevronDown className="text-xs" />
// // // //                 </button>

// // // //                 <MegaMenu
// // // //                   data={navData.whatWeDo}
// // // //                   isOpen={activeMenu === "what"}
// // // //                   onClose={() => setActiveMenu(null)}
// // // //                 />
// // // //               </div>

// // // //               {/* What We Think */}
// // // //               <Link to="/think" className="hover:text-black transition">
// // // //                 What We Think
// // // //               </Link>

// // // //               {/* About */}
// // // //               <div
// // // //                 className="relative"
// // // //                 onMouseEnter={() => handleMouseEnter("who")}
// // // //                 onMouseLeave={handleMouseLeave}
// // // //               >
// // // //                 <button className="flex items-center gap-1 hover:text-black transition">
// // // //                   About Innovise
// // // //                   <FaChevronDown className="text-xs" />
// // // //                 </button>

// // // //                 <MegaMenu
// // // //                   data={navData.whoWeAre}
// // // //                   isOpen={activeMenu === "who"}
// // // //                   onClose={() => setActiveMenu(null)}
// // // //                 />
// // // //               </div>

// // // //               {/* Careers */}
// // // //               <Link to="/careers" className="hover:text-black transition">
// // // //                 Careers
// // // //               </Link>

// // // //               {/* Contact */}
// // // //               <Link to="/contact" className="hover:text-black transition">
// // // //                 Contact Us
// // // //               </Link>
// // // //             </div>

// // // //             {/* Right Section (Language) */}
// // // //             <div className="hidden lg:flex items-center gap-2 text-gray-700 cursor-pointer">
// // // //               <FaGlobe className="text-md" />
// // // //               <span className="text-md font-medium">EN</span>
// // // //               <FaChevronDown className="text-xs" />
// // // //             </div>

// // // //             {/* Mobile Button */}
// // // //             <button
// // // //               onClick={() => setMobileOpen(true)}
// // // //               className="lg:hidden w-10 h-10 flex items-center justify-center"
// // // //             >
// // // //               <FaBars className="text-lg" />
// // // //             </button>
// // // //           </nav>
// // // //         </Container>
// // // //       </header>

// // // //       {/* Mobile Menu */}
// // // //       <MobileMenu
// // // //         isOpen={mobileOpen}
// // // //         onClose={() => setMobileOpen(false)}
// // // //         currentPage={location.pathname}
// // // //       />
// // // //     </>
// // // //   );
// // // // };

// // // // export default Navbar;

// // // // import React, { useState, useEffect } from "react";
// // // // import { Link, useLocation } from "react-router-dom";
// // // // // Add motion import if using framer-motion
// // // // import { motion } from "framer-motion";

// // // // import {
// // // //   FaBars,
// // // //   FaChevronDown,
// // // //   FaGlobe,
// // // //   FaPhone,
// // // //   FaEnvelope,
// // // //   FaArrowRight,
// // // //   FaTimes,
// // // //   FaStar,
// // // // } from "react-icons/fa";
// // // // import MegaMenu from "./MegaMenu";
// // // // import MobileMenu from "./MobileMenu";
// // // // import { navData } from "../../data/navData";
// // // // import Container from "../ui/Container";
// // // // import logo from "../../assets/images/innovise_it_logo.png";

// // // // const Navbar = () => {
// // // //   const [activeMenu, setActiveMenu] = useState(null);
// // // //   const [mobileOpen, setMobileOpen] = useState(false);
// // // //   const [scrolled, setScrolled] = useState(false);
// // // //   const location = useLocation();

// // // //   const menuTimeoutRef = React.useRef(null);

// // // //   // Handle scroll effect
// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       setScrolled(window.scrollY > 50);
// // // //     };
// // // //     window.addEventListener("scroll", handleScroll);
// // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // //   }, []);

// // // //   const handleMouseEnter = (menu) => {
// // // //     if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
// // // //     setActiveMenu(menu);
// // // //   };

// // // //   const handleMouseLeave = () => {
// // // //     menuTimeoutRef.current = setTimeout(() => {
// // // //       setActiveMenu(null);
// // // //     }, 150);
// // // //   };

// // // //   return (
// // // //     <>
// // // //       {/* Main Navigation */}
// // // //       <header
// // // //         className={`sticky top-0 z-50 transition-all duration-500 ${
// // // //           scrolled
// // // //             ? "bg-white/95 backdrop-blur-lg shadow-xl shadow-[#0a1628]/5 border-b border-[#FFD700]/20"
// // // //             : "bg-white shadow-lg shadow-gray-100/50 border-b border-gray-100"
// // // //         }`}
// // // //       >
// // // //         <Container>
// // // //           <nav className="flex items-center justify-between h-18 lg:h-22">
// // // //             {/* Logo with Premium Styling */}
// // // //             <Link to="/" className="relative group flex items-center">
// // // //               <div className="relative overflow-hidden rounded-lg p-1">
// // // //                 <img
// // // //                   src={logo}
// // // //                   alt="Innovise"
// // // //                   className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
// // // //                 />
// // // //                 {/* Logo Shine Effect */}
// // // //                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
// // // //               </div>
// // // //             </Link>

// // // //             {/* Desktop Menu - Premium Styling */}
// // // //             <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-[18px]  text-gray-700">
// // // //               {/* What We Do - Mega Menu Trigger */}
// // // //               <div
// // // //                 className="relative"
// // // //                 onMouseEnter={() => handleMouseEnter("what")}
// // // //                 onMouseLeave={handleMouseLeave}
// // // //               >
// // // //                 <button
// // // //                   className={`flex items-center gap-1.5 px-4 py-1 rounded-lg transition-all duration-300 ${
// // // //                     activeMenu === "what"
// // // //                       ? "bg-gradient-to-r from-[#0a1628] to-[#152d52] text-white shadow-lg shadow-[#0a1628]/25"
// // // //                       : "hover:bg-[#0a1628]/5 hover:text-[#0a1628]"
// // // //                   }`}
// // // //                 >
// // // //                   What We Do
// // // //                   <FaChevronDown
// // // //                     className={`text-xs transition-transform duration-300 ${activeMenu === "what" ? "rotate-180 text-[#FFD700]" : ""}`}
// // // //                   />
// // // //                 </button>

// // // //                 <MegaMenu
// // // //                   data={navData.whatWeDo}
// // // //                   isOpen={activeMenu === "what"}
// // // //                   onClose={() => setActiveMenu(null)}
// // // //                 />
// // // //               </div>

// // // //               {/* What We Think */}
// // // //               <Link
// // // //                 to="/think"
// // // //                 className="px-4 py-1 rounded-lg hover:bg-[#0a1628]/5 hover:text-[#0a1628] transition-all duration-300 relative group"
// // // //               >
// // // //                 What We Think
// // // //                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#0B2A4A] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
// // // //               </Link>

// // // //               {/* About - Mega Menu Trigger */}
// // // //               <div
// // // //                 className="relative"
// // // //                 onMouseEnter={() => handleMouseEnter("who")}
// // // //                 onMouseLeave={handleMouseLeave}
// // // //               >
// // // //                 <button
// // // //                   className={`flex items-center gap-1.5 px-4 py-1 rounded-lg transition-all duration-300 ${
// // // //                     activeMenu === "who"
// // // //                       ? "bg-gradient-to-r from-[#0a1628] to-[#152d52] text-white shadow-lg shadow-[#0a1628]/25"
// // // //                       : "hover:bg-[#0a1628]/5 hover:text-[#0a1628]"
// // // //                   }`}
// // // //                 >
// // // //                   About Innovise
// // // //                   <FaChevronDown
// // // //                     className={`text-xs transition-transform duration-300 ${activeMenu === "who" ? "rotate-180 text-[#FFD700]" : ""}`}
// // // //                   />
// // // //                 </button>

// // // //                 <MegaMenu
// // // //                   data={navData.whoWeAre}
// // // //                   isOpen={activeMenu === "who"}
// // // //                   onClose={() => setActiveMenu(null)}
// // // //                 />
// // // //               </div>

// // // //               {/* Careers - Highlighted */}
// // // //               <Link
// // // //                 to="/careers"
// // // //                 className="px-4 py-1 rounded-lg hover:bg-[#0a1628]/5 hover:text-[#0a1628] transition-all duration-300 relative group"
// // // //               >
// // // //                 Careers
// // // //                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#0B2A4A] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
// // // //               </Link>

// // // //               <Link
// // // //                 to="/contact"
// // // //                 className="px-4 py-1 rounded-lg hover:bg-[#0a1628]/5 hover:text-[#0a1628] transition-all duration-300 relative group"
// // // //               >
// // // //                 Contact
// // // //                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#0B2A4A] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
// // // //               </Link>
// // // //             </div>

// // // //             {/* Right Section - Language (Mobile Visible) */}
// // // //             <div className="hidden lg:flex items-center gap-3 pl-4 border-l border-gray-200">
// // // //               <button className="flex items-center gap-2 text-gray-600 hover:text-[#0a1628] transition-colors group p-2 rounded-lg hover:bg-[#0a1628]/5">
// // // //                 <FaGlobe className="text-lg group-hover:rotate-12 transition-transform text-[#0a1628]" />
// // // //                 <span className="font-medium text-sm">EN</span>
// // // //                 <FaChevronDown className="text-xs" />
// // // //               </button>
// // // //             </div>

// // // //             {/* Mobile Menu Button - Premium Design */}
// // // //             <button
// // // //               onClick={() => setMobileOpen(true)}
// // // //               className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-xl bg-primary-800 text-white shadow-lg shadow-[#0a1628]/30 hover:shadow-xl hover:shadow-[#0a1628]/40 transform hover:scale-105 transition-all duration-300"
// // // //             >
// // // //               <FaBars className="text-lg" />
// // // //               {/* Pulse Effect */}
// // // //               <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#FFD700] rounded-full animate-ping"></span>
// // // //               <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#FFD700] rounded-full"></span>
// // // //             </button>
// // // //           </nav>
// // // //         </Container>
// // // //       </header>

// // // //       {/* Mobile Menu */}
// // // //       <MobileMenu
// // // //         isOpen={mobileOpen}
// // // //         onClose={() => setMobileOpen(false)}
// // // //         currentPage={location.pathname}
// // // //       />

// // // //       {/* Scroll to Top Button (Optional Enhancement) */}
// // // //       {scrolled && (
// // // //         <motion.button
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
// // // //           className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] text-[#0a1628] rounded-full shadow-xl shadow-[#FFD700]/40 flex items-center justify-center hover:shadow-2xl hover:scale-110 transition-all duration-300 hidden lg:flex"
// // // //         >
// // // //           <FaArrowRight className="rotate-[-90deg] text-lg" />
// // // //         </motion.button>
// // // //       )}
// // // //     </>
// // // //   );
// // // // };

// // // // export default Navbar;

// // // // import React, { useState, useEffect, useRef } from "react";
// // // // import { Link, useLocation } from "react-router-dom";
// // // // import { motion, AnimatePresence } from "framer-motion";

// // // // import {
// // // //   FaBars,
// // // //   FaChevronDown,
// // // //   FaGlobe,
// // // //   FaArrowRight,
// // // //   FaCheck,
// // // // } from "react-icons/fa";

// // // // import MegaMenu from "./MegaMenu";
// // // // import MobileMenu from "./MobileMenu";
// // // // import { navData } from "../../data/navData";
// // // // import Container from "../ui/Container";
// // // // import logo from "../../assets/images/innovise_it_logo.png";

// // // // const Navbar = () => {
// // // //   const [activeMenu, setActiveMenu] = useState(null);
// // // //   const [mobileOpen, setMobileOpen] = useState(false);
// // // //   const [scrolled, setScrolled] = useState(false);

// // // //   // Language Dropdown State
// // // //   const [languageOpen, setLanguageOpen] = useState(false);
// // // //   const [selectedCountry, setSelectedCountry] = useState({
// // // //     name: "United States",
// // // //     code: "EN-US",
// // // //     flag: "🇺🇸",
// // // //   });

// // // //   const location = useLocation();
// // // //   const menuTimeoutRef = React.useRef(null);
// // // //   const languageRef = useRef(null);

// // // //   const countries = [
// // // //     {
// // // //       name: "United States",
// // // //       code: "EN-US",
// // // //       flag: "🇺🇸",
// // // //     },
// // // //     {
// // // //       name: "India",
// // // //       code: "EN-IN",
// // // //       flag: "🇮🇳",
// // // //     },
// // // //   ];

// // // //   // Handle scroll effect
// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       setScrolled(window.scrollY > 50);
// // // //     };

// // // //     window.addEventListener("scroll", handleScroll);

// // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // //   }, []);

// // // //   // Close Language Dropdown
// // // //   useEffect(() => {
// // // //     const handleClickOutside = (event) => {
// // // //       if (languageRef.current && !languageRef.current.contains(event.target)) {
// // // //         setLanguageOpen(false);
// // // //       }
// // // //     };

// // // //     document.addEventListener("mousedown", handleClickOutside);

// // // //     return () => {
// // // //       document.removeEventListener("mousedown", handleClickOutside);
// // // //     };
// // // //   }, []);

// // // //   const handleMouseEnter = (menu) => {
// // // //     if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
// // // //     setActiveMenu(menu);
// // // //   };

// // // //   const handleMouseLeave = () => {
// // // //     menuTimeoutRef.current = setTimeout(() => {
// // // //       setActiveMenu(null);
// // // //     }, 150);
// // // //   };

// // // //   return (
// // // //     <>
// // // //       {/* Main Navigation - Dark Theme */}
// // // //       <header
// // // //         className={`sticky top-0 z-50 transition-all duration-500 ${
// // // //           scrolled
// // // //             ? "bg-[#0B1D33]/95 backdrop-blur-lg shadow-2xl border-b border-[#FFF]/20"
// // // //             : "bg-[#0B1D33] border-b border-[#143A63]"
// // // //         }`}
// // // //       >
// // // //         <Container>
// // // //           <nav className="flex items-center justify-between h-18 lg:h-20">
// // // //             {/* Logo */}
// // // //             <Link to="/" className="relative group flex items-center">
// // // //               <div className="relative overflow-hidden rounded-lg p-1">
// // // //                 <img
// // // //                   src={logo}
// // // //                   alt="Innovise"
// // // //                   className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105 brightness-0 invert" // Added brightness-0 invert assuming logo is dark, remove if logo is already white/transparent
// // // //                 />

// // // //                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
// // // //               </div>
// // // //             </Link>

// // // //             {/* Desktop Menu */}
// // // //             <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-[16px] font-medium text-white">
// // // //               <Link
// // // //                 to="/"
// // // //                 className="px-4 py-1.5 rounded-lg hover:bg-white/10 hover:text-[#FFF] transition-all duration-300 relative group text-white"
// // // //               >
// // // //                 Home
// // // //                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#FFF] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
// // // //               </Link>

// // // //               {/* What We Do */}
// // // //               <div
// // // //                 className="relative"
// // // //                 onMouseEnter={() => handleMouseEnter("what")}
// // // //                 onMouseLeave={handleMouseLeave}
// // // //               >
// // // //                 <button
// // // //                   className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg transition-all duration-300 ${
// // // //                     activeMenu === "what"
// // // //                       ? "bg-[#FFF] text-[#0B1D33] shadow-lg shadow-[#FFF]/25"
// // // //                       : "hover:bg-white/10 hover:text-[#FFF] text-white"
// // // //                   }`}
// // // //                 >
// // // //                   What We Do
// // // //                   <FaChevronDown
// // // //                     className={`text-xs transition-transform duration-300 ${
// // // //                       activeMenu === "what" ? "rotate-180 text-[#0B1D33]" : ""
// // // //                     }`}
// // // //                   />
// // // //                 </button>

// // // //                 <MegaMenu
// // // //                   data={navData.whatWeDo}
// // // //                   isOpen={activeMenu === "what"}
// // // //                   onClose={() => setActiveMenu(null)}
// // // //                 />
// // // //               </div>

// // // //               {/* What We Think */}
// // // //               {/* <Link
// // // //                 to="/think"
// // // //                 className="px-4 py-1.5 rounded-lg text-white hover:bg-white/10 hover:text-[#FFF] transition-all duration-300 relative group"
// // // //               >
// // // //                 What We Think
// // // //                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#FFF] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
// // // //               </Link> */}

// // // //               {/* About */}
// // // //               <div
// // // //                 className="relative"
// // // //                 onMouseEnter={() => handleMouseEnter("who")}
// // // //                 onMouseLeave={handleMouseLeave}
// // // //               >
// // // //                 <button
// // // //                   className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg transition-all duration-300 ${
// // // //                     activeMenu === "who"
// // // //                       ? "bg-[#FFF] text-[#0B1D33] shadow-lg shadow-[#FFF]/25"
// // // //                       : "hover:bg-white/10 hover:text-[#FFF] text-white"
// // // //                   }`}
// // // //                 >
// // // //                   About Innovise
// // // //                   <FaChevronDown
// // // //                     className={`text-xs transition-transform duration-300 ${
// // // //                       activeMenu === "who" ? "rotate-180 text-[#0B1D33]" : ""
// // // //                     }`}
// // // //                   />
// // // //                 </button>

// // // //                 <MegaMenu
// // // //                   data={navData.whoWeAre}
// // // //                   isOpen={activeMenu === "who"}
// // // //                   onClose={() => setActiveMenu(null)}
// // // //                 />
// // // //               </div>

// // // //               {/* Careers */}
// // // //               <Link
// // // //                 to="/careers"
// // // //                 className="px-4 py-1.5 rounded-lg hover:bg-white/10 hover:text-[#FFF] transition-all duration-300 relative group text-white"
// // // //               >
// // // //                 Careers
// // // //                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#FFF] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
// // // //               </Link>

// // // //               {/* Contact */}
// // // //               <Link
// // // //                 to="/contact"
// // // //                 className="px-4 py-1.5 rounded-lg hover:bg-white/10 hover:text-[#FFF] transition-all duration-300 relative group text-white"
// // // //               >
// // // //                 Contact
// // // //                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#FFF] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
// // // //               </Link>
// // // //             </div>

// // // //             {/* Language Dropdown */}
// // // //             <div
// // // //               className="hidden lg:flex items-center gap-3 pl-4 border-l border-white/20 relative"
// // // //               ref={languageRef}
// // // //             >
// // // //               <button
// // // //                 onClick={() => setLanguageOpen(!languageOpen)}
// // // //                 className="flex items-center gap-2 text-slate-300 hover:text-[#FFF] transition-all duration-300 group p-2 rounded-lg hover:bg-white/10"
// // // //               >
// // // //                 <FaGlobe className="text-lg group-hover:rotate-12 transition-transform text-[#FFF]" />

// // // //                 <span className="text-lg">{selectedCountry.flag}</span>

// // // //                 <FaChevronDown
// // // //                   className={`text-xs transition-transform duration-300 ${
// // // //                     languageOpen ? "rotate-180" : ""
// // // //                   }`}
// // // //                 />
// // // //               </button>

// // // //               {/* Dropdown - Dark Theme */}
// // // //               <AnimatePresence>
// // // //                 {languageOpen && (
// // // //                   <motion.div
// // // //                     initial={{ opacity: 0, y: 10, scale: 0.95 }}
// // // //                     animate={{ opacity: 1, y: 0, scale: 1 }}
// // // //                     exit={{ opacity: 0, y: 10, scale: 0.95 }}
// // // //                     transition={{ duration: 0.2 }}
// // // //                     className="absolute top-16 right-0 w-64 bg-[#143A63] rounded-2xl shadow-2xl border border-[#1A4570] overflow-hidden z-50"
// // // //                   >
// // // //                     {/* Header */}
// // // //                     <div className="bg-[#0B1D33] px-5 py-4">
// // // //                       <h3 className="text-white font-semibold text-sm">
// // // //                         Select Region
// // // //                       </h3>

// // // //                       <p className="text-slate-400 text-xs mt-1">
// // // //                         Choose your preferred country
// // // //                       </p>
// // // //                     </div>

// // // //                     {/* Countries */}
// // // //                     <div className="py-2">
// // // //                       {countries.map((country, index) => (
// // // //                         <button
// // // //                           key={index}
// // // //                           onClick={() => {
// // // //                             setSelectedCountry(country);
// // // //                             setLanguageOpen(false);
// // // //                           }}
// // // //                           className="w-full flex items-center justify-between px-5 py-3 hover:bg-[#0B1D33] transition-all duration-200 group"
// // // //                         >
// // // //                           <div className="flex items-center gap-3">
// // // //                             <span className="text-2xl">{country.flag}</span>

// // // //                             <div className="text-left">
// // // //                               <p className="text-sm font-semibold text-white group-hover:text-[#FFF]">
// // // //                                 {country.name}
// // // //                               </p>

// // // //                               <p className="text-xs text-slate-400">
// // // //                                 {country.code}
// // // //                               </p>
// // // //                             </div>
// // // //                           </div>

// // // //                           {selectedCountry.name === country.name && (
// // // //                             <FaCheck className="text-[#FFF] text-sm" />
// // // //                           )}
// // // //                         </button>
// // // //                       ))}
// // // //                     </div>
// // // //                   </motion.div>
// // // //                 )}
// // // //               </AnimatePresence>
// // // //             </div>

// // // //             {/* Mobile Menu Button */}
// // // //             <button
// // // //               onClick={() => setMobileOpen(true)}
// // // //               className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-xl bg-[#FFF] text-[#0B1D33] shadow-lg shadow-[#FFF]/30 hover:shadow-xl hover:shadow-[#FFF]/40 transform hover:scale-105 transition-all duration-300"
// // // //             >
// // // //               <FaBars className="text-lg" />

// // // //               <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-white rounded-full animate-ping"></span>

// // // //               <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-white rounded-full"></span>
// // // //             </button>
// // // //           </nav>
// // // //         </Container>
// // // //       </header>

// // // //       {/* Mobile Menu */}
// // // //       <MobileMenu
// // // //         isOpen={mobileOpen}
// // // //         onClose={() => setMobileOpen(false)}
// // // //         currentPage={location.pathname}
// // // //       />

// // // //       {/* Scroll To Top */}
// // // //       {scrolled && (
// // // //         <motion.button
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           onClick={() =>
// // // //             window.scrollTo({
// // // //               top: 0,
// // // //               behavior: "smooth",
// // // //             })
// // // //           }
// // // //           className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-br from-[#FFF] to-[#E5A700] text-[#0B1D33] rounded-full shadow-xl shadow-[#FFF]/40 flex items-center justify-center hover:shadow-2xl hover:scale-110 transition-all duration-300 hidden lg:flex"
// // // //         >
// // // //           <FaArrowRight className="rotate-[-90deg] text-lg" />
// // // //         </motion.button>
// // // //       )}
// // // //     </>
// // // //   );
// // // // };

// // // // export default Navbar;

// // // import React, { useState, useEffect, useRef } from "react";
// // // import { Link, useLocation } from "react-router-dom";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // import {
// // //   FaBars,
// // //   FaChevronDown,
// // //   FaGlobe,
// // //   FaArrowRight,
// // //   FaCheck,
// // // } from "react-icons/fa";

// // // import MegaMenu from "./MegaMenu";
// // // import AboutMenu from "./AboutMenu";
// // // import MobileMenu from "./MobileMenu";
// // // import { navData } from "../../data/navData";
// // // import Container from "../ui/Container";
// // // import logo from "../../assets/images/innovise_it_logo.png";

// // // const Navbar = () => {
// // //   const [activeMenu, setActiveMenu] = useState(null);
// // //   const [mobileOpen, setMobileOpen] = useState(false);
// // //   const [scrolled, setScrolled] = useState(false);

// // //   // Language Dropdown State
// // //   const [languageOpen, setLanguageOpen] = useState(false);
// // //   const [selectedCountry, setSelectedCountry] = useState({
// // //     name: "United States",
// // //     code: "EN-US",
// // //     flag: "🇺🇸",
// // //   });

// // //   const location = useLocation();
// // //   const menuTimeoutRef = React.useRef(null);
// // //   const languageRef = useRef(null);

// // //   const countries = [
// // //     {
// // //       name: "United States",
// // //       code: "EN-US",
// // //       flag: "🇺🇸",
// // //     },
// // //     {
// // //       name: "India",
// // //       code: "EN-IN",
// // //       flag: "🇮🇳",
// // //     },
// // //   ];

// // //   // Handle scroll effect
// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       setScrolled(window.scrollY > 50);
// // //     };

// // //     window.addEventListener("scroll", handleScroll);

// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   // Close Language Dropdown
// // //   useEffect(() => {
// // //     const handleClickOutside = (event) => {
// // //       if (languageRef.current && !languageRef.current.contains(event.target)) {
// // //         setLanguageOpen(false);
// // //       }
// // //     };

// // //     document.addEventListener("mousedown", handleClickOutside);

// // //     return () => {
// // //       document.removeEventListener("mousedown", handleClickOutside);
// // //     };
// // //   }, []);

// // //   const handleMouseEnter = (menu) => {
// // //     if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
// // //     setActiveMenu(menu);
// // //   };

// // //   const handleMouseLeave = () => {
// // //     menuTimeoutRef.current = setTimeout(() => {
// // //       setActiveMenu(null);
// // //     }, 150);
// // //   };

// // //   return (
// // //     <>
// // //       {/* Main Navigation */}
// // //       <header
// // //         className={`sticky top-0 z-50 transition-all duration-500 ${
// // //           scrolled
// // //             ? "bg-white/95 backdrop-blur-lg shadow-[#0a1628]/5 border-b border-[#FFD700]/20"
// // //             : "bg-white shadow-gray-100/50 border-b border-gray-100"
// // //         }`}
// // //       >
// // //         <Container>
// // //           <nav className="flex items-center justify-between h-18 lg:h-20">
// // //             {/* Logo */}
// // //             <Link to="/" className="relative group flex items-center">
// // //               <div className="relative overflow-hidden rounded-lg p-1">
// // //                 <img
// // //                   src={logo}
// // //                   alt="Innovise"
// // //                   className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
// // //                 />

// // //                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
// // //               </div>
// // //             </Link>

// // //             {/* Desktop Menu */}
// // //             <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-[16px] font-medium text-[#12324f]">
// // //               <Link
// // //                 to="/"
// // //                 className="px-4 py-1 rounded-lg hover:bg-[#0a1628]/5 hover:text-[#0a1628] transition-all duration-300 relative group text-[#12324f]"
// // //               >
// // //                 Home
// // //                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#0B2A4A] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
// // //               </Link>
// // //               {/* What We Do */}
// // //               <div
// // //                 className="relative"
// // //                 onMouseEnter={() => handleMouseEnter("what")}
// // //                 onMouseLeave={handleMouseLeave}
// // //               >
// // //                 <button
// // //                   className={`flex items-center gap-1.5 px-4 py-1 rounded-lg transition-all duration-300 ${
// // //                     activeMenu === "what"
// // //                       ? "px-4 py-1 rounded-lg hover:bg-[#0a1628]/5 hover:text-[#0a1628] transition-all duration-300 relative group text-[#12324f]"
// // //                       : "px-4 py-1 rounded-lg hover:bg-[#0a1628]/5 hover:text-[#0a1628] transition-all duration-300 relative group text-[#12324f]"
// // //                   }`}
// // //                 >
// // //                   What We Do
// // //                   <FaChevronDown
// // //                     className={`text-xs transition-transform duration-300 ${
// // //                       activeMenu === "what" ? "rotate-180" : ""
// // //                     }`}
// // //                   />
// // //                   <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#0B2A4A] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
// // //                 </button>

// // //                 <MegaMenu
// // //                   data={navData.whatWeDo}
// // //                   isOpen={activeMenu === "what"}
// // //                   onClose={() => setActiveMenu(null)}
// // //                 />
// // //               </div>

// // //               {/* What We Think */}
// // //               {/* <Link
// // //                 to="/think"
// // //                 className="px-4 py-1 rounded-lg text-[#12324f] hover:bg-[#0a1628]/5 hover:text-[#0a1628] transition-all duration-300 relative group"
// // //               >
// // //                 What We Think
// // //                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#0B2A4A] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
// // //               </Link> */}

// // //               {/* About */}
// // //               <div
// // //                 className="relative"
// // //                 onMouseEnter={() => handleMouseEnter("who")}
// // //                 onMouseLeave={handleMouseLeave}
// // //               >
// // //                 <button
// // //                   className={`flex items-center gap-1.5 px-4 py-1 rounded-lg transition-all duration-300 ${
// // //                     activeMenu === "who"
// // //                       ? "px-4 py-1 rounded-lg hover:bg-[#0a1628]/5 hover:text-[#0a1628] transition-all duration-300 relative group text-[#12324f]"
// // //                       : "px-4 py-1 rounded-lg hover:bg-[#0a1628]/5 hover:text-[#0a1628] transition-all duration-300 relative group text-[#12324f]"
// // //                   }`}
// // //                 >
// // //                   About Innovise
// // //                   <FaChevronDown
// // //                     className={`text-xs transition-transform duration-300 ${
// // //                       activeMenu === "who" ? "rotate-180" : ""
// // //                     }`}
// // //                   />
// // //                   <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#0B2A4A] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
// // //                 </button>

// // //                 <AboutMenu
// // //                   data={navData.whoWeAre}
// // //                   isOpen={activeMenu === "who"}
// // //                   onClose={() => setActiveMenu(null)}
// // //                 />
// // //               </div>

// // //               {/* Careers */}
// // //               {/* <Link
// // //                 to="/careers"
// // //                 className="px-4 py-1 rounded-lg hover:bg-[#0a1628]/5 hover:text-[#0a1628] transition-all duration-300 relative group text-[#12324f]"
// // //               >
// // //                 Careers
// // //                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#0B2A4A] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
// // //               </Link> */}

// // //               {/* Contact */}
// // //               <Link
// // //                 to="/contact"
// // //                 className="px-4 py-1 rounded-lg hover:bg-[#0a1628]/5 hover:text-[#0a1628] transition-all duration-300 relative group text-[#12324f]"
// // //               >
// // //                 Contact
// // //                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#0B2A4A] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
// // //               </Link>
// // //             </div>

// // //             {/* Language Dropdown */}
// // //             <div
// // //               className="hidden lg:flex items-center gap-3 pl-4 border-l border-gray-200 relative"
// // //               ref={languageRef}
// // //             >
// // //               <button
// // //                 onClick={() => setLanguageOpen(!languageOpen)}
// // //                 className="flex items-center gap-2 text-gray-600 hover:text-[#0a1628] transition-all duration-300 group p-2 rounded-lg hover:bg-[#0a1628]/5"
// // //               >
// // //                 <FaGlobe className="text-lg group-hover:rotate-12 transition-transform text-[#0a1628]" />

// // //                 <span className="text-lg">{selectedCountry.flag}</span>

// // //                 <FaChevronDown
// // //                   className={`text-xs transition-transform duration-300 ${
// // //                     languageOpen ? "rotate-180" : ""
// // //                   }`}
// // //                 />
// // //               </button>

// // //               {/* Dropdown */}
// // //               <AnimatePresence>
// // //                 {languageOpen && (
// // //                   <motion.div
// // //                     initial={{ opacity: 0, y: 10, scale: 0.95 }}
// // //                     animate={{ opacity: 1, y: 0, scale: 1 }}
// // //                     exit={{ opacity: 0, y: 10, scale: 0.95 }}
// // //                     transition={{ duration: 0.2 }}
// // //                     className="absolute top-16 right-0 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
// // //                   >
// // //                     {/* Header */}
// // //                     <div className="bg-gradient-to-r from-[#0a1628] to-[#152d52] px-5 py-4">
// // //                       <h3 className="text-white font-semibold text-sm">
// // //                         Select Region
// // //                       </h3>

// // //                       <p className="text-gray-300 text-xs mt-1">
// // //                         Choose your preferred country
// // //                       </p>
// // //                     </div>

// // //                     {/* Countries */}
// // //                     <div className="py-2">
// // //                       {countries.map((country, index) => (
// // //                         <button
// // //                           key={index}
// // //                           onClick={() => {
// // //                             setSelectedCountry(country);
// // //                             setLanguageOpen(false);
// // //                           }}
// // //                           className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-50 transition-all duration-200 group"
// // //                         >
// // //                           <div className="flex items-center gap-3">
// // //                             <span className="text-2xl">{country.flag}</span>

// // //                             <div className="text-left">
// // //                               <p className="text-sm font-semibold text-gray-800 group-hover:text-[#0a1628]">
// // //                                 {country.name}
// // //                               </p>

// // //                               <p className="text-xs text-gray-500">
// // //                                 {country.code}
// // //                               </p>
// // //                             </div>
// // //                           </div>

// // //                           {selectedCountry.name === country.name && (
// // //                             <FaCheck className="text-[#0a1628] text-sm" />
// // //                           )}
// // //                         </button>
// // //                       ))}
// // //                     </div>
// // //                   </motion.div>
// // //                 )}
// // //               </AnimatePresence>
// // //             </div>

// // //             {/* Mobile Menu Button */}
// // //             <button
// // //               onClick={() => setMobileOpen(true)}
// // //               className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-xl bg-primary-800 text-white shadow-lg shadow-[#0a1628]/30 hover:shadow-xl hover:shadow-[#0a1628]/40 transform hover:scale-105 transition-all duration-300"
// // //             >
// // //               <FaBars className="text-lg" />

// // //               <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#FFD700] rounded-full animate-ping"></span>

// // //               <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#FFD700] rounded-full"></span>
// // //             </button>
// // //           </nav>
// // //         </Container>
// // //       </header>

// // //       {/* Mobile Menu */}
// // //       <MobileMenu
// // //         isOpen={mobileOpen}
// // //         onClose={() => setMobileOpen(false)}
// // //         currentPage={location.pathname}
// // //       />

// // //       {/* Scroll To Top */}
// // //       {scrolled && (
// // //         <motion.button
// // //           initial={{ opacity: 0, y: 20 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           onClick={() =>
// // //             window.scrollTo({
// // //               top: 0,
// // //               behavior: "smooth",
// // //             })
// // //           }
// // //           className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] text-[#0a1628] rounded-full shadow-xl shadow-[#FFD700]/40 flex items-center justify-center hover:shadow-2xl hover:scale-110 transition-all duration-300 hidden lg:flex"
// // //         >
// // //           <FaArrowRight className="rotate-[-90deg] text-lg" />
// // //         </motion.button>
// // //       )}
// // //     </>
// // //   );
// // // };

// // // export default Navbar;

// // import React, { useState, useEffect, useRef } from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   FaBars,
// //   FaChevronDown,
// //   FaGlobe,
// //   FaArrowRight,
// //   FaCheck,
// //   FaTimes,
// // } from "react-icons/fa";

// // import MegaMenu from "./MegaMenu";
// // import AboutMenu from "./AboutMenu";
// // import MobileMenu from "./MobileMenu";
// // import { navData } from "../../data/navData";
// // import Container from "../ui/Container";
// // import logo from "../../assets/images/innovise_it_logo.png";

// // const Navbar = () => {
// //   const [activeMenu, setActiveMenu] = useState(null);
// //   const [mobileOpen, setMobileOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);

// //   // Language Dropdown State
// //   const [languageOpen, setLanguageOpen] = useState(false);
// //   const [selectedCountry, setSelectedCountry] = useState({
// //     name: "United States",
// //     code: "EN-US",
// //     flag: "🇺🇸",
// //   });

// //   const location = useLocation();
// //   const menuTimeoutRef = useRef(null);
// //   const languageRef = useRef(null);

// //   const countries = [
// //     { name: "United States", code: "EN-US", flag: "🇺🇸" },
// //     { name: "India", code: "EN-IN", flag: "🇮🇳" },
// //   ];

// //   // Handle scroll effect
// //   useEffect(() => {
// //     const handleScroll = () => setScrolled(window.scrollY > 50);
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   // Close Language Dropdown on outside click
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (languageRef.current && !languageRef.current.contains(event.target)) {
// //         setLanguageOpen(false);
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   // Close mobile menu on route change
// //   useEffect(() => {
// //     setMobileOpen(false);
// //   }, [location.pathname]);

// //   const handleMouseEnter = (menu) => {
// //     if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
// //     setActiveMenu(menu);
// //   };

// //   const handleMouseLeave = () => {
// //     menuTimeoutRef.current = setTimeout(() => {
// //       setActiveMenu(null);
// //     }, 150);
// //   };

// //   // Shared nav link style
// //   const navLinkClass = (isActive = false) =>
// //     `px-4 py-1 rounded-lg hover:bg-[#0a1628]/5 hover:text-[#0a1628] transition-all duration-300 relative group text-[#12324f]`;

// //   return (
// //     <>
// //       {/* Main Navigation */}
// //       <header
// //         className={`sticky top-0 z-50 transition-all duration-500 ${
// //           scrolled
// //             ? "bg-white/95 backdrop-blur-lg shadow-[#0a1628]/5 border-b border-[#FFD700]/20"
// //             : "bg-white shadow-gray-100/50 border-b border-gray-100"
// //         }`}
// //       >
// //         <Container>
// //           <nav className="flex items-center justify-between h-18 lg:h-20">
// //             {/* Logo */}
// //             <Link to="/" className="relative group flex items-center">
// //               <div className="relative overflow-hidden rounded-lg p-1">
// //                 <img
// //                   src={logo}
// //                   alt="Innovise"
// //                   className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
// //               </div>
// //             </Link>

// //             {/* Desktop Menu */}
// //             <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-[16px] font-medium text-[#12324f]">
// //               {/* Home */}
// //               <Link to="/" className={navLinkClass()}>
// //                 Home
// //                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#0B2A4A] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
// //               </Link>

// //               {/* What We Do */}
// //               <div
// //                 className="relative"
// //                 onMouseEnter={() => handleMouseEnter("what")}
// //                 onMouseLeave={handleMouseLeave}
// //               >
// //                 <button
// //                   className={`flex items-center gap-1.5 ${navLinkClass()}`}
// //                 >
// //                   What We Do
// //                   <FaChevronDown
// //                     className={`text-xs transition-transform duration-300 ${
// //                       activeMenu === "what" ? "rotate-180" : ""
// //                     }`}
// //                   />
// //                   <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#0B2A4A] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
// //                 </button>

// //                 <MegaMenu
// //                   data={navData.whatWeDo}
// //                   isOpen={activeMenu === "what"}
// //                   onClose={() => setActiveMenu(null)}
// //                 />
// //               </div>

// //               {/* About */}
// //               <div
// //                 className="relative"
// //                 onMouseEnter={() => handleMouseEnter("who")}
// //                 onMouseLeave={handleMouseLeave}
// //               >
// //                 <button
// //                   className={`flex items-center gap-1.5 ${navLinkClass()}`}
// //                 >
// //                   About Innovise
// //                   <FaChevronDown
// //                     className={`text-xs transition-transform duration-300 ${
// //                       activeMenu === "who" ? "rotate-180" : ""
// //                     }`}
// //                   />
// //                   <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#0B2A4A] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
// //                 </button>

// //                 <AboutMenu
// //                   data={navData.whoWeAre}
// //                   isOpen={activeMenu === "who"}
// //                   onClose={() => setActiveMenu(null)}
// //                 />
// //               </div>

// //               {/* <Link to="/careers" className={navLinkClass()}>
// //                 Careers
// //                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#0B2A4A] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
// //               </Link> */}

// //               {/* Contact */}
// //               <Link to="/contact" className={navLinkClass()}>
// //                 Contact
// //                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#0B2A4A] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
// //               </Link>
// //             </div>

// //             {/* Language Dropdown + CTA */}
// //             <div className="hidden lg:flex items-center gap-4 pl-4 border-l border-gray-200">
// //               {/* Language Selector */}
// //               <div className="relative" ref={languageRef}>
// //                 <button
// //                   onClick={() => setLanguageOpen(!languageOpen)}
// //                   className="flex items-center gap-2 text-gray-600 hover:text-[#0a1628] transition-all duration-300 group p-2 rounded-lg hover:bg-[#0a1628]/5"
// //                 >
// //                   <FaGlobe className="text-lg group-hover:rotate-12 transition-transform text-[#0a1628]" />
// //                   <span className="text-lg">{selectedCountry.flag}</span>
// //                   <FaChevronDown
// //                     className={`text-xs transition-transform duration-300 ${
// //                       languageOpen ? "rotate-180" : ""
// //                     }`}
// //                   />
// //                 </button>

// //                 <AnimatePresence>
// //                   {languageOpen && (
// //                     <motion.div
// //                       initial={{ opacity: 0, y: 10, scale: 0.95 }}
// //                       animate={{ opacity: 1, y: 0, scale: 1 }}
// //                       exit={{ opacity: 0, y: 10, scale: 0.95 }}
// //                       transition={{ duration: 0.2 }}
// //                       className="absolute top-14 right-0 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
// //                     >
// //                       <div className="bg-gradient-to-r from-[#0a1628] to-[#152d52] px-5 py-4">
// //                         <h3 className="text-white font-semibold text-sm">
// //                           Select Region
// //                         </h3>
// //                         <p className="text-gray-300 text-xs mt-1">
// //                           Choose your preferred country
// //                         </p>
// //                       </div>

// //                       <div className="py-2">
// //                         {countries.map((country, index) => (
// //                           <button
// //                             key={index}
// //                             onClick={() => {
// //                               setSelectedCountry(country);
// //                               setLanguageOpen(false);
// //                             }}
// //                             className="w-full flex items-center justify-between px-5 py-3 hover:bg-[#0a1628]/5 transition-all duration-200 group"
// //                           >
// //                             <div className="flex items-center gap-3">
// //                               <span className="text-2xl">{country.flag}</span>
// //                               <div className="text-left">
// //                                 <p className="text-sm font-semibold text-gray-800 group-hover:text-[#0a1628]">
// //                                   {country.name}
// //                                 </p>
// //                                 <p className="text-xs text-gray-500">
// //                                   {country.code}
// //                                 </p>
// //                               </div>
// //                             </div>
// //                             {selectedCountry.name === country.name && (
// //                               <FaCheck className="text-[#0a1628] text-sm" />
// //                             )}
// //                           </button>
// //                         ))}
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </div>
// //             </div>

// //             {/* Mobile Menu Button */}
// //             <button
// //               onClick={() => setMobileOpen(true)}
// //               className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0a1628] to-[#152d52] text-white shadow-lg shadow-[#0a1628]/30 hover:shadow-xl hover:shadow-[#0a1628]/40 transform hover:scale-105 transition-all duration-300"
// //             >
// //               <FaBars className="text-lg" />
// //               <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#0B2A4A] rounded-full animate-ping"></span>
// //               <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#0B2A4A] rounded-full"></span>
// //             </button>
// //           </nav>
// //         </Container>
// //       </header>

// //       {/* Mobile Menu */}
// //       <MobileMenu
// //         isOpen={mobileOpen}
// //         onClose={() => setMobileOpen(false)}
// //         currentPage={location.pathname}
// //       />

// //       {/* Scroll To Top */}
// //       {scrolled && (
// //         <motion.button
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
// //           className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-br from-[#0B2A4A] to-[#0B2A4A] text-[#FFF] rounded-full shadow-xl shadow-[#0B2A4A]/40 flex items-center justify-center hover:shadow-2xl hover:scale-110 transition-all duration-300 hidden lg:flex"
// //         >
// //           <FaArrowRight className="rotate-[-90deg] text-lg" />
// //         </motion.button>
// //       )}
// //     </>
// //   );
// // };

// // export default Navbar;

// import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaBars,
//   FaChevronDown,
//   FaGlobe,
//   FaArrowRight,
//   FaCheck,
//   FaTimes,
// } from "react-icons/fa";

// import MegaMenu from "./MegaMenu";
// import AboutMenu from "./AboutMenu";
// import MobileMenu from "./MobileMenu";
// import { navData } from "../../data/navData";
// import Container from "../ui/Container";
// import logo from "../../assets/images/innovise_it_logo.png";

// const Navbar = () => {
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Language Dropdown State
//   const [languageOpen, setLanguageOpen] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState({
//     name: "United States",
//     code: "EN-US",
//     flag: "🇺🇸",
//   });

//   const location = useLocation();
//   const menuTimeoutRef = useRef(null);
//   const languageRef = useRef(null);

//   const countries = [
//     { name: "United States", code: "EN-US", flag: "🇺🇸" },
//     { name: "India", code: "EN-IN", flag: "🇮🇳" },
//   ];

//   // Split navData: separate Industries and Services
//   const isIndustries = (title = "") => title.toLowerCase().includes("industr");
//   const industriesData = (navData.whatWeDo || []).filter((section) =>
//     isIndustries(section.title),
//   );
//   const servicesData = (navData.whatWeDo || []).filter(
//     (section) => !isIndustries(section.title),
//   );

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close Language Dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (languageRef.current && !languageRef.current.contains(event.target)) {
//         setLanguageOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Close mobile menu on route change
//   useEffect(() => {
//     setMobileOpen(false);
//   }, [location.pathname]);

//   const handleMouseEnter = (menu) => {
//     if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
//     setActiveMenu(menu);
//   };

//   const handleMouseLeave = () => {
//     menuTimeoutRef.current = setTimeout(() => {
//       setActiveMenu(null);
//     }, 150);
//   };

//   // Shared nav link style
//   const navLinkClass = (isActive = false) =>
//     `px-4 py-1 rounded-lg hover:bg-[#0a1628]/5 hover:text-[#0a1628] transition-all duration-300 relative group text-[#12324f]`;

//   return (
//     <>
//       {/* Main Navigation */}
//       <header
//         className={`sticky top-0 z-50 transition-all duration-500 ${
//           scrolled
//             ? "bg-white/95 backdrop-blur-lg shadow-[#0a1628]/5 border-b border-[#FFD700]/20"
//             : "bg-white shadow-gray-100/50 border-b border-gray-100"
//         }`}
//       >
//         <Container>
//           <nav className="flex items-center justify-between h-18 lg:h-20">
//             {/* Logo */}
//             <Link to="/" className="relative group flex items-center">
//               <div className="relative overflow-hidden rounded-lg p-1">
//                 <img
//                   src={logo}
//                   alt="Innovise"
//                   className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
//               </div>
//             </Link>

//             {/* Desktop Menu */}
//             <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-[16px] font-medium text-[#12324f]">
//               {/* Home */}
//               <Link to="/" className={navLinkClass()}>
//                 Home
//                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#0B2A4A] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
//               </Link>
//               {/* What We Do (Services Only) */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => handleMouseEnter("what")}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <button
//                   className={`flex items-center gap-1.5 ${navLinkClass()}`}
//                 >
//                   Services We Deliver
//                   <FaChevronDown
//                     className={`text-xs transition-transform duration-300 ${
//                       activeMenu === "what" ? "rotate-180" : ""
//                     }`}
//                   />
//                   <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#0B2A4A] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
//                 </button>

//                 <MegaMenu
//                   data={servicesData}
//                   isOpen={activeMenu === "what"}
//                   onClose={() => setActiveMenu(null)}
//                 />
//               </div>
//               {/* About Innovise */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => handleMouseEnter("who")}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <button
//                   className={`flex items-center gap-1.5 ${navLinkClass()}`}
//                 >
//                   About Innovise
//                   <FaChevronDown
//                     className={`text-xs transition-transform duration-300 ${
//                       activeMenu === "who" ? "rotate-180" : ""
//                     }`}
//                   />
//                   <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#0B2A4A] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
//                 </button>

//                 <AboutMenu
//                   data={navData.whoWeAre}
//                   isOpen={activeMenu === "who"}
//                   onClose={() => setActiveMenu(null)}
//                 />
//               </div>
//               {/* Industries (Separated) */}
//               {industriesData.length > 0 && (
//                 <div
//                   className="relative"
//                   onMouseEnter={() => handleMouseEnter("industries")}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <button
//                     className={`flex items-center gap-1.5 ${navLinkClass()}`}
//                   >
//                     Industries We Serve
//                     <FaChevronDown
//                       className={`text-xs transition-transform duration-300 ${
//                         activeMenu === "industries" ? "rotate-180" : ""
//                       }`}
//                     />
//                     <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#0B2A4A] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
//                   </button>

//                   <MegaMenu
//                     data={industriesData}
//                     isOpen={activeMenu === "industries"}
//                     onClose={() => setActiveMenu(null)}
//                   />
//                 </div>
//               )}
//               {/* Careers */}
//               {/* <Link to="/careers" className={navLinkClass()}>
//                 Careers
//                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#0B2A4A] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
//               </Link> */}
//               {/* Contact */}
//               <Link to="/contact" className={navLinkClass()}>
//                 Contact
//                 <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#0B2A4A] group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300"></span>
//               </Link>
//             </div>

//             {/* Language Dropdown + CTA */}
//             <div className="hidden lg:flex items-center gap-4 pl-4 border-l border-gray-200">
//               {/* Language Selector */}
//               <div className="relative" ref={languageRef}>
//                 <button
//                   onClick={() => setLanguageOpen(!languageOpen)}
//                   className="flex items-center gap-2 text-gray-600 hover:text-[#0a1628] transition-all duration-300 group p-2 rounded-lg hover:bg-[#0a1628]/5"
//                 >
//                   <FaGlobe className="text-lg group-hover:rotate-12 transition-transform text-[#0a1628]" />
//                   <span className="text-lg">{selectedCountry.flag}</span>
//                   <FaChevronDown
//                     className={`text-xs transition-transform duration-300 ${
//                       languageOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 <AnimatePresence>
//                   {languageOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 10, scale: 0.95 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       exit={{ opacity: 0, y: 10, scale: 0.95 }}
//                       transition={{ duration: 0.2 }}
//                       className="absolute top-14 right-0 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
//                     >
//                       <div className="bg-gradient-to-r from-[#0a1628] to-[#152d52] px-5 py-4">
//                         <h3 className="text-white font-semibold text-sm">
//                           Select Region
//                         </h3>
//                         <p className="text-gray-300 text-xs mt-1">
//                           Choose your preferred country
//                         </p>
//                       </div>

//                       <div className="py-2">
//                         {countries.map((country, index) => (
//                           <button
//                             key={index}
//                             onClick={() => {
//                               setSelectedCountry(country);
//                               setLanguageOpen(false);
//                             }}
//                             className="w-full flex items-center justify-between px-5 py-3 hover:bg-[#0a1628]/5 transition-all duration-200 group"
//                           >
//                             <div className="flex items-center gap-3">
//                               <span className="text-2xl">{country.flag}</span>
//                               <div className="text-left">
//                                 <p className="text-sm font-semibold text-gray-800 group-hover:text-[#0a1628]">
//                                   {country.name}
//                                 </p>
//                                 <p className="text-xs text-gray-500">
//                                   {country.code}
//                                 </p>
//                               </div>
//                             </div>
//                             {selectedCountry.name === country.name && (
//                               <FaCheck className="text-[#0a1628] text-sm" />
//                             )}
//                           </button>
//                         ))}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setMobileOpen(true)}
//               className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0a1628] to-[#152d52] text-white shadow-lg shadow-[#0a1628]/30 hover:shadow-xl hover:shadow-[#0a1628]/40 transform hover:scale-105 transition-all duration-300"
//             >
//               <FaBars className="text-lg" />
//               <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#0B2A4A] rounded-full animate-ping"></span>
//               <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#0B2A4A] rounded-full"></span>
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

//       {/* Scroll To Top */}
//       {scrolled && (
//         <motion.button
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-br from-[#0B2A4A] to-[#0B2A4A] text-[#FFF] rounded-full shadow-xl shadow-[#0B2A4A]/40 flex items-center justify-center hover:shadow-2xl hover:scale-110 transition-all duration-300 hidden lg:flex"
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
  FaArrowUp,
  FaCheck,
} from "react-icons/fa";

import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import { navData } from "../../data/navData";
import Container from "../ui/Container";
import logo from "../../assets/images/innovise_it_logo.png";

/*
  Brand palette: navy text, blue for active/hover, aqua only on navy.
  Solid colors only: no gradients, no glows.
*/

const countries = [
  { name: "United States", code: "EN-US", flag: "🇺🇸" },
  { name: "India", code: "EN-IN", flag: "🇮🇳" },
];

// Split navData into Services and Industries
const isIndustries = (title = "") => title.toLowerCase().includes("industr");
const industriesData = (navData.whatWeDo || []).filter((s) =>
  isIndustries(s.title),
);
const servicesData = (navData.whatWeDo || []).filter(
  (s) => !isIndustries(s.title),
);

/* Short introduction shown in the left column of each mega menu */
const menuIntro = {
  what: "End-to-end SAP, Guidewire, AI and quality engineering services that modernize how your business runs.",
  who: "Who we are, the people who lead us, and the values that guide our work.",
  industries:
    "Deep industry knowledge applied to the challenges that matter most in your sector.",
};

/* Shared link style; `active` marks the current page */
const navLinkClass = (active) =>
  `relative flex items-center gap-1.5 rounded-lg px-4 py-2 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
    active
      ? "text-primary-500"
      : "text-primary-900 hover:bg-primary-50 hover:text-primary-500"
  }`;

/* Underline that marks the current page */
const ActiveBar = ({ show }) =>
  show ? (
    <span
      className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-primary-500"
      aria-hidden="true"
    />
  ) : null;

/* A top-level item with a dropdown: opens on hover, click or keyboard.
   Defined outside Navbar so React keeps it mounted between renders. */
const Dropdown = ({
  id,
  label,
  intro,
  data,
  activeMenu,
  setActiveMenu,
  onEnter,
  onLeave,
  path,
}) => {
  const open = activeMenu === id;
  const active = data.some((s) => s.items.some((i) => path === i.path));
  return (
    <div
      className="relative"
      onMouseEnter={() => onEnter(id)}
      onMouseLeave={onLeave}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`menu-${id}`}
        onClick={() => setActiveMenu(open ? null : id)}
        className={navLinkClass(active || open)}
      >
        {label}
        <FaChevronDown
          className={`text-xs transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
        <ActiveBar show={active} />
      </button>
      <MegaMenu
        id={`menu-${id}`}
        title={label}
        intro={intro}
        data={data}
        isOpen={open}
        onClose={() => setActiveMenu(null)}
      />
    </div>
  );
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const location = useLocation();
  const menuTimeoutRef = useRef(null);
  const languageRef = useRef(null);

  const path = location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the region dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (languageRef.current && !languageRef.current.contains(e.target)) {
        setLanguageOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Escape closes any open dropdown
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setLanguageOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [path]);

  const openMenu = (menu) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(menu);
  };
  const closeMenuSoon = () => {
    menuTimeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b bg-white transition-shadow duration-300 ${
          scrolled
            ? "border-primary-100 shadow-md shadow-primary-900/5"
            : "border-primary-100/60"
        }`}
      >
        <Container>
          <nav
            aria-label="Main"
            className="flex h-18 items-center justify-between lg:h-20"
          >
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            >
              <img
                src={logo}
                alt="Innovise home"
                className="h-8 w-auto object-contain md:h-10"
              />
            </Link>

            {/* Desktop menu */}
            <div className="hidden items-center gap-1 text-base font-medium lg:flex xl:gap-2">
              <Link to="/" className={navLinkClass(path === "/")}>
                Home
                <ActiveBar show={path === "/"} />
              </Link>
              <Dropdown
                id="what"
                label="Services We Deliver"
                intro={menuIntro.what}
                data={servicesData}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                onEnter={openMenu}
                onLeave={closeMenuSoon}
                path={path}
              />
              <Dropdown
                id="who"
                label="About Innovise"
                intro={menuIntro.who}
                data={navData.whoWeAre || []}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                onEnter={openMenu}
                onLeave={closeMenuSoon}
                path={path}
              />
              {industriesData.length > 0 && (
                <Dropdown
                  id="industries"
                  label="Industries We Serve"
                  intro={menuIntro.industries}
                  data={industriesData}
                  activeMenu={activeMenu}
                  setActiveMenu={setActiveMenu}
                  onEnter={openMenu}
                  onLeave={closeMenuSoon}
                  path={path}
                />
              )}
              {/* Careers */}
              <Link to="/careers" className={navLinkClass(path === "/careers")}>
                Careers
                <ActiveBar show={path === "/careers"} />
              </Link>
              <Link to="/contact" className={navLinkClass(path === "/contact")}>
                Contact
                <ActiveBar show={path === "/contact"} />
              </Link>
            </div>

            {/* Region selector */}
            <div className="hidden items-center border-l border-primary-100 pl-4 lg:flex">
              <div className="relative" ref={languageRef}>
                <button
                  type="button"
                  onClick={() => setLanguageOpen(!languageOpen)}
                  aria-expanded={languageOpen}
                  aria-haspopup="listbox"
                  aria-label={`Region: ${selectedCountry.name}`}
                  className="flex items-center gap-2 rounded-lg p-2 text-primary-900 transition-colors hover:bg-primary-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                >
                  <FaGlobe
                    className="text-lg text-primary-500"
                    aria-hidden="true"
                  />
                  <span className="text-lg" aria-hidden="true">
                    {selectedCountry.flag}
                  </span>
                  <FaChevronDown
                    className={`text-xs transition-transform duration-300 ${languageOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence>
                  {languageOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute right-0 top-14 z-50 w-64 overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-2xl shadow-primary-900/10"
                    >
                      <div className="bg-primary-900 px-5 py-4">
                        <h3 className="text-sm font-semibold text-white">
                          Select Region
                        </h3>
                        <p className="mt-1 text-xs text-white/70">
                          Choose your preferred country
                        </p>
                      </div>
                      <ul role="listbox" aria-label="Region" className="py-2">
                        {countries.map((c) => {
                          const selected = selectedCountry.code === c.code;
                          return (
                            <li
                              key={c.code}
                              role="option"
                              aria-selected={selected}
                            >
                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedCountry(c);
                                  setLanguageOpen(false);
                                }}
                                className="flex w-full items-center justify-between px-5 py-3 text-left transition-colors hover:bg-primary-50 focus:outline-none focus-visible:bg-primary-50"
                              >
                                <span className="flex items-center gap-3">
                                  <span className="text-2xl" aria-hidden="true">
                                    {c.flag}
                                  </span>
                                  <span>
                                    <span className="block text-sm font-semibold text-primary-900">
                                      {c.name}
                                    </span>
                                    <span className="block text-xs text-primary-900/60">
                                      {c.code}
                                    </span>
                                  </span>
                                </span>
                                {selected && (
                                  <FaCheck className="text-sm text-primary-500" />
                                )}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-900 text-white transition-colors hover:bg-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 lg:hidden"
            >
              <FaBars className="text-lg" />
            </button>
          </nav>
        </Container>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        currentPage={path}
      />

      {/* Back to top */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-8 right-8 z-50 hidden h-12 w-12 items-center justify-center rounded-full bg-primary-900 text-accent-400 shadow-lg shadow-primary-900/30 transition-colors hover:bg-primary-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 lg:flex"
          >
            <FaArrowUp className="text-lg" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
