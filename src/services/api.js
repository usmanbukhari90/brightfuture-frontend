const API_BASE = '/api';

function getHeaders(isFormData = false) {
  const headers = {};
  if (!isFormData) headers['Content-Type'] = 'application/json';
  const token = localStorage.getItem('token');
  if (token) headers['Authorization'] = `Bearer ${token}`;
  return headers;
}

async function request(url, options = {}) {
  const res = await fetch(`${API_BASE}${url}`, options);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Something went wrong');
  return data;
}

export const api = {
  login: (username, password) =>
    request('/auth/login', {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ username, password }),
    }),

  getMe: () =>
    request('/auth/me', { headers: getHeaders() }),

  getAnnouncements: () => request('/announcements'),

  createAnnouncement: (formData) =>
    fetch(`${API_BASE}/announcements`, {
      method: 'POST',
      headers: getHeaders(true),
      body: formData,
    }).then(async (res) => {
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create announcement');
      return data;
    }),

  deleteAnnouncement: (id) =>
    request(`/announcements/${id}`, { method: 'DELETE', headers: getHeaders() }),

  getResults: (className) =>
    request(`/results${className ? `?class=${encodeURIComponent(className)}` : ''}`),

  searchResults: (rollNo, className, year) => {
    const params = new URLSearchParams({ rollNo });
    if (className) params.append('className', className);
    if (year) params.append('year', year);
    return request(`/results/search?${params.toString()}`);
  },

  uploadResultsCSV: (formData) =>
    fetch(`${API_BASE}/results/upload`, {
      method: 'POST',
      headers: getHeaders(true),
      body: formData,
    }).then(async (res) => {
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to upload results');
      return data;
    }),

    deleteResultsByExam: (examName, className, year) => {
      const params = new URLSearchParams({ examName });
      if (className) params.append('className', className);
      if (year) params.append('year', year);
      return request(`/results/exam/batch?${params.toString()}`, {
        method: 'DELETE',
        headers: getHeaders(),
      });
    },
  
    getExamBatches: () => request('/results/exams', { headers: getHeaders() }),
  
    getAttendance: (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return request(`/attendance${qs ? `?${qs}` : ''}`);
  },

  getFees: (className) =>
    request(`/fees${className ? `?class=${encodeURIComponent(className)}` : ''}`),

  getToppers: () => request('/toppers'),
};
