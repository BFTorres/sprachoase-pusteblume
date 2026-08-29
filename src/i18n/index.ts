import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import de from '@/i18n/locales/de/common.json'
import en from '@/i18n/locales/en/common.json'

export const supportedLanguages = ['de', 'en'] as const
export type SupportedLanguage = (typeof supportedLanguages)[number]

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: de },
      en: { translation: en },
    },
    supportedLngs: supportedLanguages,
    fallbackLng: 'de',
    load: 'languageOnly',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'sprachoase-language',
    },
    react: {
      useSuspense: false,
    },
  })

export default i18n
