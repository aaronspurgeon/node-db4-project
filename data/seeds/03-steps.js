exports.seed = async knex => {
  await knex("steps").insert([
    {
      recipe_id: 1,
      ingredient_id: [1, 2, 4],
      steps_by_step: [
        "Bring water to a boil in a pot and cook the noodles.",
        "In a separate pot, bring the broth to a low heat simmer.",
        "Add the cook chicken breat in the pot of broth.",
        "Drain the cooked noodles and add to the pot of broth. Stir gently and cover for 10 mins. Enjoy :)."
      ]
    },
    {
      recipe_id: 2,
      ingredient_id: [1, 3, 4],
      steps_by_step: [
        "Preheat oven to 350 degrees.",
        "Bring water to a boil and add the noodles.",
        "After noodles are done, lay down the raw chicken breast in a cooking dish and cover the noodles on top, add the marinara on top of it. Cook for 40mins."
      ]
    }
  ]);
};
