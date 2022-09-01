import express, { Router } from 'express'
import { directionsController } from '../controllers'

const router = express.Router()

router.get('/:recipeId', directionsController.getByRecipeId)

router.post('/', directionsController.addDirections)

router.delete('/:recipeId', directionsController.removeDirections)

export const directionsRouter: Router = router
