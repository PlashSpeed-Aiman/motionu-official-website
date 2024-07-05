/** @type {import('next').NextConfig} */
// next.config.mjs
import 'dotenv/config';

/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 1000,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
  env: {
    REACT_APP_CONTENTFUL_SPACE_ID: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    REACT_APP_CONTENTFUL_ACCESS_KEY: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY,
  },
};

export default nextConfig;
