import { postOrder, getOrder, getOrders } from '../apis/orders'
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

export function fetchOrder(id, token) {
  return async (dispatch) => {
    dispatch(fetchPending())
    try {
      const order = await getOrder(id, token)
      dispatch(fetchSuccess(order))
    } catch (err) {
      dispatch(showError(err.message))
    }
  }
}

export function fetchOrders(token) {
  return async (dispatch) => {
    dispatch(fetchPending())
    try {
      const orders = await getOrders(token)
      dispatch(fetchSuccess(orders))
    } catch (err) {
      dispatch(showError(err.message))
    }
  }
}

// places order, then logs order in the order redux state to be viewed
export function placeOrder(orders, token) {
  return (dispatch) => {
    dispatch(placePending())
    return postOrder(orders, token)
      .then(() => dispatch(placeOrderSuccess()))
      .catch((err) => {
        console.log(err.message)
        dispatch(showError(err.message))
      })
  }
}
