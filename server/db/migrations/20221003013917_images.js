/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('images', (table) => {
    table.increments('id')
    table.integer('product_id').unsigned()
    table.string('product_type')
    table.string('path')

    table
      .foreign('product_id')
      .references('id')
      .inTable('music')
      .onDelete('CASCADE')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('images')
}
