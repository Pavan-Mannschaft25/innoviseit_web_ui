import React, { memo } from "react";
import { BRAND } from "../../constants/careersConstants";

export const GoldLink = memo(
  ({ children, className = "", onClick, ...props }) => (
    <a
      className={`group relative inline-flex items-center overflow-hidden rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
      style={{
        background:
          "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
        color: BRAND.navy.dark,
        boxShadow: "0 8px 30px rgba(253,185,19,0.3)",
        ["--tw-ring-color"]: BRAND.gold.primary,
      }}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none">
        <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
      </div>
    </a>
  ),
);

export const SectionLabel = memo(({ children, light = false }) => (
  <span
    className="reveal inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6"
    style={
      light
        ? {
            background: `${BRAND.gold.primary}15`,
            color: BRAND.gold.primary,
            border: `1px solid ${BRAND.gold.primary}30`,
          }
        : {
            background: `${BRAND.navy.mid}08`,
            color: BRAND.navy.dark,
            border: `1px solid ${BRAND.navy.mid}12`,
          }
    }
  >
    {children}
  </span>
));

export const SectionTitle = memo(
  ({ children, light = false, className = "" }) => (
    <h2
      className={`reveal text-4xl md:text-5xl font-bold mb-5 ${className}`}
      style={{ color: light ? "#fff" : BRAND.navy.dark }}
    >
      {children}
    </h2>
  ),
);

export const Gold = memo(({ children }) => (
  <span style={{ color: BRAND.gold.primary }}>{children}</span>
));

export const GoldButton = memo(({ children, className = "", ...props }) => (
  <button
    className={`group relative overflow-hidden rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 ${className}`}
    style={{
      background:
        "linear-gradient(135deg, #FDB913 0%, #FFC107 50%, #FFD54F 100%)",
      color: BRAND.navy.dark,
      boxShadow: "0 8px 30px rgba(253,185,19,0.3)",
      ["--tw-ring-color"]: BRAND.gold.primary,
    }}
    {...props}
  >
    <span className="relative z-10 flex items-center justify-center gap-3">
      {children}
    </span>
    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full group-disabled:hover:-translate-x-full transition-transform duration-700 pointer-events-none">
      <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
    </div>
  </button>
));
