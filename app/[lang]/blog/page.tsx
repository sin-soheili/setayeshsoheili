import type { Metadata } from 'next'
import { getPosts } from '@/lib/blog'
import { pageMetadata } from '@/lib/metadata'
import { langParams, resolveLang, type LangParams } from '@/lib/params'
import { Container } from '@/components/ui/primitives'
import { IndexHeader } from '@/components/ui/IndexHeader'
import { PostCard } from '@/components/blog/PostCard'

export const generateStaticParams = langParams

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { lang, t } = await resolveLang(params)
  return pageMetadata({ lang, path: '/blog', title: t.nav.blog, description: t.blog.description })
}

export default async function BlogPage({ params }: LangParams) {
  const { lang, t } = await resolveLang(params)
  const posts = getPosts(lang)

  return (
    <div className="py-12 sm:py-16 md:py-20">
      <Container>
        <IndexHeader
          kicker={t.blog.kicker}
          title={t.blog.title}
          intro={t.blog.intro}
          aside={<span className="font-mono text-xs text-muted">{t.blog.count(posts.length)}</span>}
        />
        {posts.length ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} lang={lang} t={t} />
            ))}
          </div>
        ) : (
          <p className="border border-dashed border-line-strong bg-card px-6 py-12 text-center font-mono text-sm text-muted">{t.blog.empty}</p>
        )}
      </Container>
    </div>
  )
}
