import { useState } from 'react'
import SEOHead from '../components/SEOHead'
import { menuCategories } from '../data/menuItems'

export default function Menu() {
  const [activeTab, setActiveTab] = useState('menu')
  const category = menuCategories.find((c) => c.id === activeTab)!

  return (
    <>
      <SEOHead
        title="Menu – MUDA Restaurant Cumbuco | Seafood, Pizza & More"
        description="Explore the MUDA menu — fresh seafood, wood-fired pizza, craft cocktails, and an international wine list. Something for every table."
        canonical="/menu"
      />

      <div className="bg-black text-white py-20 text-center">
        <div className="text-xs tracking-[0.35em] uppercase text-gold mb-4 font-body">The Kitchen</div>
        <h1 className="font-heading text-4xl md:text-5xl">Our Menu</h1>
        <div className="w-12 h-px bg-gold mx-auto mt-6" />
      </div>

      {/* Intro */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-gray-500 font-body leading-relaxed">
            The kitchen at MUDA is not built around one single cuisine. Instead it follows the rhythm of the coast and the people who pass through Cumbuco. Take your time with the menu. Dinner here is meant to be relaxed.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-8 py-3 text-xs tracking-[0.2em] uppercase font-body border transition-colors duration-200 ${
                  activeTab === cat.id
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-black'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {category.items.map((item) => (
              <div key={item.name} className="flex justify-between gap-4 py-5 border-b border-gray-100 hover:border-gold transition-colors">
                <div>
                  <h3 className="font-heading text-lg mb-1">{item.name}</h3>
                  <p className="text-gray-500 font-body text-sm leading-relaxed">{item.description}</p>
                </div>
                {item.price && (
                  <div className="text-gold font-body font-medium text-sm whitespace-nowrap pt-1">
                    {item.price}
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 font-body mt-10 tracking-wide">
            Menu items and prices subject to change. Ask your server about today's specials.
          </p>
        </div>
      </section>
    </>
  )
}
