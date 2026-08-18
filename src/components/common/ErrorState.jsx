import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

export const ErrorState = ({ message, onRetry }) => (
  <div className="text-center py-16 bg-[#FEF2F2] border border-[#FECACA] rounded-2xl px-6">
    <FaExclamationTriangle className="mx-auto text-2xl text-[#EF4444] mb-3" />
    <p className="text-[#991B1B] font-medium mb-1">
      Something went wrong loading this data.
    </p>
    <p className="text-[#B91C1C] text-sm mb-6">{message}</p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="bg-[#EF4444] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-[#DC2626] transition-colors shadow-sm"
      >
        Try Again
      </button>
    )}
  </div>
);
