import { defineConfig, devices } from '@playwright/test'

const basePath = process.env.VITE_BASE_PATH || '/'
const previewUrl = `http://127.0.0.1:4173${basePath}`

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',
  outputDir: 'node_modules/.cache/playwright-results',
  use: {
    baseURL: previewUrl,
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npm run preview -- --host 127.0.0.1 --port 4173',
    url: previewUrl,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
})
