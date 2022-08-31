import { NextFunction, Request, Response } from 'express'
import { Recipes } from '../models'

export const get = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const recipes = Recipes.findRecipes()
    res.json(recipes)
  } catch (error) {
    next(error)
  }
}

export const getById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params
  try {
    const recipe = Recipes.findRecipeById(id)
    res.json(recipe)
  } catch (error) {
    next(error)
  }
}

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req
  try {
    const recipe = Recipes.addRecipe(body)
    res.json(recipe)
  } catch (error) {
    next(error)
  }
}

export const remove = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params
  try {
    const recipeToRemove = Recipes.removeRecipe(id)
    res.json(recipeToRemove)
  } catch (error) {
    next(error)
  }
}

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req
  try {
    const recipeToUpdate = Recipes.updateRecipe(body)
    res.json(recipeToUpdate)
  } catch (error) {
    next(error)
  }
}
