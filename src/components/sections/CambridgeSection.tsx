import { Award, Check, GraduationCap } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/badge'

const levelKeys = ['a1', 'a2', 'b1', 'b2', 'c1'] as const
const processKeys = ['level', 'format', 'skills', 'confidence'] as const

export function CambridgeSection() {
  const { t } = useTranslation()

  return (
    <section
      id="cambridge"
      aria-labelledby="cambridge-title"
      className="border-border bg-primary text-primary-foreground scroll-mt-28 border-b-2 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-stretch">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-black tracking-[0.12em] uppercase">
              {t('cambridge.eyebrow')}
            </p>
            <h2
              id="cambridge-title"
              className="max-w-4xl text-4xl leading-[1.02] font-black tracking-tight text-balance sm:text-6xl"
            >
              {t('cambridge.title')}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed sm:text-xl">
              {t('cambridge.description')}
            </p>
          </div>

          <aside className="border-foreground bg-accent text-accent-foreground shadow-brutal-xl flex flex-col justify-between rounded-[2rem] border-2 p-7 sm:p-9">
            <div className="flex items-start justify-between gap-5">
              <Badge variant="outline">{t('cambridge.result.badge')}</Badge>
              <Award className="size-10" aria-hidden="true" />
            </div>
            <div className="mt-10">
              <p className="text-6xl leading-none font-black tracking-[-0.06em] sm:text-7xl">
                {t('cambridge.result.value')}
              </p>
              <p className="mt-4 text-xl leading-tight font-black">
                {t('cambridge.result.title')}
              </p>
              <p className="mt-2 max-w-md text-sm leading-relaxed font-semibold opacity-75 sm:text-base">
                {t('cambridge.result.description')}
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-sm font-black tracking-[0.12em] uppercase">
                {t('cambridge.path.eyebrow')}
              </p>
              <h3 className="mt-3 text-3xl leading-tight font-black tracking-tight text-balance sm:text-4xl">
                {t('cambridge.path.title')}
              </h3>
            </div>
            <p className="max-w-lg leading-relaxed">
              {t('cambridge.path.description')}
            </p>
          </div>

          <ol
            aria-label={t('cambridge.path.listLabel')}
            className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5"
          >
            {levelKeys.map((key, index) => (
              <li key={key} className="flex">
                <article className="border-foreground bg-background text-foreground shadow-brutal-lg flex w-full flex-col rounded-[1.5rem] border-2 p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="bg-primary text-primary-foreground grid size-11 place-items-center rounded-full text-sm font-black">
                      {t(`cambridge.path.levels.${key}.level`)}
                    </span>
                    <span className="text-muted-foreground text-xs font-black tracking-wider uppercase">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h4 className="mt-7 text-xl leading-tight font-black">
                    {t(`cambridge.path.levels.${key}.exam`)}
                  </h4>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                    {t(`cambridge.path.levels.${key}.description`)}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </div>

        <div className="border-foreground bg-foreground text-background shadow-brutal-xl mt-16 rounded-[2rem] border-2 p-6 sm:p-9">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-accent text-sm font-black tracking-[0.12em] uppercase">
                {t('cambridge.process.eyebrow')}
              </p>
              <h3 className="mt-3 max-w-2xl text-3xl leading-tight font-black tracking-tight text-balance sm:text-4xl">
                {t('cambridge.process.title')}
              </h3>
            </div>
            <GraduationCap className="text-accent size-12" aria-hidden="true" />
          </div>

          <ol
            aria-label={t('cambridge.process.listLabel')}
            className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
          >
            {processKeys.map((key, index) => (
              <li
                key={key}
                className="border-background/30 rounded-2xl border-2 p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="bg-accent text-accent-foreground grid size-8 place-items-center rounded-full text-xs font-black">
                    {index + 1}
                  </span>
                  <Check className="text-accent size-5" aria-hidden="true" />
                </div>
                <h4 className="mt-5 text-lg leading-tight font-black">
                  {t(`cambridge.process.steps.${key}.title`)}
                </h4>
                <p className="mt-2 text-sm leading-relaxed opacity-75">
                  {t(`cambridge.process.steps.${key}.description`)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
