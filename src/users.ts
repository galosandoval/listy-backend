import { User } from '@prisma/client'
import express, { NextFunction, Request, Response, Router } from 'express'

const router = express.Router()

router.get('/:userId', getById)
async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await findUserById(parseInt(req.params.userId))
    res.json(user)
  } catch (error) {
    next(error)
  }
}
function findUserById(userId: number) {
  const user = users.find((u) => u.id === userId)
  return Promise.resolve(user)
}

router.post('/', registerUser)
async function registerUser(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await addUser(req.body)
    res.json(user)
  } catch (error) {
    next(error)
  }
}

function addUser(newUser: Omit<User, 'id'>) {
  return Promise.resolve({
    ...newUser
  })
}

export const usersRouter: Router = router

export let users = [
  {
    id: 1,
    firstName: 'Galo',
    lastName: 'Sandoval',
    username: 'demo',
    password: 'password'
  },
  {
    id: 2,
    firstName: 'Raymond',
    lastName: 'Rowe',
    username: 'rowe@gmail.com',
    password: 'password'
  },
  {
    id: 3,
    firstName: 'Kendrick',
    lastName: 'Lamar',
    username: 'kendrick@gmail.com',
    password: 'password'
  }
]
