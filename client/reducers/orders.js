import { FETCH_ORDERS_SUCCESS, FETCH_ORDER } from '../actions/orders'

function orders(state = null, action) {
  const { type, payload } = action
  switch (type) {
    case FETCH_ORDERS_SUCCESS:
      return payload
    case FETCH_ORDER: // save prev order in state for viewing
      return payload
    default:
      return state
  }
}

export default orders
