/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "../../shared/utils",
  "../../shared/component",
]);
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
};

module.exports = withPlugins([withTM], nextConfig);
