/** @type {import('next').NextConfig} */
const wpImagesUrl = process.env.WP_IMAGES_URL || 'property-homes.local';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: wpImagesUrl,
      },
      {
        protocol: 'https',
        hostname: wpImagesUrl,
      },
    ],
  },
};

export default nextConfig;
