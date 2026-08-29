import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type FontSize = 'small' | 'default' | 'large' | 'extraLarge'
export type FontFamily = 'system' | 'readable'
export type LineHeight = 'normal' | 'relaxed' | 'loose'

type AccessibilityPreferences = {
  fontSize: FontSize
  fontFamily: FontFamily
  lineHeight: LineHeight
  reducedMotion: boolean
  highVisibilityLinks: boolean
  strongFocusOutline: boolean
  highlightHeadings: boolean
}

type AccessibilityState = AccessibilityPreferences & {
  setFontSize: (fontSize: FontSize) => void
  setFontFamily: (fontFamily: FontFamily) => void
  setLineHeight: (lineHeight: LineHeight) => void
  setReducedMotion: (reducedMotion: boolean) => void
  setHighVisibilityLinks: (highVisibilityLinks: boolean) => void
  setStrongFocusOutline: (strongFocusOutline: boolean) => void
  setHighlightHeadings: (highlightHeadings: boolean) => void
  reset: () => void
}

export const defaultAccessibilityPreferences: AccessibilityPreferences = {
  fontSize: 'default',
  fontFamily: 'system',
  lineHeight: 'normal',
  reducedMotion: false,
  highVisibilityLinks: false,
  strongFocusOutline: false,
  highlightHeadings: false,
}

export const useAccessibilityStore = create<AccessibilityState>()(
  persist(
    (set) => ({
      ...defaultAccessibilityPreferences,
      setFontSize: (fontSize) => set({ fontSize }),
      setFontFamily: (fontFamily) => set({ fontFamily }),
      setLineHeight: (lineHeight) => set({ lineHeight }),
      setReducedMotion: (reducedMotion) => set({ reducedMotion }),
      setHighVisibilityLinks: (highVisibilityLinks) =>
        set({ highVisibilityLinks }),
      setStrongFocusOutline: (strongFocusOutline) =>
        set({ strongFocusOutline }),
      setHighlightHeadings: (highlightHeadings) => set({ highlightHeadings }),
      reset: () => set(defaultAccessibilityPreferences),
    }),
    {
      name: 'sprachoase-accessibility',
    },
  ),
)
