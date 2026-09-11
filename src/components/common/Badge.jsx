import React from "react";
import { COLORS } from "../../constants/careersConstants";

export const Badge = ({ children, color = COLORS.accent }) => (
  <span
    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border"
    style={{ color, borderColor: `${color}33`, backgroundColor: `${color}0D` }}
  >
    {children}
  </span>
);
