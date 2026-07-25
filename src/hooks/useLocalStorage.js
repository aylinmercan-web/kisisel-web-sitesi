import { useState, useEffect } from 'react'

// Kullanıcı tercihlerini (dil, tema vb.) localStorage'da saklamak için
// merkezi, tekrar kullanılabilir bir custom hook.
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key)
      return stored !== null ? JSON.parse(stored) : initialValue
    } catch (error) {
      console.error(`localStorage okunamadı ("${key}"):`, error)
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`localStorage yazılamadı ("${key}"):`, error)
    }
  }, [key, value])

  return [value, setValue]
}
