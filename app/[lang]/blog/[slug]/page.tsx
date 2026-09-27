import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPost, getPosts, translationOf } from '@/lib/blog'
import { formatDateLong, locales, otherLocale } from '@/lib/i18n'
import { articleJsonLd } from '@/lib/jsonld'
import { renderMarkdown } from '@/lib/markdown'
import { pageMetadata } from '@/lib/metadata'
import { resolveLang } from '@/lib/params'
import { getProject } from '@/lib/projects'
import { hasItems, neighbours } from '@/lib/utils'
import { Container, JsonLd, Kicker, PagerCard, boxTitleClass } from '@/components/ui/primitives'
import { Outline } from '@/components/ui/Outline'
import { Icon } from '@/components/ui/Icon'
import { ShareButton } from '@/components/blog/ShareButton'

type Params = { params: Promise<{ lang: string; slug: string }> }

export const dynamicParams = false
export function generateStaticParams() {
  const params = locales.flatMap((lang) => getPosts(lang).map((p) => ({ lang, slug: p.slug })))
  // Static export rejects an empty list; until the first post exists this renders a noindex 404.
  return params.length ? params : [{ lang: 'en', slug: 'none' }]
}

async function load(params: Params['params']) {
  const { slug } = await params
  const { lang, t } = await resolveLang(params)
  const post = getPost(lang, slug)
  if (!post) notFound()
  return { lang, t, post }
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang, post } = await load(params)
  const other = otherLocale(lang)
  const translation = translationOf(post, other)
  return pageMetadata({
    lang,
    path: `/blog/${post.slug}`,
    title: post.title,
    description: post.description,
    alternates: { [other]: translation ? `/blog/${translation}` : null },
    article: { publishedTime: post.date, modifiedTime: post.updatedAt ?? undefined, tags: post.tags },
    image: post.coverImage && { url: post.coverImage.src, alt: post.coverImage.alt },
  })
}

export default async function ArticlePage({ params }: Params) {
  const { lang, t, post } = await load(params)
  const { html, headings } = renderMarkdown(post.content, { sectionLabel: t.section, copyLabel: t.copy })
  // getPosts is newest-first: "previous" is the older note.
  const { previous: newer, next: older } = neighbours(getPosts(lang), post)
  const related = post.project ? getProject(post.project) : null
  const date = formatDateLong(post.date, lang)

  return (
    <article className="w-full pb-16 pt-6 sm:pb-20 sm:pt-10 md:pt-12">
      <JsonLd data={articleJsonLd(post)} />
      <Container>
        <div className="mb-6 sm:mb-8">
          <Link href={`/${lang}/blog`} className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-fg">
            <Icon name="arrowLeft" className="size-3.5 transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1" />
            <span>{t.article.back}</span>
          </Link>
        </div>

        <div className="mb-8 border-b border-line pb-8 sm:mb-12 sm:pb-10">
          <Kicker>
            {t.article.kicker} // <span dir="ltr">{post.category}</span>
          </Kicker>
          <h1 className="mt-3 text-balance text-2xl font-bold leading-[1.15] tracking-tight text-fg sm:text-3xl md:text-4xl lg:text-5xl">{post.title}</h1>
          <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-secondary sm:text-lg rtl:leading-[1.9]">{post.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-line pt-4 font-mono text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <Icon name="calendar" className="size-3.5" />
              <time dateTime={post.date}>{date}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="clock" className="size-3.5" />
              <span>{t.article.minutes(post.readingTime)}</span>
            </span>
            {hasItems(post.tags) && (
              <span className="flex items-center gap-1.5">
                <Icon name="tag" className="size-3.5" />
                <span dir="ltr">{post.tags.join(', ')}</span>
              </span>
            )}
          </div>
        </div>

        <div className="grid w-full min-w-0 grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <aside className="sticky top-24 hidden min-w-0 flex-col gap-6 self-start lg:col-span-4 lg:flex">
            {hasItems(headings) && <Outline title={t.article.outline} headings={headings} label={t.article.outline} />}
            <div className="flex flex-col gap-4 border border-line bg-card p-6 shadow-sm">
              <span className={`${boxTitleClass} pb-2`}>{t.article.details}</span>
              <dl className="flex flex-col gap-3 font-mono text-[12px] text-secondary">
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-muted">{t.article.published}</dt>
                  <dd className="text-fg">{date}</dd>
                </div>
                {post.updatedAt && (
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-muted">{t.article.updated}</dt>
                    <dd className="text-fg">{formatDateLong(post.updatedAt, lang)}</dd>
                  </div>
                )}
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-muted">{t.article.readingTime}</dt>
                  <dd className="text-fg">{t.article.minutes(post.readingTime)}</dd>
                </div>
                {hasItems(post.tags) && (
                  <div className="flex flex-col gap-1.5 border-t border-line/60 pt-2">
                    <dt className="text-muted">{t.article.tags}</dt>
                    <dd className="flex flex-wrap gap-1.5" dir="ltr">
                      {post.tags.map((tag) => (
                        <span key={tag} className="border border-line bg-surface px-2 py-0.5 text-[10px] text-secondary">
                          {tag}
                        </span>
                      ))}
                    </dd>
                  </div>
                )}
              </dl>
              {related && (
                <div className="border-t border-line pt-3">
                  <span className="font-mono text-[11px] text-muted">{t.article.related}</span>
                  <Link href={`/${lang}/work/${related.slug}`} className="group mt-1.5 flex items-center justify-between text-[14px] font-bold text-fg">
                    <span className="group-hover:underline group-hover:underline-offset-2">{related.title}</span>
                    <Icon name="arrowRight" className="size-3.5 text-muted" />
                  </Link>
                </div>
              )}
              <div className="border-t border-line pt-3">
                <ShareButton title={post.title} label={t.article.share} copied={t.article.linkCopied} />
              </div>
            </div>
          </aside>

          <div className="flex w-full min-w-0 max-w-full flex-col overflow-hidden lg:col-span-8">
            <div className="w-full min-w-0 max-w-full overflow-hidden border border-line bg-card p-4 shadow-sm sm:p-8 md:p-12">
              {post.coverImage && <img src={post.coverImage.src} alt={post.coverImage.alt} className="mb-8 h-auto w-full border border-line" />}
              <div className="md md--article" dangerouslySetInnerHTML={{ __html: html }} />
            </div>

            {related && (
              <Link href={`/${lang}/work/${related.slug}`} className="group mt-6 flex items-center justify-between border border-line bg-card p-5 transition-all hover:border-line-strong lg:hidden">
                <span className="flex flex-col">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted">{t.article.related}</span>
                  <span className="mt-1 text-[15px] font-bold text-fg">{related.title}</span>
                </span>
                <Icon name="arrowRight" className="size-4 text-muted" />
              </Link>
            )}

            {(older || newer) && (
              <div className="mt-8 grid w-full min-w-0 max-w-full grid-cols-1 gap-4 sm:grid-cols-2">
                {older ? <PagerCard href={`/${lang}/blog/${older.slug}`} label={t.article.previous} title={older.title} compact /> : <span className="hidden sm:block" />}
                {newer && <PagerCard href={`/${lang}/blog/${newer.slug}`} label={t.article.next} title={newer.title} align="end" compact />}
              </div>
            )}
          </div>
        </div>
      </Container>
    </article>
  )
}
