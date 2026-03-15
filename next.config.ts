import type { NextConfig } from "next";

const backendUrl = process.env.BACKEND_URL ?? "http://localhost:9090";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      afterFiles: [
        {
          source: "/api/backend/:path*",
          destination: `${backendUrl}/:path*`,
        },
      ],
    };
  },
};

export default nextConfig;
