import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@/i18n'
import '@/index.css'
import App from '@/App'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

const application = (
  <StrictMode>
    <App />
  </StrictMode>
)

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, application)
} else {
  createRoot(rootElement).render(application)
}
