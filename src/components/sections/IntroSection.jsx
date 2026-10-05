// import React from "react";

// function IntroSection() {
//   return (
//     <section className="relative py-12 overflow-hidden bg-primary-100">
//       {/* Background Effects */}
//       {/* <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px]" />
//       <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[120px]" /> */}

//       <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
//         <div className="text-center max-w-6xl mx-auto">
//           {/* Heading */}
//           <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
//             Transforming Businesses with SAP, Guidewire & AI Solutions
//           </h2>

//           {/* Description */}
//           <p className="text-lg text-gray-600 leading-8">
//             At <span className="font-semibold text-gray-900">Innovise</span>, we
//             deliver End-to-End enterprise solutions—from consulting and
//             implementation to testing, support, and application management.
//             Together with our partners and experienced consultants, we help
//             organizations modernize, secure, and innovate their IT landscape.
//           </p>

//           {/* Service Pills */}
//           {/* <div className="flex flex-wrap justify-center gap-4">
//             <div className="px-5 py-3 bg-white rounded-2xl shadow-sm border border-gray-200">
//               <p className="font-semibold text-gray-900">
//                 SAP Consulting & Security
//               </p>
//             </div>

//             <div className="px-5 py-3 bg-white rounded-2xl shadow-sm border border-gray-200">
//               <p className="font-semibold text-gray-900">Guidewire Services</p>
//             </div>

//             <div className="px-5 py-3 bg-white rounded-2xl shadow-sm border border-gray-200">
//               <p className="font-semibold text-gray-900">AI & Engineering</p>
//             </div>

//             <div className="px-5 py-3 bg-white rounded-2xl shadow-sm border border-gray-200">
//               <p className="font-semibold text-gray-900">Application Support</p>
//             </div>

//             <div className="px-5 py-3 bg-white rounded-2xl shadow-sm border border-gray-200">
//               <p className="font-semibold text-gray-900">Quality Engineering</p>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default IntroSection;

import React from "react";
import { FiBarChart2, FiSettings, FiShield, FiTarget } from "react-icons/fi";

function IntroSection() {
  const features = [
    {
      icon: <FiBarChart2 className="w-6 h-6" />,
      title: "Domain Expertise Across Industries",
      description: "Deep industry knowledge to solve complex challenges",
    },
    {
      icon: <FiSettings className="w-6 h-6" />,
      title: "End-to-End Delivery",
      description: "From strategy to ongoing support.",
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "Trusted Technology Partner",
      description: "Proven methodologies and experienced team.",
    },
    {
      icon: <FiTarget className="w-6 h-6" />,
      title: "Measurable Outcomes",
      description: "Driving operational efficiency and business growth.",
    },
  ];

  return (
    <section className="relative py-10 overflow-hidden bg-primary-100">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[120px]" />

      <div className="max-w-8xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-row items-start gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              {/* Icon Container - Left Side */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary-50 text-primary-900 rounded-xl text-2xl">
                {feature.icon}
              </div>

              {/* Content - Right Side */}
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-900 mb-1 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-6">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
