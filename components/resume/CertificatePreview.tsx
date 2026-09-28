'use client'

import ExportedImage from 'next-image-export-optimizer'
import { useRef } from 'react'
import type { ProjectImage } from '@/content/types'
import type { Locale } from '@/lib/i18n'
import { Icon } from '@/components/ui/Icon'

type Props = { image: ProjectImage; lang: Locale; title: string; previewLabel: string; closeLabel: string }

/** Thumbnail that opens the certificate in a native modal dialog, so the reader stays on the page. */
export function CertificatePreview({ image, lang, title, previewLabel, closeLabel }: Props) {
  const ref = useRef<HTMLDialogElement>(null)
  return (
    <>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        aria-label={`${previewLabel}: ${title}`}
        className="group relative block w-full overflow-hidden border border-line bg-white"
        style={{ aspectRatio: `${image.width} / ${image.height}` }}
      >
        <ExportedImage src={image.src} alt={image.alt[lang]} fill sizes="(min-width: 768px) 440px, 100vw" className="object-contain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]" />
      </button>
      <dialog
        ref={ref}
        aria-label={title}
        // Click on the backdrop (the dialog element itself, outside the figure) closes it.
        onClick={(e) => e.target === e.currentTarget && ref.current?.close()}
        className="m-auto max-h-[92dvh] w-[min(1100px,94vw)] border border-line-strong bg-bg p-0 text-fg backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
          <span className="truncate text-[14px] font-semibold">{title}</span>
          <button type="button" onClick={() => ref.current?.close()} aria-label={closeLabel} className="p-1 text-secondary hover:text-fg">
            <Icon name="x" className="size-5" />
          </button>
        </div>
        <div className="relative bg-white" style={{ aspectRatio: `${image.width} / ${image.height}` }}>
          <ExportedImage src={image.src} alt={image.alt[lang]} fill sizes="94vw" className="object-contain" />
        </div>
      </dialog>
    </>
  )
}
