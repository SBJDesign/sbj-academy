import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Monorepo: dependencies may be hoisted to the repository root
  turbopack: {
    root: "..",
  },
};

export default nextConfig;
