/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'ru', 'ae', 'de', 'es', 'fr', 'id', 'it', 'jp', 'kr', 'my', 'nl', 'pl', 'pt', 'th', 'tr', 'ua', 'vn'],
        defaultLocale: 'jp',
        localeDetection: true,
    },
}

module.exports = nextConfig
