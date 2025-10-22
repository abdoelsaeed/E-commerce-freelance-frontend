// src/api/axiosClient.js
import axios from "axios";
import { redirect } from "react-router-dom";
// إنشاء instance من Axios
const RAW_BASE = import.meta.env.VITE_BASE_URL;
// Prefer the dev proxy during local development so CORS doesn't block requests.
// If running in dev, use the relative path; otherwise, use the provided VITE_BASE_URL if any.
const isDev = import.meta.env.DEV;
const BASE = isDev
  ? "/api/v1/"
  : RAW_BASE
  ? RAW_BASE.replace(/\/+$/, "") + "/api/v1/"
  : "/api/v1/";
console.log("axiosClient resolved BASE:", BASE, "(DEV=", isDev, ")");
const axiosClient = axios.create({
  baseURL: BASE, // العنوان الأساسي لكل الطلبات
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // لو بتتعامل مع كوكيز أو مصادقة
});

// Interceptor للطلبات
axiosClient.interceptors.request.use(
  (config) => {
      // Get JWT from localStorage
      const jwt = localStorage.getItem("jwt");
      if (jwt) {
        config.headers.Authorization = `Bearer ${jwt}`;
        
    }
    // Log the outgoing request (method + full url) for debugging network issues
    try {
      const fullUrl = (config.baseURL || "") + (config.url || "");
      console.log("axios request:", config.method, fullUrl, config);
    } catch (e) {
      /* ignore logging errors */
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor للردود
axiosClient.interceptors.response.use(
  (response) => response.data, // نرجّع الـ data بس
  (error) => {
    if (error.response && error.response.status === 401)  {
      console.error("Unauthorized! Redirecting to login...");
      redirect('/login');
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
