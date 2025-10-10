import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ...existing config...
  images: {
    // ...existing images config...
    remotePatterns: [
      // ...existing patterns...
      { protocol: "https", hostname: "media.licdn.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "assets.aceternity.com" },
    ],
  },
};

export default nextConfig;
