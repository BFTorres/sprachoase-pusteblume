import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
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
  })

  it('switches between the two supported themes', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(
      screen.getByRole('button', { name: 'Dunkles Farbschema aktivieren' }),
    )

    expect(document.documentElement).toHaveAttribute('data-theme', 'dark')
    expect(
      screen.getByRole('button', { name: 'Helles Farbschema aktivieren' }),
    ).toBeInTheDocument()
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
    expect(document.documentElement).toHaveAttribute('lang', 'en')
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
