import express, { Router } from 'express'
import { ingredientsController } from '../controllers'

const router = express.Router()

router.get('/:recipeId', ingredientsController.get)

router.post('/', ingredientsController.add)

router.put('/', ingredientsController.update)

router.delete('/recipes/:recipeId', ingredientsController.removeAll)

router.delete('/:ingredientId', ingredientsController.remove)

export const ingredientsRouter: Router = router
