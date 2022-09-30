import { combineReducers } from 'redux'

import * as merch from './merch'
import * as music from './music'

export default combineReducers({
  merch,
  music,
})
