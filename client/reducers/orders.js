import { FETCH_ORDERS_SUCCESS, PLACE_ORDER_SUCCESS } from '../actions/orders'

function orders(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case FETCH_ORDERS_SUCCESS:
      return payload
    case PLACE_ORDER_SUCCESS: // save prev order in state for viewing
      return payload
    default:
      return state
  }
}

export default orders
