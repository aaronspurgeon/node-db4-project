exports.up = async function(knex) {
  await knex.schema.createTable("recipes", table => {
    table.increments("id");
    table.string("name").notNullable();
    table.float("ingredient_quantity").notNullable();
  });

  await knex.schema.createTable("ingredients", table => {
    table.increments("id");
    table.string("name").notNullable();
  });

  await knex.schema.createTable("steps", table => {
    table.increments("id");
    table.string("step_by_step");
    table
      .integer("recipes_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("ingredient_id")
      .notNullable()
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("steps");
  await knex.schema.dropTableIfExists("ingredients");
  await knex.schema.dropTableIfExists("recipes");
};
