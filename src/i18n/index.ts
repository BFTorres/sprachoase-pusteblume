import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import de from '@/i18n/locales/de/common.json'
import en from '@/i18n/locales/en/common.json'
import tr from '@/i18n/locales/tr/common.json'

export const supportedLanguages = ['de', 'en', 'tr'] as const
export type SupportedLanguage = (typeof supportedLanguages)[number]

export function normalizeLanguage(language?: string): SupportedLanguage {
  if (language?.startsWith('en')) {
    return 'en'
  }

  if (language?.startsWith('tr')) {
    return 'tr'
  }

  return 'de'
}

const pathLanguage: SupportedLanguage = normalizeLanguage(
  typeof window !== 'undefined'
    ? window.location.pathname
        .split('/')
        .filter(Boolean)
        .find((segment) => supportedLanguages.some((item) => item === segment))
    : undefined,
)

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: de },
      en: { translation: en },
      tr: { translation: tr },
    },
    supportedLngs: supportedLanguages,
    fallbackLng: 'de',
    lng: pathLanguage,
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
