import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import { loadState, saveState } from './utils'

const persistedState = loadState()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
)

store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
  })
})

export default store
