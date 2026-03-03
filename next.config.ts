import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      // Chỉ /api/backend/* proxy sang Java; /api/auth/* do NextAuth (app/api/auth/[...nextauth]) xử lý
      afterFiles: [
        {
          source: "/api/backend/:path*",
          destination: "http://localhost:9090/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
