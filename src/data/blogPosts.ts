export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  content: string
  image?: string
  imageAlt?: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'where-to-eat-in-cumbuco-after-kitesurfing',
    title: 'Where to Eat in Cumbuco After Kitesurfing',
    excerpt: 'After a long day on the water, one question always comes up. Here is where the answer usually leads.',
    date: 'March 2026',
    content: `If you spend the afternoon on the water in Cumbuco, the evening usually begins the same way.

Boards come off the beach. Harnesses hit the sand. Someone checks the wind forecast for tomorrow. Then everyone starts asking the same question:

**"Where are we eating tonight?"**

Cumbuco has grown a lot over the years, but it still feels like a small town when the sun goes down. The streets fill slowly with people walking back from the beach, and restaurants begin lighting their tables for the evening.

One place that has become part of that rhythm is MUDA Restaurant, located on the main street just a short walk from the village square.

The restaurant has been around since 2009, which in Cumbuco terms makes it almost part of the landscape.

After a long day on the water, the upstairs terrace is usually the best spot. The breeze still moves through the open space, and you can sit back with a drink while the kitchen starts sending out plates.

The menu is not strictly Brazilian or European. It's more like the town itself — a mix of influences from all the travelers who have passed through here.

Some people go straight for the slow-cooked ribs, which spend hours in the kitchen before they reach the table. Others go for seafood, risotto, or pizza.

But honestly, after a full day of kitesurfing, almost anything tastes good.

What matters more is the feeling of the evening: sandy feet, a cold drink, and the quiet satisfaction of a day well spent on the water.

That's what dinner in Cumbuco is really about.`,
  },
  {
    slug: 'fresh-seafood-coast-of-ceara',
    title: 'Fresh Seafood on the Coast of Ceará',
    excerpt: 'The coast of Ceará has a certain rhythm. Fishing boats, fresh catch, and evenings that taste like the sea.',
    date: 'March 2026',
    image: '/images/muda-tuna.jpg',
    imageAlt: 'Seared tuna on arugula at MUDA Restaurant Cumbuco',
    content: `The coast of Ceará has a certain rhythm to it.

Fishing boats head out early in the morning while the village is still quiet. By afternoon the beaches fill with wind and kitesurfers. And in the evening the restaurants begin preparing dinner.

Seafood has always been part of that daily cycle.

In Cumbuco the catch changes depending on the day and the season, but fish, shrimp, and octopus appear on many menus. Restaurants along the coast build their kitchens around those ingredients.

At MUDA Restaurant, seafood dishes sit comfortably alongside other styles of cooking. The kitchen moves between grilled fish, risottos, salads, and creative plates that reflect the mix of cultures in the town.

One of the things people notice quickly is that the menu is wide. You might see tuna, pizza, or a Greek salad next to something that feels completely Brazilian.

That variety makes sense in a place like Cumbuco. Travelers from all over the world pass through here chasing wind and warm water.

The result is a dining scene that doesn't follow strict rules. It's relaxed, creative, and always a little different from what you expect.

And if you're sitting outside on a warm evening with the ocean air moving through the street, seafood somehow tastes even better.`,
  },
  {
    slug: 'perfect-evening-cumbuco',
    title: 'A Perfect Evening in Cumbuco',
    excerpt: 'Evenings in Cumbuco have their own pace. Here is how a typical night unfolds.',
    date: 'February 2026',
    content: `Evenings in Cumbuco have their own pace.

During the day the village revolves around the wind. Kitesurfers head out to the water, dune tours move across the sand, and the beach is full of activity.

But when the sun drops, the energy changes.

People walk through the small streets near the square. Music drifts out of bars and restaurants. The air cools slightly, and the whole town begins to slow down.

A typical evening might start with a walk from the beach back toward the center of town.

Sooner or later you'll pass MUDA Restaurant, a place that has been part of the local dining scene for more than a decade.

Inside, the atmosphere is relaxed. Some guests sit downstairs near the bar. Others head upstairs where the open air and breeze make it easy to stay longer than planned.

The food is only part of the experience.

People come here for conversation, drinks, and the feeling of being in a place where locals and travelers share the same tables.

It's the kind of evening that doesn't feel rushed.

Dinner stretches into another drink. Stories about the day's wind start circulating around the table. Plans for tomorrow slowly take shape.

And before you know it, the night in Cumbuco has taken care of itself.`,
  },
  {
    slug: 'best-restaurants-cumbuco',
    title: 'Best Restaurants in Cumbuco: A Local Dining Guide',
    excerpt: 'Cumbuco is known first for wind and water. But the dining scene has grown into something worth writing about.',
    date: 'February 2026',
    content: `Cumbuco is known first for wind and water.

The beach here draws kitesurfers from all over the world. But over the years, as more travelers arrived and stayed longer, the village grew around them. Pousadas opened. Bars appeared. And restaurants started taking food seriously.

Today the dining scene in Cumbuco is small but genuinely good. You won't find a hundred options. But what's here tends to be honest, relaxed, and worth your time.

**MUDA Restaurant**

MUDA has been on the main street since 2009. It is one of the oldest restaurants in town and still one of the most consistent. The menu covers a wide range — fresh seafood, slow-cooked meats, creative risottos, wood-fired pizza, and cocktails that give you a reason to linger.

The upstairs terrace is the spot to aim for on warm evenings. The breeze moves through, the lighting is low, and the kitchen keeps things moving.

Reservations are a good idea on weekends.

**What to Expect from Cumbuco Dining**

Restaurants here open late by northern European standards. Most kitchens fire up around 17:30 to 18:00. Dinner is not rushed. Tables turn slowly. People stay.

The crowd is a mix of Brazilian locals, European kitesurfers, and international travelers who found this place and decided not to leave.

The food reflects that. You'll find Brazilian ingredients prepared with international ideas. It works.

**When to Go**

The kite season runs roughly from July through January, when the winds blow strongest. This is when the village is most alive and restaurants are busiest.

Outside of season Cumbuco is quieter, but the restaurants that stay open tend to be the good ones.`,
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
