exports.seed = async knex => {
  await knex("ingredients").insert([
    { name: "Chicken Breast", quantity: "2 Pounds" },
    { name: "Broth", quantity: "4 Cup" },
    { name: "Marinara", quantity: "3 Cups" },
    { name: "Noodles", quantity: "10 Oz" }
  ]);
};
