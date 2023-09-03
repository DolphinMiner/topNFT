/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
  reactStrictMode: true,
  env: {
    PROVIDER_MODE: process.env.PROVIDER_MODE,
    ALCHEMY_PROJECT_KEY: process.env.ALCHEMY_PROJECT_KEY,
  },
};

module.exports = nextConfig;
