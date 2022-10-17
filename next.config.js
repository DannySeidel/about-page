/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    distDir: "build",
    i18n: {
        locales: ["en", "de"],
        defaultLocale: "en",
    },
}

module.exports = nextConfig
