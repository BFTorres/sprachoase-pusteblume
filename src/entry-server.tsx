import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from '@/App'
import i18n, { type SupportedLanguage } from '@/i18n'

export type PrerenderResult = {
  html: string
  title: string
  description: string
  imageAlt: string
}

export async function render(
  language: SupportedLanguage,
): Promise<PrerenderResult> {
  await i18n.changeLanguage(language)

  return {
    html: renderToString(
      <StrictMode>
        <App />
      </StrictMode>,
    ),
    title: i18n.t('seo.title'),
    description: i18n.t('seo.description'),
    imageAlt: i18n.t('seo.imageAlt'),
  }
}
