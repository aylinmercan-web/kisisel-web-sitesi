import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import content from '../data/content.json'

const LanguageContext = createContext(undefined)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useLocalStorage('language', 'tr')

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'tr' ? 'en' : 'tr'))
  }

  // Aktif dile göre veri katmanı: bileşenler sadece "t" objesini tüketir,
  // görüntüleme (UI) katmanı ile veri yönetimi (state) katmanı birbirinden izole.
  const t = content[language]

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage, LanguageProvider içinde kullanılmalıdır')
  }
  return context
}
