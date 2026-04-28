import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@the-check/shared", "@the-check/matching", "@the-check/providers"]
};

export default nextConfig;
