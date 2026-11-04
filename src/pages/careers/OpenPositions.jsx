// import React, { memo, useState, useMemo } from "react";
// import { FaSearch, FaArrowRight, FaSpinner } from "react-icons/fa";
// import { useJobsData } from "../../hooks/useCareers";
// import { ErrorState } from "../../components/common/ErrorState";
// import { Gold } from "../../components/common/SectionPrimitives";
// import JobCard from "../../components/careers/JobCard";
// import HeroSection from "../../components/careers/HeroSection";
// import LeaderQuoteSection from "../../components/careers/LeaderQuoteSection";
// import HiringProcessSection from "../../components/careers/HiringProcessSection";
// import CTASection from "../../components/careers/CTASection";
// import IndustriesSection from "../../components/careers/IndustriesSection";

// const OpenPositions = memo(() => {
//   const { jobs, isLoading, isLoadingMore, error, hasMore, loadMore, refetch } =
//     useJobsData();
//   const [search, setSearch] = useState("");
//   const [deptFilter, setDeptFilter] = useState("");
//   const [locationFilter, setLocationFilter] = useState("");

//   const departmentOptions = useMemo(
//     () => Array.from(new Set(jobs.map((j) => j.department))).sort(),
//     [jobs],
//   );
//   const locationOptions = useMemo(
//     () => Array.from(new Set(jobs.map((j) => j.location))).sort(),
//     [jobs],
//   );

//   const filteredJobs = useMemo(() => {
//     const q = search.toLowerCase();
//     return jobs.filter(
//       (job) =>
//         (job.title.toLowerCase().includes(q) ||
//           job.department.toLowerCase().includes(q)) &&
//         (deptFilter ? job.department === deptFilter : true) &&
//         (locationFilter ? job.location === locationFilter : true),
//     );
//   }, [jobs, search, deptFilter, locationFilter]);

//   const groupedJobs = useMemo(() => {
//     const groups = {};
//     filteredJobs.forEach((job) => {
//       if (!groups[job.department]) groups[job.department] = [];
//       groups[job.department].push(job);
//     });
//     return Object.entries(groups);
//   }, [filteredJobs]);

//   const clearFilters = () => {
//     setSearch("");
//     setDeptFilter("");
//     setLocationFilter("");
//   };

//   return (
//     <>
//       <HeroSection />
//       <LeaderQuoteSection />

//       <section id="positions" className="bg-[#FFFFFF]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-Black mb-6">
//               Open Positions
//             </h2>
//             <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
//               Explore roles across our teams. We're looking for passionate
//               individuals ready to make a global impact.
//             </p>
//           </div>

//           {/* Search & Filter Bar */}
//           <div className="bg-white border border-[#E5E7EB] rounded-2xl shadow-sm p-4 mb-12">
//             <div className="flex flex-col md:flex-row gap-4 items-center">
//               <div className="relative w-full md:w-1/3">
//                 <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
//                 <input
//                   type="text"
//                   placeholder="Search jobs..."
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   className="w-full pl-11 pr-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
//                 />
//               </div>
//               <div className="flex flex-wrap gap-3 w-full md:w-auto md:ml-auto items-center">
//                 <select
//                   value={deptFilter}
//                   onChange={(e) => setDeptFilter(e.target.value)}
//                   className="px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#12324f] cursor-pointer"
//                 >
//                   <option value="">All Departments</option>
//                   {departmentOptions.map((d) => (
//                     <option key={d} value={d}>
//                       {d}
//                     </option>
//                   ))}
//                 </select>
//                 <select
//                   value={locationFilter}
//                   onChange={(e) => setLocationFilter(e.target.value)}
//                   className="px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#12324f] cursor-pointer"
//                 >
//                   <option value="">All Locations</option>
//                   {locationOptions.map((l) => (
//                     <option key={l} value={l}>
//                       {l}
//                     </option>
//                   ))}
//                 </select>
//                 {(search || deptFilter || locationFilter) && (
//                   <button
//                     onClick={clearFilters}
//                     className="text-sm font-medium text-[#6B7280] hover:text-[#12324f] transition-colors px-3 py-2"
//                   >
//                     Clear
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>

//           {isLoading ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[1, 2, 3, 4, 5, 6].map((i) => (
//                 <div
//                   key={i}
//                   className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-6 animate-pulse h-48"
//                 ></div>
//               ))}
//             </div>
//           ) : error ? (
//             <ErrorState message={error} onRetry={refetch} />
//           ) : groupedJobs.length > 0 ? (
//             <>
//               <div className="space-y-12">
//                 {groupedJobs.map(([dept, jobsList]) => (
//                   <div key={dept}>
//                     <div className="flex items-center gap-3 mb-6">
//                       <h3 className="text-xl font-bold text-[#12324f]">
//                         {dept}
//                       </h3>
//                       <span className="text-sm font-medium text-[#FFF] bg-[#12324f] px-2.5 py-0.5 rounded-full">
//                         {jobsList.length}{" "}
//                         {jobsList.length === 1 ? "Role" : "Roles"}
//                       </span>
//                       <div className="flex-1 h-0.5 bg-[#12324f] ml-4 rounded-full"></div>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                       {jobsList.map((job) => (
//                         <JobCard key={job.id} job={job} />
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               {hasMore && !search && !deptFilter && !locationFilter && (
//                 <div className="text-center mt-12">
//                   <button
//                     onClick={loadMore}
//                     disabled={isLoadingMore}
//                     className="inline-flex items-center gap-2 bg-[#12324f] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#2f5c86] transition-colors shadow-sm disabled:opacity-60"
//                   >
//                     {isLoadingMore && <FaSpinner className="animate-spin" />}
//                     {isLoadingMore ? "Loading..." : "Load More Roles"}
//                   </button>
//                 </div>
//               )}
//             </>
//           ) : (
//             <div className="text-center py-20 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl">
//               <p className="text-[#6B7280] text-lg">
//                 No positions match your current filters.
//               </p>
//               <button
//                 onClick={clearFilters}
//                 className="mt-6 bg-[#22527e] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#2f5c86] transition-colors shadow-sm"
//               >
//                 Clear all filters
//               </button>
//             </div>
//           )}
//         </div>
//       </section>

//       <IndustriesSection />

//       <HiringProcessSection />
//       <CTASection />
//     </>
//   );
// });

// export default OpenPositions;

import React, { memo, useState, useMemo } from "react";
import { FaSearch, FaSpinner, FaChevronDown } from "react-icons/fa";
import { useJobsData } from "../../hooks/useCareers";
import { ErrorState } from "../../components/common/ErrorState";
import Container from "../../components/ui/Container";
import JobCard from "../../components/careers/JobCard";
import HeroSection from "../../components/careers/HeroSection";
import LeaderQuoteSection from "../../components/careers/LeaderQuoteSection";
import HiringProcessSection from "../../components/careers/HiringProcessSection";
import CTASection from "../../components/careers/CTASection";
import IndustriesSection from "../../components/careers/IndustriesSection";

const fieldClass =
  "w-full rounded-lg border border-primary-200 bg-white py-3 text-base text-primary-900 placeholder:text-primary-900/40 transition-colors hover:border-primary-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20";

/* Native select with a visible arrow */
const FilterSelect = ({ label, value, onChange, children }) => (
  <div className="relative w-full sm:w-56">
    <select
      aria-label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`${fieldClass} cursor-pointer appearance-none pl-4 pr-10`}
    >
      {children}
    </select>
    <FaChevronDown
      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-primary-900/50"
      aria-hidden="true"
    />
  </div>
);

const OpenPositions = memo(() => {
  const { jobs, isLoading, isLoadingMore, error, hasMore, loadMore, refetch } =
    useJobsData();
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const departmentOptions = useMemo(
    () => Array.from(new Set(jobs.map((j) => j.department))).sort(),
    [jobs],
  );
  const locationOptions = useMemo(
    () => Array.from(new Set(jobs.map((j) => j.location))).sort(),
    [jobs],
  );

  const filteredJobs = useMemo(() => {
    const q = search.trim().toLowerCase();
    return jobs.filter(
      (job) =>
        (job.title.toLowerCase().includes(q) ||
          job.department.toLowerCase().includes(q)) &&
        (deptFilter ? job.department === deptFilter : true) &&
        (locationFilter ? job.location === locationFilter : true),
    );
  }, [jobs, search, deptFilter, locationFilter]);

  const groupedJobs = useMemo(() => {
    const groups = {};
    filteredJobs.forEach((job) => {
      (groups[job.department] ||= []).push(job);
    });
    return Object.entries(groups);
  }, [filteredJobs]);

  const filtering = Boolean(search || deptFilter || locationFilter);
  const clearFilters = () => {
    setSearch("");
    setDeptFilter("");
    setLocationFilter("");
  };

  return (
    <main role="main">
      <HeroSection />
      <LeaderQuoteSection />

      <section
        id="positions"
        className="scroll-mt-24 bg-white py-10 lg:py-14"
        aria-labelledby="positions-title"
      >
        <Container>
          <div className="mb-8 max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-500">
              Careers
            </p>
            <h2
              id="positions-title"
              className="text-3xl font-bold leading-tight text-primary-900 lg:text-4xl"
            >
              Open Positions
            </h2>
            <p className="mt-3 text-lg text-primary-900/70">
              Explore roles across our teams. We're looking for passionate
              people ready to make a global impact.
            </p>
          </div>

          {/* Search and filters */}
          <div
            role="search"
            className="mb-10 flex flex-col gap-3 rounded-2xl border border-primary-100 bg-primary-50 p-4 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <div className="relative w-full sm:min-w-[260px] sm:flex-1">
              <FaSearch
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-primary-900/40"
                aria-hidden="true"
              />
              <input
                type="search"
                aria-label="Search jobs by title or department"
                placeholder="Search by title or department"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`${fieldClass} pl-11 pr-4`}
              />
            </div>
            <FilterSelect
              label="Filter by department"
              value={deptFilter}
              onChange={setDeptFilter}
            >
              <option value="">All departments</option>
              {departmentOptions.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </FilterSelect>
            <FilterSelect
              label="Filter by location"
              value={locationFilter}
              onChange={setLocationFilter}
            >
              <option value="">All locations</option>
              {locationOptions.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </FilterSelect>
            {filtering && (
              <button
                type="button"
                onClick={clearFilters}
                className="rounded-lg px-3 py-2 text-base font-semibold text-primary-500 hover:text-primary-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* Results */}
          {isLoading ? (
            <div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              aria-busy="true"
              aria-label="Loading open positions"
            >
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-56 animate-pulse rounded-2xl border border-primary-100 bg-primary-50"
                />
              ))}
            </div>
          ) : error ? (
            <ErrorState message={error} onRetry={refetch} />
          ) : groupedJobs.length > 0 ? (
            <>
              <p
                className="mb-6 text-sm text-primary-900/60"
                aria-live="polite"
              >
                Showing {filteredJobs.length}{" "}
                {filteredJobs.length === 1 ? "role" : "roles"}
              </p>
              <div className="space-y-12">
                {groupedJobs.map(([dept, list]) => (
                  <div key={dept}>
                    <div className="mb-6 flex items-center gap-4">
                      <h3 className="text-xl font-bold text-primary-900">
                        {dept}
                      </h3>
                      <span className="rounded-full bg-primary-900 px-2.5 py-0.5 text-sm font-medium text-white">
                        {list.length} {list.length === 1 ? "role" : "roles"}
                      </span>
                      <span
                        className="h-px flex-1 bg-primary-100"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {list.map((job) => (
                        <JobCard key={job.id} job={job} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {hasMore && !filtering && (
                <div className="mt-10 text-center">
                  <button
                    type="button"
                    onClick={loadMore}
                    disabled={isLoadingMore}
                    className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isLoadingMore && (
                      <FaSpinner className="animate-spin" aria-hidden="true" />
                    )}
                    {isLoadingMore ? "Loading…" : "Load more roles"}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="rounded-2xl border border-primary-100 bg-primary-50 px-6 py-16 text-center">
              <p className="text-lg font-semibold text-primary-900">
                No roles match your filters
              </p>
              <p className="mt-2 text-base text-primary-900/70">
                Try a different search, or clear the filters to see every open
                role.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 rounded-lg bg-primary-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                Clear filters
              </button>
            </div>
          )}
        </Container>
      </section>

      <IndustriesSection />
      <HiringProcessSection />
      <CTASection />
    </main>
  );
});
OpenPositions.displayName = "OpenPositions";

export default OpenPositions;
