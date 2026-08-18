import React, { memo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaArrowLeft,
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
  FaUsers,
  FaCalendarAlt,
  FaDollarSign,
  FaShieldAlt,
  FaCheckCircle,
  FaCode,
  FaSpinner,
} from "react-icons/fa";
import { useJobDetails } from "../../hooks/useCareers";
import { ErrorState } from "../../components/common/ErrorState";
import ApplicationFlow from "../../components/careers/ApplicationFlow";

const JobDetailsPage = memo(() => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { job, isLoading, error, notFound, refetch } = useJobDetails(jobId);
  const [showApplication, setShowApplication] = useState(false);

  if (isLoading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center text-[#12324f] font-medium gap-3">
        <FaSpinner className="animate-spin" /> Loading job details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <ErrorState message={error} onRetry={refetch} />
        </div>
      </div>
    );
  }

  if (notFound || !job) {
    return (
      <div className="bg-white min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-[#12324f] mb-4">
          Job Not Found
        </h2>
        <button
          onClick={() => navigate("/careers")}
          className="bg-[#12324f] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#2f5c86] transition-colors shadow-sm"
        >
          Back to all roles
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="border-b border-[#E5E7EB] sticky top-0 bg-white/95 backdrop-blur z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <button
            onClick={() => navigate("/careers")}
            className="flex items-center gap-2 text-sm font-medium text-[#12324f] hover:text-[#12324f] transition-colors"
          >
            <FaArrowLeft /> Back to all roles
          </button>
          <button
            onClick={() => setShowApplication(true)}
            className="hidden md:inline-flex items-center gap-2 bg-[#12324f] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#2f5c86] transition-colors shadow-sm"
          >
            Apply Now <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header Section */}
        <div className="mb-12 border-b border-[#E5E7EB] pb-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#FEF9C3] text-[#854D0E] border border-[#EAB308] mb-4">
            {job.department}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#12324f] tracking-tight mb-4">
            {job.title}
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#6B7280]">
            <span className="inline-flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#EAB308]" /> {job.location}
            </span>
            {job.employmentType && (
              <span className="inline-flex items-center gap-2">
                <FaBriefcase className="text-[#EAB308]" /> {job.employmentType}
              </span>
            )}
            {job.workModel && (
              <span className="inline-flex items-center gap-2">
                <FaClock className="text-[#EAB308]" /> {job.workModel}
              </span>
            )}
            <span className="inline-flex items-center gap-2">
              <FaUsers className="text-[#EAB308]" /> {job.team} Team
            </span>
            {job.postedDate && (
              <span className="inline-flex items-center gap-2">
                <FaCalendarAlt className="text-[#EAB308]" /> Posted{" "}
                {job.postedDate}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#F9FAFB] border border-[#E5E7EB] border-t-4 border-t-[#EAB308] rounded-2xl p-6 shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-4">
                  Job Details
                </h4>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#6B7280] flex items-center gap-2">
                      <FaDollarSign /> Salary
                    </span>
                    <span className="font-semibold text-[#111827] text-right">
                      {job.salaryRange || "On request"}
                    </span>
                  </div>
                  {job.experienceLevel && (
                    <div className="flex justify-between">
                      <span className="text-[#6B7280] flex items-center gap-2">
                        <FaBriefcase /> Level
                      </span>
                      <span className="font-semibold text-[#111827]">
                        {job.experienceLevel}
                      </span>
                    </div>
                  )}
                  {job.openings != null && (
                    <div className="flex justify-between">
                      <span className="text-[#6B7280] flex items-center gap-2">
                        <FaUsers /> Openings
                      </span>
                      <span className="font-semibold text-[#111827]">
                        {job.openings}
                      </span>
                    </div>
                  )}
                  {job.applicationDeadline && (
                    <div className="flex justify-between">
                      <span className="text-[#6B7280] flex items-center gap-2">
                        <FaCalendarAlt /> Apply By
                      </span>
                      <span className="font-semibold text-[#111827]">
                        {job.applicationDeadline}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-[#6B7280] flex items-center gap-2">
                      <FaShieldAlt /> Status
                    </span>
                    {job.hiringStatus === "Actively Hiring" ? (
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">
                        Actively Hiring
                      </span>
                    ) : (
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700 border border-yellow-200">
                        Reviewing
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setShowApplication(true)}
                  className="w-full mt-6 inline-flex items-center justify-center gap-2 bg-[#12324f] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#2f5c86] transition-colors shadow-sm"
                >
                  Apply Now <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10 text-[#374151] text-base leading-relaxed">
            {job.aboutTeam && (
              <section>
                <h2 className="text-2xl font-bold text-[#12324f] mb-4">
                  About the Team
                </h2>
                <p>{job.aboutTeam}</p>
              </section>
            )}
            {job.aboutRole && (
              <section>
                <h2 className="text-2xl font-bold text-[#12324f] mb-4">
                  About the Role
                </h2>
                <p>{job.aboutRole}</p>
              </section>
            )}
            {job.responsibilities.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-[#12324f] mb-4">
                  What You'll Do
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <FaCheckCircle className="text-[#12324f] mt-1 flex-shrink-0" />{" "}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {job.qualifications.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-[#12324f] mb-4">
                  What We're Looking For
                </h2>
                <ul className="space-y-3">
                  {job.qualifications.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <FaCheckCircle className="text-[#EAB308] mt-1 flex-shrink-0" />{" "}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {job.benefits.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-[#12324f] mb-4">
                  Benefits
                </h2>
                <div className="flex flex-wrap gap-2">
                  {job.benefits.map((b) => (
                    <span
                      key={b}
                      className="px-4 py-2 bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg text-sm font-medium text-[#166534]"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </section>
            )}
            <section className="pt-8 border-t border-[#E5E7EB]">
              <p className="text-sm text-[#6B7280] italic">
                We are an equal opportunity employer. We celebrate diversity and
                are committed to creating an inclusive environment for all
                employees.
              </p>
            </section>
          </div>
        </div>
      </div>

      {showApplication && (
        <ApplicationFlow
          selectedJob={job}
          onClose={() => setShowApplication(false)}
        />
      )}
    </div>
  );
});

export default JobDetailsPage;
