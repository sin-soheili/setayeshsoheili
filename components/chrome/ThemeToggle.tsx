'use client'

import { useEffect, useState } from 'react'
import { Icon } from '@/components/ui/Icon'

export function toggleTheme() {
  const dark = !document.documentElement.classList.contains('dark')
  document.documentElement.classList.toggle('dark', dark)
  try {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  } catch {}
  window.dispatchEvent(new Event('themechange'))
}

export function ThemeToggle({ toDark, toLight }: { toDark: string; toLight: string }) {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const sync = () => setDark(document.documentElement.classList.contains('dark'))
    sync()
    window.addEventListener('themechange', sync)
    return () => window.removeEventListener('themechange', sync)
  }, [])

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? toLight : toDark}
      className="relative inline-flex size-10 items-center justify-center text-secondary transition-colors duration-150 hover:bg-surface-hover hover:text-fg active:bg-surface"
    >
      <Icon name="moon" className="block dark:hidden" />
      <Icon name="sun" className="hidden dark:block" />
    </button>
  )
}
