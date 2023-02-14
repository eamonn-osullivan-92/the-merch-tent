import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import MusicListItem from './MusicListItem'
// import '@testing-library/jest-dom'

describe('App is rendered correctly', () => {
  test('renders albums from API on load', async () => {
    render(
      <MusicListItem
        product={{
          id: 2,
          artist: 'A Tribe Called Quest',
          album: 'Low End Theory',
          year: '1991',
          genre: 'hip-hop/rap',
          image_path: ['/images/music/ATCQ-low-end-theory-front.jpeg'],
          description: 'description',
          price: 60,
          quantity: '3',
          stripe_product_id: 'prod_NIpzggdcqdBKvZ',
          stripe_price_id: 'price_1MYEJJEDyCcN2QeKS65Bf96D',
        }}
      />
    )

    //assert
    const artist = await screen.findByTestId('artist')
    expect(artist.textContent).toBe('A Tribe Called Quest')

    expect(await screen.findByText(/Low End Theory/)).toBeInTheDocument()

    const image = await screen.findAllByRole('img')
    expect(image).toHaveLength(1)
    expect(image[0]).toBeInTheDocument()
  })
})
