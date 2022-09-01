import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import {
  listsRouter,
  recipesRouter,
  ingredientsRouter,
  usersRouter
} from './routes'
import { directionsRouter } from './routes/directions.router'
import { listRecipesRouter } from './routes/listRecipes.router'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.get('/', (_req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.use(helmet())
app.use(morgan('tiny'))
app.use(express.json())
app.use(
  cors({
    origin: '*',
    credentials: true
  })
)

app.use('/lists', listsRouter)
app.use('/recipes', recipesRouter)
app.use('/ingredients', ingredientsRouter)
app.use('/directions', directionsRouter)
app.use('/list-recipes', listRecipesRouter)
app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
