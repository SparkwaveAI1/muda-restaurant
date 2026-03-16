import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'MUDA Restaurant',
  description: 'Beachfront fine dining restaurant in Cumbuco, Ceará, Brazil. Open since 2009.',
  url: 'https://mudarest.com',
  telephone: '+5585999004024',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Alm. Soares Dutra 171',
    addressLocality: 'Cumbuco',
    addressRegion: 'Ceará',
    addressCountry: 'BR',
  },
  openingHours: 'Mo-Su 17:30-23:00',
  servesCuisine: ['Brazilian', 'Seafood', 'Pizza', 'International'],
  priceRange: '$$',
}

export default function Home() {
  return (
    <>
      <SEOHead
        title="MUDA Restaurant Cumbuco – Beachfront Fine Dining & Bar"
        description="Award-winning beachfront restaurant in Cumbuco. Fresh seafood, craft cocktails, and sunset views. Open daily from 17:30."
        canonical="/"
        schema={restaurantSchema}
      />

      {/* Hero */}
      <section className="text-white py-32 md:py-48 text-center relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/hero-terrace.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="text-xs tracking-[0.35em] uppercase text-gold mb-6 font-body">
            Cumbuco · Ceará · Brazil
          </div>
          <h1 className="font-heading text-4xl md:text-6xl text-white mb-6 leading-tight">
            Dinner in the heart<br />of Cumbuco
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="text-gray-300 font-body text-lg mb-10 tracking-wide">
            MUDA Restaurant · Open from 17:30 · Praia do Cumbuco, Ceará
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="btn-outline border-white text-white hover:bg-white hover:text-black">
              View Menu
            </Link>
            <Link to="/reservations" className="btn-primary bg-gold hover:bg-gold-dark">
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <h2 className="section-heading">Since 2009</h2>
              <div className="gold-divider mx-0 mb-8" />
              <div className="space-y-5 text-gray-600 font-body leading-relaxed">
                <p>
                  MUDA has been part of the Cumbuco dining scene since 2009. What started as a small idea from a traveling kitesurfer slowly grew into one of the places locals and visitors come back to again and again.
                </p>
                <p>
                  Our restaurant sits just a short walk from the village square, where the breeze from the ocean rolls through the streets in the evening. When the sun goes down and the town settles into its night rhythm, the kitchen starts moving.
                </p>
                <p>
                  The menu moves between Brazilian ingredients and international ideas. Some nights people come for seafood and wine. Other nights it's pizza and cocktails with friends. The mood changes with the crowd, but the goal is always the same — good food, good conversation, and a relaxed night in Cumbuco.
                </p>
                <p className="font-medium text-black">We open every evening at 17:30.</p>
              </div>
              <div className="mt-8">
                <Link to="/about" className="btn-outline text-sm">
                  Our Story
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img src="/images/hero-terrace.jpg" alt="MUDA terrace at night" className="aspect-square object-cover rounded-sm" />
              <img src="/images/muda-interior.jpg" alt="MUDA restaurant interior" className="aspect-square object-cover rounded-sm mt-8" />
              <div className="aspect-square bg-gray-100 rounded-sm -mt-4" />
              <div className="aspect-square bg-gray-100 rounded-sm mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="bg-gray-50 py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="section-heading">The Kitchen</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Fresh Seafood',
                desc: 'The catch of the day drives the menu. Fish, shrimp, octopus, and whatever arrives fresh from the coast of Ceará.',
                icon: '🐟',
              },
              {
                title: 'Wood-Fired Pizza',
                desc: 'Our oven turns out thin-crust pizzas with local and imported ingredients. A favourite since day one.',
                icon: '🍕',
              },
              {
                title: 'Craft Cocktails',
                desc: 'Caipirinhas, mojitos, and creative cocktails made with fresh fruit and good spirits. The bar opens at 17:30.',
                icon: '🍹',
              },
            ].map(({ title, desc, icon }) => (
              <div key={title} className="bg-white p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-heading text-xl mb-3">{title}</h3>
                <div className="w-8 h-px bg-gold mx-auto mb-4" />
                <p className="text-gray-500 font-body text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/menu" className="btn-primary">
              See Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-black text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl mb-4">Reserve your table tonight</h2>
          <div className="gold-divider" />
          <p className="text-gray-400 font-body mb-8">
            Reservations recommended on weekends. We open daily at 17:30.
          </p>
          <a
            href="https://wa.me/5585999004024"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-gold hover:bg-gold-dark"
          >
            WhatsApp Reservation
          </a>
        </div>
      </section>
    </>
  )
}
