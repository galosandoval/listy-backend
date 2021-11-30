exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes-grocery-lists")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes-grocery-lists").insert([
        {
          id: 1,
          "recipe-id": 2,
          "grocery-list-id": 1,
          "user-id": 1
        },
        {
          id: 2,
          "recipe-id": 4,
          "grocery-list-id": 1,
          "user-id": 1
        },
        {
          id: 3,
          "recipe-id": 1,
          "grocery-list-id": 2,
          "user-id": 1
        },
        {
          id: 4,
          "recipe-id": 3,
          "grocery-list-id": 2,
          "user-id": 1
        },
        {
          id: 5,
          "recipe-id": 3,
          "grocery-list-id": 3,
          "user-id": 1
        },
        {
          id: 5,
          "recipe-id": 2,
          "grocery-list-id": 3,
          "user-id": 1
        }
      ]);
    });
};
