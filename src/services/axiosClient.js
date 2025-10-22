// src/api/axiosClient.js
import axios from "axios";
import { redirect } from "react-router-dom";
// إنشاء instance من Axios
const RAW_BASE = import.meta.env.VITE_BASE_URL;
// Always use relative /api path - will be handled by proxy in both dev (Vite) and prod (Vercel)
const BASE = "/api/v1/";
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
  (response) => {
    // نطبع الـ response للتشخيص
    console.log('API Response:', response.status, response.data);
    return response.data;
  },
  (error) => {
    // تفاصيل أكثر عن الخطأ
    if (error.response) {
      // الخادم رد بحالة خطأ
      console.error('API Error Response:', {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers
      });
      
      if (error.response.status === 401) {
        console.error("Unauthorized! Redirecting to login...");
        redirect('/login');
      }
    } else if (error.request) {
      // لم يصل الطلب للخادم
      console.error('API Request Error:', error.request);
    } else {
      // خطأ في إعداد الطلب
      console.error('API Config Error:', error.message);
    }
    
    // طباعة معلومات CORS للتشخيص
    if (error.response && error.response.headers) {
      console.log('CORS Headers:', {
        'Access-Control-Allow-Origin': error.response.headers['access-control-allow-origin'],
        'Access-Control-Allow-Credentials': error.response.headers['access-control-allow-credentials']
      });
    }
    
    return Promise.reject(error);
  }
);

export default axiosClient;
