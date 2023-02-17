import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import MusicList from './MusicList'
// import '@testing-library/jest-dom'

function renderWithContext(element) {
  render(<Provider store={store}>{element}</Provider>)
  return { store }
}

describe('Music List', () => {
  test('renders music from redux state', async () => {
    //arrange
    const fakeMusic = [
      {
        id: 1,
        artist: 'Avantdale Bowling Club',
        album: 'Trees',
        year: '2022',
        genre: 'hip-hop/rap',
        description: 'description',
        price: 47,
        quantity: '10',
        image_path: ['/images/music/abc-trees.jpeg'],
        stripe_product_id: 'prod_NIpyio4t6v7qrr',
        stripe_price_id: 'price_1MYEIuEDyCcN2QeK4x07Loj3',
      },
      {
        id: 2,
        artist: 'A Tribe Called Quest',
        album: 'Low End Theory',
        year: '1991',
        genre: 'hip-hop/rap',
        description: 'description',
        price: 60,
        quantity: '3',
        image_path: ['/images/music/ATCQ-low-end-theory-front.jpeg'],
        stripe_product_id: 'prod_NIpzggdcqdBKvZ',
        stripe_price_id: 'price_1MYEJJEDyCcN2QeKS65Bf96D',
      },
      {
        id: 3,
        artist: 'Blu & Exile',
        album: 'Below the Heavens',
        year: '2007',
        genre: 'hip-hop/rap',
        description: 'description',
        price: 47,
        quantity: '5',
        image_path: ['/images/music/blu-exile-below-the-heavens-front.jpeg'],
        stripe_product_id: 'prod_NIq0Tc6Hw60Af1',
        stripe_price_id: 'price_1MYEK3EDyCcN2QeKVV81Ex93',
      },
    ]

    await store.dispatch({ type: 'FETCH_MUSIC_SUCCESS', payload: fakeMusic })

    renderWithContext(<MusicList />)

    //assert
    const artist = await screen.findAllByTestId('artist')
    const AvantdaleBowlingClub = artist[0]
    expect(AvantdaleBowlingClub).toBeInTheDocument()

    expect(await screen.findByText(/A Tribe Called Quest/)).toBeInTheDocument()

    const pictures = await screen.findAllByRole('img')
    expect(pictures).toHaveLength(3)
    expect(pictures[0]).toBeInTheDocument()
  })
})
