import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Ensuring images load during development without optimization issues
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.jocata.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'jocata.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
