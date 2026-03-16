import SEOHead from '../components/SEOHead'

export default function About() {
  return (
    <>
      <SEOHead
        title="About MUDA Restaurant – Our Story | Cumbuco, Brazil"
        description="MUDA began in 2009 when Jan Bednar, a kitesurf instructor from Prague, found Cumbuco and decided to stay. The story of a restaurant that grew with its village."
        canonical="/about"
      />

      {/* Page header with exterior photo */}
      <div className="text-white py-20 text-center relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/muda-exterior.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10">
          <div className="text-xs tracking-[0.35em] uppercase text-gold mb-4 font-body">Our Story</div>
          <h1 className="font-heading text-4xl md:text-5xl">The story behind MUDA</h1>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>
      </div>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-6 text-gray-600 font-body leading-relaxed text-lg">
            <p>MUDA began with a simple accident.</p>
            <p>
              Jan Bednar, originally from Prague, spent years traveling the world working as a kitesurf instructor. At some point that journey brought him to a small fishing village on the coast of Ceará called Cumbuco.
            </p>
            <p>
              At the time it was quiet and mostly known to locals. Then the wind and waves began attracting kitesurfers from everywhere. The village slowly transformed into one of the best kitesurf destinations in the world.
            </p>
            <p>MUDA grew alongside that change.</p>
            <p>
              From the beginning the idea was never to build a formal restaurant. The idea was to build a place where people could relax after a day on the water, share food, drink a few cocktails, and talk about the day's wind.
            </p>
            <p>
              Over time the kitchen developed its own personality. You'll see dishes that come from many different places — seafood, meat, vegetarian plates, pizza, and a few things that don't fit into any category.
            </p>
            <p className="text-black font-medium text-xl font-heading italic">
              Cumbuco has always been a mix of cultures. MUDA reflects that.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '2009', label: 'Est.' },
            { value: '17:30', label: 'Opens daily' },
            { value: 'Cumbuco', label: 'Location' },
            { value: '4+', label: 'Menu sections' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-heading text-3xl md:text-4xl mb-2">{value}</div>
              <div className="w-6 h-px bg-gold mx-auto mb-2" />
              <div className="text-xs tracking-[0.2em] uppercase text-gray-400 font-body">{label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
