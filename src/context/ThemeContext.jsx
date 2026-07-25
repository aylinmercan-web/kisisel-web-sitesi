import { createContext, useContext, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const ThemeContext = createContext(undefined)

export function ThemeProvider({ children }) {
  const prefersDark =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches

  const [theme, setTheme] = useLocalStorage('theme', prefersDark ? 'dark' : 'light')

  // <html> etiketine "dark" class'ı ekleyip/çıkararak Tailwind darkMode:'class'
  // stratejisiyle tüm uygulamaya tek noktadan tema uygular.
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme, ThemeProvider içinde kullanılmalıdır')
  }
  return context
}
