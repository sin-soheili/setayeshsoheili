import Link from 'next/link'
import type { Copy } from '@/content/copy'
import type { Post } from '@/lib/blog'
import type { Locale } from '@/lib/i18n'
import { pad } from '@/lib/utils'
import { Icon } from '@/components/ui/Icon'

export function PostCard({ post, lang, t }: { post: Post; lang: Locale; t: Copy }) {
  return (
    <Link
      href={`/${lang}/blog/${post.slug}`}
      data-reveal
      className="group relative flex flex-col justify-between border border-line bg-card p-6 transition-all duration-150 hover:border-line-strong sm:p-7"
    >
      <div>
        <div className="mb-4 flex items-center justify-between border-b border-line pb-4">
          <span dir="ltr" className="font-mono text-[11px] text-muted">
            {pad(post.number)} //
          </span>
          <div className="flex items-center gap-2">
            {post.featured && <span className="bg-fg px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-bg">{t.blog.featured}</span>}
            <span className="flex items-center gap-1 font-mono text-[11px] text-muted">
              <Icon name="clock" className="size-3" />
              <span>{t.article.minutes(post.readingTime)}</span>
            </span>
          </div>
        </div>
        <h2 className="text-lg font-bold leading-snug tracking-tight text-fg sm:text-xl">{post.title}</h2>
        <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-secondary sm:text-sm rtl:leading-[1.9]">{post.description}</p>
      </div>
      <div className="mt-8 flex items-center justify-between border-t border-line pt-4">
        <div className="flex flex-wrap gap-1.5" dir="ltr">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="border border-line bg-surface px-2 py-0.5 font-mono text-[11px] text-muted">
              {tag}
            </span>
          ))}
        </div>
        <span className="flex items-center gap-1 font-mono text-xs font-semibold text-fg transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
          <span>{t.blog.read}</span>
          <Icon name="arrowUpRight" className="size-3.5" />
        </span>
      </div>
    </Link>
  )
}
