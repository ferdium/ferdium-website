const path = require("path");
const isProd = process.env.NODE_ENV === "production"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.modules.push(path.resolve("./"));

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  assetPrefix: isProd ? "/website/" : "",
};

module.exports = nextConfig;
