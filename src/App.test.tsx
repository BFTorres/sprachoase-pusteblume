import { beforeEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@/App'
import i18n from '@/i18n'
import {
  defaultAccessibilityPreferences,
  useAccessibilityStore,
} from '@/stores/accessibility-store'
import { useThemeStore } from '@/stores/theme-store'

describe('App', () => {
  beforeEach(async () => {
    localStorage.clear()
    Object.defineProperty(window, 'scrollY', {
      configurable: true,
      value: 0,
    })
    await i18n.changeLanguage('de')
    useThemeStore.setState({ theme: 'light' })
    useAccessibilityStore.setState(defaultAccessibilityPreferences)
  })

  it('renders the German semantic page foundation', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Englisch, das mit Kindern wächst.',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('main')).toHaveAttribute('id', 'content')
    expect(
      screen.getByRole('navigation', { name: 'Hauptnavigation' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('list', { name: 'Kursstufen nach Alter' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Garden Snail' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Parachutes' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('list', { name: 'Bausteine der Methodik' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Immersions-Methode' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Lernen mit allen Sinnen',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('list', {
        name: 'Cambridge-Prüfungsweg von A1 bis C1',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText('100 %')).toBeInTheDocument()
    expect(
      screen.getByRole('list', {
        name: 'Öffentlich belegte Stationen von Pat Weber',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Pat Weber' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('list', { name: 'Ausgewählte Google-Rezensionen' }),
    ).toBeInTheDocument()
    expect(screen.getByText('5,0')).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'Rezensionen bei Google ansehen' }),
    ).toHaveAttribute('href', expect.stringContaining('google.com/maps/place'))
    expect(
      screen.getByRole('button', {
        name: 'Für welche Altersgruppen gibt es Kurse?',
      }),
    ).toHaveAttribute('data-state', 'open')
    expect(
      screen.getByRole('list', {
        name: 'Bestätigte Eckpunkte zum Kurseinstieg',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'SMS an Pat schreiben' }),
    ).toHaveAttribute('href', 'sms:+4917628729985')
    expect(
      screen.getByRole('link', { name: 'E-Mail an Pat schreiben' }),
    ).toHaveAttribute('href', 'mailto:pat@sprachoase-pusteblume.de')
  })

  it('switches between the two supported themes', async () => {
    const user = userEvent.setup()
    render(<App />)

    const themeButtons = screen.getAllByRole('button', {
      name: 'Dunkles Farbschema aktivieren',
    })

    expect(themeButtons.length).toBeGreaterThan(1)
    await user.click(themeButtons[0]!)

    expect(document.documentElement).toHaveAttribute('data-theme', 'dark')
    expect(
      screen.getAllByRole('button', { name: 'Helles Farbschema aktivieren' })
        .length,
    ).toBeGreaterThan(1)
  })

  it('switches the page language to English', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(
      screen.getByRole('button', { name: 'Sprache zu Englisch wechseln' }),
    )

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'English that grows with children.',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'A course journey that grows with them.',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Experiencing English with all the senses.',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'A clear plan for the right Cambridge exam.',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Personally led. Supported step by step.',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'What families say about SprachOase.',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Answers before the first trial lesson.',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'The first step is a short message.',
      }),
    ).toBeInTheDocument()
    expect(document.documentElement).toHaveAttribute('lang', 'en')
  })

  it('opens a FAQ answer', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(
      screen.getByRole('button', {
        name: 'Kann mein Kind zuerst eine Probestunde besuchen?',
      }),
    )

    expect(
      screen.getByText(/bestehende Website beschreibt die Schnupperstunde/),
    ).toBeVisible()
  })

  it('opens the provisional legal notice from the footer', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Impressum' }))

    const dialog = screen.getByRole('dialog', { name: 'Impressum' })

    expect(within(dialog).getByText('Klaus-Rainer Weber')).toBeVisible()
    expect(
      within(dialog).getByText(/ladungsfähige Geschäftsanschrift/),
    ).toBeVisible()
  })

  it('explains that no optional consent services are active', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(
      screen.getByRole('button', { name: 'Datenschutzeinstellungen' }),
    )

    const dialog = screen.getByRole('dialog', {
      name: 'Datenschutzeinstellungen',
    })

    expect(
      within(dialog).getByText('Keine optionalen Dienste aktiv'),
    ).toBeVisible()
    expect(within(dialog).getByText('sprachoase-theme')).toBeVisible()
  })

  it('reveals the back-to-top control after scrolling', async () => {
    const user = userEvent.setup()
    const scrollTo = vi.fn()
    window.scrollTo = scrollTo
    Object.defineProperty(window, 'scrollY', {
      configurable: true,
      value: 900,
    })

    render(<App />)
    fireEvent.scroll(window)

    await user.click(
      screen.getByRole('button', { name: 'Zurück zum Seitenanfang' }),
    )

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('avoids smooth scrolling when reduced motion is enabled', async () => {
    const user = userEvent.setup()
    const scrollTo = vi.fn()
    window.scrollTo = scrollTo
    Object.defineProperty(window, 'scrollY', {
      configurable: true,
      value: 900,
    })
    useAccessibilityStore.setState({ reducedMotion: true })

    render(<App />)
    fireEvent.scroll(window)

    await user.click(
      screen.getByRole('button', { name: 'Zurück zum Seitenanfang' }),
    )

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'auto' })
  })

  it('opens the mobile navigation and closes it after selecting a section', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Menü öffnen' }))

    const menuDialog = screen.getByRole('dialog', { name: 'Menü' })
    const mobileNavigation = within(menuDialog).getByRole('navigation', {
      name: 'Mobile Hauptnavigation',
    })

    await user.click(
      within(mobileNavigation).getByRole('link', { name: /Kurse/ }),
    )

    expect(
      screen.queryByRole('dialog', { name: 'Menü' }),
    ).not.toBeInTheDocument()
  })

  it('applies accessibility preferences to the document root', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(
      screen.getByRole('button', {
        name: 'Einstellungen zur Barrierefreiheit öffnen',
      }),
    )

    const accessibilityDialog = screen.getByRole('dialog', {
      name: 'Barrierefreiheit',
    })

    await user.click(
      within(accessibilityDialog).getByRole('switch', {
        name: 'Links stärker hervorheben',
      }),
    )

    expect(document.documentElement).toHaveAttribute(
      'data-high-visibility-links',
      'true',
    )
  })
})
