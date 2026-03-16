import SEOHead from '../components/SEOHead'

const placeholders = [
  { label: 'Fresh Tuna', aspect: 'aspect-video' },
  { label: 'Garlic Shrimp', aspect: 'aspect-square' },
  { label: 'Seafood Risotto', aspect: 'aspect-square' },
  { label: 'Wood-fired Pizza', aspect: 'aspect-video' },
  { label: 'Restaurant Interior', aspect: 'aspect-video' },
  { label: 'Overnight Ribs', aspect: 'aspect-square' },
  { label: 'Ceviche MUDA Style', aspect: 'aspect-square' },
  { label: 'Upstairs Terrace', aspect: 'aspect-video' },
  { label: 'Cumbuco Sunset', aspect: 'aspect-square' },
  { label: 'Craft Cocktails', aspect: 'aspect-square' },
  { label: 'Octopus Dish', aspect: 'aspect-video' },
  { label: 'Dessert', aspect: 'aspect-square' },
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
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-gray-500 font-body leading-relaxed mb-12 max-w-xl mx-auto">
            Restaurants are hard to explain with words alone. The best way to understand MUDA is to see it — the upstairs breeze, the kitchen plates, the cocktails, and the nights when the whole place fills with people sharing food and stories.
          </p>

          <div className="columns-2 md:columns-3 gap-3 space-y-3">
            {/* Real photos */}
            <img src="/images/hero-terrace.jpg" alt="MUDA terrace at night" className="break-inside-avoid w-full object-cover" />
            <img src="/images/muda-interior.jpg" alt="MUDA restaurant" className="break-inside-avoid w-full object-cover" />
            {placeholders.slice(2).map(({ label, aspect }) => (
              <div
                key={label}
                className={`break-inside-avoid bg-gray-100 ${aspect} w-full flex items-center justify-center overflow-hidden`}
              >
                <div className="text-center p-4">
                  <div className="w-6 h-px bg-gray-300 mx-auto mb-2" />
                  <p className="text-xs text-gray-400 font-body tracking-wider uppercase">{label}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 font-body mt-10 tracking-wide">
            Photos coming soon. Follow us on Instagram for the latest.
          </p>
        </div>
      </section>
    </>
  )
}
