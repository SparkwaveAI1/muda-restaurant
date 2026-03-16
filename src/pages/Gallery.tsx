import SEOHead from '../components/SEOHead'

// Unique photos only — duplicates removed
const PHOTOS: [string, string][] = [
  ['/images/muda-evening.jpg', 'MUDA restaurant full house at night'],
  ['/images/muda-group.jpg', 'Group dinner at MUDA Cumbuco'],
  ['/images/hero-terrace.jpg', 'MUDA upstairs terrace at night'],
  ['/images/muda-exterior.jpg', 'MUDA exterior with bougainvillea'],
  ['/images/muda-cocktail.jpg', 'Aperol Spritz at MUDA'],
  ['/images/muda-tuna.jpg', 'Seared tuna on arugula'],
  ['/images/muda-food-1.jpg', 'Fresh seafood dish'],
  ['/images/muda-food-2.jpg', 'MUDA kitchen creation'],
  ['/images/muda-food-3.jpg', 'Tuna on banana leaf'],
  ['/images/muda-food-4.jpg', 'MUDA dish'],
  ['/images/muda-food-6.jpg', 'Garlic shrimp platter'],
  ['/images/muda-food-12.jpg', 'MUDA dish'],
  ['/images/muda-food-13.jpg', 'MUDA dish'],
  ['/images/muda-food-15.jpg', 'MUDA dish'],
  ['/images/muda-food-16.jpg', 'Slow-cooked ribs'],
  ['/images/muda-seafood.jpg', 'Fresh seafood of the day'],
  ['/images/muda-woodfire-oven.jpg', 'Wood-fired pizza oven'],
  ['/images/muda-dumplings.jpg', 'MUDA dumplings'],
  ['/images/muda-dish-4th.jpg', 'MUDA kitchen creation'],
  ['/images/muda-dessert.jpg', 'Brownie with cashew ice cream'],
  ['/images/muda-interior.jpg', 'MUDA restaurant interior'],
]

export default function Gallery() {
  return (
    <>
      <SEOHead
        title="Gallery – MUDA Restaurant Cumbuco | Food & Atmosphere"
        description="A look inside MUDA Restaurant — food photography, the upstairs terrace, cocktails, and evenings in Cumbuco."
        canonical="/gallery"
      />

      <div className="bg-black text-white py-20 text-center">
        <div className="text-xs tracking-[0.35em] uppercase text-gold mb-4 font-body">Photos</div>
        <h1 className="font-heading text-4xl md:text-5xl">A look inside MUDA</h1>
        <div className="w-12 h-px bg-gold mx-auto mt-6" />
      </div>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-gray-500 font-body leading-relaxed mb-12 max-w-xl mx-auto">
            Restaurants are hard to explain with words alone. The best way to understand MUDA is to see it — the upstairs breeze, the kitchen plates, the cocktails, and the nights when the whole place fills with people sharing food and stories.
          </p>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
            {PHOTOS.map(([src, alt]) => (
              <img
                key={src}
                src={src}
                alt={alt}
                className="break-inside-avoid w-full mb-3 object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
