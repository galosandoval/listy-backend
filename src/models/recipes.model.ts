// const db = require("../../data/connection");

let recipes: Recipe[] = [
  {
    address: 'recipes.com',
    author: 'alton brown',
    createdOn: 'now',
    description: 'A damn good recipe',
    id: '1',
    imgUrl: 'heres an image url',
    name: 'Good good',
    userId: '1',
  },
  {
    address: 'recipes.com',
    author: 'alton brown',
    createdOn: 'now',
    description: 'A decent good recipe',
    id: '2',
    imgUrl: 'heres an image url',
    name: 'That Good good',
    userId: '1',
  },
  {
    address: 'recipes.com',
    author: 'galo sandoval',
    createdOn: 'now',
    description: 'A pretty good recipe',
    id: '3',
    imgUrl: 'heres an image url',
    name: 'Good good',
    userId: '1',
  },
  {
    address: 'recipes.com',
    author: 'alton brown',
    createdOn: 'now',
    description: 'A damn good recipe',
    id: '4',
    imgUrl: 'heres an image url',
    name: 'Good good',
    userId: '1',
  },
]

export type Recipe = {
  id: string
  name: string
  description: string
  imgUrl: string
  author: string
  address: string
  createdOn: string
  userId: string
}

export const findRecipes = () => {
  return Promise.resolve(recipes)
}

export const findRecipeById = (recipeId: string) => {
  const foundRecipe = recipes.find((recipe) => recipe.id === recipeId)
  if (foundRecipe) return Promise.resolve(foundRecipe)
  else throw new Error(`Did not find recipe with id: ${recipeId}`)
}

export type AddRecipeParams = Pick<
  Recipe,
  'address' | 'author' | 'description' | 'imgUrl' | 'name' | 'userId'
>
export const addRecipe = (recipe: AddRecipeParams) => {
  const recipeToAdd: Recipe = {
    ...recipe,
    createdOn: 'now',
    id: '5',
  }
  recipes.push(recipeToAdd)
  return Promise.resolve(recipes)
}

export const removeRecipe = (recipeId: string) => {
  recipes = recipes.filter((recipe) => recipe.id !== recipeId)

  return Promise.resolve(recipes)
}

export const updateRecipe = (updates: Partial<Recipe>) => {
  const foundIndex = recipes.findIndex((recipe) => recipe.id === updates.id)

  if (foundIndex !== -1) {
    recipes[foundIndex] = { ...recipes[foundIndex], ...updates }
  }

  return Promise.resolve(recipes[foundIndex])
}

// const findIngredientsByRecipeId = (id) => {
//   return db(recipes)
//     .join('ingredients', 'recipes.id', '=', 'ingredients.recipe-id')
//     .select(
//       'ingredients.name',
//       'ingredients.id',
//       'recipes.id as recipe-id',
//       'ingredients.isChecked'
//     )
//     .where('recipes.id', id)
// }

// const findRecipesByUserId = (userId) => {
//   return db(recipes)
//     .join('users', 'users.id', '=', 'recipes.user-id')
//     .whereIn('user-id', [userId === 1 ? 1 : 1, userId])
//     .select(
//       'recipes.id',
//       'recipes.recipe-name',
//       'recipes.description',
//       'recipes.img-url',
//       'recipes.user-id',
//       'recipes.address',
//       'recipes.author'
//     )
// }
