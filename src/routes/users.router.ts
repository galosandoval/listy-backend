import express, { Router } from 'express'
import { usersController } from '../controllers'

const router = express.Router()

router.get('/:userId', usersController.getById)

router.post('/', usersController.addUser)

export const usersRouter: Router = router
