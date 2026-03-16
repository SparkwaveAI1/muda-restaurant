import SEOHead from '../../components/SEOHead'

export default function ReservationsPt() {
  return (
    <>
      <SEOHead
        title="Reservas – MUDA Restaurant Cumbuco"
        description="Reserve sua mesa no MUDA Restaurant. Aberto todos os dias a partir das 17:30. WhatsApp: +55 85 99900-4024."
        canonical="/pt/reservas"
      />

      <div className="bg-black text-white py-20 text-center">
        <div className="text-xs tracking-[0.35em] uppercase text-gold mb-4 font-body">Garanta sua mesa</div>
        <h1 className="font-heading text-4xl md:text-5xl">Reservas</h1>
        <div className="w-12 h-px bg-gold mx-auto mt-6" />
      </div>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-2xl mb-6">Como Reservar</h2>
              <div className="w-8 h-px bg-gold mb-8" />
              <p className="text-gray-600 font-body leading-relaxed mb-6">
                O jantar no MUDA é descontraído e informal, mas fazer uma reserva pode ser uma boa ideia em noites movimentadas ou nos finais de semana.
              </p>
              <p className="text-gray-600 font-body leading-relaxed mb-8">
                Você pode reservar uma mesa por WhatsApp, telefone ou mensagem pelo site.
              </p>
              <p className="text-gray-600 font-body leading-relaxed mb-10">
                Se você estiver planejando um jantar em grupo ou alguma ocasião especial, avise com antecedência e faremos o possível para preparar tudo da melhor forma.
              </p>

              <div className="space-y-6">
                <div>
                  <div className="text-xs tracking-[0.25em] uppercase text-gold font-body mb-2">Horário</div>
                  <p className="font-body text-gray-700">Todos os dias · 17:30 – 23:00</p>
                </div>
                <div>
                  <div className="text-xs tracking-[0.25em] uppercase text-gold font-body mb-2">Telefone / WhatsApp</div>
                  <a href="tel:+5585999004024" className="font-body text-gray-700 hover:text-gold transition-colors">
                    +55 85 99900-4024
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="https://wa.me/5585999004024?text=Olá%2C%20gostaria%20de%20fazer%20uma%20reserva%20no%20MUDA%20Restaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-black text-white px-8 py-5 hover:bg-gold transition-colors duration-300 group"
              >
                <span className="font-heading text-lg">WhatsApp</span>
                <span className="text-2xl">→</span>
              </a>
              <a
                href="tel:+5585999004024"
                className="flex items-center justify-between w-full border border-black text-black px-8 py-5 hover:bg-black hover:text-white transition-colors duration-300 group"
              >
                <span className="font-heading text-lg">Ligar</span>
                <span className="text-2xl">→</span>
              </a>

              <div className="mt-8 p-6 bg-gray-50">
                <div className="text-xs tracking-[0.25em] uppercase text-gold font-body mb-3">Endereço</div>
                <p className="font-body text-gray-700 leading-relaxed">
                  Rua Alm. Soares Dutra 171<br />
                  Praia de Cumbuco<br />
                  Ceará – Brasil
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
