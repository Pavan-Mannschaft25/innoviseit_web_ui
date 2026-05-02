import React, { createContext, useContext, useCallback } from "react";
import { Toaster } from "react-hot-toast";
import useToast from "../hooks/useToast";

// Create context
const ToastContext = createContext(undefined);

/**
 * Toast Provider Component
 * Wraps application to provide toast functionality globally
 */
export const ToastProvider = ({ children, config = {} }) => {
  const toastMethods = useToast();

  const contextValue = React.useMemo(
    () => ({
      ...toastMethods,
    }),
    [toastMethods],
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}

      {/* Global Toaster Component */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
            fontSize: "14px",
            fontFamily: "Inter, system-ui, sans-serif",
            borderRadius: "12px",
            padding: "16px 20px",
            maxWidth: "420px",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
          },
          success: {
            theme: { primary: "#10B981", secondary: "#fff" },
            style: {
              background: "linear-gradient(135deg, #065F46 0%, #059669 100%)",
              borderLeft: "4px solid #34D399",
            },
          },
          error: {
            theme: { primary: "#EF4444", secondary: "#fff" },
            duration: 6000,
            style: {
              background: "linear-gradient(135deg, #991B1B 0%, #DC2626 100%)",
              borderLeft: "4px solid #F87171",
            },
          },
          ...config,
        }}
        containerStyle={{
          top: 80,
          right: 20,
          zIndex: 9999,
        }}
        gutter={12}
      />
    </ToastContext.Provider>
  );
};

/**
 * Custom hook to access toast context
 */
export const useToastContext = () => {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error(
      "useToastContext must be used within a ToastProvider. " +
        "Wrap your App component with <ToastProvider>.",
    );
  }

  return context;
};

export default ToastContext;
