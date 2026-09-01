import { Info } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { LegalDialog, LegalSection } from '@/components/legal/LegalDialog'
import { siteConfig } from '@/config/site'

export function ImprintDialog() {
  const { t } = useTranslation()

  return (
    <LegalDialog
      trigger={t('legal.imprint.trigger')}
      title={t('legal.imprint.title')}
      description={t('legal.imprint.description')}
    >
      <div className="border-foreground bg-accent text-accent-foreground flex gap-3 rounded-xl border-2 p-4">
        <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
        <div>
          <p className="font-black">{t('legal.imprint.verification.title')}</p>
          <p className="mt-1 text-sm">
            {t('legal.imprint.verification.description')}
          </p>
        </div>
      </div>

      <LegalSection title={t('legal.imprint.provider.title')}>
        <p>
          <strong className="text-foreground">
            {t('legal.imprint.provider.owner')}:
          </strong>{' '}
          {siteConfig.legalOwner}
        </p>
        <p>
          <strong className="text-foreground">
            {t('legal.imprint.provider.business')}:
          </strong>{' '}
          {siteConfig.name}
        </p>
        <p>
          <strong className="text-foreground">
            {t('legal.imprint.provider.address')}:
          </strong>{' '}
          {siteConfig.legalAddress}
        </p>
      </LegalSection>

      <LegalSection title={t('legal.imprint.contact.title')}>
        <p>
          {t('legal.imprint.contact.phone')}:{' '}
          <a className="font-bold underline" href={siteConfig.phoneHref}>
            {siteConfig.phoneDisplay}
          </a>
        </p>
        <p>
          {t('legal.imprint.contact.email')}:{' '}
          <a
            className="font-bold break-all underline"
            href={`mailto:${siteConfig.email}`}
          >
            {siteConfig.email}
          </a>
        </p>
      </LegalSection>

      <LegalSection title={t('legal.imprint.release.title')}>
        <p>{t('legal.imprint.release.description')}</p>
      </LegalSection>

      <p className="text-muted-foreground text-xs">{t('legal.lastUpdated')}</p>
    </LegalDialog>
  )
}
