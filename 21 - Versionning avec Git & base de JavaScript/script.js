const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const ask = (q) => new Promise((res) => rl.question(q, res));

const ingredients = [
  { name: 'Betteraves', category: 'Légume', price: 1.5, available: false },
  { name: 'Carottes', category: 'Légume', price: 1.2, available: true },
  { name: 'Emmental', category: 'Fromage', price: 2.5, available: true },
  { name: 'Mimolette', category: 'Fromage', price: 2.8, available: true },
  { name: 'Oeuf', category: 'Protéine', price: 1.5, available: false },
  { name: 'Poulet', category: 'Protéine', price: 2.0, available: true },
  { name: 'Tomates cerises', category: 'Légume', price: 2.3, available: true },
  { name: 'Avocat', category: 'Fruit', price: 3.0, available: false },
];

function showIngredients(ingredients) {
  ingredients.forEach((ingredient) => {
console.log(
    "==="+ingredient.name.toUpperCase()+"===" +
  "\nCategory: " + ingredient.category +
  "\nPrice: $" + ingredient.price.toFixed(2) +
  "\nAvailable: " + (ingredient.available ? "Yes" : "No") +
  "\n======"
);
  });
}

showIngredients(ingredients);
