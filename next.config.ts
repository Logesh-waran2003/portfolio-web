import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'skillicons.dev',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
