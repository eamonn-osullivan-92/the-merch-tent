/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable('orders', (table) => {
    table.increments('id')
    table.date('created_at')
    table.string('status')
    table.string('stripe_session_id')
    table.string('propel_id')
  })
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTable('orders')
}
