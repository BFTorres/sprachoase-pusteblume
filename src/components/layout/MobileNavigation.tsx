import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { AccessibilityDialog } from '@/components/accessibility/AccessibilityDialog'
import { LanguageToggle } from '@/components/i18n/LanguageToggle'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { navigationItems } from '@/config/navigation'

export function MobileNavigation() {
  const { t } = useTranslation()

  return (
    <div className="2xl:hidden">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label={t('nav.openMenu')}
          >
            <Menu className="size-5" aria-hidden="true" />
          </Button>
        </DialogTrigger>

        <DialogContent className="top-4 right-4 bottom-4 left-4 max-h-none w-auto max-w-none translate-x-0 translate-y-0 content-start rounded-[1.75rem] p-5 sm:left-auto sm:w-[28rem]">
          <DialogHeader>
            <DialogTitle>{t('nav.menuTitle')}</DialogTitle>
            <DialogDescription>{t('nav.menuDescription')}</DialogDescription>
          </DialogHeader>

          <nav aria-label={t('nav.mobileLabel')} className="mt-2">
            <ul className="grid gap-2">
              {navigationItems.map(({ id, labelKey }, index) => (
                <li key={id}>
                  <DialogClose asChild>
                    <a
                      className="border-foreground bg-background shadow-brutal flex min-h-12 items-center gap-4 rounded-xl border-2 px-4 font-black transition-transform focus-visible:outline-none motion-safe:hover:-translate-y-0.5"
                      href={`#${id}`}
                    >
                      <span className="text-primary text-sm" aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {t(labelKey)}
                    </a>
                  </DialogClose>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-border bg-muted/60 mt-4 rounded-2xl border-2 p-4">
            <p className="mb-3 text-sm font-black tracking-wide uppercase">
              {t('nav.preferences')}
            </p>
            <div className="flex flex-wrap gap-2">
              <LanguageToggle />
              <ThemeToggle />
              <AccessibilityDialog />
            </div>
          </div>

          <DialogClose asChild>
            <Button type="button" variant="outline" className="mt-auto w-full">
              <X className="size-4" aria-hidden="true" />
              {t('common.close')}
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  )
}
