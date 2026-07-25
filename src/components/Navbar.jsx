import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import { SunIcon, MoonIcon } from './icons'

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const { t, toggleLanguage } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (id) => {
    scrollToId(id)
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur dark:bg-surface-dark/90 border-b border-gray-100 dark:border-gray-800">
      <nav className="container-px flex items-center justify-between py-4">
        <button
          onClick={() => scrollToId('hero')}
          aria-label="Ana sayfaya git"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-light text-primary dark:bg-primary/20"
        >
          <span className="font-bold">A.</span>
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-ink dark:text-gray-200">
          <button onClick={() => scrollToId('skills')} className="hover:text-primary transition-colors">
            {t.nav.skills}
          </button>
          <button onClick={() => scrollToId('projects')} className="hover:text-primary transition-colors">
            {t.nav.projects}
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3 text-xs font-semibold text-muted dark:text-gray-400">
            <button
              onClick={toggleTheme}
              role="switch"
              aria-checked={isDark}
              aria-label={t.nav.darkMode}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition-colors dark:bg-primary"
            >
              <span
                className={`inline-flex h-4 w-4 transform items-center justify-center rounded-full bg-white transition-transform ${
                  isDark ? 'translate-x-6' : 'translate-x-1'
                }`}
              >
                {isDark ? <MoonIcon className="h-2.5 w-2.5 text-primary" /> : <SunIcon className="h-2.5 w-2.5 text-gray-400" />}
              </span>
            </button>
            <span className="uppercase tracking-wide hidden lg:inline">{t.nav.darkMode}</span>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <button onClick={toggleLanguage} className="uppercase tracking-wide text-primary hover:text-primary-dark">
              {t.nav.switchLanguage}
            </button>
          </div>

          <button onClick={() => scrollToId('contact')} className="btn-primary hidden sm:inline-flex">
            {t.nav.hireMe}
          </button>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={menuOpen}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 text-ink dark:text-gray-100"
          >
            <span className="sr-only">Menu</span>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-surface-dark">
          <div className="container-px py-4 flex flex-col gap-4 text-sm font-medium text-ink dark:text-gray-200">
            <button onClick={() => handleNavClick('skills')} className="text-left hover:text-primary">
              {t.nav.skills}
            </button>
            <button onClick={() => handleNavClick('projects')} className="text-left hover:text-primary">
              {t.nav.projects}
            </button>
            <button onClick={() => handleNavClick('contact')} className="btn-primary w-full">
              {t.nav.hireMe}
            </button>
            <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
              <button onClick={toggleTheme} className="text-xs font-semibold uppercase text-muted dark:text-gray-400">
                {t.nav.darkMode}
              </button>
              <button onClick={toggleLanguage} className="text-xs font-semibold uppercase text-primary">
                {t.nav.switchLanguage}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
