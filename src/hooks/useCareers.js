import { useState, useEffect, useCallback } from "react";
import {
  fetchJobsPage,
  fetchJobById,
  fetchDepartments,
} from "../api/careersApi";
import { normalizeJob } from "../utils/careersUtils";

export const useJobsData = () => {
  const [jobs, setJobs] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState(null);

  const load = useCallback(async (page = 1, append = false) => {
    append ? setIsLoadingMore(true) : setIsLoading(true);
    setError(null);
    try {
      const [{ jobs: rawJobs, pagination: pageInfo }, departments] =
        await Promise.all([
          fetchJobsPage({ page }),
          fetchDepartments().catch(() => []),
        ]);
      const normalized = rawJobs.map((j) => normalizeJob(j, departments));
      setJobs((prev) => (append ? [...prev, ...normalized] : normalized));
      setPagination(pageInfo);
    } catch (err) {
      setError(err.message || "Failed to load open positions.");
    } finally {
      setIsLoading(false);
      setIsLoadingMore(false);
    }
  }, []);

  useEffect(() => {
    load(1, false);
  }, [load]);

  const loadMore = useCallback(() => {
    if (pagination && pagination.page < pagination.totalPages)
      load(pagination.page + 1, true);
  }, [pagination, load]);

  return {
    jobs,
    isLoading,
    isLoadingMore,
    error,
    hasMore: pagination ? pagination.page < pagination.totalPages : false,
    loadMore,
    refetch: () => load(1, false),
  };
};

export const useJobDetails = (jobId) => {
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const load = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setNotFound(false);
    try {
      const [rawJob, departments] = await Promise.all([
        fetchJobById(jobId),
        fetchDepartments().catch(() => []),
      ]);
      if (!rawJob) {
        setNotFound(true);
        setJob(null);
      } else {
        setJob(normalizeJob(rawJob, departments));
      }
    } catch (err) {
      setError(err.message || "Failed to load this job.");
    } finally {
      setIsLoading(false);
    }
  }, [jobId]);

  useEffect(() => {
    load();
  }, [load]);
  return { job, isLoading, error, notFound, refetch: load };
};
