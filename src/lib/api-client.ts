import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "/api",
  // Lưu ý: Không để Content-Type ở đây để Axios tự xử lý linh hoạt
});

// Interceptor cho Request (ví dụ thêm Token)
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor cho Response (xử lý lỗi tập trung)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || "Đã có lỗi xảy ra";
    console.error("API Error:", message);
    return Promise.reject(error);
  }
);

export default apiClient;