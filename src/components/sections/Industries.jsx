// // import React from "react";
// // import Container from "../ui/Container";
// // import SectionHeader from "../ui/SectionHeader";
// // import AnimatedSection from "../ui/AnimatedSection";
// // import { IndustryCard } from "../ui/Card";
// // import { industriesData } from "../../data/industriesData";

// // import * as FaIcons from "react-icons/fa";

// // const iconMap = {
// //   FaUniversity: FaIcons.FaUniversity,
// //   FaShieldAlt: FaIcons.FaShieldAlt,
// //   FaHeartbeat: FaIcons.FaHeartbeat,
// //   FaIndustry: FaIcons.FaIndustry,
// //   FaLaptopCode: FaIcons.FaLaptopCode,
// //   FaShoppingCart: FaIcons.FaShoppingCart,
// // };

// // const Industries = () => {
// //   const industriesWithIcons = industriesData.map((industry) => ({
// //     ...industry,
// //     icon: iconMap[industry.icon] || FaIcons.FaBuilding,
// //   }));

// //   return (
// //     <section className="py-24 bg-white">
// //       <Container>
// //         <SectionHeader
// //           badge="Domain Expertise"
// //           title="Industries We Transform"
// //           subtitle="Deep domain knowledge and proven track record across key verticals driving digital innovation"
// //         />

// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {industriesWithIcons.map((industry, index) => (
// //             <AnimatedSection key={industry.id} delay={index}>
// //               <IndustryCard industry={industry} />
// //             </AnimatedSection>
// //           ))}
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
// import IndustryHoverCard from "../ui/IndustryHoverCard";
// import { industriesData } from "../../data/industriesData";

// import * as FaIcons from "react-icons/fa";

// const iconMap = {
//   FaUniversity: FaIcons.FaUniversity,
//   FaShieldAlt: FaIcons.FaShieldAlt,
//   FaHeartbeat: FaIcons.FaHeartbeat,
//   FaIndustry: FaIcons.FaIndustry,
//   FaLaptopCode: FaIcons.FaLaptopCode,
//   FaShoppingCart: FaIcons.FaShoppingCart,
// };

// const Industries = () => {
//   const industriesWithIcons = industriesData.map((industry) => ({
//     ...industry,
//     icon: iconMap[industry.icon] || FaIcons.FaBuilding,
//   }));

//   return (
//     <section className="py-24 bg-gray-50">
//       <Container>
//         <SectionHeader
//           badge="Domain Expertise"
//           title="Industries We Transform"
//           subtitle="Deep domain knowledge across industries delivering scalable digital solutions"
//         />

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//           {industriesWithIcons.map((industry, index) => (
//             <AnimatedSection key={industry.id} delay={index * 0.1}>
//               <IndustryHoverCard industry={industry} />
//             </AnimatedSection>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Industries;

// import React from "react";
// import Container from "../ui/Container";
// import SectionHeader from "../ui/SectionHeader";
// import AnimatedSection from "../ui/AnimatedSection";
// import IndustryHoverCard from "../ui/IndustryHoverCard";
// import { industriesData } from "../../data/industriesData";

// import * as FaIcons from "react-icons/fa";

// const iconMap = {
//   FaUniversity: FaIcons.FaUniversity,
//   FaShieldAlt: FaIcons.FaShieldAlt,
//   FaHeartbeat: FaIcons.FaHeartbeat,
//   FaIndustry: FaIcons.FaIndustry,
//   FaLaptopCode: FaIcons.FaLaptopCode,
//   FaShoppingCart: FaIcons.FaShoppingCart,
// };

// const Industries = () => {
//   const industriesWithIcons = (industriesData || [])
//     .filter(Boolean)
//     .map((industry) => ({
//       ...industry,
//       icon: iconMap[industry.icon] || FaIcons.FaBuilding,
//     }));

//   return (
//     <section className="py-24 bg-gray-50">
//       <Container>
//         <SectionHeader
//           badge="Domain Expertise"
//           title="Industries We Transform"
//           subtitle="Deep domain knowledge across industries delivering scalable digital solutions"
//         />

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//           {industriesWithIcons.map((industry, index) => (
//             <AnimatedSection key={industry.id} delay={index * 0.1}>
//               <IndustryHoverCard industry={industry} />
//             </AnimatedSection>
//           ))}
//         </div>
//       </Container>
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

const Industries = () => {
  return (
    <section className="py-8 lg:py-12 bg-white">
      <Container>
        <SectionHeader
          badge="Domain Expertise"
          title="Industries We Transform"
          subtitle="Deep domain knowledge across industries delivering scalable digital solutions"
        />

        {/* Tile Grid Container - Matching Reference Structure */}
        <div className="mt-12 lg:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
            {industriesData.map((industry, index) => (
              <AnimatedSection key={industry.id} delay={index * 0.1}>
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
    </section>
  );
};

export default Industries;
