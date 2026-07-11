import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaArrowRight,
  FaHeart,
} from "react-icons/fa";
import Container from "../ui/Container";
import { companyData } from "../../data/companyData";
import logo from "../../assets/images/innovise_it_logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      {
        name: "SAP Consulting & Implementation",
        path: "/services/sap-consulting",
      },
      { name: "Guidewire Services", path: "/services/guidewire" },
      {
        name: "AI & Engineering Services",
        path: "/services/application-development-integration-ai",
      },
      {
        name: "Application Maintenance Services",
        path: "/services/app-maintenance",
      },
      {
        name: "Testing & Quality Assurance",
        path: "/services/testing-qa",
      },
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Leadership", path: "/about/leadership" },
      { name: "Privacy Policy", path: "/about/privacy-policy" },
      // { name: "Careers", path: "/careers" },
      { name: "Our Values", path: "/culture/values" },
      { name: "Contact", path: "/contact" },
    ],
    resources: [
      { name: "Case Studies", path: "/case-studies" },
      { name: "Whitepapers", path: "/resources/whitepapers" },
      { name: "Webinars", path: "/resources/webinars" },
      { name: "Blog", path: "/blog" },
      { name: "Support", path: "/support" },
    ],
  };

  return (
    <footer className="bg-primary-800 text-gray-300">
      {/* Main Footer Content */}
      <div className="py-10 border-b border-black">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <p className="text-white leading-relaxed mb-6 max-w-sm">
                Innovative technology partner delivering cloud, AI, engineering,
                enterprise applications, and digital transformation solutions
                that help organizations modernize operations, accelerate growth,
                and achieve measurable business outcomes.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  {
                    icon: FaLinkedinIn,
                    href: companyData.socialLinks.linkedin,
                    label: "LinkedIn",
                  },
                  // {
                  //   icon: FaTwitter,
                  //   href: companyData.socialLinks.twitter,
                  //   label: "Twitter",
                  // },
                  // {
                  //   icon: FaFacebookF,
                  //   href: companyData.socialLinks.facebook,
                  //   label: "Facebook",
                  // },
                  // {
                  //   icon: FaInstagram,
                  //   href: companyData.socialLinks.instagram,
                  //   label: "Instagram",
                  // },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary-600 text-white transition-all duration-300"
                  >
                    <social.icon className="text-sm" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.path}
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-white hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <FaArrowRight className="text-xs opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.path}
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-white hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <FaArrowRight className="text-xs opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Column */}
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-accent-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-white">
                    {/* {companyData.contact.address.street}
                    <br /> */}
                    {companyData.contact.address.city},{" "}
                    {companyData.contact.address.state}{" "}
                    {companyData.contact.address.zip}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-accent-500 flex-shrink-0" />
                  <a
                    href={`mailto:${companyData.contact.email}`}
                    className="text-sm text-white hover:text-white transition-colors"
                  >
                    {companyData.contact.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhone className="text-accent-500 flex-shrink-0" />
                  <a
                    href={`tel:${companyData.contact.phone.replace(/\s/g, "")}`}
                    className="text-sm text-white hover:text-white transition-colors"
                  >
                    {companyData.contact.phone}
                  </a>
                </li>
                <li className="pt-2">
                  <p className="text-sm text-white">
                    {companyData.contact.hours}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="py-6">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white">
              © {currentYear} {companyData.name}. All rights reserved.
            </p>

            {/* <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div> */}

            <p className="text-sm text-white flex items-center gap-1">
              Designed & Developed by Innovise IT Team
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
