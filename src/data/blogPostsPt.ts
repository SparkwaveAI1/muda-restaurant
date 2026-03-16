export interface BlogPostPt {
  slug: string
  title: string
  excerpt: string
  date: string
  content: string
  image?: string
  imageAlt?: string
}

export const blogPostsPt: BlogPostPt[] = [
  {
    slug: 'onde-comer-em-cumbuco',
    title: 'Onde Comer em Cumbuco Depois do Kitesurf',
    excerpt: 'Depois de um dia inteiro no mar, a pergunta sempre aparece: vamos comer onde hoje?',
    date: 'Março 2026',
    image: '/images/muda-group.jpg',
    imageAlt: 'Grupo de amigos jantando no MUDA Restaurant Cumbuco',
    content: `Se você passou a tarde na água em Cumbuco, a noite geralmente começa da mesma forma.

As pranchas saem da areia, os equipamentos são guardados e alguém sempre pergunta:

"Vamos comer onde hoje?"

Mesmo tendo crescido bastante ao longo dos anos, Cumbuco ainda mantém o clima de vila quando o sol se põe. As ruas começam a encher de gente voltando da praia, e os restaurantes acendem suas luzes para a noite.

Um dos lugares que virou parte dessa rotina é o MUDA Restaurant, localizado a poucos passos da praça principal.

Depois de um dia inteiro no mar, o andar de cima costuma ser o lugar favorito. A brisa ainda passa pelo espaço aberto, e dá para sentar com um drink enquanto os pratos começam a chegar da cozinha.

O cardápio mistura influências brasileiras e internacionais, refletindo as pessoas que passam por Cumbuco.

Alguns escolhem as costelas preparadas lentamente. Outros preferem frutos do mar, risotos ou pizza.

Mas depois de um dia inteiro de kitesurf, quase qualquer coisa parece perfeita.

O importante é o clima da noite: pés ainda com areia, um drink gelado e aquela sensação de um dia bem aproveitado no mar.`,
  },
  {
    slug: 'frutos-do-mar-litoral-ceara',
    title: 'Frutos do Mar no Litoral do Ceará',
    excerpt: 'O litoral do Ceará tem um ritmo próprio. Barcos de pesca, peixe fresco e noites que sabem a mar.',
    date: 'Março 2026',
    image: '/images/muda-tuna.jpg',
    imageAlt: 'Atum grelhado com rúcula no MUDA Restaurant Cumbuco',
    content: `O litoral do Ceará tem um ritmo próprio.

Os barcos de pesca saem cedo pela manhã, enquanto a vila ainda está quieta. À tarde as praias ficam cheias de vento e kitesurfistas. E à noite os restaurantes começam a preparar o jantar.

Os frutos do mar sempre fizeram parte desse ciclo.

Em Cumbuco, o que aparece nos cardápios muda de acordo com o dia e a temporada, mas peixe, camarão e polvo são presenças constantes.

No MUDA Restaurant, os pratos com frutos do mar aparecem ao lado de outras influências culinárias. A cozinha trabalha com peixes grelhados, risotos, saladas e receitas criativas que refletem a mistura cultural da vila.

Uma das coisas que chama atenção é a variedade do cardápio. Você pode encontrar atum, pizza ou uma salada mediterrânea ao lado de pratos bem brasileiros.

Isso faz sentido em um lugar como Cumbuco, onde viajantes do mundo inteiro passam em busca de vento e mar.

O resultado é uma cena gastronômica descontraída e cheia de personalidade.

E quando você está sentado ao ar livre em uma noite quente, com a brisa do oceano passando pelas ruas, os frutos do mar parecem ainda melhores.`,
  },
  {
    slug: 'uma-noite-perfeita-cumbuco',
    title: 'Uma Noite Perfeita em Cumbuco',
    excerpt: 'As noites em Cumbuco têm um ritmo especial. Veja como uma noite típica se desenrola.',
    date: 'Fevereiro 2026',
    image: '/images/muda-evening.jpg',
    imageAlt: 'Terraço do MUDA Restaurant à noite com luminárias de rattan e clientes jantando',
    content: `As noites em Cumbuco têm um ritmo especial.

Durante o dia tudo gira em torno do vento. Kitesurfistas entram na água, passeios de buggy cruzam as dunas e a praia fica cheia de movimento.

Quando o sol se põe, tudo muda.

As pessoas caminham pelas ruas perto da praça, a música começa a sair dos bares e restaurantes, e o clima da vila fica mais tranquilo.

Uma noite típica pode começar com uma caminhada da praia até o centro.

Em algum momento você vai passar pelo MUDA Restaurant, um lugar que faz parte da cena gastronômica local há mais de uma década.

O ambiente é relaxado. Alguns clientes ficam perto do bar no térreo, enquanto outros preferem o espaço aberto no andar de cima, onde a brisa da noite passa com facilidade.

A comida é apenas parte da experiência.

As pessoas vêm para conversar, dividir pratos, tomar drinks e aproveitar o clima da vila.

É o tipo de noite que acontece sem pressa.

O jantar vira mais um drink, as histórias do dia começam a circular pela mesa e os planos para o dia seguinte aparecem naturalmente.

E quando você percebe, a noite em Cumbuco já se resolveu sozinha.`,
  },
]

export function getBlogPostPt(slug: string): BlogPostPt | undefined {
  return blogPostsPt.find((p) => p.slug === slug)
}
