/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eu-central-1-shared-euc1-02.graphassets.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  i18n: {
    locales: ["en", "it"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
