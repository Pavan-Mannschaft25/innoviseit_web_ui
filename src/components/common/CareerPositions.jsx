import React, { useState, useMemo, useEffect, useCallback, memo } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
  FaArrowRight,
  FaArrowLeft,
  FaCheckCircle,
  FaCloudUploadAlt,
  FaFileAlt,
  FaTimes,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaUsers,
  FaDollarSign,
  FaCalendarAlt,
  FaShieldAlt,
  FaCode,
} from "react-icons/fa";

// ==========================================
// 1. DESIGN SYSTEM & CONSTANTS
// ==========================================
const COLORS = {
  bg: "#FFFFFF",
  surface: "#F9FAFB",
  textPrimary: "#111827",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
  brand: "#0F172A",
  accent: "#2563EB",
  success: "#10B981",
  warning: "#F59E0B",
  danger: "#EF4444",
};

const DEPARTMENTS = [
  "Engineering",
  "Product",
  "Design",
  "Marketing",
  "Sales",
  "Security",
  "Customer Success",
];
const LOCATIONS = [
  "San Francisco, CA",
  "New York, NY",
  "Austin, TX",
  "Remote (US)",
  "Remote (Global)",
];

// Mock API Data - Enriched with details for the Details Page
const MOCK_JOBS = [
  {
    id: "job_1",
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    employmentType: "Full-Time",
    experienceLevel: "Senior",
    workModel: "Hybrid",
    salaryRange: "$165,000–$210,000",
    postedDate: "3 days ago",
    hiringStatus: "Actively Hiring",
    team: "Web Platform",
    aboutTeam:
      "Our Web Platform team builds the core interfaces that millions of users interact with daily. We focus on performance, accessibility, and creating delightful user experiences.",
    aboutRole:
      "We are looking for a Senior Frontend Engineer to lead complex web projects. You will architect scalable React applications and mentor mid-level engineers.",
    responsibilities: [
      "Lead the design and implementation of complex web applications using React and TypeScript.",
      "Collaborate with product managers and designers to deliver exceptional user experiences.",
      "Optimize applications for maximum speed and scalability.",
      "Mentor junior engineers and conduct rigorous code reviews.",
    ],
    qualifications: [
      "5+ years of experience in frontend development.",
      "Deep expertise in React, TypeScript, and modern CSS frameworks (Tailwind).",
      "Strong understanding of web accessibility (WCAG AA) and performance metrics.",
      "Experience with CI/CD pipelines and automated testing.",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "AWS Amplify"],
  },
  {
    id: "job_2",
    title: "Product Manager, Platform",
    department: "Product",
    location: "Remote (US)",
    employmentType: "Full-Time",
    experienceLevel: "Mid-Senior",
    workModel: "Remote",
    salaryRange: "$140,000–$180,000",
    postedDate: "1 week ago",
    hiringStatus: "Actively Hiring",
    team: "Core Platform",
    aboutTeam:
      "The Core Platform PM team owns the underlying architecture that powers all our product lines. We build the tools that other teams use to build magic.",
    aboutRole:
      "Drive the roadmap for our developer platform. You will talk to internal stakeholders, define APIs, and ensure our platform scales globally.",
    responsibilities: [
      "Define and drive the product roadmap for the internal platform.",
      "Work closely with engineering to prioritize features based on ROI.",
      "Conduct user research with internal developers to identify pain points.",
    ],
    qualifications: [
      "4+ years of Product Management experience, ideally in platform or infrastructure.",
      "Technical background or strong understanding of API design.",
      "Proven track record of shipping successful products.",
    ],
    techStack: ["Jira", "Figma", "Amplitude", "SQL"],
  },
  {
    id: "job_3",
    title: "UI/UX Designer",
    department: "Design",
    location: "New York, NY",
    employmentType: "Full-Time",
    experienceLevel: "Mid-Level",
    workModel: "On-site",
    salaryRange: "$110,000–$140,000",
    postedDate: "2 days ago",
    hiringStatus: "Reviewing",
    team: "Design System",
    aboutTeam:
      "We maintain the single source of truth for all UI components. We ensure brand consistency and accessibility across all digital touchpoints.",
    aboutRole:
      "Craft beautiful, functional interfaces. You will work directly with engineering to implement designs and expand our component library.",
    responsibilities: [
      "Design high-fidelity wireframes and prototypes in Figma.",
      "Expand and maintain the core design system.",
      "Conduct usability testing to validate design decisions.",
    ],
    qualifications: [
      "3+ years of experience in UX/UI design.",
      "Mastery of Figma and prototyping tools.",
      "Strong portfolio demonstrating clean, modern aesthetic.",
    ],
    techStack: ["Figma", "Maze", "Storybook"],
  },
];

// ==========================================
// 2. API SIMULATION HOOK
// ==========================================
const useJobsData = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setJobs(MOCK_JOBS);
      setIsLoading(false);
    };
    fetchJobs();
  }, []);

  return { jobs, isLoading };
};

// ==========================================
// 3. UI PRIMITIVES
// ==========================================
const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 px-6 py-3 text-sm";
  const variants = {
    primary:
      "bg-[#2563EB] text-white hover:bg-[#1D4ED8] focus:ring-[#2563EB] shadow-sm",
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

const Badge = ({ children, color = COLORS.accent }) => (
  <span
    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border"
    style={{
      color: color,
      borderColor: `${color}33`,
      backgroundColor: `${color}0D`,
    }}
  >
    {children}
  </span>
);

// ==========================================
// 4. JOB CARD COMPONENT
// ==========================================
const JobCard = memo(({ job, onSelectJob }) => {
  return (
    <div
      onClick={() => onSelectJob(job)}
      className="group bg-white border border-[#E5E7EB] rounded-2xl p-6 cursor-pointer transition-all duration-[250ms] ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-[#2563EB]"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-[#111827] mb-1">{job.title}</h3>
          <p className="text-sm text-[#6B7280]">
            {job.department} • {job.team}
          </p>
        </div>
        <FaArrowRight className="text-[#9CA3AF] group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all duration-[250ms]" />
      </div>

      <div className="flex flex-wrap gap-3 mb-5 text-xs text-[#6B7280]">
        <span className="inline-flex items-center gap-1.5">
          <FaMapMarkerAlt /> {job.location}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <FaBriefcase /> {job.employmentType}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <FaClock /> {job.workModel}
        </span>
      </div>

      <div className="border-t border-[#F3F4F6] pt-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-[#111827]">
            {job.salaryRange}
          </p>
          <p className="text-xs text-[#9CA3AF] mt-0.5">
            Posted {job.postedDate}
          </p>
        </div>
        {job.hiringStatus === "Actively Hiring" ? (
          <Badge color={COLORS.success}>Actively Hiring</Badge>
        ) : (
          <Badge color={COLORS.warning}>Reviewing</Badge>
        )}
      </div>
    </div>
  );
});

// ==========================================
// 5. OPEN POSITIONS LIST SECTION
// ==========================================
const OpenPositions = memo(({ onSelectJob }) => {
  const { jobs, isLoading } = useJobsData();
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const filteredJobs = useMemo(() => {
    return jobs.filter(
      (job) =>
        (job.title.toLowerCase().includes(search.toLowerCase()) ||
          job.department.toLowerCase().includes(search.toLowerCase())) &&
        (deptFilter ? job.department === deptFilter : true) &&
        (locationFilter ? job.location === locationFilter : true),
    );
  }, [jobs, search, deptFilter, locationFilter]);

  const groupedJobs = useMemo(() => {
    const groups = {};
    filteredJobs.forEach((job) => {
      if (!groups[job.department]) groups[job.department] = [];
      groups[job.department].push(job);
    });
    return Object.entries(groups);
  }, [filteredJobs]);

  const clearFilters = () => {
    setSearch("");
    setDeptFilter("");
    setLocationFilter("");
  };

  return (
    <section id="positions" className="bg-[#FFFFFF] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight mb-4">
            Open Positions
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Explore roles across our teams. We're looking for passionate
            individuals ready to make a global impact.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl shadow-sm p-4 mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-1/3">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
              />
            </div>

            <div className="flex flex-wrap gap-3 w-full md:w-auto md:ml-auto items-center">
              <select
                value={deptFilter}
                onChange={(e) => setDeptFilter(e.target.value)}
                className="px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#2563EB] cursor-pointer"
              >
                <option value="">All Departments</option>
                {DEPARTMENTS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#2563EB] cursor-pointer"
              >
                <option value="">All Locations</option>
                {LOCATIONS.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
              {(search || deptFilter || locationFilter) && (
                <button
                  onClick={clearFilters}
                  className="text-sm font-medium text-[#6B7280] hover:text-[#EF4444] transition-colors px-3 py-2"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Job Results */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-6 animate-pulse h-48"
              ></div>
            ))}
          </div>
        ) : groupedJobs.length > 0 ? (
          <div className="space-y-12">
            {groupedJobs.map(([dept, jobsList]) => (
              <div key={dept}>
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-xl font-bold text-[#0F172A]">{dept}</h3>
                  <span className="text-sm text-[#6B7280] bg-[#F9FAFB] border border-[#E5E7EB] px-2.5 py-0.5 rounded-full">
                    {jobsList.length} {jobsList.length === 1 ? "Role" : "Roles"}
                  </span>
                  <div className="flex-1 h-px bg-[#E5E7EB] ml-4"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {jobsList.map((job) => (
                    <JobCard key={job.id} job={job} onSelectJob={onSelectJob} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl">
            <p className="text-[#6B7280] text-lg">
              No positions match your current filters.
            </p>
            <Button variant="secondary" className="mt-6" onClick={clearFilters}>
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
});

// ==========================================
// 6. JOB DETAILS PAGE COMPONENT (NEW)
// ==========================================
const JobDetailsPage = memo(({ job, onBack, onApply }) => {
  if (!job) return null;

  return (
    <div className="bg-white min-h-screen">
      {/* Sub Navigation */}
      <div className="border-b border-[#E5E7EB] sticky top-0 bg-white/95 backdrop-blur z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#111827] transition-colors"
          >
            <FaArrowLeft /> Back to all roles
          </button>
          <Button onClick={onApply} className="hidden md:inline-flex">
            Apply Now <FaArrowRight />
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header Section */}
        <div className="mb-12 border-b border-[#E5E7EB] pb-8">
          <Badge color={COLORS.accent}>{job.department}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight mt-4 mb-4">
            {job.title}
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#6B7280]">
            <span className="inline-flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#9CA3AF]" /> {job.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <FaBriefcase className="text-[#9CA3AF]" /> {job.employmentType}
            </span>
            <span className="inline-flex items-center gap-2">
              <FaClock className="text-[#9CA3AF]" /> {job.workModel}
            </span>
            <span className="inline-flex items-center gap-2">
              <FaUsers className="text-[#9CA3AF]" /> {job.team} Team
            </span>
            <span className="inline-flex items-center gap-2">
              <FaCalendarAlt className="text-[#9CA3AF]" /> Posted{" "}
              {job.postedDate}
            </span>
          </div>
        </div>

        {/* Content Grid: Sticky Sidebar + Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar (Sticky on Desktop) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-4">
                  Job Details
                </h4>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#6B7280] flex items-center gap-2">
                      <FaDollarSign /> Salary
                    </span>
                    <span className="font-semibold text-[#111827] text-right">
                      {job.salaryRange}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280] flex items-center gap-2">
                      <FaBriefcase /> Level
                    </span>
                    <span className="font-semibold text-[#111827]">
                      {job.experienceLevel}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280] flex items-center gap-2">
                      <FaShieldAlt /> Status
                    </span>
                    {job.hiringStatus === "Actively Hiring" ? (
                      <Badge color={COLORS.success}>Actively Hiring</Badge>
                    ) : (
                      <Badge color={COLORS.warning}>Reviewing</Badge>
                    )}
                  </div>
                </div>

                <Button onClick={onApply} className="w-full mt-6">
                  Apply Now <FaArrowRight />
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-10 text-[#374151] text-base leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">
                About the Team
              </h2>
              <p>{job.aboutTeam}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">
                About the Role
              </h2>
              <p>{job.aboutRole}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">
                What You'll Do
              </h2>
              <ul className="space-y-3">
                {job.responsibilities.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <FaCheckCircle className="text-[#10B981] mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">
                What We're Looking For
              </h2>
              <ul className="space-y-3">
                {job.qualifications.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <FaCheckCircle className="text-[#2563EB] mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {job.techStack && (
              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {job.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-sm font-medium text-[#111827] flex items-center gap-2"
                    >
                      <FaCode className="text-[#9CA3AF]" /> {tech}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Equal Opportunity Statement */}
            <section className="pt-8 border-t border-[#E5E7EB]">
              <p className="text-sm text-[#6B7280] italic">
                We are an equal opportunity employer. We celebrate diversity and
                are committed to creating an inclusive environment for all
                employees. We do not discriminate based upon race, religion,
                color, national origin, sexual orientation, gender identity,
                age, status as a protected veteran, status as an individual with
                a disability, or other applicable legally protected
                characteristics.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
});

// ==========================================
// 7. MULTI-STEP APPLICATION FLOW MODAL
// ==========================================
const ApplicationFlow = memo(({ selectedJob, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: null,
    linkedin: "",
    github: "",
    website: "",
    workAuth: false,
  });
  const [errors, setErrors] = useState({});
  const [isDragging, setIsDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!selectedJob) return null;

  const steps = ["Personal", "Resume", "Portfolio", "Questions", "Review"];

  const validateStep = () => {
    let tempErrors = {};
    if (step === 1) {
      if (!formData.fullName.trim())
        tempErrors.fullName = "Full name is required";
      if (!formData.email.trim()) tempErrors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        tempErrors.email = "Invalid email format";
    }
    if (step === 2 && !formData.resume)
      tempErrors.resume = "Please upload your resume";
    if (step === 4 && !formData.workAuth)
      tempErrors.workAuth = "You must confirm work authorization";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep((prev) => Math.min(prev + 1, 5));
  };
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    if (validateStep()) {
      console.log("Submitting application:", {
        job: selectedJob,
        applicant: formData,
      });
      setSubmitted(true);
    }
  };

  const handleFileChange = (file) => {
    if (file && file.size < 5 * 1024 * 1024) {
      setFormData((prev) => ({ ...prev, resume: file }));
      setErrors((prev) => ({ ...prev, resume: null }));
    } else {
      setErrors((prev) => ({
        ...prev,
        resume: "Invalid file. Must be under 5MB.",
      }));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileChange(e.dataTransfer.files[0]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-[#E5E7EB]">
          <div>
            <p className="text-sm text-[#6B7280]">Applying for</p>
            <h3 className="text-xl font-bold text-[#0F172A]">
              {selectedJob.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#6B7280] hover:bg-[#F9FAFB] rounded-lg transition-colors"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="p-12 text-center flex-1 flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-[#10B981]/10 rounded-full flex items-center justify-center mb-6">
              <FaCheckCircle size={32} className="text-[#10B981]" />
            </div>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-3">
              Application Submitted!
            </h2>
            <p className="text-[#6B7280] max-w-md mb-8">
              Thank you for applying. Our talent acquisition team will review
              your application and get back to you within 5-7 business days.
            </p>
            <Button onClick={onClose}>Close</Button>
          </div>
        ) : (
          <>
            {/* Progress Indicator */}
            <div className="px-6 pt-6">
              <div className="flex items-center justify-between mb-2">
                {steps.map((label, i) => (
                  <div key={label} className="flex-1 flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300 
                      ${step > i + 1 ? "bg-[#10B981] text-white" : step === i + 1 ? "bg-[#2563EB] text-white" : "bg-[#F9FAFB] text-[#6B7280] border border-[#E5E7EB]"}`}
                    >
                      {step > i + 1 ? <FaCheckCircle /> : i + 1}
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        className={`flex-1 h-1 mx-2 rounded-full ${step > i + 1 ? "bg-[#10B981]" : "bg-[#E5E7EB]"}`}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mb-6">
                {steps.map((label, i) => (
                  <div
                    key={label}
                    className={`flex-1 text-center text-xs font-medium ${step === i + 1 ? "text-[#2563EB]" : "text-[#9CA3AF]"}`}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 bg-[#F9FAFB]">
              {step === 1 && (
                <div className="space-y-5 bg-white p-6 rounded-xl border border-[#E5E7EB]">
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-[#EF4444] text-xs mt-1.5">
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[#EF4444] text-xs mt-1.5">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
                  <label className="block text-sm font-semibold text-[#111827] mb-2">
                    Upload Resume *
                  </label>
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragging(true);
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${isDragging ? "border-[#2563EB] bg-[#2563EB]/5" : "border-[#E5E7EB] hover:border-[#2563EB]"}`}
                    onClick={() => document.getElementById("fileInput").click()}
                  >
                    {formData.resume ? (
                      <div className="flex items-center justify-center gap-4 text-left">
                        <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center">
                          <FaFileAlt size={20} className="text-[#2563EB]" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#111827]">
                            {formData.resume.name}
                          </p>
                          <p className="text-xs text-[#6B7280]">
                            {(formData.resume.size / 1024).toFixed(1)} KB •
                            Ready to submit
                          </p>
                        </div>
                      </div>
                    ) : (
                      <>
                        <FaCloudUploadAlt
                          size={32}
                          className="mx-auto text-[#9CA3AF] mb-3"
                        />
                        <p className="font-semibold text-[#111827] mb-1">
                          Drag & drop your resume here
                        </p>
                        <p className="text-sm text-[#6B7280]">
                          or click to browse files
                        </p>
                        <p className="text-xs text-[#9CA3AF] mt-3">
                          PDF, DOC, DOCX (Max 5MB)
                        </p>
                      </>
                    )}
                    <input
                      type="file"
                      id="fileInput"
                      className="hidden"
                      onChange={(e) => handleFileChange(e.target.files[0])}
                      accept=".pdf,.doc,.docx"
                    />
                  </div>
                  {errors.resume && (
                    <p className="text-[#EF4444] text-xs mt-2">
                      {errors.resume}
                    </p>
                  )}
                </div>
              )}

              {step === 3 && (
                <div className="space-y-5 bg-white p-6 rounded-xl border border-[#E5E7EB]">
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-2">
                      LinkedIn Profile
                    </label>
                    <div className="relative">
                      <FaLinkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/username"
                        value={formData.linkedin}
                        onChange={(e) =>
                          setFormData({ ...formData, linkedin: e.target.value })
                        }
                        className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-2">
                      GitHub Profile
                    </label>
                    <div className="relative">
                      <FaGithub className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                      <input
                        type="url"
                        placeholder="https://github.com/username"
                        value={formData.github}
                        onChange={(e) =>
                          setFormData({ ...formData, github: e.target.value })
                        }
                        className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-2">
                      Personal Website / Portfolio
                    </label>
                    <div className="relative">
                      <FaGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                      <input
                        type="url"
                        placeholder="https://yourportfolio.com"
                        value={formData.website}
                        onChange={(e) =>
                          setFormData({ ...formData, website: e.target.value })
                        }
                        className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-5 bg-white p-6 rounded-xl border border-[#E5E7EB]">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="workAuth"
                      checked={formData.workAuth}
                      onChange={(e) =>
                        setFormData({ ...formData, workAuth: e.target.checked })
                      }
                      className="mt-1 w-5 h-5 rounded border-[#E5E7EB] text-[#2563EB] focus:ring-[#2563EB] cursor-pointer"
                    />
                    <label
                      htmlFor="workAuth"
                      className="text-sm text-[#111827]"
                    >
                      Are you legally authorized to work in the country of this
                      role? *
                    </label>
                  </div>
                  {errors.workAuth && (
                    <p className="text-[#EF4444] text-xs">{errors.workAuth}</p>
                  )}
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-2">
                      Why are you interested in this role?
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us why you'd be a great fit..."
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="bg-white p-6 rounded-xl border border-[#E5E7EB]">
                  <h4 className="text-lg font-bold text-[#0F172A] mb-4">
                    Review Your Application
                  </h4>
                  <div className="space-y-3 text-sm border-t border-[#E5E7EB] pt-4">
                    <div className="flex justify-between">
                      <span className="text-[#6B7280]">Name:</span>{" "}
                      <span className="font-medium text-[#111827]">
                        {formData.fullName}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6B7280]">Email:</span>{" "}
                      <span className="font-medium text-[#111827]">
                        {formData.email}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6B7280]">Phone:</span>{" "}
                      <span className="font-medium text-[#111827]">
                        {formData.phone || "N/A"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6B7280]">Resume:</span>{" "}
                      <span className="font-medium text-[#2563EB]">
                        {formData.resume?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6B7280]">Work Authorized:</span>{" "}
                      <span className="font-medium text-[#111827]">
                        {formData.workAuth ? "Yes" : "No"}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center p-6 bg-white border-t border-[#E5E7EB]">
              <Button
                variant="ghost"
                onClick={step === 1 ? onClose : handlePrev}
              >
                {step === 1 ? "Cancel" : "Back"}
              </Button>
              {step < 5 ? (
                <Button onClick={handleNext}>
                  Continue <FaArrowRight />
                </Button>
              ) : (
                <Button onClick={handleSubmit}>
                  Submit Application <FaCheckCircle />
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
});

// ==========================================
// 8. MAIN PAGE CONTROLLER
// ==========================================
const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplication, setShowApplication] = useState(false);

  // Handles clicking a job card from the list
  const handleSelectJob = (job) => {
    setSelectedJob(job);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handles going back to the job list
  const handleBackToList = () => {
    setSelectedJob(null);
  };

  // Handles opening the application modal
  const handleInitiateApply = () => {
    setShowApplication(true);
  };

  // Handles closing the application modal
  const handleCloseApplication = () => {
    setShowApplication(false);
  };

  return (
    <main className="bg-[#FFFFFF] min-h-screen font-sans antialiased">
      {/* Conditionally render the Hero + List OR the Details Page */}
      {!selectedJob ? (
        <>
          {/* Hero Section */}
          <section className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-[#0F172A] tracking-tight mb-6 leading-tight">
                Join the team building the future.
              </h1>
              <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto mb-10 leading-relaxed">
                We're solving meaningful problems for millions of customers
                worldwide. Explore opportunities to make an impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  className="px-8 py-4 text-base"
                  onClick={() =>
                    document
                      .getElementById("positions")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Open Roles <FaArrowRight />
                </Button>
              </div>
            </div>
          </section>

          {/* Open Positions List */}
          <OpenPositions onSelectJob={handleSelectJob} />
        </>
      ) : (
        <JobDetailsPage
          job={selectedJob}
          onBack={handleBackToList}
          onApply={handleInitiateApply}
        />
      )}

      {/* Application Flow Modal (Renders on top of Details Page when triggered) */}
      {showApplication && (
        <ApplicationFlow
          selectedJob={selectedJob}
          onClose={handleCloseApplication}
        />
      )}
    </main>
  );
};

export default memo(CareersPage);
