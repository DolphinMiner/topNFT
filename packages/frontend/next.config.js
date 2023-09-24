// 对应PROVIDER_MODE
const contractsRegExp = {
  local: new RegExp("/contracts/"),
  goerli: new RegExp("/contracts-goerli/"),
  prod: new RegExp("/contracts-prod/"),
};

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
  webpack: (config, { webpack }) => {
    const PROVIDER_MODE = process.env.PROVIDER_MODE;
    Object.keys(contractsRegExp)
      .filter((env) => env !== PROVIDER_MODE)
      .forEach((env) => {
        config.plugins.push(
          new webpack.IgnorePlugin({ resourceRegExp: contractsRegExp[env] }),
        );
      });

    return config;
  },
};

module.exports = nextConfig;
