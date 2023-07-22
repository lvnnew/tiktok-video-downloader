export const fallbackLng = 'en'
export const languages = [fallbackLng, 'ru', 'ar', 'de', 'es', 'fr', 'id', 'it', 'ja', 'ko', 'ms', 'nl', 'pl', 'pt', 'th', 'tr', 'uk', 'vi'];



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
