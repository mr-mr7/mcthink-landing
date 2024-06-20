/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["mcthink.liara.run"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
