import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // DO NOT add ignoreBuildErrors or ignoreDuringBuilds - fix errors instead
  output: "standalone",
};

export default nextConfig;

if (process.env.NODE_ENV === "development") {
  import("@opennextjs/cloudflare").then(({ initOpenNextCloudflareForDev }) =>
    initOpenNextCloudflareForDev(),
  );
}
