import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
// ✅ ADD THIS IMPORT - This was missing!
import Button from "./Button";

const Card = ({
  children,
  className = "",
  hover = true,
  padding = "p-6",
  border = true,
  onClick,
  ...props
}) => {
  const baseClasses = `
    bg-white 
    rounded-2xl 
    ${border ? "border border-gray-100" : ""} 
    ${padding}
    ${hover ? "transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 cursor-pointer" : "shadow-card"}
    ${className}
  `.trim();

  return (
    <div
      className={baseClasses}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === "Enter" && onClick() : undefined}
      {...props}
    >
      {children}
    </div>
  );
};

// ============================================
// SPECIALIZED CARD VARIANTS
// ============================================

export const ServiceCard = ({ service }) => (
  <Card className="h-full flex flex-col group">
    <div
      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
    >
      <service.icon className="text-white text-2xl" />
    </div>

    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
      {service.title}
    </h3>

    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
      {service.description}
    </p>

    <ul className="space-y-2 mb-6">
      {service.features.slice(0, 4).map((feature, idx) => (
        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
          <i className="fas fa-check-circle text-green-500 text-xs flex-shrink-0" />
          {feature}
        </li>
      ))}
    </ul>

    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
      <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
        {service.stats.projects} Projects
      </span>
      {/* ✅ Now Button will work because it's imported! */}
      <Button variant="ghost" size="sm" to={`/services/${service.id}`}>
        Learn More →
      </Button>
    </div>
  </Card>
);

export const IndustryCard = ({ industry }) => (
  <Card className="group relative overflow-hidden">
    <div
      className={`absolute top-0 right-0 w-32 h-32 ${industry.color} opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}
    />

    <div className="relative">
      <div
        className={`w-14 h-14 rounded-xl ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
      >
        <industry.icon className="text-white text-2xl" />
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.name}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {industry.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {industry.capabilities.slice(0, 3).map((cap, idx) => (
          <span
            key={idx}
            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
          >
            {cap}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-primary-600">
          {industry.stats.clients} Clients
        </span>
        <span className="text-gray-500">{industry.stats.experience}</span>
      </div>
    </div>
  </Card>
);

// ============================================
// STAT CARD VARIANT
// ============================================

export const StatCard = ({
  icon: Icon,
  label,
  value,
  color = "primary",
  trend,
}) => (
  <Card className="text-center" hover={false}>
    <div
      className={`w-12 h-12 rounded-xl bg-${color}-100 flex items-center justify-center mx-auto mb-3`}
    >
      <Icon className={`text-2xl text-${color}-600`} />
    </div>
    <div className={`text-3xl font-bold text-${color}-900 mb-1`}>{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
    {trend && (
      <div
        className={`text-xs font-semibold mt-2 ${trend > 0 ? "text-green-600" : "text-red-600"}`}
      >
        {trend > 0 ? "+" : ""}
        {trend}%
      </div>
    )}
  </Card>
);

// ============================================
// TESTIMONIAL CARD VARIANT
// ============================================

export const TestimonialCard = ({ quote, author, role, company, avatar }) => (
  <Card className="relative" hover={false}>
    <div className="absolute -top-3 left-6 text-6xl text-primary-100 font-serif">
      "
    </div>

    <blockquote className="relative z-10">
      <p className="text-gray-700 italic mb-6 leading-relaxed pl-8">
        "{quote}"
      </p>

      <footer className="flex items-center gap-4 pl-8">
        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center overflow-hidden">
          {avatar ? (
            <img
              src={avatar}
              alt={author}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-xl font-bold text-primary-600">
              {author.charAt(0)}
            </span>
          )}
        </div>

        <div>
          <cite className="not-italic font-semibold text-gray-900 block">
            {author}
          </cite>
          <span className="text-sm text-gray-600">
            {role}, {company}
          </span>
        </div>
      </footer>
    </blockquote>
  </Card>
);

// ============================================
// FEATURE CARD VARIANT
// ============================================

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  linkText = "Learn More",
  to,
}) => (
  <Card className="group h-full">
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center mb-5 group-hover:from-primary-600 group-hover:to-primary-700 transition-all duration-300">
      <Icon className="text-2xl text-primary-600 group-hover:text-white transition-colors" />
    </div>

    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
      {title}
    </h3>

    <p className="text-gray-600 text-sm leading-relaxed mb-5">{description}</p>

    {to && (
      <Link
        to={to}
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group/link"
      >
        {linkText}
        <FaArrowRight className="text-xs group-hover/link:translate-x-1 transition-transform" />
      </Link>
    )}
  </Card>
);

export default Card;
