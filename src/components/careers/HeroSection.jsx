// // import React, { memo } from "react";
// // import banner from "../../assets/banners/careers_banner.png";

// // const HeroSection = memo(() => (
// //   <section className="relative h-[24vh] md:h-[50vh] lg:h-[75vh] xl:h-[70vh]">
// //     <img
// //       src={banner}
// //       alt="Innovise Career"
// //       className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8s] ease-out"
// //     />
// //   </section>
// // ));
// // export default HeroSection;

// import React, { memo } from "react";
// import banner from "../../assets/banners/careers_banner.png";

// const HeroSection = memo(() => (
//   <section className="relative w-full overflow-hidden">
//     <img src={banner} alt="Innovise Career" className="block w-full h-auto" />
//   </section>
// ));

// export default HeroSection;

import React, { memo } from "react";
import banner from "../../assets/banners/careers-banner1.png";

/* Full-width careers banner. The navy background shows while it loads. */
const HeroSection = memo(() => (
  <section className="relative w-full overflow-hidden bg-primary-900">
    <img
      src={banner}
      alt="Careers at Innovise"
      className="block h-auto w-full"
    />
  </section>
));
HeroSection.displayName = "HeroSection";

export default HeroSection;
