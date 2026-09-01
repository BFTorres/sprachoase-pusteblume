import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/badge'

const timelineKeys = ['start', 'cambridge', 'today'] as const
const trustKeys = ['contact', 'continuity', 'direction'] as const
const imagePath = `${import.meta.env.BASE_URL}images/pat-about`

export function AboutSection() {
  const { t } = useTranslation()

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-border scroll-mt-28 border-b-2 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <aside className="border-foreground bg-accent text-accent-foreground shadow-brutal-xl rounded-[2rem] border-2 p-6 sm:p-8 lg:sticky lg:top-32">
            <Badge>{t('about.portrait.badge')}</Badge>

            <figure className="border-foreground bg-background text-foreground shadow-brutal mx-auto mt-6 max-w-sm overflow-hidden rounded-[1.5rem] border-2">
              <picture>
                <source
                  type="image/avif"
                  srcSet={`${imagePath}-480.avif 480w, ${imagePath}-960.avif 960w`}
                  sizes="(min-width: 1024px) 30vw, 100vw"
                />
                <source
                  type="image/webp"
                  srcSet={`${imagePath}-480.webp 480w, ${imagePath}-960.webp 960w`}
                  sizes="(min-width: 1024px) 30vw, 100vw"
                />
                <img
                  src={`${imagePath}.jpg`}
                  width="960"
                  height="1280"
                  alt={t('about.portrait.imageAlt')}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/4] h-auto w-full object-cover"
                />
              </picture>
              <figcaption className="border-foreground border-t-2 p-5 text-center sm:p-6">
                <h3 className="text-3xl font-black tracking-tight">
                  {t('about.portrait.name')}
                </h3>
                <p className="text-primary mt-2 font-black">
                  {t('about.portrait.role')}
                </p>
                <p className="text-muted-foreground mt-5 text-sm leading-relaxed">
                  {t('about.portrait.description')}
                </p>
              </figcaption>
            </figure>
          </aside>

          <div>
            <p className="text-primary mb-3 text-sm font-black tracking-[0.12em] uppercase">
              {t('about.eyebrow')}
            </p>
            <h2
              id="about-title"
              className="max-w-4xl text-4xl leading-[1.02] font-black tracking-tight text-balance sm:text-6xl"
            >
              {t('about.title')}
            </h2>
            <p className="text-muted-foreground mt-6 max-w-3xl text-lg leading-relaxed sm:text-xl">
              {t('about.description')}
            </p>

            <div className="mt-12 grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
              <div className="border-foreground bg-muted shadow-brutal-lg rounded-[1.5rem] border-2 p-6 sm:p-7">
                <p className="text-primary text-xs font-black tracking-[0.12em] uppercase">
                  {t('about.timeline.eyebrow')}
                </p>
                <h3 className="mt-3 text-2xl leading-tight font-black">
                  {t('about.timeline.title')}
                </h3>
                <ol
                  aria-label={t('about.timeline.listLabel')}
                  className="mt-7 space-y-5"
                >
                  {timelineKeys.map((key) => (
                    <li
                      key={key}
                      className="border-foreground bg-background rounded-2xl border-2 p-5"
                    >
                      <p className="text-primary text-sm font-black">
                        {t(`about.timeline.items.${key}.date`)}
                      </p>
                      <h4 className="mt-2 text-lg leading-tight font-black">
                        {t(`about.timeline.items.${key}.title`)}
                      </h4>
                      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                        {t(`about.timeline.items.${key}.description`)}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="border-foreground bg-foreground text-background shadow-brutal-lg rounded-[1.5rem] border-2 p-6 sm:p-7">
                <p className="text-accent text-xs font-black tracking-[0.12em] uppercase">
                  {t('about.trust.eyebrow')}
                </p>
                <h3 className="mt-3 text-2xl leading-tight font-black">
                  {t('about.trust.title')}
                </h3>
                <ul
                  aria-label={t('about.trust.listLabel')}
                  className="mt-7 space-y-5"
                >
                  {trustKeys.map((key) => (
                    <li key={key} className="flex gap-4">
                      <span
                        className="bg-accent text-accent-foreground mt-0.5 grid size-7 shrink-0 place-items-center rounded-full"
                        aria-hidden="true"
                      >
                        <Check className="size-4" />
                      </span>
                      <div>
                        <h4 className="font-black">
                          {t(`about.trust.items.${key}.title`)}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed opacity-75">
                          {t(`about.trust.items.${key}.description`)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="border-foreground bg-background shadow-brutal mt-8 rounded-2xl border-2 p-5 sm:p-6">
              <p className="font-black">{t('about.pending.title')}</p>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed sm:text-base">
                {t('about.pending.description')}
              </p>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  )
}
