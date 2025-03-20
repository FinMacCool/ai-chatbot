/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  output: 'standalone', // Forces a non-Edge deployment
};

module.exports = nextConfig;
