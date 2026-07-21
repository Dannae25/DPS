import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s1.cdn.autoevolution.com",
      },
    ],
  },
};

export default nextConfig;
