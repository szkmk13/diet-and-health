const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    appDir: true, // ✅ Enables the App Router (`app/` directory)
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
});
