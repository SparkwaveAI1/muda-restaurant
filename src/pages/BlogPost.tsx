import { useParams, Link, Navigate } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import { getBlogPost, blogPosts } from '../data/blogPosts'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogPost(slug) : undefined

  if (!post) return <Navigate to="/blog" replace />

  // Convert basic markdown-style bold (**text**) to JSX
  const renderContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      if (!line.trim()) return <br key={i} />
      if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={i} className="font-medium text-black font-body">{line.replace(/\*\*/g, '')}</p>
      }
      // Replace inline **bold**
      const parts = line.split(/(\*\*[^*]+\*\*)/)
      return (
        <p key={i} className="text-gray-600 font-body leading-relaxed mb-4">
          {parts.map((part, j) =>
            part.startsWith('**') ? <strong key={j}>{part.replace(/\*\*/g, '')}</strong> : part
          )}
        </p>
      )
    })
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <>
      <SEOHead
        title={`${post.title} – MUDA Restaurant`}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
      />

      <div className="bg-black text-white py-20 text-center">
        <div className="text-xs tracking-[0.35em] uppercase text-gold mb-4 font-body">{post.date}</div>
        <h1 className="font-heading text-3xl md:text-5xl max-w-3xl mx-auto px-6 leading-tight">{post.title}</h1>
        <div className="w-12 h-px bg-gold mx-auto mt-6" />
      </div>

      {/* Hero image placeholder */}
      <div className="aspect-video md:aspect-[21/6] bg-gray-100 flex items-center justify-center max-h-64 md:max-h-80">
        <div className="text-xs text-gray-400 font-body tracking-wider uppercase">Photo</div>
      </div>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="space-y-1">
            {renderContent(post.content)}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link to="/blog" className="text-xs tracking-[0.2em] uppercase font-body hover:text-gold transition-colors border-b border-current pb-0.5">
              ← All Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {otherPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-heading text-2xl text-center mb-2">More Stories</h2>
            <div className="gold-divider mb-10" />
            <div className="grid md:grid-cols-2 gap-6">
              {otherPosts.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="group block bg-white border border-gray-100 p-6 hover:border-gold transition-colors">
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
