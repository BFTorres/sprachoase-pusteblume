import { useEffect, useRef, useState } from 'react'
import { PustiMascot, type PustiPose } from '@/components/brand/PustiMascot'
import { cn } from '@/lib/utils'
import { useAccessibilityStore } from '@/stores/accessibility-store'

export type PustiMotion = 'welcome' | 'listen' | 'think' | 'celebrate' | 'idle'

type MascotMomentProps = {
  className?: string
  label?: string
  motion: PustiMotion
  playOnce?: boolean
  pose: PustiPose
}

export function MascotMoment({
  className,
  label,
  motion,
  playOnce = true,
  pose,
}: MascotMomentProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const reducedMotion = useAccessibilityStore((state) => state.reducedMotion)

  useEffect(() => {
    const element = containerRef.current

    if (!element || reducedMotion) {
      return
    }

    const Observer = (
      window as Window & {
        IntersectionObserver?: typeof IntersectionObserver
      }
    ).IntersectionObserver

    if (!Observer) {
      const timeoutId = window.setTimeout(() => setIsInView(true), 0)

      return () => window.clearTimeout(timeoutId)
    }

    const observer = new Observer(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsInView(true)

          if (playOnce) {
            observer.disconnect()
          }

          return
        }

        if (!playOnce) {
          setIsInView(false)
        }
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.2,
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [playOnce, reducedMotion])

  const isAnimated = isInView && !reducedMotion

  return (
    <div
      ref={containerRef}
      data-mascot-moment={pose}
      data-motion={motion}
      data-active={String(isAnimated)}
      className={cn('pusti-moment shrink-0', className)}
    >
      <PustiMascot
        animated={isAnimated}
        pose={pose}
        className="h-auto w-full"
        {...(label ? { label } : {})}
      />
    </div>
  )
}
