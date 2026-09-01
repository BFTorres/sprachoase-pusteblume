import { useTranslation } from 'react-i18next'
import { LegalDialog, LegalSection } from '@/components/legal/LegalDialog'
import { localPreferenceKeys } from '@/config/consent'
import { siteConfig } from '@/config/site'

export function PrivacyDialog() {
  const { t } = useTranslation()

  return (
    <LegalDialog
      trigger={t('legal.privacy.trigger')}
      title={t('legal.privacy.title')}
      description={t('legal.privacy.description')}
    >
      <div className="border-foreground bg-accent text-accent-foreground rounded-xl border-2 p-4">
        <p className="font-black">{t('legal.privacy.scope.title')}</p>
        <p className="mt-1 text-sm">{t('legal.privacy.scope.description')}</p>
      </div>

      <LegalSection title={t('legal.privacy.controller.title')}>
        <p>{siteConfig.legalOwner}</p>
        <p>{siteConfig.name}</p>
        <p>{siteConfig.legalAddress}</p>
        <p>
          {t('legal.imprint.contact.email')}:{' '}
          <a
            className="font-bold break-all underline"
            href={`mailto:${siteConfig.email}?subject=Datenschutz`}
          >
            {siteConfig.email}
          </a>
        </p>
      </LegalSection>

      <LegalSection title={t('legal.privacy.current.title')}>
        <p>{t('legal.privacy.current.description')}</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>{t('legal.privacy.current.noAnalytics')}</li>
          <li>{t('legal.privacy.current.noNonEssentialStorage')}</li>
          <li>{t('legal.privacy.current.noEmbeds')}</li>
          <li>{t('legal.privacy.current.noForm')}</li>
        </ul>
      </LegalSection>

      <LegalSection title={t('legal.privacy.storage.title')}>
        <p>{t('legal.privacy.storage.description')}</p>
        <ul className="list-disc space-y-1 pl-5">
          {localPreferenceKeys.map((key) => (
            <li key={key}>
              <code className="text-foreground font-bold">{key}</code>
            </li>
          ))}
        </ul>
        <p>{t('legal.privacy.storage.legalBasis')}</p>
        <p>{t('legal.privacy.storage.retention')}</p>
      </LegalSection>

      <LegalSection title={t('legal.privacy.hosting.title')}>
        <p>{t('legal.privacy.hosting.description')}</p>
        <a
          className="font-bold underline"
          href={siteConfig.githubPagesPrivacyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('legal.privacy.hosting.providerPrivacy')}
        </a>
      </LegalSection>

      <LegalSection title={t('legal.privacy.contact.title')}>
        <p>{t('legal.privacy.contact.description')}</p>
        <p>{t('legal.privacy.contact.whatsapp')}</p>
        <p>{t('legal.privacy.contact.retention')}</p>
      </LegalSection>

      <LegalSection title={t('legal.privacy.links.title')}>
        <p>{t('legal.privacy.links.description')}</p>
      </LegalSection>

      <LegalSection title={t('legal.privacy.media.title')}>
        <p>{t('legal.privacy.media.description')}</p>
      </LegalSection>

      <LegalSection title={t('legal.privacy.rights.title')}>
        <p>{t('legal.privacy.rights.description')}</p>
        <a
          className="font-bold underline"
          href={siteConfig.privacyAuthorityUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('legal.privacy.rights.authority')}
        </a>
      </LegalSection>

      <p className="text-muted-foreground text-xs">{t('legal.lastUpdated')}</p>
    </LegalDialog>
  )
}
