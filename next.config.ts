import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://talgagroup.eu-central-1.linodeobjects.com/app/uploads/**"),
    ],
  },
};

export default nextConfig;
