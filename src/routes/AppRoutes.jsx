// import React from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
// import HomePage from "../pages/Home";
// import InnoviseThinkPage from "../pages/InnoviseThink";
// import CareersPage from "../pages/Careers";
// import ContactPage from "../pages/Contact";
// import NotFound from "../components/common/NotFound";
// import ValuesPage from "../pages/aboutPages/ValuesPage";
// import DiversityInclusionPage from "../pages/aboutPages/DiversityInclusionPage";
// import CommunityImpactPage from "../pages/aboutPages/CommunityImpactPage";
// import AboutPage from "../pages/aboutPages/AboutPage";
// import LeadershipPage from "../pages/aboutPages/LeadershipPage";
// import SAPConsultingPage from "../pages/servicesPages/SAPConsultingPage";
// import ApplicationMaintenancePage from "../pages/servicesPages/ApplicationMaintenancePage";
// import DataMigrationPage from "../pages/servicesPages/DataMigrationPage";
// import TestingQAPage from "../pages/servicesPages/TestingQAPage";
// import ProjectRemediationPage from "../pages/servicesPages/ProjectRemediationPage";
// import StaffAugmentationPage from "../pages/servicesPages/StaffAugmentationPage";
// import AerospaceDefensePage from "../pages/industryPages/AerospaceDefensePage";
// import AutomotivePage from "../pages/industryPages/AutomotivePage";
// import ChemicalsPage from "../pages/industryPages/ChemicalsPage";
// import ConstructionRealEstatePage from "../pages/industryPages/ConstructionRealEstatePage";
// import ConsumerProductsPage from "../pages/industryPages/ConsumerProductsPage";
// import IndustrialPage from "../pages/industryPages/IndustrialPage";
// import EnergyPage from "../pages/industryPages/EnergyPage";
// import RetailPage from "../pages/industryPages/RetailPage";
// import PublicSectorPage from "../pages/industryPages/PublicSectorPage";
// import GuidewirePage from "../pages/servicesPages/GuidewirePage";
// import ApplicationDevelopmentPage from "../pages/servicesPages/ApplicationDevelopmentPage";
// import IntegrationServicesPage from "../pages/servicesPages/IntegrationServicesPage";
// import EngineeringAIPage from "../pages/servicesPages/EngineeringAIPage";
// import ProjectSupportRemediationPage from "../pages/servicesPages/ProjectSupportRemediationPage";
// import ApplicationDevelopmentIntegrationAIPage from "../pages/servicesPages/ApplicationDevelopmentIntegrationAIPage";
// import EnergyUtilitiesChemicalsPage from "../pages/industryPages/EnergyUtilitiesChemicalsPage";
// import CodeQualitySecurityPage from "../pages/servicesPages/CodeQualitySecurityPage";
// import PrivacyPolicy from "../pages/Privacy";
// import ConsumerProductsRetailPage from "../pages/industryPages/ConsumerProductsPage";
// import InvitationPage from "../pages/InvitationPage";
// import EventsPage from "../pages/EventsPage";
// import EventDetailPage from "../pages/EventDetailPage";

// const AppRoutes = () => {
//   const location = useLocation();

//   return (
//     <>
//       <Navbar />

//       <AnimatePresence>
//         <Routes location={location} key={location.pathname}>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/think" element={<InnoviseThinkPage />} />
//           <Route path="/careers/*" element={<CareersPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           //Industry Pages
//           <Route
//             path="/industries/aerospace-defense"
//             element={<AerospaceDefensePage />}
//           />
//           <Route path="/industries/automotive" element={<AutomotivePage />} />
//           <Route path="/industries/chemicals" element={<ChemicalsPage />} />
//           <Route
//             path="/industries/energy-utilities"
//             element={<EnergyUtilitiesChemicalsPage />}
//           />
//           <Route
//             path="/industries/construction-real-estate"
//             element={<ConstructionRealEstatePage />}
//           />
//           <Route
//             path="/industries/consumer-retail"
//             element={<ConsumerProductsRetailPage />}
//           />
//           <Route
//             path="/industries/consumer-products"
//             element={<ConsumerProductsPage />}
//           />
//           <Route path="/industries/retail" element={<RetailPage />} />
//           <Route path="/industries/energy-utilities" element={<EnergyPage />} />
//           <Route
//             path="/industries/industrial-manufacturing"
//             element={<IndustrialPage />}
//           />
//           <Route
//             path="/industries/public-sector"
//             element={<PublicSectorPage />}
//           />
//           //Services Pages
//           <Route
//             path="/services/sap-consulting"
//             element={<SAPConsultingPage />}
//           />
//           <Route
//             path="/services/project-support"
//             element={<ProjectSupportRemediationPage />}
//           />
//           <Route path="/services/guidewire" element={<GuidewirePage />} />
//           <Route
//             path="/services/core-engineering-ai"
//             element={<EngineeringAIPage />}
//           />
//           <Route
//             path="/services/application-development-integration-ai"
//             element={<ApplicationDevelopmentIntegrationAIPage />}
//           />
//           <Route
//             path="/services/application-development"
//             element={<ApplicationDevelopmentPage />}
//           />
//           <Route
//             path="/services/integration-services"
//             element={<IntegrationServicesPage />}
//           />
//           <Route
//             path="/services/app-maintenance"
//             element={<ApplicationMaintenancePage />}
//           />
//           <Route path="/services/testing-qa" element={<TestingQAPage />} />
//           <Route
//             path="/services/code-quality-security"
//             element={<CodeQualitySecurityPage />}
//           />
//           <Route
//             path="/services/data-migration"
//             element={<DataMigrationPage />}
//           />
//           <Route
//             path="/services/remediation"
//             element={<ProjectRemediationPage />}
//           />
//           <Route
//             path="/services/staff-augmentation"
//             element={<StaffAugmentationPage />}
//           />
//           //About Pages
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/about/leadership" element={<LeadershipPage />} />
//           <Route path="/culture/values" element={<ValuesPage />} />
//           <Route
//             path="/culture/diversity"
//             element={<DiversityInclusionPage />}
//           />
//           <Route path="/culture/community" element={<CommunityImpactPage />} />
//           <Route path="/about/privacy-policy" element={<PrivacyPolicy />} />
//           <Route path="/reserve-your-invitation" element={<InvitationPage />} />
//           <Route path="/events" element={<EventsPage />} />
//           {/* <Route path="/events/:eventId" element={<EventDetailPage />} /> */}
//           <Route path="/events/:eventSlug" element={<EventDetailPage />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </AnimatePresence>

//       <Footer />
//     </>
//   );
// };

// export default AppRoutes;

import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import RouteSEO from "../components/SEO/RouteSEO";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HomePage from "../pages/Home";
import NotFound from "../components/common/NotFound";
const InnoviseThinkPage = lazy(() => import("../pages/InnoviseThink"));
const CareersPage = lazy(() => import("../pages/Careers"));
const ContactPage = lazy(() => import("../pages/Contact"));
const ValuesPage = lazy(() => import("../pages/aboutPages/ValuesPage"));
const DiversityInclusionPage = lazy(() => import("../pages/aboutPages/DiversityInclusionPage"));
const CommunityImpactPage = lazy(() => import("../pages/aboutPages/CommunityImpactPage"));
const AboutPage = lazy(() => import("../pages/aboutPages/AboutPage"));
const LeadershipPage = lazy(() => import("../pages/aboutPages/LeadershipPage"));
const SAPConsultingPage = lazy(() => import("../pages/servicesPages/SAPConsultingPage"));
const ApplicationMaintenancePage = lazy(() => import("../pages/servicesPages/ApplicationMaintenancePage"));
const DataMigrationPage = lazy(() => import("../pages/servicesPages/DataMigrationPage"));
const TestingQAPage = lazy(() => import("../pages/servicesPages/TestingQAPage"));
const ProjectRemediationPage = lazy(() => import("../pages/servicesPages/ProjectRemediationPage"));
const StaffAugmentationPage = lazy(() => import("../pages/servicesPages/StaffAugmentationPage"));
const AerospaceDefensePage = lazy(() => import("../pages/industryPages/AerospaceDefensePage"));
const AutomotivePage = lazy(() => import("../pages/industryPages/AutomotivePage"));
const ChemicalsPage = lazy(() => import("../pages/industryPages/ChemicalsPage"));
const ConstructionRealEstatePage = lazy(() => import("../pages/industryPages/ConstructionRealEstatePage"));
const ConsumerProductsPage = lazy(() => import("../pages/industryPages/ConsumerProductsPage"));
const IndustrialPage = lazy(() => import("../pages/industryPages/IndustrialPage"));
const RetailPage = lazy(() => import("../pages/industryPages/RetailPage"));
const PublicSectorPage = lazy(() => import("../pages/industryPages/PublicSectorPage"));
const GuidewirePage = lazy(() => import("../pages/servicesPages/GuidewirePage"));
const ApplicationDevelopmentPage = lazy(() => import("../pages/servicesPages/ApplicationDevelopmentPage"));
const IntegrationServicesPage = lazy(() => import("../pages/servicesPages/IntegrationServicesPage"));
const EngineeringAIPage = lazy(() => import("../pages/servicesPages/EngineeringAIPage"));
const ProjectSupportRemediationPage = lazy(() => import("../pages/servicesPages/ProjectSupportRemediationPage"));
const ApplicationDevelopmentIntegrationAIPage = lazy(() => import("../pages/servicesPages/ApplicationDevelopmentIntegrationAIPage"));
const EnergyUtilitiesChemicalsPage = lazy(() => import("../pages/industryPages/EnergyUtilitiesChemicalsPage"));
const CodeQualitySecurityPage = lazy(() => import("../pages/servicesPages/CodeQualitySecurityPage"));
const PrivacyPolicy = lazy(() => import("../pages/Privacy"));
const InvitationPage = lazy(() => import("../pages/InvitationPage"));
const EventsPage = lazy(() => import("../pages/EventsPage"));
const EventDetailPage = lazy(() => import("../pages/EventDetailPage"));

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      <RouteSEO />
      <Navbar />

      <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/think" element={<InnoviseThinkPage />} />
          <Route path="/careers/*" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Industry Pages */}
          <Route
            path="/industries/aerospace-defense"
            element={<AerospaceDefensePage />}
          />
          <Route path="/industries/automotive" element={<AutomotivePage />} />
          <Route path="/industries/chemicals" element={<ChemicalsPage />} />
          <Route
            path="/industries/energy-utilities"
            element={<EnergyUtilitiesChemicalsPage />}
          />
          <Route
            path="/industries/construction-real-estate"
            element={<ConstructionRealEstatePage />}
          />
          <Route
            path="/industries/consumer-retail"
            element={<ConsumerProductsPage />}
          />
          <Route
            path="/industries/consumer-products"
            element={<ConsumerProductsPage />}
          />
          <Route path="/industries/retail" element={<RetailPage />} />
          <Route
            path="/industries/industrial-manufacturing"
            element={<IndustrialPage />}
          />
          <Route
            path="/industries/public-sector"
            element={<PublicSectorPage />}
          />

          {/* Services Pages */}
          <Route
            path="/services/sap-consulting"
            element={<SAPConsultingPage />}
          />
          <Route
            path="/services/project-support"
            element={<ProjectSupportRemediationPage />}
          />
          <Route path="/services/guidewire" element={<GuidewirePage />} />
          <Route
            path="/services/core-engineering-ai"
            element={<EngineeringAIPage />}
          />
          <Route
            path="/services/application-development-integration-ai"
            element={<ApplicationDevelopmentIntegrationAIPage />}
          />
          <Route
            path="/services/application-development"
            element={<ApplicationDevelopmentPage />}
          />
          <Route
            path="/services/integration-services"
            element={<IntegrationServicesPage />}
          />
          <Route
            path="/services/app-maintenance"
            element={<ApplicationMaintenancePage />}
          />
          <Route
            path="/services/testing-quality-assurance"
            element={<TestingQAPage />}
          />
          {/* Old URL kept working; add a real 301 on the host too */}
          <Route
            path="/services/testing-qa"
            element={
              <Navigate to="/services/testing-quality-assurance" replace />
            }
          />
          <Route
            path="/services/code-quality-security"
            element={<CodeQualitySecurityPage />}
          />
          <Route
            path="/services/data-migration"
            element={<DataMigrationPage />}
          />
          <Route
            path="/services/remediation"
            element={<ProjectRemediationPage />}
          />
          <Route
            path="/services/staff-augmentation"
            element={<StaffAugmentationPage />}
          />

          {/* About Pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/leadership" element={<LeadershipPage />} />
          <Route path="/culture/values" element={<ValuesPage />} />
          <Route
            path="/culture/diversity"
            element={<DiversityInclusionPage />}
          />
          <Route path="/culture/community" element={<CommunityImpactPage />} />
          <Route path="/about/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/reserve-your-invitation" element={<InvitationPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:eventSlug" element={<EventDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      </Suspense>

      <Footer />
    </>
  );
};

export default AppRoutes;
