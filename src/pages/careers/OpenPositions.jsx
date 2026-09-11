import React, { memo, useState, useMemo } from "react";
import { FaSearch, FaArrowRight, FaSpinner } from "react-icons/fa";
import { useJobsData } from "../../hooks/useCareers";
import { ErrorState } from "../../components/common/ErrorState";
import { Gold } from "../../components/common/SectionPrimitives";
import JobCard from "../../components/careers/JobCard";
import HeroSection from "../../components/careers/HeroSection";
import LeaderQuoteSection from "../../components/careers/LeaderQuoteSection";
import HiringProcessSection from "../../components/careers/HiringProcessSection";
import CTASection from "../../components/careers/CTASection";
import IndustriesSection from "../../components/careers/IndustriesSection";

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
    const q = search.toLowerCase();
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
    <>
      <HeroSection />
      <LeaderQuoteSection />

      <section id="positions" className="bg-[#FFFFFF] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-Black mb-6">
              Open <Gold>Positions</Gold>
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
                  className="w-full pl-11 pr-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#12324f] focus:border-transparent transition-all"
                />
              </div>
              <div className="flex flex-wrap gap-3 w-full md:w-auto md:ml-auto items-center">
                <select
                  value={deptFilter}
                  onChange={(e) => setDeptFilter(e.target.value)}
                  className="px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#12324f] cursor-pointer"
                >
                  <option value="">All Departments</option>
                  {departmentOptions.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                <select
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#12324f] cursor-pointer"
                >
                  <option value="">All Locations</option>
                  {locationOptions.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
                {(search || deptFilter || locationFilter) && (
                  <button
                    onClick={clearFilters}
                    className="text-sm font-medium text-[#6B7280] hover:text-[#12324f] transition-colors px-3 py-2"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-6 animate-pulse h-48"
                ></div>
              ))}
            </div>
          ) : error ? (
            <ErrorState message={error} onRetry={refetch} />
          ) : groupedJobs.length > 0 ? (
            <>
              <div className="space-y-12">
                {groupedJobs.map(([dept, jobsList]) => (
                  <div key={dept}>
                    <div className="flex items-center gap-3 mb-6">
                      <h3 className="text-xl font-bold text-[#12324f]">
                        {dept}
                      </h3>
                      <span className="text-sm font-medium text-[#854D0E] bg-[#FEF9C3] border border-[#EAB308] px-2.5 py-0.5 rounded-full">
                        {jobsList.length}{" "}
                        {jobsList.length === 1 ? "Role" : "Roles"}
                      </span>
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-[#EAB308] to-[#E5E7EB] ml-4 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {jobsList.map((job) => (
                        <JobCard key={job.id} job={job} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {hasMore && !search && !deptFilter && !locationFilter && (
                <div className="text-center mt-12">
                  <button
                    onClick={loadMore}
                    disabled={isLoadingMore}
                    className="inline-flex items-center gap-2 bg-[#12324f] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#2f5c86] transition-colors shadow-sm disabled:opacity-60"
                  >
                    {isLoadingMore && <FaSpinner className="animate-spin" />}
                    {isLoadingMore ? "Loading..." : "Load More Roles"}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl">
              <p className="text-[#6B7280] text-lg">
                No positions match your current filters.
              </p>
              <button
                onClick={clearFilters}
                className="mt-6 bg-[#22527e] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#2f5c86] transition-colors shadow-sm"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      <IndustriesSection />

      <HiringProcessSection />
      <CTASection />
    </>
  );
});

export default OpenPositions;
