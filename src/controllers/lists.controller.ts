import { NextFunction, Request, Response } from 'express'
import { Lists } from '../models'

export const get = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const lists = await Lists.findLists()
    res.json(lists)
  } catch (error) {
    console.error('Error while getting lists', error)
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
    const list = await Lists.findList(id)
    res.json(list)
  } catch (error) {
    console.error('Error while getting list', error)
    next(error)
  }
}

export const getByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params
  try {
    const lists = await Lists.findListsByUserId(userId)
    res.json(lists)
  } catch (error) {
    console.error('Error while getting lists', error)
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
    const lists = await Lists.addList(body)
    res.json(lists)
  } catch (error) {
    console.error('Error while adding list', error)
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
    const lists = await Lists.updateList(body)
    res.json(lists)
  } catch (error) {
    console.error('Error while adding list', error)
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
    const lists = await Lists.removeList(id)
    res.json(lists)
  } catch (error) {
    console.error('Error while adding list', error)
    next(error)
  }
}

// router.get('/recipes', (_, res) => {
//   Lists.findAllRecipesInList()
//     .then((groceryListRecipes) => {
//       res.status(200).json({ groceryListRecipes })
//     })
//     .catch((error) => {
//       res.status(404).json(error)
//     })
// })

// router.get('/recipes/:id', (req, res) => {
//   const { id } = req.params
//   Lists.findRecipesWithIngredients(id)
//     .then((groceryListRecipes) => {
//       res.status(200).json({ groceryListRecipes })
//     })
//     .catch((error) => {
//       res.status(404).json(error)
//     })
// })
