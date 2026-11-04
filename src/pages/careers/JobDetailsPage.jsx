// import React, { memo, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   FaArrowRight,
//   FaArrowLeft,
//   FaMapMarkerAlt,
//   FaBriefcase,
//   FaClock,
//   FaUsers,
//   FaCalendarAlt,
//   FaDollarSign,
//   FaShieldAlt,
//   FaCheckCircle,
//   FaCode,
//   FaSpinner,
// } from "react-icons/fa";
// import { useJobDetails } from "../../hooks/useCareers";
// import { ErrorState } from "../../components/common/ErrorState";
// import ApplicationFlow from "../../components/careers/ApplicationFlow";

// const JobDetailsPage = memo(() => {
//   const { jobId } = useParams();
//   const navigate = useNavigate();
//   const { job, isLoading, error, notFound, refetch } = useJobDetails(jobId);
//   const [showApplication, setShowApplication] = useState(false);

//   if (isLoading) {
//     return (
//       <div className="bg-white min-h-screen flex items-center justify-center text-[#12324f] font-medium gap-3">
//         <FaSpinner className="animate-spin" /> Loading job details...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="bg-white min-h-screen flex items-center justify-center p-4">
//         <div className="max-w-md w-full">
//           <ErrorState message={error} onRetry={refetch} />
//         </div>
//       </div>
//     );
//   }

//   if (notFound || !job) {
//     return (
//       <div className="bg-white min-h-screen flex flex-col items-center justify-center p-4">
//         <h2 className="text-2xl font-bold text-[#12324f] mb-4">
//           Job Not Found
//         </h2>
//         <button
//           onClick={() => navigate("/careers")}
//           className="bg-[#12324f] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#2f5c86] transition-colors shadow-sm"
//         >
//           Back to all roles
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white min-h-screen">
//       <div className="border-b border-[#E5E7EB] sticky top-0 bg-white/95 backdrop-blur z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//           <button
//             onClick={() => navigate("/careers")}
//             className="flex items-center gap-2 text-sm font-medium text-[#12324f] hover:text-[#12324f] transition-colors"
//           >
//             <FaArrowLeft /> Back to all roles
//           </button>
//           <button
//             onClick={() => setShowApplication(true)}
//             className="hidden md:inline-flex items-center gap-2 bg-[#12324f] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#2f5c86] transition-colors shadow-sm"
//           >
//             Apply Now <FaArrowRight />
//           </button>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-6">
//         {/* Header Section */}
//         <div className="mb-12 border-b border-[#E5E7EB] pb-8">
//           <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF] text-[#12324f] border border-[#12324f] mb-4">
//             {job.department}
//           </span>
//           <h1 className="text-4xl md:text-5xl font-bold text-[#12324f] tracking-tight mb-4">
//             {job.title}
//           </h1>
//           <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#6B7280]">
//             <span className="inline-flex items-center gap-2">
//               <FaMapMarkerAlt className="text-[#12324f]" /> {job.location}
//             </span>
//             {job.employmentType && (
//               <span className="inline-flex items-center gap-2">
//                 <FaBriefcase className="text-[#12324f]" /> {job.employmentType}
//               </span>
//             )}
//             {job.workModel && (
//               <span className="inline-flex items-center gap-2">
//                 <FaClock className="text-[#12324f]" /> {job.workModel}
//               </span>
//             )}
//             <span className="inline-flex items-center gap-2">
//               <FaUsers className="text-[#12324f]" /> {job.team} Team
//             </span>
//             {job.postedDate && (
//               <span className="inline-flex items-center gap-2">
//                 <FaCalendarAlt className="text-[#12324f]" /> Posted{" "}
//                 {job.postedDate}
//               </span>
//             )}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="sticky top-24 space-y-6">
//               <div className="bg-[#F9FAFB] border border-[#E5E7EB] border-t-4 border-t-[#12324f] rounded-2xl p-6 shadow-sm">
//                 <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-4">
//                   Job Details
//                 </h4>
//                 <div className="space-y-4 text-sm">
//                   <div className="flex justify-between">
//                     <span className="text-[#6B7280] flex items-center gap-2">
//                       <FaDollarSign /> Salary
//                     </span>
//                     <span className="font-semibold text-[#111827] text-right">
//                       {job.salaryRange || "On request"}
//                     </span>
//                   </div>
//                   {job.experienceLevel && (
//                     <div className="flex justify-between">
//                       <span className="text-[#6B7280] flex items-center gap-2">
//                         <FaBriefcase /> Level
//                       </span>
//                       <span className="font-semibold text-[#111827]">
//                         {job.experienceLevel}
//                       </span>
//                     </div>
//                   )}
//                   {job.openings != null && (
//                     <div className="flex justify-between">
//                       <span className="text-[#6B7280] flex items-center gap-2">
//                         <FaUsers /> Openings
//                       </span>
//                       <span className="font-semibold text-[#111827]">
//                         {job.openings}
//                       </span>
//                     </div>
//                   )}
//                   {job.applicationDeadline && (
//                     <div className="flex justify-between">
//                       <span className="text-[#6B7280] flex items-center gap-2">
//                         <FaCalendarAlt /> Apply By
//                       </span>
//                       <span className="font-semibold text-[#111827]">
//                         {job.applicationDeadline}
//                       </span>
//                     </div>
//                   )}
//                   <div className="flex justify-between items-center">
//                     <span className="text-[#6B7280] flex items-center gap-2">
//                       <FaShieldAlt /> Status
//                     </span>
//                     {job.hiringStatus === "Actively Hiring" ? (
//                       <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-900 border border-primary-200">
//                         Actively Hiring
//                       </span>
//                     ) : (
//                       <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-900 border border-primary-200">
//                         Reviewing
//                       </span>
//                     )}
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => setShowApplication(true)}
//                   className="w-full mt-6 inline-flex items-center justify-center gap-2 bg-[#12324f] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#2f5c86] transition-colors shadow-sm"
//                 >
//                   Apply Now <FaArrowRight />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-10 text-[#374151] text-base leading-relaxed">
//             {job.aboutTeam && (
//               <section>
//                 <h2 className="text-2xl font-bold text-[#12324f] mb-4">
//                   About the Team
//                 </h2>
//                 <p>{job.aboutTeam}</p>
//               </section>
//             )}
//             {job.aboutRole && (
//               <section>
//                 <h2 className="text-2xl font-bold text-[#12324f] mb-4">
//                   About the Role
//                 </h2>
//                 <p>{job.aboutRole}</p>
//               </section>
//             )}
//             {job.responsibilities.length > 0 && (
//               <section>
//                 <h2 className="text-2xl font-bold text-[#12324f] mb-4">
//                   What You'll Do
//                 </h2>
//                 <ul className="space-y-3">
//                   {job.responsibilities.map((item, i) => (
//                     <li key={i} className="flex gap-3">
//                       <FaCheckCircle className="text-[#12324f] mt-1 flex-shrink-0" />{" "}
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </section>
//             )}
//             {job.qualifications.length > 0 && (
//               <section>
//                 <h2 className="text-2xl font-bold text-[#12324f] mb-4">
//                   What We're Looking For
//                 </h2>
//                 <ul className="space-y-3">
//                   {job.qualifications.map((item, i) => (
//                     <li key={i} className="flex gap-3">
//                       <FaCheckCircle className="text-[#12324f] mt-1 flex-shrink-0" />{" "}
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </section>
//             )}
//             {job.benefits.length > 0 && (
//               <section>
//                 <h2 className="text-2xl font-bold text-[#12324f] mb-4">
//                   Benefits
//                 </h2>
//                 <div className="flex flex-wrap gap-2">
//                   {job.benefits.map((b) => (
//                     <span
//                       key={b}
//                       className="px-4 py-2 bg-[#FFF] border border-primary-500 rounded-lg text-sm font-medium text-primary-900"
//                     >
//                       {b}
//                     </span>
//                   ))}
//                 </div>
//               </section>
//             )}
//             <section className="pt-8 border-t border-[#E5E7EB]">
//               <p className="text-sm text-[#6B7280] italic">
//                 We are an equal opportunity employer. We celebrate diversity and
//                 are committed to creating an inclusive environment for all
//                 employees.
//               </p>
//             </section>
//           </div>
//         </div>
//       </div>

//       {showApplication && (
//         <ApplicationFlow
//           selectedJob={job}
//           onClose={() => setShowApplication(false)}
//         />
//       )}
//     </div>
//   );
// });

// export default JobDetailsPage;

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
  FaSpinner,
} from "react-icons/fa";
import { useJobDetails } from "../../hooks/useCareers";
import { ErrorState } from "../../components/common/ErrorState";
import Container from "../../components/ui/Container";
import ApplicationFlow from "../../components/careers/ApplicationFlow";

/*
  The action bar sticks just below the site header (72px mobile, 80px desktop),
  and the sidebar sticks below the action bar.
*/

const primaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-primary-500 px-5 py-2.5 text-base font-semibold text-white transition-colors hover:bg-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2";

const DetailRow = ({ icon: Icon, label, children }) => (
  <div className="flex items-start justify-between gap-4 border-b border-primary-100 py-3 last:border-b-0">
    <dt className="flex items-center gap-2 text-primary-900/65">
      <Icon className="text-primary-500" aria-hidden="true" />
      {label}
    </dt>
    <dd className="text-right font-semibold text-primary-900">{children}</dd>
  </div>
);

const ContentSection = ({ title, children }) => (
  <section>
    <h2 className="mb-4 text-2xl font-bold text-primary-900">{title}</h2>
    {children}
  </section>
);

const CheckList = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3">
        <FaCheckCircle
          className="mt-1.5 shrink-0 text-primary-500"
          aria-hidden="true"
        />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const JobDetailsPage = memo(() => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { job, isLoading, error, notFound, refetch } = useJobDetails(jobId);
  const [showApplication, setShowApplication] = useState(false);

  if (isLoading) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center gap-3 bg-white text-base font-medium text-primary-900">
        <FaSpinner
          className="animate-spin text-primary-500"
          aria-hidden="true"
        />
        Loading job details…
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-white p-4">
        <div className="w-full max-w-md">
          <ErrorState message={error} onRetry={refetch} />
        </div>
      </main>
    );
  }

  if (notFound || !job) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center bg-white p-4 text-center">
        <h1 className="mb-2 text-2xl font-bold text-primary-900">
          This role isn't available
        </h1>
        <p className="mb-6 text-base text-primary-900/70">
          It may have been filled or removed. Browse our other open roles.
        </p>
        <button
          type="button"
          onClick={() => navigate("/careers")}
          className={primaryBtn}
        >
          See all open roles
        </button>
      </main>
    );
  }

  const responsibilities = job.responsibilities || [];
  const qualifications = job.qualifications || [];
  const benefits = job.benefits || [];
  const actively = job.hiringStatus === "Actively Hiring";

  return (
    <main role="main" className="bg-white">
      {/* Action bar */}
      <div className="sticky top-18 z-40 border-b border-primary-100 bg-white lg:top-20">
        <Container className="flex items-center justify-between py-3">
          <button
            type="button"
            onClick={() => navigate("/careers")}
            className="inline-flex items-center gap-2 rounded-lg py-2 text-base font-semibold text-primary-500 hover:text-primary-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          >
            <FaArrowLeft aria-hidden="true" /> All roles
          </button>
          <button
            type="button"
            onClick={() => setShowApplication(true)}
            className={primaryBtn}
          >
            Apply now <FaArrowRight aria-hidden="true" />
          </button>
        </Container>
      </div>

      {/* Header */}
      <div className="border-b border-primary-100 bg-primary-50">
        <Container className="py-10 lg:py-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-500">
            {job.department}
          </p>
          <h1 className="mb-5 text-3xl font-bold tracking-tight text-primary-900 md:text-4xl lg:text-5xl">
            {job.title}
          </h1>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-base text-primary-900/75">
            {[
              [FaMapMarkerAlt, job.location],
              [FaBriefcase, job.employmentType],
              [FaClock, job.workModel],
              [FaUsers, job.team && `${job.team} Team`],
              [FaCalendarAlt, job.postedDate && `Posted ${job.postedDate}`],
            ]
              .filter(([, v]) => v)
              .map(([Icon, v]) => (
                <li key={v} className="inline-flex items-center gap-2">
                  <Icon className="text-primary-500" aria-hidden="true" />
                  {v}
                </li>
              ))}
          </ul>
        </Container>
      </div>

      <Container className="py-10 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          {/* Sidebar */}
          <aside className="lg:order-2">
            <div className="rounded-2xl border border-primary-100 bg-white shadow-sm shadow-primary-900/5 lg:sticky lg:top-40">
              <span
                className="block h-1 rounded-t-2xl bg-primary-500"
                aria-hidden="true"
              />
              <div className="p-6">
                <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-500">
                  Job Details
                </h2>
                <dl className="text-base">
                  <DetailRow icon={FaDollarSign} label="Salary">
                    {job.salaryRange || "On request"}
                  </DetailRow>
                  {job.experienceLevel && (
                    <DetailRow icon={FaBriefcase} label="Level">
                      {job.experienceLevel}
                    </DetailRow>
                  )}
                  {job.openings != null && (
                    <DetailRow icon={FaUsers} label="Openings">
                      {job.openings}
                    </DetailRow>
                  )}
                  {job.applicationDeadline && (
                    <DetailRow icon={FaCalendarAlt} label="Apply by">
                      {job.applicationDeadline}
                    </DetailRow>
                  )}
                  <DetailRow icon={FaShieldAlt} label="Status">
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className={`h-2 w-2 rounded-full ${actively ? "bg-accent-600" : "bg-primary-300"}`}
                        aria-hidden="true"
                      />
                      {actively ? "Actively hiring" : "Reviewing"}
                    </span>
                  </DetailRow>
                </dl>
                <button
                  type="button"
                  onClick={() => setShowApplication(true)}
                  className={`${primaryBtn} mt-6 w-full py-3`}
                >
                  Apply now <FaArrowRight aria-hidden="true" />
                </button>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="space-y-10 text-base leading-relaxed text-primary-900/80 lg:order-1 lg:col-span-2">
            {job.aboutTeam && (
              <ContentSection title="About the Team">
                <p>{job.aboutTeam}</p>
              </ContentSection>
            )}
            {job.aboutRole && (
              <ContentSection title="About the Role">
                <p>{job.aboutRole}</p>
              </ContentSection>
            )}
            {responsibilities.length > 0 && (
              <ContentSection title="What You'll Do">
                <CheckList items={responsibilities} />
              </ContentSection>
            )}
            {qualifications.length > 0 && (
              <ContentSection title="What We're Looking For">
                <CheckList items={qualifications} />
              </ContentSection>
            )}
            {benefits.length > 0 && (
              <ContentSection title="Benefits">
                <ul className="flex flex-wrap gap-2">
                  {benefits.map((b) => (
                    <li
                      key={b}
                      className="rounded-lg border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-medium text-primary-900"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </ContentSection>
            )}
            <p className="border-t border-primary-100 pt-8 text-sm text-primary-900/65">
              We are an equal opportunity employer. We celebrate diversity and
              are committed to creating an inclusive environment for all
              employees.
            </p>
          </div>
        </div>
      </Container>

      {showApplication && (
        <ApplicationFlow
          selectedJob={job}
          onClose={() => setShowApplication(false)}
        />
      )}
    </main>
  );
});
JobDetailsPage.displayName = "JobDetailsPage";

export default JobDetailsPage;
