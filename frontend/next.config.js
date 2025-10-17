/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  i18n: {
    locales: ['cs', 'en'],
    defaultLocale: 'cs'
  }
};

module.exports = nextConfig;
