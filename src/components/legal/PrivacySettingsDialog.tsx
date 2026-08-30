import { Check, Database, ShieldCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { LegalDialog, LegalSection } from '@/components/legal/LegalDialog'
import {
  hasOptionalConsentServices,
  localPreferenceKeys,
  optionalConsentServices,
} from '@/config/consent'
import { cn } from '@/lib/utils'

type PrivacySettingsDialogProps = {
  trigger?: string
  triggerClassName?: string
}

export function PrivacySettingsDialog({
  trigger,
  triggerClassName,
}: PrivacySettingsDialogProps = {}) {
  const { t } = useTranslation()

  return (
    <LegalDialog
      trigger={trigger ?? t('legal.settings.trigger')}
      title={t('legal.settings.title')}
      description={t('legal.settings.description')}
      triggerClassName={cn(triggerClassName)}
    >
      <div className="border-foreground bg-primary text-primary-foreground shadow-brutal flex gap-4 rounded-xl border-2 p-5">
        <ShieldCheck aria-hidden="true" className="size-7 shrink-0" />
        <div>
          <p className="font-black">{t('legal.settings.status.title')}</p>
          <p className="mt-1 text-sm text-white/80">
            {t('legal.settings.status.description')}
          </p>
        </div>
      </div>

      <LegalSection title={t('legal.settings.necessary.title')}>
        <div className="flex gap-3">
          <Database aria-hidden="true" className="size-5 shrink-0" />
          <div>
            <p>{t('legal.settings.necessary.description')}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {localPreferenceKeys.map((key) => (
                <li key={key}>
                  <code className="text-foreground font-bold">{key}</code>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </LegalSection>

      <LegalSection title={t('legal.settings.optional.title')}>
        {!hasOptionalConsentServices ? (
          <div className="flex gap-3">
            <Check aria-hidden="true" className="size-5 shrink-0" />
            <p>{t('legal.settings.optional.none')}</p>
          </div>
        ) : (
          <ul className="list-disc pl-5">
            {optionalConsentServices.map((service) => (
              <li key={service.id}>{service.provider}</li>
            ))}
          </ul>
        )}
      </LegalSection>

      <p className="text-muted-foreground text-xs">
        {t('legal.settings.future')}
      </p>
    </LegalDialog>
  )
}
