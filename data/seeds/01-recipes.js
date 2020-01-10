exports.seed = async knex => {
  await knex("recipes").insert([
    { name: "Chicken Noodle Soup" },
    { name: "Chicken Parm" }
  ]);
};
