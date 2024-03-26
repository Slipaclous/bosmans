// i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import frTranslations from './fr.json';
import nlTranslations from './nl.json';
// Import French translations

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
        fr: {
            translation: frTranslations, // Include French translations
          },
          nl: {
            translation: nlTranslations, // Include Dutch translations
          },
    },
    lng: 'fr', // default language
    fallbackLng: 'nl', // fallback language
    interpolation: {
      escapeValue: false, // not needed for React
    },
  });

export default i18n;
