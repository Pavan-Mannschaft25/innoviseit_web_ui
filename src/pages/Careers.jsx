import React, { useState } from "react";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import AnimatedSection from "../components/ui/AnimatedSection";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import CTA from "../components/sections/CTA";
import Input from "../components/ui/Input";
import { careerBenefits, openPositions } from "../data/companyData";
import {
  FaMapMarkerAlt,
  FaClock,
  FaBriefcase,
  FaArrowRight,
  FaCheck,
  FaPaperPlane,
  FaHeart,
  FaUsers,
  FaGraduationCap,
  FaLaptopCode,
  FaGlobeAmericas,
  FaChartLine,
  FaUser,
} from "react-icons/fa";
import toast from "react-hot-toast";
import * as FaIcons from "react-icons/fa";

const iconMap = {
  FaLaptopCode: FaIcons.FaLaptopCode,
  FaGlobeAmericas: FaIcons.FaGlobeAmericas,
  FaGraduationCap: FaIcons.FaGraduationCap,
  FaUsers: FaIcons.FaUsers,
  FaChartLine: FaIcons.FaChartLine,
  FaHeart: FaIcons.FaHeart,
};

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const benefitsWithIcons = careerBenefits.map((benefit) => ({
    ...benefit,
    icon: iconMap[benefit.icon] || FaIcons.FaStar,
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(
      "Application submitted successfully! We'll be in touch soon.",
    );
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      position: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-6 border border-white/20">
                💼 Join Our Team
              </span>
            </AnimatedSection>

            <AnimatedSection delay={1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                Build Your Career at{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">
                  Innovise IT
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Join a team of innovators, problem-solvers, and technology
                leaders shaping the future of enterprise technology. Grow your
                skills, make an impact, and advance your career.
              </p>
            </AnimatedSection>

            <AnimatedSection
              delay={3}
              className="mt-10 flex flex-wrap justify-center gap-6 text-white/90"
            >
              <div className="flex items-center gap-3">
                <FaUsers className="text-2xl text-accent-400" />
                <div className="text-left">
                  <div className="text-2xl font-bold">1,200+</div>
                  <div className="text-sm text-blue-200">Team Members</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaGlobeAmericas className="text-2xl text-accent-400" />
                <div className="text-left">
                  <div className="text-2xl font-bold">35+</div>
                  <div className="text-sm text-blue-200">Countries</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaHeart className="text-2xl text-accent-400" />
                <div className="text-left">
                  <div className="text-2xl font-bold">4.5★</div>
                  <div className="text-sm text-blue-200">Glassdoor Rating</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-white">
        <Container>
          <SectionHeader
            badge="Why Innovise IT"
            title="Why Join Our Team?"
            subtitle="Exceptional benefits, growth opportunities, and a culture that values your contributions"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsWithIcons.map((benefit, index) => (
              <AnimatedSection key={index} delay={index}>
                <Card className="h-full group text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center mx-auto mb-5 group-hover:from-primary-600 group-hover:to-primary-700 group-hover:scale-110 transition-all duration-300">
                    <benefit.icon className="text-3xl text-primary-600 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-gray-50">
        <Container>
          <SectionHeader
            badge="Current Openings"
            title="Explore Opportunities"
            subtitle="Find your perfect role and join our growing team of technology professionals"
          />

          <div className="max-w-4xl mx-auto space-y-4 mb-12">
            {openPositions.map((position, index) => (
              <AnimatedSection key={position.id} delay={index}>
                <Card
                  className={`cursor-pointer transition-all ${
                    selectedJob?.id === position.id
                      ? "ring-2 ring-primary-500 shadow-lg"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedJob(
                      selectedJob?.id === position.id ? null : position,
                    )
                  }
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-grow">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-700">
                          {position.title}
                        </h3>
                        <span className="text-xs font-semibold px-3 py-1 bg-green-100 text-green-700 rounded-full">
                          New
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <FaBriefcase className="text-primary-500" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-primary-500" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaClock className="text-primary-500" />
                          {position.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaGraduationCap className="text-primary-500" />
                          {position.experience}
                        </span>
                      </div>
                    </div>

                    <Button
                      size="sm"
                      variant={
                        selectedJob?.id === position.id
                          ? "primary"
                          : "secondary"
                      }
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedJob(position);
                      }}
                    >
                      {selectedJob?.id === position.id
                        ? "Selected"
                        : "View Details"}
                    </Button>
                  </div>

                  {/* Expanded Details */}
                  {selectedJob?.id === position.id && (
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <p className="text-gray-700 mb-4">
                        {position.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        <Button
                          variant="primary"
                          size="sm"
                          icon={FaPaperPlane}
                          onClick={() => {
                            setFormData({
                              ...formData,
                              position: position.title,
                            });
                            document
                              .getElementById("application-form")
                              .scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          Apply Now
                        </Button>
                        <Button variant="ghost" size="sm">
                          Save Job
                        </Button>
                      </div>
                    </div>
                  )}
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              title="Apply Now"
              subtitle="Submit your application and our talent acquisition team will reach out shortly"
            />

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    icon={FaUser}
                  />

                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    icon={FaIcons.FaEnvelope}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    icon={FaIcons.FaPhone}
                  />

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Position
                    </label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    >
                      <option value="">Select a position...</option>
                      {openPositions.map((pos) => (
                        <option key={pos.id} value={pos.title}>
                          {pos.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Cover Letter / Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us about yourself and why you'd be a great fit..."
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1 w-4 h-4 text-primary-600 rounded"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <a href="#" className="text-primary-600 hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and consent to my data being processed for recruitment
                    purposes.
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full"
                  icon={FaPaperPlane}
                  iconPosition="right"
                >
                  Submit Application
                </Button>
              </form>
            </Card>
          </div>
        </Container>
      </section>

      <CTA
        title="Don't See the Right Role?"
        subtitle="We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities."
        primaryAction={{ text: "Send General Application", to: "/contact" }}
      />
    </main>
  );
};

export default CareersPage;
