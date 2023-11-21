/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  compiler: {
    styledComponents: true
  },

  env: {
    API_BASE_URL: process.env.API_BASE_URL
  },

  eslint: {
    ignoreDuringBuilds: true
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/sign-in',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
