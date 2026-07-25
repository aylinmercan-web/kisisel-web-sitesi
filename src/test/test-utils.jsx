import { render } from '@testing-library/react'
import { ThemeProvider } from '../context/ThemeContext'
import { LanguageProvider } from '../context/LanguageContext'

// Component'ler useTheme/useLanguage context'ine ihtiyaç duyduğu için,
// testlerde render ederken bu iki Provider'ı otomatik olarak sarmalıyoruz.
export function renderWithProviders(ui, options) {
  function Wrapper({ children }) {
    return (
      <ThemeProvider>
        <LanguageProvider>{children}</LanguageProvider>
      </ThemeProvider>
    )
  }

  return render(ui, { wrapper: Wrapper, ...options })
}

export * from '@testing-library/react'
