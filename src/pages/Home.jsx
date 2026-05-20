import React from "react";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Industries from "../components/sections/Industries";
import CaseStudies from "../components/sections/CaseStudies";
import Clients from "../components/sections/Clients";
import CTA from "../components/sections/CTA";
import LeadershipTeam from "../components/sections/LeadershipTeam";
// import PartnerSuccessMetrics from "../components/sections/PartnerSuccessMetrics";
import MixedMediaText from "../components/sections/MixedMediaText";
import TestimonialsSection from "../components/sections/TestimonialsSection";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Industries />
      {/* <CaseStudies /> */}
      {/* <PartnerSuccessMetrics /> */}
      <LeadershipTeam />
      <Clients />
      <MixedMediaText />
      <TestimonialsSection />
      {/* <CTA /> */}
    </main>
  );
};

export default HomePage;
