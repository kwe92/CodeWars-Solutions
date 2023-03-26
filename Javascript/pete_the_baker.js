const recipe = { flour: 500, sugar: 200, eggs: 1 };

const available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };

const cakes = (recipe, available) => {
  console.log(recipe.flour);
};

for (const [key, value] of Object.entries(recipe)) {
  console.log(`${key}: ${value}`);
}

// must return 2
// cakes(recipe, available);
