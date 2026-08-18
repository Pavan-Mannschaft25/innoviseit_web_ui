// import React from "react";
// import { Link } from "react-router-dom";
// import Container from "../ui/Container";
// import Button from "../ui/Button";
// import { FaCalendarAlt, FaPhone, FaArrowRight } from "react-icons/fa";
// import AnimatedSection from "../ui/AnimatedSection";

// const CTA = ({
//   title = "Ready to Transform Your Enterprise?",
//   subtitle = "Let's discuss how we can help you achieve your digital transformation goals with our proven expertise.",
//   primaryAction = {
//     text: "Schedule Consultation",
//     to: "/contact",
//     icon: FaCalendarAlt,
//   },
//   secondaryAction = {
//     text: "Call Us Now",
//     href: "tel:+14255185442",
//     icon: Phone,
//   },
// }) => {
//   return (
//     <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
//       {/* Background decorations */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/30 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
//       </div>

//       <Container className="relative z-10">
//         <AnimatedSection className="text-center max-w-4xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
//             {title}
//           </h2>

//           <p className="text-xl text-blue-100 mb-10 leading-relaxed">
//             {subtitle}
//           </p>

//           <div className="flex flex-wrap justify-center gap-4">
//             <Button
//               variant="accent"
//               size="lg"
//               to={primaryAction.to}
//               icon={primaryAction.icon}
//               iconPosition="right"
//             >
//               {primaryAction.text}
//             </Button>

//             <Button
//               variant="outline"
//               size="lg"
//               href={secondaryAction.href}
//               icon={secondaryAction.icon}
//             >
//               {secondaryAction.text}
//             </Button>
//           </div>

//           {/* Trust Badges */}
//           <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-8 text-blue-200">
//             <div className="flex items-center gap-2">
//               <span className="text-2xl">✓</span>
//               <span className="text-sm font-medium">Free Consultation</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="text-2xl">✓</span>
//               <span className="text-sm font-medium">No Obligation</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="text-2xl">✓</span>
//               <span className="text-sm font-medium">Response within 24hrs</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="text-2xl">✓</span>
//               <span className="text-sm font-medium">Expert Architects</span>
//             </div>
//           </div>
//         </AnimatedSection>
//       </Container>
//     </section>
//   );
// };

// export default CTA;

import React from "react";
import { Link } from "react-router-dom";
//  FIX: Import all icons needed
import {
  FaCalendarAlt,
  FaPhone, //  This was missing!
  FaArrowRight,
  FaCheck,
  FaRocket,
  FaHandshake,
  FaEnvelope,
} from "react-icons/fa";
import Container from "../ui/Container";
import Button from "../ui/Button";
import AnimatedSection from "../ui/AnimatedSection";

const CTA = ({
  title = "Ready to Transform Your Enterprise?",
  subtitle = "Let's discuss how we can help you achieve your digital transformation goals with our proven expertise.",
  primaryAction = {
    text: "Schedule Consultation",
    to: "/contact",
    icon: FaCalendarAlt,
  },
  secondaryAction = {
    text: "Call Us Now",
    href: "tel:+14255185442",
    icon: FaPhone,
  }, //  Now FaPhone is defined!
  variant = "default", // default | careers | contact | think
}) => {
  // Variant-specific configurations
  const variants = {
    default: {
      bgClass:
        "bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700",
      showTrustBadges: true,
    },
    careers: {
      bgClass: "bg-gradient-to-br from-accent-600 via-accent-500 to-accent-400",
      showTrustBadges: false,
    },
    contact: {
      bgClass: "bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900",
      showTrustBadges: true,
    },
    think: {
      bgClass: "bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900",
      showTrustBadges: false,
    },
  };

  const currentVariant = variants[variant] || variants.default;

  return (
    <section
      className={`py-16 ${currentVariant.bgClass} relative overflow-hidden`}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Container className="relative z-10">
        <AnimatedSection className="text-center max-w-4xl mx-auto">
          {/* Icon Badge */}
          {variant === "default" && (
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <FaRocket className="text-3xl text-accent-400" />
            </div>
          )}

          {variant === "careers" && (
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
              <FaHandshake className="text-3xl text-white" />
            </div>
          )}

          {variant === "contact" && (
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <FaEnvelope className="text-3xl text-blue-300" />
            </div>
          )}

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-blue-100/90 mb-10 leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={variant === "careers" ? "primary" : "accent"}
              size="lg"
              to={primaryAction.to}
              icon={primaryAction.icon}
              iconPosition="right"
            >
              {primaryAction.text}
            </Button>

            {secondaryAction.href && (
              <Button
                variant="outline"
                size="lg"
                href={secondaryAction.href}
                icon={secondaryAction.icon} //  FaPhone is now properly passed
              >
                {secondaryAction.text}
              </Button>
            )}

            {!secondaryAction.href && secondaryAction.to && (
              <Button
                variant="outline"
                size="lg"
                to={secondaryAction.to}
                icon={secondaryAction.icon}
              >
                {secondaryAction.text}
              </Button>
            )}
          </div>

          {/* Trust Badges */}
          {currentVariant.showTrustBadges && (
            <div className="pt-8 border-t border-white/10">
              <div className="flex flex-wrap justify-center items-center gap-8 text-blue-100/80">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <FaCheck className="text-xs text-green-400" />
                  </span>
                  <span className="text-sm font-medium">Free Consultation</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <FaCheck className="text-xs text-green-400" />
                  </span>
                  <span className="text-sm font-medium">No Obligation</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <FaCheck className="text-xs text-green-400" />
                  </span>
                  <span className="text-sm font-medium">
                    Response within 24hrs
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <FaCheck className="text-xs text-green-400" />
                  </span>
                  <span className="text-sm font-medium">Expert Architects</span>
                </div>
              </div>
            </div>
          )}

          {/* Additional Info for Contact Variant */}
          {variant === "contact" && (
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-blue-200 text-sm">
                Or reach us directly at{" "}
                <a
                  href="mailto:contact@innovise-it.com"
                  className="font-semibold text-white hover:text-accent-400 transition-colors underline"
                >
                  contact@innovise-it.com
                </a>
              </p>
            </div>
          )}
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default CTA;
