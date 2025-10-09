import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'console.eleveight.ai',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
