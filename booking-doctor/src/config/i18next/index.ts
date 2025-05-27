import i18n, { InitOptions } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n.use(Backend)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        // Load namespace default
        ns: ['common', 'jfw.error', 'jfw.validation', 'sidebar', 'pages.common'],

        // default namespace (needs no prefix on calling t)
        defaultNS: 'common',

        // Namespaces to lookup key if not found in given namespace.
        fallbackNS: 'common',

        fallbackLng: false,
        debug: false,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        load: 'languageOnly',
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },

        // Show translation keys while loading
        // saveMissing: true,
        // partialBundledLanguages: true,
        react: {            
            // useSuspense: false // Prevent blank screen while loading translations
        },

        // Do not allow empty string as valid translation
        returnEmptyString: false,
    } as InitOptions);

export default i18n;
