import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Order from './Order'
// import '@testing-library/jest-dom'

function renderWithContext(element) {
  render(<Provider store={store}>{element}</Provider>)
  return { store }
}

describe('Order is rendered correctly', () => {
  //ARRANGE
  // music for OrderProductItem component
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
  // order for Order component
  const fakeOrder = {
    id: 1,
    createdAt: '11:20:57 am, Tue Feb 14 2023',
    status: 'pending',
    products: [
      {
        id: 2,
        artist: 'A Tribe Called Quest',
        album: 'Low End Theory',
        quantity: 1,
      },
      {
        id: 1,
        artist: 'Avantdale Bowling Club',
        album: 'Trees',
        quantity: 1,
      },
    ],
  }
  test('Order is rendered with correct information', async () => {
    await store.dispatch({ type: 'FETCH_MUSIC_SUCCESS', payload: fakeMusic })

    renderWithContext(<Order order={fakeOrder} />)

    //assert
    const id = await screen.findByTestId('order-id')
    expect(id).toHaveTextContent(1)

    const status = await screen.findByTestId('order-status')
    expect(status).toHaveTextContent('pending')
  })

  test('OrderProducts is rendered with correct information', async () => {
    await store.dispatch({ type: 'FETCH_MUSIC_SUCCESS', payload: fakeMusic })

    renderWithContext(<Order order={fakeOrder} />)

    //assert
    const productItems = await screen.findAllByTestId('order-product-item')
    expect(productItems).toHaveLength(2)

    expect(await screen.findByText(/Low End Theory/)).toBeInTheDocument()

    expect(
      await screen.findByText(/Avantdale Bowling Club/)
    ).toBeInTheDocument()
  })
})
