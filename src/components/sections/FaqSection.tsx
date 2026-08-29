import { ArrowDown, Check, Info } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layout/Container'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const faqKeys = [
  'ages',
  'trial',
  'method',
  'cambridge',
  'location',
  'availability',
] as const

const verifiedKeys = ['personal', 'trial', 'location'] as const

export function FaqSection() {
  const { t } = useTranslation()

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="border-border scroll-mt-28 border-b-2 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-primary mb-3 text-sm font-black tracking-[0.12em] uppercase">
              {t('faq.eyebrow')}
            </p>
            <h2
              id="faq-title"
              className="text-4xl leading-[1.02] font-black tracking-tight text-balance sm:text-6xl"
            >
              {t('faq.title')}
            </h2>
            <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">
              {t('faq.description')}
            </p>

            <aside className="border-foreground bg-primary text-primary-foreground shadow-brutal-xl mt-10 rounded-[2rem] border-2 p-6 sm:p-8">
              <p className="text-sm font-black tracking-[0.12em] uppercase opacity-80">
                {t('faq.verified.eyebrow')}
              </p>
              <h3 className="mt-3 text-2xl leading-tight font-black">
                {t('faq.verified.title')}
              </h3>
              <ul
                aria-label={t('faq.verified.listLabel')}
                className="mt-7 space-y-4"
              >
                {verifiedKeys.map((key) => (
                  <li key={key} className="flex items-start gap-3">
                    <span
                      className="bg-accent text-accent-foreground mt-0.5 grid size-7 shrink-0 place-items-center rounded-full"
                      aria-hidden="true"
                    >
                      <Check className="size-4" />
                    </span>
                    <span className="font-bold">
                      {t(`faq.verified.items.${key}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <div>
            <Accordion
              type="single"
              collapsible
              defaultValue="ages"
              aria-label={t('faq.listLabel')}
            >
              {faqKeys.map((key, index) => (
                <AccordionItem
                  key={key}
                  value={key}
                  className={cn('mb-5', key === 'availability' && 'bg-muted')}
                >
                  <AccordionTrigger className="px-5 py-5 text-lg sm:px-7 sm:py-6 sm:text-xl">
                    <span className="flex items-center gap-4">
                      <span
                        className="bg-primary text-primary-foreground grid size-9 shrink-0 place-items-center rounded-full text-sm font-black"
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{t(`faq.items.${key}.question`)}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 py-5 sm:px-7 sm:py-6">
                    {key === 'availability' && (
                      <Badge className="mb-4">
                        {t('faq.items.availability.badge')}
                      </Badge>
                    )}
                    <p>{t(`faq.items.${key}.answer`)}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <aside className="border-foreground bg-accent text-accent-foreground shadow-brutal-lg mt-8 rounded-[1.5rem] border-2 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <Info className="mt-1 size-7 shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-black">{t('faq.note.title')}</h3>
                  <p className="mt-2 leading-relaxed opacity-80">
                    {t('faq.note.description')}
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="border-foreground bg-background text-foreground shadow-brutal mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 px-5 py-3 font-black"
              >
                {t('faq.action')}
                <ArrowDown className="size-4" aria-hidden="true" />
              </a>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  )
}
