// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    typescript: { ignoreBuildErrors: true },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.makimbo.xyz',
            },
        ],
        formats: ['image/webp'],
        minimumCacheTTL: 60,
    },
}

module.exports = nextConfig
