import React from "react";

function IntroSection() {
  return (
    <section className="relative py-12 overflow-hidden bg-primary-100">
      {/* Background Effects */}
      {/* <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[120px]" /> */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Transforming Businesses with
            <span className="bg-primary-800 bg-clip-text text-transparent">
              {" "}
              SAP, Guidewire & AI Solutions
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-8">
            At <span className="font-semibold text-gray-900">Innovise IT</span>,
            we deliver End-to-End enterprise solutions—from consulting and
            implementation to testing, support, and application management.
            Together with our partners and experienced consultants, we help
            organizations modernize, secure, and innovate their IT landscape.
          </p>

          {/* Service Pills */}
          {/* <div className="flex flex-wrap justify-center gap-4">
            <div className="px-5 py-3 bg-white rounded-2xl shadow-sm border border-gray-200">
              <p className="font-semibold text-gray-900">
                SAP Consulting & Security
              </p>
            </div>

            <div className="px-5 py-3 bg-white rounded-2xl shadow-sm border border-gray-200">
              <p className="font-semibold text-gray-900">Guidewire Services</p>
            </div>

            <div className="px-5 py-3 bg-white rounded-2xl shadow-sm border border-gray-200">
              <p className="font-semibold text-gray-900">AI & Engineering</p>
            </div>

            <div className="px-5 py-3 bg-white rounded-2xl shadow-sm border border-gray-200">
              <p className="font-semibold text-gray-900">Application Support</p>
            </div>

            <div className="px-5 py-3 bg-white rounded-2xl shadow-sm border border-gray-200">
              <p className="font-semibold text-gray-900">Quality Engineering</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
