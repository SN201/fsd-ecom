import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './app/App.tsx'
import '@/app/styles/index.scss'
import { ErrorBoundary } from './app/provider/index.tsx'
import { ThemeProvider } from './app/provider/theme/ThemePrtovider.tsx'
import '@/shared/config/i18n/i18n.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
        <ErrorBoundary>
           <App/>
        </ErrorBoundary>
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
