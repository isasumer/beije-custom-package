import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "beije.co",
        pathname: "/**",
      },
    ],
  },
  sassOptions: {
    implementation: 'sass-embedded',
  },
};

export default nextConfig;