import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  async rewrites() {
    return [
      {
        source: '/api/bot/:path*',
        destination: 'http://217.154.94.16:9544/:path*',
      },
    ]
  },
};

export default nextConfig;
