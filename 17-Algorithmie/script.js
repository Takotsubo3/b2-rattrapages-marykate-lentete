const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = q => new Promise(res => rl.question(q, res));

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
  { name: 'Mimolette', category: 'Fromage', price: 2.8, available: true },
  { name: 'Oeuf', category: 'Protéine', price: 1.5, available: false },
  { name: 'Poulet', category: 'Protéine', price: 2.0, available: true },
  { name: 'Tomates cerises', category: 'Légume', price: 2.3, available: true },
  { name: 'Avocat', category: 'Fruit', price: 3.0, available: false },
];

// const order = {
//   base: [bases[0]],
//   ingredients: [ingredients[2], ingredients[1], ingredients[1], ingredients[5]],
// };

let order = {
  base: [],
  ingredients: []
};

 function showBases() {

  console.log("\n=== BASE MENU ===");

  for (let i = 0; i < bases.length; i++) {
    console.log(
      i + 1,
      bases[i].name,
      "-",
      bases[i].price + "€",
      bases[i].available ? "" : "(NOT AVAILABLE)"
    );
  }
}

 function showIngredients() {

  console.log("\n=== INGREDIENT MENU ===");

  for (let i = 0; i < ingredients.length; i++) {
    console.log(
      i + 1,
      ingredients[i].name,
      "-",
      ingredients[i].price + "€",
      ingredients[i].available ? "" : "(NOT AVAILABLE)"
    );
  }
}

async function selectBase() {

  showBases();

  while (true) {

    let choice = await ask("Select a base (1-" + bases.length + ")");
    let index = Number(choice) - 1;

    let base = bases[index];

    if (!base) {
      console.log("Invalid choice");
      continue;
    }

    if (!base.available) {
      console.log("Base not available");
      continue;
    }

    order.base = [base];
    console.log("Selected base:", base.name);
    break;
  }
}

async function selectIngredients() {

  showIngredients();

  while (order.ingredients.length < 4) {

    let choice = await ask(
      "Select ingredient " +
      (order.ingredients.length + 1) +
      " (1-" + ingredients.length + ")"
    );

    let index = Number(choice) - 1;
    let ing = ingredients[index];

    if (!ing) {
      console.log("Invalid choice");
      continue;
    }

    if (!ing.available) {
      console.log("Not available");
      continue;
    }

    if (order.ingredients.includes(ing)) {
      console.log("Already selected");
      continue;
    }

    order.ingredients.push(ing);
    console.log("Added:", ing.name);
  }
}


async function verifyIngredients(base, ingredients) {

  if (base.length !== 1 || ingredients.length !== 4) {
    console.log("Please select 1 base and 4 ingredients");
    return false;
  }

  if (!base[0].available) {
    console.log("Base not available");
    return false;
  }

  for (let i = 0; i < ingredients.length; i++) {

    if (!ingredients[i].available) {
      console.log("Ingredient not available: " + ingredients[i].name);
      return false;
    }

    for (let j = i + 1; j < ingredients.length; j++) {
      if (ingredients[i].name === ingredients[j].name) {
        console.log("Ingredient has been selected multiple times: " + ingredients[i].name);
        return false;
      }
    }
  }

  return true;
}


async function calculatePrice(base, ingredients) {

    if (await verifyIngredients(base, ingredients)) {

        console.log("=== ORDER ===");

        console.log("Base:");

        base.forEach((base, i) => {
            console.log(i + 1, base.name + ": " + base.price);
        });

        console.log("Ingredients:");

        ingredients.forEach((ingredient, i) => {
            console.log(i + 1, ingredient.name + ": " + ingredient.price);
        });

        console.log("===================");

        let total = 0;

        for (let i = 0; i < base.length; i++) {
            total += base[i].price;
        }

        for (let i = 0; i < ingredients.length; i++) {
            total += ingredients[i].price;
        }

        console.log("Total: " + total + " Euros");

    } else {

        console.log("Something went wrong");
    }
}



async function main() {
   await selectBase();
  await selectIngredients();
  calculatePrice(order.base, order.ingredients);
  rl.close();
}

main();

