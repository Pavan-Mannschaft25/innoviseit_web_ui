// import React, { memo } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaMapMarkerAlt,
//   FaBriefcase,
//   FaClock,
// } from "react-icons/fa";
// import { COLORS } from "../../constants/careersConstants";
// import { Badge } from "../common/Badge";

// const JobCard = memo(({ job }) => {
//   const navigate = useNavigate();
//   return (
//     <div
//       onClick={() => navigate(`/careers/jobdetails/${job.id}`)}
//       className="group bg-white border border-[#E5E7EB] rounded-2xl p-6 cursor-pointer transition-all duration-[250ms] ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-[#12324f]"
//     >
//       <div className="flex justify-between items-start mb-4">
//         <div>
//           <h3 className="text-lg font-bold text-[#111827] mb-1">{job.title}</h3>
//           <p className="text-sm text-[#6B7280]">• {job.department}</p>
//         </div>
//         <FaArrowRight className="text-[#9CA3AF] group-hover:text-[#12324f] group-hover:translate-x-1 transition-all duration-[250ms]" />
//       </div>
//       <div className="flex flex-wrap gap-3 mb-5 text-xs text-[#6B7280]">
//         <span className="inline-flex items-center gap-1.5">
//           <FaMapMarkerAlt /> {job.location}
//         </span>
//         {job.employmentType && (
//           <span className="inline-flex items-center gap-1.5">
//             <FaBriefcase /> {job.employmentType}
//           </span>
//         )}
//         {job.workModel && (
//           <span className="inline-flex items-center gap-1.5">
//             <FaClock /> {job.workModel}
//           </span>
//         )}
//       </div>
//       <div className="border-t border-[#F3F4F6] pt-4 flex items-center justify-between">
//         <div>
//           <p className="text-sm font-semibold text-[#111827]">
//             {job.salaryRange || "Salary on request"}
//           </p>
//           {job.postedDate && (
//             <p className="text-xs text-[#9CA3AF] mt-0.5">
//               Posted {job.postedDate}
//             </p>
//           )}
//         </div>
//         {job.hiringStatus === "Actively Hiring" ? (
//           <Badge color={COLORS.success}>Actively Hiring</Badge>
//         ) : (
//           <Badge color={COLORS.warning}>Reviewing</Badge>
//         )}
//       </div>
//     </div>
//   );
// });
// export default JobCard;

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
      className="group relative flex flex-col justify-between bg-white border border-gray-200/80 rounded-2xl p-6 cursor-pointer transition-all duration-300 ease-out hover:shadow-[0_12px_40px_-12px_rgba(18,50,79,0.15)] hover:border-[#12324f]/40 hover:-translate-y-1"
    >
      {/* Top Section: Visual Anchor & Title */}
      <div className="flex items-start gap-4 mb-5">
        {/* Visual Anchor Icon */}
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#12324f]/5 flex items-center justify-center border border-[#12324f]/10 transition-colors duration-300 group-hover:bg-[#12324f] group-hover:border-[#12324f]">
          <FaBriefcase className="text-[#12324f] transition-colors duration-300 group-hover:text-white" />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-[#12324f] transition-colors duration-300">
            {job.title}
          </h3>
          <p className="text-sm text-gray-500 font-medium mt-0.5">
            {job.department}
          </p>
        </div>
      </div>

      {/* Middle Section: Metadata as Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {job.location && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100">
            <FaMapMarkerAlt className="text-gray-400" /> {job.location}
          </span>
        )}
        {job.employmentType && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100">
            <FaBriefcase className="text-gray-400" /> {job.employmentType}
          </span>
        )}
        {job.workModel && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100">
            <FaClock className="text-gray-400" /> {job.workModel}
          </span>
        )}
      </div>

      {/* Bottom Section: Salary & Action */}
      <div className="mt-auto border-t border-gray-100 pt-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-gray-900">
            {job.salaryRange || "Salary on request"}
          </p>
          {job.postedDate && (
            <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              Posted {job.postedDate}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3">
          {job.hiringStatus === "Actively Hiring" ? (
            <Badge color={COLORS.success}>Actively Hiring</Badge>
          ) : (
            <Badge color={COLORS.warning}>Reviewing</Badge>
          )}

          {/* Animated Circular Arrow */}
          <div className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-50 text-gray-400 border border-gray-100 transition-all duration-300 group-hover:bg-[#12324f] group-hover:text-white group-hover:border-[#12324f] group-hover:rotate-[-45deg]">
            <FaArrowRight className="text-xs" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default JobCard;
