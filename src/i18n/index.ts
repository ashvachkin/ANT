// src/i18n/index.ts
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationRU from './locales/ru/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: true,
    resources: {
      ru: {
        translation: translationRU,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export { i18n };
