import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // silence workspace root warning
  output: "standalone",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
