import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve local SVG/JPG straight from /public without the optimizer
    unoptimized: true,
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;