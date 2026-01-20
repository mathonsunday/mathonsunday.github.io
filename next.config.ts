import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  dir: "./src",
};

export default nextConfig;
