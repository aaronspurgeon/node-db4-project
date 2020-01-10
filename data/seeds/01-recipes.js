exports.seed = async knex => {
  await knex("recipes").insert([
    { name: "Chicken Noodle Soup", ingredient_quantity: 1 },
    { name: "Chicken Parm", ingredient_quantity: 1 }
  ]);
};
