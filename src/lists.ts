import { List } from '@prisma/client'
import express, { NextFunction, Request, Response, Router } from 'express'
const router = express.Router()

router.get('/', get)
async function get(_req: Request, res: Response, next: NextFunction) {
  try {
    const lists = await findLists()
    res.json(lists)
  } catch (error) {
    console.error('Error while getting lists', error)
    next(error)
  }
}
async function findLists() {
  return Promise.resolve(lists)
}

router.get('/:id', getById)
async function getById(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params
  try {
    const list = await findList(parseInt(id))
    res.json(list)
  } catch (error) {
    console.error('Error while getting list', error)
    next(error)
  }
}
async function findList(id: number) {
  const list = lists.find((l) => l.id === id)
  if (list) return Promise.resolve(list)
  else throw Error(`Did not find list in database with id: ${id}`)
}

// router.get('/users/:userId', getByUserId)
// async function getByUserId(req: Request, res: Response, next: NextFunction) {
//   const { userId } = req.params
//   try {
//     const lists = await findListsByUserId(parseInt(userId))
//     res.json(lists)
//   } catch (error) {
//     console.error('Error while getting lists', error)
//     next(error)
//   }
// }
// export async function findListsByUserId(userId: number) {
//   const filteredLists = lists.filter((list) => list.userId === userId)
//   if (filteredLists.length) return Promise.resolve(filteredLists)
//   else throw Error(`Did not find lists in database with userId: ${userId}`)
// }

router.post('/', create)
async function create(req: Request, res: Response, next: NextFunction) {
  const { body } = req
  try {
    const lists = await addList(body)
    res.json(lists)
  } catch (error) {
    console.error('Error while adding list', error)
    next(error)
  }
}
async function addList(newList: Pick<List, 'name'>) {
  lists.push({
    completed: false,
    id: 5,
    name: newList.name,
    createdAt: new Date(),
    updatedAt: new Date()
  })

  return Promise.resolve(lists)
}

router.put('/', update)
async function update(req: Request, res: Response, next: NextFunction) {
  const { body } = req
  try {
    const lists = await updateList(body)
    res.json(lists)
  } catch (error) {
    console.error('Error while adding list', error)
    next(error)
  }
}
async function updateList(updates: Partial<List>) {
  const listIndex = lists.findIndex((list) => list.id === updates.id)

  if (listIndex !== -1) {
    lists[listIndex] = { ...lists[listIndex], ...updates }
  }

  return Promise.resolve(lists)
}

router.delete('/:id', remove)
async function remove(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params
  try {
    const lists = await removeList(parseInt(id))
    res.json(lists)
  } catch (error) {
    console.error('Error while adding list', error)
    next(error)
  }
}

async function removeList(listId: number) {
  lists = lists.filter((list) => list.id !== listId)

  return Promise.resolve(listId)
}

export const listsRouter: Router = router

export let lists: List[] = [
  {
    id: 1,
    name: 'sweet treats',
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    name: 'savory supper',
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    name: "friday's meals",
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 4,
    name: 'WEEKEND TREAT YO SELF',
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]
