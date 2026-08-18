import React from "react";

export const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 px-6 py-3 text-sm disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary:
      "bg-[#12324f] text-white hover:bg-[#1D4ED8] focus:ring-[#12324f] shadow-sm",
    secondary:
      "bg-white text-[#111827] border border-[#E5E7EB] hover:bg-[#F9FAFB] focus:ring-[#E5E7EB]",
    ghost:
      "bg-transparent text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#111827] border border-transparent",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
