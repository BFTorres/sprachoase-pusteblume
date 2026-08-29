import { Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import type { SupportedLanguage } from '@/i18n'
import { getLanguagePath } from '@/config/seo'

export function LanguageToggle() {
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'de'
  const nextLanguage: SupportedLanguage = currentLanguage === 'de' ? 'en' : 'de'

  const changeLanguage = () => {
    const nextPath = getLanguagePath(nextLanguage)
    const nextUrl = `${nextPath}${window.location.search}${window.location.hash}`

    window.history.pushState({ language: nextLanguage }, '', nextUrl)
    void i18n.changeLanguage(nextLanguage)
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      aria-label={t('language.switchTo')}
      onClick={changeLanguage}
    >
      <Languages className="size-4" aria-hidden="true" />
      <span aria-hidden="true">{t('language.short')}</span>
    </Button>
  )
}
