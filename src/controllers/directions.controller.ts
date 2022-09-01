import { NextFunction, Request, Response } from 'express'
import { Directions } from '../models'

export const getByRecipeId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const directions = await Directions.findByRecipeId(req.params.recipeId)
    res.json(directions)
  } catch (error) {
    next(error)
  }
}

export const addDirections = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const addedDirections = await Directions.add(req.body)
    res.json(addedDirections)
  } catch (error) {
    next(error)
  }
}

export const removeDirections = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const recipeIdAdded = await Directions.remove(req.params.recipeId)
    res.json(recipeIdAdded)
  } catch (error) {
    next(error)
  }
}
