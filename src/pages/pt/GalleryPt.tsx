import SEOHead from '../../components/SEOHead'

const PHOTOS: [string, string][] = [
  ['/images/muda-evening.jpg', 'MUDA restaurante cheio à noite'],
  ['/images/muda-group.jpg', 'Jantar em grupo no MUDA Cumbuco'],
  ['/images/hero-terrace.jpg', 'Terraço do MUDA à noite'],
  ['/images/muda-exterior.jpg', 'Exterior do MUDA com buganvílias'],
  ['/images/muda-cocktail.jpg', 'Aperol Spritz no MUDA'],
  ['/images/muda-tuna.jpg', 'Atum grelhado com rúcula'],
  ['/images/muda-food-1.jpg', 'Prato de frutos do mar'],
  ['/images/muda-food-2.jpg', 'Criação da cozinha'],
  ['/images/muda-food-3.jpg', 'Atum na folha de bananeira'],
  ['/images/muda-food-4.jpg', 'Prato do MUDA'],
  ['/images/muda-food-6.jpg', 'Camarão ao alho'],
  ['/images/muda-food-12.jpg', 'Prato do MUDA'],
  ['/images/muda-food-13.jpg', 'Prato do MUDA'],
  ['/images/muda-food-15.jpg', 'Prato do MUDA'],
  ['/images/muda-food-16.jpg', 'Costelas assadas'],
  ['/images/muda-seafood.jpg', 'Frutos do mar do dia'],
  ['/images/muda-woodfire-oven.jpg', 'Forno a lenha'],
  ['/images/muda-dumplings.jpg', 'Dumplings do MUDA'],
  ['/images/muda-dish-4th.jpg', 'Criação da cozinha'],
  ['/images/muda-dessert.jpg', 'Brownie com sorvete de castanha'],
  ['/images/muda-interior.jpg', 'Interior do restaurante MUDA'],
]

export default function GalleryPt() {
  return (
    <>
      <SEOHead
        title="Galeria – MUDA Restaurant Cumbuco | Fotos e Ambiente"
        description="Um olhar dentro do MUDA Restaurant — fotos de pratos, o terraço, coquetéis e noites em Cumbuco."
        canonical="/pt/galeria"
      />

      <div className="bg-black text-white py-20 text-center">
        <div className="text-xs tracking-[0.35em] uppercase text-gold mb-4 font-body">Fotos</div>
        <h1 className="font-heading text-4xl md:text-5xl">Um pouco do MUDA</h1>
        <div className="w-12 h-px bg-gold mx-auto mt-6" />
      </div>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-gray-500 font-body leading-relaxed mb-12 max-w-xl mx-auto">
            Alguns lugares são difíceis de explicar apenas com palavras. A melhor forma de entender o MUDA é ver o ambiente — o espaço aberto no andar de cima, os pratos saindo da cozinha, os coquetéis e as noites em que o restaurante se enche de pessoas compartilhando comida e histórias.
          </p>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
            {PHOTOS.map(([src, alt]) => (
              <img key={src} src={src} alt={alt} className="break-inside-avoid w-full mb-3 object-cover" loading="lazy" />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
