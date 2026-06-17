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
  ingredients.forEach((ingredient,index) => {
console.log(
    "==="+ingredient.name.toUpperCase()+"===" +
    "\nID: "   + (index + 1)+
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

async function deleteIngredient() {
  if (ingredients.length === 0) {
    console.log("No ingredients to delete.");
    return;
  }

  showIngredients(ingredients);

  let index;

  while (true) {
    const input = await ask("Enter the ID of the ingredient to delete: ");

    index = Number(input) - 1;

    if (!isNaN(index) && index >= 0 && index < ingredients.length) {
      break;
    }

    console.log("Invalid index");
  }

  const removed = ingredients.splice(index, 1);

  console.log("\n Deleted: " +removed[0].name);
}

async function changeAvailability() {
  if (ingredients.length === 0) {
    console.log("No ingredients available.");
    return;
  }

  showIngredients(ingredients);

  let index;

  while (true) {
    const input = await ask("Enter ingredient number to change availability: ");
    index = Number(input) - 1;

    if (!isNaN(index) && index >= 0 && index < ingredients.length) break;

    console.log("Invalid index");
  }

  const ingredient = ingredients[index];

  ingredient.available = !ingredient.available;

  console.log(
    `\n ${ingredient.name} is now ` +
    (ingredient.available ? "Available" : "Unavailable ")
  );

  showIngredients(ingredients);
}


function showAvailableIngredients(ingredients) {
  ingredients.forEach((ingredient, index) => {
    if (ingredient.available) {
     console.log(
    "==="+ingredient.name.toUpperCase()+"===" +
    "\nID: "   + (index + 1)+
  "\nCategory: " + ingredient.category +
  "\nPrice: $" + ingredient.price +
  "\nAvailable: " + (ingredient.available ? "Yes" : "No") +
  "\n======"
);
    }
  });
}

function showTotalIngredients(ingredients) {
  let total = ingredients.length
    console.log("Total number of ingredients: " + total);
}


showTotalIngredients(ingredients);



