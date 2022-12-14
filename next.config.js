/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    distDir: "build",
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
        localeDetection: false,
    },
}

module.exports = nextConfig
