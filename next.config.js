const isGithubPages = process.env.NODE_ENV === 'production';
const repo = 'VarbegsBilvard'; // Your repo name

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      // Add more hostnames if you use more external image sources
    ],
  },
};

module.exports = nextConfig;
