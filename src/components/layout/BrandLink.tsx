import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'

type BrandLinkProps = {
  compact?: boolean
  className?: string
}

export function BrandLink({ compact = false, className }: BrandLinkProps) {
  const { t } = useTranslation()

  return (
    <a
      href="#top"
      aria-label={t('brand.homeLabel')}
      className={cn(
        'flex min-w-0 items-center gap-3 rounded-xl focus-visible:outline-none',
        className,
      )}
    >
      <span
        className="border-foreground bg-accent text-accent-foreground shadow-brutal grid size-11 shrink-0 place-items-center rounded-xl border-2 font-black"
        aria-hidden="true"
      >
        P
      </span>
      {!compact && (
        <span className="hidden min-w-0 sm:block">
          <span className="block truncate font-black tracking-tight">
            {t('brand.name')}
          </span>
          <span className="text-muted-foreground block truncate text-xs">
            {t('brand.tagline')}
          </span>
        </span>
      )}
    </a>
  )
}
