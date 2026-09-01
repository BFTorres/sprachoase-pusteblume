import type { SupportedLanguage } from '@/i18n'
import { siteConfig } from '@/config/site'

export const seoConfig = {
  imageUrl: `${siteConfig.url}/og-sprachoase.png`,
  languages: {
    de: {
      path: '/',
      locale: 'de_DE',
      alternateLocales: ['en_GB', 'tr_TR'],
    },
    en: {
      path: '/en/',
      locale: 'en_GB',
      alternateLocales: ['de_DE', 'tr_TR'],
    },
    tr: {
      path: '/tr/',
      locale: 'tr_TR',
      alternateLocales: ['de_DE', 'en_GB'],
    },
  },
} as const

export function getLanguagePath(language: SupportedLanguage) {
  return seoConfig.languages[language].path
}

export function getLanguageRoute(language: SupportedLanguage) {
  const basePath = import.meta.env.BASE_URL
  return language === 'de' ? basePath : `${basePath}${language}/`
}

export function getLanguageUrl(language: SupportedLanguage) {
  return `${siteConfig.url}${getLanguagePath(language)}`
}

export function getLanguageFromPath(pathname: string): SupportedLanguage {
  const segments = pathname.split('/').filter(Boolean)

  if (segments.includes('tr')) {
    return 'tr'
  }

  return segments.includes('en') ? 'en' : 'de'
}

export function createStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: `${siteConfig.url}/`,
        name: siteConfig.name,
        inLanguage: ['de', 'en', 'tr'],
        publisher: {
          '@id': `${siteConfig.url}/#organization`,
        },
      },
      {
        '@type': 'EducationalOrganization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: `${siteConfig.url}/`,
        email: siteConfig.email,
        telephone: '+49 176 28729985',
        areaServed: {
          '@type': 'City',
          name: 'Hannover',
        },
        location: {
          '@type': 'Place',
          name: 'Kursraum SprachOase Pusteblume',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Vahrenwalder Straße 78',
            postalCode: '30165',
            addressLocality: 'Hannover',
            addressRegion: 'Niedersachsen',
            addressCountry: 'DE',
          },
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'course enquiries',
          telephone: '+49 176 28729985',
          email: siteConfig.email,
          availableLanguage: ['German', 'English', 'Turkish'],
        },
        sameAs: [siteConfig.googleProfileUrl],
      },
    ],
  }
}
