import { useParams, Link, Navigate } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'
import { getBlogPostPt, blogPostsPt } from '../../data/blogPostsPt'

export default function BlogPostPt() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogPostPt(slug) : undefined

  if (!post) return <Navigate to="/pt/blog" replace />

  const renderContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      if (!line.trim()) return <br key={i} />
      if (line.startsWith('"') || line.startsWith('"')) {
        return <p key={i} className="text-gray-500 font-body leading-relaxed mb-4 italic pl-4 border-l-2 border-gold">{line}</p>
      }
      return (
        <p key={i} className="text-gray-600 font-body leading-relaxed mb-4">{line}</p>
      )
    })
  }

  const otherPosts = blogPostsPt.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <>
      <SEOHead
        title={`${post.title} – MUDA Restaurant`}
        description={post.excerpt}
        canonical={`/pt/blog/${post.slug}`}
      />

      <div className="bg-black text-white py-20 text-center">
        <div className="text-xs tracking-[0.35em] uppercase text-gold mb-4 font-body">{post.date}</div>
        <h1 className="font-heading text-3xl md:text-5xl max-w-3xl mx-auto px-6 leading-tight">{post.title}</h1>
        <div className="w-12 h-px bg-gold mx-auto mt-6" />
      </div>

      {post.image ? (
        <div className="max-h-80 overflow-hidden">
          <img src={post.image} alt={post.imageAlt ?? post.title} className="w-full object-cover max-h-80" />
        </div>
      ) : (
        <div className="aspect-video md:aspect-[21/6] bg-gray-100 max-h-64 md:max-h-80" />
      )}

      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="space-y-1">
            {renderContent(post.content)}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link to="/pt/blog" className="text-xs tracking-[0.2em] uppercase font-body hover:text-gold transition-colors border-b border-current pb-0.5">
              ← Todas as Histórias
            </Link>
          </div>
        </div>
      </section>

      {otherPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-heading text-2xl text-center mb-2">Mais Histórias</h2>
            <div className="gold-divider mb-10" />
            <div className="grid md:grid-cols-2 gap-6">
              {otherPosts.map((p) => (
                <Link key={p.slug} to={`/pt/blog/${p.slug}`} className="group block bg-white border border-gray-100 p-6 hover:border-gold transition-colors">
                  <div className="text-xs tracking-[0.2em] uppercase text-gold font-body mb-2">{p.date}</div>
                  <h3 className="font-heading text-lg group-hover:text-gold transition-colors mb-2">{p.title}</h3>
                  <p className="text-gray-500 font-body text-sm leading-relaxed">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
