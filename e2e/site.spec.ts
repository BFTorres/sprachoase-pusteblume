import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const localizedHeadings = {
  de: 'Englisch, das mit Kindern wächst.',
  en: 'English that grows with children.',
} as const

test('serves localized prerendered content without JavaScript', async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false })
  const page = await context.newPage()

  await page.goto('./')
  await expect(page.locator('html')).toHaveAttribute('lang', 'de')
  await expect(page.locator('#root')).toHaveAttribute(
    'data-prerendered',
    'true',
  )
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    localizedHeadings.de,
  )

  await page.goto('en/')
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    localizedHeadings.en,
  )

  await context.close()
})

test('hydrates both language routes without hydration errors', async ({
  page,
}) => {
  const consoleErrors: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text())
  })

  await page.goto('./')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    localizedHeadings.de,
  )
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://sprachoase-pusteblume.de/',
  )

  await page.goto('en/')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    localizedHeadings.en,
  )
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://sprachoase-pusteblume.de/en/',
  )

  expect(consoleErrors.filter((error) => /hydration/i.test(error))).toEqual([])
})

test('switches from the German route to the English route', async ({
  page,
}) => {
  await page.goto('./')
  await page
    .getByRole('button', { name: 'Sprache zu Englisch wechseln' })
    .first()
    .click()

  await expect(page).toHaveURL(/\/en\/$/)
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    localizedHeadings.en,
  )
})

test('supports the mobile menu and section navigation', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('./')

  await page.getByRole('button', { name: 'Menü öffnen' }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await page.getByRole('link', { name: /Methode/ }).click()

  await expect(page.getByRole('dialog')).toBeHidden()
  await expect(page).toHaveURL(/#method$/)
})

test('restores focus when a legal dialog closes with Escape', async ({
  page,
}) => {
  await page.goto('./')
  const trigger = page.getByRole('button', { name: 'Impressum' })

  await trigger.click()
  await expect(
    page.getByRole('dialog').getByRole('heading', { name: 'Impressum' }),
  ).toBeVisible()
  await page.keyboard.press('Escape')

  await expect(page.getByRole('dialog')).toBeHidden()
  await expect(trigger).toBeFocused()
})

test('has no horizontal overflow at mobile and desktop widths', async ({
  page,
}) => {
  for (const viewport of [
    { width: 390, height: 844 },
    { width: 1600, height: 900 },
  ]) {
    await page.setViewportSize(viewport)
    await page.goto('./')

    const hasOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    )
    expect(hasOverflow).toBe(false)
  }
})

for (const route of ['./', 'en/']) {
  test(`has no automatically detectable accessibility violations on ${route}`, async ({
    page,
  }) => {
    await page.goto(route)
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze()

    expect(results.violations).toEqual([])
  })
}
