import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ExportedImage from 'next-image-export-optimizer'
import { getPosts } from '@/lib/blog'
import { formatDateShort, locales } from '@/lib/i18n'
import { projectJsonLd } from '@/lib/jsonld'
import { renderMarkdown, type Heading } from '@/lib/markdown'
import { pageMetadata } from '@/lib/metadata'
import { resolveLang } from '@/lib/params'
import { getProject, projectBody, projectPages, sourceUrl } from '@/lib/projects'
import { hasItems, neighbours, pad } from '@/lib/utils'
import { Box, Chip, Container, JsonLd, Kicker, OutlineButton, PagerCard, boxTitleClass } from '@/components/ui/primitives'
import { Outline } from '@/components/ui/Outline'
import { Icon } from '@/components/ui/Icon'

type Params = { params: Promise<{ lang: string; slug: string }> }

export const dynamicParams = false
export const generateStaticParams = () => locales.flatMap((lang) => projectPages.map((p) => ({ lang, slug: p.slug })))

async function load(params: Params['params']) {
  const { slug } = await params
  const { lang, t } = await resolveLang(params)
  const project = getProject(slug)
  if (!project) notFound()
  return { lang, t, project }
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang, project } = await load(params)
  return pageMetadata({
    lang,
    path: `/work/${project.slug}`,
    title: project.title,
    description: project.summary![lang],
    image: project.media ? { url: project.media.src, alt: project.media.alt[lang] } : null,
  })
}

function LinkList({ links, title, className }: { links: { label: string; href: string }[]; title: string; className?: string }) {
  return (
    <div className={`flex flex-col gap-3 border border-line bg-card p-6 ${className ?? ''}`}>
      <span className={`${boxTitleClass} pb-2`}>{title}</span>
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-between border border-line-strong bg-surface/60 px-3.5 py-2 text-[13px] font-medium text-fg transition-all hover:bg-surface-hover"
        >
          <span>{l.label}</span>
          <span aria-hidden>↗</span>
        </a>
      ))}
    </div>
  )
}

function RepoFacts({ facts, title, className }: { facts: [string, string][]; title: string; className?: string }) {
  return (
    <Box title={title} className={className}>
      <dl className="flex flex-col gap-3 font-mono text-[12px] text-secondary">
        {facts.map(([k, v]) => (
          <div key={k} className="flex items-center justify-between gap-4">
            <dt className="text-muted">{k}</dt>
            <dd dir="ltr" className="text-fg">
              {v}
            </dd>
          </div>
        ))}
      </dl>
    </Box>
  )
}

export default async function ProjectPage({ params }: Params) {
  const { lang, t, project: p } = await load(params)
  const source = sourceUrl(p)
  const body = projectBody(p.slug, lang)
  const rendered = body ? renderMarkdown(body, { sectionLabel: t.section, copyLabel: t.copy }) : null
  const gallerySection = hasItems(p.gallery) ? (rendered?.sections ?? 0) + 1 : null
  const outline: Heading[] = [
    ...(rendered?.headings.filter((h) => h.depth === 2) ?? []),
    ...(gallerySection ? [{ id: 'gallery', text: t.project.gallery, depth: 2 as const, number: gallerySection }] : []),
  ]
  const related = getPosts(lang).filter((post) => post.project === p.slug)
  const { previous, next } = neighbours(projectPages, p)
  const repo = p.repoData

  const chips = [p.role?.[lang], p.yearResolved, ...(p.stack ?? [])].filter((c): c is string => Boolean(c))
  const links = [
    p.live && { label: t.project.liveDeployment, href: p.live },
    source && { label: t.project.githubRepository, href: source },
    ...(p.links ?? []).map((l) => ({ label: l.label[lang], href: l.href })),
  ].filter((l): l is { label: string; href: string } => Boolean(l))

  const repoFacts = repo
    ? [
        repo.language && [t.project.language, repo.language],
        repo.stars >= 5 && [t.project.stars, String(repo.stars)],
        repo.forks >= 1 && [t.project.forks, String(repo.forks)],
        repo.latestRelease && [t.project.release, `${repo.latestRelease.name} · ${formatDateShort(repo.latestRelease.publishedAt, lang)}`],
        [t.project.created, formatDateShort(repo.createdAt, lang)],
        [t.project.updated, formatDateShort(repo.pushedAt, lang)],
        repo.license && [t.project.license, repo.license],
      ].filter((f): f is [string, string] => Array.isArray(f))
    : []

  const hasPanel = Boolean(rendered) || gallerySection !== null

  return (
    <article className="flex flex-col pb-4 pt-4 sm:pb-6 sm:pt-6 md:pt-8">
      <JsonLd data={projectJsonLd(p, lang)} />

      <Container>
        <div className="flex w-full flex-col items-start">
          <Link href={`/${lang}/work`} className="mb-3 inline-flex items-center gap-2 font-mono text-[13px] text-muted transition-colors hover:text-fg sm:mb-4">
            <Icon name="arrowLeft" className="size-3.5" />
            <span>{t.project.back}</span>
          </Link>
          <Kicker>{[p.kind ? t.project.kinds[p.kind] : null, p.domain].filter(Boolean).join(' // ')}</Kicker>
          <h1 className="mt-3 text-balance text-[36px] font-bold leading-[1.08] tracking-[-0.035em] text-fg sm:text-[48px] md:text-[56px]">{p.title}</h1>
          <p className="mt-4 max-w-3xl text-pretty text-[17px] leading-[1.5] text-secondary sm:text-[19px] md:text-[21px] rtl:leading-[1.8]">{p.summary![lang]}</p>
          <div className="mt-8 flex w-full flex-col justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-2">
              {chips.map((c) => (
                <Chip key={c}>{c}</Chip>
              ))}
            </div>
            {(p.live || source) && (
              <div className="flex shrink-0 items-center gap-3">
                {p.live && <OutlineButton href={p.live}>{t.project.live}</OutlineButton>}
                {source && <OutlineButton href={source}>{t.project.source}</OutlineButton>}
              </div>
            )}
          </div>
        </div>
      </Container>

      {p.media && (
        <div className="mt-8 sm:mt-10">
          <Container>
            <figure className="border border-line bg-card p-2 sm:p-3">
              <div className="relative aspect-[16/9] w-full overflow-hidden border border-line bg-surface">
                <ExportedImage
                  src={p.media.src}
                  alt={p.media.alt[lang]}
                  fill
                  priority
                  sizes="(min-width: 1280px) 1100px, 100vw"
                  className={p.media.width / p.media.height < 1.3 ? 'object-contain p-4' : 'object-cover'}
                />
              </div>
              {p.media.caption && <figcaption className="px-1 pt-2 font-mono text-[12px] text-muted">{p.media.caption[lang]}</figcaption>}
            </figure>
          </Container>
        </div>
      )}

      <div className="mt-12 sm:mt-16">
        <Container>
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
            <aside className="sticky top-24 hidden flex-col gap-6 lg:col-span-4 lg:flex">
              {hasItems(outline) && <Outline title={t.project.outline} headings={outline} label={t.project.outline} />}
              {hasItems(links) && <LinkList links={links} title={t.project.links} />}
              {hasItems(repoFacts) && <RepoFacts facts={repoFacts} title={t.project.repository} />}
            </aside>

            <div className="w-full min-w-0 lg:col-span-8">
              <div className="flex w-full min-w-0 max-w-full flex-col gap-10 overflow-hidden sm:gap-14">
                {hasPanel && (
                  <div className="w-full min-w-0 max-w-full overflow-hidden border border-line bg-card p-5 shadow-sm sm:p-8 md:p-10">
                    {rendered && <div className="md md--project" dangerouslySetInnerHTML={{ __html: rendered.html }} />}
                    {gallerySection && (
                      <div className="md md--project">
                        <h2 id="gallery" className={rendered ? undefined : 'pt-0'}>
                          <span className="md-label" dir="ltr">
                            {pad(gallerySection)} // {t.section}
                          </span>
                          <span>{t.project.gallery}</span>
                        </h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          {p.gallery!.map((img) => (
                            <figure key={img.src} className="m-0">
                              <ExportedImage
                                src={img.src}
                                alt={img.alt[lang]}
                                width={img.width}
                                height={img.height}
                                sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 100vw"
                                className="h-auto w-full border border-line bg-surface"
                              />
                              <figcaption>{img.alt[lang]}</figcaption>
                            </figure>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* The aside is desktop-only; on smaller screens links and repo facts follow the body. */}
                {(hasItems(links) || hasItems(repoFacts)) && (
                  <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
                    {hasItems(links) && <LinkList links={links} title={t.project.links} className="p-5" />}
                    {hasItems(repoFacts) && <RepoFacts facts={repoFacts} title={t.project.repository} className="p-5" />}
                  </div>
                )}

                {hasItems(related) && (
                  <div className="border border-line bg-card p-6">
                    <span className={`${boxTitleClass} mb-2`}>{t.project.writing}</span>
                    <ul>
                      {related.map((post) => (
                        <li key={post.slug} className="border-b border-line last:border-b-0">
                          <Link href={`/${lang}/blog/${post.slug}`} className="group flex items-center justify-between gap-4 py-3 text-[14px] font-semibold text-fg">
                            <span className="group-hover:underline group-hover:underline-offset-2">{post.title}</span>
                            <Icon name="arrowRight" className="size-3.5 text-muted" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="mt-8 sm:mt-10">
        <nav aria-label={t.project.outline} className="w-full border-t border-line pb-4 pt-6 sm:pb-6 sm:pt-8">
          <Container>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {previous ? <PagerCard href={`/${lang}/work/${previous.slug}`} label={t.project.previous} title={previous.title} /> : <span className="hidden sm:block" />}
              {next ? (
                <PagerCard href={`/${lang}/work/${next.slug}`} label={t.project.next} title={next.title} align="end" />
              ) : (
                <PagerCard href={`/${lang}#contact`} label={t.contact.kicker} title={t.contact.getInTouch} align="end" />
              )}
            </div>
          </Container>
        </nav>
      </div>
    </article>
  )
}
