import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow HMR / dev assets when opening the app via LAN IP (e.g. http://192.168.1.105:3000)
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "172.*.*.*"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
