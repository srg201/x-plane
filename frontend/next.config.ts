// import autoCert from "anchor-pki/auto-cert/integrations/next";
import type { NextConfig } from "next";

// const withAutoCert = autoCert({
//   enabledEnv: ".development",
// });

const nextConfig: NextConfig = {
  reactStrictMode: false,
  webpack(config) {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
