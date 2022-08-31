let ingredients: Ingredient[] = [
  { id: '1', isChecked: false, name: '1 cup diced onion', recipeId: '1' },
  { id: '2', isChecked: true, name: '1 cup diced shallots', recipeId: '1' },
  { id: '3', isChecked: true, name: '1 cup diced eggs', recipeId: '2' },
  { id: '4', isChecked: true, name: '1 cup diced bell pepper', recipeId: '2' },
  { id: '5', isChecked: false, name: '1 tbls garlic', recipeId: '3' },
  { id: '6', isChecked: false, name: '2 cups rice', recipeId: '3' },
  { id: '7', isChecked: false, name: 'beans', recipeId: '4' },
  { id: '8', isChecked: false, name: '2 cups green beans', recipeId: '4' },
]

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
    recipeId: i.recipeId,
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
