export type Ingredient = {
  id: string
  recipeId: string
  name: string
  isChecked: boolean
}

export const findIngredients = (recipeId: string) => {
  const foundIngredients = ingredients.filter((i) => i.recipeId === recipeId)

  return Promise.resolve(foundIngredients)
}

export const addIngredients = (
  ingredientsInfo: Pick<Ingredient, 'name' | 'recipeId'>[]
) => {
  const ingredientsToAdd: Ingredient[] = ingredientsInfo.map((i, idx) => ({
    id: (9 + idx).toString(),
    isChecked: false,
    name: i.name,
    recipeId: i.recipeId
  }))

  ingredients = ingredients.concat(ingredientsToAdd)
  return Promise.resolve(ingredientsToAdd)
}

export const updateIngredient = (updates: Partial<Ingredient>) => {
  const foundIndex = ingredients.findIndex((i) => i.id === updates.id)

  if (foundIndex !== -1) {
    ingredients[foundIndex] = { ...ingredients[foundIndex], ...updates }
  }

  return Promise.resolve(ingredients[foundIndex])
}

export const removeIngredients = (recipeId: string) => {
  const newIngredients = ingredients.filter((i) => i.recipeId !== recipeId)

  ingredients = newIngredients

  return Promise.resolve(ingredients)
}

export const removeIngredient = (ingredientId: string) => {
  ingredients = ingredients.filter((i) => i.id !== ingredientId)

  return Promise.resolve(ingredients)
}

let ingredients: Ingredient[] = [
  {
    id: '1',
    name: '2 tablespoons unsalted butter, more as needed',
    recipeId: '1',
    isChecked: false
  },
  {
    id: '2',
    name: 'Olive oil',
    recipeId: '1',
    isChecked: false
  },
  {
    id: '3',
    name: '2/3 cup sugar',
    recipeId: '2',
    isChecked: false
  },
  {
    id: '4',
    name: '8 ounces mushrooms, ends trimmed and sliced into even pieces',
    recipeId: '1',
    isChecked: false
  },
  {
    id: '5',
    name: '3 cloves garlic, smashed',
    recipeId: '1',
    isChecked: false
  },
  {
    id: '6',
    name: '½ shallot, finely minced, about 2 tablespoons',
    recipeId: '1',
    isChecked: false
  },
  {
    id: '7',
    name: 'Kosher salt',
    recipeId: '1',
    isChecked: false
  },
  {
    id: '8',
    name: 'Freshly ground black pepper',
    recipeId: '1',
    isChecked: false
  },
  {
    id: '9',
    name: 'Sherry vinegar',
    recipeId: '1',
    isChecked: false
  },
  {
    id: '10',
    name: '3 tablespoons crème fraîche',
    recipeId: '1',
    isChecked: false
  },
  {
    id: '11',
    name: '2 thick slices sourdough or country bread, toasted in a pan with butter',
    recipeId: '1',
    isChecked: false
  },
  {
    id: '12',
    name: 'Handful of arugula, tossed with olive oil, lemon juice and salt',
    recipeId: '1',
    isChecked: false
  },
  {
    id: '13',
    name: '2 soft-poached eggs, topped with flaky salt and black pepper',
    recipeId: '1',
    isChecked: false
  },
  {
    id: '14',
    name: 'Gruyère cheese, shaved',
    recipeId: '1',
    isChecked: false
  },

  {
    id: '15',
    name: '2 cups heavy cream',
    recipeId: '2',
    isChecked: false
  },
  {
    id: '16',
    name: '6 large egg yolks',
    recipeId: '2',
    isChecked: false
  },
  {
    id: '17',
    name: '1 cup whole milk',
    recipeId: '2',
    isChecked: false
  },
  {
    id: '18',
    name: '1/8 teaspoon fine sea salt',
    recipeId: '2',
    isChecked: false
  },
  {
    id: '19',
    name: 'Your choice of flavoring ',
    recipeId: '2',
    isChecked: false
  },

  {
    id: '20',
    name: '3 Tbls ghee',
    recipeId: '3',
    isChecked: false
  },
  {
    id: '21',
    name: '1 large onion diced',
    recipeId: '3',
    isChecked: false
  },
  {
    id: '22',
    name: '4 cloves roughly chopped',
    recipeId: '3',
    isChecked: false
  },
  {
    id: '23',
    name: '2 tbls ginger finely chopped',
    recipeId: '3',
    isChecked: false
  },
  {
    id: '24',
    name: '1 medium jalapeno finely chopped',
    recipeId: '3',
    isChecked: false
  },
  {
    id: '25',
    name: '1/2 tsp fennel seeds',
    recipeId: '3',
    isChecked: false
  },
  {
    id: '26',
    name: '1 tsp black mustard seeds',
    recipeId: '3',
    isChecked: false
  },
  {
    id: '27',
    name: '2 tsp cumin seeds',
    recipeId: '3',
    isChecked: false
  },
  {
    id: '28',
    name: '2 tsp garam masala',
    recipeId: '3',
    isChecked: false
  },
  {
    id: '29',
    name: '1 lb baby spinach (fresh or frozen)',
    recipeId: '3',
    isChecked: false
  },
  {
    id: '30',
    name: '15 fresh mint leaves',
    recipeId: '3',
    isChecked: false
  },
  {
    id: '31',
    name: '1 tsp dried fenugreek leaves',
    recipeId: '3',
    isChecked: false
  },
  {
    id: '32',
    name: '2 tbls water (if using fresh spinach)',
    recipeId: '3',
    isChecked: false
  },
  {
    id: '33',
    name: '3/4 cups water',
    recipeId: '3',
    isChecked: false
  },
  {
    id: '34',
    name: '1/2 cup plain yogurt (or vegan yogurt)',
    recipeId: '3',
    isChecked: false
  },
  {
    id: '35',
    name: '3 cups cooked black lentils',
    recipeId: '3',
    isChecked: false
  },
  {
    id: '36',
    name: '1 tsp salt, more to taste!',
    recipeId: '3',
    isChecked: false
  },
  {
    id: '37',
    name: '2 slices of bread',
    recipeId: '4',
    isChecked: false
  },
  {
    id: '38',
    name: '2 tbls of your favorite jam',
    recipeId: '4',
    isChecked: false
  },
  {
    id: '39',
    name: '2 tbls of your favorite peanut butter',
    recipeId: '4',
    isChecked: false
  },
  {
    id: '40',
    name: '1 banana',
    recipeId: '4',
    isChecked: false
  }
]
