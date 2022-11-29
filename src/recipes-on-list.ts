import { RecipesOnList } from '@prisma/client'
import express, { NextFunction, Request, Response, Router } from 'express'

const router = express.Router()

router.get('/:listId', getRecipesByListId)
async function getRecipesByListId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const recipes = await findRecipesByListId(parseInt(req.params.recipeId))
    res.json(recipes)
  } catch (error) {
    next(error)
  }
}
function findRecipesByListId(recipeId: number) {
  const foundListRecipes = listRecipes.filter((lr) => lr.recipeId === recipeId)
  return Promise.resolve(foundListRecipes)
}

router.post('/', add)
async function add(req: Request, res: Response, next: NextFunction) {
  try {
    const listRecipesToAdd = await addListRecipes(req.body)
    res.json(listRecipesToAdd)
  } catch (error) {
    next(error)
  }
}
function addListRecipes(
  newListRecipes: Pick<RecipesOnList, 'listId' | 'recipeId' | 'userId'>
) {
  const listRecipesToAdd = {
    ...newListRecipes,
    id: 10
  }
  listRecipes.push(listRecipesToAdd)
  return Promise.resolve(listRecipesToAdd)
}

router.put('/', update)
async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const updatedListRecipes = await updateListRecipes(req.body)
    res.json(updatedListRecipes)
  } catch (error) {
    next(error)
  }
}
function updateListRecipes(updates: Partial<RecipesOnList>) {
  const foundIndex = listRecipes.findIndex((lr) => lr.id === updates.id)
  listRecipes[foundIndex] = { ...listRecipes[foundIndex], ...updates }
  return Promise.resolve(listRecipes[foundIndex])
}

router.delete('/', remove)
async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const removedId = await removeListRecipes(
      parseInt(req.params.listRecipesId)
    )
    res.json(removedId)
  } catch (error) {
    next(error)
  }
}
function removeListRecipes(listRecipesId: number) {
  listRecipes = listRecipes.filter((lr) => lr.id !== listRecipesId)
  Promise.resolve(listRecipesId)
}

export const recipesOnListRouter: Router = router

export let listRecipes = [
  {
    id: 1,
    recipeId: 2,
    listId: 1,
    userId: 1
  },
  {
    id: 2,
    recipeId: 4,
    listId: 1,
    userId: 1
  },
  {
    id: 3,
    recipeId: 1,
    listId: 2,
    userId: 1
  },
  {
    id: 4,
    recipeId: 3,
    listId: 2,
    userId: 1
  },
  {
    id: 5,
    recipeId: 3,
    listId: 3,
    userId: 1
  },
  {
    id: 6,
    recipeId: 2,
    listId: 3,
    userId: 1
  },
  {
    id: 7,
    recipeId: 4,
    listId: 4,
    userId: 1
  },
  {
    id: 8,
    recipeId: 2,
    listId: 4,
    userId: 1
  },
  {
    id: 9,
    recipeId: 3,
    listId: 4,
    userId: 1
  }
]
