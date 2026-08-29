import { useTranslation } from 'react-i18next'

export function SkipLink() {
  const { t } = useTranslation()

  return (
    <a
      href="#content"
      className="border-foreground bg-accent text-accent-foreground shadow-brutal fixed top-3 left-3 z-[100] -translate-y-24 rounded-xl border-2 px-4 py-3 font-bold transition-transform focus:translate-y-0"
    >
      {t('a11y.skipToContent')}
    </a>
  )
}
