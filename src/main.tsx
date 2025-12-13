import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/app/styles/index.scss'
import App from './app/App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './app/provider/theme/ThemePrtovider.tsx'
import {LanguageProvider} from './app/provider/languageDirectionProvider/LanguageDirectionProvider.tsx'

import '@/shared/config/i18n/i18n.ts'
import { ErrorBoundary } from './app/provider/index.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <LanguageProvider>
        <ErrorBoundary>
           <App/>
        </ErrorBoundary>
    </LanguageProvider>
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
