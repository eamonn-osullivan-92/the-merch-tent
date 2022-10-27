import { postOrder, getOrder } from '../apis/orders'
import { showError } from './error'

export const PLACE_ORDER = 'PLACE_ORDER'
export const PLACE_PENDING = 'PLACE_PENDING'
export const FETCH_ORDERS_PENDING = 'FETCH_ORDERS_PENDING'
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS'
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS'
export const FETCH_ORDER = 'FETCH_ORDER'

export function placePending() {
  return {
    type: PLACE_PENDING,
  }
}

export function placeOrderSuccess() {
  return {
    type: PLACE_ORDER_SUCCESS,
  }
}

export function fetchPending() {
  return {
    type: FETCH_ORDERS_PENDING,
  }
}

export function fetchSuccess(orders) {
  return {
    type: FETCH_ORDERS_SUCCESS,
    payload: orders,
  }
}

export function logPreviousOrder(order) {
  return {
    type: FETCH_ORDER,
    payload: order,
  }
}

// export function fetchOrders() {
//   return async (dispatch) => {
//     dispatch(fetchPending())
//     try {
//       const orders = await getOrders()
//       dispatch(fetchSuccess(orders))
//     } catch (err) {
//       dispatch(showError(err.message))
//     }
//   }
// }

export function placeOrder(orders) {
  return (dispatch) => {
    dispatch(placePending())
    return postOrder(orders)
      .then((id) => {
        dispatch(placeOrderSuccess())
        return getOrder(id)
      })
      .then((order) => {
        console.log(order)
        dispatch(logPreviousOrder(order))
      })
      .catch((err) => {
        console.log(err.message)
        dispatch(showError(err.message))
      })
  }
}
