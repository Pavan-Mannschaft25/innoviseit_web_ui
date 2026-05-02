import React from "react";
import { Link } from "react-router-dom";

const variants = {
  primary: `
    bg-gradient-to-r from-primary-600 to-primary-700 
    text-white 
    hover:from-primary-700 hover:to-primary-800 
    shadow-lg hover:shadow-xl 
    border border-transparent
  `,
  secondary: `
    bg-white 
    text-primary-700 
    border-2 border-primary-200 
    hover:border-primary-400 hover:bg-primary-50
    shadow-md hover:shadow-lg
  `,
  accent: `
    bg-gradient-to-r from-accent-500 to-accent-600 
    text-white 
    hover:from-accent-600 hover:to-accent-700 
    shadow-lg hover:shadow-xl
  `,
  ghost: `
    bg-transparent 
    text-primary-700 
    hover:bg-primary-50 
    border border-transparent
  `,
  outline: `
    bg-transparent 
    text-white 
    border-2 border-white/30 
    hover:border-white hover:bg-white/10
  `,
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
  xl: "px-10 py-5 text-xl",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  to,
  href,
  onClick,
  disabled = false,
  icon: Icon,
  iconPosition = "left",
  loading = false,
  ...props
}) => {
  const baseClasses = `
    inline-flex items-center justify-center 
    font-semibold rounded-xl 
    transition-all duration-300 ease-in-out 
    transform hover:-translate-y-0.5 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.trim();

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {Icon && iconPosition === "left" && !loading && (
        <Icon className="w-5 h-5 mr-2" />
      )}
      {children}
      {Icon && iconPosition === "right" && <Icon className="w-5 h-5 ml-2" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={baseClasses}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
