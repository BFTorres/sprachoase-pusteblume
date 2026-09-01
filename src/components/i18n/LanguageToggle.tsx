import { Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  normalizeLanguage,
  supportedLanguages,
  type SupportedLanguage,
} from '@/i18n'
import { getLanguageRoute } from '@/config/seo'

export function LanguageToggle() {
  const { t, i18n } = useTranslation()
  const currentLanguage = normalizeLanguage(i18n.resolvedLanguage)

  const changeLanguage = (language: SupportedLanguage) => {
    const nextPath = getLanguageRoute(language)
    const nextUrl = `${nextPath}${window.location.search}${window.location.hash}`

    window.history.pushState({ language }, '', nextUrl)
    void i18n.changeLanguage(language)
  }

  return (
    <Select
      value={currentLanguage}
      onValueChange={(value) => changeLanguage(value as SupportedLanguage)}
    >
      <SelectTrigger
        aria-label={t('language.label')}
        className="w-auto min-w-[5.5rem]"
      >
        <Languages className="size-4 shrink-0" aria-hidden="true" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end">
        {supportedLanguages.map((language) => (
          <SelectItem key={language} value={language}>
            {t(`language.options.${language}`)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
