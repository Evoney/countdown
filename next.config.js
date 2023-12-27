/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  distDir: 'dist',
  output: 'export'
}

module.exports = nextConfig
