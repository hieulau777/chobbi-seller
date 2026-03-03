/**
 * Seller chỉ đăng nhập bằng Google (NextAuth + JWT từ POST /api/backend/auth/google/seller).
 * logout() dùng khi signOut để xóa token backend trong localStorage.
 */
export function logout(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }
}
