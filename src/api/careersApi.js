import { API_BASE_URL, PAGE_SIZE } from "../constants/careersConstants";

class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

async function apiRequest(path, options = {}) {
  let res;
  try {
    res = await fetch(`${API_BASE_URL}${path}`, options);
  } catch (networkErr) {
    throw new ApiError(
      "Unable to reach the server. Please check your connection and try again.",
    );
  }

  let json = null;
  try {
    json = await res.json();
  } catch {
    // Non-JSON response
  }

  if (!res.ok || (json && json.success === false)) {
    throw new ApiError(
      json?.message || `Request failed with status ${res.status}`,
      res.status,
    );
  }
  return json;
}

export async function fetchJobsPage({ page = 1, limit = PAGE_SIZE } = {}) {
  const json = await apiRequest(`/jobs?page=${page}&limit=${limit}`);
  return {
    jobs: json.data?.jobs || [],
    pagination: json.data?.pagination || {
      page,
      limit,
      total: 0,
      totalPages: 1,
    },
  };
}

export async function fetchJobById(id) {
  try {
    const json = await apiRequest(`/jobs/${id}`);
    return json.data || null;
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) return null;
    throw err;
  }
}

let departmentsCache = null;
export async function fetchDepartments() {
  if (departmentsCache) return departmentsCache;
  const json = await apiRequest("/departments");
  departmentsCache = json.data || [];
  return departmentsCache;
}

export async function submitApplication(payload) {
  const json = await apiRequest("/applications", {
    method: "POST",
    body: payload,
  });
  return json.data;
}

export { ApiError };
