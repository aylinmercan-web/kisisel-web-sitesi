import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useLocalStorage } from './useLocalStorage'

describe('useLocalStorage', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('localStorage boşken initialValue döner', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'varsayilan'))
    expect(result.current[0]).toBe('varsayilan')
  })

  it('deger degistiginde state guncellenir ve localStorage a yazilir', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'varsayilan'))

    act(() => {
      result.current[1]('yeni-deger')
    })

    expect(result.current[0]).toBe('yeni-deger')
    expect(window.localStorage.getItem('test-key')).toBe(JSON.stringify('yeni-deger'))
  })

  it('localStorage da onceden kayitli bir deger varsa onu kullanir', () => {
    window.localStorage.setItem('test-key', JSON.stringify('kayitli-deger'))

    const { result } = renderHook(() => useLocalStorage('test-key', 'varsayilan'))

    expect(result.current[0]).toBe('kayitli-deger')
  })
})
