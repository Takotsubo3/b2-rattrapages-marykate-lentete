const bases = [
  { name: 'Épinard', category: 'Salade', price: 2.5, available: true },
  { name: 'Iceberg', category: 'Salade', price: 2.0, available: false },
  { name: 'Mâche', category: 'Salade', price: 2.8, available: true },
  { name: 'Pâtes', category: 'Féculent', price: 3.0, available: true },
  {
    name: 'Pâtes complètes',
    category: 'Féculent',
    price: 3.2,
    available: true,
  },
  { name: 'Quinoa', category: 'Féculent', price: 3.8, available: true },
];

const ingredients = [
  { name: 'Betteraves', category: 'Légume', price: 1.5, available: false },
  { name: 'Carottes', category: 'Légume', price: 1.2, available: true },
  { name: 'Emmental', category: 'Fromage', price: 2.5, available: true },
  { name: 'Mimolette', category: 'Fromage', price: 2.8, available: false },
  { name: 'Oeuf', category: 'Protéine', price: 1.5, available: false },
  { name: 'Poulet', category: 'Protéine', price: 2.0, available: true },
  { name: 'Tomates cerises', category: 'Légume', price: 2.3, available: true },
  { name: 'Avocat', category: 'Fruit', price: 3.0, available: false },
];

const order = {
  base: [bases[0]],
  ingredients: [ingredients[2], ingredients[3], ingredients[4], ingredients[5]],
};

function verifyOrder(base, ingredients) {
  if (order.base.length === 1 && order.ingredients.length === 4) {
    console.log('Proceed to checkout');
  } else {
    console.log('Please select 1 base and 4 ingredients');
  }
}




