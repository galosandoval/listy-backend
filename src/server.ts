const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(helmet())
app.use(express.json())
app.use(morgan('tiny'))
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
)

const usersRouter = require('./users/users-router')
const recipesRouter = require('./recipes/recipes-router')
const ingredientsRouter = require('./ingredients/ingredients-router')
const recipeInstructionsRouter = require('./recipe-instructions/recipe-instructions-router')
const groceryListRouter = require('./grocery-lists/grocery-lists-router')
const recipesGroceryListsRouter = require('./recipes-grocery-lists/recipes-grocery-lists-router')
const authRouter = require('./auth/auth-router')
const requiresToken = require('./auth/restricted-middleware')

app.use('/users', usersRouter)
app.use('/recipes', recipesRouter)
app.use('/ingredients', ingredientsRouter)
app.use('/instructions', recipeInstructionsRouter)
app.use('/grocery-lists', groceryListRouter)
app.use('/recipes-grocery-lists', recipesGroceryListsRouter)
app.use('/auth', authRouter)

// app.get('/', (_req, res) => {
//   res.json({ api: 'up' })
// })

// module.exports = app
