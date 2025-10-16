// api.js
import axios from "axios";

// Create an axios instance with common settings
const API = axios.create({
  timeout: 4000, // 4 seconds timeout
  baseURL: "/api", // no need to provide full URL in API calls
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  const NO_AUTH_URLS = ["/auth", "/users"]; // endpoints that don't need token for POST (login/register)

  // Skip token only for login/register POST requests
  if (!(NO_AUTH_URLS.some(url => config.url?.toLowerCase().startsWith(url)) && config.method === "post")) {
    if (token) {
      config.headers["x-auth-token"] = token; // add token to all other requests
    }
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

export default API;
