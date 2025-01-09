exports.up = async function (knex) {
  await knex.schema.createTable("cars", (table) => {
    table.increments();
    table.string("car_vin", 17).notNullable().unique();
    table.string("car_make").notNullable();
    table.string("car_model").notNullable();
    table.integer("car_mileage").notNullable();
    table.string("car_title");
    table.string("car_transmission");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("cars");
};
