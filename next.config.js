/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: { allowedOrigins: ['localhost:3000', 'fiveminuteedge.com'] }
  }
}

module.exports = nextConfig
