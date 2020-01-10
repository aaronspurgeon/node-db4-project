exports.seed = async knex => {
  await knex("ingredients").insert([
    { name: "Chicken Breast" },
    { name: "Broth" },
    { name: "Marinara" },
    { name: "Noodles" }
  ]);
};
