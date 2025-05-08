import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['i.ytimg.com'],
  },
};

export default nextConfig;
