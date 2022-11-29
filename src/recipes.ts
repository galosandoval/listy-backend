import { Recipe } from '@prisma/client'
import express, { NextFunction, Request, Response, Router } from 'express'

const router = express.Router()

router.get('/', get)
async function get(_req: Request, res: Response, next: NextFunction) {
  try {
    const recipes = findRecipes()
    res.json(recipes)
  } catch (error) {
    next(error)
  }
}

function findRecipes() {
  return Promise.resolve(recipes)
}

router.get('/:id', getById)
async function getById(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params
  try {
    const recipe = findRecipeById(parseInt(id))
    res.json(recipe)
  } catch (error) {
    next(error)
  }
}

function findRecipeById(recipeId: number) {
  const foundRecipe = recipes.find((recipe) => recipe.id === recipeId)
  if (foundRecipe) return Promise.resolve(foundRecipe)
  else throw new Error(`Did not find recipe with id: ${recipeId}`)
}

router.post('/', create)
async function create(req: Request, res: Response, next: NextFunction) {
  const { body } = req
  try {
    const recipe = addRecipe(body)
    res.json(recipe)
  } catch (error) {
    next(error)
  }
}
function addRecipe(recipe: Recipe) {
  recipes.push(recipe)
  return Promise.resolve(recipes)
}

router.put('/', update)
async function remove(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params
  try {
    const recipeToRemove = removeRecipe(parseInt(id))
    res.json(recipeToRemove)
  } catch (error) {
    next(error)
  }
}

function removeRecipe(recipeId: number) {
  recipes = recipes.filter((recipe) => recipe.id !== recipeId)

  return Promise.resolve(recipes)
}

router.delete('/:id', remove)
async function update(req: Request, res: Response, next: NextFunction) {
  const { body } = req
  try {
    const recipeToUpdate = updateRecipe(body)
    res.json(recipeToUpdate)
  } catch (error) {
    next(error)
  }
}

function updateRecipe(updates: Partial<Recipe>) {
  const foundIndex = recipes.findIndex((recipe) => recipe.id === updates.id)

  if (foundIndex !== -1) {
    recipes[foundIndex] = { ...recipes[foundIndex], ...updates }
  }

  return Promise.resolve(recipes[foundIndex])
}

export const recipesRouter: Router = router

let recipes: Recipe[] = [
  {
    id: 1,
    name: 'CREAMY MUSHROOM TOAST WITH SOFT EGG & GRUYÈRE',
    description:
      'A twist on the beloved British favorite, delightfully simple and absolutely delicious for breakfast, brunch, lunch, or even dinner.',
    imgUrl:
      'https://www.gordonramsay.com/assets/Uploads/_resampled/CroppedFocusedImage192072050-50-Mushroomtoast.jpg',
    author: 'gordon ramsay',
    address: 'https://www.gordonramsay.com/gr/recipes/mushroomtoast/',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    name: "the only ice cream recipe you'll ever need",
    description:
      'This silky, luscious and very classic custard can be used as the base for any ice cream flavor you can dream up. These particular proportions of milk and cream to egg yolk will give you a thick but not sticky ice cream that feels decadent but not heavy. For something a little lighter, use more milk and less cream, as long as the dairy adds up to 3 cups. You can also cut down on egg yolks for a thinner base, but don’t go below three.',
    imgUrl:
      'https://static01.nyt.com/images/2014/06/27/multimedia/clark-icecream/clark-icecream-articleLarge.jpg',
    author: 'melissa clark',
    address:
      'https://cooking.nytimes.com/recipes/1016605-the-only-ice-cream-recipe-youll-ever-need',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    name: 'Spinach Lentil Dal',
    description:
      'This Lentil Dal with Spinach Sauce is one of the most delicious, soul-satisfying plant-based, Indian meals! This version is fragrant, flavorful and packed with nutrients- think of this like Saag Paneer, but substituting black lentils instead of the cheese! Super tasty and healthy',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    author: 'sylvia fountaine',
    address: 'https://www.feastingathome.com/lentil-dal-with-spinach/',
    imgUrl:
      'https://www.feastingathome.com/wp-content/uploads/2020/06/Lentil-Dal-15.jpg'
  },
  {
    id: 4,
    name: 'PB&J',
    description: 'Simple, yet classic treat.',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    address: 'https://www.feastingathome.com/lentil-dal-with-spinach/',
    imgUrl:
      'https://data.thefeedfeed.com/static/other/15360644095b8e7b992bf55.jpg',
    author: 'Galo sandoval'
  }
]
