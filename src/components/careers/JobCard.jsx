// // import React, { memo } from "react";
// // import { useNavigate } from "react-router-dom";
// // import {
// //   FaArrowRight,
// //   FaMapMarkerAlt,
// //   FaBriefcase,
// //   FaClock,
// // } from "react-icons/fa";
// // import { COLORS } from "../../constants/careersConstants";
// // import { Badge } from "../common/Badge";

// // const JobCard = memo(({ job }) => {
// //   const navigate = useNavigate();
// //   return (
// //     <div
// //       onClick={() => navigate(`/careers/jobdetails/${job.id}`)}
// //       className="group bg-white border border-[#E5E7EB] rounded-2xl p-6 cursor-pointer transition-all duration-[250ms] ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-[#12324f]"
// //     >
// //       <div className="flex justify-between items-start mb-4">
// //         <div>
// //           <h3 className="text-lg font-bold text-[#111827] mb-1">{job.title}</h3>
// //           <p className="text-sm text-[#6B7280]">• {job.department}</p>
// //         </div>
// //         <FaArrowRight className="text-[#9CA3AF] group-hover:text-[#12324f] group-hover:translate-x-1 transition-all duration-[250ms]" />
// //       </div>
// //       <div className="flex flex-wrap gap-3 mb-5 text-xs text-[#6B7280]">
// //         <span className="inline-flex items-center gap-1.5">
// //           <FaMapMarkerAlt /> {job.location}
// //         </span>
// //         {job.employmentType && (
// //           <span className="inline-flex items-center gap-1.5">
// //             <FaBriefcase /> {job.employmentType}
// //           </span>
// //         )}
// //         {job.workModel && (
// //           <span className="inline-flex items-center gap-1.5">
// //             <FaClock /> {job.workModel}
// //           </span>
// //         )}
// //       </div>
// //       <div className="border-t border-[#F3F4F6] pt-4 flex items-center justify-between">
// //         <div>
// //           <p className="text-sm font-semibold text-[#111827]">
// //             {job.salaryRange || "Salary on request"}
// //           </p>
// //           {job.postedDate && (
// //             <p className="text-xs text-[#9CA3AF] mt-0.5">
// //               Posted {job.postedDate}
// //             </p>
// //           )}
// //         </div>
// //         {job.hiringStatus === "Actively Hiring" ? (
// //           <Badge color={COLORS.success}>Actively Hiring</Badge>
// //         ) : (
// //           <Badge color={COLORS.warning}>Reviewing</Badge>
// //         )}
// //       </div>
// //     </div>
// //   );
// // });
// // export default JobCard;

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
//       className="group relative flex flex-col justify-between bg-white border border-gray-200/80 rounded-2xl p-6 cursor-pointer transition-all duration-300 ease-out hover:shadow-[0_12px_40px_-12px_rgba(18,50,79,0.15)] hover:border-[#12324f]/40 hover:-translate-y-1"
//     >
//       {/* Top Section: Visual Anchor & Title */}
//       <div className="flex items-start gap-4 mb-5">
//         {/* Visual Anchor Icon */}
//         <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#12324f]/5 flex items-center justify-center border border-[#12324f]/10 transition-colors duration-300 group-hover:bg-[#12324f] group-hover:border-[#12324f]">
//           <FaBriefcase className="text-[#12324f] transition-colors duration-300 group-hover:text-white" />
//         </div>

//         <div className="flex-1">
//           <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-[#12324f] transition-colors duration-300">
//             {job.title}
//           </h3>
//           <p className="text-sm text-gray-500 font-medium mt-0.5">
//             {job.department}
//           </p>
//         </div>
//       </div>

//       {/* Middle Section: Metadata as Pills */}
//       <div className="flex flex-wrap gap-2 mb-6">
//         {job.location && (
//           <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100">
//             <FaMapMarkerAlt className="text-gray-400" /> {job.location}
//           </span>
//         )}
//         {job.employmentType && (
//           <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100">
//             <FaBriefcase className="text-gray-400" /> {job.employmentType}
//           </span>
//         )}
//         {job.workModel && (
//           <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100">
//             <FaClock className="text-gray-400" /> {job.workModel}
//           </span>
//         )}
//       </div>

//       {/* Bottom Section: Salary & Action */}
//       <div className="mt-auto border-t border-gray-100 pt-4 flex items-center justify-between">
//         <div>
//           <p className="text-sm font-bold text-gray-900">
//             {job.salaryRange || "Salary on request"}
//           </p>
//           {job.postedDate && (
//             <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
//               <span className="w-1 h-1 rounded-full bg-gray-300"></span>
//               Posted {job.postedDate}
//             </p>
//           )}
//         </div>

//         <div className="flex items-center gap-3">
//           {job.hiringStatus === "Actively Hiring" ? (
//             <Badge color={COLORS.success}>Actively Hiring</Badge>
//           ) : (
//             <Badge color={COLORS.warning}>Reviewing</Badge>
//           )}

//           {/* Animated Circular Arrow */}
//           <div className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-50 text-gray-400 border border-gray-100 transition-all duration-300 group-hover:bg-[#12324f] group-hover:text-white group-hover:border-[#12324f] group-hover:rotate-[-45deg]">
//             <FaArrowRight className="text-xs" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

// export default JobCard;

import React, { memo } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
} from "react-icons/fa";

const Meta = ({ icon: Icon, children }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-sm text-primary-900/80">
    <Icon className="text-xs text-primary-500" aria-hidden="true" />
    {children}
  </span>
);

/* Hiring status: aqua dot when actively hiring, plain otherwise */
const Status = ({ active }) => (
  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-900/80">
    <span
      className={`h-2 w-2 rounded-full ${active ? "bg-accent-600" : "bg-primary-300"}`}
      aria-hidden="true"
    />
    {active ? "Actively hiring" : "Reviewing"}
  </span>
);

/* The whole card is one link, so it works with keyboard and screen readers */
const JobCard = memo(({ job }) => (
  <Link
    to={`/careers/jobdetails/${job.id}`}
    className="group flex h-full flex-col rounded-2xl border border-primary-100 bg-white p-6 shadow-sm shadow-primary-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-900/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
  >
    <div className="mb-5 flex items-start gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-500 transition-colors group-hover:bg-primary-500 group-hover:text-white">
        <FaBriefcase aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <h3 className="text-lg font-bold leading-snug text-primary-900 group-hover:text-primary-500">
          {job.title}
        </h3>
        <p className="mt-0.5 text-sm text-primary-900/65">{job.department}</p>
      </div>
    </div>

    <div className="mb-6 flex flex-wrap gap-2">
      {job.location && <Meta icon={FaMapMarkerAlt}>{job.location}</Meta>}
      {job.employmentType && (
        <Meta icon={FaBriefcase}>{job.employmentType}</Meta>
      )}
      {job.workModel && <Meta icon={FaClock}>{job.workModel}</Meta>}
    </div>

    <div className="mt-auto flex items-end justify-between gap-4 border-t border-primary-100 pt-4">
      <div>
        <p className="text-base font-semibold text-primary-900">
          {job.salaryRange || "Salary on request"}
        </p>
        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
          <Status active={job.hiringStatus === "Actively Hiring"} />
          {job.postedDate && (
            <span className="text-sm text-primary-900/60">
              Posted {job.postedDate}
            </span>
          )}
        </div>
      </div>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary-200 text-primary-500 transition-colors group-hover:border-primary-500 group-hover:bg-primary-500 group-hover:text-white">
        <FaArrowRight className="text-sm" aria-hidden="true" />
      </span>
    </div>
  </Link>
));
JobCard.displayName = "JobCard";

export default JobCard;
