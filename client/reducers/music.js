import { SET_MUSIC, ADD_ALBUM, UPDATE_ALBUM, DEL_ALBUM } from '../actions/music'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_MUSIC:
      return payload
    case ADD_ALBUM:
      return [...state, payload]
    case UPDATE_ALBUM:
      return [...state].map((item) =>
        item.id == payload.id ? (item = payload) : item
      )
    case DEL_ALBUM:
      return [...state].filter((item) => item.id !== payload)
    default:
      return state
  }
}

export default reducer
