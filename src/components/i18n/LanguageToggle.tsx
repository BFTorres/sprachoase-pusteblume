import { Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'

export function LanguageToggle() {
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'de'
  const nextLanguage = currentLanguage === 'de' ? 'en' : 'de'

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      aria-label={t('language.switchTo')}
      onClick={() => void i18n.changeLanguage(nextLanguage)}
    >
      <Languages className="size-4" aria-hidden="true" />
      <span aria-hidden="true">{t('language.short')}</span>
    </Button>
  )
}
