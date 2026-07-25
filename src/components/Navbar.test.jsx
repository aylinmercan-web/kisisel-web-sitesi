import { describe, it, expect, beforeEach } from 'vitest'
import userEvent from '@testing-library/user-event'
import { renderWithProviders, screen } from '../test/test-utils'
import Navbar from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('varsayılan (Türkçe) metinleri gösterir', () => {
    renderWithProviders(<Navbar />)
    expect(screen.getByText('İletişime Geç')).toBeInTheDocument()
  })

  it('dil değiştirme butonuna tıklanınca metinler İngilizceye döner', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Navbar />)

    await user.click(screen.getByText("ENGLISH'E GEÇ"))

    expect(await screen.findByText('Hire me')).toBeInTheDocument()
  })
})
