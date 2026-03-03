import axios from "axios";

/**
 * API client cho Seller:
 * - Luôn gọi qua /api/backend/* (Next.js rewrite → backend:9090) → tránh CORS hoàn toàn.
 * - Tự động gắn JWT từ localStorage.token nếu có.
 */
const apiClient = axios.create({
  baseURL: "/api/backend",
});

apiClient.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Log chi tiết hơn để debug dễ: URL, status, message backend (nếu có)
    const status = error.response?.status;
    const url = error.config?.url;
    const backendMessage = error.response?.data?.message;
    console.error(
      "[Seller API Error]",
      status ? `status=${status}` : "no-status",
      url ? `url=${url}` : "",
      backendMessage ? `message=${backendMessage}` : ""
    );
    return Promise.reject(error);
  }
);

export default apiClient;