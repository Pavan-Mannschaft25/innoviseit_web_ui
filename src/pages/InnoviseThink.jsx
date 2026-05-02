import React from "react";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import AnimatedSection from "../components/ui/AnimatedSection";
import Card from "../components/ui/Card";
import CTA from "../components/sections/CTA";
import { thinkPhilosophy, blogPosts } from "../data/thinkData";
import {
  FaLightbulb,
  FaClock,
  FaUser,
  FaArrowRight,
  FaCalendar,
} from "react-icons/fa";
import Button from "../components/ui/Button";
import * as FaIcons from "react-icons/fa";

const iconMap = {
  FaLightbulb: FaIcons.FaLightbulb,
  FaCogs: FaIcons.FaCogs,
  FaRobot: FaIcons.FaRobot,
  FaCloud: FaIcons.FaCloud,
  FaChartLine: FaIcons.FaChartLine,
  FaSyncAlt: FaIcons.FaSyncAlt,
};

const InnoviseThinkPage = () => {
  const philosophyWithIcons = thinkPhilosophy.map((item) => ({
    ...item,
    icon: iconMap[item.icon] || FaIcons.FaLightbulb,
  }));

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-6 border border-white/20">
                💡 Our Philosophy & Insights
              </span>
            </AnimatedSection>

            <AnimatedSection delay={1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Turning Enterprise Challenges into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">
                  Scalable Digital Opportunities
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Technology is a strategic driver of business transformation. Our
                thinking shapes how we deliver value and helps our clients
                navigate the complexities of digital evolution.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Philosophy Cards */}
      <section className="py-24 bg-white">
        <Container>
          <SectionHeader
            title="Our Core Philosophy"
            subtitle="Guiding principles that inform every solution we deliver and every partnership we build"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {philosophyWithIcons.map((philosophy, index) => (
              <AnimatedSection key={philosophy.id} delay={index}>
                <Card className="h-full group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:from-accent-500 group-hover:to-accent-600 transition-all duration-300">
                    <philosophy.icon className="text-white text-2xl" />
                  </div>

                  <div className="mb-3">
                    <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                      {philosophy.subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                    {philosophy.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {philosophy.description}
                  </p>

                  <ul className="space-y-2 pt-4 border-t border-gray-100">
                    {philosophy.principles.map((principle, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <FaArrowRight className="text-xs text-primary-500 flex-shrink-0" />
                        {principle}
                      </li>
                    ))}
                  </ul>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Blog Posts Preview */}
      <section className="py-24 bg-gray-50">
        <Container>
          <SectionHeader
            badge="Latest Insights"
            title="From Our Blog"
            subtitle="Thought leadership articles on enterprise technology trends and best practices"
          />

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.id} delay={index}>
                <Card className="h-full overflow-hidden group">
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-t-2xl flex items-center justify-center mb-0">
                    <FaIcons.FaNewspaper className="text-5xl text-primary-400" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded font-semibold">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                          <FaUser className="text-xs text-primary-600" />
                        </div>
                        <span className="text-xs text-gray-600">
                          {post.author}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={3} className="text-center">
            <Button
              variant="secondary"
              icon={FaArrowRight}
              iconPosition="right"
            >
              View All Articles
            </Button>
          </AnimatedSection>
        </Container>
      </section>

      <CTA
        title="Want to Discuss Your Digital Strategy?"
        subtitle="Our thought leaders are ready to help you navigate your transformation journey."
      />
    </main>
  );
};

export default InnoviseThinkPage;
