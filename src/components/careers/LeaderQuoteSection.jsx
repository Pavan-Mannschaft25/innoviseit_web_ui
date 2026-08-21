// import React, { memo } from "react";
// import { FaQuoteLeft } from "react-icons/fa";
// import { BRAND } from "../../constants/careersConstants";
// import img1 from "../../assets/leaders/NishantGautam.webp";

// const LeaderQuoteSection = memo(() => (
//   <section className="py-6 md:py-6 bg-white relative overflow-hidden">
//     <div className="max-w-8xl mx-auto px-6 lg:px-8 relative z-10">
//       <div className="reveal relative rounded-3xl p-4 md:p-6 overflow-hidden bg-primary-800">
//         <div
//           className="absolute -top-20 -right-20 w-62 h-62 rounded-full pointer-events-none"
//           style={{
//             background: BRAND.gold.primary,
//             filter: "blur(100px)",
//             opacity: 0.08,
//           }}
//         />
//         <div className="relative z-10">
//           <div
//             className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-8"
//             style={{
//               background: `${BRAND.gold.primary}18`,
//               border: `1px solid ${BRAND.gold.primary}35`,
//             }}
//           >
//             <FaQuoteLeft
//               className="text-2xl"
//               style={{ color: BRAND.gold.primary }}
//             />
//           </div>
//           <blockquote>
//             <p
//               className="text-xl md:text-xl xl:text-2xl font-light leading-relaxed text-white/90 mb-10"
//               style={{ letterSpacing: "-0.01em" }}
//             >
//               "Technology is meaningful only when it creates lasting value for
//               people and businesses. At Innovise IT, we combine innovation,
//               artificial intelligence, and strategic thinking to deliver
//               solutions that empower organizations to grow, transform, and lead
//               confidently in the digital era. Our mission is not just to build
//               technology—but to build the future."
//             </p>
//             <div
//               className="w-16 h-0.5 mb-4 rounded-full"
//               style={{
//                 background: `linear-gradient(to right, ${BRAND.gold.primary}, transparent)`,
//               }}
//             />
//             <div className="flex items-center gap-5">
//               <div
//                 className="w-14 h-14 rounded-full flex-shrink-0 bg-cover bg-center"
//                 style={{
//                   backgroundImage: `url(${img1})`,
//                   boxShadow: `0 0 0 2px ${BRAND.gold.primary}50`,
//                 }}
//               />
//               <div>
//                 <p
//                   className="text-sm font-bold uppercase tracking-widest mb-1"
//                   style={{ color: BRAND.gold.primary }}
//                 >
//                   Nishant Gautam
//                 </p>
//                 <span className="text-sm text-white/90 font-light">
//                   Founder & Chief Executive Officer
//                 </span>
//               </div>
//             </div>
//           </blockquote>
//         </div>
//       </div>
//     </div>
//   </section>
// ));
// export default LeaderQuoteSection;

import React, { memo } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { BRAND } from "../../constants/careersConstants";
import img1 from "../../assets/leaders/NishantGautam.webp";

const LeaderQuoteSection = memo(() => (
  <section className="relative overflow-hidden bg-white py-8 sm:py-10 md:py-12 lg:py-14">
    <div className="mx-auto w-full max-w-8xl px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="relative overflow-hidden rounded-2xl bg-primary-800 p-5 sm:rounded-3xl sm:p-7 md:p-9 lg:p-12">
        {/* Background glow */}
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full sm:h-64 sm:w-64"
          style={{
            background: BRAND.gold.primary,
            filter: "blur(90px)",
            opacity: 0.08,
          }}
        />

        <div className="relative z-10">
          {/* Quote Icon */}
          <div
            className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl sm:mb-6 sm:h-12 sm:w-12 md:h-14 md:w-14 md:rounded-2xl"
            style={{
              background: `${BRAND.gold.primary}18`,
              border: `1px solid ${BRAND.gold.primary}35`,
            }}
          >
            <FaQuoteLeft
              className="text-lg sm:text-xl md:text-2xl"
              style={{ color: BRAND.gold.primary }}
            />
          </div>

          <blockquote>
            {/* Quote */}
            <p
              className="
    mb-7
    text-base
    font-light
    leading-7
    text-white/90
    sm:text-lg
    sm:leading-8
    md:text-xl
    md:leading-8
    lg:text-2xl
    lg:leading-9
  "
              style={{ letterSpacing: "-0.01em" }}
            >
              "At Innovise IT, we believe technology should create meaningful
              and lasting value. By combining innovation, artificial
              intelligence, and strategic thinking, we help organizations
              transform their ideas into solutions that drive growth, create
              impact, and build a stronger digital future."
            </p>

            {/* Divider */}
            <div
              className="mb-5 h-0.5 w-12 rounded-full sm:mb-6 sm:w-16"
              style={{
                background: `linear-gradient(to right, ${BRAND.gold.primary}, transparent)`,
              }}
            />

            {/* Leader */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
              {/* Image */}
              <div
                className="h-12 w-12 flex-shrink-0 rounded-full bg-cover bg-center sm:h-14 sm:w-14 md:h-16 md:w-16"
                style={{
                  backgroundImage: `url(${img1})`,
                  boxShadow: `0 0 0 2px ${BRAND.gold.primary}50`,
                }}
              />

              {/* Details */}
              <div className="min-w-0">
                <p
                  className="mb-0.5 text-xs font-bold uppercase tracking-[0.15em] sm:text-sm"
                  style={{ color: BRAND.gold.primary }}
                >
                  Nishant Gautam
                </p>

                <span className="block text-xs font-light leading-5 text-white/90 sm:text-sm md:text-base">
                  Founder & Chief Executive Officer
                </span>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
));

export default LeaderQuoteSection;
