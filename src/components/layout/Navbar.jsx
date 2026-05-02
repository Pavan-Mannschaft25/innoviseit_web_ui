// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FaBars, FaPhone, FaChevronDown } from "react-icons/fa";
// import MegaMenu from "./MegaMenu";
// import MobileMenu from "./MobileMenu";
// import { navData } from "../../data/navData";
// import Container from "../ui/Container";
// import Button from "../ui/Button";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const location = useLocation();

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close menus on route change
//   useEffect(() => {
//     setActiveMenu(null);
//     setMobileOpen(false);
//   }, [location.pathname]);

//   const menuTimeoutRef = React.useRef(null);

//   const handleMouseEnter = (menu) => {
//     if (menuTimeoutRef.current) {
//       clearTimeout(menuTimeoutRef.current);
//     }
//     setActiveMenu(menu);
//   };

//   const handleMouseLeave = () => {
//     menuTimeoutRef.current = setTimeout(() => {
//       setActiveMenu(null);
//     }, 150); // Small delay for better UX
//   };

//   return (
//     <>
//       <header
//         className={`sticky top-0 z-40 transition-all duration-300 ${
//           isScrolled
//             ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
//             : "bg-white border-b border-gray-100"
//         }`}
//       >
//         <Container>
//           <nav className="flex items-center justify-between h-20">
//             {/* Logo */}
//             <Link to="/" className="flex items-center gap-2 group">
//               <div className="font-bold text-2xl tracking-tight">
//                 <span className="text-primary-900 group-hover:text-primary-700 transition-colors">
//                   Innovise
//                 </span>
//                 <span className="text-accent-500">IT</span>
//               </div>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center gap-1">
//               {/* What We Do Dropdown */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => handleMouseEnter("what")}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <button
//                   className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
//                     activeMenu === "what"
//                       ? "text-primary-700 bg-primary-50"
//                       : "text-gray-700 hover:text-primary-700 hover:bg-gray-50"
//                   }`}
//                 >
//                   What We Do
//                   <FaChevronDown
//                     className={`text-xs transition-transform ${
//                       activeMenu === "what" ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 <MegaMenu
//                   data={navData.whatWeDo}
//                   isOpen={activeMenu === "what"}
//                   onClose={() => setActiveMenu(null)}
//                 />
//               </div>

//               {/* Think Page */}
//               <Link
//                 to="/think"
//                 className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
//                   location.pathname === "/think"
//                     ? "text-primary-700 bg-primary-50"
//                     : "text-gray-700 hover:text-primary-700 hover:bg-gray-50"
//                 }`}
//               >
//                 What We Think
//                 <span className="text-accent500 text-xs">⭐</span>
//               </Link>

//               {/* Who We Are Dropdown */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => handleMouseEnter("who")}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <button
//                   className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
//                     activeMenu === "who"
//                       ? "text-primary-700 bg-primary-50"
//                       : "text-gray-700 hover:text-primary-700 hover:bg-gray-50"
//                   }`}
//                 >
//                   Who We Are
//                   <FaChevronDown
//                     className={`text-xs transition-transform ${
//                       activeMenu === "who" ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 <MegaMenu
//                   data={navData.whoWeAre}
//                   isOpen={activeMenu === "who"}
//                   onClose={() => setActiveMenu(null)}
//                 />
//               </div>

//               {/* Careers */}
//               <Link
//                 to="/careers"
//                 className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
//                   location.pathname === "/careers"
//                     ? "text-primary-700 bg-primary-50"
//                     : "text-gray-700 hover:text-primary-700 hover:bg-gray-50"
//                 }`}
//               >
//                 Careers
//               </Link>

//               {/* Contact */}
//               <Link
//                 to="/contact"
//                 className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
//                   location.pathname === "/contact"
//                     ? "text-primary-700 bg-primary-50"
//                     : "text-gray-700 hover:text-primary-700 hover:bg-gray-50"
//                 }`}
//               >
//                 Contact Us
//               </Link>

//               {/* CTA Button */}
//               <div className="ml-4 pl-4 border-l border-gray-200">
//                 <Button size="sm" to="/contact">
//                   Get Started
//                 </Button>
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setMobileOpen(true)}
//               className="lg:hidden w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
//               aria-label="Open menu"
//             >
//               <FaBars className="text-lg text-gray-700" />
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
