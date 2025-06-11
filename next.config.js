const repo = 'VarbegsBilvard';

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: 'export',
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
    ],
    unoptimized: true,
  },
};
