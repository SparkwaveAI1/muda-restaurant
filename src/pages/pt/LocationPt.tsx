import SEOHead from '../../components/SEOHead'

export default function LocationPt() {
  return (
    <>
      <SEOHead
        title="Como Chegar – MUDA Restaurant Cumbuco, Ceará"
        description="O MUDA Restaurant fica na rua principal de Cumbuco, Ceará. Rua Alm. Soares Dutra 171, a poucos minutos da praia."
        canonical="/pt/localizacao"
      />

      <div className="bg-black text-white py-20 text-center">
        <div className="text-xs tracking-[0.35em] uppercase text-gold mb-4 font-body">Onde Estamos</div>
        <h1 className="font-heading text-4xl md:text-5xl">Restaurante em Cumbuco</h1>
        <div className="w-12 h-px bg-gold mx-auto mt-6" />
      </div>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-2xl mb-6">Como Chegar</h2>
              <div className="w-8 h-px bg-gold mb-8" />
              <p className="text-gray-600 font-body leading-relaxed mb-6">
                O MUDA está localizado na rua principal de Cumbuco, a poucos minutos de caminhada da praça e da praia.
              </p>
              <p className="text-gray-600 font-body leading-relaxed mb-6">
                Cumbuco é conhecido no mundo inteiro pelo vento constante e pelas praias extensas, o que faz da vila um dos destinos de kitesurf mais famosos do Brasil.
              </p>
              <p className="text-gray-600 font-body leading-relaxed mb-10">
                O MUDA está bem no meio desse movimento. À noite a vila ganha outro ritmo — as pessoas caminham pelas ruas, a música começa a sair dos bares e restaurantes, e os espaços vão se enchendo aos poucos com moradores e viajantes.
              </p>

              <div className="border-l-2 border-gold pl-6 mb-10">
                <div className="text-xs tracking-[0.25em] uppercase text-gold font-body mb-3">Endereço</div>
                <p className="font-heading text-lg leading-relaxed">
                  Rua Alm. Soares Dutra 171<br />
                  Praia de Cumbuco<br />
                  Ceará – Brasil
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-gold shrink-0" />
                  <div>
                    <div className="text-xs tracking-[0.25em] uppercase text-gold font-body mb-1">Horário</div>
                    <p className="font-body text-gray-700">Todos os dias · 17:30 – 23:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-gold shrink-0" />
                  <div>
                    <div className="text-xs tracking-[0.25em] uppercase text-gold font-body mb-1">Telefone / WhatsApp</div>
                    <a href="tel:+5585999004024" className="font-body text-gray-700 hover:text-gold transition-colors">
                      +55 85 99900-4024
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <iframe
                  title="MUDA Restaurant no mapa"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.0!2d-38.526!3d-3.622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMzcnMTkuMiJTIDM4wrAzMSczMy42Ilc!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <a
                href="https://maps.google.com/?q=Rua+Alm.+Soares+Dutra+171,+Cumbuco,+Ceará"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-4 text-xs tracking-[0.2em] uppercase font-body text-gold hover:text-black transition-colors"
              >
                Abrir no Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
