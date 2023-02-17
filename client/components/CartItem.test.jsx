import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import CartItem from './CartItem'
import MusicList from './MusicList'

function renderWithContext(element) {
  render(<Provider store={store}>{element}</Provider>)
  return { store }
}
describe('Cart Item renders correctly', () => {
  beforeEach(async () => {
    await store.dispatch({ type: 'PLACE_ORDER_SUCCESS', payload: null })
  })

  //mock function for test. Adding to cart sets cart state, however this is not required for below tests.
  // eslint-disable-next-line no-unused-vars
  function setOpenCart(boolean) {
    return null
  }

  //ARRANGE
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
  ]

  const cart = {
    id: 1,
    album: 'Avantdale Bowling Club',
    stripe_price_id: 'price_1MYEIuEDyCcN2QeK4x07Loj3',
    quantity: 1,
  }

  test('cart item info is rendered', async () => {
    await store.dispatch({ type: 'FETCH_MUSIC_SUCCESS', payload: fakeMusic })
    await store.dispatch({ type: 'ADD_TO_CART', payload: cart })

    renderWithContext(<CartItem id={1} />)

    expect(await screen.findByText(/Trees/)).toBeInTheDocument()
  })

  test('add to cart button adds an item to cart', async () => {
    await store.dispatch({ type: 'FETCH_MUSIC_SUCCESS', payload: fakeMusic })
    renderWithContext(<MusicList setOpenCart={setOpenCart} />)
    const addToCartBtn = await screen.getAllByTestId('addToCartBtn')
    fireEvent.click(addToCartBtn[0])

    renderWithContext(<CartItem id={1} />)

    const cartItemAlbum = await screen.getByTestId('cart-item-album')
    expect(cartItemAlbum).toHaveTextContent('Trees')
  })

  test('add multiple of the same item to cart doubles the price and quantity', async () => {
    await store.dispatch({ type: 'FETCH_MUSIC_SUCCESS', payload: fakeMusic })
    renderWithContext(<MusicList setOpenCart={setOpenCart} />)
    const addToCartBtn = await screen.getAllByTestId('addToCartBtn')
    fireEvent.click(addToCartBtn[0])

    fireEvent.click(addToCartBtn[0])

    renderWithContext(<CartItem id={1} />)

    const cartItemPrice = await screen.getByTestId('cart-total-price')
    expect(cartItemPrice).toHaveTextContent('$94')
  })
})
