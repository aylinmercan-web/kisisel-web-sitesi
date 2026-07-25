import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider, useTheme } from './ThemeContext'

function ThemeConsumer() {
  const { isDark, toggleTheme } = useTheme()
  return <button onClick={toggleTheme}>{isDark ? 'dark' : 'light'}</button>
}

describe('ThemeContext', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('varsayılan olarak light temada başlar, <html> içinde dark class olmaz', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>,
    )

    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(screen.getByRole('button')).toHaveTextContent('light')
  })

  it('toggleTheme çağrıldığında dark moda geçer, <html> class ve localStorage güncellenir', async () => {
    const user = userEvent.setup()
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>,
    )

    await user.click(screen.getByRole('button'))

    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem('theme')).toBe(JSON.stringify('dark'))
    expect(screen.getByRole('button')).toHaveTextContent('dark')
  })
})
