import {
  Clock3,
  Languages,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/badge'

const phoneDisplay = '0176 2872 9985'
const phoneHref = '+4917628729985'
const email = 'pat@sprachoase-pusteblume.de'

export function ContactSection() {
  const { t } = useTranslation()

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-border bg-primary text-primary-foreground scroll-mt-28 border-b-2 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-black tracking-[0.12em] uppercase">
              {t('contact.eyebrow')}
            </p>
            <h2
              id="contact-title"
              className="text-4xl leading-[1.02] font-black tracking-tight text-balance sm:text-6xl"
            >
              {t('contact.title')}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed sm:text-xl">
              {t('contact.description')}
            </p>
          </div>

          <aside className="border-foreground bg-foreground text-background shadow-brutal-xl rounded-[2rem] border-2 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <ShieldCheck
                className="mt-1 size-8 shrink-0"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-xl font-black">
                  {t('contact.note.title')}
                </h3>
                <p className="mt-2 text-sm leading-relaxed opacity-75">
                  {t('contact.note.description')}
                </p>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <article className="border-foreground bg-accent text-accent-foreground shadow-brutal-xl rounded-[2rem] border-2 p-6 sm:p-8">
            <div className="flex items-start justify-between gap-5">
              <Badge>{t('contact.sms.badge')}</Badge>
              <MessageCircle className="size-9" aria-hidden="true" />
            </div>
            <h3 className="mt-8 text-3xl leading-tight font-black">
              {t('contact.sms.title')}
            </h3>
            <p className="mt-4 max-w-xl leading-relaxed opacity-80">
              {t('contact.sms.description')}
            </p>
            <p className="mt-7 text-2xl font-black tracking-tight">
              {phoneDisplay}
            </p>
            <a
              href={`sms:${phoneHref}`}
              className="border-foreground bg-background text-foreground shadow-brutal mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 px-5 py-3 font-black"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              {t('contact.sms.action')}
            </a>
          </article>

          <article className="border-foreground bg-background text-foreground shadow-brutal-xl rounded-[2rem] border-2 p-6 sm:p-8">
            <div className="flex items-start justify-between gap-5">
              <Badge>{t('contact.email.badge')}</Badge>
              <Mail className="size-9" aria-hidden="true" />
            </div>
            <h3 className="mt-8 text-3xl leading-tight font-black">
              {t('contact.email.title')}
            </h3>
            <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
              {t('contact.email.description')}
            </p>
            <p className="mt-7 text-lg font-black break-all sm:text-xl">
              {email}
            </p>
            <a
              href={`mailto:${email}`}
              className="border-foreground bg-primary text-primary-foreground shadow-brutal mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 px-5 py-3 font-black"
            >
              <Mail className="size-5" aria-hidden="true" />
              {t('contact.email.action')}
            </a>
          </article>
        </div>

        <dl className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="border-foreground bg-background text-foreground shadow-brutal rounded-2xl border-2 p-5">
            <dt className="flex items-center gap-3 font-black">
              <Clock3 className="text-primary size-5" aria-hidden="true" />
              {t('contact.details.hours.label')}
            </dt>
            <dd className="text-muted-foreground mt-3 leading-relaxed">
              {t('contact.details.hours.value')}
              <br />
              <a className="font-bold" href={`tel:${phoneHref}`}>
                <Phone className="mr-2 inline size-4" aria-hidden="true" />
                {t('contact.details.hours.action')}
              </a>
            </dd>
          </div>

          <div className="border-foreground bg-background text-foreground shadow-brutal rounded-2xl border-2 p-5">
            <dt className="flex items-center gap-3 font-black">
              <MapPin className="text-primary size-5" aria-hidden="true" />
              {t('contact.details.location.label')}
            </dt>
            <dd className="text-muted-foreground mt-3 leading-relaxed">
              {t('contact.details.location.value')}
            </dd>
          </div>

          <div className="border-foreground bg-background text-foreground shadow-brutal rounded-2xl border-2 p-5">
            <dt className="flex items-center gap-3 font-black">
              <Languages className="text-primary size-5" aria-hidden="true" />
              {t('contact.details.language.label')}
            </dt>
            <dd className="text-muted-foreground mt-3 leading-relaxed">
              {t('contact.details.language.value')}
            </dd>
          </div>
        </dl>
      </Container>
    </section>
  )
}
