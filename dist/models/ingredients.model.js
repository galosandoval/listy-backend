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
const db = require("../../data/connection");
const { findIngredientsByGroceryListId } = require("../recipes-grocery-lists/recipes-grocery-lists-model");
const { findIngredientsByRecipeId } = require("../recipes/recipes-model");
const ingredients = "ingredients";
const findIngredients = () => {
    return db(ingredients);
};
const findIngredientById = (id) => {
    return db(ingredients).where("id", id);
};
const addNewIngredients = (newIngredients) => {
    return db(ingredients).insert(newIngredients);
};
const updateIngredient = (id, change) => {
    return db(ingredients)
        .where({ id })
        .update(change)
        .then(() => {
        return findIngredientById(id);
    });
};
const deleteIngredientById = (id) => {
    let deletedIngredient;
    findIngredientById(id).then((ingredientToDelete) => {
        deletedIngredient = ingredientToDelete;
    });
    return db(ingredients)
        .where({ id })
        .del()
        .then(() => {
        return deletedIngredient;
    });
};
const deleteIngredientsByRecipeId = (id) => {
    let deletedIngredients;
    findIngredientsByRecipeId(id).then((ingredientsToDelete) => {
        deletedIngredients = ingredientsToDelete;
    });
    return db(ingredients)
        .where("recipe-id", id)
        .del()
        .then(() => {
        return deletedIngredients;
    });
};
const updateIngredientsByRecipe = (id, changes) => {
    changes.forEach((change) => {
        db(ingredients)
            .where("id", change.id)
            .update(change)
            .then((updated) => console.log(updated))
            .catch((error) => console.log(error.message));
    });
    return findIngredientsByRecipeId(id);
};
const updateIsChecked = (id, currentState) => __awaiter(void 0, void 0, void 0, function* () {
    if (currentState.isChecked === 0) {
        yield db(ingredients).where({ id }).update("isChecked", 1);
    }
    else {
        yield db(ingredients).where({ id }).update("isChecked", 0);
    }
    return findIngredientById(id);
});
const resetIsCheckedByGrocerylist = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const ingredients = yield findIngredientsByGroceryListId(id);
    console.log({ ingredients });
    ingredients.forEach((i) => __awaiter(void 0, void 0, void 0, function* () {
        yield updateIsChecked(i.id, { isChecked: 1 });
    }));
    return findIngredientsByGroceryListId(id);
});
module.exports = {
    findIngredients,
    findIngredientById,
    addNewIngredients,
    updateIngredient,
    deleteIngredientById,
    deleteIngredientsByRecipeId,
    updateIngredientsByRecipe,
    updateIsChecked,
    resetIsCheckedByGrocerylist
};
