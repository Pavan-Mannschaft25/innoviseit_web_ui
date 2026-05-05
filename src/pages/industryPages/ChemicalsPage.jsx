import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaFlask,
  FaCogs,
  FaShieldAlt,
  FaIndustry,
  FaProjectDiagram,
  FaCheckCircle,
  FaArrowRight,
  FaChartLine,
  FaRocket,
  FaStar,
  FaAtom,
  FaClipboardCheck,
  FaWarehouse,
  FaArrowDown,
} from "react-icons/fa";

// ============================================
// NAVY & GOLD COLOR CONFIGURATION
// ============================================
const COLORS = {
  navy: {
    900: "#0a1628",
    800: "#0f2140",
    700: "#152d52",
  },
  gold: {
    400: "#FFD700",
    500: "#D4AF37",
    600: "#B8962E",
  },
};

// ============================================
// REUSABLE COMPONENTS
// ============================================

const SectionWrapper = ({ children, className = "", id }) => (
  <section id={id} className={`px-6 lg:px-20 py-20 ${className}`}>
    {children}
  </section>
);

const SectionTitle = ({
  children,
  subtitle,
  centered = true,
  light = false,
}) => (
  <div className={`mb-16 ${centered ? "text-center" : ""}`}>
    <h2
      className={`text-3xl lg:text-4xl font-bold mb-4 ${light ? "text-white" : "text-[#0a1628]"}`}
    >
      {children}
    </h2>
    {subtitle && (
      <p
        className={`text-lg max-w-2xl mx-auto ${light ? "text-gray-300" : "text-gray-600"}`}
      >
        {subtitle}
      </p>
    )}
  </div>
);

const Card = ({ children, className = "", hover = true, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={hover ? { scale: 1.03, y: -8 } : undefined}
    className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 ${className}`}
  >
    {children}
  </motion.div>
);

const IconCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.05, y: -10 }}
    className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl text-center group cursor-pointer border border-gray-100 relative overflow-hidden"
  >
    {/* Gold Accent Top Border */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#FFD700] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

    <div className="w-20 h-20 bg-gradient-to-br from-[#0a1628] to-[#152d52] rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg group-hover:shadow-[#FFD700]/20">
      <Icon className="text-4xl text-[#FFD700]" />
    </div>
    <h3 className="font-bold text-xl mb-3 text-[#0a1628]">{title}</h3>
    {description && (
      <p className="text-gray-600 leading-relaxed">{description}</p>
    )}
  </motion.div>
);

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#FFD700] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#B8962E] text-[#0a1628] shadow-lg hover:shadow-xl focus:ring-[#FFD700]",
    secondary:
      "bg-white hover:bg-gray-50 text-[#0a1628] border-2 border-[#0a1628] focus:ring-[#0a1628]",
    ghost:
      "bg-transparent text-white hover:bg-[#FFD700]/10 focus:ring-[#FFD700] border border-[#FFD700]/50",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const GoldBadge = ({ children, icon = true }) => (
  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-full text-[#FFD700] text-sm font-medium backdrop-blur-sm">
    {icon && <FaStar className="text-xs animate-pulse" />}
    {children}
  </div>
);

// ============================================
// DATA CONFIGURATION - CHEMICAL INDUSTRY
// ============================================

const CHALLENGES_DATA = [
  {
    icon: FaFlask,
    title: "Complex Formulation & Batch Tracking",
    description:
      "Managing intricate chemical formulations and precise batch traceability across production cycles",
  },
  {
    icon: FaShieldAlt,
    title: "Strict EHS & Regulatory Compliance",
    description:
      "Navigating environmental, health, and safety regulations with rigorous documentation requirements",
  },
  {
    icon: FaAtom,
    title: "Hazardous Materials Handling",
    description:
      "Ensuring safe storage, transport, and processing of dangerous chemicals with zero incidents",
  },
  {
    icon: FaWarehouse,
    title: "Supply Chain Visibility Gaps",
    description:
      "Lack of real-time visibility into raw materials, inventory, and distribution networks",
  },
  {
    icon: FaCogs,
    title: "Legacy Systems & Data Silos",
    description:
      "Outdated infrastructure preventing data integration and operational intelligence",
  },
  {
    icon: FaChartLine,
    title: "Quality Control Complexity",
    description:
      "Maintaining consistent product quality across multiple facilities and batches",
  },
];

const SOLUTIONS_DATA = [
  {
    icon: FaFlask,
    title: "Formulation Management",
    description:
      "Advanced recipe management, version control, and regulatory documentation",
  },
  {
    icon: FaCogs,
    title: "Batch Optimization",
    description:
      "Real-time batch monitoring, process optimization, and yield improvement",
  },
  {
    icon: FaShieldAlt,
    title: "Compliance & Safety (EHS)",
    description:
      "Comprehensive environmental, health, and safety management systems",
  },
  {
    icon: FaIndustry,
    title: "SAP Transformation",
    description:
      "Enterprise resource planning modernization for chemical operations",
  },
  {
    icon: FaProjectDiagram,
    title: "Supply Chain Visibility",
    description: "End-to-end supply chain tracking and inventory optimization",
  },
  {
    icon: FaClipboardCheck,
    title: "Quality Management",
    description:
      "Integrated quality control, testing protocols, and compliance tracking",
  },
];

const BENEFITS_DATA = [
  "Zero safety incidents through proactive risk management",
  "99.9% regulatory compliance with automated reporting",
  "Production efficiency increased by up to 40%",
  "Real-time visibility across all operations",
  "Reduced waste and improved sustainability metrics",
  "Seamless integration of legacy and modern systems",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Safety Assessment",
    description:
      "Comprehensive evaluation of current processes and risk factors",
    icon: FaShieldAlt,
  },
  {
    step: "02",
    title: "Solution Architecture",
    description:
      "Design compliant, scalable systems tailored to chemical operations",
    icon: FaProjectDiagram,
  },
  {
    step: "03",
    title: "Controlled Implementation",
    description: "Phased deployment with minimal operational disruption",
    icon: FaCogs,
  },
  {
    step: "04",
    title: "Continuous Optimization",
    description: "Ongoing monitoring, refinement, and regulatory updates",
    icon: FaRocket,
  },
];

// ============================================
// SECTION COMPONENTS
// ============================================

const HeroSection = () => (
  <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-gradient-to-br from-[#0a1628] via-[#0f2140] to-[#0a1628] text-white relative overflow-hidden">
    {/* Animated Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      {/* Gold Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-[#FFD700]/30 to-[#D4AF37]/10 rounded-full filter blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-[#D4AF37]/20 to-[#FFD700]/10 rounded-full filter blur-3xl"
      />

      {/* Molecular Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #FFD700 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Hexagonal Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23FFD700' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      ></div>
    </div>

    <div className="max-w-2xl z-10 relative">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <GoldBadge className="mb-8">
          Industry-Leading Chemical Solutions
        </GoldBadge>

        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          Chemical{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFE55C] to-[#D4AF37]">
            Operations
          </span>
        </h1>

        <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
          Enabling safe, compliant, and intelligent chemical operations with
          precision engineering and advanced digital transformation solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button size="lg">
            Ensure Safe Operations <FaArrowRight />
          </Button>
          <Button variant="ghost" size="lg">
            View Compliance Framework
          </Button>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-3 gap-6 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-[#FFD700]/20"
        >
          {[
            { value: "150+", label: "Chemical Plants" },
            { value: "100%", label: "Safety Record" },
            { value: "20+", label: "Years Experience" },
          ].map((stat, i) => (
            <div
              key={i}
              className="border-l-2 border-[#FFD700]/40 pl-4 first:border-l-0 first:pl-0"
            >
              <div className="text-3xl font-bold text-[#FFD700]">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>

    <motion.div
      className="w-full lg:w-1/2 mt-12 lg:mt-0 z-10 relative"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="relative">
        {/* Main Image Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#FFD700]/30">
          <img
            src="https://images.unsplash.com/photo-1581093458791-9f3c3b1a0c64"
            alt="Modern chemical plant facility with advanced safety systems and precision equipment"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent"></div>

          {/* Gold Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700]/5 to-transparent"></div>
        </div>

        {/* Floating Safety Badge */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-2xl border border-[#FFD700]/30 hidden lg:block"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] rounded-xl flex items-center justify-center">
              <FaShieldAlt className="text-2xl text-[#0a1628]" />
            </div>
            <div>
              <div className="font-bold text-[#0a1628]">ISO 45001</div>
              <div className="text-sm text-gray-500">Certified Safety</div>
            </div>
          </div>
        </motion.div>

        {/* Floating Compliance Badge */}
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 -right-6 bg-gradient-to-br from-[#0a1628] to-[#152d52] rounded-2xl p-5 shadow-2xl text-white border border-[#FFD700]/50 hidden lg:block"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FFD700]">24/7</div>
            <div className="text-xs text-gray-300 mt-1">Monitoring</div>
          </div>
        </motion.div>

        {/* Decorative Corner Elements */}
        <div className="absolute -top-3 -left-3 w-20 h-20 border-t-4 border-l-4 border-[#FFD700]/50 rounded-tl-3xl"></div>
        <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-4 border-r-4 border-[#FFD700]/50 rounded-br-3xl"></div>
      </div>
    </motion.div>
  </section>
);

const ChallengesSection = () => (
  <SectionWrapper
    className="bg-gradient-to-b from-gray-50 to-white"
    id="challenges"
  >
    <SectionTitle subtitle="The chemical industry faces unique challenges requiring specialized expertise">
      Industry Challenges We Address
    </SectionTitle>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {CHALLENGES_DATA.map((challenge, i) => (
        <Card key={i} delay={i * 0.1}>
          <div className="flex flex-col h-full">
            <div className="w-14 h-14 bg-gradient-to-br from-[#0a1628] to-[#152d52] rounded-xl flex items-center justify-center mb-5 shadow-lg">
              <challenge.icon className="text-2xl text-[#FFD700]" />
            </div>
            <h3 className="font-bold text-lg mb-3 text-[#0a1628]">
              {challenge.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
              {challenge.description}
            </p>

            {/* Gold bottom accent */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <span className="text-[#D4AF37] text-sm font-semibold">
                Learn More →
              </span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </SectionWrapper>
);

const SolutionsSection = () => (
  <SectionWrapper className="bg-white relative" id="solutions">
    {/* Subtle Background Pattern */}
    <div
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #0a1628 1px, transparent 0)`,
        backgroundSize: "30px 30px",
      }}
    ></div>

    <div className="relative z-10">
      <SectionTitle subtitle="Comprehensive solutions designed for chemical industry excellence and safety">
        Our Specialized Solutions
      </SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SOLUTIONS_DATA.map((solution, i) => (
          <IconCard
            key={i}
            icon={solution.icon}
            title={solution.title}
            description={solution.description}
            delay={i * 0.1}
          />
        ))}
      </div>
    </div>
  </SectionWrapper>
);

const BenefitsSection = () => (
  <SectionWrapper
    className="bg-gradient-to-br from-[#0a1628] via-[#0f2140] to-[#0a1628] text-white relative overflow-hidden"
    id="benefits"
  >
    {/* Background Decoration */}
    <div className="absolute inset-0">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/2 -right-1/4 w-full h-full bg-gradient-to-br from-[#FFD700]/5 to-transparent rounded-full"
      />
    </div>

    <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
      <motion.div
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#FFD700]/30">
            <img
              src="https://images.unsplash.com/photo-1581090700227-4c4c3f0d0c74"
              alt="State-of-the-art chemical laboratory with advanced safety equipment and quality control systems"
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent"></div>
          </div>

          {/* Overlay Stats Card */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-[#FFD700]/30">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-[#0a1628]">40%</div>
                <div className="text-xs text-gray-600 mt-1">Efficiency ↑</div>
              </div>
              <div className="border-x border-[#FFD700]/30">
                <div className="text-3xl font-bold text-[#0a1628]">0</div>
                <div className="text-xs text-gray-600 mt-1">Incidents</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0a1628]">100%</div>
                <div className="text-xs text-gray-600 mt-1">Compliant ✓</div>
              </div>
            </div>
          </div>

          {/* Corner Accents */}
          <div className="absolute -top-2 -left-2 w-16 h-16 border-t-4 border-l-4 border-[#FFD700] rounded-tl-2xl"></div>
          <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-4 border-r-4 border-[#FFD700] rounded-br-2xl"></div>
        </div>
      </motion.div>

      <div className="w-full lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SectionTitle centered={false} light>
            Key Benefits
          </SectionTitle>
          <p className="text-gray-300 mb-8 text-lg">
            Transform your chemical operations with measurable improvements in
            safety, efficiency, and compliance.
          </p>

          <div className="space-y-5">
            {BENEFITS_DATA.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-7 h-7 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg group-hover:scale-110 transition-transform">
                  <FaCheckCircle className="text-[#0a1628] text-sm" />
                </div>
                <span className="text-gray-200 font-medium group-hover:text-white transition-colors leading-relaxed">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <Button variant="ghost">
              Download Safety Whitepaper <FaArrowRight />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </SectionWrapper>
);

const ProcessSection = () => (
  <SectionWrapper className="bg-gray-50 relative" id="process">
    {/* Hexagonal Background Pattern */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%230a1628' stroke-width='0.5'%3E%3Cpath d='M40 0l34.64 20v40L40 80 5.36 60V20z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "100px 100px",
      }}
    ></div>

    <div className="relative z-10">
      <SectionTitle subtitle="A proven methodology ensuring safety, compliance, and operational excellence">
        Our Proven Approach
      </SectionTitle>

      <div className="relative">
        {/* Connection Line - Desktop */}
        <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-[#0a1628] via-[#FFD700] to-[#0a1628] rounded-full shadow-lg"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center group"
            >
              {/* Step Circle */}
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-white border-4 border-[#0a1628] rounded-full flex items-center justify-center shadow-xl relative z-10 group-hover:border-[#FFD700] group-hover:scale-110 transition-all duration-300 mx-auto">
                  <step.icon className="text-3xl text-[#0a1628] group-hover:text-[#FFD700] transition-colors" />
                </div>

                {/* Step Number Badge */}
                <div className="absolute -top-2 -right-2 w-9 h-9 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] rounded-full flex items-center justify-center text-[#0a1628] text-sm font-bold shadow-lg border-2 border-white">
                  {step.step}
                </div>
              </div>

              <h3 className="font-bold text-xl mb-3 text-[#0a1628] group-hover:text-[#D4AF37] transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>

              {/* Arrow Connector - Mobile/Tablet */}
              {i < PROCESS_STEPS.length - 1 && (
                <div className="lg:hidden flex justify-center my-4">
                  <div className="w-10 h-10 bg-[#FFD700]/20 rounded-full flex items-center justify-center">
                    <FaArrowDown className="text-[#D4AF37]" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

const CTASection = () => (
  <section className="relative px-6 lg:px-20 py-28 overflow-hidden">
    {/* Rich Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2140] to-[#0a1628]"></div>

    {/* Molecular Pattern Overlay */}
    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #FFD700 1px, transparent 0)`,
        backgroundSize: "35px 35px",
      }}
    ></div>

    {/* Animated Gold Orbs */}
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        x: [-20, 20, -20],
        y: [-10, 10, -10],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-10 left-10 w-72 h-72 bg-[#FFD700]/15 rounded-full filter blur-3xl"
    />
    <motion.div
      animate={{
        scale: [1.2, 1, 1.2],
        x: [20, -20, 20],
        y: [10, -10, 10],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/12 rounded-full filter blur-3xl"
    />

    {/* Geometric Decorations */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="absolute top-20 right-20 w-44 h-44 border-2 border-[#FFD700]/20 rounded-full"
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-20 left-20 w-36 h-36 border-2 border-[#FFD700]/15 rounded-full"
    />

    <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <GoldBadge className="mx-auto mb-8 justify-center">
          Start Your Safety Transformation
        </GoldBadge>

        <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Transform Chemical Operations with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFE55C] to-[#D4AF37]">
            Safety & Precision
          </span>
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Partner with industry leaders who understand the critical importance
          of safety, compliance, and operational excellence in chemical
          manufacturing.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
          <Button size="lg" className="!px-12 !py-5 !text-lg">
            Schedule Safety Consultation <FaArrowRight />
          </Button>
          <Button variant="ghost" size="lg" className="!px-12 !py-5 !text-lg">
            Download Compliance Guide
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 pt-8 border-t border-[#FFD700]/20">
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-[#FFD700]" />
            ISO Certified
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-[#FFD700]" />
            Regulatory Expert
          </div>
          <div className="flex items-center gap-2">
            <FaFlask className="text-[#FFD700]" />
            Industry Specialists
          </div>
          <div className="flex items-center gap-2">
            <FaStar className="text-[#FFD700]" />
            24/7 Support
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// ============================================
// MAIN COMPONENT
// ============================================

export default function ChemicalsPage() {
  const memoizedContent = useMemo(
    () => ({
      hero: <HeroSection />,
      challenges: <ChallengesSection />,
      solutions: <SolutionsSection />,
      benefits: <BenefitsSection />,
      process: <ProcessSection />,
      cta: <CTASection />,
    }),
    [],
  );

  return (
    <div className="w-full font-sans antialiased text-gray-800 overflow-x-hidden bg-gray-50">
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#FFD700] text-[#0a1628] px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
      >
        Skip to main content
      </a>

      <main id="main-content" role="main">
        {memoizedContent.hero}
        {memoizedContent.challenges}
        {memoizedContent.solutions}
        {memoizedContent.benefits}
        {memoizedContent.process}
        {memoizedContent.cta}
      </main>
    </div>
  );
}
