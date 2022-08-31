import express, { Router } from 'express'
import { listsController } from '../controllers'
const router = express.Router()

router.get('/', listsController.get)

router.get('/:id', listsController.getById)

router.get('/users/:userId', listsController.getByUserId)

router.post('/', listsController.create)

router.put('/', listsController.update)

router.delete('/:id', listsController.remove)

export const listsRouter: Router = router
