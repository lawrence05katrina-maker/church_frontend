import axios from "axios";

// Use environment variable for API base URL, fallback to relative path for development
const baseURL = import.meta.env.VITE_API_BASE_URL || "/api";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000, // 30 second timeout for slower connections
});

// Add request interceptor for debugging
api.interceptors.request.use(
  (config) => {
    console.log(`API Request: ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`);
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Only log errors that are not 401 (unauthorized) for verify-token endpoint
    const isVerifyTokenEndpoint = error.config?.url?.includes('/admin/verify-token');
    const is401Error = error.response?.status === 401;
    
    if (!(isVerifyTokenEndpoint && is401Error)) {
      console.error('API Response Error:', error.response?.data || error.message);
    }
    
    // Handle specific error cases
    if (error.response?.status === 404) {
      console.error('API endpoint not found:', error.config?.url);
    } else if (error.response?.status >= 500) {
      console.error('Server error:', error.response?.data);
    } else if (error.code === 'ECONNABORTED') {
      console.error('Request timeout - server took too long to respond');
    } else if (!error.response) {
      console.error('Network error - check if backend is running');
    }
    
    return Promise.reject(error);
  }
);

export default api;