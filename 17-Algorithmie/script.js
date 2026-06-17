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
//   ingredients: [ingredients[6], ingredients[3], ingredients[2], ingredients[5]],
// };


function verifyIngredients(base, ingredients) {
  if (order.base.length === 1 && order.ingredients.length === 4) {
    for (let i = 0; i < ingredients.length; i++) {
      if (ingredients[i].available === false) {
        console.log("Ingredient '" + ingredients[i].name + "' not available.");
        return false
      } else {
        for (let i = 0; i < ingredients.length; i++) {
          for (let j = i + 1; j < ingredients.length; j++) {
            if (ingredients[i].name === ingredients[j].name) {
              console.log(
                "Ingredient '" +
                  ingredients[i].name +
                  "' selected multiple times.",
              );
              return false;
            }
          }
        }
      }
    }
  } else {
    console.log('Please select 1 base and 4 ingredients');
    return false;
  }
  return true;
}

// console.log(verifyIngredients(order.base, order.ingredients));
