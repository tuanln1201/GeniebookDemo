/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["prod-ripcut-delivery.disney-plus.net"],
  },
};

module.exports = nextConfig;
