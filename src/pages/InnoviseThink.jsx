// import React from "react";
// import Container from "../components/ui/Container";
// import SectionHeader from "../components/ui/SectionHeader";
// import AnimatedSection from "../components/ui/AnimatedSection";
// import Card from "../components/ui/Card";
// import CTA from "../components/sections/CTA";
// import { thinkPhilosophy, blogPosts } from "../data/thinkData";
// import {
//   FaLightbulb,
//   FaClock,
//   FaUser,
//   FaArrowRight,
//   FaCalendar,
// } from "react-icons/fa";
// import Button from "../components/ui/Button";
// import * as FaIcons from "react-icons/fa";

// const iconMap = {
//   FaLightbulb: FaIcons.FaLightbulb,
//   FaCogs: FaIcons.FaCogs,
//   FaRobot: FaIcons.FaRobot,
//   FaCloud: FaIcons.FaCloud,
//   FaChartLine: FaIcons.FaChartLine,
//   FaSyncAlt: FaIcons.FaSyncAlt,
// };

// const InnoviseThinkPage = () => {
//   const philosophyWithIcons = thinkPhilosophy.map((item) => ({
//     ...item,
//     icon: iconMap[item.icon] || FaIcons.FaLightbulb,
//   }));

//   return (
//     <main>
//       {/* Hero Section */}
//       <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-20 right-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
//         </div>

//         <Container className="relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <AnimatedSection>
//               <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-6 border border-white/20">
//                 💡 Our Philosophy & Insights
//               </span>
//             </AnimatedSection>

//             <AnimatedSection delay={1}>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
//                 Turning Enterprise Challenges into{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">
//                   Scalable Digital Opportunities
//                 </span>
//               </h1>
//             </AnimatedSection>

//             <AnimatedSection delay={2}>
//               <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
//                 Technology is a strategic driver of business transformation. Our
//                 thinking shapes how we deliver value and helps our clients
//                 navigate the complexities of digital evolution.
//               </p>
//             </AnimatedSection>
//           </div>
//         </Container>
//       </section>

//       {/* Philosophy Cards */}
//       <section className="py-24 bg-white">
//         <Container>
//           <SectionHeader
//             title="Our Core Philosophy"
//             subtitle="Guiding principles that inform every solution we deliver and every partnership we build"
//           />

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {philosophyWithIcons.map((philosophy, index) => (
//               <AnimatedSection key={philosophy.id} delay={index}>
//                 <Card className="h-full group">
//                   <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:from-accent-500 group-hover:to-accent-600 transition-all duration-300">
//                     <philosophy.icon className="text-white text-2xl" />
//                   </div>

//                   <div className="mb-3">
//                     <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
//                       {philosophy.subtitle}
//                     </span>
//                   </div>

//                   <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
//                     {philosophy.title}
//                   </h3>

//                   <p className="text-gray-600 text-sm leading-relaxed mb-5">
//                     {philosophy.description}
//                   </p>

//                   <ul className="space-y-2 pt-4 border-t border-gray-100">
//                     {philosophy.principles.map((principle, idx) => (
//                       <li
//                         key={idx}
//                         className="flex items-center gap-2 text-sm text-gray-700"
//                       >
//                         <FaArrowRight className="text-xs text-primary-500 flex-shrink-0" />
//                         {principle}
//                       </li>
//                     ))}
//                   </ul>
//                 </Card>
//               </AnimatedSection>
//             ))}
//           </div>
//         </Container>
//       </section>

//       {/* Blog Posts Preview */}
//       <section className="py-24 bg-gray-50">
//         <Container>
//           <SectionHeader
//             badge="Latest Insights"
//             title="From Our Blog"
//             subtitle="Thought leadership articles on enterprise technology trends and best practices"
//           />

//           <div className="grid md:grid-cols-3 gap-8 mb-12">
//             {blogPosts.map((post, index) => (
//               <AnimatedSection key={post.id} delay={index}>
//                 <Card className="h-full overflow-hidden group">
//                   <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-t-2xl flex items-center justify-center mb-0">
//                     <FaIcons.FaNewspaper className="text-5xl text-primary-400" />
//                   </div>

//                   <div className="p-6">
//                     <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
//                       <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded font-semibold">
//                         {post.category}
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <FaClock /> {post.readTime}
//                       </span>
//                     </div>

//                     <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors line-clamp-2">
//                       {post.title}
//                     </h3>

//                     <p className="text-sm text-gray-600 mb-4 line-clamp-3">
//                       {post.excerpt}
//                     </p>

//                     <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                       <div className="flex items-center gap-2">
//                         <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
//                           <FaUser className="text-xs text-primary-600" />
//                         </div>
//                         <span className="text-xs text-gray-600">
//                           {post.author}
//                         </span>
//                       </div>
//                       <span className="text-xs text-gray-500">{post.date}</span>
//                     </div>
//                   </div>
//                 </Card>
//               </AnimatedSection>
//             ))}
//           </div>

//           <AnimatedSection delay={3} className="text-center">
//             <Button
//               variant="secondary"
//               icon={FaArrowRight}
//               iconPosition="right"
//             >
//               View All Articles
//             </Button>
//           </AnimatedSection>
//         </Container>
//       </section>

//       <CTA
//         title="Want to Discuss Your Digital Strategy?"
//         subtitle="Our thought leaders are ready to help you navigate your transformation journey."
//       />
//     </main>
//   );
// };

// export default InnoviseThinkPage;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../components/ui/Container";
import InsightsCarousel from "../components/think/InsightsCarousel";
import {
  FaLightbulb,
  FaClock,
  FaUser,
  FaArrowRight,
  FaCalendar,
  FaQuoteLeft,
  FaChevronRight,
  FaPlay,
  FaShare,
  FaBookmark,
} from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import bannerImg from "../assets/thinkImg/hero.png";
import ph1 from "../assets/thinkImg/ph1.png";
import ph2 from "../assets/thinkImg/ph2.png";
import ph3 from "../assets/thinkImg/ph3.png";
import ph4 from "../assets/thinkImg/ph4.png";
import ph5 from "../assets/thinkImg/ph5.png";
import ph6 from "../assets/thinkImg/ph6.png";

// 🎨 BRAND COLORS
const BRAND = {
  navy: {
    dark: "#0B1D33",
    mid: "#0D2847",
    light: "#143A63",
    lighter: "#1A4570",
  },
  gold: {
    primary: "#FDB913",
    light: "#FFD54F",
    gradient: "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
  },
};

// Icon mapping
const iconMap = {
  FaLightbulb: FaIcons.FaLightbulb,
  FaCogs: FaIcons.FaCogs,
  FaRobot: FaIcons.FaRobot,
  FaCloud: FaIcons.FaCloud,
  FaChartLine: FaIcons.FaChartLine,
  FaSyncAlt: FaIcons.FaSyncAlt,
  FaShieldAlt: FaIcons.FaShieldAlt,
  FaRocket: FaIcons.FaRocket,
};

// Sample Data with Images
const thinkPhilosophy = [
  {
    id: 1,
    icon: "FaLightbulb",
    subtitle: "Innovation First",
    title: "Innovation-Led Transformation",
    description:
      "We believe technology should serve business strategy, not the other way around. Every solution starts with understanding your unique challenges.",
    principles: [
      "Human-centered design",
      "Agile methodology",
      "Continuous improvement",
    ],
    image: ph1,
  },
  {
    id: 2,
    icon: "FaRobot",
    subtitle: "AI & Automation",
    title: "Intelligent Automation at Scale",
    description:
      "Leveraging AI and automation to eliminate repetitive tasks and unlock human potential for higher-value work.",
    principles: [
      "Machine Learning",
      "Process Automation",
      "Predictive Analytics",
    ],
    image: ph2,
  },
  {
    id: 3,
    icon: "FaCloud",
    subtitle: "Cloud Native",
    title: "Cloud-First Architecture",
    description:
      "Building resilient, scalable systems that leverage the full power of modern cloud infrastructure.",
    principles: ["Microservices", "Containerization", "DevOps Culture"],
    image: ph3,
  },
  {
    id: 4,
    icon: "FaShieldAlt",
    subtitle: "Security by Design",
    title: "Zero Trust Security Model",
    description:
      "Embedding security into every layer of architecture from code to cloud infrastructure.",
    principles: ["Encryption", "Identity Management", "Threat Detection"],
    image: ph4,
  },
  {
    id: 5,
    icon: "FaRocket",
    subtitle: "Speed to Value",
    title: "Rapid Delivery Framework",
    description:
      "Getting solutions to market faster without compromising quality through proven delivery methodologies.",
    principles: ["Sprint-based", "MVP Approach", "CI/CD Pipelines"],
    image: ph5,
  },
  {
    id: 6,
    icon: "FaChartLine",
    subtitle: "Data-Driven Decisions",
    title: "Analytics & Insights",
    description:
      "Transforming raw data into actionable intelligence that drives strategic business decisions.",
    principles: ["Real-time Dashboards", "BI Integration", "KPI Tracking"],
    image: ph6,
  },
];

const blogPosts = [
  {
    id: 1,
    title: "The Future of Enterprise AI: What Leaders Need to Know in 2025",
    excerpt:
      "Exploring how artificial intelligence is reshaping enterprise operations and what it means for your digital strategy.",
    category: "AI & ML",
    readTime: "8 min read",
    author: "Sarah Chen",
    date: "Jan 15, 2025",
    image:
      "https://images.unsplash.com/photo-1677442303641-18a1d5e1b09de?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title:
      "Cloud Migration Best Practices: Lessons from 100+ Enterprise Projects",
    excerpt:
      "Key insights and lessons learned from helping enterprises migrate their critical workloads to the cloud.",
    category: "Cloud",
    readTime: "12 min read",
    author: "Michael Torres",
    date: "Jan 10, 2025",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 3,
    title: "Why Zero Trust Architecture is No Longer Optional",
    excerpt:
      "Understanding why zero trust has become essential for modern enterprise security postures.",
    category: "Security",
    readTime: "6 min read",
    author: "Emily Watson",
    date: "Jan 5, 2025",
    image:
      "https://images.unsplash.com/photo-1563986768494-8dee887dda63?w=800&h=500&fit=crop",
    featured: false,
  },
];

// ==================== ANIMATED SECTION WRAPPER ====================
const AnimatedSection = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    {children}
  </motion.div>
);

// ==================== MAIN COMPONENT ====================
const InnoviseThinkPage = () => {
  const philosophyWithIcons = thinkPhilosophy.map((item) => ({
    ...item,
    icon: iconMap[item.icon] || FaIcons.FaLightbulb,
  }));

  return (
    <main className="overflow-hidden">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background Image */}
        <img
          src={bannerImg} // your uploaded image
          alt="Innovise IT Think"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Optional Dark Overlay (for better text visibility) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F2C]/90 via-[#0A0F2C]/60 to-transparent" />

        {/* LEFT SIDE TEXT */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-2xl px-6 md:px-12 lg:px-20">
            {/* Small Label */}
            <p className="text-sm uppercase tracking-widest text-yellow-400 mb-4">
              Our Perspective
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              What Innovise IT Think
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              We believe technology is not just a tool — it’s a strategic driver
              that transforms businesses, accelerates innovation, and creates
              long-term digital success.
            </p>
          </div>
        </div>
      </section>
      {/* ==================== PHILOSOPHY CARDS SECTION ==================== */}
      <section className="py-10 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${BRAND.navy.mid} 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />

        <Container>
          {/* Section Header */}
          <div className="text-center mb-10">
            <AnimatedSection delay={0.1}>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-semibold"
                style={{ color: BRAND.navy.dark }}
              >
                Our Core{" "}
                <span style={{ color: BRAND.gold.primary }}>Philosophy</span>
              </h2>
            </AnimatedSection>
          </div>

          {/* Cards Grid - Bento Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {philosophyWithIcons.map((philosophy, index) => (
              <AnimatedSection key={philosophy.id} delay={index * 0.1}>
                <motion.div className="group relative h-[60vh] overflow-hidden cursor-pointer">
                  {/* 🔥 FULL BACKGROUND IMAGE */}
                  <img
                    src={philosophy.image}
                    alt={philosophy.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* 🔥 DARK OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F2C]/95 via-[#0A0F2C]/70 to-transparent" />

                  {/* 🔥 CONTENT */}
                  <div className="relative z-10 p-6 lg:p-8 flex flex-col justify-end items-start h-full text-white text-left">
                    {" "}
                    {/* Badge */}
                    {/* <div
                      className="inline-block w-fit px-3 py-1 rounded-full text-xs font-bold mb-4"
                      style={{
                        background: `${BRAND.gold.primary}`,
                        color: BRAND.navy.dark,
                      }}
                    >
                      {philosophy.subtitle}
                    </div> */}
                    {/* Icon */}
                    {/* <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{
                        background: BRAND.gold.gradient,
                      }}
                    >
                      <philosophy.icon className="text-white text-lg" />
                    </div> */}
                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-bold mb-2 group-hover:text-yellow-400 transition-colors uppercase">
                      {philosophy.title}
                    </h3>
                    {/* Description */}
                    <p className="text-sm text-white/70 mb-4 line-clamp-3">
                      {philosophy.description}
                    </p>
                    {/* Principles */}
                    <ul className="space-y-1 mb-4">
                      {philosophy.principles.slice(0, 3).map((item, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-white/60 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {/* Link */}
                    {/* <div className="flex items-center gap-2 text-sm font-semibold text-yellow-400">
                      Learn More
                      <FaChevronRight className="text-xs group-hover:translate-x-1 transition" />
                    </div> */}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* ==================== BLOG POSTS SECTION ==================== */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${BRAND.navy.dark} 0%, ${BRAND.navy.mid} 100%)`,
        }}
      >
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <Container>
          {/* Section Header */}
          <div className="text-center mb-16">
            <AnimatedSection>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.15em]"
                style={{
                  background: `${BRAND.gold.primary}15`,
                  color: BRAND.gold.primary,
                  border: `1px solid ${BRAND.gold.primary}25`,
                }}
              >
                <FaQuoteLeft className="text-sm" />
                Latest Insights
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                From Our <span style={{ color: BRAND.gold.primary }}>Blog</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Thought leadership articles on enterprise technology trends and
                best practices.
              </p>
            </AnimatedSection>
          </div>

          {/* Featured Post Card (Large) + Grid */}
          <div className="space-y-8">
            {/* Featured Post - Full Width */}
            <AnimatedSection delay={0.3}>
              <motion.article
                className="group relative rounded-3xl overflow-hidden cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative h-64 md:h-auto min-h-[320px] overflow-hidden">
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to right, ${BRAND.navy.dark}ee, transparent 70%)`,
                      }}
                    />

                    {/* Category Badge */}
                    <div
                      className="absolute top-6 left-6 px-4 py-1.5 rounded-full text-xs font-bold backdrop-blur-md"
                      style={{
                        background: BRAND.gold.gradient,
                        color: BRAND.navy.dark,
                      }}
                    >
                      {blogPosts[0].category}
                    </div>

                    {/* Play Button for Video Posts */}
                    <button
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{
                        background: "rgba(255,255,255,0.95)",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                      }}
                    >
                      <FaPlay
                        className="text-lg ml-0.5"
                        style={{ color: BRAND.navy.dark }}
                      />
                    </button>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className="flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full"
                        style={{
                          background: `${BRAND.gold.primary}15`,
                          color: BRAND.gold.primary,
                        }}
                      >
                        <FaBookmark className="text-[10px]" />
                        Featured Article
                      </span>

                      <span className="flex items-center gap-1.5 text-xs text-gray-400">
                        <FaClock className="text-[10px]" />
                        {blogPosts[0].readTime}
                      </span>

                      <span className="text-xs text-gray-400">
                        {blogPosts[0].date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                      style={{
                        backgroundImage: BRAND.gold.gradient,
                        backgroundClip: "none",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundImage = `linear-gradient(135deg, ${BRAND.gold.primary}, ${BRAND.gold.light})`)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundImage = "none")
                      }
                    >
                      {blogPosts[0].title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-400 text-base leading-relaxed mb-6 line-clamp-3">
                      {blogPosts[0].excerpt}
                    </p>

                    {/* Author + CTA */}
                    <div
                      className="flex items-center justify-between pt-4"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-full overflow-hidden"
                          style={{ border: `2px solid ${BRAND.gold.primary}` }}
                        >
                          <img
                            src={`https://ui-avatars.com/api/?name=${blogPosts[0].author}&background=FDB913&color=0B1D33`}
                            alt={blogPosts[0].author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-white text-sm font-semibold">
                            {blogPosts[0].author}
                          </p>
                          <p className="text-xs text-gray-500">Senior Writer</p>
                        </div>
                      </div>

                      <Link
                        to="#"
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-x-1"
                        style={{
                          background: BRAND.gold.gradient,
                          color: BRAND.navy.dark,
                          boxShadow: `0 4px 15px ${BRAND.gold.primary}30`,
                        }}
                      >
                        Read Article
                        <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatedSection>

            {/* Other Posts Grid */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <AnimatedSection key={post.id} delay={0.4 + index * 0.1}>
                  <motion.article
                    className="group rounded-2xl overflow-hidden cursor-pointer h-full flex flex-col transition-all duration-500 hover:-translate-y-2"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />

                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity"
                        style={{
                          background: `linear-gradient(to top, ${BRAND.navy.dark}, transparent)`,
                        }}
                      />

                      <span
                        className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold"
                        style={{
                          background: `${BRAND.gold.primary}dd`,
                          color: BRAND.navy.dark,
                        }}
                      >
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Meta */}
                      <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <FaClock className="text-[10px]" /> {post.readTime}
                        </span>
                        <span>{post.date}</span>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-lg font-bold mb-2 line-clamp-2 transition-colors duration-300"
                        style={{ color: "#FFFFFF" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = BRAND.gold.primary)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#FFFFFF")
                        }
                      >
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-gray-400 line-clamp-2 mb-4 flex-grow">
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div
                        className="flex items-center justify-between pt-3 mt-auto"
                        style={{
                          borderTop: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className="w-7 h-7 rounded-full overflow-hidden"
                            style={{
                              border: `1.5px solid ${BRAND.gold.primary}`,
                            }}
                          >
                            <img
                              src={`https://ui-avatars.com/api/?name=${post.author}&background=FDB913&color=0B1D33&size=32`}
                              alt={post.author}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-xs text-gray-400">
                            {post.author}
                          </span>
                        </div>

                        <FaChevronRight
                          className="text-xs transition-transform group-hover:translate-x-1"
                          style={{ color: BRAND.gold.primary, opacity: 0.5 }}
                        />
                      </div>
                    </div>
                  </motion.article>
                </AnimatedSection>
              ))}
            </div>

            {/* View All Button */}
            <AnimatedSection delay={0.8}>
              <div className="text-center mt-12">
                <Link
                  to="/blog"
                  className="group inline-flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  style={{
                    background: "transparent",
                    border: `2px solid ${BRAND.gold.primary}`,
                    color: BRAND.gold.primary,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${BRAND.gold.primary}`;
                    e.currentTarget.style.color = BRAND.navy.dark;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = BRAND.gold.primary;
                  }}
                >
                  View All Articles
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <InsightsCarousel />

      {/* ==================== QUOTE / CTA SECTION ==================== */}
      <section className="py-24 bg-white relative overflow-hidden">
        <Container>
          <div
            className="relative rounded-3xl p-12 lg:p-16 overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${BRAND.navy.mid} 0%, ${BRAND.navy.lighter} 100%)`,
            }}
          >
            {/* Background Pattern */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, ${BRAND.gold.primary} 1px, transparent 0)`,
                backgroundSize: "24px 24px",
              }}
            />

            {/* Quote Icon */}
            <div className="relative z-10 text-center mb-8">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mx-auto"
                style={{ background: `${BRAND.gold.primary}15` }}
              >
                <FaQuoteLeft
                  className="text-3xl"
                  style={{ color: BRAND.gold.primary }}
                />
              </div>
            </div>

            {/* Quote Text */}
            <motion.block
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 text-center max-w-3xl mx-auto mb-10"
            >
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-6">
                "Innovation distinguishes between a leader and a follower."
              </blockquote>

              <cite
                className="text-lg not-italic block"
                style={{ color: BRAND.gold.primary }}
              >
                — Steve Jobs
              </cite>
            </motion.block>

            {/* CTA Buttons */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
                style={{
                  background: BRAND.gold.gradient,
                  color: BRAND.navy.dark,
                  boxShadow: `0 6px 25px ${BRAND.gold.primary}35`,
                }}
              >
                <span className="relative z-10">Start a Conversation</span>
                <FaArrowRight className="relative z-10 text-sm group-hover:translate-x-1 transition-transform" />

                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
                  <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                </div>
              </Link>

              <Link
                to="/think"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:bg-white/5"
                style={{ border: "1px solid rgba(255,255,255,0.2)" }}
              >
                Explore More Articles
                <FaChevronRight
                  className="text-xs"
                  style={{ color: BRAND.gold.primary }}
                />
              </Link>
            </div>

            {/* Bottom Gold Line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{ background: BRAND.gold.gradient }}
            />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default InnoviseThinkPage;
