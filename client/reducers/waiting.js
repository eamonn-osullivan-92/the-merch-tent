import { FETCH_MUSIC_PENDING, FETCH_MUSIC_SUCCESS } from '../actions/music'
import {
  FETCH_ORDERS_PENDING,
  FETCH_ORDERS_SUCCESS,
  PLACE_PENDING,
  PLACE_ORDER_SUCCESS,
} from '../actions/orders'

import { SHOW_ERROR } from '../actions/error'

function waiting(state = false, action) {
  switch (action.type) {
    case FETCH_MUSIC_PENDING:
    case PLACE_PENDING:
      return true

    case FETCH_MUSIC_SUCCESS:
    case PLACE_ORDER_SUCCESS:
    case SHOW_ERROR:
      return false
    case FETCH_ORDERS_PENDING:
      return true

    case FETCH_ORDERS_SUCCESS:
      return false
    default:
      return state
  }
}

export default waiting
