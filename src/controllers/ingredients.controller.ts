import { NextFunction, Request, Response } from 'express'
import { Ingredients } from '../models'

export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ingredients = await Ingredients.findIngredients(req.params.recipeId)
    res.json(ingredients)
  } catch (error) {
    next(error)
  }
}

export const add = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const addedIngredients = await Ingredients.findIngredients(req.body)
    res.json(addedIngredients)
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
    const updatedIngredient = await Ingredients.updateIngredient(req.body)
    res.json(updatedIngredient)
  } catch (error) {
    next(error)
  }
}

export const removeAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const removeIngredients = await Ingredients.removeIngredients(
      req.params.recipeId
    )
    res.json(removeIngredients)
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
    const removeIngredients = await Ingredients.removeIngredient(
      req.params.ingredientId
    )
    res.json(removeIngredients)
  } catch (error) {
    next(error)
  }
}
