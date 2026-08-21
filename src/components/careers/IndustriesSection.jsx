// import React from "react";
// import {
//   FaLaptopCode,
//   FaHeartbeat,
//   FaGraduationCap,
//   FaShoppingCart,
//   FaRocket,
//   FaArrowRight,
// } from "react-icons/fa";

// const IndustriesSection = () => {
//   // Array of industries to map over
//   const industries = [
//     { name: "IT & Technology", icon: FaLaptopCode },
//     { name: "Healthcare", icon: FaHeartbeat },
//     { name: "Education", icon: FaGraduationCap },
//     { name: "Retail & Ecommerce", icon: FaShoppingCart },
//     { name: "Startups", icon: FaRocket },
//   ];

//   return (
//     <section className="py-16 md:py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-12 md:mb-16">
//           <h2 className="text-sm font-bold text-[#12324f] uppercase tracking-[0.2em] mb-3">
//             Industries We Serve
//           </h2>
//           <p className="text-3xl md:text-4xl font-extrabold text-gray-900 max-w-2xl mx-auto">
//             Empowering diverse sectors with tailored solutions
//           </p>
//         </div>

//         {/* Grid Layout */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
//           {/* Map through light cards */}
//           {industries.map((industry, index) => {
//             const Icon = industry.icon;
//             return (
//               <div
//                 key={index}
//                 className="group bg-white border border-gray-200/80 rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_40px_-12px_rgba(18,50,79,0.15)] hover:border-[#12324f]/40"
//               >
//                 {/* Icon Container */}
//                 <div className="w-14 h-14 rounded-2xl bg-[#12324f]/5 flex items-center justify-center border border-[#12324f]/10 mb-4 transition-all duration-300 group-hover:bg-[#12324f] group-hover:border-[#12324f] group-hover:scale-110">
//                   <Icon className="text-xl text-[#12324f] transition-colors duration-300 group-hover:text-white" />
//                 </div>
//                 {/* Title */}
//                 <h3 className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-[#12324f] transition-colors duration-300">
//                   {industry.name}
//                 </h3>
//               </div>
//             );
//           })}

//           {/* Dark "And Many More" Card */}
//           <div className="group relative bg-[#12324f] border border-[#12324f] rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-12px_rgba(18,50,79,0.4)]">
//             {/* Decorative Background Glow */}
//             <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//             <div className="relative z-10 flex flex-col items-center">
//               <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 mb-4 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
//                 <FaArrowRight className="text-xl text-white transition-transform duration-300 group-hover:rotate-[-45deg]" />
//               </div>
//               <h3 className="text-sm md:text-base font-semibold text-white">
//                 And Many More...
//               </h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IndustriesSection;

import React from "react";
import { Link } from "react-router-dom";
import {
  FaCar,
  FaBolt,
  FaStore,
  FaIndustry,
  FaLandmark,
  FaFighterJet,
  FaArrowRight,
} from "react-icons/fa";
import { industriesData } from "../../data/industriesData"; // Adjust import path as needed

// Mapper: Converts string names from data into actual React Icon Components
const iconMap = {
  FaCar: FaCar,
  FaBolt: FaBolt,
  FaStore: FaStore,
  FaIndustry: FaIndustry,
  FaLandmark: FaLandmark,
  FaFighterJet: FaFighterJet,
};

const IndustriesSection = () => {
  return (
    <section className="py-8 md:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-10">
          <h2 className="text-sm font-bold text-[#12324f] uppercase tracking-[0.2em] mb-3">
            Industries We Serve
          </h2>
          {/* <p className="text-3xl md:text-4xl font-extrabold text-gray-900 max-w-2xl mx-auto">
            Empowering diverse sectors with tailored solutions
          </p> */}
        </div>

        {/* Grid Layout - With exactly 6 items, lg:grid-cols-3 or 6 works perfectly. 
            I used 3 for large screens to give the longer names more breathing room. */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {industriesData.map((industry) => {
            // Get the actual icon component from the string
            const Icon = iconMap[industry.icon] || FaArrowRight;

            return (
              <Link
                to={industry.link}
                key={industry.id}
                className="group bg-white border border-gray-200/80 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_40px_-12px_rgba(18,50,79,0.15)] hover:border-[#12324f]/40"
              >
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-[#12324f]/5 flex items-center justify-center border border-[#12324f]/10 mb-4 transition-all duration-300 group-hover:bg-[#12324f] group-hover:border-[#12324f] group-hover:scale-110">
                  <Icon className="text-xl text-[#12324f] transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Title - text-sm and leading-tight to handle long names gracefully */}
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-[#12324f] transition-colors duration-300 leading-tight">
                  {industry.name}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
