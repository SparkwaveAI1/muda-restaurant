export interface MenuItem {
  name: string
  description: string
  price?: string
}

export interface MenuCategory {
  id: string
  label: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'menu',
    label: 'Menu',
    items: [
      { name: 'Overnight Ribs', description: 'Slow-cooked for hours until the meat falls from the bone. Served with roasted vegetables and house sauce.', price: 'R$89' },
      { name: 'Fresh Tuna', description: 'Seared tuna with mixed greens, roasted potato, and dark olive tapenade.', price: 'R$79' },
      { name: 'Garlic Shrimp', description: 'Whole prawns grilled with garlic butter, chili, and fresh herbs. Served on a wooden board.', price: 'R$85' },
      { name: 'Seafood Risotto', description: 'Creamy arborio rice with shrimp, fish, and seasonal vegetables. Finished with crispy parmesan.', price: 'R$78' },
      { name: 'Ceviche MUDA Style', description: 'Fresh catch of the day marinated in lime, coconut milk, and local peppers.', price: 'R$55' },
      { name: 'Greek Salad', description: 'Tomato, cucumber, olives, and feta with house dressing and fresh herbs.', price: 'R$42' },
      { name: 'Octopus', description: 'Grilled octopus with spinach rice, toasted almonds, and balsamic reduction.', price: 'R$88' },
      { name: 'Lamb Chops', description: 'Grilled lamb with roasted root vegetables and mint yogurt.', price: 'R$95' },
    ],
  },
  {
    id: 'pizza',
    label: 'Pizza',
    items: [
      { name: 'Margherita', description: 'San Marzano tomato, fresh mozzarella, basil, extra virgin olive oil.', price: 'R$48' },
      { name: 'Pepperoni', description: 'Tomato base, mozzarella, generous pepperoni, fresh oregano.', price: 'R$52' },
      { name: 'Seafood Pizza', description: 'Cream base, mozzarella, shrimp, clams, capers, and lemon zest.', price: 'R$65' },
      { name: 'Truffle & Mushroom', description: 'White base, mixed mushrooms, truffle oil, arugula, and shaved parmesan.', price: 'R$62' },
      { name: 'Burrata & Prosciutto', description: 'Tomato base, burrata, prosciutto crudo, rocket, and balsamic glaze.', price: 'R$68' },
    ],
  },
  {
    id: 'bebida',
    label: 'Bebida',
    items: [
      { name: 'Caipirinha', description: 'Brazil\'s national cocktail. Cachaça, fresh lime, sugar, and crushed ice.', price: 'R$28' },
      { name: 'Mojito', description: 'White rum, fresh mint, lime juice, sugar, soda water.', price: 'R$30' },
      { name: 'Aperol Spritz', description: 'Aperol, prosecco, soda water, orange slice.', price: 'R$32' },
      { name: 'Craft Beer', description: 'Local and imported craft beers. Ask your server for today\'s selection.', price: 'R$22' },
      { name: 'Fresh Coconut Water', description: 'Served chilled straight from the coconut.', price: 'R$12' },
      { name: 'Fresh Juice', description: 'Seasonal tropical fruits. Ask for today\'s selection.', price: 'R$15' },
    ],
  },
  {
    id: 'wine',
    label: 'Wine List',
    items: [
      { name: 'House Red', description: 'Full-bodied Malbec from Mendoza, Argentina. Plum, dark cherry, subtle oak.', price: 'R$35 / R$120' },
      { name: 'House White', description: 'Crisp Sauvignon Blanc from Chile. Citrus, green apple, fresh finish.', price: 'R$35 / R$120' },
      { name: 'Rosé', description: 'Dry Provençal rosé. Strawberry, peach, light and elegant.', price: 'R$38 / R$135' },
      { name: 'Sparkling', description: 'Italian Prosecco DOC. Fine bubbles, pear and white peach notes.', price: 'R$42 / R$150' },
      { name: 'Premium Red', description: 'Reserva Cabernet Sauvignon. Ask your server for current selection.', price: 'R$180' },
    ],
  },
]
