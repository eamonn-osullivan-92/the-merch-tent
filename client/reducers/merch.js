import { SET_MERCH, ADD_MERCH, UPDATE_MERCH, DEL_MERCH } from '../actions/merch'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_MERCH:
      return payload
    case ADD_MERCH:
      return [...state, payload]
    case UPDATE_MERCH:
      return [...state].map((item) =>
        item.id == payload.id ? (item = payload) : item
      )
    case DEL_MERCH:
      return [...state].filter((item) => item.id !== payload)
    default:
      return state
  }
}

export default reducer
