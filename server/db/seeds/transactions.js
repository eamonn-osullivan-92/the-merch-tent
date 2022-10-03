/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('transactions').del()
  await knex('transactions').insert([
    {
      product_id: 1,
      product_type: 'music',
      user_id: 2,
      transaction_id: '23123124test',
    },
    {
      product_id: 2,
      product_type: 'music',
      user_id: 3,
      transaction_id: '231233232test',
    },
    {
      product_id: 5,
      product_type: 'merchandise',
      user_id: 22,
      transaction_id: '23123111test',
    },
  ])
}
