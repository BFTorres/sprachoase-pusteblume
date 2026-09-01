import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { normalizeLanguage } from '@/i18n'
import { useAccessibilityStore } from '@/stores/accessibility-store'
import { useThemeStore } from '@/stores/theme-store'

export function usePreferenceEffects() {
  const { i18n } = useTranslation()
  const theme = useThemeStore((state) => state.theme)
  const fontSize = useAccessibilityStore((state) => state.fontSize)
  const fontFamily = useAccessibilityStore((state) => state.fontFamily)
  const lineHeight = useAccessibilityStore((state) => state.lineHeight)
  const reducedMotion = useAccessibilityStore((state) => state.reducedMotion)
  const highVisibilityLinks = useAccessibilityStore(
    (state) => state.highVisibilityLinks,
  )
  const strongFocusOutline = useAccessibilityStore(
    (state) => state.strongFocusOutline,
  )
  const highlightHeadings = useAccessibilityStore(
    (state) => state.highlightHeadings,
  )

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    root.style.colorScheme = theme

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0f172a' : '#1d4ed8')
  }, [theme])

  useEffect(() => {
    const root = document.documentElement
    root.dataset.fontSize = fontSize
    root.dataset.fontFamily = fontFamily
    root.dataset.lineHeight = lineHeight
    root.dataset.reducedMotion = String(reducedMotion)
    root.dataset.highVisibilityLinks = String(highVisibilityLinks)
    root.dataset.strongFocusOutline = String(strongFocusOutline)
    root.dataset.highlightHeadings = String(highlightHeadings)
  }, [
    fontFamily,
    fontSize,
    highVisibilityLinks,
    highlightHeadings,
    lineHeight,
    reducedMotion,
    strongFocusOutline,
  ])

  useEffect(() => {
    document.documentElement.lang = normalizeLanguage(i18n.resolvedLanguage)
  }, [i18n.resolvedLanguage])
}
