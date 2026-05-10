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
      { name: "SAP Solutions", path: "/services/sap-consulting" },
      { name: "Application Support", path: "/services/app-maintenance" },
      { name: "Quality Engineering", path: "/services/testing-qa" },
      { name: "Data Transformation", path: "/services/data-migration" },
      { name: "Project Recovery", path: "/services/remediation" },
      { name: "Talent Solutions", path: "/services/staff-augmentation" },
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Leadership", path: "/about/leadership" },
      { name: "Careers", path: "/careers" },
      { name: "What We Think", path: "/think" },
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
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="py-16 border-b border-gray-800">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="Innovise IT"
                  className="h-8 w-auto object-contain mb-4"
                />
              </Link>

              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Enterprise technology partner delivering innovative SAP, cloud,
                and digital transformation solutions that drive measurable
                business outcomes for global organizations.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  {
                    icon: FaLinkedinIn,
                    href: companyData.socialLinks.linkedin,
                    label: "LinkedIn",
                  },
                  {
                    icon: FaTwitter,
                    href: companyData.socialLinks.twitter,
                    label: "Twitter",
                  },
                  {
                    icon: FaFacebookF,
                    href: companyData.socialLinks.facebook,
                    label: "Facebook",
                  },
                  {
                    icon: FaInstagram,
                    href: companyData.socialLinks.instagram,
                    label: "Instagram",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300"
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
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
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
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
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
                  <span className="text-sm text-gray-400">
                    {companyData.contact.address.street}
                    <br />
                    {companyData.contact.address.city},{" "}
                    {companyData.contact.address.state}{" "}
                    {companyData.contact.address.zip}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-accent-500 flex-shrink-0" />
                  <a
                    href={`mailto:${companyData.contact.email}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {companyData.contact.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhone className="text-accent-500 flex-shrink-0" />
                  <a
                    href={`tel:${companyData.contact.phone.replace(/\s/g, "")}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {companyData.contact.phone}
                  </a>
                </li>
                <li className="pt-2">
                  <p className="text-xs text-gray-500">
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
            <p className="text-sm text-gray-500">
              © {currentYear} {companyData.name}. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-500">
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
            </div>

            <p className="text-sm text-gray-500 flex items-center gap-1">
              Made with <FaHeart className="text-red-500 text-xs" /> by Innovise
              IT Team
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
