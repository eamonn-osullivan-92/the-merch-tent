import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Orders from './Orders'
// import '@testing-library/jest-dom'

function renderWithContext(element) {
  render(
    <Provider store={store}>
      <Router>{element}</Router>
    </Provider>
  )
  return { store }
}

describe('Orders', () => {
  //arrange
  const fakeOrders = [
    {
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
    },
    {
      id: 2,
      createdAt: '11:20:57 am, Tue Feb 14 2023',
      status: 'confirmed',
      products: [
        {
          id: 20,
          artist: 'Yard Act',
          album: 'The Overload',
          quantity: 1,
        },
      ],
    },
  ]

  test('Renders order list and order product', async () => {
    await store.dispatch({ type: 'FETCH_ORDERS_SUCCESS', payload: fakeOrders })

    renderWithContext(<Orders isLoggedIn={true} />)

    //assert
    const order = await screen.findAllByTestId('order')
    expect(order).toHaveLength(1)

    expect(await screen.findByText(/Yard Act/)).toBeInTheDocument()
  })

  test('pending orders are not displayed', async () => {
    await store.dispatch({ type: 'FETCH_ORDERS_SUCCESS', payload: fakeOrders })

    renderWithContext(<Orders isLoggedIn={true} />)

    //assert
    const pendings = await screen.queryAllByText(/pending/)
    expect(pendings).toHaveLength(0)
  })

  test('pending orders are displayed after clicking the pending order button', async () => {
    //arrange

    await store.dispatch({ type: 'FETCH_ORDERS_SUCCESS', payload: fakeOrders })
    console.log(store.getState())

    renderWithContext(<Orders isLoggedIn={true} />)

    //act
    const showPendingBtn = screen.getByTestId('pendingBtn')
    fireEvent.click(showPendingBtn)
    //assert
    const pendings = await screen.findAllByText(/pending/)
    expect(pendings).toHaveLength(1)
  })
})
