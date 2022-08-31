// const db = require("../../data/connection");
// const {
//   findIngredientsByGroceryListId
// } = require("../recipes-grocery-lists/recipes-grocery-lists-model");
// const { findIngredientsByRecipeId } = require("../recipes/recipes-model");

// const ingredients = "ingredients";

// const findIngredients = () => {
//   return db(ingredients);
// };

// const findIngredientById = (id) => {
//   return db(ingredients).where("id", id);
// };

// const addNewIngredients = (newIngredients) => {
//   return db(ingredients).insert(newIngredients);
// };

// const updateIngredient = (id, change) => {
//   return db(ingredients)
//     .where({ id })
//     .update(change)
//     .then(() => {
//       return findIngredientById(id);
//     });
// };

// const deleteIngredientById = (id) => {
//   let deletedIngredient;
//   findIngredientById(id).then((ingredientToDelete) => {
//     deletedIngredient = ingredientToDelete;
//   });
//   return db(ingredients)
//     .where({ id })
//     .del()
//     .then(() => {
//       return deletedIngredient;
//     });
// };

// const deleteIngredientsByRecipeId = (id) => {
//   let deletedIngredients;
//   findIngredientsByRecipeId(id).then((ingredientsToDelete) => {
//     deletedIngredients = ingredientsToDelete;
//   });
//   return db(ingredients)
//     .where("recipe-id", id)
//     .del()
//     .then(() => {
//       return deletedIngredients;
//     });
// };

// const updateIngredientsByRecipe = (id, changes) => {
//   changes.forEach((change) => {
//     db(ingredients)
//       .where("id", change.id)
//       .update(change)
//       .then((updated) => console.log(updated))
//       .catch((error) => console.log(error.message));
//   });
//   return findIngredientsByRecipeId(id);
// };

// const updateIsChecked = async (id, currentState) => {
//   if (currentState.isChecked === 0) {
//     await db(ingredients).where({ id }).update("isChecked", 1);
//   } else {
//     await db(ingredients).where({ id }).update("isChecked", 0);
//   }
//   return findIngredientById(id);
// };

// const resetIsCheckedByGrocerylist = async (id) => {
//   const ingredients = await findIngredientsByGroceryListId(id);
//   console.log({ ingredients });
//   ingredients.forEach(async (i) => {
//     await updateIsChecked(i.id, { isChecked: 1 });
//   });
//   return findIngredientsByGroceryListId(id);
// };

let ingredients: Ingredient[] = [
  { id: '1', isChecked: false, name: '1 cup diced onion', recipeId: '1' },
  { id: '2', isChecked: true, name: '1 cup diced shallots', recipeId: '1' },
  { id: '3', isChecked: true, name: '1 cup diced eggs', recipeId: '2' },
  { id: '4', isChecked: true, name: '1 cup diced bell pepper', recipeId: '2' },
  { id: '5', isChecked: false, name: '1 tbls garlic', recipeId: '3' },
  { id: '6', isChecked: false, name: '2 cups rice', recipeId: '3' },
  { id: '7', isChecked: false, name: 'beans', recipeId: '4' },
  { id: '8', isChecked: false, name: '2 cups green beans', recipeId: '4' },
]

export type Ingredient = {
  id: string
  recipeId: string
  name: string
  isChecked: boolean
}

export const findIngredients = (recipeId: string) => {
  const foundIngredients = ingredients.filter((i) => i.recipeId === recipeId)

  return Promise.resolve(foundIngredients)
}

export const addIngredients = (
  ingredientsInfo: Pick<Ingredient, 'name' | 'recipeId'>[]
) => {
  const ingredientsToAdd: Ingredient[] = ingredientsInfo.map((i, idx) => ({
    id: (9 + idx).toString(),
    isChecked: false,
    name: i.name,
    recipeId: i.recipeId,
  }))

  ingredients.concat(ingredientsToAdd)
  return Promise.resolve(ingredientsToAdd)
}

export const updateIngredient = (updates: Partial<Ingredient>) => {
  const foundIndex = ingredients.findIndex((i) => i.id === updates.id)

  if (foundIndex !== -1) {
    ingredients[foundIndex] = { ...ingredients[foundIndex], ...updates }
  }

  return Promise.resolve(ingredients[foundIndex])
}

export const removeIngredients = (recipeId: string) => {
  const newIngredients = ingredients.filter((i) => i.recipeId !== recipeId)

  ingredients = newIngredients

  return Promise.resolve(ingredients)
}

export const removeIngredient = (ingredientId: string) => {
  ingredients = ingredients.filter((i) => i.id !== ingredientId)

  return Promise.resolve(ingredients)
}
