// import React from "react";
import { FaArrowRight, FaPlayCircle, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// ===== IMAGES =====
import img1 from "../../assets/leaders/NishantGautam.webp";
import img2 from "../../assets/leaders/BobMarchand.webp";
import img3 from "../../assets/leaders/AlanWu.webp";
import img4 from "../../assets/leaders/OliverBetz.webp";

const HeroSection = () => {
  const navigate = useNavigate();
  // Orbital positions for images
  const orbitPositions = [
    { src: img1, pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-4" },
    { src: img2, pos: "right-0 top-1/2 -translate-y-1/2 translate-x-4" },
    {
      src: img3,
      pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-4",
    },
    { src: img4, pos: "left-0 top-1/2 -translate-y-1/2 -translate-x-4" },
  ];

  const stats = [
    { value: "19+", label: "Years Experience" },
    { value: "100+", label: "Global Clients" },
    { value: "25+", label: "Enterprise Solutions" },
  ];

  const services = [
    {
      name: "SAP",
      path: "/services/sap-consulting",
    },
    {
      name: "Guidewire",
      path: "/services/guidewire",
    },
    {
      name: "Core Engineering & AI",
      path: "/services/core-engineering-ai",
    },
    // {
    //   name: "Testing & QA",
    //   path: "/services/testing-qa",
    // },
    // {
    //   name: "Data Migration",
    //   path: "/services/data-migration",
    // },
    // {
    //   name: "Cloud Services",
    //   path: "/services/cloud-services",
    // },
  ];

  return (
    <section className="relative overflow-hidden bg-white min-h-[90vh]">
      {/* Background Blurs */}
      {/* <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary-100 blur-[100px] rounded-full opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent-100 blur-[100px] rounded-full opacity-60"></div> */}

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-5 sm:space-y-6">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 border border-primary-200 bg-primary-50 text-primary-800 px-4 py-2 rounded-full text-xs font-semibold">
              <FaCheckCircle className="text-accent-500" />
              SAP & Guidewire Technology Partner
            </span>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-primary-900">
              Transform Business with
              <span className="block text-accent-500">SAP & Guidewire</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Innovise IT delivers SAP consulting, Guidewire solutions, cloud
              transformation, testing, and enterprise modernization services for
              scalable growth.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={() => navigate("/contact")}
                className="group bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg"
              >
                Get Started
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              {/* <button
                onClick={() => navigate("/contact")}
                className="border border-primary-200 hover:border-accent-400 hover:bg-primary-50 text-primary-800 px-6 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              >
                <FaPlayCircle className="text-accent-500" />
                Success Stories
              </button> */}
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0 pt-2">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white border border-primary-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-2xl font-bold text-primary-800">
                    {stat.value}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div> */}
          </div>

          {/* RIGHT ORBITAL IMAGES */}
          <div className="order-1 lg:order-2 relative w-full max-w-[500px] mx-auto aspect-square flex items-center justify-center">
            {/* Glow Effect */}
            <div className="absolute w-[60%] h-[60%] bg-gradient-to-br from-primary-200 to-blue-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>

            {/* Orbital Ring (hidden on mobile) */}
            <div className="absolute hidden md:block w-[85%] h-[85%] border-2 border-dashed border-primary-800 rounded-full animate-spin-slow"></div>

            {/* Images positioned in orbit */}
            {orbitPositions.map((img, i) => (
              <div
                key={i}
                className={`absolute ${img.pos} w-[28%] max-w-[140px] aspect-square rounded-[20px] overflow-hidden shadow-2xl hover:scale-110 hover:z-30 transition-all duration-500 z-20`}
              >
                <img
                  src={img.src}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}

            {/* Center Floating Card */}
            <div className="relative z-40 w-[55%] sm:w-[75%] md:w-auto md:min-w-[240px] bg-white border border-primary-300 rounded-3xl p-2 md:p-4 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-700 to-primary-800 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shrink-0">
                  S
                </div>
                <div>
                  <p className="text-xs text-gray-500">Enterprise Suite</p>
                  <h3 className="text-md md:text-lg font-bold text-primary-900">
                    SAP • Guidewire
                  </h3>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs md:text-sm text-green-700 font-medium">
                  Live & Scalable
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
          {services.map((service, i) => (
            <div
              key={i}
              onClick={() => navigate(service.path)}
              className="bg-white border border-primary-100 rounded-2xl px-4 py-4 text-center hover:border-accent-400 hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <p className="text-xs md:text-md font-semibold text-primary-800 group-hover:text-accent-600">
                {service.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`@keyframes spin-slow{to{transform:rotate(360deg)}}.animate-spin-slow{animation:spin-slow 20s linear infinite}`}</style>
    </section>
  );
};

export default HeroSection;
