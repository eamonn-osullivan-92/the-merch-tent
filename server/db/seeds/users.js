/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      first_name: 'Eamonn',
      last_name: 'OSullivan',
      email: 'eamonnsosullivan@gmail.com',
      address: '123 Muritai St, Wellington, 5013',
      admin: true,
    },
    {
      id: 2,
      first_name: 'Jamie',
      last_name: 'Reeve',
      email: 'reevesy@gmail.com',
      address: '124 Muritai St, Wellington, 5013',
      admin: false,
    },
    {
      id: 3,
      first_name: 'Harry ',
      last_name: 'McVey',
      email: 'haza@gmail.com',
      address: '122 Muritai St, Wellington, 5013',
      admin: false,
    },
  ])
}
