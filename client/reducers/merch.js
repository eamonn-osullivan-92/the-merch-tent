import { SET_MERCH } from '../actions/merch'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_MERCH:
      return payload
    default:
      return state
  }
}

export default reducer
