import { useTranslation } from 'react-i18next'
import { AccessibilityDialog } from '@/components/accessibility/AccessibilityDialog'
import { LanguageToggle } from '@/components/i18n/LanguageToggle'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { navigationItems } from '@/config/navigation'

export function DesktopNavigation() {
  const { t } = useTranslation()

  return (
    <div className="hidden min-w-0 flex-1 items-center justify-end gap-3 2xl:flex">
      <nav aria-label={t('nav.label')}>
        <ul className="flex items-center gap-1">
          {navigationItems.map(({ id, labelKey }) => (
            <li key={id}>
              <a
                className="hover:bg-muted inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-bold focus-visible:outline-none"
                href={`#${id}`}
              >
                {t(labelKey)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-border flex shrink-0 items-center gap-2 border-l-2 pl-3">
        <LanguageToggle />
        <ThemeToggle />
        <AccessibilityDialog />
      </div>
    </div>
  )
}
