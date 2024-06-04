
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '/doomsdaylogs-site',
  assetPrefix: '/doomsdaylogs-site/',
  images: {
    unoptimized: true,
  },
  };
  
  export default nextConfig;
  