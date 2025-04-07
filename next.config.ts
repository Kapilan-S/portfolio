import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  distDir: "out", // Ensure correct build output folder
  trailingSlash: true, // Fixes routing issues on Netlify
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
