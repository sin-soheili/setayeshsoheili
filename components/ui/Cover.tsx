import ExportedImage from 'next-image-export-optimizer'
import type { ProjectImage } from '@/content/types'
import type { Locale } from '@/lib/i18n'
import { cn, pad } from '@/lib/utils'

type Props = {
  title: string
  number: number
  domain: string
  image?: ProjectImage | null
  lang: Locale
  sizes: string
  compact?: boolean
  priority?: boolean
  className?: string
}

/**
 * Project cover: the real screenshot when one exists (optimized at build time),
 * otherwise a typographic cover — never an invented mockup.
 */
export function Cover({ title, number, domain, image, lang, sizes, compact, priority, className }: Props) {
  if (image) {
    const tall = image.width / image.height < 1.3
    return (
      <div className={cn('relative h-full w-full overflow-hidden bg-surface', className)}>
        <ExportedImage
          src={image.src}
          alt={image.alt[lang]}
          fill
          sizes={sizes}
          priority={priority}
          className={cn('transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]', tall ? 'object-contain p-3' : 'object-cover')}
        />
      </div>
    )
  }

  return (
    <div
      aria-hidden
      dir="ltr"
      className={cn(
        'relative flex h-full w-full flex-col justify-between overflow-hidden bg-surface text-fg',
        '[background-image:linear-gradient(var(--c-border)_1px,transparent_1px),linear-gradient(90deg,var(--c-border)_1px,transparent_1px)] [background-size:24px_24px] [background-position:-1px_-1px]',
        compact ? 'p-1.5' : 'p-3 sm:p-4',
        className,
      )}
    >
      <div className={cn('flex items-start justify-between font-mono uppercase tracking-wider text-muted', compact ? 'text-[6px]' : 'text-[9px] sm:text-[10px]')}>
        <span className="bg-surface pe-1">{domain}</span>
        <span className="bg-surface ps-1">#{pad(number)}</span>
      </div>
      <span
        className={cn(
          'w-fit bg-surface pe-1 font-bold leading-none tracking-[-0.04em]',
          compact ? 'text-[11px]' : 'text-[26px] sm:text-[30px]',
        )}
      >
        {title}
      </span>
    </div>
  )
}
