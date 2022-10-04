import { SET_MUSIC, ADD_MUSIC, UPDATE_MUSIC, DEL_MUSIC } from '../actions/music'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_MUSIC:
      return payload
    case ADD_MUSIC:
      return [...state, payload]
    case UPDATE_MUSIC:
      return [...state].map((item) =>
        item.id == payload.id ? (item = payload) : item
      )
    case DEL_MUSIC:
      return [...state].filter((item) => item.id !== payload)
    default:
      return state
  }
}

export default reducer
