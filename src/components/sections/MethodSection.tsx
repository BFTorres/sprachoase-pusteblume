import type { LucideIcon } from 'lucide-react'
import {
  Blocks,
  Footprints,
  MessageCircle,
  Music2,
  Quote,
  Sparkles,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { MascotMoment } from '@/components/brand/MascotMoment'
import { Container } from '@/components/layout/Container'
import { cn } from '@/lib/utils'

type MethodKey =
  'immersion' | 'songs' | 'rhymes' | 'movement' | 'materials' | 'senses'

type MethodItem = {
  key: MethodKey
  icon: LucideIcon
  gridClassName: string
  cardClassName: string
  iconClassName: string
}

const methodItems: MethodItem[] = [
  {
    key: 'immersion',
    icon: MessageCircle,
    gridClassName: 'md:col-span-2 xl:col-span-5',
    cardClassName: 'bg-primary text-primary-foreground',
    iconClassName: 'bg-background text-primary',
  },
  {
    key: 'songs',
    icon: Music2,
    gridClassName: 'xl:col-span-3',
    cardClassName: 'bg-accent text-accent-foreground',
    iconClassName: 'bg-background text-foreground',
  },
  {
    key: 'rhymes',
    icon: Quote,
    gridClassName: 'xl:col-span-4',
    cardClassName: 'bg-muted text-foreground',
    iconClassName: 'bg-primary text-primary-foreground',
  },
  {
    key: 'movement',
    icon: Footprints,
    gridClassName: 'xl:col-span-4',
    cardClassName: 'bg-background text-foreground',
    iconClassName: 'bg-accent text-accent-foreground',
  },
  {
    key: 'materials',
    icon: Blocks,
    gridClassName: 'xl:col-span-4',
    cardClassName: 'bg-muted text-foreground',
    iconClassName: 'bg-primary text-primary-foreground',
  },
  {
    key: 'senses',
    icon: Sparkles,
    gridClassName: 'xl:col-span-4',
    cardClassName: 'bg-accent text-accent-foreground',
    iconClassName: 'bg-background text-foreground',
  },
]

const senseKeys = ['see', 'hear', 'feel', 'smell'] as const

export function MethodSection() {
  const { t } = useTranslation()

  return (
    <section
      id="method"
      aria-labelledby="method-title"
      className="border-border scroll-mt-28 border-b-2 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="text-primary mb-3 text-sm font-black tracking-[0.12em] uppercase">
              {t('method.eyebrow')}
            </p>
            <h2
              id="method-title"
              className="max-w-3xl text-4xl leading-[1.02] font-black tracking-tight text-balance sm:text-6xl"
            >
              {t('method.title')}
            </h2>
            <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">
              {t('method.description')}
            </p>
          </div>

          <div className="border-foreground bg-foreground text-background shadow-brutal-xl rounded-[1.75rem] border-2 p-6 sm:p-8">
            <div className="grid items-center gap-6 sm:grid-cols-[minmax(0,1fr)_7.5rem]">
              <div>
                <p className="text-accent text-xs font-black tracking-[0.12em] uppercase">
                  {t('method.spotlight.eyebrow')}
                </p>
                <p className="mt-4 text-3xl leading-tight font-black text-balance sm:text-4xl">
                  {t('method.spotlight.title')}
                </p>
                <p className="mt-4 max-w-xl leading-relaxed opacity-80">
                  {t('method.spotlight.description')}
                </p>
              </div>

              <div className="bg-accent text-accent-foreground mx-auto w-28 rounded-[1.5rem] p-2 sm:w-30">
                <MascotMoment pose="listen" motion="listen" />
              </div>
            </div>
          </div>
        </div>

        <ul
          aria-label={t('method.listLabel')}
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-12"
        >
          {methodItems.map((item) => {
            const Icon = item.icon

            return (
              <li key={item.key} className={cn('flex', item.gridClassName)}>
                <article
                  className={cn(
                    'border-foreground shadow-brutal-lg flex w-full flex-col rounded-[1.5rem] border-2 p-6 sm:p-7',
                    item.cardClassName,
                  )}
                >
                  <span
                    className={cn(
                      'border-foreground grid size-12 place-items-center rounded-2xl border-2',
                      item.iconClassName,
                    )}
                    aria-hidden="true"
                  >
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-7 text-2xl leading-tight font-black tracking-tight">
                    {t(`method.items.${item.key}.title`)}
                  </h3>
                  <p className="mt-3 max-w-xl leading-relaxed">
                    {t(`method.items.${item.key}.description`)}
                  </p>

                  {item.key === 'senses' && (
                    <ul
                      aria-label={t('method.items.senses.listLabel')}
                      className="mt-6 flex flex-wrap gap-2"
                    >
                      {senseKeys.map((senseKey) => (
                        <li
                          key={senseKey}
                          className="border-foreground bg-background text-foreground rounded-full border-2 px-3 py-1 text-xs font-black uppercase"
                        >
                          {t(`method.items.senses.senses.${senseKey}`)}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
