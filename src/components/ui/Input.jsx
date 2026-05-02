import React, { forwardRef } from "react";

const Input = forwardRef(
  (
    { label, error, icon: Icon, className = "", type = "text", ...props },
    ref,
  ) => (
    <div className="mb-6">
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
        </label>
      )}

      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}

        <input
          ref={ref}
          type={type}
          className={`
          w-full px-4 py-3.5 
          ${Icon ? "pl-12" : ""}
          rounded-xl 
          border ${error ? "border-red-500" : "border-gray-200"} 
          bg-white 
          text-gray-900 
          placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent 
          transition-all duration-200
          ${className}
        `}
          {...props}
        />

        {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
      </div>
    </div>
  ),
);

Input.displayName = "Input";
export default Input;
