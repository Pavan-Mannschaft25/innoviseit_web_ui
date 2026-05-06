import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaLandmark,
  FaFileInvoiceDollar,
  FaHandsHelping,
  FaChartLine,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaRocket,
  FaStar,
  FaBalanceScale,
  FaClipboardCheck,
  FaGlobe,
  FaShieldAlt,
  FaClock,
  FaUserTie,
  FaBuilding,
  FaChartBar,
  FaHandshake,
  FaFileAlt,
  FaMoneyBillWave,
  FaCogs,
  FaArrowDown,
} from "react-icons/fa";

// ============================================
// NAVY & GOLD COLOR CONFIGURATION
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
// DATA CONFIGURATION - PUBLIC SECTOR
// ============================================

const CHALLENGES_DATA = [
  {
    icon: FaCogs,
    title: "Legacy Systems & Manual Processes",
    description:
      "Outdated technology infrastructure hindering efficiency and modernization efforts",
  },
  {
    icon: FaBalanceScale,
    title: "Complex Regulatory Compliance",
    description:
      "Navigating intricate regulations and maintaining audit-ready documentation",
  },
  {
    icon: FaChartLine,
    title: "Lack of Transparency & Reporting",
    description:
      "Difficulty providing real-time visibility into financial operations and outcomes",
  },
  {
    icon: FaMoneyBillWave,
    title: "Inefficient Grants Management",
    description:
      "Manual tracking of funds leading to delays, errors, and compliance risks",
  },
  {
    icon: FaUsers,
    title: "Citizen Service Delivery Gaps",
    description:
      "Fragmented services creating poor citizen experience and accessibility issues",
  },
  {
    icon: FaShieldAlt,
    title: "Cybersecurity & Data Protection",
    description:
      "Protecting sensitive citizen data while ensuring system availability",
  },
];

const SOLUTIONS_DATA = [
  {
    icon: FaFileInvoiceDollar,
    title: "Government Accounting Solutions",
    description:
      "Fund accounting, budget management, and financial reporting for public sector",
  },
  {
    icon: FaChartLine,
    title: "Financial Transparency & Reporting",
    description:
      "Real-time dashboards, open data platforms, and stakeholder reporting systems",
  },
  {
    icon: FaHandsHelping,
    title: "Grants Management Platform",
    description:
      "End-to-end grants lifecycle from application through closeout and compliance",
  },
  {
    icon: FaUsers,
    title: "Citizen Service Platforms",
    description:
      "Digital portals enabling self-service, engagement, and streamlined interactions",
  },
  {
    icon: FaLandmark,
    title: "Digital Governance Solutions",
    description:
      "Enterprise systems modernization, process automation, and records management",
  },
  {
    icon: FaClipboardCheck,
    title: "Compliance & Audit Management",
    description:
      "Automated compliance monitoring, audit trails, and regulatory reporting",
  },
];

const BENEFITS_DATA = [
  "Financial transparency improved with real-time reporting capabilities",
  "Grants processing time reduced by up to 60% through automation",
  "Citizen satisfaction increased by 40% with digital services",
  "Audit readiness achieved with complete compliance documentation",
  "Operational costs reduced by 30% through process optimization",
  "Enhanced data security meeting government cybersecurity standards",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Needs Assessment",
    description:
      "Evaluate current systems, regulatory requirements, and citizen needs",
    icon: FaClipboardCheck,
  },
  {
    step: "02",
    title: "Solution Architecture",
    description:
      "Design compliant, secure, and scalable government technology solutions",
    icon: FaBuilding,
  },
  {
    step: "03",
    title: "Secure Implementation",
    description:
      "Deploy with rigorous testing, training, and change management",
    icon: FaCogs,
  },
  {
    step: "04",
    title: "Continuous Improvement",
    description: "Optimize services, ensure compliance, and enable innovation",
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
      {/* Gold Gradient Orbs - Authority/Trust Theme */}
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

      {/* Official Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,215,0,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,.4) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Pillar/Column Pattern - Governmental Feel */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, #FFD700 1px, transparent 1px), radial-gradient(circle at 70% 70%, #FFD700 1px, transparent 1px)`,
          backgroundSize: "55px 55px",
        }}
      ></div>

      {/* Animated Official Lines */}
      <motion.div
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
      />
      <motion.div
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
      />
    </div>

    <div className="max-w-2xl z-10 relative">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <GoldBadge className="mb-8">
          Trusted Government Technology Partner
        </GoldBadge>

        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          Public{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFE55C] to-[#D4AF37]">
            Sector
          </span>
        </h1>

        <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
          Empowering government organizations with transparent accounting,
          efficient grants management, and citizen-centric digital platforms
          that build trust.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button size="lg">
            Modernize Public Services <FaArrowRight />
          </Button>
          <Button variant="ghost" size="lg">
            View Government Solutions
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
            { value: "100+", label: "Government Agencies" },
            { value: "$50B+", label: "Funds Managed" },
            { value: "50M+", label: "Citizens Served" },
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
            src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe"
            alt="Modern government building representing public service excellence and digital transformation"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent"></div>

          {/* Gold Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700]/5 to-transparent"></div>
        </div>

        {/* Floating Compliance Badge */}
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
              <div className="font-bold text-[#0a1628]">Compliant</div>
              <div className="text-sm text-gray-500">FedRAMP Ready</div>
            </div>
          </div>
        </motion.div>

        {/* Floating Citizen Badge */}
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 -right-6 bg-gradient-to-br from-[#0a1628] to-[#152d52] rounded-2xl p-5 shadow-2xl text-white border border-[#FFD700]/50 hidden lg:block"
        >
          <div className="flex items-center gap-3">
            <FaUsers className="text-3xl text-[#FFD700]" />
            <div>
              <div className="text-sm font-bold">Citizen</div>
              <div className="text-xs text-gray-300">Centric</div>
            </div>
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
    <SectionTitle subtitle="Government organizations face unique challenges requiring specialized solutions">
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
      <SectionTitle subtitle="Comprehensive solutions designed for government excellence and public trust">
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
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
              alt="Modern government office showcasing digital transformation and efficient public service delivery"
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent"></div>
          </div>

          {/* Overlay Stats Card */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-[#FFD700]/30">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-[#0a1628]">60%</div>
                <div className="text-xs text-gray-600 mt-1">
                  Faster Processing
                </div>
              </div>
              <div className="border-x border-[#FFD700]/30">
                <div className="text-3xl font-bold text-[#0a1628]">40%</div>
                <div className="text-xs text-gray-600 mt-1">
                  Higher Satisfaction
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0a1628]">30%</div>
                <div className="text-xs text-gray-600 mt-1">Cost Reduction</div>
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
            Transform your government operations with solutions that enhance
            transparency, efficiency, and citizen trust.
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
              View Public Sector Success Stories <FaArrowRight />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </SectionWrapper>
);

const ProcessSection = () => (
  <SectionWrapper className="bg-gray-50 relative" id="process">
    {/* Official Background Pattern */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(rgba(10,22,40,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(10,22,40,.3) 1px, transparent 1px)`,
        backgroundSize: "38px 38px",
      }}
    ></div>

    <div className="relative z-10">
      <SectionTitle subtitle="A proven methodology designed for government compliance and security requirements">
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

    {/* Official Pattern Overlay */}
    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #FFD700 1px, transparent 0)`,
        backgroundSize: "35px 35px",
      }}
    ></div>

    {/* Animated Gold Orbs - Trust/Authority Effect */}
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

    {/* Official Lines Animation */}
    <motion.div
      animate={{ opacity: [0.05, 0.15, 0.05] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
    />
    <motion.div
      animate={{ opacity: [0.05, 0.15, 0.05] }}
      transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
      className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
    />

    <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <GoldBadge className="mx-auto mb-8 justify-center">
          Ready to Modernize Your Agency?
        </GoldBadge>

        <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Transform Public Services with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFE55C] to-[#D4AF37]">
            Digital Innovation
          </span>
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Partner with trusted government technology experts who deliver secure,
          compliant, and citizen-centric solutions that enhance public trust.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
          <Button size="lg" className="!px-12 !py-5 !text-lg">
            Start Your Digital Transformation <FaArrowRight />
          </Button>
          <Button variant="ghost" size="lg" className="!px-12 !py-5 !text-lg">
            Download Public Sector Guide
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 pt-8 border-t border-[#FFD700]/20">
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-[#FFD700]" />
            FedRAMP Authorized
          </div>
          <div className="flex items-center gap-2">
            <FaBalanceScale className="text-[#FFD700]" />
            Compliance Expert
          </div>
          <div className="flex items-center gap-2">
            <FaUsers className="text-[#FFD700]" />
            Citizen Focused
          </div>
          <div className="flex items-center gap-2">
            <FaLandmark className="text-[#FFD700]" />
            Government Veteran
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// ============================================
// MAIN COMPONENT
// ============================================

export default function PublicSectorPage() {
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
