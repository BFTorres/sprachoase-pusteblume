import { CircleAlert } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/badge'

const courseKeys = [
  'gardenSnail',
  'seeds',
  'sprouts',
  'blossoms',
  'dandelions',
  'parachutes',
] as const

export function CourseJourneySection() {
  const { t } = useTranslation()

  return (
    <section
      id="courses"
      aria-labelledby="courses-title"
      className="border-border bg-accent text-accent-foreground scroll-mt-28 border-b-2 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-black tracking-[0.12em] uppercase opacity-70">
              {t('courses.eyebrow')}
            </p>
            <h2
              id="courses-title"
              className="max-w-2xl text-4xl leading-[1.02] font-black tracking-tight text-balance sm:text-6xl"
            >
              {t('courses.title')}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed font-medium opacity-80 sm:text-xl lg:justify-self-end">
            {t('courses.description')}
          </p>
        </div>

        <ol
          aria-label={t('courses.listLabel')}
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {courseKeys.map((key, index) => (
            <li key={key} className="flex">
              <article className="border-foreground bg-background text-foreground shadow-brutal-lg flex w-full flex-col rounded-[1.5rem] border-2 p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="border-foreground bg-primary text-primary-foreground grid size-12 shrink-0 place-items-center rounded-full border-2 text-sm font-black"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <Badge variant="outline">
                    {t(`courses.items.${key}.age`)}
                  </Badge>
                </div>
                <h3 className="mt-8 text-2xl font-black tracking-tight">
                  {t(`courses.items.${key}.name`)}
                </h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  {t(`courses.items.${key}.description`)}
                </p>
              </article>
            </li>
          ))}
        </ol>

        <aside className="border-foreground bg-background/90 text-foreground mt-10 flex max-w-4xl gap-4 rounded-2xl border-2 p-5 sm:p-6">
          <CircleAlert
            className="text-primary mt-0.5 size-6 shrink-0"
            aria-hidden="true"
          />
          <div>
            <p className="font-black">{t('courses.note.title')}</p>
            <p className="text-muted-foreground mt-1 text-sm leading-relaxed sm:text-base">
              {t('courses.note.description')}
            </p>
          </div>
        </aside>
      </Container>
    </section>
  )
}
