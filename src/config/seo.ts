import type { SupportedLanguage } from '@/i18n'
import { siteConfig } from '@/config/site'

export const seoConfig = {
  imageUrl: `${siteConfig.url}/og-sprachoase.png`,
  languages: {
    de: {
      path: '/',
      locale: 'de_DE',
      alternateLocale: 'en_GB',
    },
    en: {
      path: '/en/',
      locale: 'en_GB',
      alternateLocale: 'de_DE',
    },
  },
} as const

export function getLanguagePath(language: SupportedLanguage) {
  return seoConfig.languages[language].path
}

export function getLanguageUrl(language: SupportedLanguage) {
  return `${siteConfig.url}${getLanguagePath(language)}`
}

export function getLanguageFromPath(pathname: string): SupportedLanguage {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'de'
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
        inLanguage: ['de', 'en'],
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
          availableLanguage: ['German', 'English'],
        },
        sameAs: [siteConfig.googleProfileUrl],
      },
    ],
  }
}
