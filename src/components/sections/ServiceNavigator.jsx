import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import {
  FaCrosshairs,
  FaClipboardList,
  FaCogs,
  FaGlobe,
  FaRobot,
  FaArrowRight,
  FaCheckCircle,
  FaLaptopCode,
  FaShieldAlt,
  FaBug,
  FaChartLine,
} from "react-icons/fa";

import testing from "../../assets/banners/testing.png";

// Service Data with React Icons
const serviceNavigationData = [
  {
    id: 1,
    number: "01",
    title: "Holistic Testing Services",
    description:
      "End-to-end testing covering functional, performance, and security aspects for enterprise applications.",
    path: "/services/testing/capabilities",
    icon: FaCrosshairs,
    tags: ["Functional", "Performance", "Security"],
  },
  {
    id: 2,
    number: "02",
    title: "Testing Services Approach",
    description:
      "Methodology-driven approach ensuring quality at every stage of the software development lifecycle.",
    path: "/services/testing/approach",
    icon: FaClipboardList,
    tags: ["Agile", "Waterfall", "DevOps"],
  },
  {
    id: 3,
    number: "03",
    title: "Testing Methodology",
    description:
      "Industry-standard frameworks adapted for enterprise-scale implementations with proven results.",
    path: "/services/testing/methodology",
    icon: FaCogs,
    tags: ["ISTQB", "Automation", "Manual"],
  },
  {
    id: 4,
    number: "04",
    title: "Flexible Delivery Model",
    description:
      "Onshore, offshore, and hybrid delivery models tailored to your organizational needs.",
    path: "/services/testing/delivery-model",
    icon: FaGlobe,
    tags: ["Onshore", "Offshore", "Hybrid"],
  },
  {
    id: 5,
    number: "05",
    title: "AI-Powered Tools & Accelerators",
    description:
      "Leveraging AI-powered tools and proprietary accelerators for faster, smarter delivery.",
    path: "/services/testing/tools-ai",
    icon: FaRobot,
    tags: ["AI/ML", "RPA", "Smart Analytics"],
  },
];

const ServiceNavigator = () => {
  const [hoveredId, setHoveredId] = useState(null);

  // Brand Colors
  const colors = {
    primary: {
      50: "#f4f8fc",
      100: "#e6eef7",
      200: "#c7d8ea",
      300: "#9db9d5",
      400: "#6f96bc",
      500: "#46739f",
      600: "#2f5c86",
      700: "#1d4568",
      800: "#12324f",
      900: "#0b2a4a",
    },
    accent: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
    },
  };

  return (
    <section className="relative min-h-[90vh] py-16 lg:py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Testing/Tech Background Image */}
        <img
          src={testing}
          alt="Testing Dashboard Background"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />

        {/* Multi-layer Gradient Overlays for depth */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(135deg, rgba(11,42,74,0.92) 0%, rgba(18,50,79,0.88) 30%, rgba(11,42,74,0.85) 100%)
            `,
          }}
        />

        {/* <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 30% 50%, rgba(245,158,11,0.08) 0%, transparent 60%)`,
          }}
        /> */}

        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, transparent 0%, rgba(6,24,41,0.4) 100%)`,
          }}
        />

        {/* Subtle Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Decorative Orbs */}
        {/* <div
          className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.15]"
          style={{ background: colors.accent[500] }}
        />
        <div
          className="absolute bottom-0 -left-32 w-[450px] h-[450px] rounded-full blur-[100px] opacity-[0.12]"
          style={{ background: colors.primary[500] }}
        /> */}
      </div>

      <Container>
        <div className="relative z-10">
          {/* Header Section */}
          <div className="mb-10 lg:mb-14">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
              <div className="max-w-2xl">
                {/* Badge */}
                {/* <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-5 backdrop-blur-sm"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(245,158,11,0.25)",
                    color: colors.accent[400],
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{
                      background: colors.accent[500],
                      boxShadow: `0 0 10px ${colors.accent[500]}`,
                    }}
                  />
                  Service Offerings
                </div> */}

                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Innovise{" "}
                  <span
                    style={{
                      background: `linear-gradient(135deg, ${colors.accent[400]} 0%, ${colors.accent[300]} 50%, ${colors.accent[400]} 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Testing Services
                  </span>
                </h2>

                <p
                  className="text-base lg:text-lg leading-relaxed max-w-xl"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Explore our comprehensive testing capabilities designed to
                  ensure quality, reliability, and performance excellence.
                </p>
              </div>

              {/* Stats Card */}
              {/* <div
                className="hidden lg:flex flex-col items-center gap-1 px-8 py-5 rounded-2xl backdrop-blur-md self-end"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span
                  className="text-4xl font-bold"
                  style={{
                    color: colors.accent[400],
                    fontFamily: "'Space Grotesk', sans-serif",
                    textShadow: `0 0 30px rgba(245,158,11,0.3)`,
                  }}
                >
                  05
                </span>
                <span
                  className="text-xs font-medium uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Core Services
                </span>
              </div> */}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
            {serviceNavigationData.map((service) => {
              const Icon = service.icon;
              const isHovered = hoveredId === service.id;

              return (
                <Link
                  key={service.id}
                  to={service.path}
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-2xl"
                  style={{
                    "--tw-ring-color": colors.accent[500],
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="relative h-full rounded-2xl overflow-hidden transition-all duration-500 ease-out backdrop-blur-md"
                    style={{
                      background: isHovered
                        ? "rgba(255,255,255,0.12)"
                        : "rgba(255,255,255,0.06)",
                      border: isHovered
                        ? `1.5px solid ${colors.accent[400]}60`
                        : "1px solid rgba(255,255,255,0.1)",
                      boxShadow: isHovered
                        ? `0 25px 60px rgba(0,0,0,0.35), 0 0 40px rgba(245,158,11,0.1)`
                        : `0 8px 24px rgba(0,0,0,0.2)`,
                      transform: isHovered
                        ? "translateY(-8px)"
                        : "translateY(0)",
                    }}
                  >
                    {/* Top Accent Bar with Glow */}
                    <div className="relative">
                      {/* <div
                        className="h-1 origin-left transition-transform duration-500"
                        style={{
                          background: `linear-gradient(90deg, ${colors.primary[300]} 0%, ${colors.accent[500]} 60%, ${colors.accent[400]} 100%)`,
                          transform: isHovered ? "scaleX(1)" : "scaleX(0.4)",
                          boxShadow: isHovered
                            ? `0 0 20px ${colors.accent[500]}60`
                            : "none",
                        }}
                      /> */}

                      {/* Glow effect on hover */}
                      {isHovered && (
                        <div
                          className="absolute -top-1 left-0 right-0 h-3 blur-xl opacity-60"
                          style={{ background: colors.accent[500] }}
                        />
                      )}
                    </div>

                    <div className="p-5 lg:p-6 flex flex-col min-h-[260px]">
                      {/* Header: Number + Icon */}
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className="flex items-center justify-center text-white font-bold relative overflow-hidden"
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "14px",
                            background: `linear-gradient(135deg, ${colors.primary[600]}cc 0%, ${colors.primary[800]}ee 100%)`,
                            fontSize: "1.15rem",
                            fontFamily: "'Space Grotesk', sans-serif",
                            transition:
                              "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                            transform: isHovered
                              ? "scale(1.1) rotate(-3deg)"
                              : "scale(1)",
                            border: `1px solid rgba(255,255,255,0.1)`,
                            boxShadow: isHovered
                              ? `0 8px 24px rgba(0,0,0,0.3), 0 0 0 1px ${colors.accent[400]}40`
                              : `0 4px 12px rgba(0,0,0,0.2)`,
                          }}
                        >
                          {service.number}

                          {isHovered && (
                            <div
                              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                              style={{
                                transform: "skewX(-15deg)",
                                animation: "shine 0.6s ease-out",
                              }}
                            />
                          )}
                        </div>

                        <div
                          className="transition-all duration-350 p-2.5 rounded-xl"
                          style={{
                            color: isHovered
                              ? colors.accent[400]
                              : "rgba(255,255,255,0.6)",
                            background: isHovered
                              ? `${colors.accent[500]}20`
                              : "rgba(255,255,255,0.06)",
                            border: `1px solid ${isHovered ? colors.accent[400] + "30" : "rgba(255,255,255,0.08)"}`,
                            transform: isHovered
                              ? "scale(1.1) rotate(5deg)"
                              : "scale(1)",
                          }}
                        >
                          <Icon size={20} strokeWidth={1.5} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-base lg:text-lg font-bold mb-2.5 leading-snug transition-colors duration-300 text-white"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-sm leading-relaxed mb-4 flex-grow transition-opacity duration-300"
                        style={{
                          color: isHovered
                            ? "rgba(255,255,255,0.85)"
                            : "rgba(255,255,255,0.55)",
                        }}
                      >
                        {service.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {service.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-medium px-2 py-0.5 rounded-md tracking-wide uppercase"
                            style={{
                              background: isHovered
                                ? `${colors.accent[500]}20`
                                : "rgba(255,255,255,0.05)",
                              color: isHovered
                                ? colors.accent[300]
                                : "rgba(255,255,255,0.45)",
                              border: `1px solid ${isHovered ? colors.accent[400] + "25" : "rgba(255,255,255,0.08)"}`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Learn More Button */}
                      {/* <div
                        className="mt-auto pt-4 border-t flex items-center justify-between group/btn"
                        style={{ borderColor: "rgba(255,255,255,0.08)" }}
                      >
                        <span
                          className="text-sm font-semibold transition-all duration-300"
                          style={{
                            color: isHovered
                              ? colors.accent[400]
                              : "rgba(255,255,255,0.75)",
                            transform: isHovered
                              ? "translateX(4px)"
                              : "translateX(0)",
                          }}
                        >
                          Learn More
                        </span>

                        <div
                          className="flex items-center justify-center transition-all duration-400"
                          style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "11px",
                            background: isHovered
                              ? `linear-gradient(135deg, ${colors.accent[500]} 0%, ${colors.accent[600]} 100%)`
                              : "rgba(255,255,255,0.08)",
                            border: `1px solid ${isHovered ? "transparent" : "rgba(255,255,255,0.1)"}`,
                            transform: isHovered
                              ? "translateX(4px)"
                              : "translateX(0)",
                            boxShadow: isHovered
                              ? `0 6px 20px rgba(245,158,11,0.4)`
                              : "none",
                          }}
                        >
                          <FaArrowRight
                            size={13}
                            className="transition-all duration-300"
                            style={{
                              color: isHovered
                                ? "#ffffff"
                                : "rgba(255,255,255,0.5)",
                              transform: isHovered
                                ? "translateX(2px)"
                                : "translateX(0)",
                            }}
                          />
                        </div>
                      </div> */}
                    </div>

                    {/* Hover Glow Effect - Bottom */}
                    {isHovered && (
                      <div
                        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                        style={{
                          background: `radial-gradient(ellipse at center bottom, ${colors.accent[500]}15 0%, transparent 70%)`,
                        }}
                      />
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>

      {/* Keyframe Animations */}
      <style>{`
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 150%; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServiceNavigator;
