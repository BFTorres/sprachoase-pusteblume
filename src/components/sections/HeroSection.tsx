import { ArrowDown, MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { MascotMoment } from '@/components/brand/MascotMoment'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const factKeys = ['experience', 'approach', 'location'] as const
const imagePath = `${import.meta.env.BASE_URL}images/pat-hero`

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="border-border relative isolate overflow-hidden border-b-2 py-16 sm:py-24"
    >
      <MascotMoment
        pose="wave"
        motion="welcome"
        className="pointer-events-none absolute top-28 -left-20 -z-10 w-44 opacity-[0.12] sm:top-32 sm:-left-16 sm:w-56 sm:opacity-[0.14] xl:top-36 xl:-left-12 xl:w-72"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="min-w-0">
            <p className="text-primary mb-4 text-sm font-black tracking-[0.12em] uppercase">
              {t('hero.eyebrow')}
            </p>
            <h1
              id="hero-title"
              className="max-w-4xl text-5xl leading-[0.96] font-black tracking-[-0.05em] text-balance sm:text-7xl"
            >
              {t('hero.title')}
            </h1>
            <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">
              {t('hero.description')}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild>
                <a href="#courses">
                  {t('hero.primaryAction')}
                  <ArrowDown className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="#contact">
                  <MessageCircle className="size-4" aria-hidden="true" />
                  {t('hero.secondaryAction')}
                </a>
              </Button>
            </div>
          </div>

          <figure className="border-foreground bg-accent text-accent-foreground shadow-brutal-xl overflow-hidden rounded-[2rem] border-2">
            <div className="relative">
              <Badge
                variant="outline"
                className="shadow-brutal absolute top-5 left-5 z-10"
              >
                {t('hero.visual.badge')}
              </Badge>
              <picture>
                <source
                  type="image/avif"
                  srcSet={`${imagePath}-800.avif 800w, ${imagePath}-1600.avif 1600w`}
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
                <source
                  type="image/webp"
                  srcSet={`${imagePath}-800.webp 800w, ${imagePath}-1600.webp 1600w`}
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
                <img
                  src={`${imagePath}.jpg`}
                  width="1600"
                  height="1200"
                  alt={t('hero.visual.imageAlt')}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </picture>
            </div>
            <figcaption className="border-foreground border-t-2 p-5 sm:p-6">
              <p className="text-xl leading-tight font-black text-balance">
                {t('hero.visual.title')}
              </p>
              <p className="mt-3 text-sm leading-relaxed font-semibold opacity-80">
                {t('hero.visual.description')}
              </p>
            </figcaption>
          </figure>
        </div>

        <ul
          aria-label={t('hero.factsLabel')}
          className="mt-12 grid gap-3 sm:grid-cols-3 lg:mt-16"
        >
          {factKeys.map((key) => (
            <li
              key={key}
              className="border-foreground bg-background shadow-brutal rounded-2xl border-2 px-5 py-4"
            >
              <p className="text-primary text-lg font-black">
                {t(`hero.facts.${key}.value`)}
              </p>
              <p className="text-muted-foreground mt-1 text-sm leading-snug font-semibold">
                {t(`hero.facts.${key}.label`)}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
