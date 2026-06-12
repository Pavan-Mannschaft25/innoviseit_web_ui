// // import React from "react";
// // import Container from "../ui/Container";
// // import SectionHeader from "../ui/SectionHeader";
// // import AnimatedSection from "../ui/AnimatedSection";
// // import IndustryTileCard from "../ui/IndustryTileCard";
// // import { industriesData } from "../../data/industriesData";

// // const Industries = () => {
// //   return (
// //     <section className="py-8 lg:py-12 bg-white">
// //       <Container>
// //         <SectionHeader
// //           badge="Domain Expertise"
// //           title="Industries We Transform"
// //           subtitle="Deep domain knowledge across industries delivering scalable digital solutions"
// //         />

// //         {/* Tile Grid Container - Matching Reference Structure */}
// //         <div className="mt-12 lg:mt-16">
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
// //             {industriesData.map((industry, index) => (
// //               <AnimatedSection key={industry.id} delay={index * 0.1}>
// //                 <IndustryTileCard
// //                   industry={industry}
// //                   variant={index % 2 === 0 ? "perspective" : "research-dark"}
// //                   imageType={index % 3 === 0 ? "full" : "half"}
// //                 />
// //               </AnimatedSection>
// //             ))}
// //           </div>
// //         </div>
// //       </Container>
// //     </section>
// //   );
// // };

// // export default Industries;

// import React from "react";
// import Container from "../ui/Container";
// import SectionHeader from "../ui/SectionHeader";
// import AnimatedSection from "../ui/AnimatedSection";
// import IndustryTileCard from "../ui/IndustryTileCard";
// import { industriesData } from "../../data/industriesData";

// // 🎨 NAVY & GOLD BRAND COLORS
// const COLORS = {
//   navy: {
//     dark: "#12324f",
//     mid: "#12324f",
//     light: "#132D4B",
//   },
//   gold: {
//     primary: "#FDB913",
//     light: "#FFD54F",
//     gradient: "linear-gradient(135deg, #FDB913 0%, #FFD54F 100%)",
//   },
// };

// const Industries = () => {
//   return (
//     <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
//       {/* ✨ Background Decorative Blurs */}
//       <div
//         className="absolute top-0 left-0 w-[600px] h-[600px] bg-yellow-500/[0.07] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
//         aria-hidden="true"
//       />
//       <div
//         className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/[0.06] rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"
//         aria-hidden="true"
//       />

//       <Container>
//         {/* ================================ */}
//         {/* 📌 SECTION HEADER                */}
//         {/* ================================ */}
//         <SectionHeader
//           badge={
//             <span className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-yellow-500/15 to-yellow-400/10 border-2 border-yellow-500/30 rounded-full text-yellow-700 font-bold text-xs tracking-widest uppercase relative overflow-hidden group">
//               <i className="fas fa-gem text-sm animate-pulse" />
//               Domain Expertise
//               {/* Shimmer Effect */}
//               <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-yellow-300/40 to-transparent" />
//             </span>
//           }
//           title={
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//               <span className="bg-gradient-to-br from-[#12324f] via-[#12324f] to-[#132D4B] bg-clip-text text-transparent">
//                 Industries We Transform
//               </span>
//             </h2>
//           }
//           subtitle={
//             <p className="text-lg md:text-xl text-[#12324f]/80 max-w-2xl mx-auto leading-relaxed">
//               Deep domain knowledge across industries delivering scalable
//               digital solutions with innovation at the core of every
//               transformation journey
//             </p>
//           }
//           decoration={
//             <div className="mt-8 flex items-center justify-center gap-3">
//               <div className="w-20 h-1 rounded-full bg-gradient-to-r from-transparent via-[#12324f]/40 to-transparent" />
//               <div className="w-3.5 h-3.5 rounded-full bg-[#FDB913] shadow-lg shadow-yellow-400/60 animate-pulse" />
//               <div className="w-20 h-1 rounded-full bg-gradient-to-r from-transparent via-[#12324f]/40 to-transparent" />
//             </div>
//           }
//         />

//         {/* ================================ */}
//         {/* 🎴 TILE GRID CONTAINER           */}
//         {/* ================================ */}
//         <div className="mt-16 lg:mt-20">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//             {industriesData.map((industry, index) => (
//               <AnimatedSection key={industry?.id || index} delay={index * 0.1}>
//                 <IndustryTileCard
//                   industry={industry}
//                   variant={index % 2 === 0 ? "perspective" : "research-dark"}
//                   imageType={index % 3 === 0 ? "full" : "half"}
//                 />
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>

//         {/* ================================ */}
//         {/* 🎯 BOTTOM CTA SECTION             */}
//         {/* ================================ */}
//         <div className="text-center mt-16 lg:mt-20">
//           <button
//             className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#12324f] to-[#12324f] text-white font-semibold rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-900/40 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FDB913] focus:ring-offset-2"
//             onClick={() => (window.location.href = "/industries")}
//           >
//             {/* Button Shimmer Overlay */}
//             <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

//             <span className="relative z-10 font-medium tracking-wide">
//               Explore All Industries
//             </span>

//             <i className="fas fa-arrow-right relative z-10 group-hover:translate-x-1 group-hover:text-[#FFD54F] transition-all duration-300" />
//           </button>
//         </div>
//       </Container>

//       {/* Custom Animation Keyframes */}
//       <style>{`
//         @keyframes pulse-glow {
//           0%, 100% {
//             box-shadow: 0 0 20px rgba(253, 185, 19, 0.2);
//           }
//           50% {
//             box-shadow: 0 0 35px rgba(253, 185, 19, 0.45);
//           }
//         }

//         .animate-pulse-glow {
//           animation: pulse-glow 2s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Industries;

import React from "react";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import AnimatedSection from "../ui/AnimatedSection";
import IndustryTileCard from "../ui/IndustryTileCard";
import { industriesData } from "../../data/industriesData";

// 🎨 NAVY & GOLD BRAND COLORS
const COLORS = {
  navy: {
    dark: "#12324f",
    mid: "#12324f",
    light: "#132D4B",
    darker: "#081629",
  },
  gold: {
    primary: "#FDB913",
    light: "#FFD54F",
    gradient: "linear-gradient(135deg, #FDB913 0%, #FFD54F 100%)",
  },
};

const Industries = () => {
  return (
    <section className="relative py-6 lg:py-10 bg-primary-100 overflow-hidden">
      {/* ✨ Background Effects */}
      {/* Gold Glow Top Left */}
      {/* <div
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-yellow-500/[0.06] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      /> */}
      {/* Navy Glow Bottom Right */}
      {/* <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/[0.15] rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"
        aria-hidden="true"
      /> */}
      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #FDB913 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <Container>
        {/* ================================ */}
        {/* 📌 SECTION HEADER                */}
        {/* ================================ */}
        <SectionHeader
          // title={
          //   <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.1] tracking-tight">
          //     <span className="bg-black bg-clip-text text-transparent">
          //       Property and
          //     </span>{" "}
          //     <span className="bg-gradient-to-r from-[#FDB913] via-[#FFD54F] to-[#FDB913] bg-clip-text text-transparent">
          //       Casualty Insurance
          //     </span>
          //   </h2>
          // }
          title={
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.1] tracking-tight">
              <span className="bg-black bg-clip-text text-transparent">
                Industries We
              </span>{" "}
              <span className="bg-gradient-to-r from-[#FDB913] via-[#FFD54F] to-[#FDB913] bg-clip-text text-transparent">
                Serve
              </span>
            </h2>
          }
          subtitle={
            <p className="text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed font-light">
              Deep domain knowledge across industries delivering scalable
              digital solutions with innovation at the core of every
              transformation journey
            </p>
          }
        />

        {/* ================================ */}
        {/* 🎴 TILE GRID CONTAINER           */}
        {/* ================================ */}
        <div className="mt-6 lg:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
            {industriesData.map((industry, index) => (
              <AnimatedSection key={industry?.id || index} delay={index * 0.12}>
                <IndustryTileCard
                  industry={industry}
                  variant={index % 2 === 0 ? "perspective" : "research-dark"}
                  imageType={index % 3 === 0 ? "full" : "half"}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow-pulse {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(253, 185, 19, 0.2);
            filter: brightness(1);
          }
          50% { 
            box-shadow: 0 0 40px rgba(253, 185, 19, 0.5);
            filter: brightness(1.1);
          }
        }

        @keyframes shimmer-move {
          0% { transform: translateX(-150%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Industries;
