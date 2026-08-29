import { ArrowDown, ImagePlus, MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const factKeys = ['experience', 'approach', 'location'] as const

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="border-border border-b-2 py-16 sm:py-24"
    >
      <Container>
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

          <div className="border-foreground bg-accent text-accent-foreground shadow-brutal-xl grid min-h-80 place-items-center rounded-[2rem] border-2 p-8 text-center">
            <div className="flex max-w-sm flex-col items-center">
              <Badge className="mb-6">{t('hero.visual.badge')}</Badge>
              <span
                className="border-foreground bg-background text-foreground shadow-brutal mx-auto grid size-20 place-items-center rounded-full border-2 text-4xl font-black"
                aria-hidden="true"
              >
                <ImagePlus className="size-9" />
              </span>
              <p className="mt-5 text-xl leading-tight font-black text-balance">
                {t('hero.visual.title')}
              </p>
              <p className="mt-3 text-sm leading-relaxed font-semibold opacity-80">
                {t('hero.visual.description')}
              </p>
            </div>
          </div>
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
