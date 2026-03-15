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

let isRedirectingToLogin = false;

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const url = error.config?.url;
    const backendMessage = error.response?.data?.message;

    // Log chi tiết hơn để debug dễ: URL, status, message backend (nếu có)
    console.error(
      "[Seller API Error]",
      status ? `status=${status}` : "no-status",
      url ? `url=${url}` : "",
      backendMessage ? `message=${backendMessage}` : ""
    );

    // Nếu token hết hạn / không hợp lệ → logout nhẹ + redirect về trang login seller
    if (
      typeof window !== "undefined" &&
      (status === 401 || status === 403) &&
      !isRedirectingToLogin
    ) {
      isRedirectingToLogin = true;

      try {
        window.localStorage.removeItem("token");
      } catch {
        // ignore
      }

      const pathname = window.location.pathname || "/";
      const search = window.location.search || "";
      const current = `${pathname}${search}`;

      const params = new URLSearchParams();
      if (!pathname.startsWith("/login") && !pathname.startsWith("/register")) {
        params.set("redirect", current);
      }
      const query = params.toString();

      window.location.href = query ? `/login?${query}` : "/login";
    }

    return Promise.reject(error);
  }
);

export default apiClient;