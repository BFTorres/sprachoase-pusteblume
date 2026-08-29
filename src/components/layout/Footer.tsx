import { useTranslation } from 'react-i18next'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { AccessibilityStatementDialog } from '@/components/legal/AccessibilityStatementDialog'
import { ImprintDialog } from '@/components/legal/ImprintDialog'
import { PrivacyDialog } from '@/components/legal/PrivacyDialog'
import { PrivacySettingsDialog } from '@/components/legal/PrivacySettingsDialog'
import { siteConfig } from '@/config/site'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-foreground text-background border-foreground border-t-2 py-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <span
                className="border-background bg-accent text-accent-foreground grid size-12 place-items-center rounded-xl border-2 font-black"
                aria-hidden="true"
              >
                P
              </span>
              <div>
                <p className="font-black">{siteConfig.name}</p>
                <p className="text-sm text-white/70">{t('brand.tagline')}</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h2 className="text-xs font-black tracking-[0.16em] text-white/60 uppercase">
              {t('footer.contactTitle')}
            </h2>
            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <a
                  className="hover:bg-background/10 focus-visible:ring-accent inline-flex min-h-11 items-center gap-3 rounded-lg px-3 font-bold focus-visible:ring-2 focus-visible:outline-none"
                  href={`mailto:${siteConfig.email}`}
                >
                  <Mail aria-hidden="true" className="size-4" />
                  <span className="break-all">{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-background/10 focus-visible:ring-accent inline-flex min-h-11 items-center gap-3 rounded-lg px-3 font-bold focus-visible:ring-2 focus-visible:outline-none"
                  href={siteConfig.phoneHref}
                >
                  <Phone aria-hidden="true" className="size-4" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3 px-3 py-2 text-white/70">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                <span>{siteConfig.courseRoom}</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-black tracking-[0.16em] text-white/60 uppercase">
              {t('footer.legalTitle')}
            </h2>
            <div className="mt-2 flex flex-col items-start">
              <ImprintDialog />
              <PrivacyDialog />
              <PrivacySettingsDialog />
              <AccessibilityStatementDialog />
            </div>
          </div>
        </div>

        <div className="border-background/20 mt-10 flex flex-col justify-between gap-3 border-t pt-6 text-xs text-white/60 sm:flex-row">
          <p className="font-bold text-white">
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          <p>{t('footer.status')}</p>
        </div>
      </Container>
    </footer>
  )
}
