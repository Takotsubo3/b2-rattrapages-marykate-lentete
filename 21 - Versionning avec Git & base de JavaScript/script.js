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
  "\nPrice: $" + ingredient.price +
  "\nAvailable: " + (ingredient.available ? "Yes" : "No") +
  "\n======"
);
  });
}

async function addIngredient() {

  let name = "";
  while (!name.trim()) {
    name = await ask("Ingredient name: ");
    if (!name.trim()) console.log("Name cannot be empty");
  }

  let category = "";
  while (!category.trim()) {
    category = await ask("Category: ");
    if (!category.trim()) console.log("Category cannot be empty");
  }

  let price;
  while (true) {
    price = await ask("Price: ");
    if (!isNaN(price) && Number(price) > 0) break;
    console.log("Price must be a number > 0");
  }

  let available;
  while (true) {
    available = await ask("Available (true/false): ");
    if (available === "true" || available === "false") break;
    console.log("Must be true or false");
  }

  rl.close();
  ingredient = {name,category,price,available};
  console.log(ingredient);
  
    ingredients.push(ingredient); 

  return {
    name,
    category,
    price: Number(price),
    available: available === "true"
  };
}


 addIngredient();
 


