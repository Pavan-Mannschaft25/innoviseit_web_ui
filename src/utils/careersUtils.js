export function formatCurrency(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return null;
  // Changed from INR (₹) to USD ($)
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(num);
}

export function formatSalaryRange(min, max) {
  const lo = formatCurrency(min);
  const hi = formatCurrency(max);
  if (lo && hi) return `${lo} – ${hi}`;
  return lo || hi || null;
}

export function formatRelativeDate(isoDate) {
  if (!isoDate) return null;
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return null;
  const diffMs = Date.now() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays <= 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  const weeks = Math.floor(diffDays / 7);
  if (weeks < 5) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function parseListString(str) {
  if (!str || typeof str !== "string") return [];
  const trimmed = str.trim();
  if (!trimmed) return [];

  if (trimmed.includes("\n")) {
    return trimmed
      .split("\n")
      .map((s) => s.replace(/^[-•*]\s*/, "").trim())
      .filter(Boolean);
  }
  const sentences = trimmed
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
  if (sentences.length > 1) return sentences;

  if (trimmed.includes(",")) {
    return trimmed
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [trimmed];
}

export function normalizeJob(raw, departments = []) {
  if (!raw) return null;
  const dept = departments.find((d) => d.id === raw.department_id);

  return {
    id: String(raw.id),
    title: raw.title,
    department: raw.department_name || dept?.department_name || "General",
    team: raw.department_name || dept?.department_name || "General",
    location: raw.location || "Location TBD",
    employmentType: raw.employment_type || null,
    experienceLevel: raw.experience_level || null,
    workModel: raw.work_model || null,
    salaryRange: formatSalaryRange(raw.salary_min, raw.salary_max),
    postedDate: formatRelativeDate(raw.created_at),
    applicationDeadline: raw.application_deadline
      ? new Date(raw.application_deadline).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      : null,
    openings: raw.openings ?? null,
    hiringStatus: raw.status === "Open" ? "Actively Hiring" : "Reviewing",
    aboutTeam: dept?.description || null,
    aboutRole: raw.description || "",
    responsibilities: parseListString(raw.responsibilities),
    qualifications: parseListString(raw.requirements),
    benefits: parseListString(raw.benefits),
  };
}
