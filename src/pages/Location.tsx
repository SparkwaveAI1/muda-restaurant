import SEOHead from '../components/SEOHead'

export default function Location() {
  return (
    <>
      <SEOHead
        title="Location – MUDA Restaurant | Rua Alm. Soares Dutra 171, Cumbuco"
        description="MUDA Restaurant is on the main street of Cumbuco, just a short walk from the village square and the beach. Open daily from 17:30."
        canonical="/location"
      />

      <div className="bg-black text-white py-20 text-center">
        <div className="text-xs tracking-[0.35em] uppercase text-gold mb-4 font-body">Find Us</div>
        <h1 className="font-heading text-4xl md:text-5xl">Restaurant in Cumbuco</h1>
        <div className="w-12 h-px bg-gold mx-auto mt-6" />
      </div>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-gray-600 font-body leading-relaxed text-lg mb-8">
              MUDA is located on the main street of Cumbuco, just a short walk from the village square and the beach. Cumbuco is known around the world for its steady wind and long beaches, which makes it one of the most popular kitesurf destinations in Brazil.
            </p>
            <p className="text-gray-600 font-body leading-relaxed mb-10">
              In the evening the village becomes calm again. People walk through the streets, music drifts from the bars, and restaurants fill slowly with locals and travelers. MUDA sits right in the middle of that rhythm.
            </p>

            <div className="border border-gray-200 p-8">
              <h3 className="text-xs tracking-[0.25em] uppercase text-gold font-body mb-4">Address</h3>
              <address className="not-italic text-gray-700 font-body leading-relaxed">
                Rua Alm. Soares Dutra 171<br />
                Praia de Cumbuco<br />
                Ceará · Brazil
              </address>
              <div className="my-6 w-8 h-px bg-gold" />
              <h3 className="text-xs tracking-[0.25em] uppercase text-gold font-body mb-4">Hours</h3>
              <p className="text-gray-700 font-body">Open daily from 17:30</p>
              <div className="my-6 w-8 h-px bg-gold" />
              <h3 className="text-xs tracking-[0.25em] uppercase text-gold font-body mb-4">Phone & WhatsApp</h3>
              <a href="tel:+5585999004024" className="text-gray-700 font-body hover:text-gold transition-colors">
                +55 85 99900-4024
              </a>
            </div>
          </div>

          {/* Map */}
          <div>
            <div className="w-full aspect-square md:aspect-auto md:h-[480px] overflow-hidden border border-gray-200">
              <iframe
                title="MUDA Restaurant location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src="https://maps.google.com/maps?q=Rua+Alm.+Soares+Dutra+171,+Cumbuco,+Cear%C3%A1,+Brazil&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.google.com/maps?q=Rua+Alm.+Soares+Dutra+171,+Cumbuco,+Cear%C3%A1,+Brazil"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-xs tracking-wider uppercase text-gold font-body mt-3 hover:underline"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
