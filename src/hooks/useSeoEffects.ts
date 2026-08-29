import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import type { SupportedLanguage } from '@/i18n'
import {
  createStructuredData,
  getLanguageFromPath,
  getLanguageUrl,
  seoConfig,
} from '@/config/seo'
import { siteConfig } from '@/config/site'

function upsertMeta(selector: string, attribute: string, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    const [name, content] = attribute.split('=')
    element.setAttribute(name!, content!)
    document.head.append(element)
  }

  element.setAttribute('content', value)
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector)

  if (!element) {
    element = document.createElement('link')
    document.head.append(element)
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element!.setAttribute(name, value)
  })
}

export function useSeoEffects() {
  const { t, i18n } = useTranslation()
  const language: SupportedLanguage = i18n.resolvedLanguage?.startsWith('en')
    ? 'en'
    : 'de'

  useEffect(() => {
    const handlePopState = () => {
      void i18n.changeLanguage(getLanguageFromPath(window.location.pathname))
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [i18n])

  useEffect(() => {
    const languageSeo = seoConfig.languages[language]
    const pageUrl = getLanguageUrl(language)
    const title = t('seo.title')
    const description = t('seo.description')
    const imageAlt = t('seo.imageAlt')

    document.title = title
    document.documentElement.lang = language

    upsertMeta('meta[name="description"]', 'name=description', description)
    upsertMeta('meta[name="robots"]', 'name=robots', 'index,follow')
    upsertMeta('meta[property="og:type"]', 'property=og:type', 'website')
    upsertMeta(
      'meta[property="og:site_name"]',
      'property=og:site_name',
      siteConfig.name,
    )
    upsertMeta('meta[property="og:title"]', 'property=og:title', title)
    upsertMeta(
      'meta[property="og:description"]',
      'property=og:description',
      description,
    )
    upsertMeta('meta[property="og:url"]', 'property=og:url', pageUrl)
    upsertMeta(
      'meta[property="og:locale"]',
      'property=og:locale',
      languageSeo.locale,
    )
    upsertMeta(
      'meta[property="og:locale:alternate"]',
      'property=og:locale:alternate',
      languageSeo.alternateLocale,
    )
    upsertMeta(
      'meta[property="og:image"]',
      'property=og:image',
      seoConfig.imageUrl,
    )
    upsertMeta(
      'meta[property="og:image:alt"]',
      'property=og:image:alt',
      imageAlt,
    )
    upsertMeta(
      'meta[name="twitter:card"]',
      'name=twitter:card',
      'summary_large_image',
    )
    upsertMeta('meta[name="twitter:title"]', 'name=twitter:title', title)
    upsertMeta(
      'meta[name="twitter:description"]',
      'name=twitter:description',
      description,
    )
    upsertMeta(
      'meta[name="twitter:image"]',
      'name=twitter:image',
      seoConfig.imageUrl,
    )

    upsertLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: pageUrl,
    })
    upsertLink('link[rel="alternate"][hreflang="de"]', {
      rel: 'alternate',
      hreflang: 'de',
      href: getLanguageUrl('de'),
    })
    upsertLink('link[rel="alternate"][hreflang="en"]', {
      rel: 'alternate',
      hreflang: 'en',
      href: getLanguageUrl('en'),
    })
    upsertLink('link[rel="alternate"][hreflang="x-default"]', {
      rel: 'alternate',
      hreflang: 'x-default',
      href: getLanguageUrl('de'),
    })

    let structuredData = document.head.querySelector<HTMLScriptElement>(
      '#sprachoase-structured-data',
    )

    if (!structuredData) {
      structuredData = document.createElement('script')
      structuredData.id = 'sprachoase-structured-data'
      structuredData.type = 'application/ld+json'
      document.head.append(structuredData)
    }

    structuredData.textContent = JSON.stringify(createStructuredData())
  }, [language, t])
}
