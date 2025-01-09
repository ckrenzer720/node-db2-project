// STRETCH
exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert([
    {
      vin: "20001568344248724",
      make: "Subaru",
      model: "Outback",
      mileage: 42810,
      transmission: "automatic",
    },
    {
      vin: "11366985462156850",
      make: "Ford",
      model: "Focus",
      mileage: 8643,
      title: "totalled",
    },
    {
      vin: "48988855215465323",
      make: "Cheverolet",
      model: "Silverado",
      mileage: 289984,
      transmission: "manual",
    },
  ]);
};
