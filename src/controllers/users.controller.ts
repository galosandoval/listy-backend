import { NextFunction, Request, Response } from 'express'
import { Users } from '../models'

export const getById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await Users.findUserById(req.params.userId)
    res.json(user)
  } catch (error) {
    next(error)
  }
}

export const addUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await Users.addUser(req.body)
    res.json(user)
  } catch (error) {
    next(error)
  }
}
