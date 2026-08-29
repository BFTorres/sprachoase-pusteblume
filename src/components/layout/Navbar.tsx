import { useTranslation } from 'react-i18next'
import { AccessibilityDialog } from '@/components/accessibility/AccessibilityDialog'
import { LanguageToggle } from '@/components/i18n/LanguageToggle'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { Container } from '@/components/layout/Container'

const navigationItems = [
  ['courses', 'nav.courses'],
  ['method', 'nav.method'],
  ['cambridge', 'nav.cambridge'],
  ['about', 'nav.about'],
  ['faq', 'nav.faq'],
  ['contact', 'nav.contact'],
] as const

export function Navbar() {
  const { t } = useTranslation()

  return (
    <header className="border-border bg-background/88 sticky top-0 z-40 border-b-2 py-3 backdrop-blur-xl">
      <Container className="flex items-center justify-between gap-3">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-3 rounded-xl focus-visible:outline-none"
        >
          <span
            className="border-foreground bg-accent text-accent-foreground shadow-brutal grid size-11 shrink-0 place-items-center rounded-xl border-2 font-black"
            aria-hidden="true"
          >
            P
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block truncate font-black tracking-tight">
              {t('brand.name')}
            </span>
            <span className="text-muted-foreground block truncate text-xs">
              {t('brand.tagline')}
            </span>
          </span>
        </a>

        <nav aria-label={t('nav.label')} className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {navigationItems.map(([id, label]) => (
              <li key={id}>
                <a
                  className="hover:bg-muted inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-bold focus-visible:outline-none"
                  href={`#${id}`}
                >
                  {t(label)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <AccessibilityDialog />
        </div>
      </Container>
    </header>
  )
}
