import { useState } from 'react'
import SEOHead from '../../components/SEOHead'
import { menuCategories } from '../../data/menuItems'
import type { MenuItem } from '../../data/menuItems'

const tabs = ['CARDÁPIO', 'PIZZA', 'BEBIDAS', 'CARTA DE VINHOS']
const tabMap: Record<string, string> = {
  'CARDÁPIO': 'menu',
  'PIZZA': 'pizza',
  'BEBIDAS': 'drinks',
  'CARTA DE VINHOS': 'wine',
}

export default function MenuPt() {
  const [activeTab, setActiveTab] = useState('CARDÁPIO')
  const catId = tabMap[activeTab]
  const category = menuCategories.find((c) => c.id === catId)
  const filtered: MenuItem[] = category?.items ?? []

  return (
    <>
      <SEOHead
        title="Cardápio – MUDA Restaurant Cumbuco | Frutos do Mar, Pizza e Bar"
        description="Veja o cardápio completo do MUDA Restaurant. Frutos do mar frescos, pizzas no forno a lenha, drinks artesanais e carta de vinhos."
        canonical="/pt/cardapio"
      />

      <div className="bg-black text-white py-20 text-center">
        <div className="text-xs tracking-[0.35em] uppercase text-gold mb-4 font-body">Nossa Cozinha</div>
        <h1 className="font-heading text-4xl md:text-5xl">Cardápio</h1>
        <div className="w-12 h-px bg-gold mx-auto mt-6" />
      </div>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-gray-500 font-body leading-relaxed mb-4 max-w-xl mx-auto">
            A cozinha do MUDA não segue apenas uma culinária específica. Ela acompanha o ritmo do litoral e das pessoas que passam por Cumbuco.
          </p>
          <p className="text-center text-gray-400 font-body text-sm mb-12">
            Também mantemos opções vegetarianas e veganas para que todos na mesa possam encontrar algo que gostem.
          </p>

          {/* Tabs */}
          <div className="flex justify-center gap-1 mb-12 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-xs tracking-[0.2em] uppercase font-body transition-colors duration-200 ${
                  activeTab === tab ? 'bg-black text-white' : 'text-gray-400 hover:text-black'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="divide-y divide-gray-100">
            {filtered.length > 0 ? filtered.map((item) => (
              <div key={item.name} className="py-6 flex justify-between items-start gap-6">
                <div>
                  <h3 className="font-heading text-lg mb-1">{item.name}</h3>
                  <p className="text-gray-500 font-body text-sm leading-relaxed">{item.description}</p>

                </div>
                <div className="text-right shrink-0">
                  <span className="font-heading text-lg">{item.price}</span>
                </div>
              </div>
            )) : (
              <div className="py-12 text-center text-gray-400 font-body text-sm">
                Itens em breve
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
