export type Recipe = {
  id: string
  name: string
  description: string
  imgUrl: string
  author: string
  address: string
  createdOn: string
  userId: string
}

export const findRecipes = () => {
  return Promise.resolve(recipes)
}

export const findRecipeById = (recipeId: string) => {
  const foundRecipe = recipes.find((recipe) => recipe.id === recipeId)
  if (foundRecipe) return Promise.resolve(foundRecipe)
  else throw new Error(`Did not find recipe with id: ${recipeId}`)
}

export type AddRecipeParams = Pick<
  Recipe,
  'address' | 'author' | 'description' | 'imgUrl' | 'name' | 'userId'
>
export const addRecipe = (recipe: AddRecipeParams) => {
  const recipeToAdd: Recipe = {
    ...recipe,
    createdOn: 'now',
    id: '5'
  }
  recipes.push(recipeToAdd)
  return Promise.resolve(recipes)
}

export const removeRecipe = (recipeId: string) => {
  recipes = recipes.filter((recipe) => recipe.id !== recipeId)

  return Promise.resolve(recipes)
}

export const updateRecipe = (updates: Partial<Recipe>) => {
  const foundIndex = recipes.findIndex((recipe) => recipe.id === updates.id)

  if (foundIndex !== -1) {
    recipes[foundIndex] = { ...recipes[foundIndex], ...updates }
  }

  return Promise.resolve(recipes[foundIndex])
}

let recipes: Recipe[] = [
  {
    id: '1',
    name: 'CREAMY MUSHROOM TOAST WITH SOFT EGG & GRUYÈRE',
    description:
      'A twist on the beloved British favorite, delightfully simple and absolutely delicious for breakfast, brunch, lunch, or even dinner.',
    imgUrl:
      'https://www.gordonramsay.com/assets/Uploads/_resampled/CroppedFocusedImage192072050-50-Mushroomtoast.jpg',
    author: 'gordon ramsay',
    address: 'https://www.gordonramsay.com/gr/recipes/mushroomtoast/',
    userId: '1',
    createdOn: 'sometime'
  },
  {
    id: '2',
    name: "the only ice cream recipe you'll ever need",
    description:
      'This silky, luscious and very classic custard can be used as the base for any ice cream flavor you can dream up. These particular proportions of milk and cream to egg yolk will give you a thick but not sticky ice cream that feels decadent but not heavy. For something a little lighter, use more milk and less cream, as long as the dairy adds up to 3 cups. You can also cut down on egg yolks for a thinner base, but don’t go below three.',
    imgUrl:
      'https://static01.nyt.com/images/2014/06/27/multimedia/clark-icecream/clark-icecream-articleLarge.jpg',
    author: 'melissa clark',
    address:
      'https://cooking.nytimes.com/recipes/1016605-the-only-ice-cream-recipe-youll-ever-need',
    userId: '1',
    createdOn: 'sometime'
  },
  {
    id: '3',
    name: 'Spinach Lentil Dal',
    description:
      'This Lentil Dal with Spinach Sauce is one of the most delicious, soul-satisfying plant-based, Indian meals! This version is fragrant, flavorful and packed with nutrients- think of this like Saag Paneer, but substituting black lentils instead of the cheese! Super tasty and healthy',
    userId: '1',
    createdOn: 'sometime',
    author: 'sylvia fountaine',
    address: 'https://www.feastingathome.com/lentil-dal-with-spinach/',
    imgUrl:
      'https://www.feastingathome.com/wp-content/uploads/2020/06/Lentil-Dal-15.jpg'
  },
  {
    id: '4',
    name: 'PB&J',
    description: 'Simple, yet classic treat.',
    userId: '1',
    createdOn: 'sometime',
    address: 'https://www.feastingathome.com/lentil-dal-with-spinach/',
    imgUrl:
      'https://data.thefeedfeed.com/static/other/15360644095b8e7b992bf55.jpg',
    author: 'Galo sandoval'
  }
]
