exports.up = function (knex) {
  return knex.schema.createTable("ingredients", (table) => {
    table.increments();
    table.integer("recipe-id").references("id").inTable("recipes").notNullable();
    table.string("name", 128).notNullable();
    table.boolean("isChecked").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("ingredients");
};
