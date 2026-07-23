import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.rafenlinea.com",
      },
      {
        protocol: "https",
        hostname: "www.officedepot.com.sv",

      },
       {
        protocol: "https",
        hostname: "tiendaintelmax.net",

      },
       {
        protocol: "https",
        hostname: "rossellimac.es",

      },
    ],
  },
};

export default nextConfig;
