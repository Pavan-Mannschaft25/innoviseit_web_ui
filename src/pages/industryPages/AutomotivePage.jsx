// import React from "react";
// import { motion } from "framer-motion";
// import { FaCar, FaIndustry, FaBolt, FaProjectDiagram } from "react-icons/fa";

// export default function AutomotivePage() {
//   return (
//     <div className="w-full bg-gray-50 text-gray-800">
//       {/* Hero Section */}
//       <section className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
//         <div className="max-w-xl">
//           <h1 className="text-4xl lg:text-5xl font-bold mb-6">
//             Automotive Transformation
//           </h1>
//           <p className="text-lg text-gray-300 mb-6">
//             Driving innovation across vehicle lifecycle, connected ecosystems,
//             and smart manufacturing.
//           </p>
//           <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold">
//             Explore Solutions
//           </button>
//         </div>
//         <img
//           src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
//           alt="Automotive"
//           className="w-full lg:w-1/2 rounded-xl mt-10 lg:mt-0"
//         />
//       </section>

//       {/* Challenges */}
//       <section className="px-6 lg:px-16 py-16">
//         <h2 className="text-3xl font-bold mb-10 text-center">
//           Industry Challenges
//         </h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[
//             "Complex supply chains",
//             "Connected vehicle demand",
//             "Cost optimization pressure",
//             "EV & digital transformation",
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
//             >
//               <p className="font-medium">{item}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Solutions */}
//       <section className="px-6 lg:px-16 py-16 bg-gray-100">
//         <h2 className="text-3xl font-bold mb-10 text-center">Our Solutions</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[
//             { icon: <FaCar />, title: "Vehicle Lifecycle" },
//             { icon: <FaProjectDiagram />, title: "Connected Vehicles" },
//             { icon: <FaIndustry />, title: "Smart Manufacturing" },
//             { icon: <FaBolt />, title: "Data & Analytics" },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className="bg-white p-6 rounded-xl shadow text-center"
//             >
//               <div className="text-3xl mb-4 text-blue-500">{item.icon}</div>
//               <h3 className="font-semibold">{item.title}</h3>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Benefits */}
//       <section className="px-6 lg:px-16 py-16 flex flex-col lg:flex-row items-center gap-10">
//         <img
//           src="https://images.unsplash.com/photo-1581091870622-1e7e2c8d9f2d"
//           alt="Factory"
//           className="w-full lg:w-1/2 rounded-xl"
//         />
//         <div>
//           <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>
//           <ul className="space-y-4">
//             <li>✔ Improved production efficiency</li>
//             <li>✔ Real-time visibility</li>
//             <li>✔ Better customer experience</li>
//             <li>✔ Scalable infrastructure</li>
//           </ul>
//         </div>
//       </section>

//       {/* Process */}
//       <section className="px-6 lg:px-16 py-16 bg-gray-100">
//         <h2 className="text-3xl font-bold mb-10 text-center">Our Process</h2>
//         <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
//           {["Analyze", "Design", "Implement", "Optimize"].map((step, i) => (
//             <div
//               key={i}
//               className="bg-white px-6 py-4 rounded-xl shadow text-center w-full"
//             >
//               <p className="font-semibold">{step}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="px-6 lg:px-16 py-16 text-center bg-blue-600 text-white">
//         <h2 className="text-3xl font-bold mb-4">
//           Accelerate Your Automotive Innovation
//         </h2>
//         <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
//           Contact Us
//         </button>
//       </section>
//     </div>
//   );
// }

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaCar,
  FaIndustry,
  FaBolt,
  FaProjectDiagram,
  FaCheckCircle,
  FaArrowRight,
  FaChartLine,
  FaCogs,
  FaShieldAlt,
  FaRocket,
  FaArrowDown,
} from "react-icons/fa";

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
      className={`text-3xl lg:text-4xl font-bold mb-4 ${light ? "text-white" : "text-gray-900"}`}
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
    className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const IconCard = ({
  icon: Icon,
  title,
  description,
  delay = 0,
  accentColor = "blue",
}) => {
  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl text-center group cursor-pointer border border-gray-100"
    >
      <div
        className={`w-20 h-20 bg-gradient-to-br ${colorClasses[accentColor]} rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg`}
      >
        <Icon className="text-4xl text-white" />
      </div>
      <h3 className="font-bold text-xl mb-3 text-gray-900">{title}</h3>
      {description && (
        <p className="text-gray-600 leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
};

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
      "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl focus:ring-blue-500",
    secondary:
      "bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 focus:ring-blue-500",
    ghost: "bg-transparent text-gray-900 hover:bg-blue-50 focus:ring-blue-500",
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

const StatCard = ({ value, label, icon: Icon, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
  >
    {Icon && <Icon className="text-3xl text-blue-400 mx-auto mb-3" />}
    <div className="text-4xl font-bold text-white mb-1">{value}</div>
    <div className="text-sm text-gray-300">{label}</div>
  </motion.div>
);

// ============================================
// DATA CONFIGURATION
// ============================================

const CHALLENGES_DATA = [
  {
    icon: FaProjectDiagram,
    title: "Complex Supply Chains",
    description: "Managing multi-tier supplier networks and global logistics",
    color: "red",
  },
  {
    icon: FaBolt,
    title: "Connected Vehicle Demand",
    description: "Integrating IoT, 5G, and real-time data connectivity",
    color: "yellow",
  },
  {
    icon: FaChartLine,
    title: "Cost Optimization Pressure",
    description: "Balancing innovation investments with margin preservation",
    color: "orange",
  },
  {
    icon: FaRocket,
    title: "EV & Digital Transformation",
    description:
      "Transitioning to electric mobility and software-defined vehicles",
    color: "green",
  },
];

const SOLUTIONS_DATA = [
  {
    icon: FaCar,
    title: "Vehicle Lifecycle Management",
    description: "End-to-end tracking from design to end-of-life recycling",
    color: "blue",
  },
  {
    icon: FaProjectDiagram,
    title: "Connected Vehicle Platforms",
    description: "IoT integration, OTA updates, and telematics solutions",
    color: "purple",
  },
  {
    icon: FaIndustry,
    title: "Smart Manufacturing",
    description: "Industry 4.0, automation, and digital twin technologies",
    color: "green",
  },
  {
    icon: FaBolt,
    title: "Data & Analytics",
    description:
      "Predictive maintenance, AI insights, and business intelligence",
    color: "orange",
  },
  {
    icon: FaCogs,
    title: "SAP & ERP Transformation",
    description: "Enterprise systems modernization and process optimization",
    color: "blue",
  },
  {
    icon: FaShieldAlt,
    title: "Cybersecurity & Compliance",
    description: "Vehicle security, data privacy, and regulatory adherence",
    color: "red",
  },
];

const BENEFITS_DATA = [
  "Production efficiency increased by up to 35%",
  "Real-time supply chain visibility and control",
  "Enhanced customer experience through personalization",
  "Scalable cloud-native infrastructure",
  "Reduced time-to-market by 40%",
  "Predictive maintenance cutting downtime by 50%",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description:
      "Deep dive into current systems, pain points, and opportunities",
    icon: FaChartLine,
  },
  {
    step: "02",
    title: "Solution Design",
    description: "Architect tailored solutions with cutting-edge technology",
    icon: FaProjectDiagram,
  },
  {
    step: "03",
    title: "Agile Implementation",
    description: "Iterative deployment with minimal operational disruption",
    icon: FaCogs,
  },
  {
    step: "04",
    title: "Continuous Optimization",
    description: "Ongoing enhancement, monitoring, and support",
    icon: FaRocket,
  },
];

// ============================================
// SECTION COMPONENTS
// ============================================

const HeroSection = () => (
  <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
    {/* Animated Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-500/20 rounded-full filter blur-3xl"
      />
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>
    </div>

    <div className="max-w-2xl z-10 relative">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
          Leading Automotive Innovation
        </motion.div>

        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          Automotive{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
            Transformation
          </span>
        </h1>

        <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
          Driving innovation across vehicle lifecycle management, connected
          ecosystems, and smart manufacturing for the future of mobility.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button size="lg">
            Explore Solutions <FaArrowRight />
          </Button>
          <Button variant="secondary" size="lg">
            Watch Demo
          </Button>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-3 gap-6"
        >
          {[
            { value: "200+", label: "Auto Projects" },
            { value: "95%", label: "Client Retention" },
            { value: "15+", label: "Countries Served" },
          ].map((stat, i) => (
            <div key={i} className="border-l-2 border-blue-500/50 pl-4">
              <div className="text-3xl font-bold text-white">{stat.value}</div>
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
        {/* Main Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            alt="Advanced automotive manufacturing facility showcasing next-generation vehicle production"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Floating Cards */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-2xl border border-gray-100 hidden lg:block"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <FaCheckCircle className="text-2xl text-green-600" />
            </div>
            <div>
              <div className="font-bold text-gray-900">ISO Certified</div>
              <div className="text-sm text-gray-500">Quality Assured</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-5 shadow-2xl text-white hidden lg:block"
        >
          <div className="text-3xl font-bold">24/7</div>
          <div className="text-sm text-blue-200">Support</div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

const ChallengesSection = () => (
  <SectionWrapper
    className="bg-gradient-to-b from-gray-50 to-white"
    id="challenges"
  >
    <SectionTitle subtitle="The automotive industry faces unprecedented challenges in the digital era">
      Industry Challenges We Solve
    </SectionTitle>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {CHALLENGES_DATA.map((challenge, i) => (
        <Card key={i} delay={i * 0.1}>
          <div className="flex flex-col h-full">
            <div
              className={`w-14 h-14 bg-${challenge.color}-100 rounded-xl flex items-center justify-center mb-5`}
            >
              <challenge.icon
                className={`text-2xl text-${challenge.color}-600`}
              />
            </div>
            <h3 className="font-bold text-lg mb-3 text-gray-900">
              {challenge.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
              {challenge.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  </SectionWrapper>
);

const SolutionsSection = () => (
  <SectionWrapper className="bg-white" id="solutions">
    <SectionTitle subtitle="Comprehensive technology solutions designed for automotive excellence">
      Our Solutions
    </SectionTitle>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {SOLUTIONS_DATA.map((solution, i) => (
        <IconCard
          key={i}
          icon={solution.icon}
          title={solution.title}
          description={solution.description}
          delay={i * 0.1}
          accentColor={solution.color}
        />
      ))}
    </div>
  </SectionWrapper>
);

const BenefitsSection = () => (
  <SectionWrapper
    className="bg-gradient-to-br from-gray-900 to-blue-900 text-white"
    id="benefits"
  >
    <div className="flex flex-col lg:flex-row items-center gap-16">
      <motion.div
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1581091870622-1e7e2c8d9f2d"
              alt="Smart automotive factory with robotic automation and digital manufacturing processes"
              className="w-full h-[450px] object-cover"
            />
          </div>

          {/* Overlay Stats */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">35%</div>
                <div className="text-xs text-gray-600">Efficiency Gain</div>
              </div>
              <div className="border-x border-gray-200">
                <div className="text-2xl font-bold text-green-600">50%</div>
                <div className="text-xs text-gray-600">Less Downtime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">40%</div>
                <div className="text-xs text-gray-600">Faster Delivery</div>
              </div>
            </div>
          </div>
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
            Transform your automotive operations with measurable results that
            impact your bottom line.
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
                <div className="w-7 h-7 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-500 transition-colors duration-300">
                  <FaCheckCircle className="text-white text-sm" />
                </div>
                <span className="text-gray-200 font-medium group-hover:text-white transition-colors leading-relaxed">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <Button variant="secondary">
              View Case Studies <FaArrowRight />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </SectionWrapper>
);

const ProcessSection = () => (
  <SectionWrapper className="bg-gray-50" id="process">
    <SectionTitle subtitle="A proven methodology that delivers consistent results">
      Our Proven Process
    </SectionTitle>

    <div className="relative">
      {/* Connection Line - Desktop */}
      <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full"></div>

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
              <div className="w-24 h-24 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center shadow-xl relative z-10 group-hover:border-blue-700 group-hover:scale-110 transition-all duration-300">
                <step.icon className="text-3xl text-blue-600" />
              </div>
              {/* Step Number Badge */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                {step.step}
              </div>
            </div>

            <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
              {step.description}
            </p>

            {/* Arrow Connector - Mobile/Tablet */}
            {i < PROCESS_STEPS.length - 1 && (
              <div className="lg:hidden flex justify-center my-4">
                <FaArrowDown className="text-blue-300 text-2xl" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

const CTASection = () => (
  <section className="relative px-6 lg:px-20 py-28 overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800"></div>

    {/* Pattern Overlay */}
    <div className="absolute inset-0 opacity-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>
    </div>

    {/* Floating Shapes */}
    <motion.div
      animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute top-10 left-10 w-32 h-32 border-4 border-white/20 rounded-full"
    />
    <motion.div
      animate={{ y: [20, -20, 20], rotate: [360, 180, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white/10 rounded-full"
    />

    <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Ready to Accelerate Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
            Automotive Innovation?
          </span>
        </h2>

        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join leading automotive manufacturers who trust us to deliver
          transformative solutions that drive growth and efficiency.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
          <Button
            size="lg"
            className="bg-white !text-blue-600 hover:!bg-gray-100"
          >
            Schedule Free Consultation <FaArrowRight />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="border-white !text-white hover:!bg-white/10"
          >
            Download Whitepaper
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm text-blue-200">
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-400" />
            No commitment required
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-400" />
            Free assessment
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-400" />
            Response within 24 hours
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// ============================================
// MAIN COMPONENT
// ============================================

export default function AutomotivePage() {
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
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
