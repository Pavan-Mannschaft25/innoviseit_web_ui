import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaChevronDown, FaGlobe } from "react-icons/fa";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import { navData } from "../../data/navData";
import Container from "../ui/Container";
import logo from "../../assets/images/innovise_it_logo.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const menuTimeoutRef = React.useRef(null);

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
      <header className="sticky top-0 z-50 bg-white shadow-2xl border-b border-gray-200">
        <Container>
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Innovise IT"
                className="h-8 w-auto object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8 text-[18px] text-gray-700">
              {/* What We Do */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("what")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 hover:text-black transition">
                  What We Do
                  <FaChevronDown className="text-xs" />
                </button>

                <MegaMenu
                  data={navData.whatWeDo}
                  isOpen={activeMenu === "what"}
                  onClose={() => setActiveMenu(null)}
                />
              </div>

              {/* What We Think */}
              <Link to="/think" className="hover:text-black transition">
                What We Think
              </Link>

              {/* About */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("who")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 hover:text-black transition">
                  About Innovise
                  <FaChevronDown className="text-xs" />
                </button>

                <MegaMenu
                  data={navData.whoWeAre}
                  isOpen={activeMenu === "who"}
                  onClose={() => setActiveMenu(null)}
                />
              </div>

              {/* Careers */}
              <Link to="/careers" className="hover:text-black transition">
                Careers
              </Link>

              {/* Contact */}
              <Link to="/contact" className="hover:text-black transition">
                Contact Us
              </Link>
            </div>

            {/* Right Section (Language) */}
            <div className="hidden lg:flex items-center gap-2 text-gray-700 cursor-pointer">
              <FaGlobe className="text-md" />
              <span className="text-md font-medium">EN</span>
              <FaChevronDown className="text-xs" />
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-10 h-10 flex items-center justify-center"
            >
              <FaBars className="text-lg" />
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
    </>
  );
};

export default Navbar;

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
//                   className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
//                 />
//                 {/* Logo Shine Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
//               </div>
//             </Link>

//             {/* Desktop Menu - Premium Styling */}
//             <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-[16px]  text-gray-700">
//               {/* What We Do - Mega Menu Trigger */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => handleMouseEnter("what")}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <button
//                   className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg transition-all duration-300 ${
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
//                 className="px-4 py-2.5 rounded-lg hover:bg-[#0a1628]/5 hover:text-[#0a1628] transition-all duration-300 relative group"
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
//                   className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg transition-all duration-300 ${
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
//                 className="px-4 py-2.5 rounded-lg hover:bg-[#FFD700]/10 hover:text-[#0a1628] transition-all duration-300 relative group"
//               >
//                 Careers
//                 {/* <span className="absolute top-1 right-1 w-2 h-2 bg-[#FFD700] rounded-full animate-pulse"></span> */}
//               </Link>

//               <Link
//                 to="/contact"
//                 className="px-4 py-2.5 rounded-lg hover:bg-[#FFD700]/10 hover:text-[#0a1628] transition-all duration-300 relative group"
//               >
//                 Contact
//                 {/* <span className="absolute top-1 right-1 w-2 h-2 bg-[#FFD700] rounded-full animate-pulse"></span> */}
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
