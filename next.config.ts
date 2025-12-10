import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      oneOf: [
        { resourceQuery: /component/, use: ["@svgr/webpack"] }, // <— componente
        { type: "asset" },                                      // <— URL p/ <Image/>
      ],
    });
    return config;
  },
};

export default nextConfig;
