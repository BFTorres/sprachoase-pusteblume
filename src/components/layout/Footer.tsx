import { useTranslation } from 'react-i18next'
import { Container } from '@/components/layout/Container'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-foreground text-background py-10">
      <Container className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <p className="font-black">
          © {new Date().getFullYear()} {t('footer.copyright')}
        </p>
        <p className="text-sm opacity-75">{t('footer.status')}</p>
      </Container>
    </footer>
  )
}
