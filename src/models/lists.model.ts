// const db = require("../../data/connection");

// const grocerylists = "grocery-lists";

// const addGroceryList = (groceryList) => {
//   return db(grocerylists).insert(groceryList);
// };

// const findGroceryListById = (id) => {
//   return db(grocerylists).where({ id });
// };

// const findGroceryListsByUserId = (userId) => {
//   return db(grocerylists).where("user-id", userId);
// };

// const findAllRecipesInList = () => {
//   return db(grocerylists).join("recipes", "grocery-lists.id", "=", "recipes.grocery-list-id");
// };

// const reduceRecipesToGroceryListNames = (recipes) => {
//   let groceryListRecipes = [];
//   let ingredients = [];
//   let currentRecipe = recipes[0];

//   for (let i = 0; i < recipes.length; i++) {
//     const recipe = recipes[i];
//     const ingredientName = recipe["name"];
//     const groceryListName = recipe["grocery-list-name"];

//     if (currentRecipe["grocery-list-name"] === groceryListName) {
//       ingredients.push(ingredientName);
//     }

//     if (currentRecipe["grocery-list-name"] !== groceryListName || i === recipes.length - 1) {
//       const groceryList = {
//         id: currentRecipe.id,
//         "grocery-list-name": currentRecipe["grocery-list-name"],
//         ingredients
//       };

//       currentRecipe = recipes[i];
//       groceryListRecipes.push(groceryList);
//       ingredients = [ingredientName];
//     }
//   }

//   return groceryListRecipes;
// };

// // TODO: Fix or delete
// const findRecipesWithIngredients = (userId) => {
//   return (
//     db("recipes-grocery-lists")
//       .select("grocery-lists.id", "ingredients.name", "grocery-lists.name as grocery-list-name")
//       .where("grocery-lists.user-id", userId)
//       // no longer recipes.grocery-list-id
//       .join("recipes", "grocery-lists.id", "=", "recipes.grocery-list-id")
//       .join("ingredients", "ingredients.recipe-id", "=", "recipes.id")
//       .then((recipes) => {
//         return reduceRecipesToGroceryListNames(recipes);
//       })
//   );
// };

// const updateGroceryList = (id, change) => {
//   return db(grocerylists)
//     .where({ id })
//     .update(change)
//     .then(() => {
//       return findGroceryListById(id);
//     });
// };

// const deleteGroceryList = (id) => {
//   let groceryListToDelete;
//   findGroceryListById(id).then((groceryList) => {
//     groceryListToDelete = groceryList;
//   });
//   return db(grocerylists)
//     .where({ id })
//     .del()
//     .then(() => {
//       return groceryListToDelete;
//     });
// };

// module.exports = {
//   addGroceryList,
//   deleteGroceryList,
//   findAllRecipesInList,
//   findGroceryListById,
//   findGroceryLists,
//   findGroceryListsByUserId,
//   findRecipesWithIngredients,
//   updateGroceryList
// };

export type List = {
  id: string
  name: string
  userId: string
  createdOn: string
  completed: boolean
  description: string
}

export let lists: List[] = [
  {
    id: '1',
    name: "What's for dinner",
    userId: '1',
    createdOn: 'now',
    completed: false,
    description: 'list for dinner',
  },
  {
    id: '2',
    name: "What's for lunch",
    userId: '1',
    createdOn: 'now',
    completed: false,
    description: 'list for lunch',
  },
  {
    id: '3',
    name: "What's for brekkie",
    userId: '2',
    createdOn: 'now',
    completed: false,
    description: 'list for breakfast',
  },
]

export const findLists = async () => {
  return Promise.resolve(lists)
}

export const findList = async (id: string) => {
  const list = lists.find((list) => list.id === id)
  if (list) return Promise.resolve(list)
  else throw Error(`Did not find list in database with id: ${id}`)
}

export const findListsByUserId = async (userId: string) => {
  const filteredLists = lists.filter((list) => list.userId === userId)
  if (filteredLists.length) return Promise.resolve(filteredLists)
  else throw Error(`Did not find lists in database with userId: ${userId}`)
}

export type AddListParams = Pick<List, 'name' | 'description' | 'userId'>

export const addList = async (newList: AddListParams) => {
  lists.push({
    completed: false,
    createdOn: new Date().toISOString(),
    description: newList.description,
    id: '4',
    name: newList.name,
    userId: newList.userId,
  })

  return Promise.resolve(lists)
}

export const updateList = async (updates: Partial<List>) => {
  const listIndex = lists.findIndex((list) => list.id === updates.id)

  if (listIndex !== -1) {
    lists[listIndex] = { ...lists[listIndex], ...updates }
  }

  return Promise.resolve(lists)
}

export const removeList = async (listId: string) => {
  lists = lists.filter((list) => list.id !== listId)

  return Promise.resolve(listId)
}
