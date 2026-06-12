import React from "react";
import { motion } from "framer-motion";
import {
  FaProjectDiagram,
  FaCloud,
  FaDatabase,
  FaExchangeAlt,
  FaShieldAlt,
  FaNetworkWired,
  FaArrowRight,
  FaCheckCircle,
  FaRocket,
  FaSyncAlt,
  FaServer,
  FaCodeBranch,
  FaGlobe,
  FaLock,
  FaBolt,
  FaLayerGroup,
  FaUsers,
  FaAward,
  FaChartLine,
  FaStar,
  FaCogs,
} from "react-icons/fa";

import banner from "../../assets/services/integration.png";

// ==================== BRAND COLORS ====================
const BRAND = {
  navy: {
    dark: "#12324f",
    mid: "#12324f",
    light: "#143A63",
    lighter: "#1A4570",
  },
  gold: {
    primary: "#FDB913",
    light: "#FFD54F",
    gradient: "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
  },
};

// ==================== SERVICES ====================
const integrationServices = [
  {
    icon: FaExchangeAlt,
    title: "API Integration",
    desc: "Connect applications, platforms, and services with secure API-driven integration solutions.",
  },
  {
    icon: FaCloud,
    title: "Cloud Integration",
    desc: "Seamlessly integrate cloud applications, SaaS platforms, and enterprise systems.",
  },
  {
    icon: FaDatabase,
    title: "Data Synchronization",
    desc: "Real-time data flow and synchronization across multiple business systems.",
  },
  {
    icon: FaNetworkWired,
    title: "Enterprise Integration",
    desc: "Connect ERP, CRM, HRMS, and enterprise applications into a unified ecosystem.",
  },
  {
    icon: FaShieldAlt,
    title: "Secure Integrations",
    desc: "Enterprise-grade security, authentication, and compliance for connected platforms.",
  },
  {
    icon: FaSyncAlt,
    title: "Automation Workflows",
    desc: "Automate workflows, approvals, and business processes for operational efficiency.",
  },
];

// ==================== PROCESS ====================
const processData = [
  {
    step: "01",
    title: "Assessment",
    desc: "Analyze systems, workflows, APIs, and business requirements.",
  },
  {
    step: "02",
    title: "Architecture",
    desc: "Design scalable and secure integration architecture.",
  },
  {
    step: "03",
    title: "Implementation",
    desc: "Develop APIs, connectors, middleware, and workflows.",
  },
  {
    step: "04",
    title: "Optimization",
    desc: "Monitor, optimize, and scale integration performance.",
  },
];

// ==================== STATS ====================
const stats = [
  { value: "500+", label: "Integrations Delivered" },
  { value: "99.9%", label: "Reliable Connectivity" },
  { value: "40%", label: "Workflow Automation" },
  { value: "24/7", label: "Monitoring & Support" },
];

// ==================== HERO SECTION ====================
const HeroSection = () => {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 50%, ${BRAND.navy.light} 100%)`,
      }}
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FDB913]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#143A63]/40 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-6"
              style={{
                background: "rgba(253,185,19,0.12)",
                border: "1px solid rgba(253,185,19,0.25)",
              }}
            >
              <FaProjectDiagram style={{ color: BRAND.gold.primary }} />

              <span
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: BRAND.gold.primary }}
              >
                Integration Services
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
              Connecting{" "}
              <span
                style={{
                  backgroundImage: BRAND.gold.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Systems
              </span>
              ,{" "}
              <span
                style={{
                  backgroundImage: BRAND.gold.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Data
              </span>{" "}
              &{" "}
              <span
                style={{
                  backgroundImage: BRAND.gold.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Applications
              </span>{" "}
              Seamlessly
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              We build secure, scalable, and intelligent integration solutions
              that connect your enterprise applications, cloud platforms, APIs,
              and workflows into one unified ecosystem.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                className="px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: BRAND.gold.gradient,
                  color: BRAND.navy.dark,
                }}
              >
                Start Integration
              </button>

              <button className="px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all duration-300">
                Explore Services
              </button>
            </div>

            {/* Trust */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-white/10">
              {[
                { icon: FaAward, text: "Enterprise Grade" },
                { icon: FaUsers, text: "Expert Architects" },
                { icon: FaStar, text: "Reliable Connectivity" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <item.icon
                    className="text-sm"
                    style={{ color: BRAND.gold.primary }}
                  />
                  <span className="text-sm text-white/70">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className="rounded-3xl p-8 backdrop-blur-xl border border-white/10 shadow-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                <span className="text-xs text-white/40">
                  Integration Dashboard
                </span>
              </div>

              {/* Flow Cards */}
              <div className="space-y-4">
                {[
                  {
                    icon: FaCloud,
                    title: "Cloud Applications",
                    color: "#3B82F6",
                  },
                  {
                    icon: FaDatabase,
                    title: "Enterprise Data",
                    color: "#10B981",
                  },
                  {
                    icon: FaSyncAlt,
                    title: "Workflow Automation",
                    color: "#F59E0B",
                  },
                  {
                    icon: FaShieldAlt,
                    title: "Secure APIs",
                    color: "#8B5CF6",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between p-5 rounded-2xl border border-white/10"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center"
                        style={{
                          background: `${item.color}20`,
                        }}
                      >
                        <item.icon
                          className="text-2xl"
                          style={{ color: item.color }}
                        />
                      </div>

                      <div>
                        <h4 className="text-white font-bold">{item.title}</h4>

                        <p className="text-sm text-white/50">
                          Connected Successfully
                        </p>
                      </div>
                    </div>

                    <FaCheckCircle
                      className="text-xl"
                      style={{ color: "#10B981" }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Bottom */}
              <div
                className="mt-6 p-5 rounded-2xl"
                style={{
                  background: "rgba(253,185,19,0.08)",
                  border: "1px solid rgba(253,185,19,0.15)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/60 mb-1">
                      Active Integrations
                    </p>

                    <h3 className="text-3xl font-black text-white">
                      120+ Connected
                    </h3>
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-[#FDB913] flex items-center justify-center">
                    <FaRocket className="text-2xl text-[#081C34]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-5 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#FDB913]/10 flex items-center justify-center">
                  <FaBolt
                    className="text-xl"
                    style={{ color: BRAND.gold.primary }}
                  />
                </div>

                <div>
                  <h4
                    className="font-black text-lg"
                    style={{ color: BRAND.navy.dark }}
                  >
                    Real-Time Sync
                  </h4>

                  <p className="text-xs text-gray-500">
                    Fast & Secure Integration
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ==================== SERVICES SECTION ====================
const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
            style={{
              background: "#12324f08",
              color: BRAND.navy.dark,
            }}
          >
            Integration Solutions
          </span>

          <h2
            className="text-4xl lg:text-5xl font-black mb-6"
            style={{ color: BRAND.navy.dark }}
          >
            Modern{" "}
            <span
              style={{
                backgroundImage: BRAND.gold.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Integration Services
            </span>
          </h2>

          <p className="text-lg text-slate-500 leading-relaxed">
            Connecting platforms, applications, and data systems to streamline
            operations and accelerate digital transformation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrationServices.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="group rounded-3xl p-8 transition-all duration-500 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #081C34 0%, #102B4C 50%, #163B66 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FDB913]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: "rgba(253,185,19,0.12)",
                  border: "1px solid rgba(253,185,19,0.25)",
                }}
              >
                <service.icon
                  className="text-2xl"
                  style={{ color: BRAND.gold.primary }}
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-white/70 leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* <button
                className="flex items-center gap-2 text-sm font-semibold"
                style={{ color: BRAND.gold.primary }}
              >
                Learn More
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== PROCESS SECTION ====================
const ProcessSection = () => {
  return (
    <section
      className="py-20"
      style={{
        background: BRAND.navy.dark,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span
            className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
            style={{
              background: "rgba(253,185,19,0.12)",
              color: BRAND.gold.primary,
            }}
          >
            Integration Workflow
          </span>

          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Our Integration Process
          </h2>

          <p className="text-lg text-white/70">
            Secure, scalable, and agile integration methodology for modern
            enterprises.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-4 gap-8">
          {processData.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="text-6xl font-black text-white/5 absolute top-4 right-5">
                {item.step}
              </div>

              <div className="w-16 h-16 rounded-2xl bg-[#FDB913] flex items-center justify-center mb-6">
                <FaLayerGroup className="text-2xl text-[#081C34]" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-white/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== STATS SECTION ====================
const StatsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div
          className="rounded-[40px] p-10 lg:p-16"
          style={{
            background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 100%)`,
          }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((item, idx) => (
              <div key={idx} className="text-center">
                <h2
                  className="text-5xl font-black mb-3"
                  style={{ color: BRAND.gold.primary }}
                >
                  {item.value}
                </h2>

                <p className="text-white/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== CTA SECTION ====================
const CTASection = () => {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${BRAND.navy.dark} 0%, #081C34 50%, ${BRAND.navy.mid} 100%)`,
      }}
    >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FDB913]/10 blur-3xl rounded-full" />

      <div className="max-w-5xl mx-auto px-4 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="w-24 h-24 rounded-3xl mx-auto flex items-center justify-center mb-8"
            style={{
              background: "rgba(253,185,19,0.12)",
              border: "1px solid rgba(253,185,19,0.25)",
            }}
          >
            <FaRocket
              className="text-4xl"
              style={{ color: BRAND.gold.primary }}
            />
          </div>

          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
            Ready to Connect Your{" "}
            <span
              style={{
                backgroundImage: BRAND.gold.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Digital Ecosystem
            </span>
            ?
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Accelerate business efficiency with seamless integrations, real-time
            data flow, and scalable enterprise connectivity solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:-translate-y-1"
              style={{
                background: BRAND.gold.gradient,
                color: BRAND.navy.dark,
              }}
            >
              Schedule Consultation
            </button>

            <button className="px-10 py-5 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all duration-300">
              View Integration Solutions
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ==================== MAIN PAGE ====================
const IntegrationServicesPage = () => {
  return (
    <main className="overflow-hidden">
      {/* Banner */}
      {/* <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        
      </div> */}

      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <StatsSection />
      <CTASection />
    </main>
  );
};

export default IntegrationServicesPage;
