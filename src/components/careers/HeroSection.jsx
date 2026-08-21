import React, { memo } from "react";
import banner from "../../assets/banners/careers_banner.png";

const HeroSection = memo(() => (
  <section className="relative h-[24vh] md:h-[50vh] lg:h-[75vh] xl:h-[70vh]">
    <img
      src={banner}
      alt="Innovise Career"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8s] ease-out"
    />
  </section>
));
export default HeroSection;
