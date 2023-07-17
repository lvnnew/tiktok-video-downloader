export const fallbackLng = 'en'
export const languages = [fallbackLng, 'ru', 'ae', 'de', 'es', 'fr', 'id', 'it', 'jp', 'kr', 'my', 'nl', 'pl', 'pt', 'th', 'tr', 'ua', 'vn']

export const defaultNS = 'translation'

export function getOptions(lng = fallbackLng, ns = defaultNS) {
    return {
        // debug: true,
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns
    }
}