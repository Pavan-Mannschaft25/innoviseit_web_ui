import React from "react";
import { Link } from "react-router-dom";
import {
  FiPackage,
  FiShield,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";

import sapImage from "../../assets/logos/sap.png";
import guidwireImage from "../../assets/logos/guidewire.png";

function PlatformsSection() {
  const sapServices = [
    "SAP S/4HANA",
    "Consulting & Advisory",
    "Implementation & Migration",
    "Security & Compliance",
    "Application Management",
    "Quality Engineering",
  ];

  const guidewireServices = [
    "Guidewire InsuranceSuite",
    "PolicyCenter",
    "BillingCenter",
    "ClaimCenter",
    "DataHub & Integration",
    "Upgrade & Support",
  ];

  return (
    <section className="relative py-6 md:py-12 overflow-hidden bg-white">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Heading */}
        <div className="max-w-8xl mx-auto mb-6">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-800 leading-tight mb-4">
            Two Leading Platforms. One Connected Ecosystem.
          </h2>
          <p className="text-lg text-gray-500 leading-8">
            We specialize in delivering end-to-end solutions for the world's
            leading enterprise and insurance platforms.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* SAP Card */}
          <div className="group bg-white rounded-3xl p-6 lg:p-6 border border-gray-200 shadow-sm  transition-all duration-300">
            <div className="flex flex-col items-start gap-4 mb-8">
              <img
                src={sapImage}
                alt="SAP Consulting"
                className="w-40 h-20 object-contain"
              />

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                SAP Consulting & Implementation
              </h3>
            </div>

            {/* Services List */}
            <ul className="grid grid-cols-1 sm:grid-cols-1 gap-y-4 gap-x-6 mb-6">
              {sapServices.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-600"
                >
                  <FiCheckCircle className="w-5 h-5 text-primary-900 flex-shrink-0" />
                  <span className="font-medium">{service}</span>
                </li>
              ))}
            </ul>

            {/* Explore Link */}
            <Link
              to="/services/sap-consulting"
              className="inline-flex items-center gap-2 bg-primary-800 text-[#FFF] font-semibold group-hover:gap-3 transition-all duration-300 p-4 rounded-lg"
            >
              Explore SAP Services
              <FiArrowRight />
            </Link>
          </div>

          {/* Guidewire Card */}
          <div className="group bg-white rounded-3xl p-6 lg:p-6 border border-gray-200 shadow-sm  transition-all duration-300">
            <div className="flex flex-col items-start gap-4 mb-8">
              <img
                src={guidwireImage}
                alt="SAP Consulting"
                className="w-80 h-20 object-contain"
              />

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Guidewire Services
              </h3>
            </div>

            {/* Services List */}
            <ul className="grid grid-cols-1 sm:grid-cols-1 gap-y-4 gap-x-6 mb-6">
              {guidewireServices.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-600"
                >
                  <FiCheckCircle className="w-5 h-5 text-primary-900 flex-shrink-0" />
                  <span className="font-medium">{service}</span>
                </li>
              ))}
            </ul>

            {/* Explore Link */}
            <Link
              to="/services/guidewire"
              className="inline-flex items-center gap-2 bg-primary-800 text-[#FFF] font-semibold group-hover:gap-3 transition-all duration-300 p-4 rounded-lg"
            >
              Explore Guidewire Services
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlatformsSection;
