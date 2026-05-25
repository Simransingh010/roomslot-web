/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.1.100'],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
