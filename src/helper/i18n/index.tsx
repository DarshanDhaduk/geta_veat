import i18n from 'i18next';
import EnglishTranslation from "./locales/en/englishTranslation.json"
import HebrewTranslation from "./locales/he/hebrewTranslation.json"
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: EnglishTranslation
  },
  he: {
    translation: HebrewTranslation
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,

    detection: {
      order: ['htmlTag','cookie', 'localStorage'],
      caches: ['cookie', 'localStorage']
    },

  });

export default i18n;