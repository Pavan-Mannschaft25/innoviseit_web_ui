import React, { useState } from "react";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import AnimatedSection from "../components/ui/AnimatedSection";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { companyData } from "../data/companyData";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaPaperPlane,
  FaHeadset,
  FaArrowRight,
  FaIcons,
} from "react-icons/fa";
import toast from "react-hot-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Visit Our Office",
      details: [
        companyData.contact.address.street,
        `${companyData.contact.address.city}, ${companyData.contact.address.state} ${companyData.contact.address.zip}`,
        companyData.contact.address.country,
      ],
      action: null,
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      details: [companyData.contact.email],
      action: {
        label: "Send Email",
        href: `mailto:${companyData.contact.email}`,
      },
    },
    {
      icon: FaPhone,
      title: "Call Us",
      details: [companyData.contact.phone],
      action: {
        label: "Call Now",
        href: `tel:${companyData.contact.phone.replace(/\s/g, "")}`,
      },
    },
    {
      icon: FaClock,
      title: "Business Hours",
      details: [companyData.contact.hours],
      action: null,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent successfully! We'll respond within 24 hours.", {
      icon: "🚀",
      duration: 5000,
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
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
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-6 border border-white/20">
                📞 Let's Connect
              </span>
            </AnimatedSection>

            <AnimatedSection delay={1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                Get in Touch
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Ready to start your transformation journey? Our team of experts
                is here to help you find the perfect solution for your business
                needs.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Whether you have a question about our services, need technical
                  support, or want to explore partnership opportunities—we're
                  here to help.
                </p>
              </AnimatedSection>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <AnimatedSection key={index} delay={index}>
                    <Card className="group" padding="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center flex-shrink-0 group-hover:from-primary-600 group-hover:to-primary-700 transition-all duration-300">
                          <info.icon className="text-xl text-primary-600 group-hover:text-white transition-colors" />
                        </div>

                        <div className="flex-grow">
                          <h4 className="font-bold text-gray-900 mb-2">
                            {info.title}
                          </h4>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-gray-600">
                              {detail}
                            </p>
                          ))}

                          {info.action && (
                            <a
                              href={info.action.href}
                              className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                            >
                              {info.label}
                              <FaArrowRight className="text-xs" />
                            </a>
                          )}
                        </div>
                      </div>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection delay={4} className="mt-8">
                <Card className="bg-gradient-to-br from-primary-50 to-accent-50 border-primary-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center flex-shrink-0">
                      <FaHeadset className="text-xl text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        Need Immediate Assistance?
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Our support team is available 24/7 for existing clients.
                      </p>
                      <Button size="sm" variant="primary" icon={FaPhone}>
                        Emergency Support Line
                      </Button>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={1}>
                <Card className="p-8 lg:p-10">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Send us a Message
                    </h3>
                    <p className="text-gray-600">
                      Fill out the form below and we'll get back to you within
                      24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        required
                      />
                      <Input
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        icon={FaIcons.FaEnvelope}
                      />
                      <Input
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        icon={FaIcons.FaPhone}
                      />
                    </div>

                    <Input
                      label="Company Name"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      >
                        <option value="">Select a topic...</option>
                        <option value="sap-consulting">SAP Consulting</option>
                        <option value="cloud-services">Cloud Services</option>
                        <option value="digital-transformation">
                          Digital Transformation
                        </option>
                        <option value="staff-augmentation">
                          Staff Augmentation
                        </option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Tell us about your project or inquiry..."
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                        required
                      ></textarea>
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        required
                        className="mt-1 w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                      />
                      <label
                        htmlFor="privacy"
                        className="text-sm text-gray-600"
                      >
                        I agree to the{" "}
                        <a
                          href="#"
                          className="text-primary-600 hover:underline font-medium"
                        >
                          Privacy Policy
                        </a>{" "}
                        and consent to processing my personal data.
                      </label>
                    </div>

                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      className="w-full"
                      icon={FaPaperPlane}
                      iconPosition="right"
                      loading={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
          <div className="text-center">
            <FaMapMarkerAlt className="text-6xl text-primary-400 mx-auto mb-4" />
            <p className="text-primary-800 font-semibold text-lg">
              Interactive Map
            </p>
            <p className="text-primary-600 text-sm">Redmond, WA 98052</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
