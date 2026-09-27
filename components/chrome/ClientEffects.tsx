'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Site-wide effects: scroll reveal for [data-reveal] (re-run on every client navigation)
 * and copy buttons inside Markdown code blocks.
 */
export function ClientEffects({ copied }: { copied: string }) {
  const pathname = usePathname()

  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]:not(.is-revealed)')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -6% 0px' },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  useEffect(() => {
    const onClick = async (e: MouseEvent) => {
      const button = (e.target as Element).closest<HTMLButtonElement>('[data-copy]')
      const code = button?.closest('.md-code')?.querySelector('code')
      const label = button?.querySelector('span')
      if (!button || !code || !label || button.dataset.done) return
      await navigator.clipboard.writeText(code.textContent ?? '')
      const original = label.textContent
      button.dataset.done = '1'
      label.textContent = copied
      setTimeout(() => {
        label.textContent = original
        delete button.dataset.done
      }, 1500)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [copied])

  return null
}
