/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  useFileSystemPublicRoutes: false,
  images: {
    domains: ['robohash.org'],
  },
}

module.exports = nextConfig
