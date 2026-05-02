import { useCallback } from "react";
import toast from "react-hot-toast";

/**
 * Custom hook for toast notifications
 * Provides a clean API for showing different types of notifications
 *
 * @returns {Object} Toast notification methods
 */

// Default configuration for all toasts
const defaultOptions = {
  duration: 4000,
  position: "top-right",
  style: {
    borderRadius: "12px",
    padding: "16px",
    fontSize: "14px",
    fontWeight: "500",
  },
};

const useToast = () => {
  /**
   * Show success notification
   * @param {string} message - Success message
   * @param {Object} options - Override options
   */
  const showSuccess = useCallback((message, options = {}) => {
    toast.success(message, {
      ...defaultOptions,
      iconTheme: {
        primary: "#10B981",
        secondary: "#fff",
      },
      style: {
        ...defaultOptions.style,
        background: "linear-gradient(135deg, #065F46 0%, #059669 100%)",
        color: "#fff",
      },
      ...options,
    });
  }, []);

  /**
   * Show error notification
   * @param {string|Error} message - Error message or Error object
   * @param {Object} options - Override options
   */
  const showError = useCallback((message, options = {}) => {
    const errorMessage = message instanceof Error ? message.message : message;
    toast.error(errorMessage, {
      ...defaultOptions,
      duration: 6000,
      iconTheme: {
        primary: "#EF4444",
        secondary: "#fff",
      },
      style: {
        ...defaultOptions.style,
        background: "linear-gradient(135deg, #991B1B 0%, #DC2626 100%)",
        color: "#fff",
      },
      ...options,
    });
  }, []);

  /**
   * Show warning notification
   * @param {string} message - Warning message
   * @param {Object} options - Override options
   */
  const showWarning = useCallback((message, options = {}) => {
    toast(message, {
      ...defaultOptions,
      icon: "⚠️",
      iconTheme: {
        primary: "#F59E0B",
        secondary: "#fff",
      },
      style: {
        ...defaultOptions.style,
        background: "linear-gradient(135deg, #92400E 0%, #D97706 100%)",
        color: "#fff",
      },
      ...options,
    });
  }, []);

  /**
   * Show info/notification
   * @param {string} message - Info message
   * @param {Object} options - Override options
   */
  const showInfo = useCallback((message, options = {}) => {
    toast(message, {
      ...defaultOptions,
      icon: "ℹ️",
      iconTheme: {
        primary: "#3B82F6",
        secondary: "#fff",
      },
      style: {
        ...defaultOptions.style,
        background: "linear-gradient(135deg, #1E40AF 0%, #2563EB 100%)",
        color: "#fff",
      },
      ...options,
    });
  }, []);

  /**
   * Show loading/promise toast
   * Automatically resolves or rejects based on promise outcome
   *
   * @param {Promise} promise - Promise to track
   * @param {Object} messages - Messages for different states
   * @returns {Promise}
   */
  const showPromise = useCallback(
    (
      promise,
      {
        loading = "Processing...",
        success = "Success!",
        error = "Something went wrong",
      } = {},
    ) => {
      return toast.promise(promise, {
        loading: {
          ...defaultOptions,
          duration: Infinity,
          style: {
            ...defaultOptions.style,
            background: "linear-gradient(135deg, #374151 0%, #4B5563 100%)",
            color: "#fff",
          },
        },
        success: {
          ...defaultOptions,
          duration: 4000,
          iconTheme: { primary: "#10B981", secondary: "#fff" },
          style: {
            ...defaultOptions.style,
            background: "linear-gradient(135deg, #065F46 0%, #059669 100%)",
            color: "#fff",
          },
          message: success,
        },
        error: {
          ...defaultOptions,
          duration: 6000,
          iconTheme: { primary: "#EF4444", secondary: "#fff" },
          style: {
            ...defaultOptions.style,
            background: "linear-gradient(135deg, #991B1B 0%, #DC2626 100%)",
            color: "#fff",
          },
          message: error,
        },
      });
    },
    [],
  );

  /**
   * Dismiss all active toasts
   */
  const dismissAll = useCallback(() => {
    toast.dismiss();
  }, []);

  /**
   * Dismiss specific toast by ID
   * @param {string} id - Toast ID to dismiss
   */
  const dismiss = useCallback((id) => {
    toast.dismiss(id);
  }, []);

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
    showPromise,
    dismissAll,
    dismiss,
    toast,
  };
};

export default useToast;

/**
 * Pre-built toast messages for common application actions
 */
export const toastMessages = {
  form: {
    submitSuccess: (formName = "Form") => `${formName} submitted successfully!`,
    submitError: (error = "Please try again") => `Failed to submit: ${error}`,
    validationError: "Please fill in all required fields correctly",
  },
  auth: {
    loginSuccess: "Welcome back! You have successfully logged in.",
    loginFailed: "Invalid credentials. Please try again.",
    logoutSuccess: "You have been logged out successfully.",
    registerSuccess: "Account created! Please check your email to verify.",
  },
  contact: {
    sendSuccess: "Message sent! We'll respond within 24 hours.",
    sendError: "Failed to send message. Please try again or call us.",
    subscribeSuccess: "Thank you for subscribing to our newsletter!",
  },
  careers: {
    applySuccess: "Application submitted successfully! We'll be in touch soon.",
    applyError: "Failed to submit application. Please try again.",
    jobSaved: "Job saved to your favorites!",
  },
  ui: {
    copiedToClipboard: "Copied to clipboard!",
    genericError: "Something went wrong. Please try again later.",
    networkError: "Network error. Please check your connection.",
  },
};
