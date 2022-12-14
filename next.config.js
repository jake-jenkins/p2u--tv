/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["static.tvmaze.com"],
  },
  experimental: {
    largePageDataBytes: 128 * 100000,
  },
};

module.exports = nextConfig;
