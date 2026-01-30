import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "u9a6wmr3as.ufs.sh",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "s7d1.scene7.com",
        port: "",
        pathname: "/is/image/mcdonalds/**",
      },
    ],
  },
};

export default nextConfig;
