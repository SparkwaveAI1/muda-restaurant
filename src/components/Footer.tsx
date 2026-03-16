import { Link } from 'react-router-dom'
import MudaLogo from './MudaLogo'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <MudaLogo size={48} />
            <div>
              <div className="text-xs tracking-[0.25em] uppercase text-gray-400">MUDA</div>
              <div className="text-xs tracking-[0.15em] uppercase text-gray-500">Restaurant</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm font-body leading-relaxed">
            Beachfront fine dining in Cumbuco, Ceará, Brazil. Open since 2009.
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Visit Us</h4>
          <address className="not-italic text-gray-400 text-sm font-body leading-relaxed">
            Rua Alm. Soares Dutra 171<br />
            Praia de Cumbuco<br />
            Ceará · Brazil<br /><br />
            <a href="tel:+5585999004024" className="hover:text-gold transition-colors">+55 85 99900-4024</a><br />
            Open daily from 17:30
          </address>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Navigate</h4>
          <nav className="grid grid-cols-2 gap-2">
            {[['/', 'Home'], ['/menu', 'Menu'], ['/about', 'About'], ['/location', 'Location'], ['/reservations', 'Reservations'], ['/gallery', 'Gallery'], ['/blog', 'Blog']].map(([to, label]) => (
              <Link key={to} to={to} className="text-gray-400 text-sm font-body hover:text-gold transition-colors">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-600 text-xs tracking-wider font-body">
          © {new Date().getFullYear()} MUDA Restaurant · Cumbuco, Brazil
        </p>
      </div>
    </footer>
  )
}
