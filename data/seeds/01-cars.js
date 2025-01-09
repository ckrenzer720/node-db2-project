// STRETCH
const cars = [
  {
    car_vin: "11111111111111111",
    car_make: "toyota",
    car_model: "prius",
    car_mileage: 250000,
    car_title: "salvage",
    car_transmission: "CVT",
  },
  {
    car_vin: "22222222222222222",
    car_make: "ford",
    car_model: "mustang",
    car_mileage: 120000,
    car_title: "clean",
    car_transmission: "manual",
  },
  {
    car_vin: "33333333333333333",
    car_make: "honda",
    car_model: "accord",
    car_mileage: 220000,
    car_title: "clean",
    car_transmission: "automatic",
  },
];

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(cars);
};
