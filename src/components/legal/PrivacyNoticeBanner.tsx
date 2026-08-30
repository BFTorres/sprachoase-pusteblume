import { useEffect, useState } from 'react'
import { Check, ShieldCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { PrivacySettingsDialog } from '@/components/legal/PrivacySettingsDialog'
import { Button } from '@/components/ui/button'
import {
  acknowledgePrivacyNotice,
  hasAcknowledgedPrivacyNotice,
} from '@/config/consent'

export function PrivacyNoticeBanner() {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const revealIfNeeded = window.setTimeout(() => {
      try {
        setIsVisible(!hasAcknowledgedPrivacyNotice(window.localStorage))
      } catch {
        setIsVisible(true)
      }
    }, 0)

    return () => window.clearTimeout(revealIfNeeded)
  }, [])

  const acknowledge = () => {
    try {
      acknowledgePrivacyNotice(window.localStorage)
    } finally {
      setIsVisible(false)
    }
  }

  if (!isVisible) {
    return null
  }

  return (
    <aside
      role="dialog"
      aria-modal="false"
      aria-labelledby="privacy-notice-title"
      aria-describedby="privacy-notice-description"
      className="border-foreground bg-background text-foreground shadow-brutal-xl fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-2xl border-2 p-4 sm:bottom-6 sm:p-5"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <span
          className="border-foreground bg-accent text-accent-foreground grid size-11 shrink-0 place-items-center rounded-xl border-2"
          aria-hidden="true"
        >
          <ShieldCheck className="size-5" />
        </span>
        <div className="min-w-0 flex-1">
          <h2 id="privacy-notice-title" className="text-base font-black">
            {t('privacyNotice.title')}
          </h2>
          <p
            id="privacy-notice-description"
            className="text-muted-foreground mt-1 text-sm leading-relaxed"
          >
            {t('privacyNotice.description')}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
        <PrivacySettingsDialog
          trigger={t('privacyNotice.settings')}
          triggerClassName="border-foreground bg-background text-foreground hover:bg-muted min-h-11 justify-center rounded-xl border-2 px-4 text-sm font-bold no-underline shadow-none hover:no-underline sm:min-w-36"
        />
        <Button type="button" onClick={acknowledge}>
          <Check aria-hidden="true" className="size-4" />
          {t('privacyNotice.acknowledge')}
        </Button>
      </div>
    </aside>
  )
}
