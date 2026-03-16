import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function AboutPt() {
  return (
    <>
      <SEOHead
        title="Nossa História – MUDA Restaurant Cumbuco"
        description="O MUDA começou em 2009 com um kitesurfista viajante e uma ideia simples. Conheça a história por trás do restaurante."
        canonical="/pt/sobre"
      />

      <div className="text-white py-20 text-center relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/muda-exterior.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10">
          <div className="text-xs tracking-[0.35em] uppercase text-gold mb-4 font-body">Nossa História</div>
          <h1 className="font-heading text-4xl md:text-5xl">A história do MUDA</h1>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose-muda space-y-6 text-gray-600 font-body leading-relaxed">
            <p>O MUDA começou quase por acaso.</p>
            <p>Jan Bednar, originalmente de Praga, passou muitos anos viajando pelo mundo trabalhando como instrutor de kitesurf. Em uma dessas viagens ele chegou a uma pequena vila de pescadores no litoral do Ceará chamada Cumbuco.</p>
            <p>Na época era um lugar tranquilo, conhecido principalmente pelos moradores da região. Com o tempo, o vento constante e as longas praias começaram a atrair kitesurfistas de todas as partes do mundo.</p>
            <p>A vila foi mudando — e o MUDA cresceu junto com ela.</p>
            <p>Desde o início a ideia nunca foi criar um restaurante formal. A proposta era ter um espaço onde as pessoas pudessem relaxar depois de um dia no mar, dividir pratos, tomar alguns drinks e conversar sobre o vento do dia.</p>
            <p>Com o tempo a cozinha ganhou personalidade própria. No cardápio você encontra pratos com influências de vários lugares — frutos do mar, carnes, opções vegetarianas, pizzas e algumas criações que simplesmente surgiram na cozinha.</p>
            <p className="font-medium text-black">Cumbuco sempre foi um encontro de culturas.<br />O MUDA reflete exatamente isso.</p>
          </div>
          <div className="mt-12 flex gap-4">
            <Link to="/pt/cardapio" className="btn-primary">Ver Cardápio</Link>
            <Link to="/pt/reservas" className="btn-secondary">Reservar Mesa</Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="columns-2 md:columns-3 gap-3">
            {[
              ['/images/muda-evening.jpg', 'MUDA à noite'],
              ['/images/muda-food-1.jpg', 'Prato do MUDA'],
              ['/images/muda-exterior.jpg', 'Exterior do MUDA'],
              ['/images/muda-food-3.jpg', 'Criação da cozinha'],
              ['/images/muda-cocktail.jpg', 'Coquetéis do MUDA'],
              ['/images/muda-food-13.jpg', 'Prato do MUDA'],
            ].map(([src, alt]) => (
              <img key={src} src={src} alt={alt} className="break-inside-avoid w-full mb-3 object-cover" />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
