import { combineReducers } from 'redux'

import music from './music'
import cart from './cart'
import errorMessage from './errorMessage'
import waiting from './waiting'
import orders from './orders'
import user from './loggedInUser'

export default combineReducers({
  music,
  cart,
  errorMessage,
  waiting,
  orders,
  user,
})
