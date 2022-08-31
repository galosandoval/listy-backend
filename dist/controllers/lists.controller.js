"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listController = void 0;
const lists_service_1 = require("../services/lists.service");
// router.get('/', (_req, res) => {
//   Lists.findGroceryLists()
//     .then((groceryLists) => {
//       res.status(200).json({ groceryLists })
//     })
//     .catch((error) => {
//       res.status(404).json(error)
//     })
// })
function get(_req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const lists = yield lists_service_1.ListsService.findGroceryLists();
            res.json(lists);
        }
        catch (error) {
            console.error('Error while getting lists', error);
            next(error);
        }
    });
}
// router.get('/:id', (req, res) => {
//   const { id } = req.params
//   Lists.findGroceryListById(id)
//     .then((groceryList) => res.status(200).json({ groceryList }))
//     .catch((err) => {
//       res.status(500).json({ error: err.message })
//     })
// })
// router.get('/user/:id', (req, res) => {
//   const { id } = req.params
//   Lists.findGroceryListsByUserId(id)
//     .then((groceryLists) => {
//       res.status(200).json({ groceryLists })
//     })
//     .catch((error) => {
//       res.status(404).json(error)
//     })
// })
// router.get('/recipes', (_, res) => {
//   Lists.findAllRecipesInList()
//     .then((groceryListRecipes) => {
//       res.status(200).json({ groceryListRecipes })
//     })
//     .catch((error) => {
//       res.status(404).json(error)
//     })
// })
// router.get('/recipes/:id', (req, res) => {
//   const { id } = req.params
//   Lists.findRecipesWithIngredients(id)
//     .then((groceryListRecipes) => {
//       res.status(200).json({ groceryListRecipes })
//     })
//     .catch((error) => {
//       res.status(404).json(error)
//     })
// })
// //TODO: Everytime a new grocery list is made, recipes-grocery-lists gets a post request
// router.post('/', validateUser, (req, res) => {
//   const list = req.body
//   Lists.addGroceryList(list)
//     .then((groceryListId) => {
//       res.status(201).json({ groceryListId })
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message })
//     })
// })
// router.put('/:id', validateGroceryListId, (req, res) => {
//   const { id } = req.params
//   const { body } = req
//   Lists.updateGroceryList(id, body)
//     .then((updatedGroceryList) => {
//       res.status(200).json({
//         message: `Grocery list with id ${id} successfully updated`,
//         updatedGroceryList,
//       })
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message })
//     })
// })
// router.delete('/:id', validateGroceryListId, (req, res) => {
//   const { id } = req.params
//   Lists.deleteGroceryList(id)
//     .then((deletedGroceryList) => {
//       res.status(200).json({ deletedGroceryList })
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message })
//     })
// })
// module.exports = router
exports.listController = { get };
