import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
} from "react-icons/fa";
import { COLORS } from "../../constants/careersConstants";
import { Badge } from "../common/Badge";

const JobCard = memo(({ job }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/careers/jobdetails/${job.id}`)}
      className="group bg-white border border-[#E5E7EB] rounded-2xl p-6 cursor-pointer transition-all duration-[250ms] ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-[#12324f]"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-[#111827] mb-1">{job.title}</h3>
          <p className="text-sm text-[#6B7280]">
            {job.department} • {job.team}
          </p>
        </div>
        <FaArrowRight className="text-[#9CA3AF] group-hover:text-[#12324f] group-hover:translate-x-1 transition-all duration-[250ms]" />
      </div>
      <div className="flex flex-wrap gap-3 mb-5 text-xs text-[#6B7280]">
        <span className="inline-flex items-center gap-1.5">
          <FaMapMarkerAlt /> {job.location}
        </span>
        {job.employmentType && (
          <span className="inline-flex items-center gap-1.5">
            <FaBriefcase /> {job.employmentType}
          </span>
        )}
        {job.workModel && (
          <span className="inline-flex items-center gap-1.5">
            <FaClock /> {job.workModel}
          </span>
        )}
      </div>
      <div className="border-t border-[#F3F4F6] pt-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-[#111827]">
            {job.salaryRange || "Salary on request"}
          </p>
          {job.postedDate && (
            <p className="text-xs text-[#9CA3AF] mt-0.5">
              Posted {job.postedDate}
            </p>
          )}
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
export default JobCard;
