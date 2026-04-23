import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';

      script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ""}
        https://www.googletagmanager.com
        https://www.google-analytics.com
        https://googleads.g.doubleclick.net;

      connect-src 'self'
        https://www.google-analytics.com
        https://www.googletagmanager.com
        https://www.google.com
        https://www.google.com.br
        https://googleads.g.doubleclick.net
        https://viacep.com.br
        https://website-management-api.watesistema.com.br
        https://watesistema.com.br
        https://*.watesistema.com.br;

      img-src 'self' data:
        https://www.google-analytics.com
        https://*.google.com
        https://*.google.com.br
        https://googleads.g.doubleclick.net
        https://pagead2.googlesyndication.com;

      frame-src
        https://www.googletagmanager.com
        https://td.doubleclick.net;

      style-src 'self' 'unsafe-inline';

      object-src 'none';
      base-uri 'self';
      frame-ancestors 'none';
    `.replace(/\n/g, ""),
  },
];

const nextConfig: NextConfig = {
  output: "standalone",

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