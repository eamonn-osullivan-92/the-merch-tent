/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('images').del()
  await knex('images').insert([
    {
      product_id: 1,
      product_type: 'music',
      path: '/images/music/abc-trees.webp',
    },
    {
      product_id: 2,
      product_type: 'music',
      path: '/images/music/ATCQ-low-end-theory-front.webp',
    },
    {
      product_id: 3,
      product_type: 'music',
      path: '/images/music/blu-exile-below-the-heavens-front.webp',
    },
    {
      product_id: 4,
      product_type: 'music',
      path: '/images/music/ivan-ave-front.webp',
    },
    {
      product_id: 5,
      product_type: 'music',
      path: '/images/music/jay-dee-donuts-front.webp',
    },
    {
      product_id: 5,
      product_type: 'music',
      path: '/images/music/jay-dee-donuts-back.webp',
    },
    {
      product_id: 6,
      product_type: 'music',
      path: '/images/music/kofi-stone-front.webp',
    },
    {
      product_id: 6,
      product_type: 'music',
      path: '/images/music/kofi-stone-back.webp',
    },
    {
      product_id: 7,
      product_type: 'music',
      path: '/images/music/little-brother-the-listening-front.webp',
    },
    {
      product_id: 7,
      product_type: 'music',
      path: '/images/music/little-brother-the-listening-back.webp',
    },
    {
      product_id: 8,
      product_type: 'music',
      path: '/images/music/nas-illmatic-front.webp',
    },
    {
      product_id: 8,
      product_type: 'music',
      path: '/images/music/nas-illmatic-back.webp',
    },
    {
      product_id: 9,
      product_type: 'music',
      path: '/images/music/people-under-the-stairs-OST.webp',
    },
    {
      product_id: 9,
      product_type: 'music',
      path: '/images/music/people-under-the-stairs-OST-back.webp',
    },
    {
      product_id: 10,
      product_type: 'music',
      path: '/images/music/royal-flush-ghetto-millionaire-front.webp',
    },
    {
      product_id: 10,
      product_type: 'music',
      path: '/images/music/royal-flush-ghetto-millionaire-back.webp',
    },
    {
      product_id: 11,
      product_type: 'music',
      path: '/images/music/amen-dunes-freedom-front.webp',
    },
    {
      product_id: 12,
      product_type: 'music',
      path: '/images/music/beach-fossils-front.webp',
    },
    {
      product_id: 12,
      product_type: 'music',
      path: '/images/music/beach-fossils-back.webp',
    },
    {
      product_id: 13,
      product_type: 'music',
      path: '/images/music/do-nothing-zero-dollar-bill-front.webp',
    },
    {
      product_id: 13,
      product_type: 'music',
      path: '/images/music/do-nothing-zero-dollar-bill-back.webp',
    },
    {
      product_id: 14,
      product_type: 'music',
      path: '/images/music/floodlights-from-a-view-front.webp',
    },
    {
      product_id: 14,
      product_type: 'music',
      path: '/images/music/floodlights-from-a-view-back.webp',
    },
    {
      product_id: 15,
      product_type: 'music',
      path: '/images/music/fontaines-dc-dogrel-front.webp',
    },
    {
      product_id: 15,
      product_type: 'music',
      path: '/images/music/fontaines-dc-dogrel-back.webp',
    },
    {
      product_id: 16,
      product_type: 'music',
      path: '/images/music/idles-joy-front.webp',
    },
    {
      product_id: 16,
      product_type: 'music',
      path: '/images/music/idles-joy-back.webp',
    },
    {
      product_id: 17,
      product_type: 'music',
      path: '/images/music/parquet-courts-light-up-gold.webp',
    },
    {
      product_id: 18,
      product_type: 'music',
      path: '/images/music/parquet-courts-wide-awake-front.webp',
    },
    {
      product_id: 18,
      product_type: 'music',
      path: '/images/music/parquet-courts-wide-awake-back.webp',
    },
    {
      product_id: 19,
      product_type: 'music',
      path: '/images/music/the-slingers-single-front.webp',
    },
    {
      product_id: 20,
      product_type: 'music',
      path: '/images/music/yard-act-the-overload-front.webp',
    },
    {
      product_id: 20,
      product_type: 'music',
      path: '/images/music/yard-act-the-overload-back.webp',
    },
  ])
}
