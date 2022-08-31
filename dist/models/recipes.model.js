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
const recipes = "recipes";
const addRecipe = (body) => {
    return db(recipes).insert(body);
};
const findRecipes = () => db(recipes);
const findRecipeById = (id) => {
    return db(recipes).where({ id });
};
const deleteRecipe = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let recipeToDelete;
    findRecipeById(id).then((recipe) => {
        recipeToDelete = recipe;
    });
    yield db("recipe-instructions").where("recipe-id", id).del();
    yield db("ingredients").where("recipe-id", id).del();
    yield db("recipes-grocery-lists").where("recipe-id", id).del();
    yield db(recipes).where({ id }).del();
    return recipeToDelete;
});
const findIngredientsByRecipeId = (id) => {
    return db(recipes)
        .join("ingredients", "recipes.id", "=", "ingredients.recipe-id")
        .select("ingredients.name", "ingredients.id", "recipes.id as recipe-id", "ingredients.isChecked")
        .where("recipes.id", id);
};
const findRecipesByUserId = (userId) => {
    return db(recipes)
        .join("users", "users.id", "=", "recipes.user-id")
        .whereIn("user-id", [userId === 1 ? 1 : 1, userId])
        .select("recipes.id", "recipes.recipe-name", "recipes.description", "recipes.img-url", "recipes.user-id", "recipes.address", "recipes.author");
};
const updateRecipe = (id, changes) => {
    return db(recipes)
        .where({ id })
        .update(changes)
        .then(() => {
        return findRecipeById(id);
    });
};
module.exports = {
    addRecipe,
    deleteRecipe,
    findIngredientsByRecipeId,
    findRecipes,
    findRecipeById,
    findRecipesByUserId,
    updateRecipe
};
