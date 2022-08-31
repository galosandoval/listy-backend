import express, { Router } from 'express'
import { recipesController } from '../controllers'

const router = express.Router()

router.get('/', recipesController.get)

router.get('/:id', recipesController.getById)

router.post('/', recipesController.create)

router.put('/', recipesController.update)

router.delete('/:id', recipesController.remove)

export const recipesRouter: Router = router
