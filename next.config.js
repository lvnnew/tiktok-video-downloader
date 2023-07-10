/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'ru'],
        defaultLocale: 'ru',
        localeDetection: true,
    },
}

module.exports = nextConfig
