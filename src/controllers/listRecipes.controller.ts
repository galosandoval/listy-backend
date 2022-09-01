import { NextFunction, Request, Response } from 'express'
import { ListRecipes } from '../models'

export const getRecipesByListId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const recipes = await ListRecipes.findRecipesByListId(req.params.recipeId)
    res.json(recipes)
  } catch (error) {
    next(error)
  }
}

export const add = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const listRecipesToAdd = await ListRecipes.addListRecipes(req.body)
    res.json(listRecipesToAdd)
  } catch (error) {
    next(error)
  }
}

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedListRecipes = await ListRecipes.updateListRecipes(req.body)
    res.json(updatedListRecipes)
  } catch (error) {
    next(error)
  }
}

export const remove = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const removedId = await ListRecipes.removeListRecipes(
      req.params.listRecipesId
    )
    res.json(removedId)
  } catch (error) {
    next(error)
  }
}
