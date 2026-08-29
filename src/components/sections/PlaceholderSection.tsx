import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layout/Container'
import { cn } from '@/lib/utils'

type PlaceholderSectionProps = {
  id: string
  translationKey: string
  tone?: 'default' | 'blue' | 'yellow'
}

export function PlaceholderSection({
  id,
  translationKey,
  tone = 'default',
}: PlaceholderSectionProps) {
  const { t } = useTranslation()

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn(
        'border-border scroll-mt-28 border-b-2 py-20 sm:py-28',
        tone === 'blue' && 'bg-primary text-primary-foreground',
        tone === 'yellow' && 'bg-accent text-accent-foreground',
      )}
    >
      <Container>
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-black tracking-[0.12em] uppercase opacity-75">
            {t(`${translationKey}.eyebrow`)}
          </p>
          <h2
            id={`${id}-title`}
            className="text-4xl font-black tracking-tight text-balance sm:text-5xl"
          >
            {t(`${translationKey}.title`)}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed opacity-85">
            {t(`${translationKey}.description`)}
          </p>
        </div>
      </Container>
    </section>
  )
}
