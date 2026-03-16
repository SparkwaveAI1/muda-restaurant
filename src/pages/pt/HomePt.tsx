import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'MUDA Restaurant',
  description: 'Restaurante à beira-mar em Cumbuco, Ceará, Brasil. Aberto desde 2009.',
  url: 'https://mudarest.com/pt',
  telephone: '+5585999004024',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Alm. Soares Dutra 171',
    addressLocality: 'Cumbuco',
    addressRegion: 'Ceará',
    addressCountry: 'BR',
  },
  openingHours: 'Mo-Su 17:30-23:00',
  servesCuisine: ['Brasileira', 'Frutos do Mar', 'Pizza', 'Internacional'],
  priceRange: '$$',
}

export default function HomePt() {
  return (
    <>
      <SEOHead
        title="MUDA Restaurant Cumbuco – Jantar à Beira-Mar e Bar"
        description="Restaurante premiado à beira-mar em Cumbuco. Frutos do mar frescos, coquetéis artesanais e vista para o pôr do sol. Aberto todos os dias a partir das 17:30."
        canonical="/pt"
        schema={restaurantSchema}
      />

      {/* Hero */}
      <div
        className="relative min-h-screen flex flex-col items-center justify-center text-white text-center"
        style={{
          backgroundImage: 'url(/images/hero-terrace.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative z-10 px-6 max-w-3xl mx-auto">
          <div className="text-xs tracking-[0.35em] uppercase text-gold mb-6 font-body">Cumbuco, Ceará</div>
          <h1 className="font-heading text-5xl md:text-7xl mb-6 leading-none">MUDA Restaurant</h1>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="font-body text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
            Jantar no coração de Cumbuco
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pt/reservas" className="btn-primary">Reservar Mesa</Link>
            <Link to="/pt/cardapio" className="inline-block border border-white text-white px-8 py-3 text-xs tracking-[0.2em] uppercase font-body hover:bg-white hover:text-black transition-colors duration-300">Ver Cardápio</Link>
          </div>
          <p className="mt-8 text-white/60 font-body text-sm tracking-wide">Aberto todos os dias · 17:30</p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/30 mx-auto" />
        </div>
      </div>

      {/* Intro */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs tracking-[0.35em] uppercase text-gold mb-4 font-body">Desde 2009</div>
              <h2 className="section-heading text-left mb-6">Parte de Cumbuco desde o começo</h2>
              <div className="w-12 h-px bg-gold mb-8" />
              <p className="text-gray-600 font-body leading-relaxed mb-6">
                O MUDA faz parte da cena gastronômica de Cumbuco desde 2009. O que começou como uma ideia simples de um kitesurfista viajante acabou se transformando em um lugar onde moradores e visitantes voltam sempre.
              </p>
              <p className="text-gray-600 font-body leading-relaxed mb-6">
                O restaurante fica a poucos passos da praça principal, onde a brisa do mar passa pelas ruas no começo da noite. Quando o sol se põe e a vila começa a desacelerar, a cozinha entra em movimento.
              </p>
              <p className="text-gray-600 font-body leading-relaxed mb-8">
                O cardápio mistura ingredientes brasileiros com influências internacionais — e o clima muda com o público, mas a ideia é sempre a mesma: boa comida, boa conversa e uma noite tranquila em Cumbuco.
              </p>
              <Link to="/pt/sobre" className="btn-primary">Nossa História</Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img src="/images/muda-cocktail.jpg" alt="Coquetel no MUDA" className="aspect-square object-cover rounded-sm" />
              <img src="/images/muda-dessert.jpg" alt="Sobremesa do MUDA" className="aspect-square object-cover rounded-sm mt-8" />
              <img src="/images/muda-dumplings.jpg" alt="Prato do MUDA" className="aspect-square object-cover rounded-sm -mt-4" />
              <img src="/images/muda-dish-4th.jpg" alt="Prato do MUDA" className="aspect-square object-cover rounded-sm mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="bg-gray-50 py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="section-heading">A Cozinha</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Frutos do Mar Frescos',
                desc: 'O peixe do dia comanda o cardápio. Peixe, camarão, polvo e o que chega fresco do litoral do Ceará.',
                img: '/images/muda-seafood.jpg',
                imgAlt: 'Frutos do mar frescos no MUDA Restaurant',
              },
              {
                title: 'Pizza no Forno a Lenha',
                desc: 'Nosso forno produz pizzas de massa fina com ingredientes locais e importados. Um favorito desde o início.',
                img: '/images/muda-woodfire-oven.jpg',
                imgAlt: 'Forno a lenha do MUDA',
              },
              {
                title: 'Da Cozinha',
                desc: 'Sobremesas criativas, carnes preparadas lentamente e pratos que surpreendem. A cozinha tem personalidade própria.',
                img: '/images/muda-dessert.jpg',
                imgAlt: 'Brownie com sorvete de castanha no MUDA',
              },
            ].map(({ title, desc, img, imgAlt }) => (
              <div key={title} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <img src={img} alt={imgAlt} className="w-full h-48 object-cover" />
                <div className="p-8 text-center">
                  <h3 className="font-heading text-xl mb-3">{title}</h3>
                  <div className="w-8 h-px bg-gold mx-auto mb-4" />
                  <p className="text-gray-500 font-body text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/pt/cardapio" className="btn-primary">Ver Cardápio Completo</Link>
          </div>
        </div>
      </section>

      {/* Food gallery */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="section-heading">Da Cozinha</h2>
            <div className="gold-divider" />
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-3">
            {[
              ['/images/muda-tuna.jpg', 'Atum grelhado com rúcula'],
              ['/images/muda-food-1.jpg', 'Prato de frutos do mar'],
              ['/images/muda-food-2.jpg', 'Criação da cozinha'],
              ['/images/muda-food-3.jpg', 'Atum na folha de bananeira'],
              ['/images/muda-food-4.jpg', 'Prato do MUDA'],
              ['/images/muda-woodfire-oven.jpg', 'Forno a lenha'],
              ['/images/muda-food-6.jpg', 'Camarão ao alho'],
              ['/images/muda-food-12.jpg', 'Prato do MUDA'],
              ['/images/muda-food-13.jpg', 'Prato do MUDA'],
              ['/images/muda-food-15.jpg', 'Prato do MUDA'],
              ['/images/muda-food-16.jpg', 'Costelas assadas'],
              ['/images/muda-dumplings.jpg', 'Dumplings do MUDA'],
            ].map(([src, alt]) => (
              <img key={src} src={src} alt={alt} className="break-inside-avoid w-full mb-2 md:mb-3 object-cover" />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/pt/galeria" className="btn-secondary">Ver Galeria Completa</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-xs tracking-[0.35em] uppercase text-gold mb-4 font-body">Reserve sua mesa</div>
          <h2 className="font-heading text-4xl md:text-5xl mb-6">Venha jantar no MUDA</h2>
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <p className="text-white/70 font-body mb-10 leading-relaxed">
            Aberto todos os dias a partir das 17:30. Reservas recomendadas para grupos e fins de semana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pt/reservas" className="btn-primary">Fazer Reserva</Link>
            <a href="https://wa.me/5585999004024" target="_blank" rel="noopener noreferrer"
               className="btn-outline">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  )
}
