import { FETCH_ORDERS_SUCCESS } from '../actions/orders'

function orders(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case FETCH_ORDERS_SUCCESS:
      return payload
    default:
      return state
  }
}

export default orders
