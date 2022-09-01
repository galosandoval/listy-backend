export let listRecipes = [
  {
    id: '1',
    recipeId: '2',
    listId: '1',
    userId: '1'
  },
  {
    id: '2',
    recipeId: '4',
    listId: '1',
    userId: '1'
  },
  {
    id: '3',
    recipeId: '1',
    listId: '2',
    userId: '1'
  },
  {
    id: '4',
    recipeId: '3',
    listId: '2',
    userId: '1'
  },
  {
    id: '5',
    recipeId: '3',
    listId: '3',
    userId: '1'
  },
  {
    id: '6',
    recipeId: '2',
    listId: '3',
    userId: '1'
  },
  {
    id: '7',
    recipeId: '4',
    listId: '4',
    userId: '1'
  },
  {
    id: '8',
    recipeId: '2',
    listId: '4',
    userId: '1'
  },
  {
    id: '9',
    recipeId: '3',
    listId: '4',
    userId: '1'
  }
]

export type ListRecipes = {
  id: string
  recipeId: string
  listId: string
  userId: string
}

export const findRecipesByListId = (recipeId: string) => {
  const foundListRecipes = listRecipes.filter((lr) => lr.recipeId === recipeId)
  return Promise.resolve(foundListRecipes)
}

export const addListRecipes = (
  newListRecipes: Pick<ListRecipes, 'listId' | 'recipeId' | 'userId'>
) => {
  const listRecipesToAdd = {
    ...newListRecipes,
    id: '10'
  }
  listRecipes.push(listRecipesToAdd)
  return Promise.resolve(listRecipesToAdd)
}

export const updateListRecipes = (updates: Partial<ListRecipes>) => {
  const foundIndex = listRecipes.findIndex((lr) => lr.id === updates.id)
  listRecipes[foundIndex] = { ...listRecipes[foundIndex], ...updates }
  return Promise.resolve(listRecipes[foundIndex])
}

export const removeListRecipes = (listRecipesId: string) => {
  listRecipes = listRecipes.filter((lr) => lr.id !== listRecipesId)
  Promise.resolve(listRecipesId)
}
