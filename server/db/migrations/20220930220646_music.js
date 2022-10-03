/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('music', (table) => {
    table.increments('id')
    table.string('artist')
    table.string('album')
    table.string('year')
    table.string('genre')
    table.string('description')
    table.integer('price')
    table.integer('quantity')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('music')
}
