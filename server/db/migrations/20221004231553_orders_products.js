/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable('orders_products', (table) => {
    table.integer('product_id').references('music.id')
    table.integer('order_id').references('orders.id')
    table.integer('quantity')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTable('orders_products')
}
