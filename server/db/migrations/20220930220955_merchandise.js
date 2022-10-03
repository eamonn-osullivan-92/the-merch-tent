/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('merchandise', (table) => {
    table.increments('id')
    table.string('type')
    table.string('artist')
    table.string('size')
    table.string('color')
    table.string('genre')
    table.integer('price')
    table.integer('quantity')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('merchandise')
}
