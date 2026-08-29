import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'
import { useAccessibilityStore } from '@/stores/accessibility-store'

const visibilityThreshold = 640

export function ScrollToTopButton() {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)
  const reducedMotion = useAccessibilityStore((state) => state.reducedMotion)

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > visibilityThreshold)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })

    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  const scrollToTop = () => {
    const systemReducedMotion =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

    window.scrollTo({
      top: 0,
      behavior: reducedMotion || systemReducedMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <button
      type="button"
      aria-label={t('scrollToTop.label')}
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      onClick={scrollToTop}
      className={cn(
        'border-foreground bg-background text-foreground shadow-brutal fixed right-4 bottom-4 z-30 grid size-11 place-items-center rounded-full border-2 transition-[opacity,transform,box-shadow] sm:right-6 sm:bottom-6',
        'motion-safe:hover:shadow-brutal-lg focus-visible:outline-none motion-safe:hover:-translate-y-0.5',
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-2 opacity-0',
      )}
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </button>
  )
}
