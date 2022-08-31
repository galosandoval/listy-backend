"use strict";
// const db = require("../../data/connection");
Object.defineProperty(exports, "__esModule", { value: true });
exports.lists = void 0;
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
exports.lists = [
    {
        id: 1,
        name: "What's for dinner",
        userId: 1,
        createdOn: 'now',
        completed: false,
    },
    {
        id: 2,
        name: "What's for lunch",
        userId: 1,
        createdOn: 'now',
        completed: false,
    },
    {
        id: 3,
        name: "What's for brekkie",
        userId: 1,
        createdOn: 'now',
        completed: false,
    },
];
