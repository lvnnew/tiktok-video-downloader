/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'ru', 'ar', 'de', 'es', 'fr', 'id', 'it', 'ja', 'ko', 'ms', 'nl', 'pl', 'pt', 'th', 'tr', 'uk', 'vi'],
        defaultLocale: 'ja',
        localeDetection: true,
    },
}

module.exports = nextConfig
