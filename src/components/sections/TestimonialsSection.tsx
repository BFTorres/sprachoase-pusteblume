import { ExternalLink, Quote, ShieldCheck, Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layout/Container'

const reviewKeys = ['roman', 'osman', 'oya'] as const

const googleReviewsUrl =
  'https://www.google.com/maps/place/SprachOase+Pusteblume/@52.3921371,9.7352779,17z/data=!4m8!3m7!1s0x47b00b37db6c95d7:0x3b7accaa9de23109!8m2!3d52.3921371!4d9.7352779!9m1!1b1!16s%2Fg%2F11c2nqfq6m?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D'

export function TestimonialsSection() {
  const { t } = useTranslation()

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="border-border bg-accent text-accent-foreground scroll-mt-28 border-b-2 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-black tracking-[0.12em] uppercase opacity-75">
              {t('testimonials.eyebrow')}
            </p>
            <h2
              id="testimonials-title"
              className="text-4xl leading-[1.02] font-black tracking-tight text-balance sm:text-6xl"
            >
              {t('testimonials.title')}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed opacity-85 sm:text-xl">
              {t('testimonials.description')}
            </p>
          </div>

          <aside
            aria-label={t('testimonials.rating.label')}
            className="border-foreground bg-primary text-primary-foreground shadow-brutal-xl rounded-[2rem] border-2 p-6 sm:p-8"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-sm font-black tracking-[0.12em] uppercase opacity-80">
                  {t('testimonials.rating.source')}
                </p>
                <p className="mt-3 text-6xl leading-none font-black tracking-tight">
                  {t('testimonials.rating.value')}
                </p>
              </div>
              <ShieldCheck className="size-10" aria-hidden="true" />
            </div>
            <div className="mt-5 flex gap-1" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-6 fill-current" />
              ))}
            </div>
            <p className="sr-only">{t('testimonials.rating.stars')}</p>
            <p className="mt-4 text-lg font-black">
              {t('testimonials.rating.count')}
            </p>
            <p className="mt-2 text-sm leading-relaxed opacity-80">
              {t('testimonials.rating.date')}
            </p>
          </aside>
        </div>

        <ul
          aria-label={t('testimonials.listLabel')}
          className="mt-12 grid gap-5 lg:grid-cols-3"
        >
          {reviewKeys.map((key, index) => (
            <li key={key}>
              <figure className="border-foreground bg-background text-foreground shadow-brutal-lg flex h-full flex-col rounded-[1.5rem] border-2 p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="bg-primary text-primary-foreground grid size-11 place-items-center rounded-full">
                    <Quote className="size-5" aria-hidden="true" />
                  </span>
                  <span className="border-foreground rounded-full border-2 px-3 py-1 text-xs font-black tracking-wide uppercase">
                    {t('testimonials.reviewBadge', { number: index + 1 })}
                  </span>
                </div>
                <blockquote className="mt-7 flex-1">
                  <p className="text-xl leading-relaxed font-black">
                    {t(`testimonials.items.${key}.quote`)}
                  </p>
                </blockquote>
                <figcaption className="border-foreground mt-8 border-t-2 pt-5">
                  <p className="font-black">
                    {t(`testimonials.items.${key}.author`)}
                  </p>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {t(`testimonials.items.${key}.source`)}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm leading-relaxed opacity-75">
            {t('testimonials.disclaimer')}
          </p>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="border-foreground bg-background text-foreground shadow-brutal inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl border-2 px-5 py-3 font-black"
          >
            {t('testimonials.action')}
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  )
}
