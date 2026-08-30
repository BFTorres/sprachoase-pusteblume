import { useTranslation } from 'react-i18next'
import { BrandMark } from '@/components/brand/BrandMark'
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
      <BrandMark className="text-foreground size-11" />
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
