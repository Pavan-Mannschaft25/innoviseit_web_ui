import React from "react";
import {
  FiCompass,
  FiLayers,
  FiCheckSquare,
  FiGrid,
  FiTrendingUp,
} from "react-icons/fi";

function ServiceJourneySection() {
  const stages = [
    {
      icon: <FiCompass className="w-7 h-7" />,
      title: "Consult & Strategize",
      description:
        "Understand business goals and define a clear technology roadmap.",
    },
    {
      icon: <FiLayers className="w-7 h-7" />,
      title: "Implement & Integrate",
      description:
        "Seamless deployment and integration into your existing ecosystem.",
    },
    {
      icon: <FiCheckSquare className="w-7 h-7" />,
      title: "Test & Assure",
      description:
        "Ensure quality, security, and high performance across platforms.",
    },
    {
      icon: <FiGrid className="w-7 h-7" />,
      title: "Manage Applications",
      description:
        "Reliable ongoing management and support for your applications.",
    },
    {
      icon: <FiTrendingUp className="w-7 h-7" />,
      title: "Optimize & Grow",
      description:
        "Continuously innovate and optimize for long-term business success.",
    },
  ];

  return (
    <section className="relative py-10 md:py-12 overflow-hidden bg-gray-50">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Heading */}
        <div className="max-w-8xl mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-800 leading-tight mb-4">
            A Connected Service Journey
          </h2>
          <p className="text-lg text-gray-500 leading-8">
            From strategy to ongoing support, we deliver seamless and integrated
            services across SAP, Guidewire and other technologies.
          </p>
        </div>

        {/* Journey Grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          {/* Connecting Line (Visible only on large screens) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gray-200"></div>

          {stages.map((stage, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              {/* Icon Container with Number Badge */}
              <div className="relative z-10 w-18 h-18 flex items-center justify-center bg-primary-900 text-[#FFF] rounded-full shadow-md border border-gray-100 mb-6">
                {stage.icon}
              </div>

              {/* Content */}
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                {stage.title}
              </h3>
              <p className="text-sm text-gray-500 leading-6 max-w-xs">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceJourneySection;
