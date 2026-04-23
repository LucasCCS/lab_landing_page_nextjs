import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';
      script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com;
      connect-src 'self' https://www.google-analytics.com;
      img-src 'self' data: https://www.google-analytics.com;
      style-src 'self' 'unsafe-inline';
      object-src 'none';
      base-uri 'self';
      frame-ancestors 'none';
    `.replace(/\n/g, ""),
  },
];

const nextConfig: NextConfig = {
  output: 'standalone',

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

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
        { resourceQuery: /component/, use: ["@svgr/webpack"] },
        { type: "asset" },
      ],
    });
    return config;
  },
};

export default nextConfig;