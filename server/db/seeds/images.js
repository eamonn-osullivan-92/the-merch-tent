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
      path: '/images/music/abc-trees.webp',
    },
    {
      id: 2,
      product_id: 2,
      product_type: 'music',
      path: '/images/music/ATCQ-low-end-theory-front.webp',
    },
    {
      id: 3,
      product_id: 3,
      product_type: 'music',
      path: '/images/music/blu-exile-below-the-heavens-front.webp',
    },
    {
      id: 4,
      product_id: 4,
      product_type: 'music',
      path: '/images/music/ivan-ave-front.webp',
    },
    {
      id: 5,
      product_id: 5,
      product_type: 'music',
      path: '/images/music/jay-dee-donuts-front.webp',
    },
    {
      id: 6,
      product_id: 5,
      product_type: 'music',
      path: '/images/music/jay-dee-donuts-back.webp',
    },
    {
      id: 7,
      product_id: 6,
      product_type: 'music',
      path: '/images/music/kofi-stone-front.webp',
    },
    {
      id: 8,
      product_id: 6,
      product_type: 'music',
      path: '/images/music/kofi-stone-back.webp',
    },
    {
      id: 9,
      product_id: 7,
      product_type: 'music',
      path: '/images/music/little-brother-the-listening-front.webp',
    },
    {
      id: 10,
      product_id: 7,
      product_type: 'music',
      path: '/images/music/little-brother-the-listening-back.webp',
    },
    {
      id: 11,
      product_id: 8,
      product_type: 'music',
      path: '/images/music/nas-illmatic-front.webp',
    },
    {
      id: 12,
      product_id: 8,
      product_type: 'music',
      path: '/images/music/nas-illmatic-back.webp',
    },
    {
      id: 13,
      product_id: 9,
      product_type: 'music',
      path: '/images/music/people-under-the-stairs-OST.webp',
    },
    {
      id: 14,
      product_id: 9,
      product_type: 'music',
      path: '/images/music/people-under-the-stairs-OST-back.webp',
    },
    {
      id: 15,
      product_id: 10,
      product_type: 'music',
      path: '/images/music/royal-flush-ghetto-millionaire-front.webp',
    },
    {
      id: 16,
      product_id: 10,
      product_type: 'music',
      path: '/images/music/royal-flush-ghetto-millionaire-back.webp',
    },
    {
      id: 17,
      product_id: 11,
      product_type: 'music',
      path: '/images/music/amen-dunes-freedom-front.webp',
    },
    {
      id: 18,
      product_id: 12,
      product_type: 'music',
      path: '/images/music/beach-fossils-front.webp',
    },
    {
      id: 19,
      product_id: 12,
      product_type: 'music',
      path: '/images/music/beach-fossils-back.webp',
    },
    {
      id: 20,
      product_id: 13,
      product_type: 'music',
      path: '/images/music/do-nothing-zero-dollar-bill-front.webp',
    },
    {
      id: 21,
      product_id: 13,
      product_type: 'music',
      path: '/images/music/do-nothing-zero-dollar-bill-back.webp',
    },
    {
      id: 22,
      product_id: 14,
      product_type: 'music',
      path: '/images/music/floodlights-from-a-view-front.webp',
    },
    {
      id: 23,
      product_id: 14,
      product_type: 'music',
      path: '/images/music/floodlights-from-a-view-back.webp',
    },
    {
      id: 24,
      product_id: 15,
      product_type: 'music',
      path: '/images/music/fontaines-dc-dogrel-front.webp',
    },
    {
      id: 25,
      product_id: 15,
      product_type: 'music',
      path: '/images/music/fontaines-dc-dogrel-back.webp',
    },
    {
      id: 26,
      product_id: 16,
      product_type: 'music',
      path: '/images/music/idles-joy-front.webp',
    },
    {
      id: 27,
      product_id: 16,
      product_type: 'music',
      path: '/images/music/idles-joy-back.webp',
    },
    {
      id: 28,
      product_id: 17,
      product_type: 'music',
      path: '/images/music/parquet-courts-light-up-gold.webp',
    },
    {
      id: 29,
      product_id: 18,
      product_type: 'music',
      path: '/images/music/parquet-courts-wide-awake-front.webp',
    },
    {
      id: 30,
      product_id: 18,
      product_type: 'music',
      path: '/images/music/parquet-courts-wide-awake-back.webp',
    },
    {
      id: 31,
      product_id: 19,
      product_type: 'music',
      path: '/images/music/the-slingers-single-front.webp',
    },
    {
      id: 32,
      product_id: 20,
      product_type: 'music',
      path: '/images/music/yard-act-the-overload-front.webp',
    },
    {
      id: 33,
      product_id: 20,
      product_type: 'music',
      path: '/images/music/yard-act-the-overload-back.webp',
    },
  ])
}
