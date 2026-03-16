import SEOHead from '../components/SEOHead'

export default function Reservations() {
  return (
    <>
      <SEOHead
        title="Reservations – MUDA Restaurant Cumbuco | WhatsApp & Phone"
        description="Reserve your table at MUDA Restaurant in Cumbuco. WhatsApp or call +55 85 99900-4024. Open daily from 17:30."
        canonical="/reservations"
      />

      <div className="bg-black text-white py-20 text-center">
        <div className="text-xs tracking-[0.35em] uppercase text-gold mb-4 font-body">Book a Table</div>
        <h1 className="font-heading text-4xl md:text-5xl">Reservations</h1>
        <div className="w-12 h-px bg-gold mx-auto mt-6" />
      </div>

      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-gray-600 font-body leading-relaxed text-lg mb-8">
            Dinner at MUDA is relaxed and informal, but reservations are always a good idea during busy nights or weekends.
          </p>
          <p className="text-gray-500 font-body leading-relaxed mb-12">
            You can reserve a table by WhatsApp, phone call, or message through our website.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <a
              href="https://wa.me/5585999004024"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-black text-white p-8 hover:bg-gold transition-colors duration-300 group"
            >
              <div className="text-2xl mb-3">💬</div>
              <h3 className="font-heading text-lg mb-1">WhatsApp</h3>
              <p className="text-gray-400 text-sm font-body group-hover:text-white transition-colors">
                Tap to open WhatsApp chat
              </p>
            </a>
            <a
              href="tel:+5585999004024"
              className="block bg-gray-50 text-black p-8 hover:bg-gold hover:text-white transition-colors duration-300 group border border-gray-200"
            >
              <div className="text-2xl mb-3">📞</div>
              <h3 className="font-heading text-lg mb-1">Phone</h3>
              <p className="text-gray-500 text-sm font-body group-hover:text-white transition-colors">
                +55 85 99900-4024
              </p>
            </a>
          </div>

          <div className="border border-gray-200 p-8 text-left">
            <h3 className="font-heading text-xl mb-4 text-center">Good to know</h3>
            <div className="w-8 h-px bg-gold mx-auto mb-6" />
            <ul className="space-y-4 text-gray-600 font-body text-sm leading-relaxed">
              <li className="flex gap-3">
                <span className="text-gold mt-0.5">—</span>
                <span>We open daily at 17:30</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-0.5">—</span>
                <span>Reservations are recommended on weekends and holidays</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-0.5">—</span>
                <span>If you are coming with a group or planning a special dinner, let us know ahead of time and we will do our best to arrange the space</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-0.5">—</span>
                <span>We are located on the main street of Cumbuco, close to the village square</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
