import React, { memo } from "react";
import banner from "../../assets/banners/careers_banner.png";

const HeroSection = memo(() => (
  <section className="relative h-[26vh] md:h-[60vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden">
    <img
      src={banner}
      alt="Innovise Career"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8s] ease-out"
    />
  </section>
));
export default HeroSection;
