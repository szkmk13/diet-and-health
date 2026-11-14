/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Next 16 domyślnie dopuszcza tylko quality 75; strony używają quality={90}.
    qualities: [75, 90],
  },
};

// Uwaga: @next/bundle-analyzer działa tylko z webpackiem. Next 16 domyślnie używa
// Turbopacka, więc analiza wymaga: ANALYZE=true next build --webpack
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
