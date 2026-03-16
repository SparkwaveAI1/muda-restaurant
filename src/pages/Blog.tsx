import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import { blogPosts } from '../data/blogPosts'

export default function Blog() {
  return (
    <>
      <SEOHead
        title="Blog – MUDA Restaurant | Cumbuco Dining & Stories"
        description="Stories from MUDA Restaurant in Cumbuco. Kitesurfing, fresh seafood, perfect evenings, and the rhythm of the Brazilian coast."
        canonical="/blog"
      />

      <div className="bg-black text-white py-20 text-center">
        <div className="text-xs tracking-[0.35em] uppercase text-gold mb-4 font-body">Stories</div>
        <h1 className="font-heading text-4xl md:text-5xl">From Cumbuco</h1>
        <div className="w-12 h-px bg-gold mx-auto mt-6" />
      </div>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="border border-gray-100 hover:border-gold transition-colors duration-300 group">
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <div className="text-xs text-gray-400 font-body tracking-wider uppercase">Photo</div>
                </div>
                <div className="p-8">
                  <div className="text-xs tracking-[0.2em] uppercase text-gold font-body mb-3">{post.date}</div>
                  <h2 className="font-heading text-xl mb-3 group-hover:text-gold transition-colors">{post.title}</h2>
                  <div className="w-6 h-px bg-gold mb-4" />
                  <p className="text-gray-500 font-body text-sm leading-relaxed mb-6">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-xs tracking-[0.2em] uppercase font-body hover:text-gold transition-colors border-b border-current pb-0.5"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
