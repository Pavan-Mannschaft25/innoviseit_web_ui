import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

// ─── Data ───────────────────────────────────────────────────────────
const servicesData = [
  {
    id: 5,
    title: "Application Maintenance Services",
    description:
      "Ensure uninterrupted business operations with end-to-end SAP Application Maintenance Services. We provide 24/7 monitoring, proactive maintenance, incident resolution, performance optimization, and continuous enhancements to maximize system availability and business productivity.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "SAP Application Maintenance Services",
    features: [
      "24/7 Application Monitoring & Support",
      "Incident & Problem Management",
      "Performance Optimization",
      "Release & Change Management",
    ],
    buttonText: "Learn More",
    path: "/services/app-maintenance",
  },

  {
    id: 6,
    title: "Data Migration & Transformation",
    description:
      "Accelerate your digital transformation with secure and reliable SAP data migration services. We help organizations migrate from legacy systems to SAP HANA and SAP S/4HANA while ensuring data accuracy, consistency, and minimal business disruption.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "SAP Data Migration & Transformation",
    features: [
      "SAP HANA & S/4HANA Migration",
      "Legacy Data Conversion",
      "Data Validation & Cleansing",
      "System Consolidation",
    ],
    buttonText: "Learn More",
    path: "/services/data-migration",
  },

  {
    id: 7,
    title: "SAP Talent & Staff Augmentation",
    description:
      "Strengthen your SAP initiatives with experienced consultants, architects, developers, and project managers. Our flexible engagement models provide the right expertise to support implementation, upgrades, support, and transformation projects.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "SAP Talent & Staff Augmentation",
    features: [
      "Certified SAP Functional Consultants",
      "SAP Technical Experts",
      "Project & Delivery Managers",
      "Flexible Resource Engagement",
    ],
    buttonText: "Learn More",
    path: "/services/staff-augmentation",
  },

  {
    id: 8,
    title: "Code Quality & Security",
    description:
      "Deliver enterprise-grade SAP applications with robust code quality, security, and compliance practices. We perform continuous code reviews, vulnerability assessments, and governance checks to ensure secure, scalable, and high-performing SAP solutions.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "SAP Code Quality & Security",
    features: [
      "Automated Code Reviews",
      "Security & Vulnerability Assessments",
      "Compliance & Governance Validation",
      "Risk Analysis & Mitigation",
    ],
    buttonText: "Learn More",
    path: "/services/code-quality-security",
  },
];

// ─── Check Icon (matches Elementor SVG) ─────────────────────────────
const CheckIcon = () => (
  <svg
    width="15"
    height="12"
    viewBox="0 0 15 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <path
      d="M1 6L5.24264 10.2426L13.727 1.75732"
      stroke="#FDB913"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ─── Service Row ────────────────────────────────────────────────────
const ServiceRow = ({ service, index }) => {
  const isReversed = index % 2 !== 0;
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
        isReversed ? "lg:direction-rtl" : ""
      }`}
    >
      {/* ── Text Side ── */}
      <div
        className={`order-2 lg:order-1 ${
          isReversed ? "lg:order-2" : "lg:order-1"
        }`}
      >
        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-white mb-4 leading-tight"
        >
          {service.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-white/60 text-base leading-relaxed mb-7 max-w-lg"
        >
          {service.description}
        </motion.p>

        {/* Features */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="space-y-3.5 mb-8"
        >
          {service.features.map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4 + idx * 0.08,
                duration: 0.4,
              }}
              className="flex items-start gap-3 text-sm text-white/80"
            >
              <span className="mt-0.5">
                <CheckIcon />
              </span>
              <span>{feature}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA */}
        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.4 }}
          whileHover={{ x: 6 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-wide group/btn"
          style={{ color: "#FDB913" }}
        >
          <span>Learn More</span>
          <FaArrowRight
            size={13}
            className="transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </motion.a>
      </div>

      {/* ── Image Side ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: isReversed ? 0.1 : 0.3,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`order-1 lg:order-2 ${
          isReversed ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="relative group">
          {/* Glow behind image */}
          <div
            className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"
            style={{ background: "rgba(253,185,19,0.08)" }}
          />

          {/* Border accent line */}
          <div
            className="absolute -bottom-px left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(90deg, transparent, #FDB913, transparent)",
            }}
          />

          {/* Image container */}
          <div
            className="relative rounded-2xl overflow-hidden border border-white/[0.06] transition-all duration-500 group-hover:border-white/[0.12]"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
              boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
            }}
          >
            {/* Placeholder shimmer */}
            {!imgLoaded && (
              <div
                className="absolute inset-0 animate-pulse"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0.02) 25%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.02) 75%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 1.5s infinite",
                }}
              />
            )}

            <img
              src={service.image}
              alt={service.imageAlt}
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
              className={`w-full h-auto object-cover transition-all duration-700 group-hover:scale-[1.03] ${
                imgLoaded ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Subtle top gradient overlay */}
            <div
              className="absolute inset-x-0 top-0 h-20 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(8,28,52,0.3), transparent)",
              }}
            />

            {/* Corner accent */}
            <div
              className="absolute top-4 right-4 w-10 h-10 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0"
              style={{
                background: "rgba(253,185,19,0.15)",
                border: "1px solid rgba(253,185,19,0.25)",
                backdropFilter: "blur(10px)",
              }}
            >
              <FaArrowRight size={14} className="text-[#FDB913] -rotate-45" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── Main Section ───────────────────────────────────────────────────
const ServicesSection = () => (
  <section
    id="services"
    className="relative overflow-hidden py-20 lg:py-28
             bg-[#01182f]
             backdrop-blur-3xl
             border-y border-white/10"
  >
    {/* ── Animated SVG Background Lines ── */}
    <div
      className="absolute inset-0 pointer-events-none hidden xl:block"
      style={{ left: "17.5%" }}
    >
      <svg
        width="898"
        height="3215"
        viewBox="0 0 898 3215"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full opacity-[0.12]"
      >
        <path
          d="M427.751 0V199.655C427.751 213.462 438.943 224.655 452.751 224.655H866C879.807 224.655 891 235.848 891 249.655V1593C891 1606.81 879.807 1618 866 1618H32.5C18.6929 1618 7.5 1629.19 7.5 1643V2981"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          style={{
            strokeDasharray: 5000,
            strokeDashoffset: 5000,
            animation: "drawLine 8s linear forwards",
          }}
        />
        <path
          d="M428.5 3215V3100.5C428.5 3086.69 417.307 3075.5 403.5 3075.5H32.5C18.6929 3075.5 7.5 3064.31 7.5 3050.5V2707"
          stroke="white"
          strokeWidth="1"
        />
        {/* Moving dots */}
        <circle
          cx="891"
          cy="250"
          r="4"
          fill="#FDB913"
          style={{ animation: "moveDot 5s linear infinite" }}
        />
        <circle
          cx="891"
          cy="250"
          r="6"
          fill="white"
          style={{ animation: "moveDot 5s linear 1.5s infinite" }}
        />
        <circle
          cx="500"
          cy="1617"
          r="11"
          fill="#FDB913"
          style={{ animation: "moveHorizontal 5s linear infinite" }}
        />
        <circle
          cx="7"
          cy="2316"
          r="7"
          fill="white"
          style={{ animation: "moveDot 5s linear 1.5s infinite" }}
        />
      </svg>
    </div>

    {/* ── Ambient glow blobs ── */}
    <div
      className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.04] -translate-x-1/2 -translate-y-1/2"
      style={{ background: "#FDB913" }}
    />
    <div
      className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.03] translate-x-1/3 translate-y-1/3"
      style={{ background: "#FDB913" }}
    />

    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
      {/* ── Section Header ── */}
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-3xl mx-auto mb-20 lg:mb-28"
      >
        <span
          className="inline-block px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-6"
          style={{
            background: "rgba(253,185,19,0.08)",
            color: "#FDB913",
            border: "1px solid rgba(253,185,19,0.15)",
          }}
        >
          What We Deliver
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Comprehensive SAP Services
        </h2>

        <p className="text-lg leading-relaxed text-white/50">
          End-to-end solutions designed to maximize your SAP investment and
          accelerate digital transformation.
        </p>
      </motion.header>

      {/* ── Services Rows ── */}
      <div className="space-y-20 lg:space-y-28">
        {servicesData.map((service, index) => (
          <ServiceRow key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>

    {/* ── Keyframe Styles ── */}
    <style>{`
      @keyframes drawLine {
        from { stroke-dashoffset: 5000; }
        to   { stroke-dashoffset: 0; }
      }
      @keyframes moveDot {
        from { transform: translateY(0); }
        to   { transform: translateY(600px); }
      }
      @keyframes moveHorizontal {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-300px); }
      }
      @keyframes shimmer {
        0%   { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
    `}</style>
  </section>
);

export default ServicesSection;
