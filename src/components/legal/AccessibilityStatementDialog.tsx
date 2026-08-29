import { useTranslation } from 'react-i18next'
import { LegalDialog, LegalSection } from '@/components/legal/LegalDialog'

export function AccessibilityStatementDialog() {
  const { t } = useTranslation()

  return (
    <LegalDialog
      trigger={t('legal.accessibility.trigger')}
      title={t('legal.accessibility.title')}
      description={t('legal.accessibility.description')}
    >
      <LegalSection title={t('legal.accessibility.commitment.title')}>
        <p>{t('legal.accessibility.commitment.description')}</p>
      </LegalSection>
      <LegalSection title={t('legal.accessibility.features.title')}>
        <ul className="list-disc space-y-1 pl-5">
          <li>{t('legal.accessibility.features.keyboard')}</li>
          <li>{t('legal.accessibility.features.preferences')}</li>
          <li>{t('legal.accessibility.features.structure')}</li>
        </ul>
      </LegalSection>
      <LegalSection title={t('legal.accessibility.status.title')}>
        <p>{t('legal.accessibility.status.description')}</p>
      </LegalSection>
      <LegalSection title={t('legal.accessibility.feedback.title')}>
        <p>{t('legal.accessibility.feedback.description')}</p>
      </LegalSection>
      <p className="text-muted-foreground text-xs">{t('legal.lastUpdated')}</p>
    </LegalDialog>
  )
}
