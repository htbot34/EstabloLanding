import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// IBM Plex Sans (headings + body) and IBM Plex Mono (IDs, timestamps, consent codes),
// self-hosted via @fontsource so the page has no external font dependency at runtime.
// The `latin` subset covers English, Spanish accents, §, ·, dashes and curly quotes.
import '@fontsource/ibm-plex-sans/latin-400.css'
import '@fontsource/ibm-plex-sans/latin-500.css'
import '@fontsource/ibm-plex-sans/latin-600.css'
import '@fontsource/ibm-plex-sans/latin-700.css'
import '@fontsource/ibm-plex-mono/latin-400.css'
import '@fontsource/ibm-plex-mono/latin-500.css'

import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element #root not found')

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
