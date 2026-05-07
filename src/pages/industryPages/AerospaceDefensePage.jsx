import React, { useMemo } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaPlane,
  FaCogs,
  FaShieldAlt,
  FaChartLine,
  FaProjectDiagram,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import img1 from "../../assets/industry/ae1.png";
import img2 from "../../assets/industry/ae2.png";

// ============================================
// REUSABLE COMPONENTS FOR BETTER MAINTAINABILITY
// ============================================

const SectionWrapper = ({ children, className = "", id }) => (
  <section id={id} className={`px-6 lg:px-20 py-20 ${className}`}>
    {children}
  </section>
);

const SectionTitle = ({ children, centered = true }) => (
  <h2
    className={`text-3xl lg:text-4xl font-bold mb-12 text-[#0a1f44] ${centered ? "text-center" : ""}`}
  >
    {children}
  </h2>
);

const Card = ({ children, className = "", hover = true, ...props }) => (
  <motion.div
    whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
    transition={{ type: "spring", stiffness: 300 }}
    className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}
    {...props}
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
    whileHover={{ scale: 1.05, y: -8 }}
    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl text-center border-t-4 border-yellow-500 group cursor-pointer"
  >
    <div className="w-16 h-16 bg-[#0a1f44] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
      <Icon className="text-3xl text-white group-hover:text-[#0a1f44]" />
    </div>
    <h3 className="font-bold text-lg mb-2 text-[#0a1f44]">{title}</h3>
    {description && <p className="text-gray-600 text-sm">{description}</p>}
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
    "inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-yellow-500 hover:bg-yellow-600 text-black focus:ring-yellow-500",
    secondary:
      "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0a1f44] focus:ring-white",
    ghost:
      "bg-transparent text-[#0a1f44] hover:bg-gray-100 focus:ring-[#0a1f44]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
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

// ============================================
// ANIMATION VARIANTS
// ============================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

// ============================================
// DATA CONFIGURATION (EASY TO MODIFY)
// ============================================

const CHALLENGES_DATA = [
  {
    title: "Complex Asset Lifecycle",
    description:
      "Managing aircraft and equipment throughout their entire lifecycle",
  },
  {
    title: "Regulatory Compliance",
    description: "Navigating strict aviation regulations and standards",
  },
  {
    title: "High Operational Costs",
    description: "Optimizing expenses while maintaining safety standards",
  },
  {
    title: "Legacy System Integration",
    description: "Modernizing outdated infrastructure seamlessly",
  },
  {
    title: "Real-time Visibility",
    description: "Gaining instant insights into operations",
  },
  {
    title: "Cybersecurity Threats",
    description: "Protecting critical systems from digital attacks",
  },
];

const SOLUTIONS_DATA = [
  {
    icon: FaCogs,
    title: "MRO Optimization",
    description: "Streamline maintenance, repair, and operations",
  },
  {
    icon: FaProjectDiagram,
    title: "Project Management",
    description: "End-to-end program oversight and delivery",
  },
  {
    icon: FaShieldAlt,
    title: "Compliance & Risk",
    description: "Ensure regulatory adherence and risk mitigation",
  },
  {
    icon: FaPlane,
    title: "SAP Transformation",
    description: "Enterprise resource planning modernization",
  },
  {
    icon: FaChartLine,
    title: "Data & Analytics",
    description: "Business intelligence and predictive analytics",
  },
  {
    icon: FaShieldAlt,
    title: "Cybersecurity",
    description: "Protect mission-critical systems and data",
  },
];

const BENEFITS_DATA = [
  "Improved asset performance by up to 40%",
  "Reduced downtime through predictive maintenance",
  "Strong compliance control and audit readiness",
  "Real-time operational insights and dashboards",
  "Secure, scalable cloud-native architecture",
  "ROI typically within 12-18 months",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Assess",
    description: "Evaluate current systems and identify opportunities",
  },
  {
    step: "02",
    title: "Design",
    description: "Create tailored solution architecture",
  },
  {
    step: "03",
    title: "Implement",
    description: "Deploy with minimal disruption",
  },
  {
    step: "04",
    title: "Optimize",
    description: "Continuous improvement and support",
  },
];

// ============================================
// SECTION COMPONENTS
// ============================================

const HeroSection = () => (
  <section className="h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-gradient-to-br from-[#0a1f44] via-[#0d2847] to-[#0a1f44] text-white relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
    </div>

    <div className="max-w-2xl z-10 relative">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold mb-6">
          Trusted by Leading Aerospace Companies
        </span>
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          Aerospace &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            Defense
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Engineering precision and mission-critical excellence with advanced
          digital solutions. Transform your aerospace operations with
          cutting-edge technology.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg">
            Talk to Experts <FaArrowRight />
          </Button>
          <Button variant="secondary" size="lg">
            View Case Studies
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
          {[
            { value: "500+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-yellow-400">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>

    <motion.div
      className="w-full lg:w-1/2 mt-10 lg:mt-0 z-10"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="relative">
        <img
          src={img1}
          className="w-full rounded-2xl shadow-2xl"
          alt="Aerospace engineering - Advanced aircraft technology and defense systems"
        />
        <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-black p-6 rounded-xl shadow-xl">
          <div className="text-2xl font-bold">15+</div>
          <div className="text-sm">Years Experience</div>
        </div>
      </div>
    </motion.div>
  </section>
);

const ChallengesSection = () => (
  <SectionWrapper
    className="bg-gradient-to-b from-gray-50 to-white"
    id="challenges"
  >
    <div className="text-center mb-16">
      <SectionTitle>Industry Challenges We Solve</SectionTitle>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        The aerospace industry faces unique obstacles. Our expertise helps you
        overcome them.
      </p>
    </div>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {CHALLENGES_DATA.map((challenge, i) => (
        <Card key={i} variants={itemVariants}>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-red-600 font-bold">{i + 1}</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-[#0a1f44]">
                {challenge.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {challenge.description}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </motion.div>
  </SectionWrapper>
);

const SolutionsSection = () => (
  <SectionWrapper id="solutions">
    <div className="text-center mb-16">
      <SectionTitle>Our Comprehensive Solutions</SectionTitle>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        End-to-end services designed specifically for aerospace and defense
        requirements.
      </p>
    </div>

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
  </SectionWrapper>
);

const BenefitsSection = () => (
  <SectionWrapper className="bg-gray-50" id="benefits">
    <div className="flex flex-col lg:flex-row items-center gap-16">
      <motion.div className="w-full lg:w-1/2" {...fadeInUp}>
        <div className="relative">
          <img
            src={img2}
            className="w-full rounded-2xl shadow-2xl"
            alt="Aircraft maintenance operations showing technical team working on aerospace equipment"
          />
          <div className="absolute top-6 -right-6 bg-[#0a1f44] text-white p-4 rounded-xl shadow-lg hidden lg:block">
            <FaCheckCircle className="text-green-400 text-2xl mb-2" />
            <div className="text-sm font-semibold">Certified Processes</div>
          </div>
        </div>
      </motion.div>

      <div className="w-full lg:w-1/2">
        <motion.div {...fadeInUp}>
          <SectionTitle centered={false}>Key Benefits</SectionTitle>
          <p className="text-gray-600 mb-8 text-lg">
            Partnering with us delivers measurable results across your
            organization.
          </p>

          <div className="space-y-6">
            {BENEFITS_DATA.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-green-500 transition-colors">
                  <FaCheckCircle className="text-green-600 group-hover:text-white text-sm" />
                </div>
                <span className="text-gray-700 font-medium group-hover:text-[#0a1f44] transition-colors">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <Button variant="ghost">
              Learn More About Our Process <FaArrowRight />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </SectionWrapper>
);

const ProcessSection = () => (
  <SectionWrapper id="process">
    <div className="text-center mb-16">
      <SectionTitle>Our Proven Approach</SectionTitle>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        A structured methodology that ensures success at every stage.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
      {/* Connection Line */}
      <div className="hidden lg:block absolute top-24 left-1/4 right-1/4 h-1 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 rounded"></div>

      {PROCESS_STEPS.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="relative text-center"
        >
          <div className="w-20 h-20 bg-white border-4 border-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
            <span className="text-2xl font-bold text-[#0a1f44]">
              {step.step}
            </span>
          </div>
          <h3 className="font-bold text-xl mb-3 text-[#0a1f44]">
            {step.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {step.description}
          </p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

const CTASection = () => (
  <section className="px-6 lg:px-20 py-24 text-center bg-gradient-to-r from-[#0a1f44] to-[#0d2847] text-white relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
    </div>

    <div className="relative z-10 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Ready to Transform Your{" "}
          <span className="text-yellow-400">Aerospace Operations?</span>
        </h2>
        <p className="text-xl text-gray-300 mb-10">
          Join industry leaders who trust us to deliver mission-critical
          solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            Schedule Consultation <FaArrowRight />
          </Button>
          <Button variant="secondary" size="lg">
            Download Brochure
          </Button>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          No commitment required • Free initial assessment • Response within 24
          hours
        </p>
      </motion.div>
    </div>
  </section>
);

export default function AerospacePage() {
  // Memoize static content for performance
  const memoizedContent = useMemo(
    () => ({
      hero: <HeroSection />,
      challenges: <ChallengesSection />,
      solutions: <SolutionsSection />,
      benefits: <BenefitsSection />,
      process: <ProcessSection />,
      cta: <CTASection />,
      // footer: <Footer />,
    }),
    [],
  );

  return (
    <div className="w-full font-sans antialiased text-gray-800 overflow-x-hidden">
      {/* Accessibility: Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-yellow-500 text-black px-4 py-2 rounded z-50"
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

      {/* {memoizedContent.footer} */}
    </div>
  );
}
