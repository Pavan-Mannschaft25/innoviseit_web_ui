export const BRAND = {
  navy: {
    dark: "#0A1628",
    mid: "#12324f",
    light: "#143A63",
    lighter: "#1A4570",
  },
  gold: { primary: "#FDB913", light: "#FFD54F" },
};

export const COLORS = {
  bg: "#FFFFFF",
  surface: "#F9FAFB",
  textPrimary: "#111827",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
  brand: "#0F172A",
  accent: "#12324f",
  success: "#10B981",
  warning: "#F59E0B",
  danger: "#EF4444",
};

export const PROCESS_STEPS = [
  {
    num: 1,
    title: "Apply Online",
    desc: "Submit your resume and details through our application form.",
  },
  {
    num: 2,
    title: "Resume Screening",
    desc: "Our team reviews your application and shortlists candidates.",
  },
  {
    num: 3,
    title: "Technical Interview",
    desc: "Demonstrate your skills through assessments and coding challenges.",
  },
  {
    num: 4,
    title: "Manager Round",
    desc: "Meet your future manager and discuss role expectations.",
  },
  {
    num: 5,
    title: "Offer & Onboarding",
    desc: "Receive your offer letter and begin a smooth onboarding.",
  },
];

export const API_BASE_URL = import.meta.env.VITE_API_URL;

export const PAGE_SIZE = 20;
