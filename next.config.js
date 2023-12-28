/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  output: 'export',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
