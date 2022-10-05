import { combineReducers } from 'redux'

import merch from './merch'
import music from './music'
import cart from './cart'
import waiting from './waiting'

export default combineReducers({
  merch,
  music,
  cart,
  waiting,
})
