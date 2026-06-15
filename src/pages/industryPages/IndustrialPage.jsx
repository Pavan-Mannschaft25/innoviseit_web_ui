import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaIndustry,
  FaRobot,
  FaChartLine,
  FaCogs,
  FaMicrochip,
  FaCheckCircle,
  FaArrowRight,
  FaRocket,
  FaStar,
  FaWrench,
  FaServer,
  FaDatabase,
  FaClock,
  FaShieldAlt,
  FaProjectDiagram,
  FaHardHat,
  FaNetworkWired,
  FaBolt,
  FaTools,
  FaChartBar,
  FaAtom,
  FaArrowDown,
} from "react-icons/fa";
import img1 from "../../assets/industry/im1.png";
import img2 from "../../assets/industry/im2.png";

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
  <div className={`mb-10 ${centered ? "text-center" : ""}`}>
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

    <div className="w-20 h-20 bg-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg group-hover:shadow-[#FFD700]/20">
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
// DATA CONFIGURATION - INDUSTRIAL MANUFACTURING
// ============================================

const CHALLENGES_DATA = [
  {
    icon: FaWrench,
    title: "Legacy Manufacturing Systems",
    description:
      "Outdated equipment and processes hindering productivity and competitiveness",
  },
  {
    icon: FaClock,
    title: "Unplanned Equipment Downtime",
    description:
      "Reactive maintenance causing costly production interruptions and delays",
  },
  {
    icon: FaChartLine,
    title: "Lack of Real-Time Production Insights",
    description:
      "Limited visibility into operations preventing data-driven decision making",
  },
  {
    icon: FaCogs,
    title: "High Operational Costs",
    description:
      "Inefficient processes driving up costs and eroding profit margins",
  },
  {
    icon: FaMicrochip,
    title: "Slow Industry 4.0 Adoption",
    description:
      "Difficulty integrating digital technologies into traditional manufacturing",
  },
  {
    icon: FaShieldAlt,
    title: "Quality Control Challenges",
    description:
      "Maintaining consistent quality across complex production environments",
  },
];

const SOLUTIONS_DATA = [
  {
    icon: FaIndustry,
    title: "Smart Factory Solutions",
    description:
      "End-to-End digitalization of manufacturing with MES and shop floor integration",
  },
  {
    icon: FaChartLine,
    title: "Predictive Maintenance",
    description:
      "AI-powered condition monitoring and failure prediction minimizing downtime",
  },
  {
    icon: FaRobot,
    title: "Automation & Robotics",
    description:
      "Advanced robotics, cobots, and automated material handling systems",
  },
  {
    icon: FaMicrochip,
    title: "IIoT Integration",
    description:
      "Industrial IoT platforms connecting machines, sensors, and systems",
  },
  {
    icon: FaCogs,
    title: "SAP Manufacturing (ME/MII)",
    description:
      "Manufacturing execution and intelligence solutions on SAP platform",
  },
  {
    icon: FaServer,
    title: "Digital Twin Technology",
    description:
      "Virtual replicas enabling simulation, optimization, and what-if analysis",
  },
];

const BENEFITS_DATA = [
  "Optimized asset performance and equipment utilization",
  "Increased manufacturing efficiency and productivity",
  "End-to-end visibility across production processes",
  "Consistent product quality and process excellence",
  "Smart automation for streamlined operations",
  "Scalable digital manufacturing and innovation capabilities",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Manufacturing Assessment",
    description:
      "Evaluate current state, identify bottlenecks, and quantify improvement opportunities",
    icon: FaHardHat,
  },
  {
    step: "02",
    title: "Digital Architecture Design",
    description:
      "Design integrated technology blueprint aligned with Industry 4.0 principles",
    icon: FaProjectDiagram,
  },
  {
    step: "03",
    title: "Smart Implementation",
    description:
      "Deploy solutions with minimal disruption using agile methodology",
    icon: FaTools,
  },
  {
    step: "04",
    title: "Continuous Improvement",
    description:
      "Optimize performance through analytics, monitoring, and innovation",
    icon: FaRocket,
  },
];

// ============================================
// SECTION COMPONENTS
// ============================================

const HeroSection = () => (
  <section className="lg:h-[95vh] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-primary-800 text-white relative overflow-hidden">
    {/* Animated Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      {/* Gold Gradient Orbs - Industrial Precision Theme */}
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

      {/* Technical Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,215,0,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,.4) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      ></div>

      {/* Circuit/Technical Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #FFD700 1px, transparent 1px), radial-gradient(circle at 75% 75%, #FFD700 1px, transparent 1px)`,
          backgroundSize: "45px 45px",
        }}
      ></div>

      {/* Animated Technical Lines */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent"
      />
      <motion.div
        animate={{ x: ["100%", "-100%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent"
      />
    </div>

    <div className="max-w-2xl z-10 relative">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <GoldBadge className="mb-8">
          Industry 4.0 & Smart Manufacturing Leader
        </GoldBadge>

        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Industrial{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFE55C] to-[#D4AF37]">
            Manufacturing
          </span>{" "}
          <br />
          <span className="text-4xl lg:text-6xl">& High Tech</span>
        </h1>

        <p className="text-md md:text-xl text-gray-300 mb-2leading-relaxed max-w-xl">
          Enable smart factories, predictive maintenance, and Industry 4.0
          innovation with digital transformation that drives operational
          excellence.
        </p>

        {/* <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button size="lg">
            Transform Manufacturing <FaArrowRight />
          </Button>
          <Button variant="ghost" size="lg">
            Explore Industry 4.0 Solutions
          </Button>
        </div> */}

        {/* Stats Grid */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-3 gap-6 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-[#FFD700]/20"
        >
          {[
            { value: "200+", label: "Smart Factories" },
            { value: "40%", label: "Avg. OEE Gain" },
            { value: "99.9%", label: "Uptime Achieved" },
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
        </motion.div> */}
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
            src={img1}
            alt="Advanced smart factory showcasing Industry 4.0 automation and digital manufacturing"
            className="w-full h-[200px] md:h-[250px] lg:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent"></div>

          {/* Gold Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700]/5 to-transparent"></div>

          {/* Tech Pulse Animation Overlay */}
          <motion.div
            animate={{ opacity: [0, 0.08, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 via-transparent to-transparent"
          />
        </div>

        {/* Floating IIoT Badge */}
        {/* <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-2xl border border-[#FFD700]/30 hidden lg:block"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] rounded-xl flex items-center justify-center">
              <FaMicrochip className="text-2xl text-[#0a1628]" />
            </div>
            <div>
              <div className="font-bold text-[#0a1628]">IIoT</div>
              <div className="text-sm text-gray-500">Connected</div>
            </div>
          </div>
        </motion.div> */}

        {/* Floating Robot Badge */}
        {/* <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 -right-6 bg-primary-800 rounded-2xl p-5 shadow-2xl text-white border border-[#FFD700]/50 hidden lg:block"
        >
          <div className="flex items-center gap-3">
            <FaRobot className="text-3xl text-[#FFD700]" />
            <div>
              <div className="text-sm font-bold">Automation</div>
              <div className="text-xs text-gray-300">Ready</div>
            </div>
          </div>
        </motion.div> */}

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
    <SectionTitle subtitle="Modern manufacturers face complex challenges requiring intelligent digital solutions">
      Industry Challenges We Solve
    </SectionTitle>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {CHALLENGES_DATA.map((challenge, i) => (
        <Card key={i} delay={i * 0.1}>
          <div className="flex flex-col h-full">
            <div className="w-14 h-14 bg-primary-800 rounded-xl flex items-center justify-center mb-5 shadow-lg">
              <challenge.icon className="text-2xl text-[#FFD700]" />
            </div>
            <h3 className="font-bold text-lg mb-3 text-[#0a1628]">
              {challenge.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
              {challenge.description}
            </p>

            {/* Gold bottom accent */}
            {/* <div className="mt-6 pt-4 border-t border-gray-100">
              <span className="text-[#D4AF37] text-sm font-semibold">
                Learn More →
              </span>
            </div> */}
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
      <SectionTitle subtitle="Comprehensive solutions powering the future of smart manufacturing">
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
    className="bg-primary-800 text-white relative overflow-hidden"
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
              src={img2}
              alt="High-tech manufacturing facility with robotic automation and digital systems"
              className="w-full h-[200px] md:h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent"></div>
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
            Transform your manufacturing operations with measurable results that
            drive competitive advantage.
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

          {/* <div className="mt-10">
            <Button variant="ghost">
              View Manufacturing Case Studies <FaArrowRight />
            </Button>
          </div> */}
        </motion.div>
      </div>
    </div>
  </SectionWrapper>
);

const ProcessSection = () => (
  <SectionWrapper className="bg-gray-50 relative" id="process">
    {/* Technical Background Pattern */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(rgba(10,22,40,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(10,22,40,.3) 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }}
    ></div>

    <div className="relative z-10">
      <SectionTitle subtitle="A proven methodology designed for mission-critical manufacturing environments">
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
    <div className="absolute inset-0 bg-primary-800"></div>

    {/* Technical Pattern Overlay */}
    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #FFD700 1px, transparent 0)`,
        backgroundSize: "35px 35px",
      }}
    ></div>

    {/* Animated Gold Orbs - Precision Engineering Effect */}
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

    {/* Technical Lines Animation */}
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
          Ready to Build Your Smart Factory?
        </GoldBadge>

        <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Build the Future with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFE55C] to-[#D4AF37]">
            Smart Manufacturing
          </span>
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Partner with Industry 4.0 experts who deliver intelligent
          manufacturing solutions that maximize efficiency, quality, and
          competitive advantage.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
          <Button size="lg" className="!px-12 !py-5 !text-lg">
            Start Your Digital Transformation <FaArrowRight />
          </Button>
          <Button variant="ghost" size="lg" className="!px-12 !py-5 !text-lg">
            Download Manufacturing Playbook
          </Button>
        </div>

        {/* Trust Indicators */}
        {/* <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 pt-8 border-t border-[#FFD700]/20">
          <div className="flex items-center gap-2">
            <FaIndustry className="text-[#FFD700]" />
            200+ Smart Factories
          </div>
          <div className="flex items-center gap-2">
            <FaRobot className="text-[#FFD700]" />
            Automation Experts
          </div>
          <div className="flex items-center gap-2">
            <FaMicrochip className="text-[#FFD700]" />
            IIoT Specialists
          </div>
          <div className="flex items-center gap-2">
            <FaChartBar className="text-[#FFD700]" />
            Proven ROI Results
          </div>
        </div> */}
      </motion.div>
    </div>
  </section>
);

// ============================================
// MAIN COMPONENT
// ============================================

export default function IndustrialPage() {
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
        {/* {memoizedContent.cta} */}
      </main>
    </div>
  );
}
