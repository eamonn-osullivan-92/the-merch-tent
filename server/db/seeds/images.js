/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('images').del()
  await knex('images').insert([
    {
      id: 1,
      product_id: 1,
      product_type: 'music',
      path: '/images/music/abc-trees.jpeg',
    },
    {
      id: 2,
      product_id: 2,
      product_type: 'music',
      path: '/images/music/ATCQ-low-end-theory-back.jpeg',
    },
    {
      id: 3,
      product_id: 2,
      product_type: 'music',
      path: '/images/music/ATCQ-low-end-theory-front.jpeg',
    },
    {
      id: 4,
      product_id: 3,
      product_type: 'music',
      path: '/images/music/blu-exile-below-the-heavens-front.jpeg',
    },
    {
      id: 5,
      product_id: 4,
      product_type: 'music',
      path: '/images/music/ivan-ave-front.jpeg',
    },
    {
      id: 6,
      product_id: 5,
      product_type: 'music',
      path: '/images/music/jay-dee-donuts-front.jpeg',
    },
    {
      id: 7,
      product_id: 5,
      product_type: 'music',
      path: '/images/music/jay-dee-donuts-back.jpeg',
    },
    {
      id: 8,
      product_id: 6,
      product_type: 'music',
      path: '/images/music/kofi-stone-front.jpeg',
    },
    {
      id: 9,
      product_id: 6,
      product_type: 'music',
      path: '/images/music/kofi-stone-back.jpeg',
    },
    {
      id: 10,
      product_id: 7,
      product_type: 'music',
      path: '/images/music/little-brother-the-listening-front.jpeg',
    },
    {
      id: 11,
      product_id: 7,
      product_type: 'music',
      path: '/images/music/little-brother-the-listening-back.jpeg',
    },
    {
      id: 12,
      product_id: 8,
      product_type: 'music',
      path: '/images/music/nas-illmatic-front.jpeg',
    },
    {
      id: 13,
      product_id: 8,
      product_type: 'music',
      path: '/images/music/nas-illmatic-back.jpeg',
    },
    {
      id: 14,
      product_id: 9,
      product_type: 'music',
      path: '/images/music/people-under-the-stairs-OST.jpeg',
    },
    {
      id: 15,
      product_id: 9,
      product_type: 'music',
      path: '/images/music/people-under-the-stairs-OST-back.jpeg',
    },
    {
      id: 16,
      product_id: 10,
      product_type: 'music',
      path: '/images/music/royal-flush-ghetto-millionaire-front.jpeg',
    },
    {
      id: 17,
      product_id: 10,
      product_type: 'music',
      path: '/images/music/royal-flush-ghetto-millionaire-back.jpeg',
    },
    {
      id: 18,
      product_id: 11,
      product_type: 'music',
      path: '/images/music/amen-dunes-freedom-front.jpeg',
    },
    {
      id: 19,
      product_id: 12,
      product_type: 'music',
      path: '/images/music/beach-fossils-front.jpeg',
    },
    {
      id: 20,
      product_id: 12,
      product_type: 'music',
      path: '/images/music/beach-fossils-back.jpeg',
    },
    {
      id: 23,
      product_id: 13,
      product_type: 'music',
      path: '/images/music/do-nothing-zero-dollar-bill-front.jpeg',
    },
    {
      id: 24,
      product_id: 13,
      product_type: 'music',
      path: '/images/music/do-nothing-zero-dollar-bill-back.jpeg',
    },
    {
      id: 25,
      product_id: 14,
      product_type: 'music',
      path: '/images/music/floodlights-from-a-view-front.jpeg',
    },
    {
      id: 26,
      product_id: 14,
      product_type: 'music',
      path: '/images/music/floodlights-from-a-view-back.jpeg',
    },
    {
      id: 27,
      product_id: 15,
      product_type: 'music',
      path: '/images/music/fontaines-dc-dogrel-front.jpeg',
    },
    {
      id: 28,
      product_id: 15,
      product_type: 'music',
      path: '/images/music/fontaines-dc-dogrel-back.jpeg',
    },
    {
      id: 29,
      product_id: 16,
      product_type: 'music',
      path: '/images/music/idles-joy-front.jpeg',
    },
    {
      id: 30,
      product_id: 16,
      product_type: 'music',
      path: '/images/music/idles-joy-back.jpeg',
    },
    {
      id: 31,
      product_id: 17,
      product_type: 'music',
      path: '/images/music/parquet-courts-light-up-gold.jpeg',
    },
    {
      id: 32,
      product_id: 18,
      product_type: 'music',
      path: '/images/music/parquet-courts-wide-awake-front.jpeg',
    },
    {
      id: 33,
      product_id: 18,
      product_type: 'music',
      path: '/images/music/parquet-courts-wide-awake-back.jpeg',
    },
    {
      id: 34,
      product_id: 19,
      product_type: 'music',
      path: '/images/music/the-slingers-single-front.jpeg',
    },
    {
      id: 35,
      product_id: 20,
      product_type: 'music',
      path: '/images/music/yard-act-the-overload-front.jpeg',
    },
    {
      id: 36,
      product_id: 20,
      product_type: 'music',
      path: '/images/music/yard-act-the-overload-back.jpeg',
    },
  ])
}
