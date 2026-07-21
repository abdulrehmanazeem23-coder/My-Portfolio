import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export on GitHub Pages
  },
  // If your assets or styles break after deployment, uncomment the line below:
  // basePath: "/abdul-rehman-portfolio",
};

export default nextConfig;