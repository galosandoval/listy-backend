import express, { Router } from 'express'
import { listRecipesController } from '../controllers'

const router = express.Router()

router.get('/:listId', listRecipesController.getRecipesByListId)

router.post('/', listRecipesController.add)

router.put('/', listRecipesController.update)

router.delete('/', listRecipesController.remove)

export const listRecipesRouter: Router = router
