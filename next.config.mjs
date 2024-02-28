/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/me",
  trailingSlash: true,
  distDir: "docs",
};

export default nextConfig;
