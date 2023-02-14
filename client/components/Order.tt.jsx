// import React from 'react'
// import { Provider } from 'react-redux'
// import store from '../store'
// import { screen, render } from '@testing-library/react'
// import '@testing-library/jest-dom'
// import Order from './Order'
// // import '@testing-library/jest-dom'

// function renderWithContext(element) {
//   render(<Provider store={store}>{element}</Provider>)
//   return { store }
// }

// describe('App is rendered correctly', () => {
//   test('renders albums from API on load', async () => {
//     //arrange
//     const fakeOrders = [
//       {
//         id: 1,
//         createdAt: '11:20:57 am, Tue Feb 14 2023',
//         status: 'pending',
//         products: [
//           {
//             id: 2,
//             artist: 'A Tribe Called Quest',
//             album: 'Low End Theory',
//             quantity: 1,
//           },
//           {
//             id: 1,
//             artist: 'Avantdale Bowling Club',
//             album: 'Trees',
//             quantity: 1,
//           },
//         ],
//       },
//       {
//         id: 2,
//         createdAt: '11:20:57 am, Tue Feb 14 2023',
//         status: 'confirmed',
//         products: [
//           {
//             id: 20,
//             artist: 'Yard Act',
//             album: 'The Overload',
//             quantity: 1,
//           },
//         ],
//       },
//     ]

//     await store.dispatch({ type: 'FETCH_ORDERS_SUCCESS', payload: fakeOrders })

//     renderWithContext(<Order />)

//     //assert
//     const artist = await screen.findAllByTestId('artist')
//     const AvantdaleBowlingClub = artist[0]
//     expect(AvantdaleBowlingClub).toBeInTheDocument()

//     expect(await screen.findByText(/A Tribe Called Quest/)).toBeInTheDocument()

//     const pictures = await screen.findAllByRole('img')
//     expect(pictures).toHaveLength(3)
//     expect(pictures[0]).toBeInTheDocument()
//   })
// })
